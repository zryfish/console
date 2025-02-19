/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { isEmpty } from 'lodash'

import ContainerPortsCard from 'components/Cards/Containers/Ports'
import ReplicaCard from 'projects/components/Cards/Replica'
import Placement from 'projects/components/Cards/Placement'
import PodsCard from 'clusters/containers/Gateway/Components/Pods'
import PropTypes from 'prop-types'
import styles from './index.scss'

class ResourceStatus extends React.Component {
  static childContextTypes = {
    gatewayName: PropTypes.string,
    gatewayNs: PropTypes.string,
    cluster: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      pods: 0,
    }
  }

  getChildContext() {
    return {
      gatewayName: this.detail.name,
      gatewayNs: this.props.match.params.namespace,
      cluster: this.cluster,
    }
  }

  get module() {
    return this.props.detailStore.module
  }

  get store() {
    return this.props.detailStore
  }

  get detail() {
    return this.store.gateway.data
  }

  get cluster() {
    const { cluster } = this.props.match.params
    const url = this.props.location.pathname

    return url.indexOf('federatedprojects') > -1
      ? localStorage.getItem('federated-cluster')
      : cluster
  }

  get prefix() {
    const { workspace } = this.props.match.params
    return `${workspace ? `/${workspace}` : ''}/clusters/${this.cluster}`
  }

  getGatewayDetail() {
    const { namespace } = this.props.match.params
    this.props.detailStore.getGateway({ cluster: this.cluster, namespace })
  }

  get enabledActions() {
    return globals.app.getActions({
      module: this.module,
      ...this.props.match.params,
      project: this.props.match.params.namespace,
    })
  }

  get volumesTitle() {
    return t('STORAGE_DEVICES')
  }

  get enableScaleReplica() {
    return this.enabledActions.includes('edit') && !this.detail.isFedManaged
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const result = await this.store.getGatewayPods(this.props.match.params)
    this.setState({ pods: result.length })
  }

  handleScale = async newReplicas => {
    const { namespace } = this.props.match.params
    await this.store.scale({ cluster: this.cluster, namespace }, newReplicas)
    this.getGatewayDetail()
    this.fetchData()
  }

  renderPlacement() {
    const { name, namespace } = this.props.match.params
    const { detail } = this.store
    if (detail.isFedManaged) {
      return (
        <Placement
          module={this.store.module}
          name={name}
          namespace={namespace}
        />
      )
    }
    return null
  }

  renderReplicaInfo() {
    const detail = toJS(this.detail)

    return (
      <ReplicaCard
        module={this.module}
        detail={detail}
        onScale={this.handleScale}
        enableScale={this.enableScaleReplica}
      />
    )
  }

  renderContainerPorts() {
    const { ports } = this.detail
    const { isLoading } = this.store.gateway

    if (isEmpty(ports)) return null

    const _ports = ports.map(item => {
      item.containerPort = item.nodePort
      return item
    })

    return <ContainerPortsCard ports={_ports} loading={isLoading} />
  }

  renderPods() {
    const params = { ...this.props.match.params, cluster: this.cluster }
    return (
      <PodsCard
        prefix={this.prefix}
        detail={this.detail}
        store={this.store}
        params={params}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderPlacement()}
        {this.renderReplicaInfo()}
        {this.renderContainerPorts()}
        {this.renderPods()}
      </div>
    )
  }

  render() {
    return <div className={styles.main}>{this.renderContent()}</div>
  }
}

export default inject('detailStore')(observer(ResourceStatus))
export const Component = ResourceStatus

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

module.exports = {
  'Discover branches from repository': '發現存儲庫上的分支',
  'Discover pull requests from origin': '發現原始儲存庫與目標儲存庫相同的 PR',
  'Discover pull requests from forks': '發現 Fork 儲存庫與目標儲存庫相同的 PR',
  'User types that can trigger builds': '可以觸發構建的用戶類型',
  NO_CONCURRENT_BUILD_DESC: '如果勾選此選項，則不能同時運行多個構建。',
  BUILD_PARAMETERS: '參數化構建',
  BUILD_TRIGGER: '構建觸發器',
  BUILD_PERIODICALLY: '定時構建',
  TRIGGER_REMOTE_BUILD: '觸發遠程構建（例如，使用腳本）',
  'Authentication Token': '身份驗證令牌',
  'Use the following URL to remotely triggerworkbench the build':
    '使用以下 URL 遠程觸發構建',
  BEHAVIORAL_STRATEGY: '行為策略',
  SCRIPT_PATH_DESC: '指定 Jenkinsfile 在源代碼倉庫的位置。',
  SCAN_TRIGGER: '倉庫掃描觸發器',
  SCAN_PERIODICALLY: '如果沒有掃描觸發，則定期掃描',
  SCAN_INTERVAL: '掃描時間間隔',
  WEBHOOK_PUSH_URL: 'Webhook 推送 URL',
  BUILD_SETTINGS: '構建設置',
  BRANCH_SETTINGS: ' 分支設置',
  PIPELINE_NAME_DESC: '流水線的名稱，同一個項目内 Pipeline 不能重名。',
  PIPELINE_PARAM_DEFAULT_DESC:
    '指定字段的預設值，您也可以在手動運行流水線前修改預設值。',
  PARAMETER_DESCRIPTION_DESC: '參數的描述。',
  CHOICE_PARAM_OPTION_DESC: '備用選擇，每行一個。第一行的將作為預設選項。',
  'No need': '不需要',
  CODE_REPOSITORY_ADDRESS_DESC: '請使用包含 Jenkinsfile 的倉庫。',
  CODE_REPOSITORY_ADDRESS_EMPTY_TIP:
    'Please enter the address of a code repository.',
  SELECT_CREDENTIAL_DESC:
    '獲取倉庫代碼可能需要憑證, 選擇已有憑證或添加一個新的憑證。',
  'For accessing GitHub': '用於獲取 GitHub',
  BRANCH_COUNT: '分支數量',
  PIPELINE: '流水線',
  PIPELINE_PL: '流水線',
  PIPELINE_LOW: '流水線',
  'Pipeline List': '流水線列表',
  EDIT_PIPELINE: '編輯流水線',
  EDIT_JENKINSFILE: '編輯 Jenkinsfile',
  RUN: '運行',
  RUN_ID: 'Run ID',
  COMMIT_PL: '提交',
  BRANCH_SI: '分支',
  BRANCH_PL: 'Branches',
  CODE_REPOSITORY_BRANCH: '分支',
  LAST_MESSAGE: '最後訊息',
  LAST_MESSAGE_SCAP: 'Last message',
  Duration: '持續時間',
  DURATION: 'Duration',
  DURATION_VALUE: 'Duration: {value}',
  TASK_STATUS: '運行狀態',
  HEALTH: '健康狀態',
  CREDENTIAL_PL: '憑證',
  CREDENTIAL: '憑證',
  CREDENTIAL_LOW: 'credential',
  CREDENTIAL_SI: '憑證',
  CREDENTIALS_MANAGEMENT: '憑證管理',
  'Add Parallel Stage': '添加並行階段',
  'Add Step': '添加步驟',
  'Pipeline Configuration': '編輯流水線',
  VIEW_LOGS: '查看紀錄',
  CODE_REPOSITORY: '代碼倉庫',
  DELETE_OUTDATED_BUILD_RECORDS: '丢棄舊的構建',
  DELETE_OUTDATED_BRANCHES: '丢棄舊的分支',
  BUILD_RECORD_RETENTION_PERIOD_DAYS: '保留構建的天數',
  MAXIMUM_BUILD_RECORDS: '保留構建的最大個數',
  BRANCH_RETENTION_PERIOD_DAYS: '保留分支的天數',
  MAXIMUM_BRANCHES: '保留分支的最大個數',
  BUILD_RECORD_RETENTION_PERIOD_DAYS_DESC:
    '達到保留天數的構建將被刪除，默認值為 7。',
  NO_CONCURRENT_BUILDS: '不允許並發構建',
  PIPELINE_NAME_TIP: '請輸入流水線名稱。',
  CREATE_PIPELINE: '創建流水線',
  MAXIMUM_BUILD_RECORDS_DESC:
    '如果構建超過保留的最大數量，將丟棄舊的構建。默認值為 10。',
  SCAN_REPOSITORY: '掃描遠程分支',
  'Press enter for the next': '按Enter鍵以進行下一步',
  'Wrong Token': 'Token 錯誤',
  SELECT_CODE_REPOSITORY: '選擇代碼倉庫',
  CODE_REPOSITORY_ADDRESS: '倉庫 URL',
  REPOSITORY_NAME: '倉庫名稱',
  REPOSITORY_NAME_EMPTY_TIP: 'Please enter the name of a repository name.',
  'get token': '獲取 Token',
  PIPELINE_DESC: `流水線是一組可擴展的工具，可以通過組合它們來實現持續集成和持續交付。
    您可以在此頁面創建並管理流水線。`,
  CREATE_CREDENTIAL: '創建憑證',
  CREDENTIAL_NAME: '憑證 ID',
  username_password: '帳戶憑證',
  CREDENTIAL_TYPE_USERNAME_PASSWORD: 'Username and password',
  CREDENTIAL_TYPE_SSH: 'SSH key',
  CREDENTIAL_TYPE_SECRET_TEXT: 'Access token',
  CREDENTIAL_TYPE_KUBECONFIG: 'kubeconfig',
  login_Plateform: '登入平台',
  SCRIPT_PATH: '腳本路徑',
  WEBHOOK_PUSH: 'Webhook 推送',
  DISCOVER_TAG_BRANCHES: '發現 Tag 分支',
  DISCOVER_BRANCHES: '發現分支',
  DISCOVER_PR_FROM_ORIGIN: '以原倉庫中發現 PR',
  DISCOVER_PR_FROM_FORKS: '以 Fork 倉庫中發現 PR',
  PULL_STRATEGY: '拉取策略',
  TRUSTED_USERS: '可信任用戶',
  ADD_ACTION: '添加操作',
  ALL_BRANCHES: '所有分支',
  ENABLE_TAG_BRANCH_DISCOVERY: '啟用發現 Tag 分支',
  DISABLE_TAG_BRANCH_DISCOVERY: '停用發現 Tag 分支',
  EXCLUDE_PR_BRANCHES: '排除作為 PR 提交的分支',
  ONLY_PR_BRANCHES: '只有被提交為 PR 的分支',
  OPTIONS_PR_PARAMS_1: 'PR 與目標分支合併後的源代碼版本',
  OPTIONS_PR_PARAMS_2: 'PR 本身的源代碼版本',
  OPTIONS_PR_PARAMS_3: `當 PR 被發現時會創建兩個流水線，
    一個流水線使用 PR 本身的源代碼版本，
    一個流水線使用 PR 與目標分支合併後的源代碼版本`,
  USERS_WITH_PERMISSION: '管理員或有編輯權限的用戶',
  Normal: '通用',
  'Run Pipeline': '運行流水線',
  ARTIFACT_PL: '成品',
  artifacts: '成品',
  Queue: '列隊中',
  Recipient: '收件人',
  Sender: '寄件人',
  CC: '副本',
  Subject: '主題',
  bcc: '密件副本',
  remote: '倉庫地址',
  'Print message': '打印訊息',
  CREDENTIALS_DESC: `憑證是包含了一些敏感數據的對象，如用戶名密碼，SSH 密鑰和 Token 等,
    用於在 Pipeline 運行時, 為拉取代碼、push/pull 鏡像、SSH 執行腳本等過程提供認證`,
  'Credential Id': '憑證 ID',
  NO_ARTIFACT_FOUND_TIP: '沒有成品紀錄',
  SELECT_THIS_REPOSITORY: '選擇此倉庫',
  SCAN_REPO_SUCCESS: '掃描倉庫觸發成功',
  PIPELINE_RUN_LOGS: '流水線運行紀錄',
  DOWNLOAD_LOGS: '下载紀錄',
  'Time Used': '用時',
  NOT_RUNNING: '未運行',
  NOT_BUILT: 'Not built',
  'Not Build': '未執行',
  Failure: '失敗',
  COMMIT: '提交',
  COMMIT_ID: 'Commit ID',
  'Please input images name': '請輸入鏡像名稱',
  'defaultValue -1 means not to discard': '預設值 -1: 不會丢棄紀錄',
  NO_STATUS: '沒有狀態',
  SKIPPED: '已跳過',
  SUB_HEALTHY: '亞健康',
  STOP_PIPELINE_SUCCESS: '任務已停止，狀態稍後更新',
  REPOSITORY_SCAN_LOGS: '掃描倉庫紀錄',
  VIEW_SCAN_LOGS: 'View Scan Logs',
  'Started By': '實施者',
  RESCAN: '重新掃描',
  LOGS_OBTAINED_SUCCESSFULLY: '掃描紀錄成功。',
  'Configuration error': '配置資訊錯誤',
  'branch success': '分支成功',
  BUILD_PARAMETERS_TIP: `參數化構建過程可以在進行構建時傳入一個或多個參數。
  例如：如果您有一個進行發佈軟體的流水線，並且希望一起上傳發行說明，這可以通過在此處添加文本參數來完成。
  每個參數都有一個 Name 和某種 Value，Value 的值取決於參數類型。在流水線當中可以使用
    params.Name
  或 Name 訪問這些值。請註意，此處定義的每個參數應具有唯一的名稱。
  當參數化項目時，構建會被替換為參數化構建，並將提示用戶為每個定義好的參數輸入值。
  如果沒有輸入值，則構建以每個參數的預設值進行。
  如果項目的構建是自動啟動，例如，由定時觸發器啟動，這時將使用參數的預設值進行觸發。`,
  AUTHENTICATION_TOKEN_TIP: `如果需要通過訪問預定義 URL 開觸發構建，請啟用此選項。
    此功能的的一個典型用法是通過源代碼管理系統的鉤子腳本來進行觸發。
    您需要提供一個字符串形式的授權令牌，以便只有擁有授權令牌的人才能觸發遠程構建。`,
  DELETE_OUTDATED_BUILD_RECORDS_TIP:
    '這將確定何時應丢棄流水線的構建紀錄。構建紀錄包括控制台輸出，存檔製品以及與特定構建相關的其他元數據。\n' +
    '保留較少的構建可以節省 Jenkins 所使用的硬碟空間。\n' +
    'KubeSphere 提供了兩個選項來確定應何時丢棄舊的構建：\n' +
    '1. 保留構建的天數：如果構建達到一定的天數，則丢棄構建。\n' +
    '2. 保留構建的最大個數：至多保留一定數量的構建，並丟棄最舊的構建。\n' +
    '這兩個選項可以同時對構建進行作用，如果超出任一限制，則將丢棄超出該限制的任何構建。',
  DELETE_OUTDATED_BRANCHES_TIP: `這將确定何時應丢棄分支以及分支下的所有構建紀錄。構建紀錄包括控制台輸出、
    存檔製品以及與特定構建相關的其他元數據。保留較少的構建可以節省 Jenkins 所使用的硬碟空間。
    KubeSphere 提供了兩個選項来確定應何時丢棄舊的分支：1. 保留分支的天數：如果分支達到一定的天數，則丢棄分支。
    2. 保留分支的最大個數：至多保留一定數量的分支，並丟棄最舊的分支。這兩個選項可以同時對分支進行作用，
    如果超出任一限制，則將丢棄超出該限制的任何分支。`,
  BUILD_PERIODICALLY_TIP: '提供類似 cron 的功能來定期執行此流水線。',
  BRANCH_RETENTION_PERIOD_DAYS_DESC: '達到保留天數的分支將被刪除，默認值為 7。',
  MAXIMUM_BRANCHES_DESC:
    '如果分支數量超過保留的最大數量，將丟棄舊的分支。默認值為 5。',
  CRON_TIP:
    '該字段遵循 cron 的語法 (略有不同)。具体來說，每行包含由製表符或空格分隔的 5 個字段。\n' +
    '分鐘: 一個小時中的第幾分鐘 (0-59)\n' +
    '小時: 一天中的第幾小時 (0-23)\n' +
    ' 月份的第幾天:  一個月份中的第幾天 (1-31)\n' +
    ' 月份: 第幾個月份 (1-12)\n' +
    '星期的第幾天 一個星期的第幾天 (0-7)，0 和 7 都是星期天。',
  'Edit Config': '編輯配置',
  PIPELINES_BASEINFO_DESC: '請輸入流水線的基本資訊',
  PIPELINE_ADVANCE_SETTINGS_DESC: '	為流水線配置複雜行為策略（可選）',
  CREDENTIALS_CREATE_DESC: '創建用於 DevOps 項目中的憑證',
  WAITING_FOR_INPUT: '等待輸入',
  BREAK: '終止',
  PROCEED: '繼續',
  'credential Id': '憑證 ID',
  Branches: '分支',
  'Clean when aborted': '清理失敗不影響運行',
  'Not fail build': '失敗不影響運行',
  submitter: '審核者',
  submitterParameter: '提交參數',
  PRIVATE_KEY: '私鑰',
  PASSPHRASE: '密碼短語',
  'This name has been used.': '此名稱已被使用',
  'Automatically generated by GitHub': '由 GitHub 自動生成',
  SET_PARAMETERS: '輸入參數',
  "Missing one or more required properties: 'name'": 'name 不能為空',
  'Please add at least one step.': '至少添加一個步驟',
  'Please input the credential name.': '請輸入憑證名稱',
  SCM: '代碼倉庫',
  NO_COMMIT_FOUND: '沒有提交紀錄',
  'Clean Workspace': '清理企業空間',
  'Save Artifact': '保存成品',
  'Change Current Directory': '更改目前目錄',
  CHECKOUT_DESC: '拉取代碼，常用於拉取非 Git 代碼，例如 SVN 等等',
  'Send messages by email': '可以通過郵件發送訊息',
  'Send messages in the build': '可以在構建中發送訊息',
  'Shell commands can be executed in the container':
    '可以在容器中執行 shell 命令',
  'You can execute shell commands or windows batch commands in the build.':
    '可以在構建中執行 shell 命令或者 windows 的 batch 命令',
  'Pull code by SVN': '通過 SVN 拉取代碼',
  'Pull code by Git': '通過 Git 拉取代碼',
  'Add nesting steps': '添加嵌套步驟',
  'instance failed to match at least one schema': '至少需要一個嵌套步驟',
  'Load credentials into environment variables': '加載憑證到還境變量',
  'Password Variable': '密碼變量',
  'Username Variable': '用戶名變量',
  PRIVATE_IMAGE_DESC:
    '要從私有鏡像倉庫部署，需要先創建鏡像倉庫，然後拉取鏡像。',
  AGENT_TYPE_DESC: `Agent 部分指定整個 Pipeline 或特定階段將在 Jenkins 還境中執行的位置，
    具體取決於該 agent 部分的放置位置。該部分必須在流水線塊内的頂層定義，但 stage 級使用是可選的。`,
  AUTHENTICATION_TOKEN_DESC: `使用以下 URL 遠程觸發構建：
    JENKINS_URL / job / JOB_NAME / build？token =TOKEN_NAME
    或者/ buildWithParameters？token = TOKEN_NAME 可選擇附加＆cause =原因提供將包含在紀錄的構建原因中的文本。`,
  SELECT_CODE_REPO_DESC: '請選擇一個代碼倉庫作為流水線的代碼來源。',
  NO_PIPELINE_CONFIG_FILE_TIP: '未找到流水線配置文件',
  ACTIVITY_EMPTY_TIP: '目前 Pipeline 還沒有運行',
  PIPELINE_NO_CONFIG: '目前 Pipeline 中並沒有找到相關配置文件',
  INVALID_JENKINSFILE_TIP:
    '目前 Jenkinsfile 不是標準的聲明式 Jenkinsfile，無法進行圖形化顯示',
  PIPELINE_SCHEDULE_DESC: `語法請參照
    <a href="//jenkins.io/doc/book/pipeline/syntax/#cron-syntax" target="_blank">CRON</a>。`,
  'passphrase Variable': '密碼變量',
  'show yaml editor': '用 YAML 編輯器編輯',
  'Enable Variable Substitution in Config': '在配置中啟用變量替換',
  'Kubernetes Secrets': 'Kubernetes 密鑰',
  'Kubernetes Namespace for Secret': 'Kubernetes 密鑰命名空間',
  'Docker Container Registry Credentials': 'Docker 容器倉庫憑證',
  'Docker Registry URL': 'Docker 倉庫 URL',
  'Registry Credentials': '倉庫憑證',
  'Show Advanced Settings': '顯示高级設置',
  'Config File Path': '配置文件路徑',
  'Add another credential': '增加一個憑證',
  'Deploy resources to the Kubernetes cluster': '將資源部署到 kubernetes 集群',
  REMOTE_REPOSITORY_URL: '遠程倉庫地址',
  BRANCH_INCLUDED: '包括分支',
  BRANCH_EXCLUDED: '排除分支',
  KUBECONFIG_CONTENT_DESC: '預設內容為目前用户的 kubeconfig。',
  'The label on which to run the Pipeline or individual stage':
    '流水線或單個階段的標籤',
  SINGLE_SVN: '單分支 SVN',
  SVN: 'SVN',
  WEBHOOK_PUSH_DESC: '推送訊息到此 URL 以觸發倉庫的重新索引。',
  'single Svn': '單分支 SVN',
  WEBHOOK_DESC: 'Configure webhook notifications by setting a webhook server.',
  TIME_TRIGGER_DESC: `某些類型的項目會在收到外部推送消息會自動重新索引。但在某些情况下，訊息通知可能失敗。
    這個選項將檢查指定時間間隔内是否執行了索引，如果沒有則觸發索引。`,
  'Are you sure to close this pipeline Editor ?': '確定關閉流水線編輯？',
  CLOSE_JENKINSFILE_EDITOR_TIP: '確定關閉 Jenkinsfile 編輯器？',
  KUBERNETES_DEPLOY_DESC: `在 kubernetes 集群中進行部署，在持續集成/持續部署的環境當中，
    只有那些需要定期更新的資源才應該放到部署步驟當中，所以此步驟大多數時間都在處理部署這類資源.`,
  KUBERNETES_DEPLOY_DESC_MORE: `<br />
    <label>該步驟主要有以下特點:</label>
    <li>無需 kubectl 的情況下實現部署</li>
    <li>Jenkinsfile 中的變量替換，可以進行動態部署。</li>
    <li>支持從私有鏡像倉庫拉取 Docker 鏡像</li>
    <label>目前該步驟支持以下資源:</label>
    <br />
    <li>配置</li>
    <li>密鑰</li>
    <li>部署</li>
    <li>守護進程集</li>
    <li>應用路由</li>
    <li>名稱空間</li>
    <li>任務</li>
    <li>服務</li>
    <li>Replica Set</li>
    <li>
      Replication
      Controller (不支持滾動更新，如果要使用滾動更新請使用部署)
    </li>`,
  'username or group name, multiple values ​​used, separated':
    '用戶名或組名，多個值使用英文逗號分隔',
  'key File Variable': '私鑰變量',
  'Text Variable': '文本變量',
  'Kubeconfig Variable': 'kubeconfig 變量',
  PIPELINE_PREPARE_DESC: '正在準備環境，稍後有圖形化顯示',
  PARAMS_DESC:
    '下列參數是根據流水線設置或 Jenkinsfile 中的 parameters 部分生成的字段，請根據運行需求輸入。',
  'Chinese is not allowed in the pipeline configuration':
    '配置中不允許含有中文',
  'Edit Credential': '編輯憑證',
  EDIT_CREDENTIAL_DESC: '下列表單不會顯示原有憑證資訊，重新輸入會將其覆蓋。',
  PASSWORD_TOKEN: '令牌/密碼',
  "Sorry, you don't have the permission to do this.":
    '抱歉，您沒有權限進行此操作',
  'Drag and drop tasks to sort': '可以拖放任務進行排序',
  Unnamed: '未命名',
  TASK_FAILED_NOT_OPERATIONAL: '任務已失敗，不可操作',
  CANCELLED_IN_REVIEW: '已在審核中取消',
  'Executes the code inside the block with a determined time out limit.':
    '使用確定的超時限制執行塊内的代碼.',
  'Timeout after no activity in logs for this block':
    '此區塊代碼無紀錄輸出後開始計算超時',
  'Absolute duration': '代碼塊所用的絕對時間',
  pipeline_conditions: '條件',
  'The conditions required to implement the current phase (optional).':
    '執行目前階段段所需要滿足的條件 （可選）',
  'Add conditions': '添加條件',
  'Add nesting conditions': '添加嵌套條件',
  'Current branch name must match the input value': '目前分支名稱需符合輸入值',
  'The environment variable entered before running the pipeline is match the current value.':
    '運行流水線前輸入的環境變量與目前值一致',
  'Enter an expression': '輸入一個表達式',
  'Negative prefix': '否定前缀',
  'Internal nesting conditions must be matched': '内部嵌套的條件需全部滿足',
  'Internal nested conditions only need to satisfy one':
    '内部嵌套的條件只需符合一個',
  'Environment name': '環境變量名稱',
  expression: '表達式',
  PARAMS_STRING: '字符串參數 (String) ',
  PARAMS_TEXT: '文本 (Text) ',
  PARAMS_BOOLEAN: '布林值 (Boolean) ',
  PARAMS_CHOICE: '選項參數 (Choice) ',
  PARAMS_PASSWORD: '密碼參數 (Password) ',
  PARAMS_TEXT_TCAP: '字符串參數 (String) ',
  critical: '嚴重',
  blocker: '阻斷',
  BLOCKER: 'Blocker',
  CRITICAL: 'Critical',
  MAJOR: 'Major',
  MINOR: 'Minor',
  NOTICE: 'Notice',
  major: '重要',
  minor: '次要',
  info: '提示',
  ISSUE_PL: '問題',
  'Code Quality Check': '代碼質量檢查',
  CODE_LINE_COUNT: '行數',
  VULNERABILITY_PL: '代碼漏洞',
  CODE_SMELL_PL: '容易出錯',
  COVERAGE: '覆蓋率',
  "Didn't pass": '未通過',
  TEST_RESULTS: '檢測結果',
  CODE_CHECK: '代碼質量',
  LINE_VALUE: '行：{value}',
  DISPLAY_ALL: '顯示全部',
  CODE_SMELL: '容易出錯',
  BUG: 'Bug',
  BUG_PL: 'Bugs',
  VULNERABILITY: '漏洞',
  SECURITY_HOTSPOT: '安全',
  Line: '行',
  DISPLAY_ONLY_LAST_TEN: '僅顯示最近 10 條',
  abortPipeline: '檢查結果是否影響後續任務',
  waitForQualityGate: '代碼質量檢查(SonarQube)',
  mail: '郵件',
  echo: '打印訊息',
  dir: '切換目錄',
  withCredentials: '添加憑證',
  container: '指定容器',
  archiveArtifacts: '保存成品',
  input: '審核',
  timeout: '超時',
  Timeout: '超時',
  TIMEOUT_VALUE: '超時：{value}',
  withSonarQubeEnv: 'Sonarqube 配置',
  sh: 'shell 腳本',
  CLONE_SETTINGS: 'Git 克隆參數',
  CLONE_DEPTH: '克隆深度',
  REGEX: '過濾規則',
  FILTER_BY_REGEX: '根據名稱過濾（正則匹配）',
  FILTER_BY_REGEX_DESC:
    '啟用正則表達式，將忽略與提供的正則表達式不匹配的名稱（包括分支與PR等)',
  ENABLE_SHALLOW_CLONE: '開啟淺克隆',
  CLONE_TIMEOUT_PERIOD: '流水線克隆超時時間（單位：分鐘）',
  'config name': '配置名稱',
  waitForQualityGate_desc:
    '代碼質量檢查標準來源於SonarQube的 Quality Gate (質量閥)，如果需要自定義檢查標準請前往 SonarQube 設置',
  'Inspection results do not affect subsequent tasks': '檢查結果不影響後續任務',
  'Start the follow-up task after the inspection': '檢查通過後開始後續任務',
  'Load the sonarqube configuration provided by Jenkins into the Pipeline.':
    '將 Jenkins 中的 sonarqube 配置加載到流水線中',
  PIPELINE_CREATE_DESC: '初始化完成後將開始 Pipeline 的任務執行',
  INITIALIZING_PIPELINE: 'Pipeline 初始化中',
  INITIALIZING_PIPELINE_DESC:
    'Please wait until the pipeline initialization is complete.',
  'Specify a container to add nested tasks to execute inside the container':
    '指定容器，可添加嵌套任務在容器内執行',
  INPUT_DESC:
    '流水線運行至此任務將會暫停，創建者和被@的人可以選擇繼續或終止流水線',
  INPUT_MESSAGE_DESC: '流水線運行狀態中將會顯示此訊息',
  '@somebody to help review': '可以@某人來幫助審核',
  REVIEW_DESC: '流水線運行至此任務將會暫停，審核後可選擇繼續或终止',
  withSonarQubeEnv_DESC: '快速的定位代碼中潛在的或者明顯的錯誤',
  waitForQualityGate_DESC: '在執行代碼分析後執行',
  script_DESC: '執行groovy腳本',
  QUEUED: '列隊中',
  ABORTED: 'Aborted',
  UNSTABLE: 'Unstable',
  PIPELINE_QUEUED_TITLE: 'Pipeline 即將進行初始化',
  PIPELINE_QUEUED_DESC:
    '您需要等待 agent 啟動並執行流水線（注：如 agent 長時間沒有啟動請檢查 agent 配置和集群資源情況）',
  pipeline_owner: 'DevOps 项目的所有者，可以進行 DevOps 项目的所有操作',
  pipeline_maintainer:
    'DevOps 项目的主要維護者，可以進行項目内的憑證配置、Pipeline 配置等操作',
  pipeline_developer: 'DevOps 项目的開發者，可以進行 Pipeline 的觸發以及查看',
  pipeline_reporter: 'DevOps 项目的觀察者，可以查看 Pipeline 的運行情况',
  'sonar is the default config name.': '預設配置名稱是 sonar',
  credentialsId: '憑證 ID',
  enableConfigSubstitution: '啟用變量替換',
  configs: '配置',
  secretNamespace: '密鑰命名空間',
  secretName: '秘鑰名稱',
  dockerCredentials: 'Docker 容器倉庫憑證',
  passwordVariable: '密碼變量',
  usernameVariable: '用戶名變量',
  keyFileVariable: '私鑰變量',
  passphraseVariable: '密碼變量',
  NO_BRANCH_FOUND_TIP: '未發現任何分支',
  LoadPrevData_Desc: '檢測到此流水線上次未編輯成功，是否加載上次數據繼續編輯？',
  Continue: '繼續編輯',
  Discard: '忽略',
  'Jenkinsfile syntax error, message': 'Jenkinsfile 語法錯誤，訊息',
  PATTERN_PIPELINE_NAME_VALID_NAME_TIP:
    '名稱不合法 （僅支持大小寫字母、數字、_、-）',
  INCORRECT_GITHUB_TOKEN_DESC: `Token 錯誤
  <a
    class="float-right"
    href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
    target="_blank"
  >
    重新獲取 Token
  </a>`,
  GET_GITHUB_TOKEN_DESC: `用於獲取 GitHub 代碼倉庫
  <a
    class="float-right"
    href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
    target="_blank"
  >
    獲取 Token
  </a>`,
  BITBUCKET_SERVER_CREDENTIAL_EMPTY: '請輸入 BitBucket 帳號資訊。',
  GITHUB_CREDENTIAL_EMPTY: '請輸入 GitHub 訪問令牌。',
  BITBUCKET_ADDRESS_EMPTY_TIP:
    'Please enter the address of a Bitbucket server.',
  BITBUCKET_ADDRESS_INVALID_TIP: 'Invalid Bitbucket server address.',
  'pipeline syntax error': '流水線語法錯誤',
  PIPELINES_FOOTER_SEE_MORE: '前往分支詳情頁查看更多 →',
  PIPELINE_CRON_DESC: '上次運行時間 {lastTime}，下次運行時間 {nextTime}。',
  'not support edit nested stage': '暫不支持編輯嵌套階段',
  JENKINS_LINS_ERROR: '第 {line} 行有語法錯誤',
  'Delete all resources of the deployment file': '刪除部署文件所對應的所有資源',
  PIPELINE_EVENT_TRIGGER: '流水線事件觸發器',
  WHEN_CREATE_PIPELINE: '創建流水線',
  WHEN_DELETE_PIPELINE: '當刪除流水線',
  WHEN_DELETE_PIPELINE_DESC:
    '當有流水線被刪除時，將自動觸發指定流水線中的任務。',
  WHEN_CREATE_PIPELINE_DESC:
    '當創建新的流水線時，將自動觸發指定流水線中的任務。',
  SELECT_PIPELINE_SCAP: '選擇一個流水線。',
  timer: '定時器',
  STARTED_BY_NAME: '由{name}觸發掃描',
  CREDENTIAL_NAME_EXIST_DESC: '憑證 ID 已存在。',
  'Invalid credential ID': '憑證 ID 格式不合法',
  CI: '持續集成 (CI)',
  CI_DESC:
    '持續集成（CI）是在源代碼變更後自動檢測、拉取、構建和（在大多數情況下）進行單元測試的過程。 ',
  CICD: '持續集成&交付 (CI/CD)',
  CICD_DESC:
    '持續部署（CD）是指能夠自動提供持續交付管道中發布版本給最終用戶使用的想法。根據用戶的安裝方式，在雲環境中自動部署、app 升級（如手機上的應用程序）、更新網站或只更新可用版本列表。 ',
  CUSTOM_PIPELIEN: '自定義流水線',
  CUSTOM_PIPELIEN_DESC: '您可以選擇您需要的任務自定義流水線的工作內容',
  COPY_PIPELINE: '複製流水線',
  PIPELINE_RUN_START_SI: 'Starts to run the pipeline...',
  PIPELINE_RUN_START_PL: 'Starts to run the pipelines...',
  BATCH_RUN_SUCCESS_SI: 'The pipeline was run successfully.',
  BATCH_RUN_SUCCESS_PL: 'The pipelines were run successfully.',
  'Batch Run Fail': '批量運行失敗',
  'Run Start': '運行開始',
  GITLAB_SERVER_ADDRESS: 'Gitlab 服務',
  GITLAB_SERVER_EMPTY_TIP: 'Please enter the address of a GitLab server.',
  PROJECT_GROUP_OWNER: 'GitLab 項目所屬組',
  PROJECT_GROUP_OWNER_EMPTY_TIP:
    'Please enter the name of a GitLab project group or project owner.',
  BITBUCKET_SERVER_ADDRESS: 'Bitbucket Server Address',
  BITBUCKET_SERVER_EMPTY_TIP: 'Please enter the address of a Bitbucket server.',
  CREATE_PIPELINE_DESC: '使用流水線進行構建，測試和部署',
  'Choose a Pipeline Template': '選擇流水線模板',
  BATCH_RUN_UNSUPPORTED_DESC: '多分支流水線不支持批量運行。',
  SYNC_STATUS: '同步狀態',

  // Pipeline List Page
  PULL_REQUEST_PL: '拉取請求',
  PULL_REQUEST_COUNT: 'Pull Requests',
  HEALTHY: '健康',

  // Pipeline Creation Page
  DEVOPS_PROJECT_DESC:
    'DevOps 项目用於對資源進行分組管理以及控製不同用戶的資源管理權限。',
  PIPELINE_CREATE_DEVOPS_PROJECT_DESC:
    'Select the DevOps project to which the pipeline belongs.',
  CODE_REPOSITORY_OPTIONAL: '代碼倉庫（可選）',
  OPTIONS: '備用選項',
}

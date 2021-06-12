(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{450:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[t._v("#")]),t._v(" 使用限制")]),t._v(" "),s("p",[t._v("TH-1A 系统上的作业管理系统"),s("strong",[t._v("以计算结点作")]),t._v("为并行作业的资源分配单位，实现并行作业的调度运行。")]),t._v(" "),s("p",[t._v("在 TH-1A 系统中，所有在计算结点中运行的串行或并行应用程序，都必须通过资源管理系统来提交运行。资源管理系统首先将用户提交的\n应用程序构造成作业进行排队处理，然后根据 TH-1A 系统的实时运行资源状态，决定何时以及在哪些计算结点中加载应用程序的运行，不同的应用程序之间不存在\n资源的竞争冲突，用户可以通过作业管理系统来监控应用程序的运行。")]),t._v(" "),s("p",[t._v("但为了保证系统资源的高效使用，用户请求的快速响应，系统的稳定性，在系统中做出了相应的使用限制，相关限制如下：")]),t._v(" "),s("h2",{attrs:{id:"计算分区限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算分区限制"}},[t._v("#")]),t._v(" 计算分区限制")]),t._v(" "),s("p",[t._v("目前 TH-1A 系统，根据用户所在的共享存储不同以及权限不同，能够使用的计算分区也不相同，具体如下表所示：")]),t._v(" "),s("p",[t._v("通用分区："),s("code",[t._v("debug")]),t._v("分区，用于用户调试，最多使用 2个节点，24 CPU 核，运行 30 分钟。")]),t._v(" "),s("p",[t._v("专有分区：")]),t._v(" "),s("p",[t._v("表 用户分区限制")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("分区名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("分区含义")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("运行时间(h)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("使用权限")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TH_SR/TH_SR1/TH_SR2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("包机时用户分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TH_NET/TH_NET1/TH_NET2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("包规模普通用户分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2天")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TH_NEW/TH_NEW1/TH_NEW2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("包规模长队列用户分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("10天")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TH_NEW/TH_NEW1/TH_NEW2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("48GB内存分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gpu_test")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("GPU分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2天")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("其他分区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户专有分求生")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由账号权限决定")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("用户可以使用"),s("code",[t._v("yhi用户可以使用")]),t._v("yhi -l"),s("code",[t._v("或")]),t._v("yhcontrol show partition partition_name`命令，看到相应的分区限制信息。")])]),t._v(" "),s("p",[t._v("若用户使用包机时分区（如 TH_SR, TH_SR1, TH_SR2），建议在提交作业时"),s("code",[t._v("--time")]),t._v("选项，以限制作业运行的最长时间为指定时间，避免因作业错误计算或\n长期无人查看导致机时浪费的情况。")]),t._v(" "),s("p",[t._v("TH_BM 分区为 48GB 大内存分区，有需要的用户请跟我们应用部联系。")]),t._v(" "),s("p",[t._v("所有分区均可以设定相应允许的用户队列，中心根据用户的不同分类，划分不同的资源，您如果看不到某些分区，是因为您不具备相应的资源使用权限。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[t._v("由于大型集群系统具备一定故障率，TH-1A 系统系统十分庞大，为了保证系统稳定性，分区中有限定任务执行时间的限制，因此建议用户为程序设立“断\n点”从而保证任务由于意外中断后，可以继续运算。")]),t._v(" "),s("li",[t._v("debug 是用户调试分区，每个用户都可以使用最大 2 个结点 24 核的资源，作业时间限制为 30 分钟。")])])]),t._v(" "),s("h2",{attrs:{id:"用户权限限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户权限限制"}},[t._v("#")]),t._v(" 用户权限限制")]),t._v(" "),s("p",[t._v("除了上述的分区限制，目前还根据用户的申请情况，针对用户做了一定的限制，"),s("strong",[t._v("该限制主要基于用户和中心签订合同的规模")]),t._v("。")]),t._v(" "),s("p",[t._v("包括：最多可以使用的结点数、最多可以使用的核数、单个任务最多可以使用的结点数、单个任务最多可以使用的核数等。")]),t._v(" "),s("p",[t._v("通过命令"),s("code",[t._v("yhacctmgr list association")]),t._v("可查看自己账号的具体权限设置。用户只有查看自己账号的权限，无查询其他账号的权限。")]),t._v(" "),s("p",[t._v("用户在使用过程中，如果有超出自己合同范围内的计算规模的计算需求，请基于自己的需求，向中心提出申请，中心会根据用户需要审查后，进行一定的修改。")]),t._v(" "),s("p",[t._v("为了保证系统和用户数据的安全，目前普通用户不能在没有申请资源时，就ssh 链接到计算结点，只有分配了相应的计算结点资源后，才能 ssh 到指定计算结点。")]),t._v(" "),s("h2",{attrs:{id:"磁盘配额限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘配额限制"}},[t._v("#")]),t._v(" 磁盘配额限制")]),t._v(" "),s("p",[t._v("为了合理利用有限的存储资源，目前中心对用户默认进行存储软限制 500G，存储硬限制 1T，文件数软限制 100 万，文件数硬限制 200 万的磁盘配额限制。")]),t._v(" "),s("h3",{attrs:{id:"登录后显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录后显示"}},[t._v("#")]),t._v(" 登录后显示")]),t._v(" "),s("p",[t._v("登陆系统后，通常就会显示该用户所属group（即用户组）的存储情况：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Disk quotas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" group zhenggang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gid "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n     Filesystem    used    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("  limit   grace    files      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("   limit   grace\n          /vol-th  123G     500G    1T       -       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("      -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("center",[t._v("表1 磁盘配额各关键词说明 ")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("关键词")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Filesystem")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户所在的共享分布式存储")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("used")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户目前已经使用的存储（单位KB）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("quota")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("存储软限制（单位KB）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("limit")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("存储硬限制（单位KB）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("grace")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("存储状态")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("files")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户已有的文件数量（单位:个）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("quota")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件数量软限制（单位:个）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("limit")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件数量硬限制（单位:个）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("grace")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件数量状态")])])])]),t._v(" "),s("h3",{attrs:{id:"使用命令查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用命令查询"}},[t._v("#")]),t._v(" 使用命令查询")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("lfs "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v(" -g "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F / "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{print "/"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询用户组")]),t._v("\nlfs "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v(" -u "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F / "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{print "/"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询用户")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"详细说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细说明"}},[t._v("#")]),t._v(" 详细说明")]),t._v(" "),s("p",[t._v("为了合理利用有限的存储资源，目前中心对用户默认进行存储软限制"),s("code",[t._v("500G")]),t._v("，存储硬限制"),s("code",[t._v("1T")]),t._v("，文件数软限制"),s("code",[t._v("100万")]),t._v("，文件数硬限制"),s("code",[t._v("200万")]),t._v("的磁盘配额限制。")]),t._v(" "),s("p",[t._v("1）用户使用存储低于500G时，存储状态正常；")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Disk quotas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" group zhenggang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gid "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n     Filesystem    used    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("  limit   grace    files      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("   limit   grace\n          /vol-th  123G     500G    1T       -       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("       -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("2）当用户使用存储介于"),s("code",[t._v("500G")]),t._v("和"),s("code",[t._v("1T")]),t._v("之间时，used参数对应的数字带有“*”表示用户配额异常，“6d23h59m57s”表示倒计时，如果用户在倒计时结束前将使用存储清理到"),s("code",[t._v("500G")]),t._v("以下，则存储状态恢复正常。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Disk quotas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" group zhenggang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gid "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n     Filesystem    used     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("  limit          grace    files      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("   limit  grace\n          /vol-th  768G*     500G    1T     6d23h59m57s    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("      -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("3）如果在规定时间，否则用户的数据量超出软限制且超出倒计时，则无法使用了。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Disk quotas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" group zhenggang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gid "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n     Filesystem    used     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("  limit   grace    files     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("    limit  grace\n          /vol-th  768G*     500G    1T     none    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("      -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("4）如果用户数据在倒计时期间继续增长，超出硬限制，则用户存储将无法写入，如图3-4所示；数据操作也会受限制，如图3-5所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Disk quotas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" group zhenggang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gid "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n     Filesystem    used     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("  limit   grace   files     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v("     limit  grace\n          /vol-th  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".2T*     500G    1T        -   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45678")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("       -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v('有的时候用户登录会出现错误提示 "Some errors happened when getting quota info. Some devices may be not working or deactivated. The data in "[]" is inaccurate." 这是因为登陆结点quota服务没有启用，对用户本身的操作和作业不会有影响。')])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[t._v("存储是有配额限制的：超出软限制，开启倒计时，倒计时到期就用不了了；超出硬限制，直接就用不了了。")]),t._v(" "),s("li",[t._v("查询配额，可以开启新终端登陆时自动显示，或通过命令查询"),s("code",[t._v("lfs quota -g -h zhenggang")]),t._v(" ，请将命令中的"),s("code",[t._v("zhenggang")]),t._v("改为自己的帐户名。")]),t._v(" "),s("li",[t._v("当配额出现"),s("code",[t._v("*")]),t._v("时，请及时清理数据。")]),t._v(" "),s("li",[t._v("免费配额不足，可以申请购买哦，"),s("a",{attrs:{href:"https://mrzhenggang.com/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("联系我们"),s("OutboundLink")],1),t._v("。")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{487:function(a,s,n){"use strict";n.r(s);var e=n(15),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("由于天河系统使用VPN访问，故无法直接连接互联网，导致python依赖包的安装无法直接进行。因此，本文提供一个利用conda包管理工具，配置python环境的方法。")]),a._v(" "),n("h2",{attrs:{id:"配置自己的python环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置自己的python环境"}},[a._v("#")]),a._v(" 配置自己的python环境")]),a._v(" "),n("h3",{attrs:{id:"配置系统anaconda环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置系统anaconda环境"}},[a._v("#")]),a._v(" 配置系统anaconda环境")]),a._v(" "),n("p",[a._v("以vol-th文件系统为例，设置python3的环境：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("module "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" python/3.6_anaconda\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"配置conda的环境文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置conda的环境文件"}},[a._v("#")]),a._v(" 配置conda的环境文件")]),a._v(" "),n("p",[a._v("目的是在用户自己的账户下创建env环境，以及修改默认channel环境。")]),a._v(" "),n("p",[a._v("方法一：使用命令行配置condarc文件（推荐方法）")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda config  --add  channels  file://vol-th/software/anaconda-pkgs/\nconda config  --add  envs_dirs  /vol-th/home/zhenggang/software/envs\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("方法二：手动编辑condarc文件\n创建文件：")]),a._v(" "),n("div",{staticClass:"language-bah line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("vim  ~/.condarc\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("写入如下内容：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("envs_dirs:\n - /vol-th/home/zhenggang/software/envs\nchannels:\n - file://vol-th/software/anaconda-pkgs/\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("说明：")]),a._v(" "),n("ul",[n("li",[a._v("1.envs_dirs 指的是把conda的环境安装在哪个目录，请设置为自己账户下的一个文件夹即可。（一定要修改为自己账户目录的某个文件夹）")]),a._v(" "),n("li",[a._v("2.channels 指的是使用conda install的时候，到哪里去找安装包，无需修改。")])]),a._v(" "),n("h3",{attrs:{id:"创建一个conda环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建一个conda环境"}},[a._v("#")]),a._v(" 创建一个conda环境")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  create  -n  myenv  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v("  --offline\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("当提示是否继续的是，输入“y”继续。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("Proceed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("/n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? y\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("说明：")]),a._v(" "),n("ul",[n("li",[a._v("1.myenv 是自己创建的一个环境的名字，改成自己需要的名字即可。")]),a._v(" "),n("li",[a._v("2.如果用户使用的是自己的anaconda或miniconda环境，那么可以选择直接使用默认环境，无需创建新环境。")])]),a._v(" "),n("h3",{attrs:{id:"激活conda环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#激活conda环境"}},[a._v("#")]),a._v(" 激活conda环境")]),a._v(" "),n("p",[a._v("激活环境：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v("  activate  myenv\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("说明：myenv 是刚刚创建的一个环境的名字。")]),a._v(" "),n("h3",{attrs:{id:"安装python包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装python包"}},[a._v("#")]),a._v(" 安装python包")]),a._v(" "),n("p",[a._v("举例：安装一个常用数学库的包numpy")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("  --offline  numpy\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("当提示是否继续的是，输入“y”继续。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("Proceed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("/n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? y\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("安装完成后即可使用。")]),a._v(" "),n("h3",{attrs:{id:"测试使用python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试使用python"}},[a._v("#")]),a._v(" 测试使用python")]),a._v(" "),n("p",[a._v("输入：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("python\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("显示：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("Python "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(".5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("Anaconda, Inc."),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default, Apr "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(":14:56"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("GCC "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("7.2")]),a._v(".0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" on linux\nType "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"help"')]),a._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"copyright"')]),a._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"credits"')]),a._v(" or "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"license"')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" information.\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("再输入：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v("  numpy\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("如果没有任何报错就说明导入成功了。")]),a._v(" "),n("h3",{attrs:{id:"退出conda环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#退出conda环境"}},[a._v("#")]),a._v(" 退出conda环境")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v("  deactivate\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h2",{attrs:{id:"conda的常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda的常用命令"}},[a._v("#")]),a._v(" conda的常用命令")]),a._v(" "),n("h3",{attrs:{id:"获取版本号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取版本号"}},[a._v("#")]),a._v(" 获取版本号")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  -version 或 conda  -V\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"获取帮助"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[a._v("#")]),a._v(" 获取帮助")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  -help 或 conda  -h\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("查看某一命令的帮助，如update命令及remove命令")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  update  -help \nconda  remove  -help\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("同理，以上命令中的-help也可以换成-h。")]),a._v(" "),n("h3",{attrs:{id:"环境管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境管理"}},[a._v("#")]),a._v(" 环境管理")]),a._v(" "),n("p",[a._v("查看环境管理的全部命令帮助")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v("  -h\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"常用的命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用的命令"}},[a._v("#")]),a._v(" 常用的命令")]),a._v(" "),n("p",[a._v("查看安装了哪些包")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  list\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("查看当前存在哪些虚拟环境")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v("  list 或 conda  info  -e\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("检查更新当前conda")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda  update  conda\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"创建python虚拟环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建python虚拟环境"}},[a._v("#")]),a._v(" 创建python虚拟环境")]),a._v(" "),n("p",[a._v("使用 conda create -n your_env_name python=X.X（2.7、3.6等)命令创建python版本为X.X、名字为your_env_name的虚拟环境。your_env_name文件可以在Anaconda安装目录envs文件下找到。")]),a._v(" "),n("h3",{attrs:{id:"使用激活-或切换不同python版本-的虚拟环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用激活-或切换不同python版本-的虚拟环境"}},[a._v("#")]),a._v(" 使用激活(或切换不同python版本)的虚拟环境")]),a._v(" "),n("p",[a._v("使用如下命令即可 激活你的虚拟环境(即将python的版本改变)。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v("  activate  your_env_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("虚拟环境名称"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("使用python -version可以检查当前python版本是否为想要的。")]),a._v(" "),n("h3",{attrs:{id:"对虚拟环境中安装额外的包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对虚拟环境中安装额外的包"}},[a._v("#")]),a._v(" 对虚拟环境中安装额外的包")]),a._v(" "),n("p",[a._v("使用命令即可安装package到your_env_name中")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -n your_env_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("备注：本地安装需要增加 --offline参数")]),a._v(" "),n("h3",{attrs:{id:"关闭虚拟环境-即从当前环境退出返回使用path环境中的默认python版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭虚拟环境-即从当前环境退出返回使用path环境中的默认python版本"}},[a._v("#")]),a._v(" 关闭虚拟环境(即从当前环境退出返回使用PATH环境中的默认python版本)")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" deactivate\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"删除虚拟环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除虚拟环境"}},[a._v("#")]),a._v(" 删除虚拟环境")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda remove -n your_env_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("虚拟环境名称"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" –all\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"删除环境中的某个包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除环境中的某个包"}},[a._v("#")]),a._v(" 删除环境中的某个包")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("conda remove -name your_env_name package_name\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("备注：本部分来源：https://blog.csdn.net/lovejay7/article/details/80463110")])])}),[],!1,null,null,null);s.default=t.exports}}]);
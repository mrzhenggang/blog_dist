(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{503:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置环境变量"}},[t._v("#")]),t._v(" 如何设置环境变量")]),t._v(" "),a("h2",{attrs:{id:"什么是环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是环境变量"}},[t._v("#")]),t._v(" 什么是环境变量？")]),t._v(" "),a("ul",[a("li",[t._v("变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。")]),t._v(" "),a("li",[t._v("在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录（HOME）、可执行程序搜索路径（PATH）等。")]),t._v(" "),a("li",[t._v("值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。")])]),t._v(" "),a("h2",{attrs:{id:"如何显示系统的环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何显示系统的环境变量"}},[t._v("#")]),t._v(" 如何显示系统的环境变量？")]),t._v(" "),a("ul",[a("li",[t._v("我们可以使用 "),a("code",[t._v("env")]),t._v(" 命令来查看到 Linux 系统中所有的环境变量")])]),t._v(" "),a("center",[a("video",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/set-environment-variables/env.mp4",controls:"controls",width:"85%"}},[t._v("\n您的浏览器不支持 video 标签。\n")])]),t._v(" "),a("ul",[a("li",[t._v("我们可以使用 echo $变量名 来显示指定环境变量，例如"),a("code",[t._v("echo $PATH")])])]),t._v(" "),a("center",[a("video",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/set-environment-variables/echo.mp4",controls:"controls",width:"85%"}},[t._v("\n您的浏览器不支持 video 标签。\n")])]),t._v(" "),a("h2",{attrs:{id:"常见系统环境变量有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见系统环境变量有哪些"}},[t._v("#")]),t._v(" 常见系统环境变量有哪些？")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("环境变量名称")])]),t._v(" "),a("th",[a("strong",[t._v("作用")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("PATH")]),t._v(" "),a("td",[t._v("定义命令行解释器搜索用户执行命令的路径")])]),t._v(" "),a("tr",[a("td",[t._v("LD_LIBRARY_PATH")]),t._v(" "),a("td",[t._v("定义命令行解释器搜索用户执行命令所链接的动态库搜索路径")])]),t._v(" "),a("tr",[a("td",[t._v("HOME")]),t._v(" "),a("td",[t._v("用户的主目录（也称家目录）")])]),t._v(" "),a("tr",[a("td",[t._v("C_INCLUDE_PATH")]),t._v(" "),a("td",[t._v("编译程序使C语言头文件的搜索路径")])]),t._v(" "),a("tr",[a("td",[t._v("CXX_INCLUDE_PATH")]),t._v(" "),a("td",[t._v("编译程序时C++语言头文件的搜索路径")])])])]),t._v(" "),a("h2",{attrs:{id:"如何修改系统环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何修改系统环境变量"}},[t._v("#")]),t._v(" 如何修改系统环境变量？")]),t._v(" "),a("h3",{attrs:{id:"使用export命令设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用export命令设置环境变量"}},[t._v("#")]),t._v(" 使用export命令设置环境变量")]),t._v(" "),a("ul",[a("li",[t._v("在 shell 中执行程序时，shell 会提供一组环境变量。")]),t._v(" "),a("li",[a("code",[t._v("export")]),t._v("命令 可新增，修改或删除环境变量，供后续执行的程序使用。")])]),t._v(" "),a("h3",{attrs:{id:"在shell终端设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在shell终端设置环境变量"}},[t._v("#")]),t._v(" 在shell终端设置环境变量")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("直接在shell终端运行 export 命令设置变量，只对当前shell临时有效。打开新的shell需要重新设置。")])]),t._v(" "),a("li",[a("p",[t._v("在shell的命令行下使用export命令设置环境变量的方法为： "),a("code",[t._v("export 变量名=变量值")])])]),t._v(" "),a("li",[a("p",[t._v("我们可以使用 "),a("code",[t._v("$")]),t._v(" 符引用变量本身，进而实现环境变量内容的增加，例如："),a("code",[t._v("export 变量名=$变量名:变量值")])])]),t._v(" "),a("li",[a("p",[t._v("增加可执行程序搜索路径")])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/newprogram/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("增加动态链接库搜索路径")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LD_LIBRARY_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/newprogram/lib:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LD_LIBRARY_PATH")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("注意：请将"),a("code",[t._v("/path/to/newprogram/bin")]),t._v("部分替换为实际可执行程序所在路径，请将"),a("code",[t._v("/path/to/newprogram/lib")]),t._v("部分替换为动态链接库(.so文件)所在路径")])]),t._v(" "),a("center",[a("video",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/set-environment-variables/changeshell.mp4",controls:"controls",width:"85%"}},[t._v("\n您的浏览器不支持 video 标签。\n")])]),t._v(" "),a("h3",{attrs:{id:"在-bashrc文件中设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-bashrc文件中设置环境变量"}},[t._v("#")]),t._v(" 在~/.bashrc文件中设置环境变量")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("~/.bashrc")]),t._v("文件包含专用于你的bash shell的bash信息,当登录时以及每次打开新的shell时，该该文件被读取。")]),t._v(" "),a("li",[t._v("修改该文件后，可以执行 "),a("code",[t._v("source ~/.bashrc")]),t._v("命令让修改即可生效。或者重新ssh连接到系统，刚才的修改会在用户登录时自动生效。")])]),t._v(" "),a("center",[a("video",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/set-environment-variables/changebashrc.mp4",controls:"controls",width:"85%"}},[t._v("\n您的浏览器不支持 video 标签。\n")])]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ol",[a("li",[t._v("什么是环境变量？定义系统运行环境的一些参数")]),t._v(" "),a("li",[t._v("如何显示系统的环境变量？执行env显示全部，或执行echo $变量名")]),t._v(" "),a("li",[t._v("常见系统环境变量有哪些？最常见就是 PATH（可执行程序搜索路径）和LD_LIBRARY_PATH（动态链接库搜索路径）")]),t._v(" "),a("li",[t._v("如何修改系统环境变量？")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("新的路径:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LD_LIBRARY_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("新的路径:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);
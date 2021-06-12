(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{500:function(e,t,n){"use strict";n.r(t);var _=n(15),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"编译问题汇总"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译问题汇总"}},[e._v("#")]),e._v(" 编译问题汇总")]),e._v(" "),n("h2",{attrs:{id:"_1-找不到命令mpicc-mpif90"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-找不到命令mpicc-mpif90"}},[e._v("#")]),e._v(" 1.找不到命令mpicc/mpif90")]),e._v(" "),n("p",[e._v("问题：在天河系统上，使用 mpif90 编译并行程序，提示说  command not found")]),e._v(" "),n("p",[e._v('解答：天河系统上使用的 mpif90 由于有不同版本的 mpi，所以没有设置mpif90 的环境变量，用户可以查看手册"编译环境"章节设置环境变量即可。')]),e._v(" "),n("h2",{attrs:{id:"_2-python版本低"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-python版本低"}},[e._v("#")]),e._v(" 2.python版本低")]),e._v(" "),n("p",[e._v("问答：我需要使用高版本的 python，可以我输入 python 后，系统显示的是 Python 2.6")]),e._v(" "),n("p",[e._v("解答：我们在系统的共享目录下面部署了多个版本的python，您可以通过设置环境变量来使用高版本的 python。")]),e._v(" "),n("h2",{attrs:{id:"_3-undefined-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-undefined-reference"}},[e._v("#")]),e._v(" 3 undefined reference")]),e._v(" "),n("p",[e._v("问题：常见的 undefined reference to 问题解决办法")]),e._v(" "),n("p",[e._v("解答：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("目标文件缺失")]),e._v(" "),n("p",[n("strong",[e._v("原因")]),e._v("：当进行可执行程序链接时，链接命令中找不到某个函数所在源代码的目标文件 "),n("code",[e._v("***.o")]),e._v("，出现 "),n("code",[e._v("undefined reference to ***")]),e._v(" 错误。")]),e._v(" "),n("p",[n("strong",[e._v("解决办法")]),e._v("：找到需要的目标文件 "),n("code",[e._v("***.o")]),e._v(" ，然后将其添加到链接命令中，解决问题。")])]),e._v(" "),n("li",[n("p",[e._v("库文件缺失")]),e._v(" "),n("p",[n("strong",[e._v("原因")]),e._v("：当进行可执行程序链接时，链接命令中找不到某个库函数所在的库文件，出现 "),n("code",[e._v("undefined reference to ***")]),e._v(" 错误。")]),e._v(" "),n("p",[n("strong",[e._v("解决办法")]),e._v("：找到需要的库文件，然后将其绝对路径使用-L 和-l 添加到链接命令中，解决问题。")])]),e._v(" "),n("li",[n("p",[e._v("多个库文件连接顺序")]),e._v(" "),n("p",[n("strong",[e._v("原因")]),e._v("：当进行可执行程序链接时，所需目标文件和库文件均齐全，但由于链接顺序问题，出现库文件依赖报错，从而同样会出现 "),n("code",[e._v("undefined reference to ***")]),e._v(" 错误。")]),e._v(" "),n("p",[n("strong",[e._v("解决办法")]),e._v("：在链接命令中给出所依赖的库时，需要注意库之间的依赖顺序，依赖其他库的库一定要放到被依赖库的前面，避免  "),n("code",[e._v("undefined reference")]),e._v(" 的错误，完成编译链接。")])]),e._v(" "),n("li",[n("p",[e._v("C++代码链接 C 库文件")]),e._v(" "),n("p",[n("strong",[e._v("原因")]),e._v("：若库文件或目标文件由 c 代码生成的，则在c++代码中链接目标函数时，也会碰到 "),n("code",[e._v("undefined reference")]),e._v(" 的问题。")]),e._v(" "),n("p",[n("strong",[e._v("解决办法")]),e._v("：由于 c++代码调用 c 语言库的函数，链接目标文件时候找不到，出现 "),n("code",[e._v("undefined reference to ***")]),e._v(' 错误。只需在调用 C 语言库函数的源码文件中，把与 c 语言库相关的头文件包含添加一个 extern "C"的声明即可。')])])]),e._v(" "),n("h2",{attrs:{id:"_4-mkl库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-mkl库"}},[e._v("#")]),e._v(" 4 MKL库")]),e._v(" "),n("p",[e._v("问题：在链接 MKL 库时，报错undefined reference to dgemm_ ***")]),e._v(" "),n("p",[e._v("原因：原因为 MKL 库没有被有效链接，请使用相关参数设置。高版本的 Intel MKL 库可以直接使用"),n("code",[e._v("-mkl")]),e._v("编译参数")]),e._v(" "),n("p",[e._v("MKL库参数详细设置方法："),n("a",{attrs:{href:"https://software.intel.com/zh-cn/articles/intel-mkl-link-line-advisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("英特尔® 数学核心函数库"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_5-cannot-find-lxxx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-cannot-find-lxxx"}},[e._v("#")]),e._v(" 5 cannot find -lxxx")]),e._v(" "),n("p",[e._v("问题：使用 Intel 编译器编译时报错：ld: cannot find -lm")]),e._v(" "),n("p",[e._v("解答：编译时出现该报错，一般是由于在编译选项中含有 "),n("code",[e._v("-fast")]),e._v("（包含 "),n("code",[e._v("-static")]),e._v(" )或 "),n("code",[e._v("-static")]),e._v("  导致的，该选项需要使用 glibc 的静态库。由于部分操作系统没有安装 glibc 的静态库，或者 glibc 库不在标准目录下，因而没有 libm 的静态库。")]),e._v(" "),n("p",[e._v("解决方法：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("locate libm.a\nifort -static hello.f90 - L/usr/lib/x86_64-redhat-linux6E/lib64/ -lm\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("可参考链接："),n("a",{attrs:{href:"https://software.intel.com/en-us/articles/error-ld-cannot-find-lm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Error: ld: cannot find -lm"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_6-自己安装软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-自己安装软件"}},[e._v("#")]),e._v(" 6 自己安装软件")]),e._v(" "),n("p",[e._v("问题：用户是否可以在上系统上自行安装软件？")]),e._v(" "),n("p",[e._v("解答：如果是开源软件，用户可以在共享目录下查找，或者在自己的账户下部署。如果是商业软件，需用户有软件的使用版权，仅限于该用户自己使用，且用户须对合法性负责。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
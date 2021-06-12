(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{487:function(a,s,t){"use strict";t.r(s);var n=t(15),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("NAMD是一种平行分子动力学代码，设计用于大型生物分子系统的高性能模拟。 利用Charm ++并行编程框架，NAMD可以扩展到几个核心，用于典型的仿真，超过500,000个核心，用于最大的仿真。")]),a._v(" "),t("p",[a._v("使用此系统编写的程序在具有或不具有共享内存的MIMD计算机上运行不变。 它提供了高级机制和策略，以促进开发甚至高度复杂的并行应用程序的任务。")]),a._v(" "),t("p",[a._v("有关Charm ++或NAMD的更多信息，请分别访问 "),t("a",{attrs:{href:"http://charm.cs.illinois.edu/index",target:"_blank",rel:"noopener noreferrer"}},[a._v("Charm++"),t("OutboundLink")],1),a._v(" 或 "),t("a",{attrs:{href:"http://www.ks.uiuc.edu/Research/namd/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NAMD"),t("OutboundLink")],1),a._v(" 网站。")]),a._v(" "),t("h2",{attrs:{id:"版本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本信息"}},[a._v("#")]),a._v(" 版本信息")]),a._v(" "),t("p",[a._v("这些说明着重于为多节点，多核平台构建NAMD。出于此构建的目的，使用以下组件：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[a._v("序号")]),a._v(" "),t("th",{staticStyle:{"text-align":"center"}},[a._v("组件")]),a._v(" "),t("th",{staticStyle:{"text-align":"center"}},[a._v("版本")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[a._v("1")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("NAMD")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("Version 2.12")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[a._v("2")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("Charm++")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("Version 6.7.1")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[a._v("3")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("GNU Compiler")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("Version 4.9.3")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[a._v("4")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("MPICH")]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("Version 3.2.1")])])])]),a._v(" "),t("h2",{attrs:{id:"编译器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器配置"}},[a._v("#")]),a._v(" 编译器配置")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# GNU COMPILER")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LD_LIBRARY_PATH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# MPI")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mpi3/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mpi3/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LD_LIBRARY_PATH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# environment")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gcc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CXX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("g++\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gfortran\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h2",{attrs:{id:"下载源码包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载源码包"}},[a._v("#")]),a._v(" 下载源码包")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUILD_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("~/NAMD\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BUILD_DIR")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.ks.uiuc.edu/Research/namd/2.12/download/832164/NAMD_2.12_Source.tar.gz \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf NAMD_2.12_Source.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" NAMD_2.12_Source\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"构建和安装charm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建和安装charm"}},[a._v("#")]),a._v(" 构建和安装Charm")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHARMARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mpi-linux-aarch64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf charm-6.7.1.tar\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" charm-6.7.1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" src/arch\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHARMARCH")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" mpi-linux/conv-mach.* "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHARMARCH")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHARMARCH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/i386-gcc/generic64-light/"')]),a._v(" conv-mach.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/#endif/i #define CMK_64BIT         1"')]),a._v(" conv-mach.h\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# build")]),a._v("\n./build charm++ "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHARMARCH")]),a._v(" --with-production -j8\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("blockquote",[t("p",[a._v("说明：因为针对ARM64，没有现成的ARCH配置，故自己拷贝一个类似的，然后修改。编译过程大约几分钟。")])]),a._v(" "),t("h2",{attrs:{id:"构建和安装namd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建和安装namd"}},[a._v("#")]),a._v(" 构建和安装NAMD")]),a._v(" "),t("h3",{attrs:{id:"配置fftw库-使用官方的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置fftw库-使用官方的版本"}},[a._v("#")]),a._v(" 配置FFTW库（使用官方的版本）")]),a._v(" "),t("p",[a._v("下载FFTW库")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.ks.uiuc.edu/Research/namd/libraries/fftw-linux-arm64.tar.gz \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf fftw-linux-arm64.tar.gz \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("也可以手动下载源码，并拷贝到NAMD解压后的目录。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s%\\'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("HOME")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("%"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('%"')]),a._v(" arch/Linux-ARM64.fftw\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果系统中已安装了fftw库，也可以直接使用，例如自己手动修改配置文件 "),t("code",[a._v("arch/Linux-ARM64.fftw")]),a._v(" ，改为以下内容：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FFTDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/fftw\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FFTINCL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-I"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTDIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/include\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FFTLIB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-L"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTDIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib -lfftw3f \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FFTFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-DNAMD_FFTW -DNAMD_FFTW_3\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FFT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTINCL"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTFLAGS"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("说明：FFTWDIR=/usr/local/fftw，指的是fftw库安装的根目录，请修改为自己的目录。")]),a._v(" "),t("h3",{attrs:{id:"配置tcl库的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置tcl库的变量"}},[a._v("#")]),a._v(" 配置TCL库的变量")]),a._v(" "),t("p",[a._v("下载TCL库")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.ks.uiuc.edu/Research/namd/libraries/tcl8.5.9-linux-arm64-threaded.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf tcl8.5.9-linux-arm64-threaded.tar.gz \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("也可以手动下载源码，并拷贝到NAMD解压后的目录。")]),a._v(" "),t("p",[a._v("修改配置文件：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s%\\'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("HOME")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("%"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('%"')]),a._v(" arch/Linux-ARM64.tcl\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"配置namd-arch的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置namd-arch的变量"}},[a._v("#")]),a._v(" 配置NAMD ARCH的变量")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/multicore-arm7/mpi-linux-aarch64/"')]),a._v(" arch/Linux-ARM64-g++.arch\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"编译namd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译namd"}},[a._v("#")]),a._v(" 编译NAMD")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./config  Linux-ARM64-g++ --charm-arch mpi-linux-aarch64 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --with-fftw --with-tcl\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Linux-ARM64-g++\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" m.log\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("编译过程大约几分钟。")]),a._v(" "),t("h3",{attrs:{id:"配置运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置运行环境"}},[a._v("#")]),a._v(" 配置运行环境")]),a._v(" "),t("p",[a._v("安装后的NAMD可以将其拷贝到目标目录，并设置PATH路径")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("INSTALL_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/namd/2.12\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$INSTALL_DIR")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" Linux-ARM64-g++/charmrun "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$INSTALL_DIR")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" Linux-ARM64-g++/namd2 "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$INSTALL_DIR")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$INSTALL_DIR")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),t("p",[a._v("The Apoa1 example is a standard NAMD cross-platform benchmark. For more information on the Apoa1 example, see the NAMD website.")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.ks.uiuc.edu/Research/namd/utilities/apoa1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf apoa1.tar.gz\nmpirun -np "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" namd2  apoa1/apoa1.namd \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"更多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[a._v("#")]),a._v(" 更多")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://developer.arm.com/products/software-development-tools/hpc/resources/porting-and-tuning/building-namd-with-arm-compiler",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网关于单节点多核版本的安装说明"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("有关NAMD的更多信息，请访问 "),t("a",{attrs:{href:"http://www.ks.uiuc.edu/Research/namd/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NAMD"),t("OutboundLink")],1),a._v(" 官网。")]),a._v(" "),t("li",[a._v("关于ARM平台应用程序移植和优化，请访问 "),t("a",{attrs:{href:"https://blog.mrzhenggang.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mr.ZhengGang"),t("OutboundLink")],1),a._v("。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
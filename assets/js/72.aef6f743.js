(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{506:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"slurm作业管理-一行yhrun命令加载多个作业步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slurm作业管理-一行yhrun命令加载多个作业步"}},[s._v("#")]),s._v(" slurm作业管理：一行yhrun命令加载多个作业步")]),s._v(" "),a("p",[s._v("我们希望运行一行 "),a("code",[s._v("yhrun")]),s._v(" 命令加载多个作业步，该怎么办呢？可以使用 "),a("code",[s._v("yhrun")]),s._v(" 命令的 "),a("code",[s._v("--multi-prog")]),s._v(" 参数来实现。")]),s._v(" "),a("p",[s._v("通过指定 "),a("code",[s._v("--multi-prog")]),s._v(" 选项，可使用 "),a("code",[s._v("yhrun")]),s._v(" 加载多程序作业步，即不同的任务执\n行不同的程序和 / 或参数。这时， yhrun 命令的参数中，最后跟的不是要执行的程序，而是一个配置文件，其中注明每个任务需要加载的程序。")]),s._v(" "),a("p",[s._v("配置文件按行组织，每行用空白分隔为若干个字段。第一个字段为任务号部分，可以包含逗号分隔的任务号列表，可以用 "),a("code",[s._v("min-max")]),s._v(" 表示任务号范围，或在最后一行用 "),a("code",[s._v("*")]),s._v(" 表示其余所有的任务号。第二个字段为所指定的任务要执行的程序。其它字段为执行程序时的参数。在程序和参数中，可以使用 "),a("code",[s._v("%t")]),s._v(" 和 "),a("code",[s._v("%o")]),s._v("，分别表示替换为任务的任务号和任务在配置文件该行所指定的任务号中的偏移。")]),s._v(" "),a("p",[s._v("下面举一个例子 ^_^")]),s._v(" "),a("p",[s._v("配置文件 "),a("code",[s._v("mp.conf")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" a.out abc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" b.out %t\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,5")]),s._v(",7-9 c.out %o\n* d.out\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("加载作业步")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yhrun -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" --multi-prog mp.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("所有任务执行的程序分别为：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("： a.out abc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("： b.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("： c.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3,4")]),s._v(",6,10-15： d.out\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("： c.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("： c.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("： c.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("： c.out "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
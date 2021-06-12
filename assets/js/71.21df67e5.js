(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{501:function(s,n,a){"use strict";a.r(n);var t=a(15),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"slurm作业管理-一次提交运行多个任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slurm作业管理-一次提交运行多个任务"}},[s._v("#")]),s._v(" slurm作业管理：一次提交运行多个任务")]),s._v(" "),a("p",[s._v("针对抢占式的作业调度系统，如果分配节点时候是独占节点，那么每次申请的资源最少就是1个节点。如何实现一次提交作业，计算多个任务呢？（包括串行、openmp或mpi的任务）。最简单的方式就是按照自己的需求写一个运行脚本，然后通过作业管理系统提交即可。下面给出一个具体的例子加以说明，先给出实例，然后给出详细解释：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/helloworld\nyhrun -N1 -n1 ./helloworld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/gaussian\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OMP_NUM_THREADS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \nyhrun -N1 -n1 ./g09 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/vasp\nyhrun -N1 -n3 ./vasp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/lmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OMP_NUM_THREADS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nyhrun -N1 -n2 ./lmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" in.lj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("详细解释如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是一个bash的脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 脚本里面写什么，就会执行什么")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我将会申请1个有12cpu核的计算节点，具体如何分配这些核做计算，我自己说了算")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先用1个核运行一个helloworld吧")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/helloworld "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入到helloworld所在目录")]),s._v("\nyhrun -N1 -n1 ./helloworld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# yhrun 是天河系列的集群的"mpirun"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -N1表示1个节点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n1表示一个核")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# helloworld 是 可执行程序的名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# & 表示放到后台执行（计算节点的后台），如果不写的话，脚本就会卡在这一行，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   直到执行完这一行，才会往下执行。而我们希望同时执行多个任务，所以放到后台")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再用2个核，运行一个openmp的程序吧")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/gaussian\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OMP_NUM_THREADS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \nyhrun -N1 -n1 ./g09 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OMP_NUM_THREADS=2 表示用OMP线程数=2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./g09 是一个openmp程序的名字（举例）")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再用3个核，运行一个mpi的程序吧")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/vasp\nyhrun -N1 -n3 ./vasp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n3 启用3个mpi进程，运行mpi任务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后用6个核，运行一个mpi+openmp的程序吧")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/lmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OMP_NUM_THREADS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nyhrun -N1 -n2 ./lmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" in.lj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置n=2，omp=3 开启2个mpi进程，每个mpi进程开启3个omp线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./lmp 是mpi+openmp的程序名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# < in.lj 给定输入文件")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 末尾增加")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加wait，让脚本等待以上后台任务运行结束后再停止")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不添加的话，脚本运行到末尾就结束了，作业也就结束了。")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("当然，其实还有一种更为“精确”的控制每个进程运行哪个任务的高阶写法，但对于普通用户，一般没这个需求，故不在此介绍了。如确实有这个需求的欢迎留言。")])])}),[],!1,null,null,null);n.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{509:function(e,t,a){"use strict";a.r(t);var s=a(15),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gpu问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu问题"}},[e._v("#")]),e._v(" GPU问题")]),e._v(" "),a("h2",{attrs:{id:"_1-no-cuda-capable-device-is-detected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-no-cuda-capable-device-is-detected"}},[e._v("#")]),e._v(" 1 no CUDA-capable device is detected")]),e._v(" "),a("p",[e._v("问题：使用 CUDA toolkit 编译程序后，在  gpu_test 分区提交作业，运行时提示错误：no CUDA-capable device is detected")]),e._v(" "),a("p",[e._v("解答：可能原因有二种情况：")]),e._v(" "),a("p",[e._v("1.可能是分配到的该计算节点上用于连接CPU 与 GPU 的 PCIe 总线松动，导致无法找到 device。解决方法：在提交作业是可使用 "),a("code",[e._v("-x")]),e._v(" 选项屏蔽该节点；")]),e._v(" "),a("p",[e._v("2.可能是编译时使用的 CUDA toolkit 和计算节点上安装的 CUDA driver 版本不一致导致，gpu_test 分区的计算节点上的 CUDA driver 版本是与 CUDA 7.5 的 toolkit 对应的。解决方法：使用 CUDA 7.5 或 CUDA 5.0 的 toolkit 编译程序。另外，如果同时设置了多个版本的 CUDA 环境，也会导致该问题出现，解决方法：清除所有有关 CUDA 的环境变量设置，然后重新加载一个版本的 CUDA 环境。")])])}),[],!1,null,null,null);t.default=c.exports}}]);
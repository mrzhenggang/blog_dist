(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{463:function(a,s,t){"use strict";t.r(s);var e=t(15),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("这是一个免费开源的大规模并行的电子激发态属性计算包，它基于采用ab initio GW和GW加Bethe-Salpeter方程方法的多体扰动理论。")]),a._v(" "),t("p",[a._v("编译方法可以参考官网：http://manual.berkeleygw.org/2.1/compilation/")]),a._v(" "),t("h2",{attrs:{id:"安装环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[a._v("#")]),a._v(" 安装环境")]),a._v(" "),t("ul",[t("li",[a._v("编译器；如intel compiler")]),a._v(" "),t("li",[a._v("MPI编译器：如impi")]),a._v(" "),t("li",[a._v("fftw库：如fftw3")]),a._v(" "),t("li",[a._v("hdf5库：可选")])]),a._v(" "),t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),t("p",[a._v("安装intel compiler 和 impi 的过程不再赘述。")]),a._v(" "),t("h3",{attrs:{id:"安装fftw库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装fftw库"}},[a._v("#")]),a._v(" 安装fftw库")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" ftp://ftp.fftw.org/pub/fftw/fftw-3.3.8.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf fftw-3.3.8.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" fftw-3.3.8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 编译双精度版本")]),a._v("\n./configure "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("icc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ifort "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CXX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("icpc --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/fftw/3.3.8\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("说明：")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("CC")]),a._v("/"),t("code",[a._v("FC")]),a._v("/"),t("code",[a._v("CXX")]),a._v(" 用来指定编译器的名字，如果不写，默认是GNU的编译器。")]),a._v(" "),t("li",[t("code",[a._v("--prefix")]),a._v(" 用来指定安装目录")])]),a._v(" "),t("h3",{attrs:{id:"安装hdf5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装hdf5"}},[a._v("#")]),a._v(" 安装hdf5")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载页面")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https://www.hdfgroup.org/downloads/hdf5/source-code/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf hdf5-1.10.5.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" hdf5-1.10.5 \n./configure "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mpiicc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mpiifort "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CXX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mpiicpc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--enable-fortran --enable-parallel --enable-shared "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/hdf5/1.10.4 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("说明：")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("--enable-fortran")]),a._v(" 开启fortran支持，BGW需要")]),a._v(" "),t("li",[t("code",[a._v("--enable-parallel")]),a._v(" 开启并行支持，BGW需要")])]),a._v(" "),t("h2",{attrs:{id:"安装应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装应用"}},[a._v("#")]),a._v(" 安装应用")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载地址")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https://berkeleygw.org/download/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf BerkeleyGW-2.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" BerkeleyGW-2.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("需要一个名为"),t("code",[a._v("arch.mk")]),a._v("的配置文件，下面为我写好的配置文件，通常需要用户依据自身需求进行细微修改。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# arch.mk")]),a._v("\nCOMPFLAG  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -DINTEL\nPARAFLAG  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -DMPI\nMATHFLAG  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -DUSESCALAPACK -DHDF5 -DUNPACKED -DUSEFFTW3\nFCPP    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cpp -C\nF90free "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mpiifort -free\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#LINK    = mpiifort -i-static -openmp")]),a._v("\nLINK    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mpiifort -qopenmp\nFOPTS   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -O3 -no-prec-div\nFNOOPTS "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -O2 -no-prec-div\nMOD_OPT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -module\nINCFLAG "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -I\nC_PARAFLAG "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -DPARA\nCC_COMP "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mpiicpc\nC_COMP  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mpiicc\nC_LINK  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mpiicpc\nC_OPTS  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -O3\nC_DEBUGFLAG "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nREMOVE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /bin/rm -f\nFFTWPATH     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("HOME")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/software/fftw/3.3.8  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# fftw path")]),a._v("\nFFTWLIB      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTWPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/libfftw3.a\nFFTWINCLUDE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FFTWPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/include\nMKLPATH      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLROOT"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/intel64\nLAPACKLIB    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -Wl,--start-group "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/libmkl_intel_lp64.a "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/libmkl_sequential.a "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n               "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/libmkl_core.a "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/libmkl_blacs_intelmpi_lp64.a "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n               -Wl,--end-group -lpthread\nSCALAPACKLIB "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/libmkl_scalapack_lp64.a\nHDF5DIR      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("HOME")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/software/hdf5/1.10.4 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hdf5 path")]),a._v("\nHDF5LIB      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("HDF5DIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/libhdf5hl_fortran.a "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("HDF5DIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/libhdf5_hl.a "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n               "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("HDF5DIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/libhdf5_fortran.a "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("HDF5DIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/lib/libhdf5.a -lz\nHDF5INCLUDE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("HDF5DIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/include\nTESTSCRIPT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" sbatch hbar.scr\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br")])]),t("p",[a._v("说明：")]),a._v(" "),t("ol",[t("li",[a._v("该文件详细描述了各个编译参数和库的路径。")]),a._v(" "),t("li",[a._v("请依据自身的需要进行修改。")]),a._v(" "),t("li",[t("code",[a._v("MATHFLAG")]),a._v(" 参数用来添加"),t("code",[a._v("FFTW3")]),a._v("和"),t("code",[a._v("HDF5")]),a._v("的支持。")])]),a._v(" "),t("p",[a._v("然后进行编译即可：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" all-flavors\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/bgw/2.1-real\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("编译cplx版本：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean-flavored\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" cplx\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/bgw/2.1-cplx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[a._v("#")]),a._v(" 运行环境")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BGW_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/bgw/2.1-real   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# real or cplx , 用"#" 注释掉其中一行')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BGW_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/bgw/2.1-cplx\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BGW_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BGW_HOME")]),a._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LD_LIBRARY_PATH")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3644],{9181:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(85893),r=i(11151);const l={title:"TensorFlow \u7b80\u4ecb\u53ca\u5b89\u88c5",tags:["Machine Learning","TensorFlow"]},o=void 0,t={id:"machinelearning/tensorflow-1/AI-tensorflow-introduction-and-installation",title:"TensorFlow \u7b80\u4ecb\u53ca\u5b89\u88c5",description:"\u672c\u6587\u5b89\u88c5\u6d41\u7a0b\u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u53c2\u7167 TFTorchGPU_Installation \u5b89\u88c5\u3002",source:"@site/docs/machinelearning/tensorflow-1/20180127-AI-tensorflow-introduction-and-installation.md",sourceDirName:"machinelearning/tensorflow-1",slug:"/machinelearning/tensorflow-1/AI-tensorflow-introduction-and-installation",permalink:"/site/zh-CN/docs/machinelearning/tensorflow-1/AI-tensorflow-introduction-and-installation",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/zh-CN/docs/tags/machine-learning"},{label:"TensorFlow",permalink:"/site/zh-CN/docs/tags/tensor-flow"}],version:"current",sidebarPosition:20180127,frontMatter:{title:"TensorFlow \u7b80\u4ecb\u53ca\u5b89\u88c5",tags:["Machine Learning","TensorFlow"]},sidebar:"machinelearningSidebar",previous:{title:"Scikit-learn \u7684\u7ba1\u9053\u7c7b\u578b",permalink:"/site/zh-CN/docs/machinelearning/sklearn-pipeline/AI-sklearn-pipeline"},next:{title:"TensorFlow \u5b98\u65b9\u5165\u95e8\u6559\u7a0b",permalink:"/site/zh-CN/docs/machinelearning/tensorflow-1/AI-tensorflow-get-started"}},c={},d=[{value:"\u4ec0\u4e48\u662f TensorFlow",id:"\u4ec0\u4e48\u662f-tensorflow",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 TensorFlow",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-tensorflow",level:2},{value:"Windows \u5b89\u88c5",id:"windows-\u5b89\u88c5",level:2},{value:"Python \u6269\u5c55\u5305",id:"python-\u6269\u5c55\u5305",level:3},{value:"\u4e0b\u8f7d whl \u6587\u4ef6",id:"\u4e0b\u8f7d-whl-\u6587\u4ef6",level:4},{value:"\u5b89\u88c5 whl \u6587\u4ef6",id:"\u5b89\u88c5-whl-\u6587\u4ef6",level:4},{value:"\u5b89\u88c5 TensorFlow CPU",id:"\u5b89\u88c5-tensorflow-cpu",level:3},{value:"\u5b89\u88c5 TensorFlow GPU",id:"\u5b89\u88c5-tensorflow-gpu",level:3},{value:"\u5224\u65ad TensorFlow \u7248\u672c",id:"\u5224\u65ad-tensorflow-\u7248\u672c",level:3},{value:"\u652f\u6301 GPU \u7684 TensorFlow \u914d\u7f6e",id:"\u652f\u6301-gpu-\u7684-tensorflow-\u914d\u7f6e",level:2},{value:"\u652f\u6301\u8bbe\u5907",id:"\u652f\u6301\u8bbe\u5907",level:3},{value:"\u5224\u65ad\u4f7f\u7528\u7684\u8bbe\u5907",id:"\u5224\u65ad\u4f7f\u7528\u7684\u8bbe\u5907",level:3},{value:"\u6307\u5b9a\u8bbe\u5907",id:"\u6307\u5b9a\u8bbe\u5907",level:3},{value:"GPU \u5185\u5b58\u5206\u914d",id:"gpu-\u5185\u5b58\u5206\u914d",level:3},{value:"CPU vs GPU",id:"cpu-vs-gpu",level:2},{value:"\u6d4b\u8bd5\u4e00",id:"\u6d4b\u8bd5\u4e00",level:3},{value:"\u6d4b\u8bd5\u4e8c",id:"\u6d4b\u8bd5\u4e8c",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsxs)(e.p,{children:["\u672c\u6587\u5b89\u88c5\u6d41\u7a0b\u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u53c2\u7167 ",(0,s.jsx)(e.a,{href:"https://gist.github.com/ShangjinTang/e19d6c03334957f0f72ae59c0583d647",children:"TF_Torch_GPU_Installation"})," \u5b89\u88c5\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u5bf9 TensorFlow \u76f8\u5173\u6982\u5ff5\u548c\u5b89\u88c5\u6d41\u7a0b\uff08\u57fa\u4e8e Windows \u64cd\u4f5c\u7cfb\u7edf\uff09\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5e76\u8bf4\u660e\u4e86 GPU \u9002\u7528\u4e8e\u673a\u5668\u5b66\u4e60\u7684\u539f\u56e0\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"2018 \u5e74 1 \u6708 27 \u65e5\uff0c\u66f4\u65b0 TensorFlow GPU 1.5.0 \u7684\u5b89\u88c5\u6559\u7a0b\uff08\u57fa\u4e8e CUDNN 7 \u548c CUDA 9\uff09\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f-tensorflow",children:"\u4ec0\u4e48\u662f TensorFlow"}),"\n",(0,s.jsx)(e.p,{children:"TensorFlow \u662f\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u591a\u5e73\u53f0\u7f16\u7a0b\u8f6f\u4ef6\uff0c\u7528\u4e8e\u5b9e\u73b0\u548c\u8fd0\u884c\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\uff0c\u5e76\u4e14\u65b9\u4fbf\u5bf9\u6df1\u5ea6\u5b66\u4e60\u7b97\u6cd5\u7684\u5c01\u88c5\u3002TensorFlow \u6700\u521d\u7531 Google Brain \u56e2\u961f\u7684\u7814\u7a76\u4eba\u5458\u548c\u5de5\u7a0b\u5e08\u5f00\u53d1\uff0c\u6700\u521d\u4ec5\u9650\u4e8e\u5185\u90e8\u4f7f\u7528\uff0c\u540e\u7eed\u5728 2015 \u5e74 11 \u6708\u5f00\u6e90\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u63d0\u9ad8\u8bad\u7ec3\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u6027\u80fd\uff0cTensorFlow \u5141\u8bb8\u5728 CPU \u548c GPU \u4e0a\u8fd0\u884c\u3002\u548c CPU \u76f8\u6bd4\uff0c\u4f7f\u7528 GPU \u65f6\u53ef\u4ee5\u5f97\u5230\u975e\u5e38\u5f3a\u5927\u7684\u6027\u80fd\uff0c\u76ee\u524d TensorFlow \u5b98\u65b9\u652f\u6301\u4f7f\u7528 CUDA \u7684 NVIDIA GPU\u3002"}),"\n",(0,s.jsx)(e.p,{children:"TensorFlow \u76ee\u524d\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\u7684\u63a5\u53e3\uff0c\u5176\u4e2d\u7684 Python API \u662f\u6700\u5b8c\u5584\u7684 API\u3002"}),"\n",(0,s.jsx)(e.p,{children:"TensorFlow \u8ba1\u7b97\u4f9d\u8d56\u4e8e\u6784\u9020\u6709\u5411\u56fe\u6765\u8868\u793a\u6570\u636e\u6d41\u3002\u5c3d\u7ba1\u6784\u5efa\u56fe\u8868\u542c\u8d77\u6765\u5f88\u590d\u6742\uff0c\u4f46 TensorFlow \u914d\u5907\u4e86\u9ad8\u7ea7 API\uff0c\u4f7f\u5176\u53d8\u5f97\u975e\u5e38\u7b80\u5355\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-tensorflow",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 TensorFlow"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u65b9\u9762\uff0cPython \u5b58\u5728\u89e3\u91ca\u5668\u9501\uff08Global Interpreter Lock, GIL\uff09\uff0c\u5b83\u786e\u4fdd\u4efb\u4f55\u65f6\u5019\u90fd\u53ea\u6709\u4e00\u4e2a Python \u7ebf\u7a0b\u6267\u884c\u3002GIL \u6700\u5927\u7684\u95ee\u9898\u5c31\u662f Python \u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u5e76\u4e0d\u80fd\u5229\u7528\u8ba1\u7b97\u673a\u786c\u4ef6\u591a\u6838\u5fc3\u7684\u4f18\u52bf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916\u4e00\u65b9\u9762\uff0c\u673a\u5668\u5b66\u4e60\u9886\u57df\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d7\u76ca\u4e8e\u76ee\u524d GPU \u7684\u5feb\u901f\u53d1\u5c55\u3002\u4e0b\u56fe\u4e3a Intel CPU (i7-6900k) \u548c NVIDIA GPU (GTX 1080 Ti) \u7684\u6027\u80fd\u6bd4\u8f83\uff1a"}),"\n",(0,s.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-13_05.png",width:"800"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u6765\u6e90\u81ea\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.intel.com/content/www/us/en/products/processors/core/x-series/i7-6900k.html",children:"https://www.intel.com/content/www/us/en/products/processors/core/x-series/i7-6900k.html"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.nvidia.com/en-us/geforce/products/10series/geforce-gtx-1080-ti/",children:"https://www.nvidia.com/en-us/geforce/products/10series/geforce-gtx-1080-ti/"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4ef7\u683c\u76f8\u5f53\u4e8e CPU 70% \u5de6\u53f3\u7684\u60c5\u51b5\u4e0b\uff0cGPU \u5177\u6709 450 \u500d\u7684\u6838\u5fc3\u6570 \uff0c\u5e76\u4e14\u6bcf\u79d2\u53ef\u4ee5\u6267\u884c\u5927\u7ea6 15 \u500d\u7684\u6d6e\u70b9\u8ba1\u7b97\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u5bf9\u800c\u8a00\uff0c\u4f7f\u7528 NVIDIA CUDA \u7b49\u8f6f\u4ef6\u7f16\u5199 GPU \u4ee3\u7801\u6765\u5b8c\u6210\u673a\u5668\u5b66\u4e60\u4efb\u52a1\uff0c\u5e76\u6ca1\u6709 Python \u4ee3\u7801\u90a3\u4e48\u7b80\u5355\u3002"}),"\n",(0,s.jsx)(e.p,{children:"TensorFlow \u5bf9\u57fa\u4e8e GPU \u7684\u673a\u5668\u5b66\u4e60\u63d0\u4f9b\u4e86\u5f3a\u5927\u9ad8\u6548\u7684\u652f\u6301\uff08\u76ee\u524d\u53ea\u652f\u6301 NVIDIA CUDA\uff0c\u672a\u6765\u53ef\u80fd\u652f\u6301 OpenCL\uff09\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"windows-\u5b89\u88c5",children:"Windows \u5b89\u88c5"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Windows \u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5 TensorFlow \u4e4b\u524d\uff0c\u8bf7\u786e\u8ba4\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\uff1a64 \u4f4d\u7684 Windows 7 / Windows 10"}),"\n",(0,s.jsxs)(e.li,{children:["\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://git-scm.com/",children:"Git Windows 64-bit"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://www.python.org/downloads/",children:"Python 3.6.x Windows 64-bit"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads",children:"Visual C++ 2017"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"python-\u6269\u5c55\u5305",children:"Python \u6269\u5c55\u5305"}),"\n",(0,s.jsx)(e.h4,{id:"\u4e0b\u8f7d-whl-\u6587\u4ef6",children:"\u4e0b\u8f7d whl \u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u524d\u5f80 ",(0,s.jsx)(e.a,{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/",children:"Python Libs"})," \u4e0b\u8f7d\u5b89\u88c5\u5e38\u7528\u7684 Python \u8f6f\u4ef6\u5e93\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy",children:"Numpy+MKL"})," \uff1a\u8fdb\u884c\u79d1\u5b66\u8ba1\u7b97\u6240\u9700\u7684\u57fa\u672c\u8f6f\u4ef6\u5305 + Intel\xae Math Kernel Library"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy",children:"SciPy"})," \uff1a\u6570\u5b66\u5de5\u5177\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#matplotlib",children:"Matplotlib"})," \uff1a\u7ed8\u56fe\u5de5\u5177\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#scikit-learn",children:"Scikit-learn"})," \uff1a\u673a\u5668\u5b66\u4e60\u8f6f\u4ef6\u5305"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u52a1\u5fc5\u6ce8\u610f\uff0cwhl \u5b89\u88c5\u6587\u4ef6\u9700\u8981\u4ee5 ",(0,s.jsx)(e.code,{children:"cp36-cp36m-win_amd64.whl"})," \u6216 ",(0,s.jsx)(e.code,{children:"py3-none-any.whl"})," \u7ed3\u5c3e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u5b89\u88c5-whl-\u6587\u4ef6",children:"\u5b89\u88c5 whl \u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Git Bash \u4e2d\u8f93\u5165 ",(0,s.jsx)(e.code,{children:"pip3 install *.whl"})," \u5b89\u88c5\uff1a\u4ee5 Numpy+MKL \u4e3a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ pip3 install numpy\u2011*+mkl\u2011cp36\u2011cp36m\u2011win_amd64.whl\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5-tensorflow-cpu",children:"\u5b89\u88c5 TensorFlow CPU"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d ",(0,s.jsx)(e.a,{href:"https://pypi.python.org/pypi/tensorflow/1.5.0",children:"tensorflow-1.5.0-cp36-cp36m-win_amd64.whl"})," \u5e76\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"pip3 install"})," \u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5-tensorflow-gpu",children:"\u5b89\u88c5 TensorFlow GPU"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u5b89\u88c5 TensorFlow GPU \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u62e5\u6709 ",(0,s.jsx)(e.a,{href:"https://developer.nvidia.com/cuda-gpus",children:"\u652f\u6301 CUDA \u7684 NVIDIA GPU"})," \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://developer.nvidia.com/cuda-90-download-archive",children:"CUDA Toolkit 9.0"})," \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://developer.nvidia.com/rdp/cudnn-download",children:"cuDNN v7.0.5 for CUDA 9.0"})," \uff08\u9700\u8981\u6ce8\u518c NVIDIA \u8d26\u53f7\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u89e3\u538b\u5b89\u88c5\u5305\u81f3\u8def\u5f84 ",(0,s.jsx)(e.code,{children:"<unzippath>"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u62f7\u8d1d ",(0,s.jsx)(e.code,{children:"<unzippath>\\cuda\\bin\\cudnn64_6.dll"})," \u81f3 ",(0,s.jsx)(e.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v9.0\\bin"})," \u76ee\u5f55"]}),"\n",(0,s.jsxs)(e.li,{children:["\u62f7\u8d1d ",(0,s.jsx)(e.code,{children:"<unzippath>\\cuda\\include\\cudnn.h"})," \u81f3 ",(0,s.jsx)(e.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v9.0\\include"})," \u76ee\u5f55"]}),"\n",(0,s.jsxs)(e.li,{children:["\u62f7\u8d1d ",(0,s.jsx)(e.code,{children:"<unzippath>\\cuda\\lib\\x64\\cudnn.lib"})," \u81f3 ",(0,s.jsx)(e.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v9.0\\lib\\x64"})," \u76ee\u5f55"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["\u4e0b\u8f7d ",(0,s.jsx)(e.a,{href:"https://pypi.python.org/pypi/tensorflow-gpu/1.5.0",children:"tensorflow_gpu-1.5.0-cp36-cp36m-win_amd64.whl"})," \u5e76\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"pip3 install"})," \u5b89\u88c5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5224\u65ad-tensorflow-\u7248\u672c",children:"\u5224\u65ad TensorFlow \u7248\u672c"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"tf.__version__"})," \u6253\u5370\u5f53\u524d\u4f7f\u7528\u7684 TensorFlow \u7248\u672c\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"import tensorflow as tf\r\nprint(tf.__version__)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u652f\u6301-gpu-\u7684-tensorflow-\u914d\u7f6e",children:"\u652f\u6301 GPU \u7684 TensorFlow \u914d\u7f6e"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0b\u6587\u7684\u4ee3\u7801\u8fd0\u884c\u57fa\u4e8e\u673a\u5668\u914d\u7f6e Intel i5-4590 CPU + NVIDIA GeForce GTX 1060 6GB\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u652f\u6301\u8bbe\u5907",children:"\u652f\u6301\u8bbe\u5907"}),"\n",(0,s.jsx)(e.p,{children:"TensorFlow \u652f\u6301\u7684\u8bbe\u5907\u7c7b\u578b\u662f CPU \u548c GPU\u3002 \u4ed6\u4eec\u88ab\u8868\u793a\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'"/cpu:0"'}),"\uff1a\u673a\u5668\u7684CPU\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'"/device:GPU:0"'}),"\uff1a\u673a\u5668\u7684 GPU\uff08\u524d\u63d0\u662f\u5df2\u5b89\u88c5\uff09"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'"/device:GPU:1"'}),"\uff1a\u673a\u5668\u7684\u7b2c\u4e8c\u4e2aGPU\uff0c\u4ee5\u6b64\u7c7b\u63a8"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c TensorFlow \u64cd\u4f5c\u540c\u65f6\u5177\u6709 CPU \u548c GPU\uff0c\u5219\u5728\u5c06\u64cd\u4f5c\u5206\u914d\u7ed9\u8bbe\u5907\u65f6\uff0c\u5c06\u4f18\u5148\u9009\u62e9 GPU \u8bbe\u5907\u3002 \u4f8b\u5982\uff0c",(0,s.jsx)(e.code,{children:"matmul"})," \u6709 CPU \u548c GPU \u5b9e\u73b0\uff0c\u5728\u5177\u6709\u8bbe\u5907 ",(0,s.jsx)(e.code,{children:"cpu:0"})," \u548c ",(0,s.jsx)(e.code,{children:"gpu:0"})," \u7684\u7cfb\u7edf\u4e0a\uff0c\u5c06\u9009\u62e9 ",(0,s.jsx)(e.code,{children:"gpu:0"}),"\u6765\u8fd0\u884c ",(0,s.jsx)(e.code,{children:"matmul"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5224\u65ad\u4f7f\u7528\u7684\u8bbe\u5907",children:"\u5224\u65ad\u4f7f\u7528\u7684\u8bbe\u5907"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7\u8fd0\u884c\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"log_device_placement"})," \u4e3a ",(0,s.jsx)(e.code,{children:"True"})," \u7684\u4f1a\u8bdd\uff0c\u53ef\u4ee5\u5224\u65ad\u64cd\u4f5c\u548c\u5f20\u91cf\u4f7f\u7528\u7684\u8bbe\u5907\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"a = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[2, 3], name='a')\r\nb = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[3, 2], name='b')\r\nc = tf.matmul(a, b)\r\nsess = tf.Session(config=tf.ConfigProto(log_device_placement=True))\r\nprint(sess.run(c))\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230 TensorFlow \u7684\u64cd\u4f5c\u9ed8\u8ba4\u4f7f\u7528 GPU\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Device mapping:\r\n/job:localhost/replica:0/task:0/device:GPU:0 -> device: 0, name: GeForce GTX 1060 6GB, pci bus id: 0000:01:00.0, compute capability: 6.1\r\nMatMul: (MatMul): /job:localhost/replica:0/task:0/device:GPU:0\r\nb: (Const): /job:localhost/replica:0/task:0/device:GPU:0\r\na: (Const): /job:localhost/replica:0/task:0/device:GPU:0\r\n[[ 22.  28.]\r\n [ 49.  64.]]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5b9a\u8bbe\u5907",children:"\u6307\u5b9a\u8bbe\u5907"}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u6307\u5b9a\u53ef\u7528\u7684\u4efb\u4f55\u8bbe\u5907\u8fdb\u884c\u8fd0\u7b97\u3002\u4ee5\u6307\u5b9a CPU \u4e3a\u4f8b\uff0c\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"with tf.device('/cpu:0')"})," \u5305\u88f9\u5bf9\u5e94\u4ee3\u7801\u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"with tf.device('/cpu:0'):\r\n    a = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[2, 3], name='a')\r\n    b = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[3, 2], name='b')\r\nc = tf.matmul(a, b)\r\nsess = tf.Session(config=tf.ConfigProto(log_device_placement=True))\r\nprint(sess.run(c))\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4ece\u7ed3\u679c\u53ef\u4ee5\u770b\u5230 ",(0,s.jsx)(e.code,{children:"a"})," \u548c ",(0,s.jsx)(e.code,{children:"b"})," \u4f7f\u7528 CPU\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"MatMul: (MatMul): /job:localhost/replica:0/task:0/device:GPU:0\r\nb: (Const): /job:localhost/replica:0/task:0/device:CPU:0\r\na: (Const): /job:localhost/replica:0/task:0/device:CPU:0\r\n[[ 22.  28.]\r\n [ 49.  64.]]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"gpu-\u5185\u5b58\u5206\u914d",children:"GPU \u5185\u5b58\u5206\u914d"}),"\n",(0,s.jsxs)(e.p,{children:["TensorFlow \u9ed8\u8ba4\u80fd\u591f\u4f7f\u7528 GPU \u7684\u5168\u90e8\u5185\u5b58\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"per_process_gpu_memory_fraction"})," \u6765\u63a7\u5236\u5185\u5b58\u5206\u914d\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u5982\u4e0b\u4e3a\u4f8b\uff0c\u5bf9\u4e8e\u53ef\u7528\u7684 GPU\uff0cTensorFlow \u53ea\u5206\u914d\u5176\u5185\u5b58\u7684 40%\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"config = tf.ConfigProto()\r\nconfig.gpu_options.per_process_gpu_memory_fraction = 0.4\r\nsession = tf.Session(config=config, ...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"cpu-vs-gpu",children:"CPU vs GPU"}),"\n",(0,s.jsx)(e.h3,{id:"\u6d4b\u8bd5\u4e00",children:"\u6d4b\u8bd5\u4e00"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u672c\u8282\u4ee3\u7801\u6458\u81ea ",(0,s.jsx)(e.code,{children:"Erik Hallstr\xf6m"})," \u7684 ",(0,s.jsx)(e.code,{children:"TensorFlow - CPU vs GPU"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u5217\u4ee3\u7801\u793a\u4f8b\u521b\u5efa\u968f\u673a\u77e9\u9635\u5bf9\uff0c\u5e76\u5bf9 CPU \u548c GPU \u8ba1\u7b97\u8fd0\u884c\u77e9\u9635\u4e58\u79ef\u8017\u65f6\u8fdb\u884c\u7ed8\u56fe\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from __future__ import print_function\r\nimport matplotlib\r\nimport matplotlib.pyplot as plt\r\nimport tensorflow as tf\r\nimport time\r\n\r\n\r\ndef get_times(maximum_time):\r\n    device_times = {\r\n        \"/gpu:0\": [],\r\n        \"/cpu:0\": []\r\n    }\r\n    matrix_sizes = range(500, 50000, 50)\r\n\r\n    for size in matrix_sizes:\r\n        for device_name in device_times.keys():\r\n\r\n            print(\"####### Calculating on the \" + device_name + \" #######\")\r\n\r\n            shape = (size, size)\r\n            data_type = tf.float16\r\n            with tf.device(device_name):\r\n                r1 = tf.random_uniform(shape=shape, minval=0, maxval=1, dtype=data_type)\r\n                r2 = tf.random_uniform(shape=shape, minval=0, maxval=1, dtype=data_type)\r\n                dot_operation = tf.matmul(r2, r1)\r\n\r\n            with tf.Session(config=tf.ConfigProto(log_device_placement=True)) as session:\r\n                start_time = time.time()\r\n                result = session.run(dot_operation)\r\n                time_taken = time.time() - start_time\r\n                print(result)\r\n                device_times[device_name].append(time_taken)\r\n\r\n            print(device_times)\r\n\r\n            if time_taken > maximum_time:\r\n                return device_times, matrix_sizes\r\n\r\n\r\ndevice_times, matrix_sizes = get_times(1.5)\r\ngpu_times = device_times[\"/gpu:0\"]\r\ncpu_times = device_times[\"/cpu:0\"]\r\n\r\nplt.plot(matrix_sizes[:len(gpu_times)], gpu_times, 'o-', label='Nvidia GPU')\r\nplt.plot(matrix_sizes[:len(cpu_times)], cpu_times, 'o-', label='Intel CPU')\r\nplt.legend(loc='upper left')\r\nplt.ylabel('Time')\r\nplt.xlabel('Matrix size')\r\nplt.show()\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0cGPU Nvidia GTX 1060 \u6bd4 CPU Intel i5-4590 \u5feb\u5f97\u591a\u3002"}),"\n",(0,s.jsx)(e.img,{src:"http://owin2m3bm.bkt.clouddn.com/images/self_dev/tensorflow_cpu_i5_vs_gpu_gtx1060.png-szdevimg",width:"600"}),"\n",(0,s.jsx)(e.h3,{id:"\u6d4b\u8bd5\u4e8c",children:"\u6d4b\u8bd5\u4e8c"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 TensorFlow \u5b98\u65b9\u7684\u6d4b\u8bd5\u57fa\u51c6 ",(0,s.jsx)(e.a,{href:"https://github.com/tensorflow/models/blob/master/tutorials/image/alexnet/alexnet_benchmark.py",children:"alexnet_benchmark.py"})," \uff0c\u4e0b\u8f7d\u8fd0\u884c\u5373\u53ef\uff0c\u6d4b\u8bd5\u6570\u503c\u8d8a\u5c0f\u8868\u793a\u6027\u80fd\u8d8a\u9ad8\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u6863\u8bf4\u660e\u4e2d\u6709\u4e24\u4e2a\u578b\u53f7 GPU \u7684\u6d4b\u8bd5\u7ed3\u679c\u3002\u5b9e\u6d4b GPU Nvidia GTX 1060 \u6027\u80fd\u6bd4 Tesla K40c \u9ad8\uff0c\u6bd4 Titan X \u7565\u4f4e\u3002\u8fd0\u884c\u65f6\u95f4\u5728\u4e00\u5206\u949f\u4ee5\u5185\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Forward pass:\r\nRun on Tesla K40c: 145 +/- 1.5 ms / batch\r\nRun on Titan X:     70 +/- 0.1 ms / batch\r\n\r\nForward-backward pass:\r\nRun on Tesla K40c: 480 +/- 48 ms / batch\r\nRun on Titan X:    244 +/- 30 ms / batch\n"})}),"\n",(0,s.jsx)(e.p,{children:"CPU i7-4790 \u6574\u4e2a\u8fd0\u884c\u65f6\u95f4\u975e\u5e38\u6162\uff0c\u603b\u8ba1\u534a\u5c0f\u65f6\uff0c\u6d4b\u8bd5\u6570\u503c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"2018-02-06 18:49:48.583154: step 0, duration = 2.378\r\n2018-02-06 18:50:12.219506: step 10, duration = 2.313\r\n2018-02-06 18:50:35.406833: step 20, duration = 2.330\r\n2018-02-06 18:50:58.599159: step 30, duration = 2.381\r\n2018-02-06 18:51:23.830602: step 40, duration = 2.428\r\n2018-02-06 18:51:48.215997: step 50, duration = 2.323\r\n2018-02-06 18:52:12.204369: step 60, duration = 2.321\r\n2018-02-06 18:52:35.690712: step 70, duration = 2.366\r\n2018-02-06 18:52:59.131053: step 80, duration = 2.365\r\n2018-02-06 18:53:22.596395: step 90, duration = 2.304\r\n2018-02-06 18:53:44.367640: Forward across 100 steps, 2.382 +/- 0.090 sec / batch\r\n2018-02-06 18:55:18.129003: step 0, duration = 8.878\r\n2018-02-06 18:56:46.255044: step 10, duration = 10.011\r\n2018-02-06 18:59:23.953064: step 20, duration = 15.741\r\n2018-02-06 19:02:02.905155: step 30, duration = 16.486\r\n2018-02-06 19:04:43.003312: step 40, duration = 16.077\r\n2018-02-06 19:07:17.444146: step 50, duration = 16.309\r\n2018-02-06 19:09:51.051932: step 60, duration = 15.028\r\n2018-02-06 19:12:28.297926: step 70, duration = 16.052\r\n2018-02-06 19:15:07.700043: step 80, duration = 16.082\r\n2018-02-06 19:17:41.663849: step 90, duration = 14.968\r\n2018-02-06 19:19:58.509676: Forward-backward across 100 steps, 14.893 +/- 2.211 sec / batch\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsx)(e.p,{children:"\u795e\u7ecf\u7f51\u7edc\u8bad\u7ec3\u8fc7\u7a0b\u5747\u9700\u8981\u8ba1\u7b97\u5927\u91cf\u7684\u77e9\u9635\u4e58\u6cd5\uff0c\u548c CPU \u76f8\u6bd4\uff0cGPU \u80fd\u591f\u5f88\u5feb\u5730\u8bad\u7ec3\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>o});var s=i(67294);const r={},l=s.createContext(r);function o(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9057],{93485:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>h,toc:()=>o});var s=c(74848),i=c(28453);const d={description:""},l="\u811a\u672c\u9664\u9519",h={id:"modern-linux/bash-tutorial/debug",title:"\u811a\u672c\u9664\u9519",description:"",source:"@site/docs/modern-linux/99-bash-tutorial/17-debug.md",sourceDirName:"modern-linux/99-bash-tutorial",slug:"/modern-linux/bash-tutorial/debug",permalink:"/site/docs/modern-linux/bash-tutorial/debug",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{description:""},sidebar:"modernlinuxSidebar",previous:{title:"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4",permalink:"/site/docs/modern-linux/bash-tutorial/set"},next:{title:"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4",permalink:"/site/docs/modern-linux/bash-tutorial/mktemp"}},r={},o=[{value:"\u5e38\u89c1\u9519\u8bef",id:"\u5e38\u89c1\u9519\u8bef",level:2},{value:"<code>bash</code>\u7684<code>-x</code>\u53c2\u6570",id:"bash\u7684-x\u53c2\u6570",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"LINENO",id:"lineno",level:3},{value:"FUNCNAME",id:"funcname",level:3},{value:"BASH_SOURCE",id:"bash_source",level:3},{value:"BASH_LINENO",id:"bash_lineno",level:3}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u811a\u672c\u9664\u9519",children:"\u811a\u672c\u9664\u9519"})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7ae0\u4ecb\u7ecd\u5982\u4f55\u5bf9 Shell \u811a\u672c\u9664\u9519\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u89c1\u9519\u8bef",children:"\u5e38\u89c1\u9519\u8bef"}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u5199 Shell \u811a\u672c\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u8003\u8651\u5230\u547d\u4ee4\u5931\u8d25\u7684\u60c5\u51b5\uff0c\u5426\u5219\u5f88\u5bb9\u6613\u51fa\u9519\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#! /bin/bash\n\ndir_name=/path/not/exist\n\ncd $dir_name\nrm *\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u811a\u672c\u4e2d\uff0c\u5982\u679c\u76ee\u5f55",(0,s.jsx)(e.code,{children:"$dir_name"}),"\u4e0d\u5b58\u5728\uff0c",(0,s.jsx)(e.code,{children:"cd $dir_name"}),"\u547d\u4ee4\u5c31\u4f1a\u6267\u884c\u5931\u8d25\u3002\u8fd9\u65f6\uff0c\u5c31\u4e0d\u4f1a\u6539\u53d8\u5f53\u524d\u76ee\u5f55\uff0c\u811a\u672c\u4f1a\u7ee7\u7eed\u6267\u884c\u4e0b\u53bb\uff0c\u5bfc\u81f4",(0,s.jsx)(e.code,{children:"rm *"}),"\u547d\u4ee4\u5220\u5149\u5f53\u524d\u76ee\u5f55\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u6539\u6210\u4e0b\u9762\u7684\u6837\u5b50\uff0c\u4e5f\u4f1a\u6709\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd $dir_name && rm *\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u811a\u672c\u4e2d\uff0c\u53ea\u6709",(0,s.jsx)(e.code,{children:"cd $dir_name"}),"\u6267\u884c\u6210\u529f\uff0c\u624d\u4f1a\u6267\u884c",(0,s.jsx)(e.code,{children:"rm *"}),"\u3002\u4f46\u662f\uff0c\u5982\u679c\u53d8\u91cf",(0,s.jsx)(e.code,{children:"$dir_name"}),"\u4e3a\u7a7a\uff0c",(0,s.jsx)(e.code,{children:"cd"}),"\u5c31\u4f1a\u8fdb\u5165\u7528\u6237\u4e3b\u76ee\u5f55\uff0c\u4ece\u800c\u5220\u5149\u7528\u6237\u4e3b\u76ee\u5f55\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u5199\u6cd5\u624d\u662f\u6b63\u786e\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"[[ -d $dir_name ]] && cd $dir_name && rm *\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5148\u5224\u65ad\u76ee\u5f55",(0,s.jsx)(e.code,{children:"$dir_name"}),"\u662f\u5426\u5b58\u5728\uff0c\u7136\u540e\u624d\u6267\u884c\u5176\u4ed6\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u653e\u5fc3\u5220\u9664\u4ec0\u4e48\u6587\u4ef6\uff0c\u53ef\u4ee5\u5148\u6253\u5370\u51fa\u6765\u770b\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"[[ -d $dir_name ]] && cd $dir_name && echo rm *\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"echo rm *"}),"\u4e0d\u4f1a\u5220\u9664\u6587\u4ef6\uff0c\u53ea\u4f1a\u6253\u5370\u51fa\u6765\u8981\u5220\u9664\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.h2,{id:"bash\u7684-x\u53c2\u6570",children:[(0,s.jsx)(e.code,{children:"bash"}),"\u7684",(0,s.jsx)(e.code,{children:"-x"}),"\u53c2\u6570"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"bash"}),"\u7684",(0,s.jsx)(e.code,{children:"-x"}),"\u53c2\u6570\u53ef\u4ee5\u5728\u6267\u884c\u6bcf\u4e00\u884c\u547d\u4ee4\u4e4b\u524d\uff0c\u6253\u5370\u8be5\u547d\u4ee4\u3002\u4e00\u65e6\u51fa\u9519\uff0c\u8fd9\u6837\u5c31\u6bd4\u8f83\u5bb9\u6613\u8ffd\u67e5\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u811a\u672c",(0,s.jsx)(e.code,{children:"script.sh"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# script.sh\necho hello world\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u52a0\u4e0a",(0,s.jsx)(e.code,{children:"-x"}),"\u53c2\u6570\uff0c\u6267\u884c\u6bcf\u6761\u547d\u4ee4\u4e4b\u524d\uff0c\u90fd\u4f1a\u663e\u793a\u8be5\u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ bash -x script.sh\n+ echo hello world\nhello world\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u884c\u9996\u4e3a",(0,s.jsx)(e.code,{children:"+"}),"\u7684\u884c\uff0c\u663e\u793a\u8be5\u884c\u662f\u6240\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u4e0b\u4e00\u884c\u624d\u662f\u8be5\u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u518d\u770b\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"-x"}),"\u5199\u5728\u811a\u672c\u5185\u90e8\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#! /bin/bash -x\n# trouble: script to demonstrate common errors\n\nnumber=1\nif [ $number = 1 ]; then\n    echo "Number is equal to 1."\nelse\n    echo "Number is not equal to 1."\nfi\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u811a\u672c\u6267\u884c\u4e4b\u540e\uff0c\u4f1a\u8f93\u51fa\u6bcf\u4e00\u884c\u547d\u4ee4\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ trouble\n+ number=1\n+ '[' 1 = 1 ']'\n+ echo 'Number is equal to 1.'\nNumber is equal to 1.\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8f93\u51fa\u7684\u547d\u4ee4\u4e4b\u524d\u7684",(0,s.jsx)(e.code,{children:"+"}),"\u53f7\uff0c\u662f\u7531\u7cfb\u7edf\u53d8\u91cf",(0,s.jsx)(e.code,{children:"PS4"}),"\u51b3\u5b9a\uff0c\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u53d8\u91cf\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ export PS4='$LINENO + '\n$ trouble\n5 + number=1\n7 + '[' 1 = 1 ']'\n8 + echo 'Number is equal to 1.'\nNumber is equal to 1.\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53e6\u5916\uff0c",(0,s.jsx)(e.code,{children:"set"}),"\u547d\u4ee4\u4e5f\u53ef\u4ee5\u8bbe\u7f6e Shell \u7684\u884c\u4e3a\u53c2\u6570\uff0c\u6709\u5229\u4e8e\u811a\u672c\u9664\u9519\uff0c\u8be6\u89c1\u300aset \u547d\u4ee4\u300b\u4e00\u7ae0\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u5e38\u7528\u4e8e\u9664\u9519\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"lineno",children:"LINENO"}),"\n",(0,s.jsxs)(e.p,{children:["\u53d8\u91cf",(0,s.jsx)(e.code,{children:"LINENO"}),"\u8fd4\u56de\u5b83\u5728\u811a\u672c\u91cc\u9762\u7684\u884c\u53f7\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\necho "This is line $LINENO"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u4e0a\u9762\u7684\u811a\u672c",(0,s.jsx)(e.code,{children:"test.sh"}),"\uff0c",(0,s.jsx)(e.code,{children:"$LINENO"}),"\u4f1a\u8fd4\u56de",(0,s.jsx)(e.code,{children:"3"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ ./test.sh\nThis is line 3\n"})}),"\n",(0,s.jsx)(e.h3,{id:"funcname",children:"FUNCNAME"}),"\n",(0,s.jsxs)(e.p,{children:["\u53d8\u91cf",(0,s.jsx)(e.code,{children:"FUNCNAME"}),"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5185\u5bb9\u662f\u5f53\u524d\u7684\u51fd\u6570\u8c03\u7528\u5806\u6808\u3002\u8be5\u6570\u7ec4\u7684 0 \u53f7\u6210\u5458\u662f\u5f53\u524d\u8c03\u7528\u7684\u51fd\u6570\uff0c1 \u53f7\u6210\u5458\u662f\u8c03\u7528\u5f53\u524d\u51fd\u6570\u7684\u51fd\u6570\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\nfunction func1() {\n    echo "func1: FUNCNAME0 is ${FUNCNAME[0]}"\n    echo "func1: FUNCNAME1 is ${FUNCNAME[1]}"\n    echo "func1: FUNCNAME2 is ${FUNCNAME[2]}"\n    func2\n}\n\nfunction func2() {\n    echo "func2: FUNCNAME0 is ${FUNCNAME[0]}"\n    echo "func2: FUNCNAME1 is ${FUNCNAME[1]}"\n    echo "func2: FUNCNAME2 is ${FUNCNAME[2]}"\n}\n\nfunc1\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u4e0a\u9762\u7684\u811a\u672c",(0,s.jsx)(e.code,{children:"test.sh"}),"\uff0c\u7ed3\u679c\u5982\u4e0b\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ ./test.sh\nfunc1: FUNCNAME0 is func1\nfunc1: FUNCNAME1 is main\nfunc1: FUNCNAME2 is\nfunc2: FUNCNAME0 is func2\nfunc2: FUNCNAME1 is func1\nfunc2: FUNCNAME2 is main\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6267\u884c",(0,s.jsx)(e.code,{children:"func1"}),"\u65f6\uff0c\u53d8\u91cf",(0,s.jsx)(e.code,{children:"FUNCNAME"}),"\u7684 0 \u53f7\u6210\u5458\u662f",(0,s.jsx)(e.code,{children:"func1"}),"\uff0c1 \u53f7\u6210\u5458\u662f\u8c03\u7528",(0,s.jsx)(e.code,{children:"func1"}),"\u7684\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main"}),"\u3002\u6267\u884c",(0,s.jsx)(e.code,{children:"func2"}),"\u65f6\uff0c\u53d8\u91cf",(0,s.jsx)(e.code,{children:"FUNCNAME"}),"\u7684 0 \u53f7\u6210\u5458\u662f",(0,s.jsx)(e.code,{children:"func2"}),"\uff0c1 \u53f7\u6210\u5458\u662f\u8c03\u7528",(0,s.jsx)(e.code,{children:"func2"}),"\u7684",(0,s.jsx)(e.code,{children:"func1"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"bash_source",children:"BASH_SOURCE"}),"\n",(0,s.jsxs)(e.p,{children:["\u53d8\u91cf",(0,s.jsx)(e.code,{children:"BASH_SOURCE"}),"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5185\u5bb9\u662f\u5f53\u524d\u7684\u811a\u672c\u8c03\u7528\u5806\u6808\u3002\u8be5\u6570\u7ec4\u7684 0 \u53f7\u6210\u5458\u662f\u5f53\u524d\u6267\u884c\u7684\u811a\u672c\uff0c1 \u53f7\u6210\u5458\u662f\u8c03\u7528\u5f53\u524d\u811a\u672c\u7684\u811a\u672c\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff0c\u8ddf\u53d8\u91cf",(0,s.jsx)(e.code,{children:"FUNCNAME"}),"\u662f\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u6709\u4e24\u4e2a\u5b50\u811a\u672c",(0,s.jsx)(e.code,{children:"lib1.sh"}),"\u548c",(0,s.jsx)(e.code,{children:"lib2.sh"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# lib1.sh\nfunction func1() {\n    echo "func1: BASH_SOURCE0 is ${BASH_SOURCE[0]}"\n    echo "func1: BASH_SOURCE1 is ${BASH_SOURCE[1]}"\n    echo "func1: BASH_SOURCE2 is ${BASH_SOURCE[2]}"\n    func2\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# lib2.sh\nfunction func2() {\n    echo "func2: BASH_SOURCE0 is ${BASH_SOURCE[0]}"\n    echo "func2: BASH_SOURCE1 is ${BASH_SOURCE[1]}"\n    echo "func2: BASH_SOURCE2 is ${BASH_SOURCE[2]}"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7136\u540e\uff0c\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main.sh"}),"\u8c03\u7528\u4e0a\u9762\u4e24\u4e2a\u5b50\u811a\u672c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\n# main.sh\n\nsource lib1.sh\nsource lib2.sh\n\nfunc1\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main.sh"}),"\uff0c\u4f1a\u5f97\u5230\u4e0b\u9762\u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ ./main.sh\nfunc1: BASH_SOURCE0 is lib1.sh\nfunc1: BASH_SOURCE1 is ./main.sh\nfunc1: BASH_SOURCE2 is\nfunc2: BASH_SOURCE0 is lib2.sh\nfunc2: BASH_SOURCE1 is lib1.sh\nfunc2: BASH_SOURCE2 is ./main.sh\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6267\u884c\u51fd\u6570",(0,s.jsx)(e.code,{children:"func1"}),"\u65f6\uff0c\u53d8\u91cf",(0,s.jsx)(e.code,{children:"BASH_SOURCE"}),"\u7684 0 \u53f7\u6210\u5458\u662f",(0,s.jsx)(e.code,{children:"func1"}),"\u6240\u5728\u7684\u811a\u672c",(0,s.jsx)(e.code,{children:"lib1.sh"}),"\uff0c1 \u53f7\u6210\u5458\u662f\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main.sh"}),"\uff1b\u6267\u884c\u51fd\u6570",(0,s.jsx)(e.code,{children:"func2"}),"\u65f6\uff0c\u53d8\u91cf",(0,s.jsx)(e.code,{children:"BASH_SOURCE"}),"\u7684 0 \u53f7\u6210\u5458\u662f",(0,s.jsx)(e.code,{children:"func2"}),"\u6240\u5728\u7684\u811a\u672c",(0,s.jsx)(e.code,{children:"lib2.sh"}),"\uff0c1 \u53f7\u6210\u5458\u662f\u8c03\u7528",(0,s.jsx)(e.code,{children:"func2"}),"\u7684\u811a\u672c",(0,s.jsx)(e.code,{children:"lib1.sh"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"bash_lineno",children:"BASH_LINENO"}),"\n",(0,s.jsxs)(e.p,{children:["\u53d8\u91cf",(0,s.jsx)(e.code,{children:"BASH_LINENO"}),"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5185\u5bb9\u662f\u6bcf\u4e00\u8f6e\u8c03\u7528\u5bf9\u5e94\u7684\u884c\u53f7\u3002",(0,s.jsx)(e.code,{children:"${BASH_LINENO[$i]}"}),"\u8ddf",(0,s.jsx)(e.code,{children:"${FUNCNAME[$i]}"}),"\u662f\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\uff0c\u8868\u793a",(0,s.jsx)(e.code,{children:"${FUNCNAME[$i]}"}),"\u5728\u8c03\u7528\u5b83\u7684\u811a\u672c\u6587\u4ef6",(0,s.jsx)(e.code,{children:"${BASH_SOURCE[$i+1]}"}),"\u91cc\u9762\u7684\u884c\u53f7\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u6709\u4e24\u4e2a\u5b50\u811a\u672c",(0,s.jsx)(e.code,{children:"lib1.sh"}),"\u548c",(0,s.jsx)(e.code,{children:"lib2.sh"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# lib1.sh\nfunction func1() {\n    echo "func1: BASH_LINENO is ${BASH_LINENO[0]}"\n    echo "func1: FUNCNAME is ${FUNCNAME[0]}"\n    echo "func1: BASH_SOURCE is ${BASH_SOURCE[1]}"\n\n    func2\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# lib2.sh\nfunction func2() {\n    echo "func2: BASH_LINENO is ${BASH_LINENO[0]}"\n    echo "func2: FUNCNAME is ${FUNCNAME[0]}"\n    echo "func2: BASH_SOURCE is ${BASH_SOURCE[1]}"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7136\u540e\uff0c\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main.sh"}),"\u8c03\u7528\u4e0a\u9762\u4e24\u4e2a\u5b50\u811a\u672c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\n# main.sh\n\nsource lib1.sh\nsource lib2.sh\n\nfunc1\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u4e3b\u811a\u672c",(0,s.jsx)(e.code,{children:"main.sh"}),"\uff0c\u4f1a\u5f97\u5230\u4e0b\u9762\u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ ./main.sh\nfunc1: BASH_LINENO is 7\nfunc1: FUNCNAME is func1\nfunc1: BASH_SOURCE is main.sh\nfunc2: BASH_LINENO is 8\nfunc2: FUNCNAME is func2\nfunc2: BASH_SOURCE is lib1.sh\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u51fd\u6570",(0,s.jsx)(e.code,{children:"func1"}),"\u662f\u5728",(0,s.jsx)(e.code,{children:"main.sh"}),"\u7684\u7b2c 7 \u884c\u8c03\u7528\uff0c\u51fd\u6570",(0,s.jsx)(e.code,{children:"func2"}),"\u662f\u5728",(0,s.jsx)(e.code,{children:"lib1.sh"}),"\u7684\u7b2c 8 \u884c\u8c03\u7528\u7684\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>l,x:()=>h});var s=c(96540);const i={},d=s.createContext(i);function l(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5033],{45067:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var c=s(74848),d=s(28453);const l={description:""},r="\u64cd\u4f5c\u5386\u53f2",h={id:"modern-linux/bash-tutorial/history",title:"\u64cd\u4f5c\u5386\u53f2",description:"",source:"@site/docs/modern-linux/99-bash-tutorial/07-history.md",sourceDirName:"modern-linux/99-bash-tutorial",slug:"/modern-linux/bash-tutorial/history",permalink:"/site/docs/modern-linux/bash-tutorial/history",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:""},sidebar:"modernlinuxSidebar",previous:{title:"Bash \u7684\u7b97\u672f\u8fd0\u7b97",permalink:"/site/docs/modern-linux/bash-tutorial/arithmetic"},next:{title:"Bash \u884c\u64cd\u4f5c",permalink:"/site/docs/modern-linux/bash-tutorial/readline"}},i={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"history \u547d\u4ee4",id:"history-\u547d\u4ee4",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"HISTTIMEFORMAT",id:"histtimeformat",level:3},{value:"HISTSIZE",id:"histsize",level:3},{value:"HISTIGNORE",id:"histignore",level:3},{value:"Ctrl + r",id:"ctrl--r",level:2},{value:"! \u547d\u4ee4",id:"-\u547d\u4ee4",level:2},{value:"! + \u884c\u53f7",id:"--\u884c\u53f7",level:3},{value:"!- \u6570\u5b57",id:"--\u6570\u5b57",level:3},{value:"!!",id:"",level:3},{value:"! + \u641c\u7d22\u8bcd",id:"--\u641c\u7d22\u8bcd",level:3},{value:"!? + \u641c\u7d22\u8bcd",id:"--\u641c\u7d22\u8bcd-1",level:3},{value:"!$\uff0c!*",id:"-1",level:3},{value:"!",id:"-2",level:3},{value:"<code>^string1^string2</code>",id:"string1string2",level:2},{value:"histverify \u53c2\u6570",id:"histverify-\u53c2\u6570",level:2},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u64cd\u4f5c\u5386\u53f2",children:"\u64cd\u4f5c\u5386\u53f2"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:["Bash \u4f1a\u4fdd\u7559\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\uff0c\u5373\u7528\u6237\u8f93\u5165\u7684\u6bcf\u4e00\u6761\u547d\u4ee4\u90fd\u4f1a\u8bb0\u5f55\uff0c\u9ed8\u8ba4\u662f\u4fdd\u5b58\u6700\u8fd1\u7684 500 \u6761\u547d\u4ee4\u3002\u6709\u4e86\u64cd\u4f5c\u5386\u53f2\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u65b9\u5411\u952e\u7684",(0,c.jsx)(n.code,{children:"\u2191"}),"\u548c",(0,c.jsx)(n.code,{children:"\u2193"}),"\uff0c\u5feb\u901f\u6d4f\u89c8\u4e0a\u4e00\u6761\u548c\u4e0b\u4e00\u6761\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9000\u51fa\u5f53\u524d Shell \u7684\u65f6\u5019\uff0cBash \u4f1a\u5c06\u7528\u6237\u5728\u5f53\u524d Shell \u7684\u64cd\u4f5c\u5386\u53f2\u5199\u5165",(0,c.jsx)(n.code,{children:"~/.bash_history"}),"\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9ed8\u8ba4\u50a8\u5b58 500 \u4e2a\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTFILE"}),"\u603b\u662f\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo $HISTFILE\n/home/me/.bash_history\n"})}),"\n",(0,c.jsx)(n.h2,{id:"history-\u547d\u4ee4",children:"history \u547d\u4ee4"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"history"}),"\u547d\u4ee4\u4f1a\u8f93\u51fa",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u5373\u8f93\u51fa\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history\n...\n498 echo Goodbye\n499 ls ~\n500 cd\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\uff0c\u67e5\u770b\u6700\u8fd1\u7684\u64cd\u4f5c\u3002\u76f8\u6bd4\u76f4\u63a5\u8bfb\u53d6",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\uff0c\u5b83\u7684\u4f18\u52bf\u5728\u4e8e\u6240\u6709\u547d\u4ee4\u4e4b\u524d\u52a0\u4e0a\u4e86\u884c\u53f7\u3002\u6700\u8fd1\u7684\u64cd\u4f5c\u5728\u6700\u540e\u9762\uff0c\u884c\u53f7\u6700\u5927\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u641c\u7d22\u67d0\u4e2a\u4ee5\u524d\u6267\u884c\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u914d\u5408",(0,c.jsx)(n.code,{children:"grep"}),"\u547d\u4ee4\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history | grep /usr/bin\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u8fd4\u56de",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u91cc\u9762\uff0c\u90a3\u4e9b\u5305\u542b",(0,c.jsx)(n.code,{children:"/usr/bin"}),"\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"history"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-c"}),"\u53c2\u6570\u53ef\u4ee5\u6e05\u9664\u64cd\u4f5c\u5386\u53f2\uff0c\u5373\u6e05\u7a7a",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history -c\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,c.jsx)(n.h3,{id:"histtimeformat",children:"HISTTIMEFORMAT"}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u5b9a\u5236\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTTIMEFORMAT"}),"\uff0c",(0,c.jsx)(n.code,{children:"history"}),"\u7684\u8f93\u51fa\u7ed3\u679c\u8fd8\u53ef\u4ee5\u663e\u793a\u6bcf\u4e2a\u64cd\u4f5c\u7684\u65f6\u95f4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ export HISTTIMEFORMAT='%F %T  '\n$ history\n1 2013-06-09 10:40:12 cat /etc/issue\n2 2013-06-09 10:40:12 clear\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"%F"}),"\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:"%Y - %m - %d"}),"\uff08\u5e74 - \u6708 - \u65e5\uff09\uff0c",(0,c.jsx)(n.code,{children:"%T"}),"\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:" %H : %M : %S"}),"\uff08\u65f6\uff1a\u5206\uff1a\u79d2\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53ea\u8981\u8bbe\u7f6e",(0,c.jsx)(n.code,{children:"HISTTIMEFORMAT"}),"\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u4f1a\u5728",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u4fdd\u5b58\u547d\u4ee4\u7684\u6267\u884c\u65f6\u95f4\u6233\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c31\u4e0d\u4f1a\u4fdd\u5b58\u65f6\u95f4\u6233\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"histsize",children:"HISTSIZE"}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTSIZE"}),"\u8bbe\u7f6e\u4fdd\u5b58\u5386\u53f2\u64cd\u4f5c\u7684\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ export HISTSIZE=10000\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u547d\u4ee4\u8bbe\u7f6e\u4fdd\u5b58\u8fc7\u53bb 10000 \u6761\u64cd\u4f5c\u5386\u53f2\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u5e0c\u671b\u4fdd\u5b58\u672c\u6b21\u64cd\u4f5c\u7684\u5386\u53f2\uff0c\u53ef\u4ee5\u8bbe\u7f6e",(0,c.jsx)(n.code,{children:"HISTSIZE"}),"\u7b49\u4e8e 0\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"export HISTSIZE=0\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c",(0,c.jsx)(n.code,{children:"HISTSIZE=0"}),"\u5199\u5165\u7528\u6237\u4e3b\u76ee\u5f55\u7684",(0,c.jsx)(n.code,{children:"~/.bashrc"}),"\u6587\u4ef6\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u4fdd\u7559\u8be5\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\u3002\u5982\u679c\u5199\u5165",(0,c.jsx)(n.code,{children:"/etc/profile"}),"\uff0c\u6574\u4e2a\u7cfb\u7edf\u90fd\u4e0d\u4f1a\u4fdd\u7559\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"histignore",children:"HISTIGNORE"}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTIGNORE"}),"\u53ef\u4ee5\u8bbe\u7f6e\u54ea\u4e9b\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"export HISTIGNORE='pwd:ls:exit'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u8bbe\u7f6e\uff0c",(0,c.jsx)(n.code,{children:"pwd"}),"\u3001",(0,c.jsx)(n.code,{children:"ls"}),"\u3001",(0,c.jsx)(n.code,{children:"exit"}),"\u8fd9\u4e09\u4e2a\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"ctrl--r",children:"Ctrl + r"}),"\n",(0,c.jsxs)(n.p,{children:["\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u6309\u4e0b",(0,c.jsx)(n.code,{children:"Ctrl + r"}),"\u5feb\u6377\u952e\uff0c\u5c31\u53ef\u4ee5\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\uff0c\u9009\u62e9\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Ctrl + r"}),"\u76f8\u5f53\u4e8e\u6253\u5f00\u4e00\u4e2a",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u7684\u641c\u7d22\u63a5\u53e3\uff0c\u76f4\u63a5\u952e\u5165\u547d\u4ee4\u7684\u5f00\u5934\u90e8\u5206\uff0cShell \u5c31\u4f1a\u81ea\u52a8\u5728\u8be5\u6587\u4ef6\u4e2d\u53cd\u5411\u67e5\u8be2\uff08\u5373\u5148\u67e5\u8be2\u6700\u8fd1\u7684\u547d\u4ee4\uff09\uff0c\u663e\u793a\u6700\u8fd1\u4e00\u6761\u5339\u914d\u7684\u7ed3\u679c\uff0c\u8fd9\u65f6\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u4f1a\u6267\u884c\u90a3\u6761\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"-\u547d\u4ee4",children:"! \u547d\u4ee4"}),"\n",(0,c.jsx)(n.h3,{id:"--\u884c\u53f7",children:"! + \u884c\u53f7"}),"\n",(0,c.jsxs)(n.p,{children:["\u64cd\u4f5c\u5386\u53f2\u7684\u6bcf\u4e00\u6761\u8bb0\u5f55\u90fd\u6709\u884c\u53f7\u3002\u77e5\u9053\u4e86\u547d\u4ee4\u7684\u884c\u53f7\u4ee5\u540e\uff0c\u53ef\u4ee5\u7528",(0,c.jsx)(n.code,{children:"\u611f\u53f9\u53f7 + \u884c\u53f7"}),"\u6267\u884c\u8be5\u547d\u4ee4\u3002\u5982\u679c\u60f3\u8981\u6267\u884c",(0,c.jsx)(n.code,{children:".bash_history"}),"\u91cc\u9762\u7684\u7b2c 8 \u6761\u547d\u4ee4\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ !8\n"})}),"\n",(0,c.jsx)(n.h3,{id:"--\u6570\u5b57",children:"!- \u6570\u5b57"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u6267\u884c\u672c\u6b21 Shell \u5bf9\u8bdd\u4e2d\u5012\u6570\u7684\u547d\u4ee4\uff0c\u6bd4\u5982\u6267\u884c\u5012\u6570\u7b2c 3 \u6761\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u8f93\u5165",(0,c.jsx)(n.code,{children:"!-3"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ touch a.txt\n$ touch b.txt\n$ touch c.txt\n\n$ !-3\ntouch a.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!-3"}),"\u8fd4\u56de\u5012\u6570\u7b2c 3 \u6761\u547d\u4ee4\uff0c\u5373",(0,c.jsx)(n.code,{children:"touch a.txt"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u8ddf",(0,c.jsx)(n.code,{children:"! + \u884c\u53f7"}),"\u7684\u4e3b\u8981\u533a\u522b\u662f\uff0c\u540e\u8005\u662f\u5728",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u4e2d\u4ece\u5934\u5f00\u59cb\u8ba1\u7b97\u884c\u6570\uff0c\u800c",(0,c.jsx)(n.code,{children:"!- \u6570\u5b57"}),"\u662f\u4ece\u5e95\u90e8\u5f00\u59cb\u5411\u4e0a\u8ba1\u7b97\u884c\u6570\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"",children:"!!"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"!!"}),"\u547d\u4ee4\u8fd4\u56de\u4e0a\u4e00\u6761\u547d\u4ee4\u3002\u5982\u679c\u9700\u8981\u91cd\u590d\u6267\u884c\u67d0\u4e00\u6761\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u4e0d\u65ad\u952e\u5165",(0,c.jsx)(n.code,{children:"!!"}),"\uff0c\u8fd9\u6837\u975e\u5e38\u65b9\u4fbf\u3002\u5b83\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"!-1"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo hello\nhello\n\n$ !!\necho hello\nhello\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!!"}),"\u4f1a\u8fd4\u56de\u5e76\u6267\u884c\u4e0a\u4e00\u6761\u547d\u4ee4",(0,c.jsx)(n.code,{children:"echo hello"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f7f\u7528\u67d0\u6761\u547d\u4ee4\uff0c\u7cfb\u7edf\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff0c\u8fd9\u65f6\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"sudo !!"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u62a5\u9519\uff0c\u6ca1\u6709\u6267\u884c\u6743\u9650\n$ yum update\n\n$ sudo !!\nsudo yum update\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"sudo !!"}),"\u8fd4\u56de",(0,c.jsx)(n.code,{children:"sudo yum update"}),"\uff0c\u4ece\u800c\u5c31\u53ef\u4ee5\u6b63\u786e\u6267\u884c\u4e86\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"--\u641c\u7d22\u8bcd",children:"! + \u641c\u7d22\u8bcd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"\u611f\u53f9\u53f7 + \u641c\u7d22\u8bcd"}),"\u53ef\u4ee5\u5feb\u901f\u6267\u884c\u5339\u914d\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo Hello World\nHello World\n\n$ echo Goodbye\nGoodbye\n\n$ !e\necho Goodbye\nGoodbye\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!e"}),"\u8868\u793a\u627e\u51fa\u64cd\u4f5c\u5386\u53f2\u4e4b\u4e2d\uff0c\u6700\u8fd1\u7684\u90a3\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"e"}),"\u5f00\u5934\u7684\u547d\u4ee4\u5e76\u6267\u884c\u3002Bash \u4f1a\u5148\u8f93\u51fa\u90a3\u4e00\u6761\u547d\u4ee4",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\uff0c\u7136\u540e\u76f4\u63a5\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u540c\u7406\uff0c",(0,c.jsx)(n.code,{children:"!echo"}),"\u4e5f\u4f1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"echo"}),"\u5f00\u5934\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ !echo\necho Goodbye\nGoodbye\n\n$ !echo H\necho Goodbye H\nGoodbye H\n\n$ !echo H G\necho Goodbye H G\nGoodbye H G\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c",(0,c.jsx)(n.code,{children:"\u611f\u53f9\u53f7 + \u641c\u7d22\u8bcd"}),"\u8bed\u6cd5\u53ea\u4f1a\u5339\u914d\u547d\u4ee4\uff0c\u4e0d\u4f1a\u5339\u914d\u53c2\u6570\u3002\u6240\u4ee5",(0,c.jsx)(n.code,{children:"!echo H"}),"\u4e0d\u4f1a\u6267\u884c",(0,c.jsx)(n.code,{children:"echo Hello World"}),"\uff0c\u800c\u662f\u4f1a\u6267\u884c",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\uff0c\u5e76\u628a\u53c2\u6570",(0,c.jsx)(n.code,{children:"H"}),"\u9644\u52a0\u5728\u8fd9\u6761\u547d\u4ee4\u4e4b\u540e\u3002\u540c\u7406\uff0c",(0,c.jsx)(n.code,{children:"!echo H G"}),"\u4e5f\u662f\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\u547d\u4ee4\u4e4b\u540e\u9644\u52a0",(0,c.jsx)(n.code,{children:"H G"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e",(0,c.jsx)(n.code,{children:"\u611f\u53f9\u53f7 + \u641c\u7d22\u8bcd"}),"\u4f1a\u6269\u5c55\u6210\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\uff0c\u6240\u4ee5\u542b\u6709",(0,c.jsx)(n.code,{children:"!"}),"\u7684\u5b57\u7b26\u4e32\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\uff0c\u5fc5\u987b\u975e\u5e38\u5c0f\u5fc3\uff0c\u5982\u679c\u5b83\u540e\u9762\u6709\u975e\u7a7a\u683c\u7684\u5b57\u7b26\uff0c\u5c31\u5f88\u6709\u53ef\u80fd\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "I say:\\"hello!\\""\nbash: !\\: event not found\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u62a5\u9519\uff0c\u539f\u56e0\u662f\u611f\u53f9\u53f7\u540e\u9762\u662f\u4e00\u4e2a\u53cd\u659c\u6760\uff0cBash \u4f1a\u5c1d\u8bd5\u5bfb\u627e\uff0c\u4ee5\u524d\u662f\u5426\u6267\u884c\u8fc7\u53cd\u659c\u6760\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u4e00\u65e6\u627e\u4e0d\u5230\u5c31\u4f1a\u62a5\u9519\u3002\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5728\u611f\u53f9\u53f7\u524d\u9762\uff0c\u4e5f\u52a0\u4e0a\u53cd\u659c\u6760\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "I say:\\"hello\\!\\""\nI say:"hello\\!"\n'})}),"\n",(0,c.jsx)(n.h3,{id:"--\u641c\u7d22\u8bcd-1",children:"!? + \u641c\u7d22\u8bcd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"!? + \u641c\u7d22\u8bcd"}),"\u53ef\u4ee5\u641c\u7d22\u547d\u4ee4\u7684\u4efb\u610f\u90e8\u5206\uff0c\u5305\u62ec\u53c2\u6570\u90e8\u5206\u3002\u5b83\u8ddf",(0,c.jsx)(n.code,{children:"! + \u641c\u7d22\u8bcd"}),"\u7684\u4e3b\u8981\u533a\u522b\u662f\uff0c\u540e\u8005\u662f\u4ece\u884c\u9996\u5f00\u59cb\u5339\u914d\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cat hello.txt\nHello world ..!\n\n$ !?hello.txt\ncat hello.txt\nHello world ..!\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!?hello.txt"}),"\u4f1a\u8fd4\u56de\u6700\u8fd1\u4e00\u6761\u5305\u62ec",(0,c.jsx)(n.code,{children:"hello.txt"}),"\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"-1",children:"!$\uff0c!*"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"!$"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff0c\u5b83\u7684\u53e6\u4e00\u79cd\u5199\u6cd5\u662f",(0,c.jsx)(n.code,{children:"$_"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"!*"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff0c\u5373\u9664\u4e86\u547d\u4ee4\u4ee5\u5916\u7684\u6240\u6709\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cp a.txt b.txt\n$ echo !$\nb.txt\n\n$ cp a.txt b.txt\n$ echo !*\na.txt b.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!$"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"b.txt"}),"\uff09\uff0c",(0,c.jsx)(n.code,{children:"!*"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"a.txt b.txt"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5339\u914d\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u67d0\u4e2a\u6307\u5b9a\u4f4d\u7f6e\u7684\u53c2\u6570\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!:n"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ ls a.txt b.txt c.txt\n\n$ echo !:2\nb.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!:2"}),"\u8fd4\u56de\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"b.txt"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u79cd\u5199\u6cd5\u7684",(0,c.jsx)(n.code,{children:"!:$"}),"\uff0c\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002\u4e8b\u5b9e\u4e0a\uff0c",(0,c.jsx)(n.code,{children:"!$"}),"\u5c31\u662f",(0,c.jsx)(n.code,{children:"!:$"}),"\u7684\u7b80\u5199\u5f62\u5f0f\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ ls a.txt b.txt c.txt\n\n$ echo !:$\necho c.txt\nc.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!:$"}),"\u4ee3\u8868\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"c.txt"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5339\u914d\u66f4\u4e45\u4ee5\u524d\u7684\u547d\u4ee4\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!<\u547d\u4ee4>:n"}),"\uff08\u6307\u5b9a\u4f4d\u7f6e\u7684\u53c2\u6570\uff09\u548c",(0,c.jsx)(n.code,{children:"!<\u547d\u4ee4>:$"}),"\uff08\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ ls !mkdir:$\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!mkdir:$"}),"\u4f1a\u8fd4\u56de\u524d\u9762\u6700\u540e\u4e00\u6761",(0,c.jsx)(n.code,{children:"mkdir"}),"\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ ls !mk:2\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!mk:2"}),"\u4f1a\u8fd4\u56de\u524d\u9762\u6700\u540e\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"mk"}),"\u5f00\u5934\u7684\u547d\u4ee4\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"-2",children:"!:p"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u53ea\u662f\u60f3\u8f93\u51fa\u4e0a\u4e00\u6761\u547d\u4ee4\uff0c\u800c\u4e0d\u662f\u6267\u884c\u5b83\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!:p"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo hello\n\n$ !:p\necho hello\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!:p"}),"\u53ea\u4f1a\u8f93\u51fa",(0,c.jsx)(n.code,{children:"echo hello"}),"\uff0c\u800c\u4e0d\u4f1a\u6267\u884c\u8fd9\u6761\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8f93\u51fa\u6700\u8fd1\u4e00\u6761\u5339\u914d\u7684\u547d\u4ee4\uff0c\u800c\u4e0d\u6267\u884c\u5b83\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!<\u547d\u4ee4>:p"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ !su:p\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!su:p"}),"\u4f1a\u8f93\u51fa\u524d\u9762\u6700\u8fd1\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"su"}),"\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u800c\u4e0d\u6267\u884c\u5b83\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"string1string2",children:(0,c.jsx)(n.code,{children:"^string1^string2"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"^string1^string2"}),"\u7528\u6765\u6267\u884c\u6700\u8fd1\u4e00\u6761\u5305\u542b",(0,c.jsx)(n.code,{children:"string1"}),"\u7684\u547d\u4ee4\uff0c\u5c06\u5176\u66ff\u6362\u6210",(0,c.jsx)(n.code,{children:"string2"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ rm /var/log/httpd/error.log\n$ ^error^access\nrm /var/log/httpd/access.log\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"^error^access"}),"\u5c06\u6700\u8fd1\u4e00\u6761\u542b\u6709",(0,c.jsx)(n.code,{children:"error"}),"\u7684\u547d\u4ee4\u91cc\u9762\u7684",(0,c.jsx)(n.code,{children:"error"}),"\uff0c\u66ff\u6362\u6210",(0,c.jsx)(n.code,{children:"access"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"histverify-\u53c2\u6570",children:"histverify \u53c2\u6570"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u90a3\u4e9b\u5feb\u6377\u547d\u4ee4\uff08\u6bd4\u5982",(0,c.jsx)(n.code,{children:"!!"}),"\u547d\u4ee4\uff09\uff0c\u90fd\u662f\u627e\u5230\u5339\u914d\u7684\u547d\u4ee4\u540e\uff0c\u76f4\u63a5\u6267\u884c\u3002\u5982\u679c\u5e0c\u671b\u589e\u52a0\u4e00\u4e2a\u786e\u8ba4\u6b65\u9aa4\uff0c\u5148\u8f93\u51fa\u662f\u4ec0\u4e48\u547d\u4ee4\uff0c\u8ba9\u7528\u6237\u786e\u8ba4\u540e\u518d\u6267\u884c\uff0c\u53ef\u4ee5\u6253\u5f00 Shell \u7684",(0,c.jsx)(n.code,{children:"histverify"}),"\u9009\u9879\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ shopt -s histverify\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6253\u5f00",(0,c.jsx)(n.code,{children:"histverify"}),"\u8fd9\u4e2a\u9009\u9879\u540e\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!"}),"\u5feb\u6377\u952e\u6240\u8fd4\u56de\u7684\u547d\u4ee4\uff0c\u5c31\u4f1a\u5148\u8f93\u51fa\uff0c\u7b49\u5230\u7528\u6237\u6309\u4e0b\u56de\u8f66\u952e\u540e\u518d\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5feb\u6377\u952e",children:"\u5feb\u6377\u952e"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u5176\u4ed6\u4e00\u4e9b\u4e0e\u64cd\u4f5c\u5386\u53f2\u76f8\u5173\u7684\u5feb\u6377\u952e\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + p"}),"\uff1a\u663e\u793a\u4e0a\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0a\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08previous\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + n"}),"\uff1a\u663e\u793a\u4e0b\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0b\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08next\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + <"}),"\uff1a\u663e\u793a\u7b2c\u4e00\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + >"}),"\uff1a\u663e\u793a\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\uff0c\u5373\u5f53\u524d\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + o"}),"\uff1a\u6267\u884c\u5386\u53f2\u6587\u4ef6\u91cc\u9762\u7684\u5f53\u524d\u6761\u76ee\uff0c\u5e76\u81ea\u52a8\u663e\u793a\u4e0b\u4e00\u6761\u547d\u4ee4\u3002\u8fd9\u5bf9\u91cd\u590d\u6267\u884c\u67d0\u4e2a\u5e8f\u5217\u7684\u547d\u4ee4\u5f88\u6709\u5e2e\u52a9\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.redhat.com/sysadmin/bash-bang-commands",children:"Bash bang commands: A must-know trick for the Linux command line"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>h});var c=s(96540);const d={},l=c.createContext(d);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);
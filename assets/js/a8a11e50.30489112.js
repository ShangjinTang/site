"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7099],{16158:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>h,toc:()=>i});var c=s(74848),d=s(28453);const r={},l="\u5f15\u53f7\u548c\u8f6c\u4e49",h={id:"modern-linux/programming-bash/quotation",title:"\u5f15\u53f7\u548c\u8f6c\u4e49",description:"Bash \u53ea\u6709\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5c31\u662f\u5b57\u7b26\u4e32\u3002\u4e0d\u7ba1\u7528\u6237\u8f93\u5165\u4ec0\u4e48\u6570\u636e\uff0cBash \u90fd\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0c\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u5f15\u53f7\u548c\u8f6c\u4e49\uff0c\u5bf9 Bash \u6765\u8bf4\u5c31\u975e\u5e38\u91cd\u8981\u3002",source:"@site/docs/modern-linux/99-programming-bash/03-quotation.md",sourceDirName:"modern-linux/99-programming-bash",slug:"/modern-linux/programming-bash/quotation",permalink:"/docs/modern-linux/programming-bash/quotation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"modernlinuxSidebar",previous:{title:"Bash \u7684\u6a21\u5f0f\u6269\u5c55",permalink:"/docs/modern-linux/programming-bash/expansion"},next:{title:"Bash \u53d8\u91cf",permalink:"/docs/modern-linux/programming-bash/variable"}},o={},i=[{value:"\u8f6c\u4e49",id:"\u8f6c\u4e49",level:2},{value:"\u5355\u5f15\u53f7",id:"\u5355\u5f15\u53f7",level:2},{value:"\u53cc\u5f15\u53f7",id:"\u53cc\u5f15\u53f7",level:2},{value:"Here \u6587\u6863",id:"here-\u6587\u6863",level:2},{value:"Here \u5b57\u7b26\u4e32",id:"here-\u5b57\u7b26\u4e32",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u5f15\u53f7\u548c\u8f6c\u4e49",children:"\u5f15\u53f7\u548c\u8f6c\u4e49"})}),"\n",(0,c.jsx)(n.p,{children:"Bash \u53ea\u6709\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5c31\u662f\u5b57\u7b26\u4e32\u3002\u4e0d\u7ba1\u7528\u6237\u8f93\u5165\u4ec0\u4e48\u6570\u636e\uff0cBash \u90fd\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0c\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u5f15\u53f7\u548c\u8f6c\u4e49\uff0c\u5bf9 Bash \u6765\u8bf4\u5c31\u975e\u5e38\u91cd\u8981\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8f6c\u4e49",children:"\u8f6c\u4e49"}),"\n",(0,c.jsxs)(n.p,{children:["\u67d0\u4e9b\u5b57\u7b26\u5728 Bash \u91cc\u9762\u6709\u7279\u6b8a\u542b\u4e49\uff08\u6bd4\u5982",(0,c.jsx)(n.code,{children:"$"}),"\u3001",(0,c.jsx)(n.code,{children:"&"}),"\u3001",(0,c.jsx)(n.code,{children:"*"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo $date\n\n$\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u8f93\u51fa",(0,c.jsx)(n.code,{children:"$date"}),"\u4e0d\u4f1a\u6709\u4efb\u4f55\u7ed3\u679c\uff0c\u56e0\u4e3a",(0,c.jsx)(n.code,{children:"$"}),"\u662f\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u539f\u6837\u8f93\u51fa\u8fd9\u4e9b\u7279\u6b8a\u5b57\u7b26\uff0c\u5c31\u5fc5\u987b\u5728\u5b83\u4eec\u524d\u9762\u52a0\u4e0a\u53cd\u659c\u6760\uff0c\u4f7f\u5176\u53d8\u6210\u666e\u901a\u5b57\u7b26\u3002\u8fd9\u5c31\u53eb\u505a\u201c\u8f6c\u4e49\u201d\uff08escape\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo \\$date\n$date\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c\u53ea\u6709\u5728\u7279\u6b8a\u5b57\u7b26",(0,c.jsx)(n.code,{children:"$"}),"\u524d\u9762\u52a0\u53cd\u659c\u6760\uff0c\u624d\u80fd\u539f\u6837\u8f93\u51fa\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53cd\u659c\u6760\u672c\u8eab\u4e5f\u662f\u7279\u6b8a\u5b57\u7b26\uff0c\u5982\u679c\u60f3\u8981\u539f\u6837\u8f93\u51fa\u53cd\u659c\u6760\uff0c\u5c31\u9700\u8981\u5bf9\u5b83\u81ea\u8eab\u8f6c\u4e49\uff0c\u8fde\u7eed\u4f7f\u7528\u4e24\u4e2a\u53cd\u659c\u7ebf\uff08",(0,c.jsx)(n.code,{children:"\\\\"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo \\\\\n\\\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u4f8b\u5b50\u8f93\u51fa\u4e86\u53cd\u659c\u6760\u672c\u8eab\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u53cd\u659c\u6760\u9664\u4e86\u7528\u4e8e\u8f6c\u4e49\uff0c\u8fd8\u53ef\u4ee5\u8868\u793a\u4e00\u4e9b\u4e0d\u53ef\u6253\u5370\u7684\u5b57\u7b26\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\\a"}),"\uff1a\u54cd\u94c3"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\\b"}),"\uff1a\u9000\u683c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\\n"}),"\uff1a\u6362\u884c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\\r"}),"\uff1a\u56de\u8f66"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\\t"}),"\uff1a\u5236\u8868\u7b26"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8981\u5728\u547d\u4ee4\u884c\u4f7f\u7528\u8fd9\u4e9b\u4e0d\u53ef\u6253\u5370\u7684\u5b57\u7b26\uff0c\u53ef\u4ee5\u628a\u5b83\u4eec\u653e\u5728\u5f15\u53f7\u91cc\u9762\uff0c\u7136\u540e\u4f7f\u7528",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo a\\tb\natb\n\n$ echo -e "a\\tb"\na        b\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u547d\u4ee4\u884c\u76f4\u63a5\u8f93\u51fa\u4e0d\u53ef\u6253\u5370\u5b57\u7b26",(0,c.jsx)(n.code,{children:"\\t"}),"\uff0cBash \u4e0d\u80fd\u6b63\u786e\u89e3\u91ca\u3002\u5fc5\u987b\u628a\u5b83\u4eec\u653e\u5728\u5f15\u53f7\u4e4b\u4e2d\uff0c\u7136\u540e\u4f7f\u7528",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6362\u884c\u7b26\u662f\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\uff0c\u8868\u793a\u547d\u4ee4\u7684\u7ed3\u675f\uff0cBash \u6536\u5230\u8fd9\u4e2a\u5b57\u7b26\u4ee5\u540e\uff0c\u5c31\u4f1a\u5bf9\u8f93\u5165\u7684\u547d\u4ee4\u8fdb\u884c\u89e3\u91ca\u6267\u884c\u3002\u6362\u884c\u7b26\u524d\u9762\u52a0\u4e0a\u53cd\u659c\u6760\u8f6c\u4e49\uff0c\u5c31\u4f7f\u5f97\u6362\u884c\u7b26\u53d8\u6210\u4e00\u4e2a\u666e\u901a\u5b57\u7b26\uff0cBash \u4f1a\u5c06\u5176\u5f53\u4f5c\u957f\u5ea6\u4e3a",(0,c.jsx)(n.code,{children:"0"}),"\u7684\u7a7a\u5b57\u7b26\u5904\u7406\uff0c\u4ece\u800c\u53ef\u4ee5\u5c06\u4e00\u884c\u547d\u4ee4\u5199\u6210\u591a\u884c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ mv \\\n/path/to/foo \\\n/path/to/bar\n\n# \u7b49\u540c\u4e8e\n$ mv /path/to/foo /path/to/bar\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c\u4e00\u6761\u547d\u4ee4\u8fc7\u957f\uff0c\u5c31\u53ef\u4ee5\u5728\u884c\u5c3e\u4f7f\u7528\u53cd\u659c\u6760\uff0c\u5c06\u5176\u6539\u5199\u6210\u591a\u884c\u3002\u8fd9\u662f\u5e38\u89c1\u7684\u591a\u884c\u547d\u4ee4\u7684\u5199\u6cd5\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5355\u5f15\u53f7",children:"\u5355\u5f15\u53f7"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u5141\u8bb8\u5b57\u7b26\u4e32\u653e\u5728\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7\u4e4b\u4e2d\uff0c\u52a0\u4ee5\u5f15\u7528\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5355\u5f15\u53f7\u7528\u4e8e\u4fdd\u7559\u5b57\u7b26\u7684\u5b57\u9762\u542b\u4e49\uff0c\u5404\u79cd\u7279\u6b8a\u5b57\u7b26\u5728\u5355\u5f15\u53f7\u91cc\u9762\uff0c\u90fd\u4f1a\u53d8\u4e3a\u666e\u901a\u5b57\u7b26\uff0c\u6bd4\u5982\u661f\u53f7\uff08",(0,c.jsx)(n.code,{children:"*"}),"\uff09\u3001\u7f8e\u5143\u7b26\u53f7\uff08",(0,c.jsx)(n.code,{children:"$"}),"\uff09\u3001\u53cd\u659c\u6760\uff08",(0,c.jsx)(n.code,{children:"\\"}),"\uff09\u7b49\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo '*'\n*\n\n$ echo '$USER'\n$USER\n\n$ echo '$((2+2))'\n$((2+2))\n\n$ echo '$(echo foo)'\n$(echo foo)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c\u5355\u5f15\u53f7\u4f7f\u5f97 Bash \u6269\u5c55\u3001\u53d8\u91cf\u5f15\u7528\u3001\u7b97\u672f\u8fd0\u7b97\u548c\u5b50\u547d\u4ee4\uff0c\u90fd\u5931\u6548\u4e86\u3002\u5982\u679c\u4e0d\u4f7f\u7528\u5355\u5f15\u53f7\uff0c\u5b83\u4eec\u90fd\u4f1a\u88ab Bash \u81ea\u52a8\u6269\u5c55\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u53cd\u659c\u6760\u5728\u5355\u5f15\u53f7\u91cc\u9762\u53d8\u6210\u4e86\u666e\u901a\u5b57\u7b26\uff0c\u6240\u4ee5\u5982\u679c\u5355\u5f15\u53f7\u4e4b\u4e2d\uff0c\u8fd8\u8981\u4f7f\u7528\u5355\u5f15\u53f7\uff0c\u4e0d\u80fd\u4f7f\u7528\u8f6c\u4e49\uff0c\u9700\u8981\u5728\u5916\u5c42\u7684\u5355\u5f15\u53f7\u524d\u9762\u52a0\u4e0a\u4e00\u4e2a\u7f8e\u5143\u7b26\u53f7\uff08",(0,c.jsx)(n.code,{children:"$"}),"\uff09\uff0c\u7136\u540e\u518d\u5bf9\u91cc\u5c42\u7684\u5355\u5f15\u53f7\u8f6c\u4e49\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u4e0d\u6b63\u786e\n$ echo it's\n\n# \u4e0d\u6b63\u786e\n$ echo 'it\\'s'\n\n# \u6b63\u786e\n$ echo $'it\\'s'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u66f4\u5408\u7406\u7684\u65b9\u6cd5\u662f\u6539\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo \"it's\"\nit's\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53cc\u5f15\u53f7",children:"\u53cc\u5f15\u53f7"}),"\n",(0,c.jsx)(n.p,{children:"\u53cc\u5f15\u53f7\u6bd4\u5355\u5f15\u53f7\u5bbd\u677e\uff0c\u5927\u90e8\u5206\u7279\u6b8a\u5b57\u7b26\u5728\u53cc\u5f15\u53f7\u91cc\u9762\uff0c\u90fd\u4f1a\u5931\u53bb\u7279\u6b8a\u542b\u4e49\uff0c\u53d8\u6210\u666e\u901a\u5b57\u7b26\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "*"\n*\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u901a\u914d\u7b26",(0,c.jsx)(n.code,{children:"*"}),"\u662f\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\uff0c\u653e\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\uff0c\u5c31\u53d8\u6210\u4e86\u666e\u901a\u5b57\u7b26\uff0c\u4f1a\u539f\u6837\u8f93\u51fa\u3002\u8fd9\u4e00\u70b9\u9700\u8981\u7279\u522b\u7559\u610f\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u53cc\u5f15\u53f7\u91cc\u9762\u4e0d\u4f1a\u8fdb\u884c\u6587\u4ef6\u540d\u6269\u5c55\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u662f\uff0c\u4e09\u4e2a\u7279\u6b8a\u5b57\u7b26\u9664\u5916\uff1a\u7f8e\u5143\u7b26\u53f7\uff08",(0,c.jsx)(n.code,{children:"$"}),"\uff09\u3001\u53cd\u5f15\u53f7\uff08",(0,c.jsx)(n.code,{children:"`"}),"\uff09\u548c\u53cd\u659c\u6760\uff08",(0,c.jsx)(n.code,{children:"\\"}),"\uff09\u3002\u8fd9\u4e09\u4e2a\u5b57\u7b26\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\uff0c\u4f9d\u7136\u6709\u7279\u6b8a\u542b\u4e49\uff0c\u4f1a\u88ab Bash \u81ea\u52a8\u6269\u5c55\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "$SHELL"\n/bin/bash\n\n$ echo "`date`"\nMon Jan 27 13:33:18 CST 2020\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7f8e\u5143\u7b26\u53f7\uff08",(0,c.jsx)(n.code,{children:"$"}),"\uff09\u548c\u53cd\u5f15\u53f7\uff08",(0,c.jsx)(n.code,{children:"`"}),"\uff09\u5728\u53cc\u5f15\u53f7\u4e2d\uff0c\u90fd\u4fdd\u6301\u7279\u6b8a\u542b\u4e49\u3002\u7f8e\u5143\u7b26\u53f7\u7528\u6765\u5f15\u7528\u53d8\u91cf\uff0c\u53cd\u5f15\u53f7\u5219\u662f\u6267\u884c\u5b50\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "I\'d say: \\"hello.\\""\nI\'d say: "hello."\n\n$ echo "\\\\"\n\\\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53cd\u659c\u6760\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\u4fdd\u6301\u7279\u6b8a\u542b\u4e49\uff0c\u7528\u6765\u8f6c\u4e49\u3002\u6240\u4ee5\uff0c\u53ef\u4ee5\u4f7f\u7528\u53cd\u659c\u6760\uff0c\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\u63d2\u5165\u53cc\u5f15\u53f7\uff0c\u6216\u8005\u63d2\u5165\u53cd\u659c\u6760\u672c\u8eab\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6362\u884c\u7b26\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\uff0c\u4f1a\u5931\u53bb\u7279\u6b8a\u542b\u4e49\uff0cBash \u4e0d\u518d\u5c06\u5176\u89e3\u91ca\u4e3a\u547d\u4ee4\u7684\u7ed3\u675f\uff0c\u53ea\u662f\u4f5c\u4e3a\u666e\u901a\u7684\u6362\u884c\u7b26\u3002\u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u53cc\u5f15\u53f7\uff0c\u5728\u547d\u4ee4\u884c\u8f93\u5165\u591a\u884c\u6587\u672c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "hello\nworld"\nhello\nworld\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0cBash \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u5c06\u6362\u884c\u7b26\u89e3\u91ca\u4e3a\u547d\u4ee4\u7ed3\u675f\uff0c\u4f46\u662f\u6362\u884c\u7b26\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\u5c31\u5931\u53bb\u4e86\u8fd9\u79cd\u7279\u6b8a\u4f5c\u7528\uff0c\u53ea\u7528\u6765\u6362\u884c\uff0c\u6240\u4ee5\u53ef\u4ee5\u8f93\u5165\u591a\u884c\u3002",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u4f1a\u5c06\u6362\u884c\u7b26\u539f\u6837\u8f93\u51fa\uff0c\u663e\u793a\u7684\u65f6\u5019\u6b63\u5e38\u89e3\u91ca\u4e3a\u6362\u884c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u53cc\u5f15\u53f7\u7684\u53e6\u4e00\u4e2a\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u5408\u662f\uff0c\u6587\u4ef6\u540d\u5305\u542b\u7a7a\u683c\u3002\u8fd9\u65f6\u5c31\u5fc5\u987b\u4f7f\u7528\u53cc\u5f15\u53f7\uff08\u6216\u5355\u5f15\u53f7\uff09\uff0c\u5c06\u6587\u4ef6\u540d\u653e\u5728\u91cc\u9762\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ ls "two words.txt"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"two words.txt"}),"\u662f\u4e00\u4e2a\u5305\u542b\u7a7a\u683c\u7684\u6587\u4ef6\u540d\uff0c\u5982\u679c\u4e0d\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\uff0c\u5c31\u4f1a\u88ab Bash \u5f53\u4f5c\u4e24\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u53cc\u5f15\u53f7\u4f1a\u539f\u6837\u4fdd\u5b58\u591a\u4f59\u7684\u7a7a\u683c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "this is a     test"\nthis is a     test\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u53cc\u5f15\u53f7\u8fd8\u6709\u4e00\u4e2a\u4f5c\u7528\uff0c\u5c31\u662f\u4fdd\u5b58\u539f\u59cb\u547d\u4ee4\u7684\u8f93\u51fa\u683c\u5f0f\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'# \u5355\u884c\u8f93\u51fa\n$ echo $(cal)\n\u4e00\u6708 2020 \u65e5 \u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d 1 2 3 ... 31\n\n# \u539f\u59cb\u683c\u5f0f\u8f93\u51fa\n$ echo "$(cal)"\n      \u4e00\u6708 2020\n\u65e5 \u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c",(0,c.jsx)(n.code,{children:"$(cal)"}),"\u4e0d\u653e\u5728\u53cc\u5f15\u53f7\u4e4b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u5c31\u4f1a\u5c06\u6240\u6709\u7ed3\u679c\u4ee5\u5355\u884c\u8f93\u51fa\uff0c\u4e22\u5f03\u4e86\u6240\u6709\u539f\u59cb\u7684\u683c\u5f0f\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"here-\u6587\u6863",children:"Here \u6587\u6863"}),"\n",(0,c.jsx)(n.p,{children:"Here \u6587\u6863\uff08here document\uff09\u662f\u4e00\u79cd\u8f93\u5165\u591a\u884c\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5\uff0c\u683c\u5f0f\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"<< token\ntext\ntoken\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u7684\u683c\u5f0f\u5206\u6210\u5f00\u59cb\u6807\u8bb0\uff08",(0,c.jsx)(n.code,{children:"<< token"}),"\uff09\u548c\u7ed3\u675f\u6807\u8bb0\uff08",(0,c.jsx)(n.code,{children:"token"}),"\uff09\u3002\u5f00\u59cb\u6807\u8bb0\u662f\u4e24\u4e2a\u5c0f\u4e8e\u53f7 + Here \u6587\u6863\u7684\u540d\u79f0\uff0c\u540d\u79f0\u53ef\u4ee5\u968f\u610f\u53d6\uff0c\u540e\u9762\u5fc5\u987b\u662f\u4e00\u4e2a\u6362\u884c\u7b26\uff1b\u7ed3\u675f\u6807\u8bb0\u662f\u5355\u72ec\u4e00\u884c\u9876\u683c\u5199\u7684 Here \u6587\u6863\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u662f\u9876\u683c\uff0c\u7ed3\u675f\u6807\u8bb0\u4e0d\u8d77\u4f5c\u7528\u3002\u4e24\u8005\u4e4b\u95f4\u5c31\u662f\u591a\u884c\u5b57\u7b26\u4e32\u7684\u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u901a\u8fc7 Here \u6587\u6863\u8f93\u51fa HTML \u4ee3\u7801\u7684\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cat << _EOF_\n<html>\n<head>\n    <title>\n    The title of your page\n    </title>\n</head>\n\n<body>\n    Your page content goes here.\n</body>\n</html>\n_EOF_\n"})}),"\n",(0,c.jsx)(n.p,{children:"Here \u6587\u6863\u5185\u90e8\u4f1a\u53d1\u751f\u53d8\u91cf\u66ff\u6362\uff0c\u540c\u65f6\u652f\u6301\u53cd\u659c\u6760\u8f6c\u4e49\uff0c\u4f46\u662f\u4e0d\u652f\u6301\u901a\u914d\u7b26\u6269\u5c55\uff0c\u53cc\u5f15\u53f7\u548c\u5355\u5f15\u53f7\u4e5f\u5931\u53bb\u8bed\u6cd5\u4f5c\u7528\uff0c\u53d8\u6210\u4e86\u666e\u901a\u5b57\u7b26\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ foo='hello world'\n$ cat << _example_\n$foo\n\"$foo\"\n'$foo'\n_example_\n\nhello world\n\"hello world\"\n'hello world'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53d8\u91cf",(0,c.jsx)(n.code,{children:"$foo"}),"\u53d1\u751f\u4e86\u66ff\u6362\uff0c\u4f46\u662f\u53cc\u5f15\u53f7\u548c\u5355\u5f15\u53f7\u90fd\u539f\u6837\u8f93\u51fa\u4e86\uff0c\u8868\u660e\u5b83\u4eec\u5df2\u7ecf\u5931\u53bb\u4e86\u5f15\u7528\u7684\u529f\u80fd\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5e0c\u671b\u53d1\u751f\u53d8\u91cf\u66ff\u6362\uff0c\u53ef\u4ee5\u628a Here \u6587\u6863\u7684\u5f00\u59cb\u6807\u8bb0\u653e\u5728\u5355\u5f15\u53f7\u4e4b\u4e2d\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ foo='hello world'\n$ cat << '_example_'\n$foo\n\"$foo\"\n'$foo'\n_example_\n\n$foo\n\"$foo\"\n'$foo'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0cHere \u6587\u6863\u7684\u5f00\u59cb\u6807\u8bb0\uff08",(0,c.jsx)(n.code,{children:"_example_"}),"\uff09\u653e\u5728\u5355\u5f15\u53f7\u4e4b\u4e2d\uff0c\u5bfc\u81f4\u53d8\u91cf\u66ff\u6362\u5931\u6548\u4e86\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["Here \u6587\u6863\u7684\u672c\u8d28\u662f\u91cd\u5b9a\u5411\uff0c\u5b83\u5c06\u5b57\u7b26\u4e32\u91cd\u5b9a\u5411\u8f93\u51fa\u7ed9\u67d0\u4e2a\u547d\u4ee4\uff0c\u76f8\u5f53\u4e8e\u5305\u542b\u4e86",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ command << token\n  string\ntoken\n\n# \u7b49\u540c\u4e8e\n\n$ echo string | command\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0cHere \u6587\u6863\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u7684\u91cd\u5b9a\u5411\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5\uff0cHere \u5b57\u7b26\u4e32\u53ea\u9002\u5408\u90a3\u4e9b\u53ef\u4ee5\u63a5\u53d7\u6807\u51c6\u8f93\u5165\u4f5c\u4e3a\u53c2\u6570\u7684\u547d\u4ee4\uff0c\u5bf9\u4e8e\u5176\u4ed6\u547d\u4ee4\u65e0\u6548\uff0c\u6bd4\u5982",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u5c31\u4e0d\u80fd\u7528 Here \u6587\u6863\u4f5c\u4e3a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo << _example_\nhello\n_example_\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e0d\u4f1a\u6709\u4efb\u4f55\u8f93\u51fa\uff0c\u56e0\u4e3a Here \u6587\u6863\u5bf9\u4e8e",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u65e0\u6548\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6b64\u5916\uff0cHere \u6587\u6863\u4e5f\u4e0d\u80fd\u4f5c\u4e3a\u53d8\u91cf\u7684\u503c\uff0c\u53ea\u80fd\u7528\u4e8e\u547d\u4ee4\u7684\u53c2\u6570\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"here-\u5b57\u7b26\u4e32",children:"Here \u5b57\u7b26\u4e32"}),"\n",(0,c.jsxs)(n.p,{children:["Here \u6587\u6863\u8fd8\u6709\u4e00\u4e2a\u53d8\u4f53\uff0c\u53eb\u505a Here \u5b57\u7b26\u4e32\uff08Here string\uff09\uff0c\u4f7f\u7528\u4e09\u4e2a\u5c0f\u4e8e\u53f7\uff08",(0,c.jsx)(n.code,{children:"<<<"}),"\uff09\u8868\u793a\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"<<< string\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5b83\u7684\u4f5c\u7528\u662f\u5c06\u5b57\u7b26\u4e32\u901a\u8fc7\u6807\u51c6\u8f93\u5165\uff0c\u4f20\u9012\u7ed9\u547d\u4ee4\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u4e9b\u547d\u4ee4\u76f4\u63a5\u63a5\u53d7\u7ed9\u5b9a\u7684\u53c2\u6570\uff0c\u4e0e\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u63a5\u53d7\u53c2\u6570\uff0c\u7ed3\u679c\u662f\u4e0d\u4e00\u6837\u7684\u3002\u6240\u4ee5\u624d\u6709\u4e86\u8fd9\u4e2a\u8bed\u6cd5\uff0c\u4f7f\u5f97\u5c06\u5b57\u7b26\u4e32\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u4f20\u9012\u7ed9\u547d\u4ee4\u66f4\u65b9\u4fbf\uff0c\u6bd4\u5982",(0,c.jsx)(n.code,{children:"cat"}),"\u547d\u4ee4\u53ea\u63a5\u53d7\u6807\u51c6\u8f93\u5165\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cat <<< 'hi there'\n# \u7b49\u540c\u4e8e\n$ echo 'hi there' | cat\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u7b2c\u4e00\u79cd\u8bed\u6cd5\u4f7f\u7528\u4e86 Here \u5b57\u7b26\u4e32\uff0c\u8981\u6bd4\u7b2c\u4e8c\u79cd\u8bed\u6cd5\u770b\u4e0a\u53bb\u8bed\u4e49\u66f4\u597d\uff0c\u4e5f\u66f4\u7b80\u6d01\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ md5sum <<< 'ddd'\n# \u7b49\u540c\u4e8e\n$ echo 'ddd' | md5sum\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"md5sum"}),"\u547d\u4ee4\u53ea\u80fd\u63a5\u53d7\u6807\u51c6\u8f93\u5165\u4f5c\u4e3a\u53c2\u6570\uff0c\u4e0d\u80fd\u76f4\u63a5\u5c06\u5b57\u7b26\u4e32\u653e\u5728\u547d\u4ee4\u540e\u9762\uff0c\u4f1a\u88ab\u5f53\u4f5c\u6587\u4ef6\u540d\uff0c\u5373",(0,c.jsx)(n.code,{children:"md5sum ddd"}),"\u91cc\u9762\u7684",(0,c.jsx)(n.code,{children:"ddd"}),"\u4f1a\u88ab\u89e3\u91ca\u6210\u6587\u4ef6\u540d\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u7528 Here \u5b57\u7b26\u4e32\uff0c\u5c06\u5b57\u7b26\u4e32\u4f20\u7ed9",(0,c.jsx)(n.code,{children:"md5sum"}),"\u547d\u4ee4\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>h});var c=s(96540);const d={},r=c.createContext(d);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);
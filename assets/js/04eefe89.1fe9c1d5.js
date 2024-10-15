"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8635],{45797:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(74848),t=s(28453);const i={description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002",slug:"/design-patterns/memento"},d="\u5907\u5fd8\u5f55\u6a21\u5f0f",c={id:"design-patterns/behavioral-patterns/memento",title:"\u5907\u5fd8\u5f55\u6a21\u5f0f",description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002",source:"@site/docs/design-patterns/03-behavioral-patterns/05-memento.mdx",sourceDirName:"design-patterns/03-behavioral-patterns",slug:"/design-patterns/memento",permalink:"/docs/design-patterns/memento",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002",slug:"/design-patterns/memento"},sidebar:"designpatternsSidebar",previous:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f",permalink:"/docs/design-patterns/mediator"},next:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",permalink:"/docs/design-patterns/observer"}},l={},o=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u5907\u5fd8\u5f55\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u57fa\u4e8e\u5d4c\u5957\u7c7b\u7684\u5b9e\u73b0</strong>",id:"\u57fa\u4e8e\u5d4c\u5957\u7c7b\u7684\u5b9e\u73b0",level:3},{value:"<strong>\u57fa\u4e8e\u4e2d\u95f4\u63a5\u53e3\u7684\u5b9e\u73b0</strong>",id:"\u57fa\u4e8e\u4e2d\u95f4\u63a5\u53e3\u7684\u5b9e\u73b0",level:3},{value:"<strong>\u5c01\u88c5\u66f4\u52a0\u4e25\u683c\u7684\u5b9e\u73b0</strong>",id:"\u5c01\u88c5\u66f4\u52a0\u4e25\u683c\u7684\u5b9e\u73b0",level:3},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u5907\u5fd8\u5f55\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u5907\u5fd8\u5f55\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f",children:"\u5907\u5fd8\u5f55\u6a21\u5f0f"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4ea6\u79f0\uff1a\u5feb\u7167\u3001Snapshot\u3001Memento"})}),"\n",(0,r.jsx)(e.h2,{id:"\u610f\u56fe",children:(0,r.jsx)(e.strong,{children:"\u610f\u56fe"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u884c\u4e3a\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/content/memento/memento-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(e.h2,{id:"\u95ee\u9898",children:(0,r.jsx)(e.strong,{children:"\u95ee\u9898"})}),"\n",(0,r.jsx)(e.p,{children:"\u5047\u5982\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u6b3e\u6587\u5b57\u7f16\u8f91\u5668\u5e94\u7528\u7a0b\u5e8f\u3002\u9664\u4e86\u7b80\u5355\u7684\u6587\u5b57\u7f16\u8f91\u529f\u80fd\u5916\uff0c\u7f16\u8f91\u5668\u4e2d\u8fd8\u8981\u6709\u8bbe\u7f6e\u6587\u672c\u683c\u5f0f\u548c\u63d2\u5165\u5185\u5d4c\u56fe\u7247\u7b49\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u540e\u6765\uff0c\u4f60\u51b3\u5b9a\u8ba9\u7528\u6237\u80fd\u64a4\u9500\u65bd\u52a0\u5728\u6587\u672c\u4e0a\u7684\u4efb\u4f55\u64cd\u4f5c\u3002\u8fd9\u9879\u529f\u80fd\u5728\u8fc7\u53bb\u51e0\u5e74\u91cc\u53d8\u5f97\u5341\u5206\u666e\u904d\uff0c\u56e0\u6b64\u7528\u6237\u671f\u5f85\u4efb\u4f55\u7a0b\u5e8f\u90fd\u6709\u8fd9\u9879\u529f\u80fd\u3002\u4f60\u9009\u62e9\u91c7\u7528\u76f4\u63a5\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u8be5\u529f\u80fd\uff1a\u7a0b\u5e8f\u5728\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u524d\u4f1a\u8bb0\u5f55\u6240\u6709\u7684\u5bf9\u8c61\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u4e0b\u6765\u3002\u5f53\u7528\u6237\u6b64\u540e\u9700\u8981\u64a4\u9500\u67d0\u4e2a\u64cd\u4f5c\u65f6\uff0c\u7a0b\u5e8f\u5c06\u4ece\u5386\u53f2\u8bb0\u5f55\u4e2d\u83b7\u53d6\u6700\u8fd1\u7684\u5feb\u7167\uff0c\u7136\u540e\u4f7f\u7528\u5b83\u6765\u6062\u590d\u6240\u6709\u5bf9\u8c61\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/problem1-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u7a0b\u5e8f\u5728\u6267\u884c\u64cd\u4f5c\u524d\u4fdd\u5b58\u6240\u6709\u5bf9\u8c61\u7684\u72b6\u6001\u5feb\u7167\uff0c\u7a0d\u540e\u53ef\u901a\u8fc7\u5feb\u7167\u5c06\u5bf9\u8c61\u6062\u590d\u5230\u4e4b\u524d\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u6765\u601d\u8003\u4e00\u4e0b\u8fd9\u4e9b\u72b6\u6001\u5feb\u7167\u3002\u9996\u5148\uff0c\u5230\u5e95\u8be5\u5982\u4f55\u751f\u6210\u4e00\u4e2a\u5feb\u7167\u5462\uff1f\u5f88\u53ef\u80fd\u4f60\u4f1a\u9700\u8981\u904d\u5386\u5bf9\u8c61\u7684\u6240\u6709\u6210\u5458\u53d8\u91cf\u5e76\u5c06\u5176\u6570\u503c\u590d\u5236\u4fdd\u5b58\u3002\u4f46\u53ea\u6709\u5f53\u5bf9\u8c61\u5bf9\u5176\u5185\u5bb9\u6ca1\u6709\u4e25\u683c\u8bbf\u95ee\u6743\u9650\u9650\u5236\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u624d\u80fd\u4f7f\u7528\u8be5\u65b9\u5f0f\u3002\u4e0d\u8fc7\u5f88\u9057\u61be\uff0c\u7edd\u5927\u90e8\u5206\u5bf9\u8c61\u4f1a\u4f7f\u7528\u79c1\u6709\u6210\u5458\u53d8\u91cf\u6765\u5b58\u50a8\u91cd\u8981\u6570\u636e\uff0c\u8fd9\u6837\u522b\u4eba\u5c31\u65e0\u6cd5\u8f7b\u6613\u67e5\u770b\u5176\u4e2d\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u73b0\u5728\u6211\u4eec\u6682\u65f6\u5ffd\u7565\u8fd9\u4e2a\u95ee\u9898\uff0c\u5047\u8bbe\u5bf9\u8c61\u90fd\u50cf\u5b09\u76ae\u58eb\u4e00\u6837\uff1a\u559c\u6b22\u5f00\u653e\u5f0f\u7684\u5173\u7cfb\u5e76\u4f1a\u516c\u5f00\u5176\u6240\u6709\u72b6\u6001\u3002\u5c3d\u7ba1\u8fd9\u79cd\u65b9\u5f0f\u80fd\u591f\u89e3\u51b3\u5f53\u524d\u95ee\u9898\uff0c\u8ba9\u4f60\u53ef\u968f\u65f6\u751f\u6210\u5bf9\u8c61\u7684\u72b6\u6001\u5feb\u7167\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u4ecd\u5b58\u5728\u4e00\u4e9b\u4e25\u91cd\u95ee\u9898\u3002\u672a\u6765\u4f60\u53ef\u80fd\u4f1a\u6dfb\u52a0\u6216\u5220\u9664\u4e00\u4e9b\u6210\u5458\u53d8\u91cf\u3002\u8fd9\u542c\u4e0a\u53bb\u5f88\u7b80\u5355\uff0c\u4f46\u9700\u8981\u5bf9\u8d1f\u8d23\u590d\u5236\u53d7\u5f71\u54cd\u5bf9\u8c61\u72b6\u6001\u7684\u7c7b\u8fdb\u884c\u66f4\u6539\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/problem2-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u4f55\u590d\u5236\u5bf9\u8c61\u7684\u79c1\u6709\u72b6\u6001\uff1f"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd8\u6709\u66f4\u591a\u95ee\u9898\u3002\u8ba9\u6211\u4eec\u6765\u8003\u8651\u7f16\u8f91\u5668 (Editor) \u72b6\u6001\u7684\u5b9e\u9645 \u201c\u5feb\u7167\u201d\uff0c\u5b83\u9700\u8981\u5305\u542b\u54ea\u4e9b\u6570\u636e\uff1f\u81f3\u5c11\u5fc5\u987b\u5305\u542b\u5b9e\u9645\u7684\u6587\u672c\u3001\u5149\u6807\u5750\u6807\u548c\u5f53\u524d\u6eda\u52a8\u6761\u4f4d\u7f6e\u7b49\u3002\u4f60\u9700\u8981\u6536\u96c6\u8fd9\u4e9b\u6570\u636e\u5e76\u5c06\u5176\u653e\u5165\u7279\u5b9a\u5bb9\u5668\u4e2d\uff0c\u624d\u80fd\u751f\u6210\u5feb\u7167\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f60\u5f88\u53ef\u80fd\u4f1a\u5c06\u5927\u91cf\u7684\u5bb9\u5668\u5bf9\u8c61\u5b58\u50a8\u5728\u5386\u53f2\u8bb0\u5f55\u5217\u8868\u4e2d\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u5bb9\u5668\u6700\u7ec8\u5927\u6982\u7387\u4f1a\u6210\u4e3a\u540c\u4e00\u4e2a\u7c7b\u7684\u5bf9\u8c61\u3002\u8fd9\u4e2a\u7c7b\u4e2d\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u65b9\u6cd5\uff0c\u4f46\u6709\u8bb8\u591a\u4e0e\u7f16\u8f91\u5668\u72b6\u6001\u4e00\u4e00\u5bf9\u5e94\u7684\u6210\u5458\u53d8\u91cf\u3002\u4e3a\u4e86\u8ba9\u5176\u4ed6\u5bf9\u8c61\u80fd\u4fdd\u5b58\u6216\u8bfb\u53d6\u5feb\u7167\uff0c\u4f60\u5f88\u53ef\u80fd\u9700\u8981\u5c06\u5feb\u7167\u7684\u6210\u5458\u53d8\u91cf\u8bbe\u4e3a\u516c\u6709\u3002\u65e0\u8bba\u8fd9\u4e9b\u72b6\u6001\u662f\u5426\u79c1\u6709\uff0c\u5176\u90fd\u5c06\u66b4\u9732\u4e00\u5207\u7f16\u8f91\u5668\u72b6\u6001\u3002\u5176\u4ed6\u7c7b\u4f1a\u5bf9\u5feb\u7167\u7c7b\u7684\u6bcf\u4e2a\u5c0f\u6539\u52a8\u4ea7\u751f\u4f9d\u8d56\uff0c\u9664\u975e\u8fd9\u4e9b\u6539\u52a8\u4ec5\u5b58\u5728\u4e8e\u79c1\u6709\u6210\u5458\u53d8\u91cf\u6216\u65b9\u6cd5\u4e2d\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u5916\u90e8\u7c7b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u4f3c\u4e4e\u8d70\u8fdb\u4e86\u4e00\u6761\u6b7b\u80e1\u540c\uff1a\u8981\u4e48\u4f1a\u66b4\u9732\u7c7b\u7684\u6240\u6709\u5185\u90e8\u7ec6\u8282\u800c\u4f7f\u5176\u8fc7\u4e8e\u8106\u5f31\uff1b\u8981\u4e48\u4f1a\u9650\u5236\u5bf9\u5176\u72b6\u6001\u7684\u8bbf\u95ee\u6743\u9650\u800c\u65e0\u6cd5\u751f\u6210\u5feb\u7167\u3002\u90a3\u4e48\uff0c\u6211\u4eec\u8fd8\u6709\u5176\u4ed6\u65b9\u5f0f\u6765\u5b9e\u73b0 \u201c\u64a4\u9500\u201d \u529f\u80fd\u5417\uff1f"}),"\n",(0,r.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,r.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u521a\u624d\u9047\u5230\u7684\u6240\u6709\u95ee\u9898\u90fd\u662f\u5c01\u88c5 \u201c\u7834\u635f\u201d \u9020\u6210\u7684\u3002\u4e00\u4e9b\u5bf9\u8c61\u8bd5\u56fe\u8d85\u51fa\u5176\u804c\u8d23\u8303\u56f4\u7684\u5de5\u4f5c\u3002\u7531\u4e8e\u5728\u6267\u884c\u67d0\u4e9b\u884c\u4e3a\u65f6\u9700\u8981\u83b7\u53d6\u6570\u636e\uff0c\u6240\u4ee5\u5b83\u4eec\u4fb5\u5165\u4e86\u5176\u4ed6\u5bf9\u8c61\u7684\u79c1\u6709\u7a7a\u95f4\uff0c\u800c\u4e0d\u662f\u8ba9\u8fd9\u4e9b\u5bf9\u8c61\u6765\u5b8c\u6210\u5b9e\u9645\u7684\u5de5\u4f5c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5907\u5fd8\u5f55\u6a21\u5f0f\u5c06\u521b\u5efa\u72b6\u6001\u5feb\u7167 (Snapshot) \u7684\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5b9e\u9645\u72b6\u6001\u7684\u62e5\u6709\u8005",(0,r.jsx)(e.em,{children:"\u539f\u53d1\u5668"})," (Originator) \u5bf9\u8c61\u3002\u8fd9\u6837\u5176\u4ed6\u5bf9\u8c61\u5c31\u4e0d\u518d\u9700\u8981\u4ece \u201c\u5916\u90e8\u201d \u590d\u5236\u7f16\u8f91\u5668\u72b6\u6001\u4e86\uff0c\u7f16\u8f91\u5668\u7c7b\u62e5\u6709\u5176\u72b6\u6001\u7684\u5b8c\u5168\u8bbf\u95ee\u6743\uff0c\u56e0\u6b64\u53ef\u4ee5\u81ea\u884c\u751f\u6210\u5feb\u7167\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6a21\u5f0f\u5efa\u8bae\u5c06\u5bf9\u8c61\u72b6\u6001\u7684\u526f\u672c\u5b58\u50a8\u5728\u4e00\u4e2a\u540d\u4e3a",(0,r.jsx)(e.em,{children:"\u5907\u5fd8\u5f55"})," (Memento) \u7684\u7279\u6b8a\u5bf9\u8c61\u4e2d\u3002\u9664\u4e86\u521b\u5efa\u5907\u5fd8\u5f55\u7684\u5bf9\u8c61\u5916\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u4e0d\u80fd\u8bbf\u95ee\u5907\u5fd8\u5f55\u7684\u5185\u5bb9\u3002\u5176\u4ed6\u5bf9\u8c61\u5fc5\u987b\u4f7f\u7528\u53d7\u9650\u63a5\u53e3\u4e0e\u5907\u5fd8\u5f55\u8fdb\u884c\u4ea4\u4e92\uff0c\u5b83\u4eec\u53ef\u4ee5\u83b7\u53d6\u5feb\u7167\u7684\u5143\u6570\u636e (\u521b\u5efa\u65f6\u95f4\u548c\u64cd\u4f5c\u540d\u79f0\u7b49)\uff0c\u4f46\u4e0d\u80fd\u83b7\u53d6\u5feb\u7167\u4e2d\u539f\u59cb\u5bf9\u8c61\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/solution-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u539f\u53d1\u5668\u62e5\u6709\u5bf9\u5907\u5fd8\u5f55\u7684\u5b8c\u5168\u8bbf\u95ee\u6743\u9650\uff0c\u8d1f\u8d23\u4eba\u5219\u53ea\u80fd\u8bbf\u95ee\u5143\u6570\u636e\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u79cd\u9650\u5236\u7b56\u7565\u5141\u8bb8\u4f60\u5c06\u5907\u5fd8\u5f55\u4fdd\u5b58\u5728\u901a\u5e38\u88ab\u79f0\u4e3a",(0,r.jsx)(e.em,{children:"\u8d1f\u8d23\u4eba"})," (Caretakers) \u7684\u5bf9\u8c61\u4e2d\u3002\u7531\u4e8e\u8d1f\u8d23\u4eba\u4ec5\u901a\u8fc7\u53d7\u9650\u63a5\u53e3\u4e0e\u5907\u5fd8\u5f55\u4e92\u52a8\uff0c\u6545\u5176\u65e0\u6cd5\u4fee\u6539\u5b58\u50a8\u5728\u5907\u5fd8\u5f55\u5185\u90e8\u7684\u72b6\u6001\u3002\u540c\u65f6\uff0c\u539f\u53d1\u5668\u62e5\u6709\u5bf9\u5907\u5fd8\u5f55\u6240\u6709\u6210\u5458\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4ece\u800c\u80fd\u968f\u65f6\u6062\u590d\u5176\u4ee5\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u6587\u5b57\u7f16\u8f91\u5668\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5386\u53f2 (History) \u7c7b\u4f5c\u4e3a\u8d1f\u8d23\u4eba\u3002\u7f16\u8f91\u5668\u6bcf\u6b21\u6267\u884c\u64cd\u4f5c\u524d\uff0c\u5b58\u50a8\u5728\u8d1f\u8d23\u4eba\u4e2d\u7684\u5907\u5fd8\u5f55\u6808\u90fd\u4f1a\u751f\u957f\u3002\u4f60\u751a\u81f3\u53ef\u4ee5\u5728\u5e94\u7528\u7684 UI \u4e2d\u6e32\u67d3\u8be5\u6808\uff0c\u4e3a\u7528\u6237\u663e\u793a\u4e4b\u524d\u7684\u64cd\u4f5c\u5386\u53f2\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u7528\u6237\u89e6\u53d1\u64a4\u9500\u64cd\u4f5c\u65f6\uff0c\u5386\u53f2\u7c7b\u5c06\u4ece\u6808\u4e2d\u53d6\u56de\u6700\u8fd1\u7684\u5907\u5fd8\u5f55\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u7f16\u8f91\u5668\u4ee5\u8bf7\u6c42\u8fdb\u884c\u56de\u6eda\u3002\u7531\u4e8e\u7f16\u8f91\u5668\u62e5\u6709\u5bf9\u5907\u5fd8\u5f55\u7684\u5b8c\u5168\u8bbf\u95ee\u6743\u9650\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4f7f\u7528\u4ece\u5907\u5fd8\u5f55\u4e2d\u83b7\u53d6\u7684\u6570\u503c\u6765\u66ff\u6362\u81ea\u8eab\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u7ed3\u6784",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u4e8e\u5d4c\u5957\u7c7b\u7684\u5b9e\u73b0",children:(0,r.jsx)(e.strong,{children:"\u57fa\u4e8e\u5d4c\u5957\u7c7b\u7684\u5b9e\u73b0"})}),"\n",(0,r.jsx)(e.p,{children:"\u8be5\u6a21\u5f0f\u7684\u7ecf\u5178\u5b9e\u73b0\u65b9\u5f0f\u4f9d\u8d56\u4e8e\u8bb8\u591a\u6d41\u884c\u7f16\u7a0b\u8bed\u8a00 (\u4f8b\u5982 C++\u3001C# \u548c Java) \u6240\u652f\u6301\u7684\u5d4c\u5957\u7c7b\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/structure1-2x.png",alt:""})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u539f\u53d1\u5668"})," (Originator) \u7c7b\u53ef\u4ee5\u751f\u6210\u81ea\u8eab\u72b6\u6001\u7684\u5feb\u7167\uff0c\u4e5f\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u901a\u8fc7\u5feb\u7167\u6062\u590d\u81ea\u8eab\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55"})," (Memento) \u662f\u539f\u53d1\u5668\u72b6\u6001\u5feb\u7167\u7684\u503c\u5bf9\u8c61 (value object)\u3002\u901a\u5e38\u505a\u6cd5\u662f\u5c06\u5907\u5fd8\u5f55\u8bbe\u4e3a\u4e0d\u53ef\u53d8\u7684\uff0c\u5e76\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4e00\u6b21\u6027\u4f20\u9012\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8d1f\u8d23\u4eba"})," (Caretaker) \u4ec5\u77e5\u9053 \u201c\u4f55\u65f6\u201d \u548c \u201c\u4e3a\u4f55\u201d \u6355\u6349\u539f\u53d1\u5668\u7684\u72b6\u6001\uff0c\u4ee5\u53ca\u4f55\u65f6\u6062\u590d\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u8d1f\u8d23\u4eba\u901a\u8fc7\u4fdd\u5b58\u5907\u5fd8\u5f55\u6808\u6765\u8bb0\u5f55\u539f\u53d1\u5668\u7684\u5386\u53f2\u72b6\u6001\u3002\u5f53\u539f\u53d1\u5668\u9700\u8981\u56de\u6eaf\u5386\u53f2\u72b6\u6001\u65f6\uff0c\u8d1f\u8d23\u4eba\u5c06\u4ece\u6808\u4e2d\u83b7\u53d6\u6700\u9876\u90e8\u7684\u5907\u5fd8\u5f55\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u539f\u53d1\u5668\u7684\u6062\u590d (restoration) \u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u8be5\u5b9e\u73b0\u65b9\u6cd5\u4e2d\uff0c\u5907\u5fd8\u5f55\u7c7b\u5c06\u88ab\u5d4c\u5957\u5728\u539f\u53d1\u5668\u4e2d\u3002\u8fd9\u6837\u539f\u53d1\u5668\u5c31\u53ef\u8bbf\u95ee\u5907\u5fd8\u5f55\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\uff0c\u5373\u4f7f\u8fd9\u4e9b\u65b9\u6cd5\u88ab\u58f0\u660e\u4e3a\u79c1\u6709\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u8d1f\u8d23\u4eba\u5bf9\u4e8e\u5907\u5fd8\u5f55\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\u7684\u8bbf\u95ee\u6743\u9650\u975e\u5e38\u6709\u9650\uff1a\u5b83\u4eec\u53ea\u80fd\u5728\u6808\u4e2d\u4fdd\u5b58\u5907\u5fd8\u5f55\uff0c\u800c\u4e0d\u80fd\u4fee\u6539\u5176\u72b6\u6001\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u4e8e\u4e2d\u95f4\u63a5\u53e3\u7684\u5b9e\u73b0",children:(0,r.jsx)(e.strong,{children:"\u57fa\u4e8e\u4e2d\u95f4\u63a5\u53e3\u7684\u5b9e\u73b0"})}),"\n",(0,r.jsx)(e.p,{children:"\u53e6\u5916\u4e00\u79cd\u5b9e\u73b0\u65b9\u6cd5\u9002\u7528\u4e8e\u4e0d\u652f\u6301\u5d4c\u5957\u7c7b\u7684\u7f16\u7a0b\u8bed\u8a00 (\u6ca1\u9519\uff0c\u6211\u8bf4\u7684\u5c31\u662f PHP)\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/structure2-2x.png",alt:""})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728\u6ca1\u6709\u5d4c\u5957\u7c7b\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u89c4\u5b9a\u8d1f\u8d23\u4eba\u4ec5\u53ef\u901a\u8fc7\u660e\u786e\u58f0\u660e\u7684\u4e2d\u95f4\u63a5\u53e3\u4e0e\u5907\u5fd8\u5f55\u4e92\u52a8\uff0c\u8be5\u63a5\u53e3\u4ec5\u58f0\u660e\u4e0e\u5907\u5fd8\u5f55\u5143\u6570\u636e\u76f8\u5173\u7684\u65b9\u6cd5\uff0c\u9650\u5236\u5176\u5bf9\u5907\u5fd8\u5f55\u6210\u5458\u53d8\u91cf\u7684\u76f4\u63a5\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u53e6\u4e00\u65b9\u9762\uff0c\u539f\u53d1\u5668\u53ef\u4ee5\u76f4\u63a5\u4e0e\u5907\u5fd8\u5f55\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\uff0c\u8bbf\u95ee\u5907\u5fd8\u5f55\u7c7b\u4e2d\u58f0\u660e\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\u3002\u8fd9\u79cd\u65b9\u5f0f\u7684\u7f3a\u70b9\u5728\u4e8e\u4f60\u9700\u8981\u5c06\u5907\u5fd8\u5f55\u7684\u6240\u6709\u6210\u5458\u53d8\u91cf\u58f0\u660e\u4e3a\u516c\u6709\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5c01\u88c5\u66f4\u52a0\u4e25\u683c\u7684\u5b9e\u73b0",children:(0,r.jsx)(e.strong,{children:"\u5c01\u88c5\u66f4\u52a0\u4e25\u683c\u7684\u5b9e\u73b0"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4e0d\u60f3\u8ba9\u5176\u4ed6\u7c7b\u6709\u4efb\u4f55\u673a\u4f1a\u901a\u8fc7\u5907\u5fd8\u5f55\u6765\u8bbf\u95ee\u539f\u53d1\u5668\u7684\u72b6\u6001\uff0c\u90a3\u4e48\u8fd8\u6709\u53e6\u4e00\u79cd\u53ef\u7528\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/structure3-2x.png",alt:""})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8fd9\u79cd\u5b9e\u73b0\u65b9\u5f0f\u5141\u8bb8\u5b58\u5728\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u539f\u53d1\u5668\u548c\u5907\u5fd8\u5f55\u3002\u6bcf\u79cd\u539f\u53d1\u5668\u90fd\u548c\u5176\u76f8\u5e94\u7684\u5907\u5fd8\u5f55\u7c7b\u8fdb\u884c\u4ea4\u4e92\u3002\u539f\u53d1\u5668\u548c\u5907\u5fd8\u5f55\u90fd\u4e0d\u4f1a\u5c06\u5176\u72b6\u6001\u66b4\u9732\u7ed9\u5176\u4ed6\u7c7b\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u8d1f\u8d23\u4eba\u6b64\u65f6\u88ab\u660e\u786e\u7981\u6b62\u4fee\u6539\u5b58\u50a8\u5728\u5907\u5fd8\u5f55\u4e2d\u7684\u72b6\u6001\u3002\u4f46\u8d1f\u8d23\u4eba\u7c7b\u5c06\u72ec\u7acb\u4e8e\u539f\u53d1\u5668\uff0c\u56e0\u4e3a\u6b64\u65f6\u6062\u590d\u65b9\u6cd5\u88ab\u5b9a\u4e49\u5728\u4e86\u5907\u5fd8\u5f55\u7c7b\u4e2d\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u4e2a\u5907\u5fd8\u5f55\u5c06\u4e0e\u521b\u5efa\u4e86\u81ea\u8eab\u7684\u539f\u53d1\u5668\u8fde\u63a5\u3002\u539f\u53d1\u5668\u4f1a\u5c06\u81ea\u5df1\u53ca\u72b6\u6001\u4f20\u9012\u7ed9\u5907\u5fd8\u5f55\u7684\u6784\u9020\u51fd\u6570\u3002\u7531\u4e8e\u8fd9\u4e9b\u7c7b\u4e4b\u95f4\u7684\u7d27\u5bc6\u8054\u7cfb\uff0c\u53ea\u8981\u539f\u53d1\u5668\u5b9a\u4e49\u4e86\u5408\u9002\u7684\u8bbe\u7f6e\u5668 (setter)\uff0c\u5907\u5fd8\u5f55\u5c31\u80fd\u6062\u590d\u5176\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,r.jsx)(e.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,r.jsxs)(e.p,{children:["\u672c\u4f8b\u7ed3\u5408\u4f7f\u7528\u4e86",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/command",children:(0,r.jsx)(e.strong,{children:"\u547d\u4ee4"})}),"\u6a21\u5f0f\u4e0e\u5907\u5fd8\u5f55\u6a21\u5f0f\uff0c\u53ef\u4fdd\u5b58\u590d\u6742\u6587\u5b57\u7f16\u8f91\u5668\u7684\u72b6\u6001\u5feb\u7167\uff0c\u5e76\u80fd\u5728\u9700\u8981\u65f6\u4ece\u5feb\u7167\u4e2d\u6062\u590d\u4e4b\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/memento/example-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u4fdd\u5b58\u6587\u5b57\u7f16\u8f91\u5668\u72b6\u6001\u7684\u5feb\u7167\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u547d\u4ee4 (command) \u5bf9\u8c61\u5c06\u4f5c\u4e3a\u8d1f\u8d23\u4eba\uff0c\u5b83\u4eec\u4f1a\u5728\u6267\u884c\u4e0e\u547d\u4ee4\u76f8\u5173\u7684\u64cd\u4f5c\u524d\u83b7\u53d6\u7f16\u8f91\u5668\u7684\u5907\u5fd8\u5f55\u3002\u5f53\u7528\u6237\u8bd5\u56fe\u64a4\u9500\u6700\u8fd1\u7684\u547d\u4ee4\u65f6\uff0c\u7f16\u8f91\u5668\u53ef\u4ee5\u4f7f\u7528\u4fdd\u5b58\u5728\u547d\u4ee4\u4e2d\u7684\u5907\u5fd8\u5f55\u6765\u5c06\u81ea\u8eab\u56de\u6eda\u5230\u4e4b\u524d\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5907\u5fd8\u5f55\u7c7b\u6ca1\u6709\u58f0\u660e\u4efb\u4f55\u516c\u6709\u7684\u6210\u5458\u53d8\u91cf\u3001\u83b7\u53d6\u5668 (getter) \u548c\u8bbe\u7f6e\u5668\uff0c\u56e0\u6b64\u6ca1\u6709\u5bf9\u8c61\u53ef\u4ee5\u4fee\u6539\u5176\u5185\u5bb9\u3002\u5907\u5fd8\u5f55\u4e0e\u521b\u5efa\u81ea\u5df1\u7684\u7f16\u8f91\u5668\u76f8\u8fde\u63a5\uff0c\u8fd9\u4f7f\u5f97\u5907\u5fd8\u5f55\u80fd\u591f\u901a\u8fc7\u7f16\u8f91\u5668\u5bf9\u8c61\u7684\u8bbe\u7f6e\u5668\u4f20\u9012\u6570\u636e\uff0c\u6062\u590d\u4e0e\u5176\u76f8\u8fde\u63a5\u7684\u7f16\u8f91\u5668\u7684\u72b6\u6001\u3002\u7531\u4e8e\u5907\u5fd8\u5f55\u4e0e\u7279\u5b9a\u7684\u7f16\u8f91\u5668\u5bf9\u8c61\u76f8\u8fde\u63a5\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u4e2d\u5fc3\u5316\u7684\u64a4\u9500\u6808\u5b9e\u73b0\u5bf9\u591a\u4e2a\u72ec\u7acb\u7f16\u8f91\u5668\u7a97\u53e3\u7684\u652f\u6301\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"// \u539f\u53d1\u5668\u4e2d\u5305\u542b\u4e86\u4e00\u4e9b\u53ef\u80fd\u4f1a\u968f\u65f6\u95f4\u53d8\u5316\u7684\u91cd\u8981\u6570\u636e\u3002\u5b83\u8fd8\u5b9a\u4e49\u4e86\u5728\u5907\u5fd8\u5f55\u4e2d\u4fdd\u5b58\n// \u81ea\u8eab\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4ece\u5907\u5fd8\u5f55\u4e2d\u6062\u590d\u72b6\u6001\u7684\u65b9\u6cd5\u3002\nclass Editor is\n    private field text, curX, curY, selectionWidth\n\n    method setText(text) is\n        this.text = text\n\n    method setCursor(x, y) is\n        this.curX = x\n        this.curY = y\n\n    method setSelectionWidth(width) is\n        this.selectionWidth = width\n\n    // \u5728\u5907\u5fd8\u5f55\u4e2d\u4fdd\u5b58\u5f53\u524d\u7684\u72b6\u6001\u3002\n    method createSnapshot():Snapshot is\n        // \u5907\u5fd8\u5f55\u662f\u4e0d\u53ef\u53d8\u7684\u5bf9\u8c61\uff1b\u56e0\u6b64\u539f\u53d1\u5668\u4f1a\u5c06\u81ea\u8eab\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5907\u5fd8\n        // \u5f55\u7684\u6784\u9020\u51fd\u6570\u3002\n        return new Snapshot(this, text, curX, curY, selectionWidth)\n\n// \u5907\u5fd8\u5f55\u7c7b\u4fdd\u5b58\u6709\u7f16\u8f91\u5668\u7684\u8fc7\u5f80\u72b6\u6001\u3002\nclass Snapshot is\n    private field editor: Editor\n    private field text, curX, curY, selectionWidth\n\n    constructor Snapshot(editor, text, curX, curY, selectionWidth) is\n        this.editor = editor\n        this.text = text\n        this.curX = x\n        this.curY = y\n        this.selectionWidth = selectionWidth\n\n    // \u5728\u67d0\u4e00\u65f6\u523b\uff0c\u7f16\u8f91\u5668\u4e4b\u524d\u7684\u72b6\u6001\u53ef\u4ee5\u4f7f\u7528\u5907\u5fd8\u5f55\u5bf9\u8c61\u6765\u6062\u590d\u3002\n    method restore() is\n        editor.setText(text)\n        editor.setCursor(curX, curY)\n        editor.setSelectionWidth(selectionWidth)\n\n// \u547d\u4ee4\u5bf9\u8c61\u53ef\u4f5c\u4e3a\u8d1f\u8d23\u4eba\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u547d\u4ee4\u4f1a\u5728\u4fee\u6539\u539f\u53d1\u5668\u72b6\u6001\u4e4b\u524d\u83b7\u53d6\u4e00\u4e2a\n// \u5907\u5fd8\u5f55\u3002\u5f53\u9700\u8981\u64a4\u9500\u65f6\uff0c\u5b83\u4f1a\u4ece\u5907\u5fd8\u5f55\u4e2d\u6062\u590d\u539f\u53d1\u5668\u7684\u72b6\u6001\u3002\nclass Command is\n    private field backup: Snapshot\n\n    method makeBackup() is\n        backup = editor.createSnapshot()\n\n    method undo() is\n        if (backup != null)\n            backup.restore()\n    // \u2026\u2026\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5f53\u4f60\u9700\u8981\u521b\u5efa\u5bf9\u8c61\u72b6\u6001\u5feb\u7167\u6765\u6062\u590d\u5176\u4e4b\u524d\u7684\u72b6\u6001\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5907\u5fd8\u5f55\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(e.p,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u5141\u8bb8\u4f60\u590d\u5236\u5bf9\u8c61\u4e2d\u7684\u5168\u90e8\u72b6\u6001 (\u5305\u62ec\u79c1\u6709\u6210\u5458\u53d8\u91cf)\uff0c\u5e76\u5c06\u5176\u72ec\u7acb\u4e8e\u5bf9\u8c61\u8fdb\u884c\u4fdd\u5b58\u3002\u5c3d\u7ba1\u5927\u90e8\u5206\u4eba\u56e0\u4e3a \u201c\u64a4\u9500\u201d \u8fd9\u4e2a\u7528\u4f8b\u624d\u8bb0\u5f97\u8be5\u6a21\u5f0f\uff0c\u4f46\u5176\u5b9e\u5b83\u5728\u5904\u7406\u4e8b\u52a1 (\u6bd4\u5982\u9700\u8981\u5728\u51fa\u73b0\u9519\u8bef\u65f6\u56de\u6eda\u4e00\u4e2a\u64cd\u4f5c) \u7684\u8fc7\u7a0b\u4e2d\u4e5f\u5fc5\u4e0d\u53ef\u5c11\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5f53\u76f4\u63a5\u8bbf\u95ee\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u3001\u83b7\u53d6\u5668\u6216\u8bbe\u7f6e\u5668\u5c06\u5bfc\u81f4\u5c01\u88c5\u88ab\u7a81\u7834\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(e.p,{children:"\u5907\u5fd8\u5f55\u8ba9\u5bf9\u8c61\u81ea\u884c\u8d1f\u8d23\u521b\u5efa\u5176\u72b6\u6001\u7684\u5feb\u7167\u3002\u4efb\u4f55\u5176\u4ed6\u5bf9\u8c61\u90fd\u4e0d\u80fd\u8bfb\u53d6\u5feb\u7167\uff0c\u8fd9\u6709\u6548\u5730\u4fdd\u969c\u4e86\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u786e\u5b9a\u62c5\u4efb\u539f\u53d1\u5668\u89d2\u8272\u7684\u7c7b\u3002\u91cd\u8981\u7684\u662f\u660e\u786e\u7a0b\u5e8f\u4f7f\u7528\u7684\u4e00\u4e2a\u539f\u53d1\u5668\u4e2d\u5fc3\u5bf9\u8c61\uff0c\u8fd8\u662f\u591a\u4e2a\u8f83\u5c0f\u7684\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u521b\u5efa\u5907\u5fd8\u5f55\u7c7b\u3002\u9010\u4e00\u58f0\u660e\u5bf9\u5e94\u6bcf\u4e2a\u539f\u53d1\u5668\u6210\u5458\u53d8\u91cf\u7684\u5907\u5fd8\u5f55\u6210\u5458\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u5907\u5fd8\u5f55\u7c7b\u8bbe\u4e3a\u4e0d\u53ef\u53d8\u3002\u5907\u5fd8\u5f55\u53ea\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4e00\u6b21\u6027\u63a5\u6536\u6570\u636e\u3002\u8be5\u7c7b\u4e2d\u4e0d\u80fd\u5305\u542b\u8bbe\u7f6e\u5668\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u4f60\u6240\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\u5d4c\u5957\u7c7b\uff0c\u5219\u53ef\u5c06\u5907\u5fd8\u5f55\u5d4c\u5957\u5728\u539f\u53d1\u5668\u4e2d\uff1b\u5982\u679c\u4e0d\u652f\u6301\uff0c\u90a3\u4e48\u4f60\u53ef\u4ece\u5907\u5fd8\u5f55\u7c7b\u4e2d\u62bd\u53d6\u4e00\u4e2a\u7a7a\u63a5\u53e3\uff0c\u7136\u540e\u8ba9\u5176\u4ed6\u6240\u6709\u5bf9\u8c61\u901a\u8fc7\u63a5\u53e3\u6765\u5f15\u7528\u5907\u5fd8\u5f55\u3002\u4f60\u53ef\u5728\u8be5\u63a5\u53e3\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u5143\u6570\u636e\u64cd\u4f5c\uff0c\u4f46\u4e0d\u80fd\u66b4\u9732\u539f\u53d1\u5668\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u539f\u53d1\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u521b\u5efa\u5907\u5fd8\u5f55\u7684\u65b9\u6cd5\u3002\u539f\u53d1\u5668\u5fc5\u987b\u901a\u8fc7\u5907\u5fd8\u5f55\u6784\u9020\u51fd\u6570\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u9645\u53c2\u6570\u6765\u5c06\u81ea\u8eab\u72b6\u6001\u4f20\u9012\u7ed9\u5907\u5fd8\u5f55\u3002\n\u8be5\u65b9\u6cd5\u8fd4\u56de\u7ed3\u679c\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u4f60\u5728\u4e0a\u4e00\u6b65\u4e2d\u62bd\u53d6\u7684\u63a5\u53e3 (\u5982\u679c\u4f60\u5df2\u7ecf\u62bd\u53d6\u4e86)\u3002\u5b9e\u9645\u4e0a\uff0c\u521b\u5efa\u5907\u5fd8\u5f55\u7684\u65b9\u6cd5\u5fc5\u987b\u76f4\u63a5\u4e0e\u5907\u5fd8\u5f55\u7c7b\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u539f\u53d1\u5668\u7c7b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7528\u4e8e\u6062\u590d\u81ea\u8eab\u72b6\u6001\u7684\u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u63a5\u53d7\u5907\u5fd8\u5f55\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c\u4f60\u5728\u4e4b\u524d\u7684\u6b65\u9aa4\u4e2d\u62bd\u53d6\u4e86\u63a5\u53e3\uff0c\u90a3\u4e48\u53ef\u5c06\u63a5\u53e3\u4f5c\u4e3a\u53c2\u6570\u7684\u7c7b\u578b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u5c06\u8f93\u5165\u5bf9\u8c61\u5f3a\u5236\u8f6c\u6362\u4e3a\u5907\u5fd8\u5f55\uff0c\u56e0\u4e3a\u539f\u53d1\u5668\u9700\u8981\u62e5\u6709\u5bf9\u8be5\u5bf9\u8c61\u7684\u5b8c\u5168\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u65e0\u8bba\u8d1f\u8d23\u4eba\u662f\u547d\u4ee4\u5bf9\u8c61\u3001\u5386\u53f2\u8bb0\u5f55\u6216\u5176\u4ed6\u5b8c\u5168\u4e0d\u540c\u7684\u4e1c\u897f\uff0c\u5b83\u90fd\u5fc5\u987b\u8981\u77e5\u9053\u4f55\u65f6\u5411\u539f\u53d1\u5668\u8bf7\u6c42\u65b0\u7684\u5907\u5fd8\u5f55\u3001\u5982\u4f55\u5b58\u50a8\u5907\u5fd8\u5f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\u7279\u5b9a\u5907\u5fd8\u5f55\u6765\u5bf9\u539f\u53d1\u5668\u8fdb\u884c\u6062\u590d\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u8d1f\u8d23\u4eba\u4e0e\u539f\u53d1\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\u53ef\u4ee5\u79fb\u52a8\u5230\u5907\u5fd8\u5f55\u7c7b\u4e2d\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6bcf\u4e2a\u5907\u5fd8\u5f55\u90fd\u5fc5\u987b\u4e0e\u521b\u5efa\u81ea\u5df1\u7684\u539f\u53d1\u5668\u76f8\u8fde\u63a5\u3002\u6062\u590d\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u79fb\u52a8\u5230\u5907\u5fd8\u5f55\u7c7b\u4e2d\uff0c\u4f46\u53ea\u6709\u5f53\u5907\u5fd8\u5f55\u7c7b\u5d4c\u5957\u5728\u539f\u53d1\u5668\u4e2d\uff0c\u6216\u8005\u539f\u53d1\u5668\u7c7b\u63d0\u4f9b\u4e86\u8db3\u591f\u591a\u7684\u8bbe\u7f6e\u5668\u5e76\u53ef\u5bf9\u5176\u72b6\u6001\u8fdb\u884c\u91cd\u5199\u65f6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u624d\u80fd\u5b9e\u73b0\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,r.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u5728\u4e0d\u7834\u574f\u5bf9\u8c61\u5c01\u88c5\u60c5\u51b5\u7684\u524d\u63d0\u4e0b\u521b\u5efa\u5bf9\u8c61\u72b6\u6001\u5feb\u7167\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u901a\u8fc7\u8ba9\u8d1f\u8d23\u4eba\u7ef4\u62a4\u539f\u53d1\u5668\u72b6\u6001\u5386\u53f2\u8bb0\u5f55\u6765\u7b80\u5316\u539f\u53d1\u5668\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u274c \u5982\u679c\u5ba2\u6237\u7aef\u8fc7\u4e8e\u9891\u7e41\u5730\u521b\u5efa\u5907\u5fd8\u5f55\uff0c\u7a0b\u5e8f\u5c06\u6d88\u8017\u5927\u91cf\u5185\u5b58\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u274c \u8d1f\u8d23\u4eba\u5fc5\u987b\u5b8c\u6574\u8ddf\u8e2a\u539f\u53d1\u5668\u7684\u751f\u547d\u5468\u671f\uff0c\u8fd9\u6837\u624d\u80fd\u9500\u6bc1\u5f03\u7528\u7684\u5907\u5fd8\u5f55\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u274c \u7edd\u5927\u90e8\u5206\u52a8\u6001\u7f16\u7a0b\u8bed\u8a00 (\u4f8b\u5982 PHP\u3001Python \u548c JavaScript) \u4e0d\u80fd\u786e\u4fdd\u5907\u5fd8\u5f55\u4e2d\u7684\u72b6\u6001\u4e0d\u88ab\u4fee\u6539\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,r.jsx)(e.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/command",children:(0,r.jsx)(e.strong,{children:"\u547d\u4ee4\u6a21\u5f0f"})}),"\u548c",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/memento",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55\u6a21\u5f0f"})}),"\u6765\u5b9e\u73b0 \u201c\u64a4\u9500\u201d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u547d\u4ee4\u7528\u4e8e\u5bf9\u76ee\u6807\u5bf9\u8c61\u6267\u884c\u5404\u79cd\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c\u5907\u5fd8\u5f55\u7528\u6765\u4fdd\u5b58\u4e00\u6761\u547d\u4ee4\u6267\u884c\u524d\u8be5\u5bf9\u8c61\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/memento",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55"})}),"\u548c",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/iterator",children:(0,r.jsx)(e.strong,{children:"\u8fed\u4ee3\u5668\u6a21\u5f0f"})}),"\u6765\u83b7\u53d6\u5f53\u524d\u8fed\u4ee3\u5668\u7684\u72b6\u6001\uff0c\u5e76\u4e14\u5728\u9700\u8981\u7684\u65f6\u5019\u8fdb\u884c\u56de\u6eda\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6709\u65f6\u5019",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/prototype",children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\u6a21\u5f0f"})}),"\u53ef\u4ee5\u4f5c\u4e3a",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/memento",children:(0,r.jsx)(e.strong,{children:"\u5907\u5fd8\u5f55"})}),"\u7684\u4e00\u4e2a\u7b80\u5316\u7248\u672c\uff0c\u5176\u6761\u4ef6\u662f\u4f60\u9700\u8981\u5728\u5386\u53f2\u8bb0\u5f55\u4e2d\u5b58\u50a8\u7684\u5bf9\u8c61\u7684\u72b6\u6001\u6bd4\u8f83\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u94fe\u63a5\u5176\u4ed6\u5916\u90e8\u8d44\u6e90\uff0c\u6216\u8005\u94fe\u63a5\u53ef\u4ee5\u65b9\u4fbf\u5730\u91cd\u5efa\u3002"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);
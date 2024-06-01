"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2230],{15483:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=s(74848),r=s(28453);const l={description:"\u8ba9\u63a5\u53e3\u4e0d\u517c\u5bb9\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u5408\u4f5c\u3002"},t="\u9002\u914d\u5668\u6a21\u5f0f",d={id:"design-patterns/structural-patterns/adapter",title:"\u9002\u914d\u5668\u6a21\u5f0f",description:"\u8ba9\u63a5\u53e3\u4e0d\u517c\u5bb9\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u5408\u4f5c\u3002",source:"@site/docs/design-patterns/02-structural-patterns/01-adapter.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/structural-patterns/adapter",permalink:"/docs/design-patterns/structural-patterns/adapter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"\u8ba9\u63a5\u53e3\u4e0d\u517c\u5bb9\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u5408\u4f5c\u3002"},sidebar:"designpatternsSidebar",previous:{title:"\u7ed3\u6784\u578b\u6a21\u5f0f",permalink:"/docs/design-patterns/structural-patterns/"},next:{title:"\u6865\u63a5\u6a21\u5f0f",permalink:"/docs/design-patterns/structural-patterns/bridge"}},c={},h=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u5bf9\u8c61\u9002\u914d\u5668",id:"\u5bf9\u8c61\u9002\u914d\u5668",level:3},{value:"\u7c7b\u9002\u914d\u5668",id:"\u7c7b\u9002\u914d\u5668",level:3},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",level:2},{value:"\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function x(n){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u9002\u914d\u5668\u6a21\u5f0f",children:"\u9002\u914d\u5668\u6a21\u5f0f"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(39455).A,width:"600"})}),"\n",(0,i.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u5982\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u6b3e\u80a1\u7968\u5e02\u573a\u76d1\u6d4b\u7a0b\u5e8f\uff0c \u5b83\u4f1a\u4ece\u4e0d\u540c\u6765\u6e90\u4e0b\u8f7d XML \u683c\u5f0f\u7684\u80a1\u7968\u6570\u636e\uff0c \u7136\u540e\u5411\u7528\u6237\u5448\u73b0\u51fa\u7f8e\u89c2\u7684\u56fe\u8868\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c \u4f60\u51b3\u5b9a\u5728\u7a0b\u5e8f\u4e2d\u6574\u5408\u4e00\u4e2a\u7b2c\u4e09\u65b9\u667a\u80fd\u5206\u6790\u51fd\u6570\u5e93\u3002 \u4f46\u662f\u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c \u90a3\u5c31\u662f\u5206\u6790\u51fd\u6570\u5e93\u53ea\u517c\u5bb9 JSON \u683c\u5f0f\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(60447).A,width:"600"})}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(e.p,{children:"\u4f60\u65e0\u6cd5\u201c\u76f4\u63a5\u201d\u4f7f\u7528\u5206\u6790\u51fd\u6570\u5e93\uff0c \u56e0\u4e3a\u5b83\u6240\u9700\u7684\u8f93\u5165\u6570\u636e\u683c\u5f0f\u4e0e\u4f60\u7684\u7a0b\u5e8f\u4e0d\u517c\u5bb9\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u4fee\u6539\u7a0b\u5e8f\u5e93\u6765\u652f\u6301 XML\u3002 \u4f46\u662f\uff0c \u8fd9\u53ef\u80fd\u9700\u8981\u4fee\u6539\u90e8\u5206\u4f9d\u8d56\u8be5\u7a0b\u5e8f\u5e93\u7684\u73b0\u6709\u4ee3\u7801\u3002 \u751a\u81f3\u8fd8\u6709\u66f4\u7cdf\u7cd5\u7684\u60c5\u51b5\uff0c \u4f60\u53ef\u80fd\u6839\u672c\u6ca1\u6709\u7a0b\u5e8f\u5e93\u7684\u6e90\u4ee3\u7801\uff0c \u4ece\u800c\u65e0\u6cd5\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u9002\u914d\u5668\u3002 \u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u5bf9\u8c61\uff0c \u80fd\u591f\u8f6c\u6362\u5bf9\u8c61\u63a5\u53e3\uff0c \u4f7f\u5176\u80fd\u4e0e\u5176\u4ed6\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9002\u914d\u5668\u6a21\u5f0f\u901a\u8fc7\u5c01\u88c5\u5bf9\u8c61\u5c06\u590d\u6742\u7684\u8f6c\u6362\u8fc7\u7a0b\u9690\u85cf\u4e8e\u5e55\u540e\u3002 \u88ab\u5c01\u88c5\u7684\u5bf9\u8c61\u751a\u81f3\u5bdf\u89c9\u4e0d\u5230\u9002\u914d\u5668\u7684\u5b58\u5728\u3002 \u4f8b\u5982\uff0c \u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5c06\u6240\u6709\u6570\u636e\u8f6c\u6362\u4e3a\u82f1\u5236\u5355\u4f4d\uff08\u5982\u82f1\u5c3a\u548c\u82f1\u91cc\uff09\u7684\u9002\u914d\u5668\u5c01\u88c5\u8fd0\u884c\u4e8e\u7c73\u548c\u5343\u7c73\u5355\u4f4d\u5236\u4e2d\u7684\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9002\u914d\u5668\u4e0d\u4ec5\u53ef\u4ee5\u8f6c\u6362\u4e0d\u540c\u683c\u5f0f\u7684\u6570\u636e\uff0c \u5176\u8fd8\u6709\u52a9\u4e8e\u91c7\u7528\u4e0d\u540c\u63a5\u53e3\u7684\u5bf9\u8c61\u4e4b\u95f4\u7684\u5408\u4f5c\u3002 \u5b83\u7684\u8fd0\u4f5c\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u9002\u914d\u5668\u5b9e\u73b0\u4e0e\u5176\u4e2d\u4e00\u4e2a\u73b0\u6709\u5bf9\u8c61\u517c\u5bb9\u7684\u63a5\u53e3\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u73b0\u6709\u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528\u8be5\u63a5\u53e3\u5b89\u5168\u5730\u8c03\u7528\u9002\u914d\u5668\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9002\u914d\u5668\u65b9\u6cd5\u88ab\u8c03\u7528\u540e\u5c06\u4ee5\u53e6\u4e00\u4e2a\u5bf9\u8c61\u517c\u5bb9\u7684\u683c\u5f0f\u548c\u987a\u5e8f\u5c06\u8bf7 \u6c42\u4f20\u9012\u7ed9\u8be5\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u65f6\u4f60\u751a\u81f3\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u53cc\u5411\u9002\u914d\u5668\u6765\u5b9e\u73b0\u53cc\u5411\u8f6c\u6362\u8c03\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u56de\u5230\u80a1\u7968\u5e02\u573a\u7a0b\u5e8f\u3002 \u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u683c\u5f0f\u4e0d\u517c\u5bb9\u7684\u95ee\u9898\uff0c \u4f60\u53ef\u4ee5\u4e3a\u5206\u6790\u51fd\u6570\u5e93\u4e2d\u7684\u6bcf\u4e2a\u7c7b\u521b\u5efa\u5c06 XML \u8f6c\u6362\u4e3a JSON \u683c\u5f0f\u7684\u9002\u914d\u5668\uff0c \u7136\u540e\u8ba9\u5ba2\u6237\u7aef\u4ec5\u901a\u8fc7\u8fd9\u4e9b\u9002\u914d\u5668\u6765\u4e0e\u51fd\u6570\u5e93\u8fdb\u884c\u4ea4\u6d41\u3002 \u5f53\u67d0\u4e2a\u9002\u914d\u5668\u88ab\u8c03\u7528\u65f6\uff0c \u5b83\u4f1a\u5c06\u4f20\u5165\u7684 XML \u6570\u636e\u8f6c\u6362\u4e3a JSON \u7ed3\u6784\uff0c \u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u88ab\u5c01\u88c5\u5206\u6790\u5bf9\u8c61\u7684\u76f8\u5e94\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(30357).A,width:"600"})}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"\u51fa\u56fd\u65c5\u884c\u524d\u540e\u7684\u65c5\u884c\u7bb1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4ece\u7f8e\u56fd\u5230\u6b27\u6d32\u65c5\u884c\uff0c \u90a3\u4e48\u5728\u7ed9\u7b14\u8bb0\u672c\u5145\u7535\u65f6\u53ef\u80fd\u4f1a\u5927\u5403\u4e00\u60ca\u3002 \u4e0d\u540c\u56fd\u5bb6\u7684\u7535\u6e90\u63d2\u5934\u548c\u63d2\u5ea7\u6807\u51c6\u4e0d\u540c\u3002 \u7f8e\u56fd\u63d2\u5934\u548c\u5fb7\u56fd\u63d2\u5ea7\u4e0d\u5339\u914d\u3002 \u540c\u65f6\u63d0\u4f9b\u7f8e\u56fd\u6807\u51c6\u63d2\u5ea7\u548c\u6b27\u6d32\u6807\u51c6\u63d2\u5934\u7684\u7535\u6e90\u9002\u914d\u5668\u53ef\u4ee5\u89e3\u51b3\u4f60\u7684\u96be\u9898\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,i.jsx)(e.h3,{id:"\u5bf9\u8c61\u9002\u914d\u5668",children:"\u5bf9\u8c61\u9002\u914d\u5668"}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u73b0\u65f6\u4f7f\u7528\u4e86\u6784\u6210\u539f\u5219\uff1a\u9002\u914d\u5668\u5b9e\u73b0\u4e86\u5176\u4e2d\u4e00\u4e2a\u5bf9\u8c61\u7684\u63a5\u53e3\uff0c \u5e76\u5bf9\u53e6\u4e00\u4e2a\u5bf9\u8c61\u8fdb\u884c\u5c01\u88c5\u3002 \u6240\u6709\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u90fd\u53ef\u4ee5\u5b9e\u73b0 \u9002\u914d\u5668\u3002"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(10667).A,width:"600"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\uff08Client\uff09\u662f\u5305\u542b\u5f53\u524d\u7a0b\u5e8f\u4e1a\u52a1\u903b\u8f91\u7684\u7c7b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u63a5\u53e3\uff08Client Interface\uff09\u63cf\u8ff0\u4e86\u5176\u4ed6\u7c7b\u4e0e\u5ba2\u6237\u7aef\u4ee3\u7801\u5408\u4f5c\u65f6\u5fc5\u987b\u9075\u5faa\u7684\u534f\u8bae\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u670d\u52a1\uff08Service\uff09\u4e2d\u6709\u4e00\u4e9b\u529f\u80fd\u7c7b\uff08\u901a\u5e38\u6765\u81ea\u7b2c\u4e09\u65b9\u6216\u9057\u7559\u7cfb\u7edf\uff09\u3002 \u5ba2\u6237\u7aef\u4e0e\u5176\u63a5\u53e3\u4e0d\u517c\u5bb9\uff0c \u56e0\u6b64\u65e0\u6cd5\u76f4\u63a5\u8c03\u7528\u5176\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9002\u914d\u5668\uff08Adapter\uff09\u662f\u4e00\u4e2a\u53ef\u4ee5\u540c\u65f6\u4e0e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u4ea4\u4e92\u7684\u7c7b\uff1a\u5b83\u5728\u5b9e\u73b0\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u540c\u65f6\u5c01\u88c5\u4e86\u670d\u52a1\u5bf9\u8c61\u3002 \u9002\u914d\u5668\u63a5 \u53d7\u5ba2\u6237\u7aef\u901a\u8fc7\u9002\u914d\u5668\u63a5\u53e3\u53d1\u8d77\u7684\u8c03\u7528\uff0c \u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u9002\u7528\u4e8e \u88ab\u5c01\u88c5\u670d\u52a1\u5bf9\u8c61\u7684\u8c03\u7528\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u53ea\u9700\u901a\u8fc7\u63a5\u53e3\u4e0e\u9002\u914d\u5668\u4ea4\u4e92\u5373\u53ef\uff0c \u65e0\u9700\u4e0e\u5177\u4f53\u7684\u9002\u914d\u5668\u7c7b\u8026\u5408\u3002 \u56e0\u6b64\uff0c \u4f60\u53ef\u4ee5\u5411\u7a0b\u5e8f\u4e2d\u6dfb\u52a0\u65b0\u7c7b\u578b\u7684\u9002\u914d\u5668\u800c\u65e0\u9700\u4fee\u6539\u5df2\u6709\u4ee3\u7801\u3002 \u8fd9\u5728\u670d\u52a1\u7c7b\u7684\u63a5\u53e3\u88ab\u66f4\u6539\u6216\u66ff\u6362\u65f6\u5f88\u6709\u7528\uff1a\u4f60\u65e0\u9700\u4fee\u6539\u5ba2\u6237\u7aef\u4ee3\u7801\u5c31\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u9002\u914d\u5668\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7c7b\u9002\u914d\u5668",children:"\u7c7b\u9002\u914d\u5668"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e00\u5b9e\u73b0\u4f7f\u7528\u4e86\u7ee7\u627f\u673a\u5236\uff1a\u9002\u914d\u5668\u540c\u65f6\u7ee7\u627f\u4e24\u4e2a\u5bf9\u8c61\u7684\u63a5\u53e3\u3002 \u8bf7\u6ce8\u610f\uff0c \u8fd9\u79cd\u65b9\u5f0f\u4ec5\u80fd\u5728\u652f\u6301\u591a\u91cd\u7ee7\u627f\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5b9e\u73b0\uff0c \u4f8b\u5982 C++\u3002"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(86232).A,width:"600"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u7c7b\u9002\u914d\u5668\u4e0d\u9700\u8981\u5c01\u88c5\u4efb\u4f55\u5bf9\u8c61\uff0c \u56e0\u4e3a\u5b83\u540c\u65f6\u7ee7\u627f\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7684\u884c\u4e3a\u3002 \u9002\u914d\u529f\u80fd\u5728\u91cd\u5199\u7684\u65b9\u6cd5\u4e2d\u5b8c\u6210\u3002 \u6700\u540e\u751f\u6210\u7684\u9002\u914d\u5668\u53ef\u66ff\u4ee3\u5df2\u6709\u7684\u5ba2\u6237\u7aef\u7c7b\u8fdb\u884c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f2a\u4ee3\u7801",children:"\u4f2a\u4ee3\u7801"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u5217\u9002\u914d\u5668\u6a21\u5f0f\u6f14\u793a\u57fa\u4e8e\u7ecf\u5178\u7684\u201c\u65b9\u9489\u548c\u5706\u5b54\u201d\u95ee\u9898\u3002"}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:s(43088).A,width:"600"})}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"\u8ba9\u65b9\u9489\u9002\u914d\u5706\u5b54\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9002\u914d\u5668\u5047\u626e\u6210\u4e00\u4e2a\u5706\u9489 \uff08RoundPeg\uff09\uff0c \u5176\u534a\u5f84\u7b49\u4e8e\u65b9\u9489 \uff08SquarePeg\uff09\u6a2a\u622a\u9762\u5bf9\u89d2\u7ebf\u7684\u4e00\u534a\uff08\u5373\u80fd\u591f\u5bb9\u7eb3\u65b9\u9489\u7684\u6700\u5c0f\u5916\u63a5\u5706\u7684\u534a\u5f84\uff09\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u9002\u5408\u5e94\u7528\u573a\u666f",children:"\u9002\u5408\u5e94\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u5f53\u4f60\u5e0c\u671b\u4f7f\u7528\u67d0\u4e2a\u7c7b\uff0c \u4f46\u662f\u5176\u63a5\u53e3\u4e0e\u5176\u4ed6\u4ee3\u7801\u4e0d\u517c\u5bb9\u65f6\uff0c \u53ef\u4ee5\u4f7f\u7528\u9002\u914d\u5668\u7c7b\u3002"})}),"\n",(0,i.jsx)(e.li,{children:"\u9002\u914d\u5668\u6a21\u5f0f\u5141\u8bb8\u4f60\u521b\u5efa\u4e00\u4e2a\u4e2d\u95f4\u5c42\u7c7b\uff0c \u5176\u53ef\u4f5c\u4e3a\u4ee3\u7801\u4e0e\u9057\u7559\u7c7b\u3001\u7b2c\u4e09\u65b9\u7c7b\u6216\u63d0\u4f9b\u602a\u5f02\u63a5\u53e3\u7684\u7c7b\u4e4b\u95f4\u7684\u8f6c\u6362\u5668\u3002"}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u5982\u679c\u60a8\u9700\u8981\u590d\u7528\u8fd9\u6837\u4e00\u4e9b\u7c7b\uff0c \u4ed6\u4eec\u5904\u4e8e\u540c\u4e00\u4e2a\u7ee7\u627f\u4f53\u7cfb\uff0c \u5e76\u4e14\u4ed6\u4eec\u53c8\u6709\u4e86\u989d\u5916\u7684\u4e00\u4e9b\u5171\u540c\u7684\u65b9\u6cd5\uff0c \u4f46\u662f\u8fd9\u4e9b\u5171\u540c\u7684\u65b9\u6cd5\u4e0d\u662f\u6240\u6709\u5728\u8fd9\u4e00\u7ee7\u627f\u4f53\u7cfb\u4e2d\u7684\u5b50\u7c7b\u6240\u5177\u6709\u7684\u5171\u6027\u3002"})}),"\n",(0,i.jsxs)(e.li,{children:["\u4f60\u53ef\u4ee5\u6269\u5c55\u6bcf\u4e2a\u5b50\u7c7b\uff0c \u5c06\u7f3a\u5c11\u7684\u529f\u80fd\u6dfb\u52a0\u5230\u65b0\u7684\u5b50\u7c7b\u4e2d\u3002 \u4f46\u662f\uff0c \u4f60\u5fc5\u987b\u5728\u6240\u6709\u65b0\u5b50\u7c7b\u4e2d\u91cd\u590d\u6dfb\u52a0\u8fd9\u4e9b\u4ee3\u7801\uff0c \u8fd9\u6837\u4f1a\u4f7f\u5f97\u4ee3\u7801\u6709",(0,i.jsx)(e.strong,{children:"\u574f\u5473\u9053"}),"\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5c06\u7f3a\u5931\u529f\u80fd\u6dfb\u52a0\u5230\u4e00\u4e2a\u9002\u914d\u5668\u7c7b\u4e2d\u662f\u4e00\u79cd\u4f18\u96c5\u5f97\u591a\u7684\u89e3\u51b3\u65b9\u6848\u3002 \u7136\u540e\u4f60\u53ef\u4ee5\u5c06\u7f3a\u5c11\u529f\u80fd\u7684\u5bf9\u8c61\u5c01\u88c5\u5728\u9002\u914d\u5668\u4e2d\uff0c \u4ece\u800c\u52a8\u6001\u5730\u83b7\u53d6\u6240\u9700\u529f\u80fd\u3002 \u5982\u8981\u8fd9\u4e00\u70b9\u6b63\u5e38\u8fd0\u4f5c\uff0c \u76ee\u6807\u7c7b\u5fc5\u987b\u8981\u6709\u901a\u7528\u63a5\u53e3\uff0c \u9002\u914d\u5668\u7684\u6210\u5458\u53d8\u91cf\u5e94\u5f53\u9075\u5faa\u8be5\u901a\u7528\u63a5\u53e3\u3002 \u8fd9\u79cd\u65b9\u5f0f\u540c\u88c5\u9970\u6a21\u5f0f\u975e\u5e38\u76f8\u4f3c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u786e\u4fdd\u81f3\u5c11\u6709\u4e24\u4e2a\u7c7b\u7684\u63a5\u53e3\u4e0d\u517c\u5bb9\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e00\u4e2a\u65e0\u6cd5\u4fee\u6539\uff08\u901a\u5e38\u662f\u7b2c\u4e09\u65b9\u3001\u9057\u7559\u7cfb\u7edf\u6216\u8005\u5b58\u5728\u4f17\u591a\u5df2\u6709\u4f9d\u8d56\u7684\u7c7b\uff09\u7684\u529f\u80fd\u6027\u670d\u52a1\u7c7b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e00\u4e2a\u6216\u591a\u4e2a\u5c06\u53d7\u76ca\u4e8e\u4f7f\u7528\u670d\u52a1\u7c7b\u7684\u5ba2\u6237\u7aef\u7c7b\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u58f0\u660e\u5ba2\u6237\u7aef\u63a5\u53e3\uff0c \u63cf\u8ff0\u5ba2\u6237\u7aef\u5982\u4f55\u4e0e\u670d\u52a1\u4ea4\u4e92\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u9075\u5faa\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u9002\u914d\u5668\u7c7b\u3002 \u6240\u6709\u65b9\u6cd5\u6682\u65f6\u90fd\u4e3a\u7a7a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u9002\u914d\u5668\u7c7b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u7528\u4e8e\u4fdd\u5b58\u5bf9\u4e8e\u670d\u52a1\u5bf9\u8c61\u7684\u5f15\u7528\u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u901a\u8fc7\u6784\u9020\u51fd\u6570\u5bf9\u8be5\u6210\u5458\u53d8\u91cf\u8fdb\u884c\u521d\u59cb\u5316\uff0c \u4f46\u6709\u65f6\u5728\u8c03\u7528\u5176\u65b9\u6cd5\u65f6\u5c06\u8be5\u53d8\u91cf\u4f20\u9012\u7ed9\u9002\u914d\u5668\u4f1a\u66f4\u65b9\u4fbf\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4f9d\u6b21\u5b9e\u73b0\u9002\u914d\u5668\u7c7b\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u6240\u6709\u65b9\u6cd5\u3002 \u9002\u914d\u5668\u4f1a\u5c06\u5b9e\u9645\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u670d\u52a1\u5bf9\u8c61\uff0c \u81ea\u8eab\u53ea\u8d1f\u8d23\u63a5\u53e3\u6216\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u5fc5\u987b\u901a\u8fc7\u5ba2\u6237\u7aef\u63a5\u53e3\u4f7f\u7528\u9002\u914d\u5668\u3002 \u8fd9\u6837\u4e00\u6765\uff0c \u4f60\u5c31\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u5ba2\u6237\u7aef\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u4fee\u6539\u6216\u6269\u5c55\u9002\u914d\u5668\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u2705 \u5355\u4e00\u804c\u8d23\u539f\u5219\u3002\u4f60\u53ef\u4ee5\u5c06\u63a5\u53e3\u6216\u6570\u636e\u8f6c\u6362\u4ee3\u7801\u4ece\u7a0b\u5e8f\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91\u4e2d\u5206\u79bb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u2705 \u5f00\u95ed\u539f\u5219\u3002 \u53ea\u8981\u5ba2\u6237\u7aef\u4ee3\u7801\u901a\u8fc7\u5ba2\u6237\u7aef\u63a5\u53e3\u4e0e\u9002\u914d\u5668\u8fdb\u884c\u4ea4\u4e92\uff0c \u4f60\u5c31\u80fd\u5728\u4e0d\u4fee\u6539\u73b0\u6709\u5ba2\u6237\u7aef\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u5728\u7a0b\u5e8f\u4e2d\u6dfb\u52a0\u65b0\u7c7b\u578b\u7684\u9002\u914d\u5668\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u274c \u4ee3\u7801\u6574\u4f53\u590d\u6742\u5ea6\u589e\u52a0\uff0c \u56e0\u4e3a\u4f60\u9700\u8981\u65b0\u589e\u4e00\u7cfb\u5217\u63a5\u53e3\u548c\u7c7b\u3002 \u6709\u65f6\u76f4\u63a5\u66f4\u6539\u670d\u52a1\u7c7b\u4f7f\u5176\u4e0e\u5176\u4ed6\u4ee3\u7801\u517c\u5bb9\u4f1a\u66f4\u7b80\u5355\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6865\u63a5"}),"\u901a\u5e38\u4f1a\u4e8e\u5f00\u53d1\u524d\u671f\u8fdb\u884c\u8bbe\u8ba1\uff0c \u4f7f\u4f60\u80fd\u591f\u5c06\u7a0b\u5e8f\u7684\u5404\u4e2a\u90e8\u5206\u72ec\u7acb\u5f00\u6765\u4ee5\u4fbf\u5f00\u53d1\u3002 \u53e6\u4e00\u65b9\u9762\uff0c ",(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u901a\u5e38\u5728\u5df2\u6709\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c \u8ba9\u76f8\u4e92\u4e0d\u517c\u5bb9\u7684\u7c7b\u80fd\u5f88\u597d\u5730\u5408\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u53ef\u4ee5\u5bf9\u5df2\u6709\u5bf9\u8c61\u7684\u63a5\u53e3\u8fdb\u884c\u4fee\u6539\uff0c ",(0,i.jsx)(e.strong,{children:"\u88c5\u9970"}),"\u5219\u80fd\u5728\u4e0d\u6539\u53d8\u5bf9\u8c61\u63a5\u53e3\u7684\u524d\u63d0\u4e0b\u5f3a\u5316\u5bf9\u8c61\u529f\u80fd\u3002 \u6b64\u5916\uff0c ",(0,i.jsx)(e.strong,{children:"\u88c5\u9970"}),"\u8fd8\u652f\u6301\u9012\u5f52\u7ec4\u5408\uff0c ",(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u5219\u65e0\u6cd5\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u80fd\u4e3a\u88ab\u5c01\u88c5\u5bf9\u8c61\u63d0\u4f9b\u4e0d\u540c\u7684\u63a5\u53e3\uff0c ",(0,i.jsx)(e.strong,{children:"\u4ee3\u7406"}),"\u80fd\u4e3a\u5bf9\u8c61\u63d0\u4f9b\u76f8\u540c\u7684\u63a5\u53e3\uff0c ",(0,i.jsx)(e.strong,{children:"\u88c5\u9970"}),"\u5219\u80fd\u4e3a\u5bf9\u8c61\u63d0\u4f9b\u52a0\u5f3a\u7684\u63a5\u53e3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5916\u89c2"}),"\u4e3a\u73b0\u6709\u5bf9\u8c61\u5b9a\u4e49\u4e86\u4e00\u4e2a\u65b0\u63a5\u53e3\uff0c ",(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u5219\u4f1a\u8bd5\u56fe\u8fd0\u7528\u5df2\u6709\u7684\u63a5\u53e3\u3002 ",(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\u901a\u5e38\u53ea\u5c01\u88c5\u4e00\u4e2a\u5bf9\u8c61\uff0c ",(0,i.jsx)(e.strong,{children:"\u5916\u89c2"}),"\u901a\u5e38\u4f1a\u4f5c\u7528\u4e8e\u6574\u4e2a\u5bf9\u8c61\u5b50\u7cfb\u7edf\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6865\u63a5"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u72b6\u6001"}),"\u548c",(0,i.jsx)(e.strong,{children:"\u7b56\u7565"}),"\uff08\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u5305\u62ec",(0,i.jsx)(e.strong,{children:"\u9002\u914d\u5668"}),"\uff09\u6a21\u5f0f\u7684\u63a5\u53e3\u975e\u5e38\u76f8\u4f3c\u3002 \u5b9e\u9645\u4e0a\uff0c \u5b83\u4eec\u90fd\u57fa\u4e8e",(0,i.jsx)(e.strong,{children:"\u7ec4\u5408"}),"\u6a21\u5f0f\u2014\u2014\u5373\u5c06\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5176\u4ed6\u5bf9\u8c61\uff0c \u4e0d\u8fc7\u4e5f\u5404\u81ea\u89e3\u51b3\u4e86\u4e0d\u540c\u7684\u95ee\u9898\u3002 \u6a21\u5f0f\u5e76\u4e0d\u53ea\u662f\u4ee5\u7279\u5b9a\u65b9\u5f0f\u7ec4\u7ec7\u4ee3\u7801\u7684\u914d\u65b9\uff0c \u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u548c\u5176\u4ed6\u5f00\u53d1\u8005\u8ba8\u8bba\u6a21\u5f0f\u6240\u89e3\u51b3\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},30357:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/adapter-comic-1-0ee4684ed6efefead94c9f14a323aa05.png"},39455:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/adapter-72c6a944ac181292b660ec1393d136e0.png"},43088:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/example-5107fff5214da9c7b88b0e49b93eaf6f.png"},60447:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/problem-bdd09c9afea84b72e1080e93dfad818d.png"},86232:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/structure-class-adapter-061a397b522a2834db56f8a4c10bcfc2.png"},10667:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/structure-object-adapter-522d8cc201867a4ea268b8ea16f2a91d.png"},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>d});var i=s(96540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);
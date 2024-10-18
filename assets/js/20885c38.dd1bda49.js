"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9708],{46050:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=s(74848),r=s(28453);const i={description:"\u80fd\u8ba9\u4f60\u5b9a\u4e49\u4e00\u7cfb\u5217\u7b97\u6cd5\uff0c\u5e76\u5c06\u6bcf\u79cd\u7b97\u6cd5\u5206\u522b\u653e\u5165\u72ec\u7acb\u7684\u7c7b\u4e2d\uff0c\u4ee5\u4f7f\u7b97\u6cd5\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u66ff\u6362\u3002",slug:"/design-patterns/strategy"},c="\u7b56\u7565\u6a21\u5f0f",d={id:"design-patterns/behavioral-patterns/strategy",title:"\u7b56\u7565\u6a21\u5f0f",description:"\u80fd\u8ba9\u4f60\u5b9a\u4e49\u4e00\u7cfb\u5217\u7b97\u6cd5\uff0c\u5e76\u5c06\u6bcf\u79cd\u7b97\u6cd5\u5206\u522b\u653e\u5165\u72ec\u7acb\u7684\u7c7b\u4e2d\uff0c\u4ee5\u4f7f\u7b97\u6cd5\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u66ff\u6362\u3002",source:"@site/docs/design-patterns/03-behavioral-patterns/08-strategy.mdx",sourceDirName:"design-patterns/03-behavioral-patterns",slug:"/design-patterns/strategy",permalink:"/site/docs/design-patterns/strategy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"\u80fd\u8ba9\u4f60\u5b9a\u4e49\u4e00\u7cfb\u5217\u7b97\u6cd5\uff0c\u5e76\u5c06\u6bcf\u79cd\u7b97\u6cd5\u5206\u522b\u653e\u5165\u72ec\u7acb\u7684\u7c7b\u4e2d\uff0c\u4ee5\u4f7f\u7b97\u6cd5\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u66ff\u6362\u3002",slug:"/design-patterns/strategy"},sidebar:"designpatternsSidebar",previous:{title:"\u72b6\u6001\u6a21\u5f0f",permalink:"/site/docs/design-patterns/state"},next:{title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",permalink:"/site/docs/design-patterns/template-method"}},l={},a=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4</strong>",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"<strong>\u7b56\u7565\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u7b56\u7565\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u7b56\u7565\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u7b56\u7565\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u7b56\u7565\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u7b56\u7565\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u7b56\u7565\u6a21\u5f0f",children:"\u7b56\u7565\u6a21\u5f0f"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u4ea6\u79f0\uff1aStrategy"})}),"\n",(0,t.jsx)(e.h2,{id:"\u610f\u56fe",children:(0,t.jsx)(e.strong,{children:"\u610f\u56fe"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u884c\u4e3a\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u80fd\u8ba9\u4f60\u5b9a\u4e49\u4e00\u7cfb\u5217\u7b97\u6cd5\uff0c\u5e76\u5c06\u6bcf\u79cd\u7b97\u6cd5\u5206\u522b\u653e\u5165\u72ec\u7acb\u7684\u7c7b\u4e2d\uff0c\u4ee5\u4f7f\u7b97\u6cd5\u7684\u5bf9\u8c61\u80fd\u591f\u76f8\u4e92\u66ff\u6362\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/content/strategy/strategy-2x.png",alt:""})}),"\n",(0,t.jsx)(e.h2,{id:"\u95ee\u9898",children:(0,t.jsx)(e.strong,{children:"\u95ee\u9898"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u5929\uff0c\u4f60\u6253\u7b97\u4e3a\u6e38\u5ba2\u4eec\u521b\u5efa\u4e00\u6b3e\u5bfc\u6e38\u7a0b\u5e8f\u3002\u8be5\u7a0b\u5e8f\u7684\u6838\u5fc3\u529f\u80fd\u662f\u63d0\u4f9b\u7f8e\u89c2\u7684\u5730\u56fe\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u5728\u4efb\u4f55\u57ce\u5e02\u4e2d\u5feb\u901f\u5b9a\u4f4d\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6237\u671f\u5f85\u7684\u7a0b\u5e8f\u65b0\u529f\u80fd\u662f\u81ea\u52a8\u8def\u7ebf\u89c4\u5212\uff1a\u4ed6\u4eec\u5e0c\u671b\u8f93\u5165\u5730\u5740\u540e\u5c31\u80fd\u5728\u5730\u56fe\u4e0a\u770b\u5230\u524d\u5f80\u76ee\u7684\u5730\u7684\u6700\u5feb\u8def\u7ebf\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7a0b\u5e8f\u7684\u9996\u4e2a\u7248\u672c\u53ea\u80fd\u89c4\u5212\u516c\u8def\u8def\u7ebf\u3002\u9a7e\u8f66\u65c5\u884c\u7684\u4eba\u4eec\u5bf9\u6b64\u975e\u5e38\u6ee1\u610f\u3002\u4f46\u5f88\u663e\u7136\uff0c\u5e76\u975e\u6240\u6709\u4eba\u90fd\u4f1a\u5728\u5ea6\u5047\u65f6\u5f00\u8f66\u3002\u56e0\u6b64\u4f60\u5728\u4e0b\u6b21\u66f4\u65b0\u65f6\u6dfb\u52a0\u4e86\u89c4\u5212\u6b65\u884c\u8def\u7ebf\u7684\u529f\u80fd\u3002\u6b64\u540e\uff0c\u4f60\u53c8\u6dfb\u52a0\u4e86\u89c4\u5212\u516c\u5171\u4ea4\u901a\u8def\u7ebf\u7684\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u800c\u8fd9\u53ea\u662f\u4e2a\u5f00\u59cb\u3002\u4e0d\u4e45\u540e\uff0c\u4f60\u53c8\u8981\u4e3a\u9a91\u884c\u8005\u89c4\u5212\u8def\u7ebf\u3002\u53c8\u8fc7\u4e86\u4e00\u6bb5\u65f6\u95f4\uff0c\u4f60\u53c8\u8981\u4e3a\u6e38\u89c8\u57ce\u5e02\u4e2d\u7684\u6240\u6709\u666f\u70b9\u89c4\u5212\u8def\u7ebf\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/strategy/problem-2x.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:"\u5bfc\u6e38\u4ee3\u7801\u5c06\u53d8\u5f97\u975e\u5e38\u81c3\u80bf\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5c3d\u7ba1\u4ece\u5546\u4e1a\u89d2\u5ea6\u6765\u770b\uff0c\u8fd9\u6b3e\u5e94\u7528\u975e\u5e38\u6210\u529f\uff0c\u4f46\u5176\u6280\u672f\u90e8\u5206\u5374\u8ba9\u4f60\u975e\u5e38\u5934\u75bc\uff1a\u6bcf\u6b21\u6dfb\u52a0\u65b0\u7684\u8def\u7ebf\u89c4\u5212\u7b97\u6cd5\u540e\uff0c\u5bfc\u6e38\u5e94\u7528\u4e2d\u4e3b\u8981\u7c7b\u7684\u4f53\u79ef\u5c31\u4f1a\u589e\u52a0\u4e00\u500d\u3002\u7ec8\u4e8e\u5728\u67d0\u4e2a\u65f6\u5019\uff0c\u4f60\u89c9\u5f97\u81ea\u5df1\u6ca1\u6cd5\u7ee7\u7eed\u7ef4\u62a4\u8fd9\u5806\u4ee3\u7801\u4e86\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u65e0\u8bba\u662f\u4fee\u590d\u7b80\u5355\u7f3a\u9677\u8fd8\u662f\u5fae\u8c03\u8857\u9053\u6743\u91cd\uff0c\u5bf9\u67d0\u4e2a\u7b97\u6cd5\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\u90fd\u4f1a\u5f71\u54cd\u6574\u4e2a\u7c7b\uff0c\u4ece\u800c\u589e\u52a0\u5728\u5df2\u6709\u6b63\u5e38\u8fd0\u884c\u4ee3\u7801\u4e2d\u5f15\u5165\u9519\u8bef\u7684\u98ce\u9669\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u56e2\u961f\u5408\u4f5c\u5c06\u53d8\u5f97\u4f4e\u6548\u3002\u5982\u679c\u4f60\u5728\u5e94\u7528\u6210\u529f\u53d1\u5e03\u540e\u62db\u52df\u4e86\u56e2\u961f\u6210\u5458\uff0c\u4ed6\u4eec\u4f1a\u62b1\u6028\u5728\u5408\u5e76\u51b2\u7a81\u7684\u5de5\u4f5c\u4e0a\u82b1\u8d39\u4e86\u592a\u591a\u65f6\u95f4\u3002\u5728\u5b9e\u73b0\u65b0\u529f\u80fd\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u7684\u56e2\u961f\u9700\u8981\u4fee\u6539\u540c\u4e00\u4e2a\u5de8\u5927\u7684\u7c7b\uff0c\u8fd9\u6837\u4ed6\u4eec\u6240\u7f16\u5199\u7684\u4ee3\u7801\u76f8\u4e92\u4e4b\u95f4\u5c31\u53ef\u80fd\u4f1a\u51fa\u73b0\u51b2\u7a81\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,t.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7b56\u7565\u6a21\u5f0f\u5efa\u8bae\u627e\u51fa\u8d1f\u8d23\u7528\u8bb8\u591a\u4e0d\u540c\u65b9\u5f0f\u5b8c\u6210\u7279\u5b9a\u4efb\u52a1\u7684\u7c7b\uff0c\u7136\u540e\u5c06\u5176\u4e2d\u7684\u7b97\u6cd5\u62bd\u53d6\u5230\u4e00\u7ec4\u88ab\u79f0\u4e3a",(0,t.jsx)(e.em,{children:"\u7b56\u7565"}),"\u7684\u72ec\u7acb\u7c7b\u4e2d\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u540d\u4e3a",(0,t.jsx)(e.em,{children:"\u4e0a\u4e0b\u6587"}),"\u7684\u539f\u59cb\u7c7b\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u6765\u5b58\u50a8\u5bf9\u4e8e\u6bcf\u79cd\u7b56\u7565\u7684\u5f15\u7528\u3002\u4e0a\u4e0b\u6587\u5e76\u4e0d\u6267\u884c\u4efb\u52a1\uff0c\u800c\u662f\u5c06\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5df2\u8fde\u63a5\u7684\u7b56\u7565\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u4e0b\u6587\u4e0d\u8d1f\u8d23\u9009\u62e9\u7b26\u5408\u4efb\u52a1\u9700\u8981\u7684\u7b97\u6cd5\u2014\u2014\u5ba2\u6237\u7aef\u4f1a\u5c06\u6240\u9700\u7b56\u7565\u4f20\u9012\u7ed9\u4e0a\u4e0b\u6587\u3002\u5b9e\u9645\u4e0a\uff0c\u4e0a\u4e0b\u6587\u5e76\u4e0d\u5341\u5206\u4e86\u89e3\u7b56\u7565\uff0c\u5b83\u4f1a\u901a\u8fc7\u540c\u6837\u7684\u901a\u7528\u63a5\u53e3\u4e0e\u6240\u6709\u7b56\u7565\u8fdb\u884c\u4ea4\u4e92\uff0c\u800c\u8be5\u63a5\u53e3\u53ea\u9700\u66b4\u9732\u4e00\u4e2a\u65b9\u6cd5\u6765\u89e6\u53d1\u6240\u9009\u7b56\u7565\u4e2d\u5c01\u88c5\u7684\u7b97\u6cd5\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u4e0a\u4e0b\u6587\u53ef\u72ec\u7acb\u4e8e\u5177\u4f53\u7b56\u7565\u3002\u8fd9\u6837\u4f60\u5c31\u53ef\u5728\u4e0d\u4fee\u6539\u4e0a\u4e0b\u6587\u4ee3\u7801\u6216\u5176\u4ed6\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u6dfb\u52a0\u65b0\u7b97\u6cd5\u6216\u4fee\u6539\u5df2\u6709\u7b97\u6cd5\u4e86\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/strategy/solution-2x.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:"\u8def\u7ebf\u89c4\u5212\u7b56\u7565\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u5bfc\u6e38\u5e94\u7528\u4e2d\uff0c\u6bcf\u4e2a\u8def\u7ebf\u89c4\u5212\u7b97\u6cd5\u90fd\u53ef\u88ab\u62bd\u53d6\u5230\u53ea\u6709\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"build\xadRoute"})," \u751f\u6210\u8def\u7ebf\u65b9\u6cd5\u7684\u72ec\u7acb\u7c7b\u4e2d\u3002\u8be5\u65b9\u6cd5\u63a5\u6536\u8d77\u70b9\u548c\u7ec8\u70b9\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u8def\u7ebf\u4e2d\u9014\u70b9\u7684\u96c6\u5408\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5373\u4f7f\u4f20\u9012\u7ed9\u6bcf\u4e2a\u8def\u5f84\u89c4\u5212\u7c7b\u7684\u53c2\u6570\u4e00\u6a21\u4e00\u6837\uff0c\u5176\u6240\u521b\u5efa\u7684\u8def\u7ebf\u4e5f\u53ef\u80fd\u5b8c\u5168\u4e0d\u540c\u3002\u4e3b\u8981\u5bfc\u6e38\u7c7b\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u5728\u5730\u56fe\u4e0a\u6e32\u67d3\u4e00\u7cfb\u5217\u4e2d\u9014\u70b9\uff0c\u4e0d\u4f1a\u5728\u610f\u5982\u4f55\u9009\u62e9\u7b97\u6cd5\u3002\u8be5\u7c7b\u4e2d\u8fd8\u6709\u4e00\u4e2a\u7528\u4e8e\u5207\u6362\u5f53\u524d\u8def\u5f84\u89c4\u5212\u7b56\u7565\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef (\u4f8b\u5982\u7528\u6237\u754c\u9762\u4e2d\u7684\u6309\u94ae) \u53ef\u7528\u5176\u4ed6\u7b56\u7565\u66ff\u6362\u5f53\u524d\u9009\u62e9\u7684\u8def\u5f84\u89c4\u5212\u884c\u4e3a\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:(0,t.jsx)(e.strong,{children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/content/strategy/strategy-comic-1-zh-2x.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:"\u5404\u79cd\u524d\u5f80\u673a\u573a\u7684\u51fa\u884c\u7b56\u7565"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u5982\u4f60\u9700\u8981\u524d\u5f80\u673a\u573a\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u4e58\u5750\u516c\u5171\u6c7d\u8f66\u3001\u9884\u7ea6\u51fa\u79df\u8f66\u6216\u9a91\u81ea\u884c\u8f66\u3002\u8fd9\u4e9b\u5c31\u662f\u4f60\u7684\u51fa\u884c\u7b56\u7565\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9884\u7b97\u6216\u65f6\u95f4\u7b49\u56e0\u7d20\u6765\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u7b56\u7565\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u7b56\u7565\u6a21\u5f0f\u7ed3\u6784",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/strategy/structure-2x.png",alt:""})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u4e0a\u4e0b\u6587"})," (Context) \u7ef4\u62a4\u6307\u5411\u5177\u4f53\u7b56\u7565\u7684\u5f15\u7528\uff0c\u4e14\u4ec5\u901a\u8fc7\u7b56\u7565\u63a5\u53e3\u4e0e\u8be5\u5bf9\u8c61\u8fdb\u884c\u4ea4\u6d41\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u7b56\u7565"})," (Strategy) \u63a5\u53e3\u662f\u6240\u6709\u5177\u4f53\u7b56\u7565\u7684\u901a\u7528\u63a5\u53e3\uff0c\u5b83\u58f0\u660e\u4e86\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7528\u4e8e\u6267\u884c\u7b56\u7565\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u5177\u4f53\u7b56\u7565"})," (Concrete Strategies) \u5b9e\u73b0\u4e86\u4e0a\u4e0b\u6587\u6240\u7528\u7b97\u6cd5\u7684\u5404\u79cd\u4e0d\u540c\u53d8\u4f53\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u5f53\u4e0a\u4e0b\u6587\u9700\u8981\u8fd0\u884c\u7b97\u6cd5\u65f6\uff0c\u5b83\u4f1a\u5728\u5176\u5df2\u8fde\u63a5\u7684\u7b56\u7565\u5bf9\u8c61\u4e0a\u8c03\u7528\u6267\u884c\u65b9\u6cd5\u3002\u4e0a\u4e0b\u6587\u4e0d\u6e05\u695a\u5176\u6240\u6d89\u53ca\u7684\u7b56\u7565\u7c7b\u578b\u4e0e\u7b97\u6cd5\u7684\u6267\u884c\u65b9\u5f0f\u3002"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u5ba2\u6237\u7aef"})," (Client) \u4f1a\u521b\u5efa\u4e00\u4e2a\u7279\u5b9a\u7b56\u7565\u5bf9\u8c61\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u4e0a\u4e0b\u6587\u3002\u4e0a\u4e0b\u6587\u5219\u4f1a\u63d0\u4f9b\u4e00\u4e2a\u8bbe\u7f6e\u5668\u4ee5\u4fbf\u5ba2\u6237\u7aef\u5728\u8fd0\u884c\u65f6\u66ff\u6362\u76f8\u5173\u8054\u7684\u7b56\u7565\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,t.jsx)(e.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u672c\u4f8b\u4e2d\uff0c\u4e0a\u4e0b\u6587\u4f7f\u7528\u4e86\u591a\u4e2a",(0,t.jsx)(e.strong,{children:"\u7b56\u7565"}),"\u6765\u6267\u884c\u4e0d\u540c\u7684\u8ba1\u7b97\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"// \u7b56\u7565\u63a5\u53e3\u58f0\u660e\u4e86\u67d0\u4e2a\u7b97\u6cd5\u5404\u4e2a\u4e0d\u540c\u7248\u672c\u95f4\u6240\u5171\u6709\u7684\u64cd\u4f5c\u3002\u4e0a\u4e0b\u6587\u4f1a\u4f7f\u7528\u8be5\u63a5\u53e3\u6765\n// \u8c03\u7528\u6709\u5177\u4f53\u7b56\u7565\u5b9a\u4e49\u7684\u7b97\u6cd5\u3002\ninterface Strategy is\n    method execute(a, b)\n\n// \u5177\u4f53\u7b56\u7565\u4f1a\u5728\u9075\u5faa\u7b56\u7565\u57fa\u7840\u63a5\u53e3\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u7b97\u6cd5\u3002\u8be5\u63a5\u53e3\u5b9e\u73b0\u4e86\u5b83\u4eec\u5728\u4e0a\u4e0b\u6587\n// \u4e2d\u7684\u4e92\u6362\u6027\u3002\nclass ConcreteStrategyAdd implements Strategy is\n    method execute(a, b) is\n        return a + b\n\nclass ConcreteStrategySubtract implements Strategy is\n    method execute(a, b) is\n        return a - b\n\nclass ConcreteStrategyMultiply implements Strategy is\n    method execute(a, b) is\n        return a * b\n\n// \u4e0a\u4e0b\u6587\u5b9a\u4e49\u4e86\u5ba2\u6237\u7aef\u5173\u6ce8\u7684\u63a5\u53e3\u3002\nclass Context is\n    // \u4e0a\u4e0b\u6587\u4f1a\u7ef4\u62a4\u6307\u5411\u67d0\u4e2a\u7b56\u7565\u5bf9\u8c61\u7684\u5f15\u7528\u3002\u4e0a\u4e0b\u6587\u4e0d\u77e5\u6653\u7b56\u7565\u7684\u5177\u4f53\u7c7b\u3002\u4e0a\u4e0b\n    // \u6587\u5fc5\u987b\u901a\u8fc7\u7b56\u7565\u63a5\u53e3\u6765\u4e0e\u6240\u6709\u7b56\u7565\u8fdb\u884c\u4ea4\u4e92\u3002\n    private strategy: Strategy\n\n    // \u4e0a\u4e0b\u6587\u901a\u5e38\u4f1a\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6765\u63a5\u6536\u7b56\u7565\u5bf9\u8c61\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u8bbe\u7f6e\u5668\u4ee5\u4fbf\u5728\u8fd0\u884c\n    // \u65f6\u5207\u6362\u7b56\u7565\u3002\n    method setStrategy(Strategy strategy) is\n        this.strategy = strategy\n\n    // \u4e0a\u4e0b\u6587\u4f1a\u5c06\u4e00\u4e9b\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u7b56\u7565\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u81ea\u884c\u5b9e\u73b0\u4e0d\u540c\u7248\u672c\u7684\u7b97\u6cd5\u3002\n    method executeStrategy(int a, int b) is\n        return strategy.execute(a, b)\n\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\u4f1a\u9009\u62e9\u5177\u4f53\u7b56\u7565\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u4e0a\u4e0b\u6587\u3002\u5ba2\u6237\u7aef\u5fc5\u987b\u77e5\u6653\u7b56\u7565\u4e4b\u95f4\u7684\u5dee\n// \u5f02\uff0c\u624d\u80fd\u505a\u51fa\u6b63\u786e\u7684\u9009\u62e9\u3002\nclass ExampleApplication is\n    method main() is\n\n        \u521b\u5efa\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002\n\n        \u8bfb\u53d6\u7b2c\u4e00\u4e2a\u6570\u3002\n        \u8bfb\u53d6\u6700\u540e\u4e00\u4e2a\u6570\u3002\n        \u4ece\u7528\u6237\u8f93\u5165\u4e2d\u8bfb\u53d6\u671f\u671b\u8fdb\u884c\u7684\u884c\u4e3a\u3002\n\n        if (action == addition) then\n            context.setStrategy(new ConcreteStrategyAdd())\n\n        if (action == subtraction) then\n            context.setStrategy(new ConcreteStrategySubtract())\n\n        if (action == multiplication) then\n            context.setStrategy(new ConcreteStrategyMultiply())\n\n        result = context.executeStrategy(First number, Second number)\n\n        \u6253\u5370\u7ed3\u679c\u3002\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u7b56\u7565\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5f53\u4f60\u60f3\u4f7f\u7528\u5bf9\u8c61\u4e2d\u5404\u79cd\u4e0d\u540c\u7684\u7b97\u6cd5\u53d8\u4f53\uff0c\u5e76\u5e0c\u671b\u80fd\u5728\u8fd0\u884c\u65f6\u5207\u6362\u7b97\u6cd5\u65f6\uff0c\u53ef\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u7b56\u7565\u6a21\u5f0f\u8ba9\u4f60\u80fd\u591f\u5c06\u5bf9\u8c61\u5173\u8054\u81f3\u53ef\u4ee5\u4e0d\u540c\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u5b50\u4efb\u52a1\u7684\u4e0d\u540c\u5b50\u5bf9\u8c61\uff0c\u4ece\u800c\u4ee5\u95f4\u63a5\u65b9\u5f0f\u5728\u8fd0\u884c\u65f6\u66f4\u6539\u5bf9\u8c61\u884c\u4e3a\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5f53\u4f60\u6709\u8bb8\u591a\u4ec5\u5728\u6267\u884c\u67d0\u4e9b\u884c\u4e3a\u65f6\u7565\u6709\u4e0d\u540c\u7684\u76f8\u4f3c\u7c7b\u65f6\uff0c\u53ef\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u7b56\u7565\u6a21\u5f0f\u8ba9\u4f60\u80fd\u5c06\u4e0d\u540c\u884c\u4e3a\u62bd\u53d6\u5230\u4e00\u4e2a\u72ec\u7acb\u7c7b\u5c42\u6b21\u7ed3\u6784\u4e2d\uff0c\u5e76\u5c06\u539f\u59cb\u7c7b\u7ec4\u5408\u6210\u540c\u4e00\u4e2a\uff0c\u4ece\u800c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5982\u679c\u7b97\u6cd5\u5728\u4e0a\u4e0b\u6587\u7684\u903b\u8f91\u4e2d\u4e0d\u662f\u7279\u522b\u91cd\u8981\uff0c\u4f7f\u7528\u8be5\u6a21\u5f0f\u80fd\u5c06\u7c7b\u7684\u4e1a\u52a1\u903b\u8f91\u4e0e\u5176\u7b97\u6cd5\u5b9e\u73b0\u7ec6\u8282\u9694\u79bb\u5f00\u6765\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u7b56\u7565\u6a21\u5f0f\u8ba9\u4f60\u80fd\u5c06\u5404\u79cd\u7b97\u6cd5\u7684\u4ee3\u7801\u3001\u5185\u90e8\u6570\u636e\u548c\u4f9d\u8d56\u5173\u7cfb\u4e0e\u5176\u4ed6\u4ee3\u7801\u9694\u79bb\u5f00\u6765\u3002\u4e0d\u540c\u5ba2\u6237\u7aef\u53ef\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3\u6267\u884c\u7b97\u6cd5\uff0c\u5e76\u80fd\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u5207\u6362\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5f53\u7c7b\u4e2d\u4f7f\u7528\u4e86\u590d\u6742\u6761\u4ef6\u8fd0\u7b97\u7b26\u4ee5\u5728\u540c\u4e00\u7b97\u6cd5\u7684\u4e0d\u540c\u53d8\u4f53\u4e2d\u5207\u6362\u65f6\uff0c\u53ef\u4f7f\u7528\u8be5\u6a21\u5f0f\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u7b56\u7565\u6a21\u5f0f\u5c06\u6240\u6709\u7ee7\u627f\u81ea\u540c\u6837\u63a5\u53e3\u7684\u7b97\u6cd5\u62bd\u53d6\u5230\u72ec\u7acb\u7c7b\u4e2d\uff0c\u56e0\u6b64\u4e0d\u518d\u9700\u8981\u6761\u4ef6\u8bed\u53e5\u3002\u539f\u59cb\u5bf9\u8c61\u5e76\u4e0d\u5b9e\u73b0\u6240\u6709\u7b97\u6cd5\u7684\u53d8\u4f53\uff0c\u800c\u662f\u5c06\u6267\u884c\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5176\u4e2d\u7684\u4e00\u4e2a\u72ec\u7acb\u7b97\u6cd5\u5bf9\u8c61\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u4ece\u4e0a\u4e0b\u6587\u7c7b\u4e2d\u627e\u51fa\u4fee\u6539\u9891\u7387\u8f83\u9ad8\u7684\u7b97\u6cd5 (\u4e5f\u53ef\u80fd\u662f\u7528\u4e8e\u5728\u8fd0\u884c\u65f6\u9009\u62e9\u67d0\u4e2a\u7b97\u6cd5\u53d8\u4f53\u7684\u590d\u6742\u6761\u4ef6\u8fd0\u7b97\u7b26)\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u58f0\u660e\u8be5\u7b97\u6cd5\u6240\u6709\u53d8\u4f53\u7684\u901a\u7528\u7b56\u7565\u63a5\u53e3\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5c06\u7b97\u6cd5\u9010\u4e00\u62bd\u53d6\u5230\u5404\u81ea\u7684\u7c7b\u4e2d\uff0c\u5b83\u4eec\u90fd\u5fc5\u987b\u5b9e\u73b0\u7b56\u7565\u63a5\u53e3\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5728\u4e0a\u4e0b\u6587\u7c7b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u7528\u4e8e\u4fdd\u5b58\u5bf9\u4e8e\u7b56\u7565\u5bf9\u8c61\u7684\u5f15\u7528\u3002\u7136\u540e\u63d0\u4f9b\u8bbe\u7f6e\u5668\u4ee5\u4fee\u6539\u8be5\u6210\u5458\u53d8\u91cf\u3002\u4e0a\u4e0b\u6587\u4ec5\u53ef\u901a\u8fc7\u7b56\u7565\u63a5\u53e3\u540c\u7b56\u7565\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\uff0c\u5982\u6709\u9700\u8981\u8fd8\u53ef\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u6765\u8ba9\u7b56\u7565\u8bbf\u95ee\u5176\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u5fc5\u987b\u5c06\u4e0a\u4e0b\u6587\u7c7b\u4e0e\u76f8\u5e94\u7b56\u7565\u8fdb\u884c\u5173\u8054\uff0c\u4f7f\u4e0a\u4e0b\u6587\u53ef\u4ee5\u9884\u671f\u7684\u65b9\u5f0f\u5b8c\u6210\u5176\u4e3b\u8981\u5de5\u4f5c\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u7b56\u7565\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,t.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u5207\u6362\u5bf9\u8c61\u5185\u7684\u7b97\u6cd5\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u5c06\u7b97\u6cd5\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u7b97\u6cd5\u7684\u4ee3\u7801\u9694\u79bb\u5f00\u6765\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u4f7f\u7528\u7ec4\u5408\u6765\u4ee3\u66ff\u7ee7\u627f\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u2714\ufe0f ",(0,t.jsx)(e.em,{children:"\u5f00\u95ed\u539f\u5219"}),"\u3002\u4f60\u65e0\u9700\u5bf9\u4e0a\u4e0b\u6587\u8fdb\u884c\u4fee\u6539\u5c31\u80fd\u591f\u5f15\u5165\u65b0\u7684\u7b56\u7565\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u274c \u5982\u679c\u4f60\u7684\u7b97\u6cd5\u6781\u5c11\u53d1\u751f\u6539\u53d8\uff0c\u90a3\u4e48\u6ca1\u6709\u4efb\u4f55\u7406\u7531\u5f15\u5165\u65b0\u7684\u7c7b\u548c\u63a5\u53e3\u3002\u4f7f\u7528\u8be5\u6a21\u5f0f\u53ea\u4f1a\u8ba9\u7a0b\u5e8f\u8fc7\u4e8e\u590d\u6742\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u274c \u5ba2\u6237\u7aef\u5fc5\u987b\u77e5\u6653\u7b56\u7565\u95f4\u7684\u4e0d\u540c\u2014\u2014\u5b83\u9700\u8981\u9009\u62e9\u5408\u9002\u7684\u7b56\u7565\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u274c \u8bb8\u591a\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\u51fd\u6570\u7c7b\u578b\u529f\u80fd\uff0c\u5141\u8bb8\u4f60\u5728\u4e00\u7ec4\u533f\u540d\u51fd\u6570\u4e2d\u5b9e\u73b0\u4e0d\u540c\u7248\u672c\u7684\u7b97\u6cd5\u3002\u8fd9\u6837\uff0c\u4f60\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u7684\u65b9\u5f0f\u5c31\u548c\u4f7f\u7528\u7b56\u7565\u5bf9\u8c61\u65f6\u5b8c\u5168\u76f8\u540c\uff0c\u65e0\u9700\u501f\u52a9\u989d\u5916\u7684\u7c7b\u548c\u63a5\u53e3\u6765\u4fdd\u6301\u4ee3\u7801\u7b80\u6d01\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,t.jsx)(e.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/design-patterns/bridge",children:(0,t.jsx)(e.strong,{children:"\u6865\u63a5\u6a21\u5f0f"})}),"\u3001",(0,t.jsx)(e.a,{href:"/docs/design-patterns/state",children:(0,t.jsx)(e.strong,{children:"\u72b6\u6001\u6a21\u5f0f"})}),"\u548c",(0,t.jsx)(e.a,{href:"/docs/design-patterns/strategy",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u6a21\u5f0f"})})," (\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u5305\u62ec",(0,t.jsx)(e.a,{href:"/docs/design-patterns/adapter",children:(0,t.jsx)(e.strong,{children:"\u9002\u914d\u5668\u6a21\u5f0f"})}),") \u6a21\u5f0f\u7684\u63a5\u53e3\u975e\u5e38\u76f8\u4f3c\u3002\u5b9e\u9645\u4e0a\uff0c\u5b83\u4eec\u90fd\u57fa\u4e8e",(0,t.jsx)(e.a,{href:"/docs/design-patterns/composite",children:(0,t.jsx)(e.strong,{children:"\u7ec4\u5408\u6a21\u5f0f"})}),"\u2014\u2014\u5373\u5c06\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5176\u4ed6\u5bf9\u8c61\uff0c\u4e0d\u8fc7\u4e5f\u5404\u81ea\u89e3\u51b3\u4e86\u4e0d\u540c\u7684\u95ee\u9898\u3002\u6a21\u5f0f\u5e76\u4e0d\u53ea\u662f\u4ee5\u7279\u5b9a\u65b9\u5f0f\u7ec4\u7ec7\u4ee3\u7801\u7684\u914d\u65b9\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u548c\u5176\u4ed6\u5f00\u53d1\u8005\u8ba8\u8bba\u6a21\u5f0f\u6240\u89e3\u51b3\u7684\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/design-patterns/command",children:(0,t.jsx)(e.strong,{children:"\u547d\u4ee4\u6a21\u5f0f"})}),"\u548c",(0,t.jsx)(e.a,{href:"/docs/design-patterns/strategy",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565"})}),"\u770b\u4e0a\u53bb\u5f88\u50cf\uff0c\u56e0\u4e3a\u4e24\u8005\u90fd\u80fd\u901a\u8fc7\u67d0\u4e9b\u884c\u4e3a\u6765\u53c2\u6570\u5316\u5bf9\u8c61\u3002\u4f46\u662f\uff0c\u5b83\u4eec\u7684\u610f\u56fe\u6709\u975e\u5e38\u5927\u7684\u4e0d\u540c\u3002","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(e.em,{children:"\u547d\u4ee4"}),"\u6765\u5c06\u4efb\u4f55\u64cd\u4f5c\u8f6c\u6362\u4e3a\u5bf9\u8c61\u3002\u64cd\u4f5c\u7684\u53c2\u6570\u5c06\u6210\u4e3a\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f6c\u6362\u6765\u5ef6\u8fdf\u64cd\u4f5c\u7684\u6267\u884c\u3001\u5c06\u64cd\u4f5c\u653e\u5165\u961f\u5217\u3001\u4fdd\u5b58\u5386\u53f2\u547d\u4ee4\u6216\u8005\u5411\u8fdc\u7a0b\u670d\u52a1\u53d1\u9001\u547d\u4ee4\u7b49\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u53e6\u4e00\u65b9\u9762\uff0c",(0,t.jsx)(e.em,{children:"\u7b56\u7565"}),"\u901a\u5e38\u53ef\u7528\u4e8e\u63cf\u8ff0\u5b8c\u6210\u67d0\u4ef6\u4e8b\u7684\u4e0d\u540c\u65b9\u5f0f\uff0c\u8ba9\u4f60\u80fd\u591f\u5728\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7c7b\u4e2d\u5207\u6362\u7b97\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/design-patterns/decorator",children:(0,t.jsx)(e.strong,{children:"\u88c5\u9970\u6a21\u5f0f"})}),"\u53ef\u8ba9\u4f60\u66f4\u6539\u5bf9\u8c61\u7684\u5916\u8868\uff0c",(0,t.jsx)(e.a,{href:"/docs/design-patterns/strategy",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565"})}),"\u5219\u8ba9\u4f60\u80fd\u591f\u6539\u53d8\u5176\u672c\u8d28\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/design-patterns/template-method",children:(0,t.jsx)(e.strong,{children:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"})}),"\u57fa\u4e8e\u7ee7\u627f\u673a\u5236\uff1a\u5b83\u5141\u8bb8\u4f60\u901a\u8fc7\u6269\u5c55\u5b50\u7c7b\u4e2d\u7684\u90e8\u5206\u5185\u5bb9\u6765\u6539\u53d8\u90e8\u5206\u7b97\u6cd5\u3002",(0,t.jsx)(e.a,{href:"/docs/design-patterns/strategy",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565"})}),"\u57fa\u4e8e\u7ec4\u5408\u673a\u5236\uff1a\u4f60\u53ef\u4ee5\u901a\u8fc7\u5bf9\u76f8\u5e94\u884c\u4e3a\u63d0\u4f9b\u4e0d\u540c\u7684\u7b56\u7565\u6765\u6539\u53d8\u5bf9\u8c61\u7684\u90e8\u5206\u884c\u4e3a\u3002",(0,t.jsx)(e.em,{children:"\u6a21\u677f\u65b9\u6cd5"}),"\u5728\u7c7b\u5c42\u6b21\u4e0a\u8fd0\u4f5c\uff0c\u56e0\u6b64\u5b83\u662f\u9759\u6001\u7684\u3002",(0,t.jsx)(e.em,{children:"\u7b56\u7565"}),"\u5728\u5bf9\u8c61\u5c42\u6b21\u4e0a\u8fd0\u4f5c\uff0c\u56e0\u6b64\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u5207\u6362\u884c\u4e3a\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/design-patterns/state",children:(0,t.jsx)(e.strong,{children:"\u72b6\u6001"})}),"\u53ef\u88ab\u89c6\u4e3a",(0,t.jsx)(e.a,{href:"/docs/design-patterns/strategy",children:(0,t.jsx)(e.strong,{children:"\u7b56\u7565"})}),"\u7684\u6269\u5c55\u3002\u4e24\u8005\u90fd\u57fa\u4e8e\u7ec4\u5408\u673a\u5236\uff1a\u5b83\u4eec\u90fd\u901a\u8fc7\u5c06\u90e8\u5206\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u201c\u5e2e\u624b\u201d\u5bf9\u8c61\u6765\u6539\u53d8\u5176\u5728\u4e0d\u540c\u60c5\u666f\u4e0b\u7684\u884c\u4e3a\u3002",(0,t.jsx)(e.em,{children:"\u7b56\u7565"}),"\u4f7f\u5f97\u8fd9\u4e9b\u5bf9\u8c61\u76f8\u4e92\u4e4b\u95f4\u5b8c\u5168\u72ec\u7acb\uff0c\u5b83\u4eec\u4e0d\u77e5\u9053\u5176\u4ed6\u5bf9\u8c61\u7684\u5b58\u5728\u3002\u4f46",(0,t.jsx)(e.em,{children:"\u72b6\u6001"}),"\u6a21\u5f0f\u6ca1\u6709\u9650\u5236\u5177\u4f53\u72b6\u6001\u4e4b\u95f4\u7684\u4f9d\u8d56\uff0c\u4e14\u5141\u8bb8\u5b83\u4eec\u81ea\u884c\u6539\u53d8\u5728\u4e0d\u540c\u60c5\u666f\u4e0b\u7684\u72b6\u6001\u3002"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
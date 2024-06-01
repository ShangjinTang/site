"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7033],{78053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=n(74848),i=n(28453);const s={description:"\u8ba9\u4f60\u80fd\u5728\u4e0d\u66b4\u9732\u96c6\u5408\u5e95\u5c42\u8868\u73b0\u5f62\u5f0f \uff08\u5217\u8868\u3001 \u6808\u548c\u6811\u7b49\uff09 \u7684\u60c5\u51b5\u4e0b\u904d\u5386\u96c6\u5408\u4e2d\u6240\u6709\u7684\u5143\u7d20\u3002"},a="\u8fed\u4ee3\u5668\u6a21\u5f0f",d={id:"design-patterns/behavioral-patterns/iterator",title:"\u8fed\u4ee3\u5668\u6a21\u5f0f",description:"\u8ba9\u4f60\u80fd\u5728\u4e0d\u66b4\u9732\u96c6\u5408\u5e95\u5c42\u8868\u73b0\u5f62\u5f0f \uff08\u5217\u8868\u3001 \u6808\u548c\u6811\u7b49\uff09 \u7684\u60c5\u51b5\u4e0b\u904d\u5386\u96c6\u5408\u4e2d\u6240\u6709\u7684\u5143\u7d20\u3002",source:"@site/docs/design-patterns/03-behavioral-patterns/03-iterator.mdx",sourceDirName:"design-patterns/03-behavioral-patterns",slug:"/design-patterns/behavioral-patterns/iterator",permalink:"/docs/design-patterns/behavioral-patterns/iterator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u8ba9\u4f60\u80fd\u5728\u4e0d\u66b4\u9732\u96c6\u5408\u5e95\u5c42\u8868\u73b0\u5f62\u5f0f \uff08\u5217\u8868\u3001 \u6808\u548c\u6811\u7b49\uff09 \u7684\u60c5\u51b5\u4e0b\u904d\u5386\u96c6\u5408\u4e2d\u6240\u6709\u7684\u5143\u7d20\u3002"},sidebar:"designpatternsSidebar",previous:{title:"\u547d\u4ee4\u6a21\u5f0f",permalink:"/docs/design-patterns/behavioral-patterns/command"},next:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f",permalink:"/docs/design-patterns/behavioral-patterns/mediator"}},l={},o=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",level:2},{value:"\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function c(e){const t={h1:"h1",h2:"h2",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u8fed\u4ee3\u5668\u6a21\u5f0f",children:"\u8fed\u4ee3\u5668\u6a21\u5f0f"}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"}}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(t.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,r.jsx)(t.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,r.jsx)(t.h2,{id:"\u4f2a\u4ee3\u7801",children:"\u4f2a\u4ee3\u7801"}),"\n",(0,r.jsx)(t.h2,{id:"\u9002\u5408\u5e94\u7528\u573a\u666f",children:"\u9002\u5408\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,r.jsx)(t.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,r.jsx)(t.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
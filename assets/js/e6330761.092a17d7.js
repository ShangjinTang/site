"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6456],{17566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const r={description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002"},a="\u5907\u5fd8\u5f55\u6a21\u5f0f",o={id:"design-patterns/behavioral-patterns/momento",title:"\u5907\u5fd8\u5f55\u6a21\u5f0f",description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002",source:"@site/docs/design-patterns/03-behavioral-patterns/05-momento.mdx",sourceDirName:"design-patterns/03-behavioral-patterns",slug:"/design-patterns/behavioral-patterns/momento",permalink:"/docs/design-patterns/behavioral-patterns/momento",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"\u5141\u8bb8\u5728\u4e0d\u66b4\u9732\u5bf9\u8c61\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4fdd\u5b58\u548c\u6062\u590d\u5bf9\u8c61\u4e4b\u524d\u7684\u72b6\u6001\u3002"},sidebar:"designpatternsSidebar",previous:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f",permalink:"/docs/design-patterns/behavioral-patterns/mediator"},next:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",permalink:"/docs/design-patterns/behavioral-patterns/observer"}},l={},d=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",level:2},{value:"\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function c(e){const n={h1:"h1",h2:"h2",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f",children:"\u5907\u5fd8\u5f55\u6a21\u5f0f"}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center"}}),"\n",(0,s.jsx)(n.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(n.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,s.jsx)(n.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f2a\u4ee3\u7801",children:"\u4f2a\u4ee3\u7801"}),"\n",(0,s.jsx)(n.h2,{id:"\u9002\u5408\u5e94\u7528\u573a\u666f",children:"\u9002\u5408\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
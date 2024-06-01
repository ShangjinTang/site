"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[474],{9928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(74848),s=n(28453);const i={description:"\u8ba9\u4f60\u80fd\u591f\u63d0\u4f9b\u5bf9\u8c61\u7684\u66ff\u4ee3\u54c1\u6216\u5176\u5360\u4f4d\u7b26\u3002 \u4ee3\u7406\u63a7\u5236\u7740\u5bf9\u4e8e\u539f\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c \u5e76\u5141\u8bb8\u5728\u5c06\u8bf7\u6c42\u63d0\u4ea4\u7ed9\u5bf9\u8c61\u524d\u540e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\u3002"},l="\u4ee3\u7406\u6a21\u5f0f",d={id:"design-patterns/structural-patterns/proxy",title:"\u4ee3\u7406\u6a21\u5f0f",description:"\u8ba9\u4f60\u80fd\u591f\u63d0\u4f9b\u5bf9\u8c61\u7684\u66ff\u4ee3\u54c1\u6216\u5176\u5360\u4f4d\u7b26\u3002 \u4ee3\u7406\u63a7\u5236\u7740\u5bf9\u4e8e\u539f\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c \u5e76\u5141\u8bb8\u5728\u5c06\u8bf7\u6c42\u63d0\u4ea4\u7ed9\u5bf9\u8c61\u524d\u540e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\u3002",source:"@site/docs/design-patterns/02-structural-patterns/07-proxy.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/structural-patterns/proxy",permalink:"/docs/design-patterns/structural-patterns/proxy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"\u8ba9\u4f60\u80fd\u591f\u63d0\u4f9b\u5bf9\u8c61\u7684\u66ff\u4ee3\u54c1\u6216\u5176\u5360\u4f4d\u7b26\u3002 \u4ee3\u7406\u63a7\u5236\u7740\u5bf9\u4e8e\u539f\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c \u5e76\u5141\u8bb8\u5728\u5c06\u8bf7\u6c42\u63d0\u4ea4\u7ed9\u5bf9\u8c61\u524d\u540e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\u3002"},sidebar:"designpatternsSidebar",previous:{title:"\u4eab\u5143\u6a21\u5f0f",permalink:"/docs/design-patterns/structural-patterns/flyweight"},next:{title:"\u884c\u4e3a\u6a21\u5f0f",permalink:"/docs/design-patterns/behavioral-patterns/"}},a={},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",level:2},{value:"\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function o(e){const t={h1:"h1",h2:"h2",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u4ee3\u7406\u6a21\u5f0f",children:"\u4ee3\u7406\u6a21\u5f0f"}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"}}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(t.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,r.jsx)(t.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,r.jsx)(t.h2,{id:"\u4f2a\u4ee3\u7801",children:"\u4f2a\u4ee3\u7801"}),"\n",(0,r.jsx)(t.h2,{id:"\u9002\u5408\u5e94\u7528\u573a\u666f",children:"\u9002\u5408\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,r.jsx)(t.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,r.jsx)(t.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
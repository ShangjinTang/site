"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9667],{73357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(74848),r=n(28453);const i={description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u72b6\u7ed3\u6784\uff0c \u5e76\u4e14\u80fd\u50cf\u4f7f\u7528\u72ec\u7acb\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u5b83\u4eec\u3002"},d="\u7ec4\u5408\u6a21\u5f0f",l={id:"design-patterns/structural-patterns/composite",title:"\u7ec4\u5408\u6a21\u5f0f",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u72b6\u7ed3\u6784\uff0c \u5e76\u4e14\u80fd\u50cf\u4f7f\u7528\u72ec\u7acb\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u5b83\u4eec\u3002",source:"@site/docs/design-patterns/02-structural-patterns/03-composite.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/structural-patterns/composite",permalink:"/docs/design-patterns/structural-patterns/composite",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u72b6\u7ed3\u6784\uff0c \u5e76\u4e14\u80fd\u50cf\u4f7f\u7528\u72ec\u7acb\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u5b83\u4eec\u3002"},sidebar:"designpatternsSidebar",previous:{title:"\u6865\u63a5\u6a21\u5f0f",permalink:"/docs/design-patterns/structural-patterns/bridge"},next:{title:"\u88c5\u9970\u6a21\u5f0f",permalink:"/docs/design-patterns/structural-patterns/decorator"}},c={},a=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",level:2},{value:"\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function o(e){const t={h1:"h1",h2:"h2",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u7ec4\u5408\u6a21\u5f0f",children:"\u7ec4\u5408\u6a21\u5f0f"}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center"}}),"\n",(0,s.jsx)(t.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,s.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(t.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,s.jsx)(t.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,s.jsx)(t.h2,{id:"\u4f2a\u4ee3\u7801",children:"\u4f2a\u4ee3\u7801"}),"\n",(0,s.jsx)(t.h2,{id:"\u9002\u5408\u5e94\u7528\u573a\u666f",children:"\u9002\u5408\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(t.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,s.jsx)(t.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,s.jsx)(t.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
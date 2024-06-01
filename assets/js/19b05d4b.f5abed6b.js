"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[490],{25500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>o,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var c=i(74848),r=i(28453);const n={},a="TypeScript \u548c React",p={id:"typescript-react/intro",title:"TypeScript \u548c React",description:"React \u662f\u8457\u540d\u7684\u5f00\u6e90 JavaScript \u5e93\uff0c\u5b83\u5df2\u6210\u4e3a\u5bfb\u6c42\u6784\u5efa\u54cd\u5e94\u5f0f\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u7528\u6237\u754c\u9762\u7684\u5f00\u53d1\u4eba\u5458\u9752\u7750\u7684\u5de5\u5177\u3002",source:"@site/docs/typescript-react/intro.md",sourceDirName:"typescript-react",slug:"/typescript-react/intro",permalink:"/site/docs/typescript-react/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typescriptreactSidebar",previous:{title:"Create React App with TypeScript",permalink:"/site/docs/typescript-react/create-react-app-with-typescript"}},s={},l=[{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 TypeScript\uff1f",id:"why-typescript",level:2},{value:"\u9759\u6001\u7c7b\u578b\u548c\u7c7b\u578b\u5b89\u5168",id:"static-safety",level:3},{value:"\u589e\u5f3a\u7684\u5de5\u5177\u548c IDE \u652f\u6301",id:"ide-support",level:3},{value:"\u6539\u8fdb\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u548c\u534f\u4f5c",id:"maintainability-collaboration",level:3},{value:"\u4e0e JavaScript \u548c\u73b0\u6709\u4ee3\u7801\u5e93\u7684\u517c\u5bb9\u6027",id:"compatible-with-js",level:3},{value:"\u5f3a\u7c7b\u578b API \u548c\u66f4\u597d\u7684\u6587\u6863",id:"strongly-typed-apis",level:3},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 React\uff1f",id:"why-react",level:2},{value:"\u57fa\u4e8e\u7ec4\u4ef6\u7684\u67b6\u6784",id:"component-architecture",level:3},{value:"\u865a\u62df DOM \u548c\u9ad8\u6548\u6e32\u67d3",id:"virtual-dom",level:3},{value:"\u5355\u5411\u6570\u636e\u6d41\u548c\u72b6\u6001\u7ba1\u7406",id:"unidirection-data-and-state-management",level:3},{value:"\u7528\u4e8e\u8de8\u5e73\u53f0\u5f00\u53d1\u7684 React Native",id:"cross-platform",level:3},{value:"\u4e30\u5bcc\u7684\u751f\u6001\u7cfb\u7edf\u548c\u793e\u533a\u652f\u6301",id:"rich-ecosystem",level:3},{value:"\u7ed3\u5408",id:"combination",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"typescript-\u548c-react",children:"TypeScript \u548c React"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"https://react.dev/",children:"React"})," \u662f\u8457\u540d\u7684\u5f00\u6e90 JavaScript \u5e93\uff0c\u5b83\u5df2\u6210\u4e3a\u5bfb\u6c42\u6784\u5efa\u54cd\u5e94\u5f0f\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u7528\u6237\u754c\u9762\u7684\u5f00\u53d1\u4eba\u5458\u9752\u7750\u7684\u5de5\u5177\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u540c\u65f6\uff0c",(0,c.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," \u662f\u4e00\u4e2a\u9759\u6001\u7c7b\u578b\u7684 JavaScript \u8d85\u96c6\uff0c\u62e5\u6709\u8bb8\u591a\u4f18\u70b9\uff0c\u4f8b\u5982\u7c7b\u5b9a\u4e49\u3001\u63a5\u53e3\u548c\u7c7b\u578b\u6ce8\u91ca\u3001\u4e3a\u4ee3\u7801\u5e93\u63d0\u4f9b\u7ed3\u6784\u548c\u53ef\u9760\u6027\u4ee5\u53ca\u7b80\u5316\u9519\u8bef\u68c0\u6d4b \u3002"]}),"\n",(0,c.jsx)(t.h2,{id:"why-typescript",children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 TypeScript\uff1f"}),"\n",(0,c.jsx)(t.h3,{id:"static-safety",children:"\u9759\u6001\u7c7b\u578b\u548c\u7c7b\u578b\u5b89\u5168"}),"\n",(0,c.jsx)(t.p,{children:"TypeScript \u5c06\u9759\u6001\u7c7b\u578b\u5f15\u5165 JavaScript\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6355\u83b7\u4e0e\u7c7b\u578b\u76f8\u5173\u7684\u9519\u8bef\u3002 \u8fd9\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\u3001\u63d0\u9ad8\u53ef\u7ef4\u62a4\u6027\u5e76\u51cf\u5c11\u8fd0\u884c\u65f6\u9519\u8bef\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"ide-support",children:"\u589e\u5f3a\u7684\u5de5\u5177\u548c IDE \u652f\u6301"}),"\n",(0,c.jsx)(t.p,{children:"TypeScript \u63d0\u4f9b\u51fa\u8272\u7684\u5de5\u5177\u548c IDE \u652f\u6301\uff0c\u5305\u62ec\u81ea\u52a8\u5b8c\u6210\u3001\u7c7b\u578b\u68c0\u67e5\u548c\u91cd\u6784\u5de5\u5177\u7b49\u529f\u80fd\u3002 \u8fd9\u63d0\u9ad8\u4e86\u5f00\u53d1\u4eba\u5458\u7684\u5de5\u4f5c\u6548\u7387\uff0c\u5e76\u6709\u52a9\u4e8e\u5feb\u901f\u8bc6\u522b\u548c\u4fee\u590d\u9519\u8bef\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"maintainability-collaboration",children:"\u6539\u8fdb\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u548c\u534f\u4f5c"}),"\n",(0,c.jsx)(t.p,{children:"TypeScript \u7684\u9759\u6001\u7c7b\u578b\u548c\u6e05\u6670\u7684\u754c\u9762\u4f7f\u4ee3\u7801\u66f4\u52a0\u81ea\u6587\u6863\u5316\u5e76\u4e14\u66f4\u6613\u4e8e\u7406\u89e3\u3002 \u8fd9\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u5e76\u4fc3\u8fdb\u5f00\u53d1\u56e2\u961f\u5185\u90e8\u66f4\u597d\u7684\u534f\u4f5c\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"compatible-with-js",children:"\u4e0e JavaScript \u548c\u73b0\u6709\u4ee3\u7801\u5e93\u7684\u517c\u5bb9\u6027"}),"\n",(0,c.jsx)(t.p,{children:"TypeScript \u662f JavaScript \u7684\u8d85\u96c6\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u73b0\u6709 JavaScript \u9879\u76ee\u4e2d\u9010\u6b65\u91c7\u7528 TypeScript\u3002 \u8fd9\u79cd\u517c\u5bb9\u6027\u4f7f\u5f97\u8fc1\u79fb\u4ee3\u7801\u5e93\u548c\u5229\u7528\u73b0\u6709 JavaScript \u5e93\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"strongly-typed-apis",children:"\u5f3a\u7c7b\u578b API \u548c\u66f4\u597d\u7684\u6587\u6863"}),"\n",(0,c.jsx)(t.p,{children:"TypeScript \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u548c\u5f3a\u5236\u6267\u884c API \u7c7b\u578b\uff0c\u4f7f\u5b83\u4eec\u66f4\u52a0\u660e\u786e\u548c\u4e0d\u8a00\u81ea\u660e\u3002 \u8fd9\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u6587\u6863\u3001\u6539\u8fdb\u7684\u4ee3\u7801\u53ef\u53d1\u73b0\u6027\u4ee5\u53ca\u66f4\u8f7b\u677e\u5730\u4e0e\u5916\u90e8\u5e93\u96c6\u6210\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"why-react",children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 React\uff1f"}),"\n",(0,c.jsx)(t.h3,{id:"component-architecture",children:"\u57fa\u4e8e\u7ec4\u4ef6\u7684\u67b6\u6784"}),"\n",(0,c.jsx)(t.p,{children:"React \u9075\u5faa\u57fa\u4e8e\u7ec4\u4ef6\u7684\u67b6\u6784\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u6784\u5efa\u53ef\u91cd\u7528\u548c\u6a21\u5757\u5316\u7684 UI \u7ec4\u4ef6\u3002 \u8fd9\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u53ef\u91cd\u7528\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"virtual-dom",children:"\u865a\u62df DOM \u548c\u9ad8\u6548\u6e32\u67d3"}),"\n",(0,c.jsx)(t.p,{children:"React \u4f7f\u7528\u865a\u62df DOM \u6765\u4f18\u5316\u6e32\u67d3\u8fc7\u7a0b\u3002 \u5b83\u4ec5\u66f4\u65b0\u5fc5\u8981\u7684\u7ec4\u4ef6\uff0c\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11 DOM \u64cd\u4f5c\u5e76\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"unidirection-data-and-state-management",children:"\u5355\u5411\u6570\u636e\u6d41\u548c\u72b6\u6001\u7ba1\u7406"}),"\n",(0,c.jsx)(t.p,{children:"React \u63d0\u5021\u5355\u5411\u6570\u636e\u6d41\u7684\u6982\u5ff5\uff0c\u5373\u6570\u636e\u4ece\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u5355\u5411\u6d41\u52a8\u3002 \u8fd9\u6709\u52a9\u4e8e\u7ef4\u62a4\u53ef\u9884\u6d4b\u7684\u6570\u636e\u6d41\u5e76\u7b80\u5316\u72b6\u6001\u7ba1\u7406\u3002 \u5b83\u8fd8\u4f7f\u5f97\u8c03\u8bd5\u548c\u4f18\u5316 React \u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"cross-platform",children:"\u7528\u4e8e\u8de8\u5e73\u53f0\u5f00\u53d1\u7684 React Native"}),"\n",(0,c.jsx)(t.p,{children:"React \u53ef\u4ee5\u4e0e React Native \u7ed3\u5408\u4f7f\u7528\u6765\u5f00\u53d1\u9002\u7528\u4e8e iOS \u548c Android \u5e73\u53f0\u7684\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002 \u901a\u8fc7\u5171\u4eab\u5355\u4e00\u4ee3\u7801\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8282\u7701\u6784\u5efa\u8de8\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u7684\u65f6\u95f4\u548c\u7cbe\u529b\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"rich-ecosystem",children:"\u4e30\u5bcc\u7684\u751f\u6001\u7cfb\u7edf\u548c\u793e\u533a\u652f\u6301"}),"\n",(0,c.jsx)(t.p,{children:"React \u62e5\u6709\u5e9e\u5927\u7684\u751f\u6001\u7cfb\u7edf\uff0c\u5176\u4e2d\u5305\u542b\u793e\u533a\u5f00\u53d1\u7684\u4f17\u591a\u5e93\u3001\u5de5\u5177\u548c\u8d44\u6e90\u3002 \u8fd9\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5229\u7528\u73b0\u6709\u89e3\u51b3\u65b9\u6848\u5e76\u52a0\u901f\u5f00\u53d1\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"combination",children:"\u7ed3\u5408"}),"\n",(0,c.jsx)(t.p,{children:"\u901a\u8fc7\u5c06 React \u57fa\u4e8e\u7ec4\u4ef6\u7684\u65b9\u6cd5\u4e0e TypeScript \u7684\u9759\u6001\u7c7b\u578b\u76f8\u7ed3\u5408\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4ece Web \u5f00\u53d1\u9879\u76ee\u4e2d\u6539\u8fdb\u7684\u4ee3\u7801\u8d28\u91cf\u3001\u53ef\u7ef4\u62a4\u6027\u3001\u751f\u4ea7\u529b\u548c\u534f\u4f5c\u4e2d\u53d7\u76ca\u3002"})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>p});var c=i(96540);const r={},n=c.createContext(r);function a(e){const t=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(n.Provider,{value:t},e.children)}}}]);
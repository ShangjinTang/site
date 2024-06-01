"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6597],{46993:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(74848),t=a(28453);const r={description:"Writing diagrams with Mermaid"},s="Diagrams with Mermaid",d={id:"docusaurus-mdx/mdx-features/diagrams",title:"Diagrams with Mermaid",description:"Writing diagrams with Mermaid",source:"@site/docs/docusaurus-mdx/mdx-features/diagrams.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/diagrams",permalink:"/site/docs/docusaurus-mdx/mdx-features/diagrams",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Writing diagrams with Mermaid"},sidebar:"docusaurusSidebar",previous:{title:"Math Equations",permalink:"/site/docs/docusaurus-mdx/mdx-features/math-equations"},next:{title:"Head metadata",permalink:"/site/docs/docusaurus-mdx/mdx-features/head-metadata"}},o={},m=[{value:"Usage",id:"usage",level:2},{value:"Mermaid Config",id:"configuration",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"diagrams-with-mermaid",children:"Diagrams with Mermaid"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Mermaid is default installed and enabled on this site."})}),"\n",(0,n.jsxs)(i.p,{children:["Diagrams can be rendered using ",(0,n.jsx)(i.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["Add a code block with language ",(0,n.jsx)(i.code,{children:"mermaid"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"})}),"\n",(0,n.jsx)(i.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,n.jsx)(i.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,n.jsxs)(i.p,{children:["Options in ",(0,n.jsx)(i.code,{children:"mermaid.options"})," will be passed directly to ",(0,n.jsx)(i.code,{children:"mermaid.initialize"}),". You can set themes for both light and dark mode."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://mermaid.js.org/config/schema-docs/config.html",children:"Mermaid config documentation"})," and the ",(0,n.jsx)(i.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>s,x:()=>d});var n=a(96540);const t={},r=n.createContext(t);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
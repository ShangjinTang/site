"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9975],{80885:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var o=n(74848),r=n(28453);const d={},i="Manage Docs Versions",c={id:"docusaurus-mdx/docusaurus-tutorial/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/docusaurus-mdx/docusaurus-tutorial/manage-docs-versions.md",sourceDirName:"docusaurus-mdx/docusaurus-tutorial",slug:"/docusaurus-mdx/docusaurus-tutorial/manage-docs-versions",permalink:"/docs/docusaurus-mdx/docusaurus-tutorial/manage-docs-versions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docusaurusSidebar",previous:{title:"Deploy your site",permalink:"/docs/docusaurus-mdx/docusaurus-tutorial/deploy-your-site"},next:{title:"Translate your site",permalink:"/docs/docusaurus-mdx/docusaurus-tutorial/translate-your-site"}},t={},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"})}),"\n",(0,o.jsx)(s.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,o.jsx)(s.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,o.jsx)(s.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"docs"})," folder is copied into ",(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0"})," and ",(0,o.jsx)(s.code,{children:"versions.json"})," is created."]}),"\n",(0,o.jsx)(s.p,{children:"Your docs now have 2 versions:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"1.0"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"current"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,o.jsx)(s.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,o.jsx)(s.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,o.jsxs)(s.p,{children:["Modify the ",(0,o.jsx)(s.code,{children:"docusaurus.config.ts"})," file:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Docs Version Dropdown",src:n(43911).A+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(s.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,o.jsx)(s.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"docs/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},43911:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var o=n(96540);const r={},d=o.createContext(r);function i(e){const s=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:s},e.children)}}}]);
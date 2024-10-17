"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3607],{56956:(e,n,t)=>{t.r(n),t.d(n,{Highlight:()=>f,assets:()=>g,contentTitle:()=>p,default:()=>w,frontMatter:()=>m,metadata:()=>x,toc:()=>j});var o=t(74848),r=t(28453),s=t(16889),i=t(11470),a=t(19365);const l="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}\n";var c=t(72170),d=t.n(c);function h(e){const n={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{children:["Hello ",e.name]}),"\n",(0,o.jsxs)(n.p,{children:["This is text some content from ",(0,o.jsx)(n.code,{children:"_markdown-partial-example.md"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}t(14252);const m={description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX"},p="MDX and React",x={id:"docusaurus-mdx/mdx-features/react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/docs/docusaurus-mdx/mdx-features/react.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/react",permalink:"/site/docs/docusaurus-mdx/mdx-features/react",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX"},sidebar:"docusaurusSidebar",previous:{title:"Markdown Features",permalink:"/site/docs/docusaurus-mdx/mdx-features/intro"},next:{title:"Tabs and TabItem",permalink:"/site/docs/docusaurus-mdx/mdx-features/tabs"}},g={},f=({children:e,color:n})=>{const t={span:"span",...(0,r.R)()};return(0,o.jsx)(t.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},j=[{value:"Exporting components",id:"exporting-components",level:3},{value:"Importing components",id:"importing-components",level:3},{value:"MDX component scope",id:"mdx-component-scope",level:3},{value:"Markdown and JSX interoperability",id:"markdown-and-jsx-interoperability",level:3},{value:"Importing code snippets",id:"importing-code-snippets",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2},{value:"Available exports",id:"available-exports",level:2}];function b(e){const n={a:"a",admonition:"admonition",b:"b",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"mdx-and-react",children:"MDX and React"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["Docusaurus has built-in support for ",(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"}),", which allows you to write JSX within your Markdown files and render them as React components."]}),"\n",(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX docs"})," to see what fancy stuff you can do with MDX."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Debugging MDX",type:"tip",children:[(0,o.jsx)(n.p,{children:"The MDX format is quite strict, and you may get compilation errors."}),(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"})})," to debug them and make sure your syntax is valid."]})]}),"\n",(0,o.jsx)(n.h3,{id:"exporting-components",children:"Exporting components"}),"\n",(0,o.jsxs)(n.p,{children:["To define any custom component within an MDX file, you have to export it: only paragraphs that start with ",(0,o.jsx)(n.code,{children:"export"})," will be parsed as components instead of prose."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n"})}),"\n",(0,o.jsx)(n.p,{children:"Notice how it renders both the markup from your React component and the Markdown syntax:"}),"\n","\n",(0,o.jsxs)(s.A,{minHeight:240,children:[(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{color:"#25c2a0",children:"Docusaurus green"}),"\n"," ","and ",(0,o.jsx)(f,{color:"#1877F2",children:"Facebook blue"})," are my favorite colors."]}),(0,o.jsxs)(n.p,{children:["I can write ",(0,o.jsx)(n.strong,{children:"Markdown"})," alongside my ",(0,o.jsx)(n.em,{children:"JSX"}),"!"]})]}),"\n",(0,o.jsxs)(n.admonition,{title:"MDX is JSX",type:"warning",children:[(0,o.jsx)(n.p,{children:"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"importing-components",children:"Importing components"}),"\n",(0,o.jsx)(n.p,{children:"You can also import your own components defined in other files or third-party components installed via npm."}),"\n","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@site"})," alias points to your website's directory, usually where the ",(0,o.jsx)(n.code,{children:"docusaurus.config.ts"})," file is. Using an alias instead of relative paths (",(0,o.jsx)(n.code,{children:"'../../src/components/BrowserWindow'"}),") saves you from updating import paths when moving files around, or when versioning docs and translating."]})}),"\n",(0,o.jsxs)(n.p,{children:["While declaring components within Markdown is very convenient for simple cases, it becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability. Use a separate ",(0,o.jsx)(n.code,{children:".js"})," file when your component involves complex JS logic:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Highlight.js"',children:"import React from 'react';\n\nexport default function Highlight({children, color}) {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: '2px',\n        color: '#fff',\n        padding: '0.2rem',\n      }}>\n      {children}\n    </span>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",metastring:'title="markdown-file.mdx"',children:"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you use the same component across a lot of files, you don't need to import it everywhere\u2014consider adding it to the global scope. ",(0,o.jsx)(n.a,{href:"#mdx-component-scope",children:"See below"})]})}),"\n",(0,o.jsx)(n.h3,{id:"mdx-component-scope",children:"MDX component scope"}),"\n",(0,o.jsxs)(n.p,{children:["Apart from ",(0,o.jsx)(n.a,{href:"#importing-components",children:"importing a component"})," and ",(0,o.jsx)(n.a,{href:"#exporting-components",children:"exporting a component"}),", a third way to use a component in MDX is to ",(0,o.jsx)(n.strong,{children:"register it to the global scope"}),", which will make it automatically available in every MDX file, without any import statements."]}),"\n",(0,o.jsx)(n.p,{children:"For example, given this MDX file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"- a\n- list!\n\nAnd some <Highlight>custom markup</Highlight>...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It will be compiled to a React component containing ",(0,o.jsx)(n.code,{children:"ul"}),", ",(0,o.jsx)(n.code,{children:"li"}),", ",(0,o.jsx)(n.code,{children:"p"}),", and ",(0,o.jsx)(n.code,{children:"Highlight"})," elements. ",(0,o.jsx)(n.code,{children:"Highlight"})," is not a native html element: you need to provide your own React component implementation for it."]}),"\n",(0,o.jsxs)(n.p,{children:["In Docusaurus, the MDX component scope is provided by the ",(0,o.jsx)(n.code,{children:"@theme/MDXComponents"})," file. It's not a React component, ",(0,o.jsx)(n.em,{children:"per se"}),", unlike most other exports under the ",(0,o.jsx)(n.code,{children:"@theme/"})," alias: it is a record from tag names like ",(0,o.jsx)(n.code,{children:"Highlight"})," to their React component implementations."]}),"\n",(0,o.jsxs)(n.p,{children:["If you swizzle this component, you will find all tags that have been implemented, and you can further customize our implementation by swizzling the respective sub-component, like ",(0,o.jsx)(n.code,{children:"@theme/MDXComponents/Code"})," (which is used to render Markdown code blocks)."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to register extra tag names (like the ",(0,o.jsx)(n.code,{children:"<Highlight>"})," tag above), you should consider wrapping ",(0,o.jsx)(n.code,{children:"@theme/MDXComponents"})," by swizzling, so you don't have to maintain all the existing mappings. Since the swizzle CLI doesn't allow wrapping non-component files yet, you should manually create the wrapper:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/MDXComponents.js"',children:"import React from 'react';\n// Import the original mapper\nimport MDXComponents from '@theme-original/MDXComponents';\n// highlight-next-line\nimport Highlight from '@site/src/components/Highlight';\n\nexport default {\n  // Re-use the default mapping\n  ...MDXComponents,\n  // Map the \"<Highlight>\" tag to our Highlight component\n  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX\n  // highlight-next-line\n  Highlight,\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And now, you can freely use ",(0,o.jsx)(n.code,{children:"<Highlight>"})," in every page, without writing the import statement:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'I can conveniently use <Highlight color="#25c2a0">Docusaurus green</Highlight> everywhere!\n'})}),"\n",(0,o.jsx)(s.A,{children:(0,o.jsxs)(n.p,{children:["I can conveniently use ",(0,o.jsx)(f,{color:"#25c2a0",children:"Docusaurus green"})," everywhere!"]})}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.strong,{children:"upper-case"})," tag names like ",(0,o.jsx)(n.code,{children:"Highlight"})," on purpose."]}),(0,o.jsx)(n.p,{children:"From MDX v3+ onward (Docusaurus v3+), lower-case tag names are always rendered as native html elements, and will not use any component mapping you provide."})]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["This feature is powered by ",(0,o.jsxs)(n.a,{href:"https://mdxjs.com/docs/using-mdx/#mdx-provider",children:["an ",(0,o.jsx)(n.code,{children:"MDXProvider"})]}),". If you are importing Markdown in a React page, you have to supply this provider yourself through the ",(0,o.jsx)(n.code,{children:"MDXContent"})," theme component."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport FeatureDisplay from './_featureDisplay.mdx';\n// highlight-next-line\nimport MDXContent from '@theme/MDXContent';\n\nexport default function LandingPage() {\n  return (\n    <div>\n      {/* highlight-start */}\n      <MDXContent>\n        <FeatureDisplay />\n      </MDXContent>\n      {/* highlight-end */}\n    </div>\n  );\n}\n"})}),(0,o.jsxs)(n.p,{children:["If you don't wrap your imported MDX with ",(0,o.jsx)(n.code,{children:"MDXContent"}),", the global scope will not be available."]})]}),"\n",(0,o.jsx)(n.h3,{id:"markdown-and-jsx-interoperability",children:"Markdown and JSX interoperability"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus v3 is using ",(0,o.jsx)(n.a,{href:"https://mdxjs.com/blog/v3/",children:"MDX v3"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/#mdx-syntax",children:"MDX syntax"})," is mostly compatible with ",(0,o.jsx)(n.a,{href:"https://commonmark.org/",children:"CommonMark"}),", but is much stricter because your ",(0,o.jsx)(n.code,{children:".mdx"})," files can use JSX and are compiled into real React components (check the ",(0,o.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"playground"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Some valid CommonMark features won't work with MDX (",(0,o.jsx)(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/#markdown",children:"more info"}),"), notably:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Indented code blocks: use triple backticks instead"}),"\n",(0,o.jsxs)(n.li,{children:["Autolinks (",(0,o.jsx)(n.code,{children:"<http://localhost:3000>"}),"): use regular link syntax instead (",(0,o.jsx)(n.code,{children:"[http://localhost:3000](http://localhost:3000)"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["HTML syntax (",(0,o.jsx)(n.code,{children:'<p style="color: red;">'}),"): use JSX instead (",(0,o.jsx)(n.code,{children:"<p style={{color: 'red'}}>"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Unescaped ",(0,o.jsx)(n.code,{children:"{"})," and ",(0,o.jsx)(n.code,{children:"<"}),": escape them with ",(0,o.jsx)(n.code,{children:"\\"})," instead (",(0,o.jsx)(n.code,{children:"\\{"})," and ",(0,o.jsx)(n.code,{children:"\\<"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Experimental CommonMark support",type:"danger",children:[(0,o.jsxs)(n.p,{children:["Docusaurus v3 makes it possible to opt-in for a less strict, standard ",(0,o.jsx)(n.a,{href:"https://commonmark.org/",children:"CommonMark"})," support with the following options:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"format: md"})," front matter"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:".md"})," file extension combined with the ",(0,o.jsx)(n.code,{children:'siteConfig.markdown.format: "detect"'})," configuration"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["This feature is ",(0,o.jsx)(n.strong,{children:"experimental"})," and currently has a few ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/9092",children:"limitations"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"importing-code-snippets",children:"Importing code snippets"}),"\n",(0,o.jsxs)(n.p,{children:["You can not only import a file containing a component definition, but also import any code file as raw text, and then insert it in a code block, thanks to ",(0,o.jsx)(n.a,{href:"https://webpack.js.org/loaders/raw-loader/",children:"Webpack raw-loader"}),". In order to use ",(0,o.jsx)(n.code,{children:"raw-loader"}),", you first need to install it in your project:"]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(a.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save raw-loader\n"})})}),(0,o.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add raw-loader\n"})})}),(0,o.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add raw-loader\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Now you can import code snippets from another file as it is:"}),"\n","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="myMarkdownFile.mdx"',children:"import CodeBlock from '@theme/CodeBlock';\nimport MyComponentSource from '!!raw-loader!./_myReactComponent';\n\n<CodeBlock language=\"jsx\">{MyComponentSource}</CodeBlock>\n"})}),"\n","\n",(0,o.jsx)(s.A,{children:(0,o.jsx)(d(),{language:"jsx",children:l})}),"\n",(0,o.jsxs)(n.p,{children:["See using code blocks in JSX for more details of the ",(0,o.jsx)(n.code,{children:"<CodeBlock>"})," component."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You have to use ",(0,o.jsx)(n.code,{children:"<CodeBlock>"})," rather than the Markdown triple-backtick ",(0,o.jsx)(n.code,{children:"```"}),", because the latter will ship out any of its content as-is, but you want to interpolate the imported text here."]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This feature is experimental and might be subject to breaking API changes in the future."})}),"\n",(0,o.jsx)(n.h2,{id:"importing-markdown",children:"Importing Markdown"}),"\n",(0,o.jsx)(n.p,{children:"You can use Markdown files as components and import them elsewhere, either in Markdown files or in React pages."}),"\n",(0,o.jsxs)(n.p,{children:["By convention, using the ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"_"})," filename prefix"]})," will not create any doc page and means the Markdown file is a ",(0,o.jsx)(n.strong,{children:'"partial"'}),", to be imported by other files."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",metastring:'title="_markdown-partial-example.mdx"',children:"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n"})}),"\n","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="someOtherDoc.mdx"',children:"import PartialExample from './_markdown-partial-example.mdx';\n\n<PartialExample name=\"Sebastien\" />\n"})}),"\n","\n",(0,o.jsx)(s.A,{children:(0,o.jsx)(u,{name:"Sebastien"})}),"\n",(0,o.jsx)(n.p,{children:"This way, you can reuse content among multiple pages and avoid duplicating materials."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Currently, the table of contents does not contain the imported Markdown headings. This is a technical limitation that we are trying to solve (",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3915",children:"issue"}),")."]})}),"\n",(0,o.jsx)(n.h2,{id:"available-exports",children:"Available exports"}),"\n",(0,o.jsx)(n.p,{children:"Within the MDX page, the following variables are available as globals:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"frontMatter"}),": the front matter as a record of string keys and values;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toc"}),": the table of contents, as a tree of headings. See also Inline TOC for a more concrete use-case."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"contentTitle"}),": the Markdown title, which is the first ",(0,o.jsx)(n.code,{children:"h1"})," heading in the Markdown text. It's ",(0,o.jsx)(n.code,{children:"undefined"})," if there isn't one (e.g. title specified in the front matter)."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">{JSON.stringify(toc, null, 2)}</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}\n</ul>\n\n<p>The title of this page is: <b>{contentTitle}</b></p>\n"})}),"\n","\n",(0,o.jsxs)(s.A,{children:[(0,o.jsx)(n.p,{children:"The table of contents for this page, serialized:"}),(0,o.jsx)(d(),{className:"language-json",children:JSON.stringify(j,null,2)}),(0,o.jsx)(n.p,{children:"The front matter of this page:"}),(0,o.jsx)("ul",{children:Object.entries(m).map((([e,t])=>(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.b,{children:e}),": ",t]},e)))}),(0,o.jsxs)("p",{children:["The title of this page is: ",(0,o.jsx)("b",{children:p})]})]})]})}function w(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},14252:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(65195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=t(74848);function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.jsx)("div",{className:r.tableOfContentsInline,children:(0,s.jsx)(o.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},65195:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(96540),r=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):o.push(r)})),o}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>a(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:i}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let r=n;r<=t;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),c=l(a,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var h=t(28774),u=t(74848);function m(e){let{toc:n,className:t,linkClassName:o,isChild:r}=e;return n.length?(0,u.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.A,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const p=o.memo(m);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:h,...m}=e;const x=(0,r.p)(),g=c??x.tableOfContents.minHeadingLevel,f=h??x.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:f});return d((0,o.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:f}}),[a,l,g,f])),(0,u.jsx)(p,{toc:j,className:t,linkClassName:a,...m})}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(96540),r=t(34164),s=t(23104),i=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=c??x;return m({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(c(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(w,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},16889:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(34164);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=t(74848);function i(e){let{children:n,minHeight:t,url:i,style:a,bodyStyle:l}=e;return(0,s.jsxs)("div",{className:r.browserWindow,style:{...a,minHeight:t},children:[(0,s.jsxs)("div",{className:r.browserWindowHeader,children:[(0,s.jsxs)("div",{className:r.buttons,children:[(0,s.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,o.A)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,s.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar})]})})]}),(0,s.jsx)("div",{className:r.browserWindowBody,style:l,children:n})]})}}}]);
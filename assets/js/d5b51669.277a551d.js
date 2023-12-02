"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9727],{53051:(e,n,o)=>{o.r(n),o.d(n,{Highlight:()=>u,assets:()=>m,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>p,toc:()=>x});var s=o(85893),t=o(11151),i=o(51007);o(74866),o(85162);const r="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}\n";var a=o(79057);function l(e){const n={code:"code",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{children:["Hello ",e.name]}),"\n",(0,s.jsxs)(n.p,{children:["This is text some content from ",(0,s.jsx)(n.code,{children:"_markdown-partial-example.md"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}o(3901);const d={description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX"},h="MDX and React",p={id:"docusaurus-mdx/mdx-features/react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/docs/docusaurus-mdx/mdx-features/react.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/react",permalink:"/docusaurus/docs/docusaurus-mdx/mdx-features/react",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX"},sidebar:"docusaurusSidebar",previous:{title:"Markdown Features",permalink:"/docusaurus/docs/docusaurus-mdx/mdx-features/intro"},next:{title:"Tabs and TabItem",permalink:"/docusaurus/docs/docusaurus-mdx/mdx-features/tabs"}},m={},u=({children:e,color:n})=>{const o={span:"span",...(0,t.a)()};return(0,s.jsx)(o.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},x=[{value:"Exporting components",id:"exporting-components",level:3},{value:"Importing components",id:"importing-components",level:3},{value:"MDX component scope",id:"mdx-component-scope",level:3},{value:"Markdown and JSX interoperability",id:"markdown-and-jsx-interoperability",level:3},{value:"Importing code snippets",id:"importing-code-snippets",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2},{value:"Available exports",id:"available-exports",level:2}];function g(e){const n={a:"a",admonition:"admonition",b:"b",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mdx-and-react",children:"MDX and React"}),"\n","\n",(0,s.jsxs)(n.p,{children:["Docusaurus has built-in support for ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"}),", which allows you to write JSX within your Markdown files and render them as React components."]}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX docs"})," to see what fancy stuff you can do with MDX."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Debugging MDX",type:"tip",children:[(0,s.jsx)(n.p,{children:"The MDX format is quite strict, and you may get compilation errors."}),(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"})})," to debug them and make sure your syntax is valid."]})]}),"\n",(0,s.jsx)(n.h3,{id:"exporting-components",children:"Exporting components"}),"\n",(0,s.jsxs)(n.p,{children:["To define any custom component within an MDX file, you have to export it: only paragraphs that start with ",(0,s.jsx)(n.code,{children:"export"})," will be parsed as components instead of prose."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notice how it renders both the markup from your React component and the Markdown syntax:"}),"\n","\n",(0,s.jsxs)(i.Z,{minHeight:240,children:[(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{color:"#25c2a0",children:"Docusaurus green"}),"\n"," ","and ",(0,s.jsx)(u,{color:"#1877F2",children:"Facebook blue"})," are my favorite colors."]}),(0,s.jsxs)(n.p,{children:["I can write ",(0,s.jsx)(n.strong,{children:"Markdown"})," alongside my ",(0,s.jsx)(n.em,{children:"JSX"}),"!"]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"MDX is JSX",type:"warning",children:[(0,s.jsx)(n.p,{children:"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"importing-components",children:"Importing components"}),"\n",(0,s.jsx)(n.p,{children:"You can also import your own components defined in other files or third-party components installed via npm."}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@site"})," alias points to your website's directory, usually where the ",(0,s.jsx)(n.code,{children:"docusaurus.config.ts"})," file is. Using an alias instead of relative paths (",(0,s.jsx)(n.code,{children:"'../../src/components/BrowserWindow'"}),") saves you from updating import paths when moving files around, or when versioning docs and translating."]})}),"\n",(0,s.jsxs)(n.p,{children:["While declaring components within Markdown is very convenient for simple cases, it becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability. Use a separate ",(0,s.jsx)(n.code,{children:".js"})," file when your component involves complex JS logic:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Highlight.js"',children:"import React from 'react';\n\nexport default function Highlight({children, color}) {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: '2px',\n        color: '#fff',\n        padding: '0.2rem',\n      }}>\n      {children}\n    </span>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="markdown-file.mdx"',children:"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you use the same component across a lot of files, you don't need to import it everywhere\u2014consider adding it to the global scope. ",(0,s.jsx)(n.a,{href:"#mdx-component-scope",children:"See below"})]})}),"\n",(0,s.jsx)(n.h3,{id:"mdx-component-scope",children:"MDX component scope"}),"\n",(0,s.jsxs)(n.p,{children:["Apart from ",(0,s.jsx)(n.a,{href:"#importing-components",children:"importing a component"})," and ",(0,s.jsx)(n.a,{href:"#exporting-components",children:"exporting a component"}),", a third way to use a component in MDX is to ",(0,s.jsx)(n.strong,{children:"register it to the global scope"}),", which will make it automatically available in every MDX file, without any import statements."]}),"\n",(0,s.jsx)(n.p,{children:"For example, given this MDX file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"- a\n- list!\n\nAnd some <Highlight>custom markup</Highlight>...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will be compiled to a React component containing ",(0,s.jsx)(n.code,{children:"ul"}),", ",(0,s.jsx)(n.code,{children:"li"}),", ",(0,s.jsx)(n.code,{children:"p"}),", and ",(0,s.jsx)(n.code,{children:"Highlight"})," elements. ",(0,s.jsx)(n.code,{children:"Highlight"})," is not a native html element: you need to provide your own React component implementation for it."]}),"\n",(0,s.jsxs)(n.p,{children:["In Docusaurus, the MDX component scope is provided by the ",(0,s.jsx)(n.code,{children:"@theme/MDXComponents"})," file. It's not a React component, ",(0,s.jsx)(n.em,{children:"per se"}),", unlike most other exports under the ",(0,s.jsx)(n.code,{children:"@theme/"})," alias: it is a record from tag names like ",(0,s.jsx)(n.code,{children:"Highlight"})," to their React component implementations."]}),"\n",(0,s.jsxs)(n.p,{children:["If you swizzle this component, you will find all tags that have been implemented, and you can further customize our implementation by swizzling the respective sub-component, like ",(0,s.jsx)(n.code,{children:"@theme/MDXComponents/Code"})," (which is used to render Markdown code blocks)."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to register extra tag names (like the ",(0,s.jsx)(n.code,{children:"<Highlight>"})," tag above), you should consider wrapping ",(0,s.jsx)(n.code,{children:"@theme/MDXComponents"})," by swizzling, so you don't have to maintain all the existing mappings. Since the swizzle CLI doesn't allow wrapping non-component files yet, you should manually create the wrapper:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/MDXComponents.js"',children:"import React from 'react';\n// Import the original mapper\nimport MDXComponents from '@theme-original/MDXComponents';\n// highlight-next-line\nimport Highlight from '@site/src/components/Highlight';\n\nexport default {\n  // Re-use the default mapping\n  ...MDXComponents,\n  // Map the \"<Highlight>\" tag to our Highlight component\n  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX\n  // highlight-next-line\n  Highlight,\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And now, you can freely use ",(0,s.jsx)(n.code,{children:"<Highlight>"})," in every page, without writing the import statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'I can conveniently use <Highlight color="#25c2a0">Docusaurus green</Highlight> everywhere!\n'})}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n.p,{children:["I can conveniently use ",(0,s.jsx)(u,{color:"#25c2a0",children:"Docusaurus green"})," everywhere!"]})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.strong,{children:"upper-case"})," tag names like ",(0,s.jsx)(n.code,{children:"Highlight"})," on purpose."]}),(0,s.jsx)(n.p,{children:"From MDX v3+ onward (Docusaurus v3+), lower-case tag names are always rendered as native html elements, and will not use any component mapping you provide."})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["This feature is powered by ",(0,s.jsxs)(n.a,{href:"https://mdxjs.com/docs/using-mdx/#mdx-provider",children:["an ",(0,s.jsx)(n.code,{children:"MDXProvider"})]}),". If you are importing Markdown in a React page, you have to supply this provider yourself through the ",(0,s.jsx)(n.code,{children:"MDXContent"})," theme component."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport FeatureDisplay from './_featureDisplay.mdx';\n// highlight-next-line\nimport MDXContent from '@theme/MDXContent';\n\nexport default function LandingPage() {\n  return (\n    <div>\n      {/* highlight-start */}\n      <MDXContent>\n        <FeatureDisplay />\n      </MDXContent>\n      {/* highlight-end */}\n    </div>\n  );\n}\n"})}),(0,s.jsxs)(n.p,{children:["If you don't wrap your imported MDX with ",(0,s.jsx)(n.code,{children:"MDXContent"}),", the global scope will not be available."]})]}),"\n",(0,s.jsx)(n.h3,{id:"markdown-and-jsx-interoperability",children:"Markdown and JSX interoperability"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus v3 is using ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/blog/v3/",children:"MDX v3"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/#mdx-syntax",children:"MDX syntax"})," is mostly compatible with ",(0,s.jsx)(n.a,{href:"https://commonmark.org/",children:"CommonMark"}),", but is much stricter because your ",(0,s.jsx)(n.code,{children:".mdx"})," files can use JSX and are compiled into real React components (check the ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"playground"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Some valid CommonMark features won't work with MDX (",(0,s.jsx)(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/#markdown",children:"more info"}),"), notably:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Indented code blocks: use triple backticks instead"}),"\n",(0,s.jsxs)(n.li,{children:["Autolinks (",(0,s.jsx)(n.code,{children:"<http://localhost:3000>"}),"): use regular link syntax instead (",(0,s.jsx)(n.code,{children:"[http://localhost:3000](http://localhost:3000)"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["HTML syntax (",(0,s.jsx)(n.code,{children:'<p style="color: red;">'}),"): use JSX instead (",(0,s.jsx)(n.code,{children:"<p style={{color: 'red'}}>"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Unescaped ",(0,s.jsx)(n.code,{children:"{"})," and ",(0,s.jsx)(n.code,{children:"<"}),": escape them with ",(0,s.jsx)(n.code,{children:"\\"})," instead (",(0,s.jsx)(n.code,{children:"\\{"})," and ",(0,s.jsx)(n.code,{children:"\\<"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Experimental CommonMark support",type:"danger",children:[(0,s.jsxs)(n.p,{children:["Docusaurus v3 makes it possible to opt-in for a less strict, standard ",(0,s.jsx)(n.a,{href:"https://commonmark.org/",children:"CommonMark"})," support with the following options:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"format: md"})," front matter"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:".md"})," file extension combined with the ",(0,s.jsx)(n.code,{children:'siteConfig.markdown.format: "detect"'})," configuration"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["This feature is ",(0,s.jsx)(n.strong,{children:"experimental"})," and currently has a few ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/9092",children:"limitations"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"importing-code-snippets",children:"Importing code snippets"}),"\n",(0,s.jsxs)(n.p,{children:["You can not only import a file containing a component definition, but also import any code file as raw text, and then insert it in a code block, thanks to ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/loaders/raw-loader/",children:"Webpack raw-loader"}),". In order to use ",(0,s.jsx)(n.code,{children:"raw-loader"}),", you first need to install it in your project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install --save raw-loader\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can import code snippets from another file as it is:"}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="myMarkdownFile.mdx"',children:"import CodeBlock from '@theme/CodeBlock';\nimport MyComponentSource from '!!raw-loader!./_myReactComponent';\n\n<CodeBlock language=\"jsx\">{MyComponentSource}</CodeBlock>\n"})}),"\n","\n",(0,s.jsx)(i.Z,{children:(0,s.jsx)(a.Z,{language:"jsx",children:r})}),"\n",(0,s.jsxs)(n.p,{children:["See using code blocks in JSX for more details of the ",(0,s.jsx)(n.code,{children:"<CodeBlock>"})," component."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You have to use ",(0,s.jsx)(n.code,{children:"<CodeBlock>"})," rather than the Markdown triple-backtick ",(0,s.jsx)(n.code,{children:"```"}),", because the latter will ship out any of its content as-is, but you want to interpolate the imported text here."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This feature is experimental and might be subject to breaking API changes in the future."})}),"\n",(0,s.jsx)(n.h2,{id:"importing-markdown",children:"Importing Markdown"}),"\n",(0,s.jsx)(n.p,{children:"You can use Markdown files as components and import them elsewhere, either in Markdown files or in React pages."}),"\n",(0,s.jsxs)(n.p,{children:["By convention, using the ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"_"})," filename prefix"]})," will not create any doc page and means the Markdown file is a ",(0,s.jsx)(n.strong,{children:'"partial"'}),", to be imported by other files."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="_markdown-partial-example.mdx"',children:"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n"})}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="someOtherDoc.mdx"',children:"import PartialExample from './_markdown-partial-example.mdx';\n\n<PartialExample name=\"Sebastien\" />\n"})}),"\n","\n",(0,s.jsx)(i.Z,{children:(0,s.jsx)(c,{name:"Sebastien"})}),"\n",(0,s.jsx)(n.p,{children:"This way, you can reuse content among multiple pages and avoid duplicating materials."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Currently, the table of contents does not contain the imported Markdown headings. This is a technical limitation that we are trying to solve (",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3915",children:"issue"}),")."]})}),"\n",(0,s.jsx)(n.h2,{id:"available-exports",children:"Available exports"}),"\n",(0,s.jsx)(n.p,{children:"Within the MDX page, the following variables are available as globals:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"frontMatter"}),": the front matter as a record of string keys and values;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toc"}),": the table of contents, as a tree of headings. See also Inline TOC for a more concrete use-case."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"contentTitle"}),": the Markdown title, which is the first ",(0,s.jsx)(n.code,{children:"h1"})," heading in the Markdown text. It's ",(0,s.jsx)(n.code,{children:"undefined"})," if there isn't one (e.g. title specified in the front matter)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">{JSON.stringify(toc, null, 2)}</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}\n</ul>\n\n<p>The title of this page is: <b>{contentTitle}</b></p>\n"})}),"\n","\n","\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(n.p,{children:"The table of contents for this page, serialized:"}),(0,s.jsx)(a.Z,{className:"language-json",children:JSON.stringify(x,null,2)}),(0,s.jsx)(n.p,{children:"The front matter of this page:"}),(0,s.jsx)("ul",{children:Object.entries(d).map((([e,o])=>(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.b,{children:e}),": ",o]},e)))}),(0,s.jsxs)("p",{children:["The title of this page is: ",(0,s.jsx)("b",{children:h})]})]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},51007:(e,n,o)=>{o.d(n,{Z:()=>r});o(67294);var s=o(86010);const t={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var i=o(85893);function r(e){let{children:n,minHeight:o,url:r="http://localhost:3000",style:a,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:t.browserWindow,style:{...a,minHeight:o},children:[(0,i.jsxs)("div",{className:t.browserWindowHeader,children:[(0,i.jsxs)("div",{className:t.buttons,children:[(0,i.jsx)("span",{className:t.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:t.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:t.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,s.Z)(t.browserWindowAddressBar,"text--truncate"),children:r}),(0,i.jsx)("div",{className:t.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:t.bar}),(0,i.jsx)("span",{className:t.bar}),(0,i.jsx)("span",{className:t.bar})]})})]}),(0,i.jsx)("div",{className:t.browserWindowBody,style:l,children:n})]})}},28996:(e,n,o)=>{o.d(n,{Z:()=>a});var s={};o.r(s),o.d(s,{ButtonExample:()=>r});var t=o(67294),i=o(85893);function r(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}const a={React:t,...t,...s}}}]);
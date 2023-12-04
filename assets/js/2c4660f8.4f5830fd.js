"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4111],{5927:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(5893),t=n(1151),o=n(1007);const i={description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown."},d="Markdown Features",a={id:"docusaurus-mdx/mdx-features/intro",title:"Markdown Features",description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown.",source:"@site/docs/docusaurus-mdx/mdx-features/intro.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/intro",permalink:"/site/docs/docusaurus-mdx/mdx-features/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown."},sidebar:"docusaurusSidebar",next:{title:"MDX and React",permalink:"/site/docs/docusaurus-mdx/mdx-features/react"}},c={},l=[{value:"MDX vs. CommonMark",id:"mdx-vs-commonmark",level:2},{value:"Standard features",id:"standard-features",level:2},{value:"Front matter",id:"front-matter",level:2},{value:"Quotes",id:"quotes",level:2},{value:"Details",id:"details",level:2}];function u(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"markdown-features",children:"Markdown Features"}),"\n","\n","\n",(0,r.jsxs)(s.p,{children:["Docusaurus uses ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://commonmark.org/",children:"Markdown"})})," as its main content authoring format."]}),"\n",(0,r.jsx)(s.admonition,{title:"Learn Markdown",type:"tip",children:(0,r.jsxs)(s.p,{children:["You can ",(0,r.jsx)(s.a,{href:"https://commonmark.org/help/",children:"learn Markdown in 10 minutes"}),"."]})}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus uses modern tooling to help you create ",(0,r.jsx)(s.strong,{children:"interactive documentation"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://mdxjs.com/",children:"MDX"})})," compiler transforms ",(0,r.jsx)(s.strong,{children:"Markdown files to React components"}),", and allows you to use JSX in your Markdown content. This enables you to easily interleave React components within your content, and create delightful learning experiences."]}),"\n",(0,r.jsxs)(s.admonition,{title:"Use the MDX Playground",type:"tip",children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"})})," is your new best friend!"]}),(0,r.jsx)(s.p,{children:"It is a very helpful debugging tool that shows how the MDX compiler transforms Markdown to React."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Options"}),": select the right format (MDX or CommonMark) and the following plugins Docusaurus uses: ",(0,r.jsx)(s.code,{children:"remark-gfm"}),", ",(0,r.jsx)(s.code,{children:"remark-directive"}),", ",(0,r.jsx)(s.code,{children:"rehype-raw"}),"."]})]}),"\n",(0,r.jsx)(s.h2,{id:"mdx-vs-commonmark",children:"MDX vs. CommonMark"}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus compiles both ",(0,r.jsx)(s.code,{children:".md"})," and ",(0,r.jsx)(s.code,{children:".mdx"})," files to React components using the MDX compiler, but ",(0,r.jsx)(s.strong,{children:"the syntax can be interpreted differently"})," depending on your settings."]}),"\n",(0,r.jsxs)(s.p,{children:["The MDX compiler supports ",(0,r.jsx)(s.a,{href:"https://mdxjs.com/packages/mdx/#optionsformat",children:"2 formats"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.a,{href:"https://mdxjs.com/docs/what-is-mdx/",children:"MDX format"}),": a powerful parser allowing the usage of JSX"]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.a,{href:"https://commonmark.org/",children:"CommonMark format"}),": a standard-compliant Markdown parser that does not allow the usage of JSX"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["By default, Docusaurus v3 uses the MDX format for all files (including ",(0,r.jsx)(s.code,{children:".md"})," files) for historical reasons."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"We changed this by setting"})," ",(0,r.jsx)(s.code,{children:"siteConfig.markdown.format: 'detect'"}),"."]}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsxs)(s.mdxAdmonitionTitle,{children:["what is ",(0,r.jsx)(s.code,{children:"siteConfig.markdown.format: 'detect'"})]}),(0,r.jsx)(s.p,{children:"The appropriate format will be selected automatically, based on file extensions:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:".md"})," files will use the CommonMark format"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:".mdx"})," files will use the MDX format"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"standard-features",children:"Standard features"}),"\n",(0,r.jsx)(s.p,{children:"Markdown is a syntax that enables you to write formatted content in a readable syntax."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"### My Doc Section\n\nHello world message with some **bold** text, some _italic_ text, and a [link](/)\n\n![img alt](/img/docusaurus.png)\n"})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h3",{children:"My Doc Section"}),(0,r.jsxs)(s.p,{children:["Hello world message with some ",(0,r.jsx)(s.strong,{children:"bold"})," text, some ",(0,r.jsx)(s.em,{children:"italic"})," text and a ",(0,r.jsx)(s.a,{href:"/",children:"link"})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"img alt",src:n(7193).Z+"",width:"200",height:"200"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Markdown is declarative"}),(0,r.jsxs)(s.p,{children:["Some may assume a 1-1 correlation between Markdown and HTML, e.g., ",(0,r.jsx)(s.code,{children:"![Preview](/img/docusaurus.png)"})," will always become ",(0,r.jsx)(s.code,{children:'<img src="/img/docusaurus.png" alt="Preview" />'}),", as-is. However, ",(0,r.jsx)(s.em,{children:"that is not the case"}),"."]}),(0,r.jsxs)(s.p,{children:["The Markdown syntax ",(0,r.jsx)(s.code,{children:"![message](url)"})," only declaratively tells Docusaurus that an image needs to be inserted here, but we may do other things like transforming a file path to URL path, so the generated markup may differ from the output of other Markdown renderers, or a na\xefve hand-transcription to the equivalent JSX/HTML code."]}),(0,r.jsxs)(s.p,{children:["In general, you should only assume the ",(0,r.jsx)(s.em,{children:"semantics"})," of the markup (",(0,r.jsx)(s.code,{children:"```"})," fences become code blocks; ",(0,r.jsx)(s.code,{children:">"})," becomes ",(0,r.jsx)(s.a,{href:"#quotes",children:"quotes"}),", etc.), but not the actual compiled output."]})]}),"\n",(0,r.jsx)(s.h2,{id:"front-matter",children:"Front matter"}),"\n",(0,r.jsx)(s.p,{children:"Front matter is used to add metadata to your Markdown file. All content plugins have their own front matter schema, and use the front matter to enrich the default metadata inferred from the content or other configuration."}),"\n",(0,r.jsxs)(s.p,{children:["Front matter is provided at the very top of the file, enclosed by three dashes ",(0,r.jsx)(s.code,{children:"---"}),". The content is parsed as ",(0,r.jsx)(s.a,{href:"https://yaml.org/spec/1.2.2/",children:"YAML"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"---\ntitle: My Doc Title\nmore_data:\n  - Can be provided\n  - as: objects\n    or: arrays\n---\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"The API documentation of each official plugin lists the supported attributes:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Docs front matter"}),"\n",(0,r.jsx)(s.li,{children:"Blog front matter"}),"\n",(0,r.jsx)(s.li,{children:"Pages front matter"}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"quotes",children:"Quotes"}),"\n",(0,r.jsx)(s.p,{children:"Markdown quotes are beautifully styled:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"> Easy to maintain open source documentation websites.\n>\n> \u2014 Docusaurus\n"})}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Easy to maintain open source documentation websites."}),"\n",(0,r.jsx)(s.p,{children:"\u2014 Docusaurus"}),"\n"]})}),"\n",(0,r.jsx)(s.h2,{id:"details",children:"Details"}),"\n",(0,r.jsxs)(s.p,{children:["Markdown can embed HTML elements, and ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",children:(0,r.jsx)(s.code,{children:"details"})})," HTML elements are beautifully styled:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"### Details element example\n\n<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n    <br/>\n    <details>\n      <summary>\n        Nested toggle! Some surprise inside...\n      </summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n"})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h3",{children:"Details element example"}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Toggle me!"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"This is the detailed content"}),(0,r.jsx)("br",{}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.p,{children:"Nested toggle! Some surprise inside..."})}),(0,r.jsx)("div",{children:"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1007:(e,s,n)=>{n.d(s,{Z:()=>i});n(7294);var r=n(6010);const t={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var o=n(5893);function i(e){let{children:s,minHeight:n,url:i="http://localhost:3000",style:d,bodyStyle:a}=e;return(0,o.jsxs)("div",{className:t.browserWindow,style:{...d,minHeight:n},children:[(0,o.jsxs)("div",{className:t.browserWindowHeader,children:[(0,o.jsxs)("div",{className:t.buttons,children:[(0,o.jsx)("span",{className:t.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:t.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:t.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:(0,r.Z)(t.browserWindowAddressBar,"text--truncate"),children:i}),(0,o.jsx)("div",{className:t.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:t.bar}),(0,o.jsx)("span",{className:t.bar}),(0,o.jsx)("span",{className:t.bar})]})})]}),(0,o.jsx)("div",{className:t.browserWindowBody,style:a,children:s})]})}},6010:(e,s,n)=>{function r(e){var s,n,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(n=r(e[s]))&&(t&&(t+=" "),t+=n);else for(s in e)e[s]&&(t&&(t+=" "),t+=s);return t}n.d(s,{Z:()=>t});const t=function(){for(var e,s,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(s=r(e))&&(t&&(t+=" "),t+=s);return t}},7193:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);
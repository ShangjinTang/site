"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5286],{56883:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=s(74848),r=s(28453),i=s(11470),l=s(19365),d=s(8787);const c={sidebar_position:3,id:"pages"},a="\ud83d\udce6 plugin-content-pages",o={id:"docusaurus-mdx/plugin-contents/pages",title:"\ud83d\udce6 plugin-content-pages",description:"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.",source:"@site/docs/docusaurus-mdx/plugin-contents/pages.mdx",sourceDirName:"docusaurus-mdx/plugin-contents",slug:"/docusaurus-mdx/plugin-contents/pages",permalink:"/docs/docusaurus-mdx/plugin-contents/pages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"pages"},sidebar:"docusaurusSidebar",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docs/docusaurus-mdx/plugin-contents/blog"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}];function x(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-plugin-content-pages",children:"\ud83d\udce6 plugin-content-pages"})}),"\n","\n",(0,t.jsxs)(n.p,{children:["The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,t.jsx)(n.code,{children:"creating pages"})," functionality."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(l.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-content-pages\n"})})}),(0,t.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-content-pages\n"})})}),(0,t.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-content-pages\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If you use the preset ",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,t.jsx)(n.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,t.jsx)(d.A,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"path"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'src/pages'"})}),(0,t.jsx)(n.td,{children:"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"routeBasePath"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'/'"})}),(0,t.jsxs)(n.td,{children:["URL route for the pages section of your site. ",(0,t.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"include"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"['**/*.{js,jsx,ts,tsx,md,mdx}']"})}),(0,t.jsx)(n.td,{children:"Matching files will be included and processed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"exclude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"See example configuration"})}),(0,t.jsx)(n.td,{children:"No route will be created for matching files."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mdxPageComponent"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'@theme/MDXPage'"})}),(0,t.jsx)(n.td,{children:"Component used by each MDX page."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"remarkPlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"Remark plugins passed to MDX."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rehypePlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"Rehype plugins passed to MDX."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"beforeDefaultRehypePlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."})]})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,t.jsx)(i.A,{groupId:"code-examples",children:(0,t.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"config-tabs",children:"// Preset Options: pages\n// Plugin Options: @docusaurus/plugin-content-pages\n\nconst config = {\n  path: 'src/pages',\n  routeBasePath: '',\n  include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  mdxPageComponent: '@theme/MDXPage',\n  remarkPlugins: [require('./my-remark-plugin')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n};\n"})})})}),"\n",(0,t.jsx)(n.h2,{id:"markdown-front-matter",children:"Markdown front matter"}),"\n",(0,t.jsxs)(n.p,{children:["Markdown pages can use the following Markdown front matter metadata fields, enclosed by a line ",(0,t.jsx)(n.code,{children:"---"})," on either side."]}),"\n",(0,t.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,t.jsx)(d.A,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"title"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Markdown title"}),(0,t.jsx)(n.td,{children:"The blog post title."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"description"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The first line of Markdown content"}),(0,t.jsxs)(n.td,{children:["The description of your page, which will become the ",(0,t.jsx)(n.code,{children:'<meta name="description" content="..."/>'})," and ",(0,t.jsx)(n.code,{children:'<meta property="og:description" content="..."/>'})," in ",(0,t.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keywords"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsxs)(n.td,{children:["Keywords meta tag, which will become the ",(0,t.jsx)(n.code,{children:'<meta name="keywords" content="keyword1,keyword2,..."/>'})," in ",(0,t.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"image"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Cover or thumbnail image that will be used when displaying the link to your post."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"wrapperClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Class name to be added to the wrapper element to allow targeting specific page content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hide_table_of_contents"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether to hide the table of contents to the right."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"draft"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Draft pages will only be available during development."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"unlisted"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:'Unlisted pages will be available in both development and production. They will be "hidden" in production, not indexed, excluded from sitemaps, and can only be accessed by users having a direct link.'})]})]})]})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"---\ntitle: Markdown Page\ndescription: Markdown page SEO description\nwrapperClassName: markdown-page\nhide_table_of_contents: false\ndraft: true\n---\n\nMarkdown page content\n"})}),"\n",(0,t.jsx)(n.h2,{id:"i18n",children:"i18n"}),"\n",(0,t.jsx)(n.p,{children:"Read the i18n introduction first."}),"\n",(0,t.jsx)(n.h3,{id:"translation-files-location",children:"Translation files location"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Base path"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multi-instance path"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JSON files"}),": extracted with ",(0,t.jsx)(n.code,{children:"docusaurus write-translations"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Markdown files"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-file-system-structure",children:"Example file-system structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),r=s(34164),i=s(23104),l=s(56347),d=s(205),c=s(57485),a=s(31682),o=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[a,u]=p({queryString:s,groupId:r}),[j,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=a??j;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),r=d[s].value;r!==t&&(a(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},8787:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(96540),r=s(56347);const i={apiTable:"apiTable_e8hp"};var l=s(74848);function d(e,n){let{name:s,children:i}=e;const d=function(e){let n=e;for(;(0,t.isValidElement)(n);)[n]=t.Children.toArray(n.props.children);return n}(i),c=s?`${s}-${d}`:d,a=`#${c}`,o=(0,r.W6)();return(0,l.jsx)("tr",{id:c,tabIndex:0,ref:o.location.hash===a?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||o.push(a)},onKeyDown:e=>{"Enter"===e.key&&o.push(a)},children:i.props.children})}const c=t.forwardRef(d);function a(e){let{children:n,name:s}=e;const[r,d]=t.Children.toArray(n.props.children),a=(0,t.useRef)(null);(0,t.useEffect)((()=>{a.current?.focus()}),[a]);const o=t.Children.map(d.props.children,(e=>(0,l.jsx)(c,{name:s,ref:a,children:e})));return(0,l.jsxs)("table",{className:i.apiTable,children:[r,(0,l.jsx)("tbody",{children:o})]})}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
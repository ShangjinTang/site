"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4131],{97379:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=a(74848),r=a(28453),t=a(11470),s=a(19365);const d={},i="\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2",o={id:"modern-cpp/gdb-lldb/check-executable-and-libraries",title:"\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2",description:"\u5217\u51fa\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u4f9d\u8d56\u7684\u5171\u4eab\u5e93",source:"@site/docs/modern-cpp/01-gdb-lldb/07-check-executable-and-libraries.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/check-executable-and-libraries",permalink:"/site/docs/modern-cpp/gdb-lldb/check-executable-and-libraries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e",permalink:"/site/docs/modern-cpp/gdb-lldb/check-data-in-memory-address"},next:{title:"dump \u4fe1\u606f",permalink:"/site/docs/modern-cpp/gdb-lldb/image-dump"}},c={},u=[{value:"\u5217\u51fa\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u4f9d\u8d56\u7684\u5171\u4eab\u5e93",id:"\u5217\u51fa\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u4f9d\u8d56\u7684\u5171\u4eab\u5e93",level:3},{value:"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6\u6216\u4efb\u4f55\u5171\u4eab\u5e93\u4e2d\u539f\u59cb\u5730\u5740\u4fe1\u606f",id:"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6\u6216\u4efb\u4f55\u5171\u4eab\u5e93\u4e2d\u539f\u59cb\u5730\u5740\u4fe1\u606f",level:3},{value:"\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u67e5\u627e\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u51fd\u6570",id:"\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u67e5\u627e\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u51fd\u6570",level:3},{value:"\u67e5\u627e\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u884c\u4fe1\u606f",id:"\u67e5\u627e\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u884c\u4fe1\u606f",level:3},{value:"\u4ec5\u5728 <code>a.out</code> \u4e2d\u67e5\u627e\u5730\u5740\u4fe1\u606f",id:"\u4ec5\u5728-aout-\u4e2d\u67e5\u627e\u5730\u5740\u4fe1\u606f",level:3},{value:"\u6309\u540d\u79f0\u67e5\u627e\u7c7b\u578b <code>Point</code> \u7684\u4fe1\u606f",id:"\u6309\u540d\u79f0\u67e5\u627e\u7c7b\u578b-point-\u7684\u4fe1\u606f",level:3}];function b(e){const l={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.header,{children:(0,n.jsx)(l.h1,{id:"\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2",children:"\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2"})}),"\n",(0,n.jsx)(l.h3,{id:"\u5217\u51fa\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u4f9d\u8d56\u7684\u5171\u4eab\u5e93",children:"\u5217\u51fa\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u4f9d\u8d56\u7684\u5171\u4eab\u5e93"}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info shared\n"})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image list\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6\u6216\u4efb\u4f55\u5171\u4eab\u5e93\u4e2d\u539f\u59cb\u5730\u5740\u4fe1\u606f",children:"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6\u6216\u4efb\u4f55\u5171\u4eab\u5e93\u4e2d\u539f\u59cb\u5730\u5740\u4fe1\u606f"}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info symbol 0x1ec4\n"})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image lookup --address 0x1ec4\n(lldb) im loo -a 0x1ec4\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u67e5\u627e\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u51fd\u6570",children:"\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u67e5\u627e\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u51fd\u6570"}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info function <FUNC_REGEX>\n"})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"# This one finds debug symbols:\n\n(lldb) image lookup -r -n <FUNC_REGEX>\n\n# This one finds non-debug symbols:\n\n(lldb) image lookup -r -s <FUNC_REGEX>\n\n# Provide a list of binaries as arguments to limit the search.\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u67e5\u627e\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u884c\u4fe1\u606f",children:"\u67e5\u627e\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u884c\u4fe1\u606f"}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info line 0x1ec4\n"})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image lookup -v --address 0x1ec4\n\n# look for the LineEntry line, which will have the full source path and line range information.\n"})})})]}),"\n",(0,n.jsxs)(l.h3,{id:"\u4ec5\u5728-aout-\u4e2d\u67e5\u627e\u5730\u5740\u4fe1\u606f",children:["\u4ec5\u5728 ",(0,n.jsx)(l.code,{children:"a.out"})," \u4e2d\u67e5\u627e\u5730\u5740\u4fe1\u606f"]}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image lookup --address 0x1ec4 a.out\n(lldb) im loo -a 0x1ec4 a.out\n"})})})]}),"\n",(0,n.jsxs)(l.h3,{id:"\u6309\u540d\u79f0\u67e5\u627e\u7c7b\u578b-point-\u7684\u4fe1\u606f",children:["\u6309\u540d\u79f0\u67e5\u627e\u7c7b\u578b ",(0,n.jsx)(l.code,{children:"Point"})," \u7684\u4fe1\u606f"]}),"\n",(0,n.jsxs)(t.A,{groupId:"code-examples",children:[(0,n.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) ptype Point\n"})})}),(0,n.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image lookup --type Point\n(lldb) im loo -t Point\n"})})})]})]})}function h(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},19365:(e,l,a)=>{a.d(l,{A:()=>s});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var t=a(74848);function s(e){let{children:l,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:l})}},11470:(e,l,a)=>{a.d(l,{A:()=>A});var n=a(96540),r=a(34164),t=a(23104),s=a(56347),d=a(205),i=a(57485),o=a(31682),c=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:l,children:a}=e;return(0,n.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:a,attributes:n,default:r}}=e;return{value:l,label:a,attributes:n,default:r}}))}(a);return function(e){const l=(0,o.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,a])}function h(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function p(e){let{queryString:l=!1,groupId:a}=e;const r=(0,s.W6)(),t=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:l,groupId:a});return[(0,i.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const l=new URLSearchParams(r.location.search);l.set(t,e),r.replace({...r.location,search:l.toString()})}),[t,r])]}function m(e){const{defaultValue:l,queryString:a=!1,groupId:r}=e,t=b(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:t}))),[o,u]=p({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:l}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(l),[r,t]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),x=(()=>{const e=o??m;return h({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function v(e){let{className:l,block:a,selectedValue:n,selectValue:s,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=e=>{const l=e.currentTarget,a=i.indexOf(l),r=d[a].value;r!==n&&(o(l),s(r))},u=e=>{let l=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;l=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;l=i[a]??i[i.length-1];break}}l?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},l),children:d.map((e=>{let{value:l,label:a,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>i.push(e),onKeyDown:u,onClick:c,...t,className:(0,r.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":n===l}),children:a??l},l)}))})}function j(e){let{lazy:l,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==t})))})}function y(e){const l=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...l,...e}),(0,f.jsx)(j,{...l,...e})]})}function A(e){const l=(0,g.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(l))}},28453:(e,l,a)=>{a.d(l,{R:()=>s,x:()=>d});var n=a(96540);const r={},t=n.createContext(r);function s(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);
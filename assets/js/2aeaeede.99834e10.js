"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1939],{56984:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var n=t(85893),l=t(11151),r=t(74866),s=t(85162);const u={},o="dump \u4fe1\u606f",d={id:"modern-cpp/gdb-lldb/image-dump",title:"dump \u4fe1\u606f",description:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684 section \u4fe1\u606f",source:"@site/docs/modern-cpp/01-gdb-lldb/08-image-dump.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/image-dump",permalink:"/site/docs/modern-cpp/gdb-lldb/image-dump",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2",permalink:"/site/docs/modern-cpp/gdb-lldb/check-executable-and-libraries"},next:{title:"\u5176\u4ed6\u9879",permalink:"/site/docs/modern-cpp/gdb-lldb/misc"}},i={},c=[{value:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684 section \u4fe1\u606f",id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684-section-\u4fe1\u606f",level:2},{value:"dump \u53ef\u6267\u884c\u6587\u4ef6\u7684 section \u4fe1\u606f",id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u7684-section-\u4fe1\u606f",level:2},{value:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684 symtab \u7b26\u53f7",id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684-symtab-\u7b26\u53f7",level:2},{value:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6307\u5b9a\u5171\u4eab\u5e93\u7684 symtab \u7b26\u53f7",id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6307\u5b9a\u5171\u4eab\u5e93\u7684-symtab-\u7b26\u53f7",level:2}];function b(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dump-\u4fe1\u606f",children:"dump \u4fe1\u606f"}),"\n",(0,n.jsx)(a.h2,{id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684-section-\u4fe1\u606f",children:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684 section \u4fe1\u606f"}),"\n",(0,n.jsxs)(r.Z,{groupId:"code-examples",children:[(0,n.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) maintenance info sections\n"})})}),(0,n.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image dump sections\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u7684-section-\u4fe1\u606f",children:"dump \u53ef\u6267\u884c\u6587\u4ef6\u7684 section \u4fe1\u606f"}),"\n",(0,n.jsxs)(r.Z,{groupId:"code-examples",children:[(0,n.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image dump sections a.out\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684-symtab-\u7b26\u53f7",children:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6240\u6709\u5171\u4eab\u5e93\u7684 symtab \u7b26\u53f7"}),"\n",(0,n.jsxs)(r.Z,{groupId:"code-examples",children:[(0,n.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image dump symtab\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"dump-\u53ef\u6267\u884c\u6587\u4ef6\u548c\u6307\u5b9a\u5171\u4eab\u5e93\u7684-symtab-\u7b26\u53f7",children:"dump \u53ef\u6267\u884c\u6587\u4ef6\u548c\u6307\u5b9a\u5171\u4eab\u5e93\u7684 symtab \u7b26\u53f7"}),"\n",(0,n.jsxs)(r.Z,{groupId:"code-examples",children:[(0,n.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) image dump symtab a.out liba.so\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>s});t(67294);var n=t(36905);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:a,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(67294),l=t(36905),r=t(12466),s=t(16550),u=t(20469),o=t(91980),d=t(67392),i=t(50012);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}(t);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:t}=e;const l=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(l.location.search);a.set(r,e),l.replace({...l.location,search:a.toString()})}),[r,l])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,r=b(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[d,c]=p({queryString:t,groupId:l}),[h,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,i.Nk)(t);return[l,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),f=(()=>{const e=d??h;return m({value:e,tabValues:r})?e:null})();(0,u.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),i=e=>{const a=e.currentTarget,t=o.indexOf(a),l=u[t].value;l!==n&&(d(a),s(l))},c=e=>{let a=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a),children:u.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:c,onClick:i,...r,className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function y(e){const a=h(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...a}),(0,v.jsx)(j,{...e,...a})]})}function w(e){const a=(0,g.Z)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>u,a:()=>s});var n=t(67294);const l={},r=n.createContext(l);function s(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function u(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);
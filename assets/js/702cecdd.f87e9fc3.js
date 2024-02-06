"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8629],{91239:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=n(85893),r=n(11151),t=n(74866),s=n(85162);const d={},i="\u5176\u4ed6\u9879",o={id:"modern-cpp/gdb-lldb/misc",title:"\u5176\u4ed6\u9879",description:"\u91cd\u65b0\u6620\u5c04\u8c03\u8bd5\u5bf9\u8bdd\u7684\u6e90\u6587\u4ef6\u8def\u5f84",source:"@site/docs/modern-cpp/01-gdb-lldb/09-misc.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/misc",permalink:"/site/docs/modern-cpp/gdb-lldb/misc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"dump \u4fe1\u606f",permalink:"/site/docs/modern-cpp/gdb-lldb/image-dump"}},c={},u=[{value:"\u91cd\u65b0\u6620\u5c04\u8c03\u8bd5\u5bf9\u8bdd\u7684\u6e90\u6587\u4ef6\u8def\u5f84",id:"\u91cd\u65b0\u6620\u5c04\u8c03\u8bd5\u5bf9\u8bdd\u7684\u6e90\u6587\u4ef6\u8def\u5f84",level:2},{value:"\u8c03\u8bd5\u670d\u52a1\u5668\u8bbe\u7f6e",id:"\u8c03\u8bd5\u670d\u52a1\u5668\u8bbe\u7f6e",level:2},{value:"\u8fde\u63a5\u5230\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u5668",id:"\u8fde\u63a5\u5230\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u5668",level:3},{value:"\u8fde\u63a5\u5230\u672c\u5730\u8c03\u8bd5\u670d\u52a1\u5668",id:"\u8fde\u63a5\u5230\u672c\u5730\u8c03\u8bd5\u670d\u52a1\u5668",level:3},{value:"\u4e34\u65f6\u53d8\u91cf\u548c\u6253\u5370",id:"\u4e34\u65f6\u53d8\u91cf\u548c\u6253\u5370",level:2},{value:"\u521b\u5efa\u4e34\u65f6\u53d8\u91cf\u5e76\u8d4b\u503c",id:"\u521b\u5efa\u4e34\u65f6\u53d8\u91cf\u5e76\u8d4b\u503c",level:3},{value:"\u5728\u5f53\u524d\u5e27\u4e2d\u7684\u8ba1\u7b97\u8868\u8fbe\u5f0f",id:"\u5728\u5f53\u524d\u5e27\u4e2d\u7684\u8ba1\u7b97\u8868\u8fbe\u5f0f",level:3},{value:"\u6253\u5370\u4fe1\u606f\u5230\u5c4f\u5e55",id:"\u6253\u5370\u4fe1\u606f\u5230\u5c4f\u5e55",level:3}];function b(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"\u5176\u4ed6\u9879",children:"\u5176\u4ed6\u9879"}),"\n",(0,a.jsx)(l.h2,{id:"\u91cd\u65b0\u6620\u5c04\u8c03\u8bd5\u5bf9\u8bdd\u7684\u6e90\u6587\u4ef6\u8def\u5f84",children:"\u91cd\u65b0\u6620\u5c04\u8c03\u8bd5\u5bf9\u8bdd\u7684\u6e90\u6587\u4ef6\u8def\u5f84"}),"\n",(0,a.jsx)(l.p,{children:"\u5982\u679c\u60a8\u7684\u6e90\u6587\u4ef6\u4e0d\u518d\u4f4d\u4e8e\u4e0e\u7a0b\u5e8f\u6784\u5efa\u65f6\u76f8\u540c\u7684\u4f4d\u7f6e\uff08\u4f8b\u5982\uff0c\u5982\u679c\u7a0b\u5e8f\u662f\u5728\u53e6\u5916\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u6784\u5efa\u7684\uff09\uff0c\u60a8\u9700\u8981\u544a\u8bc9\u8c03\u8bd5\u5668\u5982\u4f55\u5728\u672c\u5730\u6587\u4ef6\u8def\u5f84\u4e2d\u67e5\u627e\u6e90\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6784\u5efa\u7cfb\u7edf\u7684\u6587\u4ef6\u8def\u5f84\u3002"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) set pathname-substitutions /buildbot/path /my/path\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) settings set target.source-map /buildbot/path /my/path\n"})})})]}),"\n",(0,a.jsx)(l.p,{children:"\u5728 gdb \u4e2d\uff0c\u53ef\u4ee5\u63d0\u4f9b\u6587\u4ef6\u76ee\u5f55\u6765\u641c\u7d22\u6e90\u6587\u4ef6\u3002"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) directory /my/path\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}'})})})]}),"\n",(0,a.jsx)(l.h2,{id:"\u8c03\u8bd5\u670d\u52a1\u5668\u8bbe\u7f6e",children:"\u8c03\u8bd5\u670d\u52a1\u5668\u8bbe\u7f6e"}),"\n",(0,a.jsx)(l.h3,{id:"\u8fde\u63a5\u5230\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u5668",children:"\u8fde\u63a5\u5230\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u5668"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) target remote eorgadd:8000\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) gdb-remote eorgadd:8000\n"})})})]}),"\n",(0,a.jsx)(l.h3,{id:"\u8fde\u63a5\u5230\u672c\u5730\u8c03\u8bd5\u670d\u52a1\u5668",children:"\u8fde\u63a5\u5230\u672c\u5730\u8c03\u8bd5\u670d\u52a1\u5668"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) target remote localhost:8000\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) gdb-remote 8000\n"})})})]}),"\n",(0,a.jsx)(l.h2,{id:"\u4e34\u65f6\u53d8\u91cf\u548c\u6253\u5370",children:"\u4e34\u65f6\u53d8\u91cf\u548c\u6253\u5370"}),"\n",(0,a.jsx)(l.h3,{id:"\u521b\u5efa\u4e34\u65f6\u53d8\u91cf\u5e76\u8d4b\u503c",children:"\u521b\u5efa\u4e34\u65f6\u53d8\u91cf\u5e76\u8d4b\u503c"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) set $foo = 5\n(gdb) set variable $foo = 5\n\n# or using the print command\n\n(gdb) print $foo = 5\n\n# or using the call command\n\n(gdb) call $foo = 5\n\n# and if you want to specify the type of the variable:\n\n(gdb) set $foo = (unsigned int) 5\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"# In lldb you evaluate a variable declaration expression as you would write it in C:\n\n(lldb) expr unsigned int $foo = 5\n"})})})]}),"\n",(0,a.jsx)(l.h3,{id:"\u5728\u5f53\u524d\u5e27\u4e2d\u7684\u8ba1\u7b97\u8868\u8fbe\u5f0f",children:"\u5728\u5f53\u524d\u5e27\u4e2d\u7684\u8ba1\u7b97\u8868\u8fbe\u5f0f"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:'(gdb) print (int) printf ("Print nine: %d.", 4 + 5)\n\n# or if you don\u2019t want to see void returns:\n\n(gdb) call (int) printf ("Print nine: %d.", 4 + 5)\n'})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:'(lldb) expr (int) printf ("Print nine: %d.", 4 + 5)\n\n# or using the print alias:\n\n(lldb) print (int) printf ("Print nine: %d.", 4 + 5)\n'})})})]}),"\n",(0,a.jsx)(l.h3,{id:"\u6253\u5370\u4fe1\u606f\u5230\u5c4f\u5e55",children:"\u6253\u5370\u4fe1\u606f\u5230\u5c4f\u5e55"}),"\n",(0,a.jsxs)(t.Z,{groupId:"code-examples",children:[(0,a.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) echo Here is some text\\n\n"})})}),(0,a.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:'(lldb) script print("Here is some text")\n'})})})]})]})}function h(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},85162:(e,l,n)=>{n.d(l,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var t=n(85893);function s(e){let{children:l,hidden:n,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:l})}},74866:(e,l,n)=>{n.d(l,{Z:()=>Z});var a=n(67294),r=n(36905),t=n(12466),s=n(16550),d=n(20469),i=n(91980),o=n(67392),c=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:l,children:n}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:n,attributes:a,default:r}}=e;return{value:l,label:n,attributes:a,default:r}}))}(n);return function(e){const l=(0,o.l)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function h(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function p(e){let{queryString:l=!1,groupId:n}=e;const r=(0,s.k6)(),t=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,i._X)(t),(0,a.useCallback)((e=>{if(!t)return;const l=new URLSearchParams(r.location.search);l.set(t,e),r.replace({...r.location,search:l.toString()})}),[t,r])]}function g(e){const{defaultValue:l,queryString:n=!1,groupId:r}=e,t=b(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:t}))),[o,u]=p({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[r,t]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),x=(()=>{const e=o??g;return h({value:e,tabValues:t})?e:null})();(0,d.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){let{className:l,block:n,selectedValue:a,selectValue:s,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const l=e.currentTarget,n=i.indexOf(l),r=d[n].value;r!==a&&(o(l),s(r))},u=e=>{let l=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;l=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;l=i[n]??i[i.length-1];break}}l?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},l),children:d.map((e=>{let{value:l,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>i.push(e),onKeyDown:u,onClick:c,...t,className:(0,r.Z)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":a===l}),children:n??l},l)}))})}function j(e){let{lazy:l,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function y(e){const l=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...l}),(0,f.jsx)(j,{...e,...l})]})}function Z(e){const l=(0,m.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(l))}},11151:(e,l,n)=>{n.d(l,{Z:()=>d,a:()=>s});var a=n(67294);const r={},t=a.createContext(r);function s(e){const l=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:l},e.children)}}}]);
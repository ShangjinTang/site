"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1487],{76549:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var r=a(85893),n=a(11151),t=a(74866),s=a(85162);const d={},c="\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668",i={id:"modern-cpp/gdb-lldb/check-variables-and-registers",title:"\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668",description:"\u68c0\u67e5\u53d8\u91cf",source:"@site/docs/modern-cpp/01-gdb-lldb/05-check-variables-and-registers.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/check-variables-and-registers",permalink:"/docs/modern-cpp/gdb-lldb/check-variables-and-registers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u56de\u6eaf\u548c\u53cd\u6c47\u7f16",permalink:"/docs/modern-cpp/gdb-lldb/backtrace-and-disassemble"},next:{title:"\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e",permalink:"/docs/modern-cpp/gdb-lldb/check-data-in-memory-address"}},o={},u=[{value:"\u68c0\u67e5\u53d8\u91cf",id:"\u68c0\u67e5\u53d8\u91cf",level:2},{value:"\u663e\u793a\u53d8\u91cf\u7684\u5185\u5bb9",id:"\u663e\u793a\u53d8\u91cf\u7684\u5185\u5bb9",level:3},{value:"\u663e\u793a\u5f53\u524d\u6808\u5e27\u7684\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf",id:"\u663e\u793a\u5f53\u524d\u6808\u5e27\u7684\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf",level:3},{value:"\u68c0\u67e5\u6570\u7ec4",id:"\u68c0\u67e5\u6570\u7ec4",level:3},{value:"\u68c0\u67e5\u5bc4\u5b58\u5668",id:"\u68c0\u67e5\u5bc4\u5b58\u5668",level:2},{value:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u901a\u7528\u5bc4\u5b58\u5668",id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u901a\u7528\u5bc4\u5b58\u5668",level:3},{value:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u6240\u6709\u5bc4\u5b58\u5668",id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u6240\u6709\u5bc4\u5b58\u5668",level:3},{value:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c",id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c",level:3},{value:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c\uff0c\u683c\u5f0f\u4e3a\u4e8c\u8fdb\u5236",id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c\u683c\u5f0f\u4e3a\u4e8c\u8fdb\u5236",level:3},{value:"\u6253\u5370\u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u52a8\u6001\u7c7b\u578b\uff08C++\uff09",id:"\u6253\u5370\u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u52a8\u6001\u7c7b\u578bc",level:2}];function b(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.h1,{id:"\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668",children:"\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668"}),"\n",(0,r.jsx)(l.h2,{id:"\u68c0\u67e5\u53d8\u91cf",children:"\u68c0\u67e5\u53d8\u91cf"}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u53d8\u91cf\u7684\u5185\u5bb9",children:"\u663e\u793a\u53d8\u91cf\u7684\u5185\u5bb9"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) p bar\n(gdb) p/x bar\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) p bar\n(lldb) p/x bar\n"})})})]}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u5f53\u524d\u6808\u5e27\u7684\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf",children:"\u663e\u793a\u5f53\u524d\u6808\u5e27\u7684\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info args\n(gdb) info locals\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) frame variable\n(lldb) fr v\n\n# add '-no-args' to disable args\n\n(lldb) frame variable --no-args\n(lldb) fr v -a\n"})})})]}),"\n",(0,r.jsx)(l.h3,{id:"\u68c0\u67e5\u6570\u7ec4",children:"\u68c0\u67e5\u6570\u7ec4"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) p *ptr@10\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) parray 10 ptr\n"})})})]}),"\n",(0,r.jsx)(l.h2,{id:"\u68c0\u67e5\u5bc4\u5b58\u5668",children:"\u68c0\u67e5\u5bc4\u5b58\u5668"}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u901a\u7528\u5bc4\u5b58\u5668",children:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u901a\u7528\u5bc4\u5b58\u5668"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info registers\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) register read\n"})})})]}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u6240\u6709\u5bc4\u5b58\u5668",children:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u7684\u6240\u6709\u5bc4\u5b58\u5668"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info all-registers\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) register read --all\n(lldb) re r -a\n"})})})]}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c",children:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info all-registers rax rsp rbp\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) register read rax rsp rbp\n"})})})]}),"\n",(0,r.jsx)(l.h3,{id:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c\u683c\u5f0f\u4e3a\u4e8c\u8fdb\u5236",children:"\u663e\u793a\u5f53\u524d\u7ebf\u7a0b\u4e2d\u6307\u5b9a\u5bc4\u5b58\u5668\u7684\u503c\uff0c\u683c\u5f0f\u4e3a\u4e8c\u8fdb\u5236"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) p/t $rax\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) register read --format binary rax\n(lldb) re r -f b rax\n\n# LLDB now supports the GDB shorthand format syntax but there can\u2019t be space after the command\n\n(lldb) register read/t rax\n(lldb) p/t $rax\n"})})})]}),"\n",(0,r.jsx)(l.h2,{id:"\u6253\u5370\u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u52a8\u6001\u7c7b\u578bc",children:"\u6253\u5370\u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u52a8\u6001\u7c7b\u578b\uff08C++\uff09"}),"\n",(0,r.jsxs)(t.Z,{groupId:"code-examples",children:[(0,r.jsx)(s.Z,{value:"gdb",label:"gdb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) set print object 1\n(gdb) p someCPPObjectPtrOrReference\n(Only works for C++ objects)\n"})})}),(0,r.jsx)(s.Z,{value:"lldb",label:"lldb",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) expr -d 1 -- [SomeClass returnAnObject]\n(lldb) expr -d 1 -- someCPPObjectPtrOrReference\n\n# or set dynamic type printing to be the default:\n\n(lldb) settings set target.prefer-dynamic run-target\n"})})})]})]})}function h(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},85162:(e,l,a)=>{a.d(l,{Z:()=>s});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var t=a(85893);function s(e){let{children:l,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,s),hidden:a,children:l})}},74866:(e,l,a)=>{a.d(l,{Z:()=>Z});var r=a(67294),n=a(36905),t=a(12466),s=a(16550),d=a(20469),c=a(91980),i=a(67392),o=a(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:l,children:a}=e;return(0,r.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:a,attributes:r,default:n}}=e;return{value:l,label:a,attributes:r,default:n}}))}(a);return function(e){const l=(0,i.l)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,a])}function h(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function g(e){let{queryString:l=!1,groupId:a}=e;const n=(0,s.k6)(),t=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:l,groupId:a});return[(0,c._X)(t),(0,r.useCallback)((e=>{if(!t)return;const l=new URLSearchParams(n.location.search);l.set(t,e),n.replace({...n.location,search:l.toString()})}),[t,n])]}function p(e){const{defaultValue:l,queryString:a=!1,groupId:n}=e,t=b(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:t}))),[i,u]=g({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:l}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(l),[n,t]=(0,o.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:n}),x=(()=>{const e=i??p;return h({value:e,tabValues:t})?e:null})();(0,d.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=a(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function f(e){let{className:l,block:a,selectedValue:r,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,t.o5)(),o=e=>{const l=e.currentTarget,a=c.indexOf(l),n=d[a].value;n!==r&&(i(l),s(n))},u=e=>{let l=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;l=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;l=c[a]??c[c.length-1];break}}l?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},l),children:d.map((e=>{let{value:l,label:a,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===l?0:-1,"aria-selected":r===l,ref:e=>c.push(e),onKeyDown:u,onClick:o,...t,className:(0,n.Z)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":r===l}),children:a??l},l)}))})}function j(e){let{lazy:l,children:a,selectedValue:n}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,l)=>(0,r.cloneElement)(e,{key:l,hidden:e.props.value!==n})))})}function y(e){const l=p(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(f,{...e,...l}),(0,v.jsx)(j,{...e,...l})]})}function Z(e){const l=(0,m.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(l))}},11151:(e,l,a)=>{a.d(l,{Z:()=>d,a:()=>s});var r=a(67294);const n={},t=r.createContext(n);function s(e){const l=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:l},e.children)}}}]);
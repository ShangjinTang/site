"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3e3],{56090:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>b,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=a(85893),r=a(11151),s=a(74866),t=a(85162);const d={},i="\u65ad\u70b9\u548c\u76d1\u63a7\u70b9",c={id:"modern-cpp/gdb-lldb/breakpoints-and-watchpoints",title:"\u65ad\u70b9\u548c\u76d1\u63a7\u70b9",description:"\u65ad\u70b9\uff08breakpoint\uff09",source:"@site/docs/modern-cpp/01-gdb-lldb/02-breakpoints-and-watchpoints.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/breakpoints-and-watchpoints",permalink:"/site/docs/modern-cpp/gdb-lldb/breakpoints-and-watchpoints",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u542f\u52a8\u8c03\u8bd5",permalink:"/site/docs/modern-cpp/gdb-lldb/start-and-attach"},next:{title:"\u5728\u8c03\u8bd5\u5668\u5185\u8df3\u8f6c",permalink:"/site/docs/modern-cpp/gdb-lldb/jump-in-debuggers"}},b={},o=[{value:"\u65ad\u70b9\uff08breakpoint\uff09",id:"\u65ad\u70b9breakpoint",level:2},{value:"\u6839\u636e\u51fd\u6570\u540d\u6216\u8005\u65b9\u6cd5\u540d\u8bbe\u7f6e\u65ad\u70b9",id:"\u6839\u636e\u51fd\u6570\u540d\u6216\u8005\u65b9\u6cd5\u540d\u8bbe\u7f6e\u65ad\u70b9",level:3},{value:"\u6839\u636e\u6e90\u6587\u4ef6\u884c\u53f7\u8bbe\u7f6e\u65ad\u70b9",id:"\u6839\u636e\u6e90\u6587\u4ef6\u884c\u53f7\u8bbe\u7f6e\u65ad\u70b9",level:3},{value:"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9",id:"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9",level:3},{value:"\u5220\u9664\u67d0\u4e2a\u65ad\u70b9",id:"\u5220\u9664\u67d0\u4e2a\u65ad\u70b9",level:3},{value:"\u7981\u7528/\u542f\u7528\u65ad\u70b9",id:"\u7981\u7528\u542f\u7528\u65ad\u70b9",level:3},{value:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u65ad\u70b9",id:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u65ad\u70b9",level:3},{value:"\u5217\u51fa\u6240\u6709\u65ad\u70b9",id:"\u5217\u51fa\u6240\u6709\u65ad\u70b9",level:3},{value:"\u76d1\u63a7\u70b9\uff08watchpoint\uff09",id:"\u76d1\u63a7\u70b9watchpoint",level:2},{value:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u67d0\u4e2a\u53d8\u91cf\u7684\u503c",id:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u67d0\u4e2a\u53d8\u91cf\u7684\u503c",level:3},{value:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u7684\u67d0\u5757\u5185\u5b58",id:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u7684\u67d0\u5757\u5185\u5b58",level:3},{value:"\u8bbe\u7f6e\u76d1\u63a7\u7684\u6761\u4ef6",id:"\u8bbe\u7f6e\u76d1\u63a7\u7684\u6761\u4ef6",level:3},{value:"\u5220\u9664\u76d1\u63a7\u70b9",id:"\u5220\u9664\u76d1\u63a7\u70b9",level:3},{value:"\u5217\u51fa\u6240\u6709\u7684\u76d1\u63a7\u70b9",id:"\u5217\u51fa\u6240\u6709\u7684\u76d1\u63a7\u70b9",level:3}];function u(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"\u65ad\u70b9\u548c\u76d1\u63a7\u70b9",children:"\u65ad\u70b9\u548c\u76d1\u63a7\u70b9"}),"\n",(0,n.jsx)(l.h2,{id:"\u65ad\u70b9breakpoint",children:"\u65ad\u70b9\uff08breakpoint\uff09"}),"\n",(0,n.jsx)(l.h3,{id:"\u6839\u636e\u51fd\u6570\u540d\u6216\u8005\u65b9\u6cd5\u540d\u8bbe\u7f6e\u65ad\u70b9",children:"\u6839\u636e\u51fd\u6570\u540d\u6216\u8005\u65b9\u6cd5\u540d\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) break main\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint set --name main\n(lldb) br s -n main\n(lldb) b main\n\n# or breakpoint on C++ method:\n\n(lldb) breakpoint set --method main\n(lldb) br s -M main\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u6839\u636e\u6e90\u6587\u4ef6\u884c\u53f7\u8bbe\u7f6e\u65ad\u70b9",children:"\u6839\u636e\u6e90\u6587\u4ef6\u884c\u53f7\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) break test.c:12\n(gdb) b test.c:12\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint set --file test.c --line 12\n(lldb) br s -f test.c -l 12\n(lldb) b test.c:12\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9",children:"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:'(gdb) break foo if strcmp(y,"hello") == 0\n'})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint set --name foo --condition '(int)strcmp(y,\"hello\") == 0'\n(lldb) br s -n foo -c '(int)strcmp(y,\"hello\") == 0'\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u5220\u9664\u67d0\u4e2a\u65ad\u70b9",children:"\u5220\u9664\u67d0\u4e2a\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) delete 1\n\n# or delete all breakpoints at current line\n\n(gdb) clear\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint delete 1\n(lldb) br del 1\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u7981\u7528\u542f\u7528\u65ad\u70b9",children:"\u7981\u7528/\u542f\u7528\u65ad\u70b9"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"\u7981\u7528\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) disable 1\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint disable 1\n(lldb) br dis 1\n"})})})]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"\u542f\u7528\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) enable 1\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint enable 1\n(lldb) br en 1\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h3,{id:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u65ad\u70b9",children:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u51fd\u6570\uff0c\u6765\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) rbreak [REGULAR EXPRESSION]\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint set --func-regex [REGULAR EXPRESSION]\n(lldb) br s -r [REGULAR EXPRESSION]\n"})})})]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6e90\u6587\u4ef6\u5185\u5bb9\uff0c\u6765\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) shell grep -e -n [REGULAR EXPRESSION] [SOURCE FILE]\n(gdb) break source-file:line-number\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint set --source-pattern [REGULAR EXPRESSION] --file [SOURCE FILE]\n(lldb) br s -p [REGULAR EXPRESSION] -f [SOURCE FILE]\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h3,{id:"\u5217\u51fa\u6240\u6709\u65ad\u70b9",children:"\u5217\u51fa\u6240\u6709\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info break\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) breakpoint list\n(lldb) br l\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"\u76d1\u63a7\u70b9watchpoint",children:"\u76d1\u63a7\u70b9\uff08watchpoint\uff09"}),"\n",(0,n.jsx)(l.h3,{id:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u67d0\u4e2a\u53d8\u91cf\u7684\u503c",children:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u67d0\u4e2a\u53d8\u91cf\u7684\u503c"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) watch global_var\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) watchpoint set variable global_var\n(lldb) wa s v global_var\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u7684\u67d0\u5757\u5185\u5b58",children:"\u76d1\u63a7\u8fdb\u7a0b\u4e2d\u7684\u67d0\u5757\u5185\u5b58"}),"\n",(0,n.jsxs)(l.p,{children:["\u5982\u679c\u672a\u6307\u5b9a ",(0,n.jsx)(l.code,{children:"-x byte_size"})," \uff0c\u5219\u8981\u76d1\u89c6\u7684\u533a\u57df\u7684\u5927\u5c0f\u9ed8\u8ba4\u4e3a\u6307\u9488\u5927\u5c0f\u3002"]}),"\n",(0,n.jsxs)(l.p,{children:["\u8be5\u547d\u4ee4\u91c7\u7528\u539f\u59cb\u8f93\u5165\uff0c\u8ba1\u7b97\u4e3a\u8868\u8fbe\u5f0f\uff0c\u8fd4\u56de\u6307\u5411\u533a\u57df\u5f00\u5934\u7684\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u4f4d\u4e8e ",(0,n.jsx)(l.code,{children:"--"})," \u9009\u9879\u7ec8\u6b62\u7b26\u4e4b\u540e\u3002"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) watch -location g_char_ptr\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) watchpoint set expression -- my_ptr\n(lldb) wa s e -- my_ptr\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u8bbe\u7f6e\u76d1\u63a7\u7684\u6761\u4ef6",children:"\u8bbe\u7f6e\u76d1\u63a7\u7684\u6761\u4ef6"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) watch set var global\n(lldb) watchpoint modify -c '(global==5)'\n(lldb) c\n...\n(lldb) bt\n* thread #1: tid = 0x1c03, 0x0000000100000ef5 a.out`modify + 21 at main.cpp:16, stop reason = watchpoint 1\nframe #0: 0x0000000100000ef5 a.out`modify + 21 at main.cpp:16\nframe #1: 0x0000000100000eac a.out`main + 108 at main.cpp:25\nframe #2: 0x00007fff8ac9c7e1 libdyld.dylib`start + 1\n(lldb) frame var global\n(int32_t) global = 5\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u5220\u9664\u76d1\u63a7\u70b9",children:"\u5220\u9664\u76d1\u63a7\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) delete 1\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) watchpoint delete 1\n(lldb) watch del 1\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u5217\u51fa\u6240\u6709\u7684\u76d1\u63a7\u70b9",children:"\u5217\u51fa\u6240\u6709\u7684\u76d1\u63a7\u70b9"}),"\n",(0,n.jsxs)(s.Z,{groupId:"code-examples",children:[(0,n.jsx)(t.Z,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) info break\n"})})}),(0,n.jsx)(t.Z,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) watchpoint list\n(lldb) watch l\n"})})})]})]})}function h(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},85162:(e,l,a)=>{a.d(l,{Z:()=>t});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function t(e){let{children:l,hidden:a,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,t),hidden:a,children:l})}},74866:(e,l,a)=>{a.d(l,{Z:()=>k});var n=a(67294),r=a(36905),s=a(12466),t=a(16550),d=a(20469),i=a(91980),c=a(67392),b=a(50012);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:l,children:a}=e;return(0,n.useMemo)((()=>{const e=l??function(e){return o(e).map((e=>{let{props:{value:l,label:a,attributes:n,default:r}}=e;return{value:l,label:a,attributes:n,default:r}}))}(a);return function(e){const l=(0,c.l)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,a])}function h(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function g(e){let{queryString:l=!1,groupId:a}=e;const r=(0,t.k6)(),s=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:l,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const l=new URLSearchParams(r.location.search);l.set(s,e),r.replace({...r.location,search:l.toString()})}),[s,r])]}function p(e){const{defaultValue:l,queryString:a=!1,groupId:r}=e,s=u(e),[t,i]=(0,n.useState)((()=>function(e){let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:s}))),[c,o]=g({queryString:a,groupId:r}),[p,x]=function(e){let{groupId:l}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(l),[r,s]=(0,b.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),m=(()=>{const e=c??p;return h({value:e,tabValues:s})?e:null})();(0,d.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),x(e)}),[o,x,s]),tabValues:s}}var x=a(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(85893);function v(e){let{className:l,block:a,selectedValue:n,selectValue:t,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),b=e=>{const l=e.currentTarget,a=i.indexOf(l),r=d[a].value;r!==n&&(c(l),t(r))},o=e=>{let l=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;l=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;l=i[a]??i[i.length-1];break}}l?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},l),children:d.map((e=>{let{value:l,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>i.push(e),onKeyDown:o,onClick:b,...s,className:(0,r.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===l}),children:a??l},l)}))})}function f(e){let{lazy:l,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function Z(e){const l=p(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...l}),(0,j.jsx)(f,{...e,...l})]})}function k(e){const l=(0,x.Z)();return(0,j.jsx)(Z,{...e,children:o(e.children)},String(l))}},11151:(e,l,a)=>{a.d(l,{Z:()=>d,a:()=>t});var n=a(67294);const r={},s=n.createContext(r);function t(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);
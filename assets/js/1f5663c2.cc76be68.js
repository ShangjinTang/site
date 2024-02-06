"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1304],{13355:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var d=s(85893),c=s(11151);const r={},i="GEF - GDB \u589e\u5f3a\u5de5\u5177",l={id:"modern-cpp/gdb-lldb/gef",title:"GEF - GDB \u589e\u5f3a\u5de5\u5177",description:"GEF \u662f\u5bf9 GDB \u7684\u589e\u5f3a\uff0c\u4f7f\u7528 Python API \u4e3a GDB \u63d0\u4f9b\u9644\u52a0\u529f\u80fd\uff0c\u5728\u52a8\u6001\u5206\u6790\u548c\u6f0f\u6d1e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u63d0\u4f9b\u66f4\u5bb9\u6613\u7406\u89e3\u7684\u4e8c\u8fdb\u5236\u5e03\u5c40\uff0c\u5e76\u4e14\u5b89\u88c5\u7b80\u5355\uff0c\u65e0\u5916\u90e8\u4f9d\u8d56\u3002",source:"@site/docs/modern-cpp/01-gdb-lldb/10-gef.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/gef",permalink:"/site/docs/modern-cpp/gdb-lldb/gef",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u5176\u4ed6\u9879",permalink:"/site/docs/modern-cpp/gdb-lldb/misc"}},t={},h=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"GEF \u547d\u4ee4",id:"gef-\u547d\u4ee4",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"gef---gdb-\u589e\u5f3a\u5de5\u5177",children:"GEF - GDB \u589e\u5f3a\u5de5\u5177"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://github.com/hugsy/gef",children:"GEF"})," \u662f\u5bf9 GDB \u7684\u589e\u5f3a\uff0c\u4f7f\u7528 Python API \u4e3a GDB \u63d0\u4f9b\u9644\u52a0\u529f\u80fd\uff0c\u5728\u52a8\u6001\u5206\u6790\u548c\u6f0f\u6d1e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u63d0\u4f9b\u66f4\u5bb9\u6613\u7406\u89e3\u7684\u4e8c\u8fdb\u5236\u5e03\u5c40\uff0c\u5e76\u4e14\u5b89\u88c5\u7b80\u5355\uff0c\u65e0\u5916\u90e8\u4f9d\u8d56\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u9664\u4e86 GEF \u5916\uff0c\u4e5f\u6709\u5176\u4ed6\u7684 GDB \u589e\u5f3a\u5de5\u5177\uff0c\u5982\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/pwndbg/pwndbg",children:"pwndbg"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/longld/peda",children:"peda"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/cs01/gdbgui",children:"gdbgui"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/cyrus-and/gdb-dashboard",children:"gdb-dashboard"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0d\u540c\u7684 GDB \u589e\u5f3a\u5de5\u5177\u53ef\u80fd\u6709\u51b2\u7a81\uff0c\u540c\u4e00\u65f6\u95f4\u53ea\u5efa\u8bae\u5b89\u88c5\u4e00\u79cd\u5de5\u5177\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ bash -c "$(curl -fsSL https://gef.blah.cat/sh)"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5b89\u88c5\u540e\u4f1a\u4fee\u6539 ",(0,d.jsx)(n.code,{children:"~/.gdbinit"})," \u6587\u4ef6\uff0c\u5176\u4e2d\u5185\u5bb9\u662f\u5305\u542b\u65b0\u589e\u7684 ",(0,d.jsx)(n.code,{children:"~/.gef-.py"})," \u6587\u4ef6\uff0c\u4ece\u800c\u8fbe\u5230\u5bf9 GDB \u7684 hacking\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"gef-\u547d\u4ee4",children:"GEF \u547d\u4ee4"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"context"})," / ",(0,d.jsx)(n.code,{children:"ctx"}),": \u67e5\u770b\u4e0a\u4e0b\u6587\u4fe1\u606f"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"aliases [ls/add/rm]"}),"\uff1a\u8bbe\u7f6e\u547d\u4ee4\u522b\u540d"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"tmux-setup"}),"\uff1atmux \u4fa7\u8fb9\u680f"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"registers"}),"\uff1a\u5bc4\u5b58\u5668"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"elf"}),"\uff1aELF \u4fe1\u606f"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"got"}),"\uff1a\u5168\u5c40\u504f\u79fb\u8868"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"hexdump"}),"\uff1a\u4e8c\u8fdb\u5236\u5de5\u5177"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"vmmap"}),"\uff1a\u5185\u5b58\u6620\u5c04"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dereferece"}),"\uff1a\u89e3\u5f15\u7528"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u547d\u4ee4\u53ef\u4ee5\u5728 ",(0,d.jsx)(n.a,{href:"https://hugsy.github.io/gef/commands/aliases",children:"GEF - Commands"})," \u5185\u67e5\u770b\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var d=s(67294);const c={},r=d.createContext(c);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);
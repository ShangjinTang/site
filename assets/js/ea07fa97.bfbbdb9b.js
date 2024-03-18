"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1680],{27809:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=e(85893),i=e(11151);const t={},a="Transformer \u6982\u89c8",o={id:"machine-learning/transformer/transformer-overview",title:"Transformer \u6982\u89c8",description:"Transformer \u662f\u4e00\u79cd\u91c7\u7528\u81ea\u6ce8\u610f\u529b\u673a\u5236\uff08self-attention\uff09\u7684\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u67b6\u6784\uff0c\u8fd9\u4e00\u673a\u5236\u53ef\u4ee5\u6309\u8f93\u5165\u6570\u636e\u5404\u90e8\u5206\u91cd\u8981\u6027\u7684\u4e0d\u540c\u800c\u5206\u914d\u4e0d\u540c\u7684\u6743\u91cd\u3002\u8be5\u6a21\u578b\u7531 Google \u673a\u5668\u7ffb\u8bd1\u56e2\u961f\u4e8e 2017 \u5e74\u53d1\u8868\u4e8e\u8bba\u6587 Attention is all you need \u4e2d\uff0c\u4e3a OpenAI \u5f00\u53d1\u7684 ChatGPT\u3001Google \u7684 Gemini\u3001Meta \u7684 LLaMA \u7b49\u5927\u8bed\u8a00\u6a21\u578b\u7684\u6838\u5fc3\u57fa\u7840\u67b6\u6784\u3002",source:"@site/docs/machine-learning/11-transformer/00-transformer-overview.md",sourceDirName:"machine-learning/11-transformer",slug:"/machine-learning/transformer/transformer-overview",permalink:"/site/docs/machine-learning/transformer/transformer-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u6838\u6280\u5de7\u548c\u975e\u7ebf\u6027 SVM",permalink:"/site/docs/machine-learning/traditional-ml-algorithms/svm-nonlinear"},next:{title:"Transformer \u67b6\u6784",permalink:"/site/docs/machine-learning/transformer/transformer-architecture"}},l={},c=[{value:"\u81ea\u7136\u8bed\u8a00\u5904\u7406",id:"\u81ea\u7136\u8bed\u8a00\u5904\u7406",level:2},{value:"Transformer \u6982\u89c8",id:"transformer-\u6982\u89c8-1",level:2}];function d(r){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"transformer-\u6982\u89c8",children:"Transformer \u6982\u89c8"}),"\n",(0,s.jsxs)(n.p,{children:["Transformer \u662f\u4e00\u79cd\u91c7\u7528\u81ea\u6ce8\u610f\u529b\u673a\u5236\uff08self-attention\uff09\u7684\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u67b6\u6784\uff0c\u8fd9\u4e00\u673a\u5236\u53ef\u4ee5\u6309\u8f93\u5165\u6570\u636e\u5404\u90e8\u5206\u91cd\u8981\u6027\u7684\u4e0d\u540c\u800c\u5206\u914d\u4e0d\u540c\u7684\u6743\u91cd\u3002\u8be5\u6a21\u578b\u7531 Google \u673a\u5668\u7ffb\u8bd1\u56e2\u961f\u4e8e 2017 \u5e74\u53d1\u8868\u4e8e\u8bba\u6587 ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1706.03762",children:"Attention is all you need"})," \u4e2d\uff0c\u4e3a OpenAI \u5f00\u53d1\u7684 ChatGPT\u3001Google \u7684 Gemini\u3001Meta \u7684 LLaMA \u7b49\u5927\u8bed\u8a00\u6a21\u578b\u7684\u6838\u5fc3\u57fa\u7840\u67b6\u6784\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Transformer \u6a21\u578b\u662f\u8fc4\u4eca\u53d1\u660e\u51fa\u6700\u65b0\u4e14\u6700\u5f3a\u5927\u7684\u6a21\u578b\u4e4b\u4e00\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u7136\u8bed\u8a00\u5904\u7406",children:"\u81ea\u7136\u8bed\u8a00\u5904\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u4ec0\u4e48\u662f\u81ea\u7136\u8bed\u8a00\u5904\u7406 (Natural Language Processing, NLP) \uff1f NLP \u662f\u8bed\u8a00\u5b66\u548c\u673a\u5668\u5b66\u4e60\u4ea4\u53c9\u9886\u57df\uff0c\u4e13\u6ce8\u4e8e\u7406\u89e3\u4e0e\u4eba\u7c7b\u8bed\u8a00\u76f8\u5173\u7684\u4e00\u5207\u3002 NLP \u4efb\u52a1\u7684\u76ee\u6807\u4e0d\u4ec5\u662f\u5355\u72ec\u7406\u89e3\u5355\u4e2a\u5355\u8bcd\uff0c\u800c\u4e14\u662f\u80fd\u591f\u7406\u89e3\u8fd9\u4e9b\u5355\u8bcd\u7684\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5e38\u89c1 NLP \u4efb\u52a1\u7684\u5217\u8868\uff0c\u6bcf\u4e2a\u4efb\u52a1\u90fd\u6709\u4e00\u4e9b\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5bf9\u6574\u4e2a\u53e5\u5b50\u8fdb\u884c\u5206\u7c7b"}),": \u83b7\u53d6\u8bc4\u8bba\u7684\u60c5\u7eea\uff0c\u68c0\u6d4b\u7535\u5b50\u90ae\u4ef6\u662f\u5426\u4e3a\u5783\u573e\u90ae\u4ef6\uff0c\u786e\u5b9a\u53e5\u5b50\u5728\u8bed\u6cd5\u4e0a\u662f\u5426\u6b63\u786e\u6216\u4e24\u4e2a\u53e5\u5b50\u5728\u903b\u8f91\u4e0a\u662f\u5426\u76f8\u5173\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5bf9\u53e5\u5b50\u4e2d\u7684\u6bcf\u4e2a\u8bcd\u8fdb\u884c\u5206\u7c7b"}),": \u8bc6\u522b\u53e5\u5b50\u7684\u8bed\u6cd5\u6210\u5206\uff08\u540d\u8bcd\u3001\u52a8\u8bcd\u3001\u5f62\u5bb9\u8bcd\uff09\u6216\u547d\u540d\u5b9e\u4f53\uff08\u4eba\u3001\u5730\u70b9\u3001\u7ec4\u7ec7\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u751f\u6210\u6587\u672c\u5185\u5bb9"}),": \u7528\u81ea\u52a8\u751f\u6210\u7684\u6587\u672c\u5b8c\u6210\u63d0\u793a\uff0c\u7528\u5c4f\u853d\u8bcd\u586b\u5145\u6587\u672c\u4e2d\u7684\u7a7a\u767d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4ece\u6587\u672c\u4e2d\u63d0\u53d6\u7b54\u6848"}),": \u7ed9\u5b9a\u95ee\u9898\u548c\u4e0a\u4e0b\u6587\uff0c\u6839\u636e\u4e0a\u4e0b\u6587\u4e2d\u63d0\u4f9b\u7684\u4fe1\u606f\u63d0\u53d6\u95ee\u9898\u7684\u7b54\u6848\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4ece\u8f93\u5165\u6587\u672c\u751f\u6210\u65b0\u53e5\u5b50"}),": \u5c06\u6587\u672c\u7ffb\u8bd1\u6210\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u603b\u7ed3\u6587\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"NLP \u4e0d\u4ec5\u9650\u4e8e\u4e66\u9762\u6587\u672c\u3002\u5b83\u8fd8\u89e3\u51b3\u4e86\u8bed\u97f3\u8bc6\u522b\u548c\u8ba1\u7b97\u673a\u89c6\u89c9\u4e2d\u7684\u590d\u6742\u6311\u6218\uff0c\u4f8b\u5982\u97f3\u9891\u751f\u6210\u3001\u56fe\u50cf\u8bc6\u522b\u3001\u56fe\u50cf\u63cf\u8ff0\u7b49\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Transformer \u53d1\u660e\u4e4b\u524d\uff0c\u673a\u5668\u5b66\u4e60\u4e2d NLP \u7684\u4efb\u52a1\u5904\u7406\u57fa\u672c\u662f\u901a\u8fc7 RNN \u6216\u8005\u5176\u53d8\u4f53 GRU \u3001 LSTM \u5efa\u6a21\u7684\u3002\u76f8\u6bd4\u4e8e\u8fd9\u4e9b\u6a21\u578b\uff0cTransformer \u5177\u6709\u4ee5\u4e0b\u4f18\u52bf\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e76\u884c\u8ba1\u7b97\u3002RNN \u548c LSTM \u9700\u8981\u987a\u5e8f\u5904\u7406\u5e8f\u5217\u6570\u636e\uff0c\u56e0\u6b64\u5f88\u96be\u8fdb\u884c\u5e76\u884c\u8ba1\u7b97\u3002\u800c Transformer \u7684\u81ea\u6ce8\u610f\u529b\u673a\u5236\u5141\u8bb8\u540c\u65f6\u5904\u7406\u6574\u4e2a\u5e8f\u5217\uff0c\u4ece\u800c\u53ef\u4ee5\u5145\u5206\u5229\u7528 GPU \u7684\u5e76\u884c\u8ba1\u7b97\u80fd\u529b\uff0c\u5927\u5927\u63d0\u9ad8\u6a21\u578b\u8bad\u7ec3\u548c\u63a8\u7406\u7684\u901f\u5ea6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u66f4\u597d\u7684\u957f\u671f\u4f9d\u8d56\u3002RNN \u5728\u5904\u7406\u957f\u5e8f\u5217\u65f6\u9762\u4e34\u68af\u5ea6\u6d88\u5931\u6216\u68af\u5ea6\u7206\u70b8\u7684\u95ee\u9898\uff0c\u5bfc\u81f4\u96be\u4ee5\u5efa\u6a21\u957f\u671f\u4f9d\u8d56\u5173\u7cfb\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cTransformer \u4f7f\u7528\u4e86\u81ea\u6ce8\u610f\u529b\u673a\u5236\uff0c\u80fd\u591f\u76f4\u63a5\u5efa\u6a21\u5e8f\u5217\u4e2d\u4e0d\u540c\u4f4d\u7f6e\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4ece\u800c\u66f4\u597d\u5730\u6355\u6349\u957f\u671f\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7075\u6d3b\u6027\uff1aTransformer \u67b6\u6784\u5177\u6709\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u8fdb\u884c\u4fee\u6539\u548c\u6269\u5c55\u3002\u4f8b\u5982\uff0cBERT\u3001GPT \u7b49\u77e5\u540d\u6a21\u578b\u90fd\u662f\u57fa\u4e8e Transformer \u67b6\u6784\u7684\uff0c\u5b83\u4eec\u5728\u5404\u79cd\u81ea\u7136\u8bed\u8a00\u5904\u7406\u4efb\u52a1\u4e2d\u53d6\u5f97\u4e86\u524d\u6240\u672a\u6709\u7684\u6210\u7ee9\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"transformer-\u6982\u89c8-1",children:"Transformer \u6982\u89c8"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u5148\u5c06\u6574\u4e2a\u6a21\u578b\u89c6\u4e3a\u9ed1\u76d2\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u673a\u5668\u7ffb\u8bd1\u4e2d\uff0c\u63a5\u6536\u4e00\u79cd\u8bed\u8a00\u7684\u53e5\u5b50\u4f5c\u4e3a\u8f93\u5165\uff0c\u7136\u540e\u5c06\u5176\u7ffb\u8bd1\u6210\u5176\u4ed6\u8bed\u8a00\u8f93\u51fa\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(11774).Z+"",width:"1127",height:"294"})}),"\n",(0,s.jsx)(n.p,{children:"Transformer \u8bbe\u8ba1\u4e4b\u521d\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3 NLP \u4e2d\u7684\u7ffb\u8bd1\u95ee\u9898\u3002"})]})}function m(r={}){const{wrapper:n}={...(0,i.a)(),...r.components};return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(d,{...r})}):d(r)}},11774:(r,n,e)=>{e.d(n,{Z:()=>s});const s=e.p+"assets/images/transformer_highlevel_blackbox-8fdbf797aaae35f1679e07c451513eda.png"},11151:(r,n,e)=>{e.d(n,{Z:()=>o,a:()=>a});var s=e(67294);const i={},t=s.createContext(i);function a(r){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function o(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:a(r.components),s.createElement(t.Provider,{value:n},r.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5108],{97815:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=a(74848),r=a(28453);const i={},l="Transformer \u7684\u53d8\u79cd",m={id:"machine-learning/transformer/transformer-variants",title:"Transformer \u7684\u53d8\u79cd",description:"Informer",source:"@site/docs/machine-learning/11-transformer/09-transformer-variants.md",sourceDirName:"machine-learning/11-transformer",slug:"/machine-learning/transformer/transformer-variants",permalink:"/site/docs/machine-learning/transformer/transformer-variants",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u4ee3\u7801\u5b9e\u73b0",permalink:"/site/docs/machine-learning/transformer/transformer-code-implementation"}},t={},c=[{value:"Informer",id:"informer",level:2},{value:"Informer \u7684 Embedding \u5c42",id:"informer-\u7684-embedding-\u5c42",level:3},{value:"ProbSparse \u81ea\u6ce8\u610f\u529b\u673a\u5236",id:"probsparse-\u81ea\u6ce8\u610f\u529b\u673a\u5236",level:3},{value:"\u5377\u79ef\u6c60\u5316\u51cf\u534a",id:"\u5377\u79ef\u6c60\u5316\u51cf\u534a",level:3},{value:"\u5355\u6b21\u89e3\u7801\u5668\u8bbe\u8ba1",id:"\u5355\u6b21\u89e3\u7801\u5668\u8bbe\u8ba1",level:3}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"transformer-\u7684\u53d8\u79cd",children:"Transformer \u7684\u53d8\u79cd"})}),"\n",(0,n.jsx)(e.h2,{id:"informer",children:"Informer"}),"\n",(0,n.jsxs)(e.p,{children:["Informer \u5728\u8bba\u6587 ",(0,n.jsx)(e.a,{href:"https://arxiv.org/abs/2012.07436",children:"Informer\uff1aBeyond Efficient Transformer for Long Sequence Time-Series Forecasting"})," \u4e2d\u63d0\u51fa\uff0c\u5bf9\u7ecf\u5178\u7684 Transformer \u63d0\u51fa\u4e86\u4e00\u4e9b\u6539\u8fdb\uff0c\u7528\u4e8e\u957f\u65f6\u95f4\u5e8f\u5217\u9884\u6d4b (Long sequence time-series forecasting\uff0cLSTF) \u4efb\u52a1\uff0c\u5305\u62ec\uff1a"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["ProbSparse \u81ea\u6ce8\u610f\u529b\u673a\u5236\uff0c\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u5185\u5b58\u4f7f\u7528\u91cf\u8fbe\u5230 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(LlogL)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"gL"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \uff0c\u5e76\u4e14\u5728\u5e8f\u5217\u7684\u4f9d\u8d56\u6027\u5bf9\u9f50\u65b9\u9762\u5177\u6709\u76f8\u8fd1\u7684\u6027\u80fd\uff1b"]}),"\n",(0,n.jsx)(e.li,{children:"\u81ea\u6ce8\u610f\u529b\u84b8\u998f\u901a\u8fc7\u5c06\u7ea7\u8054\u5c42\u8f93\u5165\u51cf\u534a\u6765\u7a81\u51fa\u4e3b\u5bfc\u6ce8\u610f\u529b\uff0c\u5e76\u6709\u6548\u5904\u7406\u6781\u957f\u7684\u8f93\u5165\u5e8f\u5217\uff1b"}),"\n",(0,n.jsx)(e.li,{children:"\u5728\u751f\u6210\u5f0f\u7684\u89e3\u7801\u5668\u4e2d\uff0c\u901a\u8fc7\u4e00\u6b21\u524d\u5411\u64cd\u4f5c\u800c\u4e0d\u662f\u4e00\u6b65\u4e00\u6b65\u7684\u65b9\u5f0f\u6765\u9884\u6d4b\u957f\u65f6\u95f4\u5e8f\u5217\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u957f\u5e8f\u5217\u9884\u6d4b\u7684\u63a8\u7406\u901f\u5ea6\u3002"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Informer \u6e90\u7801\u5f00\u6e90\u5728 ",(0,n.jsx)(e.a,{href:"https://github.com/zhouhaoyi/Informer2020",children:"GitHub - Informer2020"}),"\u3002"]}),"\n",(0,n.jsx)(e.h3,{id:"informer-\u7684-embedding-\u5c42",children:"Informer \u7684 Embedding \u5c42"}),"\n",(0,n.jsx)(e.p,{children:"\u9664\u4e86\u8f93\u5165 embedding \u548c\u4f4d\u7f6e\u7f16\u7801\u5916\uff0cinformer \u8fd8\u5f15\u5165\u4e86\u65f6\u95f4\u7ef4\u5ea6\u7684 embedding\uff1a"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(66836).A+"",width:"646",height:"511"})}),"\n",(0,n.jsx)(e.h3,{id:"probsparse-\u81ea\u6ce8\u610f\u529b\u673a\u5236",children:"ProbSparse \u81ea\u6ce8\u610f\u529b\u673a\u5236"}),"\n",(0,n.jsxs)(e.p,{children:["\u5728\u6ce8\u610f\u529b\u673a\u5236\u77e9\u9635\u4e2d\uff0c\u4e0d\u662f\u6bcf\u4e00\u5217\u90fd\u662f\u6709 attention \u4f5c\u7528\u7684\uff0c\u56e0\u6b64\u9009\u62e9 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"Q"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Q"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Q"})]})})]})," \u77e9\u9635\u4e2d\u8d21\u732e\u7387\u6700\u9ad8\u7684 top-",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"u"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"})]})})]})," \u884c\uff0c\u5176\u4e2d ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"u"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"})]})})]})," \u53d6\u503c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"L"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c * lnL"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"})]})]})]}),"\uff0c",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"c"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]})," \u662f\u5e38\u6570\u3002"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(82822).A+"",width:"1527",height:"823"})}),"\n",(0,n.jsx)(e.p,{children:"ProbSparse \u901a\u8fc7\u8ba1\u7b97 KL \u6563\u5ea6 (Kullback-Leibler divergence) \u6765\u5f97\u5230\u4e0d\u540c\u884c\u6ce8\u610f\u529b\u7684\u8d21\u732e\u7387\u3002KL \u6563\u5ea6\u5728\u7edf\u8ba1\u6a21\u578b\u4e2d\u53ef\u4ee5\u53cd\u6620\u4fe1\u606f\u589e\u76ca\uff0c\u5f53\u4e24\u4e2a\u5206\u5e03\u5dee\u5f02\u8f83\u5927\u7684\u65f6\u5019\uff0cKL \u6563\u5ea6\u7ed3\u679c\u6570\u503c\u4f1a\u8d8a\u9ad8\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u901a\u8fc7\u8ba1\u7b97\u6bcf\u4e00\u884c\u5b9e\u9645\u7684 attention \u548c\u5747\u5300\u5206\u5e03 attention \u7684 KL \u6563\u5ea6\uff0c\u53ef\u4ee5\u8fd1\u4f3c\u8861\u91cf\u8fd9\u4e00\u884c\u5bf9\u6ce8\u610f\u529b\u7684\u8d21\u732e\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["\u4f46\u662f\u8fd9\u6837\u8ba1\u7b97\u540e\uff0c\u5185\u5b58\u4f7f\u7528\u5e76\u6ca1\u6709\u51cf\u5c11\u3002\u6240\u4ee5\u4f5c\u8005\u53c8\u63d0\u51fa\u4e86\u968f\u673a\u9009\u62e9 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"L"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"lnL"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"})]})})]})," \u884c\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u7ecf\u8fc7\u4ee5\u4e0a\u5904\u7406\uff0c\u6a21\u578b\u7684\u6ce8\u610f\u529b\u77e9\u9635\u5185\u5b58\u548c\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u4ece ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(L^2)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u51cf\u5c11\u5230 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(LlogL)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"gL"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u539f\u59cb\u8bba\u6587\u4e2d\u8ba1\u7b97 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"Q"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mi,{children:"T"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"QK^T"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0358em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]})]})})]})," \u540e\uff0c\u5728\u7ecf\u5178\u7684 Transformer \u7684\u57fa\u7840\u4e0a\uff0c\u628a Informer \u4e2d\u6ca1\u6709\u53c2\u4e0e\u8ba1\u7b97\u7684\u4f4d\u7f6e\uff0c\u4f7f\u7528\u5e73\u5747\u6743\u91cd\u586b\u5145\u3002\u56e0\u6b64\u7b2c\u4e00\u5c42\u6ce8\u610f\u529b\u5c42\u7684\u8f93\u51fa\u7684\u5f62\u72b6\u548c\u7ecf\u5178\u7684 Transformer \u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,n.jsx)(e.h3,{id:"\u5377\u79ef\u6c60\u5316\u51cf\u534a",children:"\u5377\u79ef\u6c60\u5316\u51cf\u534a"}),"\n",(0,n.jsx)(e.p,{children:"\u539f\u59cb\u7684\u6ce8\u610f\u529b\u5c42\u7684\u8f93\u51fa\u7ed3\u679c\u6570\u636e\u5c3a\u5bf8\u4e0d\u4f1a\u53d8\u5316\uff0c\u4f46\u662f Informer \u4e2d\u4f1a\u8fdb\u884c\u6c60\u5316\u51cf\u534a\u64cd\u4f5c\u3002\u51cf\u5c0f\u4e86\u8ba1\u7b97\u91cf\u548c\u8bad\u7ec3\u65f6\u95f4\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u8fd9\u91cc\u7684\u51cf\u534a\u64cd\u4f5c\u662f\u4f7f\u7528\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u4e2d\u6b65\u957f\u4e3a 2 \u7684\u6700\u5927\u6c60\u5316 (MaxPooling)\u3002"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(319).A+"",width:"862",height:"418"})}),"\n",(0,n.jsx)(e.h3,{id:"\u5355\u6b21\u89e3\u7801\u5668\u8bbe\u8ba1",children:"\u5355\u6b21\u89e3\u7801\u5668\u8bbe\u8ba1"}),"\n",(0,n.jsx)(e.p,{children:"\u7ecf\u5178\u7684 Transformer \u7528\u4e8e NLP\uff0c\u5f88\u591a\u65f6\u5019\u6bcf\u4e2a\u8f93\u51fa\u7ed3\u679c\u548c\u4e4b\u524d\u7684\u5355\u8bcd\u5177\u6709\u8bed\u4e49\u4e0a\u7684\u7d27\u5bc6\u8054\u7cfb\uff0c\u56e0\u6b64\u6309\u7167\u4e00\u6b65\u4e00\u6b65\u7684\u8f93\u51fa\u6bd4\u8f83\u9002\u5408\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u5728 Informer \u4e2d\uff0c\u7531\u4e8e\u9884\u6d4b\u672a\u6765\u67d0\u4e00\u4e9b\u65f6\u523b\u7684\u6307\u6807\uff0c\u8fd9\u4e9b\u6307\u6807\u4e4b\u524d\u6ca1\u6709\u7c7b\u4f3c\u4e8e NLP \u4e2d\u524d\u540e\u5f3a\u5173\u8054\u7684\u8bed\u4e49\u5173\u7cfb\uff0c\u56e0\u6b64\u53ef\u4ee5\u91c7\u7528\u5355\u6b21\u8f93\u51fa\u6240\u9700\u8981\u7684\u5e8f\u5217\uff0c\u6781\u5927\u7684\u63d0\u9ad8\u4e86\u63a8\u7406\u901f\u5ea6\u3002"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(64514).A+"",width:"757",height:"597"})})]})}function d(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},64514:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/informer_architecture-775e4412b162cc08c678245b30dec9e2.png"},66836:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/informer_embedding-01ae3f4579b6b614cb723b2f8339359c.png"},319:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/informer_maxpooling-a09d229910c890cb4720f420a38a3dd3.png"},82822:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/informer_probsparse-f2eeff4d7ee82e5b2286c37bc8ea0ac8.png"},28453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>m});var n=a(96540);const r={},i=n.createContext(r);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3928],{98394:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(74848),l=a(28453);const i={},m="\u4f4d\u7f6e\u7f16\u7801",r={id:"machine-learning/transformer/transformer-positional-encoding",title:"\u4f4d\u7f6e\u7f16\u7801",description:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f4d\u7f6e\u7f16\u7801",source:"@site/docs/machine-learning/11-transformer/03-transformer-positional-encoding.md",sourceDirName:"machine-learning/11-transformer",slug:"/machine-learning/transformer/transformer-positional-encoding",permalink:"/site/docs/machine-learning/transformer/transformer-positional-encoding",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u7f16\u7801\u5668\u548c\u89e3\u7801\u5668",permalink:"/site/docs/machine-learning/transformer/transformer-encoders-decoders"},next:{title:"\u6ce8\u610f\u529b\u673a\u5236",permalink:"/site/docs/machine-learning/transformer/transformer-attention"}},t={},c=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f4d\u7f6e\u7f16\u7801",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f4d\u7f6e\u7f16\u7801",level:2},{value:"\u600e\u4e48\u5b9e\u73b0\u4f4d\u7f6e\u7f16\u7801",id:"\u600e\u4e48\u5b9e\u73b0\u4f4d\u7f6e\u7f16\u7801",level:2},{value:"Transformer \u7684\u4f4d\u7f6e\u7f16\u7801",id:"transformer-\u7684\u4f4d\u7f6e\u7f16\u7801",level:2},{value:"Transformer \u7f16\u7801\u7684\u53ef\u89c6\u5316",id:"transformer-\u7f16\u7801\u7684\u53ef\u89c6\u5316",level:3}];function h(s){const e={annotation:"annotation",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msub:"msub",msup:"msup",mtable:"mtable",mtd:"mtd",mtext:"mtext",mtr:"mtr",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u4f4d\u7f6e\u7f16\u7801",children:"\u4f4d\u7f6e\u7f16\u7801"}),"\n",(0,n.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f4d\u7f6e\u7f16\u7801",children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f4d\u7f6e\u7f16\u7801"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u5bf9\u4e8e\u4efb\u4f55\u4e00\u95e8\u8bed\u8a00\uff0c\u5355\u8bcd\u5728\u53e5\u5b50\u4e2d\u7684\u4f4d\u7f6e\u4ee5\u53ca\u6392\u5217\u987a\u5e8f\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u5b83\u4eec\u4e0d\u4ec5\u662f\u4e00\u4e2a\u53e5\u5b50\u7684\u8bed\u6cd5\u7ed3\u6784\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u66f4\u662f\u8868\u8fbe\u8bed\u4e49\u7684\u91cd\u8981\u6982\u5ff5\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Transformer \u6a21\u578b\u629b\u5f03\u4e86 RNN\u3001LSTM\u3001GRU \u4f5c\u4e3a\u5e8f\u5217\u5b66\u4e60\u7684\u57fa\u672c\u6a21\u578b\u3002\u6211\u4eec\u77e5\u9053\uff0cRNN \u672c\u8eab\u5c31\u662f\u4e00\u79cd\u987a\u5e8f\u7ed3\u6784\uff0c\u5929\u751f\u5c31\u5305\u542b\u4e86\u8bcd\u5728\u5e8f\u5217\u4e2d\u7684\u4f4d\u7f6e\u4fe1\u606f\u3002\u5f53\u629b\u5f03 RNN \u7ed3\u6784\uff0c\u5b8c\u5168\u91c7\u7528 Attention \u53d6\u800c\u4ee3\u4e4b\uff0c\u8fd9\u4e9b\u8bcd\u5e8f\u4fe1\u606f\u5c31\u4f1a\u4e22\u5931\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u600e\u4e48\u5b9e\u73b0\u4f4d\u7f6e\u7f16\u7801",children:"\u600e\u4e48\u5b9e\u73b0\u4f4d\u7f6e\u7f16\u7801"}),"\n",(0,n.jsx)(e.p,{children:"\u6700\u7b80\u5355\u7684\u4f4d\u7f6e\u7f16\u7801\u662f\uff1a\u7b2c\u4e00\u4e2a token \u7f16\u7801\u4e3a 0\uff0c\u7b2c\u4e00\u4e2a token \u7f16\u7801\u4e3a 1\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u8fd9\u79cd\u65b9\u6cd5\u5e26\u6765\u7684\u95ee\u9898\u662f\uff0c\u4e0d\u4ec5\u8fd9\u4e9b\u6570\u503c\u4f1a\u53d8\u5f97\u975e\u5e38\u5927\uff0c\u800c\u4e14\u6a21\u578b\u4e5f\u4f1a\u9047\u5230\u4e00\u4e9b\u6bd4\u8bad\u7ec3\u4e2d\u7684\u6240\u6709\u53e5\u5b50\u90fd\u8981\u957f\u7684\u53e5\u5b50\u3002\u6b64\u5916\uff0c\u6570\u636e\u96c6\u4e2d\u4e0d\u4e00\u5b9a\u5728\u6240\u6709\u6570\u503c\u4e0a\u90fd\u4f1a\u5305\u542b\u76f8\u5bf9\u5e94\u957f\u5ea6\u7684\u53e5\u5b50\uff0c\u4e5f\u5c31\u662f\u6a21\u578b\u5f88\u6709\u53ef\u80fd\u6ca1\u6709\u770b\u5230\u8fc7\u4efb\u4f55\u4e00\u4e2a\u8fd9\u6837\u7684\u957f\u5ea6\u7684\u6837\u672c\u53e5\u5b50\uff0c\u8fd9\u4f1a\u4e25\u91cd\u5f71\u54cd\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u4e00\u79cd\u597d\u7684\u4f4d\u7f6e\u7f16\u7801\u65b9\u6848\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u6761\u8981\u6c42\uff1a"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u80fd\u591f\u4e3a\u6bcf\u4e2a\u65f6\u95f4\u6b65\u8f93\u51fa\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u7f16\u7801"}),"\n",(0,n.jsx)(e.li,{children:"\u7ed9\u5b9a\u4efb\u610f\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7f16\u7801\u7684\u503c\u5fc5\u987b\u662f\u786e\u5b9a\u6027\u7684\uff08\u800c\u4e0d\u662f\u9700\u8981\u5728\u673a\u5668\u5b66\u4e60\u4e2d\u7684\u8d85\u53c2\u6570\uff09"}),"\n",(0,n.jsx)(e.li,{children:"\u56fa\u5b9a\u6b65\u957f\u7684\u4e24\u4e2a\u4f4d\u7f6e\u7684\u7f16\u7801\uff0c\u5e94\u8be5\u5b58\u5728\u4e00\u5b9a\u7684\u5173\u7cfb"}),"\n",(0,n.jsx)(e.li,{children:"\u6a21\u578b\u5e94\u8be5\u80fd\u6cdb\u5316\u5230\u66f4\u957f\u7684\u53e5\u5b50"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"transformer-\u7684\u4f4d\u7f6e\u7f16\u7801",children:"Transformer \u7684\u4f4d\u7f6e\u7f16\u7801"}),"\n",(0,n.jsx)(e.p,{children:"Transformer \u7684\u4f4d\u7f6e\u7f16\u7801\u4e3a\uff1a"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mtable,{rowspacing:"0.25em",columnalign:"right",columnspacing:"",children:[(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"PE"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1000"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"l"})]})]})]})]})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","})]})})})}),(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"PE"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1000"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"l"})]})]})]})]})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."})]})})})})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{aligned}\n\\text{PE}_{(pos,2i)}=sin\\left(\\frac{pos}{10000^{2i/d_{model}}}\\right), \\\\\n\\text{PE}_{(pos,2i+1)}=cos\\left(\\frac{pos}{10000^{2i/d_{model}}}\\right).\n\\end{aligned}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"4.308em",verticalAlign:"-1.904em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mtable",children:(0,n.jsx)(e.span,{className:"col-align-r",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"2.404em"},children:[(0,n.jsxs)(e.span,{style:{top:"-4.404em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"PE"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.5198em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"}),(0,n.jsx)(e.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3552em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size2",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1076em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.296em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1000"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"0"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.814em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"/"}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1512em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})})})})})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.704em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size2",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mpunct",children:","})]})]}),(0,n.jsxs)(e.span,{style:{top:"-2.25em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"PE"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.5198em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"}),(0,n.jsx)(e.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3552em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"cos"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size2",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1076em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.296em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1000"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"0"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.814em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"/"}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1512em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})})})})})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.704em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size2",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"."})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.904em"},children:(0,n.jsx)(e.span,{})})})]})})})})]})})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"pos"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"})]})})]})," \u4e3a\u4f4d\u7f6e\u7f16\u53f7\uff0c",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \u662f\u7ef4\u5ea6\u7f16\u53f7\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48\u91c7\u7528\u8fd9\u79cd\u7f16\u7801\uff1f\u6211\u4eec\u770b\u4e00\u4e0b\u8bf4\u660e\uff1a"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["We chose this function because we hypothesized it would allow the model to easily learn to attend by relative positions, since for any fixed offset ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),", ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"k"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PE_{pos+k}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," can be represented as a linear function of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PE_{pos}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\u662f\uff0c\u4e0a\u9762\u7684\u7f16\u7801\u80fd\u591f\u8ba9\u6a21\u578b\u8f7b\u677e\u5173\u6ce8\u76f8\u5bf9\u4f4d\u7f6e\u3002\u7ed9\u5b9a\u8ddd\u79bb\u4e3a ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u7684\u4e24\u4e2a\u4f4d\u7f6e\uff0c\u5176\u7f16\u7801 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"k"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PE_{pos+k}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," \u548c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PE_{pos}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"os"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," \u5b58\u5728\u56fa\u5b9a\u7684\u7ebf\u6027\u53d8\u6362\u5173\u7cfb\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u4ece\u7ed3\u679c\u6765\u770b\uff0cTransformer \u7684\u4f4d\u7f6e\u7f16\u7801\u80fd\u591f\u6709\u6548\u6cdb\u5316\u5230\u66f4\u957f\u7684\u53e5\u5b50\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u9700\u8981\u660e\u786e\u7684\u662f\uff0c\u8fd9\u4e0d\u4ee3\u8868\u5176\u4e3a\u552f\u4e00\u53ef\u884c\u7684\u4f4d\u7f6e\u7f16\u7801\u65b9\u6848\u3002"}),"\n",(0,n.jsx)(e.h3,{id:"transformer-\u7f16\u7801\u7684\u53ef\u89c6\u5316",children:"Transformer \u7f16\u7801\u7684\u53ef\u89c6\u5316"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0b\u56fe\u4e3a\u5bf9 20 \u4e2a\u4f4d\u7f6e\u7f16\u7801\u4e3a\u7684\u793a\u4f8b\uff0c\u5176\u4e2d\u6bcf\u4e2a\u4f4d\u7f6e\u7f16\u7801\u4e3a 512 \u7ef4\u7684\u5411\u91cf\u3002\u5de6\u534a\u90e8\u5206\u662f\u7ef4\u5ea6\u4e3a ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"2i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \u7684\u6b63\u5f26\u7f16\u7801\uff0c\u53f3\u534a\u90e8\u5206\u662f\u662f\u7ef4\u5ea6\u4e3a ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"2i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \u7684\u4f59\u5f26\u7f16\u7801\u3002"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(52).A+"",width:"1238",height:"907"})}),"\n",(0,n.jsx)(e.p,{children:"\u5c06\u5b83\u4eec\u4ea4\u53c9\u8fde\u63a5\uff0c\u5c31\u662f Transformer \u4f7f\u7528\u7684\u4f4d\u7f6e\u7f16\u7801\u5411\u91cf\u3002"})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},52:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/transformer_positional_encoding_example-4baaf26e596218d0cd7bf667b8026048.png"},28453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>r});var n=a(96540);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);
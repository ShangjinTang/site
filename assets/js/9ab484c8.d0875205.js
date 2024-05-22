"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7481],{54042:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=a(85893),l=a(11151);const i={},t="K-\u8fd1\u90bb",m={id:"machine-learning/traditional-ml-algorithms/k-nearest-neighbors",title:"K-\u8fd1\u90bb",description:"\u672c\u6587\u4ecb\u7ecd\u61d2\u60f0\u5b66\u4e60\u7684\u4e00\u4e2a\u5178\u578b\u793a\u4f8b\uff1aK-\u8fd1\u90bb\uff08K-Nearest Neighbors, KNN\uff09\u7b97\u6cd5\u3002\u4e4b\u6240\u4ee5\u79f0\u4e3a\u61d2\u60f0\uff0c\u662f\u56e0\u4e3a\u5b83\u4e0d\u4ece\u8bad\u7ec3\u6837\u672c\u4e2d\u5b66\u4e60\u5224\u522b\u51fd\u6570\uff0c\u800c\u662f\u5728\u8bb0\u4f4f\u5df2\u6709\u7684\u6837\u672c\u6570\u636e\u96c6\u7684\u57fa\u7840\u4e0a\u5bf9\u65b0\u6837\u672c\u8fdb\u884c\u5206\u7c7b\u3002",source:"@site/docs/machine-learning/08-traditional-ml-algorithms/k-nearest-neighbors.md",sourceDirName:"machine-learning/08-traditional-ml-algorithms",slug:"/machine-learning/traditional-ml-algorithms/k-nearest-neighbors",permalink:"/docs/machine-learning/traditional-ml-algorithms/k-nearest-neighbors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u4f7f\u7528\u96c6\u5408\u7684\u6295\u7968\u5206\u7c7b\u65b9\u6cd5",permalink:"/docs/machine-learning/traditional-ml-algorithms/ensemble-voting-classifer"},next:{title:"\u7ebf\u6027 SVM",permalink:"/docs/machine-learning/traditional-ml-algorithms/svm-linear"}},c={},r=[{value:"\u7b97\u6cd5\u601d\u60f3",id:"\u7b97\u6cd5\u601d\u60f3",level:2},{value:"\u7b97\u6cd5\u5b9e\u73b0",id:"\u7b97\u6cd5\u5b9e\u73b0",level:2},{value:"\u7b97\u6cd5\u7684\u7ef4\u5ea6\u95ee\u9898",id:"\u7b97\u6cd5\u7684\u7ef4\u5ea6\u95ee\u9898",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mroot:"mroot",mrow:"mrow",mstyle:"mstyle",msubsup:"msubsup",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",munder:"munder",ol:"ol",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",strong:"strong",svg:"svg",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"k-\u8fd1\u90bb",children:"K-\u8fd1\u90bb"}),"\n",(0,n.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u61d2\u60f0\u5b66\u4e60\u7684\u4e00\u4e2a\u5178\u578b\u793a\u4f8b\uff1aK-\u8fd1\u90bb\uff08K-Nearest Neighbors, KNN\uff09\u7b97\u6cd5\u3002\u4e4b\u6240\u4ee5\u79f0\u4e3a\u61d2\u60f0\uff0c\u662f\u56e0\u4e3a\u5b83\u4e0d\u4ece\u8bad\u7ec3\u6837\u672c\u4e2d\u5b66\u4e60\u5224\u522b\u51fd\u6570\uff0c\u800c\u662f\u5728\u8bb0\u4f4f\u5df2\u6709\u7684\u6837\u672c\u6570\u636e\u96c6\u7684\u57fa\u7840\u4e0a\u5bf9\u65b0\u6837\u672c\u8fdb\u884c\u5206\u7c7b\u3002"}),"\n",(0,n.jsx)(e.h2,{id:"\u7b97\u6cd5\u601d\u60f3",children:"\u7b97\u6cd5\u601d\u60f3"}),"\n",(0,n.jsx)(e.p,{children:"\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u53ef\u4ee5\u88ab\u5206\u4e3a\u4e24\u5927\u7c7b\uff0c\u53c2\u6570\u6a21\u578b\u548c\u53d8\u53c2\u6a21\u578b\uff1a"}),"\n",(0,n.jsx)(e.p,{children:"\u53c2\u6570\u6a21\u578b\uff1a\u5b66\u4e60\u65f6\u66f4\u65b0\u53c2\u6570\u7136\u540e\u5c06\u5176\u7528\u4e8e\u9884\u6d4b\uff0c\u5982\u611f\u77e5\u5668\u3001\u903b\u8f91\u56de\u5f52\u3001\u7ebf\u6027 SVM\u53d8\u53c2\u6a21\u578b\uff1a\u53c2\u6570\u4e0d\u56fa\u5b9a\uff0c\u5982\u51b3\u7b56\u6811/\u968f\u673a\u68ee\u6797\u3001\u4f7f\u7528\u6838\u6280\u5de7\u7684 SVM"}),"\n",(0,n.jsx)(e.p,{children:"KNN \u5c5e\u4e8e\u53d8\u53c2\u6a21\u578b\u7684\u4e00\u4e2a\u5b50\u7c7b\uff1a\u57fa\u4e8e\u5b9e\u4f8b\u7684\u5b66\u4e60\uff08instance-based learning\uff09\uff0c\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u8bb0\u4f4f\u6574\u4e2a\u8bad\u7ec3\u96c6\u3002\u61d2\u60f0\u5b66\u4e60\u662f\u57fa\u4e8e\u5b9e\u4f8b\u7684\u5b66\u4e60\u7684\u7279\u4f8b\uff0c\u5728\u6574\u4e2a\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e0d\u6d89\u53ca\u635f\u5931\u51fd\u6570\u7684\u6982\u5ff5\u3002"}),"\n",(0,n.jsx)(e.p,{children:"KNN \u7b97\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u6b65\u9aa4\u53ca\u56fe\u793a\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\u786e\u5b9a ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u7684\u5927\u5c0f\u548c\u8ddd\u79bb\u5ea6\u91cf\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u5bf9\u4e8e\u6d4b\u8bd5\u96c6\u4e2d\u7684\u4e00\u4e2a\u6837\u672c\uff0c\u627e\u5230\u8bad\u7ec3\u96c6\u4e2d\u548c\u5b83\u6700\u8fd1\u7684 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u4e2a\u6837\u672c\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u5c06\u8fd9 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u4e2a\u6837\u672c\u7684\u6295\u7968\u7ed3\u679c\u4f5c\u4e3a\u6d4b\u8bd5\u6837\u672c\u7684\u7c7b\u522b\u3002"]}),"\n"]}),"\n",(0,n.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-03_23.png",width:"400"}),"\n",(0,n.jsx)(e.h2,{id:"\u7b97\u6cd5\u5b9e\u73b0",children:"\u7b97\u6cd5\u5b9e\u73b0"}),"\n",(0,n.jsxs)(e.p,{children:["\u4ee5 Iris \u6570\u636e\u96c6\u4e3a\u4f8b\uff0c\u57fa\u4e8e Scikit-learn \u7684\u5b9e\u73b0\u5982\u4e0b\uff08\u8bbe\u7f6e ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"5"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k = 5"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"5"})]})]})]}),"\uff09\uff1a"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'from sklearn.neighbors import KNeighborsClassifier\n\nknn = KNeighborsClassifier(n_neighbors=5, p=2, metric="minkowski")\nknn.fit(X_train, y_train)\n\nX_combined = np.vstack((X_train, X_test))\ny_combined = np.hstack((y_train, y_test))\nplot_decision_regions(X_combined, y_combined, classifier=knn, test_idx=range(105, 150))\nplt.xlabel("petal length [standardized]")\nplt.ylabel("petal width [standardized]")\nplt.legend(loc="upper left")\nplt.show()\n'})}),"\n",(0,n.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-03_24.png",width:"600"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u7684\u9009\u62e9\u5bf9\u4e8e KNN \u6a21\u578b\u6765\u8bf4\u81f3\u5173\u91cd\u8981\uff0c\u53e6\u5916\u4e00\u4e2a\u91cd\u8981\u53c2\u6570\u4e3a\u8ddd\u79bb\u5ea6\u91cf\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4f7f\u7528\u7684\u662f ",(0,n.jsx)(e.code,{children:"minkowski"})," \u8ddd\u79bb\uff1a"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mtable,{rowspacing:"0.25em",columnalign:"right",columnspacing:"",children:(0,n.jsxs)(e.mtr,{children:[(0,n.jsx)(e.mtd,{className:"mtr-glue"}),(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,n.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mroot,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsx)(e.mi,{children:"k"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"p"})]})]}),(0,n.jsx)(e.mi,{children:"p"})]})]})})}),(0,n.jsx)(e.mtd,{className:"mtr-glue"}),(0,n.jsx)(e.mtd,{className:"mml-eqn-num"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{align}\n\\displaystyle d(x^{(i)},x^{(j)}) = \\sqrt[p] {\\sum_k |x^{(i)}_k - x^{(j)}_k|^p}\n\\end{align}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.34em",verticalAlign:"-1.42em"}}),(0,n.jsx)(e.span,{className:"mtable",children:(0,n.jsx)(e.span,{className:"col-align-r",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.92em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.92em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.5078em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.938em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.938em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsxs)(e.span,{className:"mord sqrt",children:[(0,n.jsx)(e.span,{className:"root",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2007em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.4854em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1118em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.5078em"},children:[(0,n.jsxs)(e.span,{className:"svg-align",style:{top:"-5em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"5em"}}),(0,n.jsxs)(e.span,{className:"mord",style:{paddingLeft:"1em"},children:[(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8479em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.3021em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.0448em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3987em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2198em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3013em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.0448em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3987em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2198em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3013em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.5904em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"})})]})})})})})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.4678em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"5em"}}),(0,n.jsx)(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"3.08em"},children:(0,n.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"3.08em",viewBox:"0 0 400000 3240",preserveAspectRatio:"xMinYMin slice",children:(0,n.jsx)(e.path,{d:"M473,2793\nc339.3,-1799.3,509.3,-2700,510,-2702 l0 -0\nc3.3,-7.3,9.3,-11,18,-11 H400000v40H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM1001 80h400000v40H1017.7z"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.5322em"},children:(0,n.jsx)(e.span,{})})})]})]})]})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.42em"},children:(0,n.jsx)(e.span,{})})})]})})})]}),(0,n.jsx)(e.span,{className:"tag",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.92em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.92em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.5078em"}}),(0,n.jsx)(e.span,{className:"eqn-num"})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.42em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u82e5 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p=2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})]})]}),"\uff0c\u5219\u4ee3\u8868",(0,n.jsx)(e.strong,{children:"\u6b27\u51e0\u91cc\u5f97\u8ddd\u79bb"}),"\uff1b\u82e5 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p=1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"\uff0c\u5219\u4ee3\u8868",(0,n.jsx)(e.strong,{children:"\u66fc\u54c8\u987f\u8ddd\u79bb"}),"\u3002"]}),"\n",(0,n.jsx)(e.h2,{id:"\u7b97\u6cd5\u7684\u7ef4\u5ea6\u95ee\u9898",children:"\u7b97\u6cd5\u7684\u7ef4\u5ea6\u95ee\u9898"}),"\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u7279\u5f81\u7a7a\u95f4\u7ef4\u5ea6\u975e\u5e38\u9ad8\uff0c\u7a7a\u95f4\u4e2d\u6700\u76f8\u4f3c\u7684\u4e24\u4e2a\u70b9\u4e5f\u53ef\u80fd\u8ddd\u79bb\u5f88\u8fdc\uff0cKNN \u7b97\u6cd5\u5f88\u5bb9\u6613\u8fc7\u62df\u5408\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u901a\u8fc7\u7279\u5f81\u9009\u62e9\u548c\u964d\u7ef4\u7b49\u65b9\u6cd5\u6765\u907f\u514d\u7ef4\u5ea6\u95ee\u9898\u3002"})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var n=a(67294);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);
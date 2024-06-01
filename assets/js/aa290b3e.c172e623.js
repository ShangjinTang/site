"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[680],{84518:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=s(74848),r=s(28453);const l={},c="\u5206\u7c7b\u6570\u636e\u7684\u9884\u5904\u7406",i={id:"machine-learning/data-preprocessing/categorical-data",title:"\u5206\u7c7b\u6570\u636e\u7684\u9884\u5904\u7406",description:"\u5728\u5b9e\u9645\u4e2d\uff0c\u91c7\u96c6\u7684\u6570\u636e\u5f80\u5f80\u4e0d\u5b8c\u6574\u3001\u4e0d\u4e00\u81f4\uff0c\u5e76\u53ef\u80fd\u5305\u542b\u8bb8\u591a\u9519\u8bef\u3002\u6570\u636e\u9884\u5904\u7406\uff08Data Preprocessing\uff09\u662f\u4e00\u79cd\u6570\u636e\u6316\u6398\u6280\u672f\uff0c\u5bf9\u539f\u59cb\u6570\u636e\u8fdb\u884c\u5904\u7406\u4ee5\u4fbf\u8fdb\u4e00\u6b65\u5206\u6790\u3002",source:"@site/docs/machine-learning/03-data-preprocessing/categorical-data.md",sourceDirName:"machine-learning/03-data-preprocessing",slug:"/machine-learning/data-preprocessing/categorical-data",permalink:"/site/docs/machine-learning/data-preprocessing/categorical-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"MCP \u795e\u7ecf\u5143\u548c\u611f\u77e5\u5668",permalink:"/site/docs/machine-learning/neural-network/mcp-neuron-and-perceptron"},next:{title:"\u7279\u5f81\u7f29\u653e",permalink:"/site/docs/machine-learning/data-preprocessing/feature-scaling"}},d={},o=[{value:"\u5b9a\u7c7b\u548c\u5b9a\u5e8f",id:"nominal-and-ordinal",level:2},{value:"\u5b9a\u5e8f\u7279\u5f81\u7684\u6620\u5c04",id:"mapping-of-ordinal-features",level:2},{value:"\u7c7b\u6807\u7b7e\u7684\u7f16\u7801",id:"encoding-of-class-labels",level:2},{value:"\u5b9a\u7c7b\u7279\u5f81\u7684\u72ec\u70ed\u7f16\u7801",id:"onehot-encoding-of-nominal-features",level:2},{value:"\u72ec\u70ed\u7f16\u7801\u7684\u539f\u7406",id:"onehot-encoding-principle",level:3},{value:"\u72ec\u70ed\u7f16\u7801\u7684\u5b9e\u73b0",id:"onehot-encoding-implementation",level:3},{value:"\u72ec\u70ed\u7f16\u7801\u7684\u76f8\u5173\u6027",id:"onehot-encoding-correlation",level:3}];function t(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u5206\u7c7b\u6570\u636e\u7684\u9884\u5904\u7406",children:"\u5206\u7c7b\u6570\u636e\u7684\u9884\u5904\u7406"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u4e2d\uff0c\u91c7\u96c6\u7684\u6570\u636e\u5f80\u5f80\u4e0d\u5b8c\u6574\u3001\u4e0d\u4e00\u81f4\uff0c\u5e76\u53ef\u80fd\u5305\u542b\u8bb8\u591a\u9519\u8bef\u3002\u6570\u636e\u9884\u5904\u7406\uff08Data Preprocessing\uff09\u662f\u4e00\u79cd\u6570\u636e\u6316\u6398\u6280\u672f\uff0c\u5bf9\u539f\u59cb\u6570\u636e\u8fdb\u884c\u5904\u7406\u4ee5\u4fbf\u8fdb\u4e00\u6b65\u5206\u6790\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5206\u7c7b\u6570\u636e\uff08Categorical Data\uff09\u7684\u5904\u7406\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"nominal-and-ordinal",children:"\u5b9a\u7c7b\u548c\u5b9a\u5e8f"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5904\u7406\u5206\u7c7b\u6570\u636e\u65f6\uff0c\u9700\u8981\u533a\u5206 ",(0,a.jsx)(n.strong,{children:"\u5b9a\u7c7b"}),"\uff08nominal\uff09\u7279\u5f81\u548c ",(0,a.jsx)(n.strong,{children:"\u5b9a\u5e8f"}),"\uff08ordinal\uff09\u7279\u5f81\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5b9a\u7c7b\u7279\u5f81\uff1a\u4e0d\u540c\u7c7b\u522b\uff0c\u76f8\u4e92\u95f4\u6bd4\u8f83\u6ca1\u6709\u610f\u4e49\u3002\u5982\u59d3\u540d\uff0c\u6027\u522b\uff0c\u6c34\u679c\u7b49\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5b9a\u5e8f\u7279\u5f81\uff1a\u4e0d\u540c\u7c7b\u522b\uff0c\u76f8\u4e92\u95f4\u53ef\u4ee5\u6bd4\u8f83\u6392\u5e8f\u3002\u5982\u975e\u5e38\u6ee1\u610f/\u4e00\u822c\u6ee1\u610f/\u4e0d\u6ee1\u610f\uff0c\u5c0f\u578b/\u4e2d\u578b/\u5927\u578b\u7b49\u3002\u548c\u6570\u5b57\u7279\u5f81\u4e0d\u540c\uff0c\u4e24\u8005\u4e4b\u5dee\u4e00\u822c\u6ca1\u6709\u610f\u4e49\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u7684 ",(0,a.jsx)(n.code,{children:"df"})," \u53d8\u91cf\u4ee3\u8868\u4e86 T \u6064\u7684\u4e00\u4e9b\u7279\u5f81\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> import pandas as pd\n>>> df = pd.DataFrame([\n... ['green', 'M', 10.1, 'class1'],\n... ['red', 'L', 13.5, 'class2'],\n... ['blue', 'XL', 15.3, 'class1']])\n>>> df.columns = ['color', 'size', 'price', 'classlabel']\n>>> df\n   color size  price classlabel\n0  green    M   10.1     class1\n1    red    L   13.5     class2\n2   blue   XL   15.3     class1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u4e2d\u5305\u62ec\u5b9a\u7c7b\u7279\u5f81 ",(0,a.jsx)(n.code,{children:"color\uff08\u989c\u8272\uff09"}),"\u3001\u5b9a\u5e8f\u7279\u5f81 ",(0,a.jsx)(n.code,{children:"size\uff08\u5c3a\u7801\uff09"})," \u548c\u6570\u5b57\u7279\u5f81 ",(0,a.jsx)(n.code,{children:"price\uff08\u4ef7\u683c\uff09"}),"\u3002\u6700\u540e\u4e00\u5217\u4e3a\u5206\u7c7b\u7c7b\u522b ",(0,a.jsx)(n.code,{children:"label"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"mapping-of-ordinal-features",children:"\u5b9a\u5e8f\u7279\u5f81\u7684\u6620\u5c04"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u5b66\u4e60\u7b97\u6cd5\u80fd\u591f\u8bc6\u522b\u5b9a\u5e8f\u7279\u5f81\uff0c\u9700\u8981\u624b\u52a8\u5c06\u5206\u7c7b\u5b57\u7b26\u4e32",(0,a.jsx)(n.strong,{children:"\u6620\u5c04"}),"\uff08Mapping\uff09\u4e3a\u6574\u578b\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u4e0a\u4f8b\u7684 T \u6064\u5c3a\u7801\uff0c\u5047\u8bbe\u5df2\u77e5\u6392\u5e8f ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"X"}),(0,a.jsx)(n.mi,{children:"L"}),(0,a.jsx)(n.mo,{children:">"}),(0,a.jsx)(n.mi,{children:"L"}),(0,a.jsx)(n.mo,{children:">"}),(0,a.jsx)(n.mi,{children:"M"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"XL > L > M"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:">"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:">"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})]})]}),"\uff0c\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u8f6c\u6362\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> size_mapping = {\n... 'XL': 3,\n... 'L': 2,\n... 'M': 1}\n>>> df['size'] = df['size'].map(size_mapping)\n>>> df\n   color  size  price classlabel\n0  green     1   10.1     class1\n1    red     2   13.5     class2\n2   blue     3   15.3     class1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5bf9\u4e8e\u53cd\u5411\u8f6c\u6362\uff0c\u521b\u5efa\u53cd\u5411\u8bcd\u5178\u7136\u540e\u8fdb\u884c ",(0,a.jsx)(n.code,{children:"map"})," \u5373\u53ef\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> inv_size_mapping = {v: k for k, v in size_mapping.items()}\n>>> df['size'].map(inv_size_mapping)\n0     M\n1     L\n2    XL\nName: size, dtype: object\n"})}),"\n",(0,a.jsx)(n.h2,{id:"encoding-of-class-labels",children:"\u7c7b\u6807\u7b7e\u7684\u7f16\u7801"}),"\n",(0,a.jsxs)(n.p,{children:["\u8bb8\u591a\u673a\u5668\u5b66\u4e60\u5e93\u8981\u6c42\u7c7b\u6807\u7b7e",(0,a.jsx)(n.strong,{children:"\u7f16\u7801"}),"\uff08Encoding\uff09\u4e3a\u6574\u6570\u503c\uff1b\u867d\u7136 scikit-learn \u5df2\u9ed8\u8ba4\u96c6\u6210\u4e86\u6b64\u5904\u7406\u673a\u5236\uff0c\u4f46\u662f\u5efa\u8bae\u517b\u6210\u624b\u52a8\u8f6c\u6362\u7684\u4e60\u60ef\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u7c7b\u6807\u7b7e\u7684\u6570\u5b57\u5927\u5c0f\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u679a\u4e3e\u8fdb\u884c\u6807\u7b7e\u8f6c\u6362\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> import numpy as np\n>>> class_mapping = {label:idx for idx,label in\n... enumerate(np.unique(df['classlabel']))}\n>>> class_mapping\n{'class1': 0, 'class2': 1}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5c06\u7c7b\u6807\u7b7e\u7f16\u7801\u4e3a\u6574\u6570\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> df['classlabel'] = df['classlabel'].map(class_mapping)\n>>> df\n   color  size  price  classlabel\n0  green     1   10.1           0\n1    red     2   13.5           1\n2   blue     3   15.3           0\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53cd\u5411\u8f6c\u6362\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> inv_class_mapping = {v: k for k, v in class_mapping.items()}\n>>> df['classlabel'] = df['classlabel'].map(inv_class_mapping)\n>>> df\n   color  size  price classlabel\n0  green     1   10.1     class1\n1    red     2   13.5     class2\n2   blue     3   15.3     class1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,a.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html",children:"sklearn.preprocessing.LabelEncoder"})," \u53ef\u4ee5\u66f4\u7b80\u4fbf\u5730\u5c06\u7c7b\u6807\u7b7e\u7f16\u7801\u4e3a\u6574\u6570\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> from sklearn.preprocessing import LabelEncoder\n>>> class_le = LabelEncoder()\n>>> y = class_le.fit_transform(df['classlabel'].values)\n>>> y\narray([0, 1, 0])\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53cd\u5411\u8f6c\u6362\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> class_le.inverse_transform(y)\narray(['class1', 'class2', 'class1'], dtype=object)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"onehot-encoding-of-nominal-features",children:"\u5b9a\u7c7b\u7279\u5f81\u7684\u72ec\u70ed\u7f16\u7801"}),"\n",(0,a.jsx)(n.h3,{id:"onehot-encoding-principle",children:"\u72ec\u70ed\u7f16\u7801\u7684\u539f\u7406"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4ecb\u7ecd",(0,a.jsx)(n.strong,{children:"\u72ec\u70ed\u7f16\u7801"}),"\uff08One-Hot Encoding\uff09\u4e4b\u524d\uff0c\u5148\u8bf4\u660e\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u4e0d\u7528\u4e4b\u524d\u7ae0\u8282\u7684\u7f16\u7801\u65b9\u5f0f\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\u8fdb\u884c\u7f16\u7801\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> X = df[['color', 'size', 'price']].values\n>>> color_le = LabelEncoder()\n>>> X[:, 0] = color_le.fit_transform(X[:, 0])\n>>> X\narray([[1, 1, 10.1],\n       [2, 2, 13.5],\n       [0, 3, 15.3]], dtype=object)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7f16\u7801\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"blue = 0"}),"\n",(0,a.jsx)(n.li,{children:"green = 1"}),"\n",(0,a.jsx)(n.li,{children:"red = 2"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u628a\u4e0a\u8ff0\u6570\u636e\u63d0\u4f9b\u7ed9\u5206\u7c7b\u5668\uff0c\u5219\u4f1a\u53d1\u751f\u5904\u7406\u5206\u7c7b\u6570\u636e\u7684\u6700\u5e38\u89c1\u9519\u8bef\u4e4b\u4e00\uff1a\u867d\u7136\u6211\u4eec\u77e5\u9053 0\u30011\u30012 \u8fd9\u4e9b\u6570\u5b57\u4e0d\u4ee3\u8868\u5927\u5c0f\uff0c\u4f46\u662f\u7b97\u6cd5\u5e76\u4e0d\u77e5\u9053\u3002\u56e0\u6b64\u7b97\u6cd5\u5728\u5b66\u4e60\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u9ed8\u8ba4\u5c06\u5176\u5173\u8054\u8d77\u6765\uff0c\u5373\u5047\u5b9a ",(0,a.jsx)(n.code,{children:"red > green > blue"}),"\u3002\u8fd9\u6837\u5904\u7406\u540e\uff0c\u7b97\u6cd5\u4ecd\u7136\u80fd\u4ea7\u751f\u4e00\u5b9a\u7684\u7ed3\u679c\uff0c\u4f46\u5176\u6027\u80fd\u4f1a\u53d7\u5f71\u54cd\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u72ec\u70ed\u7f16\u7801\u7684\u601d\u60f3\u4e3a\u4e3a\u6bcf\u4e00\u4e2a\u503c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7279\u5f81\u3002\u5bf9\u4e8e\u4e0a\u8ff0\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u628a\u989c\u8272\u7279\u5f81\u8f6c\u6362\u4e3a\u4e09\u4e2a\u65b0\u7684\u7279\u5f81\uff1a",(0,a.jsx)(n.code,{children:"blue"}),"\u3001",(0,a.jsx)(n.code,{children:"green"})," \u548c ",(0,a.jsx)(n.code,{children:"red"}),"\uff0c\u7136\u540e\u4f7f\u7528\u4e8c\u8fdb\u5236\u503c\u6807\u8bb0\u3002\u5bf9\u4e8e ",(0,a.jsx)(n.code,{children:"blue"})," \u6837\u672c\u800c\u8a00\uff0c\u7f16\u7801\u4e3a ",(0,a.jsx)(n.code,{children:"blue=1, green=0, red=0"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"onehot-encoding-implementation",children:"\u72ec\u70ed\u7f16\u7801\u7684\u5b9e\u73b0"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html",children:"sklearn.preprocessing.OneHotEncoder"})," \u5bf9\u7279\u5f81 ",(0,a.jsx)(n.code,{children:"color"})," \u8fdb\u884c\u7f16\u7801\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a00\u758f\u77e9\u9635\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> from sklearn.preprocessing import OneHotEncoder\n>>> ohe = OneHotEncoder(categorical_features=[0])\n>>> ohe.fit_transform(X).toarray()\narray([[  0. ,   1. ,   0. ,   1. ,  10.1],\n       [  0. ,   0. ,   1. ,   2. ,  13.5],\n       [  1. ,   0. ,   0. ,   3. ,  15.3]])\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u66f4\u65b9\u4fbf\u7684\u72ec\u70ed\u7f16\u7801\u65b9\u6cd5\u662f pandas \u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"get_dummies"})," \u65b9\u6cd5\uff0c\u8f6c\u6362 DataFrame \u7684\u6307\u5b9a\u5b57\u7b26\u4e32\u5217\uff0c\u5176\u4ed6\u5217\u4fdd\u6301\u4e0d\u53d8\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> pd.get_dummies(df[['price', 'color', 'size']])\n   price  size  color_blue  color_green  color_red\n0   10.1     1           0            1          0\n1   13.5     2           0            0          1\n2   15.3     3           1            0          0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"onehot-encoding-correlation",children:"\u72ec\u70ed\u7f16\u7801\u7684\u76f8\u5173\u6027"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528\u70ed\u95e8\u7684\u7f16\u7801\u6570\u636e\u96c6\u65f6\uff0c\u5fc5\u987b\u8bb0\u4f4f\u5b83\u5f15\u5165\u4e86\u591a\u91cd\u5171\u7ebf\u6027\uff0c\u5373\u67d0\u4e2a\u53d8\u91cf\u53ef\u4ee5\u7531\u5176\u4ed6\u53d8\u91cf\u7ebf\u6027\u9884\u6d4b\u5f97\u5230\uff08\u5982\u4e0a\u9762\u7684\u77e9\u9635\uff0c\u82e5\u5df2\u77e5 ",(0,a.jsx)(n.code,{children:"blue"}),"\u3001",(0,a.jsx)(n.code,{children:"green"}),"\u3001",(0,a.jsx)(n.code,{children:"red"})," \u4e2d\u7684\u4efb\u610f\u4e24\u4e2a\uff0c\u53ef\u4ee5\u5f97\u5230\u6700\u540e\u4e00\u4e2a\uff09\u3002\u8fd9\u4f1a\u5bf9\u67d0\u4e9b\u64cd\u4f5c\uff08\u5982\u77e9\u9635\u6c42\u9006\uff09\u9020\u6210\u5f71\u54cd\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e3a\u4e86\u51cf\u5c11\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u5173\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u4ece\u72ec\u70ed\u7f16\u7801\u6570\u7ec4\u4e2d\u5220\u9664\u4e00\u4e2a\u7279\u5f81\u5217\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sklearn.preprocessing.OneHotEncoder"})," \u4e0d\u63d0\u4f9b\u7279\u5f81\u5217\u5220\u9664\u65b9\u6cd5\uff0c\u9700\u8981\u8f6c\u6362\u4e3a numpy \u6570\u7ec4\u540e\u8fdb\u884c\u5207\u7247\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> ohe = OneHotEncoder(categorical_features=[0])\n>>> ohe.fit_transform(X).toarray()[:, 1:]\narray([[ 1. , 0. , 1. , 10.1],\n[ 0. , 1. , 2. , 13.5],\n[ 0. , 0. , 3. , 15.3]])\n"})}),"\n",(0,a.jsxs)(n.p,{children:["pandas \u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"get_dummies"})," \u63d0\u4f9b\u53c2\u6570 ",(0,a.jsx)(n.code,{children:"drop_first"}),"\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5220\u9664\u9996\u4e2a\u7279\u5f81\u5217\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:">>> pd.get_dummies(df[['price', 'color', 'size']],\n... drop_first=True)\n   price  size  color_green  color_red\n0   10.1     1            1          0\n1   13.5     2            0          1\n2   15.3     3            0          0\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var a=s(96540);const r={},l=a.createContext(r);function c(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
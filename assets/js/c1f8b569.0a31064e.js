"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2317],{67872:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=s(85893),i=s(11151);const c={title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",tags:["Machine Learning","Scikit-learn","Model Selection","K-Fold Cross Validation","Holdout"]},l=void 0,o={id:"machinelearning/model-selection/AI-model-selection-k-fold-cross-validation",title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",description:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K-Fold Cross Validation\uff09\u662f\u4e00\u79cd\u6a21\u578b\u9009\u62e9\uff08Model Selection\uff09\u65b9\u6cd5\uff0c\u5c06\u521d\u59cb\u6837\u672c\u5206\u4e3a K \u4e2a\u6298\u53e0\uff08Fold\uff09\uff0c\u4e00\u4e2a\u6298\u53e0\u4f5c\u4e3a\u6570\u636e\u96c6\u3001\u5176\u4f59 K-1 \u4e2a\u6298\u53e0\u4f5c\u4e3a\u8bad\u7ec3\u96c6\uff0c\u53cd\u590d\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4 K \u6b21\u5e76\u5c06\u5f97\u5230\u7684\u7ed3\u679c\u7efc\u5408\u8d77\u6765\uff0c\u5f97\u5230\u6700\u7ec8\u7684\u8bc4\u4f30\u7ed3\u679c\u3002",source:"@site/docs/machinelearning/model-selection/20180211-AI-model-selection-k-fold-cross-validation.md",sourceDirName:"machinelearning/model-selection",slug:"/machinelearning/model-selection/AI-model-selection-k-fold-cross-validation",permalink:"/site/docs/machinelearning/model-selection/AI-model-selection-k-fold-cross-validation",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/docs/tags/machine-learning"},{label:"Scikit-learn",permalink:"/site/docs/tags/scikit-learn"},{label:"Model Selection",permalink:"/site/docs/tags/model-selection"},{label:"K-Fold Cross Validation",permalink:"/site/docs/tags/k-fold-cross-validation"},{label:"Holdout",permalink:"/site/docs/tags/holdout"}],version:"current",sidebarPosition:20180211,frontMatter:{title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",tags:["Machine Learning","Scikit-learn","Model Selection","K-Fold Cross Validation","Holdout"]},sidebar:"machinelearningSidebar",previous:{title:"ROC \u548c AUC",permalink:"/site/docs/machinelearning/metrics/AI-roc_and_auc"},next:{title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",permalink:"/site/docs/machinelearning/model-selection/AI-model-selection-learning-and-validation-curve"}},t={},a=[{value:"Holdout \u9a8c\u8bc1",id:"holdout-\u9a8c\u8bc1",level:2},{value:"\u6570\u636e\u96c6\u5212\u5206\uff1a\u6d4b\u8bd5\u96c6\u548c\u8bad\u7ec3\u96c6",id:"\u6570\u636e\u96c6\u5212\u5206\u6d4b\u8bd5\u96c6\u548c\u8bad\u7ec3\u96c6",level:3},{value:"\u6570\u636e\u96c6\u5212\u5206\uff1a\u6d4b\u8bd5\u96c6\u3001\u9a8c\u8bc1\u96c6\u548c\u8bad\u7ec3\u96c6",id:"\u6570\u636e\u96c6\u5212\u5206\u6d4b\u8bd5\u96c6\u9a8c\u8bc1\u96c6\u548c\u8bad\u7ec3\u96c6",level:3},{value:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",id:"k-\u6298\u4ea4\u53c9\u9a8c\u8bc1",level:2},{value:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684 scikit-learn \u5b9e\u73b0",id:"\u5206\u5c42-k-\u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684-scikit-learn-\u5b9e\u73b0",level:2},{value:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1",id:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K-Fold Cross Validation\uff09\u662f\u4e00\u79cd\u6a21\u578b\u9009\u62e9\uff08Model Selection\uff09\u65b9\u6cd5\uff0c\u5c06\u521d\u59cb\u6837\u672c\u5206\u4e3a K \u4e2a\u6298\u53e0\uff08Fold\uff09\uff0c\u4e00\u4e2a\u6298\u53e0\u4f5c\u4e3a\u6570\u636e\u96c6\u3001\u5176\u4f59 K-1 \u4e2a\u6298\u53e0\u4f5c\u4e3a\u8bad\u7ec3\u96c6\uff0c\u53cd\u590d\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4 K \u6b21\u5e76\u5c06\u5f97\u5230\u7684\u7ed3\u679c\u7efc\u5408\u8d77\u6765\uff0c\u5f97\u5230\u6700\u7ec8\u7684\u8bc4\u4f30\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"holdout-\u9a8c\u8bc1",children:"Holdout \u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u96c6\u5212\u5206\u6d4b\u8bd5\u96c6\u548c\u8bad\u7ec3\u96c6",children:"\u6570\u636e\u96c6\u5212\u5206\uff1a\u6d4b\u8bd5\u96c6\u548c\u8bad\u7ec3\u96c6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u8bc4\u4f30\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u6cdb\u5316\u6027\u80fd\uff0c\u4e00\u79cd\u7ecf\u5178\u548c\u666e\u904d\u7684\u65b9\u6cd5\u662f holdout \u4ea4\u53c9\u9a8c\u8bc1\u3002holdout \u65b9\u6cd5\u5c06\u521d\u59cb\u6570\u636e\u96c6\u5206\u6210\u5355\u72ec\u7684",(0,r.jsx)(n.strong,{children:"\u8bad\u7ec3\u96c6"}),"\uff08Training Set\uff09\u548c",(0,r.jsx)(n.strong,{children:"\u6d4b\u8bd5\u96c6"}),"\uff08Test Set\uff09\uff0c\u524d\u8005\u7528\u4e8e\u6a21\u578b\u8bad\u7ec3\uff0c\u540e\u8005\u7528\u4e8e\u8bc4\u4f30\u6a21\u578b\u7684\u6cdb\u5316\u6027\u80fd\u3002\u5728\u5178\u578b\u7684\u673a\u5668\u5b66\u4e60\u7a0b\u5e8f\u4e2d\uff0c\u4eba\u4eec\u4f1a\u5bf9\u8d85\u53c2\u6570\u8fdb\u884c\u4e0d\u65ad\u8c03\u6574\u548c\u6bd4\u8f83\uff0c\u4ee5\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5bf9\u4e0d\u53ef\u89c1\u6570\u636e\u8fdb\u884c\u9884\u6d4b\u7684\u6027\u80fd\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u88ab\u79f0\u4e3a",(0,r.jsx)(n.strong,{children:"\u6a21\u578b\u9009\u62e9"}),"\uff08Model Selection\uff09\uff0c\u5c1d\u8bd5\u5c06\u8d85\u53c2\u6570\u8c03\u6574\u81f3\u6700\u4f18\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u5728\u6a21\u578b\u9009\u62e9\u8fc7\u7a0b\u4e2d\u91cd\u590d\u4f7f\u7528\u76f8\u540c\u7684\u6d4b\u8bd5\u96c6\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6d4b\u8bd5\u96c6\u5c31\u4e0d\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u6d4b\u8bd5\u96c6\u3002\u771f\u6b63\u7684\u6d4b\u8bd5\u96c6\u5e94\u8be5\u662f\u4e0d\u53ef\u89c1\u7684\u3002\u5982\u679c\u4e00\u76f4\u5c1d\u8bd5\u5bf9\u6d4b\u8bd5\u96c6\u62df\u5408\uff0c\u8fd9\u4e2a\u6d4b\u8bd5\u96c6\u5b9e\u9645\u4e0a\u5c31\u662f\u8bad\u7ec3\u96c6\u7684\u4e00\u90e8\u5206\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u7ba1\u5982\u6b64\uff0c\u8bb8\u591a\u4eba\u4ecd\u7136\u5c06\u6570\u636e\u96c6\u5206\u4e3a\u6d4b\u8bd5\u96c6\u548c\u8bad\u7ec3\u96c6\uff0c\u7136\u540e\u6309\u7167\u6d4b\u8bd5\u96c6\u7684\u8868\u73b0\u6765\u8fdb\u884c\u6a21\u578b\u9009\u62e9\u3002\u8fd9\u4e0d\u662f\u4e00\u4e2a\u826f\u597d\u7684\u673a\u5668\u5b66\u4e60\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u96c6\u5212\u5206\u6d4b\u8bd5\u96c6\u9a8c\u8bc1\u96c6\u548c\u8bad\u7ec3\u96c6",children:"\u6570\u636e\u96c6\u5212\u5206\uff1a\u6d4b\u8bd5\u96c6\u3001\u9a8c\u8bc1\u96c6\u548c\u8bad\u7ec3\u96c6"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u79cd\u66f4\u597d\u7684\u6a21\u578b\u9009\u62e9\u65b9\u6cd5\u662f\u5c06\u6570\u636e\u5206\u6210\u4e09\u90e8\u5206\uff1a\u8bad\u7ec3\u96c6\u3001",(0,r.jsx)(n.strong,{children:"\u9a8c\u8bc1\u96c6"}),"\uff08Validation Set\uff09\u548c\u6d4b\u8bd5\u96c6\u3002\u8bad\u7ec3\u96c6\u7528\u4e8e\u62df\u5408\u4e0d\u540c\u7684\u6a21\u578b\uff0c\u7136\u540e\u6839\u636e\u6a21\u578b\u5728\u9a8c\u8bc1\u96c6\u4e0a\u7684\u8868\u73b0\u6765\u8fdb\u884c\u6a21\u578b\u9009\u62e9\u3002\u5728\u6574\u4e2a\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\uff0c\u6d4b\u8bd5\u96c6\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4e0d\u4f1a\u5bf9\u6d4b\u8bd5\u96c6\u8fc7\u62df\u5408\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u56fe\u8bf4\u660e\u4e86\u4fdd\u6301\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6982\u5ff5\uff0c\u4f7f\u7528\u8bad\u7ec3\u96c6\u548c\u9a8c\u8bc1\u96c6\u8fdb\u884c\u53cd\u590d\u8bad\u7ec3\u5e76\u5c06\u8d85\u53c2\u6570\u8c03\u6574\u81f3\u8f83\u4f18\u6c34\u5e73\uff0c\u518d\u4f7f\u7528\u6d4b\u8bd5\u96c6\u6765\u8bc4\u4f30\u6a21\u578b\u7684\u6cdb\u5316\u6027\u80fd\uff1a"}),"\n",(0,r.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_02.png",width:"600"}),"\n",(0,r.jsx)(n.p,{children:"holdout \u65b9\u6cd5\u7684\u7f3a\u70b9\u662f\u7b97\u6cd5\u8bc4\u4f30\u5bf9\u6570\u636e\u5212\u5206\u975e\u5e38\u654f\u611f\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684\u6570\u636e\u5212\u5206\u6bd4\u4f8b\u548c\u4e0d\u540c\u7684\u5206\u5e03\uff0c\u8bc4\u4f30\u7ed3\u679c\u53ef\u80fd\u4f1a\u6709\u8f83\u5927\u5dee\u5f02\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"k-\u6298\u4ea4\u53c9\u9a8c\u8bc1",children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6b65\u9aa4\u662f\uff0c\u968f\u673a\u5730\u5c06\u8bad\u7ec3\u6570\u636e\u96c6\u5206\u6210 K \u6b21\u6298\u53e0\u3002\u5176\u4e2d K-1 \u6b21\u6298\u53e0\u7528\u4e8e\u6a21\u578b\u8bad\u7ec3\u3001\u53e6\u5916\u4e00\u4e2a\u6298\u53e0\u7528\u4e8e\u6027\u80fd\u8bc4\u4f30\uff0c\u4e0a\u8ff0\u6b65\u9aa4\u91cd\u590d K \u6b21\uff08\u6bcf\u6b21\u62bd\u53d6\u4e0d\u540c\u7684\u6298\u53e0\uff09\uff0c\u83b7\u5f97 K \u4e2a\u6a21\u578b\u7684\u6027\u80fd\u8bc4\u4f30\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u53ef\u4ee5\u5f97\u5230\u4ee4\u4eba\u6ee1\u610f\u7684\u6cdb\u5316\u6027\u80fd\u7684\u6700\u4f18\u8d85\u53c2\u6570\u503c\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u51c6\u786e\u7387\u548c\u9c81\u68d2\u6027\u3002K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u8868\u73b0\u597d\u7684\u539f\u56e0\u5728\u4e8e\u5176\u62e5\u6709\u66f4\u591a\u7684\u8bad\u7ec3\u6837\u672c\uff0c\u4e14\u6bcf\u4e2a\u8bad\u7ec3\u6837\u672c\u90fd\u6070\u597d\u9a8c\u8bc1\u4e00\u6b21\uff0c\u8fd9\u6837\u53ef\u4ee5\u4ea7\u751f\u8f83\u4f4e\u7684\u65b9\u5dee\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u56fe\u8bf4\u660e\u4e86\u8be6\u7ec6\u7684 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K = 10\uff09\u7684\u6d41\u7a0b\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"test fold"})," \u5b9e\u9645\u4e0a\u53d1\u6325\u7684\u662f\u9a8c\u8bc1\u96c6\u7684\u4f5c\u7528\uff1a"]}),"\n",(0,r.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_03.png",width:"600"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u4ee5\u5f80\u7814\u7a76\u4eba\u5458\u7684\u7ecf\u9a8c\uff0c\u8d85\u53c2\u6570 K \u4e00\u822c\u63a8\u8350\u91c7\u7528 10\u3002\u5982\u679c K \u592a\u5c0f\uff0c\u65b9\u5dee\u4f1a\u8f83\u9ad8\uff0c\u5982\u679c K \u592a\u5927\uff0c\u6a21\u578b\u7684\u8bad\u7ec3\u65f6\u95f4\u4f1a\u53d8\u957f\u3002\u5bf9\u4e8e\u5927\u578b\u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e K \u7684\u503c\uff08\u5982 K = 5\uff09\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e00\u79cd\u7279\u6b8a\u7684 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u4e3a",(0,r.jsx)(n.strong,{children:"\u7559\u4e00\u9a8c\u8bc1"}),"\uff08Leave-One-Out Cross-Validation, LOOCV\uff09\uff0cK = n\uff08n \u4e3a\u6570\u636e\u96c6\u7684\u6837\u672c\u6570\u91cf\uff09\uff0c\u6bcf\u6298\u53ea\u6709\u4e00\u4e2a\u6837\u672c\uff0c\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u5c0f\u6570\u636e\u96c6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5206\u5c42-k-\u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684-scikit-learn-\u5b9e\u73b0",children:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684 scikit-learn \u5b9e\u73b0"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1"}),"\uff08Stratified K-Fold Cross-Validation\uff09\u662f\u5bf9 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6539\u8fdb\uff0c\u5206\u5c42\u7684\u610f\u601d\u662f\u6bcf\u4e00\u4e2a\u6298\u53e0\u4e2d\u7684\u5206\u7c7b\u6bd4\u4f8b\u90fd\u4e0e\u539f\u59cb\u6570\u636e\u96c6\u76f8\u540c\uff0c\u80fd\u66f4\u597d\u5730\u9002\u7528\u4e8e\u4e0d\u540c\u5206\u7c7b\u7684\u6837\u672c\u6570\u5dee\u5f02\u8f83\u5927\u7684\u60c5\u51b5\u3002\u4e0b\u9762\u57fa\u4e8e scikit-learn \u4e2d\u7684\u8fdb\u884c\u8bf4\u660e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5148\u505a\u597d\u4ea4\u53c9\u9a8c\u8bc1\u4e4b\u524d\u7684\u524d\u63d0\u5de5\u4f5c\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"pipe_lr"})," \u662f\u7ba1\u9053\u5bf9\u8c61\uff0c\u5c01\u88c5\u4e86\u6807\u51c6\u5316\u3001PCA \u548c\u903b\u8f91\u56de\u5f52\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import pandas as pd\r\nfrom sklearn.preprocessing import LabelEncoder\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.preprocessing import StandardScaler\r\nfrom sklearn.decomposition import PCA\r\nfrom sklearn.linear_model import LogisticRegression\r\nfrom sklearn.pipeline import make_pipeline\r\n\r\ndf = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data',\r\n                 header=None)\r\n\r\nX = df.loc[:, 2:].values\r\ny = df.loc[:, 1].values\r\nle = LabelEncoder()\r\ny = le.fit_transform(y)\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, stratify=y, random_state=1)\r\n\r\npipe_lr = make_pipeline(StandardScaler(),\r\n                        PCA(n_components=2),\r\n                        LogisticRegression(random_state=1))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html",children:"sklearn.model_selection.StratifiedKFold"})," \u8fdb\u884c K \u6298\u5206\u5c42\u4ea4\u53c9\u9a8c\u8bc1\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import numpy as np\r\nfrom sklearn.model_selection import StratifiedKFold\r\n\r\nkfold = StratifiedKFold(n_splits=10, random_state=1).split(X_train, y_train)\r\nscores = []\r\nfor k, (train, test) in enumerate(kfold):\r\n    pipe_lr.fit(X_train[train], y_train[train])\r\n    score = pipe_lr.score(X_train[test], y_train[test])\r\n    scores.append(score)\r\n    print('Fold: {:2d}, Class dist.: {}, Acc: {:.3f}'.format(k + 1, np.bincount(y_train[train]), score)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u6837\u672c\u5206\u4e3a ",(0,r.jsx)(n.code,{children:"n_splits=10"})," \u4e2a\u6298\u53e0\uff0c\u5728\u6bcf\u4e00\u6b21\u5faa\u73af\u4e2d\u4f7f\u7528\u7ba1\u9053\u5bf9\u8c61 ",(0,r.jsx)(n.code,{children:"pipe_lr"})," \u5bf9\u6d4b\u8bd5\u96c6\u8fdb\u884c\u8bad\u7ec3\uff0c\u7136\u540e\u89c2\u5bdf\u8bad\u7ec3\u540e\u7684\u6a21\u578b\u5728\u9a8c\u8bc1\u96c6\u4e0a\u7684\u51c6\u786e\u7387\u3002\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Fold:  1, Class dist.: [256 153], Acc: 0.935\r\nFold:  2, Class dist.: [256 153], Acc: 0.935\r\nFold:  3, Class dist.: [256 153], Acc: 0.957\r\nFold:  4, Class dist.: [256 153], Acc: 0.957\r\nFold:  5, Class dist.: [256 153], Acc: 0.935\r\nFold:  6, Class dist.: [257 153], Acc: 0.956\r\nFold:  7, Class dist.: [257 153], Acc: 0.978\r\nFold:  8, Class dist.: [257 153], Acc: 0.933\r\nFold:  9, Class dist.: [257 153], Acc: 0.956\r\nFold: 10, Class dist.: [257 153], Acc: 0.956\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8ba1\u7b97 10 \u6b21\u8bad\u7ec3\u7684\u51c6\u786e\u7387\u7684\u5e73\u5747\u503c\u548c\u65b9\u5dee\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print('CV accuracy: {:.3f} +/- {:.3f}'.format(np.mean(scores), np.std(scores)))\r\n# Output: CV accuracy: 0.950 +/- 0.014\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u662f\u901a\u8fc7\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b\u8bf4\u660e\u4ea4\u53c9\u9a8c\u8bc1\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_score.html",children:"sklearn.model_selection.cross_val_score"})," \u5b9e\u73b0\u6a21\u578b\u8bc4\u4f30\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"scores = cross_val_score(estimator=pipe_lr, X=X_train, y=y_train, cv=10, n_jobs=1)\r\nprint('CV accuracy scores: {}'.format(scores))\r\nprint('CV accuracy: {:.3f} +/- {:.3f}'.format(np.mean(scores), np.std(scores)))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"cv"})," \u4e3a\u6298\u53e0\u6570\u91cf\uff0c",(0,r.jsx)(n.code,{children:"n_jobs"})," \u662f\u4ee3\u7801\u8fd0\u884c\u4f7f\u7528 CPU \u6838\u5fc3\u7684\u6570\u91cf\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CV accuracy scores: [ 0.93478261  0.93478261  0.95652174  0.95652174  0.93478261  0.95555556\r\n  0.97777778  0.93333333  0.95555556  0.95555556]\r\nCV accuracy: 0.950 +/- 0.014\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7ed3\u679c\u4e0e\u4e4b\u524d\u4e00\u81f4\uff0c\u91c7\u7528 ",(0,r.jsx)(n.code,{children:"cross_val_score"})," \u53ef\u4ee5\u975e\u5e38\u4fbf\u6377\u5730\u5bf9\u4ea4\u53c9\u9a8c\u8bc1\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1",children:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1\uff08Nested Cross Validation\uff09\u7b97\u6cd5\u5177\u6709\u66f4\u7a33\u5b9a\u7684\u6027\u80fd\uff0c\u5728\u8bad\u7ec3\u96c6\u4e0a\u7684\u7ed3\u679c\u76f8\u5bf9\u4e8e\u6d4b\u8bd5\u96c6\u51e0\u4e4e\u662f\u65e0\u504f\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u601d\u60f3\u662f\u5148\u4f7f\u7528 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u5c06\u6570\u636e\u5206\u4e3a\u8bad\u7ec3\u6298\u53e0\u548c\u6d4b\u8bd5\u6298\u53e0\uff0c\u7136\u540e\u5728\u8bad\u7ec3\u6298\u53e0\u5185\u90e8\u4f7f\u7528 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u540e\u7528\u4e8e\u6d4b\u8bd5\u6298\u53e0\uff0c\u4ee5\u9009\u62e9\u6700\u4f18\u6a21\u578b\u3002\u5982\u4e0b\u4e3a 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\u7684\u793a\u610f\u56fe\uff1a"}),"\n",(0,r.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_07.png",width:"600"}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e SVM \u7684 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"gs = GridSearchCV(estimator=pipe_svc, param_grid=param_grid, scoring='accuracy', cv=2)\r\nscores = cross_val_score(gs, X_train, y_train, scoring='accuracy', cv=5)\r\nprint('CV accuracy: {:.3f} +/- {:.3f}'.format(np.mean(scores), np.std(scores)))\r\n# Output: CV accuracy: 0.974 +/- 0.015\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u51b3\u7b56\u6811\u7684 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.tree import DecisionTreeClassifier\r\ngs = GridSearchCV(estimator=DecisionTreeClassifier(om_state=0),\r\nparam_grid=[{'max_depth': [1, 2, 3, 4, 5, 6, 7, None]}], scoring='accuracy', cv=2)\r\nscores = cross_val_score(gs, X_train, y_train, scoring='accuracy', cv=5)\r\nprint('CV accuracy: %.3f +/- %.3f' % (np.mean(scores), np.std(scores)))\r\n# Output: CV accuracy: 0.934 +/- 0.016\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u57fa\u4e8e SVM \u6a21\u578b\u7684\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1\u76f8\u6bd4\u4e8e\u57fa\u4e8e\u51b3\u7b56\u6811\u7684\u4ea4\u53c9\u9a8c\u8bc1\u66f4\u4f18\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(67294);const i={},c=r.createContext(i);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
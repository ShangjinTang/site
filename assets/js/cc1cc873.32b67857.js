"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1624],{99555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var i=r(85893),s=r(11151);const a={title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",tags:["Machine Learning","Scikit-learn","Model Selection","Bias-Variance"]},l=void 0,t={id:"machinelearning/model-selection/AI-model-selection-learning-and-validation-curve",title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",description:"\u7ed8\u5236\u6a21\u578b\u7684\u5b66\u4e60\u66f2\u7ebf\uff08Learning Curve\uff09\u548c\u9a8c\u8bc1\u66f2\u7ebf\uff08Validation Curve\uff09\u662f\u5e38\u7528\u7684\u8c03\u8bd5\u624b\u6bb5\uff0c\u80fd\u591f\u4ece\u4e2d\u76f4\u89c2\u770b\u5230\u6a21\u578b\u5728\u6d4b\u8bd5\u96c6\u548c\u9a8c\u8bc1\u96c6\u4e0a\u7684\u8868\u73b0\uff0c\u4ee5\u53ca\u5224\u65ad\u662f\u5426\u6709\u8fc7\u62df\u5408\u6216\u6b20\u62df\u5408\u95ee\u9898\u3002",source:"@site/docs/machinelearning/model-selection/20180213-AI-model-selection-learning-and-validation-curve.md",sourceDirName:"machinelearning/model-selection",slug:"/machinelearning/model-selection/AI-model-selection-learning-and-validation-curve",permalink:"/docusaurus/docs/machinelearning/model-selection/AI-model-selection-learning-and-validation-curve",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/docusaurus/docs/tags/machine-learning"},{label:"Scikit-learn",permalink:"/docusaurus/docs/tags/scikit-learn"},{label:"Model Selection",permalink:"/docusaurus/docs/tags/model-selection"},{label:"Bias-Variance",permalink:"/docusaurus/docs/tags/bias-variance"}],version:"current",sidebarPosition:20180213,frontMatter:{title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",tags:["Machine Learning","Scikit-learn","Model Selection","Bias-Variance"]},sidebar:"machinelearningSidebar",previous:{title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",permalink:"/docusaurus/docs/machinelearning/model-selection/AI-model-selection-k-fold-cross-validation"},next:{title:"\u7f51\u683c\u641c\u7d22",permalink:"/docusaurus/docs/machinelearning/model-selection/AI-model-selection-grid-search"}},c={},o=[{value:"\u65b9\u5dee-\u504f\u5dee\u6743\u8861",id:"\u65b9\u5dee-\u504f\u5dee\u6743\u8861",level:2},{value:"\u5b66\u4e60\u66f2\u7ebf",id:"\u5b66\u4e60\u66f2\u7ebf",level:2},{value:"\u9a8c\u8bc1\u66f2\u7ebf",id:"\u9a8c\u8bc1\u66f2\u7ebf",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u7ed8\u5236\u6a21\u578b\u7684\u5b66\u4e60\u66f2\u7ebf\uff08Learning Curve\uff09\u548c\u9a8c\u8bc1\u66f2\u7ebf\uff08Validation Curve\uff09\u662f\u5e38\u7528\u7684\u8c03\u8bd5\u624b\u6bb5\uff0c\u80fd\u591f\u4ece\u4e2d\u76f4\u89c2\u770b\u5230\u6a21\u578b\u5728\u6d4b\u8bd5\u96c6\u548c\u9a8c\u8bc1\u96c6\u4e0a\u7684\u8868\u73b0\uff0c\u4ee5\u53ca\u5224\u65ad\u662f\u5426\u6709\u8fc7\u62df\u5408\u6216\u6b20\u62df\u5408\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u5dee-\u504f\u5dee\u6743\u8861",children:"\u65b9\u5dee-\u504f\u5dee\u6743\u8861"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u66f2\u7ebf\u53ef\u4ee5\u5bb9\u6613\u770b\u51fa\u6a21\u578b\u662f\u5426\u5b58\u5728\u9ad8\u504f\u5dee\u6216\u9ad8\u504f\u5dee\uff0c\u4ee5\u53ca\u5224\u65ad\u5426\u80fd\u591f\u901a\u8fc7\u589e\u52a0\u6837\u672c\u6570\u76ee\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u5b66\u4e60\u66f2\u7ebf\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5de6\u4e0a\u5b50\u56fe\uff1a\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf\u90fd\u5f88\u5dee\uff0c\u9ad8\u504f\u5dee\u3001\u6b20\u62df\u5408\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53f3\u4e0a\u5b50\u56fe\uff1a\u5b66\u4e60\u66f2\u7ebf\u5f88\u597d\u4f46\u9a8c\u8bc1\u66f2\u7ebf\u5f88\u5dee\uff0c\u9ad8\u65b9\u5dee\u3001\u8fc7\u62df\u5408"}),"\n",(0,i.jsxs)(n.li,{children:["\u53f3\u4e0b\u5b50\u56fe\uff1a\u5728\u62e5\u6709\u4e00\u5b9a\u6570\u91cf\u6837\u672c\u7684\u60c5\u51b5\u4e0b\uff0c\u5177\u6709\u826f\u597d\u7684",(0,i.jsx)(n.strong,{children:"\u65b9\u5dee-\u504f\u5dee\u6743\u8861"}),"\uff08bias-variance tradeoff\uff09\u548c\u62df\u5408\u7a0b\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_04.png",width:"600"}),"\n",(0,i.jsx)(n.h2,{id:"\u5b66\u4e60\u66f2\u7ebf",children:"\u5b66\u4e60\u66f2\u7ebf"}),"\n",(0,i.jsx)(n.p,{children:"\u7ed8\u5236\u5b66\u4e60\u66f2\u7ebf\u65f6\uff0c\u81ea\u53d8\u91cf\u4e3a\u6837\u672c\u6570\uff0c\u56e0\u53d8\u91cf\u4e3a\u8bc4\u4ef7\u6307\u6807\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8bfb\u53d6 wdbc \u6570\u636e\u96c6\uff0c\u5e76\u5c06\u5176\u5206\u4e3a 80% \u7684\u8bad\u7ec3\u96c6\u548c 20% \u7684\u6d4b\u8bd5\u96c6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pandas as pd\r\nfrom sklearn.preprocessing import LabelEncoder\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.preprocessing import StandardScaler\r\nfrom sklearn.decomposition import PCA\r\nfrom sklearn.linear_model import LogisticRegression\r\nfrom sklearn.pipeline import make_pipeline\r\n\r\ndf = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data',\r\n                 header=None)\r\nX = df.loc[:, 2:].values\r\ny = df.loc[:, 1].values\r\nle = LabelEncoder()\r\ny = le.fit_transform(y)\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, stratify=y, random_state=1)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.learning_curve.html",children:"sklearn.model_selection.learning_curve"})," \u751f\u6210\u5b66\u4e60\u66f2\u7ebf\u7684\u503c\uff0c\u7136\u540e\u901a\u8fc7 pyplot \u7ed8\u5236\u6a21\u578b\u5bf9\u4e8e\u8bad\u7ec3\u96c6\u548c\u9a8c\u8bc1\u96c6\u7684\u51c6\u786e\u7387\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pipe_lr"}),"\uff1ascikit-learn \u7ba1\u9053\u5bf9\u8c61"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"train_sizes"}),"\uff1a\u6d4b\u8bd5\u96c6\u4e3a\u6570\u636e\u96c6 ",(0,i.jsx)(n.code,{children:"X_train"})," \u7684\u6bd4\u4f8b\uff08\u8fd9\u91cc\u4e3a 10%\u300120%\u3001\u2026\u3001100%\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cv"}),"\uff1a\u5206\u5c42\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6298\u53e0\u6570 K"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"n_jobs"}),"\uff1a\u4f7f\u7528\u7684 CPU \u6838\u5fc3\u6570"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"train_scores"})," \u548c ",(0,i.jsx)(n.code,{children:"test_scores"}),"\uff1a\u5171\u6709",(0,i.jsx)(n.code,{children:"len(train_sizes)"})," \u884c\uff0c\u6bcf\u884c\u6709 ",(0,i.jsx)(n.code,{children:"cv"})," \u4e2a\u4ea4\u53c9\u9a8c\u8bc1\u7684\u5206\u6570\uff0c\u56e0\u6b64\u5747\u503c\u6807\u51c6\u5dee\u90fd\u662f\u6309\u884c\u8ba1\u7b97 ",(0,i.jsx)(n.code,{children:"axis=1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"plt.fill_between"}),"\uff1a\u901a\u8fc7\u6807\u51c6\u5dee\u7ed8\u5236\u6570\u636e\u7684\u79bb\u6563\u7a0b\u5ea6"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\r\nimport matplotlib.pyplot as plt\r\nfrom sklearn.model_selection import learning_curve\r\n\r\npipe_lr = make_pipeline(StandardScaler(),\r\n                        LogisticRegression(random_state=1))\r\ntrain_sizes, train_scores, test_scores = learning_curve(estimator=pipe_lr, X=X_train, y=y_train,\r\n                                                        train_sizes=np.linspace(0.1, 1.0, 10), cv=10, n_jobs=1)\r\ntrain_mean = np.mean(train_scores, axis=1)\r\ntrain_std = np.std(train_scores, axis=1)\r\ntest_mean = np.mean(test_scores, axis=1)\r\ntest_std = np.std(test_scores, axis=1)\r\n\r\nplt.plot(train_sizes, train_mean, color='blue', marker='o', markersize=5, label='training accuracy')\r\nplt.fill_between(train_sizes, train_mean + train_std, train_mean - train_std, alpha=0.15, color='blue')\r\nplt.plot(train_sizes, test_mean, color='green', linestyle='--', marker='s', markersize=5, label='validation accuracy')\r\nplt.fill_between(train_sizes, test_mean + test_std, test_mean - test_std, alpha=0.15, color='green')\r\nplt.grid()\r\nplt.xlabel('Number of training samples')\r\nplt.ylabel('Accuracy')\r\nplt.legend(loc='lower right')\r\nplt.ylim([0.8, 1.03])\r\nplt.show()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f97\u5230\u6a21\u578b\u7684\u51c6\u786e\u7387\u968f\u6837\u672c\u6570\u53d8\u5316\u7684\u66f2\u7ebf\uff1a"}),"\n",(0,i.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_05.png",width:"600"}),"\n",(0,i.jsx)(n.p,{children:"\u82e5\u8bad\u7ec3\u96c6\u7684\u6837\u672c\u6570\u5c0f\u4e8e 250\uff0c\u8bad\u7ec3\u96c6\u7684\u51c6\u786e\u7387\u5f88\u9ad8\uff0c\u4f46\u662f\u6d4b\u8bd5\u96c6\u7684\u51c6\u786e\u7387\u76f8\u5bf9\u8f83\u4f4e\uff0c\u6a21\u578b\u5b58\u5728\u8fc7\u62df\u5408\u95ee\u9898\u3002\u82e5\u8bad\u7ec3\u96c6\u7684\u6837\u672c\u6570\u5927\u4e8e 250\uff0c\u5219\u6a21\u578b\u5728\u8bad\u7ec3\u96c6\u548c\u9a8c\u8bc1\u96c6\u4e0a\u7684\u8868\u73b0\u90fd\u975e\u5e38\u597d\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u9a8c\u8bc1\u66f2\u7ebf",children:"\u9a8c\u8bc1\u66f2\u7ebf"}),"\n",(0,i.jsxs)(n.p,{children:["\u548c\u5b66\u4e60\u66f2\u7ebf\u4e0d\u540c\uff0c\u9a8c\u8bc1\u66f2\u7ebf\u7684\u56e0\u53d8\u91cf\u5f80\u5f80\u662f\u6a21\u578b\u7684\u53c2\u6570\u503c\uff0c\u5982\u903b\u8f91\u56de\u5f52\u4e2d\u7684\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"C"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html",children:"sklearn.model_selection.validation_curve"})," \u751f\u6210\u5b66\u4e60\u66f2\u7ebf\u7684\u503c\uff0c\u7136\u540e\u901a\u8fc7 pyplot \u7ed8\u5236\u6a21\u578b\u5bf9\u4e8e\u8bad\u7ec3\u96c6\u548c\u9a8c\u8bc1\u96c6\u7684\u51c6\u786e\u7387\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pipe_lr"}),"\uff1ascikit-learn \u7ba1\u9053\u5bf9\u8c61"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"logisticregression__C"}),"\uff1a\u903b\u8f91\u56de\u5f52\u7684\u8d85\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"C"}),"\uff0c\u6b63\u5219\u5316\u7cfb\u6570\u7684\u5012\u6570"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"param_range"}),"\uff1a\u8d85\u53c2\u6570\u7684\u53d6\u503c\u8303\u56f4"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import validation_curve\r\n\r\nparam_range = [0.001, 0.01, 0.1, 1.0, 10.0, 100.0]\r\ntrain_scores, test_scores = validation_curve(estimator=pipe_lr, X=X_train, y=y_train,\r\n                                             param_name='logisticregression__C', param_range=param_range, cv=10)\r\ntrain_mean = np.mean(train_scores, axis=1)\r\ntrain_std = np.std(train_scores, axis=1)\r\ntest_mean = np.mean(test_scores, axis=1)\r\ntest_std = np.std(test_scores, axis=1)\r\nplt.plot(param_range, train_mean, color='blue', marker='o', markersize=5, label='training accuracy')\r\nplt.fill_between(param_range, train_mean + train_std, train_mean - train_std, alpha=0.15, color='blue')\r\nplt.plot(param_range, test_mean, color='green', linestyle='--', marker='s', markersize=5, label='validation accuracy')\r\nplt.fill_between(param_range, test_mean + test_std, test_mean - test_std, alpha=0.15, color='green')\r\nplt.grid()\r\nplt.xscale('log')\r\nplt.legend(loc='lower right')\r\nplt.xlabel('Parameter C')\r\nplt.ylabel('Accuracy')\r\nplt.ylim([0.8, 1.03])\r\nplt.show()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u5230\u6a21\u578b\u7684\u51c6\u786e\u7387\u968f\u903b\u8f91\u56de\u5f52\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"C"})," \u53d8\u5316\u7684\u66f2\u7ebf\uff1a"]}),"\n",(0,i.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_05.png",width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6b63\u5219\u5316\u5f3a\u5ea6\u8f83\u5927\uff08",(0,i.jsx)(n.code,{children:"C"})," \u5c0f\u4e8e 0.01\uff09\u65f6\uff0c\u6a21\u578b\u6709\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6b20\u62df\u5408\uff08\u9ad8\u504f\u5dee\uff09\uff0c\u4f46\u5728\u6b63\u5219\u5316\u5f3a\u5ea6\u8f83\u5c0f\uff08",(0,i.jsx)(n.code,{children:"C"})," \u5927\u4e8e 10\uff09\u65f6\uff0c\u6a21\u578b\u53c8\u4f1a\u51fa\u73b0\u8fc7\u62df\u5408\uff08\u9ad8\u65b9\u5dee\uff09\u3002\u8d85\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"C"})," \u7684\u53d6\u503c\u5728 0.01 \u548c 0.1 \u4e4b\u95f4\u65f6\uff0c\u6a21\u578b\u6027\u80fd\u6700\u4f18\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>l});var i=r(67294);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
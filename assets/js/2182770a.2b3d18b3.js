"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2122],{31700:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=s(85893),i=s(11151);const c={},a="K \u6298\u4ea4\u53c9\u9a8c\u8bc1",o={id:"machine-learning/model-selection/k-fold-cross-validation",title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",description:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K-Fold Cross-Validation\uff09\u662f\u4e00\u79cd\u6a21\u578b\u9009\u62e9\uff08Model Selection\uff09\u65b9\u6cd5\uff0c\u5c06\u521d\u59cb\u6837\u672c\u5206\u4e3a K \u4e2a\u6298\u53e0\uff08Fold\uff09\uff0c\u4e00\u4e2a\u6298\u53e0\u4f5c\u4e3a\u6570\u636e\u96c6\u3001\u5176\u4f59 K-1 \u4e2a\u6298\u53e0\u4f5c\u4e3a\u8bad\u7ec3\u96c6\uff0c\u53cd\u590d\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4 K \u6b21\u5e76\u5c06\u5f97\u5230\u7684\u7ed3\u679c\u7efc\u5408\u8d77\u6765\uff0c\u5f97\u5230\u6700\u7ec8\u7684\u8bc4\u4f30\u7ed3\u679c\u3002K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u89e3\u51b3\u4e86 holdout \u53ea\u5212\u5206\u6570\u636e\u4e00\u6b21\u7684\u7f3a\u70b9\u3002",source:"@site/docs/machine-learning/07-model-selection/k-fold-cross-validation.md",sourceDirName:"machine-learning/07-model-selection",slug:"/machine-learning/model-selection/k-fold-cross-validation",permalink:"/site/docs/machine-learning/model-selection/k-fold-cross-validation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"Holdout \u9a8c\u8bc1",permalink:"/site/docs/machine-learning/model-selection/holdout"},next:{title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",permalink:"/site/docs/machine-learning/model-selection/learning-and-validation-curve"}},t={},l=[{value:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u539f\u7406",id:"kfold-cross-validation-principle",level:2},{value:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684 scikit-learn \u5b9e\u73b0",id:"stratified-kfold-cross-validation-using-sklearn",level:2},{value:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1",id:"nested-cross-validation",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"k-\u6298\u4ea4\u53c9\u9a8c\u8bc1",children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1"}),"\n",(0,r.jsx)(e.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K-Fold Cross-Validation\uff09\u662f\u4e00\u79cd\u6a21\u578b\u9009\u62e9\uff08Model Selection\uff09\u65b9\u6cd5\uff0c\u5c06\u521d\u59cb\u6837\u672c\u5206\u4e3a K \u4e2a\u6298\u53e0\uff08Fold\uff09\uff0c\u4e00\u4e2a\u6298\u53e0\u4f5c\u4e3a\u6570\u636e\u96c6\u3001\u5176\u4f59 K-1 \u4e2a\u6298\u53e0\u4f5c\u4e3a\u8bad\u7ec3\u96c6\uff0c\u53cd\u590d\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4 K \u6b21\u5e76\u5c06\u5f97\u5230\u7684\u7ed3\u679c\u7efc\u5408\u8d77\u6765\uff0c\u5f97\u5230\u6700\u7ec8\u7684\u8bc4\u4f30\u7ed3\u679c\u3002K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u89e3\u51b3\u4e86 holdout \u53ea\u5212\u5206\u6570\u636e\u4e00\u6b21\u7684\u7f3a\u70b9\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"kfold-cross-validation-principle",children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u539f\u7406"}),"\n",(0,r.jsx)(e.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6b65\u9aa4\u662f\uff0c\u968f\u673a\u5730\u5c06\u8bad\u7ec3\u6570\u636e\u96c6\u5206\u6210 K \u6b21\u6298\u53e0\u3002\u5176\u4e2d K-1 \u6b21\u6298\u53e0\u7528\u4e8e\u6a21\u578b\u8bad\u7ec3\u3001\u53e6\u5916\u4e00\u4e2a\u6298\u53e0\u7528\u4e8e\u6027\u80fd\u8bc4\u4f30\uff0c\u4e0a\u8ff0\u6b65\u9aa4\u91cd\u590d K \u6b21\uff08\u6bcf\u6b21\u62bd\u53d6\u4e0d\u540c\u7684\u6298\u53e0\uff09\uff0c\u83b7\u5f97 K \u4e2a\u6a21\u578b\u7684\u6027\u80fd\u8bc4\u4f30\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u53ef\u4ee5\u5f97\u5230\u4ee4\u4eba\u6ee1\u610f\u7684\u6cdb\u5316\u6027\u80fd\u7684\u6700\u4f18\u8d85\u53c2\u6570\u503c\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u51c6\u786e\u7387\u548c\u9c81\u68d2\u6027\u3002K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u8868\u73b0\u597d\u7684\u539f\u56e0\u5728\u4e8e\u5176\u62e5\u6709\u66f4\u591a\u7684\u8bad\u7ec3\u6837\u672c\uff0c\u4e14\u6bcf\u4e2a\u8bad\u7ec3\u6837\u672c\u90fd\u6070\u597d\u9a8c\u8bc1\u4e00\u6b21\uff0c\u8fd9\u6837\u53ef\u4ee5\u4ea7\u751f\u8f83\u4f4e\u7684\u65b9\u5dee\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u56fe\u8bf4\u660e\u4e86\u8be6\u7ec6\u7684 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\uff08K = 10\uff09\u7684\u6d41\u7a0b\uff0c\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"test fold"})," \u5b9e\u9645\u4e0a\u53d1\u6325\u7684\u662f\u9a8c\u8bc1\u96c6\u7684\u4f5c\u7528\uff1a"]}),"\n",(0,r.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_03.png",width:"600"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u4ee5\u5f80\u7814\u7a76\u4eba\u5458\u7684\u7ecf\u9a8c\uff0c\u8d85\u53c2\u6570 K \u4e00\u822c\u63a8\u8350\u91c7\u7528 10\u3002\u5982\u679c K \u592a\u5c0f\uff0c\u65b9\u5dee\u4f1a\u8f83\u9ad8\uff0c\u5982\u679c K \u592a\u5927\uff0c\u6a21\u578b\u7684\u8bad\u7ec3\u65f6\u95f4\u4f1a\u53d8\u957f\u3002\u5bf9\u4e8e\u5927\u578b\u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e K \u7684\u503c\uff08\u5982 K = 5\uff09\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4e00\u79cd\u7279\u6b8a\u7684 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u4e3a",(0,r.jsx)(e.strong,{children:"\u7559\u4e00\u9a8c\u8bc1"}),"\uff08Leave-One-Out Cross-Validation, LOOCV\uff09\uff0cK = n\uff08n \u4e3a\u6570\u636e\u96c6\u7684\u6837\u672c\u6570\u91cf\uff09\uff0c\u6bcf\u6298\u53ea\u6709\u4e00\u4e2a\u6837\u672c\uff0c\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u5c0f\u6570\u636e\u96c6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"stratified-kfold-cross-validation-using-sklearn",children:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684 scikit-learn \u5b9e\u73b0"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5206\u5c42 K \u6298\u4ea4\u53c9\u9a8c\u8bc1"}),"\uff08Stratified K-Fold Cross-Validation\uff09\u662f\u5bf9 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u7684\u6539\u8fdb\uff0c\u5206\u5c42\u7684\u610f\u601d\u662f\u6bcf\u4e00\u4e2a\u6298\u53e0\u4e2d\u7684\u5206\u7c7b\u6bd4\u4f8b\u90fd\u4e0e\u539f\u59cb\u6570\u636e\u96c6\u76f8\u540c\uff0c\u80fd\u66f4\u597d\u5730\u9002\u7528\u4e8e\u4e0d\u540c\u5206\u7c7b\u7684\u6837\u672c\u6570\u5dee\u5f02\u8f83\u5927\u7684\u60c5\u51b5\u3002\u4e0b\u9762\u57fa\u4e8e scikit-learn \u4e2d\u7684\u8fdb\u884c\u8bf4\u660e\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5148\u505a\u597d\u4ea4\u53c9\u9a8c\u8bc1\u4e4b\u524d\u7684\u524d\u63d0\u5de5\u4f5c\uff0c\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"pipe_lr"})," \u662f\u7ba1\u9053\u5bf9\u8c61\uff0c\u5c01\u88c5\u4e86\u6807\u51c6\u5316\u3001PCA \u548c\u903b\u8f91\u56de\u5f52\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'import pandas as pd\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import make_pipeline\n\ndf = pd.read_csv(\n    "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data",\n    header=None,\n)\n\nX = df.loc[:, 2:].values\ny = df.loc[:, 1].values\nle = LabelEncoder()\ny = le.fit_transform(y)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, stratify=y, random_state=1\n)\n\npipe_lr = make_pipeline(\n    StandardScaler(), PCA(n_components=2), LogisticRegression(random_state=1)\n)\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html",children:"sklearn.model_selection.StratifiedKFold"})," \u8fdb\u884c K \u6298\u5206\u5c42\u4ea4\u53c9\u9a8c\u8bc1\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom sklearn.model_selection import StratifiedKFold\n\nkfold = StratifiedKFold(n_splits=10, random_state=1).split(X_train, y_train)\nscores = []\nfor k, (train, test) in enumerate(kfold):\n    pipe_lr.fit(X_train[train], y_train[train])\n    score = pipe_lr.score(X_train[test], y_train[test])\n    scores.append(score)\n    print('Fold: {:2d}, Class dist.: {}, Acc: {:.3f}'.format(k + 1, np.bincount(y_train[train]), score)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5c06\u6837\u672c\u5206\u4e3a ",(0,r.jsx)(e.code,{children:"n_splits=10"})," \u4e2a\u6298\u53e0\uff0c\u5728\u6bcf\u4e00\u6b21\u5faa\u73af\u4e2d\u4f7f\u7528\u7ba1\u9053\u5bf9\u8c61 ",(0,r.jsx)(e.code,{children:"pipe_lr"})," \u5bf9\u6d4b\u8bd5\u96c6\u8fdb\u884c\u8bad\u7ec3\uff0c\u7136\u540e\u89c2\u5bdf\u8bad\u7ec3\u540e\u7684\u6a21\u578b\u5728\u9a8c\u8bc1\u96c6\u4e0a\u7684\u51c6\u786e\u7387\u3002\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",children:"Fold:  1, Class dist.: [256 153], Acc: 0.935\nFold:  2, Class dist.: [256 153], Acc: 0.935\nFold:  3, Class dist.: [256 153], Acc: 0.957\nFold:  4, Class dist.: [256 153], Acc: 0.957\nFold:  5, Class dist.: [256 153], Acc: 0.935\nFold:  6, Class dist.: [257 153], Acc: 0.956\nFold:  7, Class dist.: [257 153], Acc: 0.978\nFold:  8, Class dist.: [257 153], Acc: 0.933\nFold:  9, Class dist.: [257 153], Acc: 0.956\nFold: 10, Class dist.: [257 153], Acc: 0.956\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8ba1\u7b97 10 \u6b21\u8bad\u7ec3\u7684\u51c6\u786e\u7387\u7684\u5e73\u5747\u503c\u548c\u65b9\u5dee\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'print("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.950 +/- 0.014\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u9762\u662f\u901a\u8fc7\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b\u8bf4\u660e\u4ea4\u53c9\u9a8c\u8bc1\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_score.html",children:"sklearn.model_selection.cross_val_score"})," \u5b9e\u73b0\u6a21\u578b\u8bc4\u4f30\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'scores = cross_val_score(estimator=pipe_lr, X=X_train, y=y_train, cv=10, n_jobs=1)\nprint("CV accuracy scores: {}".format(scores))\nprint("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"cv"})," \u4e3a\u6298\u53e0\u6570\u91cf\uff0c",(0,r.jsx)(e.code,{children:"n_jobs"})," \u662f\u4ee3\u7801\u8fd0\u884c\u4f7f\u7528 CPU \u6838\u5fc3\u7684\u6570\u91cf\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",children:"CV accuracy scores: [ 0.93478261  0.93478261  0.95652174  0.95652174  0.93478261  0.95555556\n  0.97777778  0.93333333  0.95555556  0.95555556]\nCV accuracy: 0.950 +/- 0.014\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7ed3\u679c\u4e0e\u4e4b\u524d\u4e00\u81f4\uff0c\u91c7\u7528 ",(0,r.jsx)(e.code,{children:"cross_val_score"})," \u53ef\u4ee5\u975e\u5e38\u4fbf\u6377\u5730\u5bf9\u4ea4\u53c9\u9a8c\u8bc1\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"nested-cross-validation",children:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1"}),"\n",(0,r.jsx)(e.p,{children:"\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1\uff08Nested Cross-Validation\uff09\u7b97\u6cd5\u5177\u6709\u66f4\u7a33\u5b9a\u7684\u6027\u80fd\uff0c\u5728\u8bad\u7ec3\u96c6\u4e0a\u7684\u7ed3\u679c\u76f8\u5bf9\u4e8e\u6d4b\u8bd5\u96c6\u51e0\u4e4e\u662f\u65e0\u504f\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u601d\u60f3\u662f\u5148\u4f7f\u7528 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u5c06\u6570\u636e\u5206\u4e3a\u8bad\u7ec3\u6298\u53e0\u548c\u6d4b\u8bd5\u6298\u53e0\uff0c\u7136\u540e\u5728\u8bad\u7ec3\u6298\u53e0\u5185\u90e8\u4f7f\u7528 K \u6298\u4ea4\u53c9\u9a8c\u8bc1\u540e\u7528\u4e8e\u6d4b\u8bd5\u6298\u53e0\uff0c\u4ee5\u9009\u62e9\u6700\u4f18\u6a21\u578b\u3002\u5982\u4e0b\u4e3a 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\u7684\u793a\u610f\u56fe\uff1a"}),"\n",(0,r.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_07.png",width:"600"}),"\n",(0,r.jsx)(e.p,{children:"\u57fa\u4e8e SVM \u7684 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'gs = GridSearchCV(estimator=pipe_svc, param_grid=param_grid, scoring="accuracy", cv=2)\nscores = cross_val_score(gs, X_train, y_train, scoring="accuracy", cv=5)\nprint("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.974 +/- 0.015\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u57fa\u4e8e\u51b3\u7b56\u6811\u7684 5\xd72 \u6298\u53e0\u4ea4\u53c9\u9a8c\u8bc1\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from sklearn.tree import DecisionTreeClassifier\n\ngs = GridSearchCV(\n    estimator=DecisionTreeClassifier(om_state=0),\n    param_grid=[{"max_depth": [1, 2, 3, 4, 5, 6, 7, None]}],\n    scoring="accuracy",\n    cv=2,\n)\nscores = cross_val_score(gs, X_train, y_train, scoring="accuracy", cv=5)\nprint("CV accuracy: %.3f +/- %.3f" % (np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.934 +/- 0.016\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u57fa\u4e8e SVM \u6a21\u578b\u7684\u5d4c\u5957\u4ea4\u53c9\u9a8c\u8bc1\u76f8\u6bd4\u4e8e\u57fa\u4e8e\u51b3\u7b56\u6811\u7684\u4ea4\u53c9\u9a8c\u8bc1\u66f4\u4f18\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>a});var r=s(67294);const i={},c=r.createContext(i);function a(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);
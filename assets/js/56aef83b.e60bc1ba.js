"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3699],{74686:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>g,toc:()=>o});var i=e(85893),a=e(11151);const t={title:"Bagging",tags:["Machine Learning","Bagging","Scikit-learn"]},s=void 0,g={id:"machinelearning/traditional-algorithms/bagging/AI-bagging",title:"Bagging",description:"\u5957\u888b\u7b97\u6cd5\uff08Bagging\uff09\u662f\u4e00\u79cd\u96c6\u6210\u5b66\u4e60\u6280\u672f\uff0c\u4e0e MajorityVoteClassifier \u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e bagging \u4e0d\u662f\u6bcf\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u8bad\u7ec3\u96c6\u6765\u62df\u5408\u5355\u4e2a\u5206\u7c7b\u5668\uff0c\u800c\u662f\u5bf9\u521d\u59cb\u8bad\u7ec3\u96c6\u8fdb\u884c bootstrap \u62bd\u6837\u3002\u8fd9\u4e5f\u662f bagging \u79f0\u4e3a\u5f15\u5bfc\u805a\u5408\uff08Bootstrap Aggregating\uff09\u7684\u539f\u56e0\u3002",source:"@site/docs/machinelearning/traditional-algorithms/bagging/20180317-AI-bagging.md",sourceDirName:"machinelearning/traditional-algorithms/bagging",slug:"/machinelearning/traditional-algorithms/bagging/AI-bagging",permalink:"/site/docs/machinelearning/traditional-algorithms/bagging/AI-bagging",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/docs/tags/machine-learning"},{label:"Bagging",permalink:"/site/docs/tags/bagging"},{label:"Scikit-learn",permalink:"/site/docs/tags/scikit-learn"}],version:"current",sidebarPosition:20180317,frontMatter:{title:"Bagging",tags:["Machine Learning","Bagging","Scikit-learn"]},sidebar:"machinelearningSidebar",previous:{title:"TensorFlow API\uff1alogits \u7684 softmax \u4ea4\u53c9\u71b5\u7684\u8ba1\u7b97",permalink:"/site/docs/machinelearning/tensorflow-1/AI-tensorflow-api-softmax_cross_entropy_with_logits"},next:{title:"\u51b3\u7b56\u6811\u548c\u968f\u673a\u68ee\u6797",permalink:"/site/docs/machinelearning/traditional-algorithms/decision-tree/AI-decision-tree"}},l={},o=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",id:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",level:3},{value:"bagging \u7684 scikit-learn \u5b9e\u73b0",id:"bagging-\u7684-scikit-learn-\u5b9e\u73b0",level:3}];function c(n){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u5957\u888b\u7b97\u6cd5\uff08Bagging\uff09\u662f\u4e00\u79cd\u96c6\u6210\u5b66\u4e60\u6280\u672f\uff0c\u4e0e ",(0,i.jsx)(r.code,{children:"MajorityVoteClassifier"})," \u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e bagging \u4e0d\u662f\u6bcf\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u8bad\u7ec3\u96c6\u6765\u62df\u5408\u5355\u4e2a\u5206\u7c7b\u5668\uff0c\u800c\u662f\u5bf9\u521d\u59cb\u8bad\u7ec3\u96c6\u8fdb\u884c bootstrap \u62bd\u6837\u3002\u8fd9\u4e5f\u662f bagging \u79f0\u4e3a\u5f15\u5bfc\u805a\u5408\uff08Bootstrap Aggregating\uff09\u7684\u539f\u56e0\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(r.p,{children:"Bagging \u7684\u6982\u5ff5\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,i.jsx)(r.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_06.png",width:"500"}),"\n",(0,i.jsx)(r.p,{children:"\u4e3a\u4e86\u66f4\u5177\u4f53\u8bf4\u660e bagging \u5206\u7c7b\u5668\u5982\u4f55\u5de5\u4f5c\uff0c\u53c2\u89c1\u4e0b\u56fe\u4e2d\u7684\u793a\u4f8b\u3002\u56fe\u4e2d\u6709 n = 7 \u4e2a\u8bad\u7ec3\u5b9e\u4f8b\uff08\u4ee5\u7d22\u5f15 1 - 7 \u8868\u793a\uff09\uff0c\u5728\u6bcf\u8f6e bagging \u4e2d\u8fdb\u884c\u6709\u653e\u56de\u5730\u62bd\u6837 k \u6b21\uff0c\u7136\u540e\u4f7f\u7528\u8fd9 k \u6b21\u7684\u805a\u5408\u6837\u672c\uff08\u5141\u8bb8\u5305\u542b\u91cd\u590d\u7684\u6837\u672c\uff09\u6765\u62df\u5408\u5206\u7c7b\u5668\u3002\u5982\u679c\u805a\u5408\u6837\u672c\u4e2d\u7684\u6837\u672c\u6570\u7b49\u4e8e\u5b9e\u4f8b\uff0c\u5219\u79f0\u4e3a bootstrap \u62bd\u6837\u3002"}),"\n",(0,i.jsx)(r.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_07.png",width:"500"}),"\n",(0,i.jsx)(r.p,{children:"bagging \u4e00\u822c\u4f7f\u7528\u5728\u8f83\u5f31\u7684\u5206\u7c7b\u5668\u4e2d\u4f7f\u7528\uff08\u5982\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\uff09\uff0c\u4ee5\u964d\u4f4e\u5176\u8fc7\u62df\u5408\u7684\u95ee\u9898\u3002\u5728\u5bf9\u6bcf\u4e2a\u5206\u7c7b\u5668\u8fdb\u884c\u62df\u5408\u540e\uff0c\u901a\u8fc7\u591a\u6570\u6295\u7968\u65b9\u6cd5\u6765\u5bf9\u7ed3\u679c\u8fdb\u884c\u9884\u6d4b\u3002"}),"\n",(0,i.jsx)(r.h3,{id:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",children:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406"}),"\n",(0,i.jsx)(r.p,{children:"\u4e3a\u4e86\u5bf9 bagging \u65b9\u6cd5\u8fdb\u884c\u8bf4\u660e\uff0c\u8fd9\u91cc\u4f7f\u7528 Wine \u6570\u636e\u96c6\uff0c\u5e76\u63d0\u53d6\u503c\u4e3a 2 \u548c 3 \u7684\u5206\u7c7b\u6807\u7b7e\u3001\u7279\u5f81\u4e3a Alcohol \u548c OD280/OD315 \u7684\u6837\u672c\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"import pandas as pd\r\n\r\ndf_wine = pd.read_csv('https://archive.ics.uci.edu/ml/'\r\n                      'machine-learning-databases/wine/wine.data',\r\n                      header=None)\r\ndf_wine.columns = ['Class label', 'Alcohol', 'Malic acid', 'Ash',\r\n                   'Alcalinity of ash', 'Magnesium', 'Total phenols',\r\n                   'Flavanoids', 'Nonflavanoid phenols', 'Proanthocyanins',\r\n                   'Color intensity', 'Hue', 'OD280/OD315 of diluted wines',\r\n                   'Proline']\r\n\r\ndf_wine = df_wine[df_wine['Class label'] != 1]\r\n\r\ny = df_wine['Class label'].values\r\nX = df_wine[['Alcohol', 'OD280/OD315 of diluted wines']].values\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5c06\u6807\u7b7e\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u5c06\u6837\u672c\u5206\u4e3a 80% \u7684\u8bad\u7ec3\u96c6\u548c 20% \u7684\u6d4b\u8bd5\u96c6\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"from sklearn.preprocessing import LabelEncoder\r\nfrom sklearn.model_selection import train_test_split\r\n\r\n\r\nle = LabelEncoder()\r\ny = le.fit_transform(y)\r\n\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1, stratify=y)\n"})}),"\n",(0,i.jsx)(r.h3,{id:"bagging-\u7684-scikit-learn-\u5b9e\u73b0",children:"bagging \u7684 scikit-learn \u5b9e\u73b0"}),"\n",(0,i.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(r.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html",children:"sklearn.ensemble.BaggingClassifier"})," \u8fdb\u884c bagging\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd9\u91cc\u4f7f\u7528\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\u4f5c\u4e3a\u57fa\u7840\u5206\u7c7b\u5668\uff0c\u5e76\u5efa\u7acb 500 \u4e2a\u7531\u4e0d\u540c bootstrap \u6837\u672c\u5f97\u5230\u7684\u51b3\u7b56\u6811\u7684\u96c6\u5408\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"from sklearn.ensemble import BaggingClassifier\r\nfrom sklearn.tree import DecisionTreeClassifier\r\n\r\ntree = DecisionTreeClassifier(criterion='entropy', \r\n                              max_depth=None,\r\n                              random_state=1)\r\n\r\nbag = BaggingClassifier(base_estimator=tree,\r\n                        n_estimators=500, \r\n                        max_samples=1.0, \r\n                        max_features=1.0, \r\n                        bootstrap=True, \r\n                        bootstrap_features=False, \r\n                        n_jobs=1, \r\n                        random_state=1)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\uff0c\u8ba1\u7b97\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u4e2d\u7684\u9884\u6d4b\u51c6\u786e\u6027\uff0c\u4ee5\u6bd4\u8f83 bagging \u5206\u7c7b\u5668\u4e0e\u5355\u4e2a\u672a\u88c1\u526a\u51b3\u7b56\u6811\u7684\u8868\u73b0\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"from sklearn.metrics import accuracy_score\r\n\r\ntree = tree.fit(X_train, y_train)\r\ny_train_pred = tree.predict(X_train)\r\ny_test_pred = tree.predict(X_test)\r\n\r\ntree_train = accuracy_score(y_train, y_train_pred)\r\ntree_test = accuracy_score(y_test, y_test_pred)\r\nprint('Decision tree train/test accuracies %.3f/%.3f'\r\n      % (tree_train, tree_test))\r\n\r\nbag = bag.fit(X_train, y_train)\r\ny_train_pred = bag.predict(X_train)\r\ny_test_pred = bag.predict(X_test)\r\n\r\nbag_train = accuracy_score(y_train, y_train_pred) \r\nbag_test = accuracy_score(y_test, y_test_pred) \r\nprint('Bagging train/test accuracies %.3f/%.3f'\r\n      % (bag_train, bag_test))\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5f97\u5230\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Decision tree train/test accuracies 1.000/0.833\r\nBagging train/test accuracies 1.000/0.917\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5c3d\u7ba1 bagging \u548c\u51b3\u7b56\u6811\u5bf9\u4e8e\u8bad\u7ec3\u96c6\u7684\u9884\u6d4b\u51c6\u786e\u7387\u5747\u4e3a 100%\uff0c\u4f46\u5728\u6d4b\u8bd5\u96c6\u4e0a bagging \u7684\u51c6\u786e\u7387\u8981\u9ad8\u4e8e\u6d4b\u8bd5\u96c6\uff0c\u6cdb\u5316\u80fd\u529b\u66f4\u4f18\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5bf9bagging \u548c\u51b3\u7b56\u6811\u7684\u51b3\u7b56\u8fb9\u754c\u5206\u522b\u7ed8\u56fe\u3002"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"import numpy as np\r\nimport matplotlib.pyplot as plt\r\n\r\nx_min = X_train[:, 0].min() - 1\r\nx_max = X_train[:, 0].max() + 1\r\ny_min = X_train[:, 1].min() - 1\r\ny_max = X_train[:, 1].max() + 1\r\n\r\nxx, yy = np.meshgrid(np.arange(x_min, x_max, 0.1),\r\n                     np.arange(y_min, y_max, 0.1))\r\n\r\nf, axarr = plt.subplots(nrows=1, ncols=2, \r\n                        sharex='col', \r\n                        sharey='row', \r\n                        figsize=(8, 3))\r\n\r\n\r\nfor idx, clf, tt in zip([0, 1],\r\n                        [tree, bag],\r\n                        ['Decision tree', 'Bagging']):\r\n    clf.fit(X_train, y_train)\r\n\r\n    Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])\r\n    Z = Z.reshape(xx.shape)\r\n\r\n    axarr[idx].contourf(xx, yy, Z, alpha=0.3)\r\n    axarr[idx].scatter(X_train[y_train == 0, 0],\r\n                       X_train[y_train == 0, 1],\r\n                       c='blue', marker='^')\r\n\r\n    axarr[idx].scatter(X_train[y_train == 1, 0],\r\n                       X_train[y_train == 1, 1],\r\n                       c='green', marker='o')\r\n\r\n    axarr[idx].set_title(tt)\r\n\r\naxarr[0].set_ylabel('Alcohol', fontsize=12)\r\nplt.text(10.2, -0.5,\r\n         s='OD280/OD315 of diluted wines',\r\n         ha='center', va='center', fontsize=12)\r\n\r\nplt.tight_layout()\r\n#plt.savefig('images/07_08.png', dpi=300, bbox_inches='tight')\r\nplt.show()\n"})}),"\n",(0,i.jsx)(r.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_08.png",width:"800"}),"\n",(0,i.jsx)(r.p,{children:"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\uff0cbagging \u7684\u51b3\u7b56\u8fb9\u754c\u76f8\u6bd4\u51b3\u7b56\u6811\u66f4\u4e3a\u5e73\u6ed1\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0cbagging \u5f80\u5f80\u7528\u4e8e\u89e3\u51b3\u7531\u4e8e\u89e3\u51b3\u5206\u7c7b\u5668\u6a21\u578b\u7684\u8fc7\u62df\u5408\u95ee\u9898\uff0c\u964d\u4f4e\u6a21\u578b\u7684\u65b9\u5dee\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cbagging \u65e0\u6cd5\u51cf\u5c11\u6a21\u578b\u504f\u5dee\uff08\u5982\u67d0\u4e9b\u6a21\u578b\u592a\u7b80\u5355\uff0c\u65e0\u6cd5\u5f88\u597d\u5730\u6355\u6349\u6570\u636e\u4e2d\u7684\u8d8b\u52bf\uff09\u3002\u56e0\u6b64 bagging \u66f4\u9002\u7528\u4e8e\u4f4e\u504f\u5dee\u7684\u6a21\u578b\uff0c\u5982\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\u3002"})]})}function d(n={}){const{wrapper:r}={...(0,a.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,r,e)=>{e.d(r,{Z:()=>g,a:()=>s});var i=e(67294);const a={},t=i.createContext(a);function s(n){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function g(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(t.Provider,{value:r},n.children)}}}]);
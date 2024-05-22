"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2749],{76471:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=a(85893),t=a(11151);const r={},s="Bagging",l={id:"machine-learning/traditional-ml-algorithms/bagging",title:"Bagging",description:"\u5957\u888b\u7b97\u6cd5\uff08Bagging\uff09\u662f\u4e00\u79cd\u96c6\u6210\u5b66\u4e60\u6280\u672f\uff0c\u4e0e MajorityVoteClassifier \u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e bagging \u4e0d\u662f\u6bcf\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u8bad\u7ec3\u96c6\u6765\u62df\u5408\u5355\u4e2a\u5206\u7c7b\u5668\uff0c\u800c\u662f\u5bf9\u521d\u59cb\u8bad\u7ec3\u96c6\u8fdb\u884c bootstrap \u62bd\u6837\u3002\u8fd9\u4e5f\u662f bagging \u79f0\u4e3a\u5f15\u5bfc\u805a\u5408\uff08Bootstrap Aggregating\uff09\u7684\u539f\u56e0\u3002",source:"@site/docs/machine-learning/08-traditional-ml-algorithms/bagging.md",sourceDirName:"machine-learning/08-traditional-ml-algorithms",slug:"/machine-learning/traditional-ml-algorithms/bagging",permalink:"/docs/machine-learning/traditional-ml-algorithms/bagging",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u5b66\u4e60\u66f2\u7ebf\u548c\u9a8c\u8bc1\u66f2\u7ebf",permalink:"/docs/machine-learning/model-selection/learning-and-validation-curve"},next:{title:"\u51b3\u7b56\u6811\u548c\u968f\u673a\u68ee\u6797",permalink:"/docs/machine-learning/traditional-ml-algorithms/decision-tree"}},g={},o=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",id:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",level:3},{value:"bagging \u7684 scikit-learn \u5b9e\u73b0",id:"bagging-\u7684-scikit-learn-\u5b9e\u73b0",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bagging",children:"Bagging"}),"\n",(0,i.jsxs)(e.p,{children:["\u5957\u888b\u7b97\u6cd5\uff08Bagging\uff09\u662f\u4e00\u79cd\u96c6\u6210\u5b66\u4e60\u6280\u672f\uff0c\u4e0e ",(0,i.jsx)(e.code,{children:"MajorityVoteClassifier"})," \u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e bagging \u4e0d\u662f\u6bcf\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u8bad\u7ec3\u96c6\u6765\u62df\u5408\u5355\u4e2a\u5206\u7c7b\u5668\uff0c\u800c\u662f\u5bf9\u521d\u59cb\u8bad\u7ec3\u96c6\u8fdb\u884c bootstrap \u62bd\u6837\u3002\u8fd9\u4e5f\u662f bagging \u79f0\u4e3a\u5f15\u5bfc\u805a\u5408\uff08Bootstrap Aggregating\uff09\u7684\u539f\u56e0\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(e.p,{children:"Bagging \u7684\u6982\u5ff5\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,i.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_06.png",width:"500"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u66f4\u5177\u4f53\u8bf4\u660e bagging \u5206\u7c7b\u5668\u5982\u4f55\u5de5\u4f5c\uff0c\u53c2\u89c1\u4e0b\u56fe\u4e2d\u7684\u793a\u4f8b\u3002\u56fe\u4e2d\u6709 n = 7 \u4e2a\u8bad\u7ec3\u5b9e\u4f8b\uff08\u4ee5\u7d22\u5f15 1 - 7 \u8868\u793a\uff09\uff0c\u5728\u6bcf\u8f6e bagging \u4e2d\u8fdb\u884c\u6709\u653e\u56de\u5730\u62bd\u6837 k \u6b21\uff0c\u7136\u540e\u4f7f\u7528\u8fd9 k \u6b21\u7684\u805a\u5408\u6837\u672c\uff08\u5141\u8bb8\u5305\u542b\u91cd\u590d\u7684\u6837\u672c\uff09\u6765\u62df\u5408\u5206\u7c7b\u5668\u3002\u5982\u679c\u805a\u5408\u6837\u672c\u4e2d\u7684\u6837\u672c\u6570\u7b49\u4e8e\u5b9e\u4f8b\uff0c\u5219\u79f0\u4e3a bootstrap \u62bd\u6837\u3002"}),"\n",(0,i.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_07.png",width:"500"}),"\n",(0,i.jsx)(e.p,{children:"bagging \u4e00\u822c\u4f7f\u7528\u5728\u8f83\u5f31\u7684\u5206\u7c7b\u5668\u4e2d\u4f7f\u7528\uff08\u5982\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\uff09\uff0c\u4ee5\u964d\u4f4e\u5176\u8fc7\u62df\u5408\u7684\u95ee\u9898\u3002\u5728\u5bf9\u6bcf\u4e2a\u5206\u7c7b\u5668\u8fdb\u884c\u62df\u5408\u540e\uff0c\u901a\u8fc7\u591a\u6570\u6295\u7968\u65b9\u6cd5\u6765\u5bf9\u7ed3\u679c\u8fdb\u884c\u9884\u6d4b\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406",children:"\u6570\u636e\u5bfc\u5165\u53ca\u9884\u5904\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u5bf9 bagging \u65b9\u6cd5\u8fdb\u884c\u8bf4\u660e\uff0c\u8fd9\u91cc\u4f7f\u7528 Wine \u6570\u636e\u96c6\uff0c\u5e76\u63d0\u53d6\u503c\u4e3a 2 \u548c 3 \u7684\u5206\u7c7b\u6807\u7b7e\u3001\u7279\u5f81\u4e3a Alcohol \u548c OD280/OD315 \u7684\u6837\u672c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import pandas as pd\n\ndf_wine = pd.read_csv(\n    "https://archive.ics.uci.edu/ml/" "machine-learning-databases/wine/wine.data",\n    header=None,\n)\ndf_wine.columns = [\n    "Class label",\n    "Alcohol",\n    "Malic acid",\n    "Ash",\n    "Alcalinity of ash",\n    "Magnesium",\n    "Total phenols",\n    "Flavanoids",\n    "Nonflavanoid phenols",\n    "Proanthocyanins",\n    "Color intensity",\n    "Hue",\n    "OD280/OD315 of diluted wines",\n    "Proline",\n]\n\ndf_wine = df_wine[df_wine["Class label"] != 1]\n\ny = df_wine["Class label"].values\nX = df_wine[["Alcohol", "OD280/OD315 of diluted wines"]].values\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5c06\u6807\u7b7e\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u5c06\u6837\u672c\u5206\u4e3a 80% \u7684\u8bad\u7ec3\u96c6\u548c 20% \u7684\u6d4b\u8bd5\u96c6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from sklearn.preprocessing import LabelEncoder\nfrom sklearn.model_selection import train_test_split\n\n\nle = LabelEncoder()\ny = le.fit_transform(y)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=1, stratify=y\n)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"bagging-\u7684-scikit-learn-\u5b9e\u73b0",children:"bagging \u7684 scikit-learn \u5b9e\u73b0"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html",children:"sklearn.ensemble.BaggingClassifier"})," \u8fdb\u884c bagging\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u4f7f\u7528\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\u4f5c\u4e3a\u57fa\u7840\u5206\u7c7b\u5668\uff0c\u5e76\u5efa\u7acb 500 \u4e2a\u7531\u4e0d\u540c bootstrap \u6837\u672c\u5f97\u5230\u7684\u51b3\u7b56\u6811\u7684\u96c6\u5408\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\n\ntree = DecisionTreeClassifier(criterion="entropy", max_depth=None, random_state=1)\n\nbag = BaggingClassifier(\n    base_estimator=tree,\n    n_estimators=500,\n    max_samples=1.0,\n    max_features=1.0,\n    bootstrap=True,\n    bootstrap_features=False,\n    n_jobs=1,\n    random_state=1,\n)\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u8ba1\u7b97\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u4e2d\u7684\u9884\u6d4b\u51c6\u786e\u6027\uff0c\u4ee5\u6bd4\u8f83 bagging \u5206\u7c7b\u5668\u4e0e\u5355\u4e2a\u672a\u88c1\u526a\u51b3\u7b56\u6811\u7684\u8868\u73b0\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from sklearn.metrics import accuracy_score\n\ntree = tree.fit(X_train, y_train)\ny_train_pred = tree.predict(X_train)\ny_test_pred = tree.predict(X_test)\n\ntree_train = accuracy_score(y_train, y_train_pred)\ntree_test = accuracy_score(y_test, y_test_pred)\nprint("Decision tree train/test accuracies %.3f/%.3f" % (tree_train, tree_test))\n\nbag = bag.fit(X_train, y_train)\ny_train_pred = bag.predict(X_train)\ny_test_pred = bag.predict(X_test)\n\nbag_train = accuracy_score(y_train, y_train_pred)\nbag_test = accuracy_score(y_test, y_test_pred)\nprint("Bagging train/test accuracies %.3f/%.3f" % (bag_train, bag_test))\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5f97\u5230\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Decision tree train/test accuracies 1.000/0.833\nBagging train/test accuracies 1.000/0.917\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5c3d\u7ba1 bagging \u548c\u51b3\u7b56\u6811\u5bf9\u4e8e\u8bad\u7ec3\u96c6\u7684\u9884\u6d4b\u51c6\u786e\u7387\u5747\u4e3a 100%\uff0c\u4f46\u5728\u6d4b\u8bd5\u96c6\u4e0a bagging \u7684\u51c6\u786e\u7387\u8981\u9ad8\u4e8e\u6d4b\u8bd5\u96c6\uff0c\u6cdb\u5316\u80fd\u529b\u66f4\u4f18\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9bagging \u548c\u51b3\u7b56\u6811\u7684\u51b3\u7b56\u8fb9\u754c\u5206\u522b\u7ed8\u56fe\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n\nx_min = X_train[:, 0].min() - 1\nx_max = X_train[:, 0].max() + 1\ny_min = X_train[:, 1].min() - 1\ny_max = X_train[:, 1].max() + 1\n\nxx, yy = np.meshgrid(np.arange(x_min, x_max, 0.1), np.arange(y_min, y_max, 0.1))\n\nf, axarr = plt.subplots(nrows=1, ncols=2, sharex="col", sharey="row", figsize=(8, 3))\n\n\nfor idx, clf, tt in zip([0, 1], [tree, bag], ["Decision tree", "Bagging"]):\n    clf.fit(X_train, y_train)\n\n    Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])\n    Z = Z.reshape(xx.shape)\n\n    axarr[idx].contourf(xx, yy, Z, alpha=0.3)\n    axarr[idx].scatter(\n        X_train[y_train == 0, 0], X_train[y_train == 0, 1], c="blue", marker="^"\n    )\n\n    axarr[idx].scatter(\n        X_train[y_train == 1, 0], X_train[y_train == 1, 1], c="green", marker="o"\n    )\n\n    axarr[idx].set_title(tt)\n\naxarr[0].set_ylabel("Alcohol", fontsize=12)\nplt.text(\n    10.2, -0.5, s="OD280/OD315 of diluted wines", ha="center", va="center", fontsize=12\n)\n\nplt.tight_layout()\n# plt.savefig(\'images/07_08.png\', dpi=300, bbox_inches=\'tight\')\nplt.show()\n'})}),"\n",(0,i.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-07_08.png",width:"800"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\uff0cbagging \u7684\u51b3\u7b56\u8fb9\u754c\u76f8\u6bd4\u51b3\u7b56\u6811\u66f4\u4e3a\u5e73\u6ed1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0cbagging \u5f80\u5f80\u7528\u4e8e\u89e3\u51b3\u7531\u4e8e\u89e3\u51b3\u5206\u7c7b\u5668\u6a21\u578b\u7684\u8fc7\u62df\u5408\u95ee\u9898\uff0c\u964d\u4f4e\u6a21\u578b\u7684\u65b9\u5dee\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cbagging \u65e0\u6cd5\u51cf\u5c11\u6a21\u578b\u504f\u5dee\uff08\u5982\u67d0\u4e9b\u6a21\u578b\u592a\u7b80\u5355\uff0c\u65e0\u6cd5\u5f88\u597d\u5730\u6355\u6349\u6570\u636e\u4e2d\u7684\u8d8b\u52bf\uff09\u3002\u56e0\u6b64 bagging \u66f4\u9002\u7528\u4e8e\u4f4e\u504f\u5dee\u7684\u6a21\u578b\uff0c\u5982\u672a\u4fee\u526a\u7684\u51b3\u7b56\u6811\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>l,a:()=>s});var i=a(67294);const t={},r=i.createContext(t);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
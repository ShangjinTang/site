"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2048],{92512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=r(74848),t=r(28453);const s={},i="\u7f51\u683c\u641c\u7d22",c={id:"machine-learning/model-selection/grid-search",title:"\u7f51\u683c\u641c\u7d22",description:"\u7f51\u683c\u641c\u7d22 (Grid Search) \u662f\u4e00\u79cd\u901a\u8fc7\u904d\u5386\u7ed9\u5b9a\u7684\u8d85\u53c2\u6570\u7ec4\u5408\u6765\u4f18\u5316\u6a21\u578b\u8868\u73b0\u7684\u65b9\u6cd5\u3002",source:"@site/docs/machine-learning/07-model-selection/grid-search.md",sourceDirName:"machine-learning/07-model-selection",slug:"/machine-learning/model-selection/grid-search",permalink:"/docs/machine-learning/model-selection/grid-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"\u7279\u5f81\u7684\u91cd\u8981\u6027",permalink:"/docs/machine-learning/feature-selection/feature-importance"},next:{title:"Holdout \u9a8c\u8bc1",permalink:"/docs/machine-learning/model-selection/holdout"}},l={},o=[{value:"\u7b97\u6cd5\u601d\u60f3",id:"algorithm-principle",level:2},{value:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406",id:"data-load-and-preprocessing",level:2},{value:"\u57fa\u4e8e Scikit-learn \u7684\u7f51\u683c\u641c\u7d22",id:"grid-search-using-sklearn",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u7f51\u683c\u641c\u7d22",children:"\u7f51\u683c\u641c\u7d22"})}),"\n",(0,a.jsx)(n.p,{children:"\u7f51\u683c\u641c\u7d22 (Grid Search) \u662f\u4e00\u79cd\u901a\u8fc7\u904d\u5386\u7ed9\u5b9a\u7684\u8d85\u53c2\u6570\u7ec4\u5408\u6765\u4f18\u5316\u6a21\u578b\u8868\u73b0\u7684\u65b9\u6cd5\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u4e2d\u6709\u4e24\u7c7b\u53c2\u6570\uff1a\u4e00\u7c7b\u662f\u4ece\u8bad\u7ec3\u96c6\u4e2d\u5b66\u4e60\u5230\u7684\u53c2\u6570\uff0c\u6bd4\u5982\u903b\u8f91\u56de\u5f52\u4e2d\u7684\u6743\u91cd\u53c2\u6570\u548c\u504f\u5dee\u53c2\u6570\uff0c\u53e6\u4e00\u7c7b\u662f",(0,a.jsx)(n.strong,{children:"\u8d85\u53c2\u6570"})," (Hyperparameter)\uff0c\u4e5f\u5c31\u662f\u9700\u8981\u4eba\u5de5\u8bbe\u5b9a\u7684\u53c2\u6570\uff0c\u6bd4\u5982\u6b63\u5219\u9879\u7cfb\u6570\u6216\u8005\u51b3\u7b56\u6811\u7684\u6df1\u5ea6\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u7f51\u683c\u641c\u7d22\u901a\u8fc7\u5bfb\u627e\u6700\u4f73\u7684\u8d85\u53c2\u6570\u7ec4\u5408\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5e2e\u52a9\u63d0\u9ad8\u6a21\u578b\u7684\u6027\u80fd\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"algorithm-principle",children:"\u7b97\u6cd5\u601d\u60f3"}),"\n",(0,a.jsx)(n.p,{children:"\u7f51\u683c\u641c\u7d22\u7684\u601d\u60f3\u975e\u5e38\u7b80\u5355\uff0c\u5c5e\u4e8e\u66b4\u529b (Brute Force) \u7b97\u6cd5\uff1a\u7a77\u5c3d\u6bcf\u4e2a\u8d85\u53c2\u6570\u7684\u7ec4\u5408\u6765\u8bc4\u4f30\u5bf9\u5e94\u7684\u6a21\u578b\u6027\u80fd\uff0c\u7136\u540e\u6311\u9009\u6a21\u578b\u6027\u80fd\u7684\u8d85\u53c2\u6570\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"data-load-and-preprocessing",children:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import pandas as pd\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.read_csv(\n    "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data",\n    header=None,\n)\nX = df.iloc[:, 2:]\ny = df.iloc[:, 1]\nle = LabelEncoder()\ny = le.fit_transform(y)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=1\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"grid-search-using-sklearn",children:"\u57fa\u4e8e Scikit-learn \u7684\u7f51\u683c\u641c\u7d22"}),"\n",(0,a.jsx)(n.p,{children:"\u521b\u5efa\u7ba1\u9053\u5bf9\u8c61\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.pipeline import make_pipeline\n\npipe_svc = make_pipeline(StandardScaler(), SVC(random_state=1))\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u7f51\u683c\u641c\u7d22\u6240\u6709\u8d85\u53c2\u6570\u7ec4\u5408 (\u4e0b\u9762\u662f 8 + 64 = 72 \u4e2a) \u4e2d\u7684\u51c6\u786e\u7387\u6700\u9ad8\u7684\u4e00\u4e2a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from sklearn.model_selection import GridSearchCV\n\nparam_range = [0.0001, 0.001, 0.01, 0.1, 1.0, 10.0, 100.0, 1000.0]\nparam_grid = [\n    {"svc__C": param_range, "svc__kernel": ["linear"]},\n    {"svc__C": param_range, "svc__gamma": param_range, "svc__kernel": ["rbf"]},\n]\n\ngs = GridSearchCV(estimator=pipe_svc, param_grid=param_grid, scoring="accuracy", cv=10)\ngs.fit(X_train, y_train)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u7f51\u683c\u641c\u7d22\u5f97\u5230\u7684\u6700\u4f18\u6a21\u578b\u7684\u51c6\u786e\u7387\u3001\u53c2\u6570\u3001\u4ee5\u53ca\u6a21\u578b\u8c03\u7528\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(gs.best_score_)\n# Output: 0.984615384615\n\nprint(gs.best_params_)\n# Output: {'svc__C': 100.0, 'svc__gamma': 0.001, 'svc__kernel': 'rbf'}\n\nclf = gs.best_estimator_\nclf.fit(X_train, y_train)\nprint(\"Test accuracy: {:.3f}\".format(clf.score(X_test, y_test)))\n# Output: Test accuracy: 0.974\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var a=r(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
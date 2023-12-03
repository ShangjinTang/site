"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8081],{53234:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=n(85893),i=n(11151);const a={title:"ROC \u548c AUC",tags:["Machine Learning","ROC","AUC","Scikit-learn"]},s=void 0,c={id:"machinelearning/metrics/AI-roc_and_auc",title:"ROC \u548c AUC",description:"\u5728\u4fe1\u53f7\u68c0\u6d4b\u7406\u8bba\u4e2d\uff0c\u63a5\u6536\u8005\u64cd\u4f5c\u7279\u5f81\uff08Receiver Operating Characteristic\uff0cROC\uff09\u66f2\u7ebf\u662f\u662f\u4e00\u79cd\u5750\u6807\u56fe\u5f0f\u7684\u5206\u6790\u5de5\u5177\uff0c\u901a\u8fc7\u8ba1\u7b97 ROC \u7684\u66f2\u7ebf\u4e0b\u9762\u79ef\uff08Area Under Curve\uff0cAUC\uff09\u53ef\u4ee5\u5bf9\u5206\u7c7b\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30\u3002",source:"@site/docs/machinelearning/metrics/20180313-AI-roc_and_auc.md",sourceDirName:"machinelearning/metrics",slug:"/machinelearning/metrics/AI-roc_and_auc",permalink:"/site/zh-CN/docs/machinelearning/metrics/AI-roc_and_auc",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/zh-CN/docs/tags/machine-learning"},{label:"ROC",permalink:"/site/zh-CN/docs/tags/roc"},{label:"AUC",permalink:"/site/zh-CN/docs/tags/auc"},{label:"Scikit-learn",permalink:"/site/zh-CN/docs/tags/scikit-learn"}],version:"current",sidebarPosition:20180313,frontMatter:{title:"ROC \u548c AUC",tags:["Machine Learning","ROC","AUC","Scikit-learn"]},sidebar:"machinelearningSidebar",previous:{title:"\u673a\u5668\u5b66\u4e60\u7684\u8bc4\u4ef7\u6307\u6807",permalink:"/site/zh-CN/docs/machinelearning/metrics/AI-evaluation-metrics"},next:{title:"K \u6298\u4ea4\u53c9\u9a8c\u8bc1",permalink:"/site/zh-CN/docs/machinelearning/model-selection/AI-model-selection-k-fold-cross-validation"}},l={},o=[{value:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406",id:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406",level:2},{value:"ROC \u66f2\u7ebf\u7684 scikit-learn \u5b9e\u73b0",id:"roc-\u66f2\u7ebf\u7684-scikit-learn-\u5b9e\u73b0",level:2}];function p(e){const r={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\u5728\u4fe1\u53f7\u68c0\u6d4b\u7406\u8bba\u4e2d\uff0c\u63a5\u6536\u8005\u64cd\u4f5c\u7279\u5f81\uff08Receiver Operating Characteristic\uff0cROC\uff09\u66f2\u7ebf\u662f\u662f\u4e00\u79cd\u5750\u6807\u56fe\u5f0f\u7684\u5206\u6790\u5de5\u5177\uff0c\u901a\u8fc7\u8ba1\u7b97 ROC \u7684\u66f2\u7ebf\u4e0b\u9762\u79ef\uff08Area Under Curve\uff0cAUC\uff09\u53ef\u4ee5\u5bf9\u5206\u7c7b\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30\u3002"}),"\n",(0,t.jsx)(r.p,{children:"ROC \u5206\u6790\u7684\u662f\u4e8c\u5206\u5206\u7c7b\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(r.p,{children:"ROC \u66f2\u7ebf\u662f\u901a\u8fc7\u7ed8\u5236\u91c7\u7528\u4e0d\u540c\u5206\u7c7b\u9608\u503c\u65f6\u7684 TPR \u4e0e FPR \u6765\u9009\u62e9\u6a21\u578b\u3002ROC \u66f2\u7ebf\u7684\u5bf9\u89d2\u7ebf\u53ef\u4ee5\u88ab\u89e3\u91ca\u4e3a\u968f\u673a\u731c\u6d4b\uff08\u5982\u4e22\u786c\u5e01\u3001\u6b63\u53cd\u9762\u51fa\u73b0\u6982\u7387\u9884\u6d4b\u5747\u662f 50%\uff09\uff0c\u5e76\u4e14\u843d\u5728\u5bf9\u89d2\u7ebf\u4e0a\u65b9\u7684\u5206\u7c7b\u6a21\u578b\u4f18\u4e8e\u968f\u673a\u731c\u6d4b\uff0c\u843d\u5728\u5bf9\u89d2\u7ebf\u4e0b\u65b9\u7684\u5206\u7c7b\u6a21\u578b\u6bd4\u968f\u673a\u731c\u6d4b\u66f4\u5dee\u3002\u5b8c\u7f8e\u7684\u5206\u7c7b\u5668\u5c06\u843d\u5165\u56fe\u7684\u5de6\u4e0a\u89d2\uff0cTPR \u4e3a 1\uff0cFPR \u4e3a 0\u3002\u964d\u4f4e\u5206\u7c7b\u9608\u503c\u4f1a\u5bfc\u81f4\u5c06\u66f4\u591a\u6837\u672c\u5f52\u4e3a\u6b63\u7c7b\u522b\uff0c\u4ece\u800c\u589e\u52a0\u5047\u6b63\u4f8b\u548c\u771f\u6b63\u4f8b\u7684\u4e2a\u6570\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0b\u6587\u5c06\u5b9e\u73b0\u5206\u7c7b\u5668\u7684 ROC \u66f2\u7ebf\u7ed8\u5236\uff0c\u8be5\u5206\u7c7b\u5668\u4ec5\u4f7f\u7528 wdbc \u6570\u636e\u96c6\u4e2d\u7684\u4e24\u4e2a\u7279\u5f81\u6765\u9884\u6d4b\u80bf\u7624\u662f\u826f\u6027\u8fd8\u662f\u6076\u6027\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406",children:"\u6570\u636e\u5bfc\u5165\u548c\u9884\u5904\u7406"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import pandas as pd\r\nimport numpy as np\r\nimport matplotlib.pyplot as plt\r\nfrom sklearn.model_selection import StratifiedKFold\r\nfrom sklearn.preprocessing import LabelEncoder\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.preprocessing import StandardScaler\r\nfrom sklearn.decomposition import PCA\r\nfrom sklearn.linear_model import LogisticRegression\r\nfrom sklearn.pipeline import make_pipeline\r\n\r\ndf = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data',\r\n                 header=None)\r\nX = df.loc[:, 2:].values\r\ny = df.loc[:, 1].values\r\nle = LabelEncoder()\r\ny = le.fit_transform(y)\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, stratify=y, random_state=1)\r\n\r\n\n"})}),"\n",(0,t.jsx)(r.h2,{id:"roc-\u66f2\u7ebf\u7684-scikit-learn-\u5b9e\u73b0",children:"ROC \u66f2\u7ebf\u7684 scikit-learn \u5b9e\u73b0"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528\u903b\u8f91\u56de\u5f52 pipeline\uff0c\u5e76\u91c7\u7528\u6298\u53e0\u6570\u4e3a 3 \u7684 ",(0,t.jsx)(r.code,{children:"StratifiedKFold"}),"\uff0c\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from sklearn.metrics import roc_curve, auc\r\nfrom scipy import interp\r\n\r\npipe_lr = make_pipeline(StandardScaler(),\r\n                        PCA(n_components=2),\r\n                        LogisticRegression(penalty='l2', random_state=1, C=100.0))\r\n\r\nX_train2 = X_train[:, [4, 14]]\r\ncv = list(StratifiedKFold(n_splits=3, random_state=1).split(X_train, y_train))\r\n\r\nfig = plt.figure(figsize=(7, 5))\r\n\r\nmean_tpr = 0.0\r\nmean_fpr = np.linspace(0, 1, 100)\r\nall_tpr = []\r\n\r\nfor i, (train, test) in enumerate(cv):\r\n    probas = pipe_lr.fit(X_train2[train], y_train[train]).predict_proba(X_train2[test])\r\n    fpr, tpr, thresholds = roc_curve(y_train[test], probas[:, 1], pos_label=1)\r\n    mean_tpr += interp(mean_fpr, fpr, tpr)\r\n    mean_tpr[0] = 0.0\r\n    roc_auc = auc(fpr, tpr)\r\n    plt.plot(fpr, tpr, label='ROC fold {} (area = {:.2f}'.format(i + 1, roc_auc))\r\n\r\nplt.plot([0, 1], [0, 1], linestyle='--', color=(0.6, 0.6, 0.6), label='random guessing')\r\n\r\nmean_tpr /= len(cv)\r\nmean_tpr[-1] = 1.0\r\nmean_auc = auc(mean_fpr, mean_tpr)\r\nplt.plot(mean_fpr, mean_tpr, 'k--', label='mean ROC (area = {:.2f}'.format(mean_auc), lw=2)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0a\u9762\u7684\u4ee3\u7801\u901a\u8fc7\u4ece SciPy \u5bfc\u5165\u7684 ",(0,t.jsx)(r.code,{children:"interp"})," \u51fd\u6570\u63d2\u5165\u4e86\u4e09\u6b21\u6298\u53e0\u7684\u5e73\u5747 ROC \u66f2\u7ebf\uff0c\u5e76\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"auc"})," \u51fd\u6570\u8ba1\u7b97\u66f2\u7ebf\u4e0b\u9762\u79ef\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u4e09\u6b21\u7ed8\u5236\u7684 ROC \u66f2\u7ebf\u8868\u660e\u4e0d\u540c\u6298\u53e0\u4e4b\u95f4\u5b58\u5728\u4e00\u5b9a\u7a0b\u5ea6\u7684\u53d8\u5316\uff0c\u5e76\u4e14 ROC AUC \u7684\u5e73\u5747\u503c (0.76) \u843d\u5728\u5b8c\u7f8e\u9884\u6d4b (1.0) \u548c\u968f\u673a\u731c\u6d4b (0.5) \u4e4b\u95f4\uff1a"}),"\n",(0,t.jsx)(r.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_10.png",width:"600"}),"\n",(0,t.jsxs)(r.p,{children:["\u5982\u679c\u53ea\u9700\u8981\u7528\u5230 ROC AUC \u5206\u6570\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 ",(0,t.jsx)(r.code,{children:"sklearn.metrics.roc_auc_score"})," \u51fd\u6570\u3002ROC AUC \u5206\u6570\u53ef\u4ee5\u5bf9\u6837\u672c\u6570\u91cf\u4e0d\u5e73\u5747\u7684\u4e8c\u5206\u5206\u7c7b\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30\u3002"]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>s});var t=n(67294);const i={},a=t.createContext(i);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);
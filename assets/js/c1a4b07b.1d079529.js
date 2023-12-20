"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6794],{75090:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=n(85893),a=n(11151);const t={tags:["machine-learning","k-fold","cross-validation","model-selection"]},o="K-fold Cross-Validation",r={id:"machine-learning/model-selection/k-fold-cross-validation",title:"K-fold Cross-Validation",description:"K-Fold Cross-Validation is a model selection method that divides the initial sample into K folds, one fold is used as the data set, and the remaining K-1 folds are used as the training set. Repeat the above steps K times and combine the results to obtain the final evaluation result. K-fold cross-validation solves the shortcoming of holdout only dividing the data once to a certain extent.",source:"@site/docs/machine-learning/model-selection/k-fold-cross-validation.md",sourceDirName:"machine-learning/model-selection",slug:"/machine-learning/model-selection/k-fold-cross-validation",permalink:"/site/docs/machine-learning/model-selection/k-fold-cross-validation",draft:!1,unlisted:!1,tags:[{label:"machine-learning",permalink:"/site/docs/tags/machine-learning"},{label:"k-fold",permalink:"/site/docs/tags/k-fold"},{label:"cross-validation",permalink:"/site/docs/tags/cross-validation"},{label:"model-selection",permalink:"/site/docs/tags/model-selection"}],version:"current",frontMatter:{tags:["machine-learning","k-fold","cross-validation","model-selection"]},sidebar:"machinelearningSidebar",previous:{title:"Holdout Validation",permalink:"/site/docs/machine-learning/model-selection/holdout"},next:{title:"Grid Search",permalink:"/site/docs/machine-learning/model-selection/grid-search"}},l={},d=[{value:"K-fold Cross-Validation Principle",id:"kfold-cross-validation-principle",level:2},{value:"Stratified K-fold Cross-Validation Using Scikit-learn",id:"stratified-kfold-cross-validation-using-sklearn",level:2},{value:"Nested Cross-Validation",id:"nested-cross-validation",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"k-fold-cross-validation",children:"K-fold Cross-Validation"}),"\n",(0,i.jsx)(s.p,{children:"K-Fold Cross-Validation is a model selection method that divides the initial sample into K folds, one fold is used as the data set, and the remaining K-1 folds are used as the training set. Repeat the above steps K times and combine the results to obtain the final evaluation result. K-fold cross-validation solves the shortcoming of holdout only dividing the data once to a certain extent."}),"\n",(0,i.jsx)(s.h2,{id:"kfold-cross-validation-principle",children:"K-fold Cross-Validation Principle"}),"\n",(0,i.jsx)(s.p,{children:"K-fold cross-validation involves randomly dividing the training data set into K folds. Among them, K-1 folds are used for model training and another fold is used for performance evaluation. The above steps are repeated K times (different folds are extracted each time) to obtain the performance evaluation results of K models."}),"\n",(0,i.jsx)(s.p,{children:"K-fold cross-validation can obtain optimal hyperparameter values with satisfactory generalization performance, with higher accuracy and robustness. The reason why K-fold cross-validation performs well is that it has more training samples, and each training sample is verified exactly once, which can produce lower variance."}),"\n",(0,i.jsxs)(s.p,{children:["The figure below illustrates the detailed K-fold cross-validation (K = 10) process, in which ",(0,i.jsx)(s.code,{children:"test fold"})," actually plays the role of the validation set:"]}),"\n",(0,i.jsx)(s.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_03.png",width:"600"}),"\n",(0,i.jsx)(s.p,{children:"According to the experience of previous researchers, the hyperparameter K is generally recommended to be 10. If K is too small, the variance will be high, and if K is too large, the model will take longer to train. For large data sets, the value of K can be appropriately lowered (such as K = 5)."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["A special K-fold cross-validation is ",(0,i.jsx)(s.strong,{children:"Leave-One-Out Cross-Validation"})," (LOOCV), K = n (n is the number of samples in the data set), each fold has only one sample, you can Used for processing small data sets."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"stratified-kfold-cross-validation-using-sklearn",children:"Stratified K-fold Cross-Validation Using Scikit-learn"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Stratified K-Fold Cross-Validation"})," is an improvement on K-fold cross-validation. Stratified means that the classification ratio in each fold is the same as the original data set, which can be better It is particularly suitable for situations where the number of samples in different categories varies greatly. The following description is based on scikit-learn."]}),"\n",(0,i.jsxs)(s.p,{children:["First do the prerequisite work before cross-validation, where ",(0,i.jsx)(s.code,{children:"pipe_lr"})," is the pipeline object, which encapsulates standardization, PCA and logistic regression:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'import pandas as pd\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import make_pipeline\n\ndf = pd.read_csv(\n    "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data",\n    header=None,\n)\n\nX = df.loc[:, 2:].values\ny = df.loc[:, 1].values\nle = LabelEncoder()\ny = le.fit_transform(y)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, stratify=y, random_state=1\n)\n\npipe_lr = make_pipeline(\n    StandardScaler(), PCA(n_components=2), LogisticRegression(random_state=1)\n)\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Use ",(0,i.jsx)(s.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html",children:"sklearn.model_selection.StratifiedKFold"})," for K-fold stratified cross-validation:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import numpy as np\nfrom sklearn.model_selection import StratifiedKFold\n\nkfold = StratifiedKFold(n_splits=10, random_state=1).split(X_train, y_train)\nscores = []\nfor k, (train, test) in enumerate(kfold):\n     pipe_lr.fit(X_train[train], y_train[train])\n     score = pipe_lr.score(X_train[test], y_train[test])\n     scores.append(score)\n     print('Fold: {:2d}, Class dist.: {}, Acc: {:.3f}'.format(k + 1, np.bincount(y_train[train]), score)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Divide the sample into ",(0,i.jsx)(s.code,{children:"n_splits=10"})," folds, use the pipeline object ",(0,i.jsx)(s.code,{children:"pipe_lr"})," to train the test set in each loop, and then observe the accuracy of the trained model on the validation set. The running results are as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-plain",children:"Fold: 1, Class dist.: [256 153], Acc: 0.935\nFold: 2, Class dist.: [256 153], Acc: 0.935\nFold: 3, Class dist.: [256 153], Acc: 0.957\nFold: 4, Class dist.: [256 153], Acc: 0.957\nFold: 5, Class dist.: [256 153], Acc: 0.935\nFold: 6, Class dist.: [257 153], Acc: 0.956\nFold: 7, Class dist.: [257 153], Acc: 0.978\nFold: 8, Class dist.: [257 153], Acc: 0.933\nFold: 9, Class dist.: [257 153], Acc: 0.956\nFold: 10, Class dist.: [257 153], Acc: 0.956\n"})}),"\n",(0,i.jsx)(s.p,{children:"Calculate the mean and variance of accuracy over 10 training epochs:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'print("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.950 +/- 0.014\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The above is a specific implementation process to illustrate the cross-validation workflow. You can also implement the model through ",(0,i.jsx)(s.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_score.html",children:"sklearn.model_selection.cross_val_score"})," Evaluate:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'scores = cross_val_score(estimator=pipe_lr, X=X_train, y=y_train, cv=10, n_jobs=1)\nprint("CV accuracy scores: {}".format(scores))\nprint("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Where ",(0,i.jsx)(s.code,{children:"cv"})," is the number of folds and ",(0,i.jsx)(s.code,{children:"n_jobs"})," is the number of CPU cores used by the code to run. The results are as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-plain",children:"CV accuracy scores: [ 0.93478261 0.93478261 0.95652174 0.95652174 0.93478261 0.95555556\n   0.97777778 0.93333333 0.95555556 0.95555556]\nCV accuracy: 0.950 +/- 0.014\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The results are consistent with the previous ones, and cross-validation models can be easily evaluated using ",(0,i.jsx)(s.code,{children:"cross_val_score"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"nested-cross-validation",children:"Nested Cross-Validation"}),"\n",(0,i.jsx)(s.p,{children:"The Nested Cross-Validation algorithm has more stable performance, and the results on the training set are almost unbiased relative to the test set."}),"\n",(0,i.jsx)(s.p,{children:"The idea is to first split the data into training and test folds using K-fold cross-validation, and then use K-fold cross-validation inside the training fold and then for the test fold to select the optimal model. The following is a schematic diagram of 5\xd72 fold cross-validation:"}),"\n",(0,i.jsx)(s.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_07.png",width:"600"}),"\n",(0,i.jsx)(s.p,{children:"SVM-based 5\xd72 folded cross-validation is implemented as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'gs = GridSearchCV(estimator=pipe_svc, param_grid=param_grid, scoring="accuracy", cv=2)\nscores = cross_val_score(gs, X_train, y_train, scoring="accuracy", cv=5)\nprint("CV accuracy: {:.3f} +/- {:.3f}".format(np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.974 +/- 0.015\n'})}),"\n",(0,i.jsx)(s.p,{children:"5\xd72 folded cross-validation based on decision tree is implemented as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'from sklearn.tree import DecisionTreeClassifier\n\ngs = GridSearchCV(\n    estimator=DecisionTreeClassifier(om_state=0),\n    param_grid=[{"max_depth": [1, 2, 3, 4, 5, 6, 7, None]}],\n    scoring="accuracy",\n    cv=2,\n)\nscores = cross_val_score(gs, X_train, y_train, scoring="accuracy", cv=5)\nprint("CV accuracy: %.3f +/- %.3f" % (np.mean(scores), np.std(scores)))\n# Output: CV accuracy: 0.934 +/- 0.016\n'})}),"\n",(0,i.jsx)(s.p,{children:"It can be seen that the nested cross-validation based on the SVM model is better than the cross-validation based on the decision tree."})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>o});var i=n(67294);const a={},t=i.createContext(a);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6849],{2231:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=a(5893),i=a(1151);const s={tags:["machine-learning","basics","scikit-learn","iris"]},r="Start with Iris Dataset",l={id:"machine-learning/start-with-iris-dataset",title:"Start with Iris Dataset",description:"Machine learning mainly includes preprocessing, learning, evaluation and prediction stages. This article demostrates how to do a classification with scikit-learn.",source:"@site/docs/machine-learning/start-with-iris-dataset.mdx",sourceDirName:"machine-learning",slug:"/machine-learning/start-with-iris-dataset",permalink:"/site/docs/machine-learning/start-with-iris-dataset",draft:!1,unlisted:!1,tags:[{label:"machine-learning",permalink:"/site/docs/tags/machine-learning"},{label:"basics",permalink:"/site/docs/tags/basics"},{label:"scikit-learn",permalink:"/site/docs/tags/scikit-learn"},{label:"iris",permalink:"/site/docs/tags/iris"}],version:"current",frontMatter:{tags:["machine-learning","basics","scikit-learn","iris"]},sidebar:"machinelearningSidebar",previous:{title:"Machine Learning",permalink:"/site/docs/machine-learning/intro"},next:{title:"Python Anaconda Jupyter",permalink:"/site/docs/machine-learning/python-anaconda-jupyter"}},o={},d=[{value:"Preprocessing",id:"preprocessing",level:2},{value:"Load Data",id:"load-data",level:3},{value:"Exploratory Data Analysis",id:"exploratory-data-analysis",level:3},{value:"Train Test Split",id:"test-train-split",level:2},{value:"Training",id:"training",level:2},{value:"Evaluation &amp; Prediction (#evaluation-and-prediction)",id:"evaluation--prediction-evaluation-and-prediction",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"start-with-iris-dataset",children:"Start with Iris Dataset"}),"\n",(0,t.jsxs)(n.p,{children:["Machine learning mainly includes preprocessing, learning, evaluation and prediction stages. This article demostrates how to do a classification with ",(0,t.jsx)(n.code,{children:"scikit-learn"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"preprocessing",children:"Preprocessing"}),"\n",(0,t.jsx)(n.p,{children:"Raw data is rarely presented in the form and shape required for optimal performance of the learning algorithm. Therefore, preprocessing of data is one of the most critical steps in any machine learning application. Taking the iris flower dataset as an example, we can view the raw data as a series of flower images, from which we can extract meaningful features such as the color of the flower, the length and width of the sepals and petals."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-01_08.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Many machine learning algorithms also require that all features be of the same order of magnitude, which is usually achieved through feature transformation methods such as normalization or normal distribution. Some features may be highly correlated and have feature redundancy. In this case, dimensionality reduction can reduce the storage space required and the algorithm can learn faster."}),"\n",(0,t.jsx)(n.p,{children:"In order to determine whether the machine learning algorithm not only performs well on the training set but also predicts new data well, we randomly divided the data set into independent training and test sets. The training set is used to train and optimize our machine learning model, and the test set is used to ultimately evaluate the final model."}),"\n",(0,t.jsx)(n.p,{children:"Before we start load data, import these libraries by convention:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"load-data",children:"Load Data"}),"\n",(0,t.jsxs)(n.p,{children:["You can download ",(0,t.jsx)(n.code,{children:"iris.csv"})," ",(0,t.jsx)(n.a,{target:"_blank",href:a(2149).Z+"",children:"here"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"names = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'class']\ndataset = read_csv(\"iris.csv\", names=names)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"exploratory-data-analysis",children:"Exploratory Data Analysis"}),"\n",(0,t.jsx)(n.p,{children:"Print data shape:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(dataset.shape)\n\n# (150, 5)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Print first several (default 5) rows in dataset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(dataset.head())\n\n#    sepal-length  sepal-width  petal-length  petal-width        class\n# 0           5.1          3.5           1.4          0.2  Iris-setosa\n# 1           4.9          3.0           1.4          0.2  Iris-setosa\n# 3           4.6          3.1           1.5          0.2  Iris-setosa\n# 2           4.7          3.2           1.3          0.2  Iris-setosa\n# 4           5.0          3.6           1.4          0.2  Iris-setosa\n"})}),"\n",(0,t.jsx)(n.p,{children:"Print class groups and counts:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(dataset.groupby('class').size())\n\n# class\n# Iris-setosa        50\n# Iris-versicolor    50\n# Iris-virginica     50\n# dtype: int64\n"})}),"\n",(0,t.jsx)(n.p,{children:"Print statistical data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(dataset.describe())\n\n#        sepal-length  sepal-width  petal-length  petal-width\n# count    150.000000   150.000000    150.000000   150.000000\n# mean       5.843333     3.054000      3.758667     1.198667\n# std        0.828066     0.433594      1.764420     0.763161\n# min        4.300000     2.000000      1.000000     0.100000\n# 25%        5.100000     2.800000      1.600000     0.300000\n# 50%        5.800000     3.000000      4.350000     1.300000\n# 75%        6.400000     3.300000      5.100000     1.800000\n# max        7.900000     4.400000      6.900000     2.500000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"test-train-split",children:"Train Test Split"}),"\n",(0,t.jsxs)(n.p,{children:["Some articles take ",(0,t.jsx)(n.code,{children:"train-test-split"})," as a data preprocessing procedure, some articles think it is a training procedure."]}),"\n",(0,t.jsx)(n.p,{children:"As far as I see, it's a bridge between data preprocessing and traning."}),"\n",(0,t.jsx)(n.p,{children:"Let's split original data to 80% training set and 20% test set with shuffle:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\narray = dataset.values\nX = array[:,0:4]\ny = array[:,4]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, shuffle=True, random_state=1)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"random_state"})," is a random seed for split. When it is set, the same train datasets and test datasets will be generated on different computers to make the result reproducible."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(X_train.shape, X_test.shape, y_train.shape, y_test.shape)\n# (120, 4) (30, 4) (120,) (30,)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"training",children:"Training"}),"\n",(0,t.jsx)(n.p,{children:"There are many different machine learning algorithms used to solve different problem tasks. Every classification algorithm has its inherent biases, and in practice, comparing several different algorithms and choosing the best one is crucial for training and selecting the best performing model. A commonly used algorithm metric is classification accuracy, which is the proportion of correctly classified data."}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, we can use different cross-validation techniques, where the training dataset is further divided into training and validation subsets to estimate the generalization performance of the model."}),"\n",(0,t.jsx)(n.p,{children:"Finally, the default parameters of an algorithm often do not perform optimally for real problems. Therefore, we can use hyperparameter optimization techniques, and by adjusting the algorithm parameters, we can improve the performance of the algorithm."}),"\n",(0,t.jsxs)(n.p,{children:["Before training, we need to know what kind of problem we are facing: a multi-class classification supervised problem. We can use ",(0,t.jsx)(n.code,{children:"DecisionTreeClassifier"})," on it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from sklearn.tree import DecisionTreeClassifier\n\ntree_model = DecisionTreeClassifier()\ntree_model.fit(X_train, Y_train)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"evaluation--prediction-evaluation-and-prediction",children:"Evaluation & Prediction (#evaluation-and-prediction)"}),"\n",(0,t.jsx)(n.p,{children:"After selecting a model and training it using the training set, we can use the test set to estimate the generalization error."}),"\n",(0,t.jsx)(n.p,{children:"If we are satisfied with its performance, we can use this model to predict new future data."}),"\n",(0,t.jsx)(n.p,{children:"It should be noted that the parameters for training (such as feature scaling and dimensionality reduction) are only obtained from the training data set, and the performance measured on the test data may be overfitting."}),"\n",(0,t.jsx)(n.p,{children:"Evaluate:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print(f"Score of tree_model: {tree_model.score(X_validation, Y_validation)}")\n# Score of tree_model: 0.9666666666666667\n'})}),"\n",(0,t.jsx)(n.p,{children:"Predict for new unseen data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print(f"Prediction of [6.0, 3.1, 5.1, 1.9]: {tree_model.predict([[6.0, 3.1, 5.1, 1.9]])[0]}")\n# Prediction of [6.0, 3.1, 5.1, 1.9]: Iris-virginica\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2149:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/files/iris-6d6bf27507afd09031e7a67cbd775ad6.csv"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
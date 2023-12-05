"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[129],{5486:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(5893),i=t(1151);const r={tags:["Machine Learning","Data Science","Numpy","Matplotlib"],description:"numpy \u548c matplotlib \u521d\u5b66\u8005\u6559\u7a0b"},s="CS231n Numpy \u6559\u7a0b",p={id:"machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",title:"CS231n Numpy \u6559\u7a0b",description:"numpy \u548c matplotlib \u521d\u5b66\u8005\u6559\u7a0b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial.md",sourceDirName:"machine-learning/numpy-pandas-matplotlib",slug:"/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",permalink:"/site/zh-CN/docs/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/zh-CN/docs/tags/machine-learning"},{label:"Data Science",permalink:"/site/zh-CN/docs/tags/data-science"},{label:"Numpy",permalink:"/site/zh-CN/docs/tags/numpy"},{label:"Matplotlib",permalink:"/site/zh-CN/docs/tags/matplotlib"}],version:"current",frontMatter:{tags:["Machine Learning","Data Science","Numpy","Matplotlib"],description:"numpy \u548c matplotlib \u521d\u5b66\u8005\u6559\u7a0b"},sidebar:"machinelearningSidebar",previous:{title:"NumPy Pandas Matpotlib",permalink:"/site/zh-CN/docs/machine-learning/numpy-pandas-matplotlib/"},next:{title:"10 \u5206\u949f\u5165\u95e8 Pandas",permalink:"/site/zh-CN/docs/machine-learning/numpy-pandas-matplotlib/ten-minutes-to-pandas"}},o={},l=[{value:"Numpy",id:"numpy",level:2},{value:"\u6570\u7ec4",id:"arrays",level:3},{value:"\u6570\u7ec4\u7d22\u5f15",id:"array-indexing",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"datatypes",level:3},{value:"\u6570\u7ec4\u8ba1\u7b97",id:"array-math",level:3},{value:"\u5e7f\u64ad",id:"broadcasting",level:3},{value:"Numpy \u6587\u6863",id:"numpy-documentation",level:3},{value:"Scipy",id:"scipy",level:2},{value:"\u56fe\u50cf\u64cd\u4f5c",id:"image-operations",level:3},{value:"\u70b9\u7684\u8ddd\u79bb",id:"distance-between-points",level:3},{value:"Matplotlib",id:"matplotlib",level:2},{value:"\u7ed8\u56fe",id:"plotting",level:3},{value:"Subplots",id:"subplots",level:3},{value:"\u56fe\u50cf",id:"images",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"cs231n-numpy-\u6559\u7a0b",children:"CS231n Numpy \u6559\u7a0b"}),"\n",(0,a.jsxs)(e.p,{children:["\u672c\u6587\u662f Python \u79d1\u5b66\u8ba1\u7b97\u5e93 ",(0,a.jsx)(e.code,{children:"numpy"})," \u3001 ",(0,a.jsx)(e.code,{children:"scipy"})," \u53ca ",(0,a.jsx)(e.code,{children:"matplotlib"})," \u7684\u5feb\u901f\u5165\u95e8\u6559\u7a0b\uff0c\u7ffb\u8bd1\u81ea\u65af\u5766\u798f\u5927\u5b66 ",(0,a.jsx)(e.a,{href:"http://cs231n.github.io/python-numpy-tutorial/",children:"CS231n - Python NumPy Tutorial"})," \u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"numpy",children:"Numpy"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"http://www.numpy.org/",children:"Numpy"})," \u662f Python \u4e2d\u79d1\u5b66\u8ba1\u7b97\u7684\u6838\u5fc3\u5e93\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u591a\u7ef4\u6570\u7ec4\u5bf9\u8c61\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fd9\u4e9b\u6570\u7ec4\u7684\u5de5\u5177\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"arrays",children:"\u6570\u7ec4"}),"\n",(0,a.jsxs)(e.p,{children:["Numpy \u7684\u6838\u5fc3\u529f\u80fd\u662f ",(0,a.jsx)(e.code,{children:"ndarray"})," \uff08\u5373 ",(0,a.jsx)(e.code,{children:"n-dimensional array"})," \uff0c\u591a\u7ef4\u6570\u7ec4\uff09 \u6570\u636e\u7ed3\u6784\u3002\u8fd9\u662f\u4e00\u4e2a\u8868\u793a\u591a\u7ef4\u5ea6\u3001\u540c\u8d28\u5e76\u4e14\u56fa\u5b9a\u5927\u5c0f\u7684\u6570\u7ec4\u5bf9\u8c61\u3002\u7ef4\u6570\u662f\u6570\u7ec4\u7684\u79e9 ",(0,a.jsx)(e.code,{children:"rank"})," ; \u6570\u7ec4\u7684\u5f62\u72b6 ",(0,a.jsx)(e.code,{children:"shape"})," \u662f\u4e00\u4e2a\u6574\u6570\u5143\u7ec4\uff0c\u8868\u793a\u6cbf\u7740\u6bcf\u4e2a\u7ef4\u5ea6\u7684\u6570\u7ec4\u5927\u5c0f\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4ece\u5d4c\u5957\u7684 Python \u5217\u8868\u521d\u59cb\u5316 Numpy \u6570\u7ec4\uff0c\u5e76\u4f7f\u7528\u65b9\u62ec\u53f7\u6765\u8bbf\u95ee\u5143\u7d20\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([1, 2, 3])  # Create a rank 1 array\nprint type(a)            # Prints "<type \'numpy.ndarray\'>"\nprint a.shape            # Prints "(3,)"\nprint a[0], a[1], a[2]   # Prints "1 2 3"\na[0] = 5                 # Change an element of the array\nprint a                  # Prints "[5, 2, 3]"\n\nb = np.array([[1,2,3],[4,5,6]])   # Create a rank 2 array\nprint b.shape                     # Prints "(2, 3)"\nprint b[0, 0], b[0, 1], b[1, 0]   # Prints "1 2 4"\n'})}),"\n",(0,a.jsx)(e.p,{children:"Numpy \u8fd8\u63d0\u4f9b\u8bb8\u591a\u521b\u5efa\u6570\u7ec4\u7684\u51fd\u6570\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.zeros((2,2))  # Create an array of all zeros\nprint a              # Prints "[[ 0.  0.]\n                     #          [ 0.  0.]]"\n\nb = np.ones((1,2))   # Create an array of all ones\nprint b              # Prints "[[ 1.  1.]]"\n\nc = np.full((2,2), 7) # Create a constant array\nprint c               # Prints "[[ 7.  7.]\n                      #          [ 7.  7.]]"\n\nd = np.eye(2)        # Create a 2x2 identity matrix\nprint d              # Prints "[[ 1.  0.]\n                     #          [ 0.  1.]]"\n\ne = np.random.random((2,2)) # Create an array filled with random values\nprint e                     # Might print "[[ 0.91940167  0.08143941]\n                            #               [ 0.68744134  0.87236687]]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"https://docs.scipy.org/doc/numpy/user/basics.creation.html#arrays-creation",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u9605\u8bfb\u5173\u4e8e\u6570\u7ec4\u521b\u5efa\u7684\u5176\u4ed6\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"array-indexing",children:"\u6570\u7ec4\u7d22\u5f15"}),"\n",(0,a.jsx)(e.p,{children:"Numpy \u63d0\u4f9b\u4e86\u591a\u79cd\u7d22\u5f15\u5230\u6570\u7ec4\u7684\u65b9\u6cd5\u3002"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u5207\u7247"}),"\uff1a\u4e0e Python \u5217\u8868\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u5bf9 Numpy \u6570\u7ec4\u8fdb\u884c\u5207\u7247\u3002\u7531\u4e8e\u6570\u7ec4\u53ef\u80fd\u662f\u591a\u7ef4\u7684\uff0c\u56e0\u6b64\u5fc5\u987b\u4e3a\u6570\u7ec4\u7684\u6bcf\u4e2a\u7ef4\u5ea6\u6307\u5b9a\u4e00\u4e2a\u5207\u7247\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create the following rank 2 array with shape (3, 4)\n# [[ 1  2  3  4]\n#  [ 5  6  7  8]\n#  [ 9 10 11 12]]\na = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])\n\n# Use slicing to pull out the subarray consisting of the first 2 rows\n# and columns 1 and 2; b is the following array of shape (2, 2):\n# [[2 3]\n#  [6 7]]\nb = a[:2, 1:3]\n\n# A slice of an array is a view into the same data, so modifying it\n# will modify the original array.\nprint a[0, 1]   # Prints "2"\nb[0, 0] = 77    # b[0, 0] is the same piece of data as a[0, 1]\nprint a[0, 1]   # Prints "77"\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4f60\u8fd8\u53ef\u4ee5\u5c06\u6574\u6570\u7d22\u5f15\u4e0e\u7247\u6bb5\u7d22\u5f15\u8fdb\u884c\u6df7\u5408\u3002\u4f46\u662f\uff0c\u8fd9\u6837\u505a\u4f1a\u4ea7\u751f\u6bd4\u539f\u59cb\u6570\u7ec4\u66f4\u4f4e\u7684\u6570\u7ec4\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create the following rank 2 array with shape (3, 4)\n# [[ 1  2  3  4]\n#  [ 5  6  7  8]\n#  [ 9 10 11 12]]\na = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])\n\n# Two ways of accessing the data in the middle row of the array.\n# Mixing integer indexing with slices yields an array of lower rank,\n# while using only slices yields an array of the same rank as the\n# original array:\nrow_r1 = a[1, :]    # Rank 1 view of the second row of a\nrow_r2 = a[1:2, :]  # Rank 2 view of the second row of a\nprint row_r1, row_r1.shape  # Prints "[5 6 7 8] (4,)"\nprint row_r2, row_r2.shape  # Prints "[[5 6 7 8]] (1, 4)"\n\n# We can make the same distinction when accessing columns of an array:\ncol_r1 = a[:, 1]\ncol_r2 = a[:, 1:2]\nprint col_r1, col_r1.shape  # Prints "[ 2  6 10] (3,)"\nprint col_r2, col_r2.shape  # Prints "[[ 2]\n                            #          [ 6]\n                            #          [10]] (3, 1)"\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6574\u6570\u6570\u7ec4\u7d22\u5f15"}),"\uff1a\u5f53\u4f60\u4f7f\u7528\u5207\u7247\u7d22\u5f15\u5230 Numpy \u6570\u7ec4\u65f6\uff0c\u751f\u6210\u7684\u6570\u7ec4\u89c6\u56fe\u5c06\u59cb\u7ec8\u662f\u539f\u59cb\u6570\u7ec4\u7684\u5b50\u6570\u7ec4\u3002 \u76f8\u53cd\uff0c\u6574\u6570\u6570\u7ec4\u7d22\u5f15\u5141\u8bb8\u4f60\u4f7f\u7528\u53e6\u4e00\u4e2a\u6570\u7ec4\u7684\u6570\u636e\u6765\u6784\u9020\u4efb\u610f\u6570\u7ec4\u3002 \u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([[1,2], [3, 4], [5, 6]])\n\n# An example of integer array indexing.\n# The returned array will have shape (3,) and\nprint a[[0, 1, 2], [0, 1, 0]]  # Prints "[1 4 5]"\n\n# The above example of integer array indexing is equivalent to this:\nprint np.array([a[0, 0], a[1, 1], a[2, 0]])  # Prints "[1 4 5]"\n\n# When using integer array indexing, you can reuse the same\n# element from the source array:\nprint a[[0, 0], [1, 1]]  # Prints "[2 2]"\n\n# Equivalent to the previous integer array indexing example\nprint np.array([a[0, 1], a[0, 1]])  # Prints "[2 2]"\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4e00\u4e2a\u6709\u7528\u7684\u6574\u6570\u6570\u7ec4\u7d22\u5f15\u6280\u5de7\uff0c\u662f\u4ece\u77e9\u9635\u7684\u6bcf\u4e00\u884c\u4e2d\u9009\u62e9\u4e00\u4e2a\u5143\u7d20\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create a new array from which we will select elements\na = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\n\nprint a  # prints "array([[ 1,  2,  3],\n         #                [ 4,  5,  6],\n         #                [ 7,  8,  9],\n         #                [10, 11, 12]])"\n\n# Create an array of indices\nb = np.array([0, 2, 0, 1])\n\n# Select one element from each row of a using the indices in b\nprint a[np.arange(4), b]  # Prints "[ 1  6  7 11]"\n\n# Mutate one element from each row of a using the indices in b\na[np.arange(4), b] += 10\n\nprint a  # prints "array([[11,  2,  3],\n         #                [ 4,  5, 16],\n         #                [17,  8,  9],\n         #                [10, 21, 12]])\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u5e03\u5c14\u6570\u7ec4\u7d22\u5f15"}),"\uff1a\u5e03\u5c14\u6570\u7ec4\u7d22\u5f15\u53ef\u4ee5\u8ba9\u4f60\u9009\u62e9\u6570\u7ec4\u7684\u4efb\u610f\u5143\u7d20\u3002\u901a\u5e38\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u7d22\u5f15\u7528\u4e8e\u9009\u62e9\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\u7684\u6570\u7ec4\u7684\u5143\u7d20\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([[1,2], [3, 4], [5, 6]])\n\nbool_idx = (a > 2)  # Find the elements of a that are bigger than 2;\n                    # this returns a numpy array of Booleans of the same\n                    # shape as a, where each slot of bool_idx tells\n                    # whether that element of a is > 2.\n\nprint bool_idx      # Prints "[[False False]\n                    #          [ True  True]\n                    #          [ True  True]]"\n\n# We use boolean array indexing to construct a rank 1 array\n# consisting of the elements of a corresponding to the True values\n# of bool_idx\nprint a[bool_idx]  # Prints "[3 4 5 6]"\n\n# We can do all of the above in a single concise statement:\nprint a[a > 2]     # Prints "[3 4 5 6]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4e3a\u4e86\u7b80\u6d01\u8d77\u89c1\uff0c\u6211\u4eec\u7701\u7565\u4e86\u5f88\u591a\u6709\u5173 Numpy \u6570\u7ec4\u7d22\u5f15\u7684\u7ec6\u8282\uff1b\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/arrays.dtypes.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"datatypes",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,a.jsx)(e.p,{children:"\u6bcf\u4e2a Numpy \u6570\u7ec4\u90fd\u662f\u76f8\u540c\u7c7b\u578b\u5143\u7d20\u7684\u7f51\u683c\u3002 Numpy \u63d0\u4f9b\u4e86\u5927\u91cf\u53ef\u7528\u4e8e\u6784\u9020\u6570\u7ec4\u7684\u6570\u503c\u6570\u636e\u7c7b\u578b\u3002 \u521b\u5efa\u6570\u7ec4\u65f6\uff0cNumpy \u4f1a\u5c1d\u8bd5\u731c\u6d4b\u6570\u636e\u7c7b\u578b\uff0c\u4f46\u6784\u9020\u6570\u7ec4\u7684\u51fd\u6570\u901a\u5e38\u8fd8\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\u6765\u663e\u5f0f\u6307\u5b9a\u6570\u636e\u7c7b\u578b\u3002 \u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([1, 2])  # Let numpy choose the datatype\nprint(x.dtype)  # Prints "int64"\n\nx = np.array([1.0, 2.0])  # Let numpy choose the datatype\nprint(x.dtype)  # Prints "float64"\n\nx = np.array([1, 2], dtype=np.int64)  # Force a particular datatype\nprint(x.dtype)  # Prints "int64"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/arrays.dtypes.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u67e5\u770b Numpy \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"array-math",children:"\u6570\u7ec4\u8ba1\u7b97"}),"\n",(0,a.jsx)(e.p,{children:"\u57fa\u672c\u7684\u6570\u5b66\u51fd\u6570\u5728\u6570\u7ec4\u4e0a\u6309\u5143\u7d20\u8fd0\u7b97\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f5c\u4e3a\u8fd0\u7b97\u7b26\u91cd\u8f7d\u548cnumpy\u6a21\u5757\u4e2d\u7684\u51fd\u6570\u4f7f\u7528\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\nx = np.array([[1,2],[3,4]], dtype=np.float64)\ny = np.array([[5,6],[7,8]], dtype=np.float64)\n\n# Elementwise sum; both produce the array\n# [[ 6.0  8.0]\n#  [10.0 12.0]]\nprint x + y\nprint np.add(x, y)\n\n# Elementwise difference; both produce the array\n# [[-4.0 -4.0]\n#  [-4.0 -4.0]]\nprint x - y\nprint np.subtract(x, y)\n\n# Elementwise product; both produce the array\n# [[ 5.0 12.0]\n#  [21.0 32.0]]\nprint x * y\nprint np.multiply(x, y)\n\n# Elementwise division; both produce the array\n# [[ 0.2         0.33333333]\n#  [ 0.42857143  0.5       ]]\nprint x / y\nprint np.divide(x, y)\n\n# Elementwise square root; produces the array\n# [[ 1.          1.41421356]\n#  [ 1.73205081  2.        ]]\nprint np.sqrt(x)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,a.jsx)(e.code,{children:"*"})," \u662f\u5143\u7d20\u4e58\u6cd5\uff0c\u800c\u4e0d\u662f\u77e9\u9635\u4e58\u6cd5\u3002\u5982\u9700\u4f7f\u7528\u77e9\u9635\u4e58\u6cd5\uff0c\u8bf7\u4f7f\u7528\u51fd\u6570 ",(0,a.jsx)(e.code,{children:"dot"})," \u3002 ",(0,a.jsx)(e.code,{children:"dot"})," \u53ef\u7528\u4f5c Numpy \u6a21\u5757\u4e2d\u7684\u51fd\u6570\uff0c\u4e5f\u53ef\u7528\u4f5c\u6570\u7ec4\u5bf9\u8c61\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\nx = np.array([[1,2],[3,4]])\ny = np.array([[5,6],[7,8]])\n\nv = np.array([9,10])\nw = np.array([11, 12])\n\n# Inner product of vectors; both produce 219\nprint v.dot(w)\nprint np.dot(v, w)\n\n# Matrix / vector product; both produce the rank 1 array [29 67]\nprint x.dot(v)\nprint np.dot(x, v)\n\n# Matrix / matrix product; both produce the rank 2 array\n# [[19 22]\n#  [43 50]]\nprint x.dot(y)\nprint np.dot(x, y)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Numpy \u63d0\u4f9b\u4e86\u8bb8\u591a\u6709\u7528\u7684\u77e9\u9635\u8ba1\u7b97\u51fd\u6570\uff1b\u5176\u4e2d\u6700\u91cd\u8981\u7684\u51fd\u6570\u4e4b\u4e00\u662f ",(0,a.jsx)(e.code,{children:"sum"}),"\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([[1,2],[3,4]])\n\nprint np.sum(x)  # Compute sum of all elements; prints "10"\nprint np.sum(x, axis=0)  # Compute sum of each column; prints "[4 6]"\nprint np.sum(x, axis=1)  # Compute sum of each row; prints "[3 7]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/routines.math.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u627e\u5230numpy\u63d0\u4f9b\u7684\u6570\u5b66\u51fd\u6570\u5b8c\u6574\u5217\u8868\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u9664\u4e86\u4f7f\u7528\u6570\u7ec4\u8ba1\u7b97\u6570\u5b66\u51fd\u6570\u4e4b\u5916\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u91cd\u65b0\u6574\u5f62\u6216\u4ee5\u5176\u4ed6\u65b9\u5f0f\u5904\u7406\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u3002 \u8fd9\u79cd\u7c7b\u578b\u7684\u64cd\u4f5c\u7684\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u662f\u8f6c\u7f6e\u77e9\u9635\uff1b\u8981\u8f6c\u7f6e\u77e9\u9635\uff0c\u53ea\u9700\u4f7f\u7528\u6570\u7ec4\u5bf9\u8c61\u7684 ",(0,a.jsx)(e.code,{children:"T"})," \u5c5e\u6027\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([[1,2], [3,4]])\nprint x    # Prints "[[1 2]\n           #          [3 4]]"\nprint x.T  # Prints "[[1 3]\n           #          [2 4]]"\n\n# Note that taking the transpose of a rank 1 array does nothing:\nv = np.array([1,2,3])\nprint v    # Prints "[1 2 3]"\nprint v.T  # Prints "[1 2 3]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Numpy \u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u6765\u64cd\u4f5c\u6570\u7ec4\uff1b\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/routines.array-manipulation.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u770b\u5230\u5b8c\u6574\u5217\u8868\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"broadcasting",children:"\u5e7f\u64ad"}),"\n",(0,a.jsx)(e.p,{children:"\u5e7f\u64ad\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u673a\u5236\uff0c\u5141\u8bb8 Numpy \u5728\u6267\u884c\u7b97\u672f\u8fd0\u7b97\u65f6\u4f7f\u7528\u4e0d\u540c\u5f62\u72b6\u7684\u6570\u7ec4\u3002 \u901a\u5e38\u6211\u4eec\u6709\u4e00\u4e2a\u66f4\u5c0f\u7684\u6570\u7ec4\u548c\u4e00\u4e2a\u66f4\u5927\u7684\u6570\u7ec4\uff0c\u6211\u4eec\u60f3\u8981\u4f7f\u7528\u8f83\u5c0f\u7684\u6570\u7ec4\u591a\u6b21\u6765\u5bf9\u8f83\u5927\u7684\u6570\u7ec4\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u8981\u4e3a\u77e9\u9635\u7684\u6bcf\u4e00\u884c\u6dfb\u52a0\u4e00\u4e2a\u5e38\u91cf\u5411\u91cf\u3002 \u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\ny = np.empty_like(x)   # Create an empty matrix with the same shape as x\n\n# Add the vector v to each row of the matrix x with an explicit loop\nfor i in range(4):\n    y[i, :] = x[i, :] + v\n\n# Now y is the following\n# [[ 2  2  4]\n#  [ 5  5  7]\n#  [ 8  8 10]\n#  [11 11 13]]\nprint y\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u79cd\u65b9\u6cd5\u662f\u53ef\u4ee5\u7684\uff1b\u7136\u800c\uff0c\u5f53\u77e9\u9635 ",(0,a.jsx)(e.code,{children:"x"})," \u975e\u5e38\u5927\u65f6\uff0cPython \u5faa\u73af\u53ef\u80fd\u4f1a\u8fd0\u884c\u5f88\u957f\u65f6\u95f4\u3002\u5b9e\u9645\u4e0a\uff0c\u5c06\u5411\u91cf ",(0,a.jsx)(e.code,{children:"v"})," \u6dfb\u52a0\u5230\u77e9\u9635 ",(0,a.jsx)(e.code,{children:"x"})," \u7684\u6bcf\u4e00\u884c\uff0c\u7b49\u4ef7\u4e8e\u901a\u8fc7\u521b\u5efa\u5782\u76f4\u5806\u53e0 ",(0,a.jsx)(e.code,{children:"v"})," \u7684\u77e9\u9635 ",(0,a.jsx)(e.code,{children:"vv"})," \uff0c\u7136\u540e\u6267\u884c ",(0,a.jsx)(e.code,{children:"x"})," \u548c ",(0,a.jsx)(e.code,{children:"vv"})," \u7684\u5143\u7d20\u6c42\u548c\u3002\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\u8fd9\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\nvv = np.tile(v, (4, 1))  # Stack 4 copies of v on top of each other\nprint vv                 # Prints "[[1 0 1]\n                         #          [1 0 1]\n                         #          [1 0 1]\n                         #          [1 0 1]]"\ny = x + vv  # Add x and vv elementwise\nprint y  # Prints "[[ 2  2  4\n         #          [ 5  5  7]\n         #          [ 8  8 10]\n         #          [11 11 13]]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Numpy \u5e7f\u64ad\u5141\u8bb8\u6211\u4eec\u5728\u4e0d\u521b\u5efa ",(0,a.jsx)(e.code,{children:"v"})," \u7684\u591a\u4e2a\u526f\u672c\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u8fd9\u4e2a\u8ba1\u7b97\u3002\u4ee5\u4e0a\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e7f\u64ad\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\ny = x + v  # Add v to each row of x using broadcasting\nprint y  # Prints "[[ 2  2  4]\n         #          [ 5  5  7]\n         #          [ 8  8 10]\n         #          [11 11 13]]"\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5373\u4f7f ",(0,a.jsx)(e.code,{children:"x"})," \u5177\u6709\u5f62\u72b6 ",(0,a.jsx)(e.code,{children:"(4, 3)"})," \u4e14 ",(0,a.jsx)(e.code,{children:"v"})," \u5177\u6709\u5f62\u72b6 ",(0,a.jsx)(e.code,{children:"(3,)"})," \uff0c\u884c ",(0,a.jsx)(e.code,{children:"y = x + v"})," \u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff1b\u5de5\u4f5c\u539f\u7406\u662f\u7531\u4e8e\u5e7f\u64ad\uff0c ",(0,a.jsx)(e.code,{children:"v"})," \u4eff\u4f5b\u6709\u5f62\u72b6 ",(0,a.jsx)(e.code,{children:"(4, 3)"})," \uff0c\u5176\u4e2d\u6bcf\u884c\u90fd\u662f ",(0,a.jsx)(e.code,{children:"v"})," \u7684\u526f\u672c\uff0c\u7136\u540e\u6309\u5143\u7d20\u8fdb\u884c\u6c42\u548c\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4e24\u4e2a\u6570\u7ec4\u95f4\u7684\u5e7f\u64ad\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u5982\u679c\u9635\u5217\u4e0d\u5177\u6709\u76f8\u540c\u7684\u79e9\uff0c\u5219\u5bf9\u8f83\u5c0f\u79e9\u7684\u9635\u5217\u8fdb\u884c\u9884\u5904\u7406\uff0c\u76f4\u5230\u4e24\u4e2a\u5f62\u72b6\u90fd\u5177\u6709\u76f8\u540c\u7684\u957f\u5ea6\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5982\u679c\u4e24\u4e2a\u6570\u7ec4\u5728\u67d0\u4e00\u7ef4\u5ea6\u7684\u5927\u5c0f\u76f8\u7b49\uff0c\u6216\u8005\u5176\u4e2d\u4e00\u4e2a\u6570\u7ec4\u5728\u8be5\u7ef4\u5ea6\u7684\u5927\u5c0f\u4e3a1\uff0c\u5219\u79f0\u4e24\u4e2a\u6570\u7ec4\u5728\u8fd9\u4e2a\u7ef4\u5ea6\u4e0a\u517c\u5bb9\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5982\u679c\u4e24\u4e2a\u6570\u7ec4\u5728\u6240\u6709\u7ef4\u5ea6\u4e0a\u90fd\u517c\u5bb9\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u5e7f\u64ad\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5e7f\u64ad\u540e\uff0c\u6bcf\u4e2a\u6570\u7ec4\u5f62\u72b6\u7b49\u540c\u4e8e\u8f83\u5927\u7684\u6570\u7ec4\u5f62\u72b6\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5982\u679c\u5728\u67d0\u4e00\u7ef4\u5ea6\uff0c\u5176\u4e2d\u4e00\u4e2a\u6570\u7ec4\u5927\u5c0f\u7b49\u4e8e1\u5e76\u4e14\u53e6\u4e00\u4e2a\u6570\u7ec4\u5927\u5c0f\u5927\u4e8e1\uff0c\u5219\u524d\u8005\u6cbf\u7740\u6b64\u7ef4\u5ea6\u590d\u5236\u81ea\u8eab\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679c\u611f\u5230\u56f0\u60d1\uff0c\u8bf7\u5c1d\u8bd5\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u6216 ",(0,a.jsx)(e.a,{href:"http://wiki.scipy.org/EricsBroadcastingDoc",children:"\u8fd9\u4efd\u8bf4\u660e"})," \u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u652f\u6301\u5e7f\u64ad\u7684\u51fd\u6570\u88ab\u79f0\u4e3a\u901a\u7528\u51fd\u6570\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/ufuncs.html#available-ufuncs",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u627e\u5230\u6240\u6709\u901a\u7528\u51fd\u6570\u7684\u5217\u8868\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u5e7f\u64ad\u7684\u4e00\u4e9b\u5e94\u7528\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# Compute outer product of vectors\nv = np.array([1,2,3])  # v has shape (3,)\nw = np.array([4,5])    # w has shape (2,)\n# To compute an outer product, we first reshape v to be a column\n# vector of shape (3, 1); we can then broadcast it against w to yield\n# an output of shape (3, 2), which is the outer product of v and w:\n# [[ 4  5]\n#  [ 8 10]\n#  [12 15]]\nprint np.reshape(v, (3, 1)) * w\n\n# Add a vector to each row of a matrix\nx = np.array([[1,2,3], [4,5,6]])\n# x has shape (2, 3) and v has shape (3,) so they broadcast to (2, 3),\n# giving the following matrix:\n# [[2 4 6]\n#  [5 7 9]]\nprint x + v\n\n# Add a vector to each column of a matrix\n# x has shape (2, 3) and w has shape (2,).\n# If we transpose x then it has shape (3, 2) and can be broadcast\n# against w to yield a result of shape (3, 2); transposing this result\n# yields the final result of shape (2, 3) which is the matrix x with\n# the vector w added to each column. Gives the following matrix:\n# [[ 5  6  7]\n#  [ 9 10 11]]\nprint (x.T + w).T\n# Another solution is to reshape w to be a column vector of shape (2, 1);\n# we can then broadcast it directly against x to produce the same\n# output.\nprint x + np.reshape(w, (2, 1))\n\n# Multiply a matrix by a constant:\n# x has shape (2, 3). NumPy treats scalars as arrays of shape ();\n# these can be broadcast together to shape (2, 3), producing the\n# following array:\n# [[ 2  4  6]\n#  [ 8 10 12]]\nprint x * 2\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5e7f\u64ad\u901a\u5e38\u4f1a\u4f7f\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u5feb\u6377\uff0c\u56e0\u6b64\u4f60\u5e94\u5c3d\u53ef\u80fd\u5730\u4f7f\u7528\u5b83\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"numpy-documentation",children:"Numpy \u6587\u6863"}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u4e2a\u7b80\u77ed\u7684\u6982\u8ff0\u5df2\u7ecf\u6d89\u53ca\u5230\u5927\u90e8\u5206 Numpy \u7684\u91cd\u8981\u529f\u80fd\uff0c\u4f46\u4ecd\u6709\u8bb8\u591a\u5730\u65b9\u672a\u6d89\u53ca\u3002\u67e5\u770b ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/",children:"Numpy \u53c2\u8003\u6587\u6863"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Numpy \u7684\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"scipy",children:"Scipy"}),"\n",(0,a.jsxs)(e.p,{children:["Numpy \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u591a\u7ef4\u6570\u7ec4\u548c\u57fa\u672c\u7684\u5de5\u5177\u6765\u8ba1\u7b97\u548c\u64cd\u7eb5\u8fd9\u4e9b\u6570\u7ec4\u3002 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/",children:"Scipy"})," \u5efa\u7acb\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0c\u5e76\u63d0\u4f9b\u4e86\u5927\u91cf\u529f\u80fd\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728 Numpy \u6570\u7ec4\u4e0a\uff0c\u5e76\u4e14\u53ef\u7528\u4e8e\u4e0d\u540c\u7c7b\u578b\u7684\u79d1\u5b66\u548c\u5de5\u7a0b\u5e94\u7528\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u719f\u6089 Scipy \u7684\u6700\u4f73\u65b9\u6cd5\u662f\u6d4f\u89c8 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/index.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"image-operations",children:"\u56fe\u50cf\u64cd\u4f5c"}),"\n",(0,a.jsx)(e.p,{children:"Scipy \u63d0\u4f9b\u4e86\u4e00\u4e9b\u57fa\u672c\u529f\u80fd\u6765\u5904\u7406\u56fe\u50cf\u3002\u4f8b\u5982\uff0c\u5b83\u5177\u6709\u4ece\u78c1\u76d8\u8bfb\u53d6\u56fe\u50cf\u5230 Numpy \u6570\u7ec4\uff0c\u5c06 Numpy \u6570\u7ec4\u5199\u5165\u78c1\u76d8\u4f5c\u4e3a\u56fe\u50cf\u5e76\u8c03\u6574\u56fe\u50cf\u5927\u5c0f\u7684\u529f\u80fd\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u8fd9\u4e9b\u529f\u80fd\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"from scipy.misc import imread, imsave, imresize\n\n# Read an JPEG image into a numpy array\nimg = imread('assets/cat.jpg')\nprint img.dtype, img.shape  # Prints \"uint8 (400, 248, 3)\"\n\n# We can tint the image by scaling each of the color channels\n# by a different scalar constant. The image has shape (400, 248, 3);\n# we multiply it by the array [1, 0.95, 0.9] of shape (3,);\n# numpy broadcasting means that this leaves the red channel unchanged,\n# and multiplies the green and blue channels by 0.95 and 0.9\n# respectively.\nimg_tinted = img * [1, 0.95, 0.9]\n\n# Resize the tinted image to be 300 by 300 pixels.\nimg_tinted = imresize(img_tinted, (300, 300))\n\n# Write the tinted image back to disk\nimsave('assets/cat_tinted.jpg', img_tinted)\n"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat.jpg",alt:""})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat_tinted.jpg",alt:""})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"distance-between-points",children:"\u70b9\u7684\u8ddd\u79bb"}),"\n",(0,a.jsx)(e.p,{children:"Scipy \u5b9a\u4e49\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u70b9\u96c6\u5408\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u51fd\u6570 ",(0,a.jsx)(e.code,{children:"scipy.spatial.distance.pdist"})," \u8ba1\u7b97\u7ed9\u5b9a\u5355\u4e2a\u96c6\u5408\u4e2d\u6240\u6709\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom scipy.spatial.distance import pdist, squareform\n\n# Create the following array where each row is a point in 2D space:\n# [[0 1]\n#  [1 0]\n#  [2 0]]\nx = np.array([[0, 1], [1, 0], [2, 0]])\nprint x\n\n# Compute the Euclidean distance between all rows of x.\n# d[i, j] is the Euclidean distance between x[i, :] and x[j, :],\n# and d is the following array:\n# [[ 0.          1.41421356  2.23606798]\n#  [ 1.41421356  0.          1.        ]\n#  [ 2.23606798  1.          0.        ]]\nd = squareform(pdist(x, 'euclidean'))\nprint d\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.pdist.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u4e2d\u9605\u8bfb\u6709\u5173\u6b64\u529f\u80fd\u7684\u6240\u6709\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u7c7b\u4f3c\u7684\u51fd\u6570\uff08",(0,a.jsx)(e.code,{children:"scipy.spatial.distance.cdist"}),"\uff09\u80fd\u591f\u8ba1\u7b97\u4e0d\u540c\u96c6\u5408\u5185\u6240\u6709\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\uff1b\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.cdist.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"matplotlib",children:"Matplotlib"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"http://matplotlib.org/",children:"Matplotlib"})," \u662f\u4e00\u4e2a\u7ed8\u56fe\u5e93\u3002\u672c\u8282\u7b80\u8981\u4ecb\u7ecd\u4e86 ",(0,a.jsx)(e.code,{children:"matplotlib.pyplot"})," \u6a21\u5757\uff0c\u8be5\u6a21\u5757\u63d0\u4f9b\u4e86\u4e0e MATLAB \u7c7b\u4f3c\u7684\u7ed8\u56fe\u7cfb\u7edf\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"plotting",children:"\u7ed8\u56fe"}),"\n",(0,a.jsxs)(e.p,{children:["Matplotlib \u4e2d\u6700\u91cd\u8981\u7684\u51fd\u6570\u662f ",(0,a.jsx)(e.code,{children:"plot"})," \uff0c\u5b83\u53ef\u4ee5\u7ed8\u5236\u4e8c\u7ef4\u6570\u636e\u3002\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on a sine curve\nx = np.arange(0, 3 * np.pi, 0.1)\ny = np.sin(x)\n\n# Plot the points using matplotlib\nplt.plot(x, y)\nplt.show()  # You must call plt.show() to make graphics appear.\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8fd0\u884c\u6b64\u4ee3\u7801\uff0c\u4f1a\u751f\u6210\u4ee5\u4e0b\u56fe\u5f62\uff1a"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine.png",alt:""})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"\u53ea\u9700\u4e00\u70b9\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u7ed8\u5236\u591a\u884c\uff0c\u5e76\u6dfb\u52a0\u6807\u9898\uff0c\u56fe\u4f8b\u548c\u8f74\u6807\u7b7e\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on sine and cosine curves\nx = np.arange(0, 3 * np.pi, 0.1)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# Plot the points using matplotlib\nplt.plot(x, y_sin)\nplt.plot(x, y_cos)\nplt.xlabel("x axis label")\nplt.ylabel("y axis label")\nplt.title("Sine and Cosine")\nplt.legend(["Sine", "Cosine"])\nplt.show()\n'})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine_cosine.png",alt:""})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsxs)(e.p,{children:["\u5173\u4e8e ",(0,a.jsx)(e.code,{children:"plot"})," \u51fd\u6570\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"http://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.plot",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"subplots",children:"Subplots"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"subplot"})," \u51fd\u6570\u5728\u540c\u4e00\u56fe\u4e2d\u7ed8\u5236\u4e0d\u540c\u5b50\u56fe\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on sine and cosine curves\nx = np.arange(0, 3 * np.pi, 0.1)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# Set up a subplot grid that has height 2 and width 1,\n# and set the first such subplot as active.\nplt.subplot(2, 1, 1)\n\n# Make the first plot\nplt.plot(x, y_sin)\nplt.title("Sine")\n\n# Set the second subplot as active, and make the second plot.\nplt.subplot(2, 1, 2)\nplt.plot(x, y_cos)\nplt.title("Cosine")\n\n# Show the figure.\nplt.show()\n'})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine_cosine_subplot.png",alt:""})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsxs)(e.p,{children:["\u5173\u4e8e ",(0,a.jsx)(e.code,{children:"subplot"})," \u51fd\u6570\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"http://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.subplot",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"images",children:"\u56fe\u50cf"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"imshow"})," \u529f\u80fd\u6765\u663e\u793a\u56fe\u50cf\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\nfrom scipy.misc import imread, imresize\nimport matplotlib.pyplot as plt\n\nimg = imread("assets/cat.jpg")\nimg_tinted = img * [1, 0.95, 0.9]\n\n# Show the original image\nplt.subplot(1, 2, 1)\nplt.imshow(img)\n\n# Show the tinted image\nplt.subplot(1, 2, 2)\n\n# A slight gotcha with imshow is that it might give strange results\n# if presented with data that is not uint8. To work around this, we\n# explicitly cast the image to uint8 before displaying it.\nplt.imshow(np.uint8(img_tinted))\nplt.show()\n'})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat_tinted_imshow.png",alt:""})}),"\n",(0,a.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>p,a:()=>s});var a=t(7294);const i={},r=a.createContext(i);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);
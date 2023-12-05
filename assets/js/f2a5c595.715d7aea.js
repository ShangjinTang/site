"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6353],{2607:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(5893),i=a(1151);const r={tags:["Machine Learning","Data Science","Numpy","Matplotlib"],description:"numpy & matplotlib quick start for beginners"},s="CS231n Numpy Tutorial",o={id:"machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",title:"CS231n Numpy Tutorial",description:"numpy & matplotlib quick start for beginners",source:"@site/docs/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial.md",sourceDirName:"machine-learning/numpy-pandas-matplotlib",slug:"/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",permalink:"/site/docs/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/docs/tags/machine-learning"},{label:"Data Science",permalink:"/site/docs/tags/data-science"},{label:"Numpy",permalink:"/site/docs/tags/numpy"},{label:"Matplotlib",permalink:"/site/docs/tags/matplotlib"}],version:"current",frontMatter:{tags:["Machine Learning","Data Science","Numpy","Matplotlib"],description:"numpy & matplotlib quick start for beginners"},sidebar:"machinelearningSidebar",previous:{title:"NumPy Pandas Matpotlib",permalink:"/site/docs/machine-learning/numpy-pandas-matplotlib/"},next:{title:"10 Minutes to Pandas",permalink:"/site/docs/machine-learning/numpy-pandas-matplotlib/ten-minutes-to-pandas"}},l={},p=[{value:"Numpy",id:"numpy",level:2},{value:"Arrays",id:"arrays",level:3},{value:"Array indexing",id:"array-indexing",level:3},{value:"Datatypes",id:"datatypes",level:3},{value:"Array Math",id:"array-math",level:3},{value:"Broadcasting",id:"broadcasting",level:3},{value:"Numpy Documentation",id:"numpy-documentation",level:3},{value:"SciPy",id:"scipy",level:2},{value:"Image operations",id:"image-operations",level:3},{value:"Distance between points",id:"distance-between-points",level:3},{value:"Matplotlib",id:"matplotlib",level:2},{value:"Plotting",id:"plotting",level:3},{value:"\u7ed8\u5236\u5b50\u56fe",id:"subplots",level:3},{value:"Images",id:"images",level:3}];function c(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"cs231n-numpy-tutorial",children:"CS231n Numpy Tutorial"}),"\n",(0,t.jsxs)(e.p,{children:["This article is a quick start tutorial for the Python scientific computing libraries ",(0,t.jsx)(e.code,{children:"numpy"}),", ",(0,t.jsx)(e.code,{children:"scipy"})," and ",(0,t.jsx)(e.code,{children:"matplotlib"}),", a copy of Stanford University ",(0,t.jsx)(e.a,{href:"http://cs231n.github.io/python-numpy-tutorial/",children:"CS231n - Python NumPy Tutorial"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"numpy",children:"Numpy"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"http://www.numpy.org/",children:"Numpy"})," is the core library for scientific computing in Python. It provides a high-performance multidimensional array object, and tools for working with these arrays."]}),"\n",(0,t.jsx)(e.h3,{id:"arrays",children:"Arrays"}),"\n",(0,t.jsxs)(e.p,{children:["A numpy array is a grid of values, all of the same type, and is indexed by a tuple of nonnegative integers. The number of dimensions is the ",(0,t.jsx)(e.em,{children:"rank"})," of the array; the shape of an array is a tuple of integers giving the size of the array along each dimension."]}),"\n",(0,t.jsx)(e.p,{children:"We can initialize numpy arrays from nested Python lists, and access elements using square brackets:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([1, 2, 3])  # Create a rank 1 array\nprint type(a)            # Prints "<type \'numpy.ndarray\'>"\nprint a.shape            # Prints "(3,)"\nprint a[0], a[1], a[2]   # Prints "1 2 3"\na[0] = 5                 # Change an element of the array\nprint a                  # Prints "[5, 2, 3]"\n\nb = np.array([[1,2,3],[4,5,6]])   # Create a rank 2 array\nprint b.shape                     # Prints "(2, 3)"\nprint b[0, 0], b[0, 1], b[1, 0]   # Prints "1 2 4"\n'})}),"\n",(0,t.jsx)(e.p,{children:"Numpy also provides many functions to create arrays:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.zeros((2,2))  # Create an array of all zeros\nprint a              # Prints "[[ 0.  0.] #          [ 0.  0.]]"\nb = np.ones((1,2))   # Create an array of all ones\nprint b              # Prints "[[ 1.  1.]]"\n\nc = np.full((2,2), 7) # Create a constant array\nprint c               # Prints "[[ 7.  7.]\n                      #          [ 7.  7.]]"\n\nd = np.eye(2)        # Create a 2x2 identity matrix\nprint d              # Prints "[[ 1.  0.]\n                     #          [ 0.  1.]]"\n\ne = np.random.random((2,2)) # Create an array filled with random values\nprint e                     # Might print "[[ 0.91940167  0.08143941]\n                            #               [ 0.68744134  0.87236687]]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You can read about other methods of array creation in ",(0,t.jsx)(e.a,{href:"https://docs.scipy.org/doc/numpy/user/basics.creation.html#arrays-creation",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"array-indexing",children:"Array indexing"}),"\n",(0,t.jsx)(e.p,{children:"Numpy offers several ways to index into arrays."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Slicing"}),": Similar to Python lists, numpy arrays can be sliced. Since arrays may be multidimensional, you must specify a slice for each dimension of the array:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create the following rank 2 array with shape (3, 4)\n# [[ 1  2  3  4]\n#  [ 5  6  7  8]\n#  [ 9 10 11 12]]\na = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])\n\n# Use slicing to pull out the subarray consisting of the first 2 rows\n# and columns 1 and 2; b is the following array of shape (2, 2):\n# [[2 3]\n#  [6 7]]\nb = a[:2, 1:3]\n\n# A slice of an array is a view into the same data, so modifying it\n# will modify the original array.\nprint a[0, 1]   # Prints "2"\nb[0, 0] = 77    # b[0, 0] is the same piece of data as a[0, 1]\nprint a[0, 1]   # Prints "77"\n'})}),"\n",(0,t.jsx)(e.p,{children:"You can also mix integer indexing with slice indexing. However, doing so will yield an array of lower rank than the original array."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create the following rank 2 array with shape (3, 4)\n# [[ 1  2  3  4]\n#  [ 5  6  7  8]\n#  [ 9 10 11 12]]\na = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])\n\n# Two ways of accessing the data in the middle row of the array.\n# Mixing integer indexing with slices yields an array of lower rank,\n# while using only slices yields an array of the same rank as the\n# original array:\nrow_r1 = a[1, :]    # Rank 1 view of the second row of a\nrow_r2 = a[1:2, :]  # Rank 2 view of the second row of a\nprint row_r1, row_r1.shape  # Prints "[5 6 7 8] (4,)"\nprint row_r2, row_r2.shape  # Prints "[[5 6 7 8]] (1, 4)"\n\n# We can make the same distinction when accessing columns of an array:\ncol_r1 = a[:, 1]\ncol_r2 = a[:, 1:2]\nprint col_r1, col_r1.shape  # Prints "[ 2  6 10] (3,)"\nprint col_r2, col_r2.shape  # Prints "[[ 2]\n                            #          [ 6]\n                            #          [10]] (3, 1)"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Integer array indexing"}),": When you index into numpy arrays using slicing, the resulting array view will always be a subarray of the original array. In contrast, integer array indexing allows you to construct arbitrary arrays using the data from another array. Here is an example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([[1,2], [3, 4], [5, 6]])\n\n# An example of integer array indexing.\n# The returned array will have shape (3,) and\nprint a[[0, 1, 2], [0, 1, 0]]  # Prints "[1 4 5]"\n\n# The above example of integer array indexing is equivalent to this:\nprint np.array([a[0, 0], a[1, 1], a[2, 0]])  # Prints "[1 4 5]"\n\n# When using integer array indexing, you can reuse the same\n# element from the source array:\nprint a[[0, 0], [1, 1]]  # Prints "[2 2]"\n\n# Equivalent to the previous integer array indexing example\nprint np.array([a[0, 1], a[0, 1]])  # Prints "[2 2]"\n'})}),"\n",(0,t.jsx)(e.p,{children:"One useful trick with integer array indexing is selecting or mutating one element from each row of a matrix:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create a new array from which we will select elements\na = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\n\nprint a  # prints "array([[ 1,  2,  3],\n         #                [ 4,  5,  6],\n         #                [ 7,  8,  9],\n         #                [10, 11, 12]])"\n\n# Create an array of indices\nb = np.array([0, 2, 0, 1])\n\n# Select one element from each row of a using the indices in b\nprint a[np.arange(4), b]  # Prints "[ 1  6  7 11]"\n\n# Mutate one element from each row of a using the indices in b\na[np.arange(4), b] += 10\n\nprint a  # prints "array([[11,  2,  3],\n         #                [ 4,  5, 16],\n         #                [17,  8,  9],\n         #                [10, 21, 12]])\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Boolean array indexing"}),": Boolean array indexing lets you pick out arbitrary elements of an array. Frequently this type of indexing is used to select the elements of an array that satisfy some condition. Here is an example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\na = np.array([[1,2], [3, 4], [5, 6]])\n\nbool_idx = (a > 2)  # Find the elements of a that are bigger than 2;\n                    # this returns a numpy array of Booleans of the same\n                    # shape as a, where each slot of bool_idx tells\n                    # whether that element of a is > 2.\n\nprint bool_idx      # Prints "[[False False]\n                    #          [ True  True]\n                    #          [ True  True]]"\n\n# We use boolean array indexing to construct a rank 1 array\n# consisting of the elements of a corresponding to the True values\n# of bool_idx\nprint a[bool_idx]  # Prints "[3 4 5 6]"\n\n# We can do all of the above in a single concise statement:\nprint a[a > 2]     # Prints "[3 4 5 6]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["For brevity we have left out a lot of details about numpy array indexing; if you want to know more you should read ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/arrays.dtypes.html",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"datatypes",children:"Datatypes"}),"\n",(0,t.jsx)(e.p,{children:"Every numpy array is a grid of elements of the same type. Numpy provides a large set of numeric datatypes that you can use to construct arrays. Numpy tries to guess a datatype when you create an array, but functions that construct arrays usually also include an optional argument to explicitly specify the datatype. Here is an example:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([1, 2])  # Let numpy choose the datatype\nprint(x.dtype)  # Prints "int64"\n\nx = np.array([1.0, 2.0])  # Let numpy choose the datatype\nprint(x.dtype)  # Prints "float64"\n\nx = np.array([1, 2], dtype=np.int64)  # Force a particular datatype\nprint(x.dtype)  # Prints "int64"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You can read all about numpy datatypes in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/arrays.dtypes.html",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"array-math",children:"Array Math"}),"\n",(0,t.jsx)(e.p,{children:"Basic mathematical functions operate elementwise on arrays, and are available both as operator overloads and as functions in the numpy module:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\nx = np.array([[1,2],[3,4]], dtype=np.float64)\ny = np.array([[5,6],[7,8]], dtype=np.float64)\n\n# Elementwise sum; both produce the array\n# [[ 6.0  8.0]\n#  [10.0 12.0]]\nprint x + y\nprint np.add(x, y)\n\n# Elementwise difference; both produce the array\n# [[-4.0 -4.0]\n#  [-4.0 -4.0]]\nprint x - y\nprint np.subtract(x, y)\n\n# Elementwise product; both produce the array\n# [[ 5.0 12.0]\n#  [21.0 32.0]]\nprint x * y\nprint np.multiply(x, y)\n\n# Elementwise division; both produce the array\n# [[ 0.2         0.33333333]\n#  [ 0.42857143  0.5       ]]\nprint x / y\nprint np.divide(x, y)\n\n# Elementwise square root; produces the array\n# [[ 1.          1.41421356]\n#  [ 1.73205081  2.        ]]\nprint np.sqrt(x)\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Note that, ",(0,t.jsx)(e.code,{children:"*"})," is elementwise multiplication, not matrix multiplication. We instead use the dot function to compute inner products of vectors, to multiply a vector by a matrix, and to multiply matrices. dot is available both as a function in the numpy module and as an instance method of array objects:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\nx = np.array([[1,2],[3,4]])\ny = np.array([[5,6],[7,8]])\n\nv = np.array([9,10])\nw = np.array([11, 12])\n\n# Inner product of vectors; both produce 219\nprint v.dot(w)\nprint np.dot(v, w)\n\n# Matrix / vector product; both produce the rank 1 array [29 67]\nprint x.dot(v)\nprint np.dot(x, v)\n\n# Matrix / matrix product; both produce the rank 2 array\n# [[19 22]\n#  [43 50]]\nprint x.dot(y)\nprint np.dot(x, y)\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Numpy provides many useful functions for performing computations on arrays; one of the most useful is ",(0,t.jsx)(e.code,{children:"sum"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([[1,2],[3,4]])\n\nprint np.sum(x)  # Compute sum of all elements; prints "10"\nprint np.sum(x, axis=0)  # Compute sum of each column; prints "[4 6]"\nprint np.sum(x, axis=1)  # Compute sum of each row; prints "[3 7]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You can find the full list of mathematical functions provided by numpy in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/routines.math.html",children:"the documentation"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Apart from computing mathematical functions using arrays, we frequently need to reshape or otherwise manipulate data in arrays. The simplest example of this type of operation is transposing a matrix; to transpose a matrix, simply use the ",(0,t.jsx)(e.code,{children:"T"})," attribute of an array object:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\nx = np.array([[1,2], [3,4]])\nprint x    # Prints "[[1 2]\n           #          [3 4]]"\nprint x.T  # Prints "[[1 3]\n           #          [2 4]]"\n\n# Note that taking the transpose of a rank 1 array does nothing:\nv = np.array([1,2,3])\nprint v    # Prints "[1 2 3]"\nprint v.T  # Prints "[1 2 3]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Numpy provides many more functions for manipulating arrays; you can see the full list in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/routines.array-manipulation.html",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"broadcasting",children:"Broadcasting"}),"\n",(0,t.jsx)(e.p,{children:"Broadcasting is a powerful mechanism that allows numpy to work with arrays of different shapes when performing arithmetic operations. Frequently we have a smaller array and a larger array, and we want to use the smaller array multiple times to perform some operation on the larger array."}),"\n",(0,t.jsx)(e.p,{children:"For example, suppose that we want to add a constant vector to each row of a matrix. We could do it like this:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\ny = np.empty_like(x)   # Create an empty matrix with the same shape as x\n\n# Add the vector v to each row of the matrix x with an explicit loop\nfor i in range(4):\n    y[i, :] = x[i, :] + v\n\n# Now y is the following\n# [[ 2  2  4]\n#  [ 5  5  7]\n#  [ 8  8 10]\n#  [11 11 13]]\nprint y\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This works; however when the matrix ",(0,t.jsx)(e.code,{children:"x"})," is very large, computing an explicit loop in Python could be slow. Note that adding the vector ",(0,t.jsx)(e.code,{children:"v"})," to each row of the matrix ",(0,t.jsx)(e.code,{children:"x"})," is equivalent to forming a matrix vv by stacking multiple copies of v vertically, then performing elementwise summation of ",(0,t.jsx)(e.code,{children:"x"})," and ",(0,t.jsx)(e.code,{children:"vv"}),". We could implement this approach like this:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\nvv = np.tile(v, (4, 1))  # Stack 4 copies of v on top of each other\nprint vv                 # Prints "[[1 0 1]\n                         #          [1 0 1]\n                         #          [1 0 1]\n                         #          [1 0 1]]"\ny = x + vv  # Add x and vv elementwise\nprint y  # Prints "[[ 2  2  4\n         #          [ 5  5  7]\n         #          [ 8  8 10]\n         #          [11 11 13]]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Numpy broadcasting allows us to perform this computation without actually creating multiple copies of ",(0,t.jsx)(e.code,{children:"v"}),". Consider this version, using broadcasting:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# We will add the vector v to each row of the matrix x,\n# storing the result in the matrix y\nx = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])\nv = np.array([1, 0, 1])\ny = x + v  # Add v to each row of x using broadcasting\nprint y  # Prints "[[ 2  2  4]\n         #          [ 5  5  7]\n         #          [ 8  8 10]\n         #          [11 11 13]]"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["The line ",(0,t.jsx)(e.code,{children:"y = x + v"})," works even though ",(0,t.jsx)(e.code,{children:"x"})," has shape ",(0,t.jsx)(e.code,{children:"(4, 3)"})," and ",(0,t.jsx)(e.code,{children:"v"})," has shape ",(0,t.jsx)(e.code,{children:"(3,)"})," due to broadcasting; this line works as if ",(0,t.jsx)(e.code,{children:"v"})," actually had shape ",(0,t.jsx)(e.code,{children:"(4, 3)"}),", where each row was a copy of ",(0,t.jsx)(e.code,{children:"v"}),", and the sum was performed elementwise."]}),"\n",(0,t.jsx)(e.p,{children:"Broadcasting two arrays together follows these rules:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"If the arrays do not have the same rank, prepend the shape of the lower rank array with 1s until both shapes have the same length."}),"\n",(0,t.jsx)(e.li,{children:"The two arrays are said to be compatible in a dimension if they have the same size in the dimension, or if one of the arrays has size 1 in that dimension."}),"\n",(0,t.jsx)(e.li,{children:"The arrays can be broadcast together if they are compatible in all dimensions."}),"\n",(0,t.jsx)(e.li,{children:"After broadcasting, each array behaves as if it had shape equal to the elementwise maximum of shapes of the two input arrays."}),"\n",(0,t.jsx)(e.li,{children:"In any dimension where one array had size 1 and the other array had size greater than 1, the first array behaves as if it were copied along that dimension"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["If this explanation does not make sense, try reading the explanation from ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html",children:"the documentation"})," or ",(0,t.jsx)(e.a,{href:"http://wiki.scipy.org/EricsBroadcastingDoc",children:"this explanation"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Functions that support broadcasting are known as ",(0,t.jsx)(e.em,{children:"universal"})," functions. You can find the list of all universal functions in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/ufuncs.html#available-ufuncs",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Here are some applications of broadcasting:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# Compute outer product of vectors\nv = np.array([1,2,3])  # v has shape (3,)\nw = np.array([4,5])    # w has shape (2,)\n# To compute an outer product, we first reshape v to be a column\n# vector of shape (3, 1); we can then broadcast it against w to yield\n# an output of shape (3, 2), which is the outer product of v and w:\n# [[ 4  5]\n#  [ 8 10]\n#  [12 15]]\nprint np.reshape(v, (3, 1)) * w\n\n# Add a vector to each row of a matrix\nx = np.array([[1,2,3], [4,5,6]])\n# x has shape (2, 3) and v has shape (3,) so they broadcast to (2, 3),\n# giving the following matrix:\n# [[2 4 6]\n#  [5 7 9]]\nprint x + v\n\n# Add a vector to each column of a matrix\n# x has shape (2, 3) and w has shape (2,).\n# If we transpose x then it has shape (3, 2) and can be broadcast\n# against w to yield a result of shape (3, 2); transposing this result\n# yields the final result of shape (2, 3) which is the matrix x with\n# the vector w added to each column. Gives the following matrix:\n# [[ 5  6  7]\n#  [ 9 10 11]]\nprint (x.T + w).T\n# Another solution is to reshape w to be a column vector of shape (2, 1);\n# we can then broadcast it directly against x to produce the same\n# output.\nprint x + np.reshape(w, (2, 1))\n\n# Multiply a matrix by a constant:\n# x has shape (2, 3). NumPy treats scalars as arrays of shape ();\n# these can be broadcast together to shape (2, 3), producing the\n# following array:\n# [[ 2  4  6]\n#  [ 8 10 12]]\nprint x * 2\n"})}),"\n",(0,t.jsx)(e.p,{children:"Broadcasting typically makes your code more concise and faster, so you should strive to use it where possible."}),"\n",(0,t.jsx)(e.h3,{id:"numpy-documentation",children:"Numpy Documentation"}),"\n",(0,t.jsxs)(e.p,{children:["This brief overview has touched on many of the important things that you need to know about numpy, but is far from complete. Check out ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/numpy/reference/",children:"the numpy reference"})," to find out much more about numpy."]}),"\n",(0,t.jsx)(e.h2,{id:"scipy",children:"SciPy"}),"\n",(0,t.jsxs)(e.p,{children:["Numpy provides a high-performance multidimensional array and basic tools to compute with and manipulate these arrays. ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/",children:"Scipy"})," builds on this, and provides a large number of functions that operate on numpy arrays and are useful for different types of scientific and engineering applications."]}),"\n",(0,t.jsxs)(e.p,{children:["The best way to get familiar with Scipy is to browse ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/index.html",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"image-operations",children:"Image operations"}),"\n",(0,t.jsx)(e.p,{children:"Scipy provides some basic functions to work with images. For example, it has functions to read images from disk into numpy arrays, to write numpy arrays to disk as images, and to resize images. Here is a simple example that showcases these functions:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from scipy.misc import imread, imsave, imresize\n\n# Read an JPEG image into a numpy array\nimg = imread('assets/cat.jpg')\nprint img.dtype, img.shape  # Prints \"uint8 (400, 248, 3)\"\n\n# We can tint the image by scaling each of the color channels\n# by a different scalar constant. The image has shape (400, 248, 3);\n# we multiply it by the array [1, 0.95, 0.9] of shape (3,);\n# numpy broadcasting means that this leaves the red channel unchanged,\n# and multiplies the green and blue channels by 0.95 and 0.9\n# respectively.\nimg_tinted = img * [1, 0.95, 0.9]\n\n# Resize the tinted image to be 300 by 300 pixels.\nimg_tinted = imresize(img_tinted, (300, 300))\n\n# Write the tinted image back to disk\nimsave('assets/cat_tinted.jpg', img_tinted)\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat.jpg",alt:""})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat_tinted.jpg",alt:""})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"distance-between-points",children:"Distance between points"}),"\n",(0,t.jsx)(e.p,{children:"Scipy defines some useful functions for computing distances between sets of points."}),"\n",(0,t.jsxs)(e.p,{children:["The function ",(0,t.jsx)(e.code,{children:"scipy.spatial.distance.pdist"})," computes the distance between all pairs of points in a given set:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom scipy.spatial.distance import pdist, squareform\n\n# Create the following array where each row is a point in 2D space:\n# [[0 1]\n#  [1 0]\n#  [2 0]]\nx = np.array([[0, 1], [1, 0], [2, 0]])\nprint x\n\n# Compute the Euclidean distance between all rows of x.\n# d[i, j] is the Euclidean distance between x[i, :] and x[j, :],\n# and d is the following array:\n# [[ 0.          1.41421356  2.23606798]\n#  [ 1.41421356  0.          1.        ]\n#  [ 2.23606798  1.          0.        ]]\nd = squareform(pdist(x, 'euclidean'))\nprint d\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can read all the details about this function in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.pdist.html",children:"the documentation"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["A similar function (",(0,t.jsx)(e.code,{children:"scipy.spatial.distance.cdist"}),") computes the distance between all pairs across two sets of points; you can read about it in ",(0,t.jsx)(e.a,{href:"http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.cdist.html",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"matplotlib",children:"Matplotlib"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"http://matplotlib.org/",children:"Matplotlib"})," is a plotting library. In this section give a brief introduction to the ",(0,t.jsx)(e.code,{children:"matplotlib.pyplot"})," module, which provides a plotting system similar to that of MATLAB."]}),"\n",(0,t.jsx)(e.h3,{id:"plotting",children:"Plotting"}),"\n",(0,t.jsxs)(e.p,{children:["The most important function in matplotlib is ",(0,t.jsx)(e.code,{children:"plot"}),", which allows you to plot 2D data. Here is a simple example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on a sine curve\nx = np.arange(0, 3 * np.pi, 0.1)\ny = np.sin(x)\n\n# Plot the points using matplotlib\nplt.plot(x, y)\nplt.show()  # You must call plt.show() to make graphics appear.\n"})}),"\n",(0,t.jsx)(e.p,{children:"Running this code produces the following plot:"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine.png",alt:""})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"With just a little bit of extra work we can easily plot multiple lines at once, and add a title, legend, and axis labels:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on sine and cosine curves\nx = np.arange(0, 3 * np.pi, 0.1)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# Plot the points using matplotlib\nplt.plot(x, y_sin)\nplt.plot(x, y_cos)\nplt.xlabel("x axis label")\nplt.ylabel("y axis label")\nplt.title("Sine and Cosine")\nplt.legend(["Sine", "Cosine"])\nplt.show()\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine_cosine.png",alt:""})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.p,{children:["You can read much more about the ",(0,t.jsx)(e.code,{children:"plot"})," function in ",(0,t.jsx)(e.a,{href:"http://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.plot",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"subplots",children:"\u7ed8\u5236\u5b50\u56fe"}),"\n",(0,t.jsxs)(e.p,{children:["You can plot different things in the same figure using the ",(0,t.jsx)(e.code,{children:"subplot"})," function. Here is an example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Compute the x and y coordinates for points on sine and cosine curves\nx = np.arange(0, 3 * np.pi, 0.1)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# Set up a subplot grid that has height 2 and width 1,\n# and set the first such subplot as active.\nplt.subplot(2, 1, 1)\n\n# Make the first plot\nplt.plot(x, y_sin)\nplt.title("Sine")\n\n# Set the second subplot as active, and make the second plot.\nplt.subplot(2, 1, 2)\nplt.plot(x, y_cos)\nplt.title("Cosine")\n\n# Show the figure.\nplt.show()\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/sine_cosine_subplot.png",alt:""})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.p,{children:["You can read much more about the ",(0,t.jsx)(e.code,{children:"subplot"})," function in ",(0,t.jsx)(e.a,{href:"http://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.subplot",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"images",children:"Images"}),"\n",(0,t.jsxs)(e.p,{children:["You can use the ",(0,t.jsx)(e.code,{children:"imshow"})," function to show images. Here is an example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import numpy as np\nfrom scipy.misc import imread, imresize\nimport matplotlib.pyplot as plt\n\nimg = imread("assets/cat.jpg")\nimg_tinted = img * [1, 0.95, 0.9]\n\n# Show the original image\nplt.subplot(1, 2, 1)\nplt.imshow(img)\n\n# Show the tinted image\nplt.subplot(1, 2, 2)\n\n# A slight gotcha with imshow is that it might give strange results\n# if presented with data that is not uint8. To work around this, we\n# explicitly cast the image to uint8 before displaying it.\nplt.imshow(np.uint8(img_tinted))\nplt.show()\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://cs231n.github.io/assets/cat_tinted_imshow.png",alt:""})}),"\n",(0,t.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);
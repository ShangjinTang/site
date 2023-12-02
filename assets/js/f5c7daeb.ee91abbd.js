"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1555],{88963:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>_,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(85893),t=n(11151);const o={title:"TensorFlow API\uff1alogits \u7684 softmax \u4ea4\u53c9\u71b5\u7684\u8ba1\u7b97",tags:["Machine Learning","TensorFlow","API","Softmax","Logits"]},i=void 0,l={id:"machinelearning/tensorflow-1/AI-tensorflow-api-softmax_cross_entropy_with_logits",title:"TensorFlow API\uff1alogits \u7684 softmax \u4ea4\u53c9\u71b5\u7684\u8ba1\u7b97",description:"\u672c\u6587\u5bf9 softmaxcrossentropywithlogits \u548c sparsesoftmaxcrossentropywith_logits \u4e24\u79cd\u4ea4\u53c9\u71b5 API \u7684\u4f7f\u7528\u548c\u4e4b\u95f4\u7684\u5dee\u522b\u8fdb\u884c\u6982\u8981\u8bf4\u660e\u3002",source:"@site/docs/machinelearning/tensorflow-1/20180225-AI-tensorflow-api-softmax_cross_entropy_with_logits.md",sourceDirName:"machinelearning/tensorflow-1",slug:"/machinelearning/tensorflow-1/AI-tensorflow-api-softmax_cross_entropy_with_logits",permalink:"/site/docs/machinelearning/tensorflow-1/AI-tensorflow-api-softmax_cross_entropy_with_logits",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/docs/tags/machine-learning"},{label:"TensorFlow",permalink:"/site/docs/tags/tensor-flow"},{label:"API",permalink:"/site/docs/tags/api"},{label:"Softmax",permalink:"/site/docs/tags/softmax"},{label:"Logits",permalink:"/site/docs/tags/logits"}],version:"current",sidebarPosition:20180225,frontMatter:{title:"TensorFlow API\uff1alogits \u7684 softmax \u4ea4\u53c9\u71b5\u7684\u8ba1\u7b97",tags:["Machine Learning","TensorFlow","API","Softmax","Logits"]},sidebar:"machinelearningSidebar",previous:{title:"TensorFlow \u5b98\u65b9\u6559\u7a0b\uff1a\u642d\u5efa\u5377\u79ef\u795e\u7ecf\u7f51\u7edc",permalink:"/site/docs/machinelearning/tensorflow-1/AI-tensorflow-layers-cnn_mnist"},next:{title:"Bagging",permalink:"/site/docs/machinelearning/traditional-algorithms/bagging/AI-bagging"}},a={},c=[{value:"\u57fa\u7840\u51fd\u6570",id:"\u57fa\u7840\u51fd\u6570",level:2},{value:"logits \u6982\u7387",id:"logits-\u6982\u7387",level:2},{value:"\u8ba1\u7b97 softmax \u4ea4\u53c9\u71b5\u7684\u4e24\u4e2a API",id:"\u8ba1\u7b97-softmax-\u4ea4\u53c9\u71b5\u7684\u4e24\u4e2a-api",level:2},{value:"sparse_softmax_cross_entropy_with_logits",id:"sparse_softmax_cross_entropy_with_logits",level:3},{value:"softmax_cross_entropy_with_logits",id:"softmax_cross_entropy_with_logits",level:3},{value:"\u6807\u7b7e\u7684\u7ef4\u5ea6\u8f6c\u6362",id:"\u6807\u7b7e\u7684\u7ef4\u5ea6\u8f6c\u6362",level:2}];function d(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u672c\u6587\u5bf9 ",(0,r.jsx)(s.code,{children:"softmax_cross_entropy_with_logits"})," \u548c ",(0,r.jsx)(s.code,{children:"sparse_softmax_cross_entropy_with_logits"})," \u4e24\u79cd\u4ea4\u53c9\u71b5 API \u7684\u4f7f\u7528\u548c\u4e4b\u95f4\u7684\u5dee\u522b\u8fdb\u884c\u6982\u8981\u8bf4\u660e\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u57fa\u7840\u51fd\u6570",children:"\u57fa\u7840\u51fd\u6570"}),"\n",(0,r.jsx)(s.p,{children:"\u57fa\u7840\u51fd\u6570\u4e0d\u505a\u8bf4\u660e\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"from __future__ import absolute_import\r\nfrom __future__ import division\r\nfrom __future__ import print_function\r\n\r\nimport numpy as np\r\nimport tensorflow as tf\r\n\r\nsess = tf.InteractiveSession()\n"})}),"\n",(0,r.jsx)(s.h2,{id:"logits-\u6982\u7387",children:"logits \u6982\u7387"}),"\n",(0,r.jsxs)(s.p,{children:["\u5047\u8bbe\u6709\u4e09\u5f20 MNIST \u56fe\u7247\uff0c",(0,r.jsx)(s.code,{children:"logits"}),"\uff08\u53ef\u4ee5\u7406\u89e3\u6210\u5f52\u4e00\u5316\u4e4b\u524d\u7684\u6982\u7387\u8868\u5f81\uff09\u5982\u4e0b\uff0c\u5f62\u72b6\u4e3a ",(0,r.jsx)(s.code,{children:"[3, 10]"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"logits = tf.constant(\r\n  np.array([[100, 0, 0, 0, 0, 0, 2, 0, 0, 1], [0, 53, 0, 0, 0, 0, 0, 48, 0, 0], [2, 1, 27, 69, 8, 1, 6, 24, 1, 2]]),\r\n  dtype=tf.float32,\r\n  shape=[3, 10])\r\n\r\nprint(sess.run(tf.nn.softmax(logits)))\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7 softmax \u8ba1\u7b97\u7684\u5b9e\u9645\u6982\u7387\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e09\u5f20\u56fe\u7247\u4f9d\u6b21\u9884\u6d4b\u4e3a\u6570\u5b57 ",(0,r.jsx)(s.code,{children:"0"}),"\u3001",(0,r.jsx)(s.code,{children:"1"}),"\u3001",(0,r.jsx)(s.code,{children:"3"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"[[1.0000000e+00 0.0000000e+00 0.0000000e+00 0.0000000e+00 0.0000000e+00\r\n  0.0000000e+00 0.0000000e+00 0.0000000e+00 0.0000000e+00 0.0000000e+00]\r\n [9.5384107e-24 9.9330717e-01 9.5384107e-24 9.5384107e-24 9.5384107e-24\r\n  9.5384107e-24 9.5384107e-24 6.6928510e-03 9.5384107e-24 9.5384107e-24]\r\n [7.9849040e-30 2.9374821e-30 5.7495225e-19 1.0000000e+00 3.2213403e-27\r\n  2.9374821e-30 4.3596101e-28 2.8625186e-20 2.9374821e-30 7.9849040e-30]]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5bf9\u4e8e\u67d0\u4e00\u9879\uff0c\u5982\u679c ",(0,r.jsx)(s.code,{children:"logits"})," \u8d8a\u5927\uff0c\u5219\u76f8\u5e94\u7684 softmax \u5f52\u4e00\u5316\u6982\u7387\u4e5f\u8d8a\u5927\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8ba1\u7b97-softmax-\u4ea4\u53c9\u71b5\u7684\u4e24\u4e2a-api",children:"\u8ba1\u7b97 softmax \u4ea4\u53c9\u71b5\u7684\u4e24\u4e2a API"}),"\n",(0,r.jsxs)(s.p,{children:["\u5047\u8bbe\u6211\u4eec\u7684\u56fe\u7247\u5b9e\u9645\u6807\u7b7e\u4f9d\u6b21\u4e3a ",(0,r.jsx)(s.code,{children:"0"}),"\u3001",(0,r.jsx)(s.code,{children:"7"}),"\u3001",(0,r.jsx)(s.code,{children:"3"}),"\uff0c\u5373\u7b2c\u4e00\u5f20\u548c\u6700\u540e\u4e00\u5f20\u8bc6\u522b\u6b63\u786e\uff0c\u4e2d\u95f4\u4e00\u5f20\u8bc6\u522b\u6709\u8bef\uff08",(0,r.jsx)(s.code,{children:"7"})," \u8bc6\u522b\u6210\u4e86 ",(0,r.jsx)(s.code,{children:"1"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"sparse_softmax_cross_entropy_with_logits",children:"sparse_softmax_cross_entropy_with_logits"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"sparse_softmax_cross_entropy_with_logits"})," \u9700\u8981\u4f7f\u7528",(0,r.jsx)(s.strong,{children:"\u4e00\u7ef4\u5f62\u72b6"}),"\u7684 ",(0,r.jsx)(s.code,{children:"labels"}),"\uff0c\u6bcf\u4e2a\u5143\u7d20\u4e3a\u6574\u578b\u6807\u7b7e\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"# tf.nn.sparse_softmax_cross_entropy_with_logits\r\n# needs labels to be 1-D shape [batch_size]\r\nlabels_1d = tf.constant(np.array([0, 7, 3]), dtype=tf.int64, shape=[3])\r\n\r\nloss1 = tf.reduce_mean(tf.nn.sparse_softmax_cross_entropy_with_logits(logits=logits, labels=labels_1d))\r\ncorrect_prediction1 = tf.equal(labels_1d, tf.argmax(logits, 1))\r\naccuracy1 = tf.reduce_mean(tf.cast(correct_prediction1, tf.float32))\r\n\r\nprint(sess.run([loss1, correct_prediction1, accuracy1]))\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"[1.6689051, array([ True, False, True]), 0.6666667]\n"})}),"\n",(0,r.jsx)(s.h3,{id:"softmax_cross_entropy_with_logits",children:"softmax_cross_entropy_with_logits"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"sparse_softmax_cross_entropy_with_logits"})," \u9700\u8981\u4f7f\u7528",(0,r.jsx)(s.strong,{children:"\u4e8c\u7ef4\u5f62\u72b6"}),"\u7684 ",(0,r.jsx)(s.code,{children:"labels"}),"\uff0c\u6bcf\u4e2a\u5143\u7d20\u4e3a\u72ec\u70ed\u7f16\u7801\uff08One Hot Encoder\uff09\u6807\u7b7e\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"# tf.nn.softmax_cross_entropy_with_logits\r\n# needs labels to be 2-D shape [batch_size, num_classes]\r\nlabels_2d = tf.constant(\r\n  np.array([[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]]),\r\n  dtype=tf.float32,\r\n  shape=[3, 10])\r\n\r\nloss2 = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits=logits, labels=labels_2d))\r\ncorrect_prediction2 = tf.equal(tf.argmax(labels_2d, 1), tf.argmax(logits, 1))\r\naccuracy2 = tf.reduce_mean(tf.cast(correct_prediction2, tf.float32))\r\n\r\nprint(sess.run([loss2, correct_prediction2, accuracy2]))\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"[1.6689051, array([ True, False, True]), 0.6666667]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u6807\u7b7e\u7684\u7ef4\u5ea6\u8f6c\u6362",children:"\u6807\u7b7e\u7684\u7ef4\u5ea6\u8f6c\u6362"}),"\n",(0,r.jsxs)(s.p,{children:["\u89c2\u5bdf ",(0,r.jsx)(s.code,{children:"labels_1d"})," \u548c ",(0,r.jsx)(s.code,{children:"labels_2d"})," \u5176\u4e2d\u7684\u5143\u7d20\uff0c\u5b9e\u9645\u4e0a\u540e\u8005\u5c31\u662f\u524d\u8005\u7684\u72ec\u70ed\u7f16\u7801\u8f6c\u6362\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"print(sess.run([tf.one_hot(labels_1d, depth=10)]))\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"[array([[1., 0., 0., 0., 0., 0., 0., 0., 0., 0.],\r\n       [0., 0., 0., 0., 0., 0., 0., 1., 0., 0.],\r\n       [0., 0., 0., 1., 0., 0., 0., 0., 0., 0.]], dtype=float32)]\n"})})]})}function _(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var r=n(67294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);
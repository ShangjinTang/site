"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[482],{20301:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>t});var l=s(74848),r=s(28453);const a={},i="Handler \u4ecb\u7ecd",o={id:"android-framework/handler/handler-introduction",title:"Handler \u4ecb\u7ecd",description:"\u5b9a\u4e49",source:"@site/docs/android-framework/handler/01-handler-introduction.md",sourceDirName:"android-framework/handler",slug:"/android-framework/handler/handler-introduction",permalink:"/docs/android-framework/handler/handler-introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"androidframeworkSidebar",previous:{title:"Android \u6846\u67b6",permalink:"/docs/android-framework/intro"},next:{title:"\u521b\u5efa\u4e00\u4e2a Looper \u7ebf\u7a0b",permalink:"/docs/android-framework/handler/create-a-thread-with-looper"}},d={},t=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u548c\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",id:"\u548c\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"Handler / Looper / Thread \u7684\u5173\u7cfb",id:"handler--looper--thread-\u7684\u5173\u7cfb",level:2},{value:"Handler \u6e90\u7801\u5206\u6790",id:"handler-\u6e90\u7801\u5206\u6790",level:2},{value:"Looper \u5bf9\u8c61\u521b\u5efa &amp; MessageQueue \u5bf9\u8c61\u521b\u5efa",id:"looper-\u5bf9\u8c61\u521b\u5efa--messagequeue-\u5bf9\u8c61\u521b\u5efa",level:3},{value:"\u4e3b\u7ebf\u7a0b Looper \u7684\u521b\u5efa",id:"\u4e3b\u7ebf\u7a0b-looper-\u7684\u521b\u5efa",level:4},{value:"\u5b50\u7ebf\u7a0b Looper \u7684\u521b\u5efa",id:"\u5b50\u7ebf\u7a0b-looper-\u7684\u521b\u5efa",level:4},{value:"Handler \u5bf9\u8c61\u521b\u5efa",id:"handler-\u5bf9\u8c61\u521b\u5efa",level:3},{value:"Message \u53d1\u9001",id:"message-\u53d1\u9001",level:3},{value:"Message \u5206\u53d1\u548c Handler \u5904\u7406",id:"message-\u5206\u53d1\u548c-handler-\u5904\u7406",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"handler-\u4ecb\u7ecd",children:"Handler \u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u5957 Android \u6d88\u606f\u4f20\u9012\u673a\u5236 / \u5f02\u6b65\u901a\u4fe1\u673a\u5236"}),"\n",(0,l.jsx)(n.h3,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728 Android \u5f00\u53d1\u4e2d\uff0cUI \u7ebf\u7a0b\uff08\u4e3b\u7ebf\u7a0b\uff09\u8d1f\u8d23\u5904\u7406\u7528\u6237\u754c\u9762\u7684\u4ea4\u4e92\u548c\u66f4\u65b0\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c UI \u7ebf\u7a0b\u88ab\u957f\u65f6\u95f4\u963b\u585e\u6216\u6267\u884c\u8017\u65f6\u64cd\u4f5c\uff0c\u5c06\u4f1a\u5bfc\u81f4\u7528\u6237\u754c\u9762\u7684\u54cd\u5e94\u6027\u964d\u4f4e\uff0c\u7528\u6237\u4f53\u9a8c\u5f88\u5dee\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u5728\u4e3b\u7ebf\u7a0b\u8fdb\u884c\u5927\u91cf\u8017\u65f6\u64cd\u4f5c\uff0c\u6ca1\u6709\u54cd\u5e94\u7528\u6237\u8f93\u5165\u4e8b\u4ef6\uff08\u5982\u70b9\u51fb\u3001\u6ed1\u52a8\u7b49\uff09\u65f6\uff0cAndroid \u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u5e94\u7528\u7a0b\u5e8f\u65e0\u54cd\u5e94\uff0c\u5e76\u5f39\u51fa ANR (Application Not Responding) \u5bf9\u8bdd\u6846\u63d0\u9192\u7528\u6237\u3002\u8fd9\u4e2a\u65f6\u95f4\u9608\u503c\u901a\u5e38\u4e3a 5 \u79d2\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"UI \u7ebf\u7a0b\uff08\u4e3b\u7ebf\u7a0b\uff09\u4e0d\u80fd\u8fdb\u884c\u5927\u91cf\u8017\u65f6\u7684\u5de5\u4f5c\uff0c\u9700\u8981\u4f7f\u7528\u5b50\u7ebf\u7a0b\uff08\u5de5\u4f5c\u7ebf\u7a0b\uff09\u5904\u7406\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u5de5\u4f5c\u7ebf\u7a0b\u76f4\u63a5\u5c1d\u8bd5\u66f4\u65b0 UI \u7ec4\u4ef6\uff0c\u5c31\u4f1a\u8fdd\u53cd Android \u7684\u7ebf\u7a0b\u5b89\u5168\u89c4\u5b9a\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u5d29\u6e83\u6216\u754c\u9762\u5f02\u5e38\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 Handler \u673a\u5236\u8fdb\u884c\u7ebf\u7a0b\u95f4\u901a\u4fe1:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u542f\u52a8\u4e00\u4e2a\u5b50\u7ebf\u7a0b\uff08\u5de5\u4f5c\u7ebf\u7a0b\uff09\u8fdb\u884c\u8017\u65f6\u7684\u4efb\u52a1\u5904\u7406\uff0c\u53ef\u4ee5\u5411 UI \u7ebf\u7a0b\u7684 Handler \u53d1\u9001\u6d88\u606f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"UI \u7ebf\u7a0b\u7684 Handler \u6536\u5230\u6d88\u606f\u540e\uff0c\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u66f4\u65b0 UI \u7ec4\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1 UI \u64cd\u4f5c\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u4ece\u800c\u907f\u514d\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u548c\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:"\u548c\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0b\u56fe\u8bf4\u660e\u4e86\u5b50\u7ebf\u7a0b\u8fdb\u884c\u8017\u65f6\u64cd\u4f5c\uff0c\u5e76\u4e14\u66f4\u65b0\u4e3b\u7ebf\u7a0b\u7684\u6d41\u7a0b\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u6d41\u7a0b"}),(0,l.jsx)(n.th,{children:"Handler \u7c7b\u6d41\u7a0b"}),(0,l.jsx)(n.th,{children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"\u521b\u5efa Looper \u5bf9\u8c61\u5e76\u542f\u52a8"}),(0,l.jsx)(n.td,{children:"\u521b\u5efa\u4e00\u4e2a\u5de5\u5382\u8f66\u95f4\u7684\u4f20\u9001\u5e26\u7cfb\u7edf"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"\u521b\u5efa MessageQueue \u5bf9\u8c61"}),(0,l.jsx)(n.td,{children:"\u51c6\u5907\u7528\u4e8e\u5b58\u653e\u8d27\u7269\u7684\u8d27\u7269\u69fd\u94fe"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"\u521b\u5efa Handler \u5bf9\u8c61\u5e76\u548c Looper \u5bf9\u8c61\u5173\u8054"}),(0,l.jsx)(n.td,{children:"\u4e3a\u4f20\u9001\u5e26\u6307\u6d3e\u4e00\u540d\u4e13\u95e8\u7684\u5904\u7406\u4eba\u5458"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e2d\u6267\u884c\u8017\u65f6\u64cd\u4f5c"}),(0,l.jsx)(n.td,{children:"\u5728\u53e6\u4e00\u4e2a\u8f66\u95f4\u8fdb\u884c\u8017\u65f6\u7684\u751f\u4ea7\u52a0\u5de5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"\u5c06\u9700\u8981\u901a\u77e5\u4e3b\u7ebf\u7a0b\u7684\u66f4\u65b0\u4fe1\u606f\u5c01\u88c5\u5728 Message \u5bf9\u8c61\u4e2d"}),(0,l.jsx)(n.td,{children:"\u5c06\u9700\u8981\u901a\u77e5\u5904\u7406\u4eba\u5458\u7684\u8d27\u7269\u4fe1\u606f\u6253\u5305\u5230\u8d27\u7269\u69fd"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"6"}),(0,l.jsx)(n.td,{children:"\u5c06 Message \u5bf9\u8c61\u6dfb\u52a0\u5230 MessageQueue \u4e2d"}),(0,l.jsx)(n.td,{children:"\u5c06\u6253\u5305\u597d\u7684\u8d27\u7269\u653e\u5165\u8d27\u7269\u69fd"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"7"}),(0,l.jsx)(n.td,{children:"Looper \u4e0d\u65ad\u5faa\u73af\u8bfb\u53d6 MessageQueue \u4e2d\u7684 Message"}),(0,l.jsx)(n.td,{children:"\u4f20\u9001\u5e26\u4e0d\u65ad\u8fd0\u8f6c\uff0c\u8bfb\u53d6\u5176\u4e2d\u7684\u8d27\u7269\u69fd\u7684\u4fe1\u606f"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"8"}),(0,l.jsx)(n.td,{children:"Looper \u53d6\u51fa Message \u5bf9\u8c61\uff0c\u5e76\u5206\u53d1\u7ed9\u5173\u8054\u7684 Handler \u5904\u7406"}),(0,l.jsx)(n.td,{children:"\u5904\u7406\u4eba\u5458\u53d6\u51fa\u8d27\u7269\u69fd\uff0c\u4ea4\u7ed9\u5bf9\u5e94\u7684\u5904\u7406\u4eba\u5458\u8fdb\u884c\u5904\u7406"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"9"}),(0,l.jsx)(n.td,{children:"Handler \u7684 handleMessage() \u65b9\u6cd5\u4e2d\u66f4\u65b0 UI \u7ec4\u4ef6"}),(0,l.jsx)(n.td,{children:"\u5904\u7406\u4eba\u5458\u6839\u636e\u8d27\u7269\u69fd\u5185\u7684\u4fe1\u606f\uff0c\u6267\u884c\u76f8\u5e94\u7684\u5904\u7406\u64cd\u4f5c"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"handler--looper--thread-\u7684\u5173\u7cfb",children:"Handler / Looper / Thread \u7684\u5173\u7cfb"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e00\u4e2a\u7ebf\u7a0b\u6700\u591a\u53ea\u6709\u4e00\u4e2a Looper \u5bf9\u8c61\uff0c\u4e00\u4e2a Looper \u5bf9\u8c61\u53ea\u548c\u4e00\u4e2a\u7ebf\u7a0b\u5173\u8054\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3b\u7ebf\u7a0b\u521b\u5efa Looper\uff1aAndroid \u4e3b\u7ebf\u7a0b\u90fd\u662f Activity\uff0c\u5728 ActivityThread \u5185\u4f1a\u81ea\u52a8\u521b\u5efa"}),"\n",(0,l.jsxs)(n.li,{children:["\u5b50\u7ebf\u7a0b\u521b\u5efa Looper\uff1a\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7ee7\u627f\u4e8e Thread\uff0c\u5728 ",(0,l.jsx)(n.code,{children:"run()"})," \u91cc\u9762\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"Looper.prepare() \u548c Looper.loop()"})]}),"\n",(0,l.jsx)(n.li,{children:"\u7ee7\u627f\u4e8e HandlerThread\uff0c\u81ea\u52a8\u521b\u5efa"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a Looper \u5bf9\u8c61\u4e2d\u5fc5\u987b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a MessageQueue \u5bf9\u8c61"}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a Looper \u5bf9\u8c61\u53ef\u4ee5\u5173\u8054 0 \u5230\u591a\u4e2a Handler \u5bf9\u8c61"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"handler-\u6e90\u7801\u5206\u6790",children:"Handler \u6e90\u7801\u5206\u6790"}),"\n",(0,l.jsx)(n.h3,{id:"looper-\u5bf9\u8c61\u521b\u5efa--messagequeue-\u5bf9\u8c61\u521b\u5efa",children:"Looper \u5bf9\u8c61\u521b\u5efa & MessageQueue \u5bf9\u8c61\u521b\u5efa"}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa Looper \u65f6\u4f1a\u540c\u6b65\u521b\u5efa MessageQueue \u5bf9\u8c61"}),"\n",(0,l.jsx)(n.h4,{id:"\u4e3b\u7ebf\u7a0b-looper-\u7684\u521b\u5efa",children:"\u4e3b\u7ebf\u7a0b Looper \u7684\u521b\u5efa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"ActivityThread.main() \u8c03\u7528 Looper.prepareMainLooper() \u548c Looper.loop()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"/**\n  * \u6e90\u7801\u5206\u6790\uff1aLooper.prepareMainLooper()\n  * \u4f5c\u7528\uff1a\u4e3a\u4e3b\u7ebf\u7a0b\uff08UI\u7ebf\u7a0b\uff09\u521b\u5efa1\u4e2a\u5faa\u73af\u5668\u5bf9\u8c61\uff08Looper\uff09\uff0c\u540c\u65f6\u4e5f\u751f\u6210\u4e861\u4e2a\u6d88\u606f\u961f\u5217\u5bf9\u8c61\uff08MessageQueue\uff09\n  * \u6ce8\uff1a\u8be5\u65b9\u6cd5\u5728\u4e3b\u7ebf\u7a0b\uff08UI\u7ebf\u7a0b\uff09\u521b\u5efa\u65f6\u81ea\u52a8\u8c03\u7528\uff0c\u5373 \u4e3b\u7ebf\u7a0b\u7684 Looper \u5bf9\u8c61\u81ea\u52a8\u751f\u6210\uff0c\u4e0d\u9700\u624b\u52a8\u751f\u6210\n  */\n\n    // \u5728Android\u5e94\u7528\u8fdb\u7a0b\u542f\u52a8\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u521b\u5efa1\u4e2a\u4e3b\u7ebf\u7a0b\uff08ActivityThread\uff0c\u4e5f\u53eb UI \u7ebf\u7a0b\uff09\n    // \u521b\u5efa\u65f6\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528 ActivityThread \u76841\u4e2a\u9759\u6001\u7684 main() \u65b9\u6cd5 = \u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\n    // main() \u5185\u5219\u4f1a\u8c03\u7528 Looper.prepareMainLooper() \u4e3a\u4e3b\u7ebf\u7a0b\u751f\u6210 1 \u4e2a Looper \u5bf9\u8c61\n\n        public static void main(String[] args) {\n            ...\n\n            // 1. \u4e3a\u4e3b\u7ebf\u7a0b\u521b\u5efa 1 \u4e2a Looper \u5bf9\u8c61\uff0c\u540c\u65f6\u751f\u6210 1 \u4e2a\u6d88\u606f\u961f\u5217\u5bf9\u8c61\uff08MessageQueue\uff09\n            // \u65b9\u6cd5\u903b\u8f91\u7c7b\u4f3c Looper.prepare()\n            // \u6ce8\uff1aprepare()\uff1a\u4e3a\u5b50\u7ebf\u7a0b\u4e2d\u521b\u5efa 1 \u4e2a Looper \u5bf9\u8c61\n            Looper.prepareMainLooper();\n            ...\n\n            // 2. \u521b\u5efa\u4e3b\u7ebf\u7a0b\n            ActivityThread thread = new ActivityThread();\n            ...\n\n            // 3. \u81ea\u52a8\u5f00\u542f\u6d88\u606f\u5faa\u73af\n            Looper.loop();\n\n        }\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Looper.prepareMainLooper(): \u5728\u4e3b\u7ebf\u7a0b\u4e2d\u521b\u5efa 1 \u4e2a Looper \u5bf9\u8c61\uff08\u81ea\u52a8\u751f\u6210\uff09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    /**\n     * Initialize the current thread as a looper, marking it as an\n     * application\'s main looper. See also: {@link #prepare()}\n     *\n     * @deprecated The main looper for your application is created by the Android environment,\n     *   so you should never need to call this function yourself.\n     */\n    @Deprecated\n    public static void prepareMainLooper() {\n        prepare(false);\n        synchronized (Looper.class) {\n            if (sMainLooper != null) {\n                throw new IllegalStateException("The main Looper has already been prepared.");\n            }\n            sMainLooper = myLooper();\n        }\n    }\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Looper.myLooper()\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"/**\n     * Return the Looper object associated with the current thread.  Returns\n     * null if the calling thread is not associated with a Looper.\n     */\n    public static @Nullable Looper myLooper() {\n        return sThreadLocal.get();\n    }\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["sThreadLocal\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// sThreadLocal.get() will return null unless you've called prepare().\n@UnsupportedAppUsage\nstatic final ThreadLocal<Looper> sThreadLocal= new ThreadLocal<Looper>();\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u5b50\u7ebf\u7a0b-looper-\u7684\u521b\u5efa",children:"\u5b50\u7ebf\u7a0b Looper \u7684\u521b\u5efa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Looper.prepare(): \u5728\u5b50\u7ebf\u7a0b\u4e2d\u521b\u5efa 1 \u4e2a Looper \u5bf9\u8c61\uff08\u624b\u52a8\u521b\u5efa\uff09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    /** Initialize the current thread as a looper.\n      * This gives you a chance to create handlers that then reference\n      * this looper, before actually starting the loop. Be sure to call\n      * {@link #loop()} after calling this method, and end it by calling\n      * {@link #quit()}.\n      */\n    public static void prepare() {\n        prepare(true);\n    }\n\n    private static void prepare(boolean quitAllowed) {\n        // 1. \u5224\u65ad sThreadLocal \u662f\u5426\u4e3a null\uff0c\u5426\u5219\u629b\u51fa\u5f02\u5e38\n        // \u5373 Looper.prepare() \u65b9\u6cd5\u4e0d\u80fd\u88ab\u8c03\u7528\u4e24\u6b21\uff0c 1 \u4e2a\u7ebf\u7a0b\u4e2d\u53ea\u80fd\u5bf9\u5e94 1 \u4e2a Looper \u5b9e\u4f8b\n        // \u6ce8\uff1asThreadLocal \u4e3a ThreadLocal \u5bf9\u8c61\uff0c\u7528\u4e8e\u5b58\u50a8\u7ebf\u7a0b\u7684\u53d8\u91cf\n        if (sThreadLocal.get() != null) {\n            throw new RuntimeException("Only one Looper may be created per thread");\n        }\n        sThreadLocal.set(new Looper(quitAllowed));\n    }\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Looper.Looper()\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"    private Looper(boolean quitAllowed) {\n        // \u521b\u5efa 1 \u4e2a Looper \u5b9e\u4f8b\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa 1 \u4e2a\u4e0e\u4e4b\u914d\u5bf9\u7684 MessageQueue\n        mQueue = new MessageQueue(quitAllowed);\n        mThread = Thread.currentThread();\n    }\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"handler-\u5bf9\u8c61\u521b\u5efa",children:"Handler \u5bf9\u8c61\u521b\u5efa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler \u5bf9\u8c61\u521b\u5efa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"    private Handler mHandler = new Handler(Looper.myLooper()){\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler() \u521b\u5efa\u65f6\uff0c\u5173\u8054 Looper \u5bf9\u8c61\u548c Queue \u5bf9\u8c61\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"    public Handler(@NonNull Looper looper) {\n        this(looper, null, false);\n    }\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"    final Looper mLooper;\n    final MessageQueue mQueue;\n\n    @UnsupportedAppUsage\n    public Handler(@NonNull Looper looper, @Nullable Callback callback, boolean async) {\n        mLooper = looper;\n        mQueue = looper.mQueue;\n        mCallback = callback;\n        mAsynchronous = async;\n    }\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"message-\u53d1\u9001",children:"Message \u53d1\u9001"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler.sendMessageAtTime(Message msg, long uptimeMillis): \u8c03\u7528 enqueueMessage()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:' /**\n  * \u5206\u6790\uff1asendMessageAtTime(Message msg, long uptimeMillis)\n  * \u4f5c\u7528\uff1a\u5728\u6307\u5b9a\u65f6\u95f4\u53d1\u51fa\u6d88\u606f\uff0c\u6d88\u606f\u4f1a\u52a0\u5165\u5230\u6d88\u606f\u961f\u5217 MessageQueue\n  */\n\n    /**\n     * Enqueue a message into the message queue after all pending messages\n     * before the absolute time (in milliseconds) <var>uptimeMillis</var>.\n     * <b>The time-base is {@link android.os.SystemClock#uptimeMillis}.</b>\n     * Time spent in deep sleep will add an additional delay to execution.\n     * You will receive it in {@link #handleMessage}, in the thread attached\n     * to this handler.\n     *\n     * @param uptimeMillis The absolute time at which the message should be\n     *         delivered, using the\n     *         {@link android.os.SystemClock#uptimeMillis} time-base.\n     *\n     * @return Returns true if the message was successfully placed in to the\n     *         message queue.  Returns false on failure, usually because the\n     *         looper processing the message queue is exiting.  Note that a\n     *         result of true does not mean the message will be processed -- if\n     *         the looper is quit before the delivery time of the message\n     *         occurs then the message will be dropped.\n     */\n    public boolean sendMessageAtTime(@NonNull Message msg, long uptimeMillis) {\n        MessageQueue queue = mQueue;\n        if (queue == null) {\n            RuntimeException e = new RuntimeException(\n                    this + " sendMessageAtTime() called with no mQueue");\n            Log.w("Looper", e.getMessage(), e);\n            return false;\n        }\n        return enqueueMessage(queue, msg, uptimeMillis);\n    }\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler.enqueueMessage(MessageQueue queue, Message msg, long uptimeMillis)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"private boolean enqueueMessage(@NonNull MessageQueue queue, @NonNull Message msg, long uptimeMillis) {\n        msg.target = this;\n        msg.workSourceUid = ThreadLocalWorkSource.getUid();\n\n        if (mAsynchronous) {\n            msg.setAsynchronous(true);\n        }\n        return queue.enqueueMessage(msg, uptimeMillis);\n    }\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"MessageQueue.enqueueMessage(Message msg, long when): \u5c06 Message \u5bf9\u8c61\u52a0\u5165\u6d88\u606f\u961f\u5217"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:' /**\n  * \u5206\u6790\uff1aMessageQueue.enqueueMessage()\n  * \u4f5c\u7528\uff1a\u5165\u961f\u6d88\u606f\uff0c\u5373\u5c06\u65b0\u7684\u6d88\u606f\u52a0\u5165\u6d88\u606f\u961f\u5217\n  */\n\n    // mMessages \u4e3a\u94fe\u8868\u7ed3\u6784\uff0c\u5934\u90e8\u4e3a\u4f18\u5148\u6267\u884c\n    // \u5373\u4f18\u5148\u6267\u884c mMessages\uff0c\u6267\u884c\u5b8c\u4e4b\u540e mMessages = mMessages.next\uff0c\u76f4\u5230 mMessages \u4e3a\u7a7a\u4e3a\u6b62\n    Message mMessages;\n    ...\n\n    boolean enqueueMessage(Message msg, long when) {\n        // msg.target \u5373\u76ee\u6807 Handler\uff0c\u5982\u679c\u4e3a null \u5219\u629b\u51fa\u5f02\u5e38\n        if (msg.target == null) {\n            throw new IllegalArgumentException("Message must have a target.");\n        }\n\n        // \u53ef\u80fd\u51fa\u73b0\u5b58\u5728\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u63d2\u5165\u6d88\u606f\u591a\u60c5\u51b5\uff0c\u7528 synchronized \u540c\u6b65\n        synchronized (this) {\n            if (msg.isInUse()) {\n                throw new IllegalStateException(msg + " This message is already in use.");\n            }\n            ...\n\n            // msg\uff1a\u5f53\u524d\uff08\u9700\u8981\u52a0\u5165\u6d88\u606f\u961f\u5217\u7684\uff09\u6d88\u606f\n            msg.markInUse();\n            msg.when = when;\n            // p (mMessages)\uff1a\u6307\u9488\uff0c\u6307\u5411\u5f53\u524d\u961f\u5217\u7684\u5934\u90e8\n            Message p = mMessages;\n            boolean needWake;\n            // \u5982\u679c\u4ee5\u4e0b\u51fa\u73b0\u60c5\u51b5\u4e4b\u4e00\uff1a\u5f53\u524d\u961f\u5217\u4e3a\u7a7a\uff1b\u5f53\u524d msg \u9700\u8981\u9a6c\u4e0a\u6267\u884c\uff1b\u5f53\u524d msg \u9700\u8981\u6267\u884c\u7684\u65f6\u95f4 < \u5934\u90e8\u6d88\u606f\u9700\u8981\u6267\u884c\u7684\u65f6\u95f4\uff0c\u5219\u5c06\u5f53\u524d\u6d88\u606f\u63d2\u5165\u961f\u5217\u5934\u90e8\uff1b\u53cd\u6b62\u63d2\u5165\u961f\u5217\u5934\u90e8\u4e4b\u540e\uff08\u4e2d\u95f4\u6216\u5c3e\u90e8\uff09\u3002\n            if (p == null || when == 0 || when < p.when) {\n                // \u5c06\u5f53\u524d\u6d88\u606f\u63d2\u5165\u961f\u5217\u5934\u90e8\n                // New head, wake up the event queue if blocked.\n                msg.next = p;\n                mMessages = msg;\n                needWake = mBlocked;\n            } else {\n                // Inserted within the middle of the queue.  Usually we don\'t have to wake\n                // up the event queue unless there is a barrier at the head of the queue\n                // and the message is the earliest asynchronous message in the queue.\n                // \u662f\u5426\u9700\u8981\u961f\u5217\u4fdd\u6301\u5524\u9192\u72b6\u6001\n                needWake = mBlocked && p.target == null && msg.isAsynchronous();\n                // \u5c06\u5f53\u524d\u6d88\u606f\u63d2\u5165\u961f\u5217\u4e2d\u95f4\n                Message prev;\n                for (;;) {\n                    prev = p;\n                    p = p.next;\n                    if (p == null || when < p.when) {\n                        break;\n                    }\n                    if (needWake && p.isAsynchronous()) {\n                        needWake = false;\n                    }\n                }\n                msg.next = p; // invariant: p == prev.next\n                prev.next = msg;\n            }\n\n            // We can assume mPtr != 0 because mQuitting is false.\n            if (needWake) {\n                nativeWake(mPtr);\n            }\n        }\n        return true;\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"message-\u5206\u53d1\u548c-handler-\u5904\u7406",children:"Message \u5206\u53d1\u548c Handler \u5904\u7406"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Looper.loop(): \u53d6\u51fa Looper \u4e2d\u7684\u6d88\u606f\u961f\u5217\uff0c\u4f7f\u7528 MessageQueue.next() \u65e0\u9650\u5faa\u73af\u53d6\u51fa msg \u5e76\u53d1\u9001\u5230\u5bf9\u5e94\u7684 handler"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'/**\n  * \u4f5c\u7528\uff1a\u6d88\u606f\u5faa\u73af\uff0c\u5373\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u83b7\u53d6\u6d88\u606f\u3001\u5206\u53d1\u6d88\u606f\u5230 Handler\n  * \u7279\u522b\u6ce8\u610f\uff1a\n  *       a. \u4e3b\u7ebf\u7a0b\u7684\u6d88\u606f\u5faa\u73af\u4e0d\u5141\u8bb8\u9000\u51fa\uff0c\u5373\u65e0\u9650\u5faa\u73af\n  *       b. \u5b50\u7ebf\u7a0b\u7684\u6d88\u606f\u5faa\u73af\u5141\u8bb8\u9000\u51fa\uff1a\u8c03\u7528\u6d88\u606f\u961f\u5217 MessageQueue \u7684 quit()\n  */\n\n    /**\n     * Run the message queue in this thread. Be sure to call\n     * {@link #quit()} to end the loop.\n     */\n    public static void loop() {\n\n        // 1. \u83b7\u53d6\u5f53\u524dLooper\u7684\u6d88\u606f\u961f\u5217\n        // myLooper()\u4f5c\u7528\uff1a\u8fd4\u56de sThreadLocal \u5b58\u50a8\u7684 Looper \u5b9e\u4f8b\uff1b\u82e5\u4e3a null \u5219\u629b\u51fa\u5f02\u5e38\n        final Looper me = myLooper();\n\n\n        // \u82e5\u4e3a null \u5219\u629b\u51fa\u5f02\u5e38\uff0c\u5373 loop\uff08\uff09\u6267\u884c\u524d\u5fc5\u987b\u6267\u884c prepare() \u521b\u5efa Looper \u5b9e\u4f8b\n        if (me == null) {\n            throw new RuntimeException("No Looper; Looper.prepare() wasn\'t called on this thread.");\n        }\n        ...\n\n        me.mInLoop = true;\n        // \u83b7\u53d6Looper\u5b9e\u4f8b\u4e2d\u7684\u6d88\u606f\u961f\u5217\u5bf9\u8c61 (MessageQueue)\n        final MessageQueue queue = me.mQueue;\n\n        // 2. \u6d88\u606f\u5faa\u73af\uff08for \u65e0\u9650\u5faa\u73af\uff09\n        for (;;) {\n            // 2.1 \u4ece\u6d88\u606f\u961f\u5217\u53d6\u51fa\u6d88\u606f msg\uff0c\u82e5\u53d6\u51fa\u6d88\u606f\u4e3a\u7a7a\u5219\u7ebf\u7a0b\u963b\u585e\n            Message msg = queue.next(); // might block\n            if (msg == null) {\n                // No message indicates that the message queue is quitting.\n                return;\n            }\n\n            try {\n            // 2.2 \u628a\u6d88\u606f msg \u6d3e\u53d1\u7ed9\u6d88\u606f\u5bf9\u8c61 msg.target\uff08\u5b9e\u9645\u662f handler \u5bf9\u8c61\uff09\n                msg.target.dispatchMessage(msg);\n                ...\n            } ...\n            ...\n\n            // 3. \u91ca\u653e\u8d44\u6e90\n            msg.recycleUnchecked();\n        }\n    }\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"MessageQueue.next(): \u4ece\u6d88\u606f\u961f\u5217\u4e2d\u53d6\u51fa\u4e0b\u4e00\u4e2a Message \u5bf9\u8c61"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:' /**\n  * \u5206\u6790\uff1aMessageQueue.next()\n  * \u4f5c\u7528\uff1a\u51fa\u961f\u6d88\u606f\uff0c\u5373\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u79fb\u51fa\u5934\u90e8\u6d88\u606f\n  */\n\n    // mMessages \u4e3a\u94fe\u8868\u7ed3\u6784\uff0c\u5934\u90e8\u4e3a\u4f18\u5148\u6267\u884c\n    // \u5373\u4f18\u5148\u6267\u884c mMessages\uff0c\u6267\u884c\u5b8c\u4e4b\u540e mMessages = mMessages.next\uff0c\u76f4\u5230 mMessages \u4e3a\u7a7a\u4e3a\u6b62\n    Message mMessages;\n    ...\n\n    Message next() {\n        // \u8be5\u53c2\u6570\u7528\u4e8e\u786e\u5b9a\u6d88\u606f\u961f\u5217\u4e2d\u662f\u5426\u8fd8\u6709\u6d88\u606f\n        // \u4ece\u800c\u51b3\u5b9a\u6d88\u606f\u961f\u5217\u5e94\u5904\u4e8e\u51fa\u961f\u6d88\u606f\u72b6\u6001 or \u7b49\u5f85\u72b6\u6001\n        int nextPollTimeoutMillis = 0;\n\n        for (;;) {\n            if (nextPollTimeoutMillis != 0) {\n                Binder.flushPendingCommands();\n            }\n\n        // nativePollOnce \u65b9\u6cd5\u5728 native \u5c42\uff0c\u82e5\u662f nextPollTimeoutMillis \u4e3a -1\uff0c\u6b64\u65f6\u6d88\u606f\u961f\u5217\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\u3000\n        nativePollOnce(ptr, nextPollTimeoutMillis);\n\n        synchronized (this) {\n\n            final long now = SystemClock.uptimeMillis();\n            Message prevMsg = null;\n            // \u4ece\u6d88\u606f\u961f\u5217\u4e2d\u53d6\u51fa\u5934\u90e8\u6d88\u606f\u5bf9\u8c61\u4f5c\u4e3a\u5f53\u524d\u7684 msg\n            Message msg = mMessages;\n\n            if (msg != null) {\n                // \u5982\u679c\u5f53\u524d msg \u65f6\u95f4\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u91cd\u65b0\u8ba1\u7b97 nextPollTimeoutMillis \u5e76\u8bbe\u7f6e\u8d85\u65f6\u5524\u9192\n                if (now < msg.when) {\n                    nextPollTimeoutMillis = (int) Math.min(msg.when - now, Integer.MAX_VALUE);\n                } else {\n                    // \u5982\u679c\u5f53\u524d msg \u65f6\u95f4\u7b49\u4e8e\u6216\u8005\u5c0f\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u53d6\u51fa\u5f53\u524d msg\n                    mBlocked = false;\n                    if (prevMsg != null) {\n                        prevMsg.next = msg.next;\n                    } else {\n                        mMessages = msg.next;\n                    }\n                    msg.next = null;\n                    if (DEBUG) Log.v(TAG, "Returning message: " + msg);\n                    msg.markInUse();\n                    return msg;\n                }\n            } else {\n                // \u82e5\u6d88\u606f\u961f\u5217\u4e2d\u5df2\u65e0\u6d88\u606f\uff0c\u5219\u5c06 nextPollTimeoutMillis \u53c2\u6570\u8bbe\u4e3a -1\n                // \u4e0b\u6b21\u5faa\u73af\u65f6\uff0c\u6d88\u606f\u961f\u5217\u5219\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\n                nextPollTimeoutMillis = -1;\n            }\n            ...\n        }\n           ...\n       }\n}\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Handler.dispatchMessage()\uff1a\u5c06\u6d88\u606f\u5206\u53d1\u7ed9\u63a5\u6536\u8005/\u56de\u8c03\u65b9\uff0c\u7531\u63a5\u6536\u8005/\u56de\u8c03\u65b9\u8fdb\u884c\u76f8\u5e94\u5904\u7406"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:" /**\n  * \u5206\u6790\uff1adispatchMessage(Message msg)\n  * \u4f5c\u7528\uff1a\u6d3e\u53d1\u6d88\u606f\u5230\u5bf9\u5e94\u7684 Handler \u5b9e\u4f8b\uff0c\u6839\u636e\u4f20\u5165\u7684 msg \u4f5c\u51fa\u5bf9\u5e94\u7684\u64cd\u4f5c\n  */\n\n    /**\n     * Handle system messages here.\n     */\n    public void dispatchMessage(@NonNull Message msg) {\n        // \u82e5 msg.callback \u5c5e\u6027\u4e0d\u4e3a\u7a7a\uff0c\u5219\u4ee3\u8868\u4f7f\u7528\u4e86 post(Runnable r) \u53d1\u9001\u6d88\u606f\n        if (msg.callback != null) {\n            handleCallback(msg);\n        } else {\n            //  \u82e5 mCallback \u4e0d\u4e3a\u7a7a\uff0c\u5219\u4ee3\u8868\u4f7f\u7528\u4e86 Handler(Looper looper, Callback callback) \u4f20\u5165\u4e86 callback \u53c2\u6570\uff1b\u4e4b\u540e\u8c03\u7528 callback \u81ea\u5df1\u5b9e\u73b0\u7684 handleMessage() \u65b9\u6cd5\uff08\u5fc5\u987b\u8fdb\u884c override \u91cd\u5199\uff0c\u8fd4\u56de true \u6216 false\uff09\n            if (mCallback != null) {\n                if (mCallback.handleMessage(msg)) {\n                    return;\n                }\n            }\n            // \u82e5msg.callback\u5c5e\u6027\u4e3a\u7a7a\uff0c\u5219\u4ee3\u8868\u4f7f\u7528\u4e86 sendMessage\uff08Message msg\uff09\u53d1\u9001\u6d88\u606f\uff1b\u4e4b\u540e\u8c03\u7528 handleMessage(msg)\uff08\u4e00\u822c\u90fd\u4f1a\u8fdb\u884c override \u91cd\u5199\uff09\n            handleMessage(msg);\n        }\n    }\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var l=s(96540);const r={},a=l.createContext(r);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);
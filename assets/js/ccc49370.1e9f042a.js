"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6103],{65203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(67294);var o=t(36905),a=t(1944),s=t(35281),i=t(9460),r=t(61460),l=t(30390),c=t(95999),d=t(32244),u=t(85893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,i.C)(),{title:t,description:o,date:s,tags:r,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:t,description:o,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=t(39407),f=t(22212);function v(e){let{sidebar:n,children:t}=e;const{metadata:o,toc:a}=(0,i.C)(),{nextItem:s,prevItem:c,frontMatter:d,unlisted:g}=o,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,u.jsxs)(r.Z,{sidebar:n,toc:!v&&a.length>0?(0,u.jsx)(h.Z,{toc:a,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(l.Z,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function p(e){const n=e.content;return(0,u.jsx)(i.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,o.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},39407:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var o=t(36905),a=t(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(85893);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(a.Z,{...t,linkClassName:r,linkActiveClassName:l})})}},93743:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(67294),a=t(86668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):o.push(a)})),o}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>r(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let a=n;a<=t;a+=1)o.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),c=l(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(39960),m=t(85893);function g(e){let{toc:n,className:t,linkClassName:o,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const h=o.memo(g);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,a.L)(),v=c??f.tableOfContents.minHeadingLevel,p=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return d((0,o.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:p}}),[r,l,v,p])),(0,m.jsx)(h,{toc:x,className:t,linkClassName:r,...g})}},22212:(e,n,t)=>{t.d(n,{Z:()=>g});t(67294);var o=t(36905),a=t(95999),s=t(35742),i=t(85893);function r(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(35281),u=t(59047);function m(e){let{className:n}=e;return(0,i.jsx)(u.Z,{type:"caution",title:(0,i.jsx)(r,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,i.jsx)(l,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(m,{...e})]})}},34661:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(16588),a=t(9870),s=(t(67294),t(85893));var i=t(74866),r=t(85162),l=t(54208),c=t(67814),d=t(23636),u=t(93024),m=t(59417);d.vI.add(u.vnX,m.mRB);const g={...o.Z,Code:a.Z,Highlight:function(e){let{children:n,color:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})},Tabs:i.Z,TabItem:r.Z,LiteYouTubeEmbed:l.Z,FontAwesomeIcon:c.G}},28996:(e,n,t)=>{t.d(n,{Z:()=>r});var o={};t.r(o),t.d(o,{ButtonExample:()=>i});var a=t(67294),s=t(85893);function i(e){return(0,s.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}const r={React:a,...a,...o}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6061],{32234:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164),i=t(44084),s=t(17559),r=t(27293),l=t(74848);function c(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(c,{...e})]})}},41689:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var a=t(34164),i=t(44084),s=t(17559),r=t(27293),l=t(74848);function c(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(n,s.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var o=t(32234);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(o.A,{}),a.draft&&(0,l.jsx)(c,{})]})}},67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(96540);var a=t(34164),i=t(61213),s=t(17559),r=t(59504),l=t(77910),c=t(67763),o=t(41689),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(74848);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:v,description:g,frontMatter:x,lastUpdatedBy:p,lastUpdatedAt:A}=t,{keywords:b,wrapperClassName:j,hide_table_of_contents:L}=x,N=f.image??x.image,C=!!(v||A||p);return(0,u.jsx)(i.e3,{className:(0,a.A)(j??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(i.be,{title:h,description:g,keywords:b,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!L&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(l.A,{children:(0,u.jsx)(n,{})})}),C&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:A,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164),i=t(65195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(74848);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(i.A,{...t,linkClassName:l,linkActiveClassName:c})})}},65195:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),i=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(28774),u=t(74848);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const v=(0,i.p)(),g=o??v.tableOfContents.minHeadingLevel,x=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[l,c,g,x])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:l,...f})}},44084:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>o});t(96540);var a=t(21312),i=t(5260),s=t(74848);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},23261:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(79525),i=t(73150),s=(t(96540),t(74848));var r=t(11470),l=t(19365),c=t(13852),o=t(46784),d=t(37107),m=t(37875),u=t(66188);d.Yv.add(m.Cvc,u.X7I);const f={...a.A,Code:i.A,Highlight:function(e){let{children:n,color:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})},Tabs:r.A,TabItem:l.A,LiteYouTubeEmbed:c.A,FontAwesomeIcon:o.g}}}]);
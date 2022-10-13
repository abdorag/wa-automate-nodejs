"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[6914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,u=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"api_model_reactions.Reaction",title:"Type alias: Reaction",sidebar_label:"Reaction",custom_edit_url:null},o=void 0,l={unversionedId:"api/types/api_model_reactions.Reaction",id:"api/types/api_model_reactions.Reaction",title:"Type alias: Reaction",description:"api/model/reactions.Reaction",source:"@site/docs/api/types/api_model_reactions.Reaction.md",sourceDirName:"api/types",slug:"/api/types/api_model_reactions.Reaction",permalink:"/docs/api/types/api_model_reactions.Reaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_model_reactions.Reaction",title:"Type alias: Reaction",sidebar_label:"Reaction",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StickerMetadata",permalink:"/docs/api/types/api_model_media.StickerMetadata"},next:{title:"ReactionEvent",permalink:"/docs/api/types/api_model_reactions.ReactionEvent"}},p={},c=[{value:"Type declaration",id:"type-declaration",level:4}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/api_model_reactions"},"api/model/reactions"),".Reaction"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Reaction"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"A reaction is identified the specific emoji."),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"aggregateEmoji")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The aggregate emoji used for the reaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hasReactionByMe")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the reaction is also sent by the host account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the reaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"senders")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/types/api_model_reactions.ReactionRecord"},(0,r.kt)("inlineCode",{parentName:"a"},"ReactionRecord")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The senders of this spefcific reaction")))))}s.isMDXComponent=!0}}]);
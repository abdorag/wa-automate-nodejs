"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[9092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="More examples",s={unversionedId:"how-to/misc",id:"how-to/misc",title:"More examples",description:"Simulate typing",source:"@site/docs/how-to/misc.md",sourceDirName:"how-to",slug:"/how-to/misc",permalink:"/docs/how-to/misc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/misc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage Participants",permalink:"/docs/how-to/manage-participants"},next:{title:"Reacting To Group Events",permalink:"/docs/how-to/react-to-group-events"}},l={},c=[{value:"Simulate typing",id:"simulate-typing",level:2},{value:"Load profile pics from server",id:"load-profile-pics-from-server",level:2},{value:"Listen to Read Receipts",id:"listen-to-read-receipts",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"more-examples"},"More examples"),(0,o.kt)("h2",{id:"simulate-typing"},"Simulate typing"),(0,o.kt)("p",null,"As of version 1.3.1 you can now simulate '...typing'"),(0,o.kt)("p",null,"You need to pass the following params:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"chat id: ",(0,o.kt)("a",{parentName:"li",href:"mailto:xxxxx@c.us"},"xxxxx@c.us")),(0,o.kt)("li",{parentName:"ul"},"on: true or false")),(0,o.kt)("p",null,"Note: You need to manually turn this off!!!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//start '...typing'\nawait client.simulateTyping('xxxxx@c.us',true)\n//wait 3 seconds\n\n//stop '...typing'\nawait client.simulateTyping('xxxxx@c.us',false)\n")),(0,o.kt)("h2",{id:"load-profile-pics-from-server"},"Load profile pics from server"),(0,o.kt)("p",null,"Generally, after the 20th chat in your WA, getChat methods do not retreive the chat picture. You need to get these from the WA servers. This is how you do it in v1.6.6^:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.getProfilePicFromServer('XXXXXXX-YYYYY@c.us')\n")),(0,o.kt)("h2",{id:"listen-to-read-receipts"},"Listen to Read Receipts"),(0,o.kt)("p",null,"As of version 1.5.3 you can now listen in on the read state (or technically acknowledgement state) of the messages. As of writing the limitation is presumed to be on sent messages."),(0,o.kt)("p",null,"The callback you set returns the whole raw message object."),(0,o.kt)("p",null,"Here's how you do it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.onAck((msg:any) => console.log(msg.id.toString(),msg.body,msg.ack))\n")),(0,o.kt)("p",null,"ack represents the acknoledgement state, of which there are 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"1 => Message Sent (1 tick)\n\n2 => Message Received by Recipient (2 ticks)\n\n3 => Message Read Receipt Confirmed (2 blue ticks)\n")),(0,o.kt)("p",null,"Note: You won't get 3 if the recipient has read receipts off."))}u.isMDXComponent=!0}}]);
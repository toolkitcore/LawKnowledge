"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3680],{418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>E,default:()=>q,frontMatter:()=>k,metadata:()=>S,toc:()=>N});var r=n(9980),a=n(1067),o=n(2363),l=n(8640),s=n(9750),i=n(8764),u=n(1313),c=n(7181),d=n(979),h=n(9334);function p(e){var t,n;return null!=(t=null==(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function f(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=f(e),[l,s]=(0,o.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:a}))),[i,c]=m({queryString:n,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,h.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=null!=i?i:d;return b({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);s(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var y=n(4284);const g={tabList:"tabList_QbkS",tabItem:"tabItem_OAh6"};function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...o,className:(0,l.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function T(e){const t=v(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,r.jsx)(x,{...e,...t}),(0,r.jsx)(w,{...e,...t})]})}function I(e){const t=(0,y.Z)();return(0,r.jsx)(T,{...e,children:p(e.children)},String(t))}const j={tabItem:"tabItem_sOBT"};function A(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(j.tabItem,a),hidden:n,children:t})}const k={title:"REST API",description:"API for developers",sidebar_position:1,last_update:{author:"Nguyen Xuan Nhan"}},E="REST API",S={id:"ref/rest",title:"REST API",description:"API for developers",source:"@site/docs/ref/rest.mdx",sourceDirName:"ref",slug:"/ref/rest",permalink:"/LawKnowledge/docs/ref/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/foxminchan/LawKnowledge/tree/main/apps/docs/docs/ref/rest.mdx",tags:[],version:"current",lastUpdatedBy:"Nguyen Xuan Nhan",lastUpdatedAt:1700667078,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"REST API",description:"API for developers",sidebar_position:1,last_update:{author:"Nguyen Xuan Nhan"}},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/LawKnowledge/docs/category/reference"},next:{title:"Oberservability",permalink:"/LawKnowledge/docs/ref/observability"}},P={},N=[{value:"Introduction",id:"introduction",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Endpoints",id:"endpoints",level:2}];function V(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)("p",{align:"justify",children:(0,r.jsx)(t.p,{children:"The REST API is a set of endpoints that allow you to build custom integrations\nwith the system. Use it to interact with the system programmatically, to\nautomate workflows, or to build custom integrations."})}),"\n",(0,r.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(I,{children:[(0,r.jsx)(A,{value:"Bearer Token",lable:"Bearer Token",default:!0,children:(0,r.jsx)("p",{align:"justify",children:(0,r.jsxs)(t.p,{children:["The REST API uses JSON Web Token (JWT) for authentication. To authenticate\nyour requests, you must include an HTTP header of ",(0,r.jsx)(t.code,{children:"Authorization"})," with the\nvalue ",(0,r.jsx)(t.code,{children:"Bearer <token>"}),"."]})})}),(0,r.jsx)(A,{value:"API Key",lable:"API Key",children:(0,r.jsx)("p",{align:"justify",children:(0,r.jsxs)(t.p,{children:["The REST API uses API Key for authentication. To authenticate your\nrequests, you must include an HTTP header of ",(0,r.jsx)(t.code,{children:"X-Api-Key"})," with the value\nof your API Key provided by the administrator."]})})})]}),"\n",(0,r.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"All endpoints will be update soon."})})]})}function q(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(V,{...e})}):V(e)}},1067:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var r=n(2363);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
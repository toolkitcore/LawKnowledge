"use strict";(self.webpackChunk_law_knowledge_source=self.webpackChunk_law_knowledge_source||[]).push([[2259],{6661:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(1527),t=n(6225);const i={title:"Infrastructure",description:"An overview of the infrastructure of the project",sidebar_position:3,last_update:{author:"Nguyen Xuan Nhan"}},o="Infrastructure",c={id:"deploy/infra",title:"Infrastructure",description:"An overview of the infrastructure of the project",source:"@site/docs/deploy/infra.mdx",sourceDirName:"deploy",slug:"/deploy/infra",permalink:"/LawKnowledge/docs/deploy/infra",draft:!1,unlisted:!1,editUrl:"https://github.com/foxminchan/LawKnowledge/tree/main/apps/docs/docs/deploy/infra.mdx",tags:[],version:"current",lastUpdatedBy:"Nguyen Xuan Nhan",lastUpdatedAt:1701423481,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{title:"Infrastructure",description:"An overview of the infrastructure of the project",sidebar_position:3,last_update:{author:"Nguyen Xuan Nhan"}},sidebar:"tutorialSidebar",previous:{title:"Kubernetes (Helm)",permalink:"/LawKnowledge/docs/deploy/k8s"},next:{title:"Reference",permalink:"/LawKnowledge/docs/category/reference"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2}];function d(e){const r={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("p",{align:"justify",children:(0,s.jsx)(r.p,{children:"The infrastructure of the project is built on the OpenStack platform. OpenStack is a free and open-source software platform for cloud computing, mostly deployed as infrastructure-as-a-service (IaaS), whereby virtual servers and other resources are made available to customers. The software platform consists of interrelated components that control diverse, multi-vendor hardware pools of processing, storage, and networking resources throughout a data center. Users either manage it through a web-based dashboard, through command-line tools, or through RESTful web services."})}),"\n",(0,s.jsx)(r.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)("img",{loading:"lazy",src:"/LawKnowledge/img/o11y/infra.svg",alt:"Infrastructure",width:"100%"}),"\n",(0,s.jsx)(r.h2,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"OpenStack Services:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Nova:"})," Manages compute instances for Kubernetes nodes."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Neutron:"})," Provides networking for the Kubernetes cluster."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Cinder:"})," Offers block storage services."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Keystone:"})," Handles identity services for authentication and authorization."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Glance:"})," Manages VM images for Kubernetes nodes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Kubernetes Cluster:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Master Node:"})," Oversees the entire Kubernetes cluster."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Worker Nodes:"})," Host the application services."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Ingress Controller:"})," Manages external access to the services."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Website"}),": The front-end user interface."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"API Gateway:"})," Routes API requests to appropriate services."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Individual Services:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Law Service:"})," Handles law-related functionalities."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Auth Service:"})," Manages authentication processes."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Search Service:"})," Provides search capabilities."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Chat Service:"})," Enables chat functionalities."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Interactions:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"User requests are received by the Ingress controller."}),"\n",(0,s.jsx)(r.li,{children:"The Ingress controller routes requests to the website or the API Gateway."}),"\n",(0,s.jsx)(r.li,{children:"The API Gateway further routes requests to the respective services like Law, Auth, Search, and Chat services."}),"\n",(0,s.jsx)(r.li,{children:"Kubernetes nodes interact with OpenStack services for resources."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6225:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var s=n(959);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[205],{4831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(9980),n=r(1067);const i={title:"Telemetry",description:"Overview of the Telemetry module",sidebar_position:3,last_update:{author:"Nguyen Xuan Nhan"}},s="Telemetry",l={id:"ref/telemetry",title:"Telemetry",description:"Overview of the Telemetry module",source:"@site/docs/ref/telemetry.mdx",sourceDirName:"ref",slug:"/ref/telemetry",permalink:"/LawKnowledge/docs/ref/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/foxminchan/LawKnowledge/tree/main/apps/docs/docs/ref/telemetry.mdx",tags:[],version:"current",lastUpdatedBy:"Nguyen Xuan Nhan",lastUpdatedAt:1700649154,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:3,frontMatter:{title:"Telemetry",description:"Overview of the Telemetry module",sidebar_position:3,last_update:{author:"Nguyen Xuan Nhan"}},sidebar:"tutorialSidebar",previous:{title:"Oberservability",permalink:"/LawKnowledge/docs/ref/observability"},next:{title:"FAQ's",permalink:"/LawKnowledge/docs/faq"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Configuration",id:"configuration",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"telemetry",children:"Telemetry"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("img",{loading:"lazy",src:"/LawKnowledge/img/o11y/telemetry.png",alt:"Open Telemetry",width:"100%"}),"\n",(0,o.jsxs)("p",{align:"justify",children:[(0,o.jsx)(t.p,{children:"The Telemetry module is responsible for collecting telemetry data from our services and exporting them to Loki and Prometheus. The Telemetry module consists of the following components:"}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://opentelemetry.io/",children:"Open Telemetry"})," is a collection of tools, APIs, and SDKs used to instrument, generate, collect,\nand export telemetry data (metrics, logs, and traces) for analysis in order to\nunderstand your software's performance and behavior. In this project, we use Open Telemetry to collect logs, metrics and traces from our services. Then, we export them to ",(0,o.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Loki"})," and ",(0,o.jsx)(t.a,{href:"https://prometheus.io/",children:"Prometheus"})," for further analysis."]})]}),"\n",(0,o.jsx)(t.h2,{id:"why-do-we-need-this",children:"Why do we need this?"}),"\n",(0,o.jsx)("p",{align:"justify",children:(0,o.jsx)(t.p,{children:"The Telemetry module is one of the most important modules in our project. It helps us to collect telemetry data from our services and export them to Loki and Prometheus. Then, we can use Loki and Prometheus to analyze the telemetry data and understand our software's performance and behavior. This is very important because it helps us to detect and fix problems in our software before they become serious."})}),"\n",(0,o.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)("img",{loading:"lazy",src:"/LawKnowledge/img/o11y/o11y.png",alt:"Open Telemetry",width:"100%"}),"\n",(0,o.jsx)("p",{align:"justify",children:(0,o.jsx)(t.p,{children:"The above diagram shows the architecture of Open Telemetry. The Open Telemetry Collector is a vendor-agnostic agent that can receive telemetry data from multiple sources and export them to multiple destinations. In this project, we use the Open Telemetry Collector to collect telemetry data from our services and export them to Loki and Prometheus."})}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)("p",{align:"justify",children:(0,o.jsxs)(t.p,{children:["The configuration of the Open Telemetry Collector is defined in the ",(0,o.jsx)(t.code,{children:"otel-collector.yaml"})," file. The configuration file is divided into three sections: ",(0,o.jsx)(t.code,{children:"receivers"}),", ",(0,o.jsx)(t.code,{children:"processors"})," and ",(0,o.jsx)(t.code,{children:"exporters"}),". The ",(0,o.jsx)(t.code,{children:"receivers"})," section defines the sources of telemetry data. The ",(0,o.jsx)(t.code,{children:"processors"})," section defines the processors that will be applied to the telemetry data. The ",(0,o.jsx)(t.code,{children:"exporters"})," section defines the destinations of telemetry data."]})}),"\n",(0,o.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://developer.ibm.com/articles/15-factor-applications/",children:"15 factors"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://opentelemetry.io/",children:"Open Telemetry"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1067:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var o=r(2363);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
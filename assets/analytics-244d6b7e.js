import{j as e,h as m,aw as B,B as g,c as H,I as h,P as r,S as A,A as N,ad as G,dA as F,r as R,c3 as M,G as V,K as $,N as L,c4 as K,Q as y,D as U,T as u,dB as z,w as J,cA as Q,a as q,s as X,dr as Y,l as Z,C as ee,dC as se,dD as te,dE as re,dF as ie,W as ae}from"./index-8396fb83.js";import{C as j}from"./CardHeader-f5d3fba9.js";import{A as b,a as le}from"./analytics-current-visits-77e18fc3.js";import{T as ne,t as oe,a as ce,b as de,c as xe,d as pe,e as he}from"./TimelineItem-a69e72dc.js";import{u as f,C}from"./chart-60195915.js";import{G as d}from"./Grid2-64edf282.js";import"./clsx-1229b3e0.js";function S({title:t,subheader:l,list:a,...i}){return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l,sx:{mb:1}}),e.jsx(B,{children:a.map(s=>e.jsx(w,{news:s},s.id))}),e.jsx(g,{sx:{p:2,textAlign:"right"},children:e.jsx(H,{size:"small",color:"inherit",endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}S.propTypes={list:r.array,subheader:r.string,title:r.string};function w({news:t}){const{coverUrl:l,title:a,description:i,postedAt:s}=t;return e.jsxs(A,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:c=>`dashed 1px ${c.palette.divider}`},children:[e.jsx(N,{variant:"rounded",alt:a,src:l,sx:{width:48,height:48,flexShrink:0}}),e.jsx(G,{primary:a,secondary:i,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),e.jsx(g,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:F(s)})]})}w.propTypes={news:r.object};function E({title:t,subheader:l,list:a,...i}){const[s,c]=R.useState(["2"]),x=n=>{const p=s.includes(n)?s.filter(o=>o!==n):[...s,n];c(p)};return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l}),a.map(n=>e.jsx(k,{task:n,checked:s.includes(n.id),onChange:()=>x(n.id)},n.id))]})}E.propTypes={list:r.array,subheader:r.string,title:r.string};function k({task:t,checked:l,onChange:a}){const i=M(),s=()=>{i.onClose(),console.info("MARK COMPLETE",t.id)},c=()=>{i.onClose(),console.info("SHARE",t.id)},x=()=>{i.onClose(),console.info("EDIT",t.id)},n=()=>{i.onClose(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(A,{direction:"row",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:p=>`dashed 1px ${p.palette.divider}`},...l&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(V,{control:e.jsx($,{checked:l,onChange:a}),label:t.name,sx:{flexGrow:1,m:0}}),e.jsx(L,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(K,{open:i.open,onClose:i.onClose,arrow:"right-top",children:[e.jsxs(y,{onClick:s,children:[e.jsx(h,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),e.jsxs(y,{onClick:x,children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(y,{onClick:c,children:[e.jsx(h,{icon:"solar:share-bold"}),"Share"]}),e.jsx(U,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{onClick:n,sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}k.propTypes={checked:r.bool,onChange:r.func,task:r.object};function I({title:t,subheader:l,list:a,...i}){return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l}),e.jsx(ne,{sx:{m:0,p:3,[`& .${oe.root}:before`]:{flex:0,padding:0}},children:a.map((s,c)=>e.jsx(O,{item:s,lastTimeline:c===a.length-1},s.id))})]})}I.propTypes={list:r.array,subheader:r.string,title:r.string};function O({item:t,lastTimeline:l}){const{type:a,title:i,time:s}=t;return e.jsxs(ce,{children:[e.jsxs(de,{children:[e.jsx(xe,{color:a==="order1"&&"primary"||a==="order2"&&"success"||a==="order3"&&"info"||a==="order4"&&"warning"||"error"}),l?null:e.jsx(pe,{})]}),e.jsxs(he,{children:[e.jsx(u,{variant:"subtitle2",children:i}),e.jsx(u,{variant:"caption",sx:{color:"text.disabled"},children:z(s)})]})]})}O.propTypes={item:r.object,lastTimeline:r.bool};function _({title:t,subheader:l,chart:a,...i}){const{labels:s,colors:c,series:x,options:n}=a,p=f({colors:c,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:x.map(o=>o.fill)},labels:s,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:o=>typeof o<"u"?`${o.toFixed(0)} visits`:o}},...n});return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l}),e.jsx(g,{sx:{p:3,pb:1},children:e.jsx(C,{dir:"ltr",type:"line",series:x,options:p,height:364})})]})}_.propTypes={chart:r.object,subheader:r.string,title:r.string};function D({title:t,subheader:l,list:a,...i}){return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l}),e.jsx(g,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:a.map(s=>e.jsxs(J,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[e.jsx(h,{icon:s.icon,color:s.value==="facebook"&&"#1877F2"||s.value==="google"&&"#DF3E30"||s.value==="linkedin"&&"#006097"||s.value==="twitter"&&"#1C9CEA"||"",width:32}),e.jsx(u,{variant:"h6",sx:{mt:.5},children:Q(s.total)}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:s.label})]},s.label))})]})}D.propTypes={list:r.array,subheader:r.string,title:r.string};const T=400,v=72,me=X(C)(({theme:t})=>({height:T,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:v,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${T-v}px) !important`}}));function P({title:t,subheader:l,chart:a,...i}){const s=q(),{series:c,colors:x,categories:n,options:p}=a,o=f({colors:x,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:n,labels:{style:{colors:[...Array(6)].map(()=>s.palette.text.secondary)}}},...p});return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l,sx:{mb:5}}),e.jsx(me,{dir:"ltr",type:"radar",series:c,options:o,height:340})]})}P.propTypes={chart:r.object,subheader:r.string,title:r.string};function W({title:t,subheader:l,chart:a,...i}){const{colors:s,series:c,options:x}=a,n=c.map(o=>o.value),p=f({colors:s,tooltip:{marker:{show:!1},y:{formatter:o=>Y(o),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:c.map(o=>o.label)},...x});return e.jsxs(m,{...i,children:[e.jsx(j,{title:t,subheader:l}),e.jsx(g,{sx:{mx:3},children:e.jsx(C,{type:"bar",dir:"ltr",series:[{data:n}],options:p,height:364})})]})}W.propTypes={chart:r.object,subheader:r.string,title:r.string};function je(){const t=Z();return e.jsxs(ee,{maxWidth:t.themeStretch?!1:"xl",children:[e.jsx(u,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{xs:12,sm:6,md:3,children:e.jsx(b,{title:"Weekly Sales",total:714e3,icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(d,{xs:12,sm:6,md:3,children:e.jsx(b,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(d,{xs:12,sm:6,md:3,children:e.jsx(b,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(d,{xs:12,sm:6,md:3,children:e.jsx(b,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(_,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(le,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(W,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(P,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(S,{title:"News",list:se})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(I,{title:"Order Timeline",list:te})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(D,{title:"Traffic by Site",list:re})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(E,{title:"Tasks",list:ie})})]})]})}function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(je,{})]})}export{ve as default};
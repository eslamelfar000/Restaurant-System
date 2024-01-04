import{j as e,h as x,aw as L,B as b,c as M,I as u,P as r,S as E,A as V,ad as z,dA as K,r as U,c3 as q,G as J,K as Q,N as X,c4 as Y,Q as y,D as Z,a as k,dq as O,s as I,T as g,dB as ee,w as se,cA as te,l as re,C as ie,dC as ae,dD as ne,dE as le,dF as oe,W as ce}from"./index-7ea3d364.js";import{C as m}from"./CardHeader-67b6dce2.js";import{u as T,C}from"./chart-31e1aa0f.js";import{T as de,t as pe,a as he,b as xe,c as me,d as je,e as ue}from"./TimelineItem-b058999e.js";import{A as f}from"./analytics-widget-summary-092f9f99.js";import{G as p}from"./Grid2-ff6cd044.js";import"./clsx-1229b3e0.js";import"./CircularProgress-4dfa33e2.js";function _({title:t,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n,sx:{mb:1}}),e.jsx(L,{children:a.map(s=>e.jsx(H,{news:s},s.id))}),e.jsx(b,{sx:{p:2,textAlign:"right"},children:e.jsx(M,{size:"small",color:"inherit",endIcon:e.jsx(u,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}_.propTypes={list:r.array,subheader:r.string,title:r.string};function H({news:t}){const{coverUrl:n,title:a,description:i,postedAt:s}=t;return e.jsxs(E,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:c=>`dashed 1px ${c.palette.divider}`},children:[e.jsx(V,{variant:"rounded",alt:a,src:n,sx:{width:48,height:48,flexShrink:0}}),e.jsx(z,{primary:a,secondary:i,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),e.jsx(b,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:K(s)})]})}H.propTypes={news:r.object};function D({title:t,subheader:n,list:a,...i}){const[s,c]=U.useState(["2"]),d=l=>{const h=s.includes(l)?s.filter(o=>o!==l):[...s,l];c(h)};return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n}),a.map(l=>e.jsx(G,{task:l,checked:s.includes(l.id),onChange:()=>d(l.id)},l.id))]})}D.propTypes={list:r.array,subheader:r.string,title:r.string};function G({task:t,checked:n,onChange:a}){const i=q(),s=()=>{i.onClose(),console.info("MARK COMPLETE",t.id)},c=()=>{i.onClose(),console.info("SHARE",t.id)},d=()=>{i.onClose(),console.info("EDIT",t.id)},l=()=>{i.onClose(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"row",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:h=>`dashed 1px ${h.palette.divider}`},...n&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(J,{control:e.jsx(Q,{checked:n,onChange:a}),label:t.name,sx:{flexGrow:1,m:0}}),e.jsx(X,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(Y,{open:i.open,onClose:i.onClose,arrow:"right-top",children:[e.jsxs(y,{onClick:s,children:[e.jsx(u,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),e.jsxs(y,{onClick:d,children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(y,{onClick:c,children:[e.jsx(u,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Z,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{onClick:l,sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}G.propTypes={checked:r.bool,onChange:r.func,task:r.object};const v=400,A=72,ge=I(C)(({theme:t})=>({height:v,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:A,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${v-A}px) !important`}}));function $({title:t,subheader:n,chart:a,...i}){const s=k(),{colors:c,series:d,options:l}=a,h=d.map(j=>j.value),o=T({chart:{sparkline:{enabled:!0}},colors:c,labels:d.map(j=>j.label),stroke:{colors:[s.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:j=>O(j),title:{formatter:j=>`${j}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...l});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n,sx:{mb:5}}),e.jsx(ge,{dir:"ltr",type:"pie",series:h,options:o,height:280})]})}$.propTypes={chart:r.object,subheader:r.string,title:r.string};function N({title:t,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n}),e.jsx(de,{sx:{m:0,p:3,[`& .${pe.root}:before`]:{flex:0,padding:0}},children:a.map((s,c)=>e.jsx(P,{item:s,lastTimeline:c===a.length-1},s.id))})]})}N.propTypes={list:r.array,subheader:r.string,title:r.string};function P({item:t,lastTimeline:n}){const{type:a,title:i,time:s}=t;return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(me,{color:a==="order1"&&"primary"||a==="order2"&&"success"||a==="order3"&&"info"||a==="order4"&&"warning"||"error"}),n?null:e.jsx(je,{})]}),e.jsxs(ue,{children:[e.jsx(g,{variant:"subtitle2",children:i}),e.jsx(g,{variant:"caption",sx:{color:"text.disabled"},children:ee(s)})]})]})}P.propTypes={item:r.object,lastTimeline:r.bool};function W({title:t,subheader:n,chart:a,...i}){const{labels:s,colors:c,series:d,options:l}=a,h=T({colors:c,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:d.map(o=>o.fill)},labels:s,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:o=>typeof o<"u"?`${o.toFixed(0)} visits`:o}},...l});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n}),e.jsx(b,{sx:{p:3,pb:1},children:e.jsx(C,{dir:"ltr",type:"line",series:d,options:h,height:364})})]})}W.propTypes={chart:r.object,subheader:r.string,title:r.string};function B({title:t,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n}),e.jsx(b,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:a.map(s=>e.jsxs(se,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[e.jsx(u,{icon:s.icon,color:s.value==="facebook"&&"#1877F2"||s.value==="google"&&"#DF3E30"||s.value==="linkedin"&&"#006097"||s.value==="twitter"&&"#1C9CEA"||"",width:32}),e.jsx(g,{variant:"h6",sx:{mt:.5},children:te(s.total)}),e.jsx(g,{variant:"body2",sx:{color:"text.secondary"},children:s.label})]},s.label))})]})}B.propTypes={list:r.array,subheader:r.string,title:r.string};const S=400,w=72,be=I(C)(({theme:t})=>({height:S,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:w,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${S-w}px) !important`}}));function R({title:t,subheader:n,chart:a,...i}){const s=k(),{series:c,colors:d,categories:l,options:h}=a,o=T({colors:d,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:l,labels:{style:{colors:[...Array(6)].map(()=>s.palette.text.secondary)}}},...h});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n,sx:{mb:5}}),e.jsx(be,{dir:"ltr",type:"radar",series:c,options:o,height:340})]})}R.propTypes={chart:r.object,subheader:r.string,title:r.string};function F({title:t,subheader:n,chart:a,...i}){const{colors:s,series:c,options:d}=a,l=c.map(o=>o.value),h=T({colors:s,tooltip:{marker:{show:!1},y:{formatter:o=>O(o),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:c.map(o=>o.label)},...d});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:n}),e.jsx(b,{sx:{mx:3},children:e.jsx(C,{type:"bar",dir:"ltr",series:[{data:l}],options:h,height:364})})]})}F.propTypes={chart:r.object,subheader:r.string,title:r.string};function ye(){const t=re();return e.jsxs(ie,{maxWidth:t.themeStretch?!1:"xl",children:[e.jsx(g,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Weekly Sales",total:714e3,icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(W,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx($,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(F,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(R,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(_,{title:"News",list:ae})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(N,{title:"Order Timeline",list:ne})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(B,{title:"Traffic by Site",list:le})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(D,{title:"Tasks",list:oe})})]})]})}function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(ye,{})]})}export{ke as default};

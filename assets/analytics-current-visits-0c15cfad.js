import{a as g,j as r,S as f,d as y,e as c,B as C,T as h,cA as j,P as e,dr as T,h as S,s as A}from"./index-30829889.js";import{u as k,C as v}from"./chart-7a40d8c9.js";import{C as H}from"./CardHeader-b2db77f7.js";function E({title:a,total:n,icon:i,color:s="primary",sx:l,...p}){const o=g();return r.jsxs(f,{alignItems:"center",sx:{...y({direction:"135deg",startColor:c(o.palette[s].light,.2),endColor:c(o.palette[s].main,.2)}),py:5,borderRadius:2,textAlign:"center",color:`${s}.darker`,backgroundColor:"common.white",...l},...p,children:[i&&r.jsx(C,{sx:{width:64,height:64,mb:1},children:i}),r.jsx(h,{variant:"h3",children:j(n)}),r.jsx(h,{variant:"subtitle2",sx:{opacity:.64},children:a})]})}E.propTypes={color:e.string,icon:e.oneOfType([e.element,e.string]),sx:e.object,title:e.string,total:e.number};const d=400,m=72,w=A(v)(({theme:a})=>({height:d,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:m,borderTop:`dashed 1px ${a.palette.divider}`,top:`calc(${d-m}px) !important`}}));function G({title:a,subheader:n,chart:i,...s}){const l=g(),{colors:p,series:o,options:b}=i,u=o.map(t=>t.value),x=k({chart:{sparkline:{enabled:!0}},colors:p,labels:o.map(t=>t.label),stroke:{colors:[l.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:t=>T(t),title:{formatter:t=>`${t}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...b});return r.jsxs(S,{...s,children:[r.jsx(H,{title:a,subheader:n,sx:{mb:5}}),r.jsx(w,{dir:"ltr",type:"pie",series:u,options:x,height:280})]})}G.propTypes={chart:e.object,subheader:e.string,title:e.string};export{E as A,G as a};
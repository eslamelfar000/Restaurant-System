import{j as e,h,aw as m,D as p,P as n,a as g,c3 as j,B as x,z as u,dr as T,A as f,ad as y,av as v}from"./index-7ea3d364.js";import{a as b,b as C,T as R}from"./table-pagination-custom-e318c9d1.js";import{T as B}from"./table-skeleton-f5c9d944.js";import{C as F}from"./CardHeader-67b6dce2.js";import{T as k,a as I,b as w}from"./TableContainer-db009897.js";import{T as o}from"./TablePagination-b871666b.js";import{R as z}from"./Rating-2803ac86.js";function A({title:r,subheader:a,tableLabels:t,tableData:s,loading:i,...c}){return e.jsxs(h,{...c,sx:{borderRadius:"16px 16px 0px 0px"},children:[e.jsx(F,{title:r,subheader:a,sx:{mb:3}}),e.jsx(k,{sx:{overflow:"unset"},children:e.jsx(m,{sx:{minWidth:720,maxHeight:330,overflowY:"auto"},children:e.jsxs(I,{style:{height:"300px",overflowY:"auto"},children:[e.jsx(b,{headLabel:t}),e.jsx(w,{style:{height:i?"275px":"300px",overflowY:"auto"},children:i?e.jsx(B,{}):e.jsx(e.Fragment,{children:(s==null?void 0:s.length)>0?e.jsx(e.Fragment,{children:s==null?void 0:s.map(l=>e.jsx(d,{row:l,loading:i},l.id))}):e.jsx(e.Fragment,{children:e.jsx(C,{sx:{height:"auto",my:0,padding:"10px 0px"},notFound:(s==null?void 0:s.length)>0})})})})]})})}),e.jsx(p,{sx:{borderStyle:"dashed"}})]})}A.propTypes={subheader:n.string,tableData:n.array,tableLabels:n.array,title:n.string};function d({row:r,tableData:a,loading:t}){g().palette.mode,j();const i=e.jsx(x,{sx:{position:"relative",mr:2},children:e.jsx(u,{overlap:"circular",color:r.type==="Income"?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{[`& .${T.badge}`]:{p:0,width:20}},children:e.jsx(f,{src:r.image||"",sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"}})})});return console.log(a),e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsxs(o,{sx:{display:"flex",alignItems:"center"},children:[i,e.jsx(y,{primary:r.name,secondary:`${r.details.slice(0,25)}...`})]}),e.jsx(o,{children:e.jsx(x,{sx:{display:"flex",alignItems:"center"},children:e.jsx(z,{size:"small",name:"half-rating-read",defaultValue:parseFloat(r.rate)||0,precision:.5,readOnly:!0},r.id)})}),e.jsx(o,{children:v(r.price)})]})})}d.propTypes={row:n.object};export{A as B};

import{bx as c,by as p,s as u,be as i,r as g,bh as v,bi as x,j as C,bn as b,bo as f}from"./index-2e23bd70.js";import{d as m}from"./dialogTitleClasses-7dbb835a.js";function D(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const w=["className","dividers"],y=o=>{const{classes:s,dividers:t}=o;return f({root:["root",t&&"dividers"]},D,s)},R=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${m.root} + &`]:{paddingTop:0}})),j=g.forwardRef(function(s,t){const e=v({props:s,name:"MuiDialogContent"}),{className:a,dividers:n=!1}=e,l=x(e,w),r=i({},e,{dividers:n}),d=y(r);return C.jsx(R,i({className:b(d.root,a),ownerState:r,ref:t},l))}),T=j;export{T as D};
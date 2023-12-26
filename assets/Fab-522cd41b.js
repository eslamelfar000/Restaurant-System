import{s as z,bz as F,bA as R,bd as e,be as i,bB as v,r as k,bh as w,bi as $,j as N,bn as g,bo as y,bC as V}from"./index-2e23bd70.js";const W=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],_=o=>{const{color:a,variant:s,classes:r,size:l}=o,t={root:["root",s,`size${e(l)}`,a==="inherit"?"colorInherit":a]},d=y(t,V,r);return i({},r,d)},j=z(F,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>R(o)||o==="classes",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,a[s.variant],a[`size${e(s.size)}`],s.color==="inherit"&&a.colorInherit,a[e(s.size)],a[s.color]]}})(({theme:o,ownerState:a})=>{var s,r;return i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(s=(r=o.palette).getContrastText)==null?void 0:s.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${v.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},a.size==="small"&&{width:40,height:40},a.size==="medium"&&{width:48,height:48},a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},a.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:a})=>i({},a.color!=="inherit"&&a.color!=="default"&&(o.vars||o).palette[a.color]!=null&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}}),({theme:o})=>({[`&.${v.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),B=k.forwardRef(function(a,s){const r=w({props:a,name:"MuiFab"}),{children:l,className:t,color:d="default",component:c="button",disabled:b=!1,disableFocusRipple:u=!1,focusVisibleClassName:x,size:h="large",variant:C="circular"}=r,f=$(r,W),p=i({},r,{color:d,component:c,disabled:b,disableFocusRipple:u,size:h,variant:C}),n=_(p);return N.jsx(j,i({className:g(n.root,t),component:c,disabled:b,focusRipple:!u,focusVisibleClassName:g(n.focusVisible,x),ownerState:p,ref:s},f,{classes:n,children:l}))}),P=B;export{P as F};
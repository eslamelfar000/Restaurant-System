import{s as f,c as $,cW as n,bd as d,bc as c,r as B,bg as m,bh as E,bi as y,j as g,bn as C,cX as R}from"./index-cbcf4d24.js";import{C as j}from"./CircularProgress-d3d9844e.js";const W=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],z=i=>{const{loading:o,loadingPosition:t,classes:a}=i,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(t)}`],endIcon:[o&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(t)}`]},l=C(r,R,a);return d({},a,l)},M=i=>i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"&&i!=="classes",_=f($,{shouldForwardProp:i=>M(i)||i==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(i,o)=>[o.root,o.startIconLoadingStart&&{[`& .${n.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${n.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:i,theme:o})=>d({[`& .${n.startIconLoadingStart}, & .${n.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},i.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${n.loading}`]:{color:"transparent"}},i.loadingPosition==="start"&&i.fullWidth&&{[`& .${n.startIconLoadingStart}, & .${n.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},i.loadingPosition==="end"&&i.fullWidth&&{[`& .${n.startIconLoadingStart}, & .${n.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),F=f("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(i,o)=>{const{ownerState:t}=i;return[o.loadingIndicator,o[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:i,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(i.vars||i).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),U=B.forwardRef(function(o,t){const a=m({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:v,loading:e=!1,loadingIndicator:u,loadingPosition:h="center",variant:I="text"}=a,x=E(a,W),L=y(v),P=u??g.jsx(j,{"aria-labelledby":L,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:e,loadingIndicator:P,loadingPosition:h,variant:I}),p=z(s),b=e?g.jsx(F,{className:p.loadingIndicator,ownerState:s,children:P}):null;return g.jsxs(_,d({disabled:l||e,id:L,ref:t},x,{variant:I,classes:p,ownerState:s,children:[s.loadingPosition==="end"?r:b,s.loadingPosition==="end"?b:r]}))}),T=U;export{T as L};
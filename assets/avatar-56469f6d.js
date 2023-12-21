import{a as x,j as a,B as j,C as h,p as g,A as s,z as e,ca as n,I as d,S as u,by as f,E as o,W as v}from"./index-3843fe70.js";import{C as A}from"./custom-breadcrumbs-299772e9.js";import{C as i}from"./component-block-d0826a39.js";import{M as y}from"./Masonry-4a50ede3.js";import{A as p}from"./AvatarGroup-bdde72b0.js";import"./CardHeader-196e3d50.js";import"./clsx-1229b3e0.js";const l=["default","primary","secondary","info","success","warning","error"],b=[24,32,40,56],C=["circular","rounded","square"],w=["online","alway","busy","offline"];function N(){const c=x();return a.jsxs(a.Fragment,{children:[a.jsx(j,{sx:{py:5,bgcolor:c.palette.mode==="light"?"grey.200":"grey.800"},children:a.jsx(h,{children:a.jsx(A,{heading:"Avatar",links:[{name:"Components",href:g.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})})}),a.jsx(h,{sx:{my:10},children:a.jsxs(y,{columns:{xs:1,md:2},spacing:3,children:[a.jsx(i,{title:"Image",children:[1,2,3,4,5].map((r,t)=>a.jsx(s,{alt:e.fullName(t+1),src:e.image.avatar(t+1)},t))}),a.jsx(i,{title:"Letter",children:l.map((r,t)=>a.jsx(n,{title:r,children:a.jsx(s,{alt:e.fullName(t+3),children:e.fullName(t+3).charAt(0).toUpperCase()})},r))}),a.jsx(i,{title:"Icon",children:l.map(r=>a.jsx(s,{color:r,children:a.jsx(d,{icon:"eva:folder-add-outline",width:24})},r))}),a.jsx(i,{title:"Variant",children:C.map(r=>a.jsx(s,{variant:r,sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:a.jsx(d,{icon:"eva:folder-add-outline",width:24})},r))}),a.jsx(i,{title:"Grouped",children:a.jsxs(u,{spacing:2,alignItems:"center",children:[b.map(r=>a.jsx(n,{title:r,children:a.jsx(p,{sx:{[`& .${f.avatar}`]:{width:r,height:r}},children:l.map((t,m)=>a.jsx(s,{alt:e.fullAddress(m+1),src:e.image.avatar(m+1)},t))},r)},r)),a.jsx(n,{title:"compact",children:a.jsx(o,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(p,{variant:"compact",sx:{width:48,height:48},children:l.slice(0,2).map((r,t)=>a.jsx(s,{alt:e.fullName(t+1),src:e.image.avatar(t+1)},r))})})})]})}),a.jsxs(i,{title:"With Badge",children:[a.jsx(o,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:a.jsx(s,{alt:e.fullName(7),src:e.image.avatar(7),sx:{p:0,width:24,height:24,border:`solid 2px ${c.palette.background.paper}`}}),children:a.jsx(s,{alt:e.fullName(8),src:e.image.avatar(8)})}),w.map((r,t)=>a.jsx(o,{variant:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(s,{alt:e.fullName(t+1),src:e.image.avatar(t+1)})},r))]}),a.jsx(i,{title:"Sizes",children:[24,32,48,56,64,80,128].map((r,t)=>a.jsx(s,{alt:e.fullName(t+4),src:e.image.avatar(t+4),sx:{width:r,height:r}},r))})]})})]})}function G(){return a.jsxs(a.Fragment,{children:[a.jsx(v,{children:a.jsx("title",{children:" MUI: Avatar"})}),a.jsx(N,{})]})}export{G as default};

import{j as e,B as r,C as a,p as s,E as i,I as o,T as l,W as d}from"./index-3843fe70.js";import{C as c}from"./custom-breadcrumbs-299772e9.js";import{C as t}from"./component-block-d0826a39.js";import{M as h}from"./Masonry-4a50ede3.js";import"./CardHeader-196e3d50.js";import"./clsx-1229b3e0.js";const x=["default","primary","secondary","info","success","warning","error"],g=["alway","online","busy","offline"];function m(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(a,{children:e.jsx(c,{heading:"Badge",links:[{name:"Components",href:s.components},{name:"Badge"}],moreLink:["https://mui.com/components/badges"]})})}),e.jsx(a,{sx:{my:10},children:e.jsxs(h,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(t,{title:"Basic",children:x.map(n=>e.jsx(i,{badgeContent:4,color:n,children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})},n))}),e.jsxs(t,{title:"Maximum value",children:[e.jsx(i,{badgeContent:99,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{badgeContent:100,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{badgeContent:1e3,max:999,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})})]}),e.jsxs(t,{title:"Dot badge",children:[e.jsx(i,{color:"info",variant:"dot",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{color:"info",variant:"dot",children:e.jsx(l,{children:"Typography"})})]}),e.jsxs(t,{title:"Badge overlap",children:[e.jsx(i,{color:"info",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",overlap:"circular",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]}),e.jsx(t,{title:"Status",children:g.map(n=>e.jsx(i,{variant:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"grey.400"}})},n))})]})})]})}function C(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("title",{children:" MUI: Badge"})}),e.jsx(m,{})]})}export{C as default};

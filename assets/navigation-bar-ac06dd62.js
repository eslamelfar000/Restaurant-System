import{r as u,ar as C,j as e,S as o,T as d,fH as w,fI as N,a5 as L,a6 as f,fJ as k,B,C as b,p as H,e as z,w as P,Q as T,E as I,I as r,U as s,fg as E,fz as F,K as m,N as G,n as M,P as c,F as V,W as A}from"./index-3843fe70.js";import{C as q}from"./custom-breadcrumbs-299772e9.js";const p={itemGap:4,iconSize:24,currentRole:"admin",itemRootHeight:44,itemSubHeight:36,itemPadding:"4px 8px 4px 12px",itemRadius:8,hiddenLabel:!1};function D(){const[a,i]=u.useState(p),l=!C(p,a),h=u.useCallback((n,R)=>{i(y=>({...y,[n]:R}))},[]),t=u.useCallback(()=>{i(p)},[]),g=e.jsxs(o,{spacing:2,children:[e.jsx(d,{variant:"h6",children:" Nav Vertical "}),e.jsx(w,{data:x,config:a,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:n=>n.customShadows.z20}})]}),v=e.jsxs(o,{spacing:2,children:[e.jsx(d,{variant:"h6",children:" Nav Mini "}),e.jsx(N,{data:x,config:a,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:n=>n.customShadows.z20}})]}),S=e.jsxs(o,{spacing:2,children:[e.jsx(d,{variant:"h6",children:" Nav Horizontal "}),e.jsx(L,{position:"static",component:"nav",sx:{borderRadius:2,boxShadow:n=>n.customShadows.z20},children:e.jsx(f,{children:e.jsx(k,{data:x,config:a})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(B,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(b,{children:e.jsx(q,{heading:"Navigation Bar",links:[{name:"Components",href:H.components},{name:"Navigation Bar"}]})})}),e.jsxs(b,{sx:{my:10},children:[S,e.jsxs(o,{direction:"row",justifyContent:"space-between",sx:{p:5,mt:5,borderRadius:2,bgcolor:n=>z(n.palette.grey[500],.04)},children:[g,v,e.jsx(j,{config:a,onChangeConfig:h,canReset:l,onReset:t})]})]})]})}function j({config:a,onChangeConfig:i,canReset:l,onReset:h}){return e.jsxs(o,{component:P,variant:"outlined",spacing:3,sx:{p:3,borderRadius:2},children:[e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(d,{variant:"h6",children:"Controls"}),l&&e.jsx(T,{onClick:h,children:e.jsx(I,{color:"error",variant:"dot",invisible:!l,children:e.jsx(r,{icon:"solar:restart-bold"})})})]}),e.jsx(s,{label:"Item Gap",type:"number",value:a.itemGap||"",onChange:t=>i("itemGap",Number(t.target.value))}),e.jsx(s,{select:!0,label:"Icon Size",value:a.iconSize,onChange:t=>i("iconSize",Number(t.target.value)),SelectProps:{native:!0},children:[16,20,24,28,32,36,40].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(s,{select:!0,label:"Item Radius",value:a.itemRadius,onChange:t=>i("itemRadius",Number(t.target.value)||.5),SelectProps:{native:!0},children:[0,4,8,12,16,20,24].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs(E,{value:a.currentRole,onChange:t=>i("currentRole",t.target.value),children:[e.jsx(F,{children:"Role"}),["admin","user"].map(t=>e.jsx(m,{value:t,control:e.jsx(G,{}),label:t,sx:{textTransform:"capitalize"}},t))]}),e.jsx(s,{label:"Root Height",type:"number",value:a.itemRootHeight||"",onChange:t=>i("itemRootHeight",Number(t.target.value))}),e.jsx(s,{label:"Sub Height",type:"number",value:a.itemSubHeight||"",onChange:t=>i("itemSubHeight",Number(t.target.value))}),e.jsx(s,{label:"Item Padding",value:a.itemPadding||"",onChange:t=>i("itemPadding",t.target.value)}),e.jsx(m,{control:e.jsx(M,{checked:a.hiddenLabel,onClick:()=>i("hiddenLabel",!a.hiddenLabel)}),label:"Hidden Label"})]})}j.propTypes={canReset:c.bool,config:c.object,onChangeConfig:c.func,onReset:c.func};const x=[{subheader:"Marketing",items:[{title:"Landing",path:"#",icon:e.jsx(r,{icon:"carbon:bat",width:1}),roles:["admin"],caption:"Display only admin role"},{title:"Services",path:"#",icon:e.jsx(r,{icon:"carbon:cyclist",width:1}),roles:["admin","user"]},{title:"Case Studies",path:"#",icon:e.jsx(r,{icon:"carbon:3d-cursor-alt",width:1}),info:e.jsx(V,{color:"error",children:"+32"}),children:[{title:"Case Studies",path:"#"},{title:"Case Study",path:"#"}]},{title:"Blog",path:"#",icon:e.jsx(r,{icon:"carbon:3d-mpr-toggle",width:1}),children:[{title:"Blog Posts",path:"#"},{title:"Blog Post",path:"#"}]},{title:"About",path:"#",icon:e.jsx(r,{icon:"carbon:airport-01",width:1})},{title:"Contact",path:"#",icon:e.jsx(r,{icon:"carbon:battery-full",width:1})},{title:"Tours",path:"#",icon:e.jsx(r,{icon:"carbon:basketball",width:1}),children:[{title:"Tours",path:"#"},{title:"Tour",path:"#"}]},{title:"Checkout",path:"#",icon:e.jsx(r,{icon:"carbon:area",width:1}),children:[{title:"Checkout",path:"#"},{title:"Checkout Complete",path:"#"}]}]},{subheader:"Travel",items:[{title:"Level 1",path:"#",icon:e.jsx(r,{icon:"carbon:play",width:1}),children:[{title:"Level 2.1",path:"#"},{title:"Level 2.2",path:"#"},{title:"Level 2.3",path:"#",children:[{title:"Level 3.1",path:"#"},{title:"Level 3.2",path:"#"}]}]}]}];function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" Extra: Navigation Bar"})}),e.jsx(D,{})]})}export{Q as default};

import{l as f,dq as x,r as a,j as e,C as b,p as t,h as j,ev as i,i as g,ew as v,k as C,ex as w,ey as y,ez as F,eA as P,I as l,W as U}from"./index-2e23bd70.js";import{P as S,a as k,b as T,c as _,d as A}from"./profile-followers-c2a159ab.js";import"./confirm-dialog-f0e3b46a.js";import{C as G}from"./custom-breadcrumbs-5a236e51.js";import"./table-pagination-custom-c537f3cc.js";import"./Grid2-9db201e2.js";import"./DialogTitle-a7955715.js";import"./dialogTitleClasses-7dbb835a.js";import"./DialogContent-5cdd3a81.js";import"./Alert-97f6a967.js";import"./DialogActions-a4520a0f.js";import"./LoadingButton-e92f42e4.js";import"./CircularProgress-c29df590.js";import"./TablePagination-b89d18bd.js";import"./FirstPage-04498ea5.js";import"./Rating-0ab3987a.js";import"./CardHeader-bec94c7d.js";import"./AvatarGroup-ad3068ca.js";import"./Fab-522cd41b.js";import"./lightbox-451c9c65.js";import"./empty-content-87b950ac.js";const I=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function z(){const n=f(),{user:r}=x(),[d,m]=a.useState(""),[o,c]=a.useState("profile"),p=a.useCallback((s,u)=>{c(u)},[]),h=a.useCallback(s=>{m(s.target.value)},[]);return e.jsxs(b,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(G,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(j,{sx:{mb:3,height:290},children:[e.jsx(S,{role:i.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:i.coverUrl}),e.jsx(g,{value:o,onChange:p,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${v.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:I.map(s=>e.jsx(C,{value:s.value,icon:s.icon,label:s.label},s.value))})]}),o==="profile"&&e.jsx(k,{info:i,posts:w}),o==="followers"&&e.jsx(T,{followers:y}),o==="friends"&&e.jsx(_,{friends:F,searchFriends:d,onSearchFriends:h}),o==="gallery"&&e.jsx(A,{gallery:P})]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(z,{})]})}export{se as default};
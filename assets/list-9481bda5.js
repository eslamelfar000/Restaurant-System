import{l as f,r as o,j as t,C as g,T as j,S as P,p as y,W as b}from"./index-186823c6.js";import"./_baseToString-923195c6.js";import"./index-7b5bf23d.js";import"./custom-breadcrumbs-cb6ff524.js";import{u as C,a as L,P as O,b as T,c as w,d as k}from"./post-details-home-view-0b9aca58.js";import{o as i}from"./orderBy-41f3156d.js";import{u as B}from"./use-debounce-36e2d516.js";import"./text-max-line-4438a876.js";import"./Pagination-538d74af.js";import"./FirstPage-c0e4972f.js";import"./markdown-f73d05a2.js";import"./empty-content-f2d6acd7.js";import"./DialogActions-ac373084.js";import"./LoadingButton-4df01082.js";import"./CircularProgress-5748b253.js";import"./Grid2-7caff2c6.js";import"./CardHeader-b23c59ca.js";import"./AvatarGroup-ab489d92.js";import"./CardContent-20038cee.js";import"./Skeleton-f0e57ec8.js";import"./ListItem-6d1ae172.js";import"./ListItemSecondaryAction-e70f6553.js";import"./Fab-4448666a.js";import"./Zoom-3d2a0c77.js";import"./_baseIteratee-e67915fd.js";import"./_baseEach-4c9503d9.js";function F(){const s=f(),[e,n]=o.useState("latest"),[m,c]=o.useState(""),a=B(m),{posts:p,postsLoading:l}=C(),{searchResults:d,searchLoading:u}=L(a),h=I({inputData:p,sortBy:e}),x=o.useCallback(r=>{n(r)},[]),S=o.useCallback(r=>{c(r)},[]);return t.jsxs(g,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),t.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[t.jsx(O,{query:a,results:d,onSearch:S,loading:u,hrefItem:r=>y.post.details(r)}),t.jsx(T,{sort:e,onSort:x,sortOptions:w})]}),t.jsx(k,{posts:h,loading:l})]})}const I=({inputData:s,sortBy:e})=>e==="latest"?i(s,["createdAt"],["desc"]):e==="oldest"?i(s,["createdAt"],["asc"]):e==="popular"?i(s,["totalViews"],["desc"]):s;function ot(){return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:t.jsx("title",{children:" Post: List"})}),t.jsx(F,{})]})}export{ot as default};
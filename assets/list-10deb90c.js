import{l as f,r as o,j as t,C as g,T as j,S as P,p as y,W as b}from"./index-8396fb83.js";import"./_baseToString-6667763f.js";import"./index-8b161d6e.js";import"./custom-breadcrumbs-cdd51d6b.js";import{u as C,a as L,P as O,b as T,c as w,d as k}from"./post-details-home-view-f959486f.js";import{o as i}from"./orderBy-0ec5e97f.js";import{u as B}from"./use-debounce-bab30767.js";import"./text-max-line-6e2c0632.js";import"./Pagination-58cdc1b3.js";import"./FirstPage-2ab40797.js";import"./markdown-0b3ad0fa.js";import"./empty-content-4b15294b.js";import"./DialogActions-144708bf.js";import"./LoadingButton-a61266b0.js";import"./CircularProgress-48b8118f.js";import"./Grid2-64edf282.js";import"./CardHeader-f5d3fba9.js";import"./AvatarGroup-9505d2da.js";import"./CardContent-212aafe4.js";import"./Skeleton-6200d9b4.js";import"./ListItem-43aa11af.js";import"./ListItemSecondaryAction-6c609f87.js";import"./Fab-01efb2dc.js";import"./Zoom-2e9e4816.js";import"./_baseIteratee-4e7499d1.js";import"./_baseEach-704679a2.js";function F(){const s=f(),[e,n]=o.useState("latest"),[m,c]=o.useState(""),a=B(m),{posts:p,postsLoading:l}=C(),{searchResults:d,searchLoading:u}=L(a),h=I({inputData:p,sortBy:e}),x=o.useCallback(r=>{n(r)},[]),S=o.useCallback(r=>{c(r)},[]);return t.jsxs(g,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),t.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[t.jsx(O,{query:a,results:d,onSearch:S,loading:u,hrefItem:r=>y.post.details(r)}),t.jsx(T,{sort:e,onSort:x,sortOptions:w})]}),t.jsx(k,{posts:h,loading:l})]})}const I=({inputData:s,sortBy:e})=>e==="latest"?i(s,["createdAt"],["desc"]):e==="oldest"?i(s,["createdAt"],["asc"]):e==="popular"?i(s,["totalViews"],["desc"]):s;function ot(){return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:t.jsx("title",{children:" Post: List"})}),t.jsx(F,{})]})}export{ot as default};
import{l as w,ao as U,a2 as A,r as i,ap as G,j as t,C as L,T as q,S as O,p as Q,aq as B,ar as W,as as v,at as V,au as Y,W as z}from"./index-868085a6.js";import{u as H,a as J,P as K,C as M,b as X,c as Z,d as $,e as D}from"./product-shop-details-view-ed47b095.js";import{o as x}from"./orderBy-22f70ff7.js";import{u as ee}from"./use-debounce-06b1dbbe.js";import{E as te}from"./empty-content-edf55253.js";import"./index-f50613c9.js";import"./table-pagination-custom-9a64d8f6.js";import"./confirm-dialog-ceb70d9a.js";import"./custom-breadcrumbs-c1578647.js";import"./Grid2-31b1766c.js";import"./CardHeader-56eaa42f.js";import"./LoadingButton-8ff9ee1e.js";import"./CircularProgress-84d7dba1.js";import"./color-picker-5d3d5aa6.js";import"./Fab-f8fd4911.js";import"./Pagination-d9b0ecd4.js";import"./FirstPage-ebbdc501.js";import"./Rating-4a33e716.js";import"./TablePagination-4fffef71.js";import"./sumBy-7da97cb3.js";import"./_baseIteratee-7fddfc81.js";import"./_baseToString-1a528ec9.js";import"./_baseSum-340d39f5.js";import"./DialogTitle-e5d82657.js";import"./dialogTitleClasses-df1e6e63.js";import"./DialogContent-bd257efc.js";import"./DialogActions-33460c8e.js";import"./Skeleton-19e8340c.js";import"./incrementer-button-0081613c.js";import"./lightbox-4d776644.js";import"./use-carousel-6a8adb6b.js";import"./markdown-bd4a044f.js";import"./_baseEach-246d4caf.js";const R={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function se(){const e=w(),g=U(),r=A(),[c,m]=i.useState("featured"),[u,h]=i.useState(""),l=ee(u),[o,a]=i.useState(R),{products:s,productsLoading:d,productsEmpty:p}=H(),{searchResults:j,searchLoading:F}=J(l),C=i.useCallback((n,N)=>{a(k=>({...k,[n]:N}))},[]),S=re({inputData:s,filters:o,sortBy:c}),f=!G(R,o),y=!S.length&&f,T=i.useCallback(n=>{m(n)},[]),I=i.useCallback(n=>{h(n)},[]),P=i.useCallback(()=>{a(R)},[]),b=t.jsxs(O,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[t.jsx(Z,{query:l,results:j,onSearch:I,loading:F,hrefItem:n=>Q.product.details(n)}),t.jsxs(O,{direction:"row",spacing:1,flexShrink:0,children:[t.jsx($,{open:r.value,onOpen:r.onTrue,onClose:r.onFalse,filters:o,onFilters:C,canReset:f,onResetFilters:P,colorOptions:B,ratingOptions:W,genderOptions:v,categoryOptions:["all",...V]}),t.jsx(D,{sort:c,onSort:T,sortOptions:Y})]})]}),_=t.jsx(K,{filters:o,onFilters:C,canReset:f,onResetFilters:P,results:S.length}),E=t.jsx(te,{filled:!0,title:"No Data",sx:{py:10}});return t.jsxs(L,{maxWidth:e.themeStretch?!1:"lg",sx:{mb:15},children:[t.jsx(M,{totalItems:g.totalItems}),t.jsx(q,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),t.jsxs(O,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[b,f&&_]}),(y||p)&&E,t.jsx(X,{products:S,loading:d})]})}function re({inputData:e,filters:g,sortBy:r}){const{gender:c,category:m,colors:u,priceRange:h,rating:l}=g,o=h[0],a=h[1];return r==="featured"&&(e=x(e,["totalSold"],["desc"])),r==="newest"&&(e=x(e,["createdAt"],["desc"])),r==="priceDesc"&&(e=x(e,["price"],["desc"])),r==="priceAsc"&&(e=x(e,["price"],["asc"])),c.length&&(e=e.filter(s=>c.includes(s.gender))),m!=="all"&&(e=e.filter(s=>s.category===m)),u.length&&(e=e.filter(s=>s.colors.some(d=>u.includes(d)))),(o!==0||a!==200)&&(e=e.filter(s=>s.price>=o&&s.price<=a)),l&&(e=e.filter(s=>{const d=p=>p==="up4Star"?4:p==="up3Star"?3:p==="up2Star"?2:1;return s.totalRatings>d(l)})),e}function Le(){return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx("title",{children:" Product: Shop"})}),t.jsx(se,{})]})}export{Le as default};

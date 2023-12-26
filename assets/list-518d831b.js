import{l as w,ao as U,a2 as A,r as i,ap as G,j as t,C as L,T as q,S as O,p as Q,aq as B,ar as W,as as v,at as V,au as Y,W as z}from"./index-2e23bd70.js";import{u as H,a as J,P as K,C as M,b as X,c as Z,d as $,e as D}from"./product-shop-details-view-fb36db92.js";import{o as x}from"./orderBy-6038e93b.js";import{u as ee}from"./use-debounce-4a96e19e.js";import{E as te}from"./empty-content-87b950ac.js";import"./index-e463e7f8.js";import"./table-pagination-custom-c537f3cc.js";import"./confirm-dialog-f0e3b46a.js";import"./custom-breadcrumbs-5a236e51.js";import"./Grid2-9db201e2.js";import"./CardHeader-bec94c7d.js";import"./LoadingButton-e92f42e4.js";import"./CircularProgress-c29df590.js";import"./color-picker-6a3150f6.js";import"./Fab-522cd41b.js";import"./Pagination-6ce9d394.js";import"./FirstPage-04498ea5.js";import"./Rating-0ab3987a.js";import"./TablePagination-b89d18bd.js";import"./sumBy-e2e30536.js";import"./_baseIteratee-37215c36.js";import"./_baseToString-057a84b4.js";import"./_baseSum-340d39f5.js";import"./DialogTitle-a7955715.js";import"./dialogTitleClasses-7dbb835a.js";import"./DialogContent-5cdd3a81.js";import"./DialogActions-a4520a0f.js";import"./Skeleton-a3b20c98.js";import"./incrementer-button-6cf634a0.js";import"./lightbox-451c9c65.js";import"./use-carousel-24086a50.js";import"./markdown-005ed069.js";import"./_baseEach-5d90d7e8.js";const R={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function se(){const e=w(),g=U(),r=A(),[c,m]=i.useState("featured"),[u,h]=i.useState(""),l=ee(u),[o,a]=i.useState(R),{products:s,productsLoading:d,productsEmpty:p}=H(),{searchResults:j,searchLoading:F}=J(l),C=i.useCallback((n,N)=>{a(k=>({...k,[n]:N}))},[]),S=re({inputData:s,filters:o,sortBy:c}),f=!G(R,o),y=!S.length&&f,T=i.useCallback(n=>{m(n)},[]),I=i.useCallback(n=>{h(n)},[]),P=i.useCallback(()=>{a(R)},[]),b=t.jsxs(O,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[t.jsx(Z,{query:l,results:j,onSearch:I,loading:F,hrefItem:n=>Q.product.details(n)}),t.jsxs(O,{direction:"row",spacing:1,flexShrink:0,children:[t.jsx($,{open:r.value,onOpen:r.onTrue,onClose:r.onFalse,filters:o,onFilters:C,canReset:f,onResetFilters:P,colorOptions:B,ratingOptions:W,genderOptions:v,categoryOptions:["all",...V]}),t.jsx(D,{sort:c,onSort:T,sortOptions:Y})]})]}),_=t.jsx(K,{filters:o,onFilters:C,canReset:f,onResetFilters:P,results:S.length}),E=t.jsx(te,{filled:!0,title:"No Data",sx:{py:10}});return t.jsxs(L,{maxWidth:e.themeStretch?!1:"lg",sx:{mb:15},children:[t.jsx(M,{totalItems:g.totalItems}),t.jsx(q,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),t.jsxs(O,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[b,f&&_]}),(y||p)&&E,t.jsx(X,{products:S,loading:d})]})}function re({inputData:e,filters:g,sortBy:r}){const{gender:c,category:m,colors:u,priceRange:h,rating:l}=g,o=h[0],a=h[1];return r==="featured"&&(e=x(e,["totalSold"],["desc"])),r==="newest"&&(e=x(e,["createdAt"],["desc"])),r==="priceDesc"&&(e=x(e,["price"],["desc"])),r==="priceAsc"&&(e=x(e,["price"],["asc"])),c.length&&(e=e.filter(s=>c.includes(s.gender))),m!=="all"&&(e=e.filter(s=>s.category===m)),u.length&&(e=e.filter(s=>s.colors.some(d=>u.includes(d)))),(o!==0||a!==200)&&(e=e.filter(s=>s.price>=o&&s.price<=a)),l&&(e=e.filter(s=>{const d=p=>p==="up4Star"?4:p==="up3Star"?3:p==="up2Star"?2:1;return s.totalRatings>d(l)})),e}function Le(){return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx("title",{children:" Product: Shop"})}),t.jsx(se,{})]})}export{Le as default};
import{l as I,a2 as L,r as n,eZ as C,j as e,S,p as x,eY as k,eX as E,df as G,f1 as q,C as _,c as B,R as N,I as P,e1 as g,W as A}from"./index-186823c6.js";import{o as T}from"./orderBy-41f3156d.js";import{E as D}from"./empty-content-f2d6acd7.js";import{C as U}from"./custom-breadcrumbs-cb6ff524.js";import{a as V,b as W,c as X,d as Y,e as Z}from"./tour-details-view-78523a39.js";import"./_baseToString-923195c6.js";import"./_baseIteratee-e67915fd.js";import"./_baseEach-4c9503d9.js";import"./custom-date-range-picker-9a527fac.js";import"./DialogTitle-6701e5d8.js";import"./dialogTitleClasses-6129fb3a.js";import"./DialogContent-1dbacd97.js";import"./useMobilePicker-dbc27e8f.js";import"./DialogActions-ac373084.js";import"./ListItem-6d1ae172.js";import"./ListItemSecondaryAction-e70f6553.js";import"./DatePicker-5d03038e.js";import"./Pagination-538d74af.js";import"./FirstPage-c0e4972f.js";import"./Grid2-7caff2c6.js";import"./CardHeader-b23c59ca.js";import"./LoadingButton-4df01082.js";import"./CircularProgress-5748b253.js";import"./markdown-f73d05a2.js";import"./lightbox-609c53e7.js";const y={destination:[],tourGuides:[],services:[],startDate:null,endDate:null};function z(){const t=I(),d=L(),[a,j]=n.useState("latest"),[i,c]=n.useState({query:"",results:[]}),[s,u]=n.useState(y),p=s.startDate&&s.endDate?s.startDate.getTime()>s.endDate.getTime():!1,l=H({inputData:C,filters:s,sortBy:a,dateError:p}),r=!!s.destination.length||!!s.tourGuides.length||!!s.services.length||!!s.startDate&&!!s.endDate,m=!l.length&&r,b=n.useCallback((o,h)=>{u(f=>({...f,[o]:h}))},[]),O=n.useCallback(o=>{j(o)},[]),R=n.useCallback(o=>{if(c(h=>({...h,query:o})),o){const h=C.filter(f=>f.name.toLowerCase().indexOf(i.query.toLowerCase())!==-1);c(f=>({...f,results:h}))}},[i.query]),F=n.useCallback(()=>{u(y)},[]),v=e.jsxs(S,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(V,{query:i.query,results:i.results,onSearch:R,hrefItem:o=>x.dashboard.tour.details(o)}),e.jsxs(S,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(W,{open:d.value,onOpen:d.onTrue,onClose:d.onFalse,filters:s,onFilters:b,canReset:r,onResetFilters:F,serviceOptions:k.map(o=>o.label),tourGuideOptions:E,destinationOptions:G,dateError:p}),e.jsx(X,{sort:a,onSort:O,sortOptions:q})]})]}),w=e.jsx(Y,{filters:s,onResetFilters:F,canReset:r,onFilters:b,results:l.length});return e.jsxs(_,{maxWidth:t.themeStretch?!1:"lg",children:[e.jsx(U,{heading:"List",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Tour",href:x.dashboard.tour.root},{name:"List"}],action:e.jsx(B,{component:N,href:x.dashboard.tour.new,variant:"contained",startIcon:e.jsx(P,{icon:"mingcute:add-line"}),children:"New Tour"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(S,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[v,r&&w]}),m&&e.jsx(D,{title:"No Data",filled:!0,sx:{py:10}}),e.jsx(Z,{tours:l})]})}const H=({inputData:t,filters:d,sortBy:a,dateError:j})=>{const{services:i,destination:c,startDate:s,endDate:u,tourGuides:p}=d,l=p.map(r=>r.id);return a==="latest"&&(t=T(t,["createdAt"],["desc"])),a==="oldest"&&(t=T(t,["createdAt"],["asc"])),a==="popular"&&(t=T(t,["totalViews"],["desc"])),j||s&&u&&(t=t.filter(r=>g(r.available.startDate)>=g(s)&&g(r.available.endDate)<=g(u))),c.length&&(t=t.filter(r=>c.includes(r.destination))),l.length&&(t=t.filter(r=>r.tourGuides.some(m=>l.includes(m.id)))),i.length&&(t=t.filter(r=>r.services.some(m=>i.includes(m)))),t};function Te(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" Dashboard: Tour List"})}),e.jsx(z,{})]})}export{Te as default};
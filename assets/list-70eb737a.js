import{a as U,l as $,aT as q,a2 as G,r as d,ek as J,p as x,j as e,C as K,c as I,R as M,I as b,h as F,aw as k,S as A,D as Q,i as X,e as Y,k as Z,E as ee,el as te,cn as P,N as R,e1 as T,W as oe}from"./index-df7ae4b9.js";import{s as L}from"./sumBy-3391ac3a.js";import{C as se}from"./confirm-dialog-03739ac8.js";import{C as ae}from"./custom-breadcrumbs-83f12610.js";import{u as le,g as ne,e as re}from"./use-table-9c1a7a17.js";import{b as ie,a as ce,c as de,d as me,e as ue}from"./table-pagination-custom-58cdb0d4.js";import{I as f,a as he,b as pe,c as ge}from"./invoice-details-view-11017531.js";import{T as xe,a as be,b as fe}from"./TableContainer-3529e9c3.js";import"./_baseIteratee-74d7a9b2.js";import"./_baseToString-67d9cb13.js";import"./_baseSum-340d39f5.js";import"./DialogTitle-086f9634.js";import"./dialogTitleClasses-4d60fd4f.js";import"./DialogContent-3eedbbd7.js";import"./DialogActions-0d833b89.js";import"./empty-content-61399ae8.js";import"./TablePagination-2b3eb329.js";import"./FirstPage-75bd9149.js";import"./CircularProgress-275dfc9e.js";import"./DatePicker-2891f6f5.js";import"./ListItem-b7011b68.js";import"./ListItemSecondaryAction-fabb9944.js";import"./custom-date-range-picker-ad89a97d.js";import"./address-list-dialog-ced04581.js";import"./LoadingButton-b70b98e3.js";import"./index-aa33e158.js";import"./Grid2-332f9ef4.js";const je=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],B={name:"",service:[],status:"all",startDate:null,endDate:null};function ve(){const l=U(),D=$(),u=q(),t=le({defaultOrderBy:"createDate"}),m=G(),[a,h]=d.useState(J),[n,p]=d.useState(B),g=n.startDate&&n.endDate?n.startDate.getTime()>n.endDate.getTime():!1,s=we({inputData:a,comparator:ne(t.order,t.orderBy),filters:n,dateError:g}),i=s.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),j=t.dense?56:76,y=!!n.name||!!n.service.length||n.status!=="all"||!!n.startDate&&!!n.endDate,E=!s.length&&y||!s.length,c=o=>a.filter(r=>r.status===o).length,v=o=>L(a.filter(r=>r.status===o),"totalAmount"),w=o=>c(o)/a.length*100,O=[{value:"all",label:"All",color:"default",count:a.length},{value:"paid",label:"Paid",color:"success",count:c("paid")},{value:"pending",label:"Pending",color:"warning",count:c("pending")},{value:"overdue",label:"Overdue",color:"error",count:c("overdue")},{value:"draft",label:"Draft",color:"default",count:c("draft")}],C=d.useCallback((o,r)=>{t.onResetPage(),p(S=>({...S,[o]:r}))},[t]),N=d.useCallback(o=>{const r=a.filter(S=>S.id!==o);h(r),t.onUpdatePageDeleteRow(i.length)},[i.length,t,a]),V=d.useCallback(()=>{const o=a.filter(r=>!t.selected.includes(r.id));h(o),t.onUpdatePageDeleteRows({totalRows:a.length,totalRowsInPage:i.length,totalRowsFiltered:s.length})},[s.length,i.length,t,a]),_=d.useCallback(o=>{u.push(x.dashboard.invoice.edit(o))},[u]),H=d.useCallback(o=>{u.push(x.dashboard.invoice.details(o))},[u]),W=d.useCallback((o,r)=>{C("status",r)},[C]),z=d.useCallback(()=>{p(B)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(K,{maxWidth:D.themeStretch?!1:"lg",children:[e.jsx(ae,{heading:"List",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Invoice",href:x.dashboard.invoice.root},{name:"List"}],action:e.jsx(I,{component:M,href:x.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(F,{sx:{mb:{xs:3,md:5}},children:e.jsx(k,{children:e.jsxs(A,{direction:"row",divider:e.jsx(Q,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(f,{title:"Total",total:a.length,percent:100,price:L(a,"totalAmount"),icon:"solar:bill-list-bold-duotone",color:l.palette.info.main}),e.jsx(f,{title:"Paid",total:c("paid"),percent:w("paid"),price:v("paid"),icon:"solar:file-check-bold-duotone",color:l.palette.success.main}),e.jsx(f,{title:"Pending",total:c("pending"),percent:w("pending"),price:v("pending"),icon:"solar:sort-by-time-bold-duotone",color:l.palette.warning.main}),e.jsx(f,{title:"Overdue",total:c("overdue"),percent:w("overdue"),price:v("overdue"),icon:"solar:bell-bing-bold-duotone",color:l.palette.error.main}),e.jsx(f,{title:"Draft",total:c("draft"),percent:w("draft"),price:v("draft"),icon:"solar:file-corrupted-bold-duotone",color:l.palette.text.secondary})]})})}),e.jsxs(F,{children:[e.jsx(X,{value:n.status,onChange:W,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${Y(l.palette.grey[500],.08)}`},children:O.map(o=>e.jsx(Z,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(ee,{variant:(o.value==="all"||o.value===n.status)&&"filled"||"soft",color:o.color,children:o.count})},o.value))}),e.jsx(he,{filters:n,onFilters:C,dateError:g,serviceOptions:te.map(o=>o.name)}),y&&e.jsx(pe,{filters:n,onFilters:C,onResetFilters:z,results:s.length,sx:{p:2.5,pt:0}}),e.jsxs(xe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ie,{dense:t.dense,numSelected:t.selected.length,rowCount:a.length,onSelectAllRows:o=>t.onSelectAllRows(o,a.map(r=>r.id)),action:e.jsxs(A,{direction:"row",children:[e.jsx(P,{title:"Sent",children:e.jsx(R,{color:"primary",children:e.jsx(b,{icon:"iconamoon:send-fill"})})}),e.jsx(P,{title:"Download",children:e.jsx(R,{color:"primary",children:e.jsx(b,{icon:"eva:download-outline"})})}),e.jsx(P,{title:"Print",children:e.jsx(R,{color:"primary",children:e.jsx(b,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(P,{title:"Delete",children:e.jsx(R,{color:"primary",onClick:m.onTrue,children:e.jsx(b,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(k,{children:e.jsxs(be,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(ce,{order:t.order,orderBy:t.orderBy,headLabel:je,rowCount:a.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,a.map(r=>r.id))}),e.jsxs(fe,{children:[s.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map(o=>e.jsx(ge,{row:o,selected:t.selected.includes(o.id),onSelectRow:()=>t.onSelectRow(o.id),onViewRow:()=>H(o.id),onEditRow:()=>_(o.id),onDeleteRow:()=>N(o.id)},o.id)),e.jsx(de,{height:j,emptyRows:re(t.page,t.rowsPerPage,a.length)}),e.jsx(me,{notFound:E})]})]})})]}),e.jsx(ue,{count:s.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(se,{open:m.value,onClose:m.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(I,{variant:"contained",color:"error",onClick:()=>{V(),m.onFalse()},children:"Delete"})})]})}function we({inputData:l,comparator:D,filters:u,dateError:t}){const{name:m,status:a,service:h,startDate:n,endDate:p}=u,g=l.map((s,i)=>[s,i]);return g.sort((s,i)=>{const j=D(s[0],i[0]);return j!==0?j:s[1]-i[1]}),l=g.map(s=>s[0]),m&&(l=l.filter(s=>s.invoiceNumber.toLowerCase().indexOf(m.toLowerCase())!==-1||s.invoiceTo.name.toLowerCase().indexOf(m.toLowerCase())!==-1)),a!=="all"&&(l=l.filter(s=>s.status===a)),h.length&&(l=l.filter(s=>s.items.some(i=>h.includes(i.service)))),t||n&&p&&(l=l.filter(s=>T(s.createDate)>=T(n)&&T(s.createDate)<=T(p))),l}function Me(){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(ve,{})]})}export{Me as default};
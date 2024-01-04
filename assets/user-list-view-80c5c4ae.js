import{cG as H,l as N,aT as W,a2 as q,r as i,ap as G,p,j as e,C as M,c as k,R as V,I as $,h as J,i as K,e as Q,k as X,E as Y,eE as Z,aw as ee,B as L,T as C}from"./index-b75d89b7.js";import{g as se,A as ae,U as te,C as le}from"./confirm-dialog-828f7f39.js";import{C as ne}from"./custom-breadcrumbs-e6b049c1.js";import{e as oe}from"./utils-d01cbedb.js";import{u as re}from"./use-table-de5651d8.js";import{a as ie,d as de,b as ce}from"./table-pagination-custom-1b83dca1.js";import{T as he}from"./table-skeleton-c792b5a4.js";import{e as ue,f as me,g as ge}from"./profile-followers-6f8b83d2.js";import{T as xe,a as pe,b as fe}from"./TableContainer-9e7fa76c.js";import{P as be}from"./Pagination-b39c9aa0.js";function ke(){var P,y,F,E;const{t,currentLang:h}=H(),{_mealList:r,mealListPaginationb:d,handlePageChange:m,isLoading:c}=se(),f=[{value:"all",label:t("all")},...h.value==="ar"?ae:te],B=[{id:"name",label:t("name"),width:100},{id:"desc",label:t("desc"),width:150},{id:"review",label:t("review"),width:150},{id:"status",label:t("status"),width:100},{id:"",width:88}],b={name:"",role:[],status:"all"},a=re(),U=N(),v=W(),j=q(),[n,w]=i.useState(r||[]);i.useEffect(()=>{w(r)},[r]);const[u,T]=i.useState(b),l=je({inputData:n,filters:u}),g=l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),_=a.dense?52:72,S=!G(b,u);!l.length&&S||l.length;const x=i.useCallback((s,o)=>{a.onResetPage(),T(R=>({...R,[s]:o}))},[a]),I=i.useCallback(s=>{const o=n.filter(R=>R.id!==s);w(o),a.onUpdatePageDeleteRow(g.length)},[g.length,a,n]),A=i.useCallback(()=>{const s=n.filter(o=>!a.selected.includes(o.id));w(s),a.onUpdatePageDeleteRows({totalRows:n.length,totalRowsInPage:g.length,totalRowsFiltered:l.length})},[l.length,g.length,a,n]),D=i.useCallback(s=>{v.push(p.dashboard.meal.edit(s))},[v]),z=i.useCallback((s,o)=>{x("status",o)},[x]),O=i.useCallback(()=>{T(b)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(M,{maxWidth:U.themeStretch?!1:"lg",children:[e.jsx(ne,{heading:t("meal-list"),links:[{name:t("dashboard"),href:p.dashboard.root},{name:t("meal"),href:p.dashboard.meal.root},{name:t("meal-list")}],action:e.jsx(k,{component:V,href:p.dashboard.meal.new,variant:"contained",startIcon:e.jsx($,{icon:"mingcute:add-line"}),children:t("new-meal")}),sx:{mb:{xs:3,md:5}}}),e.jsxs(J,{children:[e.jsx(K,{value:u.status,onChange:z,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${Q(s.palette.grey[500],.08)}`},children:f==null?void 0:f.map(s=>e.jsx(X,{iconPosition:(h==null?void 0:h.value)==="ar"?"start":"end",value:s.value,label:s.label,icon:e.jsxs(Y,{variant:(s.value==="all"||s.value===u.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&r.length,s.value==="active"&&r.filter(o=>o.status==="active").length,s.value==="banned"&&r.filter(o=>o.status==="banned").length]})},s.value))}),e.jsx(ue,{filters:u,onFilters:x,roleOptions:Z}),S&&e.jsx(me,{filters:u,onFilters:x,onResetFilters:O,results:l.length,sx:{p:2.5,pt:0}}),e.jsx(xe,{sx:{position:"relative",overflow:"unset"},children:e.jsx(ee,{children:e.jsxs(pe,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ie,{order:a.order,orderBy:a.orderBy,headLabel:B,rowCount:n.length,numSelected:a.selected.length,onSort:a.onSort}),e.jsx(fe,{children:c?e.jsx(he,{}):e.jsx(e.Fragment,{children:(n==null?void 0:n.length)>0?e.jsx(e.Fragment,{children:l==null?void 0:l.map(s=>e.jsx(ge,{row:s,onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>I(s.id),onEditRow:()=>D(s.id)},s.id))}):e.jsxs(e.Fragment,{children:[e.jsx(de,{height:_,emptyRows:oe(a.page,a.rowsPerPage,n.length)}),e.jsx(ce,{notFound:(l==null?void 0:l.length)>0})]})})})]})})}),e.jsxs(L,{sx:{padding:"20px 15px",borderTop:"1px dashed gray",display:"flex",justifyContent:"space-between"},children:[e.jsxs(L,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(C,{sx:{fontSize:"18px"},children:(P=d[0])==null?void 0:P.current_page}),e.jsx(C,{sx:{fontSize:"19px",m:"0px 5px"},children:" / "}),e.jsx(C,{sx:{fontSize:"20px"},children:(y=d[0])==null?void 0:y.last_page})]}),e.jsx(be,{shape:"rounded",onChange:m,count:(F=d[0])==null?void 0:F.last_page,page:((E=d[0])==null?void 0:E.current_page)||1,siblingCount:0})]})]})]}),e.jsx(le,{open:j.value,onClose:j.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(k,{variant:"contained",color:"error",onClick:()=>{A(),j.onFalse()},children:"Delete"})})]})}function je({inputData:t,filters:h}){const{name:r,status:d,role:m}=h;return r&&(t=t.filter(c=>c.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(c=>c.status===d)),m.length&&(t=t.filter(c=>m.includes(c.role))),t}export{ke as U};
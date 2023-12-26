import{cH as H,eF as N,eD as W,l as q,aT as G,a2 as M,r,ap as V,p,j as e,C as $,c as _,R as J,I as K,h as Q,i as X,e as Y,k as Z,E as ee,eG as se,aw as ae,B as k,T}from"./index-2e23bd70.js";import{g as te,C as le}from"./confirm-dialog-f0e3b46a.js";import{C as ne}from"./custom-breadcrumbs-5a236e51.js";import{u as oe,e as re}from"./use-table-f1495135.js";import{a as ie,c as de,d as ce}from"./table-pagination-custom-c537f3cc.js";import{T as he}from"./table-skeleton-82d81d5c.js";import{e as ue,f as ge,g as me}from"./profile-followers-c2a159ab.js";import{T as xe,a as pe,b as fe}from"./TableContainer-430e0d21.js";import{P as be}from"./Pagination-6ce9d394.js";function _e(){var S,F,P,y;const{t,currentLang:h}=H(),{_mealList:o,mealListPaginationb:i,handlePageChange:g}=te(),d=[{value:"all",label:t("all")},...h.value==="ar"?N:W],E=[{id:"name",label:t("name"),width:100},{id:"desc",label:t("desc"),width:150},{id:"review",label:t("review"),width:150},{id:"status",label:t("status"),width:100},{id:"",width:88}],f={name:"",role:[],status:"all"},a=oe(),U=q(),R=G(),b=M(),[l,j]=r.useState(o||[]);r.useEffect(()=>{j(o)},[o]);const[u,C]=r.useState(f),c=je({inputData:l,filters:u}),m=c.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),B=a.dense?52:72,v=!V(f,u),I=!c.length&&v||!c.length,x=r.useCallback((s,n)=>{a.onResetPage(),C(w=>({...w,[s]:n}))},[a]),L=r.useCallback(s=>{const n=l.filter(w=>w.id!==s);j(n),a.onUpdatePageDeleteRow(m.length)},[m.length,a,l]),A=r.useCallback(()=>{const s=l.filter(n=>!a.selected.includes(n.id));j(s),a.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:m.length,totalRowsFiltered:c.length})},[c.length,m.length,a,l]),D=r.useCallback(s=>{R.push(p.dashboard.meal.edit(s))},[R]),O=r.useCallback((s,n)=>{x("status",n)},[x]),z=r.useCallback(()=>{C(f)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{maxWidth:U.themeStretch?!1:"lg",children:[e.jsx(ne,{heading:t("meal-list"),links:[{name:t("dashboard"),href:p.dashboard.root},{name:t("meal"),href:p.dashboard.meal.root},{name:t("meal-list")}],action:e.jsx(_,{component:J,href:p.dashboard.meal.new,variant:"contained",startIcon:e.jsx(K,{icon:"mingcute:add-line"}),children:t("new-meal")}),sx:{mb:{xs:3,md:5}}}),e.jsxs(Q,{children:[e.jsx(X,{value:u.status,onChange:O,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${Y(s.palette.grey[500],.08)}`},children:d.map(s=>e.jsx(Z,{iconPosition:(h==null?void 0:h.value)==="ar"?"start":"end",value:s.value,label:s.label,icon:e.jsxs(ee,{variant:(s.value==="all"||s.value===u.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&o.length,s.value==="active"&&o.filter(n=>n.status==="active").length,s.value==="banned"&&o.filter(n=>n.status==="banned").length]})},s.value))}),e.jsx(ue,{filters:u,onFilters:x,roleOptions:se}),v&&e.jsx(ge,{filters:u,onFilters:x,onResetFilters:z,results:c.length,sx:{p:2.5,pt:0}}),e.jsx(xe,{sx:{position:"relative",overflow:"unset"},children:e.jsx(ae,{children:e.jsxs(pe,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ie,{order:a.order,orderBy:a.orderBy,headLabel:E,rowCount:l.length,numSelected:a.selected.length,onSort:a.onSort}),e.jsx(fe,{children:l.loading||l.length===0?e.jsx(he,{}):e.jsx(e.Fragment,{children:l!=null?e.jsx(e.Fragment,{children:c.map(s=>e.jsx(me,{row:s,onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>L(s.id),onEditRow:()=>D(s.id)},s.id))}):e.jsxs(e.Fragment,{children:[e.jsx(de,{height:B,emptyRows:re(a.page,a.rowsPerPage,l.length)}),e.jsx(ce,{notFound:I})]})})})]})})}),e.jsxs(k,{sx:{padding:"20px 15px",borderTop:"1px dashed gray",display:"flex",justifyContent:"space-between"},children:[e.jsxs(k,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(T,{sx:{fontSize:"18px"},children:(S=i[0])==null?void 0:S.current_page}),e.jsx(T,{sx:{fontSize:"19px",m:"0px 5px"},children:" / "}),e.jsx(T,{sx:{fontSize:"20px"},children:(F=i[0])==null?void 0:F.last_page})]}),e.jsx(be,{shape:"rounded",onChange:g,count:(P=i[0])==null?void 0:P.last_page,page:((y=i[0])==null?void 0:y.current_page)||1,siblingCount:0})]})]})]}),e.jsx(le,{open:b.value,onClose:b.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(_,{variant:"contained",color:"error",onClick:()=>{A(),b.onFalse()},children:"Delete"})})]})}function je({inputData:t,filters:h}){const{name:o,status:i,role:g}=h;return o&&(t=t.filter(d=>d.name.toLowerCase().indexOf(o.toLowerCase())!==-1)),i!=="all"&&(t=t.filter(d=>d.status===i)),g.length&&(t=t.filter(d=>g.includes(d.role))),t}export{_e as U};
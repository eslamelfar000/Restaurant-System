import{cG as H,l as W,aT as q,a2 as G,r,ap as E,p as R,j as e,C as V,c as L,R as $,I as J,h as K,i as M,e as Q,k as X,E as Y,eE as Z,aw as ee,B as k,T as C,W as te}from"./index-30829889.js";import{N as se,a as ae}from"./notification-note-bar-04346613.js";import{a as oe,b as ne,c as le,C as ie}from"./confirm-dialog-a06252b6.js";import{C as re}from"./custom-breadcrumbs-f701f934.js";import{u as de,e as ce}from"./use-table-ab7fc22e.js";import{a as he,c as pe,d as me}from"./table-pagination-custom-c6d546f4.js";import{T as ue}from"./table-skeleton-94846bde.js";import{f as ge}from"./profile-followers-8e047142.js";import{T as xe,a as fe,b as je}from"./TableContainer-97ee71fb.js";import{P as we}from"./Pagination-8025f4d5.js";import"./Grid2-896f6c8c.js";import"./DateTimePicker-bf3ccdac.js";import"./useMobilePicker-800be46f.js";import"./DialogContent-97df0851.js";import"./dialogTitleClasses-29aa0622.js";import"./DialogActions-9dce2920.js";import"./ListItem-907f4e22.js";import"./ListItemSecondaryAction-ced778bf.js";import"./MobileDateTimePicker-40a641ee.js";import"./DialogTitle-aa9efd56.js";import"./TablePagination-0ab29c65.js";import"./FirstPage-0acfacbf.js";import"./empty-content-aad9630e.js";import"./Skeleton-4213c619.js";import"./Alert-9db7fbf6.js";import"./LoadingButton-5163baf8.js";import"./CircularProgress-5e624f90.js";import"./Rating-e4c159d9.js";import"./CardHeader-b2db77f7.js";import"./AvatarGroup-967165c5.js";import"./Fab-51d1ad11.js";import"./lightbox-ec010cc4.js";function be(){var S,F,y,_;const{t:a,currentLang:m}=H(),{_noteList:l,notesListPagination:d,handlePageChange:u}=oe(),h=[{value:"all",label:a("all")},...m.value==="ar"?ne:le],c=[{id:"title",label:a("title"),width:250},{id:"desc",label:a("desc"),width:150},{id:"status",label:a("status"),width:100},{id:"",width:88}],f={title:"",role:[],status:"all"},s=de(),B=W(),T=q(),j=G(),[o,w]=r.useState(l||[]);r.useEffect(()=>{E(l,o)||w(l)},[l]);const[p,v]=r.useState(f),i=Re({inputData:o,filters:p}),g=i.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),N=s.dense?52:72,P=!E(f,p),D=!i.length&&P||!i.length,x=r.useCallback((t,n)=>{s.onResetPage(),v(b=>({...b,[t]:n}))},[s]),I=r.useCallback(t=>{const n=o.filter(b=>b.id!==t);w(n),s.onUpdatePageDeleteRow(g.length)},[g.length,s,o]),A=r.useCallback(()=>{const t=o.filter(n=>!s.selected.includes(n.id));w(t),s.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:g.length,totalRowsFiltered:i.length})},[i.length,g.length,s,o]),U=r.useCallback(t=>{T.push(R.dashboard.notifications.edit(t))},[T]),z=r.useCallback((t,n)=>{x("status",n)},[x]),O=r.useCallback(()=>{v(f)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{maxWidth:B.themeStretch?!1:"lg",children:[e.jsx(re,{heading:a("notifications"),links:[{name:a("dashboard"),href:R.dashboard.root},{name:a("notifications")}],action:e.jsx(L,{component:$,href:R.dashboard.notifications.new,variant:"contained",startIcon:e.jsx(J,{icon:"mingcute:add-line"}),children:a("new-note")}),sx:{mb:{xs:3,md:5}}}),e.jsxs(K,{children:[e.jsx(M,{value:p.status,onChange:z,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${Q(t.palette.grey[500],.08)}`},children:h==null?void 0:h.map(t=>e.jsx(X,{iconPosition:(m==null?void 0:m.value)==="ar"?"start":"end",value:t.value,label:t.label,icon:e.jsxs(Y,{variant:(t.value==="all"||t.value===p.status)&&"filled"||"soft",color:t.value==="send_now"&&"success"||t.value==="pending"&&"warning"||"default",children:[t.value==="all"&&l.length,t.value==="send_now"&&l.filter(n=>n.status==="send_now").length,t.value==="pending"&&l.filter(n=>n.status==="pending").length]})},t.value))}),e.jsx(se,{filters:p,onFilters:x,roleOptions:Z}),P&&e.jsx(ge,{filters:p,onFilters:x,onResetFilters:O,results:i.length,sx:{p:2.5,pt:0}}),e.jsx(xe,{sx:{position:"relative",overflow:"unset"},children:e.jsx(ee,{children:e.jsxs(fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:c,rowCount:o.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsx(je,{children:o.loading?e.jsx(ue,{}):e.jsx(e.Fragment,{children:o.length!==0?e.jsx(e.Fragment,{children:i==null?void 0:i.map(t=>e.jsx(ae,{row:t,onSelectRow:()=>s.onSelectRow(t.id),onDeleteRow:()=>I(t.id),onEditRow:()=>U(t.id)},t.id))}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{height:N,emptyRows:ce(s.page,s.rowsPerPage,o.length)}),e.jsx(me,{notFound:D})]})})})]})})}),e.jsxs(k,{sx:{padding:"20px 15px",borderTop:"1px dashed gray",display:"flex",justifyContent:"space-between"},children:[e.jsxs(k,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(C,{sx:{fontSize:"18px"},children:(S=d[0])==null?void 0:S.current_page}),e.jsx(C,{sx:{fontSize:"19px",m:"0px 5px"},children:" / "}),e.jsx(C,{sx:{fontSize:"20px"},children:(F=d[0])==null?void 0:F.last_page})]}),e.jsx(we,{shape:"rounded",onChange:u,count:((y=d[0])==null?void 0:y.last_page)||1,page:((_=d[0])==null?void 0:_.current_page)||1,siblingCount:0})]})]})]}),e.jsx(ie,{open:j.value,onClose:j.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(L,{variant:"contained",color:"error",onClick:()=>{A(),j.onFalse()},children:"Delete"})})]})}function Re({inputData:a,comparator:m,filters:l}){const{title:d,status:u,role:h}=l;return d&&(a=a.filter(c=>c.title.toLowerCase().indexOf(d.toLowerCase())!==-1)),u!=="all"&&(a=a.filter(c=>c.status===u)),h.length&&(a=a.filter(c=>h.includes(c.role))),a}function et(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx("title",{children:" Dashboard: Notifications List"})}),e.jsx(be,{})]})}export{et as default};
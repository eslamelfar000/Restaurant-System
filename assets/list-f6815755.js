import{cG as H,l as W,aT as q,a2 as G,r as i,ap as E,p as T,j as e,C as V,c as L,R as $,I as J,h as K,i as M,e as Q,k as X,E as Y,eE as Z,aw as ee,B as k,T as R,W as te}from"./index-3fa43abf.js";import{N as se,a as ae}from"./notification-note-bar-4405795f.js";import{a as oe,b as ne,c as le,C as ie}from"./confirm-dialog-0016619a.js";import{C as re}from"./custom-breadcrumbs-819d3e57.js";import{u as de,e as ce}from"./use-table-eab86e84.js";import{a as he,c as pe,d as me}from"./table-pagination-custom-656b7eee.js";import{T as ue}from"./table-skeleton-6b410a90.js";import{f as ge}from"./profile-followers-190551f4.js";import{T as xe,a as fe,b as je}from"./TableContainer-26be5063.js";import{P as we}from"./Pagination-0f3a956e.js";import"./Grid2-56a9108c.js";import"./DateTimePicker-d3c0d4df.js";import"./useMobilePicker-1ae3c4b5.js";import"./DialogContent-e9c84096.js";import"./dialogTitleClasses-207596bd.js";import"./DialogActions-2c9e30a9.js";import"./ListItem-f4be5365.js";import"./ListItemSecondaryAction-7c0c5b8d.js";import"./MobileDateTimePicker-d26e583a.js";import"./DialogTitle-5c3b66de.js";import"./TablePagination-23261eeb.js";import"./FirstPage-b4625080.js";import"./empty-content-ee5c332a.js";import"./Skeleton-c13a18db.js";import"./Alert-eb089c5f.js";import"./LoadingButton-a3a333ab.js";import"./CircularProgress-3794c3c1.js";import"./Rating-fcf71468.js";import"./CardHeader-a1a448d9.js";import"./AvatarGroup-ba5c2ab9.js";import"./Fab-a530c42f.js";import"./lightbox-b55cdf3b.js";function be(){var v,F,y,_;const{t:a,currentLang:p}=H(),{_noteList:l,notesListPagination:r,handlePageChange:m}=oe(),u=[{value:"all",label:a("all")},...p.value==="ar"?ne:le],d=[{id:"title",label:a("title"),width:250},{id:"desc",label:a("desc"),width:150},{id:"status",label:a("status"),width:100},{id:"",width:88}],f={title:"",role:[],status:"all"},s=de(),N=W(),C=q(),j=G(),[o,w]=i.useState(l||[]);i.useEffect(()=>{E(l,o)||w(l)},[l]);const[h,S]=i.useState(f),c=Te({inputData:o,filters:h}),g=c.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),B=s.dense?52:72,P=!E(f,h),I=!c.length&&P||!c.length,x=i.useCallback((t,n)=>{s.onResetPage(),S(b=>({...b,[t]:n}))},[s]),A=i.useCallback(t=>{const n=o.filter(b=>b.id!==t);w(n),s.onUpdatePageDeleteRow(g.length)},[g.length,s,o]),D=i.useCallback(()=>{const t=o.filter(n=>!s.selected.includes(n.id));w(t),s.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:g.length,totalRowsFiltered:c.length})},[c.length,g.length,s,o]),O=i.useCallback(t=>{C.push(T.dashboard.notifications.edit(t))},[C]),U=i.useCallback((t,n)=>{x("status",n)},[x]),z=i.useCallback(()=>{S(f)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{maxWidth:N.themeStretch?!1:"lg",children:[e.jsx(re,{heading:a("notifications"),links:[{name:a("dashboard"),href:T.dashboard.root},{name:a("notifications")}],action:e.jsx(L,{component:$,href:T.dashboard.notifications.new,variant:"contained",startIcon:e.jsx(J,{icon:"mingcute:add-line"}),children:a("new-note")}),sx:{mb:{xs:3,md:5}}}),e.jsxs(K,{children:[e.jsx(M,{value:h.status,onChange:U,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${Q(t.palette.grey[500],.08)}`},children:u.map(t=>e.jsx(X,{iconPosition:(p==null?void 0:p.value)==="ar"?"start":"end",value:t.value,label:t.label,icon:e.jsxs(Y,{variant:(t.value==="all"||t.value===h.status)&&"filled"||"soft",color:t.value==="send_now"&&"success"||t.value==="pending"&&"warning"||"default",children:[t.value==="all"&&l.length,t.value==="send_now"&&l.filter(n=>n.status==="send_now").length,t.value==="pending"&&l.filter(n=>n.status==="pending").length]})},t.value))}),e.jsx(se,{filters:h,onFilters:x,roleOptions:Z}),P&&e.jsx(ge,{filters:h,onFilters:x,onResetFilters:z,results:c.length,sx:{p:2.5,pt:0}}),e.jsx(xe,{sx:{position:"relative",overflow:"unset"},children:e.jsx(ee,{children:e.jsxs(fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:d,rowCount:o.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsx(je,{children:o.loading||o.length===0?e.jsx(ue,{}):e.jsx(e.Fragment,{children:o!=null?e.jsx(e.Fragment,{children:c.map(t=>e.jsx(ae,{row:t,onSelectRow:()=>s.onSelectRow(t.id),onDeleteRow:()=>A(t.id),onEditRow:()=>O(t.id)},t.id))}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{height:B,emptyRows:ce(s.page,s.rowsPerPage,o.length)}),e.jsx(me,{notFound:I})]})})})]})})}),e.jsxs(k,{sx:{padding:"20px 15px",borderTop:"1px dashed gray",display:"flex",justifyContent:"space-between"},children:[e.jsxs(k,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(R,{sx:{fontSize:"18px"},children:(v=r[0])==null?void 0:v.current_page}),e.jsx(R,{sx:{fontSize:"19px",m:"0px 5px"},children:" / "}),e.jsx(R,{sx:{fontSize:"20px"},children:(F=r[0])==null?void 0:F.last_page})]}),e.jsx(we,{shape:"rounded",onChange:m,count:((y=r[0])==null?void 0:y.last_page)||1,page:((_=r[0])==null?void 0:_.current_page)||1,siblingCount:0})]})]})]}),e.jsx(ie,{open:j.value,onClose:j.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(L,{variant:"contained",color:"error",onClick:()=>{D(),j.onFalse()},children:"Delete"})})]})}function Te({inputData:a,comparator:p,filters:l}){const{title:r,status:m,role:u}=l;return r&&(a=a.filter(d=>d.title.toLowerCase().indexOf(r.toLowerCase())!==-1)),m!=="all"&&(a=a.filter(d=>d.status===m)),u.length&&(a=a.filter(d=>u.includes(d.role))),a}function et(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx("title",{children:" Dashboard: Notifications List"})}),e.jsx(be,{})]})}export{et as default};
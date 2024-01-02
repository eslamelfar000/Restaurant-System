import{cH as A,r as O,cI as E,aQ as T,aO as j,aP as L,aS as P,aK as N,cG as B,aL as U,j as l,aG as D,B as z,c as I,aN as R,P as y,aR as k}from"./index-30829889.js";import{D as F}from"./DialogTitle-aa9efd56.js";import{D as M}from"./DialogContent-97df0851.js";import{D as q}from"./DialogActions-9dce2920.js";const V=[{value:"active",label:"فعال"},{value:"banned",label:"غير فعال"}],X=[{value:"active",label:"Active"},{value:"banned",label:"Not Active"}];function G(){var s,p,g,u,r,i,f,_,c;const h=window.localStorage.getItem("user_data"),n=A(h),[m,v]=O.useState(1),{data:e,isLoading:d,refetch:S}=E(["meals",m,T.language],{retry:1,queryFn:()=>j.get(`${L}dashboard/restaurant/food/get?per_page=10&page=${m}`,{headers:{"Content-Type":"application/json","Accept-Language":T.language,Authorization:`Bearer ${n==null?void 0:n.token}`}}),onSuccess:a=>{},onError:()=>{P(N("error"))}}),x=(a,t)=>{v(t)},b=((s=e==null?void 0:e.data)==null?void 0:s.data.map((a,t)=>{var w,C,$;return{id:a.id,name:a.name,photo:((w=a.images)==null?void 0:w.image)||"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",desc:a.details||"Sublime Text is a sophisticated text editor for code, markup, and prose. You ll love the slick",price:a.price,review:((C=a==null?void 0:a.rating[0])==null?void 0:C.average_rating)||"",review_num:(($=a==null?void 0:a.rating[0])==null?void 0:$.rating_count)||"0",status:a.status,loading:d}}))||[],o=e?[{current_page:((g=(p=e.data)==null?void 0:p.pagination)==null?void 0:g.current_page)||1,per_page:((r=(u=e.data)==null?void 0:u.pagination)==null?void 0:r.per_page)||5,last_page:((f=(i=e.data)==null?void 0:i.pagination)==null?void 0:f.last_page)||1,total:((c=(_=e.data)==null?void 0:_.pagination)==null?void 0:c.total)||5}]:[];return{_mealList:b,mealListPaginationb:o,handlePageChange:x,refetch:S}}const Z=[{value:"send_now",label:"تم الارسال"},{value:"pending",label:"انتظار"}],aa=[{value:"send_now",label:"Send Successfully"},{value:"pending",label:"Pending"}];function H(){var s,p,g,u,r,i,f,_,c;const h=window.localStorage.getItem("user_data"),n=A(h),[m,v]=O.useState(1),{data:e,isLoading:d,refetch:S}=E(["notes",m,T.language],{queryFn:()=>j.get(`${L}dashboard/restaurant/notification?per_page=10&page=${m}`,{headers:{"Content-Type":"application/json","Accept-Language":T.language,Authorization:`Bearer ${n==null?void 0:n.token}`}}),onSuccess:a=>{},onError:()=>{P(N("error"))}}),x=(a,t)=>{v(t)},b=((s=e==null?void 0:e.data)==null?void 0:s.data.map((a,t)=>({id:a.id,title:a.title,avatarUrl:a.photo||"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",desc:a.message||"Sublime Text is a sophisticated text editor for code, markup, and prose. You ll love the slick",time:a.sent_at,status:a.status,loading:d})))||[],o=e?[{current_page:((g=(p=e.data)==null?void 0:p.pagination)==null?void 0:g.current_page)||1,per_page:((r=(u=e.data)==null?void 0:u.pagination)==null?void 0:r.per_page)||5,last_page:((f=(i=e.data)==null?void 0:i.pagination)==null?void 0:f.last_page)||1,total:((c=(_=e.data)==null?void 0:_.pagination)==null?void 0:c.total)||5}]:[];return{_noteList:b,notesListPagination:o,handlePageChange:x,refetch:S}}function Q({title:h,content:n,action:m,open:v,meal:e,onClose:d,item_id:S,note_id:x,...b}){const{t:o}=B(),s=JSON.parse(localStorage.getItem("settings")),{refetch:p}=G(),{refetch:g}=H(),u=window.localStorage.getItem("user_data"),r=A(u),{mutate:i,error:f,isError:_,isLoading:c}=U({mutationFn:t=>j.post(`${L}${e?"dashboard/restaurant/food/delete":"dashboard/restaurant/notification/delete"}`,t,{headers:{"Content-Type":"multipart/form-data","Accept-Language":T.language,Authorization:`Bearer ${r==null?void 0:r.token}`}}),onSuccess:()=>{d(),e?(p(),k(o("meal-form.success.delete"))):(g(),k(o("note-form.success.delete")))},onError:()=>{P(o("error"))}}),a=()=>{const t=new FormData;e?(t.append("food_id",S),i(t)):(t.append("id",x),i(t))};return l.jsxs(D,{fullWidth:!0,maxWidth:"xs",open:v,onClose:d,...b,children:[l.jsx(z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:l.jsx(F,{sx:{pb:2,fontSize:"30px !important"},children:h})}),n&&l.jsxs(M,{sx:{typography:"body2",overflow:"hidden",fontSize:"17px"},children:[" ",n," "]}),l.jsxs(q,{children:[l.jsx(I,{type:"submit",variant:"contained",color:"error",disabled:!!c,onClick:a,children:c?l.jsx(R,{color:(s==null?void 0:s.themeMode)==="dark"?"#161C24":"#ffffff",size:23}):o("delete")}),l.jsx(I,{variant:"outlined",color:"inherit",onClick:d,children:o("cancel")})]})]})}Q.propTypes={action:y.node,content:y.node,onClose:y.func,open:y.bool,title:y.string};export{V as A,Q as C,X as U,H as a,Z as b,aa as c,G as g};
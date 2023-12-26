import{cH as $,r as T,cI as z,aQ as j,aO as D,aP as E,aS as P,aK as A,cG as B,aL as I,j as t,aG as M,B as F,c as k,aN as G,P as l,aR as H}from"./index-8396fb83.js";import{D as N}from"./DialogTitle-1bda48a5.js";import{D as O}from"./DialogContent-691cb93d.js";import{D as Q}from"./DialogActions-144708bf.js";function R(){var p,d,s,g,_,y,c,v,S;const u=window.localStorage.getItem("user_data"),o=$(u),[m,f]=T.useState(1),{data:e,isLoading:n,refetch:h}=z(["meals",m,j.language],{retry:1,queryFn:()=>D.get(`${E}dashboard/restaurant/food/get?per_page=10&page=${m}`,{headers:{"Content-Type":"application/json","Accept-Language":j.language,Authorization:`Bearer ${o==null?void 0:o.token}`}}),onSuccess:a=>{},onError:()=>{P(A("error"))}}),x=(a,b)=>{f(b)},r=((p=e==null?void 0:e.data)==null?void 0:p.data.map((a,b)=>{var L,C,w;return{id:a.id,name:a.name,photo:((L=a.images)==null?void 0:L.image)||"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",desc:a.details||"Sublime Text is a sophisticated text editor for code, markup, and prose. You ll love the slick",price:a.price,review:((C=a==null?void 0:a.rating[0])==null?void 0:C.average_rating)||"",review_num:((w=a==null?void 0:a.rating[0])==null?void 0:w.rating_count)||"0",status:a.status,loading:n}}))||[],i=e?[{current_page:((s=(d=e.data)==null?void 0:d.pagination)==null?void 0:s.current_page)||1,per_page:((_=(g=e.data)==null?void 0:g.pagination)==null?void 0:_.per_page)||5,last_page:((c=(y=e.data)==null?void 0:y.pagination)==null?void 0:c.last_page)||1,total:((S=(v=e.data)==null?void 0:v.pagination)==null?void 0:S.total)||5}]:[];return{_mealList:r,mealListPaginationb:i,handlePageChange:x,refetch:h}}function W({title:u,content:o,action:m,open:f,meal:e,onClose:n,item_id:h,...x}){const{t:r}=B(),i=JSON.parse(localStorage.getItem("settings")),{refetch:p}=R(),d=window.localStorage.getItem("user_data"),s=$(d),{mutate:g,error:_,isError:y,isLoading:c}=I({mutationFn:()=>D.post(`${E}${e?"dashboard/restaurant/food/delete":""}`,{food_id:h},{headers:{"Content-Type":"multipart/form-data","Accept-Language":j.language,Authorization:`Bearer ${s==null?void 0:s.token}`}}),onSuccess:()=>{H(r("meal-form.success.delete")),n(),p()},onError:()=>{P(r("error"))}});return t.jsxs(M,{fullWidth:!0,maxWidth:"xs",open:f,onClose:n,...x,children:[t.jsx(F,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:t.jsx(N,{sx:{pb:2,fontSize:"30px !important"},children:u})}),o&&t.jsxs(O,{sx:{typography:"body2",overflow:"hidden",fontSize:"17px"},children:[" ",o," "]}),t.jsxs(Q,{children:[t.jsx(k,{type:"submit",variant:"contained",color:"error",disabled:!!c,onClick:g,children:c?t.jsx(G,{color:(i==null?void 0:i.themeMode)==="dark"?"#161C24":"#ffffff",size:23}):r("delete")}),t.jsx(k,{variant:"outlined",color:"inherit",onClick:n,children:r("cancel")})]})]})}W.propTypes={action:l.node,content:l.node,onClose:l.func,open:l.bool,title:l.string};export{W as C,R as g};
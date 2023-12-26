import{ei as m,ej as M,ek as g,ae as s,u as b,j as e,aG as C,S as v,w as h,az as w,c as f,P as n}from"./index-2e23bd70.js";import{D as S}from"./DialogTitle-a7955715.js";import{D}from"./DialogContent-5cdd3a81.js";import{a as j,D as y}from"./DatePicker-9cf2153f.js";import{D as P}from"./DialogActions-a4520a0f.js";function F(a,r){const i=new Date().getFullYear(),l=a?m(a):null,d=r?m(r):null,c=i===l&&i===d,u=a&&r?M(new Date(a),new Date(r)):!1,t=a&&r?g(new Date(a),new Date(r)):!1;return c?t?u?s(r,"dd MMM yy"):`${s(a,"dd")} - ${s(r,"dd MMM yy")}`:`${s(a,"dd MMM")} - ${s(r,"dd MMM yy")}`:`${s(a,"dd MMM yy")} - ${s(r,"dd MMM yy")}`}function k({title:a="Select date range",variant:r="input",startDate:i,endDate:l,onChangeStartDate:d,onChangeEndDate:c,open:u,onClose:t,error:x}){const p=b("up","md"),o=r==="calendar";return e.jsxs(C,{fullWidth:!0,maxWidth:o?!1:"xs",open:u,onClose:t,PaperProps:{sx:{...o&&{maxWidth:720}}},children:[e.jsx(S,{sx:{pb:2},children:a}),e.jsxs(D,{sx:{...o&&p&&{overflow:"unset"}},children:[e.jsx(v,{justifyContent:"center",spacing:o?3:2,direction:o&&p?"row":"column",sx:{pt:1},children:o?e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(j,{value:i,onChange:d})}),e.jsx(h,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(j,{value:l,onChange:c})})]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{label:"Start date",value:i,onChange:d}),e.jsx(y,{label:"End date",value:l,onChange:c})]})}),x&&e.jsx(w,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),e.jsxs(P,{children:[e.jsx(f,{variant:"outlined",color:"inherit",onClick:t,children:"Cancel"}),e.jsx(f,{disabled:x,variant:"contained",onClick:t,children:"Apply"})]})]})}k.propTypes={error:n.bool,onChangeEndDate:n.func,onChangeStartDate:n.func,onClose:n.func,open:n.bool,title:n.string,variant:n.oneOf(["input","calendar"]),startDate:n.oneOfType([n.string,n.number,n.instanceOf(Date)]),endDate:n.oneOfType([n.string,n.number,n.instanceOf(Date)])};export{k as C,F as s};
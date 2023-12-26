import{j as e,aw as u,a2 as L,N as P,I as T,bQ as H,w as W,T as v,P as z,r as S,S as k,cn as w,K as U,B as G,C as A,p as N,h as m,W as $}from"./index-cbcf4d24.js";import{C as M}from"./custom-breadcrumbs-e3539828.js";import{a as I,T as d,f as y,b as _,c as K,e as E}from"./table-pagination-custom-30ef5c4f.js";import{T as b,a as x,b as j}from"./TableContainer-388c23d7.js";import{T as a}from"./TablePagination-64b8a577.js";import{u as F,g as O,e as J}from"./use-table-7f771a8c.js";import{C as p}from"./component-block-ba8c4aa6.js";import{C as f}from"./CardHeader-0b919cc9.js";import"./empty-content-ca871e56.js";import"./FirstPage-f62926f1.js";function h(n,r,i,s,o){return{name:n,calories:r,fat:i,carbs:s,protein:o}}const Q=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)],V=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function X(){return e.jsx(b,{sx:{mt:3,overflow:"unset"},children:e.jsx(u,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(I,{headLabel:V}),e.jsx(j,{children:Q.map(n=>e.jsxs(d,{children:[e.jsx(a,{children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]},n.name))})]})})})}function g(n,r,i,s,o,l){return{name:n,calories:r,fat:i,carbs:s,protein:o,price:l,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}const q=[g("Frozen yoghurt",159,6,24,4,3.99),g("Ice cream sandwich",237,9,37,4.3,4.99),g("Eclair",262,16,24,6,3.79),g("Cupcake",305,3.7,67,4.3,2.5),g("Gingerbread",356,16,49,3.9,1.5)];function Y(){return e.jsx(b,{sx:{mt:3,overflow:"unset"},children:e.jsx(u,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(a,{}),e.jsx(a,{children:"Dessert (100g serving)"}),e.jsx(a,{align:"right",children:"Calories"}),e.jsx(a,{align:"right",children:"Fat (g)"}),e.jsx(a,{align:"right",children:"Carbs (g)"}),e.jsx(a,{align:"right",children:"Protein (g)"})]})}),e.jsx(j,{children:q.map(n=>e.jsx(R,{row:n},n.name))})]})})})}function R({row:n}){const r=L();return e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(a,{children:e.jsx(P,{size:"small",color:r.value?"inherit":"default",onClick:r.onToggle,children:e.jsx(T,{icon:r.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),e.jsx(a,{component:"th",scope:"row",children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]}),e.jsx(d,{children:e.jsx(a,{sx:{py:0},colSpan:6,children:e.jsx(H,{in:r.value,unmountOnExit:!0,children:e.jsxs(W,{variant:"outlined",sx:{py:2,borderRadius:1.5,...r.value&&{boxShadow:i=>i.customShadows.z20}},children:[e.jsx(v,{variant:"h6",sx:{m:2,mt:0},children:"History"}),e.jsxs(x,{size:"small","aria-label":"purchases",children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Date"}),e.jsx(a,{children:"Customer"}),e.jsx(a,{align:"right",children:"Amount"}),e.jsx(a,{align:"right",children:"Total price ($)"})]})}),e.jsx(j,{children:n.history.map(i=>e.jsxs(d,{children:[e.jsx(a,{component:"th",scope:"row",children:i.date}),e.jsx(a,{children:i.customerId}),e.jsx(a,{align:"right",children:i.amount}),e.jsx(a,{align:"right",children:Math.round(i.amount*n.price*100)/100})]},i.date))})]})]})})})})]})}R.propTypes={row:z.object};function c(n,r,i,s,o){return{name:n,calories:r,fat:i,carbs:s,protein:o}}const Z=[c("Cupcake",305,3.7,67,4.3),c("Donut",452,25,51,4.9),c("Eclair",262,16,24,6),c("Frozen yoghurt",159,6,24,4),c("Gingerbread",356,16,49,3.9),c("Honeycomb",408,3.2,87,6.5),c("Ice cream sandwich",237,9,37,4.3),c("Jelly Bean",375,0,94,0),c("KitKat",518,26,65,7),c("Lollipop",392,.2,98,0),c("Marshmallow",318,0,81,2),c("Nougat",360,19,9,37)],ee=[{id:"name",label:"Dessert (100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat (g)",align:"center"},{id:"carbs",label:"Carbs (g)",align:"center"},{id:"protein",label:"Protein (g)",align:"center"}];function ne(){const n=F({defaultOrderBy:"calories"}),[r,i]=S.useState([]);S.useEffect(()=>{i(Z)},[]);const s=ae({inputData:r,comparator:O(n.order,n.orderBy)}),o=n.dense?34:54;return e.jsxs("div",{children:[e.jsxs(k,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[e.jsx(v,{variant:"h6",children:"Sorting & Selecting"}),e.jsx(w,{title:"Filter list",children:e.jsx(P,{children:e.jsx(T,{icon:"ic:round-filter-list"})})})]}),e.jsxs(b,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(_,{dense:n.dense,numSelected:n.selected.length,rowCount:r.length,onSelectAllRows:l=>n.onSelectAllRows(l,r.map(C=>C.name)),action:e.jsx(w,{title:"Delete",children:e.jsx(P,{color:"primary",children:e.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(u,{children:e.jsxs(x,{size:n.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(I,{order:n.order,orderBy:n.orderBy,headLabel:ee,rowCount:r.length,numSelected:n.selected.length,onSort:n.onSort,onSelectAllRows:l=>n.onSelectAllRows(l,r.map(C=>C.name))}),e.jsxs(j,{children:[s.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(l=>e.jsxs(d,{hover:!0,onClick:()=>n.onSelectRow(l.name),selected:n.selected.includes(l.name),children:[e.jsx(a,{padding:"checkbox",children:e.jsx(U,{checked:n.selected.includes(l.name)})}),e.jsxs(a,{children:[" ",l.name," "]}),e.jsx(a,{align:"center",children:l.calories}),e.jsx(a,{align:"center",children:l.fat}),e.jsx(a,{align:"center",children:l.carbs}),e.jsx(a,{align:"center",children:l.protein})]},l.name)),e.jsx(K,{height:o,emptyRows:J(n.page,n.rowsPerPage,r.length)})]})]})})]}),e.jsx(E,{count:s.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,dense:n.dense,onChangeDense:n.onChangeDense})]})}function ae({inputData:n,comparator:r}){const i=n.map((s,o)=>[s,o]);return i.sort((s,o)=>{const l=r(s[0],o[0]);return l!==0?l:s[1]-o[1]}),n=i.map(s=>s[0]),n}function t(n,r,i,s){const o=i/s;return{name:n,code:r,population:i,size:s,density:o}}const B=[t("India","IN",1324171354,3287263),t("China","CN",1403500365,9596961),t("Italy","IT",60483973,301340),t("United States","US",327167434,9833520),t("Canada","CA",37602103,9984670),t("Australia","AU",25475400,7692024),t("Germany","DE",83019200,357578),t("Ireland","IE",4857e3,70273),t("Mexico","MX",126577691,1972550),t("Japan","JP",126317e3,377973),t("France","FR",67022e3,640679),t("United Kingdom","GB",67545757,242495),t("Russia","RU",146793744,17098246),t("Nigeria","NG",200962417,923768),t("Brazil","BR",210147125,8515767)],D=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:n=>n.toFixed(2)}];function re(){const n=F({defaultRowsPerPage:10});return e.jsxs(e.Fragment,{children:[e.jsx(b,{sx:{overflow:"unset"},children:e.jsx(u,{sx:{maxHeight:400},children:e.jsxs(x,{stickyHeader:!0,sx:{minWidth:800},children:[e.jsxs(y,{children:[e.jsxs(d,{children:[e.jsx(a,{align:"center",colSpan:2,sx:{background:r=>r.palette.background.paper},children:"Country"}),e.jsx(a,{align:"center",colSpan:3,sx:{background:r=>r.palette.background.paper},children:"Details"})]}),e.jsx(d,{children:D.map(r=>e.jsx(a,{align:r.align,style:{top:56,minWidth:r.minWidth},children:r.label},r.id))})]}),e.jsx(j,{children:B.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(r=>e.jsx(d,{hover:!0,role:"checkbox",tabIndex:-1,children:D.map(i=>{const s=r[i.id];return e.jsx(a,{align:i.align,children:i.format&&typeof s=="number"?i.format(s):s},i.id)})},r.code))})]})})}),e.jsx(E,{count:B.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage})]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(G,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(A,{children:e.jsx(M,{heading:"Table",links:[{name:"Components",href:N.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})})}),e.jsx(A,{sx:{my:10},children:e.jsxs(k,{spacing:3,children:[e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Basic Table"}),e.jsx(X,{})]})}),e.jsx(p,{children:e.jsx(m,{sx:{width:1},children:e.jsx(ne,{})})}),e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Grouping & FixedHeader"}),e.jsx(re,{})]})}),e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Collapsible Table"}),e.jsx(Y,{})]})})]})})]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx("title",{children:" MUI: Table"})}),e.jsx(ie,{})]})}export{me as default};
import{br as R,bq as T,s as c,b7 as d,r as j,ba as N,bb as P,T as l,j as s,bg as M,bh as w}from"./index-3843fe70.js";function S(a){return T("MuiCardHeader",a)}const A=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),y=A,U=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],$=a=>{const{classes:e}=a;return w({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},S,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${y.title}`]:e.title,[`& .${y.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),k=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),E=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),q=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),B=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:b,avatar:i,className:C,component:m="div",disableTypography:u=!1,subheader:v,subheaderTypographyProps:g,title:x,titleTypographyProps:H}=p,f=P(p,U),r=d({},p,{component:m,disableTypography:u}),t=$(r);let o=x;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=v;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:n}))),s.jsxs(_,d({className:M(t.root,C),as:m,ref:h,ownerState:r},f,{children:[i&&s.jsx(k,{className:t.avatar,ownerState:r,children:i}),s.jsxs(q,{className:t.content,ownerState:r,children:[o,n]}),b&&s.jsx(E,{className:t.action,ownerState:r,children:b})]}))}),L=B;export{L as C};

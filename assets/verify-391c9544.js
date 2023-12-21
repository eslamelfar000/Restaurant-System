import{aC as j,aD as r,aE as f,j as e,aF as p,aH as y,S as n,aQ as g,aS as b,aG as v,T as i,L as t,R as F,p as S,I,aT as R,W as V}from"./index-3843fe70.js";function k(){const o=j().shape({code:r().min(6,"Code must be at least 6 characters").required("Code is required"),email:r().required("Email is required").email("Email must be a valid email address")}),l={code:"",email:""},s=f({mode:"onChange",resolver:y(o),defaultValues:l}),{handleSubmit:c,formState:{isSubmitting:d}}=s,m=c(async x=>{try{await new Promise(a=>setTimeout(a,500)),console.info("DATA",x)}catch(a){console.error(a)}}),h=e.jsxs(n,{spacing:3,alignItems:"center",children:[e.jsx(g,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(b,{name:"code"}),e.jsx(v,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:d,children:"Verify"}),e.jsxs(i,{variant:"body2",children:["Don’t have a code? ",e.jsx(t,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(t,{component:F,href:S.authDemo.classic.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(I,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),u=e.jsxs(e.Fragment,{children:[e.jsx(R,{sx:{height:96}}),e.jsxs(n,{spacing:1,sx:{my:5},children:[e.jsx(i,{variant:"h3",children:"Please check your email!"}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."})]})]});return e.jsxs(p,{methods:s,onSubmit:m,children:[u,h]})}function C(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" Auth Classic: Verify"})}),e.jsx(k,{})]})}export{C as default};

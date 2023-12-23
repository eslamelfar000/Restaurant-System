import{a2 as f,aA as y,aB as a,aY as P,aC as v,j as e,aD as C,aE as I,S as d,aM as o,aW as q,$ as l,N as c,I as n,T as i,L as m,R as F,p as R,aZ as S,W as k}from"./index-868085a6.js";import{L as A}from"./LoadingButton-8ff9ee1e.js";import"./CircularProgress-84d7dba1.js";function T(){const s=f(),u=y().shape({code:a().min(6,"Code must be at least 6 characters").required("Code is required"),email:a().required("Email is required").email("Email must be a valid email address"),password:a().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:a().required("Confirm password is required").oneOf([P("password")],"Passwords must match")}),x={code:"",email:"",password:"",confirmPassword:""},t=v({mode:"onChange",resolver:I(u),defaultValues:x}),{handleSubmit:h,formState:{isSubmitting:p}}=t,w=h(async b=>{try{await new Promise(r=>setTimeout(r,500)),console.info("DATA",b)}catch(r){console.error(r)}}),j=e.jsxs(d,{spacing:3,alignItems:"center",children:[e.jsx(o,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(q,{name:"code"}),e.jsx(o,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(l,{position:"end",children:e.jsx(c,{onClick:s.onToggle,edge:"end",children:e.jsx(n,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(o,{name:"confirmPassword",label:"Confirm New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(l,{position:"end",children:e.jsx(c,{onClick:s.onToggle,edge:"end",children:e.jsx(n,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(A,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:p,children:"Update Password"}),e.jsxs(i,{variant:"body2",children:["Don’t have a code? ",e.jsx(m,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(m,{component:F,href:R.authDemo.classic.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(n,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),g=e.jsxs(e.Fragment,{children:[e.jsx(S,{sx:{height:96}}),e.jsxs(d,{spacing:1,sx:{my:5},children:[e.jsx(i,{variant:"h3",children:"Request sent successfully!"}),e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",e.jsx("br",{}),"Please enter the code in below box to verify your email."]})]})]});return e.jsxs(C,{methods:t,onSubmit:w,children:[g,j]})}function B(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" Auth Classic: New Password"})}),e.jsx(T,{})]})}export{B as default};

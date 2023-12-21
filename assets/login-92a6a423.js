import{aN as q,aO as D,r as H,aR as O,a4 as B,aC as M,aD as x,aE as N,aX as G,j as e,aF as Q,aH as V,S as a,T as m,L as p,R as g,p as j,J as _,aQ as y,a1 as $,Q as o,I as n,aG as z,D as J,W as X}from"./index-3843fe70.js";function K(){const{login:t,loginWithGoogle:i,loginWithGithub:c,loginWithTwitter:l}=q(),f=D(),[h,b]=H.useState(""),w=O().get("returnTo"),d=B(),v=M().shape({email:x().required("Email is required").email("Email must be a valid email address"),password:x().required("Password is required")}),L={email:"",password:""},u=N({resolver:V(v),defaultValues:L}),{reset:F,handleSubmit:S,formState:{isSubmitting:C}}=u,E=S(async r=>{try{await(t==null?void 0:t(r.email,r.password)),f.push(w||G)}catch(s){console.error(s),F(),b(typeof s=="string"?s:s.message)}}),P=async()=>{try{await(i==null?void 0:i())}catch(r){console.error(r)}},T=async()=>{try{await(c==null?void 0:c())}catch(r){console.error(r)}},R=async()=>{try{await(l==null?void 0:l())}catch(r){console.error(r)}},k=e.jsxs(a,{spacing:2,sx:{mb:5},children:[e.jsx(m,{variant:"h4",children:"Sign in to Minimal"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",children:"New user?"}),e.jsx(p,{component:g,href:j.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),A=e.jsxs(a,{spacing:2.5,children:[!!h&&e.jsx(_,{severity:"error",children:h}),e.jsx(y,{name:"email",label:"Email address"}),e.jsx(y,{name:"password",label:"Password",type:d.value?"text":"password",InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(o,{onClick:d.onToggle,edge:"end",children:e.jsx(n,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(p,{component:g,href:j.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:C,children:"Login"})]}),I=e.jsxs("div",{children:[e.jsx(J,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(a,{direction:"row",justifyContent:"center",spacing:2,children:[e.jsx(o,{onClick:P,children:e.jsx(n,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(o,{color:"inherit",onClick:T,children:e.jsx(n,{icon:"eva:github-fill"})}),e.jsx(o,{onClick:R,children:e.jsx(n,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]})]});return e.jsxs(Q,{methods:u,onSubmit:E,children:[k,A,I]})}function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:" Firebase: Login"})}),e.jsx(K,{})]})}export{Z as default};

import{j as r,aa as l,T as f,P as u,x as o,r as c,B as v,C as p,p as y,S as C,W as P}from"./index-3843fe70.js";import{C as R}from"./custom-breadcrumbs-299772e9.js";import{C as a}from"./component-block-d0826a39.js";import{M as j}from"./Masonry-4a50ede3.js";import"./CardHeader-196e3d50.js";import"./clsx-1229b3e0.js";const x=["inherit","primary","secondary","info","success","warning","error"];function h({progress:s,buffer:i}){const n=e=>r.jsx(f,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:e});return r.jsxs(j,{columns:{xs:1,md:2},spacing:3,children:[r.jsxs("div",{children:[n("Indeterminate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Determinate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,value:s,variant:"determinate",sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Buffer"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,variant:"buffer",value:s,valueBuffer:i,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Query"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,variant:"query",value:s,valueBuffer:i,sx:{mb:2,width:1}},e))})]})]})}h.propTypes={buffer:u.number,progress:u.number};const k=["inherit","primary","secondary","info","success","warning","error"];function g({progress:s}){const i=n=>r.jsx(f,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:n});return r.jsxs(j,{columns:{xs:1,md:3},spacing:3,children:[r.jsxs("div",{children:[i("Indeterminate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:k.map(n=>r.jsx(o,{color:n},n))})]}),r.jsxs("div",{children:[i("Determinate"),r.jsxs(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{color:"info"}),r.jsx(o,{color:"info",variant:"determinate",value:25}),r.jsx(o,{color:"info",variant:"determinate",value:50}),r.jsx(o,{color:"info",variant:"determinate",value:75}),r.jsx(o,{color:"info",variant:"determinate",value:100}),r.jsx(o,{color:"info",variant:"determinate",value:s})]})]}),r.jsxs("div",{children:[i("Sizes"),r.jsxs(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{size:48,color:"info"}),r.jsx(o,{color:"info"}),r.jsx(o,{size:32,color:"info"}),r.jsx(o,{size:24,color:"info"})]})]})]})}g.propTypes={progress:u.number};function B(){const[s,i]=c.useState(0),[n,e]=c.useState(10);c.useEffect(()=>{const t=setInterval(()=>{i(d=>{if(d===100)return 0;const b=Math.random()*10;return Math.min(d+b,100)})},500);return()=>{clearInterval(t)}},[]);const m=c.useRef(()=>{});return c.useEffect(()=>{m.current=()=>{if(s>100)i(0),e(10);else{const t=Math.random()*10,d=Math.random()*10;i(s+t),e(s+t+d)}}}),c.useEffect(()=>{const t=setInterval(()=>{m.current()},500);return()=>{clearInterval(t)}},[]),r.jsxs(r.Fragment,{children:[r.jsx(v,{sx:{py:5,bgcolor:t=>t.palette.mode==="light"?"grey.200":"grey.800"},children:r.jsx(p,{children:r.jsx(R,{heading:"Progress",links:[{name:"Components",href:y.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})})}),r.jsx(p,{sx:{my:10},children:r.jsxs(C,{spacing:5,children:[r.jsx(a,{title:"Circular",children:r.jsx(g,{progress:s})}),r.jsx(a,{title:"Linear",children:r.jsx(h,{progress:s,buffer:n})})]})})]})}function T(){return r.jsxs(r.Fragment,{children:[r.jsx(P,{children:r.jsx("title",{children:" MUI: Progress"})}),r.jsx(B,{})]})}export{T as default};

import{fa as be,ff as he,s as V,bh as M,bd as l,j as o,ei as Pe,r as x,bg as E,O as xe,P as e,bx as Te,bw as ye,a as ve,bn as ge,e2 as ke,S as _,L as je,B as H,c as Z,ae as z,C as X,p as Ce,i as De,k as we,W as Oe}from"./index-cc84ccf2.js";import{C as Se}from"./custom-breadcrumbs-b22cdd1c.js";import{C as j}from"./component-block-289c2854.js";import{M as re}from"./Masonry-a5353ddf.js";import{u as Me,a as Re,M as Fe,D as F}from"./DatePicker-e1899d51.js";import{O as Le,Q as Ie,R as _e,t as $e,s as Ve,f as Ae,g as A,h as We,u as W,i as ze,j as q,v as Ee,P as Ne,a as Q,G as Be,U as L,J as ee,c as qe,e as Ue,N as le,V as He,k as ie,l as ce,m as Ye,n as Qe,D as Ke}from"./useMobilePicker-43b89451.js";import{b as N,P as Ge,c as I,d as oe,e as Je,f as R,a as Ze}from"./MobileDateTimePicker-a3648a93.js";import{D as se,a as Xe}from"./DateTimePicker-50dd2fb1.js";import{u as te}from"./use-date-range-picker-12a3847b.js";import{C as ne}from"./custom-date-range-picker-26dc0a5a.js";import"./CardHeader-0afccf02.js";import"./clsx-1229b3e0.js";import"./DialogContent-7b08e4a9.js";import"./dialogTitleClasses-51ee09ec.js";import"./DialogActions-3c586869.js";import"./ListItem-8005b211.js";import"./ListItemSecondaryAction-febd3b4f.js";import"./DialogTitle-8d226fc5.js";function eo(t){be(1,arguments);var s=he(t),n=s.getDay();return n===0||n===6}const oo=["props","ref"],so=V(Le)(({theme:t})=>({overflow:"hidden",minWidth:Ie,backgroundColor:(t.vars||t).palette.background.paper})),ue=t=>{var s;let{props:n,ref:a}=t,r=M(t,oo);const{localeText:p,slots:c,slotProps:u,className:i,sx:d,displayStaticWrapperAs:f,autoFocus:h}=n,{layoutProps:m,renderCurrentView:b}=_e(l({},r,{props:n,autoFocusView:h??!1,additionalViewProps:{},wrapperVariant:f})),v=(s=c==null?void 0:c.layout)!=null?s:so;return{renderPicker:()=>{var y,g,P;return o.jsx(Pe,{localeText:p,children:o.jsx(v,l({},m,u==null?void 0:u.layout,{slots:c,slotProps:u,sx:[...Array.isArray(d)?d:[d],...Array.isArray(u==null||(y=u.layout)==null?void 0:y.sx)?u.layout.sx:[u==null||(g=u.layout)==null?void 0:g.sx]],className:$e(i,u==null||(P=u.layout)==null?void 0:P.className),ref:a,children:b()}))})}}},to=t=>{var s,n,a,r;const p=W(),u=((s=t.ampm)!=null?s:p.is12HourCycleInCurrentLocale())?p.formats.fullTime12h:p.formats.fullTime24h;return l({},t,{disablePast:(n=t.disablePast)!=null?n:!1,disableFuture:(a=t.disableFuture)!=null?a:!1,format:(r=t.format)!=null?r:u})},no=({props:t,inputRef:s})=>{const n=to(t),{forwardedProps:a,internalProps:r}=Ve(n,"time");return Ae({inputRef:s,forwardedProps:a,internalProps:r,valueManager:A,fieldValueManager:We,validator:N,valueType:"time"})},ao=["slots","slotProps","components","componentsProps","InputProps","inputProps"],ro=["inputRef"],lo=["ref","onPaste","onKeyDown","inputMode","readOnly"],de=x.forwardRef(function(s,n){var a,r,p;const c=E({props:s,name:"MuiTimeField"}),{slots:u,slotProps:i,components:d,componentsProps:f,InputProps:h,inputProps:m}=c,b=M(c,ao),v=c,T=(a=(r=u==null?void 0:u.textField)!=null?r:d==null?void 0:d.TextField)!=null?a:xe,y=ze({elementType:T,externalSlotProps:(p=i==null?void 0:i.textField)!=null?p:f==null?void 0:f.textField,externalForwardedProps:b,ownerState:v}),{inputRef:g}=y,P=M(y,ro);P.inputProps=l({},m,P.inputProps),P.InputProps=l({},h,P.InputProps);const w=no({props:P,inputRef:g}),{ref:C,onPaste:k,onKeyDown:D,inputMode:O,readOnly:B}=w,S=M(w,lo);return o.jsx(T,l({ref:n},S,{InputProps:l({},S.InputProps,{readOnly:B}),inputProps:l({},S.inputProps,{inputMode:O,onPaste:k,onKeyDown:D,ref:C})}))}),pe=x.forwardRef(function(s,n){var a,r,p;const c=Me(s,"MuiStaticDatePicker"),u=(a=c.displayStaticWrapperAs)!=null?a:"mobile",i=l({day:q,month:q,year:q},c.viewRenderers),d=l({},c,{viewRenderers:i,displayStaticWrapperAs:u,yearsPerRow:(r=c.yearsPerRow)!=null?r:u==="mobile"?3:4,slotProps:l({},c.slotProps,{toolbar:l({hidden:u==="desktop"},(p=c.slotProps)==null?void 0:p.toolbar)})}),{renderPicker:f}=ue({props:d,valueManager:A,valueType:"date",validator:Ee,ref:n});return f()});pe.propTypes={autoFocus:e.bool,className:e.string,components:e.object,componentsProps:e.object,dayOfWeekFormatter:e.func,defaultCalendarMonth:e.any,defaultValue:e.any,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),displayWeekNumber:e.bool,fixedWeekNumber:e.number,loading:e.bool,localeText:e.object,maxDate:e.any,minDate:e.any,monthsPerRow:e.oneOf([3,4]),onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onViewChange:e.func,onYearChange:e.func,openTo:e.oneOf(["day","month","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,renderLoading:e.func,shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.any,view:e.oneOf(["day","month","year"]),viewRenderers:e.shape({day:e.func,month:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","month","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};function io(t){return ye("MuiTimePickerToolbar",t)}const $=Te("MuiTimePickerToolbar",["root","separator","hourMinuteLabel","hourMinuteLabelLandscape","hourMinuteLabelReverse","ampmSelection","ampmLandscape","ampmLabel"]),co=["ampm","ampmInClock","value","isLandscape","onChange","view","onViewChange","views","disabled","readOnly"],uo=t=>{const{theme:s,isLandscape:n,classes:a}=t,r={root:["root"],separator:["separator"],hourMinuteLabel:["hourMinuteLabel",n&&"hourMinuteLabelLandscape",s.direction==="rtl"&&"hourMinuteLabelReverse"],ampmSelection:["ampmSelection",n&&"ampmLandscape"],ampmLabel:["ampmLabel"]};return ge(r,io,a)},po=V(Ne,{name:"MuiTimePickerToolbar",slot:"Root",overridesResolver:(t,s)=>s.root})({}),mo=V(Ge,{name:"MuiTimePickerToolbar",slot:"Separator",overridesResolver:(t,s)=>s.separator})({outline:0,margin:"0 4px 0 2px",cursor:"default"}),me=V("div",{name:"MuiTimePickerToolbar",slot:"HourMinuteLabel",overridesResolver:(t,s)=>[{[`&.${$.hourMinuteLabelLandscape}`]:s.hourMinuteLabelLandscape,[`&.${$.hourMinuteLabelReverse}`]:s.hourMinuteLabelReverse},s.hourMinuteLabel]})(({theme:t,ownerState:s})=>l({display:"flex",justifyContent:"flex-end",alignItems:"flex-end"},s.isLandscape&&{marginTop:"auto"},t.direction==="rtl"&&{flexDirection:"row-reverse"}));me.propTypes={as:e.elementType,ownerState:e.object.isRequired,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object])};const fe=V("div",{name:"MuiTimePickerToolbar",slot:"AmPmSelection",overridesResolver:(t,s)=>[{[`.${$.ampmLabel}`]:s.ampmLabel},{[`&.${$.ampmLandscape}`]:s.ampmLandscape},s.ampmSelection]})(({ownerState:t})=>l({display:"flex",flexDirection:"column",marginRight:"auto",marginLeft:12},t.isLandscape&&{margin:"4px 0 auto",flexDirection:"row",justifyContent:"space-around",flexBasis:"100%"},{[`& .${$.ampmLabel}`]:{fontSize:17}}));fe.propTypes={as:e.elementType,ownerState:e.object.isRequired,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object])};function fo(t){const s=E({props:t,name:"MuiTimePickerToolbar"}),{ampm:n,ampmInClock:a,value:r,isLandscape:p,onChange:c,view:u,onViewChange:i,views:d,disabled:f,readOnly:h}=s,m=M(s,co),b=W(),v=Q(),T=ve(),y=!!(n&&!a&&d.includes("hours")),{meridiemMode:g,handleMeridiemChange:P}=Be(r,n,c),w=O=>n?b.format(O,"hours12h"):b.format(O,"hours24h"),C=s,k=uo(l({},C,{theme:T})),D=o.jsx(mo,{tabIndex:-1,value:":",variant:"h3",selected:!1,className:k.separator});return o.jsxs(po,l({landscapeDirection:"row",toolbarTitle:v.timePickerToolbarTitle,isLandscape:p,ownerState:C,className:k.root},m,{children:[o.jsxs(me,{className:k.hourMinuteLabel,ownerState:C,children:[L(d,"hours")&&o.jsx(I,{tabIndex:-1,variant:"h3",onClick:()=>i("hours"),selected:u==="hours",value:r?w(r):"--"}),L(d,["hours","minutes"])&&D,L(d,"minutes")&&o.jsx(I,{tabIndex:-1,variant:"h3",onClick:()=>i("minutes"),selected:u==="minutes",value:r?b.format(r,"minutes"):"--"}),L(d,["minutes","seconds"])&&D,L(d,"seconds")&&o.jsx(I,{variant:"h3",onClick:()=>i("seconds"),selected:u==="seconds",value:r?b.format(r,"seconds"):"--"})]}),y&&o.jsxs(fe,{className:k.ampmSelection,ownerState:C,children:[o.jsx(I,{disableRipple:!0,variant:"subtitle2",selected:g==="am",typographyClassName:k.ampmLabel,value:ee(b,"am"),onClick:h?void 0:()=>P("am"),disabled:f}),o.jsx(I,{disableRipple:!0,variant:"subtitle2",selected:g==="pm",typographyClassName:k.ampmLabel,value:ee(b,"pm"),onClick:h?void 0:()=>P("pm"),disabled:f})]})]}))}function K(t,s){var n,a,r,p,c;const u=W(),i=E({props:t,name:s}),d=(n=i.ampm)!=null?n:u.is12HourCycleInCurrentLocale(),f=x.useMemo(()=>{var b;return((b=i.localeText)==null?void 0:b.toolbarTitle)==null?i.localeText:l({},i.localeText,{timePickerToolbarTitle:i.localeText.toolbarTitle})},[i.localeText]),h=(a=i.slots)!=null?a:qe(i.components),m=(r=i.slotProps)!=null?r:i.componentsProps;return l({},i,{ampm:d,localeText:f},Ue({views:i.views,openTo:i.openTo,defaultViews:["hours","minutes"],defaultOpenTo:"hours"}),{disableFuture:(p=i.disableFuture)!=null?p:!1,disablePast:(c=i.disablePast)!=null?c:!1,slots:l({toolbar:fo},h),slotProps:l({},m,{toolbar:l({ampm:d,ampmInClock:i.ampmInClock},m==null?void 0:m.toolbar)})})}const G=x.forwardRef(function(s,n){var a,r,p,c,u,i,d;const f=Q(),h=W(),m=K(s,"MuiDesktopTimePicker"),b=(a=m.thresholdToRenderTimeInASingleColumn)!=null?a:24,v=l({hours:1,minutes:5,seconds:5},m.timeSteps),T=24*60/(v.hours*v.minutes)<=b,y=T?Je:oe,g=l({hours:y,minutes:y,seconds:y,meridiem:y},m.viewRenderers),P=(r=m.ampmInClock)!=null?r:!0,w=T?[]:["accept"],C=((p=g.hours)==null?void 0:p.name)===oe.name,k=m.ampm&&C?[...m.views,"meridiem"]:m.views,D=l({},m,{ampmInClock:P,timeSteps:v,viewRenderers:g,format:le(h,m),views:T?["hours"]:k,slots:l({field:de,openPickerIcon:He},m.slots),slotProps:l({},m.slotProps,{field:B=>{var S;return l({},ie((S=m.slotProps)==null?void 0:S.field,B),ce(m),{ref:n})},toolbar:l({hidden:!0,ampmInClock:P},(c=m.slotProps)==null?void 0:c.toolbar),actionBar:l({actions:w},(u=m.slotProps)==null?void 0:u.actionBar)})}),{renderPicker:O}=Ye({props:D,valueManager:A,valueType:"time",getOpenDialogAriaText:(i=(d=D.localeText)==null?void 0:d.openTimePickerDialogue)!=null?i:f.openTimePickerDialogue,validator:N});return O()});G.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,components:e.object,componentsProps:e.object,defaultValue:e.any,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:e.oneOfType([e.func,e.shape({current:e.object})]),label:e.node,localeText:e.object,maxTime:e.any,minTime:e.any,minutesStep:e.number,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,open:e.bool,openTo:e.oneOf(["hours","meridiem","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,selectedSections:e.oneOfType([e.oneOf(["all","day","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number,e.shape({endIndex:e.number.isRequired,startIndex:e.number.isRequired})]),shouldDisableClock:e.func,shouldDisableTime:e.func,skipDisabled:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),thresholdToRenderTimeInASingleColumn:e.number,timeSteps:e.shape({hours:e.number,minutes:e.number,seconds:e.number}),timezone:e.string,value:e.any,view:e.oneOf(["hours","meridiem","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,meridiem:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};const J=x.forwardRef(function(s,n){var a,r,p,c;const u=Q(),i=W(),d=K(s,"MuiMobileTimePicker"),f=l({hours:R,minutes:R,seconds:R},d.viewRenderers),h=(a=d.ampmInClock)!=null?a:!1,m=l({},d,{ampmInClock:h,viewRenderers:f,format:le(i,d),slots:l({field:de},d.slots),slotProps:l({},d.slotProps,{field:v=>{var T;return l({},ie((T=d.slotProps)==null?void 0:T.field,v),ce(d),{ref:n})},toolbar:l({hidden:!1,ampmInClock:h},(r=d.slotProps)==null?void 0:r.toolbar)})}),{renderPicker:b}=Qe({props:m,valueManager:A,valueType:"time",getOpenDialogAriaText:(p=(c=m.localeText)==null?void 0:c.openTimePickerDialogue)!=null?p:u.openTimePickerDialogue,validator:N});return b()});J.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,components:e.object,componentsProps:e.object,defaultValue:e.any,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:e.oneOfType([e.func,e.shape({current:e.object})]),label:e.node,localeText:e.object,maxTime:e.any,minTime:e.any,minutesStep:e.number,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,open:e.bool,openTo:e.oneOf(["hours","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,selectedSections:e.oneOfType([e.oneOf(["all","day","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number,e.shape({endIndex:e.number.isRequired,startIndex:e.number.isRequired})]),shouldDisableClock:e.func,shouldDisableTime:e.func,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.any,view:e.oneOf(["hours","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};const bo=["desktopModeMediaQuery"],U=x.forwardRef(function(s,n){const a=E({props:s,name:"MuiTimePicker"}),{desktopModeMediaQuery:r=Ke}=a,p=M(a,bo);return ke(r,{defaultMatches:!0})?o.jsx(G,l({ref:n},p)):o.jsx(J,l({ref:n},p))}),Y=x.forwardRef(function(s,n){var a,r,p;const c=K(s,"MuiStaticTimePicker"),u=(a=c.displayStaticWrapperAs)!=null?a:"mobile",i=(r=c.ampmInClock)!=null?r:u==="desktop",d=l({hours:R,minutes:R,seconds:R},c.viewRenderers),f=l({},c,{viewRenderers:d,displayStaticWrapperAs:u,ampmInClock:i,slotProps:l({},c.slotProps,{toolbar:l({hidden:u==="desktop",ampmInClock:i},(p=c.slotProps)==null?void 0:p.toolbar)})}),{renderPicker:h}=ue({props:f,valueManager:A,valueType:"time",validator:N,ref:n});return h()});Y.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,components:e.object,componentsProps:e.object,defaultValue:e.any,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),localeText:e.object,maxTime:e.any,minTime:e.any,minutesStep:e.number,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onViewChange:e.func,openTo:e.oneOf(["hours","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,shouldDisableClock:e.func,shouldDisableTime:e.func,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.any,view:e.oneOf(["hours","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};function ho(){const[t,s]=x.useState(new Date);return o.jsxs(re,{columns:{xs:1,md:2},spacing:3,children:[o.jsxs(j,{title:"Basic",children:[o.jsx(Re,{label:"For desktop",value:t,minDate:new Date("2017-01-01"),onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(Fe,{orientation:"portrait",label:"For mobile",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),o.jsx(j,{title:"Static mode",children:o.jsx(pe,{orientation:"landscape",openTo:"day",value:t,shouldDisableDate:eo,onChange:n=>{s(n)}})}),o.jsxs(j,{title:"Views playground",children:[o.jsx(F,{views:["year"],label:"Year only",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(F,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(F,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(F,{views:["day","month","year"],label:"Invert the order of views",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(F,{views:["day"],label:"Just date",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]})]})}function Po(){const[t,s]=x.useState(new Date);return o.jsxs(re,{columns:{xs:1,md:2},spacing:3,children:[o.jsxs(j,{title:"Basic",children:[o.jsx(U,{label:"12 hours",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(U,{ampm:!1,label:"24 hours",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),o.jsxs(j,{title:"Responsiveness",children:[o.jsx(J,{orientation:"portrait",label:"For mobile",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(G,{label:"For desktop",value:t,onChange:n=>{s(n)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(U,{value:t,onChange:s,slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),o.jsx(j,{title:"Static mode",children:o.jsxs(_,{spacing:3,children:[o.jsx(Y,{orientation:"portrait",value:t,onChange:n=>{s(n)}}),o.jsx(Y,{ampm:!0,orientation:"landscape",openTo:"minutes",value:t,onChange:n=>{s(n)}})]})})]})}function xo(){const[t,s]=x.useState(new Date),[n,a]=x.useState(new Date("2018-01-01T00:00:00.000Z"));return o.jsxs(_,{spacing:3,direction:{xs:"column",md:"row"},children:[o.jsx(j,{title:"Basic",children:o.jsx(se,{label:"DateTimePicker",value:t,onChange:s,slotProps:{textField:{fullWidth:!0}}})}),o.jsxs(j,{title:"Responsiveness",children:[o.jsx(Ze,{value:n,onChange:r=>{a(r)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(Xe,{value:n,onChange:r=>{a(r)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),o.jsx(se,{value:n,onChange:r=>{a(r)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]})]})}function To(){const t=te(new Date,new Date),s=te(new Date,null);return o.jsxs(o.Fragment,{children:[o.jsxs(_,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[o.jsx("div",{children:"This is the custom component from minimal."}),o.jsx("div",{children:"You can use more advanced components by MUI."}),o.jsxs(je,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:["https://mui.com/x/react-date-pickers/date-range-picker/"," "]})]}),o.jsxs(H,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[o.jsxs(j,{title:"Input",children:[o.jsx(Z,{variant:"contained",onClick:t.onOpen,children:"Click me!"}),o.jsxs(_,{sx:{typography:"body2",mt:3},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Start:"})," ",z(t.startDate)]}),o.jsxs("div",{children:[o.jsx("strong",{children:"End:"})," ",z(t.endDate)]})]}),o.jsx(ne,{open:t.open,startDate:t.startDate,endDate:t.endDate,onChangeStartDate:t.onChangeStartDate,onChangeEndDate:t.onChangeEndDate,onClose:t.onClose,error:t.error})]}),o.jsxs(j,{title:"Calendar",children:[o.jsx(Z,{variant:"contained",onClick:s.onOpen,children:"Click me!"}),o.jsxs(_,{sx:{typography:"body2",mt:3},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Start:"})," ",z(s.startDate)]}),o.jsxs("div",{children:[o.jsx("strong",{children:"End:"})," ",z(s.endDate)]})]}),o.jsx(ne,{variant:"calendar",open:s.open,startDate:s.startDate,endDate:s.endDate,onChangeStartDate:s.onChangeStartDate,onChangeEndDate:s.onChangeEndDate,onClose:s.onClose,error:s.error})]})]})]})}const ae=[{value:"date",label:"Date",component:o.jsx(ho,{})},{value:"datetime",label:"DateTime",component:o.jsx(xo,{})},{value:"time",label:"Time",component:o.jsx(Po,{})},{value:"range",label:"Range",component:o.jsx(To,{})}];function yo(){const[t,s]=x.useState("date"),n=x.useCallback((a,r)=>{s(r)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(H,{sx:{py:5,bgcolor:a=>a.palette.mode==="light"?"grey.200":"grey.800"},children:o.jsx(X,{children:o.jsx(Se,{heading:"Date / Time pickers",links:[{name:"Components",href:Ce.components},{name:"Date / Time pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})})}),o.jsxs(X,{sx:{my:10},children:[o.jsx(De,{value:t,onChange:n,children:ae.map(a=>o.jsx(we,{value:a.value,label:a.label},a.value))}),ae.map(a=>a.value===t&&o.jsx(H,{sx:{mt:5},children:a.component},a.value))]})]})}function Wo(){return o.jsxs(o.Fragment,{children:[o.jsx(Oe,{children:o.jsx("title",{children:" MUI: Picker"})}),o.jsx(yo,{})]})}export{Wo as default};
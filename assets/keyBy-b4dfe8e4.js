import{f9 as x,fa as k,fb as U,fc as z,fd as L,fe as m,ff as I,fg as Y,cO as p,bW as j,fh as B}from"./index-df7ae4b9.js";import{_ as C}from"./_baseEach-f18d351b.js";import{a as F}from"./_baseIteratee-74d7a9b2.js";var N=1e3*60,h=60*24,y=h*30,E=h*365;function H(r,a,e){var n,o,s;x(2,arguments);var u=Y(),f=(n=(o=e==null?void 0:e.locale)!==null&&o!==void 0?o:u.locale)!==null&&n!==void 0?n:k;if(!f.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var _=U(r,a);if(isNaN(_))throw new RangeError("Invalid time value");var l=z(L(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:_}),v,d;_>0?(v=m(a),d=m(r)):(v=m(r),d=m(a));var M=String((s=e==null?void 0:e.roundingMethod)!==null&&s!==void 0?s:"round"),i;if(M==="floor")i=Math.floor;else if(M==="ceil")i=Math.ceil;else if(M==="round")i=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var A=d.getTime()-v.getTime(),g=A/N,S=I(d)-I(v),c=(A-S)/N,b=e==null?void 0:e.unit,t;if(b?t=String(b):g<1?t="second":g<60?t="minute":g<h?t="hour":c<y?t="day":c<E?t="month":t="year",t==="second"){var w=i(A/1e3);return f.formatDistance("xSeconds",w,l)}else if(t==="minute"){var O=i(g);return f.formatDistance("xMinutes",O,l)}else if(t==="hour"){var T=i(g/60);return f.formatDistance("xHours",T,l)}else if(t==="day"){var R=i(c/h);return f.formatDistance("xDays",R,l)}else if(t==="month"){var D=i(c/y);return D===12&&b!=="month"?f.formatDistance("xYears",1,l):f.formatDistance("xMonths",D,l)}else if(t==="year"){var $=i(c/E);return f.formatDistance("xYears",$,l)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function fe(r,a){return x(1,arguments),H(r,Date.now(),a)}function V(r,a,e,n){for(var o=-1,s=r==null?0:r.length;++o<s;){var u=r[o];a(n,u,e(u),r)}return n}var q=V,W=C;function G(r,a,e,n){return W(r,function(o,s,u){a(n,o,e(o),u)}),n}var J=G,K=q,P=J,Q=F,X=p;function Z(r,a){return function(e,n){var o=X(e)?K:P,s=a?a():{};return o(e,r,Q(n),s)}}var ee=Z,re=B,ae=ee,te=ae(function(r,a,e){re(r,e,a)}),ne=te;const le=j(ne);export{fe as f,le as k};
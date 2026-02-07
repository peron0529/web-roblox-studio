(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yp={exports:{}},rl={},Mp={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),S_=Symbol.for("react.portal"),y_=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),w_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),Vf=Symbol.iterator;function P_(t){return t===null||typeof t!="object"?null:(t=Vf&&t[Vf]||t["@@iterator"],typeof t=="function"?t:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,wp={};function _s(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Ep}_s.prototype.isReactComponent={};_s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ap(){}Ap.prototype=_s.prototype;function Fc(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Ep}var Oc=Fc.prototype=new Ap;Oc.constructor=Fc;Tp(Oc,_s.prototype);Oc.isPureReactComponent=!0;var Wf=Array.isArray,Rp=Object.prototype.hasOwnProperty,zc={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rp.call(e,i)&&!Cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:zc.current}}function b_(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xf=/\/+/g;function Ll(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function ma(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case S_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ll(o,0):i,Wf(r)?(n="",t!=null&&(n=t.replace(Xf,"$&/")+"/"),ma(r,e,n,"",function(u){return u})):r!=null&&(Bc(r)&&(r=b_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ll(s,a);o+=ma(s,e,n,l,r)}else if(l=P_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ll(s,a++),o+=ma(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(t,e,n){if(t==null)return t;var i=[],r=0;return ma(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},ga={transition:null},N_={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:ga,ReactCurrentOwner:zc};function Pp(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Lo,forEach:function(t,e,n){Lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lo(t,function(){e++}),e},toArray:function(t){return Lo(t,function(e){return e})||[]},only:function(t){if(!Bc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=_s;He.Fragment=y_;He.Profiler=E_;He.PureComponent=Fc;He.StrictMode=M_;He.Suspense=R_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;He.act=Pp;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rp.call(e,l)&&!Cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:w_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T_,_context:t},t.Consumer=t};He.createElement=Lp;He.createFactory=function(t){var e=Lp.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:A_,render:t}};He.isValidElement=Bc;He.lazy=function(t){return{$$typeof:L_,_payload:{_status:-1,_result:t},_init:U_}};He.memo=function(t,e){return{$$typeof:C_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};He.unstable_act=Pp;He.useCallback=function(t,e){return jt.current.useCallback(t,e)};He.useContext=function(t){return jt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};He.useEffect=function(t,e){return jt.current.useEffect(t,e)};He.useId=function(){return jt.current.useId()};He.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return jt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};He.useRef=function(t){return jt.current.useRef(t)};He.useState=function(t){return jt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return jt.current.useTransition()};He.version="18.3.1";Mp.exports=He;var Zs=Mp.exports;const I_=x_(Zs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=Zs,O_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,k_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)B_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O_,type:t,key:s,ref:o,props:r,_owner:k_.current}}rl.Fragment=z_;rl.jsx=bp;rl.jsxs=bp;yp.exports=rl;var Or=yp.exports,Uu={},Dp={exports:{}},fn={},Up={exports:{}},Np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,N){var k=b.length;b.push(N);e:for(;0<k;){var q=k-1>>>1,K=b[q];if(0<r(K,N))b[q]=N,b[k]=K,k=q;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var N=b[0],k=b.pop();if(k!==N){b[0]=k;e:for(var q=0,K=b.length,V=K>>>1;q<V;){var $=2*(q+1)-1,ae=b[$],fe=$+1,pe=b[fe];if(0>r(ae,k))fe<K&&0>r(pe,ae)?(b[q]=pe,b[fe]=k,q=fe):(b[q]=ae,b[$]=k,q=$);else if(fe<K&&0>r(pe,k))b[q]=pe,b[fe]=k,q=fe;else break e}}return N}function r(b,N){var k=b.sortIndex-N.sortIndex;return k!==0?k:b.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var N=n(u);N!==null;){if(N.callback===null)i(u);else if(N.startTime<=b)i(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(u)}}function y(b){if(v=!1,g(b),!x)if(n(l)!==null)x=!0,X(C);else{var N=n(u);N!==null&&Y(y,N.startTime-b)}}function C(b,N){x=!1,v&&(v=!1,c(U),U=-1),m=!0;var k=h;try{for(g(N),d=n(l);d!==null&&(!(d.expirationTime>N)||b&&!W());){var q=d.callback;if(typeof q=="function"){d.callback=null,h=d.priorityLevel;var K=q(d.expirationTime<=N);N=t.unstable_now(),typeof K=="function"?d.callback=K:d===n(l)&&i(l),g(N)}else i(l);d=n(l)}if(d!==null)var V=!0;else{var $=n(u);$!==null&&Y(y,$.startTime-N),V=!1}return V}finally{d=null,h=k,m=!1}}var R=!1,A=null,U=-1,M=5,T=-1;function W(){return!(t.unstable_now()-T<M)}function j(){if(A!==null){var b=t.unstable_now();T=b;var N=!0;try{N=A(!0,b)}finally{N?ne():(R=!1,A=null)}}else R=!1}var ne;if(typeof _=="function")ne=function(){_(j)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,H=P.port2;P.port1.onmessage=j,ne=function(){H.postMessage(null)}}else ne=function(){p(j,0)};function X(b){A=b,R||(R=!0,ne())}function Y(b,N){U=p(function(){b(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var k=h;h=N;try{return b()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,N){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var k=h;h=b;try{return N()}finally{h=k}},t.unstable_scheduleCallback=function(b,N,k){var q=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?q+k:q):k=q,b){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,b={id:f++,callback:N,priorityLevel:b,startTime:k,expirationTime:K,sortIndex:-1},k>q?(b.sortIndex=k,e(u,b),n(l)===null&&b===n(u)&&(v?(c(U),U=-1):v=!0,Y(y,k-q))):(b.sortIndex=K,e(l,b),x||m||(x=!0,X(C))),b},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(b){var N=h;return function(){var k=h;h=N;try{return b.apply(this,arguments)}finally{h=k}}}})(Np);Up.exports=Np;var G_=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=Zs,cn=G_;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,Qs={};function _r(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Qs[t]=e,t=0;t<e.length;t++)Ip.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},Yf={};function X_(t){return Nu.call(Yf,t)?!0:Nu.call(jf,t)?!1:W_.test(t)?Yf[t]=!0:(jf[t]=!0,!1)}function j_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y_(t,e,n,i){if(e===null||typeof e>"u"||j_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kc,Hc);Pt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kc,Hc);Pt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kc,Hc);Pt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y_(e,n,r,i)&&(n=null),i||r===null?X_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),qf=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,Pl;function Os(t){if(Pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pl=e&&e[1]||""}return`
`+Pl+t}var bl=!1;function Dl(t,e){if(!t||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function q_(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case zr:return"Portal";case Iu:return"Profiler";case Vc:return"StrictMode";case Fu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Op:return(t.displayName||"Context")+".Consumer";case Fp:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xc:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Vc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K_(t){var e=Bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bo(t){t._valueTracker||(t._valueTracker=K_(t))}function kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $f(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hp(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function ku(t,e){Hp(t,e);var n=Oi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Qr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(zs(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function Gp(t,e){var n=Oi(e.value),i=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){Z_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function Xp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function jp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Q_=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(Q_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Jr=null,es=null;function Jf(t){if(t=yo(t)){if(typeof Yu!="function")throw Error(J(280));var e=t.stateNode;e&&(e=ul(e),Yu(t.stateNode,t.type,e))}}function Yp(t){Jr?es?es.push(t):es=[t]:Jr=t}function qp(){if(Jr){var t=Jr,e=es;if(es=Jr=null,Jf(t),e)for(t=0;t<e.length;t++)Jf(e[t])}}function $p(t,e){return t(e)}function Kp(){}var Ul=!1;function Zp(t,e,n){if(Ul)return t(e,n);Ul=!0;try{return $p(t,e,n)}finally{Ul=!1,(Jr!==null||es!==null)&&(Kp(),qp())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var i=ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var qu=!1;if(oi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{qu=!1}function J_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Gs=!1,La=null,Pa=!1,$u=null,ev={onError:function(t){Gs=!0,La=t}};function tv(t,e,n,i,r,s,o,a,l){Gs=!1,La=null,J_.apply(ev,arguments)}function nv(t,e,n,i,r,s,o,a,l){if(tv.apply(this,arguments),Gs){if(Gs){var u=La;Gs=!1,La=null}else throw Error(J(198));Pa||(Pa=!0,$u=u)}}function vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ed(t){if(vr(t)!==t)throw Error(J(188))}function iv(t){var e=t.alternate;if(!e){if(e=vr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ed(r),t;if(s===i)return ed(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Jp(t){return t=iv(t),t!==null?em(t):null}function em(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=em(t);if(e!==null)return e;t=t.sibling}return null}var tm=cn.unstable_scheduleCallback,td=cn.unstable_cancelCallback,rv=cn.unstable_shouldYield,sv=cn.unstable_requestPaint,ht=cn.unstable_now,ov=cn.unstable_getCurrentPriorityLevel,Yc=cn.unstable_ImmediatePriority,nm=cn.unstable_UserBlockingPriority,ba=cn.unstable_NormalPriority,av=cn.unstable_LowPriority,im=cn.unstable_IdlePriority,sl=null,Vn=null;function lv(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:fv,uv=Math.log,cv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(uv(t)/cv|0)|0}var Uo=64,No=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Da(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bs(a):(s&=o,s!==0&&(i=Bs(s)))}else o=n&~r,o!==0?i=Bs(o):s!==0&&(i=Bs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Nn(e),r=1<<n,i|=t[n],e&=~r;return i}function dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=dv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rm(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function Nl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function pv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Nn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Nn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function sm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var om,$c,am,lm,um,Zu=!1,Io=[],Ai=null,Ri=null,Ci=null,to=new Map,no=new Map,Si=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(t,e){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function As(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&$c(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gv(t,e,n,i,r){switch(e){case"focusin":return Ai=As(Ai,t,e,n,i,r),!0;case"dragenter":return Ri=As(Ri,t,e,n,i,r),!0;case"mouseover":return Ci=As(Ci,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return to.set(s,As(to.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,no.set(s,As(no.get(s)||null,t,e,n,i,r)),!0}return!1}function cm(t){var e=tr(t.target);if(e!==null){var n=vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qp(n),e!==null){t.blockedOn=e,um(t.priority,function(){am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ju=i,n.target.dispatchEvent(i),ju=null}else return e=yo(n),e!==null&&$c(e),t.blockedOn=n,!1;e.shift()}return!0}function id(t,e,n){_a(t)&&n.delete(e)}function _v(){Zu=!1,Ai!==null&&_a(Ai)&&(Ai=null),Ri!==null&&_a(Ri)&&(Ri=null),Ci!==null&&_a(Ci)&&(Ci=null),to.forEach(id),no.forEach(id)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,_v)))}function io(t){function e(r){return Rs(r,t)}if(0<Io.length){Rs(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ai!==null&&Rs(Ai,t),Ri!==null&&Rs(Ri,t),Ci!==null&&Rs(Ci,t),to.forEach(e),no.forEach(e),n=0;n<Si.length;n++)i=Si[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&Si.shift()}var ts=fi.ReactCurrentBatchConfig,Ua=!0;function vv(t,e,n,i){var r=Ye,s=ts.transition;ts.transition=null;try{Ye=1,Kc(t,e,n,i)}finally{Ye=r,ts.transition=s}}function xv(t,e,n,i){var r=Ye,s=ts.transition;ts.transition=null;try{Ye=4,Kc(t,e,n,i)}finally{Ye=r,ts.transition=s}}function Kc(t,e,n,i){if(Ua){var r=Qu(t,e,n,i);if(r===null)Wl(t,e,i,Na,n),nd(t,i);else if(gv(r,t,e,n,i))i.stopPropagation();else if(nd(t,i),e&4&&-1<mv.indexOf(t)){for(;r!==null;){var s=yo(r);if(s!==null&&om(s),s=Qu(t,e,n,i),s===null&&Wl(t,e,i,Na,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wl(t,e,i,null,n)}}var Na=null;function Qu(t,e,n,i){if(Na=null,t=jc(i),t=tr(t),t!==null)if(e=vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Na=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ov()){case Yc:return 1;case nm:return 4;case ba:case av:return 16;case im:return 536870912;default:return 16}default:return 16}}var Mi=null,Zc=null,va=null;function dm(){if(va)return va;var t,e=Zc,n=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return va=r.slice(t,1<i?1-i:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function rd(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:rd,this.isPropagationStopped=rd,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=dn(vs),So=lt({},vs,{view:0,detail:0}),Sv=dn(So),Il,Fl,Cs,ol=lt({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Il=t.screenX-Cs.screenX,Fl=t.screenY-Cs.screenY):Fl=Il=0,Cs=t),Il)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),sd=dn(ol),yv=lt({},ol,{dataTransfer:0}),Mv=dn(yv),Ev=lt({},So,{relatedTarget:0}),Ol=dn(Ev),Tv=lt({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=dn(Tv),Av=lt({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=dn(Av),Cv=lt({},vs,{data:0}),od=dn(Cv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bv[t])?!!e[t]:!1}function Jc(){return Dv}var Uv=lt({},So,{key:function(t){if(t.key){var e=Lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=dn(Uv),Iv=lt({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=dn(Iv),Fv=lt({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Ov=dn(Fv),zv=lt({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=dn(zv),kv=lt({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=dn(kv),Gv=[9,13,27,32],ef=oi&&"CompositionEvent"in window,Vs=null;oi&&"documentMode"in document&&(Vs=document.documentMode);var Vv=oi&&"TextEvent"in window&&!Vs,hm=oi&&(!ef||Vs&&8<Vs&&11>=Vs),ld=" ",ud=!1;function pm(t,e){switch(t){case"keyup":return Gv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function Wv(t,e){switch(t){case"compositionend":return mm(e);case"keypress":return e.which!==32?null:(ud=!0,ld);case"textInput":return t=e.data,t===ld&&ud?null:t;default:return null}}function Xv(t,e){if(kr)return t==="compositionend"||!ef&&pm(t,e)?(t=dm(),va=Zc=Mi=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hm&&e.locale!=="ko"?null:e.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jv[t.type]:e==="textarea"}function gm(t,e,n,i){Yp(i),e=Ia(e,"onChange"),0<e.length&&(n=new Qc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ws=null,ro=null;function Yv(t){Rm(t,0)}function al(t){var e=Vr(t);if(kp(e))return t}function qv(t,e){if(t==="change")return e}var _m=!1;if(oi){var zl;if(oi){var Bl="oninput"in document;if(!Bl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Bl=typeof fd.oninput=="function"}zl=Bl}else zl=!1;_m=zl&&(!document.documentMode||9<document.documentMode)}function dd(){Ws&&(Ws.detachEvent("onpropertychange",vm),ro=Ws=null)}function vm(t){if(t.propertyName==="value"&&al(ro)){var e=[];gm(e,ro,t,jc(t)),Zp(Yv,e)}}function $v(t,e,n){t==="focusin"?(dd(),Ws=e,ro=n,Ws.attachEvent("onpropertychange",vm)):t==="focusout"&&dd()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(ro)}function Zv(t,e){if(t==="click")return al(e)}function Qv(t,e){if(t==="input"||t==="change")return al(e)}function Jv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:Jv;function so(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pd(t,e){var n=hd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hd(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e0(t){var e=Sm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pd(n,s);var o=pd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t0=oi&&"documentMode"in document&&11>=document.documentMode,Hr=null,Ju=null,Xs=null,ec=!1;function md(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ec||Hr==null||Hr!==Ca(i)||(i=Hr,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xs&&so(Xs,i)||(Xs=i,i=Ia(Ju,"onSelect"),0<i.length&&(e=new Qc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Hr)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},kl={},ym={};oi&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ll(t){if(kl[t])return kl[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ym)return kl[t]=e[n];return t}var Mm=ll("animationend"),Em=ll("animationiteration"),Tm=ll("animationstart"),wm=ll("transitionend"),Am=new Map,gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){Am.set(t,e),_r(e,[t])}for(var Hl=0;Hl<gd.length;Hl++){var Gl=gd[Hl],n0=Gl.toLowerCase(),i0=Gl[0].toUpperCase()+Gl.slice(1);ki(n0,"on"+i0)}ki(Mm,"onAnimationEnd");ki(Em,"onAnimationIteration");ki(Tm,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(wm,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function _d(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nv(i,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_d(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_d(r,a,u),s=l}}}if(Pa)throw t=$u,Pa=!1,$u=null,t}function et(t,e){var n=e[sc];n===void 0&&(n=e[sc]=new Set);var i=t+"__bubble";n.has(i)||(Cm(e,t,2,!1),n.add(i))}function Vl(t,e,n){var i=0;e&&(i|=4),Cm(n,t,i,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[zo]){t[zo]=!0,Ip.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||Vl(n,!1,t),Vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,Vl("selectionchange",!1,e))}}function Cm(t,e,n,i){switch(fm(e)){case 1:var r=vv;break;case 4:r=xv;break;default:r=Kc}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zp(function(){var u=s,f=jc(n),d=[];e:{var h=Am.get(t);if(h!==void 0){var m=Qc,x=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":m=Nv;break;case"focusin":x="focus",m=Ol;break;case"focusout":x="blur",m=Ol;break;case"beforeblur":case"afterblur":m=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ov;break;case Mm:case Em:case Tm:m=wv;break;case wm:m=Bv;break;case"scroll":m=Sv;break;case"wheel":m=Hv;break;case"copy":case"cut":case"paste":m=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ad}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,c!==null&&(y=eo(_,c),y!=null&&v.push(ao(_,y,g)))),p)break;_=_.return}0<v.length&&(h=new m(h,x,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==ju&&(x=n.relatedTarget||n.fromElement)&&(tr(x)||x[ai]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?tr(x):null,x!==null&&(p=vr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=sd,y="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=ad,y="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:Vr(m),g=x==null?h:Vr(x),h=new v(y,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,y=null,tr(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=g,v.relatedTarget=p,y=v),p=y,m&&x)t:{for(v=m,c=x,_=0,g=v;g;g=Sr(g))_++;for(g=0,y=c;y;y=Sr(y))g++;for(;0<_-g;)v=Sr(v),_--;for(;0<g-_;)c=Sr(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=Sr(v),c=Sr(c)}v=null}else v=null;m!==null&&vd(d,h,m,v,!1),x!==null&&p!==null&&vd(d,p,x,v,!0)}}e:{if(h=u?Vr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=qv;else if(cd(h))if(_m)C=Qv;else{C=Kv;var R=$v}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Zv);if(C&&(C=C(t,u))){gm(d,C,n,f);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Hu(h,"number",h.value)}switch(R=u?Vr(u):window,t){case"focusin":(cd(R)||R.contentEditable==="true")&&(Hr=R,Ju=u,Xs=null);break;case"focusout":Xs=Ju=Hr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,md(d,n,f);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":md(d,n,f)}var A;if(ef)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else kr?pm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(hm&&n.locale!=="ko"&&(kr||U!=="onCompositionStart"?U==="onCompositionEnd"&&kr&&(A=dm()):(Mi=f,Zc="value"in Mi?Mi.value:Mi.textContent,kr=!0)),R=Ia(u,U),0<R.length&&(U=new od(U,t,null,n,f),d.push({event:U,listeners:R}),A?U.data=A:(A=mm(n),A!==null&&(U.data=A)))),(A=Vv?Wv(t,n):Xv(t,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(f=new od("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}Rm(d,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=eo(t,n),s!=null&&i.unshift(ao(t,s,r)),s=eo(t,e),s!=null&&i.push(ao(t,s,r))),t=t.return}return i}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):r||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var s0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function xd(t){return(typeof t=="string"?t:""+t).replace(s0,`
`).replace(o0,"")}function Bo(t,e,n){if(e=xd(e),xd(t)!==e&&n)throw Error(J(425))}function Fa(){}var tc=null,nc=null;function ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(t){return Sd.resolve(null).then(t).catch(u0)}:rc;function u0(t){setTimeout(function(){throw t})}function Xl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);io(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Hn="__reactFiber$"+xs,lo="__reactProps$"+xs,ai="__reactContainer$"+xs,sc="__reactEvents$"+xs,c0="__reactListeners$"+xs,f0="__reactHandles$"+xs;function tr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yd(t);t!==null;){if(n=t[Hn])return n;t=yd(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Hn]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function ul(t){return t[lo]||null}var oc=[],Wr=-1;function Hi(t){return{current:t}}function nt(t){0>Wr||(t.current=oc[Wr],oc[Wr]=null,Wr--)}function Je(t,e){Wr++,oc[Wr]=t.current,t.current=e}var zi={},zt=Hi(zi),Qt=Hi(!1),cr=zi;function as(t,e){var n=t.type.contextTypes;if(!n)return zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function Oa(){nt(Qt),nt(zt)}function Md(t,e,n){if(zt.current!==zi)throw Error(J(168));Je(zt,e),Je(Qt,n)}function Lm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,$_(t)||"Unknown",r));return lt({},n,i)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,cr=zt.current,Je(zt,t),Je(Qt,Qt.current),!0}function Ed(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Lm(t,e,cr),i.__reactInternalMemoizedMergedChildContext=t,nt(Qt),nt(zt),Je(zt,t)):nt(Qt),Je(Qt,n)}var ei=null,cl=!1,jl=!1;function Pm(t){ei===null?ei=[t]:ei.push(t)}function d0(t){cl=!0,Pm(t)}function Gi(){if(!jl&&ei!==null){jl=!0;var t=0,e=Ye;try{var n=ei;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,cl=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),tm(Yc,Gi),r}finally{Ye=e,jl=!1}}return null}var Xr=[],jr=0,Ba=null,ka=0,mn=[],gn=0,fr=null,ni=1,ii="";function $i(t,e){Xr[jr++]=ka,Xr[jr++]=Ba,Ba=t,ka=e}function bm(t,e,n){mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=fr,fr=t;var i=ni;t=ii;var r=32-Nn(i)-1;i&=~(1<<r),n+=1;var s=32-Nn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-Nn(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function nf(t){t.return!==null&&($i(t,1),bm(t,1,0))}function rf(t){for(;t===Ba;)Ba=Xr[--jr],Xr[jr]=null,ka=Xr[--jr],Xr[jr]=null;for(;t===fr;)fr=mn[--gn],mn[gn]=null,ii=mn[--gn],mn[gn]=null,ni=mn[--gn],mn[gn]=null}var ln=null,an=null,it=!1,Pn=null;function Dm(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Td(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lc(t){if(it){var e=an;if(e){var n=e;if(!Td(t,e)){if(ac(t))throw Error(J(418));e=Li(n.nextSibling);var i=ln;e&&Td(t,e)?Dm(i,n):(t.flags=t.flags&-4097|2,it=!1,ln=t)}}else{if(ac(t))throw Error(J(418));t.flags=t.flags&-4097|2,it=!1,ln=t}}}function wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function ko(t){if(t!==ln)return!1;if(!it)return wd(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ic(t.type,t.memoizedProps)),e&&(e=an)){if(ac(t))throw Um(),Error(J(418));for(;e;)Dm(t,e),e=Li(e.nextSibling)}if(wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?Li(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=an;t;)t=Li(t.nextSibling)}function ls(){an=ln=null,it=!1}function sf(t){Pn===null?Pn=[t]:Pn.push(t)}var h0=fi.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Ho(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ad(t){var e=t._init;return e(t._payload)}function Nm(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ui(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,y){return _===null||_.tag!==6?(_=Jl(g,c.mode,y),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,y){var C=g.type;return C===Br?f(c,_,g.props.children,y,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vi&&Ad(C)===_.type)?(y=r(_,g.props),y.ref=Ls(c,_,g),y.return=c,y):(y=Aa(g.type,g.key,g.props,null,c.mode,y),y.ref=Ls(c,_,g),y.return=c,y)}function u(c,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=eu(g,c.mode,y),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,y,C){return _===null||_.tag!==7?(_=sr(g,c.mode,y,C),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jl(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Po:return g=Aa(_.type,_.key,_.props,null,c.mode,g),g.ref=Ls(c,null,_),g.return=c,g;case zr:return _=eu(_,c.mode,g),_.return=c,_;case vi:var y=_._init;return d(c,y(_._payload),g)}if(zs(_)||Ts(_))return _=sr(_,c.mode,g,null),_.return=c,_;Ho(c,_)}return null}function h(c,_,g,y){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(c,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return g.key===C?l(c,_,g,y):null;case zr:return g.key===C?u(c,_,g,y):null;case vi:return C=g._init,h(c,_,C(g._payload),y)}if(zs(g)||Ts(g))return C!==null?null:f(c,_,g,y,null);Ho(c,g)}return null}function m(c,_,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(g)||null,a(_,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return c=c.get(y.key===null?g:y.key)||null,l(_,c,y,C);case zr:return c=c.get(y.key===null?g:y.key)||null,u(_,c,y,C);case vi:var R=y._init;return m(c,_,g,R(y._payload),C)}if(zs(y)||Ts(y))return c=c.get(g)||null,f(_,c,y,C,null);Ho(_,y)}return null}function x(c,_,g,y){for(var C=null,R=null,A=_,U=_=0,M=null;A!==null&&U<g.length;U++){A.index>U?(M=A,A=null):M=A.sibling;var T=h(c,A,g[U],y);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(c,A),_=s(T,_,U),R===null?C=T:R.sibling=T,R=T,A=M}if(U===g.length)return n(c,A),it&&$i(c,U),C;if(A===null){for(;U<g.length;U++)A=d(c,g[U],y),A!==null&&(_=s(A,_,U),R===null?C=A:R.sibling=A,R=A);return it&&$i(c,U),C}for(A=i(c,A);U<g.length;U++)M=m(A,c,U,g[U],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?U:M.key),_=s(M,_,U),R===null?C=M:R.sibling=M,R=M);return t&&A.forEach(function(W){return e(c,W)}),it&&$i(c,U),C}function v(c,_,g,y){var C=Ts(g);if(typeof C!="function")throw Error(J(150));if(g=C.call(g),g==null)throw Error(J(151));for(var R=C=null,A=_,U=_=0,M=null,T=g.next();A!==null&&!T.done;U++,T=g.next()){A.index>U?(M=A,A=null):M=A.sibling;var W=h(c,A,T.value,y);if(W===null){A===null&&(A=M);break}t&&A&&W.alternate===null&&e(c,A),_=s(W,_,U),R===null?C=W:R.sibling=W,R=W,A=M}if(T.done)return n(c,A),it&&$i(c,U),C;if(A===null){for(;!T.done;U++,T=g.next())T=d(c,T.value,y),T!==null&&(_=s(T,_,U),R===null?C=T:R.sibling=T,R=T);return it&&$i(c,U),C}for(A=i(c,A);!T.done;U++,T=g.next())T=m(A,c,U,T.value,y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?U:T.key),_=s(T,_,U),R===null?C=T:R.sibling=T,R=T);return t&&A.forEach(function(j){return e(c,j)}),it&&$i(c,U),C}function p(c,_,g,y){if(typeof g=="object"&&g!==null&&g.type===Br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:e:{for(var C=g.key,R=_;R!==null;){if(R.key===C){if(C=g.type,C===Br){if(R.tag===7){n(c,R.sibling),_=r(R,g.props.children),_.return=c,c=_;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vi&&Ad(C)===R.type){n(c,R.sibling),_=r(R,g.props),_.ref=Ls(c,R,g),_.return=c,c=_;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===Br?(_=sr(g.props.children,c.mode,y,g.key),_.return=c,c=_):(y=Aa(g.type,g.key,g.props,null,c.mode,y),y.ref=Ls(c,_,g),y.return=c,c=y)}return o(c);case zr:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=eu(g,c.mode,y),_.return=c,c=_}return o(c);case vi:return R=g._init,p(c,_,R(g._payload),y)}if(zs(g))return x(c,_,g,y);if(Ts(g))return v(c,_,g,y);Ho(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=Jl(g,c.mode,y),_.return=c,c=_),o(c)):n(c,_)}return p}var us=Nm(!0),Im=Nm(!1),Ha=Hi(null),Ga=null,Yr=null,of=null;function af(){of=Yr=Ga=null}function lf(t){var e=Ha.current;nt(Ha),t._currentValue=e}function uc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){Ga=t,of=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(Ga===null)throw Error(J(308));Yr=t,Ga.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var nr=null;function uf(t){nr===null?nr=[t]:nr.push(t)}function Fm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,li(t,i)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Om(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,li(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,li(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qc(t,n)}}function Rd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,i){var r=t.updateQueue;xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(h=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=lt({},d,h);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=d}}function Cd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Mo={},Wn=Hi(Mo),uo=Hi(Mo),co=Hi(Mo);function ir(t){if(t===Mo)throw Error(J(174));return t}function ff(t,e){switch(Je(co,e),Je(uo,t),Je(Wn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}nt(Wn),Je(Wn,e)}function cs(){nt(Wn),nt(uo),nt(co)}function zm(t){ir(co.current);var e=ir(Wn.current),n=Vu(e,t.type);e!==n&&(Je(uo,t),Je(Wn,n))}function df(t){uo.current===t&&(nt(Wn),nt(uo))}var ot=Hi(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yl=[];function hf(){for(var t=0;t<Yl.length;t++)Yl[t]._workInProgressVersionPrimary=null;Yl.length=0}var ya=fi.ReactCurrentDispatcher,ql=fi.ReactCurrentBatchConfig,dr=0,at=null,gt=null,Tt=null,Xa=!1,js=!1,fo=0,p0=0;function Dt(){throw Error(J(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(dr=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?v0:x0,t=n(i,r),js){s=0;do{if(js=!1,fo=0,25<=s)throw Error(J(301));s+=1,Tt=gt=null,e.updateQueue=null,ya.current=S0,t=n(i,r)}while(js)}if(ya.current=ja,e=gt!==null&&gt.next!==null,dr=0,Tt=gt=at=null,Xa=!1,e)throw Error(J(300));return t}function gf(){var t=fo!==0;return fo=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?at.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function En(){if(gt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Tt===null?at.memoizedState:Tt.next;if(e!==null)Tt=e,gt=t;else{if(t===null)throw Error(J(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?at.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ho(t,e){return typeof e=="function"?e(t):e}function $l(t){var e=En(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((dr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,at.lanes|=f,hr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,at.lanes|=s,hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kl(t){var e=En(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bm(){}function km(t,e){var n=at,i=En(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,_f(Vm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,po(9,Gm.bind(null,n,i,r,e),void 0,null),At===null)throw Error(J(349));dr&30||Hm(n,e,r)}return r}function Hm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gm(t,e,n,i){e.value=n,e.getSnapshot=i,Wm(e)&&Xm(t)}function Vm(t,e,n){return n(function(){Wm(e)&&Xm(t)})}function Wm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Xm(t){var e=li(t,1);e!==null&&In(e,t,1,-1)}function Ld(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=_0.bind(null,at,t),[e.memoizedState,t]}function po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jm(){return En().memoizedState}function Ma(t,e,n,i){var r=Bn();at.flags|=t,r.memoizedState=po(1|e,n,void 0,i===void 0?null:i)}function fl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=po(e,n,s,i);return}}at.flags|=t,r.memoizedState=po(1|e,n,s,i)}function Pd(t,e){return Ma(8390656,8,t,e)}function _f(t,e){return fl(2048,8,t,e)}function Ym(t,e){return fl(4,2,t,e)}function qm(t,e){return fl(4,4,t,e)}function $m(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Km(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,$m.bind(null,e,t),n)}function vf(){}function Zm(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qm(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jm(t,e,n){return dr&21?(Fn(n,e)||(n=rm(),at.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function m0(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=ql.transition;ql.transition={};try{t(!1),e()}finally{Ye=n,ql.transition=i}}function eg(){return En().memoizedState}function g0(t,e,n){var i=Di(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tg(t))ng(e,n);else if(n=Fm(t,e,n,i),n!==null){var r=Xt();In(n,t,i,r),ig(n,e,i)}}function _0(t,e,n){var i=Di(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tg(t))ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fm(t,e,r,i),n!==null&&(r=Xt(),In(n,t,i,r),ig(n,e,i))}}function tg(t){var e=t.alternate;return t===at||e!==null&&e===at}function ng(t,e){js=Xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ig(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qc(t,n)}}var ja={readContext:Mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},v0={readContext:Mn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Pd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ma(4194308,4,$m.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ma(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=g0.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Ld,useDebugValue:vf,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Ld(!1),e=t[0];return t=m0.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=at,r=Bn();if(it){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),At===null)throw Error(J(349));dr&30||Hm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pd(Vm.bind(null,i,s,t),[t]),i.flags|=2048,po(9,Gm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=At.identifierPrefix;if(it){var n=ii,i=ni;n=(i&~(1<<32-Nn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},x0={readContext:Mn,useCallback:Zm,useContext:Mn,useEffect:_f,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:$l,useRef:jm,useState:function(){return $l(ho)},useDebugValue:vf,useDeferredValue:function(t){var e=En();return Jm(e,gt.memoizedState,t)},useTransition:function(){var t=$l(ho)[0],e=En().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1},S0={readContext:Mn,useCallback:Zm,useContext:Mn,useEffect:_f,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:Kl,useRef:jm,useState:function(){return Kl(ho)},useDebugValue:vf,useDeferredValue:function(t){var e=En();return gt===null?e.memoizedState=t:Jm(e,gt.memoizedState,t)},useTransition:function(){var t=Kl(ho)[0],e=En().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Di(t),s=si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(In(e,t,r,i),Sa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Di(t),s=si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(In(e,t,r,i),Sa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Di(t),r=si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pi(t,r,i),e!==null&&(In(e,t,i,n),Sa(e,t,i))}};function bd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,i)||!so(r,s):!0}function rg(t,e,n){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Jt(e)?cr:zt.current,i=e.contextTypes,s=(i=i!=null)?as(t,r):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function fc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Jt(e)?cr:zt.current,r.context=as(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dl.enqueueReplaceState(r,r.state,null),Va(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",i=e;do n+=q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function sg(t,e,n){n=si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){qa||(qa=!0,Mc=i),dc(t,e)},n}function og(t,e,n){n=si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dc(t,e),typeof i!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ud(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new y0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=I0.bind(null,t,e,n),e.then(t,t))}function Nd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Id(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=si(-1,1),e.tag=2,Pi(n,e,1))),n.lanes|=1),t)}var M0=fi.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,i){e.child=t===null?Im(e,null,n,i):us(e,t.child,n,i)}function Fd(t,e,n,i,r){n=n.render;var s=e.ref;return ns(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(it&&n&&nf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Od(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ag(t,e,s,i,r)):(t=Aa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,i)&&t.ref===e.ref)return ui(t,e,r)}return e.flags|=1,t=Ui(s,i),t.ref=e.ref,t.return=e,e.child=t}function ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(so(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,ui(t,e,r)}return hc(t,e,n,i,r)}function lg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je($r,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je($r,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je($r,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je($r,on),on|=i;return Vt(t,e,r,n),e.child}function ug(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hc(t,e,n,i,r){var s=Jt(n)?cr:zt.current;return s=as(e,s),ns(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(it&&i&&nf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function zd(t,e,n,i,r){if(Jt(n)){var s=!0;za(e)}else s=!1;if(ns(e,r),e.stateNode===null)Ea(t,e),rg(e,n,i),fc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=Jt(n)?cr:zt.current,u=as(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dd(e,o,i,u),xi=!1;var h=e.memoizedState;o.state=h,Va(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Qt.current||xi?(typeof f=="function"&&(cc(e,n,f,i),l=e.memoizedState),(a=xi||bd(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Om(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Cn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=Jt(n)?cr:zt.current,l=as(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dd(e,o,i,l),xi=!1,h=e.memoizedState,o.state=h,Va(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Qt.current||xi?(typeof m=="function"&&(cc(e,n,m,i),x=e.memoizedState),(u=xi||bd(e,n,u,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return pc(t,e,n,i,s,r)}function pc(t,e,n,i,r,s){ug(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ed(e,n,!1),ui(t,e,s);i=e.stateNode,M0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Ed(e,n,!0),e.child}function cg(t){var e=t.stateNode;e.pendingContext?Md(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Md(t,e.context,!1),ff(t,e.containerInfo)}function Bd(t,e,n,i,r){return ls(),sf(r),e.flags|=256,Vt(t,e,n,i),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fg(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(ot,r&1),t===null)return lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,i,0,null),t=sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gc(n),e.memoizedState=mc,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return E0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ui(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ui(a,s):(s=sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mc,i}return s=t.child,t=s.sibling,i=Ui(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,i){return i!==null&&sf(i),us(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zl(Error(J(422))),Go(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ml({mode:"visible",children:i.children},r,0,null),s=sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=gc(o),e.memoizedState=mc,s);if(!(e.mode&1))return Go(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Zl(s,i,void 0),Go(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,li(t,r),In(i,t,r,-1))}return wf(),i=Zl(Error(J(421))),Go(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=F0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=Li(r.nextSibling),ln=e,it=!0,Pn=null,t!==null&&(mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=fr,ni=t.id,ii=t.overflow,fr=e),e=xf(e,i.children),e.flags|=4096,e)}function kd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uc(t.return,e,n)}function Ql(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,n,e);else if(t.tag===19)kd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ql(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ql(e,!0,n,null,s);break;case"together":Ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T0(t,e,n){switch(e.tag){case 3:cg(e),ls();break;case 5:zm(e);break;case 1:Jt(e.type)&&za(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(Ha,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?fg(t,e,n):(Je(ot,ot.current&1),t=ui(t,e,n),t!==null?t.sibling:null);Je(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,lg(t,e,n)}return ui(t,e,n)}var hg,_c,pg,mg;hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};pg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ir(Wn.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fa)}Wu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ps(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function w0(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Jt(e.type)&&Oa(),Ut(e),null;case 3:return i=e.stateNode,cs(),nt(Qt),nt(zt),hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(wc(Pn),Pn=null))),_c(t,e),Ut(e),null;case 5:df(e);var r=ir(co.current);if(n=e.type,t!==null&&e.stateNode!=null)pg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Ut(e),null}if(t=ir(Wn.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[lo]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<ks.length;r++)et(ks[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":$f(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Zf(i,s),et("invalid",i)}Wu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":bo(i),Kf(i,s,!0);break;case"textarea":bo(i),Qf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[lo]=i,hg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ks.length;r++)et(ks[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":$f(t,i),r=Bu(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),et("invalid",t);break;case"textarea":Zf(t,i),r=Gu(t,i),et("invalid",t);break;default:r=i}Wu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&Gc(t,s,l,o))}switch(n){case"input":bo(t),Kf(t,i,!1);break;case"textarea":bo(t),Qf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Oi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)mg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=ir(co.current),ir(Wn.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&an!==null&&e.mode&1&&!(e.flags&128))Um(),ls(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Hn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Pn!==null&&(wc(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?_t===0&&(_t=3):wf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return cs(),_c(t,e),t===null&&oo(e.stateNode.containerInfo),Ut(e),null;case 10:return lf(e.type._context),Ut(e),null;case 17:return Jt(e.type)&&Oa(),Ut(e),null;case 19:if(nt(ot),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ps(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wa(t),o!==null){for(e.flags|=128,Ps(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&ht()>ds&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Ut(e),null}else 2*ht()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,n=ot.current,Je(ot,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Tf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function A0(t,e){switch(rf(e),e.tag){case 1:return Jt(e.type)&&Oa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),nt(Qt),nt(zt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return cs(),null;case 10:return lf(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var Vo=!1,Ft=!1,R0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function vc(t,e,n){try{n()}catch(i){ft(t,e,i)}}var Hd=!1;function C0(t,e){if(tc=Ua,t=Sm(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:t,selectionRange:n},Ua=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Cn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){ft(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return x=Hd,Hd=!1,x}function Ys(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vc(e,n,s)}r=r.next}while(r!==i)}}function hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gg(t){var e=t.alternate;e!==null&&(t.alternate=null,gg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[lo],delete e[sc],delete e[c0],delete e[f0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _g(t){return t.tag===5||t.tag===3||t.tag===4}function Gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fa));else if(i!==4&&(t=t.child,t!==null))for(Sc(t,e,n),t=t.sibling;t!==null;)Sc(t,e,n),t=t.sibling}function yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}var Rt=null,Ln=!1;function di(t,e,n){for(n=n.child;n!==null;)vg(t,e,n),n=n.sibling}function vg(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ft||qr(n,e);case 6:var i=Rt,r=Ln;Rt=null,di(t,e,n),Rt=i,Ln=r,Rt!==null&&(Ln?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Ln?(t=Rt,n=n.stateNode,t.nodeType===8?Xl(t.parentNode,n):t.nodeType===1&&Xl(t,n),io(t)):Xl(Rt,n.stateNode));break;case 4:i=Rt,r=Ln,Rt=n.stateNode.containerInfo,Ln=!0,di(t,e,n),Rt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vc(n,e,o),r=r.next}while(r!==i)}di(t,e,n);break;case 1:if(!Ft&&(qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}di(t,e,n);break;case 21:di(t,e,n);break;case 22:n.mode&1?(Ft=(i=Ft)||n.memoizedState!==null,di(t,e,n),Ft=i):di(t,e,n);break;default:di(t,e,n)}}function Vd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new R0),e.forEach(function(i){var r=O0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Ln=!1;break e;case 3:Rt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Rt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Rt===null)throw Error(J(160));vg(s,o,r),Rt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xg(e,t),e=e.sibling}function xg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),zn(t),i&4){try{Ys(3,t,t.return),hl(3,t)}catch(v){ft(t,t.return,v)}try{Ys(5,t,t.return)}catch(v){ft(t,t.return,v)}}break;case 1:Tn(e,t),zn(t),i&512&&n!==null&&qr(n,n.return);break;case 5:if(Tn(e,t),zn(t),i&512&&n!==null&&qr(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(v){ft(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hp(r,s),Xu(a,o);var u=Xu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?jp(r,d):f==="dangerouslySetInnerHTML"?Wp(r,d):f==="children"?Js(r,d):Gc(r,f,d,u)}switch(a){case"input":ku(r,s);break;case"textarea":Gp(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Qr(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qr(r,!!s.multiple,s.defaultValue,!0):Qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[lo]=s}catch(v){ft(t,t.return,v)}}break;case 6:if(Tn(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){ft(t,t.return,v)}}break;case 3:if(Tn(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(v){ft(t,t.return,v)}break;case 4:Tn(e,t),zn(t);break;case 13:Tn(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=ht())),i&4&&Vd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||f,Tn(e,t),Ft=u):Tn(e,t),zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ce=t,f=t.child;f!==null;){for(d=ce=f;ce!==null;){switch(h=ce,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ys(4,h,h.return);break;case 1:qr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){ft(i,n,v)}}break;case 5:qr(h,h.return);break;case 22:if(h.memoizedState!==null){Xd(d);continue}}m!==null?(m.return=h,ce=m):Xd(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xp("display",o))}catch(v){ft(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ft(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tn(e,t),zn(t),i&4&&Vd(t);break;case 21:break;default:Tn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_g(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var s=Gd(t);yc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gd(t);Sc(t,a,o);break;default:throw Error(J(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L0(t,e,n){ce=t,Sg(t)}function Sg(t,e,n){for(var i=(t.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Vo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Vo;var u=Ft;if(Vo=o,(Ft=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?jd(r):l!==null?(l.return=o,ce=l):jd(r);for(;s!==null;)ce=s,Sg(s),s=s.sibling;ce=r,Vo=a,Ft=u}Wd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Wd(t)}}function Wd(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&io(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Ft||e.flags&512&&xc(e)}catch(h){ft(e,e.return,h)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Xd(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function jd(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hl(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{xc(e)}catch(l){ft(e,s,l)}break;case 5:var o=e.return;try{xc(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var P0=Math.ceil,Ya=fi.ReactCurrentDispatcher,Sf=fi.ReactCurrentOwner,yn=fi.ReactCurrentBatchConfig,Ve=0,At=null,mt=null,Lt=0,on=0,$r=Hi(0),_t=0,mo=null,hr=0,pl=0,yf=0,qs=null,$t=null,Mf=0,ds=1/0,Jn=null,qa=!1,Mc=null,bi=null,Wo=!1,Ei=null,$a=0,$s=0,Ec=null,Ta=-1,wa=0;function Xt(){return Ve&6?ht():Ta!==-1?Ta:Ta=ht()}function Di(t){return t.mode&1?Ve&2&&Lt!==0?Lt&-Lt:h0.transition!==null?(wa===0&&(wa=rm()),wa):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function In(t,e,n,i){if(50<$s)throw $s=0,Ec=null,Error(J(185));xo(t,n,i),(!(Ve&2)||t!==At)&&(t===At&&(!(Ve&2)&&(pl|=n),_t===4&&yi(t,Lt)),en(t,i),n===1&&Ve===0&&!(e.mode&1)&&(ds=ht()+500,cl&&Gi()))}function en(t,e){var n=t.callbackNode;hv(t,e);var i=Da(t,t===At?Lt:0);if(i===0)n!==null&&td(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&td(n),e===1)t.tag===0?d0(Yd.bind(null,t)):Pm(Yd.bind(null,t)),l0(function(){!(Ve&6)&&Gi()}),n=null;else{switch(sm(i)){case 1:n=Yc;break;case 4:n=nm;break;case 16:n=ba;break;case 536870912:n=im;break;default:n=ba}n=Cg(n,yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yg(t,e){if(Ta=-1,wa=0,Ve&6)throw Error(J(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var i=Da(t,t===At?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ka(t,i);else{e=i;var r=Ve;Ve|=2;var s=Eg();(At!==t||Lt!==e)&&(Jn=null,ds=ht()+500,rr(t,e));do try{U0();break}catch(a){Mg(t,a)}while(!0);af(),Ya.current=s,Ve=r,mt!==null?e=0:(At=null,Lt=0,e=_t)}if(e!==0){if(e===2&&(r=Ku(t),r!==0&&(i=r,e=Tc(t,r))),e===1)throw n=mo,rr(t,0),yi(t,i),en(t,ht()),n;if(e===6)yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!b0(r)&&(e=Ka(t,i),e===2&&(s=Ku(t),s!==0&&(i=s,e=Tc(t,s))),e===1))throw n=mo,rr(t,0),yi(t,i),en(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Ki(t,$t,Jn);break;case 3:if(yi(t,i),(i&130023424)===i&&(e=Mf+500-ht(),10<e)){if(Da(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rc(Ki.bind(null,t,$t,Jn),e);break}Ki(t,$t,Jn);break;case 4:if(yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Nn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*P0(i/1960))-i,10<i){t.timeoutHandle=rc(Ki.bind(null,t,$t,Jn),i);break}Ki(t,$t,Jn);break;case 5:Ki(t,$t,Jn);break;default:throw Error(J(329))}}}return en(t,ht()),t.callbackNode===n?yg.bind(null,t):null}function Tc(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=$t,$t=n,e!==null&&wc(e)),t}function wc(t){$t===null?$t=t:$t.push.apply($t,t)}function b0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(t,e){for(e&=~yf,e&=~pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),i=1<<n;t[n]=-1,e&=~i}}function Yd(t){if(Ve&6)throw Error(J(327));is();var e=Da(t,0);if(!(e&1))return en(t,ht()),null;var n=Ka(t,e);if(t.tag!==0&&n===2){var i=Ku(t);i!==0&&(e=i,n=Tc(t,i))}if(n===1)throw n=mo,rr(t,0),yi(t,e),en(t,ht()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,$t,Jn),en(t,ht()),null}function Ef(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(ds=ht()+500,cl&&Gi())}}function pr(t){Ei!==null&&Ei.tag===0&&!(Ve&6)&&is();var e=Ve;Ve|=1;var n=yn.transition,i=Ye;try{if(yn.transition=null,Ye=1,t)return t()}finally{Ye=i,yn.transition=n,Ve=e,!(Ve&6)&&Gi()}}function Tf(){on=$r.current,nt($r)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a0(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oa();break;case 3:cs(),nt(Qt),nt(zt),hf();break;case 5:df(i);break;case 4:cs();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:lf(i.type._context);break;case 22:case 23:Tf()}n=n.return}if(At=t,mt=t=Ui(t.current,null),Lt=on=e,_t=0,mo=null,yf=pl=hr=0,$t=qs=null,nr!==null){for(e=0;e<nr.length;e++)if(n=nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}nr=null}return t}function Mg(t,e){do{var n=mt;try{if(af(),ya.current=ja,Xa){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xa=!1}if(dr=0,Tt=gt=at=null,js=!1,fo=0,Sf.current=null,n===null||n.return===null){_t=1,mo=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Nd(o);if(m!==null){m.flags&=-257,Id(m,o,a,s,e),m.mode&1&&Ud(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Ud(s,u,e),wf();break e}l=Error(J(426))}}else if(it&&a.mode&1){var p=Nd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Id(p,o,a,s,e),sf(fs(l,a));break e}}s=l=fs(l,a),_t!==4&&(_t=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=sg(s,l,e);Rd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bi===null||!bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=og(s,a,e);Rd(s,y);break e}}s=s.return}while(s!==null)}wg(n)}catch(C){e=C,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function Eg(){var t=Ya.current;return Ya.current=ja,t===null?ja:t}function wf(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||!(hr&268435455)&&!(pl&268435455)||yi(At,Lt)}function Ka(t,e){var n=Ve;Ve|=2;var i=Eg();(At!==t||Lt!==e)&&(Jn=null,rr(t,e));do try{D0();break}catch(r){Mg(t,r)}while(!0);if(af(),Ve=n,Ya.current=i,mt!==null)throw Error(J(261));return At=null,Lt=0,_t}function D0(){for(;mt!==null;)Tg(mt)}function U0(){for(;mt!==null&&!rv();)Tg(mt)}function Tg(t){var e=Rg(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?wg(t):mt=e,Sf.current=null}function wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A0(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,mt=null;return}}else if(n=w0(n,e,on),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);_t===0&&(_t=5)}function Ki(t,e,n){var i=Ye,r=yn.transition;try{yn.transition=null,Ye=1,N0(t,e,n,i)}finally{yn.transition=r,Ye=i}return null}function N0(t,e,n,i){do is();while(Ei!==null);if(Ve&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pv(t,s),t===At&&(mt=At=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,Cg(ba,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=Ye;Ye=1;var a=Ve;Ve|=4,Sf.current=null,C0(t,n),xg(n,t),e0(nc),Ua=!!tc,nc=tc=null,t.current=n,L0(n),sv(),Ve=a,Ye=o,yn.transition=s}else t.current=n;if(Wo&&(Wo=!1,Ei=t,$a=r),s=t.pendingLanes,s===0&&(bi=null),lv(n.stateNode),en(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(qa)throw qa=!1,t=Mc,Mc=null,t;return $a&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===Ec?$s++:($s=0,Ec=t):$s=0,Gi(),null}function is(){if(Ei!==null){var t=sm($a),e=yn.transition,n=Ye;try{if(yn.transition=null,Ye=16>t?16:t,Ei===null)var i=!1;else{if(t=Ei,Ei=null,$a=0,Ve&6)throw Error(J(331));var r=Ve;for(Ve|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var f=ce;switch(f.tag){case 0:case 11:case 15:Ys(8,f,s)}var d=f.child;if(d!==null)d.return=f,ce=d;else for(;ce!==null;){f=ce;var h=f.sibling,m=f.return;if(gg(f),f===u){ce=null;break}if(h!==null){h.return=m,ce=h;break}ce=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ce=c;break e}ce=s.return}}var _=t.current;for(ce=_;ce!==null;){o=ce;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ce=g;else e:for(o=_;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(C){ft(a,a.return,C)}if(a===o){ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ce=y;break e}ce=a.return}}if(Ve=r,Gi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(sl,t)}catch{}i=!0}return i}finally{Ye=n,yn.transition=e}}return!1}function qd(t,e,n){e=fs(n,e),e=sg(t,e,1),t=Pi(t,e,1),e=Xt(),t!==null&&(xo(t,1,e),en(t,e))}function ft(t,e,n){if(t.tag===3)qd(t,t,n);else for(;e!==null;){if(e.tag===3){qd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bi===null||!bi.has(i))){t=fs(n,t),t=og(e,t,1),e=Pi(e,t,1),t=Xt(),e!==null&&(xo(e,1,t),en(e,t));break}}e=e.return}}function I0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Lt&n)===n&&(_t===4||_t===3&&(Lt&130023424)===Lt&&500>ht()-Mf?rr(t,0):yf|=n),en(t,e)}function Ag(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=Xt();t=li(t,e),t!==null&&(xo(t,e,n),en(t,n))}function F0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ag(t,n)}function O0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Ag(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,T0(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,it&&e.flags&1048576&&bm(e,ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ea(t,e),t=e.pendingProps;var r=as(e,zt.current);ns(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,za(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cf(e),r.updater=dl,e.stateNode=r,r._reactInternals=e,fc(e,i,t,n),e=pc(null,e,i,!0,s,n)):(e.tag=0,it&&s&&nf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=B0(i),t=Cn(i,t),r){case 0:e=hc(null,e,i,t,n);break e;case 1:e=zd(null,e,i,t,n);break e;case 11:e=Fd(null,e,i,t,n);break e;case 14:e=Od(null,e,i,Cn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),hc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),zd(t,e,i,r,n);case 3:e:{if(cg(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Om(t,e),Va(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fs(Error(J(423)),e),e=Bd(t,e,i,n,r);break e}else if(i!==r){r=fs(Error(J(424)),e),e=Bd(t,e,i,n,r);break e}else for(an=Li(e.stateNode.containerInfo.firstChild),ln=e,it=!0,Pn=null,n=Im(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),i===r){e=ui(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return zm(e),t===null&&lc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ic(i,r)?o=null:s!==null&&ic(i,s)&&(e.flags|=32),ug(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&lc(e),null;case 13:return fg(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=us(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Fd(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(Ha,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Qt.current){e=ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ns(e,n),r=Mn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Cn(i,e.pendingProps),r=Cn(i.type,r),Od(t,e,i,r,n);case 15:return ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Ea(t,e),e.tag=1,Jt(i)?(t=!0,za(e)):t=!1,ns(e,n),rg(e,i,r),fc(e,i,r,n),pc(null,e,i,!0,t,n);case 19:return dg(t,e,n);case 22:return lg(t,e,n)}throw Error(J(156,e.tag))};function Cg(t,e){return tm(t,e)}function z0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new z0(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B0(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===Xc)return 14}return 2}function Ui(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Aa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return sr(n.children,r,s,e);case Vc:o=8,r|=8;break;case Iu:return t=Sn(12,n,e,r|2),t.elementType=Iu,t.lanes=s,t;case Fu:return t=Sn(13,n,e,r),t.elementType=Fu,t.lanes=s,t;case Ou:return t=Sn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case zp:return ml(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fp:o=10;break e;case Op:o=9;break e;case Wc:o=11;break e;case Xc:o=14;break e;case vi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function sr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function ml(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Jl(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function k0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,i,r,s,o,a,l){return t=new k0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(s),t}function H0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return zi;t=t._reactInternals;e:{if(vr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Lm(t,n,e)}return e}function Pg(t,e,n,i,r,s,o,a,l){return t=Rf(n,i,!0,t,r,s,o,a,l),t.context=Lg(null),n=t.current,i=Xt(),r=Di(n),s=si(i,r),s.callback=e??null,Pi(n,s,r),t.current.lanes=r,xo(t,r,i),en(t,i),t}function gl(t,e,n,i){var r=e.current,s=Xt(),o=Di(r);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pi(r,e,o),t!==null&&(In(t,r,o,s),Sa(t,r,o)),o}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $d(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){$d(t,e),(t=t.alternate)&&$d(t,e)}function G0(){return null}var bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}_l.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));gl(t,e,null,null)};_l.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){gl(null,t,null,null)}),e[ai]=null}};function _l(t){this._internalRoot=t}_l.prototype.unstable_scheduleHydration=function(t){if(t){var e=lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Si.length&&e!==0&&e<Si[n].priority;n++);Si.splice(n,0,t),n===0&&cm(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function V0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Za(o);s.call(u)}}var o=Pg(e,i,t,0,null,!1,!1,"",Kd);return t._reactRootContainer=o,t[ai]=o.current,oo(t.nodeType===8?t.parentNode:t),pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Za(l);a.call(u)}}var l=Rf(t,0,!1,null,null,!1,!1,"",Kd);return t._reactRootContainer=l,t[ai]=l.current,oo(t.nodeType===8?t.parentNode:t),pr(function(){gl(e,l,n,i)}),l}function xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Za(o);a.call(l)}}gl(e,o,t,r)}else o=V0(n,e,t,r,i);return Za(o)}om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(qc(e,n|1),en(e,ht()),!(Ve&6)&&(ds=ht()+500,Gi()))}break;case 13:pr(function(){var i=li(t,1);if(i!==null){var r=Xt();In(i,t,1,r)}}),Cf(t,1)}};$c=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=Xt();In(e,t,134217728,n)}Cf(t,134217728)}};am=function(t){if(t.tag===13){var e=Di(t),n=li(t,e);if(n!==null){var i=Xt();In(n,t,e,i)}Cf(t,e)}};lm=function(){return Ye};um=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};Yu=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ul(i);if(!r)throw Error(J(90));kp(i),ku(i,r)}}}break;case"textarea":Gp(t,n);break;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}};$p=Ef;Kp=pr;var W0={usingClientEntryPoint:!1,Events:[yo,Vr,ul,Yp,qp,Ef]},bs={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jp(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{sl=Xo.inject(X0),Vn=Xo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(J(200));return H0(t,e,null,n)};fn.createRoot=function(t,e){if(!Pf(t))throw Error(J(299));var n=!1,i="",r=bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,i,r),t[ai]=e.current,oo(t.nodeType===8?t.parentNode:t),new Lf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=Jp(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return pr(t)};fn.hydrate=function(t,e,n){if(!vl(e))throw Error(J(200));return xl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=bg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pg(e,null,t,1,n??null,r,!1,s,o),t[ai]=e.current,oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _l(e)};fn.render=function(t,e,n){if(!vl(e))throw Error(J(200));return xl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!vl(t))throw Error(J(40));return t._reactRootContainer?(pr(function(){xl(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};fn.unstable_batchedUpdates=Ef;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vl(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return xl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(t){console.error(t)}}Dg(),Dp.exports=fn;var j0=Dp.exports,Zd=j0;Uu.createRoot=Zd.createRoot,Uu.hydrateRoot=Zd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="160",Y0=0,Qd=1,q0=2,Ug=1,$0=2,Qn=3,Bi=0,tn=1,ti=2,Ni=0,rs=1,Jd=2,eh=3,th=4,K0=5,Ji=100,Z0=101,Q0=102,nh=103,ih=104,J0=200,ex=201,tx=202,nx=203,Ac=204,Rc=205,ix=206,rx=207,sx=208,ox=209,ax=210,lx=211,ux=212,cx=213,fx=214,dx=0,hx=1,px=2,Qa=3,mx=4,gx=5,_x=6,vx=7,Ng=0,xx=1,Sx=2,Ii=0,yx=1,Mx=2,Ex=3,Tx=4,wx=5,Ax=6,Ig=300,hs=301,ps=302,Cc=303,Lc=304,Sl=306,Pc=1e3,Dn=1001,bc=1002,Wt=1003,rh=1004,tu=1005,_n=1006,Rx=1007,go=1008,Fi=1009,Cx=1010,Lx=1011,Df=1012,Fg=1013,Ti=1014,wi=1015,_o=1016,Og=1017,zg=1018,or=1020,Px=1021,Un=1023,bx=1024,Dx=1025,ar=1026,ms=1027,Ux=1028,Bg=1029,Nx=1030,kg=1031,Hg=1033,nu=33776,iu=33777,ru=33778,su=33779,sh=35840,oh=35841,ah=35842,lh=35843,Gg=36196,uh=37492,ch=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,Th=37821,ou=36492,wh=36494,Ah=36495,Ix=36283,Rh=36284,Ch=36285,Lh=36286,Vg=3e3,lr=3001,Fx=3200,Ox=3201,Wg=0,zx=1,xn="",Ct="srgb",ci="srgb-linear",Uf="display-p3",yl="display-p3-linear",Ja="linear",tt="srgb",el="rec709",tl="p3",yr=7680,Ph=519,Bx=512,kx=513,Hx=514,Xg=515,Gx=516,Vx=517,Wx=518,Xx=519,bh=35044,Dh="300 es",Dc=1035,ri=2e3,nl=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,Uc=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function jx(t,e){return(t%e+e)%e}function lu(t,e,n){return(1-n)*t+n*e}function Uh(t){return(t&t-1)===0&&t!==0}function Nc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],y=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*p+a*g+l*R,s[6]=o*c+a*y+l*A,s[1]=u*v+f*_+d*C,s[4]=u*p+f*g+d*R,s[7]=u*c+f*y+d*A,s[2]=h*v+m*_+x*C,s[5]=h*p+m*g+x*R,s[8]=h*c+m*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,m=u*s-o*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(uu.makeScale(e,n)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uu=new Be;function jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yx(){const t=il("canvas");return t.style.display="block",t}const Nh={};function Ks(t){t in Nh||(Nh[t]=!0,console.warn(t))}const Ih=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[ci]:{transfer:Ja,primaries:el,toReference:t=>t,fromReference:t=>t},[Ct]:{transfer:tt,primaries:el,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yl]:{transfer:Ja,primaries:tl,toReference:t=>t.applyMatrix3(Fh),fromReference:t=>t.applyMatrix3(Ih)},[Uf]:{transfer:tt,primaries:tl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Fh),fromReference:t=>t.applyMatrix3(Ih).convertLinearToSRGB()}},qx=new Set([ci,yl]),$e={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=jo[e].toReference,r=jo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return jo[t].primaries},getTransfer:function(t){return t===xn?Ja:jo[t].transfer}};function ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mr;class Yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=il("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ss(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ss(n[i]/255)*255):n[i]=ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Eo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fu(r[o].image)):s.push(fu(r[o]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class un extends Ss{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Dn,r=Dn,s=_n,o=go,a=Un,l=Fi,u=un.DEFAULT_ANISOTROPY,f=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Eo(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===lr?Ct:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?lr:Vg}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lr?Ct:xn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ig;un.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(m+1)/2,C=(c+1)/2,R=(f+h)/4,A=(d+v)/4,U=(x+p)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=U/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-v)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends Ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lr?Ct:xn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Zx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $g extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qx extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==h||u!==m||f!==x){let p=1-a;const c=l*h+u*m+f*x+d*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),R=Math.atan2(C,c*_);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const y=a*_;if(l=l*p+h*y,u=u*p+m*y,f=f*p+x*y,d=d*p+v*y,p===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=C,u*=C,f*=C,d*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*m-u*h,e[n+1]=l*x+f*h+u*d-a*m,e[n+2]=u*x+f*m+a*h-l*d,e[n+3]=f*x-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d-h*m*x;break;case"YXZ":this._x=h*f*d+u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d+h*m*x;break;case"ZXY":this._x=h*f*d-u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d-h*m*x;break;case"ZYX":this._x=h*f*d-u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d+h*m*x;break;case"YZX":this._x=h*f*d+u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d-h*m*x;break;case"XZY":this._x=h*f*d-u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Oh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new B,Oh=new To;class wo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),qo.subVectors(this.max,Us),Er.subVectors(e.a,Us),Tr.subVectors(e.b,Us),wr.subVectors(e.c,Us),hi.subVectors(Tr,Er),pi.subVectors(wr,Tr),Xi.subVectors(Er,wr);let n=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Xi.z,Xi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Xi.z,0,-Xi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Xi.y,Xi.x,0];return!hu(n,Er,Tr,wr,qo)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,Er,Tr,wr,qo))?!1:($o.crossVectors(hi,pi),n=[$o.x,$o.y,$o.z],hu(n,Er,Tr,wr,qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new B,new B,new B,new B,new B,new B,new B,new B],wn=new B,Yo=new wo,Er=new B,Tr=new B,wr=new B,hi=new B,pi=new B,Xi=new B,Us=new B,qo=new B,$o=new B,ji=new B;function hu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),u=n.dot(ji),f=i.dot(ji);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Jx=new wo,Ns=new B,pu=new B;class Nf{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(pu)),this.expandByPoint(Ns.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new B,mu=new B,Ko=new B,mi=new B,gu=new B,Zo=new B,_u=new B;class eS{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mu.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ko),a=mi.dot(this.direction),l=-mi.dot(Ko),u=mi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const v=1/f;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mu).addScaledVector(Ko,h),m}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){gu.subVectors(n,e),Zo.subVectors(i,e),_u.crossVectors(gu,Zo);let o=this.direction.dot(_u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Zo.crossVectors(mi,Zo));if(l<0)return null;const u=a*this.direction.dot(gu.cross(mi));if(u<0||l+u>o)return null;const f=-a*mi.dot(_u);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,m,x,v,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,m,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,x=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+x*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,x=u*f,v=u*d;n[0]=h+v*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,x=u*f,v=u*d;n[0]=h-v*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,x=a*f,v=a*d;n[0]=l*f,n[4]=x*u-m,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-h*d,n[8]=x*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+x,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+v,n[5]=o*f,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),gi.crossVectors(i,rn),gi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),gi.crossVectors(i,rn)),gi.normalize(),Qo.crossVectors(rn,gi),r[0]=gi.x,r[4]=Qo.x,r[8]=rn.x,r[1]=gi.y,r[5]=Qo.y,r[9]=rn.y,r[2]=gi.z,r[6]=Qo.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],y=i[11],C=i[15],R=r[0],A=r[4],U=r[8],M=r[12],T=r[1],W=r[5],j=r[9],ne=r[13],P=r[2],H=r[6],X=r[10],Y=r[14],b=r[3],N=r[7],k=r[11],q=r[15];return s[0]=o*R+a*T+l*P+u*b,s[4]=o*A+a*W+l*H+u*N,s[8]=o*U+a*j+l*X+u*k,s[12]=o*M+a*ne+l*Y+u*q,s[1]=f*R+d*T+h*P+m*b,s[5]=f*A+d*W+h*H+m*N,s[9]=f*U+d*j+h*X+m*k,s[13]=f*M+d*ne+h*Y+m*q,s[2]=x*R+v*T+p*P+c*b,s[6]=x*A+v*W+p*H+c*N,s[10]=x*U+v*j+p*X+c*k,s[14]=x*M+v*ne+p*Y+c*q,s[3]=_*R+g*T+y*P+C*b,s[7]=_*A+g*W+y*H+C*N,s[11]=_*U+g*j+y*X+C*k,s[15]=_*M+g*ne+y*Y+C*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+v*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*f-s*l*f)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=d*p*u-v*h*u+v*l*m-a*p*m-d*l*c+a*h*c,g=x*h*u-f*p*u-x*l*m+o*p*m+f*l*c-o*h*c,y=f*v*u-x*d*u+x*a*m-o*v*m-f*a*c+o*d*c,C=x*d*l-f*v*l-x*a*h+o*v*h+f*a*p-o*d*p,R=n*_+i*g+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(v*h*s-d*p*s-v*r*m+i*p*m+d*r*c-i*h*c)*A,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=g*A,e[5]=(f*p*s-x*h*s+x*r*m-n*p*m-f*r*c+n*h*c)*A,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*A,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*m+n*l*m)*A,e[8]=y*A,e[9]=(x*d*s-f*v*s-x*i*m+n*v*m+f*i*c-n*d*c)*A,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*m-n*a*m)*A,e[12]=C*A,e[13]=(f*v*r-x*d*r+x*i*h-n*v*h-f*i*p+n*d*p)*A,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,m=s*f,x=s*d,v=o*f,p=o*d,c=a*d,_=l*u,g=l*f,y=l*d,C=i.x,R=i.y,A=i.z;return r[0]=(1-(v+c))*C,r[1]=(m+y)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+c))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(x+g)*A,r[9]=(p-_)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,f=1/o,d=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===ri)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===nl)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*f;let x,v;if(a===ri)x=(o+s)*d,v=-2*d;else if(a===nl)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ar=new B,An=new vt,tS=new B(0,0,0),nS=new B(1,1,1),gi=new B,Qo=new B,rn=new B,zh=new vt,Bh=new To;class Ml{constructor(e=0,n=0,i=0,r=Ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ml.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const kh=new B,Rr=new To,$n=new vt,Jo=new B,Is=new B,rS=new B,sS=new To,Hh=new B(1,0,0),Gh=new B(0,1,0),Vh=new B(0,0,1),oS={type:"added"},aS={type:"removed"};class Ot extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,n=new Ml,i=new To,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,n){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Is,Jo,this.up):$n.lookAt(Jo,Is,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix($n),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new B,Kn=new B,vu=new B,Zn=new B,Cr=new B,Lr=new B,Wh=new B,xu=new B,Su=new B,yu=new B;let ea=!1;class bn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Kn.subVectors(i,n),vu.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(vu),u=Kn.dot(Kn),f=Kn.dot(vu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,o,a,l){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Kn.subVectors(e,n),Rn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Lr.subVectors(s,i),xu.subVectors(e,i);const l=Cr.dot(xu),u=Lr.dot(xu);if(l<=0&&u<=0)return n.copy(i);Su.subVectors(e,r);const f=Cr.dot(Su),d=Lr.dot(Su);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Cr,o);yu.subVectors(e,s);const m=Cr.dot(yu),x=Lr.dot(yu);if(x>=0&&m<=x)return n.copy(s);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Lr,a);const p=f*x-m*d;if(p<=0&&d-f>=0&&m-x>=0)return Wh.subVectors(s,r),a=(d-f)/(d-f+(m-x)),n.copy(r).addScaledVector(Wh,a);const c=1/(p+v+h);return o=v*c,a=h*c,n.copy(i).addScaledVector(Cr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=jx(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mu(o,s,e+1/3),this.g=Mu(o,s,e),this.b=Mu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ct){const i=Zg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=cu(e.r),this.g=cu(e.g),this.b=cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return $e.fromWorkingColorSpace(It.copy(this),e),Math.round(Kt(It.r*255,0,255))*65536+Math.round(Kt(It.g*255,0,255))*256+Math.round(Kt(It.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ct){$e.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(ta);const i=lu(_i.h,ta.h,n),r=lu(_i.s,ta.s,n),s=lu(_i.l,ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new We;We.NAMES=Zg;let lS=0;class Ao extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=rs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==Rc&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qg extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new B,na=new Xe;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)na.fromBufferAttribute(this,n),na.applyMatrix3(e),this.setXY(n,na.x,na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}}class Jg extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ur extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uS=0;const pn=new vt,Eu=new Ot,Pr=new B,sn=new wo,Fs=new wo,Et=new B;class xr extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?e_:Jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ur(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(sn.min,Fs.min),sn.expandByPoint(Et),Et.addVectors(sn.max,Fs.max),sn.expandByPoint(Et)):(sn.expandByPoint(Fs.min),sn.expandByPoint(Fs.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Et.fromBufferAttribute(a,u),l&&(Pr.fromBufferAttribute(e,u),Et.add(Pr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new B,f[T]=new B;const d=new B,h=new B,m=new B,x=new Xe,v=new Xe,p=new Xe,c=new B,_=new B;function g(T,W,j){d.fromArray(r,T*3),h.fromArray(r,W*3),m.fromArray(r,j*3),x.fromArray(o,T*2),v.fromArray(o,W*2),p.fromArray(o,j*2),h.sub(d),m.sub(d),v.sub(x),p.sub(x);const ne=1/(v.x*p.y-p.x*v.y);isFinite(ne)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ne),_.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(ne),u[T].add(c),u[W].add(c),u[j].add(c),f[T].add(_),f[W].add(_),f[j].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,W=y.length;T<W;++T){const j=y[T],ne=j.start,P=j.count;for(let H=ne,X=ne+P;H<X;H+=3)g(i[H+0],i[H+1],i[H+2])}const C=new B,R=new B,A=new B,U=new B;function M(T){A.fromArray(s,T*3),U.copy(A);const W=u[T];C.copy(W),C.sub(A.multiplyScalar(A.dot(W))).normalize(),R.crossVectors(U,W);const ne=R.dot(f[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=ne}for(let T=0,W=y.length;T<W;++T){const j=y[T],ne=j.start,P=j.count;for(let H=ne,X=ne+P;H<X;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,f=new B,d=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)h[x++]=u[m++]}return new Xn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new vt,Yi=new eS,ia=new Nf,jh=new B,br=new B,Dr=new B,Ur=new B,Tu=new B,ra=new B,sa=new Xe,oa=new Xe,aa=new Xe,Yh=new B,qh=new B,$h=new B,la=new B,ua=new B;class Gn extends Ot{constructor(e=new xr,n=new Qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ra.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Tu.fromBufferAttribute(d,e),o?ra.addScaledVector(Tu,f):ra.addScaledVector(Tu.sub(n),f))}n.add(ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(ia.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ia,jh)===null||Yi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Xh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=g;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),U=a.getX(y+2);r=ca(this,c,e,i,u,f,d,R,A,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=ca(this,o,e,i,u,f,d,_,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=g;y<C;y+=3){const R=y,A=y+1,U=y+2;r=ca(this,c,e,i,u,f,d,R,A,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=p,g=p+1,y=p+2;r=ca(this,o,e,i,u,f,d,_,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cS(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bi,a),l===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ua);return u<n.near||u>n.far?null:{distance:u,point:ua.clone(),object:t}}function ca(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,br),t.getVertexPosition(l,Dr),t.getVertexPosition(u,Ur);const f=cS(t,e,n,i,br,Dr,Ur,la);if(f){r&&(sa.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,u),f.uv=bn.getInterpolation(la,br,Dr,Ur,sa,oa,aa,new Xe)),s&&(sa.fromBufferAttribute(s,a),oa.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,u),f.uv1=bn.getInterpolation(la,br,Dr,Ur,sa,oa,aa,new Xe),f.uv2=f.uv1),o&&(Yh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,l),$h.fromBufferAttribute(o,u),f.normal=bn.getInterpolation(la,br,Dr,Ur,Yh,qh,$h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};bn.getNormal(br,Dr,Ur,d.normal),f.face=d}return f}class ys extends xr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(u,3)),this.setAttribute("normal",new ur(f,3)),this.setAttribute("uv",new ur(d,2));function x(v,p,c,_,g,y,C,R,A,U,M){const T=y/A,W=C/U,j=y/2,ne=C/2,P=R/2,H=A+1,X=U+1;let Y=0,b=0;const N=new B;for(let k=0;k<X;k++){const q=k*W-ne;for(let K=0;K<H;K++){const V=K*T-j;N[v]=V*_,N[p]=q*g,N[c]=P,u.push(N.x,N.y,N.z),N[v]=0,N[p]=0,N[c]=R>0?1:-1,f.push(N.x,N.y,N.z),d.push(K/A),d.push(1-k/U),Y+=1}}for(let k=0;k<U;k++)for(let q=0;q<A;q++){const K=h+q+H*k,V=h+q+H*(k+1),$=h+(q+1)+H*(k+1),ae=h+(q+1)+H*k;l.push(K,V,ae),l.push(V,$,ae),b+=6}a.addGroup(m,b,M),m+=b,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=gs(t[n]);for(const r in i)e[r]=i[r]}return e}function fS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t_(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}const dS={clone:gs,merge:Gt};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n_ extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends n_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Ir=1;class mS extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Nr,Ir,e,n);r.layers=this.layers,this.add(r);const s=new vn(Nr,Ir,e,n);s.layers=this.layers,this.add(s);const o=new vn(Nr,Ir,e,n);o.layers=this.layers,this.add(o);const a=new vn(Nr,Ir,e,n);a.layers=this.layers,this.add(a);const l=new vn(Nr,Ir,e,n);l.layers=this.layers,this.add(l);const u=new vn(Nr,Ir,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class i_ extends un{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:hs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gS extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lr?Ct:xn),this.texture=new i_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ys(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ni});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===go&&(n.minFilter=_n),new mS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const wu=new B,_S=new B,vS=new Be;class Zi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(_S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vS.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Nf,fa=new B;class If{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-m,y-c).normalize(),i[1].setComponents(l+s,h+u,p+m,y+c).normalize(),i[2].setComponents(l+o,h+f,p+x,y+_).normalize(),i[3].setComponents(l-o,h-f,p-x,y-_).normalize(),i[4].setComponents(l-a,h-d,p-v,y-g).normalize(),n===ri)i[5].setComponents(l+a,h+d,p+v,y+g).normalize();else if(n===nl)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=d.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,f,d){const h=f.array,m=f._updateRange,x=f.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let v=0,p=x.length;v<p;v++){const c=x[v];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class El extends xr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*h-o;for(let g=0;g<u;g++){const y=g*d-s;x.push(y,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,y=_+u*(c+1),C=_+1+u*(c+1),R=_+1+u*c;m.push(g,y,R),m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new ur(x,3)),this.setAttribute("normal",new ur(v,3)),this.setAttribute("uv",new ur(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var SS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,US=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ly=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:SS,alphahash_pars_fragment:yS,alphamap_fragment:MS,alphamap_pars_fragment:ES,alphatest_fragment:TS,alphatest_pars_fragment:wS,aomap_fragment:AS,aomap_pars_fragment:RS,batching_pars_vertex:CS,batching_vertex:LS,begin_vertex:PS,beginnormal_vertex:bS,bsdfs:DS,iridescence_fragment:US,bumpmap_pars_fragment:NS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:zS,color_fragment:BS,color_pars_fragment:kS,color_pars_vertex:HS,color_vertex:GS,common:VS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:jS,displacementmap_vertex:YS,emissivemap_fragment:qS,emissivemap_pars_fragment:$S,colorspace_fragment:KS,colorspace_pars_fragment:ZS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:ey,envmap_pars_vertex:ty,envmap_physical_pars_fragment:hy,envmap_vertex:ny,fog_vertex:iy,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ay,lightmap_fragment:ly,lightmap_pars_fragment:uy,lights_lambert_fragment:cy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:xy,lights_fragment_begin:Sy,lights_fragment_maps:yy,lights_fragment_end:My,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ay,map_fragment:Ry,map_pars_fragment:Cy,map_particle_fragment:Ly,map_particle_pars_fragment:Py,metalnessmap_fragment:by,metalnessmap_pars_fragment:Dy,morphcolor_vertex:Uy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Iy,morphtarget_vertex:Fy,normal_fragment_begin:Oy,normal_fragment_maps:zy,normal_pars_fragment:By,normal_pars_vertex:ky,normal_vertex:Hy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:Xy,iridescence_pars_fragment:jy,opaque_fragment:Yy,packing:qy,premultiplied_alpha_fragment:$y,project_vertex:Ky,dithering_fragment:Zy,dithering_pars_fragment:Qy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:rM,skinbase_vertex:sM,skinning_pars_vertex:oM,skinning_vertex:aM,skinnormal_vertex:lM,specularmap_fragment:uM,specularmap_pars_fragment:cM,tonemapping_fragment:fM,tonemapping_pars_fragment:dM,transmission_fragment:hM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:_M,worldpos_vertex:vM,background_vert:xM,background_frag:SM,backgroundCube_vert:yM,backgroundCube_frag:MM,cube_vert:EM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distanceRGBA_vert:RM,distanceRGBA_frag:CM,equirect_vert:LM,equirect_frag:PM,linedashed_vert:bM,linedashed_frag:DM,meshbasic_vert:UM,meshbasic_frag:NM,meshlambert_vert:IM,meshlambert_frag:FM,meshmatcap_vert:OM,meshmatcap_frag:zM,meshnormal_vert:BM,meshnormal_frag:kM,meshphong_vert:HM,meshphong_frag:GM,meshphysical_vert:VM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:jM,points_vert:YM,points_frag:qM,shadow_vert:$M,shadow_frag:KM,sprite_vert:ZM,sprite_frag:QM},re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},kn={basic:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Gt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Gt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Gt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Gt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Gt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Gt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Gt([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Gt([re.lights,re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};kn.physical={uniforms:Gt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const da={r:0,b:0,g:0};function JM(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function x(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Sl)?(f===void 0&&(f=new Gn(new ys(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:gs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=$e.getTransfer(g.colorSpace)!==tt,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Gn(new El(2,2),new gr({name:"BackgroundMaterial",uniforms:gs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=$e.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(da,t_(t)),i.buffers.color.setClear(da.r,da.g,da.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function eE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function d(P,H,X,Y,b){let N=!1;if(o){const k=v(Y,X,H);u!==k&&(u=k,m(u.object)),N=c(P,Y,X,b),N&&_(P,Y,X,b)}else{const k=H.wireframe===!0;(u.geometry!==Y.id||u.program!==X.id||u.wireframe!==k)&&(u.geometry=Y.id,u.program=X.id,u.wireframe=k,N=!0)}b!==null&&n.update(b,t.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,U(P,H,X,Y),b!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(b).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,H,X){const Y=X.wireframe===!0;let b=a[P.id];b===void 0&&(b={},a[P.id]=b);let N=b[H.id];N===void 0&&(N={},b[H.id]=N);let k=N[Y];return k===void 0&&(k=p(h()),N[Y]=k),k}function p(P){const H=[],X=[],Y=[];for(let b=0;b<r;b++)H[b]=0,X[b]=0,Y[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function c(P,H,X,Y){const b=u.attributes,N=H.attributes;let k=0;const q=X.getAttributes();for(const K in q)if(q[K].location>=0){const $=b[K];let ae=N[K];if(ae===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;k++}return u.attributesNum!==k||u.index!==Y}function _(P,H,X,Y){const b={},N=H.attributes;let k=0;const q=X.getAttributes();for(const K in q)if(q[K].location>=0){let $=N[K];$===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),b[K]=ae,k++}u.attributes=b,u.attributesNum=k,u.index=Y}function g(){const P=u.newAttributes;for(let H=0,X=P.length;H<X;H++)P[H]=0}function y(P){C(P,0)}function C(P,H){const X=u.newAttributes,Y=u.enabledAttributes,b=u.attributeDivisors;X[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),b[P]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),b[P]=H)}function R(){const P=u.newAttributes,H=u.enabledAttributes;for(let X=0,Y=H.length;X<Y;X++)H[X]!==P[X]&&(t.disableVertexAttribArray(X),H[X]=0)}function A(P,H,X,Y,b,N,k){k===!0?t.vertexAttribIPointer(P,H,X,b,N):t.vertexAttribPointer(P,H,X,Y,b,N)}function U(P,H,X,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const b=Y.attributes,N=X.getAttributes(),k=H.defaultAttributeValues;for(const q in N){const K=N[q];if(K.location>=0){let V=b[q];if(V===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const $=V.normalized,ae=V.itemSize,fe=n.get(V);if(fe===void 0)continue;const pe=fe.buffer,Le=fe.type,be=fe.bytesPerElement,Ee=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||V.gpuType===Fg);if(V.isInterleavedBufferAttribute){const Ge=V.data,I=Ge.stride,Bt=V.offset;if(Ge.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)C(K.location+xe,Ge.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let xe=0;xe<K.locationSize;xe++)y(K.location+xe);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let xe=0;xe<K.locationSize;xe++)A(K.location+xe,ae/K.locationSize,Le,$,I*be,(Bt+ae/K.locationSize*xe)*be,Ee)}else{if(V.isInstancedBufferAttribute){for(let Ge=0;Ge<K.locationSize;Ge++)C(K.location+Ge,V.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ge=0;Ge<K.locationSize;Ge++)y(K.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ge=0;Ge<K.locationSize;Ge++)A(K.location+Ge,ae/K.locationSize,Le,$,ae*be,ae/K.locationSize*Ge*be,Ee)}}else if(k!==void 0){const $=k[q];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(K.location,$);break;case 3:t.vertexAttrib3fv(K.location,$);break;case 4:t.vertexAttrib4fv(K.location,$);break;default:t.vertexAttrib1fv(K.location,$)}}}}R()}function M(){j();for(const P in a){const H=a[P];for(const X in H){const Y=H[X];for(const b in Y)x(Y[b].object),delete Y[b];delete H[X]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const H=a[P.id];for(const X in H){const Y=H[X];for(const b in Y)x(Y[b].object),delete Y[b];delete H[X]}delete a[P.id]}function W(P){for(const H in a){const X=a[H];if(X[P.id]===void 0)continue;const Y=X[P.id];for(const b in Y)x(Y[b].object),delete Y[b];delete X[P.id]}}function j(){ne(),f=!0,u!==l&&(u=l,m(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:ne,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function tE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(f[x],d[x]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let x=0;for(let v=0;v<h;v++)x+=d[v];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function nE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=o||e.has("OES_texture_float"),C=g&&y,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function iE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let y=c.clippingState||null;l.value=y,y=f(x,h,g,m);for(let C=0;C!==g;++C)y[C]=n[C];c.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,x){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,y=m;g!==v;++g,y+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function rE(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=hs:a===Lc&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cc||a===Lc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gS(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s_ extends n_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=4,Kh=[.125,.215,.35,.446,.526,.582],er=20,Au=new s_,Zh=new We;let Ru=null,Cu=0,Lu=0;const Qi=(1+Math.sqrt(5))/2,Fr=1/Qi,Qh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Qi,Fr),new B(0,Qi,-Fr),new B(Fr,0,Qi),new B(-Fr,0,Qi),new B(Qi,Fr,0),new B(-Qi,Fr,0)];class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Cu,Lu),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:_o,format:Un,colorSpace:ci,depthBuffer:!1},r=ep(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sE(s)),this._blurMaterial=oE(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Zh),f.toneMapping=Ii,f.autoClear=!1;const m=new Qg({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Gn(new ys,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Zh),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ha(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===hs||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qh[(r-1)%Qh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Gn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):er;p>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${er}`);const c=[];let _=0;for(let A=0;A<er;++A){const U=A/v,M=Math.exp(-U*U/2);c.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-Kr?r-g+Kr:0),R=4*(this._cubeSize-y);ha(n,C,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Au)}}function sE(t){const e=[],n=[],i=[];let r=t;const s=t-Kr+1+Kh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Kr?l=Kh[o-t+Kr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),y=new Float32Array(c*x*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,U=R>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(M,v*x*R),g.set(h,p*x*R);const T=[R,R,R,R,R,R];y.set(T,c*x*R)}const C=new xr;C.setAttribute("position",new Xn(_,v)),C.setAttribute("uv",new Xn(g,p)),C.setAttribute("faceIndex",new Xn(y,c)),e.push(C),r>Kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ep(t,e,n){const i=new mr(t,e,n);return i.texture.mapping=Sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oE(t,e,n){const i=new Float32Array(er),r=new B(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function tp(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function np(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cc||l===Lc,f=l===hs||l===ps;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Jh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Jh(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,x=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,y=_.length;g<y;g+=3){const C=_[g+0],R=_[g+1],A=_[g+2];h.push(C,R,R,A,A,C)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const C=g+0,R=g+1,A=g+2;h.push(C,R,R,A,A,C)}}else return;const p=new(jg(h)?e_:Jg)(h,1);p.version=v;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function cE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function f(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function d(m,x,v){if(v===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,x,a,m*l,v),n.update(x,s,v)}function h(m,x,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<v;c++)this.render(m[c]/l,x[c]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,v);let c=0;for(let _=0;_<v;_++)c+=x[_];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function fE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dE(t,e){return t[0]-e[0]}function hE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let H=function(){ne.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let T=f.attributes.position.count*M,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const j=new Float32Array(T*W*4*v),ne=new $g(j,T,W,v);ne.type=wi,ne.needsUpdate=!0;const P=M*4;for(let X=0;X<v;X++){const Y=R[X],b=A[X],N=U[X],k=T*W*4*X;for(let q=0;q<Y.count;q++){const K=q*P;g===!0&&(o.fromBufferAttribute(Y,q),j[k+K+0]=o.x,j[k+K+1]=o.y,j[k+K+2]=o.z,j[k+K+3]=0),y===!0&&(o.fromBufferAttribute(b,q),j[k+K+4]=o.x,j[k+K+5]=o.y,j[k+K+6]=o.z,j[k+K+7]=0),C===!0&&(o.fromBufferAttribute(N,q),j[k+K+8]=o.x,j[k+K+9]=o.y,j[k+K+10]=o.z,j[k+K+11]=N.itemSize===4?o.w:1)}}p={count:v,texture:ne,size:new Xe(T,W)},s.set(f,p),f.addEventListener("dispose",H)}let c=0;for(let g=0;g<h.length;g++)c+=h[g];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[f.id]=v}for(let y=0;y<x;y++){const C=v[y];C[0]=y,C[1]=h[y]}v.sort(hE);for(let y=0;y<8;y++)y<x&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(dE);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+y)!==p[R]&&f.setAttribute("morphTarget"+y,p[R]),c&&f.getAttribute("morphNormal"+y)!==c[R]&&f.setAttribute("morphNormal"+y,c[R]),r[y]=A,_+=A):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class o_ extends un{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:ar,f!==ar&&f!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ar&&(i=Ti),i===void 0&&f===ms&&(i=or),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new un,l_=new o_(1,1);l_.compareFunction=Xg;const u_=new $g,c_=new Qx,f_=new i_,ip=[],rp=[],sp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ip[r];if(s===void 0&&(s=new Float32Array(r),ip[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tl(t,e){let n=rp[e];n===void 0&&(n=new Int32Array(e),rp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;ap.set(i),t.uniformMatrix2fv(this.addr,!1,ap),St(n,i)}}function yE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;op.set(i),t.uniformMatrix3fv(this.addr,!1,op),St(n,i)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;sp.set(i),t.uniformMatrix4fv(this.addr,!1,sp),St(n,i)}}function EE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function RE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?l_:a_;n.setTexture2D(e||s,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function UE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function NE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||u_,r)}function IE(t){switch(t){case 5126:return gE;case 35664:return _E;case 35665:return vE;case 35666:return xE;case 35674:return SE;case 35675:return yE;case 35676:return ME;case 5124:case 35670:return EE;case 35667:case 35671:return TE;case 35668:case 35672:return wE;case 35669:case 35673:return AE;case 5125:return RE;case 36294:return CE;case 36295:return LE;case 36296:return PE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return NE}}function FE(t,e){t.uniform1fv(this.addr,e)}function OE(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function zE(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function BE(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function kE(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HE(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GE(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function XE(t,e){t.uniform3iv(this.addr,e)}function jE(t,e){t.uniform4iv(this.addr,e)}function YE(t,e){t.uniform1uiv(this.addr,e)}function qE(t,e){t.uniform2uiv(this.addr,e)}function $E(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function ZE(t,e,n){const i=this.cache,r=e.length,s=Tl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a_,s[o])}function QE(t,e,n){const i=this.cache,r=e.length,s=Tl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||c_,s[o])}function JE(t,e,n){const i=this.cache,r=e.length,s=Tl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||f_,s[o])}function eT(t,e,n){const i=this.cache,r=e.length,s=Tl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||u_,s[o])}function tT(t){switch(t){case 5126:return FE;case 35664:return OE;case 35665:return zE;case 35666:return BE;case 35674:return kE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return jE;case 5125:return YE;case 36294:return qE;case 36295:return $E;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IE(n.type)}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tT(n.type)}}class rT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function lp(t,e){t.seq.push(e),t.map[e.id]=e}function sT(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),o=Pu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){lp(n,u===void 0?new nT(a,t,e):new iT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new rT(a),lp(n,d)),n=d}}}class Ra{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function up(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let aT=0;function lT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function uT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===tl&&n===el?i="LinearDisplayP3ToLinearSRGB":e===el&&n===tl&&(i="LinearSRGBToLinearDisplayP3"),t){case ci:case yl:return[i,"LinearTransferOETF"];case Ct:case Uf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function cp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lT(t.getShaderSource(e),o)}else return r}function cT(t,e){const n=uT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fT(t,e){let n;switch(e){case yx:n="Linear";break;case Mx:n="Reinhard";break;case Ex:n="OptimizedCineon";break;case Tx:n="ACESFilmic";break;case Ax:n="AgX";break;case wx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function dT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function hT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zr(t){return t!==""}function fp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(t){return t.replace(gT,vT)}const _T=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vT(t,e){let n=Ue[e];if(n===void 0){const i=_T.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ic(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(t){return t.replace(xT,ST)}function ST(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case hs:case ps:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function TT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ng:e="ENVMAP_BLENDING_MULTIPLY";break;case xx:e="ENVMAP_BLENDING_MIX";break;case Sx:e="ENVMAP_BLENDING_ADD";break}return e}function wT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=yT(n),u=MT(n),f=ET(n),d=TT(n),h=wT(n),m=n.isWebGL2?"":dT(n),x=hT(n),v=pT(s),p=r.createProgram();let c,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Zr).join(`
`),c.length>0&&(c+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Zr).join(`
`),_.length>0&&(_+=`
`)):(c=[pp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),_=[m,pp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Ii?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,cT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Ic(o),o=fp(o,n),o=dp(o,n),a=Ic(a),a=fp(a,n),a=dp(a,n),o=hp(o),a=hp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=g+c+o,C=g+_+a,R=up(r,r.VERTEX_SHADER,y),A=up(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(j){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(R).trim(),H=r.getShaderInfoLog(A).trim();let X=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const b=cp(r,R,"vertex"),N=cp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+b+`
`+N)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||H==="")&&(Y=!1);Y&&(j.diagnostics={runnable:X,programLog:ne,vertexShader:{log:P,prefix:c},fragmentShader:{log:H,prefix:_}})}r.deleteShader(R),r.deleteShader(A),M=new Ra(r,p),T=mT(r,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(p,oT)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let RT=0;class CT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LT(e),n.set(e,i)),i}}class LT{constructor(e){this.id=RT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,s,o){const a=new Kg,l=new CT,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,T,W,j,ne){const P=j.fog,H=ne.geometry,X=M.isMeshStandardMaterial?j.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),b=Y&&Y.mapping===Sl?Y.image.height:null,N=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,q=k!==void 0?k.length:0;let K=0;H.morphAttributes.position!==void 0&&(K=1),H.morphAttributes.normal!==void 0&&(K=2),H.morphAttributes.color!==void 0&&(K=3);let V,$,ae,fe;if(N){const kt=kn[N];V=kt.vertexShader,$=kt.fragmentShader}else V=M.vertexShader,$=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const pe=t.getRenderTarget(),Le=ne.isInstancedMesh===!0,be=ne.isBatchedMesh===!0,Ee=!!M.map,Ge=!!M.matcap,I=!!Y,Bt=!!M.aoMap,xe=!!M.lightMap,Re=!!M.bumpMap,me=!!M.normalMap,rt=!!M.displacementMap,Ne=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,O=M.anisotropy>0,ee=M.clearcoat>0,Q=M.iridescence>0,te=M.sheen>0,ge=M.transmission>0,le=O&&!!M.anisotropyMap,de=ee&&!!M.clearcoatMap,Me=ee&&!!M.clearcoatNormalMap,Ie=ee&&!!M.clearcoatRoughnessMap,Z=Q&&!!M.iridescenceMap,qe=Q&&!!M.iridescenceThicknessMap,ke=te&&!!M.sheenColorMap,Ae=te&&!!M.sheenRoughnessMap,ve=!!M.specularMap,he=!!M.specularColorMap,De=!!M.specularIntensityMap,je=ge&&!!M.transmissionMap,ut=ge&&!!M.thicknessMap,Oe=!!M.gradientMap,ie=!!M.alphaMap,L=M.alphaTest>0,se=!!M.alphaHash,oe=!!M.extensions,Te=!!H.attributes.uv1,Se=!!H.attributes.uv2,Ke=!!H.attributes.uv3;let Ze=Ii;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:f,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:$,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:be,instancing:Le,instancingColor:Le&&ne.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ci,map:Ee,matcap:Ge,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:b,aoMap:Bt,lightMap:xe,bumpMap:Re,normalMap:me,displacementMap:h&&rt,emissiveMap:Ne,normalMapObjectSpace:me&&M.normalMapType===zx,normalMapTangentSpace:me&&M.normalMapType===Wg,metalnessMap:w,roughnessMap:S,anisotropy:O,anisotropyMap:le,clearcoat:ee,clearcoatMap:de,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ie,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:qe,sheen:te,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:ve,specularColorMap:he,specularIntensityMap:De,transmission:ge,transmissionMap:je,thicknessMap:ut,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===rs,alphaMap:ie,alphaTest:L,alphaHash:se,combine:M.combine,mapUv:Ee&&v(M.map.channel),aoMapUv:Bt&&v(M.aoMap.channel),lightMapUv:xe&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:me&&v(M.normalMap.channel),displacementMapUv:rt&&v(M.displacementMap.channel),emissiveMapUv:Ne&&v(M.emissiveMap.channel),metalnessMapUv:w&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:le&&v(M.anisotropyMap.channel),clearcoatMapUv:de&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(M.sheenRoughnessMap.channel),specularMapUv:ve&&v(M.specularMap.channel),specularColorMapUv:he&&v(M.specularColorMap.channel),specularIntensityMapUv:De&&v(M.specularIntensityMap.channel),transmissionMapUv:je&&v(M.transmissionMap.channel),thicknessMapUv:ut&&v(M.thicknessMap.channel),alphaMapUv:ie&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Ke,pointsUvs:ne.isPoints===!0&&!!H.attributes.uv&&(Ee||ie),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ne.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)T.push(W),T.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(_(T,M),g(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=x[M.type];let W;if(T){const j=kn[T];W=dS.clone(j.uniforms)}else W=M.uniforms;return W}function C(M,T){let W;for(let j=0,ne=u.length;j<ne;j++){const P=u[j];if(P.cacheKey===T){W=P,++W.usedTimes;break}}return W===void 0&&(W=new AT(t,T,M,s),u.push(W)),W}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:U}}function bT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,x,v,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:v,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=v,c.group=p),e++,c}function a(d,h,m,x,v,p){const c=o(d,h,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,x,v,p){const c=o(d,h,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||DT),i.length>1&&i.sort(h||mp),r.length>1&&r.sort(h||mp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function UT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new gp,t.set(i,[o])):r>=s.length?(o=new gp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function OT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zT(t,e){const n=new NT,i=IT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new B);const s=new B,o=new vt,a=new vt;function l(f,d){let h=0,m=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let v=0,p=0,c=0,_=0,g=0,y=0,C=0,R=0,A=0,U=0,M=0;f.sort(OT);const T=d===!0?Math.PI:1;for(let j=0,ne=f.length;j<ne;j++){const P=f[j],H=P.color,X=P.intensity,Y=P.distance,b=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*X*T,m+=H.g*X*T,x+=H.b*X*T;else if(P.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],X);M++}else if(P.isDirectionalLight){const N=n.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const k=P.shadow,q=i.get(P);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,r.directionalShadow[v]=q,r.directionalShadowMap[v]=b,r.directionalShadowMatrix[v]=P.shadow.matrix,y++}r.directional[v]=N,v++}else if(P.isSpotLight){const N=n.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(H).multiplyScalar(X*T),N.distance=Y,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,r.spot[c]=N;const k=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[c]=k.matrix,P.castShadow){const q=i.get(P);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,r.spotShadow[c]=q,r.spotShadowMap[c]=b,R++}c++}else if(P.isRectAreaLight){const N=n.get(P);N.color.copy(H).multiplyScalar(X),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=N,_++}else if(P.isPointLight){const N=n.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*T),N.distance=P.distance,N.decay=P.decay,P.castShadow){const k=P.shadow,q=i.get(P);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,r.pointShadow[p]=q,r.pointShadowMap[p]=b,r.pointShadowMatrix[p]=P.shadow.matrix,C++}r.point[p]=N,p++}else if(P.isHemisphereLight){const N=n.get(P);N.skyColor.copy(P.color).multiplyScalar(X*T),N.groundColor.copy(P.groundColor).multiplyScalar(X*T),r.hemi[g]=N,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==v||W.pointLength!==p||W.spotLength!==c||W.rectAreaLength!==_||W.hemiLength!==g||W.numDirectionalShadows!==y||W.numPointShadows!==C||W.numSpotShadows!==R||W.numSpotMaps!==A||W.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,W.directionalLength=v,W.pointLength=p,W.spotLength=c,W.rectAreaLength=_,W.hemiLength=g,W.numDirectionalShadows=y,W.numPointShadows=C,W.numSpotShadows=R,W.numSpotMaps=A,W.numLightProbes=M,r.version=FT++)}function u(f,d){let h=0,m=0,x=0,v=0,p=0;const c=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const y=f[_];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),h++}else if(y.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function _p(t,e){const n=new zT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function BT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new _p(t,e),n.set(s,[l])):o>=a.length?(l=new _p(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class kT extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new If;const r=new Xe,s=new Xe,o=new wt,a=new kT({depthPacking:Ox}),l=new HT,u={},f=n.maxTextureSize,d={[Bi]:tn,[tn]:Bi,[ti]:ti},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:GT,fragmentShader:VT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new xr;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let c=this.type;this.render=function(R,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Ni),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ne=c!==Qn&&this.type===Qn,P=c===Qn&&this.type!==Qn;for(let H=0,X=R.length;H<X;H++){const Y=R[H],b=Y.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const N=b.getFrameExtents();if(r.multiply(N),s.copy(b.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,b.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,b.mapSize.y=s.y)),b.map===null||ne===!0||P===!0){const q=this.type!==Qn?{minFilter:Wt,magFilter:Wt}:{};b.map!==null&&b.map.dispose(),b.map=new mr(r.x,r.y,q),b.map.texture.name=Y.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const k=b.getViewportCount();for(let q=0;q<k;q++){const K=b.getViewport(q);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),j.viewport(o),b.updateMatrices(Y,q),i=b.getFrustum(),y(A,U,b.camera,Y,this.type)}b.isPointLightShadow!==!0&&this.type===Qn&&_(b,U),b.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(M,T,W)};function _(R,A){const U=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,U,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,U,m,v,null)}function g(R,A,U,M){let T=null;const W=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)T=W;else if(T=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=T.uuid,ne=A.uuid;let P=u[j];P===void 0&&(P={},u[j]=P);let H=P[ne];H===void 0&&(H=T.clone(),P[ne]=H,A.addEventListener("dispose",C)),T=H}if(T.visible=A.visible,T.wireframe=A.wireframe,M===Qn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=t.properties.get(T);j.light=U}return T}function y(R,A,U,M,T){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),P=R.material;if(Array.isArray(P)){const H=ne.groups;for(let X=0,Y=H.length;X<Y;X++){const b=H[X],N=P[b.materialIndex];if(N&&N.visible){const k=g(R,N,M,T);R.onBeforeShadow(t,R,A,U,ne,k,b),t.renderBufferDirect(U,null,ne,k,R,b),R.onAfterShadow(t,R,A,U,ne,k,b)}}}else if(P.visible){const H=g(R,P,M,T);R.onBeforeShadow(t,R,A,U,ne,H,null),t.renderBufferDirect(U,null,ne,H,R,null),R.onAfterShadow(t,R,A,U,ne,H,null)}}const j=R.children;for(let ne=0,P=j.length;ne<P;ne++)y(j[ne],A,U,M,T)}function C(R){R.target.removeEventListener("dispose",C);for(const U in u){const M=u[U],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function XT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const se=new wt;let oe=null;const Te=new wt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!L&&(t.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){L=Se},setClear:function(Se,Ke,Ze,yt,kt){kt===!0&&(Se*=yt,Ke*=yt,Ze*=yt),se.set(Se,Ke,Ze,yt),Te.equals(se)===!1&&(t.clearColor(Se,Ke,Ze,yt),Te.copy(se))},reset:function(){L=!1,oe=null,Te.set(-1,0,0,0)}}}function s(){let L=!1,se=null,oe=null,Te=null;return{setTest:function(Se){Se?be(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(Se){se!==Se&&!L&&(t.depthMask(Se),se=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case dx:t.depthFunc(t.NEVER);break;case hx:t.depthFunc(t.ALWAYS);break;case px:t.depthFunc(t.LESS);break;case Qa:t.depthFunc(t.LEQUAL);break;case mx:t.depthFunc(t.EQUAL);break;case gx:t.depthFunc(t.GEQUAL);break;case _x:t.depthFunc(t.GREATER);break;case vx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Te!==Se&&(t.clearDepth(Se),Te=Se)},reset:function(){L=!1,se=null,oe=null,Te=null}}}function o(){let L=!1,se=null,oe=null,Te=null,Se=null,Ke=null,Ze=null,yt=null,kt=null;return{setTest:function(Qe){L||(Qe?be(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!L&&(t.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Ht,On){(oe!==Qe||Te!==Ht||Se!==On)&&(t.stencilFunc(Qe,Ht,On),oe=Qe,Te=Ht,Se=On)},setOp:function(Qe,Ht,On){(Ke!==Qe||Ze!==Ht||yt!==On)&&(t.stencilOp(Qe,Ht,On),Ke=Qe,Ze=Ht,yt=On)},setLocked:function(Qe){L=Qe},setClear:function(Qe){kt!==Qe&&(t.clearStencil(Qe),kt=Qe)},reset:function(){L=!1,se=null,oe=null,Te=null,Se=null,Ke=null,Ze=null,yt=null,kt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,y=null,C=null,R=null,A=null,U=null,M=new We(0,0,0),T=0,W=!1,j=null,ne=null,P=null,H=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let b=!1,N=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(k)[1]),b=N>=1):k.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),b=N>=2);let q=null,K={};const V=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),ae=new wt().fromArray(V),fe=new wt().fromArray($);function pe(L,se,oe,Te){const Se=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<oe;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(se+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ke}const Le={};Le[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),be(t.DEPTH_TEST),l.setFunc(Qa),Ne(!1),w(Qd),be(t.CULL_FACE),me(Ni);function be(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ee(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ge(L,se){return m[L]!==se?(t.bindFramebuffer(L,se),m[L]=se,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(L,se){let oe=v,Te=!1;if(L)if(oe=x.get(se),oe===void 0&&(oe=[],x.set(se,oe)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(oe.length!==Se.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=Se.length;Ke<Ze;Ke++)oe[Ke]=t.COLOR_ATTACHMENT0+Ke;oe.length=Se.length,Te=!0}}else oe[0]!==t.COLOR_ATTACHMENT0&&(oe[0]=t.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==t.BACK&&(oe[0]=t.BACK,Te=!0);Te&&(n.isWebGL2?t.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Bt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const xe={[Ji]:t.FUNC_ADD,[Z0]:t.FUNC_SUBTRACT,[Q0]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[nh]=t.MIN,xe[ih]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(xe[nh]=L.MIN_EXT,xe[ih]=L.MAX_EXT)}const Re={[J0]:t.ZERO,[ex]:t.ONE,[tx]:t.SRC_COLOR,[Ac]:t.SRC_ALPHA,[ax]:t.SRC_ALPHA_SATURATE,[sx]:t.DST_COLOR,[ix]:t.DST_ALPHA,[nx]:t.ONE_MINUS_SRC_COLOR,[Rc]:t.ONE_MINUS_SRC_ALPHA,[ox]:t.ONE_MINUS_DST_COLOR,[rx]:t.ONE_MINUS_DST_ALPHA,[lx]:t.CONSTANT_COLOR,[ux]:t.ONE_MINUS_CONSTANT_COLOR,[cx]:t.CONSTANT_ALPHA,[fx]:t.ONE_MINUS_CONSTANT_ALPHA};function me(L,se,oe,Te,Se,Ke,Ze,yt,kt,Qe){if(L===Ni){c===!0&&(Ee(t.BLEND),c=!1);return}if(c===!1&&(be(t.BLEND),c=!0),L!==K0){if(L!==_||Qe!==W){if((g!==Ji||R!==Ji)&&(t.blendEquation(t.FUNC_ADD),g=Ji,R=Ji),Qe)switch(L){case rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jd:t.blendFunc(t.ONE,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case th:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,A=null,U=null,M.set(0,0,0),T=0,_=L,W=Qe}return}Se=Se||se,Ke=Ke||oe,Ze=Ze||Te,(se!==g||Se!==R)&&(t.blendEquationSeparate(xe[se],xe[Se]),g=se,R=Se),(oe!==y||Te!==C||Ke!==A||Ze!==U)&&(t.blendFuncSeparate(Re[oe],Re[Te],Re[Ke],Re[Ze]),y=oe,C=Te,A=Ke,U=Ze),(yt.equals(M)===!1||kt!==T)&&(t.blendColor(yt.r,yt.g,yt.b,kt),M.copy(yt),T=kt),_=L,W=!1}function rt(L,se){L.side===ti?Ee(t.CULL_FACE):be(t.CULL_FACE);let oe=L.side===tn;se&&(oe=!oe),Ne(oe),L.blending===rs&&L.transparent===!1?me(Ni):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Te=L.stencilWrite;u.setTest(Te),Te&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){j!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),j=L)}function w(L){L!==Y0?(be(t.CULL_FACE),L!==ne&&(L===Qd?t.cullFace(t.BACK):L===q0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),ne=L}function S(L){L!==P&&(b&&t.lineWidth(L),P=L)}function O(L,se,oe){L?(be(t.POLYGON_OFFSET_FILL),(H!==se||X!==oe)&&(t.polygonOffset(se,oe),H=se,X=oe)):Ee(t.POLYGON_OFFSET_FILL)}function ee(L){L?be(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Q(L){L===void 0&&(L=t.TEXTURE0+Y-1),q!==L&&(t.activeTexture(L),q=L)}function te(L,se,oe){oe===void 0&&(q===null?oe=t.TEXTURE0+Y-1:oe=q);let Te=K[oe];Te===void 0&&(Te={type:void 0,texture:void 0},K[oe]=Te),(Te.type!==L||Te.texture!==se)&&(q!==oe&&(t.activeTexture(oe),q=oe),t.bindTexture(L,se||Le[L]),Te.type=L,Te.texture=se)}function ge(){const L=K[q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){ae.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function je(L){fe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function ut(L,se){let oe=d.get(se);oe===void 0&&(oe=new WeakMap,d.set(se,oe));let Te=oe.get(L);Te===void 0&&(Te=t.getUniformBlockIndex(se,L.name),oe.set(L,Te))}function Oe(L,se){const Te=d.get(se).get(L);f.get(se)!==Te&&(t.uniformBlockBinding(se,Te,L.__bindingPointIndex),f.set(se,Te))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,K={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,y=null,C=null,R=null,A=null,U=null,M=new We(0,0,0),T=0,W=!1,j=null,ne=null,P=null,H=null,X=null,ae.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:be,disable:Ee,bindFramebuffer:Ge,drawBuffers:I,useProgram:Bt,setBlending:me,setMaterial:rt,setFlipSided:Ne,setCullFace:w,setLineWidth:S,setPolygonOffset:O,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:ve,texImage3D:he,updateUBOMapping:ut,uniformBlockBinding:Oe,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:Ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:qe,scissor:De,viewport:je,reset:ie}}function jT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return m?new OffscreenCanvas(w,S):il("canvas")}function v(w,S,O,ee){let Q=1;if((w.width>ee||w.height>ee)&&(Q=ee/Math.max(w.width,w.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=S?Nc:Math.floor,ge=te(Q*w.width),le=te(Q*w.height);d===void 0&&(d=x(ge,le));const de=O?x(ge,le):d;return de.width=ge,de.height=le,de.getContext("2d").drawImage(w,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ge+"x"+le+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Uh(w.width)&&Uh(w.height)}function c(w){return a?!1:w.wrapS!==Dn||w.wrapT!==Dn||w.minFilter!==Wt&&w.minFilter!==_n}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==Wt&&w.minFilter!==_n}function g(w){t.generateMipmap(w)}function y(w,S,O,ee,Q=!1){if(a===!1)return S;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=S;if(S===t.RED&&(O===t.FLOAT&&(te=t.R32F),O===t.HALF_FLOAT&&(te=t.R16F),O===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(te=t.R8UI),O===t.UNSIGNED_SHORT&&(te=t.R16UI),O===t.UNSIGNED_INT&&(te=t.R32UI),O===t.BYTE&&(te=t.R8I),O===t.SHORT&&(te=t.R16I),O===t.INT&&(te=t.R32I)),S===t.RG&&(O===t.FLOAT&&(te=t.RG32F),O===t.HALF_FLOAT&&(te=t.RG16F),O===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RGBA){const ge=Q?Ja:$e.getTransfer(ee);O===t.FLOAT&&(te=t.RGBA32F),O===t.HALF_FLOAT&&(te=t.RGBA16F),O===t.UNSIGNED_BYTE&&(te=ge===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(w,S,O){return _(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===Wt||w===rh||w===tu?t.NEAREST:t.LINEAR}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&f.delete(S)}function U(w){const S=w.target;S.removeEventListener("dispose",U),W(S)}function M(w){const S=i.get(w);if(S.__webglInit===void 0)return;const O=w.source,ee=h.get(O);if(ee){const Q=ee[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(w),Object.keys(ee).length===0&&h.delete(O)}i.remove(w)}function T(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const O=w.source,ee=h.get(O);delete ee[S.__cacheKey],o.memory.textures--}function W(w){const S=w.texture,O=i.get(w),ee=i.get(S);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)t.deleteFramebuffer(O.__webglFramebuffer[Q]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=S.length;Q<te;Q++){const ge=i.get(S[Q]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(S[Q])}i.remove(S),i.remove(w)}let j=0;function ne(){j=0}function P(){const w=j;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),j+=1,w}function H(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function X(w,S){const O=i.get(w);if(w.isVideoTexture&&rt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,w,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Y(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function b(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function N(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){fe(O,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const k={[Pc]:t.REPEAT,[Dn]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},q={[Wt]:t.NEAREST,[rh]:t.NEAREST_MIPMAP_NEAREST,[tu]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[Rx]:t.LINEAR_MIPMAP_NEAREST,[go]:t.LINEAR_MIPMAP_LINEAR},K={[Bx]:t.NEVER,[Xx]:t.ALWAYS,[kx]:t.LESS,[Xg]:t.LEQUAL,[Hx]:t.EQUAL,[Wx]:t.GEQUAL,[Gx]:t.GREATER,[Vx]:t.NOTEQUAL};function V(w,S,O){if(O?(t.texParameteri(w,t.TEXTURE_WRAP_S,k[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,k[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,k[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,q[S.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Dn||S.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==tu&&S.minFilter!==go||S.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===_o&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function $(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const ee=S.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=H(S);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[te].usedTimes++;const ge=Q[w.__cacheKey];ge!==void 0&&(Q[w.__cacheKey].usedTimes--,ge.usedTimes===0&&T(S)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return O}function ae(w,S,O){let ee=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=t.TEXTURE_3D);const Q=$(w,S),te=S.source;n.bindTexture(ee,w.__webglTexture,t.TEXTURE0+O);const ge=i.get(te);if(te.version!==ge.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const le=$e.getPrimaries($e.workingColorSpace),de=S.colorSpace===xn?null:$e.getPrimaries(S.colorSpace),Me=S.colorSpace===xn||le===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=c(S)&&p(S.image)===!1;let Z=v(S.image,Ie,!1,r.maxTextureSize);Z=Ne(S,Z);const qe=p(Z)||a,ke=s.convert(S.format,S.colorSpace);let Ae=s.convert(S.type),ve=y(S.internalFormat,ke,Ae,S.colorSpace,S.isVideoTexture);V(ee,S,qe);let he;const De=S.mipmaps,je=a&&S.isVideoTexture!==!0&&ve!==Gg,ut=ge.__version===void 0||Q===!0,Oe=C(S,Z,qe);if(S.isDepthTexture)ve=t.DEPTH_COMPONENT,a?S.type===wi?ve=t.DEPTH_COMPONENT32F:S.type===Ti?ve=t.DEPTH_COMPONENT24:S.type===or?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:S.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ar&&ve===t.DEPTH_COMPONENT&&S.type!==Df&&S.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ti,Ae=s.convert(S.type)),S.format===ms&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,S.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=or,Ae=s.convert(S.type))),ut&&(je?n.texStorage2D(t.TEXTURE_2D,1,ve,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,ve,Z.width,Z.height,0,ke,Ae,null));else if(S.isDataTexture)if(De.length>0&&qe){je&&ut&&n.texStorage2D(t.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ie=0,L=De.length;ie<L;ie++)he=De[ie],je?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ke,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ie,ve,he.width,he.height,0,ke,Ae,he.data);S.generateMipmaps=!1}else je?(ut&&n.texStorage2D(t.TEXTURE_2D,Oe,ve,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,ke,Ae,Z.data)):n.texImage2D(t.TEXTURE_2D,0,ve,Z.width,Z.height,0,ke,Ae,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,ve,De[0].width,De[0].height,Z.depth);for(let ie=0,L=De.length;ie<L;ie++)he=De[ie],S.format!==Un?ke!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,ke,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ve,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,ke,Ae,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ve,he.width,he.height,Z.depth,0,ke,Ae,he.data)}else{je&&ut&&n.texStorage2D(t.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ie=0,L=De.length;ie<L;ie++)he=De[ie],S.format!==Un?ke!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ke,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ke,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ie,ve,he.width,he.height,0,ke,Ae,he.data)}else if(S.isDataArrayTexture)je?(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,ve,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ke,Ae,Z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,ke,Ae,Z.data);else if(S.isData3DTexture)je?(ut&&n.texStorage3D(t.TEXTURE_3D,Oe,ve,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ke,Ae,Z.data)):n.texImage3D(t.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,ke,Ae,Z.data);else if(S.isFramebufferTexture){if(ut)if(je)n.texStorage2D(t.TEXTURE_2D,Oe,ve,Z.width,Z.height);else{let ie=Z.width,L=Z.height;for(let se=0;se<Oe;se++)n.texImage2D(t.TEXTURE_2D,se,ve,ie,L,0,ke,Ae,null),ie>>=1,L>>=1}}else if(De.length>0&&qe){je&&ut&&n.texStorage2D(t.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ie=0,L=De.length;ie<L;ie++)he=De[ie],je?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ke,Ae,he):n.texImage2D(t.TEXTURE_2D,ie,ve,ke,Ae,he);S.generateMipmaps=!1}else je?(ut&&n.texStorage2D(t.TEXTURE_2D,Oe,ve,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,Ae,Z)):n.texImage2D(t.TEXTURE_2D,0,ve,ke,Ae,Z);_(S,qe)&&g(ee),ge.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function fe(w,S,O){if(S.image.length!==6)return;const ee=$(w,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const te=i.get(Q);if(Q.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const ge=$e.getPrimaries($e.workingColorSpace),le=S.colorSpace===xn?null:$e.getPrimaries(S.colorSpace),de=S.colorSpace===xn||ge===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!Me&&!Ie?Z[ie]=v(S.image[ie],!1,!0,r.maxCubemapSize):Z[ie]=Ie?S.image[ie].image:S.image[ie],Z[ie]=Ne(S,Z[ie]);const qe=Z[0],ke=p(qe)||a,Ae=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),he=y(S.internalFormat,Ae,ve,S.colorSpace),De=a&&S.isVideoTexture!==!0,je=te.__version===void 0||ee===!0;let ut=C(S,qe,ke);V(t.TEXTURE_CUBE_MAP,S,ke);let Oe;if(Me){De&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,he,qe.width,qe.height);for(let ie=0;ie<6;ie++){Oe=Z[ie].mipmaps;for(let L=0;L<Oe.length;L++){const se=Oe[L];S.format!==Un?Ae!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,se.width,se.height,Ae,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,se.width,se.height,Ae,ve,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,he,se.width,se.height,0,Ae,ve,se.data)}}}else{Oe=S.mipmaps,De&&je&&(Oe.length>0&&ut++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,he,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(Ie){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,Ae,ve,Z[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,Z[ie].width,Z[ie].height,0,Ae,ve,Z[ie].data);for(let L=0;L<Oe.length;L++){const oe=Oe[L].image[ie].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,oe.width,oe.height,Ae,ve,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,he,oe.width,oe.height,0,Ae,ve,oe.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,ve,Z[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,Ae,ve,Z[ie]);for(let L=0;L<Oe.length;L++){const se=Oe[L];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,Ae,ve,se.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,he,Ae,ve,se.image[ie])}}}_(S,ke)&&g(t.TEXTURE_CUBE_MAP),te.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function pe(w,S,O,ee,Q,te){const ge=s.convert(O.format,O.colorSpace),le=s.convert(O.type),de=y(O.internalFormat,ge,le,O.colorSpace);if(!i.get(S).__hasExternalTextures){const Ie=Math.max(1,S.width>>te),Z=Math.max(1,S.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,de,Ie,Z,S.depth,0,ge,le,null):n.texImage2D(Q,te,de,Ie,Z,0,ge,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Q,i.get(O).__webglTexture,0,Re(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,Q,i.get(O).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(w,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||me(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===wi?ee=t.DEPTH_COMPONENT32F:Q.type===Ti&&(ee=t.DEPTH_COMPONENT24));const te=Re(S);me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Re(S);O&&me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],ge=s.convert(te.format,te.colorSpace),le=s.convert(te.type),de=y(te.internalFormat,ge,le,te.colorSpace),Me=Re(S);O&&me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ee=i.get(S.depthTexture).__webglTexture,Q=Re(S);if(S.depthTexture.format===ar)me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(S.depthTexture.format===ms)me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const S=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[ee],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(w,S,O){const ee=i.get(w);S!==void 0&&pe(ee.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ee(w)}function I(w){const S=w.texture,O=i.get(w),ee=i.get(S);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=S.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,ge=p(w)||a;if(Q){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[le][de]=t.createFramebuffer()}else O.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const le=w.texture;for(let de=0,Me=le.length;de<Me;de++){const Ie=i.get(le[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&me(w)===!1){const le=te?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Me=le[de];O.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Ie=s.convert(Me.format,Me.colorSpace),Z=s.convert(Me.type),qe=y(Me.internalFormat,Ie,Z,Me.colorSpace,w.isXRRenderTarget===!0),ke=Re(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,qe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,O.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),V(t.TEXTURE_CUBE_MAP,S,ge);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(O.__webglFramebuffer[le][de],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else pe(O.__webglFramebuffer[le],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(S,ge)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const le=w.texture;for(let de=0,Me=le.length;de<Me;de++){const Ie=le[de],Z=i.get(Ie);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),V(t.TEXTURE_2D,Ie,ge),pe(O.__webglFramebuffer,w,Ie,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),_(Ie,ge)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,ee.__webglTexture),V(le,S,ge),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(O.__webglFramebuffer[de],w,S,t.COLOR_ATTACHMENT0,le,de);else pe(O.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,le,0);_(S,ge)&&g(le),n.unbindTexture()}w.depthBuffer&&Ee(w)}function Bt(w){const S=p(w)||a,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,Q=O.length;ee<Q;ee++){const te=O[ee];if(_(te,S)){const ge=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(te).__webglTexture;n.bindTexture(ge,le),g(ge),n.unbindTexture()}}}function xe(w){if(a&&w.samples>0&&me(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,ee=w.height;let Q=t.COLOR_BUFFER_BIT;const te=[],ge=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let Me=0;Me<S.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){te.push(t.COLOR_ATTACHMENT0+Me),w.depthBuffer&&te.push(ge);const Ie=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ie===!1&&(w.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Me]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),de){const Z=i.get(S[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<S.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,le.__webglColorRenderbuffer[Me]);const Ie=i.get(S[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(w){return Math.min(r.maxSamples,w.samples)}function me(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(w){const S=o.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function Ne(w,S){const O=w.colorSpace,ee=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Dc||O!==ci&&O!==xn&&($e.getTransfer(O)===tt?a===!1?e.has("EXT_sRGB")===!0&&ee===Un?(w.format=Dc,w.minFilter=_n,w.generateMipmaps=!1):S=Yg.sRGBToLinear(S):(ee!==Un||Q!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=b,this.setTextureCube=N,this.rebindTextures=Ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=me}function YT(t,e,n){const i=n.isWebGL2;function r(s,o=xn){let a;const l=$e.getTransfer(o);if(s===Fi)return t.UNSIGNED_BYTE;if(s===Og)return t.UNSIGNED_SHORT_4_4_4_4;if(s===zg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Cx)return t.BYTE;if(s===Lx)return t.SHORT;if(s===Df)return t.UNSIGNED_SHORT;if(s===Fg)return t.INT;if(s===Ti)return t.UNSIGNED_INT;if(s===wi)return t.FLOAT;if(s===_o)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Px)return t.ALPHA;if(s===Un)return t.RGBA;if(s===bx)return t.LUMINANCE;if(s===Dx)return t.LUMINANCE_ALPHA;if(s===ar)return t.DEPTH_COMPONENT;if(s===ms)return t.DEPTH_STENCIL;if(s===Dc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ux)return t.RED;if(s===Bg)return t.RED_INTEGER;if(s===Nx)return t.RG;if(s===kg)return t.RG_INTEGER;if(s===Hg)return t.RGBA_INTEGER;if(s===nu||s===iu||s===ru||s===su)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sh||s===oh||s===ah||s===lh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uh||s===ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===uh)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ch)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh||s===Eh||s===Th)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Th)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ou||s===wh||s===Ah)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ou)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ix||s===Rh||s===Ch||s===Lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ou)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===or?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qT extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $T={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($T)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class KT extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],g=[],y=new Xe;let C=null;const R=new vn;R.layers.enable(1),R.viewport=new wt;const A=new vn;A.layers.enable(2),A.viewport=new wt;const U=[R,A],M=new qT;M.layers.enable(1),M.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=_[V];return $===void 0&&($=new bu,_[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=_[V];return $===void 0&&($=new bu,_[V]=$),$.getGripSpace()},this.getHand=function(V){let $=_[V];return $===void 0&&($=new bu,_[V]=$),$.getHandSpace()};function j(V){const $=g.indexOf(V.inputSource);if($===-1)return;const ae=_[$];ae!==void 0&&(ae.update(V.inputSource,V.frame,u||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function ne(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",P);for(let V=0;V<_.length;V++){const $=g[V];$!==null&&(g[V]=null,_[V].disconnect($))}T=null,W=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,c=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new mr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ae=null,fe=null;v.depth&&(fe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=v.stencil?ms:ar,ae=v.stencil?or:Ti);const pe={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new mr(h.textureWidth,h.textureHeight,{format:Un,type:Fi,depthTexture:new o_(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Le=e.properties.get(c);Le.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(V){for(let $=0;$<V.removed.length;$++){const ae=V.removed[$],fe=g.indexOf(ae);fe>=0&&(g[fe]=null,_[fe].disconnect(ae))}for(let $=0;$<V.added.length;$++){const ae=V.added[$];let fe=g.indexOf(ae);if(fe===-1){for(let Le=0;Le<_.length;Le++)if(Le>=g.length){g.push(ae),fe=Le;break}else if(g[Le]===null){g[Le]=ae,fe=Le;break}if(fe===-1)break}const pe=_[fe];pe&&pe.connect(ae)}}const H=new B,X=new B;function Y(V,$,ae){H.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const fe=H.distanceTo(X),pe=$.projectionMatrix.elements,Le=ae.projectionMatrix.elements,be=pe[14]/(pe[10]-1),Ee=pe[14]/(pe[10]+1),Ge=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],Bt=(pe[8]-1)/pe[0],xe=(Le[8]+1)/Le[0],Re=be*Bt,me=be*xe,rt=fe/(-Bt+xe),Ne=rt*-Bt;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ne),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=be+rt,S=Ee+rt,O=Re-Ne,ee=me+(fe-Ne),Q=Ge*Ee/S*w,te=I*Ee/S*w;V.projectionMatrix.makePerspective(O,ee,Q,te,w,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function b(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;M.near=A.near=R.near=V.near,M.far=A.far=R.far=V.far,(T!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,W=M.far);const $=V.parent,ae=M.cameras;b(M,$);for(let fe=0;fe<ae.length;fe++)b(ae[fe],$);ae.length===2?Y(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),N(V,M,$)};function N(V,$,ae){ae===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Uc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let k=null;function q(V,$){if(f=$.getViewerPose(u||o),x=$,f!==null){const ae=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let fe=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let pe=0;pe<ae.length;pe++){const Le=ae[pe];let be=null;if(m!==null)be=m.getViewport(Le);else{const Ge=d.getViewSubImage(h,Le);be=Ge.viewport,pe===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let Ee=U[pe];Ee===void 0&&(Ee=new vn,Ee.layers.enable(pe),Ee.viewport=new wt,U[pe]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ee)}}for(let ae=0;ae<_.length;ae++){const fe=g[ae],pe=_[ae];fe!==null&&pe!==void 0&&pe.update(fe,$,u||o)}k&&k(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const K=new r_;K.setAnimationLoop(q),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function ZT(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,t_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===tn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===tn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===tn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(x(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",p));const C=g.program;i.updateUBOMapping(_,C);const R=e.render.frame;s[_.id]!==R&&(h(_),s[_.id]=R)}function f(_){const g=d();_.__bindingPointIndex=g;const y=t.createBuffer(),C=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],y=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,A=y.length;R<A;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=U.length;M<T;M++){const W=U[M];if(m(W,R,M,C)===!0){const j=W.__offset,ne=Array.isArray(W.value)?W.value:[W.value];let P=0;for(let H=0;H<ne.length;H++){const X=ne[H],Y=v(X);typeof X=="number"||typeof X=="boolean"?(W.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,j+P,W.__data)):X.isMatrix3?(W.__data[0]=X.elements[0],W.__data[1]=X.elements[1],W.__data[2]=X.elements[2],W.__data[3]=0,W.__data[4]=X.elements[3],W.__data[5]=X.elements[4],W.__data[6]=X.elements[5],W.__data[7]=0,W.__data[8]=X.elements[6],W.__data[9]=X.elements[7],W.__data[10]=X.elements[8],W.__data[11]=0):(X.toArray(W.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,y,C){const R=_.value,A=g+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const U=C[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function x(_){const g=_.uniforms;let y=0;const C=16;for(let A=0,U=g.length;A<U;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let T=0,W=M.length;T<W;T++){const j=M[T],ne=Array.isArray(j.value)?j.value:[j.value];for(let P=0,H=ne.length;P<H;P++){const X=ne[P],Y=v(X),b=y%C;b!==0&&C-b<Y.boundary&&(y+=C-b),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=Y.storage}}}const R=y%C;return R>0&&(y+=C-R),_.__size=y,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class d_{constructor(e={}){const{canvas:n=Yx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const g=this;let y=!1,C=0,R=0,A=null,U=-1,M=null;const T=new wt,W=new wt;let j=null;const ne=new We(0);let P=0,H=n.width,X=n.height,Y=1,b=null,N=null;const k=new wt(0,0,H,X),q=new wt(0,0,H,X);let K=!1;const V=new If;let $=!1,ae=!1,fe=null;const pe=new vt,Le=new Xe,be=new B,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return A===null?Y:1}let I=i;function Bt(E,D){for(let z=0;z<E.length;z++){const G=E[z],F=n.getContext(G,D);if(F!==null)return F}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bf}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),I=Bt(D,E),I===null)throw Bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Re,me,rt,Ne,w,S,O,ee,Q,te,ge,le,de,Me,Ie,Z,qe,ke,Ae,ve,he,De,je;function ut(){xe=new lE(I),Re=new nE(I,xe,e),xe.init(Re),he=new YT(I,xe,Re),me=new XT(I,xe,Re),rt=new fE(I),Ne=new bT,w=new jT(I,xe,me,Ne,Re,he,rt),S=new rE(g),O=new aE(g),ee=new xS(I,Re),De=new eE(I,xe,ee,Re),Q=new uE(I,ee,rt,De),te=new mE(I,Q,ee,rt),ke=new pE(I,Re,w),Ie=new iE(Ne),ge=new PT(g,S,O,xe,Re,De,Ie),le=new ZT(g,Ne),de=new UT,Me=new BT(xe,Re),qe=new JM(g,S,O,me,te,h,l),Z=new WT(g,te,Re),je=new QT(I,rt,Re,me),Ae=new tE(I,xe,rt,Re),ve=new cE(I,xe,rt,Re),rt.programs=ge.programs,g.capabilities=Re,g.extensions=xe,g.properties=Ne,g.renderLists=de,g.shadowMap=Z,g.state=me,g.info=rt}ut();const Oe=new KT(g,I);this.xr=Oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(H,X,!1))},this.getSize=function(E){return E.set(H,X)},this.setSize=function(E,D,z=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,X=D,n.width=Math.floor(E*Y),n.height=Math.floor(D*Y),z===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(H*Y,X*Y).floor()},this.setDrawingBufferSize=function(E,D,z){H=E,X=D,Y=z,n.width=Math.floor(E*z),n.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,D,z,G){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,D,z,G),me.viewport(T.copy(k).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,D,z,G){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,D,z,G),me.scissor(W.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){me.setScissorTest(K=E)},this.setOpaqueSort=function(E){b=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(E=!0,D=!0,z=!0){let G=0;if(E){let F=!1;if(A!==null){const ue=A.texture.format;F=ue===Hg||ue===kg||ue===Bg}if(F){const ue=A.texture.type,_e=ue===Fi||ue===Ti||ue===Df||ue===or||ue===Og||ue===zg,ye=qe.getClearColor(),we=qe.getClearAlpha(),Fe=ye.r,Ce=ye.g,Pe=ye.b;_e?(m[0]=Fe,m[1]=Ce,m[2]=Pe,m[3]=we,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Fe,x[1]=Ce,x[2]=Pe,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}D&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),Me.dispose(),Ne.dispose(),S.dispose(),O.dispose(),te.dispose(),De.dispose(),je.dispose(),ge.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",kt),Oe.removeEventListener("sessionend",Qe),fe&&(fe.dispose(),fe=null),Ht.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=rt.autoReset,D=Z.enabled,z=Z.autoUpdate,G=Z.needsUpdate,F=Z.type;ut(),rt.autoReset=E,Z.enabled=D,Z.autoUpdate=z,Z.needsUpdate=G,Z.type=F}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const D=E.target;D.removeEventListener("dispose",oe),Te(D)}function Te(E){Se(E),Ne.remove(E)}function Se(E){const D=Ne.get(E).programs;D!==void 0&&(D.forEach(function(z){ge.releaseProgram(z)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,G,F,ue){D===null&&(D=Ee);const _e=F.isMesh&&F.matrixWorld.determinant()<0,ye=m_(E,D,z,G,F);me.setMaterial(G,_e);let we=z.index,Fe=1;if(G.wireframe===!0){if(we=Q.getWireframeAttribute(z),we===void 0)return;Fe=2}const Ce=z.drawRange,Pe=z.attributes.position;let dt=Ce.start*Fe,nn=(Ce.start+Ce.count)*Fe;ue!==null&&(dt=Math.max(dt,ue.start*Fe),nn=Math.min(nn,(ue.start+ue.count)*Fe)),we!==null?(dt=Math.max(dt,0),nn=Math.min(nn,we.count)):Pe!=null&&(dt=Math.max(dt,0),nn=Math.min(nn,Pe.count));const Mt=nn-dt;if(Mt<0||Mt===1/0)return;De.setup(F,G,ye,z,we);let jn,st=Ae;if(we!==null&&(jn=ee.get(we),st=ve,st.setIndex(jn)),F.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*Ge()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(F.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),me.setLineWidth(ze*Ge()),F.isLineSegments?st.setMode(I.LINES):F.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else F.isPoints?st.setMode(I.POINTS):F.isSprite&&st.setMode(I.TRIANGLES);if(F.isBatchedMesh)st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)st.renderInstances(dt,Mt,F.count);else if(z.isInstancedBufferGeometry){const ze=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wl=Math.min(z.instanceCount,ze);st.renderInstances(dt,Mt,wl)}else st.render(dt,Mt)};function Ke(E,D,z){E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Co(E,D,z),E.side=Bi,E.needsUpdate=!0,Co(E,D,z),E.side=ti):Co(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),p=Me.get(z),p.init(),_.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(g._useLegacyLights);const G=new Set;return E.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const ye=ue[_e];Ke(ye,z,F),G.add(ye)}else Ke(ue,z,F),G.add(ue)}),_.pop(),p=null,G},this.compileAsync=function(E,D,z=null){const G=this.compile(E,D,z);return new Promise(F=>{function ue(){if(G.forEach(function(_e){Ne.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){F(E);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function yt(E){Ze&&Ze(E)}function kt(){Ht.stop()}function Qe(){Ht.start()}const Ht=new r_;Ht.setAnimationLoop(yt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){Ze=E,Oe.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Oe.addEventListener("sessionstart",kt),Oe.addEventListener("sessionend",Qe),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,D,A),p=Me.get(E,_.length),p.init(),_.push(p),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,$=Ie.init(this.clippingPlanes,ae),v=de.get(E,c.length),v.init(),c.push(v),On(E,D,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(b,N),this.info.render.frame++,$===!0&&Ie.beginShadows();const z=p.state.shadowsArray;if(Z.render(z,E,D),$===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(v,E),p.setupLights(g._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let F=0,ue=G.length;F<ue;F++){const _e=G[F];Of(v,E,_e,_e.viewport)}}else Of(v,E,D);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(g,E,D),De.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function On(E,D,z,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){G&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const _e=te.update(E),ye=E.material;ye.visible&&v.push(E,_e,ye,z,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const _e=te.update(E),ye=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),be.copy(_e.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const we=_e.groups;for(let Fe=0,Ce=we.length;Fe<Ce;Fe++){const Pe=we[Fe],dt=ye[Pe.materialIndex];dt&&dt.visible&&v.push(E,_e,dt,z,be.z,Pe)}}else ye.visible&&v.push(E,_e,ye,z,be.z,null)}}const ue=E.children;for(let _e=0,ye=ue.length;_e<ye;_e++)On(ue[_e],D,z,G)}function Of(E,D,z,G){const F=E.opaque,ue=E.transmissive,_e=E.transparent;p.setupLightsView(z),$===!0&&Ie.setGlobalState(g.clippingPlanes,z),ue.length>0&&p_(F,ue,D,z),G&&me.viewport(T.copy(G)),F.length>0&&Ro(F,D,z),ue.length>0&&Ro(ue,D,z),_e.length>0&&Ro(_e,D,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function p_(E,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=Re.isWebGL2;fe===null&&(fe=new mr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?_o:Fi,minFilter:go,samples:ue?4:0})),g.getDrawingBufferSize(Le),ue?fe.setSize(Le.x,Le.y):fe.setSize(Nc(Le.x),Nc(Le.y));const _e=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(ne),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=Ii,Ro(E,z,G),w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe);let we=!1;for(let Fe=0,Ce=D.length;Fe<Ce;Fe++){const Pe=D[Fe],dt=Pe.object,nn=Pe.geometry,Mt=Pe.material,jn=Pe.group;if(Mt.side===ti&&dt.layers.test(G.layers)){const st=Mt.side;Mt.side=tn,Mt.needsUpdate=!0,zf(dt,z,G,nn,Mt,jn),Mt.side=st,Mt.needsUpdate=!0,we=!0}}we===!0&&(w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe)),g.setRenderTarget(_e),g.setClearColor(ne,P),g.toneMapping=ye}function Ro(E,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ue=E.length;F<ue;F++){const _e=E[F],ye=_e.object,we=_e.geometry,Fe=G===null?_e.material:G,Ce=_e.group;ye.layers.test(z.layers)&&zf(ye,D,z,we,Fe,Ce)}}function zf(E,D,z,G,F,ue){E.onBeforeRender(g,D,z,G,F,ue),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(g,D,z,G,E,ue),F.transparent===!0&&F.side===ti&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,g.renderBufferDirect(z,D,G,F,E,ue),F.side=Bi,F.needsUpdate=!0,g.renderBufferDirect(z,D,G,F,E,ue),F.side=ti):g.renderBufferDirect(z,D,G,F,E,ue),E.onAfterRender(g,D,z,G,F,ue)}function Co(E,D,z){D.isScene!==!0&&(D=Ee);const G=Ne.get(E),F=p.state.lights,ue=p.state.shadowsArray,_e=F.state.version,ye=ge.getParameters(E,F.state,ue,D,z),we=ge.getProgramCacheKey(ye);let Fe=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||G.environment),Fe===void 0&&(E.addEventListener("dispose",oe),Fe=new Map,G.programs=Fe);let Ce=Fe.get(we);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===_e)return kf(E,ye),Ce}else ye.uniforms=ge.getUniforms(E),E.onBuild(z,ye,g),E.onBeforeCompile(ye,g),Ce=ge.acquireProgram(ye,we),Fe.set(we,Ce),G.uniforms=ye.uniforms;const Pe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=Ie.uniform),kf(E,ye),G.needsLights=__(E),G.lightsStateVersion=_e,G.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Bf(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ra.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function kf(E,D){const z=Ne.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function m_(E,D,z,G,F){D.isScene!==!0&&(D=Ee),w.resetTextureUnits();const ue=D.fog,_e=G.isMeshStandardMaterial?D.environment:null,ye=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ci,we=(G.isMeshStandardMaterial?O:S).get(G.envMap||_e),Fe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!z.morphAttributes.position,dt=!!z.morphAttributes.normal,nn=!!z.morphAttributes.color;let Mt=Ii;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const jn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=jn!==void 0?jn.length:0,ze=Ne.get(G),wl=p.state.lights;if($===!0&&(ae===!0||E!==M)){const hn=E===M&&G.id===U;Ie.setState(G,E,hn)}let ct=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==wl.state.version||ze.outputColorSpace!==ye||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==we||G.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ie.numPlanes||ze.numIntersection!==Ie.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Ce||ze.morphTargets!==Pe||ze.morphNormals!==dt||ze.morphColors!==nn||ze.toneMapping!==Mt||Re.isWebGL2===!0&&ze.morphTargetsCount!==st)&&(ct=!0):(ct=!0,ze.__version=G.version);let Vi=ze.currentProgram;ct===!0&&(Vi=Co(G,D,F));let Hf=!1,Es=!1,Al=!1;const bt=Vi.getUniforms(),Wi=ze.uniforms;if(me.useProgram(Vi.program)&&(Hf=!0,Es=!0,Al=!0),G.id!==U&&(U=G.id,Es=!0),Hf||M!==E){bt.setValue(I,"projectionMatrix",E.projectionMatrix),bt.setValue(I,"viewMatrix",E.matrixWorldInverse);const hn=bt.map.cameraPosition;hn!==void 0&&hn.setValue(I,be.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Es=!0,Al=!0)}if(F.isSkinnedMesh){bt.setOptional(I,F,"bindMatrix"),bt.setOptional(I,F,"bindMatrixInverse");const hn=F.skeleton;hn&&(Re.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),bt.setValue(I,"boneTexture",hn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(bt.setOptional(I,F,"batchingTexture"),bt.setValue(I,"batchingTexture",F._matricesTexture,w));const Rl=z.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0&&Re.isWebGL2===!0)&&ke.update(F,z,Vi),(Es||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,bt.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Es&&(bt.setValue(I,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&g_(Wi,Al),ue&&G.fog===!0&&le.refreshFogUniforms(Wi,ue),le.refreshMaterialUniforms(Wi,G,Y,X,fe),Ra.upload(I,Bf(ze),Wi,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ra.upload(I,Bf(ze),Wi,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(I,"center",F.center),bt.setValue(I,"modelViewMatrix",F.modelViewMatrix),bt.setValue(I,"normalMatrix",F.normalMatrix),bt.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const hn=G.uniformsGroups;for(let Cl=0,v_=hn.length;Cl<v_;Cl++)if(Re.isWebGL2){const Gf=hn[Cl];je.update(Gf,Vi),je.bind(Gf,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function g_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function __(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,z){Ne.get(E.texture).__webglTexture=D,Ne.get(E.depthTexture).__webglTexture=z;const G=Ne.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const z=Ne.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){A=E,C=D,R=z;let G=!0,F=null,ue=!1,_e=!1;if(E){const we=Ne.get(E);we.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):we.__webglFramebuffer===void 0?w.setupRenderTarget(E):we.__hasExternalTextures&&w.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Ce=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?F=Ce[D][z]:F=Ce[D],ue=!0):Re.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?F=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[z]:F=Ce,T.copy(E.viewport),W.copy(E.scissor),j=E.scissorTest}else T.copy(k).multiplyScalar(Y).floor(),W.copy(q).multiplyScalar(Y).floor(),j=K;if(me.bindFramebuffer(I.FRAMEBUFFER,F)&&Re.drawBuffers&&G&&me.drawBuffers(E,F),me.viewport(T),me.scissor(W),me.setScissorTest(j),ue){const we=Ne.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,z)}else if(_e){const we=Ne.get(E.texture),Fe=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,z||0,Fe)}U=-1},this.readRenderTargetPixels=function(E,D,z,G,F,ue,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){me.bindFramebuffer(I.FRAMEBUFFER,ye);try{const we=E.texture,Fe=we.format,Ce=we.type;if(Fe!==Un&&he.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===_o&&(xe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ce!==Fi&&he.convert(Ce)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===wi&&(Re.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&z>=0&&z<=E.height-F&&I.readPixels(D,z,G,F,he.convert(Fe),he.convert(Ce),ue)}finally{const we=A!==null?Ne.get(A).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(E,D,z=0){const G=Math.pow(2,-z),F=Math.floor(D.image.width*G),ue=Math.floor(D.image.height*G);w.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,E.x,E.y,F,ue),me.unbindTexture()},this.copyTextureToTexture=function(E,D,z,G=0){const F=D.image.width,ue=D.image.height,_e=he.convert(z.format),ye=he.convert(z.type);w.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,E.x,E.y,F,ue,_e,ye,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,_e,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,E.x,E.y,_e,ye,D.image),G===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z,G,F=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,_e=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,we=he.convert(G.format),Fe=he.convert(G.type);let Ce;if(G.isData3DTexture)w.setTexture3D(G,0),Ce=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),nn=I.getParameter(I.UNPACK_SKIP_PIXELS),Mt=I.getParameter(I.UNPACK_SKIP_ROWS),jn=I.getParameter(I.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[F]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(Ce,F,D.x,D.y,D.z,ue,_e,ye,we,Fe,st.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ce,F,D.x,D.y,D.z,ue,_e,ye,we,st.data)):I.texSubImage3D(Ce,F,D.x,D.y,D.z,ue,_e,ye,we,Fe,st),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jn),F===0&&G.generateMipmaps&&I.generateMipmap(Ce),me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,me.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Uf?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===yl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?lr:Vg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?Ct:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JT extends d_{}JT.prototype.isWebGL1Renderer=!0;class ew extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class vp extends Ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h_ extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Du=new vt,xp=new B,Sp=new B;class tw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xp.setFromMatrixPosition(e.matrixWorld),n.position.copy(xp),Sp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sp),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nw extends tw{constructor(){super(new s_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iw extends h_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new nw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rw extends h_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);function sw(){const t=Zs.useRef(null);return Zs.useEffect(()=>{const e=t.current;if(!e)return;const n=new ew,i=new vn(60,e.clientWidth/e.clientHeight,.1,1e3);i.position.set(6,6,10),i.lookAt(0,0,0);const r=new d_({antialias:!0});r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const s=new iw(16777215,1);s.position.set(5,10,7),n.add(s),n.add(new rw(16777215,.4));const o=new Gn(new ys(2,2,2),new vp);o.position.set(0,1,0),n.add(o);const a=new Gn(new El(50,50),new vp);a.rotation.x=-Math.PI/2,n.add(a);let l=0;const u=()=>{l=requestAnimationFrame(u),o.rotation.y+=.01,r.render(n,i)};u();const f=()=>{const d=t.current;d&&(i.aspect=d.clientWidth/d.clientHeight,i.updateProjectionMatrix(),r.setSize(d.clientWidth,d.clientHeight))};return window.addEventListener("resize",f),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",f),r.dispose(),e.removeChild(r.domElement)}},[]),Or.jsxs("div",{style:{height:"100vh",background:"#0b0f16",color:"#e7eefc"},children:[Or.jsx("div",{style:{height:48,display:"flex",alignItems:"center",padding:"0 12px",borderBottom:"1px solid #23304a"},children:Or.jsx("b",{children:"Web Roblox Studio"})}),Or.jsx("div",{ref:t,style:{height:"calc(100vh - 48px)"}})]})}Uu.createRoot(document.getElementById("root")).render(Or.jsx(I_.StrictMode,{children:Or.jsx(sw,{})}));

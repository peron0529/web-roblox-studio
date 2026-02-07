(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xm={exports:{}},Ul={},ym={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),v0=Symbol.for("react.portal"),x0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),T0=Symbol.for("react.forward_ref"),w0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),Ad=Symbol.iterator;function C0(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=zs.prototype;function vf(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var xf=vf.prototype=new Tm;xf.constructor=vf;Mm(xf,zs.prototype);xf.isPureReactComponent=!0;var Rd=Array.isArray,wm=Object.prototype.hasOwnProperty,yf={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:t,key:s,ref:o,props:r,_owner:yf.current}}function P0(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function b0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cd=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b0(""+t.key):e.toString(36)}function Va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case v0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ou(o,0):i,Rd(r)?(n="",t!=null&&(n=t.replace(Cd,"$&/")+"/"),Va(r,e,n,"",function(c){return c})):r!=null&&(Sf(r)&&(r=P0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ou(s,a);o+=Va(s,e,n,l,r)}else if(l=C0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,a++),o+=Va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var i=[],r=0;return Va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function L0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Wa={transition:null},D0={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:yf};function Cm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!Sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=zs;je.Fragment=x0;je.Profiler=S0;je.PureComponent=vf;je.StrictMode=y0;je.Suspense=w0;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;je.act=Cm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ho,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:E0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:M0,_context:t},t.Consumer=t};je.createElement=Rm;je.createFactory=function(t){var e=Rm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:T0,render:t}};je.isValidElement=Sf;je.lazy=function(t){return{$$typeof:R0,_payload:{_status:-1,_result:t},_init:L0}};je.memo=function(t,e){return{$$typeof:A0,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};je.unstable_act=Cm;je.useCallback=function(t,e){return rn.current.useCallback(t,e)};je.useContext=function(t){return rn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};je.useEffect=function(t,e){return rn.current.useEffect(t,e)};je.useId=function(){return rn.current.useId()};je.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return rn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};je.useRef=function(t){return rn.current.useRef(t)};je.useState=function(t){return rn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return rn.current.useTransition()};je.version="18.3.1";ym.exports=je;var Rt=ym.exports;const I0=_0(Rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=Rt,N0=Symbol.for("react.element"),O0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,z0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)F0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N0,type:t,key:s,ref:o,props:r,_owner:z0.current}}Ul.Fragment=O0;Ul.jsx=Pm;Ul.jsxs=Pm;xm.exports=Ul;var Ue=xm.exports,hc={},bm={exports:{}},Mn={},Lm={exports:{}},Dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,O){var k=U.length;U.push(O);e:for(;0<k;){var Z=k-1>>>1,$=U[Z];if(0<r($,O))U[Z]=O,U[k]=$,k=Z;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],k=U.pop();if(k!==O){U[0]=k;e:for(var Z=0,$=U.length,Y=$>>>1;Z<Y;){var K=2*(Z+1)-1,le=U[K],_e=K+1,ve=U[_e];if(0>r(le,k))_e<$&&0>r(ve,le)?(U[Z]=ve,U[_e]=k,Z=_e):(U[Z]=le,U[K]=k,Z=K);else if(_e<$&&0>r(ve,k))U[Z]=ve,U[_e]=k,Z=_e;else break e}}return O}function r(U,O){var k=U.sortIndex-O.sortIndex;return k!==0?k:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,_=!1,x=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=U)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(U){if(v=!1,g(U),!x)if(n(l)!==null)x=!0,W(C);else{var O=n(c);O!==null&&q(y,O.startTime-U)}}function C(U,O){x=!1,v&&(v=!1,u(I),I=-1),_=!0;var k=d;try{for(g(O),h=n(l);h!==null&&(!(h.expirationTime>O)||U&&!z());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,d=h.priorityLevel;var $=Z(h.expirationTime<=O);O=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(l)&&i(l),g(O)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var K=n(c);K!==null&&q(y,K.startTime-O),Y=!1}return Y}finally{h=null,d=k,_=!1}}var w=!1,T=null,I=-1,S=5,E=-1;function z(){return!(t.unstable_now()-E<S)}function H(){if(T!==null){var U=t.unstable_now();E=U;var O=!0;try{O=T(!0,U)}finally{O?Q():(w=!1,T=null)}}else w=!1}var Q;if(typeof p=="function")Q=function(){p(H)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,N=b.port2;b.port1.onmessage=H,Q=function(){N.postMessage(null)}}else Q=function(){m(H,0)};function W(U){T=U,w||(w=!0,Q())}function q(U,O){I=m(function(){U(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,W(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var k=d;d=O;try{return U()}finally{d=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=d;d=U;try{return O()}finally{d=k}},t.unstable_scheduleCallback=function(U,O,k){var Z=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Z+k:Z):k=Z,U){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=k+$,U={id:f++,callback:O,priorityLevel:U,startTime:k,expirationTime:$,sortIndex:-1},k>Z?(U.sortIndex=k,e(c,U),n(l)===null&&U===n(c)&&(v?(u(I),I=-1):v=!0,q(y,k-Z))):(U.sortIndex=$,e(l,U),x||_||(x=!0,W(C))),U},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(U){var O=d;return function(){var k=d;d=O;try{return U.apply(this,arguments)}finally{d=k}}}})(Dm);Lm.exports=Dm;var B0=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=Rt,Sn=B0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,Mo={};function Nr(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},bd={};function V0(t){return pc.call(bd,t)?!0:pc.call(Pd,t)?!1:G0.test(t)?bd[t]=!0:(Pd[t]=!0,!1)}function W0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X0(t,e,n,i){if(e===null||typeof e>"u"||W0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,Ef);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,Ef);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,Ef);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X0(e,n,r,i)&&(n=null),i||r===null?V0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),Ld=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Ld&&t[Ld]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,au;function so(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function uu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function j0(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case mc:return"Profiler";case wf:return"StrictMode";case gc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nm:return(t.displayName||"Context")+".Consumer";case Um:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function Y0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=q0(t))}function zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function yc(t,e){km(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Id(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(oo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Bm(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){Z0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function Vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function Wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tc(t,e){if(e){if(K0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rc=null,ys=null,Ss=null;function Od(t){if(t=Wo(t)){if(typeof Rc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=kl(e),Rc(t.stateNode,t.type,e))}}function Xm(t){ys?Ss?Ss.push(t):Ss=[t]:ys=t}function jm(){if(ys){var t=ys,e=Ss;if(Ss=ys=null,Od(t),e)for(t=0;t<e.length;t++)Od(e[t])}}function Ym(t,e){return t(e)}function qm(){}var cu=!1;function Zm(t,e,n){if(cu)return t(e,n);cu=!0;try{return Ym(t,e,n)}finally{cu=!1,(ys!==null||Ss!==null)&&(qm(),jm())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Cc=!1;if(yi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Cc=!1}function $0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ho=!1,sl=null,ol=!1,Pc=null,Q0={onError:function(t){ho=!0,sl=t}};function J0(t,e,n,i,r,s,o,a,l){ho=!1,sl=null,$0.apply(Q0,arguments)}function ev(t,e,n,i,r,s,o,a,l){if(J0.apply(this,arguments),ho){if(ho){var c=sl;ho=!1,sl=null}else throw Error(ne(198));ol||(ol=!0,Pc=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fd(t){if(Or(t)!==t)throw Error(ne(188))}function tv(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fd(r),t;if(s===i)return Fd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function $m(t){return t=tv(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=Sn.unstable_scheduleCallback,zd=Sn.unstable_cancelCallback,nv=Sn.unstable_shouldYield,iv=Sn.unstable_requestPaint,Mt=Sn.unstable_now,rv=Sn.unstable_getCurrentPriorityLevel,Pf=Sn.unstable_ImmediatePriority,eg=Sn.unstable_UserBlockingPriority,al=Sn.unstable_NormalPriority,sv=Sn.unstable_LowPriority,tg=Sn.unstable_IdlePriority,Nl=null,ii=null;function ov(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:uv,av=Math.log,lv=Math.LN2;function uv(t){return t>>>=0,t===0?32:31-(av(t)/lv|0)|0}var na=64,ia=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ao(a):(s&=o,s!==0&&(i=ao(s)))}else o=n&~r,o!==0?i=ao(o):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=cv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function dv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rg,Lf,sg,og,ag,Lc=!1,ra=[],Vi=null,Wi=null,Xi=null,wo=new Map,Ao=new Map,Fi=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kd(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function pv(t,e,n,i,r){switch(e){case"focusin":return Vi=js(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=js(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=js(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,js(wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,js(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function lg(t){var e=yr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,ag(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ac=i,n.target.dispatchEvent(i),Ac=null}else return e=Wo(n),e!==null&&Lf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bd(t,e,n){Xa(t)&&n.delete(e)}function mv(){Lc=!1,Vi!==null&&Xa(Vi)&&(Vi=null),Wi!==null&&Xa(Wi)&&(Wi=null),Xi!==null&&Xa(Xi)&&(Xi=null),wo.forEach(Bd),Ao.forEach(Bd)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,mv)))}function Ro(t){function e(r){return Ys(r,t)}if(0<ra.length){Ys(ra[0],t);for(var n=1;n<ra.length;n++){var i=ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&Ys(Vi,t),Wi!==null&&Ys(Wi,t),Xi!==null&&Ys(Xi,t),wo.forEach(e),Ao.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Fi.shift()}var Ms=wi.ReactCurrentBatchConfig,ul=!0;function gv(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=1,Df(t,e,n,i)}finally{et=r,Ms.transition=s}}function _v(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=4,Df(t,e,n,i)}finally{et=r,Ms.transition=s}}function Df(t,e,n,i){if(ul){var r=Dc(t,e,n,i);if(r===null)Su(t,e,i,cl,n),kd(t,i);else if(pv(r,t,e,n,i))i.stopPropagation();else if(kd(t,i),e&4&&-1<hv.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&rg(s),s=Dc(t,e,n,i),s===null&&Su(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var cl=null;function Dc(t,e,n,i){if(cl=null,t=Cf(i),t=yr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rv()){case Pf:return 1;case eg:return 4;case al:case sv:return 16;case tg:return 536870912;default:return 16}default:return 16}}var ki=null,If=null,ja=null;function cg(){if(ja)return ja;var t,e=If,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ja=r.slice(t,1<i?1-i:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function Hd(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Hd,this.isPropagationStopped=Hd,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=En(ks),Vo=ht({},ks,{view:0,detail:0}),vv=En(Vo),du,hu,qs,Ol=ht({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(du=t.screenX-qs.screenX,hu=t.screenY-qs.screenY):hu=du=0,qs=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Gd=En(Ol),xv=ht({},Ol,{dataTransfer:0}),yv=En(xv),Sv=ht({},Vo,{relatedTarget:0}),pu=En(Sv),Mv=ht({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=En(Mv),Tv=ht({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=En(Tv),Av=ht({},ks,{data:0}),Vd=En(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pv[t])?!!e[t]:!1}function Nf(){return bv}var Lv=ht({},Vo,{key:function(t){if(t.key){var e=Rv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=En(Lv),Iv=ht({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=En(Iv),Uv=ht({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),Nv=En(Uv),Ov=ht({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=En(Ov),zv=ht({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=En(zv),Bv=[9,13,27,32],Of=yi&&"CompositionEvent"in window,po=null;yi&&"documentMode"in document&&(po=document.documentMode);var Hv=yi&&"TextEvent"in window&&!po,fg=yi&&(!Of||po&&8<po&&11>=po),Xd=" ",jd=!1;function dg(t,e){switch(t){case"keyup":return Bv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Gv(t,e){switch(t){case"compositionend":return hg(e);case"keypress":return e.which!==32?null:(jd=!0,Xd);case"textInput":return t=e.data,t===Xd&&jd?null:t;default:return null}}function Vv(t,e){if(os)return t==="compositionend"||!Of&&dg(t,e)?(t=cg(),ja=If=ki=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wv[t.type]:e==="textarea"}function pg(t,e,n,i){Xm(i),e=fl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var mo=null,Co=null;function Xv(t){wg(t,0)}function Fl(t){var e=us(t);if(zm(e))return t}function jv(t,e){if(t==="change")return e}var mg=!1;if(yi){var mu;if(yi){var gu="oninput"in document;if(!gu){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),gu=typeof qd.oninput=="function"}mu=gu}else mu=!1;mg=mu&&(!document.documentMode||9<document.documentMode)}function Zd(){mo&&(mo.detachEvent("onpropertychange",gg),Co=mo=null)}function gg(t){if(t.propertyName==="value"&&Fl(Co)){var e=[];pg(e,Co,t,Cf(t)),Zm(Xv,e)}}function Yv(t,e,n){t==="focusin"?(Zd(),mo=e,Co=n,mo.attachEvent("onpropertychange",gg)):t==="focusout"&&Zd()}function qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Co)}function Zv(t,e){if(t==="click")return Fl(e)}function Kv(t,e){if(t==="input"||t==="change")return Fl(e)}function $v(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:$v;function Po(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,e){var n=Kd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qv(t){var e=vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(i!==null&&Ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$d(n,s);var o=$d(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jv=yi&&"documentMode"in document&&11>=document.documentMode,as=null,Ic=null,go=null,Uc=!1;function Qd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||as==null||as!==rl(i)||(i=as,"selectionStart"in i&&Ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&Po(go,i)||(go=i,i=fl(Ic,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},_u={},xg={};yi&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function zl(t){if(_u[t])return _u[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xg)return _u[t]=e[n];return t}var yg=zl("animationend"),Sg=zl("animationiteration"),Mg=zl("animationstart"),Eg=zl("transitionend"),Tg=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Tg.set(t,e),Nr(e,[t])}for(var vu=0;vu<Jd.length;vu++){var xu=Jd[vu],ex=xu.toLowerCase(),tx=xu[0].toUpperCase()+xu.slice(1);ir(ex,"on"+tx)}ir(yg,"onAnimationEnd");ir(Sg,"onAnimationIteration");ir(Mg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Eg,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function eh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ev(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;eh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;eh(r,a,c),s=l}}}if(ol)throw t=Pc,ol=!1,Pc=null,t}function st(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var i=t+"__bubble";n.has(i)||(Ag(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),Ag(n,t,i,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[aa]){t[aa]=!0,Im.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,yu("selectionchange",!1,e))}}function Ag(t,e,n,i){switch(ug(e)){case 1:var r=gv;break;case 4:r=_v;break;default:r=Df}n=r.bind(null,e,n,t),r=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zm(function(){var c=s,f=Cf(n),h=[];e:{var d=Tg.get(t);if(d!==void 0){var _=Uf,x=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":_=Dv;break;case"focusin":x="focus",_=pu;break;case"focusout":x="blur",_=pu;break;case"beforeblur":case"afterblur":_=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Nv;break;case yg:case Sg:case Mg:_=Ev;break;case Eg:_=Fv;break;case"scroll":_=vv;break;case"wheel":_=kv;break;case"copy":case"cut":case"paste":_=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Wd}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var p=c,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=To(p,u),y!=null&&v.push(Lo(p,y,g)))),m)break;p=p.return}0<v.length&&(d=new _(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",d&&n!==Ac&&(x=n.relatedTarget||n.fromElement)&&(yr(x)||x[Si]))break e;if((_||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?yr(x):null,x!==null&&(m=Or(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(v=Gd,y="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Wd,y="onPointerLeave",u="onPointerEnter",p="pointer"),m=_==null?d:us(_),g=x==null?d:us(x),d=new v(y,p+"leave",_,n,f),d.target=m,d.relatedTarget=g,y=null,yr(f)===c&&(v=new v(u,p+"enter",x,n,f),v.target=g,v.relatedTarget=m,y=v),m=y,_&&x)t:{for(v=_,u=x,p=0,g=v;g;g=zr(g))p++;for(g=0,y=u;y;y=zr(y))g++;for(;0<p-g;)v=zr(v),p--;for(;0<g-p;)u=zr(u),g--;for(;p--;){if(v===u||u!==null&&v===u.alternate)break t;v=zr(v),u=zr(u)}v=null}else v=null;_!==null&&th(h,d,_,v,!1),x!==null&&m!==null&&th(h,m,x,v,!0)}}e:{if(d=c?us(c):window,_=d.nodeName&&d.nodeName.toLowerCase(),_==="select"||_==="input"&&d.type==="file")var C=jv;else if(Yd(d))if(mg)C=Kv;else{C=qv;var w=Yv}else(_=d.nodeName)&&_.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Zv);if(C&&(C=C(t,c))){pg(h,C,n,f);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Sc(d,"number",d.value)}switch(w=c?us(c):window,t){case"focusin":(Yd(w)||w.contentEditable==="true")&&(as=w,Ic=c,go=null);break;case"focusout":go=Ic=as=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Qd(h,n,f);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":Qd(h,n,f)}var T;if(Of)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else os?dg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fg&&n.locale!=="ko"&&(os||I!=="onCompositionStart"?I==="onCompositionEnd"&&os&&(T=cg()):(ki=f,If="value"in ki?ki.value:ki.textContent,os=!0)),w=fl(c,I),0<w.length&&(I=new Vd(I,t,null,n,f),h.push({event:I,listeners:w}),T?I.data=T:(T=hg(n),T!==null&&(I.data=T)))),(T=Hv?Gv(t,n):Vv(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(f=new Vd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}wg(h,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(Lo(t,s,r)),s=To(t,e),s!=null&&i.push(Lo(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function th(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=To(n,s),l!=null&&o.unshift(Lo(n,l,a))):r||(l=To(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function nh(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function la(t,e,n){if(e=nh(e),nh(t)!==e&&n)throw Error(ne(425))}function dl(){}var Nc=null,Oc=null;function Fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(t){return ih.resolve(null).then(t).catch(ax)}:zc;function ax(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),ti="__reactFiber$"+Bs,Do="__reactProps$"+Bs,Si="__reactContainer$"+Bs,kc="__reactEvents$"+Bs,lx="__reactListeners$"+Bs,ux="__reactHandles$"+Bs;function yr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rh(t);t!==null;){if(n=t[ti])return n;t=rh(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[ti]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function kl(t){return t[Do]||null}var Bc=[],cs=-1;function rr(t){return{current:t}}function at(t){0>cs||(t.current=Bc[cs],Bc[cs]=null,cs--)}function it(t,e){cs++,Bc[cs]=t.current,t.current=e}var tr={},$t=rr(tr),un=rr(!1),Cr=tr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function hl(){at(un),at($t)}function sh(t,e,n){if($t.current!==tr)throw Error(ne(168));it($t,e),it(un,n)}function Rg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Y0(t)||"Unknown",r));return ht({},n,i)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=$t.current,it($t,t),it(un,un.current),!0}function oh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Rg(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,at(un),at($t),it($t,t)):at(un),it(un,n)}var mi=null,Bl=!1,Eu=!1;function Cg(t){mi===null?mi=[t]:mi.push(t)}function cx(t){Bl=!0,Cg(t)}function sr(){if(!Eu&&mi!==null){Eu=!0;var t=0,e=et;try{var n=mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,Bl=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Jm(Pf,sr),r}finally{et=e,Eu=!1}}return null}var fs=[],ds=0,ml=null,gl=0,An=[],Rn=0,Pr=null,gi=1,_i="";function hr(t,e){fs[ds++]=gl,fs[ds++]=ml,ml=t,gl=e}function Pg(t,e,n){An[Rn++]=gi,An[Rn++]=_i,An[Rn++]=Pr,Pr=t;var i=gi;t=_i;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Xn(e)+r|n<<r|i,_i=s+t}else gi=1<<s|n<<r|i,_i=t}function zf(t){t.return!==null&&(hr(t,1),Pg(t,1,0))}function kf(t){for(;t===ml;)ml=fs[--ds],fs[ds]=null,gl=fs[--ds],fs[ds]=null;for(;t===Pr;)Pr=An[--Rn],An[Rn]=null,_i=An[--Rn],An[Rn]=null,gi=An[--Rn],An[Rn]=null}var xn=null,vn=null,ut=!1,Hn=null;function bg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ah(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:gi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(ut){var e=vn;if(e){var n=e;if(!ah(t,e)){if(Hc(t))throw Error(ne(418));e=ji(n.nextSibling);var i=xn;e&&ah(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,ut=!1,xn=t)}}else{if(Hc(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ut=!1,xn=t}}}function lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ua(t){if(t!==xn)return!1;if(!ut)return lh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fc(t.type,t.memoizedProps)),e&&(e=vn)){if(Hc(t))throw Lg(),Error(ne(418));for(;e;)bg(t,e),e=ji(e.nextSibling)}if(lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?ji(t.stateNode.nextSibling):null;return!0}function Lg(){for(var t=vn;t;)t=ji(t.nextSibling)}function Ps(){vn=xn=null,ut=!1}function Bf(t){Hn===null?Hn=[t]:Hn.push(t)}var fx=wi.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uh(t){var e=t._init;return e(t._payload)}function Dg(t){function e(u,p){if(t){var g=u.deletions;g===null?(u.deletions=[p],u.flags|=16):g.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=Ki(u,p),u.index=0,u.sibling=null,u}function s(u,p,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<p?(u.flags|=2,p):g):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,g,y){return p===null||p.tag!==6?(p=bu(g,u.mode,y),p.return=u,p):(p=r(p,g),p.return=u,p)}function l(u,p,g,y){var C=g.type;return C===ss?f(u,p,g.props.children,y,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ui&&uh(C)===p.type)?(y=r(p,g.props),y.ref=Zs(u,p,g),y.return=u,y):(y=el(g.type,g.key,g.props,null,u.mode,y),y.ref=Zs(u,p,g),y.return=u,y)}function c(u,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Lu(g,u.mode,y),p.return=u,p):(p=r(p,g.children||[]),p.return=u,p)}function f(u,p,g,y,C){return p===null||p.tag!==7?(p=Tr(g,u.mode,y,C),p.return=u,p):(p=r(p,g),p.return=u,p)}function h(u,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bu(""+p,u.mode,g),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jo:return g=el(p.type,p.key,p.props,null,u.mode,g),g.ref=Zs(u,null,p),g.return=u,g;case rs:return p=Lu(p,u.mode,g),p.return=u,p;case Ui:var y=p._init;return h(u,y(p._payload),g)}if(oo(p)||Ws(p))return p=Tr(p,u.mode,g,null),p.return=u,p;ca(u,p)}return null}function d(u,p,g,y){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:return g.key===C?l(u,p,g,y):null;case rs:return g.key===C?c(u,p,g,y):null;case Ui:return C=g._init,d(u,p,C(g._payload),y)}if(oo(g)||Ws(g))return C!==null?null:f(u,p,g,y,null);ca(u,g)}return null}function _(u,p,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,a(p,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jo:return u=u.get(y.key===null?g:y.key)||null,l(p,u,y,C);case rs:return u=u.get(y.key===null?g:y.key)||null,c(p,u,y,C);case Ui:var w=y._init;return _(u,p,g,w(y._payload),C)}if(oo(y)||Ws(y))return u=u.get(g)||null,f(p,u,y,C,null);ca(p,y)}return null}function x(u,p,g,y){for(var C=null,w=null,T=p,I=p=0,S=null;T!==null&&I<g.length;I++){T.index>I?(S=T,T=null):S=T.sibling;var E=d(u,T,g[I],y);if(E===null){T===null&&(T=S);break}t&&T&&E.alternate===null&&e(u,T),p=s(E,p,I),w===null?C=E:w.sibling=E,w=E,T=S}if(I===g.length)return n(u,T),ut&&hr(u,I),C;if(T===null){for(;I<g.length;I++)T=h(u,g[I],y),T!==null&&(p=s(T,p,I),w===null?C=T:w.sibling=T,w=T);return ut&&hr(u,I),C}for(T=i(u,T);I<g.length;I++)S=_(T,u,I,g[I],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?I:S.key),p=s(S,p,I),w===null?C=S:w.sibling=S,w=S);return t&&T.forEach(function(z){return e(u,z)}),ut&&hr(u,I),C}function v(u,p,g,y){var C=Ws(g);if(typeof C!="function")throw Error(ne(150));if(g=C.call(g),g==null)throw Error(ne(151));for(var w=C=null,T=p,I=p=0,S=null,E=g.next();T!==null&&!E.done;I++,E=g.next()){T.index>I?(S=T,T=null):S=T.sibling;var z=d(u,T,E.value,y);if(z===null){T===null&&(T=S);break}t&&T&&z.alternate===null&&e(u,T),p=s(z,p,I),w===null?C=z:w.sibling=z,w=z,T=S}if(E.done)return n(u,T),ut&&hr(u,I),C;if(T===null){for(;!E.done;I++,E=g.next())E=h(u,E.value,y),E!==null&&(p=s(E,p,I),w===null?C=E:w.sibling=E,w=E);return ut&&hr(u,I),C}for(T=i(u,T);!E.done;I++,E=g.next())E=_(T,u,I,E.value,y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?I:E.key),p=s(E,p,I),w===null?C=E:w.sibling=E,w=E);return t&&T.forEach(function(H){return e(u,H)}),ut&&hr(u,I),C}function m(u,p,g,y){if(typeof g=="object"&&g!==null&&g.type===ss&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:e:{for(var C=g.key,w=p;w!==null;){if(w.key===C){if(C=g.type,C===ss){if(w.tag===7){n(u,w.sibling),p=r(w,g.props.children),p.return=u,u=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ui&&uh(C)===w.type){n(u,w.sibling),p=r(w,g.props),p.ref=Zs(u,w,g),p.return=u,u=p;break e}n(u,w);break}else e(u,w);w=w.sibling}g.type===ss?(p=Tr(g.props.children,u.mode,y,g.key),p.return=u,u=p):(y=el(g.type,g.key,g.props,null,u.mode,y),y.ref=Zs(u,p,g),y.return=u,u=y)}return o(u);case rs:e:{for(w=g.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(u,p.sibling),p=r(p,g.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Lu(g,u.mode,y),p.return=u,u=p}return o(u);case Ui:return w=g._init,m(u,p,w(g._payload),y)}if(oo(g))return x(u,p,g,y);if(Ws(g))return v(u,p,g,y);ca(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,g),p.return=u,u=p):(n(u,p),p=bu(g,u.mode,y),p.return=u,u=p),o(u)):n(u,p)}return m}var bs=Dg(!0),Ig=Dg(!1),_l=rr(null),vl=null,hs=null,Hf=null;function Gf(){Hf=hs=vl=null}function Vf(t){var e=_l.current;at(_l),t._currentValue=e}function Vc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){vl=t,Hf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Hf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(vl===null)throw Error(ne(308));hs=t,vl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Sr=null;function Wf(t){Sr===null?Sr=[t]:Sr.push(t)}function Ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}function ch(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,_=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,_=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(_,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(_,h,d):x,d==null)break e;h=ht({},h,d);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else _={eventTime:_,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=_,l=h):f=f.next=_,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=h}}function fh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Xo={},ri=rr(Xo),Io=rr(Xo),Uo=rr(Xo);function Mr(t){if(t===Xo)throw Error(ne(174));return t}function jf(t,e){switch(it(Uo,e),it(Io,t),it(ri,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ec(e,t)}at(ri),it(ri,e)}function Ls(){at(ri),at(Io),at(Uo)}function Og(t){Mr(Uo.current);var e=Mr(ri.current),n=Ec(e,t.type);e!==n&&(it(Io,t),it(ri,n))}function Yf(t){Io.current===t&&(at(ri),at(Io))}var ft=rr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function qf(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Za=wi.ReactCurrentDispatcher,wu=wi.ReactCurrentBatchConfig,br=0,dt=null,Ct=null,Ut=null,Sl=!1,_o=!1,No=0,dx=0;function Wt(){throw Error(ne(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Kf(t,e,n,i,r,s){if(br=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?gx:_x,t=n(i,r),_o){s=0;do{if(_o=!1,No=0,25<=s)throw Error(ne(301));s+=1,Ut=Ct=null,e.updateQueue=null,Za.current=vx,t=n(i,r)}while(_o)}if(Za.current=Ml,e=Ct!==null&&Ct.next!==null,br=0,Ut=Ct=dt=null,Sl=!1,e)throw Error(ne(300));return t}function $f(){var t=No!==0;return No=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?dt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Un(){if(Ct===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?dt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?dt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Oo(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=f,Lr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function zg(t,e){var n=dt,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Qf(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Fo(9,Bg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ne(349));br&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Vg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Vg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Vg(t){var e=Mi(t,1);e!==null&&jn(e,t,1,-1)}function dh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,dt,t),[e.memoizedState,t]}function Fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wg(){return Un().memoizedState}function Ka(t,e,n,i){var r=Jn();dt.flags|=t,r.memoizedState=Fo(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Zf(i,o.deps)){r.memoizedState=Fo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Fo(1|e,n,s,i)}function hh(t,e){return Ka(8390656,8,t,e)}function Qf(t,e){return Hl(2048,8,t,e)}function Xg(t,e){return Hl(4,2,t,e)}function jg(t,e){return Hl(4,4,t,e)}function Yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,Yg.bind(null,e,t),n)}function Jf(){}function Zg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $g(t,e,n){return br&21?(Yn(n,e)||(n=ng(),dt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function hx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=wu.transition;wu.transition={};try{t(!1),e()}finally{et=n,wu.transition=i}}function Qg(){return Un().memoizedState}function px(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(t))e_(e,n);else if(n=Ug(t,e,n,i),n!==null){var r=nn();jn(n,t,i,r),t_(n,e,i)}}function mx(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(t))e_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ug(t,e,r,i),n!==null&&(r=nn(),jn(n,t,i,r),t_(n,e,i))}}function Jg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function e_(t,e){_o=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}var Ml={readContext:In,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},gx={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,Yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=px.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:Jf,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=hx.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Jn();if(ut){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ot===null)throw Error(ne(349));br&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hh(Hg.bind(null,i,s,t),[t]),i.flags|=2048,Fo(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ot.identifierPrefix;if(ut){var n=_i,i=gi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:In,useCallback:Zg,useContext:In,useEffect:Qf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Au,useRef:Wg,useState:function(){return Au(Oo)},useDebugValue:Jf,useDeferredValue:function(t){var e=Un();return $g(e,Ct.memoizedState,t)},useTransition:function(){var t=Au(Oo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:zg,useId:Qg,unstable_isNewReconciler:!1},vx={readContext:In,useCallback:Zg,useContext:In,useEffect:Qf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Ru,useRef:Wg,useState:function(){return Ru(Oo)},useDebugValue:Jf,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:$g(e,Ct.memoizedState,t)},useTransition:function(){var t=Ru(Oo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:zg,useId:Qg,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Zi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),qa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Zi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),qa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Zi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(jn(e,t,i,n),qa(e,t,i))}};function ph(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,i)||!Po(r,s):!0}function n_(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=cn(e)?Cr:$t.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function Xc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=cn(e)?Cr:$t.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=j0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function i_(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,nf=i),jc(t,e)},n}function r_(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ix.bind(null,t,e,n),e.then(t,t))}function _h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var yx=wi.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):bs(e,t.child,n,i)}function xh(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=Kf(t,e,n,i,s,r),n=$f(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ut&&n&&zf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function yh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ad(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s_(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function s_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Po(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return Yc(t,e,n,i,r)}function o_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ms,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ms,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ms,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ms,_n),_n|=i;return Jt(t,e,r,n),e.child}function a_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,i,r){var s=cn(n)?Cr:$t.current;return s=Cs(e,s),Es(e,r),n=Kf(t,e,n,i,s,r),i=$f(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ut&&i&&zf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Sh(t,e,n,i,r){if(cn(n)){var s=!0;pl(e)}else s=!1;if(Es(e,r),e.stateNode===null)$a(t,e),n_(e,n,i),Xc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=cn(n)?Cr:$t.current,c=Cs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mh(e,o,i,c),Ni=!1;var d=e.memoizedState;o.state=d,xl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Ni?(typeof f=="function"&&(Wc(e,n,f,i),l=e.memoizedState),(a=Ni||ph(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ng(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=cn(n)?Cr:$t.current,l=Cs(e,l));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&mh(e,o,i,l),Ni=!1,d=e.memoizedState,o.state=d,xl(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||un.current||Ni?(typeof _=="function"&&(Wc(e,n,_,i),x=e.memoizedState),(c=Ni||ph(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return qc(t,e,n,i,s,r)}function qc(t,e,n,i,r,s){a_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&oh(e,n,!1),Ei(t,e,s);i=e.stateNode,yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&oh(e,n,!0),e.child}function l_(t){var e=t.stateNode;e.pendingContext?sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sh(t,e.context,!1),jf(t,e.containerInfo)}function Mh(t,e,n,i,r){return Ps(),Bf(r),e.flags|=256,Jt(t,e,n,i),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function u_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kc(n),e.memoizedState=Zc,t):ed(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Sx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Kc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ed(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,i){return i!==null&&Bf(i),bs(e,t.child,null,n),t=ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(ne(422))),fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Kc(o),e.memoizedState=Zc,s);if(!(e.mode&1))return fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Cu(s,i,void 0),fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),jn(i,t,r,-1))}return od(),i=Cu(Error(ne(421))),fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=ji(r.nextSibling),xn=e,ut=!0,Hn=null,t!==null&&(An[Rn++]=gi,An[Rn++]=_i,An[Rn++]=Pr,gi=t.id,_i=t.overflow,Pr=e),e=ed(e,i.children),e.flags|=4096,e)}function Eh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vc(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eh(t,n,e);else if(t.tag===19)Eh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:l_(e),Ps();break;case 5:Og(e);break;case 1:cn(e.type)&&pl(e);break;case 4:jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?u_(t,e,n):(it(ft,ft.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,o_(t,e,n)}return Ei(t,e,n)}var f_,$c,d_,h_;f_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};d_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ri.current);var s=null;switch(n){case"input":r=xc(t,r),i=xc(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Mc(t,r),i=Mc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Tc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ex(t,e,n){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return cn(e.type)&&hl(),Xt(e),null;case 3:return i=e.stateNode,Ls(),at(un),at($t),qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(of(Hn),Hn=null))),$c(t,e),Xt(e),null;case 5:Yf(e);var r=Mr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)d_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(t=Mr(ri.current),ua(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Do]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)st(lo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Dd(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Ud(i,s),st("invalid",i)}Tc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",""+a]):Mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":ea(i),Id(i,s,!0);break;case"textarea":ea(i),Nd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[Do]=i,f_(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)st(lo[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Dd(t,i),r=xc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":Ud(t,i),r=Mc(t,i),st("invalid",t);break;default:r=i}Tc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Tf(t,s,l,o))}switch(n){case"input":ea(t),Id(t,i,!1);break;case"textarea":ea(t),Nd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)h_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Mr(Uo.current),Mr(ri.current),ua(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:la(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Xt(e),null;case 13:if(at(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&vn!==null&&e.mode&1&&!(e.flags&128))Lg(),Ps(),e.flags|=98560,s=!1;else if(s=ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ti]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Hn!==null&&(of(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Pt===0&&(Pt=3):od())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ls(),$c(t,e),t===null&&bo(e.stateNode.containerInfo),Xt(e),null;case 10:return Vf(e.type._context),Xt(e),null;case 17:return cn(e.type)&&hl(),Xt(e),null;case 19:if(at(ft),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ks(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Is&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Xt(e),null}else 2*Mt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Tx(t,e){switch(kf(e),e.tag){case 1:return cn(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),at(un),at($t),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yf(e),null;case 13:if(at(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ft),null;case 4:return Ls(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var da=!1,Kt=!1,wx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Qc(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Th=!1;function Ax(t,e){if(Nc=ul,t=vg(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var _;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)d=h,h=_;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(_=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},ul=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,m=x.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:kn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=Th,Th=!1,x}function vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qc(e,n,s)}r=r.next}while(r!==i)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p_(t){var e=t.alternate;e!==null&&(t.alternate=null,p_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Do],delete e[kc],delete e[lx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m_(t){return t.tag===5||t.tag===3||t.tag===4}function wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var zt=null,Bn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)g_(t,e,n),n=n.sibling}function g_(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Kt||ps(n,e);case 6:var i=zt,r=Bn;zt=null,Ai(t,e,n),zt=i,Bn=r,zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Ro(t)):Mu(zt,n.stateNode));break;case 4:i=zt,r=Bn,zt=n.stateNode.containerInfo,Bn=!0,Ai(t,e,n),zt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qc(n,e,o),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Kt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Ai(t,e,n),Kt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wx),e.forEach(function(i){var r=Nx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Bn=!1;break e;case 3:zt=a.stateNode.containerInfo,Bn=!0;break e;case 4:zt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(zt===null)throw Error(ne(160));g_(s,o,r),zt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)__(e,t),e=e.sibling}function __(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Zn(t),i&4){try{vo(3,t,t.return),Vl(3,t)}catch(v){gt(t,t.return,v)}try{vo(5,t,t.return)}catch(v){gt(t,t.return,v)}}break;case 1:Nn(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Nn(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Eo(r,"")}catch(v){gt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),wc(a,o);var c=wc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Wm(r,h):f==="dangerouslySetInnerHTML"?Gm(r,h):f==="children"?Eo(r,h):Tf(r,f,h,c)}switch(a){case"input":yc(r,s);break;case"textarea":Bm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?xs(r,!!s.multiple,_,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Do]=s}catch(v){gt(t,t.return,v)}}break;case 6:if(Nn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){gt(t,t.return,v)}}break;case 3:if(Nn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(v){gt(t,t.return,v)}break;case 4:Nn(e,t),Zn(t);break;case 13:Nn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(id=Mt())),i&4&&Ah(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,Nn(e,t),Kt=c):Nn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(h=pe=f;pe!==null;){switch(d=pe,_=d.child,d.tag){case 0:case 11:case 14:case 15:vo(4,d,d.return);break;case 1:ps(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){gt(i,n,v)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){Ch(h);continue}}_!==null?(_.return=d,pe=_):Ch(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vm("display",o))}catch(v){gt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){gt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Zn(t),i&4&&Ah(t);break;case 21:break;default:Nn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eo(r,""),i.flags&=-33);var s=wh(t);tf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wh(t);ef(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){pe=t,v_(t)}function v_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=da;var c=Kt;if(da=o,(Kt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Ph(r):l!==null?(l.return=o,pe=l):Ph(r);for(;s!==null;)pe=s,v_(s),s=s.sibling;pe=r,da=a,Kt=c}Rh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Rh(t)}}function Rh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Kt||e.flags&512&&Jc(e)}catch(d){gt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ch(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ph(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Jc(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Jc(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Cx=Math.ceil,El=wi.ReactCurrentDispatcher,td=wi.ReactCurrentOwner,Dn=wi.ReactCurrentBatchConfig,Ke=0,Ot=null,wt=null,Ht=0,_n=0,ms=rr(0),Pt=0,zo=null,Lr=0,Wl=0,nd=0,xo=null,an=null,id=0,Is=1/0,pi=null,Tl=!1,nf=null,qi=null,ha=!1,Bi=null,wl=0,yo=0,rf=null,Qa=-1,Ja=0;function nn(){return Ke&6?Mt():Qa!==-1?Qa:Qa=Mt()}function Zi(t){return t.mode&1?Ke&2&&Ht!==0?Ht&-Ht:fx.transition!==null?(Ja===0&&(Ja=ng()),Ja):(t=et,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function jn(t,e,n,i){if(50<yo)throw yo=0,rf=null,Error(ne(185));Go(t,n,i),(!(Ke&2)||t!==Ot)&&(t===Ot&&(!(Ke&2)&&(Wl|=n),Pt===4&&zi(t,Ht)),fn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Is=Mt()+500,Bl&&sr()))}function fn(t,e){var n=t.callbackNode;fv(t,e);var i=ll(t,t===Ot?Ht:0);if(i===0)n!==null&&zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zd(n),e===1)t.tag===0?cx(bh.bind(null,t)):Cg(bh.bind(null,t)),ox(function(){!(Ke&6)&&sr()}),n=null;else{switch(ig(i)){case 1:n=Pf;break;case 4:n=eg;break;case 16:n=al;break;case 536870912:n=tg;break;default:n=al}n=A_(n,x_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function x_(t,e){if(Qa=-1,Ja=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=ll(t,t===Ot?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=Ke;Ke|=2;var s=S_();(Ot!==t||Ht!==e)&&(pi=null,Is=Mt()+500,Er(t,e));do try{Lx();break}catch(a){y_(t,a)}while(!0);Gf(),El.current=s,Ke=r,wt!==null?e=0:(Ot=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=bc(t),r!==0&&(i=r,e=sf(t,r))),e===1)throw n=zo,Er(t,0),zi(t,i),fn(t,Mt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Px(r)&&(e=Al(t,i),e===2&&(s=bc(t),s!==0&&(i=s,e=sf(t,s))),e===1))throw n=zo,Er(t,0),zi(t,i),fn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:pr(t,an,pi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=id+500-Mt(),10<e)){if(ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zc(pr.bind(null,t,an,pi),e);break}pr(t,an,pi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){t.timeoutHandle=zc(pr.bind(null,t,an,pi),i);break}pr(t,an,pi);break;case 5:pr(t,an,pi);break;default:throw Error(ne(329))}}}return fn(t,Mt()),t.callbackNode===n?x_.bind(null,t):null}function sf(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Al(t,e),t!==2&&(e=an,an=n,e!==null&&of(e)),t}function of(t){an===null?an=t:an.push.apply(an,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~nd,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function bh(t){if(Ke&6)throw Error(ne(327));Ts();var e=ll(t,0);if(!(e&1))return fn(t,Mt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=bc(t);i!==0&&(e=i,n=sf(t,i))}if(n===1)throw n=zo,Er(t,0),zi(t,e),fn(t,Mt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,an,pi),fn(t,Mt()),null}function rd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Is=Mt()+500,Bl&&sr())}}function Dr(t){Bi!==null&&Bi.tag===0&&!(Ke&6)&&Ts();var e=Ke;Ke|=1;var n=Dn.transition,i=et;try{if(Dn.transition=null,et=1,t)return t()}finally{et=i,Dn.transition=n,Ke=e,!(Ke&6)&&sr()}}function sd(){_n=ms.current,at(ms)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hl();break;case 3:Ls(),at(un),at($t),qf();break;case 5:Yf(i);break;case 4:Ls();break;case 13:at(ft);break;case 19:at(ft);break;case 10:Vf(i.type._context);break;case 22:case 23:sd()}n=n.return}if(Ot=t,wt=t=Ki(t.current,null),Ht=_n=e,Pt=0,zo=null,nd=Wl=Lr=0,an=xo=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function y_(t,e){do{var n=wt;try{if(Gf(),Za.current=Ml,Sl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sl=!1}if(br=0,Ut=Ct=dt=null,_o=!1,No=0,td.current=null,n===null||n.return===null){Pt=1,zo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=_h(o);if(_!==null){_.flags&=-257,vh(_,o,a,s,e),_.mode&1&&gh(s,c,e),e=_,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){gh(s,c,e),od();break e}l=Error(ne(426))}}else if(ut&&a.mode&1){var m=_h(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vh(m,o,a,s,e),Bf(Ds(l,a));break e}}s=l=Ds(l,a),Pt!==4&&(Pt=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=i_(s,l,e);ch(s,u);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qi===null||!qi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=r_(s,a,e);ch(s,y);break e}}s=s.return}while(s!==null)}E_(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function S_(){var t=El.current;return El.current=Ml,t===null?Ml:t}function od(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Lr&268435455)&&!(Wl&268435455)||zi(Ot,Ht)}function Al(t,e){var n=Ke;Ke|=2;var i=S_();(Ot!==t||Ht!==e)&&(pi=null,Er(t,e));do try{bx();break}catch(r){y_(t,r)}while(!0);if(Gf(),Ke=n,El.current=i,wt!==null)throw Error(ne(261));return Ot=null,Ht=0,Pt}function bx(){for(;wt!==null;)M_(wt)}function Lx(){for(;wt!==null&&!nv();)M_(wt)}function M_(t){var e=w_(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?E_(t):wt=e,td.current=null}function E_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,wt=null;return}}else if(n=Ex(n,e,_n),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Pt===0&&(Pt=5)}function pr(t,e,n){var i=et,r=Dn.transition;try{Dn.transition=null,et=1,Dx(t,e,n,i)}finally{Dn.transition=r,et=i}return null}function Dx(t,e,n,i){do Ts();while(Bi!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dv(t,s),t===Ot&&(wt=Ot=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,A_(al,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=et;et=1;var a=Ke;Ke|=4,td.current=null,Ax(t,n),__(n,t),Qv(Oc),ul=!!Nc,Oc=Nc=null,t.current=n,Rx(n),iv(),Ke=a,et=o,Dn.transition=s}else t.current=n;if(ha&&(ha=!1,Bi=t,wl=r),s=t.pendingLanes,s===0&&(qi=null),ov(n.stateNode),fn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=nf,nf=null,t;return wl&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===rf?yo++:(yo=0,rf=t):yo=0,sr(),null}function Ts(){if(Bi!==null){var t=ig(wl),e=Dn.transition,n=et;try{if(Dn.transition=null,et=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,wl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:vo(8,f,s)}var h=f.child;if(h!==null)h.return=f,pe=h;else for(;pe!==null;){f=pe;var d=f.sibling,_=f.return;if(p_(f),f===c){pe=null;break}if(d!==null){d.return=_,pe=d;break}pe=_}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var p=t.current;for(pe=p;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=p;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vl(9,a)}}catch(C){gt(a,a.return,C)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ke=r,sr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Nl,t)}catch{}i=!0}return i}finally{et=n,Dn.transition=e}}return!1}function Lh(t,e,n){e=Ds(n,e),e=i_(t,e,1),t=Yi(t,e,1),e=nn(),t!==null&&(Go(t,1,e),fn(t,e))}function gt(t,e,n){if(t.tag===3)Lh(t,t,n);else for(;e!==null;){if(e.tag===3){Lh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ds(n,t),t=r_(e,t,1),e=Yi(e,t,1),t=nn(),e!==null&&(Go(e,1,t),fn(e,t));break}}e=e.return}}function Ix(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Mt()-id?Er(t,0):nd|=n),fn(t,e)}function T_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=nn();t=Mi(t,e),t!==null&&(Go(t,e,n),fn(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T_(t,n)}function Nx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),T_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Mx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ut&&e.flags&1048576&&Pg(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$a(t,e),t=e.pendingProps;var r=Cs(e,$t.current);Es(e,n),r=Kf(null,e,i,t,r,n);var s=$f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xf(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,Xc(e,i,t,n),e=qc(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&zf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($a(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),t=kn(i,t),r){case 0:e=Yc(null,e,i,t,n);break e;case 1:e=Sh(null,e,i,t,n);break e;case 11:e=xh(null,e,i,t,n);break e;case 14:e=yh(null,e,i,kn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Yc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Sh(t,e,i,r,n);case 3:e:{if(l_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),xl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(ne(423)),e),e=Mh(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(ne(424)),e),e=Mh(t,e,i,n,r);break e}else for(vn=ji(e.stateNode.containerInfo.firstChild),xn=e,ut=!0,Hn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=Ei(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&Gc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Fc(i,r)?o=null:s!==null&&Fc(i,s)&&(e.flags|=32),a_(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Gc(e),null;case 13:return u_(t,e,n);case 4:return jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),xh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(_l,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!un.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=In(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),yh(t,e,i,r,n);case 15:return s_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),$a(t,e),e.tag=1,cn(i)?(t=!0,pl(e)):t=!1,Es(e,n),n_(e,i,r),Xc(e,i,r,n),qc(null,e,i,!0,t,n);case 19:return c_(t,e,n);case 22:return o_(t,e,n)}throw Error(ne(156,e.tag))};function A_(t,e){return Jm(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Ox(t,e,n,i)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Rf)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ad(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Tr(n.children,r,s,e);case wf:o=8,r|=8;break;case mc:return t=Ln(12,n,e,r|2),t.elementType=mc,t.lanes=s,t;case gc:return t=Ln(13,n,e,r),t.elementType=gc,t.lanes=s,t;case _c:return t=Ln(19,n,e,r),t.elementType=_c,t.lanes=s,t;case Om:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Um:o=10;break e;case Nm:o=9;break e;case Af:o=11;break e;case Rf:o=14;break e;case Ui:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Lu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fu(0),this.expirationTimes=fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ld(t,e,n,i,r,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function kx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function R_(t){if(!t)return tr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return Rg(t,n,e)}return e}function C_(t,e,n,i,r,s,o,a,l){return t=ld(n,i,!0,t,r,s,o,a,l),t.context=R_(null),n=t.current,i=nn(),r=Zi(n),s=xi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,Go(t,r,i),fn(t,i),t}function jl(t,e,n,i){var r=e.current,s=nn(),o=Zi(r);return n=R_(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(jn(t,r,o,s),qa(t,r,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ud(t,e){Dh(t,e),(t=t.alternate)&&Dh(t,e)}function Bx(){return null}var P_=typeof reportError=="function"?reportError:function(t){console.error(t)};function cd(t){this._internalRoot=t}Yl.prototype.render=cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));jl(t,e,null,null)};Yl.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){jl(null,t,null,null)}),e[Si]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&lg(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function Hx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(o);s.call(c)}}var o=C_(e,i,t,0,null,!1,!1,"",Ih);return t._reactRootContainer=o,t[Si]=o.current,bo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rl(l);a.call(c)}}var l=ld(t,0,!1,null,null,!1,!1,"",Ih);return t._reactRootContainer=l,t[Si]=l.current,bo(t.nodeType===8?t.parentNode:t),Dr(function(){jl(e,l,n,i)}),l}function Zl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rl(o);a.call(l)}}jl(e,o,t,r)}else o=Hx(n,e,t,r,i);return Rl(o)}rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(bf(e,n|1),fn(e,Mt()),!(Ke&6)&&(Is=Mt()+500,sr()))}break;case 13:Dr(function(){var i=Mi(t,1);if(i!==null){var r=nn();jn(i,t,1,r)}}),ud(t,1)}};Lf=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=nn();jn(e,t,134217728,n)}ud(t,134217728)}};sg=function(t){if(t.tag===13){var e=Zi(t),n=Mi(t,e);if(n!==null){var i=nn();jn(n,t,e,i)}ud(t,e)}};og=function(){return et};ag=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Rc=function(t,e,n){switch(e){case"input":if(yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kl(i);if(!r)throw Error(ne(90));zm(i),yc(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};Ym=rd;qm=Dr;var Gx={usingClientEntryPoint:!1,Events:[Wo,us,kl,Xm,jm,rd]},$s={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vx={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$m(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Nl=pa.inject(Vx),ii=pa}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(ne(200));return kx(t,e,null,n)};Mn.createRoot=function(t,e){if(!fd(t))throw Error(ne(299));var n=!1,i="",r=P_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ld(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,bo(t.nodeType===8?t.parentNode:t),new cd(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=$m(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Dr(t)};Mn.hydrate=function(t,e,n){if(!ql(e))throw Error(ne(200));return Zl(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!fd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=P_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C_(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,bo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};Mn.render=function(t,e,n){if(!ql(e))throw Error(ne(200));return Zl(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(ne(40));return t._reactRootContainer?(Dr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};Mn.unstable_batchedUpdates=rd;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Zl(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),bm.exports=Mn;var Wx=bm.exports,Uh=Wx;hc.createRoot=Uh.createRoot,hc.hydrateRoot=Uh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="160",kr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xx=0,Nh=1,jx=2,L_=1,Yx=2,hi=3,nr=0,dn=1,ni=2,$i=0,ws=1,Oh=2,Fh=3,zh=4,qx=5,_r=100,Zx=101,Kx=102,kh=103,Bh=104,$x=200,Qx=201,Jx=202,ey=203,af=204,lf=205,ty=206,ny=207,iy=208,ry=209,sy=210,oy=211,ay=212,ly=213,uy=214,cy=0,fy=1,dy=2,Cl=3,hy=4,py=5,my=6,gy=7,D_=0,_y=1,vy=2,Qi=0,xy=1,yy=2,Sy=3,My=4,Ey=5,Ty=6,I_=300,Us=301,Ns=302,uf=303,cf=304,Kl=306,ff=1e3,Vn=1001,df=1002,en=1003,Hh=1004,Du=1005,Cn=1006,wy=1007,ko=1008,Ji=1009,Ay=1010,Ry=1011,hd=1012,U_=1013,Hi=1014,Gi=1015,Bo=1016,N_=1017,O_=1018,wr=1020,Cy=1021,Wn=1023,Py=1024,by=1025,Ar=1026,Os=1027,Ly=1028,F_=1029,Dy=1030,z_=1031,k_=1033,Iu=33776,Uu=33777,Nu=33778,Ou=33779,Gh=35840,Vh=35841,Wh=35842,Xh=35843,B_=36196,jh=37492,Yh=37496,qh=37808,Zh=37809,Kh=37810,$h=37811,Qh=37812,Jh=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,op=37820,ap=37821,Fu=36492,lp=36494,up=36495,Iy=36283,cp=36284,fp=36285,dp=36286,H_=3e3,Rr=3001,Uy=3200,Ny=3201,G_=0,Oy=1,bn="",kt="srgb",Ti="srgb-linear",pd="display-p3",$l="display-p3-linear",Pl="linear",ot="srgb",bl="rec709",Ll="p3",Hr=7680,hp=519,Fy=512,zy=513,ky=514,V_=515,By=516,Hy=517,Gy=518,Vy=519,pp=35044,mp="300 es",hf=1035,vi=2e3,Dl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,pf=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function Wy(t,e){return(t%e+e)%e}function zu(t,e,n){return(1-n)*t+n*e}function gp(t){return(t&t-1)===0&&t!==0}function mf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Xy={DEG2RAD:tl};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],_=i[5],x=i[8],v=r[0],m=r[3],u=r[6],p=r[1],g=r[4],y=r[7],C=r[2],w=r[5],T=r[8];return s[0]=o*v+a*p+l*C,s[3]=o*m+a*g+l*w,s[6]=o*u+a*y+l*T,s[1]=c*v+f*p+h*C,s[4]=c*m+f*g+h*w,s[7]=c*u+f*y+h*T,s[2]=d*v+_*p+x*C,s[5]=d*m+_*g+x*w,s[8]=d*u+_*y+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,_=c*s-o*l,x=n*h+i*d+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=_*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new Xe;function W_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jy(){const t=Il("canvas");return t.style.display="block",t}const _p={};function So(t){t in _p||(_p[t]=!0,console.warn(t))}const vp=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[Ti]:{transfer:Pl,primaries:bl,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ot,primaries:bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:Pl,primaries:Ll,toReference:t=>t.applyMatrix3(xp),fromReference:t=>t.applyMatrix3(vp)},[pd]:{transfer:ot,primaries:Ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(xp),fromReference:t=>t.applyMatrix3(vp).convertLinearToSRGB()}},Yy=new Set([Ti,$l]),tt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Yy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ma[e].toReference,r=ma[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ma[t].primaries},getTransfer:function(t){return t===bn?Pl:ma[t].transfer}};function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class X_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Il("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class j_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=jo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hu(r[o].image)):s.push(Hu(r[o]))}else s=Hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?X_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zy=0;class yn extends Fr{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=ko,a=Wn,l=Ji,c=yn.DEFAULT_ANISOTROPY,f=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=jo(),this.name="",this.source=new j_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Rr?kt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Rr:H_}set encoding(e){So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?kt:bn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=I_;yn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],_=l[5],x=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(_+1)/2,C=(u+1)/2,w=(f+d)/4,T=(h+v)/4,I=(x+m)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=I/s),this.set(i,r,s,n),this}let p=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(m-x)/p,this.y=(h-v)/p,this.z=(d-f)/p,this.w=Math.acos((c+_+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(So("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?kt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Ky{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $y extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],_=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=_,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||c!==_||f!==x){let m=1-a;const u=l*d+c*_+f*x+h*v,p=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,u*p);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*p;if(l=l*m+d*y,c=c*m+_*y,f=f*m+x*y,h=h*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],_=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*_-c*d,e[n+1]=l*x+f*d+c*h-a*_,e[n+2]=c*x+f*_+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),_=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*_*x,this._y=c*_*h-d*f*x,this._z=c*f*x+d*_*h,this._w=c*f*h-d*_*x;break;case"YXZ":this._x=d*f*h+c*_*x,this._y=c*_*h-d*f*x,this._z=c*f*x-d*_*h,this._w=c*f*h+d*_*x;break;case"ZXY":this._x=d*f*h-c*_*x,this._y=c*_*h+d*f*x,this._z=c*f*x+d*_*h,this._w=c*f*h-d*_*x;break;case"ZYX":this._x=d*f*h-c*_*x,this._y=c*_*h+d*f*x,this._z=c*f*x-d*_*h,this._w=c*f*h+d*_*x;break;case"YZX":this._x=d*f*h+c*_*x,this._y=c*_*h+d*f*x,this._z=c*f*x-d*_*h,this._w=c*f*h-d*_*x;break;case"XZY":this._x=d*f*h-c*_*x,this._y=c*_*h-d*f*x,this._z=c*f*x+d*_*h,this._w=c*f*h+d*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(f-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>h){const _=2*Math.sqrt(1+i-a-h);this._w=(f-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>h){const _=2*Math.sqrt(1+a-i-h);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+f)/_}else{const _=2*Math.sqrt(1+h-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new D,yp=new Bt;class Yo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),_a.subVectors(this.max,Js),Vr.subVectors(e.a,Js),Wr.subVectors(e.b,Js),Xr.subVectors(e.c,Js),Ri.subVectors(Wr,Vr),Ci.subVectors(Xr,Wr),lr.subVectors(Vr,Xr);let n=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-lr.z,lr.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,lr.z,0,-lr.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-lr.y,lr.x,0];return!Vu(n,Vr,Wr,Xr,_a)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,Vr,Wr,Xr,_a))?!1:(va.crossVectors(Ri,Ci),n=[va.x,va.y,va.z],Vu(n,Vr,Wr,Xr,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,ga=new Yo,Vr=new D,Wr=new D,Xr=new D,Ri=new D,Ci=new D,lr=new D,Js=new D,_a=new D,va=new D,ur=new D;function Vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ur.fromArray(t,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),f=i.dot(ur);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Qy=new Yo,eo=new D,Wu=new D;class Ql{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Wu)),this.expandByPoint(eo.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new D,Xu=new D,xa=new D,Pi=new D,ju=new D,ya=new D,Yu=new D;class Jl{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=Pi.dot(this.direction),l=-Pi.dot(xa),c=Pi.lengthSq(),f=Math.abs(1-o*o);let h,d,_,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,_=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),_=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),_=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xu).addScaledVector(xa,d),_}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),ya.subVectors(i,e),Yu.crossVectors(ju,ya);let o=this.direction.dot(Yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Pi,ya));if(l<0)return null;const c=a*this.direction.dot(ju.cross(Pi));if(c<0||l+c>o)return null;const f=-a*Pi.dot(Yu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,f,h,d,_,x,v,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,_,x,v,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,_,x,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=_,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,_=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=_+x*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=x+_*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,_=l*h,x=c*f,v=c*h;n[0]=d+v*a,n[4]=x*a-_,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=_*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,_=l*h,x=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+_*a,n[1]=_+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,_=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*c-_,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=_*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+_,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=_*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,_=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=_*h-x,n[2]=x*h-_,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,eS)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(i,mn),bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(i,mn)),bi.normalize(),Sa.crossVectors(mn,bi),r[0]=bi.x,r[4]=Sa.x,r[8]=mn.x,r[1]=bi.y,r[5]=Sa.y,r[9]=mn.y,r[2]=bi.z,r[6]=Sa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],_=i[13],x=i[2],v=i[6],m=i[10],u=i[14],p=i[3],g=i[7],y=i[11],C=i[15],w=r[0],T=r[4],I=r[8],S=r[12],E=r[1],z=r[5],H=r[9],Q=r[13],b=r[2],N=r[6],W=r[10],q=r[14],U=r[3],O=r[7],k=r[11],Z=r[15];return s[0]=o*w+a*E+l*b+c*U,s[4]=o*T+a*z+l*N+c*O,s[8]=o*I+a*H+l*W+c*k,s[12]=o*S+a*Q+l*q+c*Z,s[1]=f*w+h*E+d*b+_*U,s[5]=f*T+h*z+d*N+_*O,s[9]=f*I+h*H+d*W+_*k,s[13]=f*S+h*Q+d*q+_*Z,s[2]=x*w+v*E+m*b+u*U,s[6]=x*T+v*z+m*N+u*O,s[10]=x*I+v*H+m*W+u*k,s[14]=x*S+v*Q+m*q+u*Z,s[3]=p*w+g*E+y*b+C*U,s[7]=p*T+g*z+y*N+C*O,s[11]=p*I+g*H+y*W+C*k,s[15]=p*S+g*Q+y*q+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],_=e[14],x=e[3],v=e[7],m=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*_-i*l*_)+v*(+n*l*_-n*c*d+s*o*d-r*o*_+r*c*f-s*l*f)+m*(+n*c*h-n*a*_-s*o*h+i*o*_+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],_=e[11],x=e[12],v=e[13],m=e[14],u=e[15],p=h*m*c-v*d*c+v*l*_-a*m*_-h*l*u+a*d*u,g=x*d*c-f*m*c-x*l*_+o*m*_+f*l*u-o*d*u,y=f*v*c-x*h*c+x*a*_-o*v*_-f*a*u+o*h*u,C=x*h*l-f*v*l-x*a*d+o*v*d+f*a*m-o*h*m,w=n*p+i*g+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=p*T,e[1]=(v*d*s-h*m*s-v*r*_+i*m*_+h*r*u-i*d*u)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*_-i*l*_)*T,e[4]=g*T,e[5]=(f*m*s-x*d*s+x*r*_-n*m*_-f*r*u+n*d*u)*T,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*_+n*l*_)*T,e[8]=y*T,e[9]=(x*h*s-f*v*s-x*i*_+n*v*_+f*i*u-n*h*u)*T,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*_-n*a*_)*T,e[12]=C*T,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*m+n*h*m)*T,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,_=s*f,x=s*h,v=o*f,m=o*h,u=a*h,p=l*c,g=l*f,y=l*h,C=i.x,w=i.y,T=i.z;return r[0]=(1-(v+u))*C,r[1]=(_+y)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(_-y)*w,r[5]=(1-(d+u))*w,r[6]=(m+p)*w,r[7]=0,r[8]=(x+g)*T,r[9]=(m-p)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,f=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let _,x;if(a===vi)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Dl)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,_=(i+r)*f;let x,v;if(a===vi)x=(o+s)*h,v=-2*h;else if(a===Dl)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new D,Fn=new _t,Jy=new D(0,0,0),eS=new D(1,1,1),bi=new D,Sa=new D,mn=new D,Sp=new _t,Mp=new Bt;class qo{constructor(e=0,n=0,i=0,r=qo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qo.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const Ep=new D,Yr=new Bt,ui=new _t,Ma=new D,to=new D,nS=new D,iS=new Bt,Tp=new D(1,0,0),wp=new D(0,1,0),Ap=new D(0,0,1),rS={type:"added"},sS={type:"removed"};class At extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,n=new qo,i=new Bt,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,n){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(to,Ma,this.up):ui.lookAt(Ma,to,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ui),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new D,ci=new D,qu=new D,fi=new D,qr=new D,Zr=new D,Rp=new D,Zu=new D,Ku=new D,$u=new D;let Ea=!1;class Gn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),ci.subVectors(i,n),qu.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(ci),l=zn.dot(qu),c=ci.dot(ci),f=ci.dot(qu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,_=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),ci.subVectors(e,n),zn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),zn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Zr.subVectors(s,i),Zu.subVectors(e,i);const l=qr.dot(Zu),c=Zr.dot(Zu);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(e,r);const f=qr.dot(Ku),h=Zr.dot(Ku);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(qr,o);$u.subVectors(e,s);const _=qr.dot($u),x=Zr.dot($u);if(x>=0&&_<=x)return n.copy(s);const v=_*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Zr,a);const m=f*x-_*h;if(m<=0&&h-f>=0&&_-x>=0)return Rp.subVectors(s,r),a=(h-f)/(h-f+(_-x)),n.copy(r).addScaledVector(Rp,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(qr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Wy(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Qu(o,s,e+1/3),this.g=Qu(o,s,e),this.b=Qu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=q_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Bu(e.r),this.g=Bu(e.g),this.b=Bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return tt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(tn(Yt.r*255,0,255))*65536+Math.round(tn(Yt.g*255,0,255))*256+Math.round(tn(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){tt.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Ta);const i=zu(Li.h,Ta.h,n),r=zu(Li.s,Ta.s,n),s=zu(Li.l,Ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Qe;Qe.NAMES=q_;let oS=0;class Hs extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ws,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==af&&(i.blendSrc=this.blendSrc),this.blendDst!==lf&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eu extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new D,wa=new be;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),e}}class Z_ extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K_ extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aS=0;const wn=new _t,Ju=new At,Kr=new D,gn=new Yo,no=new Yo,It=new D;class hn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?K_:Z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(gn.min,no.min),gn.expandByPoint(It),It.addVectors(gn.max,no.max),gn.expandByPoint(It)):(gn.expandByPoint(no.min),gn.expandByPoint(no.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)It.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),It.add(Kr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let E=0;E<a;E++)c[E]=new D,f[E]=new D;const h=new D,d=new D,_=new D,x=new be,v=new be,m=new be,u=new D,p=new D;function g(E,z,H){h.fromArray(r,E*3),d.fromArray(r,z*3),_.fromArray(r,H*3),x.fromArray(o,E*2),v.fromArray(o,z*2),m.fromArray(o,H*2),d.sub(h),_.sub(h),v.sub(x),m.sub(x);const Q=1/(v.x*m.y-m.x*v.y);isFinite(Q)&&(u.copy(d).multiplyScalar(m.y).addScaledVector(_,-v.y).multiplyScalar(Q),p.copy(_).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(Q),c[E].add(u),c[z].add(u),c[H].add(u),f[E].add(p),f[z].add(p),f[H].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,z=y.length;E<z;++E){const H=y[E],Q=H.start,b=H.count;for(let N=Q,W=Q+b;N<W;N+=3)g(i[N+0],i[N+1],i[N+2])}const C=new D,w=new D,T=new D,I=new D;function S(E){T.fromArray(s,E*3),I.copy(T);const z=c[E];C.copy(z),C.sub(T.multiplyScalar(T.dot(z))).normalize(),w.crossVectors(I,z);const Q=w.dot(f[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=Q}for(let E=0,z=y.length;E<z;++E){const H=y[E],Q=H.start,b=H.count;for(let N=Q,W=Q+b;N<W;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,h=new D;if(e)for(let d=0,_=e.count;d<_;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=n.count;d<_;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let _=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?_=l[v]*a.data.stride+a.offset:_=l[v]*f;for(let u=0;u<f;u++)d[x++]=c[_++]}return new si(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],_=e(d,i);l.push(_)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const _=c[h];f.push(_.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,_=h.length;d<_;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new _t,cr=new Jl,Aa=new Ql,Pp=new D,$r=new D,Qr=new D,Jr=new D,ec=new D,Ra=new D,Ca=new be,Pa=new be,ba=new be,bp=new D,Lp=new D,Dp=new D,La=new D,Da=new D;class fe extends At{constructor(e=new hn,n=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(ec.fromBufferAttribute(h,e),o?Ra.addScaledVector(ec,f):Ra.addScaledVector(ec.sub(n),f))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Aa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Aa,Pp)===null||cr.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Cp.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],u=o[m.materialIndex],p=Math.max(m.start,_.start),g=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let y=p,C=g;y<C;y+=3){const w=a.getX(y),T=a.getX(y+1),I=a.getX(y+2);r=Ia(this,u,e,i,c,f,h,w,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(a.count,_.start+_.count);for(let m=x,u=v;m<u;m+=3){const p=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Ia(this,o,e,i,c,f,h,p,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],u=o[m.materialIndex],p=Math.max(m.start,_.start),g=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let y=p,C=g;y<C;y+=3){const w=y,T=y+1,I=y+2;r=Ia(this,u,e,i,c,f,h,w,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let m=x,u=v;m<u;m+=3){const p=m,g=m+1,y=m+2;r=Ia(this,o,e,i,c,f,h,p,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function lS(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Da);return c<n.near||c>n.far?null:{distance:c,point:Da.clone(),object:t}}function Ia(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$r),t.getVertexPosition(l,Qr),t.getVertexPosition(c,Jr);const f=lS(t,e,n,i,$r,Qr,Jr,La);if(f){r&&(Ca.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),ba.fromBufferAttribute(r,c),f.uv=Gn.getInterpolation(La,$r,Qr,Jr,Ca,Pa,ba,new be)),s&&(Ca.fromBufferAttribute(s,a),Pa.fromBufferAttribute(s,l),ba.fromBufferAttribute(s,c),f.uv1=Gn.getInterpolation(La,$r,Qr,Jr,Ca,Pa,ba,new be),f.uv2=f.uv1),o&&(bp.fromBufferAttribute(o,a),Lp.fromBufferAttribute(o,l),Dp.fromBufferAttribute(o,c),f.normal=Gn.getInterpolation(La,$r,Qr,Jr,bp,Lp,Dp,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Gn.getNormal($r,Qr,Jr,h.normal),f.face=h}return f}class St extends hn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,_=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(h,2));function x(v,m,u,p,g,y,C,w,T,I,S){const E=y/T,z=C/I,H=y/2,Q=C/2,b=w/2,N=T+1,W=I+1;let q=0,U=0;const O=new D;for(let k=0;k<W;k++){const Z=k*z-Q;for(let $=0;$<N;$++){const Y=$*E-H;O[v]=Y*p,O[m]=Z*g,O[u]=b,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[u]=w>0?1:-1,f.push(O.x,O.y,O.z),h.push($/T),h.push(1-k/I),q+=1}}for(let k=0;k<I;k++)for(let Z=0;Z<T;Z++){const $=d+Z+N*k,Y=d+Z+N*(k+1),K=d+(Z+1)+N*(k+1),le=d+(Z+1)+N*k;l.push($,Y,le),l.push(Y,K,le),U+=6}a.addGroup(_,U,S),_+=U,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function uS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const cS={clone:Fs,merge:Qt};var fS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=uS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q_ extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class hS extends At{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Pn(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new Pn(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new Pn(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new Pn(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new Pn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class J_ extends yn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pS extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(So("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rr?kt:bn),this.texture=new J_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new St(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:$i});s.uniforms.tEquirect.value=n;const o=new fe(r,s),a=n.minFilter;return n.minFilter===ko&&(n.minFilter=Cn),new hS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const tc=new D,mS=new D,gS=new Xe;class Oi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tc.subVectors(i,n).cross(mS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gS.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ql,Ua=new D;class gd{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],_=r[8],x=r[9],v=r[10],m=r[11],u=r[12],p=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-_,y-u).normalize(),i[1].setComponents(l+s,d+c,m+_,y+u).normalize(),i[2].setComponents(l+o,d+f,m+x,y+p).normalize(),i[3].setComponents(l-o,d-f,m-x,y-p).normalize(),i[4].setComponents(l-a,d-h,m-v,y-g).normalize(),n===vi)i[5].setComponents(l+a,d+h,m+v,y+g).normalize();else if(n===Dl)i[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _S(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,_=h.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=t.SHORT;else if(h instanceof Uint32Array)v=t.UNSIGNED_INT;else if(h instanceof Int32Array)v=t.INT;else if(h instanceof Int8Array)v=t.BYTE;else if(h instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,f,h){const d=f.array,_=f._updateRange,x=f.updateRanges;if(t.bindBuffer(h,c),_.count===-1&&x.length===0&&t.bufferSubData(h,0,d),x.length!==0){for(let v=0,m=x.length;v<m;v++){const u=x[v];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(h,_.offset*d.BYTES_PER_ELEMENT,d,_.offset,_.count):t.bufferSubData(h,_.offset*d.BYTES_PER_ELEMENT,d.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class Zo extends hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,_=[],x=[],v=[],m=[];for(let u=0;u<f;u++){const p=u*d-o;for(let g=0;g<c;g++){const y=g*h-s;x.push(y,-p,0),v.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const g=p+c*u,y=p+c*(u+1),C=p+1+c*(u+1),w=p+1+c*u;_.push(g,y,w),_.push(y,C,w)}this.setIndex(_),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
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
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
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
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LS=`#ifdef USE_IRIDESCENCE
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
#endif`,DS=`#ifdef USE_BUMPMAP
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
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
} // validated`,GS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VS=`vec3 transformedNormal = objectNormal;
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
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`
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
}`,KS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
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
#endif`,_M=`struct PhysicalMaterial {
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
}`,vM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nE=`float getShadowMask() {
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,TE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,AE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,bE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,DE=`uniform vec3 diffuse;
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
}`,IE=`#define LAMBERT
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
}`,UE=`#define LAMBERT
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
}`,NE=`#define MATCAP
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
}`,OE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,kE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,VE=`#define TOON
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
}`,WE=`#define TOON
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
}`,XE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,qE=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,KE=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:vS,alphahash_pars_fragment:xS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:TS,aomap_pars_fragment:wS,batching_pars_vertex:AS,batching_vertex:RS,begin_vertex:CS,beginnormal_vertex:PS,bsdfs:bS,iridescence_fragment:LS,bumpmap_pars_fragment:DS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:NS,clipping_planes_vertex:OS,color_fragment:FS,color_pars_fragment:zS,color_pars_vertex:kS,color_vertex:BS,common:HS,cube_uv_reflection_fragment:GS,defaultnormal_vertex:VS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:ZS,envmap_fragment:KS,envmap_common_pars_fragment:$S,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:fM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:uM,lights_pars_begin:cM,lights_toon_fragment:dM,lights_toon_pars_fragment:hM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:_M,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:yM,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:wM,map_pars_fragment:AM,map_particle_fragment:RM,map_particle_pars_fragment:CM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:bM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:IM,morphtarget_vertex:UM,normal_fragment_begin:NM,normal_fragment_maps:OM,normal_pars_fragment:FM,normal_pars_vertex:zM,normal_vertex:kM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:jM,premultiplied_alpha_fragment:YM,project_vertex:qM,dithering_fragment:ZM,dithering_pars_fragment:KM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:uE,tonemapping_pars_fragment:cE,transmission_fragment:fE,transmission_pars_fragment:dE,uv_pars_fragment:hE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:SE,cube_frag:ME,depth_vert:EE,depth_frag:TE,distanceRGBA_vert:wE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:PE,linedashed_frag:bE,meshbasic_vert:LE,meshbasic_frag:DE,meshlambert_vert:IE,meshlambert_frag:UE,meshmatcap_vert:NE,meshmatcap_frag:OE,meshnormal_vert:FE,meshnormal_frag:zE,meshphong_vert:kE,meshphong_frag:BE,meshphysical_vert:HE,meshphysical_frag:GE,meshtoon_vert:VE,meshtoon_frag:WE,points_vert:XE,points_frag:jE,shadow_vert:YE,shadow_frag:qE,sprite_vert:ZE,sprite_frag:KE},ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Qt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Qt([ae.lights,ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Na={r:0,b:0,g:0};function $E(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,f,h=null,d=0,_=null;function x(m,u){let p=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),p=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||p)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Kl)?(f===void 0&&(f=new fe(new St(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Fs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=tt.getTransfer(g.colorSpace)!==ot,(h!==g||d!==g.version||_!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,_=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new fe(new Zo(2,2),new Ur({name:"BackgroundMaterial",uniforms:Fs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=tt.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,_=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(Na,$_(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:x}}function QE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,f=!1;function h(b,N,W,q,U){let O=!1;if(o){const k=v(q,W,N);c!==k&&(c=k,_(c.object)),O=u(b,q,W,U),O&&p(b,q,W,U)}else{const k=N.wireframe===!0;(c.geometry!==q.id||c.program!==W.id||c.wireframe!==k)&&(c.geometry=q.id,c.program=W.id,c.wireframe=k,O=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,I(b,N,W,q),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function x(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function v(b,N,W){const q=W.wireframe===!0;let U=a[b.id];U===void 0&&(U={},a[b.id]=U);let O=U[N.id];O===void 0&&(O={},U[N.id]=O);let k=O[q];return k===void 0&&(k=m(d()),O[q]=k),k}function m(b){const N=[],W=[],q=[];for(let U=0;U<r;U++)N[U]=0,W[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:q,object:b,attributes:{},index:null}}function u(b,N,W,q){const U=c.attributes,O=N.attributes;let k=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){const K=U[$];let le=O[$];if(le===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;k++}return c.attributesNum!==k||c.index!==q}function p(b,N,W,q){const U={},O=N.attributes;let k=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){let K=O[$];K===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),U[$]=le,k++}c.attributes=U,c.attributesNum=k,c.index=q}function g(){const b=c.newAttributes;for(let N=0,W=b.length;N<W;N++)b[N]=0}function y(b){C(b,0)}function C(b,N){const W=c.newAttributes,q=c.enabledAttributes,U=c.attributeDivisors;W[b]=1,q[b]===0&&(t.enableVertexAttribArray(b),q[b]=1),U[b]!==N&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,N),U[b]=N)}function w(){const b=c.newAttributes,N=c.enabledAttributes;for(let W=0,q=N.length;W<q;W++)N[W]!==b[W]&&(t.disableVertexAttribArray(W),N[W]=0)}function T(b,N,W,q,U,O,k){k===!0?t.vertexAttribIPointer(b,N,W,U,O):t.vertexAttribPointer(b,N,W,q,U,O)}function I(b,N,W,q){if(i.isWebGL2===!1&&(b.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=q.attributes,O=W.getAttributes(),k=N.defaultAttributeValues;for(const Z in O){const $=O[Z];if($.location>=0){let Y=U[Z];if(Y===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){const K=Y.normalized,le=Y.itemSize,_e=n.get(Y);if(_e===void 0)continue;const ve=_e.buffer,Ne=_e.type,Oe=_e.bytesPerElement,Re=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||Y.gpuType===U_);if(Y.isInterleavedBufferAttribute){const Ye=Y.data,G=Ye.stride,Ft=Y.offset;if(Ye.isInstancedInterleavedBuffer){for(let Te=0;Te<$.locationSize;Te++)C($.location+Te,Ye.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Te=0;Te<$.locationSize;Te++)y($.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<$.locationSize;Te++)T($.location+Te,le/$.locationSize,Ne,K,G*Oe,(Ft+le/$.locationSize*Te)*Oe,Re)}else{if(Y.isInstancedBufferAttribute){for(let Ye=0;Ye<$.locationSize;Ye++)C($.location+Ye,Y.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ye=0;Ye<$.locationSize;Ye++)y($.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ye=0;Ye<$.locationSize;Ye++)T($.location+Ye,le/$.locationSize,Ne,K,le*Oe,le/$.locationSize*Ye*Oe,Re)}}else if(k!==void 0){const K=k[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv($.location,K);break;case 3:t.vertexAttrib3fv($.location,K);break;case 4:t.vertexAttrib4fv($.location,K);break;default:t.vertexAttrib1fv($.location,K)}}}}w()}function S(){H();for(const b in a){const N=a[b];for(const W in N){const q=N[W];for(const U in q)x(q[U].object),delete q[U];delete N[W]}delete a[b]}}function E(b){if(a[b.id]===void 0)return;const N=a[b.id];for(const W in N){const q=N[W];for(const U in q)x(q[U].object),delete q[U];delete N[W]}delete a[b.id]}function z(b){for(const N in a){const W=a[N];if(W[b.id]===void 0)continue;const q=W[b.id];for(const U in q)x(q[U].object),delete q[U];delete W[b.id]}}function H(){Q(),f=!0,c!==l&&(c=l,_(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function JE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let _,x;if(r)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d;x++)this.render(f[x],h[x]);else{_.multiDrawArraysWEBGL(s,f,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=h[v];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),C=g&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:p,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function tT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Oi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const _=h.length!==0||d||i!==0||r;return r=d,i=h.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,_){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?f(null):c();else{const p=s?0:i,g=p*4;let y=u.clippingState||null;l.value=y,y=f(x,d,g,_);for(let C=0;C!==g;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,_,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const u=_+v*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,y=_;g!==v;++g,y+=4)o.copy(h[g]).applyMatrix4(p,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nT(t){let e=new WeakMap;function n(o,a){return a===uf?o.mapping=Us:a===cf&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uf||a===cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class t0 extends Q_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,Ip=[.125,.215,.35,.446,.526,.582],vr=20,nc=new t0,Up=new Qe;let ic=null,rc=0,sc=0;const mr=(1+Math.sqrt(5))/2,ns=1/mr,Np=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,mr,ns),new D(0,mr,-ns),new D(ns,0,mr),new D(-ns,0,mr),new D(mr,ns,0),new D(-mr,ns,0)];class Op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Bo,format:Wn,colorSpace:Ti,depthBuffer:!1},r=Fp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iT(s)),this._blurMaterial=rT(s,e,n)}return r}_compileMaterial(e){const n=new fe(this._lodPlanes[0],e);this._renderer.compile(n,nc)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Up),f.toneMapping=Qi,f.autoClear=!1;const _=new eu({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new fe(new St,_);let v=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,v=!0):(_.color.copy(Up),v=!0);for(let u=0;u<6;u++){const p=u%3;p===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):p===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Oa(r,p*g,u>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,nc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Np[(r-1)%Np.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new fe(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*vr-1),v=s/x,m=isFinite(s)?1+Math.floor(f*v):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const u=[];let p=0;for(let T=0;T<vr;++T){const I=T/v,S=Math.exp(-I*I/2);u.push(S),T===0?p+=S:T<m&&(p+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/p;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-gs?r-g+gs:0),w=4*(this._cubeSize-y);Oa(n,C,w,3*y,2*y),l.setRenderTarget(n),l.render(h,nc)}}function iT(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=Ip[o-t+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],_=6,x=6,v=3,m=2,u=1,p=new Float32Array(v*x*_),g=new Float32Array(m*x*_),y=new Float32Array(u*x*_);for(let w=0;w<_;w++){const T=w%3*2/3-1,I=w>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];p.set(S,v*x*w),g.set(d,m*x*w);const E=[w,w,w,w,w,w];y.set(E,u*x*w)}const C=new hn;C.setAttribute("position",new si(p,v)),C.setAttribute("uv",new si(g,m)),C.setAttribute("faceIndex",new si(y,u)),e.push(C),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fp(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rT(t,e,n){const i=new Float32Array(vr),r=new D(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zp(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function kp(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function sT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uf||l===cf,f=l===Us||l===Ns;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Op(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Op(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function oT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const _=h.morphAttributes;for(const x in _){const v=_[x];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(h){const d=[],_=h.index,x=h.attributes.position;let v=0;if(_!==null){const p=_.array;v=_.version;for(let g=0,y=p.length;g<y;g+=3){const C=p[g+0],w=p[g+1],T=p[g+2];d.push(C,w,w,T,T,C)}}else if(x!==void 0){const p=x.array;v=x.version;for(let g=0,y=p.length/3-1;g<y;g+=3){const C=g+0,w=g+1,T=g+2;d.push(C,w,w,T,T,C)}}else return;const m=new(W_(d)?K_:Z_)(d,1);m.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const _=h.index;_!==null&&d.version<_.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function lT(t,e,n,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function f(_,x){t.drawElements(s,x,a,_*l),n.update(x,s,1)}function h(_,x,v){if(v===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,x,a,_*l,v),n.update(x,s,v)}function d(_,x,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<v;u++)this.render(_[u]/l,x[u]);else{m.multiDrawElementsWEBGL(s,x,0,a,_,0,v);let u=0;for(let p=0;p<v;p++)u+=x[p];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function uT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cT(t,e){return t[0]-e[0]}function fT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let N=function(){Q.dispose(),s.delete(f),f.removeEventListener("dispose",N)};var _=N;m!==void 0&&m.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let E=f.attributes.position.count*S,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*z*4*v),Q=new Y_(H,E,z,v);Q.type=Gi,Q.needsUpdate=!0;const b=S*4;for(let W=0;W<v;W++){const q=w[W],U=T[W],O=I[W],k=E*z*4*W;for(let Z=0;Z<q.count;Z++){const $=Z*b;g===!0&&(o.fromBufferAttribute(q,Z),H[k+$+0]=o.x,H[k+$+1]=o.y,H[k+$+2]=o.z,H[k+$+3]=0),y===!0&&(o.fromBufferAttribute(U,Z),H[k+$+4]=o.x,H[k+$+5]=o.y,H[k+$+6]=o.z,H[k+$+7]=0),C===!0&&(o.fromBufferAttribute(O,Z),H[k+$+8]=o.x,H[k+$+9]=o.y,H[k+$+10]=o.z,H[k+$+11]=O.itemSize===4?o.w:1)}}m={count:v,texture:Q,size:new be(E,z)},s.set(f,m),f.addEventListener("dispose",N)}let u=0;for(let g=0;g<d.length;g++)u+=d[g];const p=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[f.id]=v}for(let y=0;y<x;y++){const C=v[y];C[0]=y,C[1]=d[y]}v.sort(fT);for(let y=0;y<8;y++)y<x&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(cT);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const C=a[y],w=C[0],T=C[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+y)!==m[w]&&f.setAttribute("morphTarget"+y,m[w]),u&&f.getAttribute("morphNormal"+y)!==u[w]&&f.setAttribute("morphNormal"+y,u[w]),r[y]=T,p+=T):(m&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-p;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function hT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class n0 extends yn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Ar,f!==Ar&&f!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ar&&(i=Hi),i===void 0&&f===Os&&(i=wr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const i0=new yn,r0=new n0(1,1);r0.compareFunction=V_;const s0=new Y_,o0=new $y,a0=new J_,Bp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bp[r];if(s===void 0&&(s=new Float32Array(r),Bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tu(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function vT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;Wp.set(i),t.uniformMatrix2fv(this.addr,!1,Wp),Lt(n,i)}}function xT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),Lt(n,i)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;Gp.set(i),t.uniformMatrix4fv(this.addr,!1,Gp),Lt(n,i)}}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function PT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?r0:i0;n.setTexture2D(e||s,r)}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||o0,r)}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||a0,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s0,r)}function IT(t){switch(t){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function UT(t,e){t.uniform1fv(this.addr,e)}function NT(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function OT(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function FT(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function zT(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kT(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BT(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HT(t,e){t.uniform1iv(this.addr,e)}function GT(t,e){t.uniform2iv(this.addr,e)}function VT(t,e){t.uniform3iv(this.addr,e)}function WT(t,e){t.uniform4iv(this.addr,e)}function XT(t,e){t.uniform1uiv(this.addr,e)}function jT(t,e){t.uniform2uiv(this.addr,e)}function YT(t,e){t.uniform3uiv(this.addr,e)}function qT(t,e){t.uniform4uiv(this.addr,e)}function ZT(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||i0,s[o])}function KT(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||o0,s[o])}function $T(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a0,s[o])}function QT(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||s0,s[o])}function JT(t){switch(t){case 5126:return UT;case 35664:return NT;case 35665:return OT;case 35666:return FT;case 35674:return zT;case 35675:return kT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return QT}}class ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IT(n.type)}}class tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JT(n.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function iw(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),o=oc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xp(n,c===void 0?new ew(a,t,e):new tw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new nw(a),Xp(n,h)),n=h}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rw=37297;let sw=0;function ow(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aw(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Ll&&n===bl?i="LinearDisplayP3ToLinearSRGB":e===bl&&n===Ll&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case $l:return[i,"LinearTransferOETF"];case kt:case pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ow(t.getShaderSource(e),o)}else return r}function lw(t,e){const n=aw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uw(t,e){let n;switch(e){case xy:n="Linear";break;case yy:n="Reinhard";break;case Sy:n="OptimizedCineon";break;case My:n="ACESFilmic";break;case Ty:n="AgX";break;case Ey:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function fw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _s(t){return t!==""}function qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(t){return t.replace(pw,gw)}const mw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gw(t,e){let n=He[e];if(n===void 0){const i=mw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gf(n)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(t){return t.replace(_w,vw)}function vw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $p(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Mw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case D_:e="ENVMAP_BLENDING_MULTIPLY";break;case _y:e="ENVMAP_BLENDING_MIX";break;case vy:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Tw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xw(n),c=yw(n),f=Sw(n),h=Mw(n),d=Ew(n),_=n.isWebGL2?"":cw(n),x=fw(n),v=dw(s),m=r.createProgram();let u,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_s).join(`
`),u.length>0&&(u+=`
`),p=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(u=[$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[_,$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?He.tonemapping_pars_fragment:"",n.toneMapping!==Qi?uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,lw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),o=gf(o),o=qp(o,n),o=Zp(o,n),a=gf(a),a=qp(a,n),a=Zp(a,n),o=Kp(o),a=Kp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=g+u+o,C=g+p+a,w=jp(r,r.VERTEX_SHADER,y),T=jp(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function I(H){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(w).trim(),N=r.getShaderInfoLog(T).trim();let W=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,T);else{const U=Yp(r,w,"vertex"),O=Yp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+U+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(b===""||N==="")&&(q=!1);q&&(H.diagnostics={runnable:W,programLog:Q,vertexShader:{log:b,prefix:u},fragmentShader:{log:N,prefix:p}})}r.deleteShader(w),r.deleteShader(T),S=new nl(r,m),E=hw(r,m)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,rw)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let ww=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Rw(e),n.set(e,i)),i}}class Rw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Cw(t,e,n,i,r,s,o){const a=new md,l=new Aw,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,E,z,H,Q){const b=H.fog,N=Q.geometry,W=S.isMeshStandardMaterial?H.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),U=q&&q.mapping===Kl?q.image.height:null,O=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const k=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=k!==void 0?k.length:0;let $=0;N.morphAttributes.position!==void 0&&($=1),N.morphAttributes.normal!==void 0&&($=2),N.morphAttributes.color!==void 0&&($=3);let Y,K,le,_e;if(O){const xt=ei[O];Y=xt.vertexShader,K=xt.fragmentShader}else Y=S.vertexShader,K=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),Ne=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,Re=!!S.map,Ye=!!S.matcap,G=!!q,Ft=!!S.aoMap,Te=!!S.lightMap,Le=!!S.bumpMap,xe=!!S.normalMap,rt=!!S.displacementMap,ze=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,B=S.anisotropy>0,ie=S.clearcoat>0,ee=S.iridescence>0,re=S.sheen>0,ye=S.transmission>0,ce=B&&!!S.anisotropyMap,ge=ie&&!!S.clearcoatMap,Ae=ie&&!!S.clearcoatNormalMap,ke=ie&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,Je=ee&&!!S.iridescenceThicknessMap,Ge=re&&!!S.sheenColorMap,De=re&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,de=!!S.specularColorMap,P=!!S.specularIntensityMap,se=ye&&!!S.transmissionMap,Se=ye&&!!S.thicknessMap,me=!!S.gradientMap,te=!!S.alphaMap,L=S.alphaTest>0,oe=!!S.alphaHash,ue=!!S.extensions,Ce=!!N.attributes.uv1,we=!!N.attributes.uv2,qe=!!N.attributes.uv3;let Ze=Qi;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:K,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Oe,instancing:Ne,instancingColor:Ne&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ti,map:Re,matcap:Ye,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:U,aoMap:Ft,lightMap:Te,bumpMap:Le,normalMap:xe,displacementMap:d&&rt,emissiveMap:ze,normalMapObjectSpace:xe&&S.normalMapType===Oy,normalMapTangentSpace:xe&&S.normalMapType===G_,metalnessMap:R,roughnessMap:M,anisotropy:B,anisotropyMap:ce,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Je,sheen:re,sheenColorMap:Ge,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:de,specularIntensityMap:P,transmission:ye,transmissionMap:se,thicknessMap:Se,gradientMap:me,opaque:S.transparent===!1&&S.blending===ws,alphaMap:te,alphaTest:L,alphaHash:oe,combine:S.combine,mapUv:Re&&v(S.map.channel),aoMapUv:Ft&&v(S.aoMap.channel),lightMapUv:Te&&v(S.lightMap.channel),bumpMapUv:Le&&v(S.bumpMap.channel),normalMapUv:xe&&v(S.normalMap.channel),displacementMapUv:rt&&v(S.displacementMap.channel),emissiveMapUv:ze&&v(S.emissiveMap.channel),metalnessMapUv:R&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(S.sheenRoughnessMap.channel),specularMapUv:Ee&&v(S.specularMap.channel),specularColorMapUv:de&&v(S.specularColorMap.channel),specularIntensityMapUv:P&&v(S.specularIntensityMap.channel),transmissionMapUv:se&&v(S.transmissionMap.channel),thicknessMapUv:Se&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:qe,pointsUvs:Q.isPoints===!0&&!!N.attributes.uv&&(Re||te),fog:!!b,useFog:S.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:$,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)E.push(z),E.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(p(E,S),g(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function p(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function g(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=x[S.type];let z;if(E){const H=ei[E];z=cS.clone(H.uniforms)}else z=S.uniforms;return z}function C(S,E){let z;for(let H=0,Q=c.length;H<Q;H++){const b=c[H];if(b.cacheKey===E){z=b,++z.usedTimes;break}}return z===void 0&&(z=new Tw(t,E,S,s),c.push(z)),z}function w(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:I}}function Pw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function bw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,_,x,v,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:_,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=_,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=v,u.group=m),e++,u}function a(h,d,_,x,v,m){const u=o(h,d,_,x,v,m);_.transmission>0?i.push(u):_.transparent===!0?r.push(u):n.push(u)}function l(h,d,_,x,v,m){const u=o(h,d,_,x,v,m);_.transmission>0?i.unshift(u):_.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||bw),i.length>1&&i.sort(d||Qp),r.length>1&&r.sort(d||Qp)}function f(){for(let h=e,d=t.length;h<d;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function Lw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jp,t.set(i,[o])):r>=s.length?(o=new Jp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Dw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Qe};break;case"SpotLight":n={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function Iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Uw=0;function Nw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ow(t,e){const n=new Dw,i=Iw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new D);const s=new D,o=new _t,a=new _t;function l(f,h){let d=0,_=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let v=0,m=0,u=0,p=0,g=0,y=0,C=0,w=0,T=0,I=0,S=0;f.sort(Nw);const E=h===!0?Math.PI:1;for(let H=0,Q=f.length;H<Q;H++){const b=f[H],N=b.color,W=b.intensity,q=b.distance,U=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=N.r*W*E,_+=N.g*W*E,x+=N.b*W*E;else if(b.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(b.sh.coefficients[O],W);S++}else if(b.isDirectionalLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*E),b.castShadow){const k=b.shadow,Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.directionalShadow[v]=Z,r.directionalShadowMap[v]=U,r.directionalShadowMatrix[v]=b.shadow.matrix,y++}r.directional[v]=O,v++}else if(b.isSpotLight){const O=n.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(N).multiplyScalar(W*E),O.distance=q,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,r.spot[u]=O;const k=b.shadow;if(b.map&&(r.spotLightMap[T]=b.map,T++,k.updateMatrices(b),b.castShadow&&I++),r.spotLightMatrix[u]=k.matrix,b.castShadow){const Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=U,w++}u++}else if(b.isRectAreaLight){const O=n.get(b);O.color.copy(N).multiplyScalar(W),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),r.rectArea[p]=O,p++}else if(b.isPointLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*E),O.distance=b.distance,O.decay=b.decay,b.castShadow){const k=b.shadow,Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=b.shadow.matrix,C++}r.point[m]=O,m++}else if(b.isHemisphereLight){const O=n.get(b);O.skyColor.copy(b.color).multiplyScalar(W*E),O.groundColor.copy(b.groundColor).multiplyScalar(W*E),r.hemi[g]=O,g++}}p>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=_,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==v||z.pointLength!==m||z.spotLength!==u||z.rectAreaLength!==p||z.hemiLength!==g||z.numDirectionalShadows!==y||z.numPointShadows!==C||z.numSpotShadows!==w||z.numSpotMaps!==T||z.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=p,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=S,z.directionalLength=v,z.pointLength=m,z.spotLength=u,z.rectAreaLength=p,z.hemiLength=g,z.numDirectionalShadows=y,z.numPointShadows=C,z.numSpotShadows=w,z.numSpotMaps=T,z.numLightProbes=S,r.version=Uw++)}function c(f,h){let d=0,_=0,x=0,v=0,m=0;const u=h.matrixWorldInverse;for(let p=0,g=f.length;p<g;p++){const y=f[p];if(y.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(y.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),_++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function em(t,e){const n=new Ow(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Fw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new em(t,e),n.set(s,[l])):o>=a.length?(l=new em(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class zw extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kw extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hw=`uniform sampler2D shadow_pass;
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
}`;function Gw(t,e,n){let i=new gd;const r=new be,s=new be,o=new Nt,a=new zw({depthPacking:Ny}),l=new kw,c={},f=n.maxTextureSize,h={[nr]:dn,[dn]:nr,[ni]:ni},d=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Bw,fragmentShader:Hw}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const x=new hn;x.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fe(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let u=this.type;this.render=function(w,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),H=t.state;H.setBlending($i),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==hi&&this.type===hi,b=u===hi&&this.type!==hi;for(let N=0,W=w.length;N<W;N++){const q=w[N],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null||Q===!0||b===!0){const Z=this.type!==hi?{minFilter:en,magFilter:en}:{};U.map!==null&&U.map.dispose(),U.map=new Ir(r.x,r.y,Z),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const k=U.getViewportCount();for(let Z=0;Z<k;Z++){const $=U.getViewport(Z);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),H.viewport(o),U.updateMatrices(q,Z),i=U.getFrustum(),y(T,I,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===hi&&p(U,I),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,E,z)};function p(w,T){const I=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ir(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,I,d,v,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,I,_,v,null)}function g(w,T,I,S){let E=null;const z=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)E=z;else if(E=I.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=E.uuid,Q=T.uuid;let b=c[H];b===void 0&&(b={},c[H]=b);let N=b[Q];N===void 0&&(N=E.clone(),b[Q]=N,T.addEventListener("dispose",C)),E=N}if(E.visible=T.visible,E.wireframe=T.wireframe,S===hi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=t.properties.get(E);H.light=I}return E}function y(w,T,I,S,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===hi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),b=w.material;if(Array.isArray(b)){const N=Q.groups;for(let W=0,q=N.length;W<q;W++){const U=N[W],O=b[U.materialIndex];if(O&&O.visible){const k=g(w,O,S,E);w.onBeforeShadow(t,w,T,I,Q,k,U),t.renderBufferDirect(I,null,Q,k,w,U),w.onAfterShadow(t,w,T,I,Q,k,U)}}}else if(b.visible){const N=g(w,b,S,E);w.onBeforeShadow(t,w,T,I,Q,N,null),t.renderBufferDirect(I,null,Q,N,w,null),w.onAfterShadow(t,w,T,I,Q,N,null)}}const H=w.children;for(let Q=0,b=H.length;Q<b;Q++)y(H[Q],T,I,S,E)}function C(w){w.target.removeEventListener("dispose",C);for(const I in c){const S=c[I],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function Vw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const oe=new Nt;let ue=null;const Ce=new Nt(0,0,0,0);return{setMask:function(we){ue!==we&&!L&&(t.colorMask(we,we,we,we),ue=we)},setLocked:function(we){L=we},setClear:function(we,qe,Ze,pt,xt){xt===!0&&(we*=pt,qe*=pt,Ze*=pt),oe.set(we,qe,Ze,pt),Ce.equals(oe)===!1&&(t.clearColor(we,qe,Ze,pt),Ce.copy(oe))},reset:function(){L=!1,ue=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ue=null,Ce=null;return{setTest:function(we){we?Oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(we){oe!==we&&!L&&(t.depthMask(we),oe=we)},setFunc:function(we){if(ue!==we){switch(we){case cy:t.depthFunc(t.NEVER);break;case fy:t.depthFunc(t.ALWAYS);break;case dy:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case hy:t.depthFunc(t.EQUAL);break;case py:t.depthFunc(t.GEQUAL);break;case my:t.depthFunc(t.GREATER);break;case gy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=we}},setLocked:function(we){L=we},setClear:function(we){Ce!==we&&(t.clearDepth(we),Ce=we)},reset:function(){L=!1,oe=null,ue=null,Ce=null}}}function o(){let L=!1,oe=null,ue=null,Ce=null,we=null,qe=null,Ze=null,pt=null,xt=null;return{setTest:function($e){L||($e?Oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function($e){oe!==$e&&!L&&(t.stencilMask($e),oe=$e)},setFunc:function($e,Et,qn){(ue!==$e||Ce!==Et||we!==qn)&&(t.stencilFunc($e,Et,qn),ue=$e,Ce=Et,we=qn)},setOp:function($e,Et,qn){(qe!==$e||Ze!==Et||pt!==qn)&&(t.stencilOp($e,Et,qn),qe=$e,Ze=Et,pt=qn)},setLocked:function($e){L=$e},setClear:function($e){xt!==$e&&(t.clearStencil($e),xt=$e)},reset:function(){L=!1,oe=null,ue=null,Ce=null,we=null,qe=null,Ze=null,pt=null,xt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},_={},x=new WeakMap,v=[],m=null,u=!1,p=null,g=null,y=null,C=null,w=null,T=null,I=null,S=new Qe(0,0,0),E=0,z=!1,H=null,Q=null,b=null,N=null,W=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=O>=2);let Z=null,$={};const Y=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),le=new Nt().fromArray(Y),_e=new Nt().fromArray(K);function ve(L,oe,ue,Ce){const we=new Uint8Array(4),qe=t.createTexture();t.bindTexture(L,qe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ue;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(oe+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return qe}const Ne={};Ne[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Cl),ze(!1),R(Nh),Oe(t.CULL_FACE),xe($i);function Oe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ye(L,oe){return _[L]!==oe?(t.bindFramebuffer(L,oe),_[L]=oe,i&&(L===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function G(L,oe){let ue=v,Ce=!1;if(L)if(ue=x.get(oe),ue===void 0&&(ue=[],x.set(oe,ue)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(ue.length!==we.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,Ze=we.length;qe<Ze;qe++)ue[qe]=t.COLOR_ATTACHMENT0+qe;ue.length=we.length,Ce=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ft(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Te={[_r]:t.FUNC_ADD,[Zx]:t.FUNC_SUBTRACT,[Kx]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[kh]=t.MIN,Te[Bh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Te[kh]=L.MIN_EXT,Te[Bh]=L.MAX_EXT)}const Le={[$x]:t.ZERO,[Qx]:t.ONE,[Jx]:t.SRC_COLOR,[af]:t.SRC_ALPHA,[sy]:t.SRC_ALPHA_SATURATE,[iy]:t.DST_COLOR,[ty]:t.DST_ALPHA,[ey]:t.ONE_MINUS_SRC_COLOR,[lf]:t.ONE_MINUS_SRC_ALPHA,[ry]:t.ONE_MINUS_DST_COLOR,[ny]:t.ONE_MINUS_DST_ALPHA,[oy]:t.CONSTANT_COLOR,[ay]:t.ONE_MINUS_CONSTANT_COLOR,[ly]:t.CONSTANT_ALPHA,[uy]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(L,oe,ue,Ce,we,qe,Ze,pt,xt,$e){if(L===$i){u===!0&&(Re(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==qx){if(L!==p||$e!==z){if((g!==_r||w!==_r)&&(t.blendEquation(t.FUNC_ADD),g=_r,w=_r),$e)switch(L){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oh:t.blendFunc(t.ONE,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,T=null,I=null,S.set(0,0,0),E=0,p=L,z=$e}return}we=we||oe,qe=qe||ue,Ze=Ze||Ce,(oe!==g||we!==w)&&(t.blendEquationSeparate(Te[oe],Te[we]),g=oe,w=we),(ue!==y||Ce!==C||qe!==T||Ze!==I)&&(t.blendFuncSeparate(Le[ue],Le[Ce],Le[qe],Le[Ze]),y=ue,C=Ce,T=qe,I=Ze),(pt.equals(S)===!1||xt!==E)&&(t.blendColor(pt.r,pt.g,pt.b,xt),S.copy(pt),E=xt),p=L,z=!1}function rt(L,oe){L.side===ni?Re(t.CULL_FACE):Oe(t.CULL_FACE);let ue=L.side===dn;oe&&(ue=!ue),ze(ue),L.blending===ws&&L.transparent===!1?xe($i):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){H!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),H=L)}function R(L){L!==Xx?(Oe(t.CULL_FACE),L!==Q&&(L===Nh?t.cullFace(t.BACK):L===jx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),Q=L}function M(L){L!==b&&(U&&t.lineWidth(L),b=L)}function B(L,oe,ue){L?(Oe(t.POLYGON_OFFSET_FILL),(N!==oe||W!==ue)&&(t.polygonOffset(oe,ue),N=oe,W=ue)):Re(t.POLYGON_OFFSET_FILL)}function ie(L){L?Oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+q-1),Z!==L&&(t.activeTexture(L),Z=L)}function re(L,oe,ue){ue===void 0&&(Z===null?ue=t.TEXTURE0+q-1:ue=Z);let Ce=$[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},$[ue]=Ce),(Ce.type!==L||Ce.texture!==oe)&&(Z!==ue&&(t.activeTexture(ue),Z=ue),t.bindTexture(L,oe||Ne[L]),Ce.type=L,Ce.texture=oe)}function ye(){const L=$[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function se(L){_e.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Se(L,oe){let ue=h.get(oe);ue===void 0&&(ue=new WeakMap,h.set(oe,ue));let Ce=ue.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(oe,L.name),ue.set(L,Ce))}function me(L,oe){const Ce=h.get(oe).get(L);f.get(oe)!==Ce&&(t.uniformBlockBinding(oe,Ce,L.__bindingPointIndex),f.set(oe,Ce))}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,$={},_={},x=new WeakMap,v=[],m=null,u=!1,p=null,g=null,y=null,C=null,w=null,T=null,I=null,S=new Qe(0,0,0),E=0,z=!1,H=null,Q=null,b=null,N=null,W=null,le.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:Ye,drawBuffers:G,useProgram:Ft,setBlending:xe,setMaterial:rt,setFlipSided:ze,setCullFace:R,setLineWidth:M,setPolygonOffset:B,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:ye,compressedTexImage2D:ce,compressedTexImage3D:ge,texImage2D:Ee,texImage3D:de,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:Ge,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:Je,scissor:P,viewport:se,reset:te}}function Ww(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return _?new OffscreenCanvas(R,M):Il("canvas")}function v(R,M,B,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=M?mf:Math.floor,ye=re(ee*R.width),ce=re(ee*R.height);h===void 0&&(h=x(ye,ce));const ge=B?x(ye,ce):h;return ge.width=ye,ge.height=ce,ge.getContext("2d").drawImage(R,0,0,ye,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+ce+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return gp(R.width)&&gp(R.height)}function u(R){return a?!1:R.wrapS!==Vn||R.wrapT!==Vn||R.minFilter!==en&&R.minFilter!==Cn}function p(R,M){return R.generateMipmaps&&M&&R.minFilter!==en&&R.minFilter!==Cn}function g(R){t.generateMipmap(R)}function y(R,M,B,ie,ee=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=M;if(M===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),M===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA){const ye=ee?Pl:tt.getTransfer(ie);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=ye===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(R,M,B){return p(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){return R===en||R===Hh||R===Du?t.NEAREST:t.LINEAR}function T(R){const M=R.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&f.delete(M)}function I(R){const M=R.target;M.removeEventListener("dispose",I),z(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,ie=d.get(B);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(R),Object.keys(ie).length===0&&d.delete(B)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,ie=d.get(B);delete ie[M.__cacheKey],o.memory.textures--}function z(R){const M=R.texture,B=i.get(R),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let re=0;re<B.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(B.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=M.length;ee<re;ee++){const ye=i.get(M[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(R)}let H=0;function Q(){H=0}function b(){const R=H;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),H+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const B=i.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function q(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){le(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function U(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){le(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function O(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){_e(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const k={[ff]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[df]:t.MIRRORED_REPEAT},Z={[en]:t.NEAREST,[Hh]:t.NEAREST_MIPMAP_NEAREST,[Du]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[wy]:t.LINEAR_MIPMAP_NEAREST,[ko]:t.LINEAR_MIPMAP_LINEAR},$={[Fy]:t.NEVER,[Vy]:t.ALWAYS,[zy]:t.LESS,[V_]:t.LEQUAL,[ky]:t.EQUAL,[Gy]:t.GEQUAL,[By]:t.GREATER,[Hy]:t.NOTEQUAL};function Y(R,M,B){if(B?(t.texParameteri(R,t.TEXTURE_WRAP_S,k[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,k[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,k[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==en&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===en||M.minFilter!==Du&&M.minFilter!==ko||M.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const ie=M.source;let ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));const re=N(M);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[re].usedTimes++;const ye=ee[R.__cacheKey];ye!==void 0&&(ee[R.__cacheKey].usedTimes--,ye.usedTimes===0&&E(M)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return B}function le(R,M,B){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=K(R,M),re=M.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+B);const ye=i.get(re);if(re.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),ge=M.colorSpace===bn?null:tt.getPrimaries(M.colorSpace),Ae=M.colorSpace===bn||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ke=u(M)&&m(M.image)===!1;let J=v(M.image,ke,!1,r.maxTextureSize);J=ze(M,J);const Je=m(J)||a,Ge=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Ee=y(M.internalFormat,Ge,De,M.colorSpace,M.isVideoTexture);Y(ie,M,Je);let de;const P=M.mipmaps,se=a&&M.isVideoTexture!==!0&&Ee!==B_,Se=ye.__version===void 0||ee===!0,me=C(M,J,Je);if(M.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?M.type===Gi?Ee=t.DEPTH_COMPONENT32F:M.type===Hi?Ee=t.DEPTH_COMPONENT24:M.type===wr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:M.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ar&&Ee===t.DEPTH_COMPONENT&&M.type!==hd&&M.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hi,De=s.convert(M.type)),M.format===Os&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,M.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=wr,De=s.convert(M.type))),Se&&(se?n.texStorage2D(t.TEXTURE_2D,1,Ee,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ee,J.width,J.height,0,Ge,De,null));else if(M.isDataTexture)if(P.length>0&&Je){se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,Ge,De,de.data):n.texImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,Ge,De,de.data);M.generateMipmaps=!1}else se?(Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Ge,De,J.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,J.width,J.height,0,Ge,De,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,P[0].width,P[0].height,J.depth);for(let te=0,L=P.length;te<L;te++)de=P[te],M.format!==Wn?Ge!==null?se?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,Ge,de.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,J.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,Ge,De,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,J.depth,0,Ge,De,de.data)}else{se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],M.format!==Wn?Ge!==null?se?n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,Ge,de.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,Ge,De,de.data):n.texImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,Ge,De,de.data)}else if(M.isDataArrayTexture)se?(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,De,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Ge,De,J.data);else if(M.isData3DTexture)se?(Se&&n.texStorage3D(t.TEXTURE_3D,me,Ee,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,De,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Ge,De,J.data);else if(M.isFramebufferTexture){if(Se)if(se)n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height);else{let te=J.width,L=J.height;for(let oe=0;oe<me;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ee,te,L,0,Ge,De,null),te>>=1,L>>=1}}else if(P.length>0&&Je){se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,Ge,De,de):n.texImage2D(t.TEXTURE_2D,te,Ee,Ge,De,de);M.generateMipmaps=!1}else se?(Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,De,J)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ge,De,J);p(M,Je)&&g(ie),ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _e(R,M,B){if(M.image.length!==6)return;const ie=K(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const ye=tt.getPrimaries(tt.workingColorSpace),ce=M.colorSpace===bn?null:tt.getPrimaries(M.colorSpace),ge=M.colorSpace===bn||ye===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!Ae&&!ke?J[te]=v(M.image[te],!1,!0,r.maxCubemapSize):J[te]=ke?M.image[te].image:M.image[te],J[te]=ze(M,J[te]);const Je=J[0],Ge=m(Je)||a,De=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),de=y(M.internalFormat,De,Ee,M.colorSpace),P=a&&M.isVideoTexture!==!0,se=re.__version===void 0||ie===!0;let Se=C(M,Je,Ge);Y(t.TEXTURE_CUBE_MAP,M,Ge);let me;if(Ae){P&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,de,Je.width,Je.height);for(let te=0;te<6;te++){me=J[te].mipmaps;for(let L=0;L<me.length;L++){const oe=me[L];M.format!==Wn?De!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,De,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,De,Ee,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,oe.width,oe.height,0,De,Ee,oe.data)}}}else{me=M.mipmaps,P&&se&&(me.length>0&&Se++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,de,J[0].width,J[0].height));for(let te=0;te<6;te++)if(ke){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,De,Ee,J[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,J[te].width,J[te].height,0,De,Ee,J[te].data);for(let L=0;L<me.length;L++){const ue=me[L].image[te].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,ue.width,ue.height,De,Ee,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,ue.width,ue.height,0,De,Ee,ue.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Ee,J[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,De,Ee,J[te]);for(let L=0;L<me.length;L++){const oe=me[L];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,De,Ee,oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,De,Ee,oe.image[te])}}}p(M,Ge)&&g(t.TEXTURE_CUBE_MAP),re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ve(R,M,B,ie,ee,re){const ye=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),ge=y(B.internalFormat,ye,ce,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ke=Math.max(1,M.width>>re),J=Math.max(1,M.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,ge,ke,J,M.depth,0,ye,ce,null):n.texImage2D(ee,re,ge,ke,J,0,ye,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,0,Le(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||xe(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gi?ie=t.DEPTH_COMPONENT32F:ee.type===Hi&&(ie=t.DEPTH_COMPONENT24));const re=Le(M);xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Le(M);B&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ye=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),ge=y(re.internalFormat,ye,ce,re.colorSpace),Ae=Le(M);B&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ge,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ee=Le(M);if(M.depthTexture.format===Ar)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Os)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ne(M.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ne(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,M,B){const ie=i.get(R);M!==void 0&&ve(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(R)}function G(R){const M=R.texture,B=i.get(R),ie=i.get(M);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,ye=m(R)||a;if(ee){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let ge=0;ge<M.mipmaps.length;ge++)B.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ce=R.texture;for(let ge=0,Ae=ce.length;ge<Ae;ge++){const ke=i.get(ce[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const ce=re?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Ae=ce[ge];B.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const ke=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),Je=y(Ae.internalFormat,ke,J,Ae.colorSpace,R.isXRRenderTarget===!0),Ge=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Je,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M,ye);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ve(B.__webglFramebuffer[ce][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ve(B.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(M,ye)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ce=R.texture;for(let ge=0,Ae=ce.length;ge<Ae;ge++){const ke=ce[ge],J=i.get(ke);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),Y(t.TEXTURE_2D,ke,ye),ve(B.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),p(ke,ye)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ie.__webglTexture),Y(ce,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ve(B.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ce,ge);else ve(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);p(M,ye)&&g(ce),n.unbindTexture()}R.depthBuffer&&Re(R)}function Ft(R){const M=m(R)||a,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=B.length;ie<ee;ie++){const re=B[ie];if(p(re,M)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(re).__webglTexture;n.bindTexture(ye,ce),g(ye),n.unbindTexture()}}}function Te(R){if(a&&R.samples>0&&xe(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,ie=R.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),ge=R.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<M.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){re.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&re.push(ye);const ke=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ge){const J=i.get(M[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,B,ie,0,0,B,ie,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<M.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);const ke=i.get(M[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function ze(R,M){const B=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===hf||B!==Ti&&B!==bn&&(tt.getTransfer(B)===ot?a===!1?e.has("EXT_sRGB")===!0&&ie===Wn?(R.format=hf,R.minFilter=Cn,R.generateMipmaps=!1):M=X_.sRGBToLinear(M):(ie!==Wn||ee!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=b,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=Ye,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe}function Xw(t,e,n){const i=n.isWebGL2;function r(s,o=bn){let a;const l=tt.getTransfer(o);if(s===Ji)return t.UNSIGNED_BYTE;if(s===N_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===O_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ay)return t.BYTE;if(s===Ry)return t.SHORT;if(s===hd)return t.UNSIGNED_SHORT;if(s===U_)return t.INT;if(s===Hi)return t.UNSIGNED_INT;if(s===Gi)return t.FLOAT;if(s===Bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cy)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===Py)return t.LUMINANCE;if(s===by)return t.LUMINANCE_ALPHA;if(s===Ar)return t.DEPTH_COMPONENT;if(s===Os)return t.DEPTH_STENCIL;if(s===hf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ly)return t.RED;if(s===F_)return t.RED_INTEGER;if(s===Dy)return t.RG;if(s===z_)return t.RG_INTEGER;if(s===k_)return t.RGBA_INTEGER;if(s===Iu||s===Uu||s===Nu||s===Ou)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===Wh||s===Xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===B_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jh||s===Yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jh)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===Zh||s===Kh||s===$h||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ep)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===op)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ap)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fu||s===lp||s===up)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fu)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Iy||s===cp||s===fp||s===dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class jw extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fa extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yw={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),_=.02,x=.005;c.inputState.pinching&&d>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class qw extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,_=null,x=null;const v=n.getContextAttributes();let m=null,u=null;const p=[],g=[],y=new be;let C=null;const w=new Pn;w.layers.enable(1),w.viewport=new Nt;const T=new Pn;T.layers.enable(2),T.viewport=new Nt;const I=[w,T],S=new jw;S.layers.enable(1),S.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=p[Y];return K===void 0&&(K=new ac,p[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=p[Y];return K===void 0&&(K=new ac,p[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=p[Y];return K===void 0&&(K=new ac,p[Y]=K),K.getHandSpace()};function H(Y){const K=g.indexOf(Y.inputSource);if(K===-1)return;const le=p[K];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",b);for(let Y=0;Y<p.length;Y++){const K=g[Y];K!==null&&(g[Y]=null,p[Y].disconnect(K))}E=null,z=null,e.setRenderTarget(m),_=null,d=null,h=null,r=null,u=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",b),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Ir(_.framebufferWidth,_.framebufferHeight,{format:Wn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,le=null,_e=null;v.depth&&(_e=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=v.stencil?Os:Ar,le=v.stencil?wr:Hi);const ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Ir(d.textureWidth,d.textureHeight,{format:Wn,type:Ji,depthTexture:new n0(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ne=e.properties.get(u);Ne.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b(Y){for(let K=0;K<Y.removed.length;K++){const le=Y.removed[K],_e=g.indexOf(le);_e>=0&&(g[_e]=null,p[_e].disconnect(le))}for(let K=0;K<Y.added.length;K++){const le=Y.added[K];let _e=g.indexOf(le);if(_e===-1){for(let Ne=0;Ne<p.length;Ne++)if(Ne>=g.length){g.push(le),_e=Ne;break}else if(g[Ne]===null){g[Ne]=le,_e=Ne;break}if(_e===-1)break}const ve=p[_e];ve&&ve.connect(le)}}const N=new D,W=new D;function q(Y,K,le){N.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const _e=N.distanceTo(W),ve=K.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Oe=ve[14]/(ve[10]-1),Re=ve[14]/(ve[10]+1),Ye=(ve[9]+1)/ve[5],G=(ve[9]-1)/ve[5],Ft=(ve[8]-1)/ve[0],Te=(Ne[8]+1)/Ne[0],Le=Oe*Ft,xe=Oe*Te,rt=_e/(-Ft+Te),ze=rt*-Ft;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=Oe+rt,M=Re+rt,B=Le-ze,ie=xe+(_e-ze),ee=Ye*Re/M*R,re=G*Re/M*R;Y.projectionMatrix.makePerspective(B,ie,ee,re,R,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function U(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.near=T.near=w.near=Y.near,S.far=T.far=w.far=Y.far,(E!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,z=S.far);const K=Y.parent,le=S.cameras;U(S,K);for(let _e=0;_e<le.length;_e++)U(le[_e],K);le.length===2?q(S,w,T):S.projectionMatrix.copy(w.projectionMatrix),O(Y,S,K)};function O(Y,K,le){le===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Y)};let k=null;function Z(Y,K){if(f=K.getViewerPose(c||o),x=K,f!==null){const le=f.views;_!==null&&(e.setRenderTargetFramebuffer(u,_.framebuffer),e.setRenderTarget(u));let _e=!1;le.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ve=0;ve<le.length;ve++){const Ne=le[ve];let Oe=null;if(_!==null)Oe=_.getViewport(Ne);else{const Ye=h.getViewSubImage(d,Ne);Oe=Ye.viewport,ve===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Re=I[ve];Re===void 0&&(Re=new Pn,Re.layers.enable(ve),Re.viewport=new Nt,I[ve]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ve===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(Re)}}for(let le=0;le<p.length;le++){const _e=g[le],ve=p[le];_e!==null&&ve!==void 0&&ve.update(_e,K,c||o)}k&&k(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const $=new e0;$.setAnimationLoop(Z),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}function Zw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,$_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,p,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&_(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,p,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const p=e.get(u).envMap;if(p&&(m.envMap.value=p,m.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,p,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*p,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function _(m,u,p){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const p=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(p.matrixWorld),m.nearDistance.value=p.shadow.camera.near,m.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(p,g){const y=g.program;i.uniformBlockBinding(p,y)}function c(p,g){let y=r[p.id];y===void 0&&(x(p),y=f(p),r[p.id]=y,p.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(p,C);const w=e.render.frame;s[p.id]!==w&&(d(p),s[p.id]=w)}function f(p){const g=h();p.__bindingPointIndex=g;const y=t.createBuffer(),C=p.__size,w=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const g=r[p.id],y=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,T=y.length;w<T;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=I.length;S<E;S++){const z=I[S];if(_(z,w,S,C)===!0){const H=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let b=0;for(let N=0;N<Q.length;N++){const W=Q[N],q=v(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,H+b,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(p,g,y,C){const w=p.value,T=g+"_"+y;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const I=C[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function x(p){const g=p.uniforms;let y=0;const C=16;for(let T=0,I=g.length;T<I;T++){const S=Array.isArray(g[T])?g[T]:[g[T]];for(let E=0,z=S.length;E<z;E++){const H=S[E],Q=Array.isArray(H.value)?H.value:[H.value];for(let b=0,N=Q.length;b<N;b++){const W=Q[b],q=v(W),U=y%C;U!==0&&C-U<q.boundary&&(y+=C-U),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=q.storage}}}const w=y%C;return w>0&&(y+=C-w),p.__size=y,p.__cache={},this}function v(p){const g={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(g.boundary=4,g.storage=4):p.isVector2?(g.boundary=8,g.storage=8):p.isVector3||p.isColor?(g.boundary=16,g.storage=12):p.isVector4?(g.boundary=16,g.storage=16):p.isMatrix3?(g.boundary=48,g.storage=48):p.isMatrix4?(g.boundary=64,g.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),g}function m(p){const g=p.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class l0{constructor(e={}){const{canvas:n=jy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const _=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const u=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const g=this;let y=!1,C=0,w=0,T=null,I=-1,S=null;const E=new Nt,z=new Nt;let H=null;const Q=new Qe(0);let b=0,N=n.width,W=n.height,q=1,U=null,O=null;const k=new Nt(0,0,N,W),Z=new Nt(0,0,N,W);let $=!1;const Y=new gd;let K=!1,le=!1,_e=null;const ve=new _t,Ne=new be,Oe=new D,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return T===null?q:1}let G=i;function Ft(A,F){for(let X=0;X<A.length;X++){const j=A[X],V=n.getContext(j,F);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",oe,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),G=Ft(F,A),G===null)throw Ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Le,xe,rt,ze,R,M,B,ie,ee,re,ye,ce,ge,Ae,ke,J,Je,Ge,De,Ee,de,P,se;function Se(){Te=new oT(G),Le=new eT(G,Te,e),Te.init(Le),de=new Xw(G,Te,Le),xe=new Vw(G,Te,Le),rt=new uT(G),ze=new Pw,R=new Ww(G,Te,xe,ze,Le,de,rt),M=new nT(g),B=new sT(g),ie=new _S(G,Le),P=new QE(G,Te,ie,Le),ee=new aT(G,ie,rt,P),re=new hT(G,ee,ie,rt),Ge=new dT(G,Le,R),ke=new tT(ze),ye=new Cw(g,M,B,Te,Le,P,ke),ce=new Zw(g,ze),ge=new Lw,Ae=new Fw(Te,Le),Je=new $E(g,M,B,xe,re,d,l),J=new Gw(g,re,Le),se=new Kw(G,rt,Le,xe),De=new JE(G,Te,rt,Le),Ee=new lT(G,Te,rt,Le),rt.programs=ye.programs,g.capabilities=Le,g.extensions=Te,g.properties=ze,g.renderLists=ge,g.shadowMap=J,g.state=xe,g.info=rt}Se();const me=new qw(g,G);this.xr=me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(N,W,!1))},this.getSize=function(A){return A.set(N,W)},this.setSize=function(A,F,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,W=F,n.width=Math.floor(A*q),n.height=Math.floor(F*q),X===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(N*q,W*q).floor()},this.setDrawingBufferSize=function(A,F,X){N=A,W=F,q=X,n.width=Math.floor(A*X),n.height=Math.floor(F*X),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,F,X,j){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,F,X,j),xe.viewport(E.copy(k).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,F,X,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,F,X,j),xe.scissor(z.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){xe.setScissorTest($=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,F=!0,X=!0){let j=0;if(A){let V=!1;if(T!==null){const he=T.texture.format;V=he===k_||he===z_||he===F_}if(V){const he=T.texture.type,Me=he===Ji||he===Hi||he===hd||he===wr||he===N_||he===O_,Pe=Je.getClearColor(),Ie=Je.getClearAlpha(),Ve=Pe.r,Fe=Pe.g,Be=Pe.b;Me?(_[0]=Ve,_[1]=Fe,_[2]=Be,_[3]=Ie,G.clearBufferuiv(G.COLOR,0,_)):(x[0]=Ve,x[1]=Fe,x[2]=Be,x[3]=Ie,G.clearBufferiv(G.COLOR,0,x))}else j|=G.COLOR_BUFFER_BIT}F&&(j|=G.DEPTH_BUFFER_BIT),X&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),ge.dispose(),Ae.dispose(),ze.dispose(),M.dispose(),B.dispose(),re.dispose(),P.dispose(),se.dispose(),ye.dispose(),me.dispose(),me.removeEventListener("sessionstart",xt),me.removeEventListener("sessionend",$e),_e&&(_e.dispose(),_e=null),Et.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=rt.autoReset,F=J.enabled,X=J.autoUpdate,j=J.needsUpdate,V=J.type;Se(),rt.autoReset=A,J.enabled=F,J.autoUpdate=X,J.needsUpdate=j,J.type=V}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const F=A.target;F.removeEventListener("dispose",ue),Ce(F)}function Ce(A){we(A),ze.remove(A)}function we(A){const F=ze.get(A).programs;F!==void 0&&(F.forEach(function(X){ye.releaseProgram(X)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,X,j,V,he){F===null&&(F=Re);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Pe=h0(A,F,X,j,V);xe.setMaterial(j,Me);let Ie=X.index,Ve=1;if(j.wireframe===!0){if(Ie=ee.getWireframeAttribute(X),Ie===void 0)return;Ve=2}const Fe=X.drawRange,Be=X.attributes.position;let yt=Fe.start*Ve,pn=(Fe.start+Fe.count)*Ve;he!==null&&(yt=Math.max(yt,he.start*Ve),pn=Math.min(pn,(he.start+he.count)*Ve)),Ie!==null?(yt=Math.max(yt,0),pn=Math.min(pn,Ie.count)):Be!=null&&(yt=Math.max(yt,0),pn=Math.min(pn,Be.count));const Dt=pn-yt;if(Dt<0||Dt===1/0)return;P.setup(V,j,Pe,X,Ie);let oi,ct=De;if(Ie!==null&&(oi=ie.get(Ie),ct=Ee,ct.setIndex(oi)),V.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*Ye()),ct.setMode(G.LINES)):ct.setMode(G.TRIANGLES);else if(V.isLine){let We=j.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*Ye()),V.isLineSegments?ct.setMode(G.LINES):V.isLineLoop?ct.setMode(G.LINE_LOOP):ct.setMode(G.LINE_STRIP)}else V.isPoints?ct.setMode(G.POINTS):V.isSprite&&ct.setMode(G.TRIANGLES);if(V.isBatchedMesh)ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ct.renderInstances(yt,Dt,V.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,nu=Math.min(X.instanceCount,We);ct.renderInstances(yt,Dt,nu)}else ct.render(yt,Dt)};function qe(A,F,X){A.transparent===!0&&A.side===ni&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,$o(A,F,X),A.side=nr,A.needsUpdate=!0,$o(A,F,X),A.side=ni):$o(A,F,X)}this.compile=function(A,F,X=null){X===null&&(X=A),m=Ae.get(X),m.init(),p.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==X&&A.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);const j=new Set;return A.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Pe=he[Me];qe(Pe,X,V),j.add(Pe)}else qe(he,X,V),j.add(he)}),p.pop(),m=null,j},this.compileAsync=function(A,F,X=null){const j=this.compile(A,F,X);return new Promise(V=>{function he(){if(j.forEach(function(Me){ze.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){V(A);return}setTimeout(he,10)}Te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ze=null;function pt(A){Ze&&Ze(A)}function xt(){Et.stop()}function $e(){Et.start()}const Et=new e0;Et.setAnimationLoop(pt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(A){Ze=A,me.setAnimationLoop(A),A===null?Et.stop():Et.start()},me.addEventListener("sessionstart",xt),me.addEventListener("sessionend",$e),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,F,T),m=Ae.get(A,p.length),m.init(),p.push(m),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(ve),le=this.localClippingEnabled,K=ke.init(this.clippingPlanes,le),v=ge.get(A,u.length),v.init(),u.push(v),qn(A,F,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(U,O),this.info.render.frame++,K===!0&&ke.beginShadows();const X=m.state.shadowsArray;if(J.render(X,A,F),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(v,A),m.setupLights(g._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let V=0,he=j.length;V<he;V++){const Me=j[V];yd(v,A,Me,Me.viewport)}}else yd(v,A,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,F),P.resetDefaultState(),I=-1,S=null,p.pop(),p.length>0?m=p[p.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function qn(A,F,X,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){j&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Me=re.update(A),Pe=A.material;Pe.visible&&v.push(A,Me,Pe,X,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Me=re.update(A),Pe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Oe.copy(Me.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Pe)){const Ie=Me.groups;for(let Ve=0,Fe=Ie.length;Ve<Fe;Ve++){const Be=Ie[Ve],yt=Pe[Be.materialIndex];yt&&yt.visible&&v.push(A,Me,yt,X,Oe.z,Be)}}else Pe.visible&&v.push(A,Me,Pe,X,Oe.z,null)}}const he=A.children;for(let Me=0,Pe=he.length;Me<Pe;Me++)qn(he[Me],F,X,j)}function yd(A,F,X,j){const V=A.opaque,he=A.transmissive,Me=A.transparent;m.setupLightsView(X),K===!0&&ke.setGlobalState(g.clippingPlanes,X),he.length>0&&d0(V,he,F,X),j&&xe.viewport(E.copy(j)),V.length>0&&Ko(V,F,X),he.length>0&&Ko(he,F,X),Me.length>0&&Ko(Me,F,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function d0(A,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const he=Le.isWebGL2;_e===null&&(_e=new Ir(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Bo:Ji,minFilter:ko,samples:he?4:0})),g.getDrawingBufferSize(Ne),he?_e.setSize(Ne.x,Ne.y):_e.setSize(mf(Ne.x),mf(Ne.y));const Me=g.getRenderTarget();g.setRenderTarget(_e),g.getClearColor(Q),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Pe=g.toneMapping;g.toneMapping=Qi,Ko(A,X,j),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e);let Ie=!1;for(let Ve=0,Fe=F.length;Ve<Fe;Ve++){const Be=F[Ve],yt=Be.object,pn=Be.geometry,Dt=Be.material,oi=Be.group;if(Dt.side===ni&&yt.layers.test(j.layers)){const ct=Dt.side;Dt.side=dn,Dt.needsUpdate=!0,Sd(yt,X,j,pn,Dt,oi),Dt.side=ct,Dt.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e)),g.setRenderTarget(Me),g.setClearColor(Q,b),g.toneMapping=Pe}function Ko(A,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let V=0,he=A.length;V<he;V++){const Me=A[V],Pe=Me.object,Ie=Me.geometry,Ve=j===null?Me.material:j,Fe=Me.group;Pe.layers.test(X.layers)&&Sd(Pe,F,X,Ie,Ve,Fe)}}function Sd(A,F,X,j,V,he){A.onBeforeRender(g,F,X,j,V,he),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(g,F,X,j,A,he),V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,g.renderBufferDirect(X,F,j,V,A,he),V.side=nr,V.needsUpdate=!0,g.renderBufferDirect(X,F,j,V,A,he),V.side=ni):g.renderBufferDirect(X,F,j,V,A,he),A.onAfterRender(g,F,X,j,V,he)}function $o(A,F,X){F.isScene!==!0&&(F=Re);const j=ze.get(A),V=m.state.lights,he=m.state.shadowsArray,Me=V.state.version,Pe=ye.getParameters(A,V.state,he,F,X),Ie=ye.getProgramCacheKey(Pe);let Ve=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||j.environment),Ve===void 0&&(A.addEventListener("dispose",ue),Ve=new Map,j.programs=Ve);let Fe=Ve.get(Ie);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===Me)return Ed(A,Pe),Fe}else Pe.uniforms=ye.getUniforms(A),A.onBuild(X,Pe,g),A.onBeforeCompile(Pe,g),Fe=ye.acquireProgram(Pe,Ie),Ve.set(Ie,Fe),j.uniforms=Pe.uniforms;const Be=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=ke.uniform),Ed(A,Pe),j.needsLights=m0(A),j.lightsStateVersion=Me,j.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function Md(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=nl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Ed(A,F){const X=ze.get(A);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function h0(A,F,X,j,V){F.isScene!==!0&&(F=Re),R.resetTextureUnits();const he=F.fog,Me=j.isMeshStandardMaterial?F.environment:null,Pe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ti,Ie=(j.isMeshStandardMaterial?B:M).get(j.envMap||Me),Ve=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,pn=!!X.morphAttributes.color;let Dt=Qi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const oi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=oi!==void 0?oi.length:0,We=ze.get(j),nu=m.state.lights;if(K===!0&&(le===!0||A!==S)){const Tn=A===S&&j.id===I;ke.setState(j,A,Tn)}let mt=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==nu.state.version||We.outputColorSpace!==Pe||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||We.envMap!==Ie||j.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ke.numPlanes||We.numIntersection!==ke.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Fe||We.morphTargets!==Be||We.morphNormals!==yt||We.morphColors!==pn||We.toneMapping!==Dt||Le.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,We.__version=j.version);let or=We.currentProgram;mt===!0&&(or=$o(j,F,V));let Td=!1,Vs=!1,iu=!1;const Vt=or.getUniforms(),ar=We.uniforms;if(xe.useProgram(or.program)&&(Td=!0,Vs=!0,iu=!0),j.id!==I&&(I=j.id,Vs=!0),Td||S!==A){Vt.setValue(G,"projectionMatrix",A.projectionMatrix),Vt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Oe.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&Vt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Vt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Vs=!0,iu=!0)}if(V.isSkinnedMesh){Vt.setOptional(G,V,"bindMatrix"),Vt.setOptional(G,V,"bindMatrixInverse");const Tn=V.skeleton;Tn&&(Le.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Vt.setValue(G,"boneTexture",Tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Vt.setOptional(G,V,"batchingTexture"),Vt.setValue(G,"batchingTexture",V._matricesTexture,R));const ru=X.morphAttributes;if((ru.position!==void 0||ru.normal!==void 0||ru.color!==void 0&&Le.isWebGL2===!0)&&Ge.update(V,X,or),(Vs||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,Vt.setValue(G,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ar.envMap.value=Ie,ar.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Vs&&(Vt.setValue(G,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&p0(ar,iu),he&&j.fog===!0&&ce.refreshFogUniforms(ar,he),ce.refreshMaterialUniforms(ar,j,q,W,_e),nl.upload(G,Md(We),ar,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nl.upload(G,Md(We),ar,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Vt.setValue(G,"center",V.center),Vt.setValue(G,"modelViewMatrix",V.modelViewMatrix),Vt.setValue(G,"normalMatrix",V.normalMatrix),Vt.setValue(G,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Tn=j.uniformsGroups;for(let su=0,g0=Tn.length;su<g0;su++)if(Le.isWebGL2){const wd=Tn[su];se.update(wd,or),se.bind(wd,or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return or}function p0(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function m0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,X){ze.get(A.texture).__webglTexture=F,ze.get(A.depthTexture).__webglTexture=X;const j=ze.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const X=ze.get(A);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,X=0){T=A,C=F,w=X;let j=!0,V=null,he=!1,Me=!1;if(A){const Ie=ze.get(A);Ie.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(G.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?R.setupRenderTarget(A):Ie.__hasExternalTextures&&R.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const Fe=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?V=Fe[F][X]:V=Fe[F],he=!0):Le.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?V=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[X]:V=Fe,E.copy(A.viewport),z.copy(A.scissor),H=A.scissorTest}else E.copy(k).multiplyScalar(q).floor(),z.copy(Z).multiplyScalar(q).floor(),H=$;if(xe.bindFramebuffer(G.FRAMEBUFFER,V)&&Le.drawBuffers&&j&&xe.drawBuffers(A,V),xe.viewport(E),xe.scissor(z),xe.setScissorTest(H),he){const Ie=ze.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,X)}else if(Me){const Ie=ze.get(A.texture),Ve=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ve)}I=-1},this.readRenderTargetPixels=function(A,F,X,j,V,he,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){xe.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const Ie=A.texture,Ve=Ie.format,Fe=Ie.type;if(Ve!==Wn&&de.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Bo&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==Ji&&de.convert(Fe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Gi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&X>=0&&X<=A.height-V&&G.readPixels(F,X,j,V,de.convert(Ve),de.convert(Fe),he)}finally{const Ie=T!==null?ze.get(T).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,F,X=0){const j=Math.pow(2,-X),V=Math.floor(F.image.width*j),he=Math.floor(F.image.height*j);R.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,A.x,A.y,V,he),xe.unbindTexture()},this.copyTextureToTexture=function(A,F,X,j=0){const V=F.image.width,he=F.image.height,Me=de.convert(X.format),Pe=de.convert(X.type);R.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,j,A.x,A.y,V,he,Me,Pe,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,j,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,j,A.x,A.y,Me,Pe,F.image),j===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,X,j,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,Ie=de.convert(j.format),Ve=de.convert(j.type);let Fe;if(j.isData3DTexture)R.setTexture3D(j,0),Fe=G.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),Fe=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Be=G.getParameter(G.UNPACK_ROW_LENGTH),yt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pn=G.getParameter(G.UNPACK_SKIP_PIXELS),Dt=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES),ct=X.isCompressedTexture?X.mipmaps[V]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Fe,V,F.x,F.y,F.z,he,Me,Pe,Ie,Ve,ct.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,V,F.x,F.y,F.z,he,Me,Pe,Ie,ct.data)):G.texSubImage3D(Fe,V,F.x,F.y,F.z,he,Me,Pe,Ie,Ve,ct),G.pixelStorei(G.UNPACK_ROW_LENGTH,Be),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),V===0&&j.generateMipmaps&&G.generateMipmap(Fe),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,xe.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===$l?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Rr:H_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?kt:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $w extends l0{}$w.prototype.isWebGL1Renderer=!0;class Qw extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class u0 extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tm=new D,nm=new D,im=new _t,lc=new Jl,za=new Ql;class Di extends At{constructor(e=new hn,n=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tm.fromBufferAttribute(n,r-1),nm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tm.distanceTo(nm);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;im.copy(r).invert(),lc.copy(e.ray).applyMatrix4(im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,f=new D,h=new D,d=new D,_=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let g=u,y=p-1;g<y;g+=_){const C=x.getX(g),w=x.getX(g+1);if(c.fromBufferAttribute(m,C),f.fromBufferAttribute(m,w),lc.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||n.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let g=u,y=p-1;g<y;g+=_){if(c.fromBufferAttribute(m,g),f.fromBufferAttribute(m,g+1),lc.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||n.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class qt extends hn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],_=[];let x=0;const v=[],m=i/2;let u=0;p(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(_,2));function p(){const y=new D,C=new D;let w=0;const T=(n-e)/i;for(let I=0;I<=s;I++){const S=[],E=I/s,z=E*(n-e)+e;for(let H=0;H<=r;H++){const Q=H/r,b=Q*l+a,N=Math.sin(b),W=Math.cos(b);C.x=z*N,C.y=-E*i+m,C.z=z*W,h.push(C.x,C.y,C.z),y.set(N,T,W).normalize(),d.push(y.x,y.y,y.z),_.push(Q,1-E),S.push(x++)}v.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const E=v[S][I],z=v[S+1][I],H=v[S+1][I+1],Q=v[S][I+1];f.push(E,z,Q),f.push(z,H,Q),w+=6}c.addGroup(u,w,0),u+=w}function g(y){const C=x,w=new be,T=new D;let I=0;const S=y===!0?e:n,E=y===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*E,0),d.push(0,E,0),_.push(.5,.5),x++;const z=x;for(let H=0;H<=r;H++){const b=H/r*l+a,N=Math.cos(b),W=Math.sin(b);T.x=S*W,T.y=m*E,T.z=S*N,h.push(T.x,T.y,T.z),d.push(0,E,0),w.x=N*.5+.5,w.y=W*.5*E+.5,_.push(w.x,w.y),x++}for(let H=0;H<r;H++){const Q=C+H,b=z+H;y===!0?f.push(b,b+1,Q):f.push(b+1,b,Q),I+=3}c.addGroup(u,I,y===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vd extends hn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const g=new D,y=new D,C=new D;for(let w=0;w<n.length;w+=3)_(n[w+0],g),_(n[w+1],y),_(n[w+2],C),l(g,y,C,p)}function l(p,g,y,C){const w=C+1,T=[];for(let I=0;I<=w;I++){T[I]=[];const S=p.clone().lerp(y,I/w),E=g.clone().lerp(y,I/w),z=w-I;for(let H=0;H<=z;H++)H===0&&I===w?T[I][H]=S:T[I][H]=S.clone().lerp(E,H/z)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){const E=Math.floor(S/2);S%2===0?(d(T[I][E+1]),d(T[I+1][E]),d(T[I][E])):(d(T[I][E+1]),d(T[I+1][E+1]),d(T[I+1][E]))}}function c(p){const g=new D;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(p),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function f(){const p=new D;for(let g=0;g<s.length;g+=3){p.x=s[g+0],p.y=s[g+1],p.z=s[g+2];const y=m(p)/2/Math.PI+.5,C=u(p)/Math.PI+.5;o.push(y,1-C)}x(),h()}function h(){for(let p=0;p<o.length;p+=6){const g=o[p+0],y=o[p+2],C=o[p+4],w=Math.max(g,y,C),T=Math.min(g,y,C);w>.9&&T<.1&&(g<.2&&(o[p+0]+=1),y<.2&&(o[p+2]+=1),C<.2&&(o[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function _(p,g){const y=p*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function x(){const p=new D,g=new D,y=new D,C=new D,w=new be,T=new be,I=new be;for(let S=0,E=0;S<s.length;S+=9,E+=6){p.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),w.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),C.copy(p).add(g).add(y).divideScalar(3);const z=m(C);v(w,E+0,p,z),v(T,E+2,g,z),v(I,E+4,y,z)}}function v(p,g,y,C){C<0&&p.x===1&&(o[g]=p.x-1),y.x===0&&y.z===0&&(o[g]=C/2/Math.PI+.5)}function m(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.vertices,e.indices,e.radius,e.details)}}class vs extends vd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vs(e.radius,e.detail)}}class xd extends hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new D,d=new D,_=[],x=[],v=[],m=[];for(let u=0;u<=i;u++){const p=[],g=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const w=C/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(w+y,1-g),p.push(c++)}f.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const g=f[u][p+1],y=f[u][p],C=f[u+1][p],w=f[u+1][p+1];(u!==0||o>0)&&_.push(g,y,w),(u!==i-1||l<Math.PI)&&_.push(y,C,w)}this.setIndex(_),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xr extends hn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new D,h=new D,d=new D;for(let _=0;_<=i;_++)for(let x=0;x<=r;x++){const v=x/r*s,m=_/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(_/i)}for(let _=1;_<=i;_++)for(let x=1;x<=r;x++){const v=(r+1)*_+x-1,m=(r+1)*(_-1)+x-1,u=(r+1)*(_-1)+x,p=(r+1)*_+x;o.push(v,m,p),o.push(m,u,p)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rm extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G_,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c0 extends At{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const uc=new _t,sm=new D,om=new D;class Jw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gd,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e1 extends Jw{constructor(){super(new t0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t1 extends c0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n1 extends c0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class f0{constructor(e,n,i=0,r=1/0){this.ray=new Jl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return _f(e,this,i,n),i.sort(am),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)_f(e[r],this,i,n);return i.sort(am),i}}function am(t,e){return t.distance-e.distance}function _f(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)_f(r[s],e,n,!0)}}class lm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);const um={type:"change"},cc={type:"start"},cm={type:"end"},ka=new Jl,fm=new Oi,i1=Math.cos(70*Xy.DEG2RAD);class r1 extends Fr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ae),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(um),i.update(),s=r.NONE},this.update=function(){const P=new D,se=new Bt().setFromUnitVectors(e.up,new D(0,1,0)),Se=se.clone().invert(),me=new D,te=new Bt,L=new D,oe=2*Math.PI;return function(Ce=null){const we=i.object.position;P.copy(we).sub(i.target),P.applyQuaternion(se),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&H(E(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=oe:qe>Math.PI&&(qe-=oe),Ze<-Math.PI?Ze+=oe:Ze>Math.PI&&(Ze-=oe),qe<=Ze?a.theta=Math.max(qe,Math.min(Ze,a.theta)):a.theta=a.theta>(qe+Ze)/2?Math.max(qe,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=k(a.radius):a.radius=k(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Se),we.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let pt=!1;if(i.zoomToCursor&&w){let xt=null;if(i.object.isPerspectiveCamera){const $e=P.length();xt=k($e*c);const Et=$e-xt;i.object.position.addScaledVector(y,Et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new D(C.x,C.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),pt=!0;const Et=new D(C.x,C.y,0);Et.unproject(i.object),i.object.position.sub(Et).add($e),i.object.updateMatrixWorld(),xt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xt).add(i.object.position):(ka.origin.copy(i.object.position),ka.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ka.direction))<i1?e.lookAt(i.target):(fm.setFromNormalAndCoplanarPoint(i.object.up,i.target),ka.intersectPlane(fm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),pt=!0);return c=1,w=!1,pt||me.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(um),me.copy(i.object.position),te.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ae),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new lm,l=new lm;let c=1;const f=new D,h=new be,d=new be,_=new be,x=new be,v=new be,m=new be,u=new be,p=new be,g=new be,y=new D,C=new be;let w=!1;const T=[],I={};let S=!1;function E(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function z(P){const se=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*se)}function H(P){l.theta-=P}function Q(P){l.phi-=P}const b=function(){const P=new D;return function(Se,me){P.setFromMatrixColumn(me,0),P.multiplyScalar(-Se),f.add(P)}}(),N=function(){const P=new D;return function(Se,me){i.screenSpacePanning===!0?P.setFromMatrixColumn(me,1):(P.setFromMatrixColumn(me,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Se),f.add(P)}}(),W=function(){const P=new D;return function(Se,me){const te=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let oe=P.length();oe*=Math.tan(i.object.fov/2*Math.PI/180),b(2*Se*oe/te.clientHeight,i.object.matrix),N(2*me*oe/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(b(Se*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),N(me*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(P,se){if(!i.zoomToCursor)return;w=!0;const Se=i.domElement.getBoundingClientRect(),me=P-Se.left,te=se-Se.top,L=Se.width,oe=Se.height;C.x=me/L*2-1,C.y=-(te/oe)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){h.set(P.clientX,P.clientY)}function $(P){O(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function Y(P){x.set(P.clientX,P.clientY)}function K(P){d.set(P.clientX,P.clientY),_.subVectors(d,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;H(2*Math.PI*_.x/se.clientHeight),Q(2*Math.PI*_.y/se.clientHeight),h.copy(d),i.update()}function le(P){p.set(P.clientX,P.clientY),g.subVectors(p,u),g.y>0?q(z(g.y)):g.y<0&&U(z(g.y)),u.copy(p),i.update()}function _e(P){v.set(P.clientX,P.clientY),m.subVectors(v,x).multiplyScalar(i.panSpeed),W(m.x,m.y),x.copy(v),i.update()}function ve(P){O(P.clientX,P.clientY),P.deltaY<0?U(z(P.deltaY)):P.deltaY>0&&q(z(P.deltaY)),i.update()}function Ne(P){let se=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),i.update())}function Oe(P){if(T.length===1)h.set(P.pageX,P.pageY);else{const se=de(P),Se=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);h.set(Se,me)}}function Re(P){if(T.length===1)x.set(P.pageX,P.pageY);else{const se=de(P),Se=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);x.set(Se,me)}}function Ye(P){const se=de(P),Se=P.pageX-se.x,me=P.pageY-se.y,te=Math.sqrt(Se*Se+me*me);u.set(0,te)}function G(P){i.enableZoom&&Ye(P),i.enablePan&&Re(P)}function Ft(P){i.enableZoom&&Ye(P),i.enableRotate&&Oe(P)}function Te(P){if(T.length==1)d.set(P.pageX,P.pageY);else{const Se=de(P),me=.5*(P.pageX+Se.x),te=.5*(P.pageY+Se.y);d.set(me,te)}_.subVectors(d,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;H(2*Math.PI*_.x/se.clientHeight),Q(2*Math.PI*_.y/se.clientHeight),h.copy(d)}function Le(P){if(T.length===1)v.set(P.pageX,P.pageY);else{const se=de(P),Se=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);v.set(Se,me)}m.subVectors(v,x).multiplyScalar(i.panSpeed),W(m.x,m.y),x.copy(v)}function xe(P){const se=de(P),Se=P.pageX-se.x,me=P.pageY-se.y,te=Math.sqrt(Se*Se+me*me);p.set(0,te),g.set(0,Math.pow(p.y/u.y,i.zoomSpeed)),q(g.y),u.copy(p);const L=(P.pageX+se.x)*.5,oe=(P.pageY+se.y)*.5;O(L,oe)}function rt(P){i.enableZoom&&xe(P),i.enablePan&&Le(P)}function ze(P){i.enableZoom&&xe(P),i.enableRotate&&Te(P)}function R(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",B)),Ge(P),P.pointerType==="touch"?ke(P):ie(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?J(P):ee(P))}function B(P){De(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(cm),s=r.NONE}function ie(P){let se;switch(P.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case kr.DOLLY:if(i.enableZoom===!1)return;$(P),s=r.DOLLY;break;case kr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Y(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case kr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;Y(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cc)}function ee(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(P);break;case r.DOLLY:if(i.enableZoom===!1)return;le(P);break;case r.PAN:if(i.enablePan===!1)return;_e(P);break}}function re(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(cc),ve(ye(P)),i.dispatchEvent(cm))}function ye(P){const se=P.deltaMode,Se={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(se){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return P.ctrlKey&&!S&&(Se.deltaY*=10),Se}function ce(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function Ae(P){i.enabled===!1||i.enablePan===!1||Ne(P)}function ke(P){switch(Ee(P),T.length){case 1:switch(i.touches.ONE){case Br.ROTATE:if(i.enableRotate===!1)return;Oe(P),s=r.TOUCH_ROTATE;break;case Br.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Br.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ft(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cc)}function J(P){switch(Ee(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;rt(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(P),i.update();break;default:s=r.NONE}}function Je(P){i.enabled!==!1&&P.preventDefault()}function Ge(P){T.push(P.pointerId)}function De(P){delete I[P.pointerId];for(let se=0;se<T.length;se++)if(T[se]==P.pointerId){T.splice(se,1);return}}function Ee(P){let se=I[P.pointerId];se===void 0&&(se=new be,I[P.pointerId]=se),se.set(P.pageX,P.pageY)}function de(P){const se=P.pointerId===T[0]?T[1]:T[0];return I[se]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}const dr=new f0,Zt=new D,Ii=new D,lt=new Bt,dm={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},fc={type:"change"},hm={type:"mouseDown"},pm={type:"mouseUp",mode:null},mm={type:"objectChange"};class s1 extends At{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const i=new f1;this._gizmo=i,this.add(i);const r=new d1;this._plane=r,this.add(r);const s=this;function o(p,g){let y=g;Object.defineProperty(s,p,{get:function(){return y!==void 0?y:g},set:function(C){y!==C&&(y=C,r[p]=C,i[p]=C,s.dispatchEvent({type:p+"-changed",value:C}),s.dispatchEvent(fc))}}),s[p]=g,r[p]=g,i[p]=g}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new D,l=new D,c=new Bt,f=new Bt,h=new D,d=new Bt,_=new D,x=new D,v=new D,m=0,u=new D;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",f),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",_),o("pointEnd",x),o("rotationAxis",v),o("rotationAngle",m),o("eye",u),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Bt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Bt,this._scaleStart=new D,this._getPointer=o1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerHover=a1.bind(this),this._onPointerMove=u1.bind(this),this._onPointerUp=c1.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;dr.setFromCamera(e,this.camera);const n=dc(this._gizmo.picker[this.mode],dr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){dr.setFromCamera(e,this.camera);const n=dc(this._plane,dr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,hm.mode=this.mode,this.dispatchEvent(hm)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e.button!==-1)return;dr.setFromCamera(e,this.camera);const o=dc(this._plane,dr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(lt.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Zt.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Zt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ii.set(a,a,a)}else Zt.copy(this.pointStart),Ii.copy(this.pointEnd),Zt.applyQuaternion(this._worldQuaternionInv),Ii.applyQuaternion(this._worldQuaternionInv),Ii.divide(Zt),n.search("X")===-1&&(Ii.x=1),n.search("Y")===-1&&(Ii.y=1),n.search("Z")===-1&&(Ii.z=1);r.scale.copy(this._scaleStart).multiply(Ii),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Zt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Zt.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(dm[n]),Zt.copy(dm[n]),s==="local"&&Zt.applyQuaternion(this.worldQuaternion),Zt.cross(this.eye),Zt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Zt.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(fc),this.dispatchEvent(mm)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(pm.mode=this.mode,this.dispatchEvent(pm)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(fc),this.dispatchEvent(mm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return dr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function o1(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function a1(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function l1(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function u1(t){this.enabled&&this.pointerMove(this._getPointer(t))}function c1(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function dc(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const Ba=new qo,nt=new D(0,1,0),gm=new D(0,0,0),_m=new _t,Ha=new Bt,il=new Bt,Kn=new D,vm=new _t,uo=new D(1,0,0),gr=new D(0,1,0),co=new D(0,0,1),Ga=new D,io=new D,ro=new D;class f1 extends At{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new eu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new u0({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const x=e.clone();x.color.setHex(7895160);const v=new qt(0,.04,.1,12);v.translate(0,.05,0);const m=new St(.08,.08,.08);m.translate(0,.04,0);const u=new hn;u.setAttribute("position",new vt([0,0,0,1,0,0],3));const p=new qt(.0075,.0075,.5,3);p.translate(0,.25,0);function g(N,W){const q=new xr(N,.0075,3,64,W*Math.PI*2);return q.rotateY(Math.PI/2),q.rotateX(Math.PI/2),q}function y(){const N=new hn;return N.setAttribute("position",new vt([0,0,0,1,1,1],3)),N}const C={X:[[new fe(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new fe(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new fe(p,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(v,o),[0,.5,0]],[new fe(v,o),[0,-.5,0],[Math.PI,0,0]],[new fe(p,o)]],Z:[[new fe(v,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(p,a),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new vs(.1,0),h.clone()),[0,0,0]]],XY:[[new fe(new St(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new fe(new St(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new St(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new fe(new qt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new qt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new qt(.2,0,.6,4),i),[0,.3,0]],[new fe(new qt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new qt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new qt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new vs(.2,0),i)]],XY:[[new fe(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new fe(new vs(.01,2),r),null,null,null,"helper"]],END:[[new fe(new vs(.01,2),r),null,null,null,"helper"]],DELTA:[[new Di(y(),r),null,null,null,"helper"]],X:[[new Di(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Di(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Di(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new fe(g(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new fe(g(.5,.5),s)]],Y:[[new fe(g(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(g(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new fe(g(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Di(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new fe(new xd(.25,10,8),i)]],X:[[new fe(new xr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new xr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new xr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new xr(.75,.1,2,24),i)]]},z={X:[[new fe(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new fe(p,s),[0,0,0],[0,0,-Math.PI/2]],[new fe(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(m,o),[0,.5,0]],[new fe(p,o)],[new fe(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(m,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(p,a),[0,0,0],[Math.PI/2,0,0]],[new fe(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new St(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new fe(new St(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new St(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new St(.1,.1,.1),h.clone())]]},H={X:[[new fe(new qt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new qt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new qt(.2,0,.6,4),i),[0,.3,0]],[new fe(new qt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new qt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new qt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new St(.2,.2,.2),i),[0,0,0]]]},Q={X:[[new Di(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Di(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Di(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function b(N){const W=new At;for(const q in N)for(let U=N[q].length;U--;){const O=N[q][U][0].clone(),k=N[q][U][1],Z=N[q][U][2],$=N[q][U][3],Y=N[q][U][4];O.name=q,O.tag=Y,k&&O.position.set(k[0],k[1],k[2]),Z&&O.rotation.set(Z[0],Z[1],Z[2]),$&&O.scale.set($[0],$[1],$[2]),O.updateMatrix();const K=O.geometry.clone();K.applyMatrix4(O.matrix),O.geometry=K,O.renderOrder=1/0,O.position.set(0,0,0),O.rotation.set(0,0,0),O.scale.set(1,1,1),W.add(O)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=b(C)),this.add(this.gizmo.rotate=b(I)),this.add(this.gizmo.scale=b(z)),this.add(this.picker.translate=b(w)),this.add(this.picker.rotate=b(E)),this.add(this.picker.scale=b(H)),this.add(this.helper.translate=b(T)),this.add(this.helper.rotate=b(S)),this.add(this.helper.scale=b(Q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:il;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(lt.setFromEuler(Ba.set(0,0,0)),o.quaternion.copy(i).multiply(lt),Math.abs(nt.copy(uo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(lt.setFromEuler(Ba.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(lt),Math.abs(nt.copy(gr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(lt.setFromEuler(Ba.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(lt),Math.abs(nt.copy(co).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(lt.setFromEuler(Ba.set(0,Math.PI/2,0)),nt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(_m.lookAt(gm,nt,gr)),o.quaternion.multiply(lt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Zt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(nt.copy(uo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(nt.copy(gr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(nt.copy(co).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(nt.copy(co).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(nt.copy(uo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(nt.copy(gr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ha.copy(i),nt.copy(this.eye).applyQuaternion(lt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(_m.lookAt(this.eye,gm,gr)),o.name==="X"&&(lt.setFromAxisAngle(uo,Math.atan2(-nt.y,nt.z)),lt.multiplyQuaternions(Ha,lt),o.quaternion.copy(lt)),o.name==="Y"&&(lt.setFromAxisAngle(gr,Math.atan2(nt.x,nt.z)),lt.multiplyQuaternions(Ha,lt),o.quaternion.copy(lt)),o.name==="Z"&&(lt.setFromAxisAngle(co,Math.atan2(nt.y,nt.x)),lt.multiplyQuaternions(Ha,lt),o.quaternion.copy(lt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class d1 extends fe{constructor(){super(new Zo(1e5,1e5,2,2),new eu({visible:!1,wireframe:!0,side:ni,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),Ga.copy(uo).applyQuaternion(n==="local"?this.worldQuaternion:il),io.copy(gr).applyQuaternion(n==="local"?this.worldQuaternion:il),ro.copy(co).applyQuaternion(n==="local"?this.worldQuaternion:il),nt.copy(io),this.mode){case"translate":case"scale":switch(this.axis){case"X":nt.copy(this.eye).cross(Ga),Kn.copy(Ga).cross(nt);break;case"Y":nt.copy(this.eye).cross(io),Kn.copy(io).cross(nt);break;case"Z":nt.copy(this.eye).cross(ro),Kn.copy(ro).cross(nt);break;case"XY":Kn.copy(ro);break;case"YZ":Kn.copy(Ga);break;case"XZ":nt.copy(ro),Kn.copy(io);break;case"XYZ":case"E":Kn.set(0,0,0);break}break;case"rotate":default:Kn.set(0,0,0)}Kn.length()===0?this.quaternion.copy(this.cameraQuaternion):(vm.lookAt(Zt.set(0,0,0),Kn,nt),this.quaternion.setFromRotationMatrix(vm)),super.updateMatrixWorld(e)}}const h1=()=>Math.random().toString(36).slice(2,10),is=t=>Math.max(0,Math.min(1,t)),di=t=>{const e=Number(t);return Number.isFinite(e)?e:0};function p1(){const[t,e]=Rt.useState(()=>[{id:"p1",name:"Part",position:{x:0,y:1,z:0},size:{x:2,y:2,z:2},color:{r:.9,g:.3,b:.3},script:"print('hello from part')"}]),[n,i]=Rt.useState("p1"),r=Rt.useMemo(()=>t.find(v=>v.id===n)??null,[t,n]),s=()=>{const v=h1();e(m=>m.concat({id:v,name:"Part",position:{x:0,y:1,z:0},size:{x:2,y:2,z:2},color:{r:.3,g:.8,b:1},script:""})),i(v)},o=v=>{e(m=>m.map(u=>u.id===n?{...u,...v}:u))},a=Rt.useRef(null),l=Rt.useRef(null),c=Rt.useRef(null),f=Rt.useRef(null),h=Rt.useRef(null),d=Rt.useRef(null),_=Rt.useRef(new Map),x=Rt.useRef(!1);return Rt.useEffect(()=>{const v=a.current;if(!v)return;const m=new Qw;l.current=m;const u=new Pn(60,v.clientWidth/v.clientHeight,.1,2e3);u.position.set(10,10,14),u.lookAt(0,0,0),c.current=u;const p=new l0({antialias:!0});p.setSize(v.clientWidth,v.clientHeight),v.appendChild(p.domElement),f.current=p;const g=new t1(16777215,1);g.position.set(5,10,7),m.add(g),m.add(new n1(16777215,.4));const y=new fe(new Zo(120,120),new rm({color:1120295}));y.rotation.x=-Math.PI/2,m.add(y);const C=new r1(u,p.domElement);C.enableDamping=!0,C.dampingFactor=.08,h.current=C;const w=new s1(u,p.domElement);w.setMode("translate"),w.enabled=!0,m.add(w),d.current=w,w.addEventListener("dragging-changed",b=>{x.current=!!b.value,h.current&&(h.current.enabled=!b.value)});let T=0;const I=()=>{T=requestAnimationFrame(I),C.update(),p.render(m,u)};I();const S=()=>{const b=a.current;b&&(u.aspect=b.clientWidth/b.clientHeight,u.updateProjectionMatrix(),p.setSize(b.clientWidth,b.clientHeight))};window.addEventListener("resize",S);const E=new f0,z=new be,H=b=>{var U;if(x.current)return;const N=p.domElement.getBoundingClientRect();z.x=(b.clientX-N.left)/N.width*2-1,z.y=-((b.clientY-N.top)/N.height*2-1),E.setFromCamera(z,u);const W=Array.from(_.current.values()),q=E.intersectObjects(W,!1);if(q.length>0){const k=((U=q[0].object.userData)==null?void 0:U.id)||"";k&&i(k)}};p.domElement.addEventListener("pointerdown",H);const Q=b=>{var N;(b.key==="g"||b.key==="G")&&d.current&&d.current.setMode("translate"),b.key==="Escape"&&((N=d.current)==null||N.detach())};return window.addEventListener("keydown",Q),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",S),window.removeEventListener("keydown",Q),p.domElement.removeEventListener("pointerdown",H),p.dispose(),C.dispose(),w.dispose(),v.removeChild(p.domElement)}},[]),Rt.useEffect(()=>{const v=l.current;if(!v)return;const m=_.current;for(const u of t){let p=m.get(u.id);if(!p){const y=new St(1,1,1),C=new rm;p=new fe(y,C),p.userData={id:u.id},v.add(p),m.set(u.id,p)}p.position.set(u.position.x,u.position.y,u.position.z),p.scale.set(u.size.x,u.size.y,u.size.z);const g=p.material;g.color.setRGB(is(u.color.r),is(u.color.g),is(u.color.b)),g.needsUpdate=!0}for(const[u,p]of m.entries())t.some(g=>g.id===u)||(v.remove(p),p.geometry.dispose(),p.material.dispose(),m.delete(u))},[t]),Rt.useEffect(()=>{const v=d.current,m=_.current.get(n);if(v){if(!m){v.detach();return}v.attach(m)}},[n]),Rt.useEffect(()=>{for(const[v,m]of _.current.entries())m.material.emissive.setHex(v===n?2236962:0)},[n]),Rt.useEffect(()=>{const v=d.current;if(!v)return;const m=()=>{const u=_.current.get(n);u&&e(p=>p.map(g=>g.id!==n?g:{...g,position:{x:u.position.x,y:u.position.y,z:u.position.z}}))};return v.addEventListener("mouseUp",m),()=>{v.removeEventListener("mouseUp",m)}},[n]),Ue.jsxs("div",{style:{height:"100vh",background:"#0b0f16",color:"#e7eefc"},children:[Ue.jsxs("div",{style:m1,children:[Ue.jsx("b",{children:"Web Roblox Studio"}),Ue.jsx("button",{onClick:s,style:g1,children:"+ Part"}),Ue.jsx("div",{style:{opacity:.8,fontSize:12},children:"操作: 右ドラッグ=視点 / スクロール=ズーム / G=移動"})]}),Ue.jsxs("div",{style:{height:"calc(100vh - 48px)",display:"grid",gridTemplateColumns:"260px 1fr 360px"},children:[Ue.jsxs("div",{style:{borderRight:"1px solid #23304a",padding:10},children:[Ue.jsx("b",{children:"Explorer"}),Ue.jsx("div",{style:{marginTop:8,display:"grid",gap:6},children:t.map(v=>Ue.jsx("div",{onClick:()=>i(v.id),style:{padding:"6px 8px",borderRadius:10,cursor:"pointer",background:v.id===n?"#2a3b5f":"transparent",border:"1px solid #23304a"},children:v.name},v.id))})]}),Ue.jsxs("div",{style:{padding:10},children:[Ue.jsx("b",{children:"Viewport"}),Ue.jsx("div",{ref:a,style:{marginTop:8,height:"calc(100% - 28px)",border:"1px solid #23304a",borderRadius:14,overflow:"hidden"}})]}),Ue.jsxs("div",{style:{borderLeft:"1px solid #23304a",padding:10},children:[Ue.jsx("b",{children:"Properties"}),r?Ue.jsxs("div",{style:{marginTop:10,display:"grid",gap:10},children:[Ue.jsxs("label",{style:$n,children:["Name",Ue.jsx("input",{style:Qn,value:r.name,onChange:v=>o({name:v.target.value})})]}),Ue.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[Ue.jsxs("label",{style:$n,children:["Pos X",Ue.jsx("input",{style:Qn,type:"number",value:r.position.x,onChange:v=>o({position:{...r.position,x:di(v.target.value)}})})]}),Ue.jsxs("label",{style:$n,children:["Pos Y",Ue.jsx("input",{style:Qn,type:"number",value:r.position.y,onChange:v=>o({position:{...r.position,y:di(v.target.value)}})})]}),Ue.jsxs("label",{style:$n,children:["Pos Z",Ue.jsx("input",{style:Qn,type:"number",value:r.position.z,onChange:v=>o({position:{...r.position,z:di(v.target.value)}})})]})]}),Ue.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[Ue.jsxs("label",{style:$n,children:["Size X",Ue.jsx("input",{style:Qn,type:"number",value:r.size.x,onChange:v=>o({size:{...r.size,x:di(v.target.value)}})})]}),Ue.jsxs("label",{style:$n,children:["Size Y",Ue.jsx("input",{style:Qn,type:"number",value:r.size.y,onChange:v=>o({size:{...r.size,y:di(v.target.value)}})})]}),Ue.jsxs("label",{style:$n,children:["Size Z",Ue.jsx("input",{style:Qn,type:"number",value:r.size.z,onChange:v=>o({size:{...r.size,z:di(v.target.value)}})})]})]}),Ue.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[Ue.jsxs("label",{style:$n,children:["Color R (0-1)",Ue.jsx("input",{style:Qn,type:"number",step:"0.05",value:r.color.r,onChange:v=>o({color:{...r.color,r:is(di(v.target.value))}})})]}),Ue.jsxs("label",{style:$n,children:["Color G",Ue.jsx("input",{style:Qn,type:"number",step:"0.05",value:r.color.g,onChange:v=>o({color:{...r.color,g:is(di(v.target.value))}})})]}),Ue.jsxs("label",{style:$n,children:["Color B",Ue.jsx("input",{style:Qn,type:"number",step:"0.05",value:r.color.b,onChange:v=>o({color:{...r.color,b:is(di(v.target.value))}})})]})]}),Ue.jsx("b",{style:{marginTop:6},children:"Script (Lua)"}),Ue.jsx("textarea",{style:_1,value:r.script,onChange:v=>o({script:v.target.value}),placeholder:"ここにLuaを書く（今は保存だけ。次で実行エンジン）"})]}):Ue.jsx("div",{style:{marginTop:10,opacity:.8},children:"Partを選んでね"})]})]})]})}const m1={height:48,display:"flex",alignItems:"center",gap:10,padding:"0 12px",borderBottom:"1px solid #23304a"},g1={background:"#2a3b5f",color:"#e7eefc",border:0,padding:"8px 10px",borderRadius:10,cursor:"pointer"},$n={display:"grid",gap:6,fontSize:12,opacity:.95},Qn={width:"100%",padding:"8px 10px",borderRadius:10,border:"1px solid #23304a",background:"#0b0f16",color:"#e7eefc"},_1={width:"100%",height:180,padding:"10px 10px",borderRadius:10,border:"1px solid #23304a",background:"#0b0f16",color:"#e7eefc",resize:"vertical",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"};hc.createRoot(document.getElementById("root")).render(Ue.jsx(I0.StrictMode,{children:Ue.jsx(p1,{})}));

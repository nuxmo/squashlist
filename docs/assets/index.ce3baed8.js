(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function mo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=mo(Oh);function Tc(t){return!!t||t===""}function go(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ge(i)?Dh(i):go(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ge(t))return t;if(oe(t))return t}}const Ph=/;(?![^(]*\))/g,Mh=/:(.+)/;function Dh(t){const e={};return t.split(Ph).forEach(n=>{if(n){const i=n.split(Mh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ir(t){let e="";if(ge(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const i=Ir(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bs=t=>ge(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===Oc||!B(t.toString))?JSON.stringify(t,Ac,2):String(t),Ac=(t,e)=>e&&e.__v_isRef?Ac(t,e.value):vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:kc(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!F(e)&&!Rc(e)?String(e):e,X={},_n=[],Xe=()=>{},Lh=()=>!1,Fh=/^on[^a-z]/,xr=t=>Fh.test(t),_o=t=>t.startsWith("onUpdate:"),xe=Object.assign,vo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bh=Object.prototype.hasOwnProperty,z=(t,e)=>Bh.call(t,e),F=Array.isArray,vn=t=>Tr(t)==="[object Map]",kc=t=>Tr(t)==="[object Set]",B=t=>typeof t=="function",ge=t=>typeof t=="string",yo=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Nc=t=>oe(t)&&B(t.then)&&B(t.catch),Oc=Object.prototype.toString,Tr=t=>Oc.call(t),$h=t=>Tr(t).slice(8,-1),Rc=t=>Tr(t)==="[object Object]",bo=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=mo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hh=/-(\w)/g,lt=Ar(t=>t.replace(Hh,(e,n)=>n?n.toUpperCase():"")),Uh=/\B([A-Z])/g,Mn=Ar(t=>t.replace(Uh,"-$1").toLowerCase()),kr=Ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jr=Ar(t=>t?`on${kr(t)}`:""),ri=(t,e)=>!Object.is(t,e),Qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ws=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ma;const Wh=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let nt;class zh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function jh(t,e=nt){e&&e.active&&e.effects.push(t)}const wo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pc=t=>(t.w&Ot)>0,Mc=t=>(t.n&Ot)>0,qh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Vh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Pc(r)&&!Mc(r)?r.delete(t):e[n++]=r,r.w&=~Ot,r.n&=~Ot}e.length=n}},Es=new WeakMap;let Gn=0,Ot=1;const Cs=30;let je;const Qt=Symbol(""),Ss=Symbol("");class Eo{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jh(this,i)}run(){if(!this.active)return this.fn();let e=je,n=xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,xt=!0,Ot=1<<++Gn,Gn<=Cs?qh(this):Da(this),this.fn()}finally{Gn<=Cs&&Vh(this),Ot=1<<--Gn,je=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xt=!0;const Dc=[];function Dn(){Dc.push(xt),xt=!1}function Ln(){const t=Dc.pop();xt=t===void 0?!0:t}function De(t,e,n){if(xt&&je){let i=Es.get(t);i||Es.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=wo()),Lc(r)}}function Lc(t,e){let n=!1;Gn<=Cs?Mc(t)||(t.n|=Ot,n=!Pc(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function pt(t,e,n,i,r,s){const o=Es.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?bo(n)&&a.push(o.get("length")):(a.push(o.get(Qt)),vn(t)&&a.push(o.get(Ss)));break;case"delete":F(t)||(a.push(o.get(Qt)),vn(t)&&a.push(o.get(Ss)));break;case"set":vn(t)&&a.push(o.get(Qt));break}if(a.length===1)a[0]&&Is(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Is(wo(l))}}function Is(t,e){const n=F(t)?t:[...t];for(const i of n)i.computed&&La(i);for(const i of n)i.computed||La(i)}function La(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kh=mo("__proto__,__v_isRef,__isVue"),Fc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yo)),Yh=Co(),Gh=Co(!1,!0),Xh=Co(!0),Fa=Qh();function Qh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=K(this);for(let s=0,o=this.length;s<o;s++)De(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const i=K(this)[e].apply(this,n);return Ln(),i}}),t}function Co(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?dd:Wc:e?Uc:Hc).get(i))return i;const o=F(i);if(!t&&o&&z(Fa,r))return Reflect.get(Fa,r,s);const a=Reflect.get(i,r,s);return(yo(r)?Fc.has(r):Kh(r))||(t||De(i,"get",r),e)?a:Ee(a)?o&&bo(r)?a:a.value:oe(a)?t?zc(a):xo(a):a}}const Jh=Bc(),Zh=Bc(!0);function Bc(t=!1){return function(n,i,r,s){let o=n[i];if(Tn(o)&&Ee(o)&&!Ee(r))return!1;if(!t&&(!rr(r)&&!Tn(r)&&(o=K(o),r=K(r)),!F(n)&&Ee(o)&&!Ee(r)))return o.value=r,!0;const a=F(n)&&bo(i)?Number(i)<n.length:z(n,i),l=Reflect.set(n,i,r,s);return n===K(s)&&(a?ri(r,o)&&pt(n,"set",i,r):pt(n,"add",i,r)),l}}function ed(t,e){const n=z(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&pt(t,"delete",e,void 0),i}function td(t,e){const n=Reflect.has(t,e);return(!yo(e)||!Fc.has(e))&&De(t,"has",e),n}function nd(t){return De(t,"iterate",F(t)?"length":Qt),Reflect.ownKeys(t)}const $c={get:Yh,set:Jh,deleteProperty:ed,has:td,ownKeys:nd},id={get:Xh,set(t,e){return!0},deleteProperty(t,e){return!0}},rd=xe({},$c,{get:Gh,set:Zh}),So=t=>t,Nr=t=>Reflect.getPrototypeOf(t);function Mi(t,e,n=!1,i=!1){t=t.__v_raw;const r=K(t),s=K(e);n||(e!==s&&De(r,"get",e),De(r,"get",s));const{has:o}=Nr(r),a=i?So:n?Ao:si;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Di(t,e=!1){const n=this.__v_raw,i=K(n),r=K(t);return e||(t!==r&&De(i,"has",t),De(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Li(t,e=!1){return t=t.__v_raw,!e&&De(K(t),"iterate",Qt),Reflect.get(t,"size",t)}function Ba(t){t=K(t);const e=K(this);return Nr(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function $a(t,e){e=K(e);const n=K(this),{has:i,get:r}=Nr(n);let s=i.call(n,t);s||(t=K(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ri(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Ha(t){const e=K(this),{has:n,get:i}=Nr(e);let r=n.call(e,t);r||(t=K(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&pt(e,"delete",t,void 0),s}function Ua(){const t=K(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Fi(t,e){return function(i,r){const s=this,o=s.__v_raw,a=K(o),l=e?So:t?Ao:si;return!t&&De(a,"iterate",Qt),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Bi(t,e,n){return function(...i){const r=this.__v_raw,s=K(r),o=vn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?So:e?Ao:si;return!e&&De(s,"iterate",l?Ss:Qt),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function sd(){const t={get(s){return Mi(this,s)},get size(){return Li(this)},has:Di,add:Ba,set:$a,delete:Ha,clear:Ua,forEach:Fi(!1,!1)},e={get(s){return Mi(this,s,!1,!0)},get size(){return Li(this)},has:Di,add:Ba,set:$a,delete:Ha,clear:Ua,forEach:Fi(!1,!0)},n={get(s){return Mi(this,s,!0)},get size(){return Li(this,!0)},has(s){return Di.call(this,s,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Fi(!0,!1)},i={get(s){return Mi(this,s,!0,!0)},get size(){return Li(this,!0)},has(s){return Di.call(this,s,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Bi(s,!1,!1),n[s]=Bi(s,!0,!1),e[s]=Bi(s,!1,!0),i[s]=Bi(s,!0,!0)}),[t,n,e,i]}const[od,ad,ld,cd]=sd();function Io(t,e){const n=e?t?cd:ld:t?ad:od;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(z(n,r)&&r in i?n:i,r,s)}const ud={get:Io(!1,!1)},fd={get:Io(!1,!0)},hd={get:Io(!0,!1)},Hc=new WeakMap,Uc=new WeakMap,Wc=new WeakMap,dd=new WeakMap;function pd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function md(t){return t.__v_skip||!Object.isExtensible(t)?0:pd($h(t))}function xo(t){return Tn(t)?t:To(t,!1,$c,ud,Hc)}function gd(t){return To(t,!1,rd,fd,Uc)}function zc(t){return To(t,!0,id,hd,Wc)}function To(t,e,n,i,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=md(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function yn(t){return Tn(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function rr(t){return!!(t&&t.__v_isShallow)}function jc(t){return yn(t)||Tn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function qc(t){return ir(t,"__v_skip",!0),t}const si=t=>oe(t)?xo(t):t,Ao=t=>oe(t)?zc(t):t;function Vc(t){xt&&je&&(t=K(t),Lc(t.dep||(t.dep=wo())))}function Kc(t,e){t=K(t),t.dep&&Is(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return _d(t,!1)}function _d(t,e){return Ee(t)?t:new vd(t,e)}class vd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:si(e)}get value(){return Vc(this),this._value}set value(e){const n=this.__v_isShallow||rr(e)||Tn(e);e=n?e:K(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),Kc(this))}}function ko(t){return Ee(t)?t.value:t}const yd={get:(t,e,n)=>ko(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ee(r)&&!Ee(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Yc(t){return yn(t)?t:new Proxy(t,yd)}var Gc;class bd{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gc]=!1,this._dirty=!0,this.effect=new Eo(e,()=>{this._dirty||(this._dirty=!0,Kc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=K(this);return Vc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Gc="__v_isReadonly";function wd(t,e,n=!1){let i,r;const s=B(t);return s?(i=t,r=Xe):(i=t.get,r=t.set),new bd(i,r,s||!r,n)}function Tt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Or(s,e,n)}return r}function Qe(t,e,n,i){if(B(t)){const s=Tt(t,e,n,i);return s&&Nc(s)&&s.catch(o=>{Or(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Qe(t[s],e,n,i));return r}function Or(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Tt(l,null,10,[t,o,a]);return}}Ed(t,n,r,i)}function Ed(t,e,n,i=!0){console.error(t)}let oi=!1,xs=!1;const we=[];let rt=0;const bn=[];let ft=null,jt=0;const Xc=Promise.resolve();let No=null;function Qc(t){const e=No||Xc;return t?e.then(this?t.bind(this):t):e}function Cd(t){let e=rt+1,n=we.length;for(;e<n;){const i=e+n>>>1;ai(we[i])<t?e=i+1:n=i}return e}function Oo(t){(!we.length||!we.includes(t,oi&&t.allowRecurse?rt+1:rt))&&(t.id==null?we.push(t):we.splice(Cd(t.id),0,t),Jc())}function Jc(){!oi&&!xs&&(xs=!0,No=Xc.then(eu))}function Sd(t){const e=we.indexOf(t);e>rt&&we.splice(e,1)}function Id(t){F(t)?bn.push(...t):(!ft||!ft.includes(t,t.allowRecurse?jt+1:jt))&&bn.push(t),Jc()}function Wa(t,e=oi?rt+1:0){for(;e<we.length;e++){const n=we[e];n&&n.pre&&(we.splice(e,1),e--,n())}}function Zc(t){if(bn.length){const e=[...new Set(bn)];if(bn.length=0,ft){ft.push(...e);return}for(ft=e,ft.sort((n,i)=>ai(n)-ai(i)),jt=0;jt<ft.length;jt++)ft[jt]();ft=null,jt=0}}const ai=t=>t.id==null?1/0:t.id,xd=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eu(t){xs=!1,oi=!0,we.sort(xd);const e=Xe;try{for(rt=0;rt<we.length;rt++){const n=we[rt];n&&n.active!==!1&&Tt(n,null,14)}}finally{rt=0,we.length=0,Zc(),oi=!1,No=null,(we.length||bn.length)&&eu()}}function Td(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||X;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=i[u]||X;p&&(r=n.map(m=>m.trim())),f&&(r=n.map(ws))}let a,l=i[a=Jr(e)]||i[a=Jr(lt(e))];!l&&s&&(l=i[a=Jr(Mn(e))]),l&&Qe(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qe(c,t,6,r)}}function tu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=tu(c,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(oe(t)&&i.set(t,null),null):(F(s)?s.forEach(l=>o[l]=null):xe(o,s),oe(t)&&i.set(t,o),o)}function Rr(t,e){return!t||!xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Mn(e))||z(t,e))}let $e=null,nu=null;function sr(t){const e=$e;return $e=t,nu=t&&t.type.__scopeId||null,e}function Ad(t,e=$e,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ja(-1);const s=sr(e);let o;try{o=t(...r)}finally{sr(s),i._d&&Ja(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zr(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:m,ctx:y,inheritAttrs:x}=t;let N,w;const k=sr(t);try{if(n.shapeFlag&4){const $=r||i;N=it(u.call($,$,f,s,m,p,y)),w=l}else{const $=e;N=it($.length>1?$(s,{attrs:l,slots:a,emit:c}):$(s,null)),w=e.props?l:kd(l)}}catch($){Qn.length=0,Or($,t,1),N=fe(en)}let D=N;if(w&&x!==!1){const $=Object.keys(w),{shapeFlag:Q}=D;$.length&&Q&7&&(o&&$.some(_o)&&(w=Nd(w,o)),D=An(D,w))}return n.dirs&&(D=An(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),N=D,sr(k),N}const kd=t=>{let e;for(const n in t)(n==="class"||n==="style"||xr(n))&&((e||(e={}))[n]=t[n]);return e},Nd=(t,e)=>{const n={};for(const i in t)(!_o(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Od(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?za(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==i[p]&&!Rr(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?za(i,o,c):!0:!!o;return!1}function za(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Rr(n,s))return!0}return!1}function Rd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pd=t=>t.__isSuspense;function Md(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Id(t)}function Dd(t,e){if(me){let n=me.provides;const i=me.parent&&me.parent.provides;i===n&&(n=me.provides=Object.create(i)),n[t]=e}}function es(t,e,n=!1){const i=me||$e;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&B(e)?e.call(i.proxy):e}}function Ld(t,e){return Ro(t,null,{flush:"post"})}const ja={};function wn(t,e,n){return Ro(t,e,n)}function Ro(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=X){const a=me;let l,c=!1,u=!1;if(Ee(t)?(l=()=>t.value,c=rr(t)):yn(t)?(l=()=>t,i=!0):F(t)?(u=!0,c=t.some(w=>yn(w)||rr(w)),l=()=>t.map(w=>{if(Ee(w))return w.value;if(yn(w))return Vt(w);if(B(w))return Tt(w,a,2)})):B(t)?e?l=()=>Tt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Qe(t,a,3,[p])}:l=Xe,e&&i){const w=l;l=()=>Vt(w())}let f,p=w=>{f=N.onStop=()=>{Tt(w,a,4)}};if(ci)return p=Xe,e?n&&Qe(e,a,3,[l(),u?[]:void 0,p]):l(),Xe;let m=u?[]:ja;const y=()=>{if(!!N.active)if(e){const w=N.run();(i||c||(u?w.some((k,D)=>ri(k,m[D])):ri(w,m)))&&(f&&f(),Qe(e,a,3,[w,m===ja?void 0:m,p]),m=w)}else N.run()};y.allowRecurse=!!e;let x;r==="sync"?x=y:r==="post"?x=()=>ke(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),x=()=>Oo(y));const N=new Eo(l,x);return e?n?y():m=N.run():r==="post"?ke(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&vo(a.scope.effects,N)}}function Fd(t,e,n){const i=this.proxy,r=ge(t)?t.includes(".")?iu(i,t):()=>i[t]:t.bind(i,i);let s;B(e)?s=e:(s=e.handler,n=e);const o=me;kn(this);const a=Ro(r,s.bind(i),n);return o?kn(o):Jt(),a}function iu(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Vt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Vt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(kc(t)||vn(t))t.forEach(n=>{Vt(n,e)});else if(Rc(t))for(const n in t)Vt(t[n],e);return t}function Po(t){return B(t)?{setup:t,name:t.name}:t}const Ji=t=>!!t.type.__asyncLoader,ru=t=>t.type.__isKeepAlive;function Bd(t,e){su(t,"a",e)}function $d(t,e){su(t,"da",e)}function su(t,e,n=me){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Pr(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ru(r.parent.vnode)&&Hd(i,e,n,r),r=r.parent}}function Hd(t,e,n,i){const r=Pr(e,t,i,!0);Do(()=>{vo(i[e],r)},n)}function Pr(t,e,n=me,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),kn(n);const a=Qe(e,n,t,o);return Jt(),Ln(),a});return i?r.unshift(s):r.push(s),s}}const bt=t=>(e,n=me)=>(!ci||t==="sp")&&Pr(t,(...i)=>e(...i),n),Ud=bt("bm"),Mo=bt("m"),Wd=bt("bu"),zd=bt("u"),jd=bt("bum"),Do=bt("um"),qd=bt("sp"),Vd=bt("rtg"),Kd=bt("rtc");function Yd(t,e=me){Pr("ec",t,e)}function ts(t,e){const n=$e;if(n===null)return t;const i=Lr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=X]=e[s];B(o)&&(o={mounted:o,updated:o}),o.deep&&Vt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function $t(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Dn(),Qe(l,n,8,[t.el,a,t,e]),Ln())}}const ou="components";function Lo(t,e){return Xd(ou,t,!0,e)||t}const Gd=Symbol();function Xd(t,e,n=!0,i=!1){const r=$e||me;if(r){const s=r.type;if(t===ou){const a=xp(s,!1);if(a&&(a===e||a===lt(e)||a===kr(lt(e))))return s}const o=qa(r[t]||s[t],e)||qa(r.appContext[t],e);return!o&&i?s:o}}function qa(t,e){return t&&(t[e]||t[lt(e)]||t[kr(lt(e))])}function au(t,e,n,i){let r;const s=n&&n[i];if(F(t)||ge(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Ts=t=>t?yu(t)?Lr(t)||t.proxy:Ts(t.parent):null,or=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ts(t.parent),$root:t=>Ts(t.root),$emit:t=>t.emit,$options:t=>Fo(t),$forceUpdate:t=>t.f||(t.f=()=>Oo(t.update)),$nextTick:t=>t.n||(t.n=Qc.bind(t.proxy)),$watch:t=>Fd.bind(t)}),Qd={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==X&&z(i,e))return o[e]=1,i[e];if(r!==X&&z(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&z(c,e))return o[e]=3,s[e];if(n!==X&&z(n,e))return o[e]=4,n[e];As&&(o[e]=0)}}const u=or[e];let f,p;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==X&&z(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==X&&z(r,e)?(r[e]=n,!0):i!==X&&z(i,e)?(i[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==X&&z(t,o)||e!==X&&z(e,o)||(a=s[0])&&z(a,o)||z(i,o)||z(or,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let As=!0;function Jd(t){const e=Fo(t),n=t.proxy,i=t.ctx;As=!1,e.beforeCreate&&Va(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:y,activated:x,deactivated:N,beforeDestroy:w,beforeUnmount:k,destroyed:D,unmounted:$,render:Q,renderTracked:Te,renderTriggered:ye,errorCaptured:We,serverPrefetch:Fe,expose:ct,inheritAttrs:Wn,components:Ni,directives:Oi,filters:Gr}=e;if(c&&Zd(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const J=o[ae];B(J)&&(i[ae]=J.bind(n))}if(r){const ae=r.call(n,n);oe(ae)&&(t.data=xo(ae))}if(As=!0,s)for(const ae in s){const J=s[ae],Lt=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):Xe,Ri=!B(J)&&B(J.set)?J.set.bind(n):Xe,Ft=Be({get:Lt,set:Ri});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Ze=>Ft.value=Ze})}if(a)for(const ae in a)lu(a[ae],i,n,ae);if(l){const ae=B(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{Dd(J,ae[J])})}u&&Va(u,t,"c");function Se(ae,J){F(J)?J.forEach(Lt=>ae(Lt.bind(n))):J&&ae(J.bind(n))}if(Se(Ud,f),Se(Mo,p),Se(Wd,m),Se(zd,y),Se(Bd,x),Se($d,N),Se(Yd,We),Se(Kd,Te),Se(Vd,ye),Se(jd,k),Se(Do,$),Se(qd,Fe),F(ct))if(ct.length){const ae=t.exposed||(t.exposed={});ct.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:Lt=>n[J]=Lt})})}else t.exposed||(t.exposed={});Q&&t.render===Xe&&(t.render=Q),Wn!=null&&(t.inheritAttrs=Wn),Ni&&(t.components=Ni),Oi&&(t.directives=Oi)}function Zd(t,e,n=Xe,i=!1){F(t)&&(t=ks(t));for(const r in t){const s=t[r];let o;oe(s)?"default"in s?o=es(s.from||r,s.default,!0):o=es(s.from||r):o=es(s),Ee(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Va(t,e,n){Qe(F(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function lu(t,e,n,i){const r=i.includes(".")?iu(n,i):()=>n[i];if(ge(t)){const s=e[t];B(s)&&wn(r,s)}else if(B(t))wn(r,t.bind(n));else if(oe(t))if(F(t))t.forEach(s=>lu(s,e,n,i));else{const s=B(t.handler)?t.handler.bind(n):e[t.handler];B(s)&&wn(r,s,t)}}function Fo(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ar(l,c,o,!0)),ar(l,e,o)),oe(e)&&s.set(e,l),l}function ar(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ar(t,s,n,!0),r&&r.forEach(o=>ar(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ep[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ep={data:Ka,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ut,directives:Ut,watch:np,provide:Ka,inject:tp};function Ka(t,e){return e?t?function(){return xe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function tp(t,e){return Ut(ks(t),ks(e))}function ks(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?xe(xe(Object.create(null),t),e):e}function np(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const i in e)n[i]=Ie(t[i],e[i]);return n}function ip(t,e,n,i=!1){const r={},s={};ir(s,Dr,1),t.propsDefaults=Object.create(null),cu(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:gd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function rp(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=K(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Rr(t.emitsOptions,p))continue;const m=e[p];if(l)if(z(s,p))m!==s[p]&&(s[p]=m,c=!0);else{const y=lt(p);r[y]=Ns(l,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,c=!0)}}}else{cu(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=Mn(f))===f||!z(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ns(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!z(e,f)&&!0)&&(delete s[f],c=!0)}c&&pt(t,"set","$attrs")}function cu(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xi(l))continue;const c=e[l];let u;r&&z(r,u=lt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=K(n),c=a||X;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ns(r,l,f,c[f],t,!z(c,f))}}return o}function Ns(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(kn(r),i=c[n]=l.call(null,e),Jt())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Mn(n))&&(i=!0))}return i}function uu(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!B(t)){const u=f=>{l=!0;const[p,m]=uu(f,e,!0);xe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return oe(t)&&i.set(t,_n),_n;if(F(s))for(let u=0;u<s.length;u++){const f=lt(s[u]);Ya(f)&&(o[f]=X)}else if(s)for(const u in s){const f=lt(u);if(Ya(f)){const p=s[u],m=o[f]=F(p)||B(p)?{type:p}:p;if(m){const y=Qa(Boolean,m.type),x=Qa(String,m.type);m[0]=y>-1,m[1]=x<0||y<x,(y>-1||z(m,"default"))&&a.push(f)}}}const c=[o,a];return oe(t)&&i.set(t,c),c}function Ya(t){return t[0]!=="$"}function Ga(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xa(t,e){return Ga(t)===Ga(e)}function Qa(t,e){return F(e)?e.findIndex(n=>Xa(n,t)):B(e)&&Xa(e,t)?0:-1}const fu=t=>t[0]==="_"||t==="$stable",Bo=t=>F(t)?t.map(it):[it(t)],sp=(t,e,n)=>{if(e._n)return e;const i=Ad((...r)=>Bo(e(...r)),n);return i._c=!1,i},hu=(t,e,n)=>{const i=t._ctx;for(const r in t){if(fu(r))continue;const s=t[r];if(B(s))e[r]=sp(r,s,i);else if(s!=null){const o=Bo(s);e[r]=()=>o}}},du=(t,e)=>{const n=Bo(e);t.slots.default=()=>n},op=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ir(e,"_",n)):hu(e,t.slots={})}else t.slots={},e&&du(t,e);ir(t.slots,Dr,1)},ap=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=X;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(xe(r,e),!n&&a===1&&delete r._):(s=!e.$stable,hu(e,r)),o=e}else e&&(du(t,e),o={default:1});if(s)for(const a in r)!fu(a)&&!(a in o)&&delete r[a]};function pu(){return{app:null,config:{isNativeTag:Lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(t,e){return function(i,r=null){B(i)||(i=Object.assign({},i)),r!=null&&!oe(r)&&(r=null);const s=pu(),o=new Set;let a=!1;const l=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ap,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...u)):B(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const p=fe(i,r);return p.appContext=s,u&&e?e(p,c):t(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Lr(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Os(t,e,n,i,r=!1){if(F(t)){t.forEach((p,m)=>Os(p,e&&(F(e)?e[m]:e),n,i,r));return}if(Ji(i)&&!r)return;const s=i.shapeFlag&4?Lr(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===X?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,z(f,c)&&(f[c]=null)):Ee(c)&&(c.value=null)),B(l))Tt(l,a,12,[o,u]);else{const p=ge(l),m=Ee(l);if(p||m){const y=()=>{if(t.f){const x=p?z(f,l)?f[l]:u[l]:l.value;r?F(x)&&vo(x,s):F(x)?x.includes(s)||x.push(s):p?(u[l]=[s],z(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,z(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ke(y,n)):y()}}}const ke=Md;function up(t){return fp(t)}function fp(t,e){const n=Wh();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Xe,insertStaticContent:y}=t,x=(h,d,g,v=null,_=null,C=null,T=!1,E=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!jn(h,d)&&(v=Pi(h),Ze(h,_,C,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:O}=d;switch(b){case $o:N(h,d,g,v);break;case en:w(h,d,g,v);break;case Zi:h==null&&k(d,g,v,T);break;case Ne:Ni(h,d,g,v,_,C,T,E,S);break;default:O&1?Q(h,d,g,v,_,C,T,E,S):O&6?Oi(h,d,g,v,_,C,T,E,S):(O&64||O&128)&&b.process(h,d,g,v,_,C,T,E,S,un)}P!=null&&_&&Os(P,h&&h.ref,C,d||h,!d)},N=(h,d,g,v)=>{if(h==null)i(d.el=a(d.children),g,v);else{const _=d.el=h.el;d.children!==h.children&&c(_,d.children)}},w=(h,d,g,v)=>{h==null?i(d.el=l(d.children||""),g,v):d.el=h.el},k=(h,d,g,v)=>{[h.el,h.anchor]=y(h.children,d,g,v,h.el,h.anchor)},D=({el:h,anchor:d},g,v)=>{let _;for(;h&&h!==d;)_=p(h),i(h,g,v),h=_;i(d,g,v)},$=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},Q=(h,d,g,v,_,C,T,E,S)=>{T=T||d.type==="svg",h==null?Te(d,g,v,_,C,T,E,S):Fe(h,d,_,C,T,E,S)},Te=(h,d,g,v,_,C,T,E)=>{let S,b;const{type:P,props:O,shapeFlag:M,transition:L,dirs:U}=h;if(S=h.el=o(h.type,C,O&&O.is,O),M&8?u(S,h.children):M&16&&We(h.children,S,null,v,_,C&&P!=="foreignObject",T,E),U&&$t(h,null,v,"created"),O){for(const Y in O)Y!=="value"&&!Xi(Y)&&s(S,Y,null,O[Y],C,h.children,v,_,ut);"value"in O&&s(S,"value",null,O.value),(b=O.onVnodeBeforeMount)&&tt(b,v,h)}ye(S,h,h.scopeId,T,v),U&&$t(h,null,v,"beforeMount");const Z=(!_||_&&!_.pendingBranch)&&L&&!L.persisted;Z&&L.beforeEnter(S),i(S,d,g),((b=O&&O.onVnodeMounted)||Z||U)&&ke(()=>{b&&tt(b,v,h),Z&&L.enter(S),U&&$t(h,null,v,"mounted")},_)},ye=(h,d,g,v,_)=>{if(g&&m(h,g),v)for(let C=0;C<v.length;C++)m(h,v[C]);if(_){let C=_.subTree;if(d===C){const T=_.vnode;ye(h,T,T.scopeId,T.slotScopeIds,_.parent)}}},We=(h,d,g,v,_,C,T,E,S=0)=>{for(let b=S;b<h.length;b++){const P=h[b]=E?It(h[b]):it(h[b]);x(null,P,d,g,v,_,C,T,E)}},Fe=(h,d,g,v,_,C,T)=>{const E=d.el=h.el;let{patchFlag:S,dynamicChildren:b,dirs:P}=d;S|=h.patchFlag&16;const O=h.props||X,M=d.props||X;let L;g&&Ht(g,!1),(L=M.onVnodeBeforeUpdate)&&tt(L,g,d,h),P&&$t(d,h,g,"beforeUpdate"),g&&Ht(g,!0);const U=_&&d.type!=="foreignObject";if(b?ct(h.dynamicChildren,b,E,g,v,U,C):T||J(h,d,E,null,g,v,U,C,!1),S>0){if(S&16)Wn(E,d,O,M,g,v,_);else if(S&2&&O.class!==M.class&&s(E,"class",null,M.class,_),S&4&&s(E,"style",O.style,M.style,_),S&8){const Z=d.dynamicProps;for(let Y=0;Y<Z.length;Y++){const ce=Z[Y],ze=O[ce],fn=M[ce];(fn!==ze||ce==="value")&&s(E,ce,ze,fn,_,h.children,g,v,ut)}}S&1&&h.children!==d.children&&u(E,d.children)}else!T&&b==null&&Wn(E,d,O,M,g,v,_);((L=M.onVnodeUpdated)||P)&&ke(()=>{L&&tt(L,g,d,h),P&&$t(d,h,g,"updated")},v)},ct=(h,d,g,v,_,C,T)=>{for(let E=0;E<d.length;E++){const S=h[E],b=d[E],P=S.el&&(S.type===Ne||!jn(S,b)||S.shapeFlag&70)?f(S.el):g;x(S,b,P,null,v,_,C,T,!0)}},Wn=(h,d,g,v,_,C,T)=>{if(g!==v){if(g!==X)for(const E in g)!Xi(E)&&!(E in v)&&s(h,E,g[E],null,T,d.children,_,C,ut);for(const E in v){if(Xi(E))continue;const S=v[E],b=g[E];S!==b&&E!=="value"&&s(h,E,b,S,T,d.children,_,C,ut)}"value"in v&&s(h,"value",g.value,v.value)}},Ni=(h,d,g,v,_,C,T,E,S)=>{const b=d.el=h?h.el:a(""),P=d.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:L}=d;L&&(E=E?E.concat(L):L),h==null?(i(b,g,v),i(P,g,v),We(d.children,g,P,_,C,T,E,S)):O>0&&O&64&&M&&h.dynamicChildren?(ct(h.dynamicChildren,M,g,_,C,T,E),(d.key!=null||_&&d===_.subTree)&&mu(h,d,!0)):J(h,d,g,P,_,C,T,E,S)},Oi=(h,d,g,v,_,C,T,E,S)=>{d.slotScopeIds=E,h==null?d.shapeFlag&512?_.ctx.activate(d,g,v,T,S):Gr(d,g,v,_,C,T,S):Aa(h,d,S)},Gr=(h,d,g,v,_,C,T)=>{const E=h.component=bp(h,v,_);if(ru(h)&&(E.ctx.renderer=un),Ep(E),E.asyncDep){if(_&&_.registerDep(E,Se),!h.el){const S=E.subTree=fe(en);w(null,S,d,g)}return}Se(E,h,d,g,_,C,T)},Aa=(h,d,g)=>{const v=d.component=h.component;if(Od(h,d,g))if(v.asyncDep&&!v.asyncResolved){ae(v,d,g);return}else v.next=d,Sd(v.update),v.update();else d.el=h.el,v.vnode=d},Se=(h,d,g,v,_,C,T)=>{const E=()=>{if(h.isMounted){let{next:P,bu:O,u:M,parent:L,vnode:U}=h,Z=P,Y;Ht(h,!1),P?(P.el=U.el,ae(h,P,T)):P=U,O&&Qi(O),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&tt(Y,L,P,U),Ht(h,!0);const ce=Zr(h),ze=h.subTree;h.subTree=ce,x(ze,ce,f(ze.el),Pi(ze),h,_,C),P.el=ce.el,Z===null&&Rd(h,ce.el),M&&ke(M,_),(Y=P.props&&P.props.onVnodeUpdated)&&ke(()=>tt(Y,L,P,U),_)}else{let P;const{el:O,props:M}=d,{bm:L,m:U,parent:Z}=h,Y=Ji(d);if(Ht(h,!1),L&&Qi(L),!Y&&(P=M&&M.onVnodeBeforeMount)&&tt(P,Z,d),Ht(h,!0),O&&Qr){const ce=()=>{h.subTree=Zr(h),Qr(O,h.subTree,h,_,null)};Y?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ce()):ce()}else{const ce=h.subTree=Zr(h);x(null,ce,g,v,h,_,C),d.el=ce.el}if(U&&ke(U,_),!Y&&(P=M&&M.onVnodeMounted)){const ce=d;ke(()=>tt(P,Z,ce),_)}(d.shapeFlag&256||Z&&Ji(Z.vnode)&&Z.vnode.shapeFlag&256)&&h.a&&ke(h.a,_),h.isMounted=!0,d=g=v=null}},S=h.effect=new Eo(E,()=>Oo(b),h.scope),b=h.update=()=>S.run();b.id=h.uid,Ht(h,!0),b()},ae=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,rp(h,d.props,v,g),ap(h,d.children,g),Dn(),Wa(),Ln()},J=(h,d,g,v,_,C,T,E,S=!1)=>{const b=h&&h.children,P=h?h.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:L}=d;if(M>0){if(M&128){Ri(b,O,g,v,_,C,T,E,S);return}else if(M&256){Lt(b,O,g,v,_,C,T,E,S);return}}L&8?(P&16&&ut(b,_,C),O!==b&&u(g,O)):P&16?L&16?Ri(b,O,g,v,_,C,T,E,S):ut(b,_,C,!0):(P&8&&u(g,""),L&16&&We(O,g,v,_,C,T,E,S))},Lt=(h,d,g,v,_,C,T,E,S)=>{h=h||_n,d=d||_n;const b=h.length,P=d.length,O=Math.min(b,P);let M;for(M=0;M<O;M++){const L=d[M]=S?It(d[M]):it(d[M]);x(h[M],L,g,null,_,C,T,E,S)}b>P?ut(h,_,C,!0,!1,O):We(d,g,v,_,C,T,E,S,O)},Ri=(h,d,g,v,_,C,T,E,S)=>{let b=0;const P=d.length;let O=h.length-1,M=P-1;for(;b<=O&&b<=M;){const L=h[b],U=d[b]=S?It(d[b]):it(d[b]);if(jn(L,U))x(L,U,g,null,_,C,T,E,S);else break;b++}for(;b<=O&&b<=M;){const L=h[O],U=d[M]=S?It(d[M]):it(d[M]);if(jn(L,U))x(L,U,g,null,_,C,T,E,S);else break;O--,M--}if(b>O){if(b<=M){const L=M+1,U=L<P?d[L].el:v;for(;b<=M;)x(null,d[b]=S?It(d[b]):it(d[b]),g,U,_,C,T,E,S),b++}}else if(b>M)for(;b<=O;)Ze(h[b],_,C,!0),b++;else{const L=b,U=b,Z=new Map;for(b=U;b<=M;b++){const Me=d[b]=S?It(d[b]):it(d[b]);Me.key!=null&&Z.set(Me.key,b)}let Y,ce=0;const ze=M-U+1;let fn=!1,Oa=0;const zn=new Array(ze);for(b=0;b<ze;b++)zn[b]=0;for(b=L;b<=O;b++){const Me=h[b];if(ce>=ze){Ze(Me,_,C,!0);continue}let et;if(Me.key!=null)et=Z.get(Me.key);else for(Y=U;Y<=M;Y++)if(zn[Y-U]===0&&jn(Me,d[Y])){et=Y;break}et===void 0?Ze(Me,_,C,!0):(zn[et-U]=b+1,et>=Oa?Oa=et:fn=!0,x(Me,d[et],g,null,_,C,T,E,S),ce++)}const Ra=fn?hp(zn):_n;for(Y=Ra.length-1,b=ze-1;b>=0;b--){const Me=U+b,et=d[Me],Pa=Me+1<P?d[Me+1].el:v;zn[b]===0?x(null,et,g,Pa,_,C,T,E,S):fn&&(Y<0||b!==Ra[Y]?Ft(et,g,Pa,2):Y--)}}},Ft=(h,d,g,v,_=null)=>{const{el:C,type:T,transition:E,children:S,shapeFlag:b}=h;if(b&6){Ft(h.component.subTree,d,g,v);return}if(b&128){h.suspense.move(d,g,v);return}if(b&64){T.move(h,d,g,un);return}if(T===Ne){i(C,d,g);for(let O=0;O<S.length;O++)Ft(S[O],d,g,v);i(h.anchor,d,g);return}if(T===Zi){D(h,d,g);return}if(v!==2&&b&1&&E)if(v===0)E.beforeEnter(C),i(C,d,g),ke(()=>E.enter(C),_);else{const{leave:O,delayLeave:M,afterLeave:L}=E,U=()=>i(C,d,g),Z=()=>{O(C,()=>{U(),L&&L()})};M?M(C,U,Z):Z()}else i(C,d,g)},Ze=(h,d,g,v=!1,_=!1)=>{const{type:C,props:T,ref:E,children:S,dynamicChildren:b,shapeFlag:P,patchFlag:O,dirs:M}=h;if(E!=null&&Os(E,null,g,h,!0),P&256){d.ctx.deactivate(h);return}const L=P&1&&M,U=!Ji(h);let Z;if(U&&(Z=T&&T.onVnodeBeforeUnmount)&&tt(Z,d,h),P&6)Nh(h.component,g,v);else{if(P&128){h.suspense.unmount(g,v);return}L&&$t(h,null,d,"beforeUnmount"),P&64?h.type.remove(h,d,g,_,un,v):b&&(C!==Ne||O>0&&O&64)?ut(b,d,g,!1,!0):(C===Ne&&O&384||!_&&P&16)&&ut(S,d,g),v&&ka(h)}(U&&(Z=T&&T.onVnodeUnmounted)||L)&&ke(()=>{Z&&tt(Z,d,h),L&&$t(h,null,d,"unmounted")},g)},ka=h=>{const{type:d,el:g,anchor:v,transition:_}=h;if(d===Ne){kh(g,v);return}if(d===Zi){$(h);return}const C=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(h.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:E}=_,S=()=>T(g,C);E?E(h.el,C,S):S()}else C()},kh=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},Nh=(h,d,g)=>{const{bum:v,scope:_,update:C,subTree:T,um:E}=h;v&&Qi(v),_.stop(),C&&(C.active=!1,Ze(T,h,d,g)),E&&ke(E,d),ke(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ut=(h,d,g,v=!1,_=!1,C=0)=>{for(let T=C;T<h.length;T++)Ze(h[T],d,g,v,_)},Pi=h=>h.shapeFlag&6?Pi(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Na=(h,d,g)=>{h==null?d._vnode&&Ze(d._vnode,null,null,!0):x(d._vnode||null,h,d,null,null,null,g),Wa(),Zc(),d._vnode=h},un={p:x,um:Ze,m:Ft,r:ka,mt:Gr,mc:We,pc:J,pbc:ct,n:Pi,o:t};let Xr,Qr;return e&&([Xr,Qr]=e(un)),{render:Na,hydrate:Xr,createApp:cp(Na,Xr)}}function Ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mu(t,e,n=!1){const i=t.children,r=e.children;if(F(i)&&F(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=It(r[s]),a.el=o.el),n||mu(o,a))}}function hp(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const dp=t=>t.__isTeleport,Ne=Symbol(void 0),$o=Symbol(void 0),en=Symbol(void 0),Zi=Symbol(void 0),Qn=[];let Ke=null;function Oe(t=!1){Qn.push(Ke=t?null:[])}function pp(){Qn.pop(),Ke=Qn[Qn.length-1]||null}let li=1;function Ja(t){li+=t}function gu(t){return t.dynamicChildren=li>0?Ke||_n:null,pp(),li>0&&Ke&&Ke.push(t),t}function st(t,e,n,i,r,s){return gu(H(t,e,n,i,r,s,!0))}function Mr(t,e,n,i,r){return gu(fe(t,e,n,i,r,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",_u=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||Ee(t)||B(t)?{i:$e,r:t,k:e,f:!!n}:t:null;function H(t,e=null,n=null,i=0,r=null,s=t===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_u(e),ref:e&&er(e),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ho(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),li>0&&!o&&Ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ke.push(l),l}const fe=mp;function mp(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Gd)&&(t=en),Rs(t)){const a=An(t,e,!0);return n&&Ho(a,n),li>0&&!s&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(Tp(t)&&(t=t.__vccOpts),e){e=gp(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=Ir(a)),oe(l)&&(jc(l)&&!F(l)&&(l=xe({},l)),e.style=go(l))}const o=ge(t)?1:Pd(t)?128:dp(t)?64:oe(t)?4:B(t)?2:0;return H(t,e,n,i,r,o,s,!0)}function gp(t){return t?jc(t)||Dr in t?xe({},t):t:null}function An(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?_p(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_u(a),ref:e&&e.ref?n&&r?F(r)?r.concat(er(e)):[r,er(e)]:er(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor}}function bi(t=" ",e=0){return fe($o,null,t,e)}function vu(t="",e=!1){return e?(Oe(),Mr(en,null,t)):fe(en,null,t)}function it(t){return t==null||typeof t=="boolean"?fe(en):F(t)?fe(Ne,null,t.slice()):typeof t=="object"?It(t):fe($o,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:An(t)}function Ho(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ho(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Dr in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),i&64?(n=16,e=[bi(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ir([e.class,i.class]));else if(r==="style")e.style=go([e.style,i.style]);else if(xr(r)){const s=e[r],o=i[r];o&&s!==o&&!(F(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function tt(t,e,n,i=null){Qe(t,e,7,[n,i])}const vp=pu();let yp=0;function bp(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||vp,s={uid:yp++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uu(i,r),emitsOptions:tu(i,r),emit:null,emitted:null,propsDefaults:X,inheritAttrs:i.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Td.bind(null,s),t.ce&&t.ce(s),s}let me=null;const wp=()=>me||$e,kn=t=>{me=t,t.scope.on()},Jt=()=>{me&&me.scope.off(),me=null};function yu(t){return t.vnode.shapeFlag&4}let ci=!1;function Ep(t,e=!1){ci=e;const{props:n,children:i}=t.vnode,r=yu(t);ip(t,n,r,e),op(t,i);const s=r?Cp(t,e):void 0;return ci=!1,s}function Cp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qc(new Proxy(t.ctx,Qd));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Ip(t):null;kn(t),Dn();const s=Tt(i,t,0,[t.props,r]);if(Ln(),Jt(),Nc(s)){if(s.then(Jt,Jt),e)return s.then(o=>{Za(t,o,e)}).catch(o=>{Or(o,t,0)});t.asyncDep=s}else Za(t,s,e)}else bu(t,e)}function Za(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Yc(e)),bu(t,n)}let el;function bu(t,e,n){const i=t.type;if(!t.render){if(!e&&el&&!i.render){const r=i.template||Fo(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xe(xe({isCustomElement:s,delimiters:a},o),l);i.render=el(r,c)}}t.render=i.render||Xe}kn(t),Dn(),Jd(t),Ln(),Jt()}function Sp(t){return new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}})}function Ip(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Sp(t))},slots:t.slots,emit:t.emit,expose:e}}function Lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yc(qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in or)return or[n](t)}}))}function xp(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Tp(t){return B(t)&&"__vccOpts"in t}const Be=(t,e)=>wd(t,e,ci);function wu(t,e,n){const i=arguments.length;return i===2?oe(e)&&!F(e)?Rs(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Rs(n)&&(n=[n]),fe(t,e,n))}const Ap="3.2.41",kp="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,tl=qt&&qt.createElement("template"),Np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?qt.createElementNS(kp,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{tl.innerHTML=i?`<svg>${t}</svg>`:t;const a=tl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Op(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rp(t,e,n){const i=t.style,r=ge(n);if(n&&!r){for(const s in n)Ps(i,s,n[s]);if(e&&!ge(e))for(const s in e)n[s]==null&&Ps(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const nl=/\s*!important$/;function Ps(t,e,n){if(F(n))n.forEach(i=>Ps(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Pp(t,e);nl.test(n)?t.setProperty(Mn(i),n.replace(nl,""),"important"):t[i]=n}}const il=["Webkit","Moz","ms"],ns={};function Pp(t,e){const n=ns[e];if(n)return n;let i=lt(e);if(i!=="filter"&&i in t)return ns[e]=i;i=kr(i);for(let r=0;r<il.length;r++){const s=il[r]+i;if(s in t)return ns[e]=s}return e}const rl="http://www.w3.org/1999/xlink";function Mp(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rl,e.slice(6,e.length)):t.setAttributeNS(rl,e,n);else{const s=Rh(e);n==null||s&&!Tc(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Dp(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function dn(t,e,n,i){t.addEventListener(e,n,i)}function Lp(t,e,n,i){t.removeEventListener(e,n,i)}function Fp(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Bp(e);if(i){const c=s[e]=Up(i,r);dn(t,a,c,l)}else o&&(Lp(t,a,o,l),s[e]=void 0)}}const sl=/(?:Once|Passive|Capture)$/;function Bp(t){let e;if(sl.test(t)){e={};let i;for(;i=t.match(sl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let is=0;const $p=Promise.resolve(),Hp=()=>is||($p.then(()=>is=0),is=Date.now());function Up(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Qe(Wp(i,n.value),e,5,[i])};return n.value=t,n.attached=Hp(),n}function Wp(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ol=/^on[a-z]/,zp=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Op(t,i,r):e==="style"?Rp(t,n,i):xr(e)?_o(e)||Fp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jp(t,e,i,r))?Dp(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Mp(t,e,i,r))};function jp(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ol.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ol.test(e)&&ge(n)?!1:e in t}function qp(t){const e=wp();if(!e)return;const n=()=>Ms(e.subTree,t(e.proxy));Ld(n),Mo(()=>{const i=new MutationObserver(n);i.observe(e.subTree.el.parentNode,{childList:!0}),Do(()=>i.disconnect())})}function Ms(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ms(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)al(t.el,e);else if(t.type===Ne)t.children.forEach(n=>Ms(n,e));else if(t.type===Zi){let{el:n,anchor:i}=t;for(;n&&(al(n,e),n!==i);)n=n.nextSibling}}function al(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const ll=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Qi(e,n):e};function Vp(t){t.target.composing=!0}function cl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=ll(r);const s=i||r.props&&r.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ws(a)),t._assign(a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Vp),dn(t,"compositionend",cl),dn(t,"change",cl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=ll(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&ws(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Kp=["ctrl","shift","alt","meta"],Yp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kp.some(n=>t[`${n}Key`]&&!e.includes(n))},Gp=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Yp[e[r]];if(s&&s(n,e))return}return t(n,...i)},Xp=xe({patchProp:zp},Np);let ul;function Qp(){return ul||(ul=up(Xp))}const Jp=(...t)=>{const e=Qp().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zp(i);if(!r)return;const s=e._component;!B(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zp(t){return ge(t)?document.querySelector(t):t}const em="/sl-logo.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Fn(e)},Fn=function(t){return new Error("Firebase Database ("+Eu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),i.push(n[u],n[f],n[p],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const p=s<<2|a>>4;if(i.push(p),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Su=function(t){const e=Cu(t);return Uo.encodeByteArray(e,!0)},lr=function(t){return Su(t).replace(/\./g,"")},Ds=function(t){try{return Uo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){return Iu(void 0,t)}function Iu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!im(n)||(t[n]=Iu(t[n],e[n]));return t}function im(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rm())}function sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tu(){return Eu.NODE_ADMIN===!0}function om(){return typeof indexedDB=="object"}function am(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=()=>lm().__FIREBASE_DEFAULTS__,um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ds(t[1]);return e&&JSON.parse(e)},Au=()=>{try{return cm()||um()||fm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hm=t=>{var e,n;return(n=(e=Au())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dm=t=>{const e=hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},pm=()=>{var t;return(t=Au())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lr(JSON.stringify(n)),lr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="FirebaseError";class wi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=gm,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ku.prototype.create)}}class ku{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?_m(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new wi(r,a,i)}}function _m(t,e){return t.replace(vm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const vm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ui(Ds(s[0])||""),n=ui(Ds(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},ym=function(t){const e=Nu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bm=function(t){const e=Nu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(hl(s)&&hl(o)){if(!Ls(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function hl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const p=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Wo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Br=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){return t&&t._delegate?t._delegate:t}class fi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Fr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Im(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Im(t){return t===Wt?void 0:t}function xm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Am={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},km=ee.INFO,Nm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Om=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Nm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=km,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Rm=(t,e)=>e.some(n=>t instanceof n);let dl,pl;function Pm(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mm(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,Fs=new WeakMap,Pu=new WeakMap,ss=new WeakMap,zo=new WeakMap;function Dm(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(At(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ru.set(n,t)}).catch(()=>{}),zo.set(e,t),e}function Lm(t){if(Fs.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fs.set(t,e)}let Bs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fm(t){Bs=t(Bs)}function Bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(os(this),e,...n);return Pu.set(i,e.sort?e.sort():[e]),At(i)}:Mm().includes(t)?function(...e){return t.apply(os(this),e),At(Ru.get(this))}:function(...e){return At(t.apply(os(this),e))}}function $m(t){return typeof t=="function"?Bm(t):(t instanceof IDBTransaction&&Lm(t),Rm(t,Pm())?new Proxy(t,Bs):t)}function At(t){if(t instanceof IDBRequest)return Dm(t);if(ss.has(t))return ss.get(t);const e=$m(t);return e!==t&&(ss.set(t,e),zo.set(e,t)),e}const os=t=>zo.get(t);function Hm(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=At(o);return i&&o.addEventListener("upgradeneeded",l=>{i(At(o.result),l.oldVersion,l.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Um=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],as=new Map;function ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(as.get(e))return as.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Wm.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Um.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return as.set(e,s),s}Fm(t=>({...t,get:(e,n,i)=>ml(e,n)||t.get(e,n,i),has:(e,n)=>!!ml(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $s="@firebase/app",gl="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Ou("@firebase/app"),qm="@firebase/app-compat",Vm="@firebase/analytics-compat",Km="@firebase/analytics",Ym="@firebase/app-check-compat",Gm="@firebase/app-check",Xm="@firebase/auth",Qm="@firebase/auth-compat",Jm="@firebase/database",Zm="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",ig="@firebase/installations-compat",rg="@firebase/messaging",sg="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",lg="@firebase/remote-config",cg="@firebase/remote-config-compat",ug="@firebase/storage",fg="@firebase/storage-compat",hg="@firebase/firestore",dg="@firebase/firestore-compat",pg="firebase",mg="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]",gg={[$s]:"fire-core",[qm]:"fire-core-compat",[Km]:"fire-analytics",[Vm]:"fire-analytics-compat",[Gm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Xm]:"fire-auth",[Qm]:"fire-auth-compat",[Jm]:"fire-rtdb",[Zm]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[ig]:"fire-iid-compat",[rg]:"fire-fcm",[sg]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[lg]:"fire-rc",[cg]:"fire-rc-compat",[ug]:"fire-gcs",[fg]:"fire-gcs-compat",[hg]:"fire-fst",[dg]:"fire-fst-compat","fire-js":"fire-js",[pg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,Us=new Map;function _g(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fr(t){const e=t.name;if(Us.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Us.set(e,t);for(const n of ur.values())_g(n,t);return!0}function vg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new ku("app","Firebase",yg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=mg;function Mu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(n||(n=pm()),!n)throw kt.create("no-options");const s=ur.get(r);if(s){if(Ls(n,s.options)&&Ls(i,s.config))return s;throw kt.create("duplicate-app",{appName:r})}const o=new Tm(r);for(const l of Us.values())o.addComponent(l);const a=new bg(n,i,o);return ur.set(r,a),a}function Eg(t=Hs){const e=ur.get(t);if(!e&&t===Hs)return Mu();if(!e)throw kt.create("no-app",{appName:t});return e}function En(t,e,n){var i;let r=(i=gg[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}fr(new fi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebase-heartbeat-database",Sg=1,hi="firebase-heartbeat-store";let ls=null;function Du(){return ls||(ls=Hm(Cg,Sg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),ls}async function Ig(t){var e;try{return(await Du()).transaction(hi).objectStore(hi).get(Lu(t))}catch(n){if(n instanceof wi)tn.warn(n.message);else{const i=kt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});tn.warn(i.message)}}}async function _l(t,e){var n;try{const r=(await Du()).transaction(hi,"readwrite");return await r.objectStore(hi).put(e,Lu(t)),r.done}catch(i){if(i instanceof wi)tn.warn(i.message);else{const r=kt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});tn.warn(r.message)}}}function Lu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=1024,Tg=30*24*60*60*1e3;class Ag{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ng(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Tg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vl(),{heartbeatsToSend:n,unsentEntries:i}=kg(this._heartbeatsCache.heartbeats),r=lr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vl(){return new Date().toISOString().substring(0,10)}function kg(t,e=xg){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),yl(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return om()?am().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ig(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yl(t){return lr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){fr(new fi("platform-logger",e=>new zm(e),"PRIVATE")),fr(new fi("heartbeat",e=>new Ag(e),"PRIVATE")),En($s,gl,t),En($s,gl,"esm2017"),En("fire-js","")}Og("");var Rg="firebase",Pg="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(Rg,Pg,"app");const bl="@firebase/database",wl="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu="";function Mg(t){Fu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ui(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Dg(e)}}catch{}return new Lg},Kt=Bu("localStorage"),Ws=Bu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Ou("@firebase/database"),Fg=function(){let t=1;return function(){return t++}}(),$u=function(t){const e=Cm(t),n=new Em;n.update(e);const i=n.digest();return Uo.encodeByteArray(i)},Ci=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ci.apply(null,i):typeof i=="object"?e+=ve(i):e+=i,e+=" "}return e};let Zt=null,El=!0;const Bg=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cn.logLevel=ee.VERBOSE,Zt=Cn.log.bind(Cn),e&&Ws.set("logging_enabled",!0)):typeof t=="function"?Zt=t:(Zt=null,Ws.remove("logging_enabled"))},be=function(...t){if(El===!0&&(El=!1,Zt===null&&Ws.get("logging_enabled")===!0&&Bg(!0)),Zt){const e=Ci.apply(null,t);Zt(e)}},Si=function(t){return function(...e){be(t,...e)}},zs=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ci(...t);Cn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ci(...t)}`;throw Cn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+Ci(...t);Cn.warn(e)},$g=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},On="[MIN_NAME]",nn="[MAX_NAME]",Bn=function(t,e){if(t===e)return 0;if(t===On||e===nn)return-1;if(e===On||t===nn)return 1;{const n=Cl(t),i=Cl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ug=function(t,e){return t===e?0:t<e?-1:1},qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},jo=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ve(e[i]),n+=":",n+=jo(t[e[i]]);return n+="}",n},Uu=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wu=function(t){I(!Hu(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(u.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Wg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},jg=new RegExp("^-?(0*)\\d{1,10}$"),qg=-2147483648,Vg=2147483647,Cl=function(t){if(jg.test(t)){const e=Number(t);if(e>=qg&&e<=Vg)return e}return null},$n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="5",zu="v",ju="s",qu="r",Vu="f",Ku=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yu="ls",Gu="p",js="ac",Xu="websocket",Qu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zu(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===Xu)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qu)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xg(t)&&(n.ns=t.namespace);const r=[];return Ue(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={},us={};function Vo(t){const e=t.toString();return cs[e]||(cs[e]=new Qg),cs[e]}function Jg(t,e){const n=t.toString();return us[n]||(us[n]=e()),us[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&$n(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="start",e_="close",t_="pLPCommand",n_="pRTLPCB",ef="id",tf="pw",nf="ser",i_="cb",r_="seg",s_="ts",o_="d",a_="dframe",rf=1870,sf=30,l_=rf-sf,c_=25e3,u_=3e4;class pn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Si(e),this.stats_=Vo(n),this.urlFn=l=>(this.appCheckToken&&(l[js]=this.appCheckToken),Zu(n,Qu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u_)),Hg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ko((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sl)this.id=a,this.password=l;else if(o===e_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Sl]="t",i[nf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[i_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zu]=qo,this.transportSessionId&&(i[ju]=this.transportSessionId),this.lastSessionId&&(i[Yu]=this.lastSessionId),this.applicationId&&(i[Gu]=this.applicationId),this.appCheckToken&&(i[js]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(i[qu]=Vu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wg()&&!zg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Su(n),r=Uu(i,l_);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[a_]="t",i[ef]=e,i[tf]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ko{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fg(),window[t_+this.uniqueCallbackIdentifier]=e,window[n_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ko.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ef]=this.myID,e[tf]=this.myPW,e[nf]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sf+i.length<=rf;){const o=this.pendingSegs.shift();i=i+"&"+r_+r+"="+o.seg+"&"+s_+r+"="+o.ts+"&"+o_+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(c_)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=16384,h_=45e3;let hr=null;typeof MozWebSocket<"u"?hr=MozWebSocket:typeof WebSocket<"u"&&(hr=WebSocket);class qe{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Si(this.connId),this.stats_=Vo(n),this.connURL=qe.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[zu]=qo,typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(o[qu]=Vu),n&&(o[ju]=n),i&&(o[Yu]=i),r&&(o[js]=r),s&&(o[Gu]=s),Zu(e,Xu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let i;Tu(),this.mySock=new hr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&hr!==null&&!qe.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ui(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Uu(n,f_);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qe&&qe.isAvailable();let i=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[qe];else{const r=this.transports_=[];for(const s of di.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}di.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=6e4,p_=5e3,m_=10*1024,g_=100*1024,fs="t",Il="d",__="s",xl="r",v_="e",Tl="o",Al="a",kl="n",Nl="p",y_="h";class b_{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Si("c:"+this.id+":"),this.transportManager_=new di(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fs in e){const n=e[fs];n===Al?this.upgradeIfSecondaryHealthy_():n===xl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qn("t",e),i=qn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Al,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qn("t",e),i=qn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qn(fs,e);if(Il in e){const i=e[Il];if(n===y_)this.onHandshake_(i);else if(n===kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===__?this.onConnectionShutdown_(i):n===xl?this.onReset_(i):n===v_?zs("Server Error: "+i):n===Tl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qo!==i&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends af{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dr}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=32,Rl=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new se("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rt(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function lf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function w_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function ue(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof se)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new se(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=W(t),i=W(e);if(n===null)return e;if(n===i)return He(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ff(t,e){if(Rt(t)!==Rt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Rt(t)>Rt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class E_{constructor(e,n){this.errorPrefix_=n,this.parts_=cf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Br(this.parts_[i]);hf(this)}}function C_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Br(e),hf(t)}function S_(t){const e=t.parts_.pop();t.byteLength_-=Br(e),t.parts_.length>0&&(t.byteLength_-=1)}function hf(t){if(t.byteLength_>Rl)throw new Error(t.errorPrefix_+"has a key path longer than "+Rl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ol)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ol+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends af{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Yo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e3,I_=60*5*1e3,Pl=30*1e3,x_=1.3,T_=3e4,A_="server_kill",Ml=3;class dt extends of{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dt.nextPersistentConnectionId_++,this.log_=Si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=I_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Tu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(ve(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Fr,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;dt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const i=Nn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ym(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zs("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T_&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*x_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new b_(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{Pe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(A_)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Pe(f),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fl(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>jo(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new se(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ml&&(this.reconnectDelay_=Pl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ml&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fu.replace(/\./g,"-")]=1,xu()?e["framework.cordova"]=1:sm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dr.getInstance().currentlyOnline();return fl(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new q(On,e),r=new q(On,n);return this.compare(i,r)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class df extends $r{static get __EMPTY_NODE(){return $i}static set __EMPTY_NODE(e){$i=e}compare(e,n){return Bn(e.name,n.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(nn,$i)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,$i)}toString(){return".key"}}const In=new df;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:pe.RED,this.left=r!=null?r:Re.EMPTY_NODE,this.right=s!=null?s:Re.EMPTY_NODE}copy(e,n,i,r,s){return new pe(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class k_{copy(e,n,i,r,s){return this}insert(e,n,i){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hi(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new k_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e){return Bn(t.name,e.name)}function Go(t,e){return Bn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;function O_(t){qs=t}const pf=function(t){return typeof t=="number"?"number:"+Wu(t):"string:"+t},mf=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else I(t===qs||t.isEmpty(),"priority of unexpected type.");I(t===qs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mf(this.priorityNode_)}static set __childrenNodeConstructor(e){Dl=e}static get __childrenNodeConstructor(){return Dl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:W(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=W(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Rt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wu(this.value_):e+=this.value_,this.lazyHash_=$u(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(i);return I(r>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf,_f;function R_(t){gf=t}function P_(t){_f=t}class M_ extends $r{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Bn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(nn,new de("[PRIORITY-POST]",_f))}makePost(e,n){const i=gf(e);return new q(n,new de("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ce=new M_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=Math.log(2);class L_{constructor(e){const n=s=>parseInt(Math.log(s)/D_,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pr=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,p;if(u===0)return null;if(u===1)return f=t[l],p=n?n(f):f,new pe(p,f.node,pe.BLACK,null,null);{const m=parseInt(u/2,10)+l,y=r(l,m),x=r(m+1,c);return f=t[m],p=n?n(f):f,new pe(p,f.node,pe.BLACK,y,x)}},s=function(l){let c=null,u=null,f=t.length;const p=function(y,x){const N=f-y,w=f;f-=y;const k=r(N+1,w),D=t[N],$=n?n(D):D;m(new pe($,D.node,x,null,k))},m=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const x=l.nextBitIsOne(),N=Math.pow(2,l.count-(y+1));x?p(N,pe.BLACK):(p(N,pe.BLACK),p(N,pe.RED))}return u},o=new L_(t.length),a=s(o);return new Re(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;const hn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(hn&&Ce,"ChildrenNode.ts has not been loaded"),hs=hs||new ht({".priority":hn},{".priority":Ce}),hs}get(e){const n=Nn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==In,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=pr(i,e.getCompare()):a=hn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ht(u,c)}addToIndexes(e,n){const i=cr(this.indexes_,(r,s)=>{const o=Nn(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),r===hn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pr(a,o.getCompare())}else return hn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new ht(i,this.indexSet_)}removeFromIndexes(e,n){const i=cr(this.indexes_,r=>{if(r===hn)return r;{const s=n.get(e.name);return s?r.remove(new q(e.name,s)):r}});return new ht(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;class V{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&mf(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kn||(Kn=new V(new Re(Go),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Kn:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new q(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Kn:this.priorityNode_;return new V(r,o,s)}}updateChild(e,n){const i=W(e);if(i===null)return n;{I(W(e)!==".priority"||Rt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ne(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),i++,s&&V.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pf(this.getPriority().val())+":"),this.forEachChild(Ce,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":$u(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ii?-1:0}withIndex(e){if(e===In||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===In||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ce),r=n.getIterator(Ce);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===In?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class F_ extends V{constructor(){super(new Re(Go),V.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Ii=new F_;Object.defineProperties(q,{MIN:{value:new q(On,V.EMPTY_NODE)},MAX:{value:new q(nn,Ii)}});df.__EMPTY_NODE=V.EMPTY_NODE;de.__childrenNodeConstructor=V;O_(Ii);P_(Ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=!0;function _e(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,_e(e))}if(!(t instanceof Array)&&B_){const n=[];let i=!1;if(Ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return V.EMPTY_NODE;const s=pr(n,N_,o=>o.name,Go);if(i){const o=pr(n,Ce.getCompare());return new V(s,_e(e),new ht({".priority":o},{".priority":Ce}))}else return new V(s,_e(e),ht.Default)}else{let n=V.EMPTY_NODE;return Ue(t,(i,r)=>{if(wt(t,i)&&i.substring(0,1)!=="."){const s=_e(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(_e(e))}}R_(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends $r{constructor(e){super(),this.indexPath_=e,I(!j(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Bn(e.name,n.name):s}makePost(e,n){const i=_e(e),r=V.EMPTY_NODE.updateChild(this.indexPath_,i);return new q(n,r)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Ii);return new q(nn,e)}toString(){return cf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends $r{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Bn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const i=_e(e);return new q(n,i)}toString(){return".value"}}const U_=new H_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){return{type:"value",snapshotNode:t}}function z_(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function j_(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ll(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function q_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:On}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new Xo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fl(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ce?n="$priority":t.index_===U_?n="$value":t.index_===In?n="$key":(I(t.index_ instanceof $_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_&&(e.startAt=ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ve(t.indexStartName_))),t.endSet_&&(e.endAt=ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends of{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=mr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Fl(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),Nn(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",r(p,null)}})}unlisten(e,n){const i=mr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Fl(e._queryParams),i=e._path.toString(),r=new Fr;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wm(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ui(a.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return{value:null,children:new Map}}function vf(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=W(e);t.children.has(i)||t.children.set(i,gr());const r=t.children.get(i);e=ne(e),vf(r,e,n)}}function Vs(t,e,n){t.value!==null?n(e,t.value):K_(t,(i,r)=>{const s=new se(e.toString()+"/"+i);Vs(r,s,n)})}function K_(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=10*1e3,G_=30*1e3,X_=5*60*1e3;class Q_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y_(e);const i=$l+(G_-$l)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ue(e,(r,s)=>{s>0&&wt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*X_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function yf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ot.ACK_USER_WRITE,this.source=yf()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new _r(G(),n,this.revert)}}else return I(W(this.path)===e,"operationForChild called for unrelated child."),new _r(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ot.OVERWRITE}operationForChild(e){return j(this.path)?new rn(this.source,G(),this.snap.getImmediateChild(e)):new rn(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ot.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new rn(this.source,G(),n.value):new pi(this.source,G(),n)}else return I(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function J_(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(q_(o.childName,o.snapshotNode))}),Yn(t,r,"child_removed",e,i,n),Yn(t,r,"child_added",e,i,n),Yn(t,r,"child_moved",s,i,n),Yn(t,r,"child_changed",e,i,n),Yn(t,r,"value",e,i,n),r}function Yn(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>ev(t,a,l)),o.forEach(a=>{const l=Z_(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Z_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ev(t,e,n){if(e.childName==null||n.childName==null)throw Fn("Should only compare child_ events.");const i=new q(e.childName,e.snapshotNode),r=new q(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,i){return Ef(new Qo(e,n,i),t.serverCache)}function Cf(t,e,n,i){return Ef(t.eventCache,new Qo(e,n,i))}function Ks(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;const tv=()=>(ds||(ds=new Re(Ug)),ds);class te{constructor(e,n=tv()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Ue(e,(i,r)=>{n=n.set(new se(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(j(e))return null;{const i=W(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:ue(new se(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=W(e),i=this.children.get(n);return i!==null?i.subtree(ne(e)):new te(null)}}set(e,n){if(j(e))return new te(n,this.children);{const i=W(e),s=(this.children.get(i)||new te(null)).set(ne(e),n),o=this.children.insert(i,s);return new te(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=W(e),i=this.children.get(n);if(i){const r=i.remove(ne(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new te(null):new te(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=W(e),i=this.children.get(n);return i?i.get(ne(e)):null}}setTree(e,n){if(j(e))return n;{const i=W(e),s=(this.children.get(i)||new te(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new te(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ue(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(j(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),ue(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,i){if(j(e))return this;{this.value&&i(n,this.value);const r=W(e),s=this.children.get(r);return s?s.foreachOnPath_(ne(e),ue(n,r),i):new te(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ue(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new te(null))}}function ei(t,e,n){if(j(e))return new Je(new te(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=He(r,e);return s=s.updateChild(o,n),new Je(t.writeTree_.set(r,s))}else{const r=new te(n),s=t.writeTree_.setTree(e,r);return new Je(s)}}}function Hl(t,e,n){let i=t;return Ue(n,(r,s)=>{i=ei(i,ue(e,r),s)}),i}function Ul(t,e){if(j(e))return Je.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Je(n)}}function Ys(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function Wl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(i,r)=>{e.push(new q(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new q(i,r.value))}),e}function Nt(t,e){if(j(e))return t;{const n=ln(t,e);return n!=null?new Je(new te(n)):new Je(t.writeTree_.subtree(e))}}function Gs(t){return t.writeTree_.isEmpty()}function Rn(t,e){return Sf(G(),t.writeTree_,e)}function Sf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Sf(ue(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ue(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t,e){return Nf(e,t)}function nv(t,e,n,i,r){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ei(t.visibleWrites,e,n)),t.lastWriteId=i}function iv(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function rv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&sv(a,i.path)?r=!1:Ye(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return ov(t),!0;if(i.snap)t.visibleWrites=Ul(t.visibleWrites,i.path);else{const a=i.children;Ue(a,l=>{t.visibleWrites=Ul(t.visibleWrites,ue(i.path,l))})}return!0}else return!1}function sv(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ue(t.path,n),e))return!0;return!1}function ov(t){t.visibleWrites=xf(t.allWrites,av,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function av(t){return t.visible}function xf(t,e,n){let i=Je.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Ye(n,o)?(a=He(n,o),i=ei(i,a,s.snap)):Ye(o,n)&&(a=He(o,n),i=ei(i,G(),s.snap.getChild(a)));else if(s.children){if(Ye(n,o))a=He(n,o),i=Hl(i,a,s.children);else if(Ye(o,n))if(a=He(o,n),j(a))i=Hl(i,G(),s.children);else{const l=Nn(s.children,W(a));if(l){const c=l.getChild(ne(a));i=ei(i,G(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return i}function Tf(t,e,n,i,r){if(!i&&!r){const s=ln(t.visibleWrites,e);if(s!=null)return s;{const o=Nt(t.visibleWrites,e);if(Gs(o))return n;if(n==null&&!Ys(o,G()))return null;{const a=n||V.EMPTY_NODE;return Rn(o,a)}}}else{const s=Nt(t.visibleWrites,e);if(!r&&Gs(s))return n;if(!r&&n==null&&!Ys(s,G()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Ye(c.path,e)||Ye(e,c.path))},a=xf(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Rn(a,l)}}}function lv(t,e,n){let i=V.EMPTY_NODE;const r=ln(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ce,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Nt(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=Rn(Nt(s,new se(o)),a);i=i.updateImmediateChild(o,l)}),Wl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Nt(t.visibleWrites,e);return Wl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function cv(t,e,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Ys(t.visibleWrites,s))return null;{const o=Nt(t.visibleWrites,s);return Gs(o)?r.getChild(n):Rn(o,r.getChild(n))}}function uv(t,e,n,i){const r=ue(e,n),s=ln(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Nt(t.visibleWrites,r);return Rn(o,i.getNode().getImmediateChild(n))}else return null}function fv(t,e){return ln(t.visibleWrites,e)}function hv(t,e,n,i,r,s,o){let a;const l=Nt(t.visibleWrites,e),c=ln(l,G());if(c!=null)a=c;else if(n!=null)a=Rn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=p.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=p.getNext();return u}else return[]}function dv(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function Xs(t,e,n,i){return Tf(t.writeTree,t.treePath,e,n,i)}function Af(t,e){return lv(t.writeTree,t.treePath,e)}function zl(t,e,n,i){return cv(t.writeTree,t.treePath,e,n,i)}function vr(t,e){return fv(t.writeTree,ue(t.treePath,e))}function pv(t,e,n,i,r,s){return hv(t.writeTree,t.treePath,e,n,i,r,s)}function Jo(t,e,n){return uv(t.writeTree,t.treePath,e,n)}function kf(t,e){return Nf(ue(t.treePath,e),t.writeTree)}function Nf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ll(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,j_(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,z_(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ll(i,e.snapshotNode,r.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Of=new gv;class Zo{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Qo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jo(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),s=pv(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function _v(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vv(t,e,n,i,r){const s=new mv;let o,a;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=Qs(t,e,c.path,c.snap,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=yr(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=bv(t,e,c.path,c.children,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Js(t,e,c.path,c.children,i,r,a,s))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=Cv(t,e,c.path,i,r,s):o=wv(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===ot.LISTEN_COMPLETE)o=Ev(t,e,n.path,i,s);else throw Fn("Unknown operation type: "+n.type);const l=s.getChanges();return yv(e,o,l),{viewCache:o,changes:l}}function yv(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ks(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(W_(Ks(e)))}}function Rf(t,e,n,i,r,s){const o=e.eventCache;if(vr(i,n)!=null)return e;{let a,l;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof V?c:V.EMPTY_NODE,f=Af(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Xs(i,sn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=W(n);if(c===".priority"){I(Rt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=zl(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ne(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=zl(i,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(c).updateChild(u,p):f=o.getNode().getImmediateChild(c)}else f=Jo(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Zn(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function yr(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=W(n);if(!l.isCompleteForPath(n)&&Rt(n)>1)return e;const y=ne(n),N=l.getNode().getImmediateChild(m).updateChild(y,i);m===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),m,N,y,Of,null)}const f=Cf(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),p=new Zo(r,f,s);return Rf(t,f,n,r,p,a)}function Qs(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Zo(r,e,s);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Zn(e,c,!0,t.filter.filtersNodes());else{const f=W(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Zn(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=ne(n),m=a.getNode().getImmediateChild(f);let y;if(j(p))y=i;else{const x=u.getCompleteChild(f);x!=null?lf(p)===".priority"&&x.getChild(uf(p)).isEmpty()?y=x:y=x.updateChild(p,i):y=V.EMPTY_NODE}if(m.equals(y))l=e;else{const x=t.filter.updateChild(a.getNode(),f,y,p,u,o);l=Zn(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jl(t,e){return t.eventCache.isCompleteForChild(e)}function bv(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=ue(n,l);jl(e,W(u))&&(a=Qs(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=ue(n,l);jl(e,W(u))||(a=Qs(t,a,u,c,r,s,o))}),a}function ql(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Js(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=i:c=new te(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),y=ql(t,m,p);l=yr(t,l,new se(f),y,r,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!u.hasChild(f)&&!m){const y=e.serverCache.getNode().getImmediateChild(f),x=ql(t,y,p);l=yr(t,l,new se(f),x,r,s,o,a)}}),l}function wv(t,e,n,i,r,s,o){if(vr(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yr(t,e,n,l.getNode().getChild(n),r,s,a,o);if(j(n)){let c=new te(null);return l.getNode().forEachChild(In,(u,f)=>{c=c.set(new se(u),f)}),Js(t,e,n,c,r,s,a,o)}else return e}else{let c=new te(null);return i.foreach((u,f)=>{const p=ue(n,u);l.isCompleteForPath(p)&&(c=c.set(u,l.getNode().getChild(p)))}),Js(t,e,n,c,r,s,a,o)}}function Ev(t,e,n,i,r){const s=e.serverCache,o=Cf(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return Rf(t,o,n,i,Of,r)}function Cv(t,e,n,i,r,s){let o;if(vr(i,n)!=null)return e;{const a=new Zo(i,e,r),l=e.eventCache.getNode();let c;if(j(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xs(i,sn(e));else{const f=e.serverCache.getNode();I(f instanceof V,"serverChildren would be complete if leaf node"),u=Af(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=W(n);let f=Jo(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ne(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ne(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xs(i,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||vr(i,G())!=null,Zn(e,c,o,t.filter.filtersNodes())}}function Sv(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Vl(t,e,n,i){e.type===ot.MERGE&&e.source.queryId!==null&&(I(sn(t.viewCache_),"We should always have a full cache before handling merges"),I(Ks(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=vv(t.processor_,r,e,n,i);return _v(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Iv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Iv(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return J_(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;function xv(t){I(!Kl,"__referenceConstructor has already been defined"),Kl=t}function ea(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return I(s!=null,"SyncTree gave us an op for an invalid query."),Vl(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Vl(o,e,n,i));return s}}function ta(t,e){let n=null;for(const i of t.views.values())n=n||Sv(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;function Tv(t){I(!Yl,"__referenceConstructor has already been defined"),Yl=t}class Gl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=dv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pf(t,e,n,i,r){return nv(t.pendingWriteTree_,e,n,i,r),r?Ur(t,new rn(yf(),e,n)):[]}function Yt(t,e,n=!1){const i=iv(t.pendingWriteTree_,e);if(rv(t.pendingWriteTree_,e)){let s=new te(null);return i.snap!=null?s=s.set(G(),!0):Ue(i.children,o=>{s=s.set(new se(o),!0)}),Ur(t,new _r(i.path,s,n))}else return[]}function Hr(t,e,n){return Ur(t,new rn(bf(),e,n))}function Av(t,e,n){const i=te.fromObject(n);return Ur(t,new pi(bf(),e,i))}function kv(t,e,n,i){const r=Lf(t,i);if(r!=null){const s=Ff(r),o=s.path,a=s.queryId,l=He(o,e),c=new rn(wf(a),l,n);return Bf(t,o,c)}else return[]}function Nv(t,e,n,i){const r=Lf(t,i);if(r){const s=Ff(r),o=s.path,a=s.queryId,l=He(o,e),c=te.fromObject(n),u=new pi(wf(a),l,c);return Bf(t,o,u)}else return[]}function na(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=ta(a,l);if(c)return c});return Tf(r,e,s,n,!0)}function Ur(t,e){return Mf(e,t.syncPointTree_,null,If(t.pendingWriteTree_,G()))}function Mf(t,e,n,i){if(j(t.path))return Df(t,e,n,i);{const r=e.get(G());n==null&&r!=null&&(n=ta(r,G()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=kf(i,o);s=s.concat(Mf(a,l,c,u))}return r&&(s=s.concat(ea(r,t,i,n))),s}}function Df(t,e,n,i){const r=e.get(G());n==null&&r!=null&&(n=ta(r,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=kf(i,o),u=t.operationForChild(o);u&&(s=s.concat(Df(u,a,l,c)))}),r&&(s=s.concat(ea(r,t,i,n))),s}function Lf(t,e){return t.tagToQueryMap.get(e)}function Ff(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Bf(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const r=If(t.pendingWriteTree_,e);return ea(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ia(n)}node(){return this.node_}}class ra{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new ra(this.syncTree_,n)}node(){return na(this.syncTree_,this.path_)}}const Ov=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xl=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Rv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pv(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Rv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Pv=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const r=e.node();if(I(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Mv=function(t,e,n,i){return sa(e,new ra(n,t),i)},$f=function(t,e,n){return sa(t,new ia(e),n)};function sa(t,e,n){const i=t.getPriority().val(),r=Xl(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xl(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new de(a,_e(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new de(r))),o.forEachChild(Ce,(a,l)=>{const c=sa(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function aa(t,e){let n=e instanceof se?e:new se(e),i=t,r=W(n);for(;r!==null;){const s=Nn(i.node.children,r)||{children:{},childCount:0};i=new oa(r,i,s),n=ne(n),r=W(n)}return i}function Hn(t){return t.node.value}function Hf(t,e){t.node.value=e,Zs(t)}function Uf(t){return t.node.childCount>0}function Dv(t){return Hn(t)===void 0&&!Uf(t)}function Wr(t,e){Ue(t.node.children,(n,i)=>{e(new oa(n,t,i))})}function Wf(t,e,n,i){n&&!i&&e(t),Wr(t,r=>{Wf(r,e,!0,i)}),n&&i&&e(t)}function Lv(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xi(t){return new se(t.parent===null?t.name:xi(t.parent)+"/"+t.name)}function Zs(t){t.parent!==null&&Fv(t.parent,t.name,t)}function Fv(t,e,n){const i=Dv(n),r=wt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Zs(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Zs(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=/[\[\].#$\/\u0000-\u001F\u007F]/,$v=/[\[\].#$\u0000-\u001F\u007F]/,ps=10*1024*1024,zf=function(t){return typeof t=="string"&&t.length!==0&&!Bv.test(t)},jf=function(t){return typeof t=="string"&&t.length!==0&&!$v.test(t)},Hv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jf(t)},Uv=function(t,e,n,i){i&&e===void 0||la(Wo(t,"value"),e,n)},la=function(t,e,n){const i=n instanceof se?new E_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(i));if(typeof e=="function")throw new Error(t+"contains a function "+zt(i)+" with contents = "+e.toString());if(Hu(e))throw new Error(t+"contains "+e.toString()+" "+zt(i));if(typeof e=="string"&&e.length>ps/3&&Br(e)>ps)throw new Error(t+"contains a string greater than "+ps+" utf8 bytes "+zt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ue(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zf(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C_(i,o),la(t,a,i),S_(i)}),r&&s)throw new Error(t+' contains ".value" child '+zt(i)+" in addition to actual children.")}},qf=function(t,e,n,i){if(!(i&&n===void 0)&&!jf(n))throw new Error(Wo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Wv=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qf(t,e,n,i)},zv=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hv(n))throw new Error(Wo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vf(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!ff(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function gt(t,e,n){Vf(t,n),Vv(t,i=>Ye(i,e)||Ye(e,i))}function Vv(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Kv(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Zt&&be("event: "+n.toString()),$n(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="repo_interrupt",Gv=25;class Xv{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new oa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qv(t,e,n){if(t.stats_=Vo(t.repoInfo_),t.forceRestClient_||Kg())t.server_=new mr(t.repoInfo_,(i,r,s,o)=>{Ql(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new dt(t.repoInfo_,e,(i,r,s,o)=>{Ql(t,i,r,s,o)},i=>{Jl(t,i)},i=>{Zv(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Jg(t.repoInfo_,()=>new Q_(t.stats_,t.server_)),t.infoData_=new V_,t.infoSyncTree_=new Gl({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Hr(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ua(t,"connected",!1),t.serverSyncTree_=new Gl({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);gt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Jv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ca(t){return Ov({timestamp:Jv(t)})}function Ql(t,e,n,i,r){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=cr(n,c=>_e(c));o=Nv(t.serverSyncTree_,s,l,r)}else{const l=_e(n);o=kv(t.serverSyncTree_,s,l,r)}else if(i){const l=cr(n,c=>_e(c));o=Av(t.serverSyncTree_,s,l)}else{const l=_e(n);o=Hr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=zr(t,s)),gt(t.eventQueue_,a,o)}function Jl(t,e){ua(t,"connected",e),e===!1&&ty(t)}function Zv(t,e){Ue(e,(n,i)=>{ua(t,n,i)})}function ua(t,e,n){const i=new se("/.info/"+e),r=_e(n);t.infoData_.updateSnapshot(i,r);const s=Hr(t.infoSyncTree_,i,r);gt(t.eventQueue_,i,s)}function Kf(t){return t.nextWriteId_++}function ey(t,e,n,i,r){fa(t,"set",{path:e.toString(),value:n,priority:i});const s=ca(t),o=_e(n,i),a=na(t.serverSyncTree_,e),l=$f(o,a,s),c=Kf(t),u=Pf(t.serverSyncTree_,e,l,c,!0);Vf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(p,m)=>{const y=p==="ok";y||Pe("set at "+e+" failed: "+p);const x=Yt(t.serverSyncTree_,c,!y);gt(t.eventQueue_,e,x),iy(t,r,p,m)});const f=Jf(t,e);zr(t,f),gt(t.eventQueue_,f,[])}function ty(t){fa(t,"onDisconnectEvents");const e=ca(t),n=gr();Vs(t.onDisconnect_,G(),(r,s)=>{const o=Mv(r,s,t.serverSyncTree_,e);vf(n,r,o)});let i=[];Vs(n,G(),(r,s)=>{i=i.concat(Hr(t.serverSyncTree_,r,s));const o=Jf(t,r);zr(t,o)}),t.onDisconnect_=gr(),gt(t.eventQueue_,G(),i)}function ny(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yv)}function fa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function iy(t,e,n,i){e&&$n(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Yf(t,e,n){return na(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function ha(t,e=t.transactionQueueTree_){if(e||jr(t,e),Hn(e)){const n=Xf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ry(t,xi(e),n)}else Uf(e)&&Wr(e,n=>{ha(t,n)})}function ry(t,e,n){const i=n.map(c=>c.currentWriteId),r=Yf(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=He(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fa(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Yt(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();jr(t,aa(t.transactionQueueTree_,e)),ha(t,t.transactionQueueTree_),gt(t.eventQueue_,e,u);for(let p=0;p<f.length;p++)$n(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Pe("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}zr(t,e)}},o)}function zr(t,e){const n=Gf(t,e),i=xi(n),r=Xf(t,n);return sy(t,r,i),i}function sy(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let u=!1,f;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Gv)u=!0,f="maxretry",r=r.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else{const p=Yf(t,l.path,o);l.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){la("transaction failed: Data returned ",m,l.path);let y=_e(m);typeof m=="object"&&m!=null&&wt(m,".priority")||(y=y.updatePriority(p.getPriority()));const N=l.currentWriteId,w=ca(t),k=$f(y,p,w);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=k,l.currentWriteId=Kf(t),o.splice(o.indexOf(N),1),r=r.concat(Pf(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),r=r.concat(Yt(t.serverSyncTree_,N,!0))}else u=!0,f="nodata",r=r.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0))}gt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}jr(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)$n(i[a]);ha(t,t.transactionQueueTree_)}function Gf(t,e){let n,i=t.transactionQueueTree_;for(n=W(e);n!==null&&Hn(i)===void 0;)i=aa(i,n),e=ne(e),n=W(e);return i}function Xf(t,e){const n=[];return Qf(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Qf(t,e,n){const i=Hn(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Wr(e,r=>{Qf(t,r,n)})}function jr(t,e){const n=Hn(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Hf(e,n.length>0?n:void 0)}Wr(e,i=>{jr(t,i)})}function Jf(t,e){const n=xi(Gf(t,e)),i=aa(t.transactionQueueTree_,e);return Lv(i,r=>{ms(t,r)}),ms(t,i),Wf(i,r=>{ms(t,r)}),n}function ms(t,e){const n=Hn(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hf(e,void 0):n.length=s+1,gt(t.eventQueue_,xi(e),r);for(let o=0;o<i.length;o++)$n(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ay(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zl=function(t,e){const n=ly(t),i=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$g();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ju(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new se(n.pathString)}},ly=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=oy(t.substring(u,f)));const p=ay(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=i}"ns"in p&&(s=p.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return j(this._path)?null:lf(this._path)}get ref(){return new cn(this._repo,this._path)}get _queryIdentifier(){const e=Bl(this._queryParams),n=jo(e);return n==="{}"?"default":n}get _queryObject(){return Bl(this._queryParams)}isEqual(e){if(e=Ei(e),!(e instanceof da))return!1;const n=this._repo===e._repo,i=ff(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+w_(this._path)}}class cn extends da{constructor(e,n){super(e,n,new Xo,!1)}get parent(){const e=uf(this._path);return e===null?null:new cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function cy(t,e){return t=Ei(t),t._checkNotDeleted("ref"),e!==void 0?uy(t._root,e):t._root}function uy(t,e){return t=Ei(t),W(t._path)===null?Wv("child","path",e,!1):qf("child","path",e,!1),new cn(t._repo,ue(t._path,e))}function fy(t,e){t=Ei(t),zv("set",t._path),Uv("set",e,t._path,!1);const n=new Fr;return ey(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}xv(cn);Tv(cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="FIREBASE_DATABASE_EMULATOR_HOST",eo={};let dy=!1;function py(t,e,n,i){t.repoInfo_=new Ju(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function my(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zl(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[hy]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Zl(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Sn(Sn.OWNER):new Gg(t.name,t.options,e);jv("Invalid Firebase Database URL",o),j(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=_y(a,t,u,new Yg(t.name,n));return new vy(f,t)}function gy(t,e){const n=eo[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ny(t),delete n[t.key]}function _y(t,e,n,i){let r=eo[e.name];r||(r={},eo[e.name]=r);let s=r[t.toURLString()];return s&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xv(t,dy,n,i),r[t.toURLString()]=s,s}class vy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cn(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function yy(t=Eg(),e){const n=vg(t,"database").getImmediate({identifier:e}),i=dm("database");return i&&by(n,...i),n}function by(t,e,n,i={}){t=Ei(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Sn(Sn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:mm(i.mockUserToken,t.app.options.projectId);s=new Sn(o)}py(r,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){Mg(wg),fr(new fi("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return my(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),En(bl,wl,t),En(bl,wl,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wy();const Ey={class:"header"},Cy=H("div",{class:"skip"},[H("a",{class:"sr-only sr-only-focusable",href:"#main"}," Skip to content ")],-1),Sy=H("div",{class:"logo-wrapper"},[H("img",{src:em,class:"logo",alt:"Squashlist logo",width:"172",height:"24"})],-1),Iy={class:"suggest"},xy=H("span",{class:"tooltip"},"Suggest item",-1),Ty={class:"form-title"},Ay=H("span",null,"Suggest item",-1),ky=H("span",{class:"sr-only"},"Close",-1),Ny={key:0,class:"error"},Oy=H("div",null,"Unable to submit",-1),Ry={key:1,class:"success"},Py=H("div",null,"Thanks for making a suggestion!",-1),My=H("p",null,"Suggest an item to be included in the Squash List",-1),Dy=["onSubmit"],Ly=H("span",null,[bi("Name "),H("span",{class:"required"},"*")],-1),Fy=H("span",null,[bi("URL "),H("span",{class:"required"},"*")],-1),By=H("span",null,"Description",-1),$y=["disabled"],Hy=H("h1",{class:"sr-only"},"Squash sites, apps, & resources",-1),Uy={__name:"Header",setup(t){const e=Bt(null),n=Bt(!1),i=Bt({name:"",url:"",desc:""}),r=Bt(null),s=Bt(!0),o=Bt(!1),a=Bt(!1),l=()=>{n.value=!0,i.value={name:"",url:"",desc:""},s.value=!0,o.value=!1,a.value=!1};wn(n,m=>{m&&Qc(()=>r.value.focus())}),wn(i,m=>{m.name&&m.url?s.value=!1:s.value=!0},{deep:!0});const u=Mu({apiKey:"AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",authDomain:"squash-list.firebaseapp.com",databaseURL:"https://squash-list-default-rtdb.firebaseio.com",projectId:"squash-list",storageBucket:"squash-list.appspot.com",messagingSenderId:"537914321064",appId:"1:537914321064:web:6df5523c5fc9d1c9b83a9d"}),f=yy(u),p=()=>{s.value=!0,fy(cy(f,`/suggest/item-${Math.floor(Date.now()*Math.random())}`),ko(i)).then(()=>a.value=!0).catch(()=>o.value=!0)};return Mo(()=>{let m=0,y=0;const x=()=>{y>m+100&&(n.value=!1)};e.value.addEventListener("touchstart",N=>{m=N.changedTouches[0].screenX}),e.value.addEventListener("touchend",N=>{y=N.changedTouches[0].screenX,x()}),document.addEventListener("keydown",N=>{N.code==="Escape"&&(n.value=!1)})}),(m,y)=>{const x=Lo("font-awesome-icon");return Oe(),st("header",Ey,[Cy,Sy,H("div",Iy,[H("button",{onClick:l},[xy,fe(x,{icon:"fa-solid fa-circle-plus",class:"icon"})]),H("div",null,[n.value?(Oe(),st("div",{key:0,class:"form-bg",onClick:y[0]||(y[0]=N=>n.value=!1)})):vu("",!0),H("div",{class:Ir(["form",{open:n.value}]),ref_key:"formWrapper",ref:e},[H("h2",Ty,[Ay,H("button",{class:"close-icon",onClick:y[1]||(y[1]=N=>n.value=!1)},[fe(x,{icon:"fa-solid fa-xmark"}),ky])]),o.value?(Oe(),st("div",Ny,[fe(x,{icon:"fa-solid fa-face-frown",class:"icon"}),Oy])):a.value?(Oe(),st("div",Ry,[fe(x,{icon:"fa-solid fa-face-smile",class:"icon"}),Py])):(Oe(),st(Ne,{key:2},[My,H("form",{onSubmit:Gp(p,["prevent"])},[H("label",null,[Ly,ts(H("input",{"onUpdate:modelValue":y[2]||(y[2]=N=>i.value.name=N),type:"text",name:"name",required:"",ref_key:"nameInput",ref:r},null,512),[[rs,i.value.name]])]),H("label",null,[Fy,ts(H("input",{"onUpdate:modelValue":y[3]||(y[3]=N=>i.value.url=N),type:"text",name:"url",required:""},null,512),[[rs,i.value.url]])]),H("label",null,[By,ts(H("input",{"onUpdate:modelValue":y[4]||(y[4]=N=>i.value.desc=N),type:"text",name:"desc"},null,512),[[rs,i.value.desc]])]),H("button",{type:"submit",disabled:s.value}," Submit ",8,$y)],40,Dy)],64))],2)])]),Hy])}}};const Wy=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},zy=["href"],jy={class:"desc"},qy={__name:"Item",props:{item:Object},setup(t){qp(i=>({bda018a2:n.degrees,ef45bcbe:n.position}));const e=Math.random()<.5?"-":"",n={degrees:`${e}${Math.random()/1.5}deg`,position:`${e}${Math.random()*3}px`};return(i,r)=>{const s=Lo("font-awesome-icon");return Oe(),st("a",{href:t.item.url,class:"item"},[H("p",null,[bi(bs(t.item.name)+" ",1),t.item.paid?(Oe(),Mr(s,{key:0,icon:"fa-solid fa-money-bills",class:"money-icon",title:"Paid service"})):vu("",!0)]),H("p",jy,bs(t.item.desc),1)],8,zy)}}},Vy=Wy(qy,[["__scopeId","data-v-99d85e0c"]]),Ky={class:"category"},Yy={class:"items-wrapper"},Gy={__name:"Category",props:{category:Object},setup(t){return(e,n)=>{const i=Lo("font-awesome-icon");return Oe(),st("div",Ky,[H("h2",null,[fe(i,{icon:`fa-solid fa-${t.category.icon}`,class:"icon"},null,8,["icon"]),bi(bs(t.category.cat),1)]),H("div",Yy,[(Oe(!0),st(Ne,null,au(t.category.items,r=>(Oe(),Mr(Vy,{item:r},null,8,["item"]))),256))])])}}},Xy=[{cat:"streaming",icon:"play",items:[{name:"SquashTV",url:"https://squash.tv/",paid:!0,desc:"Live streaming of pro squash. Replays and highlights, and a huge archive of previous matches going all the way back to the 1980s."},{name:"PSA YouTube Channel",url:"https://www.youtube.com/psasquashtv",desc:"Mainly highlights of pro squash tournaments. Every few weeks selected matches are streamed live."}]},{cat:"training",icon:"person-running",items:[{name:"Better Squash",url:"https://www.youtube.com/BetterSquash",desc:"Tips, drills, technique, and training videos with an ex-professional squash coach."},{name:"Squash Skills",url:"https://www.squashskills.com/",paid:!0,desc:"Online coaching platform, with some of the world's best coaches and players."},{name:"AR Proformance",url:"https://www.youtube.com/ARProformance",desc:"Detailed videos on technique, tactics, and analysis of squash."},{name:"Squash Originals",url:"https://www.youtube.com/channel/UCCnBsPNnF3PQ1ljTbcuIT9w",desc:"Tips and tricks, drills, and training routines."},{name:"The Pursuit of Squash",url:"https://www.youtube.com/ThePursuitofSquash",desc:"A challenge-based training program."},{name:"Cross Court Analytics",url:"https://crosscourtanalytics.com/",desc:"Data-driven analysis of squash players and matches."},{name:"Ghosting",url:"https://m11tdev.github.io/ghosting/",desc:"Web app that uses visual (not audio) cues for squash ghosting."}]},{cat:"news",icon:"newspaper",items:[{name:"Squash Mad",url:"https://squashmad.com/",desc:"Keep up to date with pro squash news."},{name:"Control The T blog",url:"https://blog.controlthet.com/blog",desc:"Lots of interesting blog content - news, reviews, tactics."},{name:"PSA World Tour",url:"https://www.psaworldtour.com/",desc:"Official site for the pro tour."},{name:"Squash Site",url:"https://thesquashsite.com/",desc:"News from all levels of pro squash."},{name:"BBC Sport - Squash",url:"https://www.bbc.co.uk/sport/squash",desc:"BBC squash news, not updated as frequently as other sites."},{name:"In Squash Podcast",url:"https://podcasts.apple.com/us/podcast/in-squash-the-podcast/id1339208693",desc:"Interviews and conversations with the pros - players, coaches, referees."}]},{cat:"reviews",icon:"star-half-stroke",items:[{name:"Squash Source",url:"https://www.squashsource.com/",desc:"A blog about squash gear - rackets, shoes, clothing, bags...and more. Always worth a look if you're thinking of adding to your squash equipment."},{name:"Squash Gear Reviews",url:"https://squashgearreviews.com/",desc:"Reviews of rackets, shoes, and accessories."},{name:"PDHSports squash blog",url:"https://www.pdhsports.com/blog/squash",desc:"Reviews from the online shop that specialises racket sports."}]},{cat:"community",icon:"people-group",items:[{name:"Squash Reddit",url:"https://www.reddit.com/r/squash",desc:"Active Reddit community discussing all aspects of squash."},{name:"Squash Levels",url:"https://www.squashlevels.com/",paid:!0,desc:"Check out your club and league results and compare yourself to other players."},{name:"Squash Players",url:"https://apps.apple.com/gb/app/squash-players/id1448478025",desc:"App to find squash venues, and record match results."}]},{cat:"shops",icon:"basket-shopping",items:[{name:"PDH Sports",url:"https://www.pdhsports.com/",desc:"Online shop specialising in rackets sports."}]}],Qy={class:"wrapper"},Jy={class:"container",id:"main"},Zy={__name:"App",setup(t){return(e,n)=>(Oe(),st(Ne,null,[fe(Uy),H("div",Qy,[H("main",Jy,[(Oe(!0),st(Ne,null,au(ko(Xy),i=>(Oe(),Mr(Gy,{category:i},null,8,["category"]))),256))])])],64))}};function ec(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ec(Object(n),!0).forEach(function(i){he(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ec(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function br(t){return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(t)}function eb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tc(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function tb(t,e,n){return e&&tc(t.prototype,e),n&&tc(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function he(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pa(t,e){return ib(t)||sb(t,e)||Zf(t,e)||ab()}function Ti(t){return nb(t)||rb(t)||Zf(t)||ob()}function nb(t){if(Array.isArray(t))return to(t)}function ib(t){if(Array.isArray(t))return t}function rb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Zf(t,e){if(!!t){if(typeof t=="string")return to(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return to(t,e)}}function to(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ob(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ab(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nc=function(){},ma={},eh={},th=null,nh={mark:nc,measure:nc};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(eh=document),typeof MutationObserver<"u"&&(th=MutationObserver),typeof performance<"u"&&(nh=performance)}catch{}var lb=ma.navigator||{},ic=lb.userAgent,rc=ic===void 0?"":ic,Pt=ma,re=eh,sc=th,Ui=nh;Pt.document;var Et=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",ih=~rc.indexOf("MSIE")||~rc.indexOf("Trident/"),Wi,zi,ji,qi,Vi,_t="___FONT_AWESOME___",no=16,rh="fa",sh="svg-inline--fa",on="data-fa-i2svg",io="data-fa-pseudo-element",cb="data-fa-pseudo-element-pending",ga="data-prefix",_a="data-icon",oc="fontawesome-i2svg",ub="async",fb=["HTML","HEAD","STYLE","SCRIPT"],oh=function(){try{return!0}catch{return!1}}(),ie="classic",le="sharp",va=[ie,le];function Ai(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ie]}})}var mi=Ai((Wi={},he(Wi,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(Wi,le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Wi)),gi=Ai((zi={},he(zi,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(zi,le,{solid:"fass"}),zi)),_i=Ai((ji={},he(ji,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(ji,le,{fass:"fa-solid"}),ji)),hb=Ai((qi={},he(qi,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(qi,le,{"fa-solid":"fass"}),qi)),db=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ah="fa-layers-text",pb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mb=Ai((Vi={},he(Vi,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Vi,le,{900:"fass"}),Vi)),lh=[1,2,3,4,5,6,7,8,9,10],gb=lh.concat([11,12,13,14,15,16,17,18,19,20]),_b=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vi=new Set;Object.keys(gi[ie]).map(vi.add.bind(vi));Object.keys(gi[le]).map(vi.add.bind(vi));var vb=[].concat(va,Ti(vi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gt.GROUP,Gt.SWAP_OPACITY,Gt.PRIMARY,Gt.SECONDARY]).concat(lh.map(function(t){return"".concat(t,"x")})).concat(gb.map(function(t){return"w-".concat(t)})),ti=Pt.FontAwesomeConfig||{};function yb(t){var e=re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(re&&typeof re.querySelector=="function"){var wb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wb.forEach(function(t){var e=pa(t,2),n=e[0],i=e[1],r=bb(yb(n));r!=null&&(ti[i]=r)})}var ch={styleDefault:"solid",familyDefault:"classic",cssPrefix:rh,replacementClass:sh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ti.familyPrefix&&(ti.cssPrefix=ti.familyPrefix);var Pn=A(A({},ch),ti);Pn.autoReplaceSvg||(Pn.observeMutations=!1);var R={};Object.keys(ch).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){Pn[t]=n,ni.forEach(function(i){return i(R)})},get:function(){return Pn[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){Pn.cssPrefix=e,ni.forEach(function(n){return n(R)})},get:function(){return Pn.cssPrefix}});Pt.FontAwesomeConfig=R;var ni=[];function Eb(t){return ni.push(t),function(){ni.splice(ni.indexOf(t),1)}}var St=no,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cb(t){if(!(!t||!Et)){var e=re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=re.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return re.head.insertBefore(e,i),t}}var Sb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yi(){for(var t=12,e="";t-- >0;)e+=Sb[Math.random()*62|0];return e}function Un(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ya(t){return t.classList?Un(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function uh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ib(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(uh(t[n]),'" ')},"").trim()}function qr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ba(t){return t.size!==at.size||t.x!==at.x||t.y!==at.y||t.rotate!==at.rotate||t.flipX||t.flipY}function xb(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Tb(t){var e=t.transform,n=t.width,i=n===void 0?no:n,r=t.height,s=r===void 0?no:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&ih?l+="translate(".concat(e.x/St-i/2,"em, ").concat(e.y/St-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/St,"em), calc(-50% + ").concat(e.y/St,"em)) "):l+="translate(".concat(e.x/St,"em, ").concat(e.y/St,"em) "),l+="scale(".concat(e.size/St*(e.flipX?-1:1),", ").concat(e.size/St*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ab=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fh(){var t=rh,e=sh,n=R.cssPrefix,i=R.replacementClass,r=Ab;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var ac=!1;function gs(){R.autoAddCss&&!ac&&(Cb(fh()),ac=!0)}var kb={mixout:function(){return{dom:{css:fh,insertCss:gs}}},hooks:function(){return{beforeDOMElementCreation:function(){gs()},beforeI2svg:function(){gs()}}}},vt=Pt||{};vt[_t]||(vt[_t]={});vt[_t].styles||(vt[_t].styles={});vt[_t].hooks||(vt[_t].hooks={});vt[_t].shims||(vt[_t].shims=[]);var Ge=vt[_t],hh=[],Nb=function t(){re.removeEventListener("DOMContentLoaded",t),wr=1,hh.map(function(e){return e()})},wr=!1;Et&&(wr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),wr||re.addEventListener("DOMContentLoaded",Nb));function Ob(t){!Et||(wr?setTimeout(t,0):hh.push(t))}function ki(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?uh(t):"<".concat(e," ").concat(Ib(i),">").concat(s.map(ki).join(""),"</").concat(e,">")}function lc(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Rb=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},_s=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Rb(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Pb(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ro(t){var e=Pb(t);return e.length===1?e[0].toString(16):null}function Mb(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function cc(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function so(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=cc(e);typeof Ge.hooks.addPack=="function"&&!r?Ge.hooks.addPack(t,cc(e)):Ge.styles[t]=A(A({},Ge.styles[t]||{}),s),t==="fas"&&so("fa",e)}var Ki,Yi,Gi,mn=Ge.styles,Db=Ge.shims,Lb=(Ki={},he(Ki,ie,Object.values(_i[ie])),he(Ki,le,Object.values(_i[le])),Ki),wa=null,dh={},ph={},mh={},gh={},_h={},Fb=(Yi={},he(Yi,ie,Object.keys(mi[ie])),he(Yi,le,Object.keys(mi[le])),Yi);function Bb(t){return~vb.indexOf(t)}function $b(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Bb(r)?r:null}var vh=function(){var e=function(s){return _s(mn,function(o,a,l){return o[l]=_s(a,s,{}),o},{})};dh=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),ph=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),_h=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in mn||R.autoFetchSvg,i=_s(Db,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});mh=i.names,gh=i.unicodes,wa=Vr(R.styleDefault,{family:R.familyDefault})};Eb(function(t){wa=Vr(t.styleDefault,{family:R.familyDefault})});vh();function Ea(t,e){return(dh[t]||{})[e]}function Hb(t,e){return(ph[t]||{})[e]}function Xt(t,e){return(_h[t]||{})[e]}function yh(t){return mh[t]||{prefix:null,iconName:null}}function Ub(t){var e=gh[t],n=Ea("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mt(){return wa}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function Vr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ie:n,r=mi[i][t],s=gi[i][t]||gi[i][r],o=t in Ge.styles?t:null;return s||o||null}var uc=(Gi={},he(Gi,ie,Object.keys(_i[ie])),he(Gi,le,Object.keys(_i[le])),Gi);function Kr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},he(e,ie,"".concat(R.cssPrefix,"-").concat(ie)),he(e,le,"".concat(R.cssPrefix,"-").concat(le)),e),o=null,a=ie;(t.includes(s[ie])||t.some(function(c){return uc[ie].includes(c)}))&&(a=ie),(t.includes(s[le])||t.some(function(c){return uc[le].includes(c)}))&&(a=le);var l=t.reduce(function(c,u){var f=$b(R.cssPrefix,u);if(mn[u]?(u=Lb[a].includes(u)?hb[a][u]:u,o=u,c.prefix=u):Fb[a].indexOf(u)>-1?(o=u,c.prefix=Vr(u,{family:a})):f?c.iconName=f:u!==R.replacementClass&&u!==s[ie]&&u!==s[le]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var p=o==="fa"?yh(c.iconName):{},m=Xt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||m||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!mn.far&&mn.fas&&!R.autoFetchSvg&&(c.prefix="fas")}return c},Ca());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===le&&(mn.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Mt()||"fas"),l}var Wb=function(){function t(){eb(this,t),this.definitions={}}return tb(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=A(A({},n.definitions[a]||{}),o[a]),so(a,o[a]);var l=_i[ie][a];l&&so(l,o[a]),vh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),fc=[],gn={},xn={},zb=Object.keys(xn);function jb(t,e){var n=e.mixoutsTo;return fc=t,gn={},Object.keys(xn).forEach(function(i){zb.indexOf(i)===-1&&delete xn[i]}),fc.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),br(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){gn[o]||(gn[o]=[]),gn[o].push(s[o])})}i.provides&&i.provides(xn)}),n}function oo(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=gn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function an(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=gn[t]||[];r.forEach(function(s){s.apply(null,n)})}function yt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return xn[t]?xn[t].apply(null,e):void 0}function ao(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Mt();if(!!e)return e=Xt(n,e)||e,lc(bh.definitions,n,e)||lc(Ge.styles,n,e)}var bh=new Wb,qb=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,an("noAuto")},Vb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(an("beforeI2svg",e),yt("pseudoElements2svg",e),yt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Ob(function(){Yb({autoReplaceSvgRoot:n}),an("watch",e)})}},Kb={icon:function(e){if(e===null)return null;if(br(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Vr(e[0]);return{prefix:i,iconName:Xt(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(db))){var r=Kr(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Mt(),iconName:Xt(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Mt();return{prefix:s,iconName:Xt(s,e)||e}}}},Le={noAuto:qb,config:R,dom:Vb,parse:Kb,library:bh,findIconDefinition:ao,toHtml:ki},Yb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?re:n;(Object.keys(Ge.styles).length>0||R.autoFetchSvg)&&Et&&R.autoReplaceSvg&&Le.dom.i2svg({node:i})};function Yr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ki(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Et){var i=re.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Gb(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(ba(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=qr(A(A({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Xb(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:o}),children:i}]}]}function Sa(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,p=t.watchable,m=p===void 0?!1:p,y=i.found?i:n,x=y.width,N=y.height,w=r==="fak",k=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(Fe){return f.classes.indexOf(Fe)===-1}).filter(function(Fe){return Fe!==""||!!Fe}).concat(f.classes).join(" "),D={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(N)})},$=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/N*16*.0625,"em")}:{};m&&(D.attributes[on]=""),l&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||yi())},children:[l]}),delete D.attributes.title);var Q=A(A({},D),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:A(A({},$),f.styles)}),Te=i.found&&n.found?yt("generateAbstractMask",Q)||{children:[],attributes:{}}:yt("generateAbstractIcon",Q)||{children:[],attributes:{}},ye=Te.children,We=Te.attributes;return Q.children=ye,Q.attributes=We,a?Xb(Q):Gb(Q)}function hc(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=A(A(A({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[on]="");var u=A({},o.styles);ba(r)&&(u.transform=Tb({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=qr(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Qb(t){var e=t.content,n=t.title,i=t.extra,r=A(A(A({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=qr(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vs=Ge.styles;function lo(t){var e=t[0],n=t[1],i=t.slice(4),r=pa(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Gt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Gt.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Jb={found:!1,width:512,height:512};function Zb(t,e){!oh&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function co(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=Mt()),new Promise(function(i,r){if(yt("missingIconAbstract"),n==="fa"){var s=yh(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&vs[e]&&vs[e][t]){var o=vs[e][t];return i(lo(o))}Zb(t,e),i(A(A({},Jb),{},{icon:R.showMissingIcons&&t?yt("missingIconAbstract")||{}:{}}))})}var dc=function(){},uo=R.measurePerformance&&Ui&&Ui.mark&&Ui.measure?Ui:{mark:dc,measure:dc},Xn='FA "6.2.0"',e1=function(e){return uo.mark("".concat(Xn," ").concat(e," begins")),function(){return wh(e)}},wh=function(e){uo.mark("".concat(Xn," ").concat(e," ends")),uo.measure("".concat(Xn," ").concat(e),"".concat(Xn," ").concat(e," begins"),"".concat(Xn," ").concat(e," ends"))},Ia={begin:e1,end:wh},tr=function(){};function pc(t){var e=t.getAttribute?t.getAttribute(on):null;return typeof e=="string"}function t1(t){var e=t.getAttribute?t.getAttribute(ga):null,n=t.getAttribute?t.getAttribute(_a):null;return e&&n}function n1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function i1(){if(R.autoReplaceSvg===!0)return nr.replace;var t=nr[R.autoReplaceSvg];return t||nr.replace}function r1(t){return re.createElementNS("http://www.w3.org/2000/svg",t)}function s1(t){return re.createElement(t)}function Eh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?r1:s1:n;if(typeof t=="string")return re.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Eh(o,{ceFn:i}))}),r}function o1(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Eh(r),n)}),n.getAttribute(on)===null&&R.keepOriginalSource){var i=re.createComment(o1(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ya(n).indexOf(R.replacementClass))return nr.replace(e);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return ki(a)}).join(`
`);n.setAttribute(on,""),n.innerHTML=o}};function mc(t){t()}function Ch(t,e){var n=typeof e=="function"?e:tr;if(t.length===0)n();else{var i=mc;R.mutateApproach===ub&&(i=Pt.requestAnimationFrame||mc),i(function(){var r=i1(),s=Ia.begin("mutate");t.map(r),s(),n()})}}var xa=!1;function Sh(){xa=!0}function fo(){xa=!1}var Er=null;function gc(t){if(!!sc&&!!R.observeMutations){var e=t.treeCallback,n=e===void 0?tr:e,i=t.nodeCallback,r=i===void 0?tr:i,s=t.pseudoElementsCallback,o=s===void 0?tr:s,a=t.observeMutationsRoot,l=a===void 0?re:a;Er=new sc(function(c){if(!xa){var u=Mt();Un(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!pc(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&pc(f.target)&&~_b.indexOf(f.attributeName))if(f.attributeName==="class"&&t1(f.target)){var p=Kr(ya(f.target)),m=p.prefix,y=p.iconName;f.target.setAttribute(ga,m||u),y&&f.target.setAttribute(_a,y)}else n1(f.target)&&r(f.target)})}}),Et&&Er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a1(){!Er||Er.disconnect()}function l1(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function c1(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Kr(ya(t));return r.prefix||(r.prefix=Mt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Hb(r.prefix,t.innerText)||Ea(r.prefix,ro(t.innerText))),!r.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function u1(t){var e=Un(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(i||yi()):(e["aria-hidden"]="true",e.focusable="false")),e}function f1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _c(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=c1(t),i=n.iconName,r=n.prefix,s=n.rest,o=u1(t),a=oo("parseNodeAttributes",{},t),l=e.styleParser?l1(t):[];return A({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var h1=Ge.styles;function Ih(t){var e=R.autoReplaceSvg==="nest"?_c(t,{styleParser:!1}):_c(t);return~e.extra.classes.indexOf(ah)?yt("generateLayersText",t,e):yt("generateSvgReplacementMutation",t,e)}var Dt=new Set;va.map(function(t){Dt.add("fa-".concat(t))});Object.keys(mi[ie]).map(Dt.add.bind(Dt));Object.keys(mi[le]).map(Dt.add.bind(Dt));Dt=Ti(Dt);function vc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=re.documentElement.classList,i=function(f){return n.add("".concat(oc,"-").concat(f))},r=function(f){return n.remove("".concat(oc,"-").concat(f))},s=R.autoFetchSvg?Dt:va.map(function(u){return"fa-".concat(u)}).concat(Object.keys(h1));s.includes("fa")||s.push("fa");var o=[".".concat(ah,":not([").concat(on,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(on,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Un(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=a.reduce(function(u,f){try{var p=Ih(f);p&&u.push(p)}catch(m){oh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(p){Ch(p,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(p){l(),f(p)})})}function d1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ih(t).then(function(n){n&&Ch([n],e)})}function p1(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:ao(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ao(r||{})),t(i,A(A({},n),{},{mask:r}))}}var m1=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?at:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,p=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,x=n.classes,N=x===void 0?[]:x,w=n.attributes,k=w===void 0?{}:w,D=n.styles,$=D===void 0?{}:D;if(!!e){var Q=e.prefix,Te=e.iconName,ye=e.icon;return Yr(A({type:"icon"},e),function(){return an("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(p?k["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(y||yi()):(k["aria-hidden"]="true",k.focusable="false")),Sa({icons:{main:lo(ye),mask:l?lo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:Te,transform:A(A({},at),r),symbol:o,title:p,maskId:u,titleId:y,extra:{attributes:k,styles:$,classes:N}})})}},g1={mixout:function(){return{icon:p1(m1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vc,n.nodeCallback=d1,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?re:i,s=n.callback,o=s===void 0?function(){}:s;return vc(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,p=i.extra;return new Promise(function(m,y){Promise.all([co(r,a),u.iconName?co(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var N=pa(x,2),w=N[0],k=N[1];m([n,Sa({icons:{main:w,mask:k},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:p,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=qr(a);l.length>0&&(r.style=l);var c;return ba(o)&&(c=yt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},_1={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Yr({type:"layer"},function(){an("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Ti(s)).join(" ")},children:o}]})}}}},v1={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Yr({type:"counter",content:n},function(){return an("beforeDOMElementCreation",{content:n,params:i}),Qb({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Ti(a))}})})}}}},y1={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?at:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,p=i.styles,m=p===void 0?{}:p;return Yr({type:"text",content:n},function(){return an("beforeDOMElementCreation",{content:n,params:i}),hc({content:n,transform:A(A({},at),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Ti(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(ih){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return R.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,hc({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},b1=new RegExp('"',"ug"),yc=[1105920,1112319];function w1(t){var e=t.replace(b1,""),n=Mb(e,0),i=n>=yc[0]&&n<=yc[1],r=e.length===2?e[0]===e[1]:!1;return{value:ro(r?e[0]:e),isSecondary:i||r}}function bc(t,e){var n="".concat(cb).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Un(t.children),o=s.filter(function(ye){return ye.getAttribute(io)===e})[0],a=Pt.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(pb),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:ie,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gi[p][l[2].toLowerCase()]:mb[p][c],y=w1(f),x=y.value,N=y.isSecondary,w=l[0].startsWith("FontAwesome"),k=Ea(m,x),D=k;if(w){var $=Ub(x);$.iconName&&$.prefix&&(k=$.iconName,m=$.prefix)}if(k&&!N&&(!o||o.getAttribute(ga)!==m||o.getAttribute(_a)!==D)){t.setAttribute(n,D),o&&t.removeChild(o);var Q=f1(),Te=Q.extra;Te.attributes[io]=e,co(k,m).then(function(ye){var We=Sa(A(A({},Q),{},{icons:{main:ye,mask:Ca()},prefix:m,iconName:D,extra:Te,watchable:!0})),Fe=re.createElement("svg");e==="::before"?t.insertBefore(Fe,t.firstChild):t.appendChild(Fe),Fe.outerHTML=We.map(function(ct){return ki(ct)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function E1(t){return Promise.all([bc(t,"::before"),bc(t,"::after")])}function C1(t){return t.parentNode!==document.head&&!~fb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(io)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wc(t){if(!!Et)return new Promise(function(e,n){var i=Un(t.querySelectorAll("*")).filter(C1).map(E1),r=Ia.begin("searchPseudoElements");Sh(),Promise.all(i).then(function(){r(),fo(),e()}).catch(function(){r(),fo(),n()})})}var S1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wc,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?re:i;R.searchPseudoElements&&wc(r)}}},Ec=!1,I1={mixout:function(){return{dom:{unwatch:function(){Sh(),Ec=!0}}}},hooks:function(){return{bootstrap:function(){gc(oo("mutationObserverCallbacks",{}))},noAuto:function(){a1()},watch:function(n){var i=n.observeMutationsRoot;Ec?fo():gc(oo("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Cc=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},x1={mixout:function(){return{parse:{transform:function(n){return Cc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Cc(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:p};return{tag:"g",attributes:A({},m.outer),children:[{tag:"g",attributes:A({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:A(A({},i.icon.attributes),m.path)}]}]}}}},ys={x:0,y:0,width:"100%",height:"100%"};function Sc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function T1(t){return t.tag==="g"?t.children:[t]}var A1={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Kr(r.split(" ").map(function(o){return o.trim()})):Ca();return s.prefix||(s.prefix=Mt()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,p=o.icon,m=xb({transform:l,containerWidth:f,iconWidth:c}),y={tag:"rect",attributes:A(A({},ys),{},{fill:"white"})},x=u.children?{children:u.children.map(Sc)}:{},N={tag:"g",attributes:A({},m.inner),children:[Sc(A({tag:u.tag,attributes:A(A({},u.attributes),m.path)},x))]},w={tag:"g",attributes:A({},m.outer),children:[N]},k="mask-".concat(a||yi()),D="clip-".concat(a||yi()),$={tag:"mask",attributes:A(A({},ys),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,w]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:T1(p)},$]};return i.push(Q,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(k,")")},ys)}),{children:i,attributes:r}}}},k1={provides:function(e){var n=!1;Pt.matchMedia&&(n=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:A(A({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},N1={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},O1=[kb,g1,_1,v1,y1,S1,I1,x1,A1,k1,N1];jb(O1,{mixoutsTo:Le});Le.noAuto;var xh=Le.config,R1=Le.library;Le.dom;var Cr=Le.parse;Le.findIconDefinition;Le.toHtml;var P1=Le.icon;Le.layer;var M1=Le.text;Le.counter;function Ic(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ic(Object(n),!0).forEach(function(i){Ae(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ic(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Sr(t){return Sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sr(t)}function Ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function L1(t,e){if(t==null)return{};var n=D1(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function ho(t){return F1(t)||B1(t)||$1(t)||H1()}function F1(t){if(Array.isArray(t))return po(t)}function B1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $1(t,e){if(!!t){if(typeof t=="string")return po(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return po(t,e)}}function po(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function H1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Th={exports:{}};(function(t){(function(e){var n=function(w,k,D){if(!c(k)||f(k)||p(k)||m(k)||l(k))return k;var $,Q=0,Te=0;if(u(k))for($=[],Te=k.length;Q<Te;Q++)$.push(n(w,k[Q],D));else{$={};for(var ye in k)Object.prototype.hasOwnProperty.call(k,ye)&&($[w(ye,D)]=n(w,k[ye],D))}return $},i=function(w,k){k=k||{};var D=k.separator||"_",$=k.split||/(?=[A-Z])/;return w.split($).join(D)},r=function(w){return y(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(k,D){return D?D.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var k=r(w);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(w,k){return i(w,k).toLowerCase()},a=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},p=function(w){return a.call(w)=="[object RegExp]"},m=function(w){return a.call(w)=="[object Boolean]"},y=function(w){return w=w-0,w===w},x=function(w,k){var D=k&&"process"in k?k.process:k;return typeof D!="function"?w:function($,Q){return D($,w,Q)}},N={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(w,k){return n(x(r,k),w)},decamelizeKeys:function(w,k){return n(x(o,k),w,k)},pascalizeKeys:function(w,k){return n(x(s,k),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(U1)})(Th);var W1=Th.exports,z1=["class","style"];function j1(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=W1.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function q1(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ta(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Ta(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=q1(u);break;case"style":l.style=j1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=L1(n,z1);return wu(t.tag,Ve(Ve(Ve({},e),{},{class:r.class,style:Ve(Ve({},r.style),o)},r.attrs),a),i)}var Ah=!1;try{Ah=!0}catch{}function V1(){if(!Ah&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ii(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ae({},t,e):{}}function K1(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ae(e,"fa-".concat(t.size),t.size!==null),Ae(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ae(e,"fa-pull-".concat(t.pull),t.pull!==null),Ae(e,"fa-swap-opacity",t.swapOpacity),Ae(e,"fa-bounce",t.bounce),Ae(e,"fa-shake",t.shake),Ae(e,"fa-beat",t.beat),Ae(e,"fa-fade",t.fade),Ae(e,"fa-beat-fade",t.beatFade),Ae(e,"fa-flash",t.flash),Ae(e,"fa-spin-pulse",t.spinPulse),Ae(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function xc(t){if(t&&Sr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Cr.icon)return Cr.icon(t);if(t===null)return null;if(Sr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Y1=Po({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Be(function(){return xc(e.icon)}),s=Be(function(){return ii("classes",K1(e))}),o=Be(function(){return ii("transform",typeof e.transform=="string"?Cr.transform(e.transform):e.transform)}),a=Be(function(){return ii("mask",xc(e.mask))}),l=Be(function(){return P1(r.value,Ve(Ve(Ve(Ve({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});wn(l,function(u){if(!u)return V1("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Be(function(){return l.value?Ta(l.value.abstract[0],{},i):null});return function(){return c.value}}});Po({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=xh.familyPrefix,s=Be(function(){return["".concat(r,"-layers")].concat(ho(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return wu("div",{class:s.value},i.default?i.default():[])}}});Po({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=xh.familyPrefix,s=Be(function(){return ii("classes",[].concat(ho(e.counter?["".concat(r,"-layers-counter")]:[]),ho(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Be(function(){return ii("transform",typeof e.transform=="string"?Cr.transform(e.transform):e.transform)}),a=Be(function(){var c=M1(e.value.toString(),Ve(Ve({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Be(function(){return Ta(a.value,{},i)});return function(){return l.value}}});var G1={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},X1={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305 264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z"]},Q1={prefix:"fas",iconName:"money-bills",icon:[640,512,[],"e1f3","M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM448 208c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"]},J1={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16zM160 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},Z1={prefix:"fas",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"]},e0={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},t0={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},n0={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},i0={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},r0={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},s0={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};R1.add(n0,X1,J1,Z1,e0,G1,Q1,s0,i0,t0,r0);Jp(Zy).component("font-awesome-icon",Y1).mount("#app");

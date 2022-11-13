(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Fo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ld=Fo(ad);function eu(t){return!!t||t===""}function $o(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ye(i)?fd(i):$o(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ye(t))return t;if(oe(t))return t}}const cd=/;(?![^(]*\))/g,ud=/:(.+)/;function fd(t){const e={};return t.split(cd).forEach(n=>{if(n){const i=n.split(ud);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wr(t){let e="";if(ye(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const i=Wr(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gr=t=>ye(t)?t:t==null?"":$(t)||oe(t)&&(t.toString===ru||!z(t.toString))?JSON.stringify(t,tu,2):String(t),tu=(t,e)=>e&&e.__v_isRef?tu(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:nu(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!$(e)&&!su(e)?String(e):e,Q={},bn=[],Ze=()=>{},hd=()=>!1,dd=/^on[^a-z]/,jr=t=>dd.test(t),Bo=t=>t.startsWith("onUpdate:"),Ae=Object.assign,zo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pd=Object.prototype.hasOwnProperty,Y=(t,e)=>pd.call(t,e),$=Array.isArray,wn=t=>Vr(t)==="[object Map]",nu=t=>Vr(t)==="[object Set]",z=t=>typeof t=="function",ye=t=>typeof t=="string",Ho=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",iu=t=>oe(t)&&z(t.then)&&z(t.catch),ru=Object.prototype.toString,Vr=t=>ru.call(t),md=t=>Vr(t).slice(8,-1),su=t=>Vr(t)==="[object Object]",Uo=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cr=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gd=/-(\w)/g,ct=Yr(t=>t.replace(gd,(e,n)=>n?n.toUpperCase():"")),_d=/\B([A-Z])/g,$n=Yr(t=>t.replace(_d,"-$1").toLowerCase()),qr=Yr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=Yr(t=>t?`on${qr(t)}`:""),ui=(t,e)=>!Object.is(t,e),ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_r=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let al;const vd=()=>al||(al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let st;class yd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}run(e){if(this.active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function bd(t,e=st){e&&e.active&&e.effects.push(t)}const Wo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ou=t=>(t.w&Mt)>0,au=t=>(t.n&Mt)>0,wd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mt},Cd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];ou(r)&&!au(r)?r.delete(t):e[n++]=r,r.w&=~Mt,r.n&=~Mt}e.length=n}},Vs=new WeakMap;let ei=0,Mt=1;const Ys=30;let Ye;const tn=Symbol(""),qs=Symbol("");class jo{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bd(this,i)}run(){if(!this.active)return this.fn();let e=Ye,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,At=!0,Mt=1<<++ei,ei<=Ys?wd(this):ll(this),this.fn()}finally{ei<=Ys&&Cd(this),Mt=1<<--ei,Ye=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(ll(this),this.onStop&&this.onStop(),this.active=!1)}}function ll(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const lu=[];function Bn(){lu.push(At),At=!1}function zn(){const t=lu.pop();At=t===void 0?!0:t}function $e(t,e,n){if(At&&Ye){let i=Vs.get(t);i||Vs.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Wo()),cu(r)}}function cu(t,e){let n=!1;ei<=Ys?au(t)||(t.n|=Mt,n=!ou(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function gt(t,e,n,i,r,s){const o=Vs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Uo(n)&&a.push(o.get("length")):(a.push(o.get(tn)),wn(t)&&a.push(o.get(qs)));break;case"delete":$(t)||(a.push(o.get(tn)),wn(t)&&a.push(o.get(qs)));break;case"set":wn(t)&&a.push(o.get(tn));break}if(a.length===1)a[0]&&Ks(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ks(Wo(l))}}function Ks(t,e){const n=$(t)?t:[...t];for(const i of n)i.computed&&cl(i);for(const i of n)i.computed||cl(i)}function cl(t,e){(t!==Ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ed=Fo("__proto__,__v_isRef,__isVue"),uu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ho)),xd=Vo(),Id=Vo(!1,!0),Sd=Vo(!0),ul=Td();function Td(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=K(this);for(let s=0,o=this.length;s<o;s++)$e(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bn();const i=K(this)[e].apply(this,n);return zn(),i}}),t}function Vo(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Wd:mu:e?pu:du).get(i))return i;const o=$(i);if(!t&&o&&Y(ul,r))return Reflect.get(ul,r,s);const a=Reflect.get(i,r,s);return(Ho(r)?uu.has(r):Ed(r))||(t||$e(i,"get",r),e)?a:xe(a)?o&&Uo(r)?a:a.value:oe(a)?t?gu(a):Ko(a):a}}const Ad=fu(),Nd=fu(!0);function fu(t=!1){return function(n,i,r,s){let o=n[i];if(kn(o)&&xe(o)&&!xe(r))return!1;if(!t&&(!vr(r)&&!kn(r)&&(o=K(o),r=K(r)),!$(n)&&xe(o)&&!xe(r)))return o.value=r,!0;const a=$(n)&&Uo(i)?Number(i)<n.length:Y(n,i),l=Reflect.set(n,i,r,s);return n===K(s)&&(a?ui(r,o)&&gt(n,"set",i,r):gt(n,"add",i,r)),l}}function kd(t,e){const n=Y(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&gt(t,"delete",e,void 0),i}function Od(t,e){const n=Reflect.has(t,e);return(!Ho(e)||!uu.has(e))&&$e(t,"has",e),n}function Pd(t){return $e(t,"iterate",$(t)?"length":tn),Reflect.ownKeys(t)}const hu={get:xd,set:Ad,deleteProperty:kd,has:Od,ownKeys:Pd},Rd={get:Sd,set(t,e){return!0},deleteProperty(t,e){return!0}},Md=Ae({},hu,{get:Id,set:Nd}),Yo=t=>t,Kr=t=>Reflect.getPrototypeOf(t);function qi(t,e,n=!1,i=!1){t=t.__v_raw;const r=K(t),s=K(e);n||(e!==s&&$e(r,"get",e),$e(r,"get",s));const{has:o}=Kr(r),a=i?Yo:n?Qo:fi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ki(t,e=!1){const n=this.__v_raw,i=K(n),r=K(t);return e||(t!==r&&$e(i,"has",t),$e(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Gi(t,e=!1){return t=t.__v_raw,!e&&$e(K(t),"iterate",tn),Reflect.get(t,"size",t)}function fl(t){t=K(t);const e=K(this);return Kr(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function hl(t,e){e=K(e);const n=K(this),{has:i,get:r}=Kr(n);let s=i.call(n,t);s||(t=K(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ui(e,o)&&gt(n,"set",t,e):gt(n,"add",t,e),this}function dl(t){const e=K(this),{has:n,get:i}=Kr(e);let r=n.call(e,t);r||(t=K(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gt(e,"delete",t,void 0),s}function pl(){const t=K(this),e=t.size!==0,n=t.clear();return e&&gt(t,"clear",void 0,void 0),n}function Qi(t,e){return function(i,r){const s=this,o=s.__v_raw,a=K(o),l=e?Yo:t?Qo:fi;return!t&&$e(a,"iterate",tn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Xi(t,e,n){return function(...i){const r=this.__v_raw,s=K(r),o=wn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Yo:e?Qo:fi;return!e&&$e(s,"iterate",l?qs:tn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:this}}function Dd(){const t={get(s){return qi(this,s)},get size(){return Gi(this)},has:Ki,add:fl,set:hl,delete:dl,clear:pl,forEach:Qi(!1,!1)},e={get(s){return qi(this,s,!1,!0)},get size(){return Gi(this)},has:Ki,add:fl,set:hl,delete:dl,clear:pl,forEach:Qi(!1,!0)},n={get(s){return qi(this,s,!0)},get size(){return Gi(this,!0)},has(s){return Ki.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Qi(!0,!1)},i={get(s){return qi(this,s,!0,!0)},get size(){return Gi(this,!0)},has(s){return Ki.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Xi(s,!1,!1),n[s]=Xi(s,!0,!1),e[s]=Xi(s,!1,!0),i[s]=Xi(s,!0,!0)}),[t,n,e,i]}const[Ld,Fd,$d,Bd]=Dd();function qo(t,e){const n=e?t?Bd:$d:t?Fd:Ld;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Y(n,r)&&r in i?n:i,r,s)}const zd={get:qo(!1,!1)},Hd={get:qo(!1,!0)},Ud={get:qo(!0,!1)},du=new WeakMap,pu=new WeakMap,mu=new WeakMap,Wd=new WeakMap;function jd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vd(t){return t.__v_skip||!Object.isExtensible(t)?0:jd(md(t))}function Ko(t){return kn(t)?t:Go(t,!1,hu,zd,du)}function Yd(t){return Go(t,!1,Md,Hd,pu)}function gu(t){return Go(t,!0,Rd,Ud,mu)}function Go(t,e,n,i,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Vd(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Cn(t){return kn(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function vr(t){return!!(t&&t.__v_isShallow)}function _u(t){return Cn(t)||kn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function vu(t){return _r(t,"__v_skip",!0),t}const fi=t=>oe(t)?Ko(t):t,Qo=t=>oe(t)?gu(t):t;function yu(t){At&&Ye&&(t=K(t),cu(t.dep||(t.dep=Wo())))}function bu(t,e){t=K(t),t.dep&&Ks(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function Ve(t){return qd(t,!1)}function qd(t,e){return xe(t)?t:new Kd(t,e)}class Kd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:fi(e)}get value(){return yu(this),this._value}set value(e){const n=this.__v_isShallow||vr(e)||kn(e);e=n?e:K(e),ui(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fi(e),bu(this))}}function Gr(t){return xe(t)?t.value:t}const Gd={get:(t,e,n)=>Gr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function wu(t){return Cn(t)?t:new Proxy(t,Gd)}var Cu;class Qd{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Cu]=!1,this._dirty=!0,this.effect=new jo(e,()=>{this._dirty||(this._dirty=!0,bu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=K(this);return yu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cu="__v_isReadonly";function Xd(t,e,n=!1){let i,r;const s=z(t);return s?(i=t,r=Ze):(i=t.get,r=t.set),new Qd(i,r,s||!r,n)}function Nt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Qr(s,e,n)}return r}function et(t,e,n,i){if(z(t)){const s=Nt(t,e,n,i);return s&&iu(s)&&s.catch(o=>{Qr(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(et(t[s],e,n,i));return r}function Qr(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Nt(l,null,10,[t,o,a]);return}}Jd(t,n,r,i)}function Jd(t,e,n,i=!0){console.error(t)}let hi=!1,Gs=!1;const Ce=[];let at=0;const En=[];let dt=null,Kt=0;const Eu=Promise.resolve();let Xo=null;function xu(t){const e=Xo||Eu;return t?e.then(this?t.bind(this):t):e}function Zd(t){let e=at+1,n=Ce.length;for(;e<n;){const i=e+n>>>1;di(Ce[i])<t?e=i+1:n=i}return e}function Jo(t){(!Ce.length||!Ce.includes(t,hi&&t.allowRecurse?at+1:at))&&(t.id==null?Ce.push(t):Ce.splice(Zd(t.id),0,t),Iu())}function Iu(){!hi&&!Gs&&(Gs=!0,Xo=Eu.then(Tu))}function ep(t){const e=Ce.indexOf(t);e>at&&Ce.splice(e,1)}function tp(t){$(t)?En.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Kt+1:Kt))&&En.push(t),Iu()}function ml(t,e=hi?at+1:0){for(;e<Ce.length;e++){const n=Ce[e];n&&n.pre&&(Ce.splice(e,1),e--,n())}}function Su(t){if(En.length){const e=[...new Set(En)];if(En.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,i)=>di(n)-di(i)),Kt=0;Kt<dt.length;Kt++)dt[Kt]();dt=null,Kt=0}}const di=t=>t.id==null?1/0:t.id,np=(t,e)=>{const n=di(t)-di(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tu(t){Gs=!1,hi=!0,Ce.sort(np);const e=Ze;try{for(at=0;at<Ce.length;at++){const n=Ce[at];n&&n.active!==!1&&Nt(n,null,14)}}finally{at=0,Ce.length=0,Su(),hi=!1,Xo=null,(Ce.length||En.length)&&Tu()}}function ip(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Q;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Q;h&&(r=n.map(m=>m.trim())),f&&(r=n.map(js))}let a,l=i[a=Cs(e)]||i[a=Cs(ct(e))];!l&&s&&(l=i[a=Cs($n(e))]),l&&et(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,et(c,t,6,r)}}function Au(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!z(t)){const l=c=>{const u=Au(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(oe(t)&&i.set(t,null),null):($(s)?s.forEach(l=>o[l]=null):Ae(o,s),oe(t)&&i.set(t,o),o)}function Xr(t,e){return!t||!jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,$n(e))||Y(t,e))}let Ue=null,Nu=null;function yr(t){const e=Ue;return Ue=t,Nu=t&&t.type.__scopeId||null,e}function rp(t,e=Ue,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Il(-1);const s=yr(e);let o;try{o=t(...r)}finally{yr(s),i._d&&Il(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Es(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:C}=t;let P,w;const N=yr(t);try{if(n.shapeFlag&4){const H=r||i;P=ot(u.call(H,H,f,s,m,h,_)),w=l}else{const H=e;P=ot(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),w=e.props?l:sp(l)}}catch(H){ni.length=0,Qr(H,t,1),P=fe(sn)}let L=P;if(w&&C!==!1){const H=Object.keys(w),{shapeFlag:J}=L;H.length&&J&7&&(o&&H.some(Bo)&&(w=op(w,o)),L=On(L,w))}return n.dirs&&(L=On(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),P=L,yr(N),P}const sp=t=>{let e;for(const n in t)(n==="class"||n==="style"||jr(n))&&((e||(e={}))[n]=t[n]);return e},op=(t,e)=>{const n={};for(const i in t)(!Bo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function ap(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?gl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Xr(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gl(i,o,c):!0:!!o;return!1}function gl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Xr(n,s))return!0}return!1}function lp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cp=t=>t.__isSuspense;function up(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):tp(t)}function fp(t,e){if(ve){let n=ve.provides;const i=ve.parent&&ve.parent.provides;i===n&&(n=ve.provides=Object.create(i)),n[t]=e}}function xs(t,e,n=!1){const i=ve||Ue;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&z(e)?e.call(i.proxy):e}}function hp(t,e){return Zo(t,null,{flush:"post"})}const _l={};function xn(t,e,n){return Zo(t,e,n)}function Zo(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Q){const a=ve;let l,c=!1,u=!1;if(xe(t)?(l=()=>t.value,c=vr(t)):Cn(t)?(l=()=>t,i=!0):$(t)?(u=!0,c=t.some(w=>Cn(w)||vr(w)),l=()=>t.map(w=>{if(xe(w))return w.value;if(Cn(w))return Qt(w);if(z(w))return Nt(w,a,2)})):z(t)?e?l=()=>Nt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),et(t,a,3,[h])}:l=Ze,e&&i){const w=l;l=()=>Qt(w())}let f,h=w=>{f=P.onStop=()=>{Nt(w,a,4)}};if(mi)return h=Ze,e?n&&et(e,a,3,[l(),u?[]:void 0,h]):l(),Ze;let m=u?[]:_l;const _=()=>{if(!!P.active)if(e){const w=P.run();(i||c||(u?w.some((N,L)=>ui(N,m[L])):ui(w,m)))&&(f&&f(),et(e,a,3,[w,m===_l?void 0:m,h]),m=w)}else P.run()};_.allowRecurse=!!e;let C;r==="sync"?C=_:r==="post"?C=()=>Oe(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),C=()=>Jo(_));const P=new jo(l,C);return e?n?_():m=P.run():r==="post"?Oe(P.run.bind(P),a&&a.suspense):P.run(),()=>{P.stop(),a&&a.scope&&zo(a.scope.effects,P)}}function dp(t,e,n){const i=this.proxy,r=ye(t)?t.includes(".")?ku(i,t):()=>i[t]:t.bind(i,i);let s;z(e)?s=e:(s=e.handler,n=e);const o=ve;Pn(this);const a=Zo(r,s.bind(i),n);return o?Pn(o):nn(),a}function ku(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Qt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Qt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Qt(t[n],e);else if(nu(t)||wn(t))t.forEach(n=>{Qt(n,e)});else if(su(t))for(const n in t)Qt(t[n],e);return t}function ea(t){return z(t)?{setup:t,name:t.name}:t}const fr=t=>!!t.type.__asyncLoader,Ou=t=>t.type.__isKeepAlive;function pp(t,e){Pu(t,"a",e)}function mp(t,e){Pu(t,"da",e)}function Pu(t,e,n=ve){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Jr(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ou(r.parent.vnode)&&gp(i,e,n,r),r=r.parent}}function gp(t,e,n,i){const r=Jr(e,t,i,!0);ta(()=>{zo(i[e],r)},n)}function Jr(t,e,n=ve,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bn(),Pn(n);const a=et(e,n,t,o);return nn(),zn(),a});return i?r.unshift(s):r.push(s),s}}const wt=t=>(e,n=ve)=>(!mi||t==="sp")&&Jr(t,(...i)=>e(...i),n),_p=wt("bm"),Zr=wt("m"),vp=wt("bu"),yp=wt("u"),bp=wt("bum"),ta=wt("um"),wp=wt("sp"),Cp=wt("rtg"),Ep=wt("rtc");function xp(t,e=ve){Jr("ec",t,e)}function Is(t,e){const n=Ue;if(n===null)return t;const i=is(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Q]=e[s];z(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Wt(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Bn(),et(l,n,8,[t.el,a,t,e]),zn())}}const Ru="components";function na(t,e){return Sp(Ru,t,!0,e)||t}const Ip=Symbol();function Sp(t,e,n=!0,i=!1){const r=Ue||ve;if(r){const s=r.type;if(t===Ru){const a=nm(s,!1);if(a&&(a===e||a===ct(e)||a===qr(ct(e))))return s}const o=vl(r[t]||s[t],e)||vl(r.appContext[t],e);return!o&&i?s:o}}function vl(t,e){return t&&(t[e]||t[ct(e)]||t[qr(ct(e))])}function Mu(t,e,n,i){let r;const s=n&&n[i];if($(t)||ye(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Qs=t=>t?Vu(t)?is(t)||t.proxy:Qs(t.parent):null,br=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qs(t.parent),$root:t=>Qs(t.root),$emit:t=>t.emit,$options:t=>ia(t),$forceUpdate:t=>t.f||(t.f=()=>Jo(t.update)),$nextTick:t=>t.n||(t.n=xu.bind(t.proxy)),$watch:t=>dp.bind(t)}),Tp={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==Q&&Y(i,e))return o[e]=1,i[e];if(r!==Q&&Y(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,s[e];if(n!==Q&&Y(n,e))return o[e]=4,n[e];Xs&&(o[e]=0)}}const u=br[e];let f,h;if(u)return e==="$attrs"&&$e(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Q&&Y(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Y(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==Q&&Y(r,e)?(r[e]=n,!0):i!==Q&&Y(i,e)?(i[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Q&&Y(t,o)||e!==Q&&Y(e,o)||(a=s[0])&&Y(a,o)||Y(i,o)||Y(br,o)||Y(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xs=!0;function Ap(t){const e=ia(t),n=t.proxy,i=t.ctx;Xs=!1,e.beforeCreate&&yl(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:C,deactivated:P,beforeDestroy:w,beforeUnmount:N,destroyed:L,unmounted:H,render:J,renderTracked:Ne,renderTriggered:be,errorCaptured:We,serverPrefetch:ze,expose:ft,inheritAttrs:qn,components:Wi,directives:ji,filters:ys}=e;if(c&&Np(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const Z=o[ae];z(Z)&&(i[ae]=Z.bind(n))}if(r){const ae=r.call(n,n);oe(ae)&&(t.data=Ko(ae))}if(Xs=!0,s)for(const ae in s){const Z=s[ae],Ht=z(Z)?Z.bind(n,n):z(Z.get)?Z.get.bind(n,n):Ze,Vi=!z(Z)&&z(Z.set)?Z.set.bind(n):Ze,Ut=Fe({get:Ht,set:Vi});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:nt=>Ut.value=nt})}if(a)for(const ae in a)Du(a[ae],i,n,ae);if(l){const ae=z(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(Z=>{fp(Z,ae[Z])})}u&&yl(u,t,"c");function Ie(ae,Z){$(Z)?Z.forEach(Ht=>ae(Ht.bind(n))):Z&&ae(Z.bind(n))}if(Ie(_p,f),Ie(Zr,h),Ie(vp,m),Ie(yp,_),Ie(pp,C),Ie(mp,P),Ie(xp,We),Ie(Ep,Ne),Ie(Cp,be),Ie(bp,N),Ie(ta,H),Ie(wp,ze),$(ft))if(ft.length){const ae=t.exposed||(t.exposed={});ft.forEach(Z=>{Object.defineProperty(ae,Z,{get:()=>n[Z],set:Ht=>n[Z]=Ht})})}else t.exposed||(t.exposed={});J&&t.render===Ze&&(t.render=J),qn!=null&&(t.inheritAttrs=qn),Wi&&(t.components=Wi),ji&&(t.directives=ji)}function Np(t,e,n=Ze,i=!1){$(t)&&(t=Js(t));for(const r in t){const s=t[r];let o;oe(s)?"default"in s?o=xs(s.from||r,s.default,!0):o=xs(s.from||r):o=xs(s),xe(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function yl(t,e,n){et($(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Du(t,e,n,i){const r=i.includes(".")?ku(n,i):()=>n[i];if(ye(t)){const s=e[t];z(s)&&xn(r,s)}else if(z(t))xn(r,t.bind(n));else if(oe(t))if($(t))t.forEach(s=>Du(s,e,n,i));else{const s=z(t.handler)?t.handler.bind(n):e[t.handler];z(s)&&xn(r,s,t)}}function ia(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>wr(l,c,o,!0)),wr(l,e,o)),oe(e)&&s.set(e,l),l}function wr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&wr(t,s,n,!0),r&&r.forEach(o=>wr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=kp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kp={data:bl,props:Vt,emits:Vt,methods:Vt,computed:Vt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Vt,directives:Vt,watch:Pp,provide:bl,inject:Op};function bl(t,e){return e?t?function(){return Ae(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Op(t,e){return Vt(Js(t),Js(e))}function Js(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Vt(t,e){return t?Ae(Ae(Object.create(null),t),e):e}function Pp(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const i in e)n[i]=Se(t[i],e[i]);return n}function Rp(t,e,n,i=!1){const r={},s={};_r(s,ts,1),t.propsDefaults=Object.create(null),Lu(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Yd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Mp(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=K(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Xr(t.emitsOptions,h))continue;const m=e[h];if(l)if(Y(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=ct(h);r[_]=Zs(l,a,_,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Lu(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Y(e,f)&&((u=$n(f))===f||!Y(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Zs(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Y(e,f)&&!0)&&(delete s[f],c=!0)}c&&gt(t,"set","$attrs")}function Lu(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(cr(l))continue;const c=e[l];let u;r&&Y(r,u=ct(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=K(n),c=a||Q;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Zs(r,l,f,c[f],t,!Y(c,f))}}return o}function Zs(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Pn(r),i=c[n]=l.call(null,e),nn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$n(n))&&(i=!0))}return i}function Fu(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!z(t)){const u=f=>{l=!0;const[h,m]=Fu(f,e,!0);Ae(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return oe(t)&&i.set(t,bn),bn;if($(s))for(let u=0;u<s.length;u++){const f=ct(s[u]);wl(f)&&(o[f]=Q)}else if(s)for(const u in s){const f=ct(u);if(wl(f)){const h=s[u],m=o[f]=$(h)||z(h)?{type:h}:h;if(m){const _=xl(Boolean,m.type),C=xl(String,m.type);m[0]=_>-1,m[1]=C<0||_<C,(_>-1||Y(m,"default"))&&a.push(f)}}}const c=[o,a];return oe(t)&&i.set(t,c),c}function wl(t){return t[0]!=="$"}function Cl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function El(t,e){return Cl(t)===Cl(e)}function xl(t,e){return $(e)?e.findIndex(n=>El(n,t)):z(e)&&El(e,t)?0:-1}const $u=t=>t[0]==="_"||t==="$stable",ra=t=>$(t)?t.map(ot):[ot(t)],Dp=(t,e,n)=>{if(e._n)return e;const i=rp((...r)=>ra(e(...r)),n);return i._c=!1,i},Bu=(t,e,n)=>{const i=t._ctx;for(const r in t){if($u(r))continue;const s=t[r];if(z(s))e[r]=Dp(r,s,i);else if(s!=null){const o=ra(s);e[r]=()=>o}}},zu=(t,e)=>{const n=ra(e);t.slots.default=()=>n},Lp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),_r(e,"_",n)):Bu(e,t.slots={})}else t.slots={},e&&zu(t,e);_r(t.slots,ts,1)},Fp=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Q;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ae(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Bu(e,r)),o=e}else e&&(zu(t,e),o={default:1});if(s)for(const a in r)!$u(a)&&!(a in o)&&delete r[a]};function Hu(){return{app:null,config:{isNativeTag:hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function Bp(t,e){return function(i,r=null){z(i)||(i=Object.assign({},i)),r!=null&&!oe(r)&&(r=null);const s=Hu(),o=new Set;let a=!1;const l=s.app={_uid:$p++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:rm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...u)):z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=fe(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,is(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function eo(t,e,n,i,r=!1){if($(t)){t.forEach((h,m)=>eo(h,e&&($(e)?e[m]:e),n,i,r));return}if(fr(i)&&!r)return;const s=i.shapeFlag&4?is(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,Y(f,c)&&(f[c]=null)):xe(c)&&(c.value=null)),z(l))Nt(l,a,12,[o,u]);else{const h=ye(l),m=xe(l);if(h||m){const _=()=>{if(t.f){const C=h?Y(f,l)?f[l]:u[l]:l.value;r?$(C)&&zo(C,s):$(C)?C.includes(s)||C.push(s):h?(u[l]=[s],Y(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Y(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Oe(_,n)):_()}}}const Oe=up;function zp(t){return Hp(t)}function Hp(t,e){const n=vd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ze,insertStaticContent:_}=t,C=(d,p,g,y=null,v=null,I=null,T=!1,E=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Gn(d,p)&&(y=Yi(d),nt(d,v,I,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:R,shapeFlag:k}=p;switch(b){case sa:P(d,p,g,y);break;case sn:w(d,p,g,y);break;case hr:d==null&&N(p,g,y,T);break;case Pe:Wi(d,p,g,y,v,I,T,E,S);break;default:k&1?J(d,p,g,y,v,I,T,E,S):k&6?ji(d,p,g,y,v,I,T,E,S):(k&64||k&128)&&b.process(d,p,g,y,v,I,T,E,S,dn)}R!=null&&v&&eo(R,d&&d.ref,I,p||d,!p)},P=(d,p,g,y)=>{if(d==null)i(p.el=a(p.children),g,y);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},w=(d,p,g,y)=>{d==null?i(p.el=l(p.children||""),g,y):p.el=d.el},N=(d,p,g,y)=>{[d.el,d.anchor]=_(d.children,p,g,y,d.el,d.anchor)},L=({el:d,anchor:p},g,y)=>{let v;for(;d&&d!==p;)v=h(d),i(d,g,y),d=v;i(p,g,y)},H=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},J=(d,p,g,y,v,I,T,E,S)=>{T=T||p.type==="svg",d==null?Ne(p,g,y,v,I,T,E,S):ze(d,p,v,I,T,E,S)},Ne=(d,p,g,y,v,I,T,E)=>{let S,b;const{type:R,props:k,shapeFlag:M,transition:F,dirs:j}=d;if(S=d.el=o(d.type,I,k&&k.is,k),M&8?u(S,d.children):M&16&&We(d.children,S,null,y,v,I&&R!=="foreignObject",T,E),j&&Wt(d,null,y,"created"),k){for(const G in k)G!=="value"&&!cr(G)&&s(S,G,null,k[G],I,d.children,y,v,ht);"value"in k&&s(S,"value",null,k.value),(b=k.onVnodeBeforeMount)&&rt(b,y,d)}be(S,d,d.scopeId,T,y),j&&Wt(d,null,y,"beforeMount");const ee=(!v||v&&!v.pendingBranch)&&F&&!F.persisted;ee&&F.beforeEnter(S),i(S,p,g),((b=k&&k.onVnodeMounted)||ee||j)&&Oe(()=>{b&&rt(b,y,d),ee&&F.enter(S),j&&Wt(d,null,y,"mounted")},v)},be=(d,p,g,y,v)=>{if(g&&m(d,g),y)for(let I=0;I<y.length;I++)m(d,y[I]);if(v){let I=v.subTree;if(p===I){const T=v.vnode;be(d,T,T.scopeId,T.slotScopeIds,v.parent)}}},We=(d,p,g,y,v,I,T,E,S=0)=>{for(let b=S;b<d.length;b++){const R=d[b]=E?Tt(d[b]):ot(d[b]);C(null,R,p,g,y,v,I,T,E)}},ze=(d,p,g,y,v,I,T)=>{const E=p.el=d.el;let{patchFlag:S,dynamicChildren:b,dirs:R}=p;S|=d.patchFlag&16;const k=d.props||Q,M=p.props||Q;let F;g&&jt(g,!1),(F=M.onVnodeBeforeUpdate)&&rt(F,g,p,d),R&&Wt(p,d,g,"beforeUpdate"),g&&jt(g,!0);const j=v&&p.type!=="foreignObject";if(b?ft(d.dynamicChildren,b,E,g,y,j,I):T||Z(d,p,E,null,g,y,j,I,!1),S>0){if(S&16)qn(E,p,k,M,g,y,v);else if(S&2&&k.class!==M.class&&s(E,"class",null,M.class,v),S&4&&s(E,"style",k.style,M.style,v),S&8){const ee=p.dynamicProps;for(let G=0;G<ee.length;G++){const ue=ee[G],je=k[ue],pn=M[ue];(pn!==je||ue==="value")&&s(E,ue,je,pn,v,d.children,g,y,ht)}}S&1&&d.children!==p.children&&u(E,p.children)}else!T&&b==null&&qn(E,p,k,M,g,y,v);((F=M.onVnodeUpdated)||R)&&Oe(()=>{F&&rt(F,g,p,d),R&&Wt(p,d,g,"updated")},y)},ft=(d,p,g,y,v,I,T)=>{for(let E=0;E<p.length;E++){const S=d[E],b=p[E],R=S.el&&(S.type===Pe||!Gn(S,b)||S.shapeFlag&70)?f(S.el):g;C(S,b,R,null,y,v,I,T,!0)}},qn=(d,p,g,y,v,I,T)=>{if(g!==y){if(g!==Q)for(const E in g)!cr(E)&&!(E in y)&&s(d,E,g[E],null,T,p.children,v,I,ht);for(const E in y){if(cr(E))continue;const S=y[E],b=g[E];S!==b&&E!=="value"&&s(d,E,b,S,T,p.children,v,I,ht)}"value"in y&&s(d,"value",g.value,y.value)}},Wi=(d,p,g,y,v,I,T,E,S)=>{const b=p.el=d?d.el:a(""),R=p.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:F}=p;F&&(E=E?E.concat(F):F),d==null?(i(b,g,y),i(R,g,y),We(p.children,g,R,v,I,T,E,S)):k>0&&k&64&&M&&d.dynamicChildren?(ft(d.dynamicChildren,M,g,v,I,T,E),(p.key!=null||v&&p===v.subTree)&&Uu(d,p,!0)):Z(d,p,g,R,v,I,T,E,S)},ji=(d,p,g,y,v,I,T,E,S)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?v.ctx.activate(p,g,y,T,S):ys(p,g,y,v,I,T,S):tl(d,p,S)},ys=(d,p,g,y,v,I,T)=>{const E=d.component=Qp(d,y,v);if(Ou(d)&&(E.ctx.renderer=dn),Jp(E),E.asyncDep){if(v&&v.registerDep(E,Ie),!d.el){const S=E.subTree=fe(sn);w(null,S,p,g)}return}Ie(E,d,p,g,v,I,T)},tl=(d,p,g)=>{const y=p.component=d.component;if(ap(d,p,g))if(y.asyncDep&&!y.asyncResolved){ae(y,p,g);return}else y.next=p,ep(y.update),y.update();else p.el=d.el,y.vnode=p},Ie=(d,p,g,y,v,I,T)=>{const E=()=>{if(d.isMounted){let{next:R,bu:k,u:M,parent:F,vnode:j}=d,ee=R,G;jt(d,!1),R?(R.el=j.el,ae(d,R,T)):R=j,k&&ur(k),(G=R.props&&R.props.onVnodeBeforeUpdate)&&rt(G,F,R,j),jt(d,!0);const ue=Es(d),je=d.subTree;d.subTree=ue,C(je,ue,f(je.el),Yi(je),d,v,I),R.el=ue.el,ee===null&&lp(d,ue.el),M&&Oe(M,v),(G=R.props&&R.props.onVnodeUpdated)&&Oe(()=>rt(G,F,R,j),v)}else{let R;const{el:k,props:M}=p,{bm:F,m:j,parent:ee}=d,G=fr(p);if(jt(d,!1),F&&ur(F),!G&&(R=M&&M.onVnodeBeforeMount)&&rt(R,ee,p),jt(d,!0),k&&ws){const ue=()=>{d.subTree=Es(d),ws(k,d.subTree,d,v,null)};G?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=Es(d);C(null,ue,g,y,d,v,I),p.el=ue.el}if(j&&Oe(j,v),!G&&(R=M&&M.onVnodeMounted)){const ue=p;Oe(()=>rt(R,ee,ue),v)}(p.shapeFlag&256||ee&&fr(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Oe(d.a,v),d.isMounted=!0,p=g=y=null}},S=d.effect=new jo(E,()=>Jo(b),d.scope),b=d.update=()=>S.run();b.id=d.uid,jt(d,!0),b()},ae=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Mp(d,p.props,y,g),Fp(d,p.children,g),Bn(),ml(),zn()},Z=(d,p,g,y,v,I,T,E,S=!1)=>{const b=d&&d.children,R=d?d.shapeFlag:0,k=p.children,{patchFlag:M,shapeFlag:F}=p;if(M>0){if(M&128){Vi(b,k,g,y,v,I,T,E,S);return}else if(M&256){Ht(b,k,g,y,v,I,T,E,S);return}}F&8?(R&16&&ht(b,v,I),k!==b&&u(g,k)):R&16?F&16?Vi(b,k,g,y,v,I,T,E,S):ht(b,v,I,!0):(R&8&&u(g,""),F&16&&We(k,g,y,v,I,T,E,S))},Ht=(d,p,g,y,v,I,T,E,S)=>{d=d||bn,p=p||bn;const b=d.length,R=p.length,k=Math.min(b,R);let M;for(M=0;M<k;M++){const F=p[M]=S?Tt(p[M]):ot(p[M]);C(d[M],F,g,null,v,I,T,E,S)}b>R?ht(d,v,I,!0,!1,k):We(p,g,y,v,I,T,E,S,k)},Vi=(d,p,g,y,v,I,T,E,S)=>{let b=0;const R=p.length;let k=d.length-1,M=R-1;for(;b<=k&&b<=M;){const F=d[b],j=p[b]=S?Tt(p[b]):ot(p[b]);if(Gn(F,j))C(F,j,g,null,v,I,T,E,S);else break;b++}for(;b<=k&&b<=M;){const F=d[k],j=p[M]=S?Tt(p[M]):ot(p[M]);if(Gn(F,j))C(F,j,g,null,v,I,T,E,S);else break;k--,M--}if(b>k){if(b<=M){const F=M+1,j=F<R?p[F].el:y;for(;b<=M;)C(null,p[b]=S?Tt(p[b]):ot(p[b]),g,j,v,I,T,E,S),b++}}else if(b>M)for(;b<=k;)nt(d[b],v,I,!0),b++;else{const F=b,j=b,ee=new Map;for(b=j;b<=M;b++){const Le=p[b]=S?Tt(p[b]):ot(p[b]);Le.key!=null&&ee.set(Le.key,b)}let G,ue=0;const je=M-j+1;let pn=!1,rl=0;const Kn=new Array(je);for(b=0;b<je;b++)Kn[b]=0;for(b=F;b<=k;b++){const Le=d[b];if(ue>=je){nt(Le,v,I,!0);continue}let it;if(Le.key!=null)it=ee.get(Le.key);else for(G=j;G<=M;G++)if(Kn[G-j]===0&&Gn(Le,p[G])){it=G;break}it===void 0?nt(Le,v,I,!0):(Kn[it-j]=b+1,it>=rl?rl=it:pn=!0,C(Le,p[it],g,null,v,I,T,E,S),ue++)}const sl=pn?Up(Kn):bn;for(G=sl.length-1,b=je-1;b>=0;b--){const Le=j+b,it=p[Le],ol=Le+1<R?p[Le+1].el:y;Kn[b]===0?C(null,it,g,ol,v,I,T,E,S):pn&&(G<0||b!==sl[G]?Ut(it,g,ol,2):G--)}}},Ut=(d,p,g,y,v=null)=>{const{el:I,type:T,transition:E,children:S,shapeFlag:b}=d;if(b&6){Ut(d.component.subTree,p,g,y);return}if(b&128){d.suspense.move(p,g,y);return}if(b&64){T.move(d,p,g,dn);return}if(T===Pe){i(I,p,g);for(let k=0;k<S.length;k++)Ut(S[k],p,g,y);i(d.anchor,p,g);return}if(T===hr){L(d,p,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(I),i(I,p,g),Oe(()=>E.enter(I),v);else{const{leave:k,delayLeave:M,afterLeave:F}=E,j=()=>i(I,p,g),ee=()=>{k(I,()=>{j(),F&&F()})};M?M(I,j,ee):ee()}else i(I,p,g)},nt=(d,p,g,y=!1,v=!1)=>{const{type:I,props:T,ref:E,children:S,dynamicChildren:b,shapeFlag:R,patchFlag:k,dirs:M}=d;if(E!=null&&eo(E,null,g,d,!0),R&256){p.ctx.deactivate(d);return}const F=R&1&&M,j=!fr(d);let ee;if(j&&(ee=T&&T.onVnodeBeforeUnmount)&&rt(ee,p,d),R&6)od(d.component,g,y);else{if(R&128){d.suspense.unmount(g,y);return}F&&Wt(d,null,p,"beforeUnmount"),R&64?d.type.remove(d,p,g,v,dn,y):b&&(I!==Pe||k>0&&k&64)?ht(b,p,g,!1,!0):(I===Pe&&k&384||!v&&R&16)&&ht(S,p,g),y&&nl(d)}(j&&(ee=T&&T.onVnodeUnmounted)||F)&&Oe(()=>{ee&&rt(ee,p,d),F&&Wt(d,null,p,"unmounted")},g)},nl=d=>{const{type:p,el:g,anchor:y,transition:v}=d;if(p===Pe){sd(g,y);return}if(p===hr){H(d);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:E}=v,S=()=>T(g,I);E?E(d.el,I,S):S()}else I()},sd=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},od=(d,p,g)=>{const{bum:y,scope:v,update:I,subTree:T,um:E}=d;y&&ur(y),v.stop(),I&&(I.active=!1,nt(T,d,p,g)),E&&Oe(E,p),Oe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ht=(d,p,g,y=!1,v=!1,I=0)=>{for(let T=I;T<d.length;T++)nt(d[T],p,g,y,v)},Yi=d=>d.shapeFlag&6?Yi(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),il=(d,p,g)=>{d==null?p._vnode&&nt(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),ml(),Su(),p._vnode=d},dn={p:C,um:nt,m:Ut,r:nl,mt:ys,mc:We,pc:Z,pbc:ft,n:Yi,o:t};let bs,ws;return e&&([bs,ws]=e(dn)),{render:il,hydrate:bs,createApp:Bp(il,bs)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uu(t,e,n=!1){const i=t.children,r=e.children;if($(i)&&$(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Tt(r[s]),a.el=o.el),n||Uu(o,a))}}function Up(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Wp=t=>t.__isTeleport,Pe=Symbol(void 0),sa=Symbol(void 0),sn=Symbol(void 0),hr=Symbol(void 0),ni=[];let Ge=null;function Ee(t=!1){ni.push(Ge=t?null:[])}function jp(){ni.pop(),Ge=ni[ni.length-1]||null}let pi=1;function Il(t){pi+=t}function Wu(t){return t.dynamicChildren=pi>0?Ge||bn:null,jp(),pi>0&&Ge&&Ge.push(t),t}function He(t,e,n,i,r,s){return Wu(B(t,e,n,i,r,s,!0))}function es(t,e,n,i,r){return Wu(fe(t,e,n,i,r,!0))}function to(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",ju=({key:t})=>t!=null?t:null,dr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||xe(t)||z(t)?{i:Ue,r:t,k:e,f:!!n}:t:null;function B(t,e=null,n=null,i=0,r=null,s=t===Pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ju(e),ref:e&&dr(e),scopeId:Nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(aa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),pi>0&&!o&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const fe=Vp;function Vp(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Ip)&&(t=sn),to(t)){const a=On(t,e,!0);return n&&aa(a,n),pi>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(im(t)&&(t=t.__vccOpts),e){e=Yp(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=Wr(a)),oe(l)&&(_u(l)&&!$(l)&&(l=Ae({},l)),e.style=$o(l))}const o=ye(t)?1:cp(t)?128:Wp(t)?64:oe(t)?4:z(t)?2:0;return B(t,e,n,i,r,o,s,!0)}function Yp(t){return t?_u(t)||ts in t?Ae({},t):t:null}function On(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?qp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ju(a),ref:e&&e.ref?n&&r?$(r)?r.concat(dr(e)):[r,dr(e)]:dr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor}}function ns(t=" ",e=0){return fe(sa,null,t,e)}function oa(t="",e=!1){return e?(Ee(),es(sn,null,t)):fe(sn,null,t)}function ot(t){return t==null||typeof t=="boolean"?fe(sn):$(t)?fe(Pe,null,t.slice()):typeof t=="object"?Tt(t):fe(sa,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function aa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),aa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ts in e)?e._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),i&64?(n=16,e=[ns(e)]):n=8);t.children=e,t.shapeFlag|=n}function qp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wr([e.class,i.class]));else if(r==="style")e.style=$o([e.style,i.style]);else if(jr(r)){const s=e[r],o=i[r];o&&s!==o&&!($(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function rt(t,e,n,i=null){et(t,e,7,[n,i])}const Kp=Hu();let Gp=0;function Qp(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Kp,s={uid:Gp++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fu(i,r),emitsOptions:Au(i,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:i.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ip.bind(null,s),t.ce&&t.ce(s),s}let ve=null;const Xp=()=>ve||Ue,Pn=t=>{ve=t,t.scope.on()},nn=()=>{ve&&ve.scope.off(),ve=null};function Vu(t){return t.vnode.shapeFlag&4}let mi=!1;function Jp(t,e=!1){mi=e;const{props:n,children:i}=t.vnode,r=Vu(t);Rp(t,n,r,e),Lp(t,i);const s=r?Zp(t,e):void 0;return mi=!1,s}function Zp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vu(new Proxy(t.ctx,Tp));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?tm(t):null;Pn(t),Bn();const s=Nt(i,t,0,[t.props,r]);if(zn(),nn(),iu(s)){if(s.then(nn,nn),e)return s.then(o=>{Sl(t,o,e)}).catch(o=>{Qr(o,t,0)});t.asyncDep=s}else Sl(t,s,e)}else Yu(t,e)}function Sl(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=wu(e)),Yu(t,n)}let Tl;function Yu(t,e,n){const i=t.type;if(!t.render){if(!e&&Tl&&!i.render){const r=i.template||ia(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ae(Ae({isCustomElement:s,delimiters:a},o),l);i.render=Tl(r,c)}}t.render=i.render||Ze}Pn(t),Bn(),Ap(t),zn(),nn()}function em(t){return new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}})}function tm(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=em(t))},slots:t.slots,emit:t.emit,expose:e}}function is(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wu(vu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in br)return br[n](t)}}))}function nm(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function im(t){return z(t)&&"__vccOpts"in t}const Fe=(t,e)=>Xd(t,e,mi);function qu(t,e,n){const i=arguments.length;return i===2?oe(e)&&!$(e)?to(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&to(n)&&(n=[n]),fe(t,e,n))}const rm="3.2.41",sm="http://www.w3.org/2000/svg",Gt=typeof document<"u"?document:null,Al=Gt&&Gt.createElement("template"),om={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Gt.createElementNS(sm,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Al.innerHTML=i?`<svg>${t}</svg>`:t;const a=Al.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function am(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lm(t,e,n){const i=t.style,r=ye(n);if(n&&!r){for(const s in n)no(i,s,n[s]);if(e&&!ye(e))for(const s in e)n[s]==null&&no(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Nl=/\s*!important$/;function no(t,e,n){if($(n))n.forEach(i=>no(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=cm(t,e);Nl.test(n)?t.setProperty($n(i),n.replace(Nl,""),"important"):t[i]=n}}const kl=["Webkit","Moz","ms"],Ss={};function cm(t,e){const n=Ss[e];if(n)return n;let i=ct(e);if(i!=="filter"&&i in t)return Ss[e]=i;i=qr(i);for(let r=0;r<kl.length;r++){const s=kl[r]+i;if(s in t)return Ss[e]=s}return e}const Ol="http://www.w3.org/1999/xlink";function um(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ol,e.slice(6,e.length)):t.setAttributeNS(Ol,e,n);else{const s=ld(e);n==null||s&&!eu(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function fm(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=eu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gn(t,e,n,i){t.addEventListener(e,n,i)}function hm(t,e,n,i){t.removeEventListener(e,n,i)}function dm(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=pm(e);if(i){const c=s[e]=_m(i,r);gn(t,a,c,l)}else o&&(hm(t,a,o,l),s[e]=void 0)}}const Pl=/(?:Once|Passive|Capture)$/;function pm(t){let e;if(Pl.test(t)){e={};let i;for(;i=t.match(Pl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let Ts=0;const mm=Promise.resolve(),gm=()=>Ts||(mm.then(()=>Ts=0),Ts=Date.now());function _m(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;et(vm(i,n.value),e,5,[i])};return n.value=t,n.attached=gm(),n}function vm(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Rl=/^on[a-z]/,ym=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?am(t,i,r):e==="style"?lm(t,n,i):jr(e)?Bo(e)||dm(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bm(t,e,i,r))?fm(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),um(t,e,i,r))};function bm(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Rl.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rl.test(e)&&ye(n)?!1:e in t}function wm(t){const e=Xp();if(!e)return;const n=()=>io(e.subTree,t(e.proxy));hp(n),Zr(()=>{const i=new MutationObserver(n);i.observe(e.subTree.el.parentNode,{childList:!0}),ta(()=>i.disconnect())})}function io(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{io(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ml(t.el,e);else if(t.type===Pe)t.children.forEach(n=>io(n,e));else if(t.type===hr){let{el:n,anchor:i}=t;for(;n&&(Ml(n,e),n!==i);)n=n.nextSibling}}function Ml(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Dl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ur(e,n):e};function Cm(t){t.target.composing=!0}function Ll(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const As={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Dl(r);const s=i||r.props&&r.props.type==="number";gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=js(a)),t._assign(a)}),n&&gn(t,"change",()=>{t.value=t.value.trim()}),e||(gn(t,"compositionstart",Cm),gn(t,"compositionend",Ll),gn(t,"change",Ll))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Dl(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&js(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Em=["ctrl","shift","alt","meta"],xm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Em.some(n=>t[`${n}Key`]&&!e.includes(n))},Im=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=xm[e[r]];if(s&&s(n,e))return}return t(n,...i)},Sm=Ae({patchProp:ym},om);let Fl;function Tm(){return Fl||(Fl=zp(Sm))}const Am=(...t)=>{const e=Tm().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Nm(i);if(!r)return;const s=e._component;!z(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Nm(t){return ye(t)?document.querySelector(t):t}const km="/icon.svg",Om="/sl-logo.svg";/**
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
 */const Ku={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Hn(e)},Hn=function(t){return new Error("Firebase Database ("+Ku.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Gu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Pm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},la={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qu=function(t){const e=Gu(t);return la.encodeByteArray(e,!0)},Cr=function(t){return Qu(t).replace(/\./g,"")},ro=function(t){try{return la.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rm(t){return Xu(void 0,t)}function Xu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mm(n)||(t[n]=Xu(t[n],e[n]));return t}function Mm(t){return t!=="__proto__"}/**
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
 */function Dm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ju(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dm())}function Lm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zu(){return Ku.NODE_ADMIN===!0}function Fm(){return typeof indexedDB=="object"}function $m(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zm=()=>Bm().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Um=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ro(t[1]);return e&&JSON.parse(e)},ef=()=>{try{return zm()||Hm()||Um()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wm=t=>{var e,n;return(n=(e=ef())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jm=t=>{const e=Wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Vm=()=>{var t;return(t=ef())===null||t===void 0?void 0:t.config};/**
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
 */class rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ym(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cr(JSON.stringify(n)),Cr(JSON.stringify(o)),a].join(".")}/**
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
 */const qm="FirebaseError";class Ri extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=qm,Object.setPrototypeOf(this,Ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tf.prototype.create)}}class tf{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Km(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ri(r,a,i)}}function Km(t,e){return t.replace(Gm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Gm=/\{\$([^}]+)}/g;/**
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
 */function gi(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const nf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=gi(ro(s[0])||""),n=gi(ro(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Qm=function(t){const e=nf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xm=function(t){const e=nf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function so(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Bl(s)&&Bl(o)){if(!so(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Bl(t){return t!==null&&typeof t=="object"}/**
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
 */function Jm(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Zm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function ca(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,x(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ss=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Un(t){return t&&t._delegate?t._delegate:t}class _i{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new rs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(t){return t===Yt?void 0:t}function ig(t){return t.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const sg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},og=te.INFO,ag={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},lg=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=ag[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=og,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const cg=(t,e)=>e.some(n=>t instanceof n);let zl,Hl;function ug(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sf=new WeakMap,oo=new WeakMap,of=new WeakMap,Ns=new WeakMap,ua=new WeakMap;function hg(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sf.set(n,t)}).catch(()=>{}),ua.set(e,t),e}function dg(t){if(oo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oo.set(t,e)}let ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||of.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pg(t){ao=t(ao)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ks(this),e,...n);return of.set(i,e.sort?e.sort():[e]),kt(i)}:fg().includes(t)?function(...e){return t.apply(ks(this),e),kt(sf.get(this))}:function(...e){return kt(t.apply(ks(this),e))}}function gg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&dg(t),cg(t,ug())?new Proxy(t,ao):t)}function kt(t){if(t instanceof IDBRequest)return hg(t);if(Ns.has(t))return Ns.get(t);const e=gg(t);return e!==t&&(Ns.set(t,e),ua.set(e,t)),e}const ks=t=>ua.get(t);function _g(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=kt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(kt(o.result),l.oldVersion,l.newVersion,kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const vg=["get","getKey","getAll","getAllKeys","count"],yg=["put","add","delete","clear"],Os=new Map;function Ul(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Os.get(e))return Os.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=yg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||vg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Os.set(e,s),s}pg(t=>({...t,get:(e,n,i)=>Ul(e,n)||t.get(e,n,i),has:(e,n)=>!!Ul(e,n)||t.has(e,n)}));/**
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
 */class bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wg(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",Wl="0.8.3";/**
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
 */const on=new rf("@firebase/app"),Cg="@firebase/app-compat",Eg="@firebase/analytics-compat",xg="@firebase/analytics",Ig="@firebase/app-check-compat",Sg="@firebase/app-check",Tg="@firebase/auth",Ag="@firebase/auth-compat",Ng="@firebase/database",kg="@firebase/database-compat",Og="@firebase/functions",Pg="@firebase/functions-compat",Rg="@firebase/installations",Mg="@firebase/installations-compat",Dg="@firebase/messaging",Lg="@firebase/messaging-compat",Fg="@firebase/performance",$g="@firebase/performance-compat",Bg="@firebase/remote-config",zg="@firebase/remote-config-compat",Hg="@firebase/storage",Ug="@firebase/storage-compat",Wg="@firebase/firestore",jg="@firebase/firestore-compat",Vg="firebase",Yg="9.13.0";/**
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
 */const co="[DEFAULT]",qg={[lo]:"fire-core",[Cg]:"fire-core-compat",[xg]:"fire-analytics",[Eg]:"fire-analytics-compat",[Sg]:"fire-app-check",[Ig]:"fire-app-check-compat",[Tg]:"fire-auth",[Ag]:"fire-auth-compat",[Ng]:"fire-rtdb",[kg]:"fire-rtdb-compat",[Og]:"fire-fn",[Pg]:"fire-fn-compat",[Rg]:"fire-iid",[Mg]:"fire-iid-compat",[Dg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Fg]:"fire-perf",[$g]:"fire-perf-compat",[Bg]:"fire-rc",[zg]:"fire-rc-compat",[Hg]:"fire-gcs",[Ug]:"fire-gcs-compat",[Wg]:"fire-fst",[jg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const xr=new Map,uo=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(uo.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,t);for(const n of xr.values())Kg(n,t);return!0}function Gg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new tf("app","Firebase",Qg);/**
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
 */class Xg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Jg=Yg;function fa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:co,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(n||(n=Vm()),!n)throw Ot.create("no-options");const s=xr.get(r);if(s){if(so(n,s.options)&&so(i,s.config))return s;throw Ot.create("duplicate-app",{appName:r})}const o=new rg(r);for(const l of uo.values())o.addComponent(l);const a=new Xg(n,i,o);return xr.set(r,a),a}function Zg(t=co){const e=xr.get(t);if(!e&&t===co)return fa();if(!e)throw Ot.create("no-app",{appName:t});return e}function In(t,e,n){var i;let r=(i=qg[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}Ir(new _i(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const e_="firebase-heartbeat-database",t_=1,vi="firebase-heartbeat-store";let Ps=null;function af(){return Ps||(Ps=_g(e_,t_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function n_(t){var e;try{return(await af()).transaction(vi).objectStore(vi).get(lf(t))}catch(n){if(n instanceof Ri)on.warn(n.message);else{const i=Ot.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});on.warn(i.message)}}}async function jl(t,e){var n;try{const r=(await af()).transaction(vi,"readwrite");return await r.objectStore(vi).put(e,lf(t)),r.done}catch(i){if(i instanceof Ri)on.warn(i.message);else{const r=Ot.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});on.warn(r.message)}}}function lf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const i_=1024,r_=30*24*60*60*1e3;class s_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=r_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vl(),{heartbeatsToSend:n,unsentEntries:i}=o_(this._heartbeatsCache.heartbeats),r=Cr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vl(){return new Date().toISOString().substring(0,10)}function o_(t,e=i_){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Yl(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class a_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fm()?$m().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yl(t){return Cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function l_(t){Ir(new _i("platform-logger",e=>new bg(e),"PRIVATE")),Ir(new _i("heartbeat",e=>new s_(e),"PRIVATE")),In(lo,Wl,t),In(lo,Wl,"esm2017"),In("fire-js","")}l_("");var c_="firebase",u_="9.13.0";/**
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
 */In(c_,u_,"app");const ql="@firebase/database",Kl="0.13.10";/**
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
 */let cf="";function f_(t){cf=t}/**
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
 */class h_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class d_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const uf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h_(e)}}catch{}return new d_},Xt=uf("localStorage"),fo=uf("sessionStorage");/**
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
 */const Sn=new rf("@firebase/database"),p_=function(){let t=1;return function(){return t++}}(),ff=function(t){const e=eg(t),n=new Zm;n.update(e);const i=n.digest();return la.encodeByteArray(i)},Mi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Mi.apply(null,i):typeof i=="object"?e+=he(i):e+=i,e+=" "}return e};let rn=null,Gl=!0;const m_=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sn.logLevel=te.VERBOSE,rn=Sn.log.bind(Sn),e&&fo.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,fo.remove("logging_enabled"))},we=function(...t){if(Gl===!0&&(Gl=!1,rn===null&&fo.get("logging_enabled")===!0&&m_(!0)),rn){const e=Mi.apply(null,t);rn(e)}},Di=function(t){return function(...e){we(t,...e)}},ho=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mi(...t);Sn.error(e)},_t=function(...t){const e=`FIREBASE FATAL ERROR: ${Mi(...t)}`;throw Sn.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Mi(...t);Sn.warn(e)},g_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},__=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mn="[MIN_NAME]",an="[MAX_NAME]",Wn=function(t,e){if(t===e)return 0;if(t===Mn||e===an)return-1;if(e===Mn||t===an)return 1;{const n=Ql(t),i=Ql(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},v_=function(t,e){return t===e?0:t<e?-1:1},Qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},ha=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=he(e[i]),n+=":",n+=ha(t[e[i]]);return n+="}",n},df=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pf=function(t){x(!hf(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},y_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function w_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const C_=new RegExp("^-?(0*)\\d{1,10}$"),E_=-2147483648,x_=2147483647,Ql=function(t){if(C_.test(t)){const e=Number(t);if(e>=E_&&e<=x_)return e}return null},jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},I_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ii=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class S_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class T_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
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
 */const da="5",mf="v",gf="s",_f="r",vf="f",yf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bf="ls",wf="p",po="ac",Cf="websocket",Ef="long_polling";/**
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
 */class xf{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function A_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function If(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let i;if(e===Cf)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ef)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);A_(t)&&(n.ns=t.namespace);const r=[];return De(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class N_{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rm(this.counters_)}}/**
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
 */const Rs={},Ms={};function pa(t){const e=t.toString();return Rs[e]||(Rs[e]=new N_),Rs[e]}function k_(t,e){const n=t.toString();return Ms[n]||(Ms[n]=e()),Ms[n]}/**
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
 */class O_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&jn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xl="start",P_="close",R_="pLPCommand",M_="pRTLPCB",Sf="id",Tf="pw",Af="ser",D_="cb",L_="seg",F_="ts",$_="d",B_="dframe",Nf=1870,kf=30,z_=Nf-kf,H_=25e3,U_=3e4;class _n{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Di(e),this.stats_=pa(n),this.urlFn=l=>(this.appCheckToken&&(l[po]=this.appCheckToken),If(n,Ef,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new O_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(U_)),__(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ma((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xl)this.id=a,this.password=l;else if(o===P_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Xl]="t",i[Af]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[D_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[mf]=da,this.transportSessionId&&(i[gf]=this.transportSessionId),this.lastSessionId&&(i[bf]=this.lastSessionId),this.applicationId&&(i[wf]=this.applicationId),this.appCheckToken&&(i[po]=this.appCheckToken),typeof location<"u"&&location.hostname&&yf.test(location.hostname)&&(i[_f]=vf);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!y_()&&!b_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Qu(n),r=df(i,z_);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[B_]="t",i[Sf]=e,i[Tf]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ma{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=p_(),window[R_+this.uniqueCallbackIdentifier]=e,window[M_+this.uniqueCallbackIdentifier]=n,this.myIFrame=ma.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sf]=this.myID,e[Tf]=this.myPW,e[Af]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kf+i.length<=Nf;){const o=this.pendingSegs.shift();i=i+"&"+L_+r+"="+o.seg+"&"+F_+r+"="+o.ts+"&"+$_+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(H_)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const W_=16384,j_=45e3;let Sr=null;typeof MozWebSocket<"u"?Sr=MozWebSocket:typeof WebSocket<"u"&&(Sr=WebSocket);class qe{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Di(this.connId),this.stats_=pa(n),this.connURL=qe.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[mf]=da,typeof location<"u"&&location.hostname&&yf.test(location.hostname)&&(o[_f]=vf),n&&(o[gf]=n),i&&(o[bf]=i),r&&(o[po]=r),s&&(o[wf]=s),If(e,Cf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let i;Zu(),this.mySock=new Sr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Sr!==null&&!qe.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||Xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=gi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=df(n,W_);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(j_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
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
 */class yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qe&&qe.isAvailable();let i=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[qe];else{const r=this.transports_=[];for(const s of yi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yi.globalTransportInitialized_=!1;/**
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
 */const V_=6e4,Y_=5e3,q_=10*1024,K_=100*1024,Ds="t",Jl="d",G_="s",Zl="r",Q_="e",ec="o",tc="a",nc="n",ic="p",X_="h";class J_{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Di("c:"+this.id+":"),this.transportManager_=new yi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ii(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>K_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>q_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ds in e){const n=e[Ds];n===tc?this.upgradeIfSecondaryHealthy_():n===Zl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ec&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qn("t",e),i=Qn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ic,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qn("t",e),i=Qn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qn(Ds,e);if(Jl in e){const i=e[Jl];if(n===X_)this.onHandshake_(i);else if(n===nc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===G_?this.onConnectionShutdown_(i):n===Zl?this.onReset_(i):n===Q_?ho("Server Error: "+i):n===ec?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ho("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),da!==i&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ii(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(V_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ii(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Y_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ic,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Of{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Pf{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Tr extends Pf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ju()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tr}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const rc=32,sc=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new X("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Rf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Z_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Df(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function de(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new X(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=V(t),i=V(e);if(n===null)return e;if(n===i)return Te(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lf(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ev{constructor(e,n){this.errorPrefix_=n,this.parts_=Mf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ss(this.parts_[i]);Ff(this)}}function tv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ss(e),Ff(t)}function nv(t){const e=t.parts_.pop();t.byteLength_-=ss(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ff(t){if(t.byteLength_>sc)throw new Error(t.errorPrefix_+"has a key path longer than "+sc+" bytes ("+t.byteLength_+").");if(t.parts_.length>rc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rc+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ga extends Pf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ga}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xn=1e3,iv=60*5*1e3,oc=30*1e3,rv=1.3,sv=3e4,ov="server_kill",ac=3;class mt extends Of{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mt.nextPersistentConnectionId_++,this.log_=Di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xn,this.maxReconnectDelay_=iv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ga.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(he(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new rs,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;mt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const i=Rn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Qm(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ho("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sv&&(this.reconnectDelay_=Xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+mt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new J_(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{Me(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(ov)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Me(f),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$l(this.interruptReasons_)&&(this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>ha(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new X(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ac&&(this.reconnectDelay_=oc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ac&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cf.replace(/\./g,"-")]=1,Ju()?e["framework.cordova"]=1:Lm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return $l(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class os{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new U(Mn,e),r=new U(Mn,n);return this.compare(i,r)!==0}minPost(){return U.MIN}}/**
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
 */let Ji;class $f extends os{static get __EMPTY_NODE(){return Ji}static set __EMPTY_NODE(e){Ji=e}compare(e,n){return Wn(e.name,n.name)}isDefinedOn(e){throw Hn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(an,Ji)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ji)}toString(){return".key"}}const An=new $f;/**
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
 */class Zi{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:ge.RED,this.left=r!=null?r:Re.EMPTY_NODE,this.right=s!=null?s:Re.EMPTY_NODE}copy(e,n,i,r,s){return new ge(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class av{copy(e,n,i,r,s){return this}insert(e,n,i){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zi(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new av;/**
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
 */function lv(t,e){return Wn(t.name,e.name)}function _a(t,e){return Wn(t,e)}/**
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
 */let mo;function cv(t){mo=t}const Bf=function(t){return typeof t=="number"?"number:"+pf(t):"string:"+t},zf=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else x(t===mo||t.isEmpty(),"priority of unexpected type.");x(t===mo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lc;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zf(this.priorityNode_)}static set __childrenNodeConstructor(e){lc=e}static get __childrenNodeConstructor(){return lc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:V(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=V(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pf(this.value_):e+=this.value_,this.lazyHash_=ff(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(i);return x(r>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hf,Uf;function uv(t){Hf=t}function fv(t){Uf=t}class hv extends os{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Wn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(an,new me("[PRIORITY-POST]",Uf))}makePost(e,n){const i=Hf(e);return new U(n,new me("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new hv;/**
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
 */const dv=Math.log(2);class pv{constructor(e){const n=s=>parseInt(Math.log(s)/dv,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ar=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new ge(h,f.node,ge.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=r(l,m),C=r(m+1,c);return f=t[m],h=n?n(f):f,new ge(h,f.node,ge.BLACK,_,C)}},s=function(l){let c=null,u=null,f=t.length;const h=function(_,C){const P=f-_,w=f;f-=_;const N=r(P+1,w),L=t[P],H=n?n(L):L;m(new ge(H,L.node,C,null,N))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),P=Math.pow(2,l.count-(_+1));C?h(P,ge.BLACK):(h(P,ge.BLACK),h(P,ge.RED))}return u},o=new pv(t.length),a=s(o);return new Re(i||e,a)};/**
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
 */let Ls;const mn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(mn&&ce,"ChildrenNode.ts has not been loaded"),Ls=Ls||new pt({".priority":mn},{".priority":ce}),Ls}get(e){const n=Rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){x(e!==An,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ar(i,e.getCompare()):a=mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new pt(u,c)}addToIndexes(e,n){const i=Er(this.indexes_,(r,s)=>{const o=Rn(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),r===mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ar(a,o.getCompare())}else return mn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new pt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Er(this.indexes_,r=>{if(r===mn)return r;{const s=n.get(e.name);return s?r.remove(new U(e.name,s)):r}});return new pt(i,this.indexSet_)}}/**
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
 */let Jn;class D{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&zf(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jn||(Jn=new D(new Re(_a),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new U(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Jn:this.priorityNode_;return new D(r,o,s)}}updateChild(e,n){const i=V(e);if(i===null)return n;{x(V(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ne(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,s&&D.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bf(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":ff(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Li?-1:0}withIndex(e){if(e===An||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===An||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),r=n.getIterator(ce);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===An?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mv extends D{constructor(){super(new Re(_a),D.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Li=new mv;Object.defineProperties(U,{MIN:{value:new U(Mn,D.EMPTY_NODE)},MAX:{value:new U(an,Li)}});$f.__EMPTY_NODE=D.EMPTY_NODE;me.__childrenNodeConstructor=D;cv(Li);fv(Li);/**
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
 */const gv=!0;function _e(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,_e(e))}if(!(t instanceof Array)&&gv){const n=[];let i=!1;if(De(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return D.EMPTY_NODE;const s=Ar(n,lv,o=>o.name,_a);if(i){const o=Ar(n,ce.getCompare());return new D(s,_e(e),new pt({".priority":o},{".priority":ce}))}else return new D(s,_e(e),pt.Default)}else{let n=D.EMPTY_NODE;return De(t,(i,r)=>{if(Ct(t,i)&&i.substring(0,1)!=="."){const s=_e(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(_e(e))}}uv(_e);/**
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
 */class _v extends os{constructor(e){super(),this.indexPath_=e,x(!W(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Wn(e.name,n.name):s}makePost(e,n){const i=_e(e),r=D.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(n,r)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Li);return new U(an,e)}toString(){return Mf(this.indexPath_,0).join("/")}}/**
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
 */class vv extends os{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Wn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const i=_e(e);return new U(n,i)}toString(){return".value"}}const yv=new vv;/**
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
 */function Wf(t){return{type:"value",snapshotNode:t}}function Dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class va{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(bi(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Dn(n,i)):o.trackChildChange(wi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(r,s)=>{n.hasChild(r)||i.trackChildChange(bi(r,s))}),n.isLeafNode()||n.forEachChild(ce,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(wi(r,s,o))}else i.trackChildChange(Dn(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ci{constructor(e){this.indexedFilter_=new va(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ci.getStartPost_(e),this.endPost_=Ci.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new U(n,i))||(i=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=D.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new U(o,a))||(r=r.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class wv{constructor(e){this.rangedFilter_=new Ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new U(n,i))||(i=D.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(D.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(h,m)=>f(m,h)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:r=r.updateImmediateChild(f.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,m)=>f(m,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new U(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(wi(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(bi(n,f));const C=a.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Dn(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(bi(c.name,c.node)),s.trackChildChange(Dn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
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
 */class ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mn}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new ya;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cv(t){return t.loadsAllData()?new va(t.getIndex()):t.hasLimit()?new wv(t):new Ci(t)}function cc(t){const e={};if(t.isDefault())return e;let n;return t.index_===ce?n="$priority":t.index_===yv?n="$value":t.index_===An?n="$key":(x(t.index_ instanceof _v,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_&&(e.startAt=he(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+he(t.indexStartName_))),t.endSet_&&(e.endAt=he(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+he(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class Nr extends Of{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Di("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nr.getListenId_(e,i),a={};this.listens_[o]=a;const l=cc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),Rn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Nr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=cc(e._queryParams),i=e._path.toString(),r=new rs;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jm(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=gi(a.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ev{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function kr(){return{value:null,children:new Map}}function jf(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=V(e);t.children.has(i)||t.children.set(i,kr());const r=t.children.get(i);e=ne(e),jf(r,e,n)}}function go(t,e,n){t.value!==null?n(e,t.value):xv(t,(i,r)=>{const s=new X(e.toString()+"/"+i);go(r,s,n)})}function xv(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Iv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const fc=10*1e3,Sv=30*1e3,Tv=5*60*1e3;class Av{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Iv(e);const i=fc+(Sv-fc)*Math.random();ii(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;De(e,(r,s)=>{s>0&&Ct(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ii(this.reportStats_.bind(this),Math.floor(Math.random()*2*Tv))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ba(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Or{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Xe.ACK_USER_WRITE,this.source=Vf()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Or(q(),n,this.revert)}}else return x(V(this.path)===e,"operationForChild called for unrelated child."),new Or(ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ei{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Ei(this.source,q()):new Ei(this.source,ne(this.path))}}/**
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
 */class ln{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Xe.OVERWRITE}operationForChild(e){return W(this.path)?new ln(this.source,q(),this.snap.getImmediateChild(e)):new ln(this.source,ne(this.path),this.snap)}}/**
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
 */class xi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Xe.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new ln(this.source,q(),n.value):new xi(this.source,q(),n)}else return x(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xi(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Lt{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Nv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kv(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bv(o.childName,o.snapshotNode))}),Zn(t,r,"child_removed",e,i,n),Zn(t,r,"child_added",e,i,n),Zn(t,r,"child_moved",s,i,n),Zn(t,r,"child_changed",e,i,n),Zn(t,r,"value",e,i,n),r}function Zn(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Pv(t,a,l)),o.forEach(a=>{const l=Ov(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ov(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Pv(t,e,n){if(e.childName==null||n.childName==null)throw Hn("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),r=new U(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function as(t,e){return{eventCache:t,serverCache:e}}function ri(t,e,n,i){return as(new Lt(e,n,i),t.serverCache)}function Yf(t,e,n,i){return as(t.eventCache,new Lt(e,n,i))}function Pr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Fs;const Rv=()=>(Fs||(Fs=new Re(v_)),Fs);class ie{constructor(e,n=Rv()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return De(e,(i,r)=>{n=n.set(new X(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(W(e))return null;{const i=V(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:de(new X(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=V(e),i=this.children.get(n);return i!==null?i.subtree(ne(e)):new ie(null)}}set(e,n){if(W(e))return new ie(n,this.children);{const i=V(e),s=(this.children.get(i)||new ie(null)).set(ne(e),n),o=this.children.insert(i,s);return new ie(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=V(e),i=this.children.get(n);if(i){const r=i.remove(ne(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=V(e),i=this.children.get(n);return i?i.get(ne(e)):null}}setTree(e,n){if(W(e))return n;{const i=V(e),s=(this.children.get(i)||new ie(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ie(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(de(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(W(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),de(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,i){if(W(e))return this;{this.value&&i(n,this.value);const r=V(e),s=this.children.get(r);return s?s.foreachOnPath_(ne(e),de(n,r),i):new ie(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(de(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ie(null))}}function si(t,e,n){if(W(e))return new tt(new ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Te(r,e);return s=s.updateChild(o,n),new tt(t.writeTree_.set(r,s))}else{const r=new ie(n),s=t.writeTree_.setTree(e,r);return new tt(s)}}}function hc(t,e,n){let i=t;return De(n,(r,s)=>{i=si(i,de(e,r),s)}),i}function dc(t,e){if(W(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new tt(n)}}function _o(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function pc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,r)=>{e.push(new U(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new U(i,r.value))}),e}function Pt(t,e){if(W(e))return t;{const n=hn(t,e);return n!=null?new tt(new ie(n)):new tt(t.writeTree_.subtree(e))}}function vo(t){return t.writeTree_.isEmpty()}function Ln(t,e){return qf(q(),t.writeTree_,e)}function qf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=qf(de(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(de(t,".priority"),i)),n}}/**
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
 */function ls(t,e){return Xf(e,t)}function Mv(t,e,n,i,r){x(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=i}function Dv(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Lv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Fv(a,i.path)?r=!1:Qe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return $v(t),!0;if(i.snap)t.visibleWrites=dc(t.visibleWrites,i.path);else{const a=i.children;De(a,l=>{t.visibleWrites=dc(t.visibleWrites,de(i.path,l))})}return!0}else return!1}function Fv(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(de(t.path,n),e))return!0;return!1}function $v(t){t.visibleWrites=Kf(t.allWrites,Bv,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bv(t){return t.visible}function Kf(t,e,n){let i=tt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Qe(n,o)?(a=Te(n,o),i=si(i,a,s.snap)):Qe(o,n)&&(a=Te(o,n),i=si(i,q(),s.snap.getChild(a)));else if(s.children){if(Qe(n,o))a=Te(n,o),i=hc(i,a,s.children);else if(Qe(o,n))if(a=Te(o,n),W(a))i=hc(i,q(),s.children);else{const l=Rn(s.children,V(a));if(l){const c=l.getChild(ne(a));i=si(i,q(),c)}}}else throw Hn("WriteRecord should have .snap or .children")}}return i}function Gf(t,e,n,i,r){if(!i&&!r){const s=hn(t.visibleWrites,e);if(s!=null)return s;{const o=Pt(t.visibleWrites,e);if(vo(o))return n;if(n==null&&!_o(o,q()))return null;{const a=n||D.EMPTY_NODE;return Ln(o,a)}}}else{const s=Pt(t.visibleWrites,e);if(!r&&vo(s))return n;if(!r&&n==null&&!_o(s,q()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Qe(c.path,e)||Qe(e,c.path))},a=Kf(t.allWrites,o,e),l=n||D.EMPTY_NODE;return Ln(a,l)}}}function zv(t,e,n){let i=D.EMPTY_NODE;const r=hn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ce,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Pt(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Ln(Pt(s,new X(o)),a);i=i.updateImmediateChild(o,l)}),pc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Pt(t.visibleWrites,e);return pc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Hv(t,e,n,i,r){x(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(_o(t.visibleWrites,s))return null;{const o=Pt(t.visibleWrites,s);return vo(o)?r.getChild(n):Ln(o,r.getChild(n))}}function Uv(t,e,n,i){const r=de(e,n),s=hn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Pt(t.visibleWrites,r);return Ln(o,i.getNode().getImmediateChild(n))}else return null}function Wv(t,e){return hn(t.visibleWrites,e)}function jv(t,e,n,i,r,s,o){let a;const l=Pt(t.visibleWrites,e),c=hn(l,q());if(c!=null)a=c;else if(n!=null)a=Ln(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=h.getNext();return u}else return[]}function Vv(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Rr(t,e,n,i){return Gf(t.writeTree,t.treePath,e,n,i)}function Ca(t,e){return zv(t.writeTree,t.treePath,e)}function mc(t,e,n,i){return Hv(t.writeTree,t.treePath,e,n,i)}function Mr(t,e){return Wv(t.writeTree,de(t.treePath,e))}function Yv(t,e,n,i,r,s){return jv(t.writeTree,t.treePath,e,n,i,r,s)}function Ea(t,e,n){return Uv(t.writeTree,t.treePath,e,n)}function Qf(t,e){return Xf(de(t.treePath,e),t.writeTree)}function Xf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,wi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,bi(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Dn(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,wi(i,e.snapshotNode,r.oldSnap));else throw Hn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Kv{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Jf=new Kv;class xa{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ea(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),s=Yv(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function Gv(t){return{filter:t}}function Qv(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xv(t,e,n,i,r){const s=new qv;let o,a;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=yo(t,e,c.path,c.snap,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Dr(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=Zv(t,e,c.path,c.children,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bo(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=ny(t,e,c.path,i,r,s):o=ey(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Xe.LISTEN_COMPLETE)o=ty(t,e,n.path,i,s);else throw Hn("Unknown operation type: "+n.type);const l=s.getChanges();return Jv(e,o,l),{viewCache:o,changes:l}}function Jv(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Pr(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Wf(Pr(e)))}}function Zf(t,e,n,i,r,s){const o=e.eventCache;if(Mr(i,n)!=null)return e;{let a,l;if(W(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof D?c:D.EMPTY_NODE,f=Ca(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Rr(i,cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){x(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=mc(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ne(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=mc(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=Ea(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return ri(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Dr(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=V(n);if(!l.isCompleteForPath(n)&&Dt(n)>1)return e;const _=ne(n),P=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),m,P,_,Jf,null)}const f=Yf(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),h=new xa(r,f,s);return Zf(t,f,n,r,h,a)}function yo(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new xa(r,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ri(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ri(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ne(n),m=a.getNode().getImmediateChild(f);let _;if(W(h))_=i;else{const C=u.getCompleteChild(f);C!=null?Rf(h)===".priority"&&C.getChild(Df(h)).isEmpty()?_=C:_=C.updateChild(h,i):_=D.EMPTY_NODE}if(m.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),f,_,h,u,o);l=ri(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gc(t,e){return t.eventCache.isCompleteForChild(e)}function Zv(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=de(n,l);gc(e,V(u))&&(a=yo(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=de(n,l);gc(e,V(u))||(a=yo(t,a,u,c,r,s,o))}),a}function _c(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function bo(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=i:c=new ie(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=_c(t,m,h);l=Dr(t,l,new X(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),C=_c(t,_,h);l=Dr(t,l,new X(f),C,r,s,o,a)}}),l}function ey(t,e,n,i,r,s,o){if(Mr(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Dr(t,e,n,l.getNode().getChild(n),r,s,a,o);if(W(n)){let c=new ie(null);return l.getNode().forEachChild(An,(u,f)=>{c=c.set(new X(u),f)}),bo(t,e,n,c,r,s,a,o)}else return e}else{let c=new ie(null);return i.foreach((u,f)=>{const h=de(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),bo(t,e,n,c,r,s,a,o)}}function ty(t,e,n,i,r){const s=e.serverCache,o=Yf(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return Zf(t,o,n,i,Jf,r)}function ny(t,e,n,i,r,s){let o;if(Mr(i,n)!=null)return e;{const a=new xa(i,e,r),l=e.eventCache.getNode();let c;if(W(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rr(i,cn(e));else{const f=e.serverCache.getNode();x(f instanceof D,"serverChildren would be complete if leaf node"),u=Ca(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let f=Ea(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ne(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,D.EMPTY_NODE,ne(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rr(i,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Mr(i,q())!=null,ri(e,c,o,t.filter.filtersNodes())}}/**
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
 */class iy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new va(i.getIndex()),s=Cv(i);this.processor_=Gv(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),u=new Lt(l,o.isFullyInitialized(),r.filtersNodes()),f=new Lt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=as(f,u),this.eventGenerator_=new Nv(this.query_)}get query(){return this.query_}}function ry(t){return t.viewCache_.serverCache.getNode()}function sy(t){return Pr(t.viewCache_)}function oy(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function vc(t){return t.eventRegistrations_.length===0}function ay(t,e){t.eventRegistrations_.push(e)}function yc(t,e,n){const i=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function bc(t,e,n,i){e.type===Xe.MERGE&&e.source.queryId!==null&&(x(cn(t.viewCache_),"We should always have a full cache before handling merges"),x(Pr(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Xv(t.processor_,r,e,n,i);return Qv(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,eh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ly(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{i.push(Dn(s,o))}),n.isFullyInitialized()&&i.push(Wf(n.getNode())),eh(t,i,n.getNode(),e)}function eh(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return kv(t.eventGenerator_,e,n,r)}/**
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
 */let Lr;class th{constructor(){this.views=new Map}}function cy(t){x(!Lr,"__referenceConstructor has already been defined"),Lr=t}function uy(){return x(Lr,"Reference.ts has not been loaded"),Lr}function fy(t){return t.views.size===0}function Ia(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return x(s!=null,"SyncTree gave us an op for an invalid query."),bc(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(bc(o,e,n,i));return s}}function nh(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Rr(n,r?i:null),l=!1;a?l=!0:i instanceof D?(a=Ca(n,i),l=!1):(a=D.EMPTY_NODE,l=!1);const c=as(new Lt(a,l,!1),new Lt(i,r,!1));return new iy(e,c)}return o}function hy(t,e,n,i,r,s){const o=nh(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ay(o,n),ly(o,n)}function dy(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Ft(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(yc(c,n,i)),vc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(yc(l,n,i)),vc(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ft(t)&&s.push(new(uy())(e._repo,e._path)),{removed:s,events:o}}function ih(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const i of t.views.values())n=n||oy(i,e);return n}function rh(t,e){if(e._queryParams.loadsAllData())return cs(t);{const i=e._queryIdentifier;return t.views.get(i)}}function sh(t,e){return rh(t,e)!=null}function Ft(t){return cs(t)!=null}function cs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Fr;function py(t){x(!Fr,"__referenceConstructor has already been defined"),Fr=t}function my(){return x(Fr,"Reference.ts has not been loaded"),Fr}let gy=1;class wc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=Vv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(t,e,n,i,r){return Mv(t.pendingWriteTree_,e,n,i,r),r?$i(t,new ln(Vf(),e,n)):[]}function Jt(t,e,n=!1){const i=Dv(t.pendingWriteTree_,e);if(Lv(t.pendingWriteTree_,e)){let s=new ie(null);return i.snap!=null?s=s.set(q(),!0):De(i.children,o=>{s=s.set(new X(o),!0)}),$i(t,new Or(i.path,s,n))}else return[]}function Fi(t,e,n){return $i(t,new ln(ba(),e,n))}function _y(t,e,n){const i=ie.fromObject(n);return $i(t,new xi(ba(),e,i))}function vy(t,e){return $i(t,new Ei(ba(),e))}function yy(t,e,n){const i=Ta(t,n);if(i){const r=Aa(i),s=r.path,o=r.queryId,a=Te(s,e),l=new Ei(wa(o),a);return Na(t,s,l)}else return[]}function ah(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||sh(o,e))){const l=dy(o,e,n,i);fy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(h,m)=>Ft(m));if(u&&!f){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=Ey(h);for(let _=0;_<m.length;++_){const C=m[_],P=C.query,w=fh(t,C);t.listenProvider_.startListening(oi(P),Ii(t,P),w.hashFn,w.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(oi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(us(h));t.listenProvider_.stopListening(oi(h),m)}))}xy(t,c)}return a}function lh(t,e,n,i){const r=Ta(t,i);if(r!=null){const s=Aa(r),o=s.path,a=s.queryId,l=Te(o,e),c=new ln(wa(a),l,n);return Na(t,o,c)}else return[]}function by(t,e,n,i){const r=Ta(t,i);if(r){const s=Aa(r),o=s.path,a=s.queryId,l=Te(o,e),c=ie.fromObject(n),u=new xi(wa(a),l,c);return Na(t,o,u)}else return[]}function wy(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,m)=>{const _=Te(h,r);s=s||Rt(m,_),o=o||Ft(m)});let a=t.syncPointTree_.get(r);a?(o=o||Ft(a),s=s||Rt(a,q())):(a=new th,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((m,_)=>{const C=Rt(_,q());C&&(s=s.updateImmediateChild(m,C))}));const c=sh(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=us(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=Iy();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=ls(t.pendingWriteTree_,r);let f=hy(a,e,n,u,s,l);if(!c&&!o&&!i){const h=rh(a,e);f=f.concat(Sy(t,e,h))}return f}function Sa(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Te(o,e),c=Rt(a,l);if(c)return c});return Gf(r,e,s,n,!0)}function Cy(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Te(c,n);i=i||Rt(u,f)});let r=t.syncPointTree_.get(n);r?i=i||Rt(r,q()):(r=new th,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Lt(i,!0,!1):null,a=ls(t.pendingWriteTree_,e._path),l=nh(r,e,a,s?o.getNode():D.EMPTY_NODE,s);return sy(l)}function $i(t,e){return ch(e,t.syncPointTree_,null,ls(t.pendingWriteTree_,q()))}function ch(t,e,n,i){if(W(t.path))return uh(t,e,n,i);{const r=e.get(q());n==null&&r!=null&&(n=Rt(r,q()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Qf(i,o);s=s.concat(ch(a,l,c,u))}return r&&(s=s.concat(Ia(r,t,i,n))),s}}function uh(t,e,n,i){const r=e.get(q());n==null&&r!=null&&(n=Rt(r,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qf(i,o),u=t.operationForChild(o);u&&(s=s.concat(uh(u,a,l,c)))}),r&&(s=s.concat(Ia(r,t,i,n))),s}function fh(t,e){const n=e.query,i=Ii(t,n);return{hashFn:()=>(ry(e)||D.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?yy(t,n._path,i):vy(t,n._path);{const s=w_(r,n);return ah(t,n,null,s)}}}}function Ii(t,e){const n=us(e);return t.queryToTagMap.get(n)}function us(t){return t._path.toString()+"$"+t._queryIdentifier}function Ta(t,e){return t.tagToQueryMap.get(e)}function Aa(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Na(t,e,n){const i=t.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const r=ls(t.pendingWriteTree_,e);return Ia(i,n,r,null)}function Ey(t){return t.fold((e,n,i)=>{if(n&&Ft(n))return[cs(n)];{let r=[];return n&&(r=ih(n)),De(i,(s,o)=>{r=r.concat(o)}),r}})}function oi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(my())(t._repo,t._path):t}function xy(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=us(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Iy(){return gy++}function Sy(t,e,n){const i=e._path,r=Ii(t,e),s=fh(t,n),o=t.listenProvider_.startListening(oi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)x(!Ft(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!W(c)&&u&&Ft(u))return[cs(u).query];{let h=[];return u&&(h=h.concat(ih(u).map(m=>m.query))),De(f,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(oi(u),Ii(t,u))}}return o}/**
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
 */class ka{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ka(n)}node(){return this.node_}}class Oa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Oa(this.syncTree_,n)}node(){return Sa(this.syncTree_,this.path_)}}const Ty=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cc=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ay(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ny(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ay=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Ny=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const r=e.node();if(x(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},ky=function(t,e,n,i){return Pa(e,new Oa(n,t),i)},hh=function(t,e,n){return Pa(t,new ka(e),n)};function Pa(t,e,n){const i=t.getPriority().val(),r=Cc(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Cc(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new me(a,_e(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new me(r))),o.forEachChild(ce,(a,l)=>{const c=Pa(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Ra{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ma(t,e){let n=e instanceof X?e:new X(e),i=t,r=V(n);for(;r!==null;){const s=Rn(i.node.children,r)||{children:{},childCount:0};i=new Ra(r,i,s),n=ne(n),r=V(n)}return i}function Vn(t){return t.node.value}function dh(t,e){t.node.value=e,wo(t)}function ph(t){return t.node.childCount>0}function Oy(t){return Vn(t)===void 0&&!ph(t)}function fs(t,e){De(t.node.children,(n,i)=>{e(new Ra(n,t,i))})}function mh(t,e,n,i){n&&!i&&e(t),fs(t,r=>{mh(r,e,!0,i)}),n&&i&&e(t)}function Py(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bi(t){return new X(t.parent===null?t.name:Bi(t.parent)+"/"+t.name)}function wo(t){t.parent!==null&&Ry(t.parent,t.name,t)}function Ry(t,e,n){const i=Oy(n),r=Ct(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,wo(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wo(t))}/**
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
 */const My=/[\[\].#$\/\u0000-\u001F\u007F]/,Dy=/[\[\].#$\u0000-\u001F\u007F]/,$s=10*1024*1024,gh=function(t){return typeof t=="string"&&t.length!==0&&!My.test(t)},_h=function(t){return typeof t=="string"&&t.length!==0&&!Dy.test(t)},Ly=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_h(t)},Fy=function(t,e,n,i){i&&e===void 0||Da(ca(t,"value"),e,n)},Da=function(t,e,n){const i=n instanceof X?new ev(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(i));if(typeof e=="function")throw new Error(t+"contains a function "+qt(i)+" with contents = "+e.toString());if(hf(e))throw new Error(t+"contains "+e.toString()+" "+qt(i));if(typeof e=="string"&&e.length>$s/3&&ss(e)>$s)throw new Error(t+"contains a string greater than "+$s+" utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(De(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tv(i,o),Da(t,a,i),nv(i)}),r&&s)throw new Error(t+' contains ".value" child '+qt(i)+" in addition to actual children.")}},vh=function(t,e,n,i){if(!(i&&n===void 0)&&!_h(n))throw new Error(ca(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$y=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vh(t,e,n,i)},By=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ly(n))throw new Error(ca(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Hy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yh(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Lf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function ut(t,e,n){yh(t,n),Uy(t,i=>Qe(i,e)||Qe(e,i))}function Uy(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Wy(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Wy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();rn&&we("event: "+n.toString()),jn(i)}}}/**
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
 */const jy="repo_interrupt",Vy=25;class Yy{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kr(),this.transactionQueueTree_=new Ra,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qy(t,e,n){if(t.stats_=pa(t.repoInfo_),t.forceRestClient_||I_())t.server_=new Nr(t.repoInfo_,(i,r,s,o)=>{Ec(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new mt(t.repoInfo_,e,(i,r,s,o)=>{Ec(t,i,r,s,o)},i=>{xc(t,i)},i=>{Gy(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=k_(t.repoInfo_,()=>new Av(t.stats_,t.server_)),t.infoData_=new Ev,t.infoSyncTree_=new wc({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Fi(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fa(t,"connected",!1),t.serverSyncTree_=new wc({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Ky(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function La(t){return Ty({timestamp:Ky(t)})}function Ec(t,e,n,i,r){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Er(n,c=>_e(c));o=by(t.serverSyncTree_,s,l,r)}else{const l=_e(n);o=lh(t.serverSyncTree_,s,l,r)}else if(i){const l=Er(n,c=>_e(c));o=_y(t.serverSyncTree_,s,l)}else{const l=_e(n);o=Fi(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ds(t,s)),ut(t.eventQueue_,a,o)}function xc(t,e){Fa(t,"connected",e),e===!1&&Jy(t)}function Gy(t,e){De(e,(n,i)=>{Fa(t,n,i)})}function Fa(t,e,n){const i=new X("/.info/"+e),r=_e(n);t.infoData_.updateSnapshot(i,r);const s=Fi(t.infoSyncTree_,i,r);ut(t.eventQueue_,i,s)}function bh(t){return t.nextWriteId_++}function Qy(t,e,n){const i=Cy(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=_e(r).withIndex(e._queryParams.getIndex());wy(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fi(t.serverSyncTree_,e._path,s);else{const a=Ii(t.serverSyncTree_,e);o=lh(t.serverSyncTree_,e._path,s,a)}return ut(t.eventQueue_,e._path,o),ah(t.serverSyncTree_,e,n,null,!0),s},r=>(hs(t,"get for query "+he(e)+" failed: "+r),Promise.reject(new Error(r))))}function Xy(t,e,n,i,r){hs(t,"set",{path:e.toString(),value:n,priority:i});const s=La(t),o=_e(n,i),a=Sa(t.serverSyncTree_,e),l=hh(o,a,s),c=bh(t),u=oh(t.serverSyncTree_,e,l,c,!0);yh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const C=Jt(t.serverSyncTree_,c,!_);ut(t.eventQueue_,e,C),e1(t,r,h,m)});const f=Ih(t,e);ds(t,f),ut(t.eventQueue_,f,[])}function Jy(t){hs(t,"onDisconnectEvents");const e=La(t),n=kr();go(t.onDisconnect_,q(),(r,s)=>{const o=ky(r,s,t.serverSyncTree_,e);jf(n,r,o)});let i=[];go(n,q(),(r,s)=>{i=i.concat(Fi(t.serverSyncTree_,r,s));const o=Ih(t,r);ds(t,o)}),t.onDisconnect_=kr(),ut(t.eventQueue_,q(),i)}function Zy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jy)}function hs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function e1(t,e,n,i){e&&jn(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function wh(t,e,n){return Sa(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function $a(t,e=t.transactionQueueTree_){if(e||ps(t,e),Vn(e)){const n=Eh(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&t1(t,Bi(e),n)}else ph(e)&&fs(e,n=>{$a(t,n)})}function t1(t,e,n){const i=n.map(c=>c.currentWriteId),r=wh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Te(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Jt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ps(t,Ma(t.transactionQueueTree_,e)),$a(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)jn(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Me("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ds(t,e)}},o)}function ds(t,e){const n=Ch(t,e),i=Bi(n),r=Eh(t,n);return n1(t,r,i),i}function n1(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Te(n,l.path);let u=!1,f;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Vy)u=!0,f="maxretry",r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=wh(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Da("transaction failed: Data returned ",m,l.path);let _=_e(m);typeof m=="object"&&m!=null&&Ct(m,".priority")||(_=_.updatePriority(h.getPriority()));const P=l.currentWriteId,w=La(t),N=hh(_,h,w);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=N,l.currentWriteId=bh(t),o.splice(o.indexOf(P),1),r=r.concat(oh(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),r=r.concat(Jt(t.serverSyncTree_,P,!0))}else u=!0,f="nodata",r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}ps(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)jn(i[a]);$a(t,t.transactionQueueTree_)}function Ch(t,e){let n,i=t.transactionQueueTree_;for(n=V(e);n!==null&&Vn(i)===void 0;)i=Ma(i,n),e=ne(e),n=V(e);return i}function Eh(t,e){const n=[];return xh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function xh(t,e,n){const i=Vn(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);fs(e,r=>{xh(t,r,n)})}function ps(t,e){const n=Vn(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,dh(e,n.length>0?n:void 0)}fs(e,i=>{ps(t,i)})}function Ih(t,e){const n=Bi(Ch(t,e)),i=Ma(t.transactionQueueTree_,e);return Py(i,r=>{Bs(t,r)}),Bs(t,i),mh(i,r=>{Bs(t,r)}),n}function Bs(t,e){const n=Vn(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dh(e,void 0):n.length=s+1,ut(t.eventQueue_,Bi(e),r);for(let o=0;o<i.length;o++)jn(i[o])}}/**
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
 */function i1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function r1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ic=function(t,e){const n=s1(t),i=n.namespace;n.domain==="firebase.com"&&_t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||g_();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xf(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new X(n.pathString)}},s1=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=i1(t.substring(u,f)));const h=r1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class o1{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class a1{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class l1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ba{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:Rf(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=uc(this._queryParams),n=ha(e);return n==="{}"?"default":n}get _queryObject(){return uc(this._queryParams)}isEqual(e){if(e=Un(e),!(e instanceof Ba))return!1;const n=this._repo===e._repo,i=Lf(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Z_(this._path)}}class Et extends Ba{constructor(e,n){super(e,n,new ya,!1)}get parent(){const e=Df(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Si{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),i=Ti(this.ref,e);return new Si(this._node.getChild(n),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Si(r,Ti(this.ref,i),ce)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Co(t,e){return t=Un(t),t._checkNotDeleted("ref"),e!==void 0?Ti(t._root,e):t._root}function Ti(t,e){return t=Un(t),V(t._path)===null?$y("child","path",e,!1):vh("child","path",e,!1),new Et(t._repo,de(t._path,e))}function Sh(t,e){t=Un(t),By("set",t._path),Fy("set",e,t._path,!1);const n=new rs;return Xy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Sc(t){t=Un(t);const e=new l1(()=>{}),n=new za(e);return Qy(t._repo,t,n).then(i=>new Si(i,new Et(t._repo,t._path),t._queryParams.getIndex()))}class za{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new o1("value",this,new Si(e.snapshotNode,new Et(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new a1(this,e,n):null}matches(e){return e instanceof za?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}cy(Et);py(Et);/**
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
 */const c1="FIREBASE_DATABASE_EMULATOR_HOST",Eo={};let u1=!1;function f1(t,e,n,i){t.repoInfo_=new xf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function h1(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||_t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ic(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[c1]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ic(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Tn(Tn.OWNER):new T_(t.name,t.options,e);zy("Invalid Firebase Database URL",o),W(o.path)||_t("Database URL must point to the root of a Firebase Database (not including a child path).");const f=p1(a,t,u,new S_(t.name,n));return new m1(f,t)}function d1(t,e){const n=Eo[e];(!n||n[t.key]!==t)&&_t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Zy(t),delete n[t.key]}function p1(t,e,n,i){let r=Eo[e.name];r||(r={},Eo[e.name]=r);let s=r[t.toURLString()];return s&&_t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Yy(t,u1,n,i),r[t.toURLString()]=s,s}class m1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_t("Cannot call "+e+" on a deleted database.")}}function Th(t=Zg(),e){const n=Gg(t,"database").getImmediate({identifier:e}),i=jm("database");return i&&g1(n,...i),n}function g1(t,e,n,i={}){t=Un(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_t("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&_t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Tn(Tn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ym(i.mockUserToken,t.app.options.projectId);s=new Tn(o)}f1(r,e,n,s)}/**
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
 */function _1(t){f_(Jg),Ir(new _i("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return h1(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),In(ql,Kl,t),In(ql,Kl,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_1();const Ah={apiKey:"AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",authDomain:"squash-list.firebaseapp.com",databaseURL:"https://squash-list-default-rtdb.firebaseio.com",projectId:"squash-list",storageBucket:"squash-list.appspot.com",messagingSenderId:"537914321064",appId:"1:537914321064:web:6df5523c5fc9d1c9b83a9d"},v1={class:"header"},y1=B("div",{class:"skip"},[B("a",{class:"sr-only sr-only-focusable",href:"#main"}," Skip to content ")],-1),b1=B("div",{class:"logo-wrapper"},[B("img",{src:Om,class:"logo",alt:"Squashlist logo",width:"172",height:"24"})],-1),w1={class:"suggest"},C1=B("span",{class:"tooltip"},"Suggest item",-1),E1={class:"form-title"},x1=B("span",null,"Suggest item",-1),I1=B("span",{class:"sr-only"},"Close",-1),S1={key:0,class:"error"},T1=B("div",null,"Unable to submit",-1),A1={key:1,class:"success"},N1=B("div",null,"Thanks for making a suggestion!",-1),k1=B("p",null,"Suggest an item to be included in the Squash List",-1),O1=["onSubmit"],P1=B("span",null,[ns("Name "),B("span",{class:"required"},"*")],-1),R1=B("span",null,[ns("URL "),B("span",{class:"required"},"*")],-1),M1=B("span",null,"Description",-1),D1=["disabled"],L1=B("h1",{class:"sr-only"},"Squash sites, apps, & resources",-1),F1={__name:"Header",setup(t){const e=Ve(null),n=Ve(!1),i=Ve({name:"",url:"",desc:""}),r=Ve(null),s=Ve(!0),o=Ve(!1),a=Ve(!1),l=()=>{n.value=!0,i.value={name:"",url:"",desc:""},s.value=!0,o.value=!1,a.value=!1};xn(n,h=>{h&&xu(()=>r.value.focus())}),xn(i,h=>{h.name&&h.url?s.value=!1:s.value=!0},{deep:!0});const c=fa(Ah),u=Th(c),f=()=>{s.value=!0,Sh(Co(u,`/suggest/item-${Math.floor(Date.now()*Math.random())}`),Gr(i)).then(()=>a.value=!0).catch(()=>o.value=!0)};return Zr(()=>{let h=0,m=0;const _=()=>{m>h+100&&(n.value=!1)};e.value.addEventListener("touchstart",C=>{h=C.changedTouches[0].screenX}),e.value.addEventListener("touchend",C=>{m=C.changedTouches[0].screenX,_()}),document.addEventListener("keydown",C=>{C.code==="Escape"&&(n.value=!1)})}),(h,m)=>{const _=na("font-awesome-icon");return Ee(),He("header",v1,[y1,b1,B("div",w1,[B("button",{onClick:l},[C1,fe(_,{icon:"fa-solid fa-circle-plus",class:"icon"})]),B("div",null,[n.value?(Ee(),He("div",{key:0,class:"form-bg",onClick:m[0]||(m[0]=C=>n.value=!1)})):oa("",!0),B("div",{class:Wr(["form",{open:n.value}]),ref_key:"formWrapper",ref:e},[B("h2",E1,[x1,B("button",{class:"close-icon",onClick:m[1]||(m[1]=C=>n.value=!1)},[fe(_,{icon:"fa-solid fa-xmark"}),I1])]),o.value?(Ee(),He("div",S1,[fe(_,{icon:"fa-solid fa-face-frown",class:"icon"}),T1])):a.value?(Ee(),He("div",A1,[fe(_,{icon:"fa-solid fa-face-smile",class:"icon"}),N1])):(Ee(),He(Pe,{key:2},[k1,B("form",{onSubmit:Im(f,["prevent"])},[B("label",null,[P1,Is(B("input",{"onUpdate:modelValue":m[2]||(m[2]=C=>i.value.name=C),type:"text",name:"name",required:"",ref_key:"nameInput",ref:r},null,512),[[As,i.value.name]])]),B("label",null,[R1,Is(B("input",{"onUpdate:modelValue":m[3]||(m[3]=C=>i.value.url=C),type:"text",name:"url",required:""},null,512),[[As,i.value.url]])]),B("label",null,[M1,Is(B("input",{"onUpdate:modelValue":m[4]||(m[4]=C=>i.value.desc=C),type:"text",name:"desc"},null,512),[[As,i.value.desc]])]),B("button",{type:"submit",disabled:s.value}," Submit ",8,D1)],40,O1)],64))],2)])]),L1])}}};const $1=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},B1=["href"],z1={class:"desc"},H1={__name:"Item",props:{item:Object},setup(t){wm(i=>({bda018a2:n.degrees,ef45bcbe:n.position}));const e=Math.random()<.5?"-":"",n={degrees:`${e}${Math.random()/1.5}deg`,position:`${e}${Math.random()*3}px`};return(i,r)=>{const s=na("font-awesome-icon");return Ee(),He("a",{href:t.item.url,class:"item"},[B("p",null,[ns(gr(t.item.name)+" ",1),t.item.paid?(Ee(),es(s,{key:0,icon:"fa-solid fa-money-bills",class:"money-icon",title:"Paid service"})):oa("",!0)]),B("p",z1,gr(t.item.desc),1)],8,B1)}}},U1=$1(H1,[["__scopeId","data-v-99d85e0c"]]),W1={class:"category"},j1={class:"items-wrapper"},V1={__name:"Category",props:{category:Object},setup(t){const e=t,n=Ve(!0),i=Fe(()=>e.category.items.sort((r,s)=>n.value?r.name>s.name?1:-1:r.name<s.name?1:-1));return(r,s)=>{const o=na("font-awesome-icon");return Ee(),He("div",W1,[B("h2",null,[fe(o,{icon:`fa-solid fa-${t.category.icon}`,class:"icon"},null,8,["icon"]),B("span",null,gr(t.category.cat),1),B("button",{onClick:s[0]||(s[0]=a=>n.value=!n.value)},[fe(o,{icon:`fa-solid ${n.value?"fa-arrow-down-a-z":"fa-arrow-up-z-a"}`,title:n.value?"Sort Z to A":"Sort A to Z",class:"icon"},null,8,["icon","title"])])]),B("div",j1,[(Ee(!0),He(Pe,null,Mu(Gr(i),a=>(Ee(),es(U1,{item:a},null,8,["item"]))),256))])])}}};const Y1={class:"wrapper"},q1={class:"container",id:"main"},K1={key:0,class:"loading"},G1=B("img",{src:km,alt:"loading icon",width:"40"},null,-1),Q1=B("span",{class:"sr-only"},"Loading lists...",-1),X1=[G1,Q1],J1={key:1,class:"error"},Z1={__name:"App",setup(t){const e=fa(Ah),n=Th(e),i=Co(n),r=Ve([]),s=Ve(""),o=Ve(0),a="*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid";Zr(()=>{l(),!({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_DEV||document.location.search.includes("no-stats"))&&c()});const l=()=>{Sc(Ti(i,"categories")).then(f=>{f.exists()?r.value=f.val().data:console.log("No data available")}).catch(f=>{s.value=f})},c=()=>{Sc(Ti(i,"visits")).then(f=>{f.exists()?(o.value=f.val().data,o.value++,u()):console.log("No data available")}).catch(f=>{console.log(f)})},u=()=>{Sh(Co(n,"/visits/"),{data:Gr(o),token:a})};return(f,h)=>(Ee(),He(Pe,null,[fe(F1),B("div",Y1,[B("main",q1,[r.value.length?oa("",!0):(Ee(),He("div",K1,X1)),s.value?(Ee(),He("div",J1,gr(s.value),1)):(Ee(!0),He(Pe,{key:2},Mu(r.value,m=>(Ee(),es(V1,{category:m},null,8,["category"]))),256))])])],64))}};function Tc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tc(Object(n),!0).forEach(function(i){pe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tc(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $r(t){return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$r(t)}function eb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ac(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function tb(t,e,n){return e&&Ac(t.prototype,e),n&&Ac(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ha(t,e){return ib(t)||sb(t,e)||Nh(t,e)||ab()}function zi(t){return nb(t)||rb(t)||Nh(t)||ob()}function nb(t){if(Array.isArray(t))return xo(t)}function ib(t){if(Array.isArray(t))return t}function rb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Nh(t,e){if(!!t){if(typeof t=="string")return xo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xo(t,e)}}function xo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ob(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ab(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nc=function(){},Ua={},kh={},Oh=null,Ph={mark:Nc,measure:Nc};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(kh=document),typeof MutationObserver<"u"&&(Oh=MutationObserver),typeof performance<"u"&&(Ph=performance)}catch{}var lb=Ua.navigator||{},kc=lb.userAgent,Oc=kc===void 0?"":kc,$t=Ua,se=kh,Pc=Oh,er=Ph;$t.document;var xt=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Rh=~Oc.indexOf("MSIE")||~Oc.indexOf("Trident/"),tr,nr,ir,rr,sr,vt="___FONT_AWESOME___",Io=16,Mh="fa",Dh="svg-inline--fa",un="data-fa-i2svg",So="data-fa-pseudo-element",cb="data-fa-pseudo-element-pending",Wa="data-prefix",ja="data-icon",Rc="fontawesome-i2svg",ub="async",fb=["HTML","HEAD","STYLE","SCRIPT"],Lh=function(){try{return!0}catch{return!1}}(),re="classic",le="sharp",Va=[re,le];function Hi(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[re]}})}var Ai=Hi((tr={},pe(tr,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(tr,le,{fa:"solid",fass:"solid","fa-solid":"solid"}),tr)),Ni=Hi((nr={},pe(nr,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(nr,le,{solid:"fass"}),nr)),ki=Hi((ir={},pe(ir,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(ir,le,{fass:"fa-solid"}),ir)),hb=Hi((rr={},pe(rr,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(rr,le,{"fa-solid":"fass"}),rr)),db=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Fh="fa-layers-text",pb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mb=Hi((sr={},pe(sr,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(sr,le,{900:"fass"}),sr)),$h=[1,2,3,4,5,6,7,8,9,10],gb=$h.concat([11,12,13,14,15,16,17,18,19,20]),_b=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oi=new Set;Object.keys(Ni[re]).map(Oi.add.bind(Oi));Object.keys(Ni[le]).map(Oi.add.bind(Oi));var vb=[].concat(Va,zi(Oi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zt.GROUP,Zt.SWAP_OPACITY,Zt.PRIMARY,Zt.SECONDARY]).concat($h.map(function(t){return"".concat(t,"x")})).concat(gb.map(function(t){return"w-".concat(t)})),ai=$t.FontAwesomeConfig||{};function yb(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(se&&typeof se.querySelector=="function"){var wb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wb.forEach(function(t){var e=Ha(t,2),n=e[0],i=e[1],r=bb(yb(n));r!=null&&(ai[i]=r)})}var Bh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mh,replacementClass:Dh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ai.familyPrefix&&(ai.cssPrefix=ai.familyPrefix);var Fn=A(A({},Bh),ai);Fn.autoReplaceSvg||(Fn.observeMutations=!1);var O={};Object.keys(Bh).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Fn[t]=n,li.forEach(function(i){return i(O)})},get:function(){return Fn[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){Fn.cssPrefix=e,li.forEach(function(n){return n(O)})},get:function(){return Fn.cssPrefix}});$t.FontAwesomeConfig=O;var li=[];function Cb(t){return li.push(t),function(){li.splice(li.indexOf(t),1)}}var St=Io,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Eb(t){if(!(!t||!xt)){var e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=se.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return se.head.insertBefore(e,i),t}}var xb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pi(){for(var t=12,e="";t-- >0;)e+=xb[Math.random()*62|0];return e}function Yn(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ya(t){return t.classList?Yn(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ib(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zh(t[n]),'" ')},"").trim()}function ms(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qa(t){return t.size!==lt.size||t.x!==lt.x||t.y!==lt.y||t.rotate!==lt.rotate||t.flipX||t.flipY}function Sb(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Tb(t){var e=t.transform,n=t.width,i=n===void 0?Io:n,r=t.height,s=r===void 0?Io:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Rh?l+="translate(".concat(e.x/St-i/2,"em, ").concat(e.y/St-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/St,"em), calc(-50% + ").concat(e.y/St,"em)) "):l+="translate(".concat(e.x/St,"em, ").concat(e.y/St,"em) "),l+="scale(".concat(e.size/St*(e.flipX?-1:1),", ").concat(e.size/St*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ab=`:root, :host {
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
}`;function Hh(){var t=Mh,e=Dh,n=O.cssPrefix,i=O.replacementClass,r=Ab;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Mc=!1;function zs(){O.autoAddCss&&!Mc&&(Eb(Hh()),Mc=!0)}var Nb={mixout:function(){return{dom:{css:Hh,insertCss:zs}}},hooks:function(){return{beforeDOMElementCreation:function(){zs()},beforeI2svg:function(){zs()}}}},yt=$t||{};yt[vt]||(yt[vt]={});yt[vt].styles||(yt[vt].styles={});yt[vt].hooks||(yt[vt].hooks={});yt[vt].shims||(yt[vt].shims=[]);var Je=yt[vt],Uh=[],kb=function t(){se.removeEventListener("DOMContentLoaded",t),Br=1,Uh.map(function(e){return e()})},Br=!1;xt&&(Br=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Br||se.addEventListener("DOMContentLoaded",kb));function Ob(t){!xt||(Br?setTimeout(t,0):Uh.push(t))}function Ui(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?zh(t):"<".concat(e," ").concat(Ib(i),">").concat(s.map(Ui).join(""),"</").concat(e,">")}function Dc(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pb=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Hs=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Pb(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Rb(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function To(t){var e=Rb(t);return e.length===1?e[0].toString(16):null}function Mb(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Lc(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Ao(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Lc(e);typeof Je.hooks.addPack=="function"&&!r?Je.hooks.addPack(t,Lc(e)):Je.styles[t]=A(A({},Je.styles[t]||{}),s),t==="fas"&&Ao("fa",e)}var or,ar,lr,vn=Je.styles,Db=Je.shims,Lb=(or={},pe(or,re,Object.values(ki[re])),pe(or,le,Object.values(ki[le])),or),Ka=null,Wh={},jh={},Vh={},Yh={},qh={},Fb=(ar={},pe(ar,re,Object.keys(Ai[re])),pe(ar,le,Object.keys(Ai[le])),ar);function $b(t){return~vb.indexOf(t)}function Bb(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!$b(r)?r:null}var Kh=function(){var e=function(s){return Hs(vn,function(o,a,l){return o[l]=Hs(a,s,{}),o},{})};Wh=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),jh=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),qh=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in vn||O.autoFetchSvg,i=Hs(Db,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Vh=i.names,Yh=i.unicodes,Ka=gs(O.styleDefault,{family:O.familyDefault})};Cb(function(t){Ka=gs(t.styleDefault,{family:O.familyDefault})});Kh();function Ga(t,e){return(Wh[t]||{})[e]}function zb(t,e){return(jh[t]||{})[e]}function en(t,e){return(qh[t]||{})[e]}function Gh(t){return Vh[t]||{prefix:null,iconName:null}}function Hb(t){var e=Yh[t],n=Ga("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bt(){return Ka}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function gs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?re:n,r=Ai[i][t],s=Ni[i][t]||Ni[i][r],o=t in Je.styles?t:null;return s||o||null}var Fc=(lr={},pe(lr,re,Object.keys(ki[re])),pe(lr,le,Object.keys(ki[le])),lr);function _s(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},pe(e,re,"".concat(O.cssPrefix,"-").concat(re)),pe(e,le,"".concat(O.cssPrefix,"-").concat(le)),e),o=null,a=re;(t.includes(s[re])||t.some(function(c){return Fc[re].includes(c)}))&&(a=re),(t.includes(s[le])||t.some(function(c){return Fc[le].includes(c)}))&&(a=le);var l=t.reduce(function(c,u){var f=Bb(O.cssPrefix,u);if(vn[u]?(u=Lb[a].includes(u)?hb[a][u]:u,o=u,c.prefix=u):Fb[a].indexOf(u)>-1?(o=u,c.prefix=gs(u,{family:a})):f?c.iconName=f:u!==O.replacementClass&&u!==s[re]&&u!==s[le]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?Gh(c.iconName):{},m=en(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!vn.far&&vn.fas&&!O.autoFetchSvg&&(c.prefix="fas")}return c},Qa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===le&&(vn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=en(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Bt()||"fas"),l}var Ub=function(){function t(){eb(this,t),this.definitions={}}return tb(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=A(A({},n.definitions[a]||{}),o[a]),Ao(a,o[a]);var l=ki[re][a];l&&Ao(l,o[a]),Kh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),$c=[],yn={},Nn={},Wb=Object.keys(Nn);function jb(t,e){var n=e.mixoutsTo;return $c=t,yn={},Object.keys(Nn).forEach(function(i){Wb.indexOf(i)===-1&&delete Nn[i]}),$c.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),$r(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){yn[o]||(yn[o]=[]),yn[o].push(s[o])})}i.provides&&i.provides(Nn)}),n}function No(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=yn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function fn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=yn[t]||[];r.forEach(function(s){s.apply(null,n)})}function bt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nn[t]?Nn[t].apply(null,e):void 0}function ko(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Bt();if(!!e)return e=en(n,e)||e,Dc(Qh.definitions,n,e)||Dc(Je.styles,n,e)}var Qh=new Ub,Vb=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,fn("noAuto")},Yb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xt?(fn("beforeI2svg",e),bt("pseudoElements2svg",e),bt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Ob(function(){Kb({autoReplaceSvgRoot:n}),fn("watch",e)})}},qb={icon:function(e){if(e===null)return null;if($r(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:en(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=gs(e[0]);return{prefix:i,iconName:en(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(db))){var r=_s(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Bt(),iconName:en(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Bt();return{prefix:s,iconName:en(s,e)||e}}}},Be={noAuto:Vb,config:O,dom:Yb,parse:qb,library:Qh,findIconDefinition:ko,toHtml:Ui},Kb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?se:n;(Object.keys(Je.styles).length>0||O.autoFetchSvg)&&xt&&O.autoReplaceSvg&&Be.dom.i2svg({node:i})};function vs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Ui(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!xt){var i=se.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Gb(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(qa(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=ms(A(A({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Qb(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:o}),children:i}]}]}function Xa(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,_=i.found?i:n,C=_.width,P=_.height,w=r==="fak",N=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(ze){return f.classes.indexOf(ze)===-1}).filter(function(ze){return ze!==""||!!ze}).concat(f.classes).join(" "),L={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(P)})},H=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(C/P*16*.0625,"em")}:{};m&&(L.attributes[un]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||Pi())},children:[l]}),delete L.attributes.title);var J=A(A({},L),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:A(A({},H),f.styles)}),Ne=i.found&&n.found?bt("generateAbstractMask",J)||{children:[],attributes:{}}:bt("generateAbstractIcon",J)||{children:[],attributes:{}},be=Ne.children,We=Ne.attributes;return J.children=be,J.attributes=We,a?Qb(J):Gb(J)}function Bc(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=A(A(A({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[un]="");var u=A({},o.styles);qa(r)&&(u.transform=Tb({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=ms(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Xb(t){var e=t.content,n=t.title,i=t.extra,r=A(A(A({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=ms(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Us=Je.styles;function Oo(t){var e=t[0],n=t[1],i=t.slice(4),r=Ha(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Zt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Zt.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Jb={found:!1,width:512,height:512};function Zb(t,e){!Lh&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Po(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Bt()),new Promise(function(i,r){if(bt("missingIconAbstract"),n==="fa"){var s=Gh(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Us[e]&&Us[e][t]){var o=Us[e][t];return i(Oo(o))}Zb(t,e),i(A(A({},Jb),{},{icon:O.showMissingIcons&&t?bt("missingIconAbstract")||{}:{}}))})}var zc=function(){},Ro=O.measurePerformance&&er&&er.mark&&er.measure?er:{mark:zc,measure:zc},ti='FA "6.2.0"',e0=function(e){return Ro.mark("".concat(ti," ").concat(e," begins")),function(){return Xh(e)}},Xh=function(e){Ro.mark("".concat(ti," ").concat(e," ends")),Ro.measure("".concat(ti," ").concat(e),"".concat(ti," ").concat(e," begins"),"".concat(ti," ").concat(e," ends"))},Ja={begin:e0,end:Xh},pr=function(){};function Hc(t){var e=t.getAttribute?t.getAttribute(un):null;return typeof e=="string"}function t0(t){var e=t.getAttribute?t.getAttribute(Wa):null,n=t.getAttribute?t.getAttribute(ja):null;return e&&n}function n0(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function i0(){if(O.autoReplaceSvg===!0)return mr.replace;var t=mr[O.autoReplaceSvg];return t||mr.replace}function r0(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function s0(t){return se.createElement(t)}function Jh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?r0:s0:n;if(typeof t=="string")return se.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Jh(o,{ceFn:i}))}),r}function o0(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var mr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Jh(r),n)}),n.getAttribute(un)===null&&O.keepOriginalSource){var i=se.createComment(o0(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Ya(n).indexOf(O.replacementClass))return mr.replace(e);var r=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return Ui(a)}).join(`
`);n.setAttribute(un,""),n.innerHTML=o}};function Uc(t){t()}function Zh(t,e){var n=typeof e=="function"?e:pr;if(t.length===0)n();else{var i=Uc;O.mutateApproach===ub&&(i=$t.requestAnimationFrame||Uc),i(function(){var r=i0(),s=Ja.begin("mutate");t.map(r),s(),n()})}}var Za=!1;function ed(){Za=!0}function Mo(){Za=!1}var zr=null;function Wc(t){if(!!Pc&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?pr:e,i=t.nodeCallback,r=i===void 0?pr:i,s=t.pseudoElementsCallback,o=s===void 0?pr:s,a=t.observeMutationsRoot,l=a===void 0?se:a;zr=new Pc(function(c){if(!Za){var u=Bt();Yn(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Hc(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Hc(f.target)&&~_b.indexOf(f.attributeName))if(f.attributeName==="class"&&t0(f.target)){var h=_s(Ya(f.target)),m=h.prefix,_=h.iconName;f.target.setAttribute(Wa,m||u),_&&f.target.setAttribute(ja,_)}else n0(f.target)&&r(f.target)})}}),xt&&zr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a0(){!zr||zr.disconnect()}function l0(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function c0(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=_s(Ya(t));return r.prefix||(r.prefix=Bt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=zb(r.prefix,t.innerText)||Ga(r.prefix,To(t.innerText))),!r.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function u0(t){var e=Yn(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(i||Pi()):(e["aria-hidden"]="true",e.focusable="false")),e}function f0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=c0(t),i=n.iconName,r=n.prefix,s=n.rest,o=u0(t),a=No("parseNodeAttributes",{},t),l=e.styleParser?l0(t):[];return A({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var h0=Je.styles;function td(t){var e=O.autoReplaceSvg==="nest"?jc(t,{styleParser:!1}):jc(t);return~e.extra.classes.indexOf(Fh)?bt("generateLayersText",t,e):bt("generateSvgReplacementMutation",t,e)}var zt=new Set;Va.map(function(t){zt.add("fa-".concat(t))});Object.keys(Ai[re]).map(zt.add.bind(zt));Object.keys(Ai[le]).map(zt.add.bind(zt));zt=zi(zt);function Vc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xt)return Promise.resolve();var n=se.documentElement.classList,i=function(f){return n.add("".concat(Rc,"-").concat(f))},r=function(f){return n.remove("".concat(Rc,"-").concat(f))},s=O.autoFetchSvg?zt:Va.map(function(u){return"fa-".concat(u)}).concat(Object.keys(h0));s.includes("fa")||s.push("fa");var o=[".".concat(Fh,":not([").concat(un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Yn(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ja.begin("onTree"),c=a.reduce(function(u,f){try{var h=td(f);h&&u.push(h)}catch(m){Lh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Zh(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function d0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;td(t).then(function(n){n&&Zh([n],e)})}function p0(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:ko(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ko(r||{})),t(i,A(A({},n),{},{mask:r}))}}var m0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?lt:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,C=n.classes,P=C===void 0?[]:C,w=n.attributes,N=w===void 0?{}:w,L=n.styles,H=L===void 0?{}:L;if(!!e){var J=e.prefix,Ne=e.iconName,be=e.icon;return vs(A({type:"icon"},e),function(){return fn("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(h?N["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(_||Pi()):(N["aria-hidden"]="true",N.focusable="false")),Xa({icons:{main:Oo(be),mask:l?Oo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:J,iconName:Ne,transform:A(A({},lt),r),symbol:o,title:h,maskId:u,titleId:_,extra:{attributes:N,styles:H,classes:P}})})}},g0={mixout:function(){return{icon:p0(m0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Vc,n.nodeCallback=d0,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?se:i,s=n.callback,o=s===void 0?function(){}:s;return Vc(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,_){Promise.all([Po(r,a),u.iconName?Po(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var P=Ha(C,2),w=P[0],N=P[1];m([n,Xa({icons:{main:w,mask:N},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ms(a);l.length>0&&(r.style=l);var c;return qa(o)&&(c=bt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},_0={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return vs({type:"layer"},function(){fn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(zi(s)).join(" ")},children:o}]})}}}},v0={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return vs({type:"counter",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),Xb({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(zi(a))}})})}}}},y0={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?lt:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return vs({type:"text",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),Bc({content:n,transform:A(A({},lt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(O.cssPrefix,"-layers-text")].concat(zi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(Rh){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return O.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bc({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},b0=new RegExp('"',"ug"),Yc=[1105920,1112319];function w0(t){var e=t.replace(b0,""),n=Mb(e,0),i=n>=Yc[0]&&n<=Yc[1],r=e.length===2?e[0]===e[1]:!1;return{value:To(r?e[0]:e),isSecondary:i||r}}function qc(t,e){var n="".concat(cb).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Yn(t.children),o=s.filter(function(be){return be.getAttribute(So)===e})[0],a=$t.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(pb),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?le:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ni[h][l[2].toLowerCase()]:mb[h][c],_=w0(f),C=_.value,P=_.isSecondary,w=l[0].startsWith("FontAwesome"),N=Ga(m,C),L=N;if(w){var H=Hb(C);H.iconName&&H.prefix&&(N=H.iconName,m=H.prefix)}if(N&&!P&&(!o||o.getAttribute(Wa)!==m||o.getAttribute(ja)!==L)){t.setAttribute(n,L),o&&t.removeChild(o);var J=f0(),Ne=J.extra;Ne.attributes[So]=e,Po(N,m).then(function(be){var We=Xa(A(A({},J),{},{icons:{main:be,mask:Qa()},prefix:m,iconName:L,extra:Ne,watchable:!0})),ze=se.createElement("svg");e==="::before"?t.insertBefore(ze,t.firstChild):t.appendChild(ze),ze.outerHTML=We.map(function(ft){return Ui(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function C0(t){return Promise.all([qc(t,"::before"),qc(t,"::after")])}function E0(t){return t.parentNode!==document.head&&!~fb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(So)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Kc(t){if(!!xt)return new Promise(function(e,n){var i=Yn(t.querySelectorAll("*")).filter(E0).map(C0),r=Ja.begin("searchPseudoElements");ed(),Promise.all(i).then(function(){r(),Mo(),e()}).catch(function(){r(),Mo(),n()})})}var x0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Kc,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?se:i;O.searchPseudoElements&&Kc(r)}}},Gc=!1,I0={mixout:function(){return{dom:{unwatch:function(){ed(),Gc=!0}}}},hooks:function(){return{bootstrap:function(){Wc(No("mutationObserverCallbacks",{}))},noAuto:function(){a0()},watch:function(n){var i=n.observeMutationsRoot;Gc?Mo():Wc(No("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Qc=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},S0={mixout:function(){return{parse:{transform:function(n){return Qc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Qc(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:A({},m.outer),children:[{tag:"g",attributes:A({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:A(A({},i.icon.attributes),m.path)}]}]}}}},Ws={x:0,y:0,width:"100%",height:"100%"};function Xc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function T0(t){return t.tag==="g"?t.children:[t]}var A0={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?_s(r.split(" ").map(function(o){return o.trim()})):Qa();return s.prefix||(s.prefix=Bt()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,m=Sb({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:A(A({},Ws),{},{fill:"white"})},C=u.children?{children:u.children.map(Xc)}:{},P={tag:"g",attributes:A({},m.inner),children:[Xc(A({tag:u.tag,attributes:A(A({},u.attributes),m.path)},C))]},w={tag:"g",attributes:A({},m.outer),children:[P]},N="mask-".concat(a||Pi()),L="clip-".concat(a||Pi()),H={tag:"mask",attributes:A(A({},Ws),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,w]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:T0(h)},H]};return i.push(J,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(N,")")},Ws)}),{children:i,attributes:r}}}},N0={provides:function(e){var n=!1;$t.matchMedia&&(n=$t.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:A(A({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},k0={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},O0=[Nb,g0,_0,v0,y0,x0,I0,S0,A0,N0,k0];jb(O0,{mixoutsTo:Be});Be.noAuto;var nd=Be.config,P0=Be.library;Be.dom;var Hr=Be.parse;Be.findIconDefinition;Be.toHtml;var R0=Be.icon;Be.layer;var M0=Be.text;Be.counter;function Jc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ke(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jc(Object(n),!0).forEach(function(i){ke(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jc(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ur(t){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ur(t)}function ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function L0(t,e){if(t==null)return{};var n=D0(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function Do(t){return F0(t)||$0(t)||B0(t)||z0()}function F0(t){if(Array.isArray(t))return Lo(t)}function $0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function B0(t,e){if(!!t){if(typeof t=="string")return Lo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lo(t,e)}}function Lo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function z0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},id={exports:{}};(function(t){(function(e){var n=function(w,N,L){if(!c(N)||f(N)||h(N)||m(N)||l(N))return N;var H,J=0,Ne=0;if(u(N))for(H=[],Ne=N.length;J<Ne;J++)H.push(n(w,N[J],L));else{H={};for(var be in N)Object.prototype.hasOwnProperty.call(N,be)&&(H[w(be,L)]=n(w,N[be],L))}return H},i=function(w,N){N=N||{};var L=N.separator||"_",H=N.split||/(?=[A-Z])/;return w.split(H).join(L)},r=function(w){return _(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(N,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var N=r(w);return N.substr(0,1).toUpperCase()+N.substr(1)},o=function(w,N){return i(w,N).toLowerCase()},a=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},h=function(w){return a.call(w)=="[object RegExp]"},m=function(w){return a.call(w)=="[object Boolean]"},_=function(w){return w=w-0,w===w},C=function(w,N){var L=N&&"process"in N?N.process:N;return typeof L!="function"?w:function(H,J){return L(H,w,J)}},P={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(w,N){return n(C(r,N),w)},decamelizeKeys:function(w,N){return n(C(o,N),w,N)},pascalizeKeys:function(w,N){return n(C(s,N),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(H0)})(id);var U0=id.exports,W0=["class","style"];function j0(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=U0.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function V0(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function el(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return el(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=V0(u);break;case"style":l.style=j0(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=L0(n,W0);return qu(t.tag,Ke(Ke(Ke({},e),{},{class:r.class,style:Ke(Ke({},r.style),o)},r.attrs),a),i)}var rd=!1;try{rd=!0}catch{}function Y0(){if(!rd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ci(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ke({},t,e):{}}function q0(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ke(e,"fa-".concat(t.size),t.size!==null),ke(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ke(e,"fa-pull-".concat(t.pull),t.pull!==null),ke(e,"fa-swap-opacity",t.swapOpacity),ke(e,"fa-bounce",t.bounce),ke(e,"fa-shake",t.shake),ke(e,"fa-beat",t.beat),ke(e,"fa-fade",t.fade),ke(e,"fa-beat-fade",t.beatFade),ke(e,"fa-flash",t.flash),ke(e,"fa-spin-pulse",t.spinPulse),ke(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Zc(t){if(t&&Ur(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hr.icon)return Hr.icon(t);if(t===null)return null;if(Ur(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var K0=ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Fe(function(){return Zc(e.icon)}),s=Fe(function(){return ci("classes",q0(e))}),o=Fe(function(){return ci("transform",typeof e.transform=="string"?Hr.transform(e.transform):e.transform)}),a=Fe(function(){return ci("mask",Zc(e.mask))}),l=Fe(function(){return R0(r.value,Ke(Ke(Ke(Ke({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});xn(l,function(u){if(!u)return Y0("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Fe(function(){return l.value?el(l.value.abstract[0],{},i):null});return function(){return c.value}}});ea({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=nd.familyPrefix,s=Fe(function(){return["".concat(r,"-layers")].concat(Do(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return qu("div",{class:s.value},i.default?i.default():[])}}});ea({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=nd.familyPrefix,s=Fe(function(){return ci("classes",[].concat(Do(e.counter?["".concat(r,"-layers-counter")]:[]),Do(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Fe(function(){return ci("transform",typeof e.transform=="string"?Hr.transform(e.transform):e.transform)}),a=Fe(function(){var c=M0(e.value.toString(),Ke(Ke({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Fe(function(){return el(a.value,{},i)});return function(){return l.value}}});var G0={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},Q0={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305 264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z"]},X0={prefix:"fas",iconName:"money-bills",icon:[640,512,[],"e1f3","M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM448 208c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"]},J0={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16zM160 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},Z0={prefix:"fas",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"]},e2={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},t2={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},n2={prefix:"fas",iconName:"arrow-down-a-z",icon:[576,512,["sort-alpha-asc","sort-alpha-down"],"f15d","M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z"]},i2={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},r2={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},s2={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},o2={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},a2={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z"]};P0.add(i2,Q0,J0,Z0,e2,G0,X0,o2,r2,t2,s2,n2,a2);Am(Z1).component("font-awesome-icon",K0).mount("#app");

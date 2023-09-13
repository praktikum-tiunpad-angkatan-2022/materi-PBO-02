(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Na(e,t){const s=Object.create(null),a=e.split(",");for(let l=0;l<a.length;l++)s[a[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dd=Na(pd);function Ec(e){return!!e||e===""}function et(e){if(se(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],l=Le(a)?hd(a):et(a);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Le(e))return e;if(je(e))return e}}const fd=/;(?![^(]*\))/g,md=/:(.+)/;function hd(e){const t={};return e.split(fd).forEach(s=>{if(s){const a=s.split(md);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Re(e){let t="";if(Le(e))t=e;else if(se(e))for(let s=0;s<e.length;s++){const a=Re(e[s]);a&&(t+=a+" ")}else if(je(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function be(e){if(!e)return null;let{class:t,style:s}=e;return t&&!Le(t)&&(e.class=Re(t)),s&&(e.style=et(s)),e}const gd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",yd=Na(gd),jn=e=>Le(e)?e:e==null?"":se(e)||je(e)&&(e.toString===Pc||!ie(e.toString))?JSON.stringify(e,Oc,2):String(e),Oc=(e,t)=>t&&t.__v_isRef?Oc(e,t.value):Gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,l])=>(s[`${a} =>`]=l,s),{})}:Sc(t)?{[`Set(${t.size})`]:[...t.values()]}:je(t)&&!se(t)&&!$c(t)?String(t):t,De={},Zn=[],Pt=()=>{},vd=()=>!1,_d=/^on[^a-z]/,qa=e=>_d.test(e),kr=e=>e.startsWith("onUpdate:"),rt=Object.assign,xr=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},bd=Object.prototype.hasOwnProperty,he=(e,t)=>bd.call(e,t),se=Array.isArray,Gn=e=>Ha(e)==="[object Map]",Sc=e=>Ha(e)==="[object Set]",ie=e=>typeof e=="function",Le=e=>typeof e=="string",Ar=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Dc=e=>je(e)&&ie(e.then)&&ie(e.catch),Pc=Object.prototype.toString,Ha=e=>Pc.call(e),kd=e=>Ha(e).slice(8,-1),$c=e=>Ha(e)==="[object Object]",wr=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ya=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},xd=/-(\w)/g,Ut=Va(e=>e.replace(xd,(t,s)=>s?s.toUpperCase():"")),Ad=/\B([A-Z])/g,Rn=Va(e=>e.replace(Ad,"-$1").toLowerCase()),Ka=Va(e=>e.charAt(0).toUpperCase()+e.slice(1)),ll=Va(e=>e?`on${Ka(e)}`:""),Ls=(e,t)=>!Object.is(e,t),Qn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},wa=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Pl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let yo;const wd=()=>yo||(yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ft;class Mc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ft&&(this.parent=ft,this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(t){if(this.active){const s=ft;try{return ft=this,t()}finally{ft=s}}}on(){ft=this}off(){ft=this.parent}stop(t){if(this.active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function Bd(e){return new Mc(e)}function Cd(e,t=ft){t&&t.active&&t.effects.push(e)}function Fc(){return ft}function Tc(e){ft&&ft.cleanups.push(e)}const Br=e=>{const t=new Set(e);return t.w=0,t.n=0,t},jc=e=>(e.w&fn)>0,Ic=e=>(e.n&fn)>0,Ed=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=fn},Od=e=>{const{deps:t}=e;if(t.length){let s=0;for(let a=0;a<t.length;a++){const l=t[a];jc(l)&&!Ic(l)?l.delete(e):t[s++]=l,l.w&=~fn,l.n&=~fn}t.length=s}},$l=new WeakMap;let Bs=0,fn=1;const Ml=30;let Ot;const Pn=Symbol(""),Fl=Symbol("");class Cr{constructor(t,s=null,a){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Cd(this,a)}run(){if(!this.active)return this.fn();let t=Ot,s=on;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ot,Ot=this,on=!0,fn=1<<++Bs,Bs<=Ml?Ed(this):vo(this),this.fn()}finally{Bs<=Ml&&Od(this),fn=1<<--Bs,Ot=this.parent,on=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(vo(this),this.onStop&&this.onStop(),this.active=!1)}}function vo(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let on=!0;const Rc=[];function us(){Rc.push(on),on=!1}function ps(){const e=Rc.pop();on=e===void 0?!0:e}function _t(e,t,s){if(on&&Ot){let a=$l.get(e);a||$l.set(e,a=new Map);let l=a.get(s);l||a.set(s,l=Br()),Lc(l)}}function Lc(e,t){let s=!1;Bs<=Ml?Ic(e)||(e.n|=fn,s=!jc(e)):s=!e.has(Ot),s&&(e.add(Ot),Ot.deps.push(e))}function Qt(e,t,s,a,l,r){const o=$l.get(e);if(!o)return;let i=[];if(t==="clear")i=[...o.values()];else if(s==="length"&&se(e))o.forEach((c,u)=>{(u==="length"||u>=a)&&i.push(c)});else switch(s!==void 0&&i.push(o.get(s)),t){case"add":se(e)?wr(s)&&i.push(o.get("length")):(i.push(o.get(Pn)),Gn(e)&&i.push(o.get(Fl)));break;case"delete":se(e)||(i.push(o.get(Pn)),Gn(e)&&i.push(o.get(Fl)));break;case"set":Gn(e)&&i.push(o.get(Pn));break}if(i.length===1)i[0]&&Tl(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Tl(Br(c))}}function Tl(e,t){const s=se(e)?e:[...e];for(const a of s)a.computed&&_o(a);for(const a of s)a.computed||_o(a)}function _o(e,t){(e!==Ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Sd=Na("__proto__,__v_isRef,__isVue"),Nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ar)),Dd=Er(),Pd=Er(!1,!0),$d=Er(!0),bo=Md();function Md(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const a=xe(this);for(let r=0,o=this.length;r<o;r++)_t(a,"get",r+"");const l=a[t](...s);return l===-1||l===!1?a[t](...s.map(xe)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){us();const a=xe(this)[t].apply(this,s);return ps(),a}}),e}function Er(e=!1,t=!1){return function(a,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?Yd:Uc:t?Kc:Vc).get(a))return a;const o=se(a);if(!e&&o&&he(bo,l))return Reflect.get(bo,l,r);const i=Reflect.get(a,l,r);return(Ar(l)?Nc.has(l):Sd(l))||(e||_t(a,"get",l),t)?i:Ae(i)?o&&wr(l)?i:i.value:je(i)?e?Jn(i):Fe(i):i}}const Fd=qc(),Td=qc(!0);function qc(e=!1){return function(s,a,l,r){let o=s[a];if(as(o)&&Ae(o)&&!Ae(l))return!1;if(!e&&(!Ba(l)&&!as(l)&&(o=xe(o),l=xe(l)),!se(s)&&Ae(o)&&!Ae(l)))return o.value=l,!0;const i=se(s)&&wr(a)?Number(a)<s.length:he(s,a),c=Reflect.set(s,a,l,r);return s===xe(r)&&(i?Ls(l,o)&&Qt(s,"set",a,l):Qt(s,"add",a,l)),c}}function jd(e,t){const s=he(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&s&&Qt(e,"delete",t,void 0),a}function Id(e,t){const s=Reflect.has(e,t);return(!Ar(t)||!Nc.has(t))&&_t(e,"has",t),s}function Rd(e){return _t(e,"iterate",se(e)?"length":Pn),Reflect.ownKeys(e)}const Hc={get:Dd,set:Fd,deleteProperty:jd,has:Id,ownKeys:Rd},Ld={get:$d,set(e,t){return!0},deleteProperty(e,t){return!0}},Nd=rt({},Hc,{get:Pd,set:Td}),Or=e=>e,Ua=e=>Reflect.getPrototypeOf(e);function oa(e,t,s=!1,a=!1){e=e.__v_raw;const l=xe(e),r=xe(t);s||(t!==r&&_t(l,"get",t),_t(l,"get",r));const{has:o}=Ua(l),i=a?Or:s?Pr:Ns;if(o.call(l,t))return i(e.get(t));if(o.call(l,r))return i(e.get(r));e!==l&&e.get(t)}function ia(e,t=!1){const s=this.__v_raw,a=xe(s),l=xe(e);return t||(e!==l&&_t(a,"has",e),_t(a,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function ca(e,t=!1){return e=e.__v_raw,!t&&_t(xe(e),"iterate",Pn),Reflect.get(e,"size",e)}function ko(e){e=xe(e);const t=xe(this);return Ua(t).has.call(t,e)||(t.add(e),Qt(t,"add",e,e)),this}function xo(e,t){t=xe(t);const s=xe(this),{has:a,get:l}=Ua(s);let r=a.call(s,e);r||(e=xe(e),r=a.call(s,e));const o=l.call(s,e);return s.set(e,t),r?Ls(t,o)&&Qt(s,"set",e,t):Qt(s,"add",e,t),this}function Ao(e){const t=xe(this),{has:s,get:a}=Ua(t);let l=s.call(t,e);l||(e=xe(e),l=s.call(t,e)),a&&a.call(t,e);const r=t.delete(e);return l&&Qt(t,"delete",e,void 0),r}function wo(){const e=xe(this),t=e.size!==0,s=e.clear();return t&&Qt(e,"clear",void 0,void 0),s}function ua(e,t){return function(a,l){const r=this,o=r.__v_raw,i=xe(o),c=t?Or:e?Pr:Ns;return!e&&_t(i,"iterate",Pn),o.forEach((u,p)=>a.call(l,c(u),c(p),r))}}function pa(e,t,s){return function(...a){const l=this.__v_raw,r=xe(l),o=Gn(r),i=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=l[e](...a),p=s?Or:t?Pr:Ns;return!t&&_t(r,"iterate",c?Fl:Pn),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:i?[p(f[0]),p(f[1])]:p(f),done:m}},[Symbol.iterator](){return this}}}}function nn(e){return function(...t){return e==="delete"?!1:this}}function qd(){const e={get(r){return oa(this,r)},get size(){return ca(this)},has:ia,add:ko,set:xo,delete:Ao,clear:wo,forEach:ua(!1,!1)},t={get(r){return oa(this,r,!1,!0)},get size(){return ca(this)},has:ia,add:ko,set:xo,delete:Ao,clear:wo,forEach:ua(!1,!0)},s={get(r){return oa(this,r,!0)},get size(){return ca(this,!0)},has(r){return ia.call(this,r,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:ua(!0,!1)},a={get(r){return oa(this,r,!0,!0)},get size(){return ca(this,!0)},has(r){return ia.call(this,r,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=pa(r,!1,!1),s[r]=pa(r,!0,!1),t[r]=pa(r,!1,!0),a[r]=pa(r,!0,!0)}),[e,s,t,a]}const[Hd,Vd,Kd,Ud]=qd();function Sr(e,t){const s=t?e?Ud:Kd:e?Vd:Hd;return(a,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?a:Reflect.get(he(s,l)&&l in a?s:a,l,r)}const zd={get:Sr(!1,!1)},Wd={get:Sr(!1,!0)},Jd={get:Sr(!0,!1)},Vc=new WeakMap,Kc=new WeakMap,Uc=new WeakMap,Yd=new WeakMap;function Zd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(e){return e.__v_skip||!Object.isExtensible(e)?0:Zd(kd(e))}function Fe(e){return as(e)?e:Dr(e,!1,Hc,zd,Vc)}function Qd(e){return Dr(e,!1,Nd,Wd,Kc)}function Jn(e){return Dr(e,!0,Ld,Jd,Uc)}function Dr(e,t,s,a,l){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const o=Gd(e);if(o===0)return e;const i=new Proxy(e,o===2?a:s);return l.set(e,i),i}function Xn(e){return as(e)?Xn(e.__v_raw):!!(e&&e.__v_isReactive)}function as(e){return!!(e&&e.__v_isReadonly)}function Ba(e){return!!(e&&e.__v_isShallow)}function zc(e){return Xn(e)||as(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function za(e){return wa(e,"__v_skip",!0),e}const Ns=e=>je(e)?Fe(e):e,Pr=e=>je(e)?Jn(e):e;function $r(e){on&&Ot&&(e=xe(e),Lc(e.dep||(e.dep=Br())))}function Mr(e,t){e=xe(e),e.dep&&Tl(e.dep)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Wc(e,!1)}function Ft(e){return Wc(e,!0)}function Wc(e,t){return Ae(e)?e:new Xd(e,t)}class Xd{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:xe(t),this._value=s?t:Ns(t)}get value(){return $r(this),this._value}set value(t){const s=this.__v_isShallow||Ba(t)||as(t);t=s?t:xe(t),Ls(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Ns(t),Mr(this))}}function k(e){return Ae(e)?e.value:e}const ef={get:(e,t,s)=>k(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const l=e[t];return Ae(l)&&!Ae(s)?(l.value=s,!0):Reflect.set(e,t,s,a)}};function Jc(e){return Xn(e)?e:new Proxy(e,ef)}class tf{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=t(()=>$r(this),()=>Mr(this));this._get=s,this._set=a}get value(){return this._get()}set value(t){this._set(t)}}function Yc(e){return new tf(e)}function nf(e){const t=se(e)?new Array(e.length):{};for(const s in e)t[s]=af(e,s);return t}class sf{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function af(e,t,s){const a=e[t];return Ae(a)?a:new sf(e,t,s)}var Zc;class lf{constructor(t,s,a,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Zc]=!1,this._dirty=!0,this.effect=new Cr(t,()=>{this._dirty||(this._dirty=!0,Mr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=a}get value(){const t=xe(this);return $r(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zc="__v_isReadonly";function rf(e,t,s=!1){let a,l;const r=ie(e);return r?(a=e,l=Pt):(a=e.get,l=e.set),new lf(a,l,r||!l,s)}function cn(e,t,s,a){let l;try{l=a?e(...a):e()}catch(r){Wa(r,t,s)}return l}function $t(e,t,s,a){if(ie(e)){const r=cn(e,t,s,a);return r&&Dc(r)&&r.catch(o=>{Wa(o,t,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push($t(e[r],t,s,a));return l}function Wa(e,t,s,a=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=s;for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,o,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,i]);return}}of(e,s,l,a)}function of(e,t,s,a=!0){console.error(e)}let qs=!1,jl=!1;const Ze=[];let qt=0;const es=[];let Yt=null,An=0;const Gc=Promise.resolve();let Fr=null;function Ge(e){const t=Fr||Gc;return e?t.then(this?e.bind(this):e):t}function cf(e){let t=qt+1,s=Ze.length;for(;t<s;){const a=t+s>>>1;Hs(Ze[a])<e?t=a+1:s=a}return t}function Tr(e){(!Ze.length||!Ze.includes(e,qs&&e.allowRecurse?qt+1:qt))&&(e.id==null?Ze.push(e):Ze.splice(cf(e.id),0,e),Qc())}function Qc(){!qs&&!jl&&(jl=!0,Fr=Gc.then(eu))}function uf(e){const t=Ze.indexOf(e);t>qt&&Ze.splice(t,1)}function pf(e){se(e)?es.push(...e):(!Yt||!Yt.includes(e,e.allowRecurse?An+1:An))&&es.push(e),Qc()}function Bo(e,t=qs?qt+1:0){for(;t<Ze.length;t++){const s=Ze[t];s&&s.pre&&(Ze.splice(t,1),t--,s())}}function Xc(e){if(es.length){const t=[...new Set(es)];if(es.length=0,Yt){Yt.push(...t);return}for(Yt=t,Yt.sort((s,a)=>Hs(s)-Hs(a)),An=0;An<Yt.length;An++)Yt[An]();Yt=null,An=0}}const Hs=e=>e.id==null?1/0:e.id,df=(e,t)=>{const s=Hs(e)-Hs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function eu(e){jl=!1,qs=!0,Ze.sort(df);const t=Pt;try{for(qt=0;qt<Ze.length;qt++){const s=Ze[qt];s&&s.active!==!1&&cn(s,null,14)}}finally{qt=0,Ze.length=0,Xc(),qs=!1,Fr=null,(Ze.length||es.length)&&eu()}}function ff(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||De;let l=s;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in a){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:m}=a[p]||De;m&&(l=s.map(h=>h.trim())),f&&(l=s.map(Pl))}let i,c=a[i=ll(t)]||a[i=ll(Ut(t))];!c&&r&&(c=a[i=ll(Rn(t))]),c&&$t(c,e,6,l);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,$t(u,e,6,l)}}function tu(e,t,s=!1){const a=t.emitsCache,l=a.get(e);if(l!==void 0)return l;const r=e.emits;let o={},i=!1;if(!ie(e)){const c=u=>{const p=tu(u,t,!0);p&&(i=!0,rt(o,p))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(je(e)&&a.set(e,null),null):(se(r)?r.forEach(c=>o[c]=null):rt(o,r),je(e)&&a.set(e,o),o)}function Ja(e,t){return!e||!qa(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Rn(t))||he(e,t))}let Qe=null,Ya=null;function Ca(e){const t=Qe;return Qe=e,Ya=e&&e.type.__scopeId||null,t}function Dw(e){Ya=e}function Pw(){Ya=null}function z(e,t=Qe,s){if(!t||e._n)return e;const a=(...l)=>{a._d&&jo(-1);const r=Ca(t),o=e(...l);return Ca(r),a._d&&jo(1),o};return a._n=!0,a._c=!0,a._d=!0,a}function rl(e){const{type:t,vnode:s,proxy:a,withProxy:l,props:r,propsOptions:[o],slots:i,attrs:c,emit:u,render:p,renderCache:f,data:m,setupState:h,ctx:g,inheritAttrs:b}=e;let _,C;const B=Ca(e);try{if(s.shapeFlag&4){const O=l||a;_=Nt(p.call(O,O,f,r,h,m,g)),C=c}else{const O=t;_=Nt(O.length>1?O(r,{attrs:c,slots:i,emit:u}):O(r,null)),C=t.props?c:mf(c)}}catch(O){Os.length=0,Wa(O,e,1),_=j(mn)}let A=_;if(C&&b!==!1){const O=Object.keys(C),{shapeFlag:T}=A;O.length&&T&7&&(o&&O.some(kr)&&(C=hf(C,o)),A=In(A,C))}return s.dirs&&(A=In(A),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&(A.transition=s.transition),_=A,Ca(B),_}const mf=e=>{let t;for(const s in e)(s==="class"||s==="style"||qa(s))&&((t||(t={}))[s]=e[s]);return t},hf=(e,t)=>{const s={};for(const a in e)(!kr(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function gf(e,t,s){const{props:a,children:l,component:r}=e,{props:o,children:i,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return a?Co(a,o,u):!!o;if(c&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const m=p[f];if(o[m]!==a[m]&&!Ja(u,m))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?Co(a,o,u):!0:!!o;return!1}function Co(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let l=0;l<a.length;l++){const r=a[l];if(t[r]!==e[r]&&!Ja(s,r))return!0}return!1}function yf({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const nu=e=>e.__isSuspense;function vf(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):pf(e)}function ht(e,t){if(ze){let s=ze.provides;const a=ze.parent&&ze.parent.provides;a===s&&(s=ze.provides=Object.create(a)),s[e]=t}}function V(e,t,s=!1){const a=ze||Qe;if(a){const l=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&ie(t)?t.call(a.proxy):t}}function Xs(e,t){return jr(e,null,t)}const Eo={};function pe(e,t,s){return jr(e,t,s)}function jr(e,t,{immediate:s,deep:a,flush:l,onTrack:r,onTrigger:o}=De){const i=ze;let c,u=!1,p=!1;if(Ae(e)?(c=()=>e.value,u=Ba(e)):Xn(e)?(c=()=>e,a=!0):se(e)?(p=!0,u=e.some(C=>Xn(C)||Ba(C)),c=()=>e.map(C=>{if(Ae(C))return C.value;if(Xn(C))return En(C);if(ie(C))return cn(C,i,2)})):ie(e)?t?c=()=>cn(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return f&&f(),$t(e,i,3,[m])}:c=Pt,t&&a){const C=c;c=()=>En(C())}let f,m=C=>{f=_.onStop=()=>{cn(C,i,4)}};if(Ks)return m=Pt,t?s&&$t(t,i,3,[c(),p?[]:void 0,m]):c(),Pt;let h=p?[]:Eo;const g=()=>{if(!!_.active)if(t){const C=_.run();(a||u||(p?C.some((B,A)=>Ls(B,h[A])):Ls(C,h)))&&(f&&f(),$t(t,i,3,[C,h===Eo?void 0:h,m]),h=C)}else _.run()};g.allowRecurse=!!t;let b;l==="sync"?b=g:l==="post"?b=()=>We(g,i&&i.suspense):(g.pre=!0,i&&(g.id=i.uid),b=()=>Tr(g));const _=new Cr(c,b);return t?s?g():h=_.run():l==="post"?We(_.run.bind(_),i&&i.suspense):_.run(),()=>{_.stop(),i&&i.scope&&xr(i.scope.effects,_)}}function _f(e,t,s){const a=this.proxy,l=Le(e)?e.includes(".")?su(a,e):()=>a[e]:e.bind(a,a);let r;ie(t)?r=t:(r=t.handler,s=t);const o=ze;rs(this);const i=jr(l,r.bind(a),s);return o?rs(o):$n(),i}function su(e,t){const s=t.split(".");return()=>{let a=e;for(let l=0;l<s.length&&a;l++)a=a[s[l]];return a}}function En(e,t){if(!je(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))En(e.value,t);else if(se(e))for(let s=0;s<e.length;s++)En(e[s],t);else if(Sc(e)||Gn(e))e.forEach(s=>{En(s,t)});else if($c(e))for(const s in e)En(e[s],t);return e}function au(e,t){e.shapeFlag&6&&e.component?au(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ce(e){return ie(e)?{setup:e,name:e.name}:e}const ts=e=>!!e.type.__asyncLoader,lu=e=>e.type.__isKeepAlive,bf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=hn(),a=s.ctx;if(!a.renderer)return()=>{const B=t.default&&t.default();return B&&B.length===1?B[0]:B};const l=new Map,r=new Set;let o=null;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:f}}}=a,m=f("div");a.activate=(B,A,O,T,M)=>{const q=B.component;u(B,A,O,0,i),c(q.vnode,B,A,O,q,i,T,B.slotScopeIds,M),We(()=>{q.isDeactivated=!1,q.a&&Qn(q.a);const ee=B.props&&B.props.onVnodeMounted;ee&&kt(ee,q.parent,B)},i)},a.deactivate=B=>{const A=B.component;u(B,m,null,1,i),We(()=>{A.da&&Qn(A.da);const O=B.props&&B.props.onVnodeUnmounted;O&&kt(O,A.parent,B),A.isDeactivated=!0},i)};function h(B){ol(B),p(B,s,i,!0)}function g(B){l.forEach((A,O)=>{const T=Vl(A.type);T&&(!B||!B(T))&&b(O)})}function b(B){const A=l.get(B);!o||A.type!==o.type?h(A):o&&ol(o),l.delete(B),r.delete(B)}pe(()=>[e.include,e.exclude],([B,A])=>{B&&g(O=>Cs(B,O)),A&&g(O=>!Cs(A,O))},{flush:"post",deep:!0});let _=null;const C=()=>{_!=null&&l.set(_,il(s.subTree))};return ds(C),Ir(C),Ga(()=>{l.forEach(B=>{const{subTree:A,suspense:O}=s,T=il(A);if(B.type===T.type){ol(T);const M=T.component.da;M&&We(M,O);return}h(B)})}),()=>{if(_=null,!t.default)return null;const B=t.default(),A=B[0];if(B.length>1)return o=null,B;if(!ls(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let O=il(A);const T=O.type,M=Vl(ts(O)?O.type.__asyncResolved||{}:T),{include:q,exclude:ee,max:le}=e;if(q&&(!M||!Cs(q,M))||ee&&M&&Cs(ee,M))return o=O,A;const me=O.key==null?T:O.key,ge=l.get(me);return O.el&&(O=In(O),A.shapeFlag&128&&(A.ssContent=O)),_=me,ge?(O.el=ge.el,O.component=ge.component,O.transition&&au(O,O.transition),O.shapeFlag|=512,r.delete(me),r.add(me)):(r.add(me),le&&r.size>parseInt(le,10)&&b(r.values().next().value)),O.shapeFlag|=256,o=O,nu(A.type)?A:O}}},ru=bf;function Cs(e,t){return se(e)?e.some(s=>Cs(s,t)):Le(e)?e.split(",").includes(t):e.test?e.test(t):!1}function kf(e,t){ou(e,"a",t)}function xf(e,t){ou(e,"da",t)}function ou(e,t,s=ze){const a=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Za(t,a,s),s){let l=s.parent;for(;l&&l.parent;)lu(l.parent.vnode)&&Af(a,t,s,l),l=l.parent}}function Af(e,t,s,a){const l=Za(t,e,a,!0);Qa(()=>{xr(a[t],l)},s)}function ol(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function il(e){return e.shapeFlag&128?e.ssContent:e}function Za(e,t,s=ze,a=!1){if(s){const l=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(s.isUnmounted)return;us(),rs(s);const i=$t(t,s,e,o);return $n(),ps(),i});return a?l.unshift(r):l.push(r),r}}const en=e=>(t,s=ze)=>(!Ks||e==="sp")&&Za(e,t,s),iu=en("bm"),ds=en("m"),wf=en("bu"),Ir=en("u"),Ga=en("bum"),Qa=en("um"),Bf=en("sp"),Cf=en("rtg"),Ef=en("rtc");function Of(e,t=ze){Za("ec",e,t)}function Ve(e,t){const s=Qe;if(s===null)return e;const a=el(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,c,u=De]=t[r];ie(o)&&(o={mounted:o,updated:o}),o.deep&&En(i),l.push({dir:o,instance:a,value:i,oldValue:void 0,arg:c,modifiers:u})}return e}function yn(e,t,s,a){const l=e.dirs,r=t&&t.dirs;for(let o=0;o<l.length;o++){const i=l[o];r&&(i.oldValue=r[o].value);let c=i.dir[a];c&&(us(),$t(c,s,8,[e.el,i,e,t]),ps())}}const cu="components",Sf="directives";function Ea(e,t){return uu(cu,e,!0,t)||e}const Df=Symbol();function zt(e){return uu(Sf,e)}function uu(e,t,s=!0,a=!1){const l=Qe||ze;if(l){const r=l.type;if(e===cu){const i=Vl(r,!1);if(i&&(i===t||i===Ut(t)||i===Ka(Ut(t))))return r}const o=Oo(l[e]||r[e],t)||Oo(l.appContext[e],t);return!o&&a?r:o}}function Oo(e,t){return e&&(e[t]||e[Ut(t)]||e[Ka(Ut(t))])}function ea(e,t,s,a){let l;const r=s&&s[a];if(se(e)||Le(e)){l=new Array(e.length);for(let o=0,i=e.length;o<i;o++)l[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){l=new Array(e);for(let o=0;o<e;o++)l[o]=t(o+1,o,void 0,r&&r[o])}else if(je(e))if(e[Symbol.iterator])l=Array.from(e,(o,i)=>t(o,i,void 0,r&&r[i]));else{const o=Object.keys(e);l=new Array(o.length);for(let i=0,c=o.length;i<c;i++){const u=o[i];l[i]=t(e[u],u,i,r&&r[i])}}else l=[];return s&&(s[a]=l),l}function Tt(e,t,s={},a,l){if(Qe.isCE||Qe.parent&&ts(Qe.parent)&&Qe.parent.isCE)return j("slot",t==="default"?null:{name:t},a&&a());let r=e[t];r&&r._c&&(r._d=!1),x();const o=r&&pu(r(s)),i=Y(Be,{key:s.key||o&&o.key||`_${t}`},o||(a?a():[]),o&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function pu(e){return e.some(t=>ls(t)?!(t.type===mn||t.type===Be&&!pu(t.children)):!0)?e:null}const Il=e=>e?ku(e)?el(e)||e.proxy:Il(e.parent):null,Oa=rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Il(e.parent),$root:e=>Il(e.root),$emit:e=>e.emit,$options:e=>Rr(e),$forceUpdate:e=>e.f||(e.f=()=>Tr(e.update)),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>_f.bind(e)}),Pf={get({_:e},t){const{ctx:s,setupState:a,data:l,props:r,accessCache:o,type:i,appContext:c}=e;let u;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return a[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(a!==De&&he(a,t))return o[t]=1,a[t];if(l!==De&&he(l,t))return o[t]=2,l[t];if((u=e.propsOptions[0])&&he(u,t))return o[t]=3,r[t];if(s!==De&&he(s,t))return o[t]=4,s[t];Rl&&(o[t]=0)}}const p=Oa[t];let f,m;if(p)return t==="$attrs"&&_t(e,"get",t),p(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(s!==De&&he(s,t))return o[t]=4,s[t];if(m=c.config.globalProperties,he(m,t))return m[t]},set({_:e},t,s){const{data:a,setupState:l,ctx:r}=e;return l!==De&&he(l,t)?(l[t]=s,!0):a!==De&&he(a,t)?(a[t]=s,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:l,propsOptions:r}},o){let i;return!!s[o]||e!==De&&he(e,o)||t!==De&&he(t,o)||(i=r[0])&&he(i,o)||he(a,o)||he(Oa,o)||he(l.config.globalProperties,o)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:he(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Rl=!0;function $f(e){const t=Rr(e),s=e.proxy,a=e.ctx;Rl=!1,t.beforeCreate&&So(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:o,watch:i,provide:c,inject:u,created:p,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:b,deactivated:_,beforeDestroy:C,beforeUnmount:B,destroyed:A,unmounted:O,render:T,renderTracked:M,renderTriggered:q,errorCaptured:ee,serverPrefetch:le,expose:me,inheritAttrs:ge,components:Ne,directives:qe,filters:Ie}=t;if(u&&Mf(u,a,null,e.appContext.config.unwrapInjectedRef),o)for(const W in o){const ne=o[W];ie(ne)&&(a[W]=ne.bind(s))}if(l){const W=l.call(s,s);je(W)&&(e.data=Fe(W))}if(Rl=!0,r)for(const W in r){const ne=r[W],ue=ie(ne)?ne.bind(s,s):ie(ne.get)?ne.get.bind(s,s):Pt,Ee=!ie(ne)&&ie(ne.set)?ne.set.bind(s):Pt,ct=E({get:ue,set:Ee});Object.defineProperty(a,W,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Ye=>ct.value=Ye})}if(i)for(const W in i)du(i[W],a,s,W);if(c){const W=ie(c)?c.call(s):c;Reflect.ownKeys(W).forEach(ne=>{ht(ne,W[ne])})}p&&So(p,e,"c");function Te(W,ne){se(ne)?ne.forEach(ue=>W(ue.bind(s))):ne&&W(ne.bind(s))}if(Te(iu,f),Te(ds,m),Te(wf,h),Te(Ir,g),Te(kf,b),Te(xf,_),Te(Of,ee),Te(Ef,M),Te(Cf,q),Te(Ga,B),Te(Qa,O),Te(Bf,le),se(me))if(me.length){const W=e.exposed||(e.exposed={});me.forEach(ne=>{Object.defineProperty(W,ne,{get:()=>s[ne],set:ue=>s[ne]=ue})})}else e.exposed||(e.exposed={});T&&e.render===Pt&&(e.render=T),ge!=null&&(e.inheritAttrs=ge),Ne&&(e.components=Ne),qe&&(e.directives=qe)}function Mf(e,t,s=Pt,a=!1){se(e)&&(e=Ll(e));for(const l in e){const r=e[l];let o;je(r)?"default"in r?o=V(r.from||l,r.default,!0):o=V(r.from||l):o=V(r),Ae(o)&&a?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[l]=o}}function So(e,t,s){$t(se(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function du(e,t,s,a){const l=a.includes(".")?su(s,a):()=>s[a];if(Le(e)){const r=t[e];ie(r)&&pe(l,r)}else if(ie(e))pe(l,e.bind(s));else if(je(e))if(se(e))e.forEach(r=>du(r,t,s,a));else{const r=ie(e.handler)?e.handler.bind(s):t[e.handler];ie(r)&&pe(l,r,e)}}function Rr(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!s&&!a?c=t:(c={},l.length&&l.forEach(u=>Sa(c,u,o,!0)),Sa(c,t,o)),je(t)&&r.set(t,c),c}function Sa(e,t,s,a=!1){const{mixins:l,extends:r}=t;r&&Sa(e,r,s,!0),l&&l.forEach(o=>Sa(e,o,s,!0));for(const o in t)if(!(a&&o==="expose")){const i=Ff[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Ff={data:Do,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:kn,directives:kn,watch:jf,provide:Do,inject:Tf};function Do(e,t){return t?e?function(){return rt(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function Tf(e,t){return kn(Ll(e),Ll(t))}function Ll(e){if(se(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?rt(rt(Object.create(null),e),t):t}function jf(e,t){if(!e)return t;if(!t)return e;const s=rt(Object.create(null),e);for(const a in t)s[a]=nt(e[a],t[a]);return s}function If(e,t,s,a=!1){const l={},r={};wa(r,Xa,1),e.propsDefaults=Object.create(null),fu(e,t,l,r);for(const o in e.propsOptions[0])o in l||(l[o]=void 0);s?e.props=a?l:Qd(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Rf(e,t,s,a){const{props:l,attrs:r,vnode:{patchFlag:o}}=e,i=xe(l),[c]=e.propsOptions;let u=!1;if((a||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let m=p[f];if(Ja(e.emitsOptions,m))continue;const h=t[m];if(c)if(he(r,m))h!==r[m]&&(r[m]=h,u=!0);else{const g=Ut(m);l[g]=Nl(c,i,g,h,e,!1)}else h!==r[m]&&(r[m]=h,u=!0)}}}else{fu(e,t,l,r)&&(u=!0);let p;for(const f in i)(!t||!he(t,f)&&((p=Rn(f))===f||!he(t,p)))&&(c?s&&(s[f]!==void 0||s[p]!==void 0)&&(l[f]=Nl(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!t||!he(t,f)&&!0)&&(delete r[f],u=!0)}u&&Qt(e,"set","$attrs")}function fu(e,t,s,a){const[l,r]=e.propsOptions;let o=!1,i;if(t)for(let c in t){if(ya(c))continue;const u=t[c];let p;l&&he(l,p=Ut(c))?!r||!r.includes(p)?s[p]=u:(i||(i={}))[p]=u:Ja(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,o=!0)}if(r){const c=xe(s),u=i||De;for(let p=0;p<r.length;p++){const f=r[p];s[f]=Nl(l,c,f,u[f],e,!he(u,f))}}return o}function Nl(e,t,s,a,l,r){const o=e[s];if(o!=null){const i=he(o,"default");if(i&&a===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=l;s in u?a=u[s]:(rs(l),a=u[s]=c.call(null,t),$n())}else a=c}o[0]&&(r&&!i?a=!1:o[1]&&(a===""||a===Rn(s))&&(a=!0))}return a}function mu(e,t,s=!1){const a=t.propsCache,l=a.get(e);if(l)return l;const r=e.props,o={},i=[];let c=!1;if(!ie(e)){const p=f=>{c=!0;const[m,h]=mu(f,t,!0);rt(o,m),h&&i.push(...h)};!s&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!c)return je(e)&&a.set(e,Zn),Zn;if(se(r))for(let p=0;p<r.length;p++){const f=Ut(r[p]);Po(f)&&(o[f]=De)}else if(r)for(const p in r){const f=Ut(p);if(Po(f)){const m=r[p],h=o[f]=se(m)||ie(m)?{type:m}:m;if(h){const g=Fo(Boolean,h.type),b=Fo(String,h.type);h[0]=g>-1,h[1]=b<0||g<b,(g>-1||he(h,"default"))&&i.push(f)}}}const u=[o,i];return je(e)&&a.set(e,u),u}function Po(e){return e[0]!=="$"}function $o(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Mo(e,t){return $o(e)===$o(t)}function Fo(e,t){return se(t)?t.findIndex(s=>Mo(s,e)):ie(t)&&Mo(t,e)?0:-1}const hu=e=>e[0]==="_"||e==="$stable",Lr=e=>se(e)?e.map(Nt):[Nt(e)],Lf=(e,t,s)=>{if(t._n)return t;const a=z((...l)=>Lr(t(...l)),s);return a._c=!1,a},gu=(e,t,s)=>{const a=e._ctx;for(const l in e){if(hu(l))continue;const r=e[l];if(ie(r))t[l]=Lf(l,r,a);else if(r!=null){const o=Lr(r);t[l]=()=>o}}},yu=(e,t)=>{const s=Lr(t);e.slots.default=()=>s},Nf=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=xe(t),wa(t,"_",s)):gu(t,e.slots={})}else e.slots={},t&&yu(e,t);wa(e.slots,Xa,1)},qf=(e,t,s)=>{const{vnode:a,slots:l}=e;let r=!0,o=De;if(a.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:(rt(l,t),!s&&i===1&&delete l._):(r=!t.$stable,gu(t,l)),o=t}else t&&(yu(e,t),o={default:1});if(r)for(const i in l)!hu(i)&&!(i in o)&&delete l[i]};function vu(){return{app:null,config:{isNativeTag:vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hf=0;function Vf(e,t){return function(a,l=null){ie(a)||(a=Object.assign({},a)),l!=null&&!je(l)&&(l=null);const r=vu(),o=new Set;let i=!1;const c=r.app={_uid:Hf++,_component:a,_props:l,_container:null,_context:r,_instance:null,version:im,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...p)):ie(u)&&(o.add(u),u(c,...p))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,p){return p?(r.components[u]=p,c):r.components[u]},directive(u,p){return p?(r.directives[u]=p,c):r.directives[u]},mount(u,p,f){if(!i){const m=j(a,l);return m.appContext=r,p&&t?t(m,u):e(m,u,f),i=!0,c._container=u,u.__vue_app__=c,el(m.component)||m.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return r.provides[u]=p,c}};return c}}function ql(e,t,s,a,l=!1){if(se(e)){e.forEach((m,h)=>ql(m,t&&(se(t)?t[h]:t),s,a,l));return}if(ts(a)&&!l)return;const r=a.shapeFlag&4?el(a.component)||a.component.proxy:a.el,o=l?null:r,{i,r:c}=e,u=t&&t.r,p=i.refs===De?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(Le(u)?(p[u]=null,he(f,u)&&(f[u]=null)):Ae(u)&&(u.value=null)),ie(c))cn(c,i,12,[o,p]);else{const m=Le(c),h=Ae(c);if(m||h){const g=()=>{if(e.f){const b=m?p[c]:c.value;l?se(b)&&xr(b,r):se(b)?b.includes(r)||b.push(r):m?(p[c]=[r],he(f,c)&&(f[c]=p[c])):(c.value=[r],e.k&&(p[e.k]=c.value))}else m?(p[c]=o,he(f,c)&&(f[c]=o)):h&&(c.value=o,e.k&&(p[e.k]=o))};o?(g.id=-1,We(g,s)):g()}}}const We=vf;function Kf(e){return Uf(e)}function Uf(e,t){const s=wd();s.__VUE__=!0;const{insert:a,remove:l,patchProp:r,createElement:o,createText:i,createComment:c,setText:u,setElementText:p,parentNode:f,nextSibling:m,setScopeId:h=Pt,cloneNode:g,insertStaticContent:b}=e,_=(y,v,w,P=null,D=null,R=null,K=!1,F=null,N=!!v.dynamicChildren)=>{if(y===v)return;y&&!ys(y,v)&&(P=Z(y),ot(y,D,R,!0),y=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:$,ref:Q,shapeFlag:J}=v;switch($){case qr:C(y,v,w,P);break;case mn:B(y,v,w,P);break;case cl:y==null&&A(v,w,P,K);break;case Be:qe(y,v,w,P,D,R,K,F,N);break;default:J&1?M(y,v,w,P,D,R,K,F,N):J&6?Ie(y,v,w,P,D,R,K,F,N):(J&64||J&128)&&$.process(y,v,w,P,D,R,K,F,N,fe)}Q!=null&&D&&ql(Q,y&&y.ref,R,v||y,!v)},C=(y,v,w,P)=>{if(y==null)a(v.el=i(v.children),w,P);else{const D=v.el=y.el;v.children!==y.children&&u(D,v.children)}},B=(y,v,w,P)=>{y==null?a(v.el=c(v.children||""),w,P):v.el=y.el},A=(y,v,w,P)=>{[y.el,y.anchor]=b(y.children,v,w,P,y.el,y.anchor)},O=({el:y,anchor:v},w,P)=>{let D;for(;y&&y!==v;)D=m(y),a(y,w,P),y=D;a(v,w,P)},T=({el:y,anchor:v})=>{let w;for(;y&&y!==v;)w=m(y),l(y),y=w;l(v)},M=(y,v,w,P,D,R,K,F,N)=>{K=K||v.type==="svg",y==null?q(v,w,P,D,R,K,F,N):me(y,v,D,R,K,F,N)},q=(y,v,w,P,D,R,K,F)=>{let N,$;const{type:Q,props:J,shapeFlag:X,transition:ae,patchFlag:ye,dirs:Oe}=y;if(y.el&&g!==void 0&&ye===-1)N=y.el=g(y.el);else{if(N=y.el=o(y.type,R,J&&J.is,J),X&8?p(N,y.children):X&16&&le(y.children,N,null,P,D,R&&Q!=="foreignObject",K,F),Oe&&yn(y,null,P,"created"),J){for(const $e in J)$e!=="value"&&!ya($e)&&r(N,$e,null,J[$e],R,y.children,P,D,L);"value"in J&&r(N,"value",null,J.value),($=J.onVnodeBeforeMount)&&kt($,P,y)}ee(N,y,y.scopeId,K,P)}Oe&&yn(y,null,P,"beforeMount");const Se=(!D||D&&!D.pendingBranch)&&ae&&!ae.persisted;Se&&ae.beforeEnter(N),a(N,v,w),(($=J&&J.onVnodeMounted)||Se||Oe)&&We(()=>{$&&kt($,P,y),Se&&ae.enter(N),Oe&&yn(y,null,P,"mounted")},D)},ee=(y,v,w,P,D)=>{if(w&&h(y,w),P)for(let R=0;R<P.length;R++)h(y,P[R]);if(D){let R=D.subTree;if(v===R){const K=D.vnode;ee(y,K,K.scopeId,K.slotScopeIds,D.parent)}}},le=(y,v,w,P,D,R,K,F,N=0)=>{for(let $=N;$<y.length;$++){const Q=y[$]=F?an(y[$]):Nt(y[$]);_(null,Q,v,w,P,D,R,K,F)}},me=(y,v,w,P,D,R,K)=>{const F=v.el=y.el;let{patchFlag:N,dynamicChildren:$,dirs:Q}=v;N|=y.patchFlag&16;const J=y.props||De,X=v.props||De;let ae;w&&vn(w,!1),(ae=X.onVnodeBeforeUpdate)&&kt(ae,w,v,y),Q&&yn(v,y,w,"beforeUpdate"),w&&vn(w,!0);const ye=D&&v.type!=="foreignObject";if($?ge(y.dynamicChildren,$,F,w,P,ye,R):K||ue(y,v,F,null,w,P,ye,R,!1),N>0){if(N&16)Ne(F,v,J,X,w,P,D);else if(N&2&&J.class!==X.class&&r(F,"class",null,X.class,D),N&4&&r(F,"style",J.style,X.style,D),N&8){const Oe=v.dynamicProps;for(let Se=0;Se<Oe.length;Se++){const $e=Oe[Se],Bt=J[$e],qn=X[$e];(qn!==Bt||$e==="value")&&r(F,$e,Bt,qn,D,y.children,w,P,L)}}N&1&&y.children!==v.children&&p(F,v.children)}else!K&&$==null&&Ne(F,v,J,X,w,P,D);((ae=X.onVnodeUpdated)||Q)&&We(()=>{ae&&kt(ae,w,v,y),Q&&yn(v,y,w,"updated")},P)},ge=(y,v,w,P,D,R,K)=>{for(let F=0;F<v.length;F++){const N=y[F],$=v[F],Q=N.el&&(N.type===Be||!ys(N,$)||N.shapeFlag&70)?f(N.el):w;_(N,$,Q,null,P,D,R,K,!0)}},Ne=(y,v,w,P,D,R,K)=>{if(w!==P){for(const F in P){if(ya(F))continue;const N=P[F],$=w[F];N!==$&&F!=="value"&&r(y,F,$,N,K,v.children,D,R,L)}if(w!==De)for(const F in w)!ya(F)&&!(F in P)&&r(y,F,w[F],null,K,v.children,D,R,L);"value"in P&&r(y,"value",w.value,P.value)}},qe=(y,v,w,P,D,R,K,F,N)=>{const $=v.el=y?y.el:i(""),Q=v.anchor=y?y.anchor:i("");let{patchFlag:J,dynamicChildren:X,slotScopeIds:ae}=v;ae&&(F=F?F.concat(ae):ae),y==null?(a($,w,P),a(Q,w,P),le(v.children,w,Q,D,R,K,F,N)):J>0&&J&64&&X&&y.dynamicChildren?(ge(y.dynamicChildren,X,w,D,R,K,F),(v.key!=null||D&&v===D.subTree)&&Nr(y,v,!0)):ue(y,v,w,Q,D,R,K,F,N)},Ie=(y,v,w,P,D,R,K,F,N)=>{v.slotScopeIds=F,y==null?v.shapeFlag&512?D.ctx.activate(v,w,P,K,N):Pe(v,w,P,D,R,K,N):Te(y,v,N)},Pe=(y,v,w,P,D,R,K)=>{const F=y.component=tm(y,P,D);if(lu(y)&&(F.ctx.renderer=fe),nm(F),F.asyncDep){if(D&&D.registerDep(F,W),!y.el){const N=F.subTree=j(mn);B(null,N,v,w)}return}W(F,y,v,w,D,R,K)},Te=(y,v,w)=>{const P=v.component=y.component;if(gf(y,v,w))if(P.asyncDep&&!P.asyncResolved){ne(P,v,w);return}else P.next=v,uf(P.update),P.update();else v.el=y.el,P.vnode=v},W=(y,v,w,P,D,R,K)=>{const F=()=>{if(y.isMounted){let{next:Q,bu:J,u:X,parent:ae,vnode:ye}=y,Oe=Q,Se;vn(y,!1),Q?(Q.el=ye.el,ne(y,Q,K)):Q=ye,J&&Qn(J),(Se=Q.props&&Q.props.onVnodeBeforeUpdate)&&kt(Se,ae,Q,ye),vn(y,!0);const $e=rl(y),Bt=y.subTree;y.subTree=$e,_(Bt,$e,f(Bt.el),Z(Bt),y,D,R),Q.el=$e.el,Oe===null&&yf(y,$e.el),X&&We(X,D),(Se=Q.props&&Q.props.onVnodeUpdated)&&We(()=>kt(Se,ae,Q,ye),D)}else{let Q;const{el:J,props:X}=v,{bm:ae,m:ye,parent:Oe}=y,Se=ts(v);if(vn(y,!1),ae&&Qn(ae),!Se&&(Q=X&&X.onVnodeBeforeMount)&&kt(Q,Oe,v),vn(y,!0),J&&te){const $e=()=>{y.subTree=rl(y),te(J,y.subTree,y,D,null)};Se?v.type.__asyncLoader().then(()=>!y.isUnmounted&&$e()):$e()}else{const $e=y.subTree=rl(y);_(null,$e,w,P,y,D,R),v.el=$e.el}if(ye&&We(ye,D),!Se&&(Q=X&&X.onVnodeMounted)){const $e=v;We(()=>kt(Q,Oe,$e),D)}(v.shapeFlag&256||Oe&&ts(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&y.a&&We(y.a,D),y.isMounted=!0,v=w=P=null}},N=y.effect=new Cr(F,()=>Tr($),y.scope),$=y.update=()=>N.run();$.id=y.uid,vn(y,!0),$()},ne=(y,v,w)=>{v.component=y;const P=y.vnode.props;y.vnode=v,y.next=null,Rf(y,v.props,P,w),qf(y,v.children,w),us(),Bo(),ps()},ue=(y,v,w,P,D,R,K,F,N=!1)=>{const $=y&&y.children,Q=y?y.shapeFlag:0,J=v.children,{patchFlag:X,shapeFlag:ae}=v;if(X>0){if(X&128){ct($,J,w,P,D,R,K,F,N);return}else if(X&256){Ee($,J,w,P,D,R,K,F,N);return}}ae&8?(Q&16&&L($,D,R),J!==$&&p(w,J)):Q&16?ae&16?ct($,J,w,P,D,R,K,F,N):L($,D,R,!0):(Q&8&&p(w,""),ae&16&&le(J,w,P,D,R,K,F,N))},Ee=(y,v,w,P,D,R,K,F,N)=>{y=y||Zn,v=v||Zn;const $=y.length,Q=v.length,J=Math.min($,Q);let X;for(X=0;X<J;X++){const ae=v[X]=N?an(v[X]):Nt(v[X]);_(y[X],ae,w,null,D,R,K,F,N)}$>Q?L(y,D,R,!0,!1,J):le(v,w,P,D,R,K,F,N,J)},ct=(y,v,w,P,D,R,K,F,N)=>{let $=0;const Q=v.length;let J=y.length-1,X=Q-1;for(;$<=J&&$<=X;){const ae=y[$],ye=v[$]=N?an(v[$]):Nt(v[$]);if(ys(ae,ye))_(ae,ye,w,null,D,R,K,F,N);else break;$++}for(;$<=J&&$<=X;){const ae=y[J],ye=v[X]=N?an(v[X]):Nt(v[X]);if(ys(ae,ye))_(ae,ye,w,null,D,R,K,F,N);else break;J--,X--}if($>J){if($<=X){const ae=X+1,ye=ae<Q?v[ae].el:P;for(;$<=X;)_(null,v[$]=N?an(v[$]):Nt(v[$]),w,ye,D,R,K,F,N),$++}}else if($>X)for(;$<=J;)ot(y[$],D,R,!0),$++;else{const ae=$,ye=$,Oe=new Map;for($=ye;$<=X;$++){const ut=v[$]=N?an(v[$]):Nt(v[$]);ut.key!=null&&Oe.set(ut.key,$)}let Se,$e=0;const Bt=X-ye+1;let qn=!1,mo=0;const gs=new Array(Bt);for($=0;$<Bt;$++)gs[$]=0;for($=ae;$<=J;$++){const ut=y[$];if($e>=Bt){ot(ut,D,R,!0);continue}let Lt;if(ut.key!=null)Lt=Oe.get(ut.key);else for(Se=ye;Se<=X;Se++)if(gs[Se-ye]===0&&ys(ut,v[Se])){Lt=Se;break}Lt===void 0?ot(ut,D,R,!0):(gs[Lt-ye]=$+1,Lt>=mo?mo=Lt:qn=!0,_(ut,v[Lt],w,null,D,R,K,F,N),$e++)}const ho=qn?zf(gs):Zn;for(Se=ho.length-1,$=Bt-1;$>=0;$--){const ut=ye+$,Lt=v[ut],go=ut+1<Q?v[ut+1].el:P;gs[$]===0?_(null,Lt,w,go,D,R,K,F,N):qn&&(Se<0||$!==ho[Se]?Ye(Lt,w,go,2):Se--)}}},Ye=(y,v,w,P,D=null)=>{const{el:R,type:K,transition:F,children:N,shapeFlag:$}=y;if($&6){Ye(y.component.subTree,v,w,P);return}if($&128){y.suspense.move(v,w,P);return}if($&64){K.move(y,v,w,fe);return}if(K===Be){a(R,v,w);for(let J=0;J<N.length;J++)Ye(N[J],v,w,P);a(y.anchor,v,w);return}if(K===cl){O(y,v,w);return}if(P!==2&&$&1&&F)if(P===0)F.beforeEnter(R),a(R,v,w),We(()=>F.enter(R),D);else{const{leave:J,delayLeave:X,afterLeave:ae}=F,ye=()=>a(R,v,w),Oe=()=>{J(R,()=>{ye(),ae&&ae()})};X?X(R,ye,Oe):Oe()}else a(R,v,w)},ot=(y,v,w,P=!1,D=!1)=>{const{type:R,props:K,ref:F,children:N,dynamicChildren:$,shapeFlag:Q,patchFlag:J,dirs:X}=y;if(F!=null&&ql(F,null,w,y,!0),Q&256){v.ctx.deactivate(y);return}const ae=Q&1&&X,ye=!ts(y);let Oe;if(ye&&(Oe=K&&K.onVnodeBeforeUnmount)&&kt(Oe,v,y),Q&6)U(y.component,w,P);else{if(Q&128){y.suspense.unmount(w,P);return}ae&&yn(y,null,v,"beforeUnmount"),Q&64?y.type.remove(y,v,w,D,fe,P):$&&(R!==Be||J>0&&J&64)?L($,v,w,!1,!0):(R===Be&&J&384||!D&&Q&16)&&L(N,v,w),P&&gn(y)}(ye&&(Oe=K&&K.onVnodeUnmounted)||ae)&&We(()=>{Oe&&kt(Oe,v,y),ae&&yn(y,null,v,"unmounted")},w)},gn=y=>{const{type:v,el:w,anchor:P,transition:D}=y;if(v===Be){S(w,P);return}if(v===cl){T(y);return}const R=()=>{l(w),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:F}=D,N=()=>K(w,R);F?F(y.el,R,N):N()}else R()},S=(y,v)=>{let w;for(;y!==v;)w=m(y),l(y),y=w;l(v)},U=(y,v,w)=>{const{bum:P,scope:D,update:R,subTree:K,um:F}=y;P&&Qn(P),D.stop(),R&&(R.active=!1,ot(K,y,v,w)),F&&We(F,v),We(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},L=(y,v,w,P=!1,D=!1,R=0)=>{for(let K=R;K<y.length;K++)ot(y[K],v,w,P,D)},Z=y=>y.shapeFlag&6?Z(y.component.subTree):y.shapeFlag&128?y.suspense.next():m(y.anchor||y.el),_e=(y,v,w)=>{y==null?v._vnode&&ot(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,w),Bo(),Xc(),v._vnode=y},fe={p:_,um:ot,m:Ye,r:gn,mt:Pe,mc:le,pc:ue,pbc:ge,n:Z,o:e};let re,te;return t&&([re,te]=t(fe)),{render:_e,hydrate:re,createApp:Vf(_e,re)}}function vn({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Nr(e,t,s=!1){const a=e.children,l=t.children;if(se(a)&&se(l))for(let r=0;r<a.length;r++){const o=a[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=an(l[r]),i.el=o.el),s||Nr(o,i))}}function zf(e){const t=e.slice(),s=[0];let a,l,r,o,i;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(l=s[s.length-1],e[l]<u){t[a]=l,s.push(a);continue}for(r=0,o=s.length-1;r<o;)i=r+o>>1,e[s[i]]<u?r=i+1:o=i;u<e[s[r]]&&(r>0&&(t[a]=s[r-1]),s[r]=a)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}const Wf=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),To=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Hl=(e,t)=>{const s=e&&e.to;return Le(s)?t?t(s):null:s},Jf={__isTeleport:!0,process(e,t,s,a,l,r,o,i,c,u){const{mc:p,pc:f,pbc:m,o:{insert:h,querySelector:g,createText:b,createComment:_}}=u,C=Es(t.props);let{shapeFlag:B,children:A,dynamicChildren:O}=t;if(e==null){const T=t.el=b(""),M=t.anchor=b("");h(T,s,a),h(M,s,a);const q=t.target=Hl(t.props,g),ee=t.targetAnchor=b("");q&&(h(ee,q),o=o||To(q));const le=(me,ge)=>{B&16&&p(A,me,ge,l,r,o,i,c)};C?le(s,M):q&&le(q,ee)}else{t.el=e.el;const T=t.anchor=e.anchor,M=t.target=e.target,q=t.targetAnchor=e.targetAnchor,ee=Es(e.props),le=ee?s:M,me=ee?T:q;if(o=o||To(M),O?(m(e.dynamicChildren,O,le,l,r,o,i),Nr(e,t,!0)):c||f(e,t,le,me,l,r,o,i,!1),C)ee||da(t,s,T,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=Hl(t.props,g);ge&&da(t,ge,null,u,0)}else ee&&da(t,M,q,u,1)}},remove(e,t,s,a,{um:l,o:{remove:r}},o){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:f,props:m}=e;if(f&&r(p),(o||!Es(m))&&(r(u),i&16))for(let h=0;h<c.length;h++){const g=c[h];l(g,t,s,!0,!!g.dynamicChildren)}},move:da,hydrate:Yf};function da(e,t,s,{o:{insert:a},m:l},r=2){r===0&&a(e.targetAnchor,t,s);const{el:o,anchor:i,shapeFlag:c,children:u,props:p}=e,f=r===2;if(f&&a(o,t,s),(!f||Es(p))&&c&16)for(let m=0;m<u.length;m++)l(u[m],t,s,2);f&&a(i,t,s)}function Yf(e,t,s,a,l,r,{o:{nextSibling:o,parentNode:i,querySelector:c}},u){const p=t.target=Hl(t.props,c);if(p){const f=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Es(t.props))t.anchor=u(o(e),t,i(e),s,a,l,r),t.targetAnchor=f;else{t.anchor=o(e);let m=f;for(;m;)if(m=o(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,p._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(f,t,p,s,a,l,r)}}return t.anchor&&o(t.anchor)}const Zf=Jf,Be=Symbol(void 0),qr=Symbol(void 0),mn=Symbol(void 0),cl=Symbol(void 0),Os=[];let St=null;function x(e=!1){Os.push(St=e?null:[])}function Gf(){Os.pop(),St=Os[Os.length-1]||null}let Vs=1;function jo(e){Vs+=e}function _u(e){return e.dynamicChildren=Vs>0?St||Zn:null,Gf(),Vs>0&&St&&St.push(e),e}function I(e,t,s,a,l,r){return _u(n(e,t,s,a,l,r,!0))}function Y(e,t,s,a,l){return _u(j(e,t,s,a,l,!0))}function ls(e){return e?e.__v_isVNode===!0:!1}function ys(e,t){return e.type===t.type&&e.key===t.key}const Xa="__vInternal",bu=({key:e})=>e!=null?e:null,va=({ref:e,ref_key:t,ref_for:s})=>e!=null?Le(e)||Ae(e)||ie(e)?{i:Qe,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,a=0,l=null,r=e===Be?0:1,o=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bu(t),ref:t&&va(t),scopeId:Ya,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:l,dynamicChildren:null,appContext:null};return i?(Hr(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=Le(s)?8:16),Vs>0&&!o&&St&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&St.push(c),c}const j=Qf;function Qf(e,t=null,s=null,a=0,l=null,r=!1){if((!e||e===Df)&&(e=mn),ls(e)){const i=In(e,t,!0);return s&&Hr(i,s),Vs>0&&!r&&St&&(i.shapeFlag&6?St[St.indexOf(e)]=i:St.push(i)),i.patchFlag|=-2,i}if(lm(e)&&(e=e.__vccOpts),t){t=ve(t);let{class:i,style:c}=t;i&&!Le(i)&&(t.class=Re(i)),je(c)&&(zc(c)&&!se(c)&&(c=rt({},c)),t.style=et(c))}const o=Le(e)?1:nu(e)?128:Wf(e)?64:je(e)?4:ie(e)?2:0;return n(e,t,s,a,l,o,r,!0)}function ve(e){return e?zc(e)||Xa in e?rt({},e):e:null}function In(e,t,s=!1){const{props:a,ref:l,patchFlag:r,children:o}=e,i=t?Me(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&bu(i),ref:t&&t.ref?s&&l?se(l)?l.concat(va(t)):[l,va(t)]:va(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),el:e.el,anchor:e.anchor}}function d(e=" ",t=0){return j(qr,null,e,t)}function de(e="",t=!1){return t?(x(),Y(mn,null,e)):j(mn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?j(mn):se(e)?j(Be,null,e.slice()):typeof e=="object"?an(e):j(qr,null,String(e))}function an(e){return e.el===null||e.memo?e:In(e)}function Hr(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(se(t))s=16;else if(typeof t=="object")if(a&65){const l=t.default;l&&(l._c&&(l._d=!1),Hr(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(Xa in t)?t._ctx=Qe:l===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Qe},s=32):(t=String(t),a&64?(s=16,t=[d(t)]):s=8);e.children=t,e.shapeFlag|=s}function Me(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const l in a)if(l==="class")t.class!==a.class&&(t.class=Re([t.class,a.class]));else if(l==="style")t.style=et([t.style,a.style]);else if(qa(l)){const r=t[l],o=a[l];o&&r!==o&&!(se(r)&&r.includes(o))&&(t[l]=r?[].concat(r,o):o)}else l!==""&&(t[l]=a[l])}return t}function kt(e,t,s,a=null){$t(e,t,7,[s,a])}const Xf=vu();let em=0;function tm(e,t,s){const a=e.type,l=(t?t.appContext:e.appContext)||Xf,r={uid:em++,vnode:e,type:a,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(a,l),emitsOptions:tu(a,l),emit:null,emitted:null,propsDefaults:De,inheritAttrs:a.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ff.bind(null,r),e.ce&&e.ce(r),r}let ze=null;const hn=()=>ze||Qe,rs=e=>{ze=e,e.scope.on()},$n=()=>{ze&&ze.scope.off(),ze=null};function ku(e){return e.vnode.shapeFlag&4}let Ks=!1;function nm(e,t=!1){Ks=t;const{props:s,children:a}=e.vnode,l=ku(e);If(e,s,l,t),Nf(e,a);const r=l?sm(e,t):void 0;return Ks=!1,r}function sm(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=za(new Proxy(e.ctx,Pf));const{setup:a}=s;if(a){const l=e.setupContext=a.length>1?Au(e):null;rs(e),us();const r=cn(a,e,0,[e.props,l]);if(ps(),$n(),Dc(r)){if(r.then($n,$n),t)return r.then(o=>{Io(e,o,t)}).catch(o=>{Wa(o,e,0)});e.asyncDep=r}else Io(e,r,t)}else xu(e,t)}function Io(e,t,s){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=Jc(t)),xu(e,s)}let Ro;function xu(e,t,s){const a=e.type;if(!e.render){if(!t&&Ro&&!a.render){const l=a.template||Rr(e).template;if(l){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:c}=a,u=rt(rt({isCustomElement:r,delimiters:i},o),c);a.render=Ro(l,u)}}e.render=a.render||Pt}rs(e),us(),$f(e),ps(),$n()}function am(e){return new Proxy(e.attrs,{get(t,s){return _t(e,"get","$attrs"),t[s]}})}function Au(e){const t=a=>{e.exposed=a||{}};let s;return{get attrs(){return s||(s=am(e))},slots:e.slots,emit:e.emit,expose:t}}function el(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jc(za(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Oa)return Oa[s](e)}}))}function Vl(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function lm(e){return ie(e)&&"__vccOpts"in e}const E=(e,t)=>rf(e,t,Ks);function rm(){return om().slots}function om(){const e=hn();return e.setupContext||(e.setupContext=Au(e))}function gt(e,t,s){const a=arguments.length;return a===2?je(t)&&!se(t)?ls(t)?j(e,null,[t]):j(e,t):j(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&ls(s)&&(s=[s]),j(e,t,s))}const im="3.2.39",cm="http://www.w3.org/2000/svg",wn=typeof document<"u"?document:null,Lo=wn&&wn.createElement("template"),um={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const l=t?wn.createElementNS(cm,e):wn.createElement(e,s?{is:s}:void 0);return e==="select"&&a&&a.multiple!=null&&l.setAttribute("multiple",a.multiple),l},createText:e=>wn.createTextNode(e),createComment:e=>wn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,a,l,r){const o=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Lo.innerHTML=a?`<svg>${e}</svg>`:e;const i=Lo.content;if(a){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function pm(e,t,s){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function dm(e,t,s){const a=e.style,l=Le(s);if(s&&!l){for(const r in s)Kl(a,r,s[r]);if(t&&!Le(t))for(const r in t)s[r]==null&&Kl(a,r,"")}else{const r=a.display;l?t!==s&&(a.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=r)}}const No=/\s*!important$/;function Kl(e,t,s){if(se(s))s.forEach(a=>Kl(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=fm(e,t);No.test(s)?e.setProperty(Rn(a),s.replace(No,""),"important"):e[a]=s}}const qo=["Webkit","Moz","ms"],ul={};function fm(e,t){const s=ul[t];if(s)return s;let a=Ut(t);if(a!=="filter"&&a in e)return ul[t]=a;a=Ka(a);for(let l=0;l<qo.length;l++){const r=qo[l]+a;if(r in e)return ul[t]=r}return t}const Ho="http://www.w3.org/1999/xlink";function mm(e,t,s,a,l){if(a&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Ho,t.slice(6,t.length)):e.setAttributeNS(Ho,t,s);else{const r=dd(t);s==null||r&&!Ec(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function hm(e,t,s,a,l,r,o){if(t==="innerHTML"||t==="textContent"){a&&o(a,l,r),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=Ec(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(t)}const[wu,gm]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Ul=0;const ym=Promise.resolve(),vm=()=>{Ul=0},_m=()=>Ul||(ym.then(vm),Ul=wu());function Un(e,t,s,a){e.addEventListener(t,s,a)}function bm(e,t,s,a){e.removeEventListener(t,s,a)}function km(e,t,s,a,l=null){const r=e._vei||(e._vei={}),o=r[t];if(a&&o)o.value=a;else{const[i,c]=xm(t);if(a){const u=r[t]=Am(a,l);Un(e,i,u,c)}else o&&(bm(e,i,o,c),r[t]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function xm(e){let t;if(Vo.test(e)){t={};let a;for(;a=e.match(Vo);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rn(e.slice(2)),t]}function Am(e,t){const s=a=>{const l=a.timeStamp||wu();(gm||l>=s.attached-1)&&$t(wm(a,s.value),t,5,[a])};return s.value=e,s.attached=_m(),s}function wm(e,t){if(se(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>l=>!l._stopped&&a&&a(l))}else return t}const Ko=/^on[a-z]/,Bm=(e,t,s,a,l=!1,r,o,i,c)=>{t==="class"?pm(e,a,l):t==="style"?dm(e,s,a):qa(t)?kr(t)||km(e,t,s,a,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cm(e,t,a,l))?hm(e,t,a,r,o,i,c):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),mm(e,t,a,l))};function Cm(e,t,s,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Ko.test(t)&&ie(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ko.test(t)&&Le(s)?!1:t in e}const Uo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?s=>Qn(t,s):t};function Em(e){e.target.composing=!0}function zo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Om={created(e,{modifiers:{lazy:t,trim:s,number:a}},l){e._assign=Uo(l);const r=a||l.props&&l.props.type==="number";Un(e,t?"change":"input",o=>{if(o.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=Pl(i)),e._assign(i)}),s&&Un(e,"change",()=>{e.value=e.value.trim()}),t||(Un(e,"compositionstart",Em),Un(e,"compositionend",zo),Un(e,"change",zo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:a,number:l}},r){if(e._assign=Uo(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||a&&e.value.trim()===t||(l||e.type==="number")&&Pl(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Sm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wo=(e,t)=>s=>{if(!("key"in s))return;const a=Rn(s.key);if(t.some(l=>l===a||Sm[l]===a))return e(s)},Bu={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):vs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:a}){!t!=!s&&(a?t?(a.beforeEnter(e),vs(e,!0),a.enter(e)):a.leave(e,()=>{vs(e,!1)}):vs(e,t))},beforeUnmount(e,{value:t}){vs(e,t)}};function vs(e,t){e.style.display=t?e._vod:"none"}const Dm=rt({patchProp:Bm},um);let Jo;function Pm(){return Jo||(Jo=Kf(Dm))}const $m=(...e)=>{const t=Pm().createApp(...e),{mount:s}=t;return t.mount=a=>{const l=Mm(a);if(!l)return;const r=t._component;!ie(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const o=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),o},t};function Mm(e){return Le(e)?document.querySelector(e):e}var Fm=Object.defineProperty,Yo=Object.getOwnPropertySymbols,Tm=Object.prototype.hasOwnProperty,jm=Object.prototype.propertyIsEnumerable,Zo=(e,t,s)=>t in e?Fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Im=(e,t)=>{for(var s in t||(t={}))Tm.call(t,s)&&Zo(e,s,t[s]);if(Yo)for(var s of Yo(t))jm.call(t,s)&&Zo(e,s,t[s]);return e},Cu="usehead",Go="head:count",pl="data-head-attrs",Eu="data-meta-body",Rm=(e,t,s)=>{const a=s.createElement(e);for(const l of Object.keys(t))if(l==="body"&&t.body===!0)a.setAttribute(Eu,"true");else{let r=t[l];if(l==="key"||r===!1)continue;l==="children"?a.textContent=r:a.setAttribute(l,r)}return a};function Qo(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const a=t.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=s,s===e.nonce&&e.isEqualNode(a)}}return e.isEqualNode(t)}var Lm=e=>{const t=["key","id","name","property"];for(const s of t){const a=typeof e.getAttribute=="function"?e.hasAttribute(s)?e.getAttribute(s):void 0:e[s];if(a!==void 0)return{name:s,value:a}}},Nm=()=>{const e=V(Cu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},qm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Hm=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(k(t)),Vm=e=>{const t=[],s=Object.keys(e);for(const a of s)if(e[a]!=null)switch(a){case"title":t.push({tag:a,props:{children:e[a]}});break;case"titleTemplate":break;case"base":t.push({tag:a,props:Im({key:"default"},e[a])});break;default:if(qm.includes(a)){const l=e[a];Array.isArray(l)?l.forEach(r=>{t.push({tag:a,props:r})}):l&&t.push({tag:a,props:l})}break}return t},Xo=(e,t)=>{const s=e.getAttribute(pl);if(s)for(const l of s.split(","))l in t||e.removeAttribute(l);const a=[];for(const l in t){const r=t[l];r!=null&&(r===!1?e.removeAttribute(l):e.setAttribute(l,r),a.push(l))}a.length?e.setAttribute(pl,a.join(",")):e.removeAttribute(pl)},Km=(e=window.document,t,s)=>{var a,l;const r=e.head,o=e.body;let i=r.querySelector(`meta[name="${Go}"]`),c=o.querySelectorAll(`[${Eu}]`);const u=i?Number(i.getAttribute("content")):0,p=[],f=[];if(c)for(let h=0;h<c.length;h++)c[h]&&((a=c[h].tagName)==null?void 0:a.toLowerCase())===t&&f.push(c[h]);if(i)for(let h=0,g=i.previousElementSibling;h<u;h++,g=(g==null?void 0:g.previousElementSibling)||null)((l=g==null?void 0:g.tagName)==null?void 0:l.toLowerCase())===t&&p.push(g);else i=e.createElement("meta"),i.setAttribute("name",Go),i.setAttribute("content","0"),r.append(i);let m=s.map(h=>{var g;return{element:Rm(h.tag,h.props,e),body:(g=h.props.body)!=null?g:!1}});m=m.filter(h=>{for(let g=0;g<p.length;g++){const b=p[g];if(Qo(b,h.element))return p.splice(g,1),!1}for(let g=0;g<f.length;g++){const b=f[g];if(Qo(b,h.element))return f.splice(g,1),!1}return!0}),f.forEach(h=>{var g;return(g=h.parentNode)==null?void 0:g.removeChild(h)}),p.forEach(h=>{var g;return(g=h.parentNode)==null?void 0:g.removeChild(h)}),m.forEach(h=>{h.body===!0?o.insertAdjacentElement("beforeend",h.element):r.insertBefore(h.element,i)}),i.setAttribute("content",""+(u-p.length+m.filter(h=>!h.body).length))},Um=e=>{let t=[],s=new Set;e&&t.push(Ft(e));const a={install(l){l.config.globalProperties.$head=a,l.provide(Cu,a)},get headTags(){const l=[],r=t.map(o=>k(o).titleTemplate).reverse().find(o=>o!=null);return t.forEach(o=>{Vm(k(o)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=Lm(c.props);if(u){let p=-1;for(let f=0;f<l.length;f++){const m=l[f],h=m.props[u.name],g=c.props[u.name];if(m.tag===c.tag&&h===g){p=f;break}}p!==-1&&l.splice(p,1)}}r&&c.tag==="title"&&(c.props.children=Hm(r,c.props.children)),l.push(c)})}),l},addHeadObjs(l){t.push(l)},removeHeadObjs(l){t=t.filter(r=>r!==l)},updateDOM(l=window.document){let r,o={},i={};const c={};for(const p of a.headTags){if(p.tag==="title"){r=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(o,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(i,p.props);continue}c[p.tag]=c[p.tag]||[],c[p.tag].push(p)}r!==void 0&&(l.title=r),Xo(l.documentElement,o),Xo(l.body,i);const u=new Set([...Object.keys(c),...s]);for(const p of u)Km(l,p,c[p]||[]);s.clear(),Object.keys(c).forEach(p=>s.add(p))}};return a},zm=typeof window<"u",Wm=e=>{const t=Nm(),s=H(e);t.addHeadObjs(s),zm&&(Xs(()=>{t.updateDOM()}),Ga(()=>{t.removeHeadObjs(s),t.updateDOM()}))};const Ss=Symbol("v-click-clicks"),Bn=Symbol("v-click-clicks-elements"),zl=Symbol("v-click-clicks-order-map"),Ds=Symbol("v-click-clicks-disabled"),Ou=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),Jm=Symbol("slidev-route"),Ym=Symbol("slidev-slide-context"),xn="slidev-vclick-target",dl="slidev-vclick-hidden",Zm="slidev-vclick-fade",fl="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",fa="slidev-vclick-prior";function Wl(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Gm(...e){let t,s,a;e.length===1?(t=0,a=1,[s]=e):[t,s,a=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=a||1;return l}function Qm(e){return e!=null}function Xm(e,t){return Object.fromEntries(Object.entries(e).map(([s,a])=>t(s,a)).filter(Qm))}const On={theme:"default",title:"Materi 02 - PBO",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h1>Materi 02 - PBO</h1>
<p>Java Package dan Enkapsulasi</p>
<blockquote>
<p>Asisten Praktikum Pemrograman Berbasis Objek 2022
Teknik Informatika Universitas Padjadjaran</p>
</blockquote>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"materi-pbo-02",selectable:!1,themeConfig:{},fonts:{sans:['"Overpass"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Overpass Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Overpass","Overpass Mono"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss"},ke=On;var Bc;const un=(Bc=ke.aspectRatio)!=null?Bc:16/9;var Cc;const Mn=(Cc=ke.canvasWidth)!=null?Cc:980,Su=Math.round(Mn/un),Du=E(()=>Xm(ke.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function At(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const Ln=Fe({page:0,clicks:0});let eh=[],th=[];At(Ln,"$syncUp",!0);At(Ln,"$syncDown",!0);At(Ln,"$paused",!1);At(Ln,"$onSet",e=>eh.push(e));At(Ln,"$onPatch",e=>th.push(e));At(Ln,"$patch",async()=>!1);function Pu(e,t,s=!1){const a=[];let l=!1,r=!1,o,i;const c=Fe(t);function u(h){a.push(h)}function p(h,g){clearTimeout(o),l=!0,c[h]=g,o=setTimeout(()=>l=!1,0)}function f(h){l||(clearTimeout(i),r=!0,Object.entries(h).forEach(([g,b])=>{c[g]=b}),i=setTimeout(()=>r=!1,0))}function m(h){let g;s?s&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&f(JSON.parse(_.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",_=>f(_.data)));function b(){!s&&g&&!r?g.postMessage(xe(c)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),l||a.forEach(_=>_(c))}if(pe(c,b,{deep:!0}),s){const _=window.localStorage.getItem(h);_&&f(JSON.parse(_))}}return{init:m,onPatch:u,patch:p,state:c}}const{init:nh,onPatch:sh,patch:ei,state:ml}=Pu(Ln,{page:1,clicks:0}),Nn=Fe({});let ah=[],lh=[];At(Nn,"$syncUp",!0);At(Nn,"$syncDown",!0);At(Nn,"$paused",!1);At(Nn,"$onSet",e=>ah.push(e));At(Nn,"$onPatch",e=>lh.push(e));At(Nn,"$patch",async()=>!1);const{init:rh,onPatch:oh,patch:$u,state:Da}=Pu(Nn,{},!1),ih="modulepreload",ch=function(e){return"/materi-PBO-02/"+e},ti={},fs=function(t,s,a){return!s||s.length===0?t():Promise.all(s.map(l=>{if(l=ch(l),l in ti)return;ti[l]=!0;const r=l.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":ih,r||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),r)return new Promise((c,u)=>{i.addEventListener("load",c),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var ni;const jt=typeof window<"u",uh=e=>typeof e<"u",ph=Object.prototype.toString,Pa=e=>typeof e=="function",dh=e=>typeof e=="number",Mu=e=>typeof e=="string",Jl=e=>ph.call(e)==="[object Object]",Yl=()=>+Date.now(),Fn=()=>{};jt&&((ni=window==null?void 0:window.navigator)==null?void 0:ni.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function at(e){return typeof e=="function"?e():k(e)}function fh(e,t){function s(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return s}const Fu=e=>e();function mh(e=Fu){const t=H(!0);function s(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:s,resume:a,eventFilter:(...r)=>{t.value&&e(...r)}}}function hh(e){return e}function gh(e,t){var s;if(typeof e=="number")return e+t;const a=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(a.length),r=parseFloat(a)+t;return Number.isNaN(r)?e:r+l}function yh(e,t){let s,a,l;const r=H(!0),o=()=>{r.value=!0,l()};pe(e,o,{flush:"sync"});const i=Pa(t)?t:t.get,c=Pa(t)?void 0:t.set,u=Yc((p,f)=>(a=p,l=f,{get(){return r.value&&(s=i(),r.value=!1),a(),s},set(m){c==null||c(m)}}));return Object.isExtensible(u)&&(u.trigger=o),u}function Xt(e){return Fc()?(Tc(e),!0):!1}function vh(e){if(!Ae(e))return Fe(e);const t=new Proxy({},{get(s,a,l){return k(Reflect.get(e.value,a,l))},set(s,a,l){return Ae(e.value[a])&&!Ae(l)?e.value[a].value=l:e.value[a]=l,!0},deleteProperty(s,a){return Reflect.deleteProperty(e.value,a)},has(s,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function _h(e){return typeof e=="function"?E(e):H(e)}var bh=Object.defineProperty,kh=Object.defineProperties,xh=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,Ah=Object.prototype.hasOwnProperty,wh=Object.prototype.propertyIsEnumerable,ai=(e,t,s)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Bh=(e,t)=>{for(var s in t||(t={}))Ah.call(t,s)&&ai(e,s,t[s]);if(si)for(var s of si(t))wh.call(t,s)&&ai(e,s,t[s]);return e},Ch=(e,t)=>kh(e,xh(t));function Eh(e){if(!Ae(e))return nf(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=Yc(()=>({get(){return e.value[s]},set(a){if(Array.isArray(e.value)){const l=[...e.value];l[s]=a,e.value=l}else{const l=Ch(Bh({},e.value),{[s]:a});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function Oh(e,t=!0){hn()?iu(e):t?e():Ge(e)}function Tu(e,t=!0){hn()?ds(e):t?e():Ge(e)}function Sh(e){hn()&&Qa(e)}function Dh(e,t=1e3,s={}){const{immediate:a=!0,immediateCallback:l=!1}=s;let r=null;const o=H(!1);function i(){r&&(clearInterval(r),r=null)}function c(){o.value=!1,i()}function u(){k(t)<=0||(o.value=!0,l&&e(),i(),r=setInterval(e,at(t)))}if(a&&jt&&u(),Ae(t)){const p=pe(t,()=>{o.value&&jt&&u()});Xt(p)}return Xt(c),{isActive:o,pause:c,resume:u}}function Ph(e,t,s={}){const{immediate:a=!0}=s,l=H(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,o()}function c(...u){o(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...u)},at(t))}return a&&(l.value=!0,jt&&c()),Xt(i),{isPending:l,start:c,stop:i}}function ju(e=!1,t={}){const{truthyValue:s=!0,falsyValue:a=!1}=t,l=Ae(e),r=H(e);function o(i){if(arguments.length)return r.value=i,r.value;{const c=at(s);return r.value=r.value===c?at(a):c,r.value}}return l?o:[r,o]}var li=Object.getOwnPropertySymbols,$h=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable,Fh=(e,t)=>{var s={};for(var a in e)$h.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&li)for(var a of li(e))t.indexOf(a)<0&&Mh.call(e,a)&&(s[a]=e[a]);return s};function Th(e,t,s={}){const a=s,{eventFilter:l=Fu}=a,r=Fh(a,["eventFilter"]);return pe(e,fh(l,t),r)}var jh=Object.defineProperty,Ih=Object.defineProperties,Rh=Object.getOwnPropertyDescriptors,$a=Object.getOwnPropertySymbols,Iu=Object.prototype.hasOwnProperty,Ru=Object.prototype.propertyIsEnumerable,ri=(e,t,s)=>t in e?jh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Lh=(e,t)=>{for(var s in t||(t={}))Iu.call(t,s)&&ri(e,s,t[s]);if($a)for(var s of $a(t))Ru.call(t,s)&&ri(e,s,t[s]);return e},Nh=(e,t)=>Ih(e,Rh(t)),qh=(e,t)=>{var s={};for(var a in e)Iu.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&$a)for(var a of $a(e))t.indexOf(a)<0&&Ru.call(e,a)&&(s[a]=e[a]);return s};function Hh(e,t,s={}){const a=s,{eventFilter:l}=a,r=qh(a,["eventFilter"]),{eventFilter:o,pause:i,resume:c,isActive:u}=mh(l);return{stop:Th(e,t,Nh(Lh({},r),{eventFilter:o})),pause:i,resume:c,isActive:u}}function Dt(e){var t;const s=at(e);return(t=s==null?void 0:s.$el)!=null?t:s}const tt=jt?window:void 0,Vh=jt?window.document:void 0,Kh=jt?window.navigator:void 0;function ce(...e){let t,s,a,l;if(Mu(e[0])?([s,a,l]=e,t=tt):[t,s,a,l]=e,!t)return Fn;let r=Fn;const o=pe(()=>Dt(t),c=>{r(),c&&(c.addEventListener(s,a,l),r=()=>{c.removeEventListener(s,a,l),r=Fn})},{immediate:!0,flush:"post"}),i=()=>{o(),r()};return Xt(i),i}function Uh(e,t,s={}){const{window:a=tt,ignore:l,capture:r=!0,detectIframe:o=!1}=s;if(!a)return;const i=H(!0);let c;const u=m=>{a.clearTimeout(c);const h=Dt(e),g=m.composedPath();!h||h===m.target||g.includes(h)||!i.value||l&&l.length>0&&l.some(b=>{const _=Dt(b);return _&&(m.target===_||g.includes(_))})||t(m)},p=[ce(a,"click",u,{passive:!0,capture:r}),ce(a,"pointerdown",m=>{const h=Dt(e);i.value=!!h&&!m.composedPath().includes(h)},{passive:!0}),ce(a,"pointerup",m=>{if(m.button===0){const h=m.composedPath();m.composedPath=()=>h,c=a.setTimeout(()=>u(m),50)}},{passive:!0}),o&&ce(a,"blur",m=>{var h;const g=Dt(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(m)})].filter(Boolean);return()=>p.forEach(m=>m())}const zh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Wh(e,t,s={}){const{target:a=tt,eventName:l="keydown",passive:r=!1}=s,o=zh(e);return ce(a,l,c=>{o(c)&&t(c)},r)}function Jh(e={}){const{window:t=tt}=e,s=yh(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(ce(t,"blur",s.trigger,!0),ce(t,"focus",s.trigger,!0)),s}function ta(e,t=!1){const s=H(),a=()=>s.value=Boolean(e());return a(),Tu(a,t),s}function zn(e,t={}){const{window:s=tt}=t,a=ta(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=H(!1),o=()=>{!a.value||(l||(l=s.matchMedia(e)),r.value=l.matches)};return Oh(()=>{o(),l&&("addEventListener"in l?l.addEventListener("change",o):l.addListener(o),Xt(()=>{"removeEventListener"in l?l.removeEventListener("change",o):l.removeListener(o)}))}),r}const Yh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Zh=Object.defineProperty,oi=Object.getOwnPropertySymbols,Gh=Object.prototype.hasOwnProperty,Qh=Object.prototype.propertyIsEnumerable,ii=(e,t,s)=>t in e?Zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Xh=(e,t)=>{for(var s in t||(t={}))Gh.call(t,s)&&ii(e,s,t[s]);if(oi)for(var s of oi(t))Qh.call(t,s)&&ii(e,s,t[s]);return e};function eg(e,t={}){function s(i,c){let u=e[i];return c!=null&&(u=gh(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:a=tt}=t;function l(i){return a?a.matchMedia(i).matches:!1}const r=i=>zn(`(min-width: ${s(i)})`,t),o=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Xh({greater(i){return zn(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return zn(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return zn(`(max-width: ${s(i)})`,t)},between(i,c){return zn(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},o)}function tg(e={}){const{navigator:t=Kh,read:s=!1,source:a,copiedDuring:l=1500}=e,r=["copy","cut"],o=ta(()=>t&&"clipboard"in t),i=H(""),c=H(!1),u=Ph(()=>c.value=!1,l);function p(){t.clipboard.readText().then(m=>{i.value=m})}if(o.value&&s)for(const m of r)ce(m,p);async function f(m=at(a)){o.value&&m!=null&&(await t.clipboard.writeText(m),i.value=m,c.value=!0,u.start())}return{isSupported:o,text:i,copied:c,copy:f}}function ng(e){return JSON.parse(JSON.stringify(e))}const Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gl="__vueuse_ssr_handlers__";Zl[Gl]=Zl[Gl]||{};const sg=Zl[Gl];function ag(e,t){return sg[e]||t}function lg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var rg=Object.defineProperty,ci=Object.getOwnPropertySymbols,og=Object.prototype.hasOwnProperty,ig=Object.prototype.propertyIsEnumerable,ui=(e,t,s)=>t in e?rg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,pi=(e,t)=>{for(var s in t||(t={}))og.call(t,s)&&ui(e,s,t[s]);if(ci)for(var s of ci(t))ig.call(t,s)&&ui(e,s,t[s]);return e};const cg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Rt(e,t,s,a={}){var l;const{flush:r="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:f=tt,eventFilter:m,onError:h=q=>{console.error(q)}}=a,g=(p?Ft:H)(t);if(!s)try{s=ag("getDefaultStorage",()=>{var q;return(q=tt)==null?void 0:q.localStorage})()}catch(q){h(q)}if(!s)return g;const b=at(t),_=lg(b),C=(l=a.serializer)!=null?l:cg[_],{pause:B,resume:A}=Hh(g,()=>O(g.value),{flush:r,deep:o,eventFilter:m});return f&&i&&ce(f,"storage",M),M(),g;function O(q){try{q==null?s.removeItem(e):s.setItem(e,C.write(q))}catch(ee){h(ee)}}function T(q){if(!(q&&q.key!==e)){B();try{const ee=q?q.newValue:s.getItem(e);if(ee==null)return c&&b!==null&&s.setItem(e,C.write(b)),b;if(!q&&u){const le=C.read(ee);return Pa(u)?u(le,b):_==="object"&&!Array.isArray(le)?pi(pi({},b),le):le}else return typeof ee!="string"?ee:C.read(ee)}catch(ee){h(ee)}finally{A()}}}function M(q){q&&q.key!==e||(g.value=T(q))}}function ug(e){return zn("(prefers-color-scheme: dark)",e)}var pg=Object.defineProperty,dg=Object.defineProperties,fg=Object.getOwnPropertyDescriptors,di=Object.getOwnPropertySymbols,mg=Object.prototype.hasOwnProperty,hg=Object.prototype.propertyIsEnumerable,fi=(e,t,s)=>t in e?pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,gg=(e,t)=>{for(var s in t||(t={}))mg.call(t,s)&&fi(e,s,t[s]);if(di)for(var s of di(t))hg.call(t,s)&&fi(e,s,t[s]);return e},yg=(e,t)=>dg(e,fg(t));function $w(e,t={}){var s,a,l;const r=(s=t.draggingElement)!=null?s:tt,o=(a=t.handle)!=null?a:e,i=H((l=at(t.initialValue))!=null?l:{x:0,y:0}),c=H(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,p=g=>{at(t.preventDefault)&&g.preventDefault(),at(t.stopPropagation)&&g.stopPropagation()},f=g=>{var b;if(!u(g)||at(t.exact)&&g.target!==at(e))return;const _=at(e).getBoundingClientRect(),C={x:g.pageX-_.left,y:g.pageY-_.top};((b=t.onStart)==null?void 0:b.call(t,C,g))!==!1&&(c.value=C,p(g))},m=g=>{var b;!u(g)||!c.value||(i.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(b=t.onMove)==null||b.call(t,i.value,g),p(g))},h=g=>{var b;!u(g)||!c.value||(c.value=void 0,(b=t.onEnd)==null||b.call(t,i.value,g),p(g))};return jt&&(ce(o,"pointerdown",f,!0),ce(r,"pointermove",m,!0),ce(r,"pointerup",h,!0)),yg(gg({},Eh(i)),{position:i,isDragging:E(()=>!!c.value),style:E(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var mi=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,_g=Object.prototype.propertyIsEnumerable,bg=(e,t)=>{var s={};for(var a in e)vg.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&mi)for(var a of mi(e))t.indexOf(a)<0&&_g.call(e,a)&&(s[a]=e[a]);return s};function kg(e,t,s={}){const a=s,{window:l=tt}=a,r=bg(a,["window"]);let o;const i=ta(()=>l&&"ResizeObserver"in l),c=()=>{o&&(o.disconnect(),o=void 0)},u=pe(()=>Dt(e),f=>{c(),i.value&&l&&f&&(o=new ResizeObserver(t),o.observe(f,r))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Xt(p),{isSupported:i,stop:p}}function xg(e,t={}){const{immediate:s=!0,window:a=tt}=t,l=H(!1);let r=null;function o(){!l.value||!a||(e(),r=a.requestAnimationFrame(o))}function i(){!l.value&&a&&(l.value=!0,o())}function c(){l.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return s&&i(),Xt(c),{isActive:l,pause:c,resume:i}}function Ag(e,t={width:0,height:0},s={}){const{box:a="content-box"}=s,l=H(t.width),r=H(t.height);return kg(e,([o])=>{const i=a==="border-box"?o.borderBoxSize:a==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;i?(l.value=i.reduce((c,{inlineSize:u})=>c+u,0),r.value=i.reduce((c,{blockSize:u})=>c+u,0)):(l.value=o.contentRect.width,r.value=o.contentRect.height)},s),pe(()=>Dt(e),o=>{l.value=o?t.width:0,r.value=o?t.height:0}),{width:l,height:r}}const hi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function wg(e,t={}){const{document:s=Vh,autoExit:a=!1}=t,l=e||(s==null?void 0:s.querySelector("html")),r=H(!1);let o=hi[0];const i=ta(()=>{if(s){for(const b of hi)if(b[1]in s)return o=b,!0}else return!1;return!1}),[c,u,p,,f]=o;async function m(){!i.value||(s!=null&&s[p]&&await s[u](),r.value=!1)}async function h(){if(!i.value)return;await m();const b=Dt(l);b&&(await b[c](),r.value=!0)}async function g(){r.value?await m():await h()}return s&&ce(s,f,()=>{r.value=!!(s!=null&&s[p])},!1),a&&Xt(m),{isSupported:i,isFullscreen:r,enter:h,exit:m,toggle:g}}function Bg(e,t,s={}){const{root:a,rootMargin:l="0px",threshold:r=.1,window:o=tt}=s,i=ta(()=>o&&"IntersectionObserver"in o);let c=Fn;const u=i.value?pe(()=>({el:Dt(e),root:Dt(a)}),({el:f,root:m})=>{if(c(),!f)return;const h=new IntersectionObserver(t,{root:m,rootMargin:l,threshold:r});h.observe(f),c=()=>{h.disconnect(),c=Fn}},{immediate:!0,flush:"post"}):Fn,p=()=>{c(),u()};return Xt(p),{isSupported:i,stop:p}}const Cg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Eg(e={}){const{reactive:t=!1,target:s=tt,aliasMap:a=Cg,passive:l=!0,onEventFired:r=Fn}=e,o=Fe(new Set),i={toJSON(){return{}},current:o},c=t?Fe(i):i,u=new Set,p=new Set;function f(b,_){b in c&&(t?c[b]=_:c[b].value=_)}function m(){for(const b of p)f(b,!1)}function h(b,_){var C,B;const A=(C=b.key)==null?void 0:C.toLowerCase(),T=[(B=b.code)==null?void 0:B.toLowerCase(),A].filter(Boolean);A&&(_?o.add(A):o.delete(A));for(const M of T)p.add(M),f(M,_);A==="meta"&&!_?(u.forEach(M=>{o.delete(M),f(M,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&_&&[...o,...T].forEach(M=>u.add(M))}ce(s,"keydown",b=>(h(b,!0),r(b)),{passive:l}),ce(s,"keyup",b=>(h(b,!1),r(b)),{passive:l}),ce("blur",m,{passive:!0}),ce("focus",m,{passive:!0});const g=new Proxy(c,{get(b,_,C){if(typeof _!="string")return Reflect.get(b,_,C);if(_=_.toLowerCase(),_ in a&&(_=a[_]),!(_ in c))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(O=>O.trim());c[_]=E(()=>A.every(O=>k(g[O])))}else c[_]=H(!1);const B=Reflect.get(b,_,C);return t?k(B):B}});return g}function Mw(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:a=!1,initialValue:l={x:0,y:0},window:r=tt,eventFilter:o}=e,i=H(l.x),c=H(l.y),u=H(null),p=b=>{t==="page"?(i.value=b.pageX,c.value=b.pageY):t==="client"&&(i.value=b.clientX,c.value=b.clientY),u.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},m=b=>{if(b.touches.length>0){const _=b.touches[0];t==="page"?(i.value=_.pageX,c.value=_.pageY):t==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="touch"}},h=b=>o===void 0?p(b):o(()=>p(b),{}),g=b=>o===void 0?m(b):o(()=>m(b),{});return r&&(ce(r,"mousemove",h,{passive:!0}),ce(r,"dragover",h,{passive:!0}),s&&(ce(r,"touchstart",g,{passive:!0}),ce(r,"touchmove",g,{passive:!0}),a&&ce(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var Gt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Gt||(Gt={}));function Og(e,t={}){const s=_h(e),{threshold:a=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:o}=t,i=Fe({x:0,y:0}),c=(M,q)=>{i.x=M,i.y=q},u=Fe({x:0,y:0}),p=(M,q)=>{u.x=M,u.y=q},f=E(()=>i.x-u.x),m=E(()=>i.y-u.y),{max:h,abs:g}=Math,b=E(()=>h(g(f.value),g(m.value))>=a),_=H(!1),C=H(!1),B=E(()=>b.value?g(f.value)>g(m.value)?f.value>0?Gt.LEFT:Gt.RIGHT:m.value>0?Gt.UP:Gt.DOWN:Gt.NONE),A=M=>t.pointerTypes?t.pointerTypes.includes(M.pointerType):!0,O=[ce(e,"pointerdown",M=>{var q,ee;if(!A(M))return;C.value=!0,(ee=(q=s.value)==null?void 0:q.style)==null||ee.setProperty("touch-action","none");const le=M.target;le==null||le.setPointerCapture(M.pointerId);const{clientX:me,clientY:ge}=M;c(me,ge),p(me,ge),o==null||o(M)}),ce(e,"pointermove",M=>{if(!A(M)||!C.value)return;const{clientX:q,clientY:ee}=M;p(q,ee),!_.value&&b.value&&(_.value=!0),_.value&&(l==null||l(M))}),ce(e,"pointerup",M=>{var q,ee;!A(M)||(_.value&&(r==null||r(M,B.value)),C.value=!1,_.value=!1,(ee=(q=s.value)==null?void 0:q.style)==null||ee.setProperty("touch-action","initial"))})],T=()=>O.forEach(M=>M());return{isSwiping:Jn(_),direction:Jn(B),posStart:Jn(i),posEnd:Jn(u),distanceX:f,distanceY:m,stop:T}}var Sg=Object.defineProperty,gi=Object.getOwnPropertySymbols,Dg=Object.prototype.hasOwnProperty,Pg=Object.prototype.propertyIsEnumerable,yi=(e,t,s)=>t in e?Sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,$g=(e,t)=>{for(var s in t||(t={}))Dg.call(t,s)&&yi(e,s,t[s]);if(gi)for(var s of gi(t))Pg.call(t,s)&&yi(e,s,t[s]);return e};function Fw(e={}){const{controls:t=!1,offset:s=0,immediate:a=!0,interval:l="requestAnimationFrame"}=e,r=H(Yl()+s),o=()=>r.value=Yl()+s,i=l==="requestAnimationFrame"?xg(o,{immediate:a}):Dh(o,l,{immediate:a});return t?$g({timestamp:r},i):r}var Mg=Object.defineProperty,vi=Object.getOwnPropertySymbols,Fg=Object.prototype.hasOwnProperty,Tg=Object.prototype.propertyIsEnumerable,_i=(e,t,s)=>t in e?Mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,jg=(e,t)=>{for(var s in t||(t={}))Fg.call(t,s)&&_i(e,s,t[s]);if(vi)for(var s of vi(t))Tg.call(t,s)&&_i(e,s,t[s]);return e};const Ig={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};jg({linear:hh},Ig);function Vt(e,t,s,a={}){var l,r,o;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:f}=a,m=hn(),h=s||(m==null?void 0:m.emit)||((l=m==null?void 0:m.$emit)==null?void 0:l.bind(m))||((o=(r=m==null?void 0:m.proxy)==null?void 0:r.$emit)==null?void 0:o.bind(m==null?void 0:m.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const b=C=>i?Pa(i)?i(C):ng(C):C,_=()=>uh(e[t])?b(e[t]):f;if(c){const C=_(),B=H(C);return pe(()=>e[t],A=>B.value=b(A)),pe(B,A=>{(A!==e[t]||p)&&h(g,A)},{deep:p}),B}else return E({get(){return _()},set(C){h(g,C)}})}function Tw({window:e=tt}={}){if(!e)return H(!1);const t=H(e.document.hasFocus());return ce(e,"blur",()=>{t.value=!1}),ce(e,"focus",()=>{t.value=!0}),t}function Rg(e={}){const{window:t=tt,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,o=H(s),i=H(a),c=()=>{t&&(r?(o.value=t.innerWidth,i.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),Tu(c),ce("resize",c,{passive:!0}),l&&ce("orientationchange",c,{passive:!0}),{width:o,height:i}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window<"u";function Lg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const we=Object.assign;function hl(e,t){const s={};for(const a in t){const l=t[a];s[a]=It(l)?l.map(e):e(l)}return s}const Ps=()=>{},It=Array.isArray,Ng=/\/$/,qg=e=>e.replace(Ng,"");function gl(e,t,s="/"){let a,l={},r="",o="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(a=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=e(r)),i>-1&&(a=a||t.slice(0,i),o=t.slice(i,t.length)),a=Ug(a!=null?a:t,s),{fullPath:a+(r&&"?")+r+o,path:a,query:l,hash:o}}function Hg(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function bi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Vg(e,t,s){const a=t.matched.length-1,l=s.matched.length-1;return a>-1&&a===l&&os(t.matched[a],s.matched[l])&&Lu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Lu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Kg(e[s],t[s]))return!1;return!0}function Kg(e,t){return It(e)?ki(e,t):It(t)?ki(t,e):e===t}function ki(e,t){return It(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function Ug(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/");let l=s.length-1,r,o;for(r=0;r<a.length;r++)if(o=a[r],o!==".")if(o==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var $s;(function(e){e.back="back",e.forward="forward",e.unknown=""})($s||($s={}));function zg(e){if(!e)if(Wn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qg(e)}const Wg=/^[^#]+#/;function Jg(e,t){return e.replace(Wg,"#")+t}function Yg(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const tl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zg(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),l=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l)return;t=Yg(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xi(e,t){return(history.state?history.state.position-t:-1)+e}const Ql=new Map;function Gg(e,t){Ql.set(e,t)}function Qg(e){const t=Ql.get(e);return Ql.delete(e),t}let Xg=()=>location.protocol+"//"+location.host;function Nu(e,t){const{pathname:s,search:a,hash:l}=t,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),bi(c,"")}return bi(s,e)+a+l}function ey(e,t,s,a){let l=[],r=[],o=null;const i=({state:m})=>{const h=Nu(e,location),g=s.value,b=t.value;let _=0;if(m){if(s.value=h,t.value=m,o&&o===g){o=null;return}_=b?m.position-b.position:0}else a(h);l.forEach(C=>{C(s.value,g,{delta:_,type:Us.pop,direction:_?_>0?$s.forward:$s.back:$s.unknown})})};function c(){o=s.value}function u(m){l.push(m);const h=()=>{const g=l.indexOf(m);g>-1&&l.splice(g,1)};return r.push(h),h}function p(){const{history:m}=window;!m.state||m.replaceState(we({},m.state,{scroll:tl()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:f}}function Ai(e,t,s,a=!1,l=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:l?tl():null}}function ty(e){const{history:t,location:s}=window,a={value:Nu(e,s)},l={value:t.state};l.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,p){const f=e.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:Xg()+e+c;try{t[p?"replaceState":"pushState"](u,"",m),l.value=u}catch(h){console.error(h),s[p?"replace":"assign"](m)}}function o(c,u){const p=we({},t.state,Ai(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,p,!0),a.value=c}function i(c,u){const p=we({},l.value,t.state,{forward:c,scroll:tl()});r(p.current,p,!0);const f=we({},Ai(a.value,c,null),{position:p.position+1},u);r(c,f,!1),a.value=c}return{location:a,state:l,push:i,replace:o}}function ny(e){e=zg(e);const t=ty(e),s=ey(e,t.state,t.location,t.replace);function a(r,o=!0){o||s.pauseListeners(),history.go(r)}const l=we({location:"",base:e,go:a,createHref:Jg.bind(null,e)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function sy(e){return typeof e=="string"||e&&typeof e=="object"}function qu(e){return typeof e=="string"||typeof e=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hu=Symbol("");var wi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wi||(wi={}));function is(e,t){return we(new Error,{type:e,[Hu]:!0},t)}function Wt(e,t){return e instanceof Error&&Hu in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",ay={sensitive:!1,strict:!1,start:!0,end:!0},ly=/[.+*?^${}()[\]/\\]/g;function ry(e,t){const s=we({},ay,t),a=[];let l=s.start?"^":"";const r=[];for(const u of e){const p=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const m=u[f];let h=40+(s.sensitive?.25:0);if(m.type===0)f||(l+="/"),l+=m.value.replace(ly,"\\$&"),h+=40;else if(m.type===1){const{value:g,repeatable:b,optional:_,regexp:C}=m;r.push({name:g,repeatable:b,optional:_});const B=C||Bi;if(B!==Bi){h+=10;try{new RegExp(`(${B})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${B}): `+O.message)}}let A=b?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;f||(A=_&&u.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),l+=A,h+=20,_&&(h+=-8),b&&(h+=-20),B===".*"&&(h+=-50)}p.push(h)}a.push(p)}if(s.strict&&s.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const o=new RegExp(l,s.sensitive?"":"i");function i(u){const p=u.match(o),f={};if(!p)return null;for(let m=1;m<p.length;m++){const h=p[m]||"",g=r[m-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function c(u){let p="",f=!1;for(const m of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const h of m)if(h.type===0)p+=h.value;else if(h.type===1){const{value:g,repeatable:b,optional:_}=h,C=g in u?u[g]:"";if(It(C)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const B=It(C)?C.join("/"):C;if(!B)if(_)m.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);p+=B}}return p||"/"}return{re:o,score:a,keys:r,parse:i,stringify:c}}function oy(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function iy(e,t){let s=0;const a=e.score,l=t.score;for(;s<a.length&&s<l.length;){const r=oy(a[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-a.length)===1){if(Ci(a))return 1;if(Ci(l))return-1}return l.length-a.length}function Ci(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cy={type:0,value:""},uy=/[a-zA-Z0-9_]/;function py(e){if(!e)return[[]];if(e==="/")return[[cy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,a=s;const l=[];let r;function o(){r&&l.push(r),r=[]}let i=0,c,u="",p="";function f(){!u||(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),s=1):m();break;case 4:m(),s=a;break;case 1:c==="("?s=2:uy.test(c)?m():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),l}function dy(e,t,s){const a=ry(py(e.path),s),l=we(a,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function fy(e,t){const s=[],a=new Map;t=Si({strict:!1,end:!0,sensitive:!1},t);function l(p){return a.get(p)}function r(p,f,m){const h=!m,g=my(p);g.aliasOf=m&&m.record;const b=Si(t,p),_=[g];if("alias"in p){const A=typeof p.alias=="string"?[p.alias]:p.alias;for(const O of A)_.push(we({},g,{components:m?m.record.components:g.components,path:O,aliasOf:m?m.record:g}))}let C,B;for(const A of _){const{path:O}=A;if(f&&O[0]!=="/"){const T=f.record.path,M=T[T.length-1]==="/"?"":"/";A.path=f.record.path+(O&&M+O)}if(C=dy(A,f,b),m?m.alias.push(C):(B=B||C,B!==C&&B.alias.push(C),h&&p.name&&!Oi(C)&&o(p.name)),g.children){const T=g.children;for(let M=0;M<T.length;M++)r(T[M],C,m&&m.children[M])}m=m||C,c(C)}return B?()=>{o(B)}:Ps}function o(p){if(qu(p)){const f=a.get(p);f&&(a.delete(p),s.splice(s.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=s.indexOf(p);f>-1&&(s.splice(f,1),p.record.name&&a.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function i(){return s}function c(p){let f=0;for(;f<s.length&&iy(p,s[f])>=0&&(p.record.path!==s[f].record.path||!Vu(p,s[f]));)f++;s.splice(f,0,p),p.record.name&&!Oi(p)&&a.set(p.record.name,p)}function u(p,f){let m,h={},g,b;if("name"in p&&p.name){if(m=a.get(p.name),!m)throw is(1,{location:p});b=m.record.name,h=we(Ei(f.params,m.keys.filter(B=>!B.optional).map(B=>B.name)),p.params&&Ei(p.params,m.keys.map(B=>B.name))),g=m.stringify(h)}else if("path"in p)g=p.path,m=s.find(B=>B.re.test(g)),m&&(h=m.parse(g),b=m.record.name);else{if(m=f.name?a.get(f.name):s.find(B=>B.re.test(f.path)),!m)throw is(1,{location:p,currentLocation:f});b=m.record.name,h=we({},f.params,p.params),g=m.stringify(h)}const _=[];let C=m;for(;C;)_.unshift(C.record),C=C.parent;return{name:b,path:g,params:h,matched:_,meta:gy(_)}}return e.forEach(p=>r(p)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:i,getRecordMatcher:l}}function Ei(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function my(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hy(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="boolean"?s:s[a];return t}function Oi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gy(e){return e.reduce((t,s)=>we(t,s.meta),{})}function Si(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}function Vu(e,t){return t.children.some(s=>s===e||Vu(e,s))}const Ku=/#/g,yy=/&/g,vy=/\//g,_y=/=/g,by=/\?/g,Uu=/\+/g,ky=/%5B/g,xy=/%5D/g,zu=/%5E/g,Ay=/%60/g,Wu=/%7B/g,wy=/%7C/g,Ju=/%7D/g,By=/%20/g;function Vr(e){return encodeURI(""+e).replace(wy,"|").replace(ky,"[").replace(xy,"]")}function Cy(e){return Vr(e).replace(Wu,"{").replace(Ju,"}").replace(zu,"^")}function Xl(e){return Vr(e).replace(Uu,"%2B").replace(By,"+").replace(Ku,"%23").replace(yy,"%26").replace(Ay,"`").replace(Wu,"{").replace(Ju,"}").replace(zu,"^")}function Ey(e){return Xl(e).replace(_y,"%3D")}function Oy(e){return Vr(e).replace(Ku,"%23").replace(by,"%3F")}function Sy(e){return e==null?"":Oy(e).replace(vy,"%2F")}function Ma(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Dy(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<a.length;++l){const r=a[l].replace(Uu," "),o=r.indexOf("="),i=Ma(o<0?r:r.slice(0,o)),c=o<0?null:Ma(r.slice(o+1));if(i in t){let u=t[i];It(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function Di(e){let t="";for(let s in e){const a=e[s];if(s=Ey(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(It(a)?a.map(r=>r&&Xl(r)):[a&&Xl(a)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function Py(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=It(a)?a.map(l=>l==null?null:""+l):a==null?a:""+a)}return t}const $y=Symbol(""),Pi=Symbol(""),Kr=Symbol(""),Yu=Symbol(""),er=Symbol("");function bs(){let e=[];function t(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function ln(e,t,s,a,l){const r=a&&(a.enterCallbacks[l]=a.enterCallbacks[l]||[]);return()=>new Promise((o,i)=>{const c=f=>{f===!1?i(is(4,{from:s,to:t})):f instanceof Error?i(f):sy(f)?i(is(2,{from:t,to:f})):(r&&a.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),o())},u=e.call(a&&a.instances[l],t,s,c);let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(f=>i(f))})}function yl(e,t,s,a){const l=[];for(const r of e)for(const o in r.components){let i=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(My(i)){const u=(i.__vccOpts||i)[t];u&&l.push(ln(u,s,a,r,o))}else{let c=i();l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const p=Lg(u)?u.default:u;r.components[o]=p;const m=(p.__vccOpts||p)[t];return m&&ln(m,s,a,r,o)()}))}}return l}function My(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $i(e){const t=V(Kr),s=V(Yu),a=E(()=>t.resolve(k(e.to))),l=E(()=>{const{matched:c}=a.value,{length:u}=c,p=c[u-1],f=s.matched;if(!p||!f.length)return-1;const m=f.findIndex(os.bind(null,p));if(m>-1)return m;const h=Mi(c[u-2]);return u>1&&Mi(p)===h&&f[f.length-1].path!==h?f.findIndex(os.bind(null,c[u-2])):m}),r=E(()=>l.value>-1&&Iy(s.params,a.value.params)),o=E(()=>l.value>-1&&l.value===s.matched.length-1&&Lu(s.params,a.value.params));function i(c={}){return jy(c)?t[k(e.replace)?"replace":"push"](k(e.to)).catch(Ps):Promise.resolve()}return{route:a,href:E(()=>a.value.href),isActive:r,isExactActive:o,navigate:i}}const Fy=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$i,setup(e,{slots:t}){const s=Fe($i(e)),{options:a}=V(Kr),l=E(()=>({[Fi(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[Fi(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return e.custom?r:gt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),Ty=Fy;function jy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Iy(e,t){for(const s in t){const a=t[s],l=e[s];if(typeof a=="string"){if(a!==l)return!1}else if(!It(l)||l.length!==a.length||a.some((r,o)=>r!==l[o]))return!1}return!0}function Mi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fi=(e,t,s)=>e!=null?e:t!=null?t:s,Ry=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=V(er),l=E(()=>e.route||a.value),r=V(Pi,0),o=E(()=>{let u=k(r);const{matched:p}=l.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=E(()=>l.value.matched[o.value]);ht(Pi,E(()=>o.value+1)),ht($y,i),ht(er,l);const c=H();return pe(()=>[c.value,i.value,e.name],([u,p,f],[m,h,g])=>{p&&(p.instances[f]=u,h&&h!==p&&u&&u===m&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!os(p,h)||!m)&&(p.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=l.value,p=e.name,f=i.value,m=f&&f.components[p];if(!m)return Ti(s.default,{Component:m,route:u});const h=f.props[p],g=h?h===!0?u.params:typeof h=="function"?h(u):h:null,_=gt(m,we({},g,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[p]=null)},ref:c}));return Ti(s.default,{Component:_,route:u})||_}}});function Ti(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Ly=Ry;function Ny(e){const t=fy(e.routes,e),s=e.parseQuery||Dy,a=e.stringifyQuery||Di,l=e.history,r=bs(),o=bs(),i=bs(),c=Ft(sn);let u=sn;Wn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=hl.bind(null,S=>""+S),f=hl.bind(null,Sy),m=hl.bind(null,Ma);function h(S,U){let L,Z;return qu(S)?(L=t.getRecordMatcher(S),Z=U):Z=S,t.addRoute(Z,L)}function g(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function b(){return t.getRoutes().map(S=>S.record)}function _(S){return!!t.getRecordMatcher(S)}function C(S,U){if(U=we({},U||c.value),typeof S=="string"){const te=gl(s,S,U.path),y=t.resolve({path:te.path},U),v=l.createHref(te.fullPath);return we(te,y,{params:m(y.params),hash:Ma(te.hash),redirectedFrom:void 0,href:v})}let L;if("path"in S)L=we({},S,{path:gl(s,S.path,U.path).path});else{const te=we({},S.params);for(const y in te)te[y]==null&&delete te[y];L=we({},S,{params:f(S.params)}),U.params=f(U.params)}const Z=t.resolve(L,U),_e=S.hash||"";Z.params=p(m(Z.params));const fe=Hg(a,we({},S,{hash:Cy(_e),path:Z.path})),re=l.createHref(fe);return we({fullPath:fe,hash:_e,query:a===Di?Py(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:re})}function B(S){return typeof S=="string"?gl(s,S,c.value.path):we({},S)}function A(S,U){if(u!==S)return is(8,{from:U,to:S})}function O(S){return q(S)}function T(S){return O(we(B(S),{replace:!0}))}function M(S){const U=S.matched[S.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let Z=typeof L=="function"?L(S):L;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),we({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function q(S,U){const L=u=C(S),Z=c.value,_e=S.state,fe=S.force,re=S.replace===!0,te=M(L);if(te)return q(we(B(te),{state:typeof te=="object"?we({},_e,te.state):_e,force:fe,replace:re}),U||L);const y=L;y.redirectedFrom=U;let v;return!fe&&Vg(a,Z,L)&&(v=is(16,{to:y,from:Z}),Ee(Z,Z,!0,!1)),(v?Promise.resolve(v):le(y,Z)).catch(w=>Wt(w)?Wt(w,2)?w:ue(w):W(w,y,Z)).then(w=>{if(w){if(Wt(w,2))return q(we({replace:re},B(w.to),{state:typeof w.to=="object"?we({},_e,w.to.state):_e,force:fe}),U||y)}else w=ge(y,Z,!0,re,_e);return me(y,Z,w),w})}function ee(S,U){const L=A(S,U);return L?Promise.reject(L):Promise.resolve()}function le(S,U){let L;const[Z,_e,fe]=qy(S,U);L=yl(Z.reverse(),"beforeRouteLeave",S,U);for(const te of Z)te.leaveGuards.forEach(y=>{L.push(ln(y,S,U))});const re=ee.bind(null,S,U);return L.push(re),Hn(L).then(()=>{L=[];for(const te of r.list())L.push(ln(te,S,U));return L.push(re),Hn(L)}).then(()=>{L=yl(_e,"beforeRouteUpdate",S,U);for(const te of _e)te.updateGuards.forEach(y=>{L.push(ln(y,S,U))});return L.push(re),Hn(L)}).then(()=>{L=[];for(const te of S.matched)if(te.beforeEnter&&!U.matched.includes(te))if(It(te.beforeEnter))for(const y of te.beforeEnter)L.push(ln(y,S,U));else L.push(ln(te.beforeEnter,S,U));return L.push(re),Hn(L)}).then(()=>(S.matched.forEach(te=>te.enterCallbacks={}),L=yl(fe,"beforeRouteEnter",S,U),L.push(re),Hn(L))).then(()=>{L=[];for(const te of o.list())L.push(ln(te,S,U));return L.push(re),Hn(L)}).catch(te=>Wt(te,8)?te:Promise.reject(te))}function me(S,U,L){for(const Z of i.list())Z(S,U,L)}function ge(S,U,L,Z,_e){const fe=A(S,U);if(fe)return fe;const re=U===sn,te=Wn?history.state:{};L&&(Z||re?l.replace(S.fullPath,we({scroll:re&&te&&te.scroll},_e)):l.push(S.fullPath,_e)),c.value=S,Ee(S,U,L,re),ue()}let Ne;function qe(){Ne||(Ne=l.listen((S,U,L)=>{if(!gn.listening)return;const Z=C(S),_e=M(Z);if(_e){q(we(_e,{replace:!0}),Z).catch(Ps);return}u=Z;const fe=c.value;Wn&&Gg(xi(fe.fullPath,L.delta),tl()),le(Z,fe).catch(re=>Wt(re,12)?re:Wt(re,2)?(q(re.to,Z).then(te=>{Wt(te,20)&&!L.delta&&L.type===Us.pop&&l.go(-1,!1)}).catch(Ps),Promise.reject()):(L.delta&&l.go(-L.delta,!1),W(re,Z,fe))).then(re=>{re=re||ge(Z,fe,!1),re&&(L.delta&&!Wt(re,8)?l.go(-L.delta,!1):L.type===Us.pop&&Wt(re,20)&&l.go(-1,!1)),me(Z,fe,re)}).catch(Ps)}))}let Ie=bs(),Pe=bs(),Te;function W(S,U,L){ue(S);const Z=Pe.list();return Z.length?Z.forEach(_e=>_e(S,U,L)):console.error(S),Promise.reject(S)}function ne(){return Te&&c.value!==sn?Promise.resolve():new Promise((S,U)=>{Ie.add([S,U])})}function ue(S){return Te||(Te=!S,qe(),Ie.list().forEach(([U,L])=>S?L(S):U()),Ie.reset()),S}function Ee(S,U,L,Z){const{scrollBehavior:_e}=e;if(!Wn||!_e)return Promise.resolve();const fe=!L&&Qg(xi(S.fullPath,0))||(Z||!L)&&history.state&&history.state.scroll||null;return Ge().then(()=>_e(S,U,fe)).then(re=>re&&Zg(re)).catch(re=>W(re,S,U))}const ct=S=>l.go(S);let Ye;const ot=new Set,gn={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,hasRoute:_,getRoutes:b,resolve:C,options:e,push:O,replace:T,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:Pe.add,isReady:ne,install(S){const U=this;S.component("RouterLink",Ty),S.component("RouterView",Ly),S.config.globalProperties.$router=U,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>k(c)}),Wn&&!Ye&&c.value===sn&&(Ye=!0,O(l.location).catch(_e=>{}));const L={};for(const _e in sn)L[_e]=E(()=>c.value[_e]);S.provide(Kr,U),S.provide(Yu,Fe(L)),S.provide(er,c);const Z=S.unmount;ot.add(S),S.unmount=function(){ot.delete(S),ot.size<1&&(u=sn,Ne&&Ne(),Ne=null,c.value=sn,Ye=!1,Te=!1),Z()}}};return gn}function Hn(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function qy(e,t){const s=[],a=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(u=>os(u,i))?a.push(i):s.push(i));const c=e.matched[o];c&&(t.matched.find(u=>os(u,c))||l.push(c))}return[s,a,l]}const vl=H(!1),Ms=H(!1),Yn=H(!1),Hy=H(!0),tr=eg({xs:460,...Yh}),Tn=Rg(),Zu=Eg(),Vy=E(()=>Tn.height.value-Tn.width.value/un>180),Gu=wg(jt?document.body:null),ns=Jh(),Ky=E(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ns.value)==null?void 0:e.tagName)||"")||((t=ns.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Uy=E(()=>{var e;return["BUTTON","A"].includes(((e=ns.value)==null?void 0:e.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const _a=Rt("slidev-scale",0),st=Rt("slidev-show-overview",!1),_l=Rt("slidev-presenter-cursor",!0),ji=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",jt?window.innerWidth*.4:100);const Qu=ju(st);function Ii(e,t,s,a=l=>l){return e*a(.5-t*(.5-s))}function zy(e){return[-e[0],-e[1]]}function Et(e,t){return[e[0]+t[0],e[1]+t[1]]}function xt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Ct(e,t){return[e[0]*t,e[1]*t]}function Wy(e,t){return[e[0]/t,e[1]/t]}function ks(e){return[e[1],-e[0]]}function Ri(e,t){return e[0]*t[0]+e[1]*t[1]}function Jy(e,t){return e[0]===t[0]&&e[1]===t[1]}function Yy(e){return Math.hypot(e[0],e[1])}function Zy(e){return e[0]*e[0]+e[1]*e[1]}function Li(e,t){return Zy(xt(e,t))}function Xu(e){return Wy(e,Yy(e))}function Gy(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function xs(e,t,s){let a=Math.sin(s),l=Math.cos(s),r=e[0]-t[0],o=e[1]-t[1],i=r*l-o*a,c=r*a+o*l;return[i+t[0],c+t[1]]}function nr(e,t,s){return Et(e,Ct(xt(t,e),s))}function Ni(e,t,s){return Et(e,Ct(t,s))}var{min:Vn,PI:Qy}=Math,qi=.275,As=Qy+1e-4;function Xy(e,t={}){let{size:s=16,smoothing:a=.5,thinning:l=.5,simulatePressure:r=!0,easing:o=W=>W,start:i={},end:c={},last:u=!1}=t,{cap:p=!0,easing:f=W=>W*(2-W)}=i,{cap:m=!0,easing:h=W=>--W*W*W+1}=c;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,b=i.taper===!1?0:i.taper===!0?Math.max(s,g):i.taper,_=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,C=Math.pow(s*a,2),B=[],A=[],O=e.slice(0,10).reduce((W,ne)=>{let ue=ne.pressure;if(r){let Ee=Vn(1,ne.distance/s),ct=Vn(1,1-Ee);ue=Vn(1,W+(ct-W)*(Ee*qi))}return(W+ue)/2},e[0].pressure),T=Ii(s,l,e[e.length-1].pressure,o),M,q=e[0].vector,ee=e[0].point,le=ee,me=ee,ge=le,Ne=!1;for(let W=0;W<e.length;W++){let{pressure:ne}=e[W],{point:ue,vector:Ee,distance:ct,runningLength:Ye}=e[W];if(W<e.length-1&&g-Ye<3)continue;if(l){if(r){let fe=Vn(1,ct/s),re=Vn(1,1-fe);ne=Vn(1,O+(re-O)*(fe*qi))}T=Ii(s,l,ne,o)}else T=s/2;M===void 0&&(M=T);let ot=Ye<b?f(Ye/b):1,gn=g-Ye<_?h((g-Ye)/_):1;T=Math.max(.01,T*Math.min(ot,gn));let S=(W<e.length-1?e[W+1]:e[W]).vector,U=W<e.length-1?Ri(Ee,S):1,L=Ri(Ee,q)<0&&!Ne,Z=U!==null&&U<0;if(L||Z){let fe=Ct(ks(q),T);for(let re=1/13,te=0;te<=1;te+=re)me=xs(xt(ue,fe),ue,As*te),B.push(me),ge=xs(Et(ue,fe),ue,As*-te),A.push(ge);ee=me,le=ge,Z&&(Ne=!0);continue}if(Ne=!1,W===e.length-1){let fe=Ct(ks(Ee),T);B.push(xt(ue,fe)),A.push(Et(ue,fe));continue}let _e=Ct(ks(nr(S,Ee,U)),T);me=xt(ue,_e),(W<=1||Li(ee,me)>C)&&(B.push(me),ee=me),ge=Et(ue,_e),(W<=1||Li(le,ge)>C)&&(A.push(ge),le=ge),O=ne,q=Ee}let qe=e[0].point.slice(0,2),Ie=e.length>1?e[e.length-1].point.slice(0,2):Et(e[0].point,[1,1]),Pe=[],Te=[];if(e.length===1){if(!(b||_)||u){let W=Ni(qe,Xu(ks(xt(qe,Ie))),-(M||T)),ne=[];for(let ue=1/13,Ee=ue;Ee<=1;Ee+=ue)ne.push(xs(W,qe,As*2*Ee));return ne}}else{if(!(b||_&&e.length===1))if(p)for(let ne=1/13,ue=ne;ue<=1;ue+=ne){let Ee=xs(A[0],qe,As*ue);Pe.push(Ee)}else{let ne=xt(B[0],A[0]),ue=Ct(ne,.5),Ee=Ct(ne,.51);Pe.push(xt(qe,ue),xt(qe,Ee),Et(qe,Ee),Et(qe,ue))}let W=ks(zy(e[e.length-1].vector));if(_||b&&e.length===1)Te.push(Ie);else if(m){let ne=Ni(Ie,W,T);for(let ue=1/29,Ee=ue;Ee<1;Ee+=ue)Te.push(xs(ne,Ie,As*3*Ee))}else Te.push(Et(Ie,Ct(W,T)),Et(Ie,Ct(W,T*.99)),xt(Ie,Ct(W,T*.99)),xt(Ie,Ct(W,T)))}return B.concat(Te,A.reverse(),Pe)}function ev(e,t={}){var s;let{streamline:a=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let o=.15+(1-a)*.85,i=Array.isArray(e[0])?e:e.map(({x:h,y:g,pressure:b=.5})=>[h,g,b]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let g=1;g<5;g++)i.push(nr(i[0],h,g/4))}i.length===1&&(i=[...i,[...Et(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,f=c[0],m=i.length-1;for(let h=1;h<i.length;h++){let g=r&&h===m?i[h].slice(0,2):nr(f.point,i[h],o);if(Jy(f.point,g))continue;let b=Gy(g,f.point);if(p+=b,h<m&&!u){if(p<l)continue;u=!0}f={point:g,pressure:i[h][2]>=0?i[h][2]:.5,vector:Xu(xt(f.point,g)),distance:b,runningLength:p},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function tv(e,t={}){return Xy(ev(e,t),t)}var nv=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let a=0,l=s.length;a<l;a++)s[a](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(l=>t!==l)}}});function Fa(e,t){return e-t}function sv(e){return e<0?-1:1}function Ta(e){return[Math.abs(e),sv(e)]}function ep(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var av=2,Zt=av,ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;var t;const s=this.drauu.el,a=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*a,y:(e.pageY-r.top)*a,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const o=r.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*a,y:o.y*a,pressure:e.pressure}}}createElement(e,t){var l;const s=document.createElementNS("http://www.w3.org/2000/svg",e),a=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(l=a.fill)!=null?l:"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},lv=class extends ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=tv(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((a,[l,r],o,i)=>{const[c,u]=i[(o+1)%i.length];return a.push(l,r,(l+c)/2,(r+u)/2),a},["M",...t[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},rv=class extends ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ta(e.x-this.start.x),[a,l]=Ta(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,a);t=r,a=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",a);else{const[r,o]=[this.start.x,this.start.x+t*s].sort(Fa),[i,c]=[this.start.y,this.start.y+a*l].sort(Fa);this.attr("cx",(r+o)/2),this.attr("cy",(i+c)/2),this.attr("rx",(o-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function tp(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(l),s.appendChild(a),s}var ov=class extends ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=ep(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(tp(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const a=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=a/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},iv=class extends ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ta(e.x-this.start.x),[a,l]=Ta(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,a);t=r,a=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-a),this.attr("width",t*2),this.attr("height",a*2);else{const[r,o]=[this.start.x,this.start.x+t*s].sort(Fa),[i,c]=[this.start.y,this.start.y+a*l].sort(Fa);this.attr("x",r),this.attr("y",i),this.attr("width",o-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function cv(e,t){const s=e.x-t.x,a=e.y-t.y;return s*s+a*a}function uv(e,t,s){let a=t.x,l=t.y,r=s.x-a,o=s.y-l;if(r!==0||o!==0){const i=((e.x-a)*r+(e.y-l)*o)/(r*r+o*o);i>1?(a=s.x,l=s.y):i>0&&(a+=r*i,l+=o*i)}return r=e.x-a,o=e.y-l,r*r+o*o}function pv(e,t){let s=e[0];const a=[s];let l;for(let r=1,o=e.length;r<o;r++)l=e[r],cv(l,s)>t&&(a.push(l),s=l);return s!==l&&l&&a.push(l),a}function sr(e,t,s,a,l){let r=a,o=0;for(let i=t+1;i<s;i++){const c=uv(e[i],e[t],e[s]);c>r&&(o=i,r=c)}r>a&&(o-t>1&&sr(e,t,o,a,l),l.push(e[o]),s-o>1&&sr(e,o,s,a,l))}function dv(e,t){const s=e.length-1,a=[e[0]];return sr(e,0,s,t,a),a.push(e[s]),a}function Hi(e,t,s=!1){if(e.length<=2)return e;const a=t!==void 0?t*t:1;return e=s?e:pv(e,a),e=dv(e,a),e}var fv=class extends ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ep();const t=tp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Hi(this.points,1,!0),this.count=0),this.attr("d",Ki(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ki(Hi(this.points,1,!0))),!e.getTotalLength()))}};function mv(e,t){const s=t.x-e.x,a=t.y-e.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(a,2)),angle:Math.atan2(a,s)}}function Vi(e,t,s,a){const l=t||e,r=s||e,o=.2,i=mv(l,r),c=i.angle+(a?Math.PI:0),u=i.length*o,p=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:p,y:f}}function hv(e,t,s){const a=Vi(s[t-1],s[t-2],e),l=Vi(e,s[t-1],s[t+1],!0);return`C ${a.x.toFixed(Zt)},${a.y.toFixed(Zt)} ${l.x.toFixed(Zt)},${l.y.toFixed(Zt)} ${e.x.toFixed(Zt)},${e.y.toFixed(Zt)}`}function Ki(e){return e.reduce((t,s,a,l)=>a===0?`M ${s.x.toFixed(Zt)},${s.y.toFixed(Zt)}`:`${t} ${hv(s,a,l)}`,"")}var gv=class extends ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,a)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const o=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(o*i/this.pathSubFactor),u=r.getPointAtLength(o*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:a||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,a=e.x2,l=t.x1,r=t.x2,o=e.y1,i=e.y2,c=t.y1,u=t.y2,p=(s-a)*(c-u)-(o-i)*(l-r),f=(s*i-o*a)*(l-r)-(s-a)*(l*u-c*r),m=(s*i-o*a)*(c-u)-(o-i)*(l*u-c*r),h=(g,b,_)=>g>=b&&g<=_?!0:g>=_&&g<=b;if(p===0)return!1;{const g={x:f/p,y:m/p};return h(g.x,s,a)&&h(g.y,o,i)&&h(g.x,l,r)&&h(g.y,c,u)}}};function yv(e){return{draw:new fv(e),stylus:new lv(e),line:new ov(e),rectangle:new iv(e),ellipse:new rv(e),eraseLine:new gv(e)}}var vv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=nv(),this._models=yv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,a=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",o,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function _v(e){return new vv(e)}const ar=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Kt=Rt("slidev-drawing-enabled",!1),jw=Rt("slidev-drawing-pinned",!1),bv=H(!1),kv=H(!1),xv=H(!1),zs=H(!1),Sn=vh(Rt("slidev-drawing-brush",{color:ar[0],size:4,mode:"stylus"})),Ui=H("stylus"),np=E(()=>ke.drawings.syncAll||Ht.value);let Ws=!1;const ws=E({get(){return Ui.value},set(e){Ui.value=e,e==="arrow"?(Sn.mode="line",Sn.arrowEnd=!0):(Sn.mode=e,Sn.arrowEnd=!1)}}),Av=Fe({brush:Sn,acceptsInputTypes:E(()=>Kt.value?void 0:["pen"]),coordinateTransform:!1}),lt=za(_v(Av));function wv(){lt.clear(),np.value&&$u(Ue.value,"")}function sp(){var e;kv.value=lt.canRedo(),bv.value=lt.canUndo(),xv.value=!!((e=lt.el)!=null&&e.children.length)}function Bv(e){Ws=!0;const t=Da[e||Ue.value];t!=null?lt.load(t):lt.clear(),Ws=!1}lt.on("changed",()=>{if(sp(),!Ws){const e=lt.dump(),t=Ue.value;(Da[t]||"")!==e&&np.value&&$u(t,lt.dump())}});oh(e=>{Ws=!0,e[Ue.value]!=null&&lt.load(e[Ue.value]||""),Ws=!1,sp()});Ge(()=>{pe(Ue,()=>{!lt.mounted||Bv()},{immediate:!0})});lt.on("start",()=>zs.value=!0);lt.on("end",()=>zs.value=!1);window.addEventListener("keydown",e=>{if(!Kt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?lt.redo():lt.undo():e.code==="Escape"?Kt.value=!1:e.code==="KeyL"&&t?ws.value="line":e.code==="KeyA"&&t?ws.value="arrow":e.code==="KeyS"&&t?ws.value="stylus":e.code==="KeyR"&&t?ws.value="rectangle":e.code==="KeyE"&&t?ws.value="ellipse":e.code==="KeyC"&&t?wv():e.code.startsWith("Digit")&&t&&+e.code[5]<=ar.length?Sn.color=ar[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function He(...e){return E(()=>e.every(t=>at(t)))}function dt(e){return E(()=>!at(e))}const zi=ug(),bl=Rt("slidev-color-schema","auto"),lr=E(()=>ke.colorSchema!=="auto"),Ur=E({get(){return lr.value?ke.colorSchema==="dark":bl.value==="auto"?zi.value:bl.value==="dark"},set(e){lr.value||(bl.value=e===zi.value?"auto":e?"dark":"light")}}),ap=ju(Ur);jt&&pe(Ur,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ba=H(1),ka=E(()=>Ke.length-1),yt=H(0),zr=H(0);function Cv(){yt.value>ba.value&&(yt.value-=1)}function Ev(){yt.value<ka.value&&(yt.value+=1)}function Ov(){if(yt.value>ba.value){let e=yt.value-zr.value;e<ba.value&&(e=ba.value),yt.value=e}}function Sv(){if(yt.value<ka.value){let e=yt.value+zr.value;e>ka.value&&(e=ka.value),yt.value=e}}function Dv(){const{escape:e,space:t,shift:s,left:a,right:l,up:r,down:o,enter:i,d:c,g:u,o:p}=Zu,f=[{name:"next_space",key:He(t,dt(s)),fn:pn,autoRepeat:!0},{name:"prev_space",key:He(t,s),fn:dn,autoRepeat:!0},{name:"next_right",key:He(l,dt(s),dt(st)),fn:pn,autoRepeat:!0},{name:"prev_left",key:He(a,dt(s),dt(st)),fn:dn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:pn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:dn,autoRepeat:!0},{name:"next_down",key:He(o,dt(st)),fn:Ys,autoRepeat:!0},{name:"prev_up",key:He(r,dt(st)),fn:()=>Zs(!1),autoRepeat:!0},{name:"next_shift",key:He(l,s),fn:Ys,autoRepeat:!0},{name:"prev_shift",key:He(a,s),fn:()=>Zs(!1),autoRepeat:!0},{name:"toggle_dark",key:He(c,dt(Kt)),fn:ap},{name:"toggle_overview",key:He(p,dt(Kt)),fn:Qu},{name:"hide_overview",key:He(e,dt(Kt)),fn:()=>st.value=!1},{name:"goto",key:He(u,dt(Kt)),fn:()=>Yn.value=!Yn.value},{name:"next_overview",key:He(l,st),fn:Ev},{name:"prev_overview",key:He(a,st),fn:Cv},{name:"up_overview",key:He(r,st),fn:Ov},{name:"down_overview",key:He(o,st),fn:Sv},{name:"goto_from_overview",key:He(i,st),fn:()=>{cs(yt.value),st.value=!1}}];return{customShortcuts:[],defaultShortcuts:f}}const lp=He(dt(Ky),dt(Uy),Hy);function Pv(e,t,s=!1){typeof e=="string"&&(e=Zu[e]);const a=He(e,lp);let l=0,r;const o=()=>{if(clearTimeout(r),!a.value){l=0;return}s&&(r=setTimeout(o,Math.max(1e3-l*250,150)),l++),t()};return pe(a,o,{flush:"sync"})}function $v(e,t){return Wh(e,s=>{!lp.value||s.repeat||t()})}function Mv(){const{customShortcuts:e,defaultShortcuts:t}=Dv();new Map([...t,...e].map(a=>[a.key,a])).forEach(a=>{a.fn&&Pv(a.key,a.fn,a.autoRepeat)}),$v("f",()=>Gu.toggle())}const Fv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),jv=[Tv];function Iv(e,t){return x(),I("svg",Fv,jv)}const Rv={name:"carbon-close",render:Iv};function Wr(e){var s,a;const t=(a=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:a.no;return t!=null?`slidev-page-${t}`:""}const rp=Ce({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;V(G);const s=H(),a=Ag(s),l=E(()=>t.width?t.width:a.width.value),r=E(()=>t.width?t.width/un:a.height.value);t.width&&Xs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const o=E(()=>l.value/r.value),i=E(()=>t.scale?t.scale:o.value<un?l.value/Mn:r.value*un/Mn),c=E(()=>({height:`${Su}px`,width:`${Mn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=E(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(Ou,i),(p,f)=>(x(),I("div",{id:"slide-container",ref_key:"root",ref:s,class:Re(k(u))},[n("div",{id:"slide-content",style:et(k(c))},[Tt(p.$slots,"default")],4),Tt(p.$slots,"controls")],2))}});const Jr=Ce({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Vt(e,"clicks",t),a=Vt(e,"clicksElements",t),l=Vt(e,"clicksDisabled",t),r=Vt(e,"clicksOrderMap",t);a.value.length=0,ht(Jm,e.route),ht(Ym,e.context),ht(Ss,s),ht(Ds,l),ht(Bn,a),ht(zl,r)},render(){var e,t;return this.$props.is?gt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Lv=["innerHTML"],Nv=Ce({__name:"DrawingPreview",props:{page:null},setup(e){return V(G),(t,s)=>k(Da)[e.page]?(x(),I("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Da)[e.page]},null,8,Lv)):de("v-if",!0)}}),qv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Hv=["onClick"],Vv=Ce({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const s=e;V(G);const a=Vt(s,"modelValue",t);function l(){a.value=!1}function r(h){cs(h),l()}function o(h){return h===yt.value}const i=tr.smaller("xs"),c=tr.smaller("sm"),u=4*16*2,p=2*16,f=E(()=>i.value?Tn.width.value-u:c.value?(Tn.width.value-u-p)/2:300),m=E(()=>Math.floor((Tn.width.value-u)/(f.value+p)));return Xs(()=>{yt.value=Ue.value,zr.value=m.value}),(h,g)=>{const b=Rv;return x(),I(Be,null,[Ve(n("div",qv,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:et(`grid-template-columns: repeat(auto-fit,minmax(${k(f)}px,1fr))`)},[(x(!0),I(Be,null,ea(k(Ke).slice(0,-1),(_,C)=>(x(),I("div",{key:_.path,class:"relative"},[n("div",{class:Re(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":o(C+1)}]),onClick:B=>r(+_.path)},[(x(),Y(rp,{key:_.path,width:k(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:z(()=>[j(k(Jr),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Re(k(Wr)(_)),route:_,context:"overview"},null,8,["is","class","route"]),j(Nv,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,Hv),n("div",{class:"absolute top-0 opacity-50",style:et(`left: ${k(f)+5}px`)},jn(C+1),5)]))),128))],4)],512),[[Bu,k(a)]]),k(a)?(x(),I("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[j(b)])):de("v-if",!0)],64)}}});const Kv="/materi-PBO-02/assets/logo.b72bde5d.png",Uv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},zv=Ce({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;V(G);const a=Vt(s,"modelValue",t);function l(){a.value=!1}return(r,o)=>(x(),Y(ru,null,[k(a)?(x(),I("div",Uv,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=i=>l())}),n("div",{class:Re(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Tt(r.$slots,"default")],2)])):de("v-if",!0)],1024))}}),Wv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Jv=["innerHTML"],Yv=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Kv,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),d("dev ")])])],-1),Zv=Ce({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;V(G);const a=Vt(s,"modelValue",t),l=E(()=>typeof ke.info=="string");return(r,o)=>(x(),Y(zv,{modelValue:k(a),"onUpdate:modelValue":o[0]||(o[0]=i=>Ae(a)?a.value=i:null),class:"px-6 py-4"},{default:z(()=>[n("div",Wv,[k(l)?(x(),I("div",{key:0,class:"mb-4",innerHTML:k(ke).info},null,8,Jv)):de("v-if",!0),Yv])]),_:1},8,["modelValue"]))}});const Gv=["disabled","onKeydown"],Qv=Ce({__name:"Goto",setup(e){V(G);const t=H(),s=H(""),a=E(()=>{if(s.value.startsWith("/"))return!!Ke.find(o=>o.path===s.value.substring(1));{const o=+s.value;return!isNaN(o)&&o>0&&o<=_p.value}});function l(){a.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),r()}function r(){Yn.value=!1}return pe(Yn,async o=>{var i,c;o?(await Ge(),s.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),pe(s,o=>{o.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(o,i)=>(x(),I("div",{id:"slidev-goto-dialog",class:Re(["fixed right-5 bg-main transform transition-all",k(Yn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ve(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!k(Yn),class:Re(["outline-none bg-transparent",{"text-red-400":!k(a)&&s.value}]),placeholder:"Goto...",onKeydown:[Wo(l,["enter"]),Wo(r,["escape"])],onBlur:r},null,42,Gv),[[Om,s.value]])],2))}}),Xv=Ce({__name:"Controls",setup(e){V(G);const t=Ft(),s=Ft();return(a,l)=>(x(),I(Be,null,[j(Vv,{modelValue:k(st),"onUpdate:modelValue":l[0]||(l[0]=r=>Ae(st)?st.value=r:null)},null,8,["modelValue"]),j(Qv),k(t)?(x(),Y(k(t),{key:0})):de("v-if",!0),k(s)?(x(),Y(k(s),{key:1,modelValue:k(vl),"onUpdate:modelValue":l[1]||(l[1]=r=>Ae(vl)?vl.value=r:null)},null,8,["modelValue"])):de("v-if",!0),k(ke).info?(x(),Y(Zv,{key:2,modelValue:k(Ms),"onUpdate:modelValue":l[2]||(l[2]=r=>Ae(Ms)?Ms.value=r:null)},null,8,["modelValue"])):de("v-if",!0)],64))}}),e1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),n1=[t1];function s1(e,t){return x(),I("svg",e1,n1)}const a1={name:"carbon-settings-adjust",render:s1},l1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r1=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),o1=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),i1=[r1,o1];function c1(e,t){return x(),I("svg",l1,i1)}const u1={name:"carbon-information",render:c1},p1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),f1=[d1];function m1(e,t){return x(),I("svg",p1,f1)}const h1={name:"carbon-download",render:m1},g1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y1=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),v1=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),_1=[y1,v1];function b1(e,t){return x(),I("svg",g1,_1)}const k1={name:"carbon-user-speaker",render:b1},x1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),w1=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),B1=[A1,w1];function C1(e,t){return x(),I("svg",x1,B1)}const E1={name:"carbon-presentation-file",render:C1},O1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S1=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),D1=[S1];function P1(e,t){return x(),I("svg",O1,D1)}const $1={name:"carbon-pen",render:P1},M1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},F1=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),T1=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),j1=[F1,T1];function I1(e,t){return x(),I("svg",M1,j1)}const R1={name:"ph-cursor-duotone",render:I1},L1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},N1=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),q1=[N1];function H1(e,t){return x(),I("svg",L1,q1)}const op={name:"ph-cursor-fill",render:H1},V1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K1=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),U1=[K1];function z1(e,t){return x(),I("svg",V1,U1)}const W1={name:"carbon-sun",render:z1},J1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y1=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Z1=[Y1];function G1(e,t){return x(),I("svg",J1,Z1)}const Q1={name:"carbon-moon",render:G1},X1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e_=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),t_=[e_];function n_(e,t){return x(),I("svg",X1,t_)}const s_={name:"carbon-apps",render:n_},a_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),r_=[l_];function o_(e,t){return x(),I("svg",a_,r_)}const ip={name:"carbon-arrow-right",render:o_},i_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c_=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),u_=[c_];function p_(e,t){return x(),I("svg",i_,u_)}const na={name:"carbon-arrow-left",render:p_},d_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f_=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),m_=[f_];function h_(e,t){return x(),I("svg",d_,m_)}const g_={name:"carbon-maximize",render:h_},y_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v_=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),__=[v_];function b_(e,t){return x(),I("svg",y_,__)}const k_={name:"carbon-minimize",render:b_},x_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),w_=[A_];function B_(e,t){return x(),I("svg",x_,w_)}const C_={name:"carbon-checkmark",render:B_},E_={class:"select-list"},O_={class:"title"},S_={class:"items"},D_=["onClick"],P_=Ce({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;V(G);const a=Vt(s,"modelValue",t,{passive:!0});return(l,r)=>{const o=C_;return x(),I("div",E_,[n("div",O_,jn(e.title),1),n("div",S_,[(x(!0),I(Be,null,ea(e.items,i=>(x(),I("div",{key:i.value,class:Re(["item",{active:k(a)===i.value}]),onClick:()=>{var c;a.value=i.value,(c=i.onClick)==null||c.call(i)}},[j(o,{class:Re(["text-green-500",{"opacity-0":k(a)!==i.value}])},null,8,["class"]),d(" "+jn(i.display||i.value),1)],10,D_))),128))])])}}});const cp=(e,t)=>{const s=e.__vccOpts||e;for(const[a,l]of t)s[a]=l;return s},$_=cp(P_,[["__scopeId","data-v-7dd0eaca"]]),M_={class:"text-sm"},F_=Ce({__name:"Settings",setup(e){V(G);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(x(),I("div",M_,[j($_,{modelValue:k(_a),"onUpdate:modelValue":a[0]||(a[0]=l=>Ae(_a)?_a.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),T_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},j_=Ce({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;V(G);const a=Vt(s,"modelValue",t,{passive:!0}),l=H();return Uh(l,()=>{a.value=!1}),(r,o)=>(x(),I("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:Re({disabled:e.disabled}),onClick:o[0]||(o[0]=i=>a.value=!k(a))},[Tt(r.$slots,"button",{class:Re({disabled:e.disabled})})],2),(x(),Y(ru,null,[k(a)?(x(),I("div",T_,[Tt(r.$slots,"menu")])):de("v-if",!0)],1024))],512))}}),I_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ma={__name:"VerticalDivider",setup(e){return V(G),(t,s)=>(x(),I("div",I_))}},R_={render(){return[]}},L_={class:"icon-btn"},N_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},q_={class:"my-auto"},H_={class:"opacity-50"},V_=Ce({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;V(G);const s=tr.smaller("md"),{isFullscreen:a,toggle:l}=Gu,r=E(()=>or.value?`?password=${or.value}`:""),o=E(()=>`/presenter/${Ue.value}${r.value}`),i=E(()=>`/${Ue.value}${r.value}`),c=H(),u=()=>{c.value&&ns.value&&c.value.contains(ns.value)&&ns.value.blur()},p=E(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Ft(),m=Ft();return fs(()=>import("./DrawingControls.1e68ca79.js"),["assets/DrawingControls.1e68ca79.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.36077b08.js"]).then(h=>m.value=h.default),(h,g)=>{const b=k_,_=g_,C=na,B=ip,A=s_,O=Q1,T=W1,M=op,q=R1,ee=$1,le=E1,me=Ea("RouterLink"),ge=k1,Ne=h1,qe=u1,Ie=a1;return x(),I("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(p)]),onMouseleave:u},[k(Jt)?de("v-if",!0):(x(),I("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Pe)=>k(l)&&k(l)(...Pe))},[k(a)?(x(),Y(b,{key:0})):(x(),Y(_,{key:1}))])),n("button",{class:Re(["icon-btn",{disabled:!k(s5)}]),onClick:g[1]||(g[1]=(...Pe)=>k(dn)&&k(dn)(...Pe))},[j(C)],2),n("button",{class:Re(["icon-btn",{disabled:!k(n5)}]),title:"Next",onClick:g[2]||(g[2]=(...Pe)=>k(pn)&&k(pn)(...Pe))},[j(B)],2),k(Jt)?de("v-if",!0):(x(),I("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Pe=>k(Qu)())},[j(A)])),k(lr)?de("v-if",!0):(x(),I("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Pe=>k(ap)())},[k(Ur)?(x(),Y(O,{key:0})):(x(),Y(T,{key:1}))])),j(ma),k(Jt)?de("v-if",!0):(x(),I(Be,{key:3},[!k(Ht)&&!k(s)&&k(f)?(x(),I(Be,{key:0},[j(k(f)),j(ma)],64)):de("v-if",!0),k(Ht)?(x(),I("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Pe=>_l.value=!k(_l))},[k(_l)?(x(),Y(M,{key:0})):(x(),Y(q,{key:1,class:"opacity-50"}))])):de("v-if",!0)],64)),!k(ke).drawings.presenterOnly&&!k(Jt)?(x(),I(Be,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Pe=>Kt.value=!k(Kt))},[j(ee),k(Kt)?(x(),I("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:et({background:k(Sn).color})},null,4)):de("v-if",!0)]),j(ma)],64)):de("v-if",!0),k(Jt)?de("v-if",!0):(x(),I(Be,{key:5},[k(Ht)?(x(),Y(me,{key:0,to:k(i),class:"icon-btn",title:"Play Mode"},{default:z(()=>[j(le)]),_:1},8,["to"])):de("v-if",!0),k(X2)?(x(),Y(me,{key:1,to:k(o),class:"icon-btn",title:"Presenter Mode"},{default:z(()=>[j(ge)]),_:1},8,["to"])):de("v-if",!0),de("v-if",!0)],64)),(x(),I(Be,{key:6},[k(ke).download?(x(),I("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Pe)=>k(ir)&&k(ir)(...Pe))},[j(Ne)])):de("v-if",!0)],64)),!k(Ht)&&k(ke).info&&!k(Jt)?(x(),I("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Pe=>Ms.value=!k(Ms))},[j(qe)])):de("v-if",!0),!k(Ht)&&!k(Jt)?(x(),Y(j_,{key:8},{button:z(()=>[n("button",L_,[j(Ie)])]),menu:z(()=>[j(F_)]),_:1})):de("v-if",!0),k(Jt)?de("v-if",!0):(x(),Y(ma,{key:9})),n("div",N_,[n("div",q_,[d(jn(k(Ue))+" ",1),n("span",H_,"/ "+jn(k(_p)),1)])]),j(k(R_))],34)],512)}}}),up={render(){return[]}},pp={render(){return[]}},K_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},U_=Ce({__name:"PresenterMouse",setup(e){return V(G),(t,s)=>{const a=op;return k(ml).cursor?(x(),I("div",K_,[j(a,{class:"absolute",style:et({left:`${k(ml).cursor.x}%`,top:`${k(ml).cursor.y}%`})},null,8,["style"])])):de("v-if",!0)}}}),z_=Ce({__name:"SlidesShow",props:{context:null},setup(e){V(G),pe(mt,()=>{var s,a;((s=mt.value)==null?void 0:s.meta)&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),((a=kl.value)==null?void 0:a.meta)&&kl.value.meta.preload!==!1&&(kl.value.meta.__preloaded=!0)},{immediate:!0});const t=Ft();return fs(()=>import("./DrawingLayer.948faa64.js"),[]).then(s=>t.value=s.default),(s,a)=>(x(),I(Be,null,[de(" Global Bottom "),j(k(pp)),de(" Slides "),(x(!0),I(Be,null,ea(k(Ke),l=>{var r,o;return x(),I(Be,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===k(mt)?Ve((x(),Y(k(Jr),{key:0,is:l==null?void 0:l.component,clicks:l===k(mt)?k(Mt):0,"clicks-elements":((o=l.meta)==null?void 0:o.__clicksElements)||[],"clicks-disabled":!1,class:Re(k(Wr)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Bu,l===k(mt)]]):de("v-if",!0)],64)}),128)),de(" Global Top "),j(k(up)),k(t)?(x(),Y(k(t),{key:0})):de("v-if",!0),k(Ht)?de("v-if",!0):(x(),Y(U_,{key:1}))],64))}}),W_=Ce({__name:"Play",setup(e){V(G),Mv();const t=H();function s(r){var o;ji.value||((o=r.target)==null?void 0:o.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?pn():dn())}r5(t);const a=E(()=>Vy.value||ji.value);Ft();const l=Ft();return fs(()=>import("./DrawingControls.1e68ca79.js"),["assets/DrawingControls.1e68ca79.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.36077b08.js"]).then(r=>l.value=r.default),(r,o)=>(x(),I(Be,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:et(k(Du))},[j(rp,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:k(Gr)?k(Tn).width.value:void 0,scale:k(_a),onPointerdown:s},{default:z(()=>[j(z_,{context:"slide"})]),controls:z(()=>[n("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(a)?"opacity-100 right-0":"opacity-0 p-2",k(zs)?"pointer-events-none":""]])},[j(V_,{class:"m-auto",persist:k(a)},null,8,["persist"])],2),!k(ke).drawings.presenterOnly&&!k(Jt)&&k(l)?(x(),Y(k(l),{key:0,class:"ml-0"})):de("v-if",!0)]),_:1},8,["style","width","scale"]),de("v-if",!0)],4),j(Xv)],64))}});function dp(e){const t=E(()=>e.value.path),s=E(()=>Ke.length-1),a=E(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=E(()=>nl(a.value)),r=E(()=>Ke.find(m=>m.path===`${a.value}`)),o=E(()=>{var m,h,g;return(g=(h=(m=r.value)==null?void 0:m.meta)==null?void 0:h.slide)==null?void 0:g.id}),i=E(()=>{var m,h;return(h=(m=r.value)==null?void 0:m.meta)==null?void 0:h.layout}),c=E(()=>Ke.find(m=>m.path===`${Math.min(Ke.length,a.value+1)}`)),u=E(()=>Ke.filter(m=>{var h,g;return(g=(h=m.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((m,h)=>(Qr(m,h),m),[])),p=E(()=>Xr(u.value,r.value)),f=E(()=>eo(p.value));return{route:e,path:t,total:s,currentPage:a,currentPath:l,currentRoute:r,currentSlideId:o,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:f}}function fp(e,t,s){const a=H(0);Ge(()=>{vt.afterEach(async()=>{await Ge(),a.value+=1})});const l=E(()=>{var c,u;return a.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=E(()=>{var c,u,p;return+((p=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?p:l.value.length)}),o=E(()=>s.value<Ke.length-1||e.value<r.value),i=E(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:o,hasPrev:i}}const J_=["id"],Wi=Ce({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,a=Vt(s,"clicksElements",t),l=E(()=>({height:`${Su}px`,width:`${Mn}px`})),r=Ft();fs(()=>import("./DrawingPreview.da4b39a5.js"),[]).then(u=>r.value=u.default);const o=E(()=>s.clicks),i=fp(o,s.nav.currentRoute,s.nav.currentPage),c=E(()=>`${s.route.path.toString().padStart(3,"0")}-${(o.value+1).toString().padStart(2,"0")}`);return ht(G,Fe({nav:{...s.nav,...i},configs:ke,themeConfigs:E(()=>ke.themeConfig)})),(u,p)=>{var f;return x(),I("div",{id:k(c),class:"slide-container",style:et(k(l))},[j(k(pp)),j(k(Jr),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":k(a),"onUpdate:clicks-elements":p[0]||(p[0]=m=>Ae(a)?a.value=m:null),clicks:k(o),"clicks-disabled":!1,class:Re(k(Wr)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),k(r)?(x(),Y(k(r),{key:0,page:+e.route.path},null,8,["page"])):de("v-if",!0),j(k(up))],12,J_)}}}),Y_=Ce({__name:"PrintSlide",props:{route:null},setup(e){var r;const t=e;V(G);const s=Fe(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),a=E(()=>t.route),l=dp(a);return(o,i)=>(x(),I(Be,null,[j(Wi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>Ae(s)?s.value=c:null),clicks:0,nav:k(l),route:k(a)},null,8,["clicks-elements","nav","route"]),k(Fs)?de("v-if",!0):(x(!0),I(Be,{key:0},ea(s.length,c=>(x(),Y(Wi,{key:c,clicks:c,nav:k(l),route:k(a)},null,8,["clicks","nav","route"]))),128))],64))}}),Z_={id:"print-content"},G_=Ce({__name:"PrintContainer",props:{width:null},setup(e){const t=e;V(G);const s=E(()=>t.width),a=E(()=>t.width/un),l=E(()=>s.value/a.value),r=E(()=>l.value<un?s.value/Mn:a.value*un/Mn),o=Ke.slice(0,-1),i=E(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(Ou,r),(c,u)=>(x(),I("div",{id:"print-container",class:Re(k(i))},[n("div",Z_,[(x(!0),I(Be,null,ea(k(o),p=>(x(),Y(Y_,{key:p.path,route:p},null,8,["route"]))),128))]),Tt(c.$slots,"controls")],2))}});const Q_=Ce({__name:"Print",setup(e){V(G);const t=On.canvasWidth,s=Math.round(t/On.aspectRatio)+1;function a(l,{slots:r}){if(r.default)return gt("style",r.default())}return Xs(()=>{Gr?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,r)=>(x(),I(Be,null,[j(a,null,{default:z(()=>[d(" @page { size: "+jn(k(t))+"px "+jn(s)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:et(k(Du))},[j(G_,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:k(Tn).width.value},null,8,["style","width"])],4)],64))}});const X_={class:"slidev-layout end"},eb={__name:"end",setup(e){return V(G),(t,s)=>(x(),I("div",X_," END "))}},tb=cp(eb,[["__scopeId","data-v-ab32435f"]]);function Ji(e){return e.startsWith("/")?"/materi-PBO-02/"+e.slice(1):e}function nb(e,t=!1){const s=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),a={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Ji(e)})`:`url("${Ji(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const sb={class:"my-auto w-full"},ab=Ce({__name:"cover",props:{background:{default:""}},setup(e){const t=e;V(G);const s=E(()=>nb(t.background,!0));return(a,l)=>(x(),I("div",{class:"slidev-layout cover",style:et(k(s))},[n("div",sb,[Tt(a.$slots,"default")])],4))}}),lb=n("h1",null,[d("Praktikum"),n("br"),d("Pemrograman"),n("br"),d("Berbasis Objek")],-1),rb=n("p",null,[n("strong",null,"Pertemuan 2")],-1),ob={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",titleTemplate:"%s",info:`# Materi 02 - PBO
Java Package dan Enkapsulasi

> Asisten Praktikum Pemrograman Berbasis Objek 2022
> Teknik Informatika Universitas Padjadjaran
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-02",css:"unocss",fonts:{sans:"Overpass",mono:"Overpass Mono"}};return V(G),(s,a)=>(x(),Y(ab,be(ve(t)),{default:z(()=>[lb,rb]),_:1},16))}},ib={class:"slidev-layout intro"},cb={class:"my-auto"},ub={__name:"intro",setup(e){return V(G),(t,s)=>(x(),I("div",ib,[n("div",cb,[Tt(t.$slots,"default")])]))}},pb=n("h1",null,"Review Time \u{1F552}",-1),db=n("div",{class:"p-4 text-lg"},[n("span",{class:"text-orange"},"1."),d(" Struktur Kode Java "),n("br"),n("span",{class:"text-orange"},"2."),d(" Membuat Objek "),n("br"),n("span",{class:"text-orange"},"3."),d(" Input dan Output "),n("br"),n("span",{class:"text-orange"},"4."),d(" Statements dalam Java "),n("br"),n("span",{class:"text-orange"},"5."),d(" Compile dan Run File Java "),n("br"),n("span",{class:"text-orange"},"6."),d(" Built-in Methods dalam Class Java "),n("br"),n("span",{class:"text-orange"},"7."),d(" Seputar assignment atau lainnya ")],-1),fb={__name:"2",setup(e){const t={layout:"intro",srcSequence:"./pages/02_Review.md"};return V(G),(s,a)=>(x(),Y(ub,be(ve(t)),{default:z(()=>[pb,db]),_:1},16))}},mb={class:"slidev-layout center h-full grid place-content-center"},hb={class:"my-auto"},Je={__name:"center",setup(e){return V(G),(t,s)=>(x(),I("div",mb,[n("div",hb,[Tt(t.$slots,"default")])]))}},gb=n("h1",null,"Materi Pertemuan 2",-1),yb=n("p",null,"Gambaran Materi Pembelajaran Hari Ini",-1),vb={__name:"3",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/03_Cover Materi Pertemuan.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[gb,yb]),_:1},16))}},_b={class:"slidev-layout default"},bt={__name:"default",setup(e){return V(G),(t,s)=>(x(),I("div",_b,[Tt(t.$slots,"default")]))}},bb=n("h1",null,"Materi Pertemuan 2",-1),kb=n("div",{class:"grid grid-cols-2 gap-y-8 gap-x-4 mt-16"},[n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"01"),n("div",{class:"font-bold text-xl"},"Program Modular Java"),n("div",{class:"font-light text-sm"},"Membuat program modular dengan file java lebih dari satu")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"02"),n("div",{class:"font-bold text-xl"},"Array of Object"),n("div",{class:"font-light text-sm"},"Penggunaan array of object dalam java")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"03"),n("div",{class:"font-bold text-xl"},"Enkapsulasi"),n("div",{class:"font-light text-sm"},"Mengenal konsep dan penggunaan enkapsulasi")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"04"),n("div",{class:"font-bold text-xl"},"Overloading"),n("div",{class:"font-light text-sm"},"Mengenal konsep dan penggunaan overloading")])],-1),xb={__name:"4",setup(e){const t={srcSequence:"./pages/04_Materi Pertemuan 02.md"};return V(G),(s,a)=>(x(),Y(bt,be(ve(t)),{default:z(()=>[bb,kb]),_:1},16))}},Ab=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 01 ",-1),wb=n("h1",{class:"font-bold mt-12"}," Program Modular Java ",-1),Bb={__name:"5",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Program Modular.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[Ab,wb]),_:1},16))}},Cb=n("h1",null,"Modularitas Java",-1),Eb=n("div",{class:"text-base text-justify mt-4"},[n("p",null,"Dalam bahasa pemrograman berorientasi objek apapun termasuk Java dan C#, konsep modularitas menjadi sebuah standar untuk membuat setiap modul bersifat individual. Hal ini mengizinkan komunikasi antar modul yang lebih mudah."),n("p",null,"Library yang sering kita sertakan ketika membuat suatu program juga dapat disebut sebagai module. Maka dari itu, modularitas ini sangat berguna terutama untuk bahasa pemrograman berorientasi objek."),n("p",null,[d("Di Java sendiri, terdapat sebuah keyword bernama "),n("kbd",null,"package"),d(" yang berfungsi untuk mengorganisir sekumpulan "),n("code",null,"class"),d(" dan "),n("code",null,"interface"),d(" dalam suatu direktori tertentu.")])],-1),Ob={__name:"6",setup(e){const t={layout:"center",srcSequence:"./pages/06_Modularitas Java.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[Cb,Eb]),_:1},16))}},Sb={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Db=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Pb=[Db];function $b(e,t){return x(),I("svg",Sb,Pb)}const Mb={name:"ph-clipboard",render:$b},Fb={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Tb=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),jb=[Tb];function Ib(e,t){return x(),I("svg",Fb,jb)}const Rb={name:"ph-check-circle",render:Ib};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function mp(e){return typeof e>"u"||e===null}function Lb(e){return typeof e=="object"&&e!==null}function Nb(e){return Array.isArray(e)?e:mp(e)?[]:[e]}function qb(e,t){var s,a,l,r;if(t)for(r=Object.keys(t),s=0,a=r.length;s<a;s+=1)l=r[s],e[l]=t[l];return e}function Hb(e,t){var s="",a;for(a=0;a<t;a+=1)s+=e;return s}function Vb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Kb=mp,Ub=Lb,zb=Nb,Wb=Hb,Jb=Vb,Yb=qb,Yr={isNothing:Kb,isObject:Ub,toArray:zb,repeat:Wb,isNegativeZero:Jb,extend:Yb};function hp(e,t){var s="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),a+" "+s):a}function Js(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=hp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Js.prototype=Object.create(Error.prototype);Js.prototype.constructor=Js;Js.prototype.toString=function(t){return this.name+": "+hp(this,t)};var Cn=Js,Zb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Gb=["scalar","sequence","mapping"];function Qb(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(a){t[String(a)]=s})}),t}function Xb(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(Zb.indexOf(s)===-1)throw new Cn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Qb(t.styleAliases||null),Gb.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Xe=Xb;function Yi(e,t){var s=[];return e[t].forEach(function(a){var l=s.length;s.forEach(function(r,o){r.tag===a.tag&&r.kind===a.kind&&r.multi===a.multi&&(l=o)}),s[l]=a}),s}function e0(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function a(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(a);return e}function rr(e){return this.extend(e)}rr.prototype.extend=function(t){var s=[],a=[];if(t instanceof Xe)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof Xe))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(r){if(!(r instanceof Xe))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(rr.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(a),l.compiledImplicit=Yi(l,"implicit"),l.compiledExplicit=Yi(l,"explicit"),l.compiledTypeMap=e0(l.compiledImplicit,l.compiledExplicit),l};var t0=rr,n0=new Xe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),s0=new Xe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),a0=new Xe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),l0=new t0({explicit:[n0,s0,a0]});function r0(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function o0(){return null}function i0(e){return e===null}var c0=new Xe("tag:yaml.org,2002:null",{kind:"scalar",resolve:r0,construct:o0,predicate:i0,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function u0(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function p0(e){return e==="true"||e==="True"||e==="TRUE"}function d0(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var f0=new Xe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:u0,construct:p0,predicate:d0,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function m0(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function h0(e){return 48<=e&&e<=55}function g0(e){return 48<=e&&e<=57}function y0(e){if(e===null)return!1;var t=e.length,s=0,a=!1,l;if(!t)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===t)return!0;if(l=e[++s],l==="b"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;a=!0}return a&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!m0(e.charCodeAt(s)))return!1;a=!0}return a&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!h0(e.charCodeAt(s)))return!1;a=!0}return a&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=e[s],l!=="_"){if(!g0(e.charCodeAt(s)))return!1;a=!0}return!(!a||l==="_")}function v0(e){var t=e,s=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function _0(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Yr.isNegativeZero(e)}var b0=new Xe("tag:yaml.org,2002:int",{kind:"scalar",resolve:y0,construct:v0,predicate:_0,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),k0=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function x0(e){return!(e===null||!k0.test(e)||e[e.length-1]==="_")}function A0(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var w0=/^[-+]?[0-9]+e/;function B0(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Yr.isNegativeZero(e))return"-0.0";return s=e.toString(10),w0.test(s)?s.replace("e",".e"):s}function C0(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Yr.isNegativeZero(e))}var E0=new Xe("tag:yaml.org,2002:float",{kind:"scalar",resolve:x0,construct:A0,predicate:C0,represent:B0,defaultStyle:"lowercase"}),O0=l0.extend({implicit:[c0,f0,b0,E0]}),S0=O0,gp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),yp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function D0(e){return e===null?!1:gp.exec(e)!==null||yp.exec(e)!==null}function P0(e){var t,s,a,l,r,o,i,c=0,u=null,p,f,m;if(t=gp.exec(e),t===null&&(t=yp.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],a=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,a,l));if(r=+t[4],o=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],f=+(t[11]||0),u=(p*60+f)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(s,a,l,r,o,i,c)),u&&m.setTime(m.getTime()-u),m}function $0(e){return e.toISOString()}var M0=new Xe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:D0,construct:P0,instanceOf:Date,represent:$0});function F0(e){return e==="<<"||e===null}var T0=new Xe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:F0}),Zr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function j0(e){if(e===null)return!1;var t,s,a=0,l=e.length,r=Zr;for(s=0;s<l;s++)if(t=r.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}function I0(e){var t,s,a=e.replace(/[\r\n=]/g,""),l=a.length,r=Zr,o=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(o>>16&255),i.push(o>>8&255),i.push(o&255)),o=o<<6|r.indexOf(a.charAt(t));return s=l%4*6,s===0?(i.push(o>>16&255),i.push(o>>8&255),i.push(o&255)):s===18?(i.push(o>>10&255),i.push(o>>2&255)):s===12&&i.push(o>>4&255),new Uint8Array(i)}function R0(e){var t="",s=0,a,l,r=e.length,o=Zr;for(a=0;a<r;a++)a%3===0&&a&&(t+=o[s>>18&63],t+=o[s>>12&63],t+=o[s>>6&63],t+=o[s&63]),s=(s<<8)+e[a];return l=r%3,l===0?(t+=o[s>>18&63],t+=o[s>>12&63],t+=o[s>>6&63],t+=o[s&63]):l===2?(t+=o[s>>10&63],t+=o[s>>4&63],t+=o[s<<2&63],t+=o[64]):l===1&&(t+=o[s>>2&63],t+=o[s<<4&63],t+=o[64],t+=o[64]),t}function L0(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var N0=new Xe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:j0,construct:I0,predicate:L0,represent:R0}),q0=Object.prototype.hasOwnProperty,H0=Object.prototype.toString;function V0(e){if(e===null)return!0;var t=[],s,a,l,r,o,i=e;for(s=0,a=i.length;s<a;s+=1){if(l=i[s],o=!1,H0.call(l)!=="[object Object]")return!1;for(r in l)if(q0.call(l,r))if(!o)o=!0;else return!1;if(!o)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function K0(e){return e!==null?e:[]}var U0=new Xe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V0,construct:K0}),z0=Object.prototype.toString;function W0(e){if(e===null)return!0;var t,s,a,l,r,o=e;for(r=new Array(o.length),t=0,s=o.length;t<s;t+=1){if(a=o[t],z0.call(a)!=="[object Object]"||(l=Object.keys(a),l.length!==1))return!1;r[t]=[l[0],a[l[0]]]}return!0}function J0(e){if(e===null)return[];var t,s,a,l,r,o=e;for(r=new Array(o.length),t=0,s=o.length;t<s;t+=1)a=o[t],l=Object.keys(a),r[t]=[l[0],a[l[0]]];return r}var Y0=new Xe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:W0,construct:J0}),Z0=Object.prototype.hasOwnProperty;function G0(e){if(e===null)return!0;var t,s=e;for(t in s)if(Z0.call(s,t)&&s[t]!==null)return!1;return!0}function Q0(e){return e!==null?e:{}}var X0=new Xe("tag:yaml.org,2002:set",{kind:"mapping",resolve:G0,construct:Q0});S0.extend({implicit:[M0,T0],explicit:[N0,U0,Y0,X0]});function Zi(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var ek=new Array(256),tk=new Array(256);for(var Kn=0;Kn<256;Kn++)ek[Kn]=Zi(Kn)?1:0,tk[Kn]=Zi(Kn);function nk(e){return Array.from(new Set(e))}function Gi(...e){let t,s,a;e.length===1?(t=0,a=1,[s]=e):[t,s,a=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=a||1;return l}function sk(e,t){if(!t||t==="all"||t==="*")return Gi(1,e+1);const s=[];for(const a of t.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[l,r]=a.split("-",2);s.push(...Gi(+l,r?+r+1:e+1))}return nk(s).filter(a=>a<=e).sort((a,l)=>a-l)}const ak=["title"],wt=Ce({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;V(G);const s=V(Ss),a=V(Bn),l=V(Ds);function r(f=5){const m=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let b=0;b<f;b++)m.push(h.charAt(Math.floor(Math.random()*g)));return m.join("")}const o=H(),i=hn();ds(()=>{const f=t.at==null?a==null?void 0:a.value.length:t.at,m=E(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),h=E(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const g=r(),b=Gm(t.ranges.length-1).map(_=>g+_);a!=null&&a.value&&(a.value.push(...b),Qa(()=>b.forEach(_=>Wl(a.value,_)),i))}Xs(()=>{if(!o.value)return;const b=o.value.querySelector(".shiki-dark")?Array.from(o.value.querySelectorAll(".shiki")):[o.value];for(const _ of b){const C=Array.from(_.querySelectorAll(".line")),B=sk(C.length,h.value);if(C.forEach((A,O)=>{const T=B.includes(O+1);A.classList.toggle(xn,!0),A.classList.toggle("highlighted",T),A.classList.toggle("dishonored",!T)}),t.maxHeight){const A=_.querySelector(".line.highlighted");A&&A.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=tg();function p(){var m,h;const f=(h=(m=o.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,m)=>{const h=Rb,g=Mb;return x(),I("div",{ref_key:"el",ref:o,class:"slidev-code-wrapper relative group",style:et({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Tt(f.$slots,"default"),k(ke).codeCopy?(x(),I("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(c)?"Copied":"Copy",onClick:m[0]||(m[0]=b=>p())},[k(c)?(x(),Y(h,{key:0,class:"p-2 w-8 h-8"})):(x(),Y(g,{key:1,class:"p-2 w-8 h-8"}))],8,ak)):de("v-if",!0)],4)}}}),lk=n("h1",null,"Package",-1),rk={class:"grid grid-cols-2 mt-4"},ok=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"package"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    String"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," String "),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"return"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setData"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"package"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    String"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," String "),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"return"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setData"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ik={class:"ml-4"},ck={class:"text-sm mt-4"},uk=d(" Deklarasi package "),pk={class:"text-sm mt-32"},dk=d(" Isi dari class "),fk={__name:"7",setup(e){const t={clicks:2,srcSequence:"./pages/07_Package.md"};return V(G),(s,a)=>{const l=wt,r=na,o=zt("click-hide"),i=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[lk,n("div",rk,[j(l,Me({},{ranges:["all","1","4-16"]}),{default:z(()=>[ok]),_:1},16),n("div",ik,[Ve((x(),I("div",ck,[j(r,{class:"inline"}),uk])),[[o,2],[i,1]]),Ve((x(),I("div",pk,[j(r,{class:"inline"}),dk])),[[i,2]])])])]),_:1},16)}}},mk=n("h1",null,"Package (lanjutan)",-1),hk={class:"grid grid-cols-2 gap-4"},gk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"package"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    String"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," String "),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"return"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setData"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"package"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    String"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," String "),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"return"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setData"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),yk=n("p",null,"Contoh File1.java",-1),vk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"package"),n("span",{style:{color:"#DBD7CA"}}," child2"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"File1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File2"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        File1"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"test"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Tes package!"'),n("span",{style:{color:"#858585"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"test"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"package"),n("span",{style:{color:"#393A34"}}," child2"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"File1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File2"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        File1"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"test"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Tes package!"'),n("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"test"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_k=n("p",null,"Contoh File2.java",-1),bk={__name:"8",setup(e){const t={srcSequence:"./pages/08_Package part2.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(bt,be(ve(t)),{default:z(()=>[mk,n("div",hk,[n("div",null,[j(l,Me({},{ranges:[""]}),{default:z(()=>[gk]),_:1},16),yk]),n("div",null,[j(l,Me({},{ranges:[""]}),{default:z(()=>[vk]),_:1},16),_k])])]),_:1},16)}}},kk="/materi-PBO-02/img/package-dir.png",xk="/materi-PBO-02/img/tes-package-run.png",Ak=n("h1",null,"Package (lanjutan)",-1),wk=n("div",{class:"flex flex-col"},[n("div",{class:"flex flex-row"},[n("img",{src:kk,class:"rounded-md"}),n("div",{class:"mx-4 font-light"},[n("p",null,[d("Struktur folder dan file nya dapat dilihat di gambar disamping. Workspace yang sedang digunakan bernama "),n("kbd",null,"parent"),d(", memiliki folder "),n("kbd",null,"child1"),d(" dan "),n("kbd",null,"child2"),d(" dengan isi file yang ada di slide sebelumnya.")]),n("p",null,[d("Current directory harus berada di folder "),n("kbd",null,"parent"),d(" dan cara mengcompile nya dapat dilihat dibawah.")])])]),n("img",{src:xk,class:"mt-8 rounded-2xl max-w-100"})],-1),Bk={__name:"9",setup(e){const t={srcSequence:"./pages/09_Package part3.md"};return V(G),(s,a)=>(x(),Y(bt,be(ve(t)),{default:z(()=>[Ak,wk]),_:1},16))}},Ck=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 02 ",-1),Ek=n("h1",{class:"font-bold mt-12"}," Array of Object ",-1),Ok={__name:"10",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/10_Cover Array of Object.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[Ck,Ek]),_:1},16))}},Sk="/materi-PBO-02/img/tes-array-objek.png",Dk=n("h1",null,"Membuat Array dari Object",-1),Pk={class:"grid grid-cols-2 mt-4"},$k=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"File1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Test"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#CB7676"}},"File1"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"tes"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"File1"),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},"];")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"for"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"i"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," i "),n("span",{style:{color:"#CB7676"}},"<"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," i"),n("span",{style:{color:"#CB7676"}},"++"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            tes"),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#DBD7CA"}},"i"),n("span",{style:{color:"#858585"}},"]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Ini tes ke-"'),n("span",{style:{color:"#CB7676"}},"+"),n("span",{style:{color:"#DBD7CA"}},"i"),n("span",{style:{color:"#858585"}},");")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"for"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"File1"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"f"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#4D9375"}},":"),n("span",{style:{color:"#DBD7CA"}}," tes"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"f"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"File1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Test"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#AB5959"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"tes"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"for"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"i"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," i "),n("span",{style:{color:"#AB5959"}},"<"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," i"),n("span",{style:{color:"#AB5959"}},"++"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            tes"),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#393A34"}},"i"),n("span",{style:{color:"#8E8F8B"}},"]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Ini tes ke-"'),n("span",{style:{color:"#AB5959"}},"+"),n("span",{style:{color:"#393A34"}},"i"),n("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"for"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"File1"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"f"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#1C6B48"}},":"),n("span",{style:{color:"#393A34"}}," tes"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"f"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Mk={class:"ml-4"},Fk={class:"text-sm mt-24"},Tk=d(" Instansiasi array of object "),jk={class:"text-sm mt-8"},Ik=d(" Pengisian array of object melalui constructornya "),Rk={class:"text-sm mt-12"},Lk=d(" Print isi dari array of object "),Nk={class:"text-lg font-bold my-auto text-end"},qk=d("Output dari kode "),Hk={src:Sk,class:"max-w-60 mt-4 mx-auto rounded-md"},Vk={__name:"11",setup(e){const t={clicks:4,srcSequence:"./pages/11_Membuat Array of Object.md"};return V(G),(s,a)=>{const l=wt,r=na,o=ip,i=zt("click-hide"),c=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[Dk,n("div",Pk,[j(l,Me({},{ranges:["all","5","7-9","11-13","all"]}),{default:z(()=>[$k]),_:1},16),n("div",Mk,[Ve((x(),I("div",Fk,[j(r,{class:"inline"}),Tk])),[[i,2],[c,1]]),Ve((x(),I("div",jk,[j(r,{class:"inline"}),Ik])),[[i,3],[c,2]]),Ve((x(),I("div",Rk,[j(r,{class:"inline"}),Lk])),[[i,4],[c,3]])]),Ve((x(),I("div",Nk,[n("p",null,[qk,j(o,{class:"inline"})])])),[[c,4]]),Ve(n("img",Hk,null,512),[[c,4]])])]),_:1},16)}}},Kk=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 03 ",-1),Uk=n("h1",{class:"font-bold mt-12"}," Enkapsulasi ",-1),zk={__name:"12",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/12_Cover Enkapsulasi.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[Kk,Uk]),_:1},16))}},Wk=n("h1",null,"Access Modifier",-1),Jk=n("p",null,"Berdasarkan apakah class dapat diakses oleh class lain",-1),Yk=n("br",null,null,-1),Zk=n("table",null,[n("thead",null,[n("tr",null,[n("th"),n("th",null,"class yang satu package"),n("th",null,"class beda package"),n("th",null,"subclass yang satu package"),n("th",null,"subclass beda package")])]),n("tbody",null,[n("tr",null,[n("td",null,"public"),n("td",null,"\u2705"),n("td",null,"\u2705"),n("td",null,"\u2705"),n("td",null,"\u2705")]),n("tr",null,[n("td",null,"protected"),n("td",null,"\u2705"),n("td",null,"\u274C"),n("td",null,"\u2705"),n("td",null,"\u2705")]),n("tr",null,[n("td",null,"package (default)"),n("td",null,"\u2705"),n("td",null,"\u274C"),n("td",null,"\u2705"),n("td",null,"\u274C")]),n("tr",null,[n("td",null,"private"),n("td",null,"\u274C"),n("td",null,"\u274C"),n("td",null,"\u274C"),n("td",null,"\u274C")])])],-1),Gk={__name:"13",setup(e){const t={srcSequence:"./pages/13_Access Modifier.md"};return V(G),(s,a)=>(x(),Y(bt,be(ve(t)),{default:z(()=>[Wk,Jk,Yk,Zk]),_:1},16))}},Qk=n("h1",null,"Enkapsulasi",-1),Xk=n("br",null,null,-1),ex=n("p",null,"Enkapsulasi merupakan salah satu konsep fundamental PBO yaitu membungkus suatu kode dan data menjadi satu kesatuan.",-1),tx=n("p",null,[d("Enkapsulasi ini dapat disebut juga sebagai "),n("strong",null,"data hiding"),d(". Salah satu keuntungan dari enkapsulasi adalah membuat suatu class hanya dapat diakses melalui class itu sendiri.")],-1),nx=n("p",null,"Syarat enkapsulasi meliputi :",-1),sx=n("ol",null,[n("li",null,[d("Mendeklarasi variabel sebagai "),n("code",null,"private"),d(".")]),n("li",null,[d("Membuat method "),n("code",null,"public"),d(),n("code",null,"setter"),d(" dan "),n("code",null,"getter"),d(" untuk memodifikasi dan mengakses variabel tadi.")])],-1),ax={__name:"14",setup(e){const t={srcSequence:"./pages/14_Enkapsulasi.md"};return V(G),(s,a)=>(x(),Y(bt,be(ve(t)),{default:z(()=>[Qk,Xk,ex,tx,nx,sx]),_:1},16))}},lx=n("h1",null,"Enkapsulasi (lanjutan)",-1),rx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Rekening"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"private"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"float"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"money"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"float"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"retrieveMoney"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"        "),n("span",{style:{color:"#758575"}},"// for retrieving money")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setMoney"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"float"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"amount"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"        "),n("span",{style:{color:"#758575"}},"// for setting money value")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Rekening"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"private"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"float"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"money"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"float"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"retrieveMoney"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"        "),n("span",{style:{color:"#A0ADA0"}},"// for retrieving money")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setMoney"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"float"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"amount"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"        "),n("span",{style:{color:"#A0ADA0"}},"// for setting money value")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ox=n("p",null,"Apa yang terjadi jika money tidak diberi access modifier private / tidak menggunakan konsep enkapsulasi?",-1),ix=[ox],cx={__name:"15",setup(e){const t={clicks:1,srcSequence:"./pages/15_Enkapsulasi part2.md"};return V(G),(s,a)=>{const l=wt,r=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[lx,j(l,Me({},{ranges:["all","2"]}),{default:z(()=>[rx]),_:1},16),Ve((x(),I("div",null,ix)),[[r,1]])]),_:1},16)}}},ux=n("h1",null,"Enkapsulasi (contoh)",-1),px={class:"grid grid-cols-2 gap-4"},dx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"package"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"private"),n("span",{style:{color:"#DBD7CA"}}," String"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," String "),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"return"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setData"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String "),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," data"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"package"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"private"),n("span",{style:{color:"#393A34"}}," String"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," String "),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"return"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setData"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String "),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," data"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fx=n("p",null,[d("Ketika variabel "),n("code",null,"data"),d(" dijadikan "),n("code",null,"private"),d("\u2026")],-1),mx=[fx],hx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"package"),n("span",{style:{color:"#DBD7CA"}}," child2"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," child1"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"File1"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File2"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        File1"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"test"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"File1"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Tes package!"'),n("span",{style:{color:"#858585"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"test"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"data"),n("span",{style:{color:"#858585"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"test"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getData"),n("span",{style:{color:"#858585"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"package"),n("span",{style:{color:"#393A34"}}," child2"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," child1"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"File1"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File2"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        File1"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"test"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"File1"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Tes package!"'),n("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"test"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"data"),n("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"test"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getData"),n("span",{style:{color:"#8E8F8B"}},"());")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),gx=n("p",null,[d("Pemanggilan variabel "),n("code",null,"data"),d(" pada class lain akan menghasilkan "),n("span",{class:"text-red"},"error")],-1),yx=[gx],vx={__name:"16",setup(e){const t={clicks:3,srcSequence:"./pages/16_Enkapsulasi part3.md"};return V(G),(s,a)=>{const l=wt,r=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[ux,n("div",px,[n("div",null,[j(l,Me({},{ranges:["all","4"]}),{default:z(()=>[dx]),_:1},16),Ve((x(),I("span",null,mx)),[[r,1]])]),Ve((x(),I("div",null,[j(l,Me({},{ranges:["9-10","all"]}),{default:z(()=>[hx]),_:1},16),Ve((x(),I("span",null,yx)),[[r,2]])])),[[r,2]])])]),_:1},16)}}},_x=n("h1",{class:"text-center font-bold"},"Manfaat Enkapsulasi",-1),bx=n("div",{class:"flex-row my-4"},[n("span",{class:"text-orange text-xl font-extrabold mr-4"},"1. "),n("span",{class:"font-bold text-xl"},"Data hiding"),n("div",{class:"ml-8"},[d(" Program lebih "),n("em",null,"secure"),d(". "),n("br"),d("Tidak perlu tahu bagaimana cara variable dibuat atau disimpan. Begitupun dengan method. ")])],-1),kx=n("div",{class:"flex-row my-4"},[n("span",{class:"text-orange text-xl font-extrabold mr-4"},"2. "),n("span",{class:"font-bold text-xl"},"Flexibility"),n("div",{class:"ml-8"}," Bisa diatur apakah variable Read-only, atau Read-Write. Lebih maintainable. ")],-1),xx=n("div",{class:"flex-row my-4"},[n("span",{class:"text-orange text-xl font-extrabold mr-4"},"3. "),n("span",{class:"font-bold text-xl"},"Reusability"),n("div",{class:"ml-8"}," Method bisa dipanggil dimanapun berkali-kali secara efektif (dalam arti mudah dibaca dan digunakan) ")],-1),Ax={__name:"17",setup(e){const t={layout:"center",srcSequence:"./pages/17_Manfaat Enkapsulasi.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[_x,bx,kx,xx]),_:1},16))}},wx=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 04 ",-1),Bx=n("h1",{class:"font-bold mt-12"}," Overloading ",-1),Cx={__name:"18",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/18_Cover Overloading.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[wx,Bx]),_:1},16))}},Ex=n("h1",null,"Overloading (constructor)",-1),Ox=n("p",null,[d("Overloading sebuah constructor berarti membuat banyak "),n("br"),d("konstruktor yang memiliki parameter yang berbeda-beda")],-1),Sx={class:"grid grid-cols-2 mt-4"},Dx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," Manusia "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"private"),n("span",{style:{color:"#DBD7CA"}}," String"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"nama"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"private"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"umur"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Manusia"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        nama "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"null"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        umur "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Manusia"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String nama"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"nama"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," nama"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"umur"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"     "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Manusia"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," String nama"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"umur"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"nama"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," nama"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," Manusia "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"private"),n("span",{style:{color:"#393A34"}}," String"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"nama"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"private"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"umur"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Manusia"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        nama "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"null"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        umur "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Manusia"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String nama"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"nama"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," nama"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"umur"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"     "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Manusia"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," String nama"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"umur"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"nama"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," nama"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Px={class:"ml-4"},$x={class:"text-sm mt-28"},Mx=d(" Constructor default (tanpa parameter) "),Fx={class:"text-sm mt-16"},Tx=d(" Constructor dengan paramater "),jx=n("kbd",null,"String",-1),Ix=d(","),Rx=n("kbd",null,"int",-1),Lx={class:"text-sm mt-16"},Nx=d(" Constructor dengan paramater "),qx=n("kbd",null,"int",-1),Hx=d(","),Vx=n("kbd",null,"String",-1),Kx={__name:"19",setup(e){const t={clicks:3,srcSequence:"./pages/19_Overloading Constructor.md"};return V(G),(s,a)=>{const l=wt,r=na,o=zt("click-hide"),i=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[Ex,Ox,n("div",Sx,[j(l,Me({},{ranges:["all","5-8","10-13","15-18"]}),{default:z(()=>[Dx]),_:1},16),n("div",Px,[Ve((x(),I("div",$x,[j(r,{class:"inline"}),Mx])),[[o,2],[i,1]]),Ve((x(),I("div",Fx,[j(r,{class:"inline"}),Tx,jx,Ix,Rx])),[[o,3],[i,2]]),Ve((x(),I("div",Lx,[j(r,{class:"inline"}),Nx,qx,Hx,Vx])),[[i,3]])])])]),_:1},16)}}},Ux=n("h1",null,"Overloading (method)",-1),zx=n("br",null,null,-1),Wx=d(" Overloading method sama halnya dengan overloading constructor karena constructor merupakan (special) method. "),Jx={class:"grid grid-cols-2 mt-4"},Yx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setUmur"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"umur"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," umur"),n("span",{style:{color:"#858585"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"setUmur"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"String umur"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#D4976C"}},"this"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"umur"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"Integer"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"parseInt"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"umur"),n("span",{style:{color:"#858585"}},");")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setUmur"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"umur"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," umur"),n("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),n("span",{class:"line"}),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"setUmur"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"String umur"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A65E2B"}},"this"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"umur"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"Integer"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"parseInt"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"umur"),n("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Zx={class:"ml-4"},Gx={class:"text-sm mt-12"},Qx=d(" Method setter dengan parameter "),Xx=n("kbd",null,"int",-1),e8={class:"text-sm mt-12"},t8=d(" Method setter dengan parameter "),n8=n("kbd",null,"String",-1),s8={__name:"20",setup(e){const t={clicks:2,srcSequence:"./pages/20_Overloading Method.md"};return V(G),(s,a)=>{const l=wt,r=na,o=zt("click-hide"),i=zt("click");return x(),Y(bt,be(ve(t)),{default:z(()=>[Ux,zx,Wx,n("div",Jx,[j(l,Me({},{ranges:["all","2-5","6-8"]}),{default:z(()=>[Yx]),_:1},16),n("div",Zx,[Ve((x(),I("div",Gx,[j(r,{class:"inline"}),Qx,Xx])),[[o,2],[i,1]]),Ve((x(),I("div",e8,[j(r,{class:"inline"}),t8,n8])),[[i,2]])])])]),_:1},16)}}},a8=n("h1",null,"Exercise!",-1),l8=n("p",null,"Mari kita berlatih langsung agar cepat bisa",-1),r8={__name:"21",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/21_Cover Exercise.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[a8,l8]),_:1},16))}},o8=n("h1",null,[d("Exercise "),n("kbd",null,[n("span",{class:"text-teal"},"Main.java")])],-1),i8=n("br",null,null,-1),c8={class:"grid grid-cols-2 gap-x-3"},u8=n("div",null,[n("p",null,"Buat sebuah program untuk mencetak selisih terdekat dari tiga angka. Sebuah angka diinstansiasi pada sebuah objek."),n("p",null,[d("Angka pertama dalam argumen method akan selalu menunjuk angka terkecil. Angka kedua dalam argumen method akan selalu menunjuk angka terbesar, namun bisa tidak dituliskan. Jika tidak dituliskan, angka terbesar akan selalu bernilai "),n("code",null,"100"),d(".")]),n("p",null,"Kembalikan selisih terkecil dari angka tengah dengan angka terkecil dan/ atau angka terbesar.")],-1),p8={class:"grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm"},d8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input",-1),f8=n("div",{class:"flex flex-col"},[n("ul",null,[n("li",null,"a : int (angka tengah)"),n("li",null,"lo : int (angka terkecil)"),n("li",null,[d("hi : int (optional - angka terbesar, default "),n("code",null,"100"),d(")")])])],-1),m8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output",-1),h8=n("div",{class:"flex flex-col"},[n("p",null,"int (selisih terkecil antara angka tengah dengan angka terkecil atau angka terbesar)")],-1),g8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Contoh",-1),y8={class:"mt-2 flex flex-col mb-2"},v8=d(" Sampel Input & Output 1 "),_8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"26")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"15")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"26")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"15")])])])],-1),b8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"11")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"11")])])])],-1),k8=d(" Sampel Input & Output 2 "),x8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"62")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"31 88")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"62")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"31 88")])])])],-1),A8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"26")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"26")])])])],-1),w8={__name:"22",setup(e){const t={layout:"center",srcSequence:"./pages/22_Exercise1.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(Je,be(ve(t)),{default:z(()=>[o8,i8,n("div",c8,[u8,n("div",p8,[d8,f8,m8,h8,g8,n("div",y8,[v8,j(l,Me({},{ranges:[""]}),{default:z(()=>[_8]),_:1},16),j(l,Me({},{ranges:[""]}),{default:z(()=>[b8]),_:1},16),k8,j(l,Me({},{ranges:[""]}),{default:z(()=>[x8]),_:1},16),j(l,Me({},{ranges:[""]}),{default:z(()=>[A8]),_:1},16)])])])]),_:1},16)}}},B8=n("h1",null,"Snippets \u{1F9D1}\u200D\u{1F4BB}",-1),C8=n("div",null,[d(" Berhubung di mata kuliah PBO ini diminta untuk menguasai implementasi PBO di bahasa Java, C++ dan Python, maka kita sediakan repository snippets untuk ketiga bahasa tersebut dari setiap pertemuan praktikum. "),n("div",{class:"text-center mt-16"},[d(" Repository tersebut bisa diakses melalui tautan berikut : "),n("p",null,[n("span",{class:"text-2xl"},[n("a",{href:"https://github.com/praktikum-tiunpad-angkatan-2022/snippets-PBO-02",target:"_blank",rel:"noopener"},"snippets-PBO-02")])])]),n("p",null,"Silahkan untuk kalian mencoba menjalankan dan mempelajari snippets yang disediakan pada repository tersebut. Selamat belajar!")],-1),E8={__name:"23",setup(e){const t={srcSequence:"./pages/23_Snippets.md"};return V(G),(s,a)=>(x(),Y(bt,be(ve(t)),{default:z(()=>[B8,C8]),_:1},16))}},O8=n("h1",null,"Assignment!",-1),S8=n("p",null,"Seperti biasa akan setiap selesai praktikum pasti ada tugas",-1),D8={__name:"24",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/23_Cover Assignment.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[O8,S8]),_:1},16))}},P8=n("h1",null,[d("Assignment 2 Soal 1 "),n("kbd",null,[d("soal1/"),n("span",{class:"text-teal"},"Test.java")])],-1),$8=n("br",null,null,-1),M8={class:"grid grid-cols-2 gap-x-3"},F8=n("div",null,[n("p",null,[d("Buat sebuah program "),n("strong",null,"kalkulator sederhana"),d(" yang menggunakan 2 package. Package pertama bernama \u201Cio\u201D, package kedua bernama \u201Cutil\u201D.")]),n("p",null,[d("Dalam package \u201Cio\u201D buat sebuah class yang memiliki method-method untuk "),n("strong",null,"input dan output"),d(".")]),n("p",null,[d("Dalam package \u201Cutil\u201D buat sebuah class yang memiliki method-method untuk "),n("strong",null,"operasi aritmatika"),d(" (tambah, kurang, kali, bagi) bilangan bulat.")])],-1),T8={class:"mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm"},j8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input",-1),I8=n("div",{class:"flex flex-col mb-2"},[n("span",null,[n("span",{class:"italic"},"num1"),d(" : int (operan pertama)")]),n("span",null,[n("span",{class:"italic"},"num2"),d(" : int (operan kedua)")]),n("span",null,[n("span",{class:"italic"},"op"),d(" : char (operator \u201C+\u201D,\u201D -\u201D, \u201C*\u201D, atau \u201C/\u201D)")])],-1),R8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output",-1),L8=n("span",null,"Hasil perhitungan antara num1 dan num2 menggunakan op",-1),N8=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Contoh",-1),q8={class:"mt-4 flex flex-col mb-2"},H8=d(" Sampel Input "),V8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"8")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"4")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"/")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"8")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"4")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"/")])])])],-1),K8=d(" Sampel Output "),U8=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2")])])])],-1),z8={__name:"25",setup(e){const t={layout:"center",srcSequence:"./pages/24_Assignment1.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(Je,be(ve(t)),{default:z(()=>[P8,$8,n("div",M8,[F8,n("div",T8,[j8,I8,R8,L8,N8,n("div",q8,[H8,j(l,Me({},{ranges:[""]}),{default:z(()=>[V8]),_:1},16),K8,j(l,Me({},{ranges:[""]}),{default:z(()=>[U8]),_:1},16)])])])]),_:1},16)}}},W8=n("h1",null,[d("Assignment 2 Soal 2 "),n("kbd",null,[d("soal2/"),n("span",{class:"text-teal"},"Test.java")])],-1),J8=n("br",null,null,-1),Y8=n("p",null,[d("Menggunakan class Manusia dari praktikum sebelumnya, buatlah array objek Manusia berukuran "),n("strong",null,"5"),d(" dengan properti-properti yang diberikan oleh user input. Kemudian output-kan nama dan umur setiap objek tersebut ke console.")],-1),Z8=n("div",{class:"mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm"},[n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input"),n("div",{class:"flex flex-col mb-2"},[d(" Untuk setiap manusia, ada input sebagai berikut secara konsekutif "),n("ul",null,[n("li",null,[n("span",null,[n("span",{class:"italic"},"nama"),d(" : string")])]),n("li",null,[n("span",null,[n("span",{class:"italic"},"umur"),d(" : int")])])])]),n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output"),n("div",{class:"flex flex-col mb-2"},[n("span",null,"Untuk setiap manusia, ada output sebagai berikut secara konsekutif"),n("ul",null,[n("li",null,[n("span",null,[n("span",{class:"italic"},"\u201COrang ke i\u201D"),d(", dimana i adalah index")])]),n("li",null,[n("span",null,[n("span",{class:"italic"},"\u201CNama: nama\u201C"),d(", dimana nama adalah nama Manusia ke i")])]),n("li",null,[n("span",null,[n("span",{class:"italic"},"\u201CUmur: umur\u201C"),d(", dimana umur adalah umur Manusia ke i")])])])])],-1),G8={__name:"26",setup(e){const t={layout:"center",srcSequence:"./pages/25_Assignment2.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[W8,J8,Y8,Z8]),_:1},16))}},Q8=n("h1",null,[d("Assignment 2 Soal 3 "),n("kbd",null,[d("soal3/"),n("span",{class:"text-teal"},"Test.java")])],-1),X8=n("br",null,null,-1),e2={class:"grid grid-cols-2 gap-x-3"},t2=n("div",null,[n("p",null,"Buat class \u201CRekening\u201D yang mempunyai default balance = 0 dan 2 (dua) public method (selain constructor)"),n("ul",null,[n("li",null,[d("getBalance() : "),n("em",null,"float")]),n("li",null,[d("addBalance() : "),n("em",null,"void")])]),n("p",null,"Class lain tidak boleh mengakses member yang lain kecuali constructor dan 2 method diatas."),n("p",null,[d("Program berjalan dan menerima input terus menerus ("),n("em",null,"looping"),d(") sampai user keluar dari program.")])],-1),n2={class:"mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm"},s2=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input",-1),a2=n("div",{class:"flex flex-col mb-2"},[n("span",null,[n("span",{class:"italic"},"op"),d(" : int (1 = get, 2 = add, 0 = exit)")]),n("span",null,[n("span",{class:"italic"},"addValue"),d(" : int (hanya jika op = 2)")])],-1),l2=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output",-1),r2=n("div",{class:"flex flex-col mb-2"},[n("span",null,"Jika op = 1 ATAU op = 2 -> Jumlah balance saat ini."),n("span",null,"Jika op = 0 -> Keluar dari program.")],-1),o2=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Contoh",-1),i2={class:"mt-4 flex flex-col mb-2"},c2=d(" Sampel Input "),u2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2500")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2500")])])])],-1),p2=d(" Sampel Output "),d2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2500")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2500")])])])],-1),f2={__name:"27",setup(e){const t={layout:"center",srcSequence:"./pages/26_Assignment3.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(Je,be(ve(t)),{default:z(()=>[Q8,X8,n("div",e2,[t2,n("div",n2,[s2,a2,l2,r2,o2,n("div",i2,[c2,j(l,Me({},{ranges:[""]}),{default:z(()=>[u2]),_:1},16),p2,j(l,Me({},{ranges:[""]}),{default:z(()=>[d2]),_:1},16)])])])]),_:1},16)}}},m2=n("h1",null,[d("Assignment 2 Soal 4 "),n("kbd",null,[d("soal4/"),n("span",{class:"text-teal"},"Test.java")])],-1),h2=n("br",null,null,-1),g2=n("p",null,"Buat 2 buah method untuk menambahkan 2 buah bilangan. Gunakan overloading untuk tipe data Integer dan Float.",-1),y2={class:"grid grid-cols-[0.5fr_0.8fr]"},v2=n("div",{class:"grid grid-cols-[0.2fr_1.5fr] gap-x-5 items-center text-sm"},[n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input"),n("div",{class:"flex flex-col mb-2"},[n("span",null,[n("span",{class:"italic"},"num1"),d(" : int")]),n("span",null,[n("span",{class:"italic"},"num2"),d(" : int")]),n("span",null,[n("span",{class:"italic"},"num3"),d(" : float")]),n("span",null,[n("span",{class:"italic"},"num4"),d(" : float")])]),n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output"),n("div",{class:"flex flex-col mb-2"},[n("span",null,[n("span",{class:"italic"},"result1"),d(" : int")]),n("span",null,[n("span",{class:"italic"},"result2"),d(" : float")])])],-1),_2={class:"grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm"},b2=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Contoh",-1),k2={class:"mt-4 flex flex-col mb-2"},x2=n("p",null,"Sampel Input",-1),A2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"1")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"2.5")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"1.5")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"1")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"2.5")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"1.5")])])])],-1),w2=n("p",null,"Sampel Output",-1),B2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"3")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"4.0")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"3")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"4.0")])])])],-1),C2={__name:"28",setup(e){const t={layout:"center",srcSequence:"./pages/27_Assignment4.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(Je,be(ve(t)),{default:z(()=>[m2,h2,g2,n("div",y2,[v2,n("div",_2,[b2,n("div",k2,[x2,j(l,Me({},{ranges:[""]}),{default:z(()=>[A2]),_:1},16),w2,j(l,Me({},{ranges:[""]}),{default:z(()=>[B2]),_:1},16)])])])]),_:1},16)}}},E2=n("h1",null,"Teknis Pengumpulan",-1),O2=n("p",null,[d("Pengerjaan dan pengumpulan tugas akan dilakukan di "),n("strong",null,"Github Classroom")],-1),S2=n("div",{grid:"~ cols-2 gap-2",style:{"margin-top":"48px"}},[n("div",null,[n("h4",null,"Kelas A:"),n("p",null,[n("a",{href:"https://classroom.github.com/a/6zU6Q0B2",target:"_blank",rel:"noopener"},"Link Tugas Kelas A")])]),n("div",null,[n("h4",null,"Kelas B:"),n("p",null,[n("a",{href:"https://classroom.github.com/a/qKNOkdk0",target:"_blank",rel:"noopener"},"Link Tugas Kelas B")])])],-1),D2=n("br",null,null,-1),P2=d(" Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom "),$2={__name:"29",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/28_Teknis Pengumpulan 1.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[E2,O2,S2,D2,P2]),_:1},16))}},M2=n("h1",null,"Teknis Pengumpulan",-1),F2=n("div",null,[n("p",null,[d("Format setiap file "),n("code",null,".java"),d(" didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi")])],-1),T2=n("p",null,"Cara menambah comment di java",-1),j2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"// untuk single line")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"/* untuk multiple line */")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"// untuk single line")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"/* untuk multiple line */")])])])],-1),I2=n("p",null,"Contoh Format",-1),R2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"/*")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Nama	: Jane Doe")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  NPM		: 99")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Kelas		: A")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Tanggal	: 1 September 2021")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Deskripsi	: Class jawaban exercise-01 soal-01")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"*/")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"/*")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Nama	: Jane Doe")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  NPM		: 99")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Kelas		: A")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Tanggal	: 1 September 2021")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Deskripsi	: Class jawaban exercise-01 soal-01")]),d(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"*/")])])])],-1),L2={__name:"30",setup(e){const t={srcSequence:"./pages/29_Teknis Pengumpulan 2.md"};return V(G),(s,a)=>{const l=wt;return x(),Y(bt,be(ve(t)),{default:z(()=>[M2,F2,T2,j(l,Me({},{ranges:["all"]}),{default:z(()=>[j2]),_:1},16),I2,j(l,Me({},{ranges:["all"]}),{default:z(()=>[R2]),_:1},16)]),_:1},16)}}},N2=n("h1",null,"Deadline Pengumpulan \u231A",-1),q2=n("div",{grid:"~ cols-2 gap-32",style:{"margin-top":"48px"}},[n("div",null,[n("h4",null,"Kelas A:"),n("p",null,"17 September 2023, 23:59 WIB")]),n("div",null,[n("h4",null,"Kelas B:"),n("p",null,"19 September 2023, 23:59 WIB")])],-1),H2=n("br",null,null,-1),V2=n("p",null,[n("strong",null,"Waktu yang dilihat adalah waktu last commit."),n("br"),d(" Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat")],-1),K2={__name:"31",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/30_Deadline.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[N2,q2,H2,V2]),_:1},16))}},U2=n("h1",null,"Terima Kasih!",-1),z2=n("p",null,"Do you have any questions? Please use respective class discussion channel on Discord.",-1),W2=n("p",null,"Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}",-1),J2={__name:"32",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/31_Terima Kasih.md"};return V(G),(s,a)=>(x(),Y(Je,be(ve(t)),{default:z(()=>[U2,z2,W2]),_:1},16))}},Y2=[{path:"1",name:"page-1",component:ob,meta:{theme:"default",highlighter:"shiki",title:"Materi 02 - PBO",titleTemplate:"%s",info:`# Materi 02 - PBO
Java Package dan Enkapsulasi

> Asisten Praktikum Pemrograman Berbasis Objek 2022
> Teknik Informatika Universitas Padjadjaran
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-02",css:"unocss",fonts:{sans:"Overpass",mono:"Overpass Mono"},slide:{raw:`---
theme: default
highlighter: shiki
#> Slide info
title: Materi 02 - PBO
titleTemplate: '%s'
info: |
  # Materi 02 - PBO
  Java Package dan Enkapsulasi

  > Asisten Praktikum Pemrograman Berbasis Objek 2022
  > Teknik Informatika Universitas Padjadjaran

#> Slide settings
lineNumbers: false
drawings:
  persist: false
download: true
exportFilename: 'materi-pbo-02'
css: unocss
fonts:
  sans: 'Overpass'
  mono: 'Overpass Mono'
---

# Praktikum<br>Pemrograman<br>Berbasis Objek

**Pertemuan 2**
`,title:"Materi 02 - PBO",level:1,content:`# Praktikum<br>Pemrograman<br>Berbasis Objek

**Pertemuan 2**`,frontmatter:{theme:"default",highlighter:"shiki",title:"Materi 02 - PBO",titleTemplate:"%s",info:`# Materi 02 - PBO
Java Package dan Enkapsulasi

> Asisten Praktikum Pemrograman Berbasis Objek 2022
> Teknik Informatika Universitas Padjadjaran
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-02",css:"unocss",fonts:{sans:"Overpass",mono:"Overpass Mono"}},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:fb,meta:{layout:"intro",title:"Review Time \u{1F552}",srcSequence:"./pages/02_Review.md",slide:{raw:null,title:"Review Time \u{1F552}",level:1,content:`# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Struktur Kode Java <br>
<span class='text-orange'>2.</span> Membuat Objek <br>
<span class='text-orange'>3.</span> Input dan Output <br>
<span class='text-orange'>4.</span> Statements dalam Java <br>
<span class='text-orange'>5.</span> Compile dan Run File Java <br>
<span class='text-orange'>6.</span> Built-in Methods dalam Class Java <br>
<span class='text-orange'>7.</span> Seputar assignment atau lainnya
</div>`,frontmatter:{layout:"intro",title:"Review Time \u{1F552}",srcSequence:"./pages/02_Review.md"},index:1,start:0,end:16,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/02_Review.md",raw:`---
layout: intro
---

# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Struktur Kode Java <br>
<span class='text-orange'>2.</span> Membuat Objek <br>
<span class='text-orange'>3.</span> Input dan Output <br>
<span class='text-orange'>4.</span> Statements dalam Java <br>
<span class='text-orange'>5.</span> Compile dan Run File Java <br>
<span class='text-orange'>6.</span> Built-in Methods dalam Class Java <br>
<span class='text-orange'>7.</span> Seputar assignment atau lainnya
</div>
`,title:"Review Time \u{1F552}",level:1,content:`# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Struktur Kode Java <br>
<span class='text-orange'>2.</span> Membuat Objek <br>
<span class='text-orange'>3.</span> Input dan Output <br>
<span class='text-orange'>4.</span> Statements dalam Java <br>
<span class='text-orange'>5.</span> Compile dan Run File Java <br>
<span class='text-orange'>6.</span> Built-in Methods dalam Class Java <br>
<span class='text-orange'>7.</span> Seputar assignment atau lainnya
</div>`,frontmatter:{layout:"intro",title:"Review Time \u{1F552}"},index:0,start:0,end:16},inline:{raw:`---
src: ./pages/02_Review.md
---`,content:"",frontmatter:{},index:1,start:29,end:32},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/02_Review.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:vb,meta:{layout:"center",class:"text-center",title:"Materi Pertemuan 2",srcSequence:"./pages/03_Cover Materi Pertemuan.md",slide:{raw:null,title:"Materi Pertemuan 2",level:1,content:`# Materi Pertemuan 2

Gambaran Materi Pembelajaran Hari Ini`,frontmatter:{layout:"center",class:"text-center",title:"Materi Pertemuan 2",srcSequence:"./pages/03_Cover Materi Pertemuan.md"},index:2,start:0,end:9,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/03_Cover Materi Pertemuan.md",raw:`---
layout: center
class: text-center
---

# Materi Pertemuan 2

Gambaran Materi Pembelajaran Hari Ini
`,title:"Materi Pertemuan 2",level:1,content:`# Materi Pertemuan 2

Gambaran Materi Pembelajaran Hari Ini`,frontmatter:{layout:"center",class:"text-center",title:"Materi Pertemuan 2"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/03_Cover Materi Pertemuan.md
---`,content:"",frontmatter:{},index:2,start:32,end:35},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/03_Cover Materi Pertemuan.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:xb,meta:{title:"Materi Pertemuan 2",srcSequence:"./pages/04_Materi Pertemuan 02.md",slide:{raw:null,title:"Materi Pertemuan 2",level:1,content:`# Materi Pertemuan 2

<div class="grid grid-cols-2 gap-y-8 gap-x-4 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Program Modular Java</div>
<div class='font-light text-sm'>Membuat program modular dengan file java lebih dari satu</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Array of Object</div>
<div class='font-light text-sm'>Penggunaan array of object dalam java</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Enkapsulasi</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan enkapsulasi</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Overloading</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan overloading</div>
</div>
</div>`,frontmatter:{title:"Materi Pertemuan 2",srcSequence:"./pages/04_Materi Pertemuan 02.md"},index:3,start:0,end:25,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/04_Materi Pertemuan 02.md",raw:`# Materi Pertemuan 2

<div class="grid grid-cols-2 gap-y-8 gap-x-4 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Program Modular Java</div>
<div class='font-light text-sm'>Membuat program modular dengan file java lebih dari satu</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Array of Object</div>
<div class='font-light text-sm'>Penggunaan array of object dalam java</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Enkapsulasi</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan enkapsulasi</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Overloading</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan overloading</div>
</div>
</div>
`,title:"Materi Pertemuan 2",level:1,content:`# Materi Pertemuan 2

<div class="grid grid-cols-2 gap-y-8 gap-x-4 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Program Modular Java</div>
<div class='font-light text-sm'>Membuat program modular dengan file java lebih dari satu</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Array of Object</div>
<div class='font-light text-sm'>Penggunaan array of object dalam java</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Enkapsulasi</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan enkapsulasi</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Overloading</div>
<div class='font-light text-sm'>Mengenal konsep dan penggunaan overloading</div>
</div>
</div>`,frontmatter:{title:"Materi Pertemuan 2"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/04_Materi Pertemuan 02.md
---`,content:"",frontmatter:{},index:3,start:35,end:38},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/04_Materi Pertemuan 02.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Bb,meta:{layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Program Modular.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Program Modular Java
</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Program Modular.md"},index:4,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/05_Cover Program Modular.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Program Modular Java
</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Program Modular Java
</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/05_Cover Program Modular.md
---`,content:"",frontmatter:{},index:4,start:38,end:41},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/05_Cover Program Modular.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ob,meta:{layout:"center",title:"Modularitas Java",srcSequence:"./pages/06_Modularitas Java.md",slide:{raw:null,title:"Modularitas Java",level:1,content:`# Modularitas Java

<div class='text-base text-justify mt-4'>

Dalam bahasa pemrograman berorientasi objek apapun termasuk Java dan C#, konsep modularitas menjadi sebuah standar untuk membuat setiap modul bersifat individual. Hal ini mengizinkan komunikasi antar modul yang lebih mudah.

Library yang sering kita sertakan ketika membuat suatu program juga dapat disebut sebagai module. Maka dari itu, modularitas ini sangat berguna terutama untuk bahasa pemrograman berorientasi objek.

Di Java sendiri, terdapat sebuah keyword bernama <kbd>package</kbd> yang berfungsi untuk mengorganisir sekumpulan \`class\` dan \`interface\` dalam suatu direktori tertentu.

</div>`,frontmatter:{layout:"center",title:"Modularitas Java",srcSequence:"./pages/06_Modularitas Java.md"},index:5,start:0,end:16,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/06_Modularitas Java.md",raw:`---
layout: center
---

# Modularitas Java

<div class='text-base text-justify mt-4'>

Dalam bahasa pemrograman berorientasi objek apapun termasuk Java dan C#, konsep modularitas menjadi sebuah standar untuk membuat setiap modul bersifat individual. Hal ini mengizinkan komunikasi antar modul yang lebih mudah.

Library yang sering kita sertakan ketika membuat suatu program juga dapat disebut sebagai module. Maka dari itu, modularitas ini sangat berguna terutama untuk bahasa pemrograman berorientasi objek.

Di Java sendiri, terdapat sebuah keyword bernama <kbd>package</kbd> yang berfungsi untuk mengorganisir sekumpulan \`class\` dan \`interface\` dalam suatu direktori tertentu.

</div>
`,title:"Modularitas Java",level:1,content:`# Modularitas Java

<div class='text-base text-justify mt-4'>

Dalam bahasa pemrograman berorientasi objek apapun termasuk Java dan C#, konsep modularitas menjadi sebuah standar untuk membuat setiap modul bersifat individual. Hal ini mengizinkan komunikasi antar modul yang lebih mudah.

Library yang sering kita sertakan ketika membuat suatu program juga dapat disebut sebagai module. Maka dari itu, modularitas ini sangat berguna terutama untuk bahasa pemrograman berorientasi objek.

Di Java sendiri, terdapat sebuah keyword bernama <kbd>package</kbd> yang berfungsi untuk mengorganisir sekumpulan \`class\` dan \`interface\` dalam suatu direktori tertentu.

</div>`,frontmatter:{layout:"center",title:"Modularitas Java"},index:0,start:0,end:16},inline:{raw:`---
src: ./pages/06_Modularitas Java.md
---`,content:"",frontmatter:{},index:5,start:41,end:44},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/06_Modularitas Java.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:fk,meta:{clicks:2,title:"Package",srcSequence:"./pages/07_Package.md",slide:{raw:null,title:"Package",level:1,content:`# Package

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|1|4-16}
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-4'>
<carbon-arrow-left class='inline'/> Deklarasi package
</div>
<div v-click="2" class='text-sm mt-32'>
<carbon-arrow-left class='inline'/> Isi dari class
</div>
</div>
</div>`,frontmatter:{clicks:2,title:"Package",srcSequence:"./pages/07_Package.md"},index:6,start:0,end:38,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/07_Package.md",raw:`---
clicks: 2
---

# Package

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|1|4-16}
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-4'>
<carbon-arrow-left class='inline'/> Deklarasi package
</div>
<div v-click="2" class='text-sm mt-32'>
<carbon-arrow-left class='inline'/> Isi dari class
</div>
</div>
</div>
`,title:"Package",level:1,content:`# Package

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|1|4-16}
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-4'>
<carbon-arrow-left class='inline'/> Deklarasi package
</div>
<div v-click="2" class='text-sm mt-32'>
<carbon-arrow-left class='inline'/> Isi dari class
</div>
</div>
</div>`,frontmatter:{clicks:2,title:"Package"},index:0,start:0,end:38},inline:{raw:`---
src: ./pages/07_Package.md
---`,content:"",frontmatter:{},index:6,start:44,end:47},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/07_Package.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:bk,meta:{title:"Package (lanjutan)",srcSequence:"./pages/08_Package part2.md",slide:{raw:null,title:"Package (lanjutan)",level:1,content:`# Package (lanjutan)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

Contoh File1.java

</div>

<div>

\`\`\`java
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.getData());
    }
}
\`\`\`

Contoh File2.java

</div>
</div>`,frontmatter:{title:"Package (lanjutan)",srcSequence:"./pages/08_Package part2.md"},index:7,start:0,end:51,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/08_Package part2.md",raw:`# Package (lanjutan)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

Contoh File1.java

</div>

<div>

\`\`\`java
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.getData());
    }
}
\`\`\`

Contoh File2.java

</div>
</div>
`,title:"Package (lanjutan)",level:1,content:`# Package (lanjutan)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

Contoh File1.java

</div>

<div>

\`\`\`java
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.getData());
    }
}
\`\`\`

Contoh File2.java

</div>
</div>`,frontmatter:{title:"Package (lanjutan)"},index:0,start:0,end:51},inline:{raw:`---
src: ./pages/08_Package part2.md
---`,content:"",frontmatter:{},index:7,start:47,end:50},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/08_Package part2.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Bk,meta:{title:"Package (lanjutan)",srcSequence:"./pages/09_Package part3.md",slide:{raw:null,title:"Package (lanjutan)",level:1,content:`# Package (lanjutan)

<div class='flex flex-col'>
<div class='flex flex-row'>
<img src='/img/package-dir.png' class='rounded-md'>
<div class='mx-4 font-light'>

Struktur folder dan file nya dapat dilihat di gambar disamping.
Workspace yang sedang digunakan bernama <kbd>parent</kbd>, memiliki folder <kbd>child1</kbd> dan <kbd>child2</kbd> dengan isi file yang ada di slide sebelumnya.

Current directory harus berada di folder <kbd>parent</kbd> dan cara mengcompile nya dapat dilihat dibawah.

</div>
</div>
<img src='/img/tes-package-run.png' class='mt-8 rounded-2xl max-w-100'>
</div>`,frontmatter:{title:"Package (lanjutan)",srcSequence:"./pages/09_Package part3.md"},index:8,start:0,end:17,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/09_Package part3.md",raw:`# Package (lanjutan)

<div class='flex flex-col'>
<div class='flex flex-row'>
<img src='/img/package-dir.png' class='rounded-md'>
<div class='mx-4 font-light'>

Struktur folder dan file nya dapat dilihat di gambar disamping.
Workspace yang sedang digunakan bernama <kbd>parent</kbd>, memiliki folder <kbd>child1</kbd> dan <kbd>child2</kbd> dengan isi file yang ada di slide sebelumnya.

Current directory harus berada di folder <kbd>parent</kbd> dan cara mengcompile nya dapat dilihat dibawah.

</div>
</div>
<img src='/img/tes-package-run.png' class='mt-8 rounded-2xl max-w-100'>
</div>
`,title:"Package (lanjutan)",level:1,content:`# Package (lanjutan)

<div class='flex flex-col'>
<div class='flex flex-row'>
<img src='/img/package-dir.png' class='rounded-md'>
<div class='mx-4 font-light'>

Struktur folder dan file nya dapat dilihat di gambar disamping.
Workspace yang sedang digunakan bernama <kbd>parent</kbd>, memiliki folder <kbd>child1</kbd> dan <kbd>child2</kbd> dengan isi file yang ada di slide sebelumnya.

Current directory harus berada di folder <kbd>parent</kbd> dan cara mengcompile nya dapat dilihat dibawah.

</div>
</div>
<img src='/img/tes-package-run.png' class='mt-8 rounded-2xl max-w-100'>
</div>`,frontmatter:{title:"Package (lanjutan)"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/09_Package part3.md
---`,content:"",frontmatter:{},index:8,start:50,end:53},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/09_Package part3.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ok,meta:{layout:"center",class:"text-center",srcSequence:"./pages/10_Cover Array of Object.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>
Array of Object
</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/10_Cover Array of Object.md"},index:9,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/10_Cover Array of Object.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>
Array of Object
</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>
Array of Object
</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/10_Cover Array of Object.md
---`,content:"",frontmatter:{},index:9,start:53,end:56},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/10_Cover Array of Object.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Vk,meta:{clicks:4,title:"Membuat Array dari Object",srcSequence:"./pages/11_Membuat Array of Object.md",slide:{raw:null,title:"Membuat Array dari Object",level:1,content:`# Membuat Array dari Object

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5|7-9|11-13|all}
import child1.File1;

public class Test {
    public static void main(String[] args) {
        File1[] tes = new File1[5];

        for (int i = 0; i < 5; i++) {
            tes[i] = new File1("Ini tes ke-"+i);
        }

        for (File1 f : tes) {
            System.out.println(f.getData());
        }
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-24'>

<carbon-arrow-left class='inline'/> Instansiasi array of object

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-8'>

<carbon-arrow-left class='inline'/> Pengisian array of object melalui constructornya

</div>

<div v-click-hide="4" v-click="3"  class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Print isi dari array of object

</div>
</div>

<div v-click="4" class='text-lg font-bold my-auto text-end'>

Output dari kode <carbon-arrow-right class='inline'/>

</div>

<img v-click="4" src='/img/tes-array-objek.png' class='max-w-60 mt-4 mx-auto rounded-md'>
</div>`,frontmatter:{clicks:4,title:"Membuat Array dari Object",srcSequence:"./pages/11_Membuat Array of Object.md"},index:10,start:0,end:54,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/11_Membuat Array of Object.md",raw:`---
clicks: 4
---

# Membuat Array dari Object

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5|7-9|11-13|all}
import child1.File1;

public class Test {
    public static void main(String[] args) {
        File1[] tes = new File1[5];

        for (int i = 0; i < 5; i++) {
            tes[i] = new File1("Ini tes ke-"+i);
        }

        for (File1 f : tes) {
            System.out.println(f.getData());
        }
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-24'>

<carbon-arrow-left class='inline'/> Instansiasi array of object

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-8'>

<carbon-arrow-left class='inline'/> Pengisian array of object melalui constructornya

</div>

<div v-click-hide="4" v-click="3"  class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Print isi dari array of object

</div>
</div>

<div v-click="4" class='text-lg font-bold my-auto text-end'>

Output dari kode <carbon-arrow-right class='inline'/>

</div>

<img v-click="4" src='/img/tes-array-objek.png' class='max-w-60 mt-4 mx-auto rounded-md'>
</div>
`,title:"Membuat Array dari Object",level:1,content:`# Membuat Array dari Object

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5|7-9|11-13|all}
import child1.File1;

public class Test {
    public static void main(String[] args) {
        File1[] tes = new File1[5];

        for (int i = 0; i < 5; i++) {
            tes[i] = new File1("Ini tes ke-"+i);
        }

        for (File1 f : tes) {
            System.out.println(f.getData());
        }
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-24'>

<carbon-arrow-left class='inline'/> Instansiasi array of object

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-8'>

<carbon-arrow-left class='inline'/> Pengisian array of object melalui constructornya

</div>

<div v-click-hide="4" v-click="3"  class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Print isi dari array of object

</div>
</div>

<div v-click="4" class='text-lg font-bold my-auto text-end'>

Output dari kode <carbon-arrow-right class='inline'/>

</div>

<img v-click="4" src='/img/tes-array-objek.png' class='max-w-60 mt-4 mx-auto rounded-md'>
</div>`,frontmatter:{clicks:4,title:"Membuat Array dari Object"},index:0,start:0,end:54},inline:{raw:`---
src: ./pages/11_Membuat Array of Object.md
---`,content:"",frontmatter:{},index:10,start:56,end:59},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/11_Membuat Array of Object.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:zk,meta:{layout:"center",class:"text-center",srcSequence:"./pages/12_Cover Enkapsulasi.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>
Enkapsulasi
</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/12_Cover Enkapsulasi.md"},index:11,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/12_Cover Enkapsulasi.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>
Enkapsulasi
</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>
Enkapsulasi
</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/12_Cover Enkapsulasi.md
---`,content:"",frontmatter:{},index:11,start:59,end:62},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/12_Cover Enkapsulasi.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Gk,meta:{title:"Access Modifier",srcSequence:"./pages/13_Access Modifier.md",slide:{raw:null,title:"Access Modifier",level:1,content:`# Access Modifier

Berdasarkan apakah class dapat diakses oleh class lain

<br>

|                   | class yang satu package | class beda package | subclass yang satu package | subclass beda package |
| ----------------- | ----------------------- | ------------------ | -------------------------- | --------------------- |
| public            | \u2705                      | \u2705                 | \u2705                         | \u2705                    |
| protected         | \u2705                      | \u274C                 | \u2705                         | \u2705                    |
| package (default) | \u2705                      | \u274C                 | \u2705                         | \u274C                    |
| private           | \u274C                      | \u274C                 | \u274C                         | \u274C                    |`,frontmatter:{title:"Access Modifier",srcSequence:"./pages/13_Access Modifier.md"},index:12,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/13_Access Modifier.md",raw:`# Access Modifier

Berdasarkan apakah class dapat diakses oleh class lain

<br>

|                   | class yang satu package | class beda package | subclass yang satu package | subclass beda package |
| ----------------- | ----------------------- | ------------------ | -------------------------- | --------------------- |
| public            | \u2705                      | \u2705                 | \u2705                         | \u2705                    |
| protected         | \u2705                      | \u274C                 | \u2705                         | \u2705                    |
| package (default) | \u2705                      | \u274C                 | \u2705                         | \u274C                    |
| private           | \u274C                      | \u274C                 | \u274C                         | \u274C                    |
`,title:"Access Modifier",level:1,content:`# Access Modifier

Berdasarkan apakah class dapat diakses oleh class lain

<br>

|                   | class yang satu package | class beda package | subclass yang satu package | subclass beda package |
| ----------------- | ----------------------- | ------------------ | -------------------------- | --------------------- |
| public            | \u2705                      | \u2705                 | \u2705                         | \u2705                    |
| protected         | \u2705                      | \u274C                 | \u2705                         | \u2705                    |
| package (default) | \u2705                      | \u274C                 | \u2705                         | \u274C                    |
| private           | \u274C                      | \u274C                 | \u274C                         | \u274C                    |`,frontmatter:{title:"Access Modifier"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/13_Access Modifier.md
---`,content:"",frontmatter:{},index:12,start:62,end:65},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/13_Access Modifier.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:ax,meta:{title:"Enkapsulasi",srcSequence:"./pages/14_Enkapsulasi.md",slide:{raw:null,title:"Enkapsulasi",level:1,content:`# Enkapsulasi

<br>

Enkapsulasi merupakan salah satu konsep fundamental PBO yaitu membungkus suatu kode dan data menjadi satu kesatuan.

Enkapsulasi ini dapat disebut juga sebagai **data hiding**. Salah satu keuntungan dari enkapsulasi adalah membuat suatu class hanya dapat diakses melalui class itu sendiri.

Syarat enkapsulasi meliputi :

1. Mendeklarasi variabel sebagai \`private\`.
2. Membuat method \`public\` \`setter\` dan \`getter\` untuk memodifikasi dan mengakses variabel tadi.`,frontmatter:{title:"Enkapsulasi",srcSequence:"./pages/14_Enkapsulasi.md"},index:13,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/14_Enkapsulasi.md",raw:`# Enkapsulasi

<br>

Enkapsulasi merupakan salah satu konsep fundamental PBO yaitu membungkus suatu kode dan data menjadi satu kesatuan.

Enkapsulasi ini dapat disebut juga sebagai **data hiding**. Salah satu keuntungan dari enkapsulasi adalah membuat suatu class hanya dapat diakses melalui class itu sendiri.

Syarat enkapsulasi meliputi :

1. Mendeklarasi variabel sebagai \`private\`.
2. Membuat method \`public\` \`setter\` dan \`getter\` untuk memodifikasi dan mengakses variabel tadi.
`,title:"Enkapsulasi",level:1,content:`# Enkapsulasi

<br>

Enkapsulasi merupakan salah satu konsep fundamental PBO yaitu membungkus suatu kode dan data menjadi satu kesatuan.

Enkapsulasi ini dapat disebut juga sebagai **data hiding**. Salah satu keuntungan dari enkapsulasi adalah membuat suatu class hanya dapat diakses melalui class itu sendiri.

Syarat enkapsulasi meliputi :

1. Mendeklarasi variabel sebagai \`private\`.
2. Membuat method \`public\` \`setter\` dan \`getter\` untuk memodifikasi dan mengakses variabel tadi.`,frontmatter:{title:"Enkapsulasi"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/14_Enkapsulasi.md
---`,content:"",frontmatter:{},index:13,start:65,end:68},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/14_Enkapsulasi.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:cx,meta:{clicks:1,title:"Enkapsulasi (lanjutan)",srcSequence:"./pages/15_Enkapsulasi part2.md",slide:{raw:null,title:"Enkapsulasi (lanjutan)",level:1,content:`# Enkapsulasi (lanjutan)

\`\`\`java {all|2}
public class Rekening {
    private float money;

    public float retrieveMoney() {
        // for retrieving money
    }

    public void setMoney(float amount) {
        // for setting money value
    }
}
\`\`\`

<div v-click="1">

Apa yang terjadi jika money tidak diberi access modifier private / tidak menggunakan konsep enkapsulasi?

</div>`,frontmatter:{clicks:1,title:"Enkapsulasi (lanjutan)",srcSequence:"./pages/15_Enkapsulasi part2.md"},index:14,start:0,end:26,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/15_Enkapsulasi part2.md",raw:`---
clicks: 1
---

# Enkapsulasi (lanjutan)

\`\`\`java {all|2}
public class Rekening {
    private float money;

    public float retrieveMoney() {
        // for retrieving money
    }

    public void setMoney(float amount) {
        // for setting money value
    }
}
\`\`\`

<div v-click="1">

Apa yang terjadi jika money tidak diberi access modifier private / tidak menggunakan konsep enkapsulasi?

</div>
`,title:"Enkapsulasi (lanjutan)",level:1,content:`# Enkapsulasi (lanjutan)

\`\`\`java {all|2}
public class Rekening {
    private float money;

    public float retrieveMoney() {
        // for retrieving money
    }

    public void setMoney(float amount) {
        // for setting money value
    }
}
\`\`\`

<div v-click="1">

Apa yang terjadi jika money tidak diberi access modifier private / tidak menggunakan konsep enkapsulasi?

</div>`,frontmatter:{clicks:1,title:"Enkapsulasi (lanjutan)"},index:0,start:0,end:26},inline:{raw:`---
src: ./pages/15_Enkapsulasi part2.md
---`,content:"",frontmatter:{},index:14,start:68,end:71},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/15_Enkapsulasi part2.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:vx,meta:{clicks:3,title:"Enkapsulasi (contoh)",srcSequence:"./pages/16_Enkapsulasi part3.md",slide:{raw:null,title:"Enkapsulasi (contoh)",level:1,content:`# Enkapsulasi (contoh)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java {all|4}
package child1;

public class File1 {
    private String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<span v-click="1">

Ketika variabel \`data\` dijadikan \`private\`...

</span>

</div>

<div v-click="2">

\`\`\`java {9-10|all}
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.data);

        System.out.println(test.getData());
    }
}
\`\`\`

<span v-click="2">

Pemanggilan variabel \`data\` pada class lain
akan menghasilkan <span class='text-red'>error</span>

</span>

</div>

</div>`,frontmatter:{clicks:3,title:"Enkapsulasi (contoh)",srcSequence:"./pages/16_Enkapsulasi part3.md"},index:15,start:0,end:67,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/16_Enkapsulasi part3.md",raw:`---
clicks: 3
---

# Enkapsulasi (contoh)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java {all|4}
package child1;

public class File1 {
    private String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<span v-click="1">

Ketika variabel \`data\` dijadikan \`private\`...

</span>

</div>

<div v-click="2">

\`\`\`java {9-10|all}
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.data);

        System.out.println(test.getData());
    }
}
\`\`\`

<span v-click="2">

Pemanggilan variabel \`data\` pada class lain
akan menghasilkan <span class='text-red'>error</span>

</span>

</div>

</div>
`,title:"Enkapsulasi (contoh)",level:1,content:`# Enkapsulasi (contoh)

<div class="grid grid-cols-2 gap-4">

<div>

\`\`\`java {all|4}
package child1;

public class File1 {
    private String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
\`\`\`

<span v-click="1">

Ketika variabel \`data\` dijadikan \`private\`...

</span>

</div>

<div v-click="2">

\`\`\`java {9-10|all}
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.data);

        System.out.println(test.getData());
    }
}
\`\`\`

<span v-click="2">

Pemanggilan variabel \`data\` pada class lain
akan menghasilkan <span class='text-red'>error</span>

</span>

</div>

</div>`,frontmatter:{clicks:3,title:"Enkapsulasi (contoh)"},index:0,start:0,end:67},inline:{raw:`---
src: ./pages/16_Enkapsulasi part3.md
---`,content:"",frontmatter:{},index:15,start:71,end:74},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/16_Enkapsulasi part3.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Ax,meta:{layout:"center",srcSequence:"./pages/17_Manfaat Enkapsulasi.md",slide:{raw:null,content:`<h1 class='text-center font-bold'>Manfaat Enkapsulasi</h1>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>1. </span>
<span class='font-bold text-xl'>Data hiding</span>
<div class='ml-8'>
Program lebih <em>secure</em>. <br>Tidak perlu tahu bagaimana cara variable dibuat atau disimpan. Begitupun dengan method.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>2. </span>
<span class='font-bold text-xl'>Flexibility</span>
<div class='ml-8'>
Bisa diatur apakah variable Read-only, atau Read-Write. Lebih maintainable.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>3. </span>
<span class='font-bold text-xl'>Reusability</span>
<div class='ml-8'>
Method bisa dipanggil dimanapun berkali-kali secara efektif (dalam arti mudah dibaca dan digunakan)
</div>
</div>`,frontmatter:{layout:"center",srcSequence:"./pages/17_Manfaat Enkapsulasi.md"},index:16,start:0,end:30,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/17_Manfaat Enkapsulasi.md",raw:`---
layout: center
---

<h1 class='text-center font-bold'>Manfaat Enkapsulasi</h1>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>1. </span>
<span class='font-bold text-xl'>Data hiding</span>
<div class='ml-8'>
Program lebih <em>secure</em>. <br>Tidak perlu tahu bagaimana cara variable dibuat atau disimpan. Begitupun dengan method.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>2. </span>
<span class='font-bold text-xl'>Flexibility</span>
<div class='ml-8'>
Bisa diatur apakah variable Read-only, atau Read-Write. Lebih maintainable.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>3. </span>
<span class='font-bold text-xl'>Reusability</span>
<div class='ml-8'>
Method bisa dipanggil dimanapun berkali-kali secara efektif (dalam arti mudah dibaca dan digunakan)
</div>
</div>
`,content:`<h1 class='text-center font-bold'>Manfaat Enkapsulasi</h1>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>1. </span>
<span class='font-bold text-xl'>Data hiding</span>
<div class='ml-8'>
Program lebih <em>secure</em>. <br>Tidak perlu tahu bagaimana cara variable dibuat atau disimpan. Begitupun dengan method.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>2. </span>
<span class='font-bold text-xl'>Flexibility</span>
<div class='ml-8'>
Bisa diatur apakah variable Read-only, atau Read-Write. Lebih maintainable.
</div>
</div>

<div class='flex-row my-4'>
<span class='text-orange text-xl font-extrabold mr-4'>3. </span>
<span class='font-bold text-xl'>Reusability</span>
<div class='ml-8'>
Method bisa dipanggil dimanapun berkali-kali secara efektif (dalam arti mudah dibaca dan digunakan)
</div>
</div>`,frontmatter:{layout:"center"},index:0,start:0,end:30},inline:{raw:`---
src: ./pages/17_Manfaat Enkapsulasi.md
---`,content:"",frontmatter:{},index:16,start:74,end:77},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/17_Manfaat Enkapsulasi.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Cx,meta:{layout:"center",class:"text-center",srcSequence:"./pages/18_Cover Overloading.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>
Overloading
</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/18_Cover Overloading.md"},index:17,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/18_Cover Overloading.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>
Overloading
</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>
Overloading
</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/18_Cover Overloading.md
---`,content:"",frontmatter:{},index:17,start:77,end:80},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/18_Cover Overloading.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Kx,meta:{clicks:3,title:"Overloading (constructor)",srcSequence:"./pages/19_Overloading Constructor.md",slide:{raw:null,title:"Overloading (constructor)",level:1,content:`# Overloading (constructor)

Overloading sebuah constructor berarti membuat banyak <br>konstruktor yang memiliki parameter yang berbeda-beda

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5-8|10-13|15-18}
public Manusia {
    private String nama;
    private int umur;

    public Manusia() {
        nama = null;
        umur = 0;
    }

    public Manusia(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

     public Manusia(int umur, String nama) {
        this.umur = umur;
        this.nama = nama;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-28'>

<carbon-arrow-left class='inline'/> Constructor default (tanpa parameter)

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>String</kbd>,<kbd>int</kbd>

</div>

<div v-click="3" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>int</kbd>,<kbd>String</kbd>

</div>
</div>
</div>`,frontmatter:{clicks:3,title:"Overloading (constructor)",srcSequence:"./pages/19_Overloading Constructor.md"},index:18,start:0,end:52,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/19_Overloading Constructor.md",raw:`---
clicks: 3
---

# Overloading (constructor)

Overloading sebuah constructor berarti membuat banyak <br>konstruktor yang memiliki parameter yang berbeda-beda

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5-8|10-13|15-18}
public Manusia {
    private String nama;
    private int umur;

    public Manusia() {
        nama = null;
        umur = 0;
    }

    public Manusia(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

     public Manusia(int umur, String nama) {
        this.umur = umur;
        this.nama = nama;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-28'>

<carbon-arrow-left class='inline'/> Constructor default (tanpa parameter)

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>String</kbd>,<kbd>int</kbd>

</div>

<div v-click="3" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>int</kbd>,<kbd>String</kbd>

</div>
</div>
</div>
`,title:"Overloading (constructor)",level:1,content:`# Overloading (constructor)

Overloading sebuah constructor berarti membuat banyak <br>konstruktor yang memiliki parameter yang berbeda-beda

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|5-8|10-13|15-18}
public Manusia {
    private String nama;
    private int umur;

    public Manusia() {
        nama = null;
        umur = 0;
    }

    public Manusia(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

     public Manusia(int umur, String nama) {
        this.umur = umur;
        this.nama = nama;
    }
}
\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-28'>

<carbon-arrow-left class='inline'/> Constructor default (tanpa parameter)

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>String</kbd>,<kbd>int</kbd>

</div>

<div v-click="3" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>int</kbd>,<kbd>String</kbd>

</div>
</div>
</div>`,frontmatter:{clicks:3,title:"Overloading (constructor)"},index:0,start:0,end:52},inline:{raw:`---
src: ./pages/19_Overloading Constructor.md
---`,content:"",frontmatter:{},index:18,start:80,end:83},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/19_Overloading Constructor.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:s8,meta:{clicks:2,title:"Overloading (method)",srcSequence:"./pages/20_Overloading Method.md",slide:{raw:null,title:"Overloading (method)",level:1,content:`# Overloading (method)

<br>
Overloading method sama halnya dengan overloading constructor karena constructor merupakan (special) method.

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|2-5|6-8}

public void setUmur(int umur) {
this.umur = umur;
}

public void setUmur(String umur) {
this.umur = Integer.parseInt(umur);
}

\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>int</kbd>

</div>
<div v-click="2" class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>String</kbd>

</div>
</div>
</div>`,frontmatter:{clicks:2,title:"Overloading (method)",srcSequence:"./pages/20_Overloading Method.md"},index:19,start:0,end:37,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/20_Overloading Method.md",raw:`---
clicks: 2
---

# Overloading (method)

<br>
Overloading method sama halnya dengan overloading constructor karena constructor merupakan (special) method.

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|2-5|6-8}

public void setUmur(int umur) {
this.umur = umur;
}

public void setUmur(String umur) {
this.umur = Integer.parseInt(umur);
}

\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>int</kbd>

</div>
<div v-click="2" class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>String</kbd>

</div>
</div>
</div>
`,title:"Overloading (method)",level:1,content:`# Overloading (method)

<br>
Overloading method sama halnya dengan overloading constructor karena constructor merupakan (special) method.

<div class='grid grid-cols-2 mt-4'>

\`\`\`java {all|2-5|6-8}

public void setUmur(int umur) {
this.umur = umur;
}

public void setUmur(String umur) {
this.umur = Integer.parseInt(umur);
}

\`\`\`

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>int</kbd>

</div>
<div v-click="2" class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>String</kbd>

</div>
</div>
</div>`,frontmatter:{clicks:2,title:"Overloading (method)"},index:0,start:0,end:37},inline:{raw:`---
src: ./pages/20_Overloading Method.md
---`,content:"",frontmatter:{},index:19,start:83,end:86},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/20_Overloading Method.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:r8,meta:{layout:"center",class:"text-center",title:"Exercise!",srcSequence:"./pages/21_Cover Exercise.md",slide:{raw:null,title:"Exercise!",level:1,content:`# Exercise!
Mari kita berlatih langsung agar cepat bisa`,frontmatter:{layout:"center",class:"text-center",title:"Exercise!",srcSequence:"./pages/21_Cover Exercise.md"},index:20,start:0,end:7,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/21_Cover Exercise.md",raw:`---
layout: center
class: text-center
---

# Exercise!
Mari kita berlatih langsung agar cepat bisa`,title:"Exercise!",level:1,content:`# Exercise!
Mari kita berlatih langsung agar cepat bisa`,frontmatter:{layout:"center",class:"text-center",title:"Exercise!"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/21_Cover Exercise.md
---`,content:"",frontmatter:{},index:20,start:86,end:89},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/21_Cover Exercise.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:w8,meta:{layout:"center",title:"Exercise <kbd><span class='text-teal'>Main.java</span></kbd>",srcSequence:"./pages/22_Exercise1.md",slide:{raw:null,title:"Exercise <kbd><span class='text-teal'>Main.java</span></kbd>",level:1,content:`# Exercise <kbd><span class='text-teal'>Main.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program untuk mencetak selisih terdekat dari tiga angka. Sebuah angka diinstansiasi pada sebuah objek.

Angka pertama dalam argumen method akan selalu menunjuk angka terkecil. Angka kedua dalam argumen method akan selalu menunjuk angka terbesar, namun bisa tidak dituliskan. Jika tidak dituliskan, angka terbesar akan selalu bernilai \`100\`.

Kembalikan selisih terkecil dari angka tengah dengan angka terkecil dan/ atau angka terbesar.

</div>

<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col'>

- a : int (angka tengah)
- lo : int (angka terkecil)
- hi : int (optional - angka terbesar, default \`100\`)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col'>

int (selisih terkecil antara angka tengah dengan angka terkecil atau angka terbesar)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-2 flex flex-col mb-2'>
Sampel Input & Output 1
\`\`\`bash
26
15
\`\`\`
\`\`\`bash
11
\`\`\`
Sampel Input & Output 2
\`\`\`bash
62
31 88
\`\`\`
\`\`\`bash
26
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Exercise <kbd><span class='text-teal'>Main.java</span></kbd>",srcSequence:"./pages/22_Exercise1.md"},index:21,start:0,end:58,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/22_Exercise1.md",raw:`---
layout: center
---

# Exercise <kbd><span class='text-teal'>Main.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program untuk mencetak selisih terdekat dari tiga angka. Sebuah angka diinstansiasi pada sebuah objek.

Angka pertama dalam argumen method akan selalu menunjuk angka terkecil. Angka kedua dalam argumen method akan selalu menunjuk angka terbesar, namun bisa tidak dituliskan. Jika tidak dituliskan, angka terbesar akan selalu bernilai \`100\`.

Kembalikan selisih terkecil dari angka tengah dengan angka terkecil dan/ atau angka terbesar.

</div>

<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col'>

- a : int (angka tengah)
- lo : int (angka terkecil)
- hi : int (optional - angka terbesar, default \`100\`)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col'>

int (selisih terkecil antara angka tengah dengan angka terkecil atau angka terbesar)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-2 flex flex-col mb-2'>
Sampel Input & Output 1
\`\`\`bash
26
15
\`\`\`
\`\`\`bash
11
\`\`\`
Sampel Input & Output 2
\`\`\`bash
62
31 88
\`\`\`
\`\`\`bash
26
\`\`\`

</div>
</div>

</div>`,title:"Exercise <kbd><span class='text-teal'>Main.java</span></kbd>",level:1,content:`# Exercise <kbd><span class='text-teal'>Main.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program untuk mencetak selisih terdekat dari tiga angka. Sebuah angka diinstansiasi pada sebuah objek.

Angka pertama dalam argumen method akan selalu menunjuk angka terkecil. Angka kedua dalam argumen method akan selalu menunjuk angka terbesar, namun bisa tidak dituliskan. Jika tidak dituliskan, angka terbesar akan selalu bernilai \`100\`.

Kembalikan selisih terkecil dari angka tengah dengan angka terkecil dan/ atau angka terbesar.

</div>

<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col'>

- a : int (angka tengah)
- lo : int (angka terkecil)
- hi : int (optional - angka terbesar, default \`100\`)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col'>

int (selisih terkecil antara angka tengah dengan angka terkecil atau angka terbesar)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-2 flex flex-col mb-2'>
Sampel Input & Output 1
\`\`\`bash
26
15
\`\`\`
\`\`\`bash
11
\`\`\`
Sampel Input & Output 2
\`\`\`bash
62
31 88
\`\`\`
\`\`\`bash
26
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Exercise <kbd><span class='text-teal'>Main.java</span></kbd>"},index:0,start:0,end:58},inline:{raw:`---
src: ./pages/22_Exercise1.md
---`,content:"",frontmatter:{},index:21,start:89,end:92},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/22_Exercise1.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:E8,meta:{title:"Snippets \u{1F9D1}\u200D\u{1F4BB}",srcSequence:"./pages/23_Snippets.md",slide:{raw:null,title:"Snippets \u{1F9D1}\u200D\u{1F4BB}",level:1,content:`# Snippets \u{1F9D1}\u200D\u{1F4BB}

<div>
Berhubung di mata kuliah PBO ini diminta untuk menguasai implementasi PBO di bahasa Java, C++ dan Python, maka kita sediakan repository snippets untuk ketiga bahasa tersebut dari setiap pertemuan praktikum.

<div class="text-center mt-16">
Repository tersebut bisa diakses melalui tautan berikut :

<span class="text-2xl">[snippets-PBO-02](https://github.com/praktikum-tiunpad-angkatan-2022/snippets-PBO-02)</span>
</div>

Silahkan untuk kalian mencoba menjalankan dan mempelajari snippets yang disediakan pada repository tersebut. Selamat belajar!
</div>`,frontmatter:{title:"Snippets \u{1F9D1}\u200D\u{1F4BB}",srcSequence:"./pages/23_Snippets.md"},index:22,start:0,end:14,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/23_Snippets.md",raw:`# Snippets \u{1F9D1}\u200D\u{1F4BB}

<div>
Berhubung di mata kuliah PBO ini diminta untuk menguasai implementasi PBO di bahasa Java, C++ dan Python, maka kita sediakan repository snippets untuk ketiga bahasa tersebut dari setiap pertemuan praktikum.

<div class="text-center mt-16">
Repository tersebut bisa diakses melalui tautan berikut :

<span class="text-2xl">[snippets-PBO-02](https://github.com/praktikum-tiunpad-angkatan-2022/snippets-PBO-02)</span>
</div>

Silahkan untuk kalian mencoba menjalankan dan mempelajari snippets yang disediakan pada repository tersebut. Selamat belajar!
</div>
`,title:"Snippets \u{1F9D1}\u200D\u{1F4BB}",level:1,content:`# Snippets \u{1F9D1}\u200D\u{1F4BB}

<div>
Berhubung di mata kuliah PBO ini diminta untuk menguasai implementasi PBO di bahasa Java, C++ dan Python, maka kita sediakan repository snippets untuk ketiga bahasa tersebut dari setiap pertemuan praktikum.

<div class="text-center mt-16">
Repository tersebut bisa diakses melalui tautan berikut :

<span class="text-2xl">[snippets-PBO-02](https://github.com/praktikum-tiunpad-angkatan-2022/snippets-PBO-02)</span>
</div>

Silahkan untuk kalian mencoba menjalankan dan mempelajari snippets yang disediakan pada repository tersebut. Selamat belajar!
</div>`,frontmatter:{title:"Snippets \u{1F9D1}\u200D\u{1F4BB}"},index:0,start:0,end:14},inline:{raw:`---
src: ./pages/23_Snippets.md
---`,content:"",frontmatter:{},index:22,start:92,end:95},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/23_Snippets.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:D8,meta:{layout:"center",class:"text-center",title:"Assignment!",srcSequence:"./pages/23_Cover Assignment.md",slide:{raw:null,title:"Assignment!",level:1,content:`# Assignment!
Seperti biasa akan setiap selesai praktikum pasti ada tugas`,frontmatter:{layout:"center",class:"text-center",title:"Assignment!",srcSequence:"./pages/23_Cover Assignment.md"},index:23,start:0,end:7,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/23_Cover Assignment.md",raw:`---
layout: center
class: text-center
---

# Assignment!
Seperti biasa akan setiap selesai praktikum pasti ada tugas`,title:"Assignment!",level:1,content:`# Assignment!
Seperti biasa akan setiap selesai praktikum pasti ada tugas`,frontmatter:{layout:"center",class:"text-center",title:"Assignment!"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/23_Cover Assignment.md
---`,content:"",frontmatter:{},index:23,start:95,end:98},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/23_Cover Assignment.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:z8,meta:{layout:"center",title:"Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/24_Assignment1.md",slide:{raw:null,title:"Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program **kalkulator sederhana** yang menggunakan 2 package. Package pertama bernama \u201Cio\u201D, package kedua bernama \u201Cutil\u201D.

Dalam package \u201Cio\u201D buat sebuah class yang memiliki method-method untuk **input dan output**.

Dalam package \u201Cutil\u201D buat sebuah class yang memiliki method-method untuk **operasi aritmatika** (tambah, kurang, kali, bagi) bilangan bulat.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>num1</span> : int (operan pertama)</span>
<span><span class='italic'>num2</span> : int (operan kedua)</span>
<span><span class='italic'>op</span> : char (operator \u201C+\u201D,\u201D -\u201D, \u201C*\u201D,  atau \u201C/\u201D)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<span>Hasil perhitungan antara num1 dan num2 menggunakan op</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
8
4
/
\`\`\`
Sampel Output
\`\`\`bash
2
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/24_Assignment1.md"},index:24,start:0,end:46,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/24_Assignment1.md",raw:`---
layout: center
---

# Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program **kalkulator sederhana** yang menggunakan 2 package. Package pertama bernama \u201Cio\u201D, package kedua bernama \u201Cutil\u201D.

Dalam package \u201Cio\u201D buat sebuah class yang memiliki method-method untuk **input dan output**.

Dalam package \u201Cutil\u201D buat sebuah class yang memiliki method-method untuk **operasi aritmatika** (tambah, kurang, kali, bagi) bilangan bulat.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>num1</span> : int (operan pertama)</span>
<span><span class='italic'>num2</span> : int (operan kedua)</span>
<span><span class='italic'>op</span> : char (operator \u201C+\u201D,\u201D -\u201D, \u201C*\u201D,  atau \u201C/\u201D)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<span>Hasil perhitungan antara num1 dan num2 menggunakan op</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
8
4
/
\`\`\`
Sampel Output
\`\`\`bash
2
\`\`\`

</div>
</div>

</div>`,title:"Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program **kalkulator sederhana** yang menggunakan 2 package. Package pertama bernama \u201Cio\u201D, package kedua bernama \u201Cutil\u201D.

Dalam package \u201Cio\u201D buat sebuah class yang memiliki method-method untuk **input dan output**.

Dalam package \u201Cutil\u201D buat sebuah class yang memiliki method-method untuk **operasi aritmatika** (tambah, kurang, kali, bagi) bilangan bulat.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>num1</span> : int (operan pertama)</span>
<span><span class='italic'>num2</span> : int (operan kedua)</span>
<span><span class='italic'>op</span> : char (operator \u201C+\u201D,\u201D -\u201D, \u201C*\u201D,  atau \u201C/\u201D)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<span>Hasil perhitungan antara num1 dan num2 menggunakan op</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
8
4
/
\`\`\`
Sampel Output
\`\`\`bash
2
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>"},index:0,start:0,end:46},inline:{raw:`---
src: ./pages/24_Assignment1.md
---`,content:"",frontmatter:{},index:24,start:98,end:101},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/24_Assignment1.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:G8,meta:{layout:"center",title:"Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/25_Assignment2.md",slide:{raw:null,title:"Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>

<br>

Menggunakan class Manusia dari praktikum sebelumnya, buatlah array objek Manusia berukuran **5** dengan properti-properti yang diberikan oleh user input. Kemudian output-kan nama dan umur setiap objek tersebut ke console.

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
Untuk setiap manusia, ada input sebagai berikut secara konsekutif

<ul>
<li><span><span class='italic'>nama</span> : string</span></li>
<li><span><span class='italic'>umur</span> : int</span></li>
</ul>

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Untuk setiap manusia, ada output sebagai berikut secara konsekutif</span>
<ul>
<li><span><span class='italic'>\u201COrang ke i\u201D</span>, dimana i adalah index</span></li>
<li><span><span class='italic'>\u201CNama: nama\u201C</span>, dimana nama adalah nama Manusia ke i</span></li>
<li><span><span class='italic'>\u201CUmur: umur\u201C</span>, dimana umur adalah umur Manusia ke i</span></li>
</ul>
</div>
</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/25_Assignment2.md"},index:25,start:0,end:32,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/25_Assignment2.md",raw:`---
layout: center
---

# Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>

<br>

Menggunakan class Manusia dari praktikum sebelumnya, buatlah array objek Manusia berukuran **5** dengan properti-properti yang diberikan oleh user input. Kemudian output-kan nama dan umur setiap objek tersebut ke console.

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
Untuk setiap manusia, ada input sebagai berikut secara konsekutif

<ul>
<li><span><span class='italic'>nama</span> : string</span></li>
<li><span><span class='italic'>umur</span> : int</span></li>
</ul>

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Untuk setiap manusia, ada output sebagai berikut secara konsekutif</span>
<ul>
<li><span><span class='italic'>\u201COrang ke i\u201D</span>, dimana i adalah index</span></li>
<li><span><span class='italic'>\u201CNama: nama\u201C</span>, dimana nama adalah nama Manusia ke i</span></li>
<li><span><span class='italic'>\u201CUmur: umur\u201C</span>, dimana umur adalah umur Manusia ke i</span></li>
</ul>
</div>
</div>
`,title:"Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>

<br>

Menggunakan class Manusia dari praktikum sebelumnya, buatlah array objek Manusia berukuran **5** dengan properti-properti yang diberikan oleh user input. Kemudian output-kan nama dan umur setiap objek tersebut ke console.

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
Untuk setiap manusia, ada input sebagai berikut secara konsekutif

<ul>
<li><span><span class='italic'>nama</span> : string</span></li>
<li><span><span class='italic'>umur</span> : int</span></li>
</ul>

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Untuk setiap manusia, ada output sebagai berikut secara konsekutif</span>
<ul>
<li><span><span class='italic'>\u201COrang ke i\u201D</span>, dimana i adalah index</span></li>
<li><span><span class='italic'>\u201CNama: nama\u201C</span>, dimana nama adalah nama Manusia ke i</span></li>
<li><span><span class='italic'>\u201CUmur: umur\u201C</span>, dimana umur adalah umur Manusia ke i</span></li>
</ul>
</div>
</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 2 <kbd>soal2/<span class='text-teal'>Test.java</span></kbd>"},index:0,start:0,end:32},inline:{raw:`---
src: ./pages/25_Assignment2.md
---`,content:"",frontmatter:{},index:25,start:101,end:104},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/25_Assignment2.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:f2,meta:{layout:"center",title:"Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/26_Assignment3.md",slide:{raw:null,title:"Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat class \u201CRekening\u201D yang mempunyai default balance = 0 dan 2 (dua) public method (selain constructor)

- getBalance() : _float_
- addBalance() : _void_

Class lain tidak boleh mengakses member yang lain kecuali constructor dan 2 method diatas.

Program berjalan dan menerima input terus menerus (_looping_) sampai user keluar dari program.


</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>op</span> : int (1 = get, 2 = add, 0 = exit)</span>
<span><span class='italic'>addValue</span> : int (hanya jika op = 2)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Jika op = 1 ATAU op = 2 -> Jumlah balance saat ini.</span>
<span>Jika op = 0 -> Keluar dari program.</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
2
2500
\`\`\`
Sampel Output
\`\`\`bash
2500
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/26_Assignment3.md"},index:26,start:0,end:51,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/26_Assignment3.md",raw:`---
layout: center
---

# Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat class \u201CRekening\u201D yang mempunyai default balance = 0 dan 2 (dua) public method (selain constructor)

- getBalance() : _float_
- addBalance() : _void_

Class lain tidak boleh mengakses member yang lain kecuali constructor dan 2 method diatas.

Program berjalan dan menerima input terus menerus (_looping_) sampai user keluar dari program.


</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>op</span> : int (1 = get, 2 = add, 0 = exit)</span>
<span><span class='italic'>addValue</span> : int (hanya jika op = 2)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Jika op = 1 ATAU op = 2 -> Jumlah balance saat ini.</span>
<span>Jika op = 0 -> Keluar dari program.</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
2
2500
\`\`\`
Sampel Output
\`\`\`bash
2500
\`\`\`

</div>
</div>

</div>`,title:"Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat class \u201CRekening\u201D yang mempunyai default balance = 0 dan 2 (dua) public method (selain constructor)

- getBalance() : _float_
- addBalance() : _void_

Class lain tidak boleh mengakses member yang lain kecuali constructor dan 2 method diatas.

Program berjalan dan menerima input terus menerus (_looping_) sampai user keluar dari program.


</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>op</span> : int (1 = get, 2 = add, 0 = exit)</span>
<span><span class='italic'>addValue</span> : int (hanya jika op = 2)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Jika op = 1 ATAU op = 2 -> Jumlah balance saat ini.</span>
<span>Jika op = 0 -> Keluar dari program.</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
\`\`\`bash
2
2500
\`\`\`
Sampel Output
\`\`\`bash
2500
\`\`\`

</div>
</div>

</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>"},index:0,start:0,end:51},inline:{raw:`---
src: ./pages/26_Assignment3.md
---`,content:"",frontmatter:{},index:26,start:104,end:107},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/26_Assignment3.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:C2,meta:{layout:"center",title:"Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/27_Assignment4.md",slide:{raw:null,title:"Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>

<br>

Buat 2 buah method untuk menambahkan 2 buah bilangan. Gunakan overloading untuk tipe data Integer dan Float.

<div class='grid grid-cols-[0.5fr_0.8fr]'>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-5 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>num1</span> : int</span>
    <span><span class='italic'>num2</span> : int</span>
    <span><span class='italic'>num3</span> : float</span>
    <span><span class='italic'>num4</span> : float</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>result1</span> : int</span>
    <span><span class='italic'>result2</span> : float</span>
</div>
</div>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>

Sampel Input
\`\`\`bash
1
2
2.5
1.5
\`\`\`

Sampel Output
\`\`\`bash
3
4.0
\`\`\`

</div>
</div>
</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>",srcSequence:"./pages/27_Assignment4.md"},index:27,start:0,end:46,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/27_Assignment4.md",raw:`---
layout: center
---

# Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>

<br>

Buat 2 buah method untuk menambahkan 2 buah bilangan. Gunakan overloading untuk tipe data Integer dan Float.

<div class='grid grid-cols-[0.5fr_0.8fr]'>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-5 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>num1</span> : int</span>
    <span><span class='italic'>num2</span> : int</span>
    <span><span class='italic'>num3</span> : float</span>
    <span><span class='italic'>num4</span> : float</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>result1</span> : int</span>
    <span><span class='italic'>result2</span> : float</span>
</div>
</div>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>

Sampel Input
\`\`\`bash
1
2
2.5
1.5
\`\`\`

Sampel Output
\`\`\`bash
3
4.0
\`\`\`

</div>
</div>
</div>`,title:"Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>",level:1,content:`# Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>

<br>

Buat 2 buah method untuk menambahkan 2 buah bilangan. Gunakan overloading untuk tipe data Integer dan Float.

<div class='grid grid-cols-[0.5fr_0.8fr]'>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-5 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>num1</span> : int</span>
    <span><span class='italic'>num2</span> : int</span>
    <span><span class='italic'>num3</span> : float</span>
    <span><span class='italic'>num4</span> : float</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
    <span><span class='italic'>result1</span> : int</span>
    <span><span class='italic'>result2</span> : float</span>
</div>
</div>
<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>

Sampel Input
\`\`\`bash
1
2
2.5
1.5
\`\`\`

Sampel Output
\`\`\`bash
3
4.0
\`\`\`

</div>
</div>
</div>`,frontmatter:{layout:"center",title:"Assignment 2 Soal 4 <kbd>soal4/<span class='text-teal'>Test.java</span></kbd>"},index:0,start:0,end:46},inline:{raw:`---
src: ./pages/27_Assignment4.md
---`,content:"",frontmatter:{},index:27,start:107,end:110},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/27_Assignment4.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:$2,meta:{layout:"center",class:"text-center",title:"Teknis Pengumpulan",srcSequence:"./pages/28_Teknis Pengumpulan 1.md",slide:{raw:null,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan
Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

  #### Kelas A:
  [Link Tugas Kelas A](https://classroom.github.com/a/6zU6Q0B2)

  </div>
  <div>

  #### Kelas B:
  [Link Tugas Kelas B](https://classroom.github.com/a/qKNOkdk0)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom`,frontmatter:{layout:"center",class:"text-center",title:"Teknis Pengumpulan",srcSequence:"./pages/28_Teknis Pengumpulan 1.md"},index:28,start:0,end:26,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/28_Teknis Pengumpulan 1.md",raw:`---
layout: center
class: text-center
---

# Teknis Pengumpulan
Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

  #### Kelas A:
  [Link Tugas Kelas A](https://classroom.github.com/a/6zU6Q0B2)

  </div>
  <div>

  #### Kelas B:
  [Link Tugas Kelas B](https://classroom.github.com/a/qKNOkdk0)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom
`,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan
Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

  #### Kelas A:
  [Link Tugas Kelas A](https://classroom.github.com/a/6zU6Q0B2)

  </div>
  <div>

  #### Kelas B:
  [Link Tugas Kelas B](https://classroom.github.com/a/qKNOkdk0)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom`,frontmatter:{layout:"center",class:"text-center",title:"Teknis Pengumpulan"},index:0,start:0,end:26},inline:{raw:`---
src: ./pages/28_Teknis Pengumpulan 1.md
---`,content:"",frontmatter:{},index:28,start:110,end:113},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/28_Teknis Pengumpulan 1.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:L2,meta:{title:"Teknis Pengumpulan",srcSequence:"./pages/29_Teknis Pengumpulan 2.md",slide:{raw:null,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\``,frontmatter:{title:"Teknis Pengumpulan",srcSequence:"./pages/29_Teknis Pengumpulan 2.md"},index:29,start:0,end:28,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/29_Teknis Pengumpulan 2.md",raw:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\`
`,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\``,frontmatter:{title:"Teknis Pengumpulan"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/29_Teknis Pengumpulan 2.md
---`,content:"",frontmatter:{},index:29,start:113,end:116},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/29_Teknis Pengumpulan 2.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:K2,meta:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A",srcSequence:"./pages/30_Deadline.md",slide:{raw:null,title:"Deadline Pengumpulan \u231A",level:1,content:`# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

17 September 2023, 23:59 WIB

</div>
<div>

#### Kelas B:

19 September 2023, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat`,frontmatter:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A",srcSequence:"./pages/30_Deadline.md"},index:30,start:0,end:28,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/30_Deadline.md",raw:`---
layout: center
class: text-center
---

# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

17 September 2023, 23:59 WIB

</div>
<div>

#### Kelas B:

19 September 2023, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat
`,title:"Deadline Pengumpulan \u231A",level:1,content:`# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

17 September 2023, 23:59 WIB

</div>
<div>

#### Kelas B:

19 September 2023, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat`,frontmatter:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/30_Deadline.md
---`,content:"",frontmatter:{},index:30,start:116,end:119},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/30_Deadline.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:J2,meta:{layout:"center",class:"text-center",title:"Terima Kasih!",srcSequence:"./pages/31_Terima Kasih.md",slide:{raw:null,title:"Terima Kasih!",level:1,content:`# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}`,frontmatter:{layout:"center",class:"text-center",title:"Terima Kasih!",srcSequence:"./pages/31_Terima Kasih.md"},index:31,start:0,end:11,source:{filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/31_Terima Kasih.md",raw:`---
layout: center
class: text-center
---

# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}`,title:"Terima Kasih!",level:1,content:`# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}`,frontmatter:{layout:"center",class:"text-center",title:"Terima Kasih!"},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/31_Terima Kasih.md
---
`,content:"",frontmatter:{},index:31,start:119,end:123},filepath:"/home/runner/work/materi-PBO-02/materi-PBO-02/pages/31_Terima Kasih.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",component:tb,meta:{layout:"end"}}],Ke=Y2,Z2=[{name:"play",path:"/",component:W_,children:[...Ke]},{name:"print",path:"/print",component:Q_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.3ec5928c.js"),["assets/Presenter.3ec5928c.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.36077b08.js"]),beforeEnter:e=>{if(!On.remote||On.remote===e.query.password)return!0;if(On.remote&&e.query.password===void 0){const t=prompt("Enter password");if(On.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vt=Ny({history:ny("/materi-PBO-02/"),routes:Z2});function G2(e,t,{mode:s="replace"}={}){return E({get(){const a=vt.currentRoute.value.query[e];return a==null?t!=null?t:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Ge(()=>{vt[k(s)]({query:{...vt.currentRoute.value.query,[e]:a}})})}})}const vp=H(0);Ge(()=>{vt.afterEach(async()=>{await Ge(),vp.value+=1})});const tn=E(()=>vt.currentRoute.value),Gr=E(()=>tn.value.query.print!==void 0),Q2=E(()=>tn.value.query.print==="clicks"),Jt=E(()=>tn.value.query.embedded!==void 0),Ht=E(()=>tn.value.path.startsWith("/presenter")),Fs=E(()=>Gr.value&&!Q2.value),or=E(()=>tn.value.query.password),X2=E(()=>!Ht.value&&(!ke.remote||or.value===ke.remote)),Qi=G2("clicks","0"),_p=E(()=>Ke.length-1),e5=E(()=>tn.value.path),Ue=E(()=>parseInt(e5.value.split(/\//g).slice(-1)[0])||1);E(()=>nl(Ue.value));const mt=E(()=>Ke.find(e=>e.path===`${Ue.value}`));E(()=>{var e,t,s;return(s=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});E(()=>{var e,t;return(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.layout});const kl=E(()=>Ke.find(e=>e.path===`${Math.min(Ke.length,Ue.value+1)}`)),t5=E(()=>{var e,t;return vp.value,((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Mt=E({get(){if(Fs.value)return 99999;let e=+(Qi.value||0);return isNaN(e)&&(e=0),e},set(e){Qi.value=e.toString()}}),ja=E(()=>{var e,t,s;return+((s=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?s:t5.value.length)}),n5=E(()=>Ue.value<Ke.length-1||Mt.value<ja.value),s5=E(()=>Ue.value>1||Mt.value>0),a5=E(()=>Ke.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(Qr(e,t),e),[])),l5=E(()=>Xr(a5.value,mt.value));E(()=>eo(l5.value));function pn(){ja.value<=Mt.value?Ys():Mt.value+=1}async function dn(){Mt.value<=0?await Zs():Mt.value-=1}function nl(e){return Ht.value?`/presenter/${e}`:`/${e}`}function Ys(){const e=Math.min(Ke.length,Ue.value+1);return cs(e)}async function Zs(e=!0){const t=Math.max(1,Ue.value-1);await cs(t),e&&ja.value&&vt.replace({query:{...tn.value.query,clicks:ja.value}})}function cs(e,t){return vt.push({path:nl(e),query:{...tn.value.query,clicks:t}})}function r5(e){const t=H(0),{direction:s,distanceX:a,distanceY:l}=Og(e,{onSwipeStart(r){r.pointerType==="touch"&&(zs.value||(t.value=Yl()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||zs.value)return;const o=Math.abs(a.value),i=Math.abs(l.value);o/window.innerWidth>.3||o>100?s.value===Gt.LEFT?pn():dn():(i/window.innerHeight>.4||i>200)&&(s.value===Gt.DOWN?Zs():Ys())}})}async function ir(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Mu(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/materi-PBO-02/slidev-exported.pdf",`${ke.title}.pdf`)}async function o5(e){var t,s;if(e==null){const a=(s=(t=mt.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Qr(e,t,s=1){var l,r,o,i,c;const a=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;a&&a>s&&e.length>0?Qr(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((o=t.meta)==null?void 0:o.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Xr(e,t,s=!1,a){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=Xr(r.children,t,r.active||r.hasActiveParent,r)),a&&(r.active||r.activeParent)&&(a.activeParent=!0),r})}function eo(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:eo(s.children,t+1)}))}function i5(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");Wm({title:e}),nh(`${e} - shared`),rh(`${e} - drawings`);function t(){Ht.value&&(ei("page",+Ue.value),ei("clicks",Mt.value))}vt.afterEach(t),pe(Mt,t),sh(s=>{(+s.page!=+Ue.value||Mt.value!==s.clicks)&&vt.replace({path:nl(s.page),query:{...vt.currentRoute.value.query,clicks:s.clicks||0}})})}const c5=Ce({__name:"App",setup(e){return V(G),i5(),(t,s)=>{const a=Ea("RouterView"),l=Ea("StarportCarrier");return x(),I(Be,null,[j(a),j(l)],64)}}});function xl(e){return e!==null&&typeof e=="object"}function cr(e,t,s=".",a){if(!xl(t))return cr(e,{},s,a);const l=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const o=e[r];o!=null&&(a&&a(l,r,o,s)||(Array.isArray(o)&&Array.isArray(l[r])?l[r]=o.concat(l[r]):xl(o)&&xl(l[r])?l[r]=cr(o,l[r],(s?`${s}.`:"")+r.toString(),a):l[r]=o))}return l}function u5(e){return(...t)=>t.reduce((s,a)=>cr(s,a,"",e),{})}const p5=u5(),bp=1/60*1e3,d5=typeof performance<"u"?()=>performance.now():()=>Date.now(),kp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(d5()),bp);function f5(e){let t=[],s=[],a=0,l=!1,r=!1;const o=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const f=p&&l,m=f?t:s;return u&&o.add(c),m.indexOf(c)===-1&&(m.push(c),f&&l&&(a=t.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),o.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,a=t.length,a)for(let u=0;u<a;u++){const p=t[u];p(c),o.has(p)&&(i.schedule(p),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const m5=40;let ur=!0,Gs=!1,pr=!1;const ss={delta:0,timestamp:0},sa=["read","update","preRender","render","postRender"],sl=sa.reduce((e,t)=>(e[t]=f5(()=>Gs=!0),e),{}),dr=sa.reduce((e,t)=>{const s=sl[t];return e[t]=(a,l=!1,r=!1)=>(Gs||y5(),s.schedule(a,l,r)),e},{}),h5=sa.reduce((e,t)=>(e[t]=sl[t].cancel,e),{});sa.reduce((e,t)=>(e[t]=()=>sl[t].process(ss),e),{});const g5=e=>sl[e].process(ss),xp=e=>{Gs=!1,ss.delta=ur?bp:Math.max(Math.min(e-ss.timestamp,m5),1),ss.timestamp=e,pr=!0,sa.forEach(g5),pr=!1,Gs&&(ur=!1,kp(xp))},y5=()=>{Gs=!0,ur=!0,pr||kp(xp)},Ap=()=>ss;function wp(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(s[a[l]]=e[a[l]]);return s}var v5=function(){},Xi=function(){};const fr=(e,t,s)=>Math.min(Math.max(s,e),t),Al=.001,_5=.01,ec=10,b5=.05,k5=1;function x5({duration:e=800,bounce:t=.25,velocity:s=0,mass:a=1}){let l,r;v5(e<=ec*1e3);let o=1-t;o=fr(b5,k5,o),e=fr(_5,ec,e/1e3),o<1?(l=u=>{const p=u*o,f=p*e,m=p-s,h=mr(u,o),g=Math.exp(-f);return Al-m/h*g},r=u=>{const f=u*o*e,m=f*s+s,h=Math.pow(o,2)*Math.pow(u,2)*e,g=Math.exp(-f),b=mr(Math.pow(u,2),o);return(-l(u)+Al>0?-1:1)*((m-h)*g)/b}):(l=u=>{const p=Math.exp(-u*e),f=(u-s)*e+1;return-Al+p*f},r=u=>{const p=Math.exp(-u*e),f=(s-u)*(e*e);return p*f});const i=5/e,c=w5(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*a;return{stiffness:u,damping:o*2*Math.sqrt(a*u),duration:e}}}const A5=12;function w5(e,t,s){let a=s;for(let l=1;l<A5;l++)a=a-e(a)/t(a);return a}function mr(e,t){return e*Math.sqrt(1-t*t)}const B5=["duration","bounce"],C5=["stiffness","damping","mass"];function tc(e,t){return t.some(s=>e[s]!==void 0)}function E5(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!tc(e,C5)&&tc(e,B5)){const s=x5(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function to(e){var{from:t=0,to:s=1,restSpeed:a=2,restDelta:l}=e,r=wp(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:i,damping:c,mass:u,velocity:p,duration:f,isResolvedFromDuration:m}=E5(r),h=nc,g=nc;function b(){const _=p?-(p/1e3):0,C=s-t,B=c/(2*Math.sqrt(i*u)),A=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),B<1){const O=mr(A,B);h=T=>{const M=Math.exp(-B*A*T);return s-M*((_+B*A*C)/O*Math.sin(O*T)+C*Math.cos(O*T))},g=T=>{const M=Math.exp(-B*A*T);return B*A*M*(Math.sin(O*T)*(_+B*A*C)/O+C*Math.cos(O*T))-M*(Math.cos(O*T)*(_+B*A*C)-O*C*Math.sin(O*T))}}else if(B===1)h=O=>s-Math.exp(-A*O)*(C+(_+A*C)*O);else{const O=A*Math.sqrt(B*B-1);h=T=>{const M=Math.exp(-B*A*T),q=Math.min(O*T,300);return s-M*((_+B*A*C)*Math.sinh(q)+O*C*Math.cosh(q))/O}}}return b(),{next:_=>{const C=h(_);if(m)o.done=_>=f;else{const B=g(_)*1e3,A=Math.abs(B)<=a,O=Math.abs(s-C)<=l;o.done=A&&O}return o.value=o.done?s:C,o},flipTarget:()=>{p=-p,[t,s]=[s,t],b()}}}to.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const nc=e=>0,Bp=(e,t,s)=>{const a=t-e;return a===0?1:(s-e)/a},no=(e,t,s)=>-s*e+s*t+e,Cp=(e,t)=>s=>Math.max(Math.min(s,t),e),Ts=e=>e%1?Number(e.toFixed(5)):e,Qs=/(-)?([\d]*\.?[\d])+/g,hr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,O5=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function aa(e){return typeof e=="string"}const la={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},js=Object.assign(Object.assign({},la),{transform:Cp(0,1)}),ha=Object.assign(Object.assign({},la),{default:1}),so=e=>({test:t=>aa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_n=so("deg"),Is=so("%"),oe=so("px"),sc=Object.assign(Object.assign({},Is),{parse:e=>Is.parse(e)/100,transform:e=>Is.transform(e*100)}),ao=(e,t)=>s=>Boolean(aa(s)&&O5.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),Ep=(e,t,s)=>a=>{if(!aa(a))return a;const[l,r,o,i]=a.match(Qs);return{[e]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(o),alpha:i!==void 0?parseFloat(i):1}},Dn={test:ao("hsl","hue"),parse:Ep("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:a=1})=>"hsla("+Math.round(e)+", "+Is.transform(Ts(t))+", "+Is.transform(Ts(s))+", "+Ts(js.transform(a))+")"},S5=Cp(0,255),wl=Object.assign(Object.assign({},la),{transform:e=>Math.round(S5(e))}),rn={test:ao("rgb","red"),parse:Ep("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:a=1})=>"rgba("+wl.transform(e)+", "+wl.transform(t)+", "+wl.transform(s)+", "+Ts(js.transform(a))+")"};function D5(e){let t="",s="",a="",l="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),a=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),a=e.substr(3,1),l=e.substr(4,1),t+=t,s+=s,a+=a,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:l?parseInt(l,16)/255:1}}const gr={test:ao("#"),parse:D5,transform:rn.transform},it={test:e=>rn.test(e)||gr.test(e)||Dn.test(e),parse:e=>rn.test(e)?rn.parse(e):Dn.test(e)?Dn.parse(e):gr.parse(e),transform:e=>aa(e)?e:e.hasOwnProperty("red")?rn.transform(e):Dn.transform(e)},Op="${c}",Sp="${n}";function P5(e){var t,s,a,l;return isNaN(e)&&aa(e)&&((s=(t=e.match(Qs))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(a=e.match(hr))===null||a===void 0?void 0:a.length)!==null&&l!==void 0?l:0)>0}function Dp(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const a=e.match(hr);a&&(s=a.length,e=e.replace(hr,Op),t.push(...a.map(it.parse)));const l=e.match(Qs);return l&&(e=e.replace(Qs,Sp),t.push(...l.map(la.parse))),{values:t,numColors:s,tokenised:e}}function Pp(e){return Dp(e).values}function $p(e){const{values:t,numColors:s,tokenised:a}=Dp(e),l=t.length;return r=>{let o=a;for(let i=0;i<l;i++)o=o.replace(i<s?Op:Sp,i<s?it.transform(r[i]):Ts(r[i]));return o}}const $5=e=>typeof e=="number"?0:e;function M5(e){const t=Pp(e);return $p(e)(t.map($5))}const ra={test:P5,parse:Pp,createTransformer:$p,getAnimatableNone:M5},F5=new Set(["brightness","contrast","saturate","opacity"]);function T5(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=s.match(Qs)||[];if(!a)return e;const l=s.replace(a,"");let r=F5.has(t)?1:0;return a!==s&&(r*=100),t+"("+r+l+")"}const j5=/([a-z-]*)\(.*?\)/g,yr=Object.assign(Object.assign({},ra),{getAnimatableNone:e=>{const t=e.match(j5);return t?t.map(T5).join(" "):e}});function Bl(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function ac({hue:e,saturation:t,lightness:s,alpha:a}){e/=360,t/=100,s/=100;let l=0,r=0,o=0;if(!t)l=r=o=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;l=Bl(c,i,e+1/3),r=Bl(c,i,e),o=Bl(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:a}}const I5=(e,t,s)=>{const a=e*e,l=t*t;return Math.sqrt(Math.max(0,s*(l-a)+a))},R5=[gr,rn,Dn],lc=e=>R5.find(t=>t.test(e)),Mp=(e,t)=>{let s=lc(e),a=lc(t),l=s.parse(e),r=a.parse(t);s===Dn&&(l=ac(l),s=rn),a===Dn&&(r=ac(r),a=rn);const o=Object.assign({},l);return i=>{for(const c in o)c!=="alpha"&&(o[c]=I5(l[c],r[c],i));return o.alpha=no(l.alpha,r.alpha,i),s.transform(o)}},L5=e=>typeof e=="number",N5=(e,t)=>s=>t(e(s)),Fp=(...e)=>e.reduce(N5);function Tp(e,t){return L5(e)?s=>no(e,t,s):it.test(e)?Mp(e,t):Ip(e,t)}const jp=(e,t)=>{const s=[...e],a=s.length,l=e.map((r,o)=>Tp(r,t[o]));return r=>{for(let o=0;o<a;o++)s[o]=l[o](r);return s}},q5=(e,t)=>{const s=Object.assign(Object.assign({},e),t),a={};for(const l in s)e[l]!==void 0&&t[l]!==void 0&&(a[l]=Tp(e[l],t[l]));return l=>{for(const r in a)s[r]=a[r](l);return s}};function rc(e){const t=ra.parse(e),s=t.length;let a=0,l=0,r=0;for(let o=0;o<s;o++)a||typeof t[o]=="number"?a++:t[o].hue!==void 0?r++:l++;return{parsed:t,numNumbers:a,numRGB:l,numHSL:r}}const Ip=(e,t)=>{const s=ra.createTransformer(t),a=rc(e),l=rc(t);return a.numHSL===l.numHSL&&a.numRGB===l.numRGB&&a.numNumbers>=l.numNumbers?Fp(jp(a.parsed,l.parsed),s):o=>`${o>0?t:e}`},H5=(e,t)=>s=>no(e,t,s);function V5(e){if(typeof e=="number")return H5;if(typeof e=="string")return it.test(e)?Mp:Ip;if(Array.isArray(e))return jp;if(typeof e=="object")return q5}function K5(e,t,s){const a=[],l=s||V5(e[0]),r=e.length-1;for(let o=0;o<r;o++){let i=l(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]:t;i=Fp(c,i)}a.push(i)}return a}function U5([e,t],[s]){return a=>s(Bp(e,t,a))}function z5(e,t){const s=e.length,a=s-1;return l=>{let r=0,o=!1;if(l<=e[0]?o=!0:l>=e[a]&&(r=a-1,o=!0),!o){let c=1;for(;c<s&&!(e[c]>l||c===a);c++);r=c-1}const i=Bp(e[r],e[r+1],l);return t[r](i)}}function Rp(e,t,{clamp:s=!0,ease:a,mixer:l}={}){const r=e.length;Xi(r===t.length),Xi(!a||!Array.isArray(a)||a.length===r-1),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=K5(t,a,l),i=r===2?U5(e,o):z5(e,o);return s?c=>i(fr(e[0],e[r-1],c)):i}const al=e=>t=>1-e(1-t),lo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,W5=e=>t=>Math.pow(t,e),Lp=e=>t=>t*t*((e+1)*t-e),J5=e=>{const t=Lp(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},Np=1.525,Y5=4/11,Z5=8/11,G5=9/10,qp=e=>e,ro=W5(2),Q5=al(ro),Hp=lo(ro),Vp=e=>1-Math.sin(Math.acos(e)),Kp=al(Vp),X5=lo(Kp),oo=Lp(Np),e3=al(oo),t3=lo(oo),n3=J5(Np),s3=4356/361,a3=35442/1805,l3=16061/1805,Ia=e=>{if(e===1||e===0)return e;const t=e*e;return e<Y5?7.5625*t:e<Z5?9.075*t-9.9*e+3.4:e<G5?s3*t-a3*e+l3:10.8*e*e-20.52*e+10.72},r3=al(Ia),o3=e=>e<.5?.5*(1-Ia(1-e*2)):.5*Ia(e*2-1)+.5;function i3(e,t){return e.map(()=>t||Hp).splice(0,e.length-1)}function c3(e){const t=e.length;return e.map((s,a)=>a!==0?a/(t-1):0)}function u3(e,t){return e.map(s=>s*t)}function xa({from:e=0,to:t=1,ease:s,offset:a,duration:l=300}){const r={done:!1,value:e},o=Array.isArray(t)?t:[e,t],i=u3(a&&a.length===o.length?a:c3(o),l);function c(){return Rp(i,o,{ease:Array.isArray(s)?s:i3(o,s)})}let u=c();return{next:p=>(r.value=u(p),r.done=p>=l,r),flipTarget:()=>{o.reverse(),u=c()}}}function p3({velocity:e=0,from:t=0,power:s=.8,timeConstant:a=350,restDelta:l=.5,modifyTarget:r}){const o={done:!1,value:t};let i=s*e;const c=t+i,u=r===void 0?c:r(c);return u!==c&&(i=u-t),{next:p=>{const f=-i*Math.exp(-p/a);return o.done=!(f>l||f<-l),o.value=o.done?u:u+f,o},flipTarget:()=>{}}}const oc={keyframes:xa,spring:to,decay:p3};function d3(e){if(Array.isArray(e.to))return xa;if(oc[e.type])return oc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xa:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?to:xa}function Up(e,t,s=0){return e-t-s}function f3(e,t,s=0,a=!0){return a?Up(t+-e,t,s):t-(e-t)+s}function m3(e,t,s,a){return a?e>=t+s:e<=-s}const h3=e=>{const t=({delta:s})=>e(s);return{start:()=>dr.update(t,!0),stop:()=>h5.update(t)}};function zp(e){var t,s,{from:a,autoplay:l=!0,driver:r=h3,elapsed:o=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:f,onComplete:m,onRepeat:h,onUpdate:g}=e,b=wp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=b,C,B=0,A=b.duration,O,T=!1,M=!0,q;const ee=d3(b);!((s=(t=ee).needsInterpolation)===null||s===void 0)&&s.call(t,a,_)&&(q=Rp([0,100],[a,_],{clamp:!1}),a=0,_=100);const le=ee(Object.assign(Object.assign({},b),{from:a,to:_}));function me(){B++,c==="reverse"?(M=B%2===0,o=f3(o,A,u,M)):(o=Up(o,A,u),c==="mirror"&&le.flipTarget()),T=!1,h&&h()}function ge(){C.stop(),m&&m()}function Ne(Ie){if(M||(Ie=-Ie),o+=Ie,!T){const Pe=le.next(Math.max(0,o));O=Pe.value,q&&(O=q(O)),T=M?Pe.done:o<=0}g==null||g(O),T&&(B===0&&(A!=null||(A=o)),B<i?m3(o,A,u,M)&&me():ge())}function qe(){p==null||p(),C=r(Ne),C.start()}return l&&qe(),{stop:()=>{f==null||f(),C.stop()}}}function Wp(e,t){return t?e*(1e3/t):0}function g3({from:e=0,velocity:t=0,min:s,max:a,power:l=.8,timeConstant:r=750,bounceStiffness:o=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:f,onComplete:m,onStop:h}){let g;function b(A){return s!==void 0&&A<s||a!==void 0&&A>a}function _(A){return s===void 0?a:a===void 0||Math.abs(s-A)<Math.abs(a-A)?s:a}function C(A){g==null||g.stop(),g=zp(Object.assign(Object.assign({},A),{driver:p,onUpdate:O=>{var T;f==null||f(O),(T=A.onUpdate)===null||T===void 0||T.call(A,O)},onComplete:m,onStop:h}))}function B(A){C(Object.assign({type:"spring",stiffness:o,damping:i,restDelta:c},A))}if(b(e))B({from:e,velocity:t,to:_(e)});else{let A=l*t+e;typeof u<"u"&&(A=u(A));const O=_(A),T=O===s?-1:1;let M,q;const ee=le=>{M=q,q=le,t=Wp(le-M,Ap().delta),(T===1&&le>O||T===-1&&le<O)&&B({from:le,to:O,velocity:t})};C({type:"decay",from:e,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:b(A)?ee:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Jp=(e,t)=>1-3*t+3*e,Yp=(e,t)=>3*t-6*e,Zp=e=>3*e,Ra=(e,t,s)=>((Jp(t,s)*e+Yp(t,s))*e+Zp(t))*e,Gp=(e,t,s)=>3*Jp(t,s)*e*e+2*Yp(t,s)*e+Zp(t),y3=1e-7,v3=10;function _3(e,t,s,a,l){let r,o,i=0;do o=t+(s-t)/2,r=Ra(o,a,l)-e,r>0?s=o:t=o;while(Math.abs(r)>y3&&++i<v3);return o}const b3=8,k3=.001;function x3(e,t,s,a){for(let l=0;l<b3;++l){const r=Gp(t,s,a);if(r===0)return t;t-=(Ra(t,s,a)-e)/r}return t}const Aa=11,ga=1/(Aa-1);function A3(e,t,s,a){if(e===t&&s===a)return qp;const l=new Float32Array(Aa);for(let o=0;o<Aa;++o)l[o]=Ra(o*ga,e,s);function r(o){let i=0,c=1;const u=Aa-1;for(;c!==u&&l[c]<=o;++c)i+=ga;--c;const p=(o-l[c])/(l[c+1]-l[c]),f=i+p*ga,m=Gp(f,e,s);return m>=k3?x3(o,f,e,s):m===0?f:_3(o,i,i+ga,e,s)}return o=>o===0||o===1?o:Ra(r(o),t,a)}const Cl={};class w3{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,a){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(t,s,a)}clear(){this.subscriptions.clear()}}const ic=e=>!isNaN(parseFloat(e));class B3{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new w3,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:a,timestamp:l}=Ap();this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l),dr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>dr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=ic(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ic(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Wp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:a}=t(s);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function C3(e){return new B3(e)}const{isArray:E3}=Array;function O3(){const e=H({}),t=a=>{const l=r=>{!e.value[r]||(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};a?E3(a)?a.forEach(l):l(a):Object.keys(e.value).forEach(l)},s=(a,l,r)=>{if(e.value[a])return e.value[a];const o=C3(l);return o.onChange(i=>r[a]=i),e.value[a]=o,o};return Sh(t),{motionValues:e,get:s,stop:t}}const S3=e=>Array.isArray(e),bn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),El=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),D3=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ol=()=>({type:"keyframes",ease:"linear",duration:300}),P3=e=>({type:"keyframes",duration:800,values:e}),cc={default:D3,x:bn,y:bn,z:bn,rotate:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scaleX:El,scaleY:El,scale:El,backgroundColor:Ol,color:Ol,opacity:Ol},Qp=(e,t)=>{let s;return S3(t)?s=P3:s=cc[e]||cc.default,{to:t,...s(t)}},uc={...la,transform:Math.round},Xp={color:it,backgroundColor:it,outlineColor:it,fill:it,stroke:it,borderColor:it,borderTopColor:it,borderRightColor:it,borderBottomColor:it,borderLeftColor:it,borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:ha,scaleX:ha,scaleY:ha,scaleZ:ha,skew:_n,skewX:_n,skewY:_n,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:js,originX:sc,originY:sc,originZ:oe,zIndex:uc,filter:yr,WebkitFilter:yr,fillOpacity:js,strokeOpacity:js,numOctaves:uc},io=e=>Xp[e],ed=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function $3(e,t){let s=io(e);return s!==yr&&(s=ra),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const M3={linear:qp,easeIn:ro,easeInOut:Hp,easeOut:Q5,circIn:Vp,circInOut:X5,circOut:Kp,backIn:oo,backInOut:t3,backOut:e3,anticipate:n3,bounceIn:r3,bounceInOut:o3,bounceOut:Ia},pc=e=>{if(Array.isArray(e)){const[t,s,a,l]=e;return A3(t,s,a,l)}else if(typeof e=="string")return M3[e];return e},F3=e=>Array.isArray(e)&&typeof e[0]!="number",dc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ra.test(t)&&!t.startsWith("url("));function T3(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function j3({ease:e,times:t,delay:s,...a}){const l={...a};return t&&(l.offset=t),e&&(l.ease=F3(e)?e.map(pc):pc(e)),s&&(l.elapsed=-s),l}function I3(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),T3(t),R3(e)||(e={...e,...Qp(s,t.to)}),{...t,...j3(e)}}function R3({delay:e,repeat:t,repeatType:s,repeatDelay:a,from:l,...r}){return!!Object.keys(r).length}function L3(e,t){return e[t]||e.default||e}function N3(e,t,s,a,l){const r=L3(a,e);let o=r.from===null||r.from===void 0?t.get():r.from;const i=dc(e,s);o==="none"&&i&&typeof s=="string"&&(o=$3(e,s));const c=dc(e,o);function u(f){const m={from:o,to:s,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?g3({...m,...r}):zp({...I3(r,m,e),onUpdate:h=>{m.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{a.onComplete&&a.onComplete(),l&&l(),f&&f()}})}function p(f){return t.set(s),a.onComplete&&a.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?p:u}function q3(){const{motionValues:e,stop:t,get:s}=O3();return{motionValues:e,stop:t,push:(l,r,o,i={},c)=>{const u=o[l],p=s(l,u,o);if(i&&i.immediate){p.set(r);return}const f=N3(l,p,r,i,c);p.start(f)}}}function H3(e,t={},{motionValues:s,push:a,stop:l}=q3()){const r=k(t),o=H(!1);pe(s,f=>{o.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([m,h])=>{if(m!=="transition")return new Promise(g=>{a(m,h,e,f.transition||Qp(m,f[m]),g)})}).filter(Boolean)));return{isAnimating:o,apply:c,set:f=>{const m=Jl(f)?f:i(f);Object.entries(m).forEach(([h,g])=>{h!=="transition"&&a(h,g,e,{immediate:!0})})},leave:async f=>{let m;if(r&&(r.leave&&(m=r.leave),!r.leave&&r.initial&&(m=r.initial)),!m){f();return}await c(m),f()},stop:l}}const co=typeof window<"u",V3=()=>co&&window.onpointerdown===null,K3=()=>co&&window.ontouchstart===null,U3=()=>co&&window.onmousedown===null;function z3({target:e,state:t,variants:s,apply:a}){const l=k(s),r=H(!1),o=H(!1),i=H(!1),c=E(()=>{let p=[];return l&&(l.hovered&&(p=[...p,...Object.keys(l.hovered)]),l.tapped&&(p=[...p,...Object.keys(l.tapped)]),l.focused&&(p=[...p,...Object.keys(l.focused)])),p}),u=E(()=>{const p={};Object.assign(p,t.value),r.value&&l.hovered&&Object.assign(p,l.hovered),o.value&&l.tapped&&Object.assign(p,l.tapped),i.value&&l.focused&&Object.assign(p,l.focused);for(const f in p)c.value.includes(f)||delete p[f];return p});l.hovered&&(ce(e,"mouseenter",()=>r.value=!0),ce(e,"mouseleave",()=>{r.value=!1,o.value=!1}),ce(e,"mouseout",()=>{r.value=!1,o.value=!1})),l.tapped&&(U3()&&(ce(e,"mousedown",()=>o.value=!0),ce(e,"mouseup",()=>o.value=!1)),V3()&&(ce(e,"pointerdown",()=>o.value=!0),ce(e,"pointerup",()=>o.value=!1)),K3()&&(ce(e,"touchstart",()=>o.value=!0),ce(e,"touchend",()=>o.value=!1))),l.focused&&(ce(e,"focus",()=>i.value=!0),ce(e,"blur",()=>i.value=!1)),pe(u,a)}function W3({set:e,target:t,apply:s,variants:a,variant:l}){const r=k(a);pe(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function J3({state:e,apply:t}){pe(e,s=>{s&&t(s)},{immediate:!0})}function Y3({target:e,variants:t,variant:s}){const a=k(t);a&&(a.visible||a.visibleOnce)&&Bg(e,([{isIntersecting:l}])=>{a.visible?l?s.value="visible":s.value="initial":a.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function Z3(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&W3(e),t.syncVariants&&J3(e),t.visibilityHooks&&Y3(e),t.eventListeners&&z3(e)}function td(e={}){const t=Fe({...e}),s=H({});return pe(t,()=>{const a={};for(const[l,r]of Object.entries(t)){const o=io(l),i=ed(r,o);a[l]=i}s.value=a},{immediate:!0,deep:!0}),{state:t,style:s}}function uo(e,t){pe(()=>Dt(e),s=>{!s||t(s)},{immediate:!0})}const G3={x:"translateX",y:"translateY",z:"translateZ"};function nd(e={},t=!0){const s=Fe({...e}),a=H("");return pe(s,l=>{let r="",o=!1;t&&(l.x||l.y||l.z)&&(r+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(oe.transform).join(",")}) `,o=!0);for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const u=io(i),p=ed(c,u);r+=`${G3[i]||i}(${p}) `}t&&!o&&(r+="translateZ(0px) "),a.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:a}}const Q3=["","X","Y","Z"],X3=["perspective","translate","scale","rotate","skew"],sd=["transformPerspective","x","y","z"];X3.forEach(e=>{Q3.forEach(t=>{const s=e+t;sd.push(s)})});const eA=new Set(sd);function po(e){return eA.has(e)}const tA=new Set(["originX","originY","originZ"]);function ad(e){return tA.has(e)}function nA(e){const t={},s={};return Object.entries(e).forEach(([a,l])=>{po(a)||ad(a)?t[a]=l:s[a]=l}),{transform:t,style:s}}function ld(e){const{transform:t,style:s}=nA(e),{transform:a}=nd(t),{style:l}=td(s);return a.value&&(l.value.transform=a.value),l.value}function sA(e,t){let s,a;const{state:l,style:r}=td();return uo(e,o=>{a=o;for(const i of Object.keys(Xp))o.style[i]===null||o.style[i]===""||po(i)||ad(i)||(l[i]=o.style[i]);s&&Object.entries(s).forEach(([i,c])=>o.style[i]=c),t&&t(l)}),pe(r,o=>{if(!a){s=o;return}for(const i in o)a.style[i]=o[i]},{immediate:!0}),{style:l}}function aA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return t.reduce((a,l)=>{if(!l)return a;const[r,o]=l.split("("),c=o.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...a,[r]:u}},{})}function lA(e,t){Object.entries(aA(t)).forEach(([s,a])=>{const l=["x","y","z"];if(s==="translate3d"){if(a===0){l.forEach(r=>e[r]=0);return}a.forEach((r,o)=>e[l[o]]=r);return}if(a=parseFloat(a),s==="translateX"){e.x=a;return}if(s==="translateY"){e.y=a;return}if(s==="translateZ"){e.z=a;return}e[s]=a})}function rA(e,t){let s,a;const{state:l,transform:r}=nd();return uo(e,o=>{a=o,o.style.transform&&lA(l,o.style.transform),s&&(o.style.transform=s),t&&t(l)}),pe(r,o=>{if(!a){s=o;return}a.style.transform=o},{immediate:!0}),{transform:l}}function oA(e,t){const s=Fe({}),a=o=>Object.entries(o).forEach(([i,c])=>s[i]=c),{style:l}=sA(e,a),{transform:r}=rA(e,a);return pe(s,o=>{Object.entries(o).forEach(([i,c])=>{const u=po(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),uo(e,()=>t&&a(t)),{motionProperties:s,style:l,transform:r}}function iA(e={}){const t=k(e),s=H();return{state:E(()=>{if(!!s.value)return t[s.value]}),variant:s}}function rd(e,t={},s){const{motionProperties:a}=oA(e),{variant:l,state:r}=iA(t),o=H3(a,t),i={target:e,variant:l,variants:t,state:r,motionProperties:a,...o};return Z3(i,s),i}const cA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],uA=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Jl(s.variants)&&(t.value={...t.value,...s.variants}),cA.forEach(a=>{if(a==="delay"){if(s&&s[a]&&dh(s[a])){const l=s[a];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),s&&s[a]&&Jl(s[a])&&(t.value[a]=s[a])}))},Sl=e=>({created:(a,l,r)=>{const o=l.value&&typeof l.value=="string"?l.value:r.key;o&&Cl[o]&&Cl[o].stop();const i=H(e||{});typeof l.value=="object"&&(i.value=l.value),uA(r,i);const c=rd(a,i);a.motionInstance=c,o&&(Cl[o]=c)},unmounted:a=>{a.motionInstance&&a.motionInstance.stop()},getSSRProps(a,l){let{initial:r}=a.value||l&&(l==null?void 0:l.props)||{};r=k(r);const o=p5((e==null?void 0:e.initial)||{},r||{});return!o||Object.keys(o).length===0?void 0:{style:ld(o)}}}),pA={initial:{opacity:0},enter:{opacity:1}},dA={initial:{opacity:0},visible:{opacity:1}},fA={initial:{opacity:0},visibleOnce:{opacity:1}},mA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},hA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},gA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},yA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},vA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},_A={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},bA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},kA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},xA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},AA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},wA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},BA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},CA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},EA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},OA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},SA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},DA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},PA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},$A={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},MA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},FA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},TA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},jA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},IA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},RA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},LA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},NA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},vr={__proto__:null,fade:pA,fadeVisible:dA,fadeVisibleOnce:fA,pop:mA,popVisible:hA,popVisibleOnce:gA,rollBottom:CA,rollLeft:yA,rollRight:bA,rollTop:AA,rollVisibleBottom:EA,rollVisibleLeft:vA,rollVisibleRight:kA,rollVisibleTop:wA,rollVisibleOnceBottom:OA,rollVisibleOnceLeft:_A,rollVisibleOnceRight:xA,rollVisibleOnceTop:BA,slideBottom:RA,slideLeft:SA,slideRight:$A,slideTop:TA,slideVisibleBottom:LA,slideVisibleLeft:DA,slideVisibleRight:MA,slideVisibleTop:jA,slideVisibleOnceBottom:NA,slideVisibleOnceLeft:PA,slideVisibleOnceRight:FA,slideVisibleOnceTop:IA},qA=Ce({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=rm(),s=Fe({});if(!e.is&&!t.default)return()=>gt("div",{});const a=E(()=>{let c;return e.preset&&(c=vr[e.preset]),c}),l=E(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=E(()=>{const c={...l.value,...a.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),o=E(()=>{if(!e.is)return;let c=e.is;return typeof o.value=="string"&&!yd(c)&&(c=Ea(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var f,m,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(m=u.variants)!=null&&m.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Ir(()=>Object.entries(s).forEach(([u,p])=>c(p)))}return{slots:t,component:o,motionConfig:r,instances:s}},render({slots:e,motionConfig:t,instances:s,component:a}){var i;const l=ld(t.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:p})=>{const f=rd(p,t);s[u]=f},c);if(a){const c=gt(a,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>r(c,u))}});function HA(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(a,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const VA={install(e,t){if(e.directive("motion",Sl()),e.component("Motion",qA),!t||t&&!t.excludePresets)for(const s in vr){const a=vr[s];e.directive(`motion-${HA(s)}`,Sl(a))}if(t&&t.directives)for(const s in t.directives){const a=t.directives[s];a.initial,e.directive(`motion-${s}`,Sl(a))}}};var fc;const Rs=typeof window<"u",KA=Object.prototype.toString,UA=e=>KA.call(e)==="[object Object]";Rs&&((fc=window==null?void 0:window.navigator)==null?void 0:fc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function zA(e){return Fc()?(Tc(e),!0):!1}function WA(e){var t;const s=k(e);return(t=s==null?void 0:s.$el)!=null?t:s}const JA=Rs?window:void 0,_r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},br="__vueuse_ssr_handlers__";_r[br]=_r[br]||{};_r[br];function YA(e,t={}){const{immediate:s=!0,window:a=JA}=t,l=H(!1);let r=null;function o(){!l.value||!a||(e(),r=a.requestAnimationFrame(o))}function i(){!l.value&&a&&(l.value=!0,o())}function c(){l.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return s&&i(),zA(c),{isActive:l,pause:c,resume:i}}var mc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mc||(mc={}));const fo="vue-starport-injection",od="vue-starport-options",ZA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},id={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var GA=Object.defineProperty,La=Object.getOwnPropertySymbols,cd=Object.prototype.hasOwnProperty,ud=Object.prototype.propertyIsEnumerable,hc=(e,t,s)=>t in e?GA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,QA=(e,t)=>{for(var s in t||(t={}))cd.call(t,s)&&hc(e,s,t[s]);if(La)for(var s of La(t))ud.call(t,s)&&hc(e,s,t[s]);return e},gc=(e,t)=>{var s={};for(var a in e)cd.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&La)for(var a of La(e))t.indexOf(a)<0&&ud.call(e,a)&&(s[a]=e[a]);return s};const XA=Ce({name:"StarportProxy",props:QA({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},id),setup(e,t){const s=V(fo),a=E(()=>s.getInstance(e.port,e.component)),l=H(),r=a.value.generateId(),o=H(!1);return a.value.isVisible||(a.value.land(),o.value=!0),ds(async()=>{a.value.el||(a.value.el=l.value,await Ge(),o.value=!0,a.value.rect.update())}),Ga(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,o.value=!1,!a.value.options.keepAlive&&(await Ge(),await Ge(),!a.value.el&&s.dispose(a.value.port))}),pe(()=>e,async()=>{a.value.props&&await Ge();const i=e,{props:c}=i,u=gc(i,["props"]);a.value.props=c||{},a.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=gc(i,["initialProps","mountedProps"]),f=Me(p,(o.value?u:c)||{});return gt("div",Me(f,{id:r,ref:l,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),t.slots.default?gt(t.slots.default):void 0)}}});var ew=Object.defineProperty,tw=Object.defineProperties,nw=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,sw=Object.prototype.hasOwnProperty,aw=Object.prototype.propertyIsEnumerable,vc=(e,t,s)=>t in e?ew(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,lw=(e,t)=>{for(var s in t||(t={}))sw.call(t,s)&&vc(e,s,t[s]);if(yc)for(var s of yc(t))aw.call(t,s)&&vc(e,s,t[s]);return e},rw=(e,t)=>tw(e,nw(t));const ow=Ce({name:"Starport",inheritAttrs:!0,props:id,setup(e,t){const s=H(!1);return ds(()=>{s.value=!0}),()=>{var o,i;const a=(i=(o=t.slots).default)==null?void 0:i.call(o);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const l=a[0];let r=l.type;return(!UA(r)||ls(r))&&(r={render(){return a}}),gt(XA,rw(lw({},e),{key:e.port,component:za(r),props:l.props}))}}});function iw(e){const t=Fe({height:0,width:0,left:0,top:0,update:a,listen:r,pause:o,margin:"0px",padding:"0px"}),s=Rs?document.documentElement||document.body:void 0;function a(){if(!Rs)return;const i=WA(e);if(!i)return;const{height:c,width:u,left:p,top:f}=i.getBoundingClientRect(),m=window.getComputedStyle(i),h=m.margin,g=m.padding;Object.assign(t,{height:c,width:u,left:p,top:s.scrollTop+f,margin:h,padding:g})}const l=YA(a,{immediate:!1});function r(){!Rs||(a(),l.resume())}function o(){l.pause()}return t}let cw=(e,t=21)=>(s=t)=>{let a="",l=s;for(;l--;)a+=e[Math.random()*e.length|0];return a};const _c=cw("abcdefghijklmnopqrstuvwxyz",5);function bc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function uw(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var pw=Object.defineProperty,kc=Object.getOwnPropertySymbols,dw=Object.prototype.hasOwnProperty,fw=Object.prototype.propertyIsEnumerable,xc=(e,t,s)=>t in e?pw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Dl=(e,t)=>{for(var s in t||(t={}))dw.call(t,s)&&xc(e,s,t[s]);if(kc)for(var s of kc(t))fw.call(t,s)&&xc(e,s,t[s]);return e};function mw(e,t,s={}){const a=uw(t),l=bc(a)||_c(),r=H(),o=H(null),i=H(!1),c=H(!1),u=Bd(!0),p=H({}),f=E(()=>Dl(Dl(Dl({},ZA),s),p.value)),m=H(0);let h;u.run(()=>{h=iw(r),pe(r,async C=>{C&&(c.value=!0),await Ge(),r.value||(c.value=!1)})});const g=bc(e);function b(){return`starport-${l}-${g}-${_c()}`}const _=b();return Fe({el:r,id:_,port:e,props:o,rect:h,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:m,component:t,componentName:a,componentId:l,generateId:b,setLocalOptions(C={}){p.value=JSON.parse(JSON.stringify(C))},elRef(){return r},liftOff(){!i.value||(i.value=!1,m.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function hw(e){const t=Fe(new Map);function s(l,r){let o=t.get(l);return o||(o=mw(l,r,e),t.set(l,o)),o.component=r,o}function a(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:a,getInstance:s}}var gw=Object.defineProperty,yw=Object.defineProperties,vw=Object.getOwnPropertyDescriptors,Ac=Object.getOwnPropertySymbols,_w=Object.prototype.hasOwnProperty,bw=Object.prototype.propertyIsEnumerable,wc=(e,t,s)=>t in e?gw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,kw=(e,t)=>{for(var s in t||(t={}))_w.call(t,s)&&wc(e,s,t[s]);if(Ac)for(var s of Ac(t))bw.call(t,s)&&wc(e,s,t[s]);return e},xw=(e,t)=>yw(e,vw(t));const Aw=Ce({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=V(fo);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=E(()=>t.getInstance(e.port,e.component)),a=E(()=>{var o;return((o=s.value.el)==null?void 0:o.id)||s.value.id}),l=E(()=>{const o=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-o),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?xw(kw({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={};return()=>{const o=!!(s.value.isLanded&&s.value.el);return gt("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},gt(Zf,{to:o?`#${a.value}`:"body",disabled:!o},gt(s.value.component,Me(r,s.value.props))))}}}),ww=Ce({name:"StarportCarrier",setup(e,{slots:t}){const s=hw(V(od,{}));return hn().appContext.app.provide(fo,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:o}])=>gt(Aw,{key:r,port:r,component:o}))]}}});function Bw(e={}){return{install(t){t.provide(od,e),t.component("Starport",ow),t.component("StarportCarrier",ww)}}}function Cw(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(VA),e.app.use(Bw({keepAlive:!0}))}function pt(e,t,s){var a,l;return(l=((a=e.instance)==null?void 0:a.$).provides[t])!=null?l:s}function Ew(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var p,f,m,h;if(Fs.value||((p=pt(s,Ds))==null?void 0:p.value))return;const a=pt(s,Bn),l=pt(s,Ss),r=pt(s,zl),o=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=a==null?void 0:a.value)==null?void 0:f.length)||0,u=i?Zm:dl;if(a&&!((m=a==null?void 0:a.value)!=null&&m.includes(t))&&a.value.push(t),s.value===null&&(s.value=a==null?void 0:a.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(t))){const g=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(g))}t==null||t.classList.toggle(xn,!0),l&&pe(l,()=>{var C;const g=(C=l==null?void 0:l.value)!=null?C:0,b=s.value!=null?g>=s.value:g>c;t.classList.contains(fl)||t.classList.toggle(u,!b),o!==!1&&o!==void 0&&t.classList.toggle(u,b),t.classList.toggle(_s,!1);const _=r==null?void 0:r.value.get(g);_==null||_.forEach((B,A)=>{B.classList.toggle(fa,!1),A===_.length-1?B.classList.toggle(_s,!0):B.classList.toggle(fa,!0)}),t.classList.contains(_s)||t.classList.toggle(fa,b)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(xn,!1);const a=pt(s,Bn);a!=null&&a.value&&Wl(a.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var i,c;if(Fs.value||((i=pt(s,Ds))==null?void 0:i.value))return;const a=pt(s,Bn),l=pt(s,Ss),r=pt(s,zl),o=a==null?void 0:a.value.length;s.value===void 0&&(s.value=a==null?void 0:a.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(xn,!0),l&&pe(l,()=>{var p,f,m;const u=((p=l.value)!=null?p:0)>=((m=(f=s.value)!=null?f:o)!=null?m:0);t.classList.contains(fl)||t.classList.toggle(dl,!u),t.classList.toggle(_s,!1),t.classList.contains(_s)||t.classList.toggle(fa,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(xn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var o,i,c;if(Fs.value||((o=pt(s,Ds))==null?void 0:o.value))return;const a=pt(s,Bn),l=pt(s,Ss),r=((i=a==null?void 0:a.value)==null?void 0:i.length)||0;a&&!((c=a==null?void 0:a.value)!=null&&c.includes(t))&&a.value.push(t),t==null||t.classList.toggle(xn,!0),l&&pe(l,()=>{var f;const u=(f=l==null?void 0:l.value)!=null?f:0,p=s.value!=null?u>=s.value:u>r;t.classList.toggle(dl,p),t.classList.toggle(fl,p)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(xn,!1);const a=pt(s,Bn);a!=null&&a.value&&Wl(a.value,t)}})}}}function Ow(e,t){const s=dp(e),a=fp(t,s.currentRoute,s.currentPage);return{nav:{...s,...a,downloadPDF:ir,next:pn,nextSlide:Ys,openInEditor:o5,prev:dn,prevSlide:Zs},configs:ke,themeConfigs:E(()=>ke.themeConfig)}}function Sw(){return{install(e){const t=Ow(tn,Mt);e.provide(G,Fe(t))}}}const hs=$m(c5);hs.use(vt);hs.use(Um());hs.use(Ew());hs.use(Sw());Cw({app:hs,router:vt});hs.mount("#app");export{ws as $,de as A,Ae as B,st as C,Vv as D,Dw as E,Be as F,Pw as G,Mt as H,ja as I,n5 as J,kl as K,ml as L,zs as M,_l as N,Du as O,z_ as P,Wr as Q,V_ as R,Jr as S,Ue as T,_p as U,Qv as V,cp as W,Rt as X,$w as Y,Tt as Z,rp as _,n as a,ma as a0,ea as a1,Sn as a2,Kt as a3,ar as a4,bv as a5,kv as a6,xv as a7,wv as a8,Ve as a9,Bu as aa,jw as ab,lt as ac,$1 as ad,Ou as ae,Bv as af,Ga as ag,Nv as ah,E as b,I as c,Ce as d,G as e,mt as f,Y as g,k as h,V as i,Mv as j,r5 as k,ke as l,Wm as m,Re as n,x as o,ds as p,Fe as q,H as r,Mw as s,jn as t,Fw as u,Tw as v,pe as w,j as x,et as y,z};

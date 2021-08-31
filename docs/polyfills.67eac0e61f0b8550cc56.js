"use strict";(self.webpackChunktsl_td_generator=self.webpackChunktsl_td_generator||[]).push([[429],{277:()=>{!function(e){const n=e.performance;function i(L){n&&n.mark&&n.mark(L)}function r(L,p){n&&n.measure&&n.measure(L,p)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function u(L){return c+L}const f=!0===e[u("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let _=(()=>{class L{constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new T(this,this._parent&&this._parent._zoneDelegate,o)}static assertZonePatched(){if(e.Promise!==ee.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=L.current;for(;t.parent;)t=t.parent;return t}static get current(){return V.zone}static get currentTask(){return se}static __load_patch(t,o,y=!1){if(ee.hasOwnProperty(t)){if(!y&&f)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const P="Zone:"+t;i(P),ee[t]=o(e,L,he),r(P,P)}}get parent(){return this._parent}get name(){return this._name}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const y=this._zoneDelegate.intercept(this,t,o),P=this;return function(){return P.runGuarded(y,this,arguments,o)}}run(t,o,y,P){V={parent:V,zone:this};try{return this._zoneDelegate.invoke(this,t,o,y,P)}finally{V=V.parent}}runGuarded(t,o=null,y,P){V={parent:V,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,y,P)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{V=V.parent}}runTask(t,o,y){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||z).name+"; Execution: "+this.name+")");if(t.state===j&&(t.type===R||t.type===A))return;const P=t.state!=X;P&&t._transitionTo(X,O),t.runCount++;const Q=se;se=t,V={parent:V,zone:this};try{t.type==A&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,y)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==j&&t.state!==Y&&(t.type==R||t.data&&t.data.isPeriodic?P&&t._transitionTo(O,X):(t.runCount=0,this._updateTaskCount(t,-1),P&&t._transitionTo(j,X,j))),V=V.parent,se=Q}}scheduleTask(t){if(t.zone&&t.zone!==this){let y=this;for(;y;){if(y===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);y=y.parent}}t._transitionTo(q,j);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(y){throw t._transitionTo(Y,q,j),this._zoneDelegate.handleError(this,y),y}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==q&&t._transitionTo(O,q),t}scheduleMicroTask(t,o,y,P){return this.scheduleTask(new m(v,t,o,y,P,void 0))}scheduleMacroTask(t,o,y,P,Q){return this.scheduleTask(new m(A,t,o,y,P,Q))}scheduleEventTask(t,o,y,P,Q){return this.scheduleTask(new m(R,t,o,y,P,Q))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||z).name+"; Execution: "+this.name+")");t._transitionTo(H,O,X);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(Y,H),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(j,H),t.runCount=0,t}_updateTaskCount(t,o){const y=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let P=0;P<y.length;P++)y[P]._updateTaskCount(t.type,o)}}return L.__symbol__=u,L})();const g={name:"",onHasTask:(L,p,t,o)=>L.hasTask(t,o),onScheduleTask:(L,p,t,o)=>L.scheduleTask(t,o),onInvokeTask:(L,p,t,o,y,P)=>L.invokeTask(t,o,y,P),onCancelTask:(L,p,t,o)=>L.cancelTask(t,o)};class T{constructor(p,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=p,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const y=o&&o.onHasTask;(y||t&&t._hasTaskZS)&&(this._hasTaskZS=y?o:g,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=p,o.onScheduleTask||(this._scheduleTaskZS=g,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=g,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=g,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(p,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,p,t):new _(p,t)}intercept(p,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,p,t,o):t}invoke(p,t,o,y,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,p,t,o,y,P):t.apply(o,y)}handleError(p,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,p,t)}scheduleTask(p,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,p,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=v)throw new Error("Task is missing scheduleFn.");d(t)}return o}invokeTask(p,t,o,y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,p,t,o,y):t.callback.apply(o,y)}cancelTask(p,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,p,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(p,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,p,t)}catch(o){this.handleError(p,o)}}_updateTaskCount(p,t){const o=this._taskCounts,y=o[p],P=o[p]=y+t;if(P<0)throw new Error("More tasks executed then were scheduled.");0!=y&&0!=P||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:p})}}class m{constructor(p,t,o,y,P,Q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=p,this.source=t,this.data=y,this.scheduleFn=P,this.cancelFn=Q,!o)throw new Error("callback is not defined");this.callback=o;const l=this;this.invoke=p===R&&y&&y.useG?m.invokeTask:function(){return m.invokeTask.call(e,l,this,arguments)}}static invokeTask(p,t,o){p||(p=this),ae++;try{return p.runCount++,p.zone.runTask(p,t,o)}finally{1==ae&&M(),ae--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(j,q)}_transitionTo(p,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${p}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=p,p==j&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const Z=u("setTimeout"),D=u("Promise"),I=u("then");let E,B=[],G=!1;function d(L){if(0===ae&&0===B.length)if(E||e[D]&&(E=e[D].resolve(0)),E){let p=E[I];p||(p=E.then),p.call(E,M)}else e[Z](M,0);L&&B.push(L)}function M(){if(!G){for(G=!0;B.length;){const L=B;B=[];for(let p=0;p<L.length;p++){const t=L[p];try{t.zone.runTask(t,null,null)}catch(o){he.onUnhandledError(o)}}}he.microtaskDrainDone(),G=!1}}const z={name:"NO ZONE"},j="notScheduled",q="scheduling",O="scheduled",X="running",H="canceling",Y="unknown",v="microTask",A="macroTask",R="eventTask",ee={},he={symbol:u,currentZoneFrame:()=>V,onUnhandledError:F,microtaskDrainDone:F,scheduleMicroTask:d,showUncaughtError:()=>!_[u("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:F,patchMethod:()=>F,bindArguments:()=>[],patchThen:()=>F,patchMacroTask:()=>F,patchEventPrototype:()=>F,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>F,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>F,wrapWithCurrentZone:()=>F,filterProperties:()=>[],attachOriginToPatched:()=>F,_redefineProperty:()=>F,patchCallbacks:()=>F};let V={parent:null,zone:new _(null,null)},se=null,ae=0;function F(){}r("Zone","Zone"),e.Zone=_}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const de=Object.getOwnPropertyDescriptor,Te=Object.defineProperty,pe=Object.getPrototypeOf,Ae=Object.create,He=Array.prototype.slice,Ce="addEventListener",Ne="removeEventListener",me=Zone.__symbol__(Ce),ye=Zone.__symbol__(Ne),oe="true",ie="false",ge=Zone.__symbol__("");function $(e,n){return Zone.current.wrap(e,n)}function ne(e,n,i,r,c){return Zone.current.scheduleMacroTask(e,n,i,r,c)}const S=Zone.__symbol__,J="undefined"!=typeof window,ke=J?window:void 0,K=J&&ke||"object"==typeof self&&self||global,ht=[null];function je(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=$(e[i],n+"_"+i));return e}function Ue(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const We="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Oe=!("nw"in K)&&void 0!==K.process&&"[object process]"==={}.toString.call(K.process),xe=!Oe&&!We&&!(!J||!ke.HTMLElement),qe=void 0!==K.process&&"[object process]"==={}.toString.call(K.process)&&!We&&!(!J||!ke.HTMLElement),Ie={},Xe=function(e){if(!(e=e||K.event))return;let n=Ie[e.type];n||(n=Ie[e.type]=S("ON_PROPERTY"+e.type));const i=this||e.target||K,r=i[n];let c;if(xe&&i===ke&&"error"===e.type){const u=e;c=r&&r.call(this,u.message,u.filename,u.lineno,u.colno,u.error),!0===c&&e.preventDefault()}else c=r&&r.apply(this,arguments),null!=c&&!c&&e.preventDefault();return c};function Ye(e,n,i){let r=de(e,n);if(!r&&i&&de(i,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const c=S("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete r.writable,delete r.value;const u=r.get,f=r.set,_=n.substr(2);let g=Ie[_];g||(g=Ie[_]=S("ON_PROPERTY"+_)),r.set=function(T){let m=this;!m&&e===K&&(m=K),m&&(m[g]&&m.removeEventListener(_,Xe),f&&f.apply(m,ht),"function"==typeof T?(m[g]=T,m.addEventListener(_,Xe,!1)):m[g]=null)},r.get=function(){let T=this;if(!T&&e===K&&(T=K),!T)return null;const m=T[g];if(m)return m;if(u){let Z=u&&u.call(this);if(Z)return r.set.call(this,Z),"function"==typeof T.removeAttribute&&T.removeAttribute(n),Z}return null},Te(e,n,r),e[c]=!0}function $e(e,n,i){if(n)for(let r=0;r<n.length;r++)Ye(e,"on"+n[r],i);else{const r=[];for(const c in e)"on"==c.substr(0,2)&&r.push(c);for(let c=0;c<r.length;c++)Ye(e,r[c],i)}}const ce=S("originalInstance");function Se(e){const n=K[e];if(!n)return;K[S(e)]=n,K[e]=function(){const c=je(arguments,e);switch(c.length){case 0:this[ce]=new n;break;case 1:this[ce]=new n(c[0]);break;case 2:this[ce]=new n(c[0],c[1]);break;case 3:this[ce]=new n(c[0],c[1],c[2]);break;case 4:this[ce]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},fe(K[e],n);const i=new n(function(){});let r;for(r in i)"XMLHttpRequest"===e&&"responseBlob"===r||function(c){"function"==typeof i[c]?K[e].prototype[c]=function(){return this[ce][c].apply(this[ce],arguments)}:Te(K[e].prototype,c,{set:function(u){"function"==typeof u?(this[ce][c]=$(u,e+"."+c),fe(this[ce][c],u)):this[ce][c]=u},get:function(){return this[ce][c]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(K[e][r]=n[r])}function ue(e,n,i){let r=e;for(;r&&!r.hasOwnProperty(n);)r=pe(r);!r&&e[n]&&(r=e);const c=S(n);let u=null;if(r&&(!(u=r[c])||!r.hasOwnProperty(c))&&(u=r[c]=r[n],Ue(r&&de(r,n)))){const _=i(u,c,n);r[n]=function(){return _(this,arguments)},fe(r[n],u)}return u}function _t(e,n,i){let r=null;function c(u){const f=u.data;return f.args[f.cbIdx]=function(){u.invoke.apply(this,arguments)},r.apply(f.target,f.args),u}r=ue(e,n,u=>function(f,_){const g=i(f,_);return g.cbIdx>=0&&"function"==typeof _[g.cbIdx]?ne(g.name,_[g.cbIdx],g,c):u.apply(f,_)})}function fe(e,n){e[S("OriginalDelegate")]=n}let Ke=!1,Ge=!1;function mt(){if(Ke)return Ge;Ke=!0;try{const e=ke.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ge=!0)}catch(e){}return Ge}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const r=Object.getOwnPropertyDescriptor,c=Object.defineProperty,f=i.symbol,_=[],g=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=f("Promise"),m=f("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const s=l&&l.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;_.length;){const l=_.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(s){I(s)}}};const D=f("unhandledPromiseRejectionHandler");function I(l){i.onUnhandledError(l);try{const s=n[D];"function"==typeof s&&s.call(this,l)}catch(s){}}function B(l){return l&&l.then}function G(l){return l}function E(l){return t.reject(l)}const d=f("state"),M=f("value"),z=f("finally"),j=f("parentPromiseValue"),q=f("parentPromiseState"),X=null,H=!0,Y=!1;function A(l,s){return a=>{try{V(l,s,a)}catch(h){V(l,!1,h)}}}const he=f("currentTaskTrace");function V(l,s,a){const h=function(){let l=!1;return function(a){return function(){l||(l=!0,a.apply(null,arguments))}}}();if(l===a)throw new TypeError("Promise resolved with itself");if(l[d]===X){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(C){return h(()=>{V(l,!1,C)})(),l}if(s!==Y&&a instanceof t&&a.hasOwnProperty(d)&&a.hasOwnProperty(M)&&a[d]!==X)ae(a),V(l,a[d],a[M]);else if(s!==Y&&"function"==typeof w)try{w.call(a,h(A(l,s)),h(A(l,!1)))}catch(C){h(()=>{V(l,!1,C)})()}else{l[d]=s;const C=l[M];if(l[M]=a,l[z]===z&&s===H&&(l[d]=l[q],l[M]=l[j]),s===Y&&a instanceof Error){const k=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;k&&c(a,he,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<C.length;)F(l,C[k++],C[k++],C[k++],C[k++]);if(0==C.length&&s==Y){l[d]=0;let k=a;try{throw new Error("Uncaught (in promise): "+function(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(b){k=b}g&&(k.throwOriginal=!0),k.rejection=a,k.promise=l,k.zone=n.current,k.task=n.currentTask,_.push(k),i.scheduleMicroTask()}}}return l}const se=f("rejectionHandledHandler");function ae(l){if(0===l[d]){try{const s=n[se];s&&"function"==typeof s&&s.call(this,{rejection:l[M],promise:l})}catch(s){}l[d]=Y;for(let s=0;s<_.length;s++)l===_[s].promise&&_.splice(s,1)}}function F(l,s,a,h,w){ae(l);const C=l[d],k=C?"function"==typeof h?h:G:"function"==typeof w?w:E;s.scheduleMicroTask("Promise.then",()=>{try{const b=l[M],N=!!a&&z===a[z];N&&(a[j]=b,a[q]=C);const x=s.run(k,void 0,N&&k!==E&&k!==G?[]:[b]);V(a,!0,x)}catch(b){V(a,!1,b)}},a)}const p=function(){};class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return V(new this(null),H,s)}static reject(s){return V(new this(null),Y,s)}static race(s){let a,h,w=new this((b,N)=>{a=b,h=N});function C(b){a(b)}function k(b){h(b)}for(let b of s)B(b)||(b=this.resolve(b)),b.then(C,k);return w}static all(s){return t.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof t?this:t).allWithCallback(s,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(s,a){let h,w,C=new this((x,U)=>{h=x,w=U}),k=2,b=0;const N=[];for(let x of s){B(x)||(x=this.resolve(x));const U=b;try{x.then(te=>{N[U]=a?a.thenCallback(te):te,k--,0===k&&h(N)},te=>{a?(N[U]=a.errorCallback(te),k--,0===k&&h(N)):w(te)})}catch(te){w(te)}k++,b++}return k-=2,0===k&&h(N),C}constructor(s){const a=this;if(!(a instanceof t))throw new Error("Must be an instanceof Promise.");a[d]=X,a[M]=[];try{s&&s(A(a,H),A(a,Y))}catch(h){V(a,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(s,a){let h=this.constructor[Symbol.species];(!h||"function"!=typeof h)&&(h=this.constructor||t);const w=new h(p),C=n.current;return this[d]==X?this[M].push(C,w,s,a):F(this,C,w,s,a),w}catch(s){return this.then(null,s)}finally(s){let a=this.constructor[Symbol.species];(!a||"function"!=typeof a)&&(a=t);const h=new a(p);h[z]=z;const w=n.current;return this[d]==X?this[M].push(w,h,s,s):F(this,w,h,s,s),h}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[T]=e.Promise;e.Promise=t;const y=f("thenPatched");function P(l){const s=l.prototype,a=r(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const h=s.then;s[m]=h,l.prototype.then=function(w,C){return new t((b,N)=>{h.call(this,b,N)}).then(w,C)},l[y]=!0}return i.patchThen=P,o&&(P(o),ue(e,"fetch",l=>function(l){return function(s,a){let h=l.apply(s,a);if(h instanceof t)return h;let w=h.constructor;return w[y]||P(w),h}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=_,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=S("OriginalDelegate"),r=S("Promise"),c=S("Error"),u=function(){if("function"==typeof this){const T=this[i];if(T)return"function"==typeof T?n.call(T):Object.prototype.toString.call(T);if(this===Promise){const m=e[r];if(m)return n.call(m)}if(this===Error){const m=e[c];if(m)return n.call(m)}}return n.call(this)};u[i]=n,Function.prototype.toString=u;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let ve=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){ve=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){ve=!1}const Et={useG:!0},re={},Je={},Qe=new RegExp("^"+ge+"(\\w+)(true|false)$"),Ve=S("propagationStopped");function et(e,n){const i=(n?n(e):e)+ie,r=(n?n(e):e)+oe,c=ge+i,u=ge+r;re[e]={},re[e][ie]=c,re[e][oe]=u}function Tt(e,n,i){const r=i&&i.add||Ce,c=i&&i.rm||Ne,u=i&&i.listeners||"eventListeners",f=i&&i.rmAll||"removeAllListeners",_=S(r),g="."+r+":",Z=function(E,d,M){if(E.isRemoved)return;const z=E.callback;"object"==typeof z&&z.handleEvent&&(E.callback=q=>z.handleEvent(q),E.originalDelegate=z),E.invoke(E,d,[M]);const j=E.options;j&&"object"==typeof j&&j.once&&d[c].call(d,M.type,E.originalDelegate?E.originalDelegate:E.callback,j)},D=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,M=d[re[E.type][ie]];if(M)if(1===M.length)Z(M[0],d,E);else{const z=M.slice();for(let j=0;j<z.length&&(!E||!0!==E[Ve]);j++)Z(z[j],d,E)}},I=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,M=d[re[E.type][oe]];if(M)if(1===M.length)Z(M[0],d,E);else{const z=M.slice();for(let j=0;j<z.length&&(!E||!0!==E[Ve]);j++)Z(z[j],d,E)}};function B(E,d){if(!E)return!1;let M=!0;d&&void 0!==d.useG&&(M=d.useG);const z=d&&d.vh;let j=!0;d&&void 0!==d.chkDup&&(j=d.chkDup);let q=!1;d&&void 0!==d.rt&&(q=d.rt);let O=E;for(;O&&!O.hasOwnProperty(r);)O=pe(O);if(!O&&E[r]&&(O=E),!O||O[_])return!1;const X=d&&d.eventNameToString,H={},Y=O[_]=O[r],v=O[S(c)]=O[c],A=O[S(u)]=O[u],R=O[S(f)]=O[f];let ee;function he(s,a){return!ve&&"object"==typeof s&&s?!!s.capture:ve&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}d&&d.prepend&&(ee=O[S(d.prepend)]=O[d.prepend]);const p=M?function(s){if(!H.isExisting)return Y.call(H.target,H.eventName,H.capture?I:D,H.options)}:function(s){return Y.call(H.target,H.eventName,s.invoke,H.options)},t=M?function(s){if(!s.isRemoved){const a=re[s.eventName];let h;a&&(h=a[s.capture?oe:ie]);const w=h&&s.target[h];if(w)for(let C=0;C<w.length;C++)if(w[C]===s){w.splice(C,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[h]=null);break}}if(s.allRemoved)return v.call(s.target,s.eventName,s.capture?I:D,s.options)}:function(s){return v.call(s.target,s.eventName,s.invoke,s.options)},y=d&&d.diff?d.diff:function(s,a){const h=typeof a;return"function"===h&&s.callback===a||"object"===h&&s.originalDelegate===a},P=Zone[S("UNPATCHED_EVENTS")],Q=e[S("PASSIVE_EVENTS")],l=function(s,a,h,w,C=!1,k=!1){return function(){const b=this||e;let N=arguments[0];d&&d.transferEventName&&(N=d.transferEventName(N));let x=arguments[1];if(!x)return s.apply(this,arguments);if(Oe&&"uncaughtException"===N)return s.apply(this,arguments);let U=!1;if("function"!=typeof x){if(!x.handleEvent)return s.apply(this,arguments);U=!0}if(z&&!z(s,x,b,arguments))return;const te=ve&&!!Q&&-1!==Q.indexOf(N),le=he(arguments[2],te);if(P)for(let Ee=0;Ee<P.length;Ee++)if(N===P[Ee])return te?s.call(b,N,x,le):s.apply(this,arguments);const Be=!!le&&("boolean"==typeof le||le.capture),it=!(!le||"object"!=typeof le)&&le.once,At=Zone.current;let Fe=re[N];Fe||(et(N,X),Fe=re[N]);const ct=Fe[Be?oe:ie];let Me,Re=b[ct],at=!1;if(Re){if(at=!0,j)for(let Ee=0;Ee<Re.length;Ee++)if(y(Re[Ee],x))return}else Re=b[ct]=[];const lt=b.constructor.name,ut=Je[lt];ut&&(Me=ut[N]),Me||(Me=lt+a+(X?X(N):N)),H.options=le,it&&(H.options.once=!1),H.target=b,H.capture=Be,H.eventName=N,H.isExisting=at;const De=M?Et:void 0;De&&(De.taskData=H);const _e=At.scheduleEventTask(Me,x,De,h,w);return H.target=null,De&&(De.taskData=null),it&&(le.once=!0),!ve&&"boolean"==typeof _e.options||(_e.options=le),_e.target=b,_e.capture=Be,_e.eventName=N,U&&(_e.originalDelegate=x),k?Re.unshift(_e):Re.push(_e),C?b:void 0}};return O[r]=l(Y,g,p,t,q),ee&&(O.prependListener=l(ee,".prependListener:",function(s){return ee.call(H.target,H.eventName,s.invoke,H.options)},t,q,!0)),O[c]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=arguments[2],w=!!h&&("boolean"==typeof h||h.capture),C=arguments[1];if(!C)return v.apply(this,arguments);if(z&&!z(v,C,s,arguments))return;const k=re[a];let b;k&&(b=k[w?oe:ie]);const N=b&&s[b];if(N)for(let x=0;x<N.length;x++){const U=N[x];if(y(U,C))return N.splice(x,1),U.isRemoved=!0,0===N.length&&(U.allRemoved=!0,s[b]=null,"string"==typeof a)&&(s[ge+"ON_PROPERTY"+a]=null),U.zone.cancelTask(U),q?s:void 0}return v.apply(this,arguments)},O[u]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=[],w=tt(s,X?X(a):a);for(let C=0;C<w.length;C++){const k=w[C];h.push(k.originalDelegate?k.originalDelegate:k.callback)}return h},O[f]=function(){const s=this||e;let a=arguments[0];if(a){d&&d.transferEventName&&(a=d.transferEventName(a));const h=re[a];if(h){const k=s[h[ie]],b=s[h[oe]];if(k){const N=k.slice();for(let x=0;x<N.length;x++){const U=N[x];this[c].call(this,a,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}if(b){const N=b.slice();for(let x=0;x<N.length;x++){const U=N[x];this[c].call(this,a,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}}}else{const h=Object.keys(s);for(let w=0;w<h.length;w++){const k=Qe.exec(h[w]);let b=k&&k[1];b&&"removeListener"!==b&&this[f].call(this,b)}this[f].call(this,"removeListener")}if(q)return this},fe(O[r],Y),fe(O[c],v),R&&fe(O[f],R),A&&fe(O[u],A),!0}let G=[];for(let E=0;E<n.length;E++)G[E]=B(n[E],i);return G}function tt(e,n){if(!n){const u=[];for(let f in e){const _=Qe.exec(f);let g=_&&_[1];if(g&&(!n||g===n)){const T=e[f];if(T)for(let m=0;m<T.length;m++)u.push(T[m])}}return u}let i=re[n];i||(et(n),i=re[n]);const r=e[i[ie]],c=e[i[oe]];return r?c?r.concat(c):r.slice():c?c.slice():[]}function yt(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",r=>function(c,u){c[Ve]=!0,r&&r.apply(c,u)})}function gt(e,n,i,r,c){const u=Zone.__symbol__(r);if(n[u])return;const f=n[u]=n[r];n[r]=function(_,g,T){return g&&g.prototype&&c.forEach(function(m){const Z=`${i}.${r}::`+m,D=g.prototype;if(D.hasOwnProperty(m)){const I=e.ObjectGetOwnPropertyDescriptor(D,m);I&&I.value?(I.value=e.wrapWithCurrentZone(I.value,Z),e._redefineProperty(g.prototype,m,I)):D[m]&&(D[m]=e.wrapWithCurrentZone(D[m],Z))}else D[m]&&(D[m]=e.wrapWithCurrentZone(D[m],Z))}),f.call(n,_,g,T)},e.attachOriginToPatched(n[r],f)}const ze=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],wt=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],nt=["load"],rt=["blur","error","focus","load","resize","scroll","messageerror"],St=["bounce","finish","start"],ot=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],be=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],Dt=["close","error","open","message"],Zt=["error","message"],we=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],ze,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function st(e,n,i){if(!i||0===i.length)return n;const r=i.filter(u=>u.target===e);if(!r||0===r.length)return n;const c=r[0].ignoreProperties;return n.filter(u=>-1===c.indexOf(u))}function W(e,n,i,r){e&&$e(e,st(e,n,i),r)}Zone.__load_patch("util",(e,n,i)=>{i.patchOnProperties=$e,i.patchMethod=ue,i.bindArguments=je,i.patchMacroTask=_t;const r=n.__symbol__("BLACK_LISTED_EVENTS"),c=n.__symbol__("UNPATCHED_EVENTS");e[c]&&(e[r]=e[c]),e[r]&&(n[r]=n[c]=e[r]),i.patchEventPrototype=yt,i.patchEventTarget=Tt,i.isIEOrEdge=mt,i.ObjectDefineProperty=Te,i.ObjectGetOwnPropertyDescriptor=de,i.ObjectCreate=Ae,i.ArraySlice=He,i.patchClass=Se,i.wrapWithCurrentZone=$,i.filterProperties=st,i.attachOriginToPatched=fe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=gt,i.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:re,eventNames:we,isBrowser:xe,isMix:qe,isNode:Oe,TRUE_STR:oe,FALSE_STR:ie,ZONE_SYMBOL_PREFIX:ge,ADD_EVENT_LISTENER_STR:Ce,REMOVE_EVENT_LISTENER_STR:Ne})});const Le=S("zoneTask");function Pe(e,n,i,r){let c=null,u=null;i+=r;const f={};function _(T){const m=T.data;return m.args[0]=function(){return T.invoke.apply(this,arguments)},m.handleId=c.apply(e,m.args),T}function g(T){return u.call(e,T.data.handleId)}c=ue(e,n+=r,T=>function(m,Z){if("function"==typeof Z[0]){const D={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?Z[1]||0:void 0,args:Z},I=Z[0];Z[0]=function(){try{return I.apply(this,arguments)}finally{D.isPeriodic||("number"==typeof D.handleId?delete f[D.handleId]:D.handleId&&(D.handleId[Le]=null))}};const B=ne(n,Z[0],D,_,g);if(!B)return B;const G=B.data.handleId;return"number"==typeof G?f[G]=B:G&&(G[Le]=B),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(B.ref=G.ref.bind(G),B.unref=G.unref.bind(G)),"number"==typeof G||G?G:B}return T.apply(e,Z)}),u=ue(e,i,T=>function(m,Z){const D=Z[0];let I;"number"==typeof D?I=f[D]:(I=D&&D[Le],I||(I=D)),I&&"string"==typeof I.type?"notScheduled"!==I.state&&(I.cancelFn&&I.data.isPeriodic||0===I.runCount)&&("number"==typeof D?delete f[D]:D&&(D[Le]=null),I.zone.cancelTask(I)):T.apply(e,Z)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",r=>function(c,u){n.current.scheduleMicroTask("queueMicrotask",u[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";Pe(e,n,i,"Timeout"),Pe(e,n,i,"Interval"),Pe(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Pe(e,"request","cancel","AnimationFrame"),Pe(e,"mozRequest","mozCancel","AnimationFrame"),Pe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let r=0;r<i.length;r++)ue(e,i[r],(u,f,_)=>function(g,T){return n.current.run(u,e,T,_)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function(e,n){n.patchEventPrototype(e,n)})(e,i),function(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:r,TRUE_STR:c,FALSE_STR:u,ZONE_SYMBOL_PREFIX:f}=n.getGlobalObjects();for(let g=0;g<i.length;g++){const T=i[g],D=f+(T+u),I=f+(T+c);r[T]={},r[T][u]=D,r[T][c]=I}const _=e.EventTarget;_&&_.prototype&&n.patchEventTarget(e,[_&&_.prototype])}(e,i);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&i.patchEventTarget(e,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{Se("MutationObserver"),Se("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{Se("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{Se("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function(e,n){if(Oe&&!qe||Zone[e.symbol("patchEvents")])return;const i="undefined"!=typeof WebSocket,r=n.__Zone_ignore_on_properties;if(xe){const f=window,_=function(){try{const e=ke.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:f,ignoreProperties:["error"]}]:[];W(f,we.concat(["messageerror"]),r&&r.concat(_),pe(f)),W(Document.prototype,we,r),void 0!==f.SVGElement&&W(f.SVGElement.prototype,we,r),W(Element.prototype,we,r),W(HTMLElement.prototype,we,r),W(HTMLMediaElement.prototype,wt,r),W(HTMLFrameSetElement.prototype,ze.concat(rt),r),W(HTMLBodyElement.prototype,ze.concat(rt),r),W(HTMLFrameElement.prototype,nt,r),W(HTMLIFrameElement.prototype,nt,r);const g=f.HTMLMarqueeElement;g&&W(g.prototype,St,r);const T=f.Worker;T&&W(T.prototype,Zt,r)}const c=n.XMLHttpRequest;c&&W(c.prototype,ot,r);const u=n.XMLHttpRequestEventTarget;u&&W(u&&u.prototype,ot,r),"undefined"!=typeof IDBIndex&&(W(IDBIndex.prototype,be,r),W(IDBRequest.prototype,be,r),W(IDBOpenDBRequest.prototype,be,r),W(IDBDatabase.prototype,be,r),W(IDBTransaction.prototype,be,r),W(IDBCursor.prototype,be,r)),i&&W(WebSocket.prototype,Dt,r)}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function(e,n){const{isBrowser:i,isMix:r}=n.getGlobalObjects();(i||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function(T){const m=T.XMLHttpRequest;if(!m)return;const Z=m.prototype;let I=Z[me],B=Z[ye];if(!I){const v=T.XMLHttpRequestEventTarget;if(v){const A=v.prototype;I=A[me],B=A[ye]}}const G="readystatechange",E="scheduled";function d(v){const A=v.data,R=A.target;R[u]=!1,R[_]=!1;const ee=R[c];I||(I=R[me],B=R[ye]),ee&&B.call(R,G,ee);const he=R[c]=()=>{if(R.readyState===R.DONE)if(!A.aborted&&R[u]&&v.state===E){const se=R[n.__symbol__("loadfalse")];if(0!==R.status&&se&&se.length>0){const ae=v.invoke;v.invoke=function(){const F=R[n.__symbol__("loadfalse")];for(let L=0;L<F.length;L++)F[L]===v&&F.splice(L,1);!A.aborted&&v.state===E&&ae.call(v)},se.push(v)}else v.invoke()}else!A.aborted&&!1===R[u]&&(R[_]=!0)};return I.call(R,G,he),R[i]||(R[i]=v),H.apply(R,A.args),R[u]=!0,v}function M(){}function z(v){const A=v.data;return A.aborted=!0,Y.apply(A.target,A.args)}const j=ue(Z,"open",()=>function(v,A){return v[r]=0==A[2],v[f]=A[1],j.apply(v,A)}),O=S("fetchTaskAborting"),X=S("fetchTaskScheduling"),H=ue(Z,"send",()=>function(v,A){if(!0===n.current[X]||v[r])return H.apply(v,A);{const R={target:v,url:v[f],isPeriodic:!1,args:A,aborted:!1},ee=ne("XMLHttpRequest.send",M,R,d,z);v&&!0===v[_]&&!R.aborted&&ee.state===E&&ee.invoke()}}),Y=ue(Z,"abort",()=>function(v,A){const R=function(v){return v[i]}(v);if(R&&"string"==typeof R.type){if(null==R.cancelFn||R.data&&R.data.aborted)return;R.zone.cancelTask(R)}else if(!0===n.current[O])return Y.apply(v,A)})}(e);const i=S("xhrTask"),r=S("xhrSync"),c=S("xhrListener"),u=S("xhrScheduled"),f=S("xhrURL"),_=S("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function(e,n){const i=e.constructor.name;for(let r=0;r<n.length;r++){const c=n[r],u=e[c];if(u){if(!Ue(de(e,c)))continue;e[c]=(_=>{const g=function(){return _.apply(this,je(arguments,i+"."+c))};return fe(g,_),g})(u)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(r){return function(c){tt(e,r).forEach(f=>{const _=e.PromiseRejectionEvent;if(_){const g=new _(r,{promise:c.promise,reason:c.rejection});f.invoke(g)}})}}e.PromiseRejectionEvent&&(n[S("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[S("rejectionHandledHandler")]=i("rejectionhandled"))})},834:(Ze,de,Te)=>{const pe="undefined"!=typeof globalThis&&globalThis,Ae="undefined"!=typeof window&&window,He="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Ce="undefined"!=typeof global&&global,me=function($,...ne){if(me.translate){const J=me.translate($,ne);$=J[0],ne=J[1]}let S=oe($[0],$.raw[0]);for(let J=1;J<$.length;J++)S+=ne[J-1]+oe($[J],$.raw[J]);return S};function oe($,ne){return":"===ne.charAt(0)?$.substring(function($,ne){for(let S=1,J=1;S<$.length;S++,J++)if("\\"===ne[J])J++;else if(":"===$[S])return S;throw new Error(`Unterminated $localize metadata block in "${ne}".`)}($,ne)+1):$}(pe||Ce||Ae||He).$localize=me,Te(277)}},Ze=>{Ze(Ze.s=834)}]);
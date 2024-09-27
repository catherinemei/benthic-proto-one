(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ce=(e,t)=>e===t,de=Symbol("solid-track"),G={equals:ce};let ee=se;const $=1,O=2,te={owned:null,cleanups:null,context:null,owner:null};var b=null;let Y=null,pe=null,T=null,A=null,x=null,R=0;function U(e,t){const n=T,i=b,o=e.length===0,s=t===void 0?i:t,c=o?te:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=o?e:()=>e(()=>k(()=>q(c)));b=c,T=null;try{return F(r,!0)}finally{T=n,b=i}}function _(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.value)),oe(n,o));return[ie.bind(n),i]}function N(e,t,n){const i=Q(e,t,!1,$);M(i)}function ue(e,t,n){ee=ge;const i=Q(e,t,!1,$);(!n||!n.render)&&(i.user=!0),x?x.push(i):M(i)}function P(e,t,n){n=n?Object.assign({},G,n):G;const i=Q(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,M(i),ie.bind(i)}function k(e){if(T===null)return e();const t=T;T=null;try{return e()}finally{T=t}}function he(e){ue(()=>k(e))}function ne(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===$)M(this);else{const e=A;A=null,F(()=>H(this),!1),A=e}if(T){const e=this.observers?this.observers.length:0;T.sources?(T.sources.push(this),T.sourceSlots.push(e)):(T.sources=[this],T.sourceSlots=[e]),this.observers?(this.observers.push(T),this.observerSlots.push(T.sources.length-1)):(this.observers=[T],this.observerSlots=[T.sources.length-1])}return this.value}function oe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],c=Y&&Y.running;c&&Y.disposed.has(s),(c?!s.tState:!s.state)&&(s.pure?A.push(s):x.push(s),s.observers&&re(s)),c||(s.state=$)}if(A.length>1e6)throw A=[],new Error},!1)),t}function M(e){if(!e.fn)return;q(e);const t=R;fe(e,e.value,t)}function fe(e,t,n){let i;const o=b,s=T;T=b=e;try{i=e.fn(t)}catch(c){return e.pure&&(e.state=$,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,le(c)}finally{T=s,b=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,i):e.value=i,e.updatedAt=n)}function Q(e,t,n,i=$,o){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==te&&(b.owned?b.owned.push(s):b.owned=[s]),s}function j(e){if(e.state===0)return;if(e.state===O)return H(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===$)M(e);else if(e.state===O){const i=A;A=null,F(()=>H(e,t[0]),!1),A=i}}function F(e,t){if(A)return e();let n=!1;t||(A=[]),x?n=!0:x=[],R++;try{const i=e();return ye(n),i}catch(i){n||(x=null),A=null,le(i)}}function ye(e){if(A&&(se(A),A=null),e)return;const t=x;x=null,t.length&&F(()=>ee(t),!1)}function se(e){for(let t=0;t<e.length;t++)j(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:j(i)}for(t=0;t<n;t++)j(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const o=i.state;o===$?i!==t&&(!i.updatedAt||i.updatedAt<R)&&j(i):o===O&&H(i,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=O,n.pure?A.push(n):x.push(n),n.observers&&re(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),c=n.observerSlots.pop();i<o.length&&(s.sourceSlots[c]=i,o[i]=s,n.observerSlots[i]=c)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function me(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=b){throw me(e)}const Ce=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let i=[],o=[],s=[],c=0,r=t.length>1?[]:null;return ne(()=>J(s)),()=>{let u=e()||[],y,l;return u[de],k(()=>{let a=u.length,p,d,g,f,m,C,w,D,E;if(a===0)c!==0&&(J(s),s=[],i=[],o=[],c=0,r&&(r=[])),n.fallback&&(i=[Ce],o[0]=U(ae=>(s[0]=ae,n.fallback())),c=1);else if(c===0){for(o=new Array(a),l=0;l<a;l++)i[l]=u[l],o[l]=U(h);c=a}else{for(g=new Array(a),f=new Array(a),r&&(m=new Array(a)),C=0,w=Math.min(c,a);C<w&&i[C]===u[C];C++);for(w=c-1,D=a-1;w>=C&&D>=C&&i[w]===u[D];w--,D--)g[D]=o[w],f[D]=s[w],r&&(m[D]=r[w]);for(p=new Map,d=new Array(D+1),l=D;l>=C;l--)E=u[l],y=p.get(E),d[l]=y===void 0?-1:y,p.set(E,l);for(y=C;y<=w;y++)E=i[y],l=p.get(E),l!==void 0&&l!==-1?(g[l]=o[y],f[l]=s[y],r&&(m[l]=r[y]),l=d[l],p.set(E,l)):s[y]();for(l=C;l<a;l++)l in g?(o[l]=g[l],s[l]=f[l],r&&(r[l]=m[l],r[l](l))):o[l]=U(h);o=o.slice(0,c=a),i=u.slice(0)}return o});function h(a){if(s[l]=a,r){const[p,d]=_(l);return r[l]=d,t(u[l],p)}return t(u[l])}}}function B(e,t){return k(()=>e(t||{}))}const be=e=>`Stale read from <${e}>.`;function V(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Te(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return P(()=>{const i=n();if(i){const o=e.children;return typeof o=="function"&&o.length>0?k(()=>o(t?i:()=>{if(!k(n))throw be("Show");return e.when})):o}return e.fallback},void 0,void 0)}function Ae(e,t,n){let i=n.length,o=t.length,s=i,c=0,r=0,u=t[o-1].nextSibling,y=null;for(;c<o||r<s;){if(t[c]===n[r]){c++,r++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===c){const l=s<i?r?n[r-1].nextSibling:n[s-r]:u;for(;r<s;)e.insertBefore(n[r++],l)}else if(s===r)for(;c<o;)(!y||!y.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[s-1]&&n[r]===t[o-1]){const l=t[--o].nextSibling;e.insertBefore(n[r++],t[c++].nextSibling),e.insertBefore(n[--s],l),t[o]=n[s]}else{if(!y){y=new Map;let h=r;for(;h<s;)y.set(n[h],h++)}const l=y.get(t[c]);if(l!=null)if(r<l&&l<s){let h=c,a=1,p;for(;++h<o&&h<s&&!((p=y.get(t[h]))==null||p!==l+a);)a++;if(a>l-r){const d=t[c];for(;r<l;)e.insertBefore(n[r++],d)}else e.replaceChild(n[r++],t[c++])}else c++;else t[c++].remove()}}}const Z="_$DX_DELEGATE";function Le(e,t,n,i={}){let o;return U(s=>{o=s,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{o(),t.textContent=""}}function I(e,t,n){let i;const o=()=>{const c=document.createElement("template");return c.innerHTML=e,n?c.content.firstChild.firstChild:c.content.firstChild},s=t?()=>k(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return s.cloneNode=s,s}function De(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let i=0,o=e.length;i<o;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Pe))}}function L(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return K(e,t,i,n);N(o=>K(e,t(),o,n),i)}function Pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?i.call(n,o,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,i,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,c=i!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),c){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=S(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=S(e,n,i);else{if(s==="function")return N(()=>{let r=t();for(;typeof r=="function";)r=r();n=K(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(X(r,t,n,o))return N(()=>n=K(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=S(e,n,i),c)return n}else u?n.length===0?z(e,r,i):Ae(e,n,r):(n&&S(e),z(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=S(e,n,i,t);S(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,i){let o=!1;for(let s=0,c=t.length;s<c;s++){let r=t[s],u=n&&n[s],y;if(!(r==null||r===!0||r===!1))if((y=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=X(e,r,u)||o;else if(y==="function")if(i){for(;typeof r=="function";)r=r();o=X(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||o}else e.push(r),o=!0;else{const l=String(r);u&&u.nodeType===3&&u.data===l?e.push(u):e.push(document.createTextNode(l))}}return o}function z(e,t,n=null){for(let i=0,o=t.length;i<o;i++)e.insertBefore(t[i],n)}function S(e,t,n,i){if(n===void 0)return e.textContent="";const o=i||document.createTextNode("");if(t.length){let s=!1;for(let c=t.length-1;c>=0;c--){const r=t[c];if(o!==r){const u=r.parentNode===e;!s&&!c?u?e.replaceChild(o,r):e.insertBefore(o,n):u&&r.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}var Ne=I("<div><button id=hidden-focus aria-hidden=true>Pressing Undo</button><button id=switch-focus aria-hidden=true>Switching Parent"),xe=I("<div><div id=home tabindex=0></div><div id=parents-group tabindex=0><span>Parents </span></div><div id=children-group tabindex=0><span>Children "),ve=I('<span aria-label="There are no adjacent nodes"id=info-none> None'),W=I("<button><span>"),ke=I('<span aria-label="There are no parent nodes"> None'),$e=I('<span aria-label="There are no children nodes"> None');function Be(e){const[t,n]=_(e.nodeGraph[0].id),[i,o]=_(["0"]),[s,c]=_(new Map),r=P(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),u=()=>{const h=e.nodeGraph[t()].parents,a=i()[i().length-2];return h.indexOf(a)},y=(h,a)=>{o(p=>[...p,h]),n(a),setTimeout(()=>{const p=document.getElementById(`info-${a}`);p&&(p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),p.focus())},0)},l=h=>{if(h.key==="u"){const a=i();if(a.length>2){a.pop();const p=a[a.length-1],d=a[a.length-2];if(d&&e.nodeGraph[p].parents.includes(d))o([...a]),n(p);else{const f=s().get(p);o([...f??["0"]]),n(p)}const g=document.getElementById(`info-${p}`);g&&g.focus()}else if(a.length>1){a.pop();const p=a[a.length-1];if(p){o([...a]),n(p);const d=document.getElementById(`info-${p}`);d&&d.focus()}}else document.getElementById("parents-group")?.focus();h.preventDefault()}else if(h.key==="d"){const a=e.nodeGraph[t()].children[0];if(a){o(d=>[...d,a]),n(a);const p=document.getElementById(`info-${a}`);p&&p.focus()}else{const p=document.getElementById("children-group");p&&p.focus()}h.preventDefault()}else if(h.key==="t")document.getElementById("home")?.focus();else if(h.key==="s"){const a=e.nodeGraph[t()].parents;if(a.length>0){let d=(u()+1)%a.length;const g=a[d];let f=i();const m=f.pop();f.pop(),o(w=>[...f,g,t()]);const C=document.getElementById("switch-focus");C&&C.focus(),setTimeout(()=>{const w=document.getElementById(`info-${m}`);w&&w.focus()},700)}h.preventDefault()}else if(h.key==="Backspace")o(a=>{const p=[...a],d=p.pop();if(d){const g=document.getElementById("hidden-focus");g&&g.focus(),n(d),setTimeout(()=>{const f=document.getElementById(`info-${d}`);f&&f.focus()},700)}return p});else if(h.key==="ArrowLeft"||h.key==="ArrowRight"||h.key==="ArrowUp"||h.key==="ArrowDown"){const a=document.activeElement,p=a?.id;if(p.startsWith("info-")||p==="home"){const d=Array.from(document.querySelectorAll("#home button")),g=d.indexOf(a);let f=g;(h.key==="ArrowLeft"||h.key==="ArrowUp")&&g>0?f=g-1:(h.key==="ArrowRight"||h.key==="ArrowDown")&&g<d.length-1&&(f=g+1);const m=d[f]?.id.split("info-")[1];if(m){const C=i();C.pop(),o([...C,m]),n(m)}d[f]?.focus(),h.preventDefault()}else h.preventDefault()}};return he(()=>{const h=Se(e.nodeGraph);c(h),window.addEventListener("keydown",l)}),ne(()=>{window.removeEventListener("keydown",l)}),(()=>{var h=Ne(),a=h.firstChild,p=a.nextSibling;return a.style.setProperty("position","absolute"),a.style.setProperty("width","1px"),a.style.setProperty("height","1px"),a.style.setProperty("margin","-1px"),a.style.setProperty("padding","0"),a.style.setProperty("border","0"),a.style.setProperty("clip","rect(0, 0, 0, 0)"),a.style.setProperty("overflow","hidden"),a.style.setProperty("white-space","nowrap"),p.style.setProperty("position","absolute"),p.style.setProperty("width","1px"),p.style.setProperty("height","1px"),p.style.setProperty("margin","-1px"),p.style.setProperty("padding","0"),p.style.setProperty("border","0"),p.style.setProperty("clip","rect(0, 0, 0, 0)"),p.style.setProperty("overflow","hidden"),p.style.setProperty("white-space","nowrap"),v(h,B(we,{get when(){return t()},get children(){return B(Ee,{get history(){return i()},get node(){return r()},get nodeGraph(){return e.nodeGraph},onNodeClick:y})}}),null),h})()}function Ee(e){function t(u){if(!e.history||e.history.length<2)return[u];{const y=e.history[e.history.length-2];return e.nodeGraph[y].children}}const n=P(()=>e.node.parents.map(u=>e.nodeGraph[u]).sort((u,y)=>u.priority-y.priority)),i=P(()=>n().map(u=>u.descriptionTokens?.label).join(", ")),o=P(()=>e.node.children.map(u=>e.nodeGraph[u]).sort((u,y)=>u.priority-y.priority)),s=P(()=>o().map(u=>u.descriptionTokens?.label).join(", ")),c=P(()=>{const u=t(e.node.id);return Array.from(u).map(l=>e.nodeGraph[l]).sort((l,h)=>{const a=l.priority-h.priority;return a!==0?a:l.id.localeCompare(h.id)})}),r=P(()=>{const y=o().map(h=>h.descriptionTokens?.label).join(", "),l=y.length>0?"contains "+y:"";return`${e.node.displayName} node with ${e.node.parents.length} parent and ${e.node.children.length} children nodes; ${l}`});return(()=>{var u=xe(),y=u.firstChild,l=y.nextSibling,h=l.firstChild,a=l.nextSibling,p=a.firstChild;return u.style.setProperty("padding","20px"),v(y,B(V,{get each(){return c()},get fallback(){return(()=>{var d=ve();return d.style.setProperty("color","grey"),d})()},children:(d,g)=>(()=>{var f=W(),m=f.firstChild;return f.$$click=()=>e.onNodeClick(e.node.id,d.id),f.style.setProperty("margin-right","5px"),L(m,"aria-hidden",!0),v(m,()=>d.displayName),N(C=>{var w=`Node ${g()+1} of ${c().length}; ${d.displayName}`,D=`info-${d.id}`;return w!==C.e&&L(f,"aria-label",C.e=w),D!==C.t&&L(f,"id",C.t=D),C},{e:void 0,t:void 0}),f})()})),l.style.setProperty("margin-top","10px"),h.style.setProperty("font-weight","bold"),L(h,"aria-hidden",!0),v(l,B(V,{get each(){return n()},get fallback(){return(()=>{var d=ke();return d.style.setProperty("color","grey"),N(()=>L(d,"id",`parents-${e.node.id}-0`)),d})()},children:(d,g)=>(()=>{var f=W(),m=f.firstChild;return f.$$click=()=>e.onNodeClick(e.node.id,d.id),f.style.setProperty("margin-right","5px"),L(m,"aria-hidden",!0),v(m,()=>d.displayName),N(()=>L(f,"id",`parents-${e.node.id}-${g()}`)),f})()}),null),a.style.setProperty("margin-top","10px"),p.style.setProperty("font-weight","bold"),L(p,"aria-hidden",!0),v(a,B(V,{get each(){return o()},get fallback(){return(()=>{var d=$e();return d.style.setProperty("color","grey"),N(()=>L(d,"id",`children-${e.node.id}-0`)),d})()},children:(d,g)=>(()=>{var f=W(),m=f.firstChild;return f.$$click=()=>e.onNodeClick(e.node.id,d.id),f.style.setProperty("margin-right","5px"),L(m,"aria-hidden",!0),v(m,()=>d.displayName),N(()=>L(f,"id",`children-${e.node.id}-${g()}`)),f})()}),null),N(d=>{var g=r(),f=`${e.node.parents.length} parent relations; ${i()}`,m=`${e.node.children.length} child relations; ${s()}`;return g!==d.e&&L(y,"aria-label",d.e=g),f!==d.t&&L(l,"aria-label",d.t=f),m!==d.a&&L(a,"aria-label",d.a=m),d},{e:void 0,t:void 0,a:void 0}),u})()}function Se(e,t="0"){const n=new Map,i=[[t,[t]]];for(;i.length>0;){const[o,s]=i.shift();if(n.has(o))continue;n.set(o,s);const c=e[o].children;for(const r of c)n.has(r)||i.push([r,[...s,r]])}return n}De(["click"]);const Ie={0:{id:"0",displayName:"Stacked Bar Chart",description:"Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies.",descriptionTokens:{label:"Stacked Bar Chart",shortDescription:"Major Trophies for some English teams.",longDescription:"Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies."},parents:[],children:["1","2","22"],priority:0},1:{id:"1",displayName:"X-axis",description:"X Axis. Arsenal, Chelsea, Liverpool, Manchester United.",descriptionTokens:{label:"X-axis",shortDescription:"Contains 4 teams.",longDescription:"Contains Arsenal, Chelsea, Liverpool, Manchester United."},parents:["0"],children:["3","4","5","6"],priority:1},2:{id:"2",displayName:"Legend",description:"Legend. Contest included: BPL, FA Cup, CL.",descriptionTokens:{label:"Legend",shortDescription:"Contains 3 contests.",longDescription:"Contains BPL, FA Cup, CL."},parents:["0"],children:["7","8","9"],priority:2},3:{id:"3",displayName:"Arsenal",description:"Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal.",descriptionTokens:{label:"Arsenal",shortDescription:"Contains: 3 contests. Total trophies: 17.",longDescription:"Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal."},parents:["1"],children:["10","11","12"],priority:2},4:{id:"4",displayName:"Chelsea",description:"Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea.",descriptionTokens:{label:"Chelsea",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea."},parents:["1"],children:["13","14","15"],priority:2},5:{id:"5",displayName:"Liverpool",description:"Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool",descriptionTokens:{label:"Liverpool",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool"},parents:["1"],children:["16","17","18"],priority:2},6:{id:"6",displayName:"Manchester",description:"Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United.",descriptionTokens:{label:"Manchester United",shortDescription:"Contains: 3 contests. Total trophies: 28.",longDescription:"Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United."},parents:["1"],children:["19","20","21"],priority:2},7:{id:"7",displayName:"BPL",description:"Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition.",descriptionTokens:{label:"BPL",shortDescription:"Contains: 4 teams. Total trophies: 22.",longDescription:"Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition."},parents:["2"],children:["10","13","16","19"],priority:3},8:{id:"8",displayName:"FA Cup",description:"Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition.",descriptionTokens:{label:"FA Cup",shortDescription:"Contains: 4 teams. Total trophies: 42.",longDescription:"Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition."},parents:["2"],children:["11","14","17","20"],priority:3},9:{id:"9",displayName:"CL",description:"Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition.",descriptionTokens:{label:"CL",shortDescription:"Contains: 4 teams. Total trophies: 11.",longDescription:"Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition."},parents:["2"],children:["12","15","18","21"],priority:3},10:{id:"10",displayName:"Arsenal BPL",description:"Team: Arsenal. Contest: BPL. Trophies: 3. Data point.",descriptionTokens:{label:"Arsenal BPL",shortDescription:"Trophies: 3.",longDescription:"Team: Arsenal. Contest: BPL. Trophies: 3. Data point."},parents:["3","7"],children:[],priority:4},11:{id:"11",displayName:"Arsenal FA Cup",description:"Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point.",descriptionTokens:{label:"Arsenal FA Cup",shortDescription:"Trophies: 14.",longDescription:"Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point."},parents:["3","8"],children:[],priority:4},12:{id:"12",displayName:"Arsenal CL",description:"Team: Arsenal. Contest: CL. Trophies: 0. Data point.",descriptionTokens:{label:"Arsenal CL",shortDescription:"Trophies: 0.",longDescription:"Team: Arsenal. Contest: CL. Trophies: 0. Data point."},parents:["3","9"],children:[],priority:4},13:{id:"13",displayName:"Chelsea BPL",description:"Team: Chelsea. Contest: BPL. Trophies: 5. Data point.",descriptionTokens:{label:"Chelsea BPL",shortDescription:"Trophies: 5.",longDescription:"Team: Chelsea. Contest: BPL. Trophies: 5. Data point."},parents:["4","7"],children:[],priority:4},14:{id:"14",displayName:"Chelsea FA Cup",description:"Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Chelsea FA Cup",shortDescription:"Trophies: 8.",longDescription:"Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point."},parents:["4","8"],children:[],priority:4},15:{id:"15",displayName:"Chelsea CL",description:"Team: Chelsea. Contest: CL. Trophies: 2. Data point.",descriptionTokens:{label:"Chelsea CL",shortDescription:"Trophies: 2.",longDescription:"Team: Chelsea. Contest: CL. Trophies: 2. Data point."},parents:["4","9"],children:[],priority:4},16:{id:"16",displayName:"Liverpool BPL",description:"Team: Liverpool. Contest: BPL. Trophies: 1. Data point.",descriptionTokens:{label:"Liverpool BPL",shortDescription:"Trophies: 1.",longDescription:"Team: Liverpool. Contest: BPL. Trophies: 1. Data point."},parents:["5","7"],children:[],priority:4},17:{id:"17",displayName:"Liverpool FA Cup",description:"Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Liverpool FA Cup",shortDescription:"Trophies: 8.",longDescription:"Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point."},parents:["5","8"],children:[],priority:4},18:{id:"18",displayName:"Liverpool CL",description:"Team: Liverpool. Contest: CL. Trophies: 6. Data point.",descriptionTokens:{label:"Liverpool CL",shortDescription:"Trophies: 6.",longDescription:"Team: Liverpool. Contest: CL. Trophies: 6. Data point."},parents:["5","9"],children:[],priority:4},19:{id:"19",displayName:"Manchester BPL",description:"Team: Manchester United. Contest: BPL. Trophies: 13. Data point.",descriptionTokens:{label:"Manchester United BPL",shortDescription:"Trophies: 13.",longDescription:"Team: Manchester United. Contest: BPL. Trophies: 13. Data point."},parents:["6","7"],children:[],priority:4},20:{id:"20",displayName:"Manchester FA Cup",description:"Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point.",descriptionTokens:{label:"Manchester United FA Cup",shortDescription:"Trophies: 12.",longDescription:"Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point."},parents:["6","8"],children:[],priority:4},21:{id:"21",displayName:"Manchester United CL",description:"Team: Manchester United. Contest: CL. Trophies: 3. Data point.",descriptionTokens:{label:"Manchester United CL",shortDescription:"Trophies: 3.",longDescription:"Team: Manchester United. Contest: CL. Trophies: 3. Data point."},parents:["6","9"],children:[],priority:4},22:{id:"22",displayName:"Y-axis",description:"Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale.",descriptionTokens:{label:"Y-axis",shortDescription:"Y-axis. Count trophies.",longDescription:"Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale."},parents:["0"],children:[],priority:2}},Me=()=>B(Be,{nodeGraph:Ie,showHypergraph:!1}),Fe=document.getElementById("root");Le(()=>B(Me,{}),Fe);
var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function l(){return d(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let $;function m(t){$=t}function w(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const y=[],g=[];let v=[];const b=[],x=Promise.resolve();let _=!1;function k(t){v.push(t)}const M=new Set;let T=0;function E(){if(0!==T)return;const t=$;do{try{for(;T<y.length;){const t=y[T];T++,m(t),W(t.$$)}}catch(t){throw y.length=0,T=0,t}for(m(null),y.length=0,T=0;g.length;)g.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];M.has(n)||(M.add(n),n())}v.length=0}while(y.length);for(;b.length;)b.pop()();_=!1,M.clear(),m(t)}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const A=new Set;function H(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];v.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),v=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(i,s,a,u,d,l,f,h=[-1]){const p=$;m(i);const w=i.$$={fragment:null,ctx:[],props:l,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:s.target||p.$$.root};f&&f(w.root);let y=!1;if(w.ctx=a?a(i,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return w.ctx&&d(w.ctx[t],w.ctx[t]=o)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](o),y&&L(i,t)),n})):[],w.update(),y=!0,o(w.before_update),w.fragment=!!u&&u(w.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);w.fragment&&w.fragment.l(t),t.forEach(c)}else w.fragment&&w.fragment.c();s.intro&&((g=i.$$.fragment)&&g.i&&(A.delete(g),g.i(v))),function(t,e,i,s){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,i),s||k((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),c.forEach(k)}(i,s.target,s.anchor,s.customElement),E()}var g,v;m(p)}class O{$destroy(){H(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e,o,r,i,$,m,w,y,g,v,b,x,_,k,M,T;return{c(){e=u("p"),o=d(n[0]),r=d(" : "),i=d(n[1]),$=l(),m=u("p"),w=d("Début"),y=l(),g=u("div"),v=u("div"),b=l(),x=u("div"),_=l(),k=u("div"),f(e,"class","score svelte-v1h1c4"),p(e,"display","flex"),f(m,"class","score svelte-v1h1c4"),f(m,"id","debut"),f(m,"style",n[5]),f(v,"class","bloc svelte-v1h1c4"),f(v,"style",n[4]),f(x,"class","bloc svelte-v1h1c4"),f(x,"id","bloc22"),f(x,"style",n[3]),f(k,"class","balle svelte-v1h1c4"),f(k,"style",n[2]),p(g,"height","100vh"),p(g,"width","100vw")},m(t,c){var u,d,l,f;a(t,e,c),s(e,o),s(e,r),s(e,i),a(t,$,c),a(t,m,c),s(m,w),a(t,y,c),a(t,g,c),s(g,v),s(g,b),s(g,x),s(g,_),s(g,k),M||(u=m,d="click",l=n[6],u.addEventListener(d,l,f),T=()=>u.removeEventListener(d,l,f),M=!0)},p(t,[n]){1&n&&h(o,t[0]),2&n&&h(i,t[1]),32&n&&f(m,"style",t[5]),16&n&&f(v,"style",t[4]),8&n&&f(x,"style",t[3]),4&n&&f(k,"style",t[2])},i:t,o:t,d(t){t&&c(e),t&&c($),t&&c(m),t&&c(y),t&&c(g),M=!1,T()}}}let j=25;function D(t,n,e){let o,r,i,s,a,c,u=220,d=280,l=1200,f=280,h=new Set,p=730,$=300,m=4,y=Math.floor(4*Math.random())+1,g=!0,v=!1,b=!1,x=!1,_=0,k=0;function M(t){h.add(t.key)}function T(t){h.delete(t.key)}function E(){!0===v&&(h.has("ArrowLeft")&&e(9,l-=4),h.has("ArrowRight")&&e(9,l+=4),h.has("ArrowUp")&&e(10,f-=5),h.has("ArrowDown")&&e(10,f+=5),(h.has("q")||h.has("Q"))&&e(7,u-=4),(h.has("d")||h.has("D"))&&e(7,u+=4),(h.has("z")||h.has("Z"))&&e(8,d-=5),(h.has("s")||h.has("S"))&&e(8,d+=5),u<0&&e(7,u=0),u>window.innerWidth/2-window.innerWidth/12&&e(7,u=window.innerWidth/2-window.innerWidth/12),d<0&&e(8,d=0),d>window.innerHeight-102&&e(8,d=window.innerHeight-102),l<window.innerWidth/2+window.innerWidth/23&&e(9,l=window.innerWidth/2+window.innerWidth/23),l>window.innerWidth-230&&e(9,l=window.innerWidth-230),f<0&&e(10,f=0),f>window.innerHeight-102&&e(10,f=window.innerHeight-102))}function W(){if(!0===v){if(e(11,p+=m),e(12,$+=y),p<0&&(e(11,p=720),e(12,$=250),m=0,y=0,e(1,k++,k),setTimeout((()=>{A()}),1e3)),p>window.innerWidth-j&&(e(11,p=720),e(12,$=250),m=0,y=0,e(0,_++,_),setTimeout((()=>{A()}),1e3)),($<0||$>window.innerHeight-j-7)&&(y=-y),p<=l+230&&$+j>=f&&$<=f+400&&p+j>=l){if(!0!==g)return;g=!1,m=2*-m,e(9,l+=10),y=y>0?-(Math.floor(3*Math.random())+2):Math.floor(3*Math.random())+2,setTimeout((()=>{if(m/=2,1==b){if(6==m||-6==m)return;m>0?m+=2:m-=2}if(1==x){if(9==m||-9==m)return;m>0?m+=3:m-=3}}),170),setTimeout((()=>{g=!0}),500)}if(p<=u+230&&$+j>=d&&$<=d+400&&p+j>=u){if(!0!==g)return;g=!1,m=2*-m,e(7,u-=10),y=y>0?-(Math.floor(3*Math.random())+2):Math.floor(3*Math.random())+2,setTimeout((()=>{if(m/=2,1==b){if(6==m||-6==m)return;m>0?m+=2:m-=2}if(1==x){if(9==m||-9==m)return;m>0?m+=3:m-=3}}),170),setTimeout((()=>{g=!0}),500)}}}function A(){b=!1,x=!1,clearTimeout(a),clearTimeout(c),a=setTimeout((()=>{b=!0,console.log(b)}),1e4),c=setTimeout((()=>{x=!0,console.log(x)}),3e4);var t=Math.round(Math.random());m=4,y=Math.floor(4*Math.random())+1,0==t||(m=-m)}return A(),w((()=>{window.addEventListener("keydown",M),window.addEventListener("keyup",T),setInterval(E,9),setInterval(W,9)})),t.$$.update=()=>{8192&t.$$.dirty&&e(5,o=v?"transition: all 0.8s;  opacity: 0;":" display: flex; "),384&t.$$.dirty&&e(4,r=`transform: translate(${u}px, ${d}px); transition: all 0s;`),1536&t.$$.dirty&&e(3,i=`transform: translate(${l}px, ${f}px); transition: all 0s;`),6144&t.$$.dirty&&e(2,s=`transform: translate(${p}px, ${$}px); width: 25px; height: 25px; border-radius: 50%; background-color: white; border: solid 3px black;`)},[_,k,s,i,r,o,function(t){setTimeout((()=>{e(13,v=!0)}),900),setTimeout((()=>{b=!0}),1e4),setTimeout((()=>{x=!0}),3e4)},u,d,l,f,p,$,v]}return new class extends O{constructor(t){super(),N(this,t,D,S,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

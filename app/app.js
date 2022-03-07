(function(){"use strict";var k={5851:function(e,l,c){c.d(l,{$q:function(){return f},E:function(){return a}});const f=(s,r=document)=>r.querySelector(s),a=(s,r=document)=>Array.from(r.querySelectorAll(s))}},q={};function n(e){var l=q[e];if(l!==void 0)return l.exports;var c=q[e]={exports:{}};return k[e].call(c.exports,c,c.exports,n),c.exports}n.m=k,function(){n.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(l,{a:l}),l}}(),function(){n.d=function(e,l){for(var c in l)n.o(l,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:l[c]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce(function(l,c){return n.f[c](e,l),l},[]))}}(),function(){n.u=function(e){return"assets/"+({"343":"syntaxHighlighting","464":"search","677":"graphqlNavigation"}[e]||e)+"."+{"343":"94a","464":"7e8","643":"43b","677":"83b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"assets/"+{"343":"syntaxHighlighting","464":"search"}[e]+"."+{"343":"94a","464":"7e8"}[e]+".css"}}(),function(){n.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}()}(),function(){n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={},l="platform-os-documentation:";n.l=function(c,f,a,s){if(e[c]){e[c].push(f);return}var r,d;if(a!==void 0)for(var o=document.getElementsByTagName("script"),p=0;p<o.length;p++){var u=o[p];if(u.getAttribute("src")==c||u.getAttribute("data-webpack")==l+a){r=u;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",l+a),r.src=c),e[c]=[f];var g=function(b,w){r.onerror=r.onload=null,clearTimeout(m);var y=e[c];if(delete e[c],r.parentNode&&r.parentNode.removeChild(r),y&&y.forEach(function(C){return C(w)}),b)return b(w)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),d&&document.head.appendChild(r)}}(),function(){n.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),typeof n!="undefined"&&Object.defineProperty(n,"p",{get:function(){try{if(typeof window.__CONTEXT__.cdnUrl!="string")throw new Error("WebpackRequireFrom: 'window.__CONTEXT__.cdnUrl' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return window.__CONTEXT__.cdnUrl}catch(e){return console.error(e),""}},set:function(e){console.warn("WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value"+e+".")}}),function(){var e=function(a,s,r,d){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var p=function(u){if(o.onerror=o.onload=null,u.type==="load")r();else{var g=u&&(u.type==="load"?"missing":u.type),m=u&&u.target&&u.target.href||s,b=new Error("Loading CSS chunk "+a+` failed.
(`+m+")");b.code="CSS_CHUNK_LOAD_FAILED",b.type=g,b.request=m,o.parentNode.removeChild(o),d(b)}};return o.onerror=o.onload=p,o.href=s,document.head.appendChild(o),o},l=function(a,s){for(var r=document.getElementsByTagName("link"),d=0;d<r.length;d++){var o=r[d],p=o.getAttribute("data-href")||o.getAttribute("href");if(o.rel==="stylesheet"&&(p===a||p===s))return o}for(var u=document.getElementsByTagName("style"),d=0;d<u.length;d++){var o=u[d],p=o.getAttribute("data-href");if(p===a||p===s)return o}},c=function(a){return new Promise(function(s,r){var d=n.miniCssF(a),o=n.p+d;if(l(d,o))return s();e(a,o,s,r)})},f={143:0};n.f.miniCss=function(a,s){var r={"343":1,"464":1};f[a]?s.push(f[a]):f[a]!==0&&r[a]&&s.push(f[a]=c(a).then(function(){f[a]=0},function(d){throw delete f[a],d}))}}(),function(){var e={143:0};n.f.j=function(f,a){var s=n.o(e,f)?e[f]:void 0;if(s!==0)if(s)a.push(s[2]);else{var r=new Promise(function(u,g){s=e[f]=[u,g]});a.push(s[2]=r);var d=n.p+n.u(f),o=new Error,p=function(u){if(n.o(e,f)&&(s=e[f],s!==0&&(e[f]=void 0),s)){var g=u&&(u.type==="load"?"missing":u.type),m=u&&u.target&&u.target.src;o.message="Loading chunk "+f+` failed.
(`+g+": "+m+")",o.name="ChunkLoadError",o.type=g,o.request=m,s[1](o)}};n.l(d,p,"chunk-"+f,f)}};var l=function(f,a){var s=a[0],r=a[1],d=a[2],o,p,u=0;if(s.some(function(m){return e[m]!==0})){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(d)var g=d(n)}for(f&&f(a);u<s.length;u++)p=s[u],n.o(e,p)&&e[p]&&e[p][0](),e[p]=0},c=self.webpackChunkplatform_os_documentation=self.webpackChunkplatform_os_documentation||[];c.forEach(l.bind(null,0)),c.push=l.bind(null,c.push.bind(c))}();var H={};(function(){var e=n(5851);const l=location.pathname;(0,e.E)(`.nav-sidebar a[href="${l}"]`).map(t=>t.classList.add("active"));const c=(0,e.E)(".nav-sidebar > ul > li:not(.topic-group):not(.active)");for(let t in c){const i=c[t],h=(0,e.$q)(".new",i);if((0,e.$q)(".submenu",i)&&!!h){(0,e.$q)("a",i).appendChild(h.cloneNode(!0));continue}}var a=t=>{var i=/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,h;return h=t.trim().replace(/\'/gi,"").replace(i,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/gm,"").toLowerCase(),h};const s=t=>t.querySelectorAll("a.anchorjs-link").length>0,r=({tidyID:t,text:i})=>{let h=document.createElement("a");return h.innerHTML=`<span class="screen-reader-text">${i}</span><svg width="16" height="16"><use xlink:href="#link"></use></svg>`,h.className="anchorjs-link",h.href=`#${t}`,h},d=({elements:t})=>{for(let i of t){if(!i.textContent.trim()||i.id||s(i))continue;const h=a(i.textContent),_=r({tidyID:h,text:i.textContent});i.id=h,i.classList.add("anchorjs-element"),i.insertBefore(_,i.firstChild)}};(()=>{const t=(0,e.E)(".content__main h2, .content__main h3");d({elements:t})})();const p=t=>t.map(i=>({href:`#${i.id}`,text:(0,e.$q)("span",i).textContent.trim()})),u=()=>(0,e.E)(".content__main h2[id]"),g=t=>/^Step \w+:/.test(t.textContent),m=()=>(0,e.$q)("[data-autosteps]"),b=()=>(0,e.E)(".content h3").filter(g),w=t=>t.map(i=>`<li>
        <a href="${i.href}">${i.text}</a>
      </li>`).join("");(()=>{const t=m(),i=b();if(!t||i.length<1)return;const _=`
    <ul class="content__autosteps">
      ${w(p(i))}
    </ul>
  `;t.innerHTML=_})();const C=()=>(0,e.$q)("[data-autotoc]"),T=t=>t.map(i=>`<li>
        <a href="${i.href}">
          ${i.text}
        </a>
      </li>`).join("");(()=>{const t=C(),i=u();if(!t||i.length<3)return;const _=`<div class="hidden p-8 md:block bg-pos-page-bg table-of-content">
      <h4 class="mb-4 text-lg">On this page</h4>
      <ul class="pl-0 list-none">${T(p(i))}</ul>
    </div>`;t.innerHTML=_})();const E=()=>(0,e.E)('a[href^="http"]');E().length>0&&E().map(t=>{t.setAttribute("target","_blank"),t.setAttribute("rel","external noopener"),t.setAttribute("onclick",'return confirm("This link will open in new tab.")')});const v=()=>(0,e.$q)('[data-feedback="form"]'),$=()=>(0,e.E)("[data-feedback-selected-value]"),x=()=>(0,e.$q)('[data-feedback="questions"]'),S=()=>(0,e.E)("[data-feedback-value]"),L=t=>x().classList.toggle("hidden",t),A=()=>S().map(t=>t.classList.add("hidden")),j=t=>v().querySelector(`[data-feedback-value="${t}"]`).classList.remove("hidden"),N=t=>{!t||(v().setAttribute("action",`/api/customizations/${t}`),v().insertAdjacentHTML("beforeend",'<input type="hidden" name="_method" value="PUT">'))},O=()=>fetch(v().getAttribute("action"),{method:v().getAttribute("method"),body:new FormData(v()),credentials:"same-origin"}).then(t=>t.status===201?t.json():{id:null}).then(t=>N(t.id)).catch(t=>{throw new Error(t)}),P=t=>{const i=t.target.value;L(!0),A(),O().then(()=>{j(i),L(!1)})};v()&&$().map(t=>t.addEventListener("change",P)),n.e(464).then(n.bind(n,9398)),(0,e.$q)('code[class*="language-"]')&&Promise.all([n.e(643),n.e(343)]).then(n.bind(n,3986)),(0,e.$q)(".graphql-navigation")&&n.e(677).then(n.bind(n,3678))})()})();

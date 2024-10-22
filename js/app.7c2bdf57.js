(function(){"use strict";var e={1947:function(e,t,o){var a=o(5130),n=o(6768);function r(e,t,o,a,r,s){const i=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(i)}var s={name:"App"},i=o(1241);const l=(0,i.A)(s,[["render",r]]);var d=l,c=o(1387);const u={class:"version-history"},v=["innerHTML"],p={key:1};function h(e,t,o,a,r,s){const i=(0,n.g2)("Header"),l=(0,n.g2)("LatestVersion"),d=(0,n.g2)("VersionItem"),c=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.Lk)("div",u,[t[0]||(t[0]=(0,n.Lk)("h1",null,"HyperSensor Software Version History",-1)),r.loading?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"loading",innerHTML:r.loadingHTMLContent},null,8,v)):((0,n.uX)(),(0,n.CE)("div",p,[(0,n.bF)(l,{latestVersion:r.latestVersion},null,8,["latestVersion"]),(0,n.bF)(d,{versions:r.versions},null,8,["versions"])]))]),(0,n.bF)(c)],64)}var f=o.p+"img/logo.320916c4.png";const k={ref:"header"},g={class:"nav-links"};function b(e,t,o,a,r,s){const i=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("header",k,[(0,n.bF)(i,{to:"/version-history",class:"logo"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.Lk)("img",{src:f},null,-1)]))),_:1}),(0,n.Lk)("nav",g,[(0,n.bF)(i,{to:"/version-history"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("Software Version History")]))),_:1}),(0,n.bF)(i,{to:"/version-history/user-manual"},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.eW)("User Manual")]))),_:1}),(0,n.bF)(i,{to:"/version-history/contact-us"},{default:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.eW)("Contact Us")]))),_:1})])],512)}var L=o(4968),m={name:"PageWithHeader",data(){return{lastScrollTop:0}},methods:{handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop,t=this.$refs.header;e>this.lastScrollTop&&e>10?L.Ay.to(t,{height:60,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",duration:.3,ease:"power3.out"}):e<this.lastScrollTop&&(L.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"}),0==e&&L.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 0)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"})),this.lastScrollTop=e}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const y=(0,i.A)(m,[["render",b],["__scopeId","data-v-2de16255"]]);var _=y,w=o(4232);const F={class:"previous-version-wrapper"},C={class:"version-box"},x=["onClick"],A={class:"header"};function S(e,t,o,a,r,s){return(0,n.uX)(),(0,n.CE)("div",F,[t[1]||(t[1]=(0,n.Lk)("div",{class:"section-title"},"Previous Versions",-1)),(0,n.Lk)("div",C,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.versions,((e,o)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,w.C4)(["previous-version-item",{open:r.isOpen[e.id]}]),key:e.id,onClick:t=>s.toggle(e.id,o)},[(0,n.Lk)("div",A,[(0,n.Lk)("h3",null,(0,w.v_)(e.version),1),t[0]||(t[0]=(0,n.Lk)("span",{class:"accordion-icon"},[(0,n.Lk)("svg",{t:"1728872339944",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4236",width:"20px",height:"20px"},[(0,n.Lk)("path",{d:"M948.82895 361.713158c14.389732 18.446118 15.597233 41.568744 2.694365 51.643194L530.687618 741.618655c-2.910283 2.28095-12.262278 7.896854-13.852496 9.662057-15.679098 17.331737-38.223556 22.534226-50.383504 11.56029L70.112847 405.439032c-12.159948-10.984169-9.351995-33.961486 6.328126-51.333132 15.680121-17.362436 38.223556-22.545482 50.424436-11.571546l360.707248 325.258898 411.822416-321.244468C912.338874 336.474334 934.470941 343.277274 948.82895 361.713158L948.82895 361.713158z","p-id":"4237"})])],-1))]),(0,n.Lk)("div",{class:"detail",ref_for:!0,ref:e=>r.detailsRefs[o]=e},[(0,n.Lk)("p",null,"Release DateTime: "+(0,w.v_)(e.datetime),1),(0,n.Lk)("p",null,"Descriptions: "+(0,w.v_)(e.descriptions),1),(0,n.Lk)("p",null,"Id: "+(0,w.v_)(e.id),1)],512)],10,x)))),128))])])}var H={props:{versions:{type:Array,required:!0}},data(){return{isOpen:{},detailsRefs:[]}},methods:{toggle(e,t){this.isOpen[e]?this.close(e,t):this.open(e,t)},open(e,t){this.isOpen[e]=!0,L.Ay.to(this.detailsRefs[t],{height:"auto",duration:.5,opacity:1})},close(e,t){this.isOpen[e]=!1,L.Ay.to(this.detailsRefs[t],{height:0,duration:.5,opacity:0})}}};const E=(0,i.A)(H,[["render",S],["__scopeId","data-v-11d3613b"]]);var T=E;const V={class:"latest-version-wrapper"};function O(e,t,o,a,r,s){return(0,n.uX)(),(0,n.CE)("div",V,[t[2]||(t[2]=(0,n.Lk)("div",{class:"section-title"},"Latest Version",-1)),(0,n.Lk)("div",{class:"latest-version-item",onMouseenter:t[0]||(t[0]=e=>s.hoverIn(e)),onMouseleave:t[1]||(t[1]=e=>s.hoverOut(e))},[(0,n.Lk)("h2",null,(0,w.v_)(o.latestVersion.version),1),(0,n.Lk)("p",null,"Release DateTime: "+(0,w.v_)(o.latestVersion.datetime),1),(0,n.Lk)("p",null,"Descriptions: "+(0,w.v_)(o.latestVersion.descriptions),1),(0,n.Lk)("p",null,"Id: "+(0,w.v_)(o.latestVersion.id),1)],32)])}var M={name:"LatestVersion",props:{latestVersion:{type:Object,required:!0}},methods:{hoverIn(e){const t=e.currentTarget;L.Ay.to(t,{scale:1.02,boxShadow:"0 8px 20px rgba(0, 0, 0, 0.45)",background:"linear-gradient(135deg, rgba(0, 140, 255, 1) 0%, rgba(0, 160, 255, 1) 25%, rgba(0, 180, 255, 1) 50%, rgba(0, 200, 255, 1) 75%, rgba(0, 122, 255, 1) 100%)",duration:1,ease:"power3.out"})},hoverOut(e){const t=e.currentTarget;L.Ay.to(t,{scale:1,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",background:"linear-gradient(135deg, rgba(0, 122, 255, 1) 0%, rgba(0, 140, 255, 1) 25%, rgba(0, 160, 255, 1) 50%, rgba(0, 180, 255, 1) 75%, rgba(0, 200, 255, 1) 100%)",duration:1,ease:"power3.out"})}}};const I=(0,i.A)(M,[["render",O],["__scopeId","data-v-fe2c2062"]]);var X=I;const U={class:"footer"};function P(e,t,o,a,r,s){return(0,n.uX)(),(0,n.CE)("footer",U,t[0]||(t[0]=[(0,n.Fv)('<div class="footer-content" data-v-a7a4744a><div class="author-info" data-v-a7a4744a><p data-v-a7a4744a>Author: Lee Tzu-Hui</p><p data-v-a7a4744a>All rights reserved.</p></div><div class="legal-links" data-v-a7a4744a><a href="/version-history/privacy-policy" data-v-a7a4744a>Privacy Policy</a><a href="/version-history/terms-of-service" data-v-a7a4744a>Terms of Service</a></div></div>',1)]))}var j={name:"PageWithFooter"};const R=(0,i.A)(j,[["render",P],["__scopeId","data-v-a7a4744a"]]);var D=R,N={components:{Header:_,VersionItem:T,LatestVersion:X,Footer:D},data(){return{versions:[],loading:!0,latestVersion:null,loadingHTMLContent:"Loading version history..."}},created(){this.fetchVersionHistory()},methods:{async fetchVersionHistory(){try{const e=await fetch("./version_history.json",{cache:"no-store"}),t=await e.json();this.latestVersion=t.versions[0],this.versions=t.versions.slice(1).map((e=>({...e,open:!1}))),this.loading=!1}catch(e){console.error("Error loading version history:",e),this.loadingHTMLContent="Failed to load version history. Refresh to retry."}}}};const W=(0,i.A)(N,[["render",h],["__scopeId","data-v-46a1c614"]]);var G=W;const Q={class:"user-manual-page"};function K(e,t,o,a,r,s){const i=(0,n.g2)("Header"),l=(0,n.g2)("UserManualTable"),d=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)("div",Q,[(0,n.bF)(i),t[0]||(t[0]=(0,n.Lk)("h1",null,"User Manual",-1)),(0,n.bF)(l),(0,n.bF)(d)])}const q={class:"user-manual-page"},z={class:"manual-table"},B={class:"download-buttons"},Y=["href"],$=["href"];function J(e,t,o,a,r,s){return(0,n.uX)(),(0,n.CE)("div",q,[t[1]||(t[1]=(0,n.Lk)("header",{class:"header"},[(0,n.Lk)("h3",null,"User Manual Downloads"),(0,n.Lk)("p",null,"Access the user manuals for our software below. Click to download.")],-1)),(0,n.Lk)("table",z,[t[0]||(t[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"Manual Title"),(0,n.Lk)("th",null,"Description"),(0,n.Lk)("th",null,"Download")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.manuals,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.id},[(0,n.Lk)("td",null,(0,w.v_)(e.title),1),(0,n.Lk)("td",null,(0,w.v_)(e.description),1),(0,n.Lk)("td",B,[(0,n.Lk)("a",{href:e.links.first.herf,class:"download-button",target:"_blank"},(0,w.v_)(e.links.first.text),9,Y),(0,n.Lk)("a",{href:e.links.last.herf,class:"download-button",target:"_blank"},(0,w.v_)(e.links.last.text),9,$)])])))),128))])])])}var Z={name:"UserManualPage",data(){return{manuals:[{id:1,title:"Quick Start Guide",description:"Quickly set up and start using HyperSensor Software with step-by-step instructions.",links:{first:{herf:"./downloads/Quick_Start_Guide_CN_v2.1.0.pdf",text:"Quick_Start_Guide_CN_v2.1.0.pdf"},last:{herf:"./downloads/Quick_Start_Guide_EN_v2.1.0.pdf",text:"Quick_Start_Guide_EN_v2.1.0.pdf"}}},{id:2,title:"User Manual",description:"A comprehensive guide to using HyperSensor Software.",links:{first:{herf:"/version-history/not-available",text:"Not Available"},last:{herf:"/version-history/not-available",text:"Not Available"}}}]}}};const ee=(0,i.A)(Z,[["render",J],["__scopeId","data-v-0c7d8223"]]);var te=ee,oe={components:{Header:_,UserManualTable:te,Footer:D}};const ae=(0,i.A)(oe,[["render",K],["__scopeId","data-v-3d00ff71"]]);var ne=ae;const re={class:"contact-page"},se={class:"contact-info"},ie={class:"info-item"},le={class:"info-link"};function de(e,t,o,a,r,s){const i=(0,n.g2)("Header"),l=(0,n.g2)("router-link"),d=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.Lk)("div",re,[t[4]||(t[4]=(0,n.Lk)("h1",{class:"contact-title"},"Contact Us",-1)),(0,n.Lk)("div",se,[t[2]||(t[2]=(0,n.Lk)("div",{class:"info-item"},[(0,n.Lk)("div",{class:"info-text"},[(0,n.Lk)("h3",null,"Email"),(0,n.Lk)("p",null,"For software support and inquiries.")]),(0,n.Lk)("div",{class:"info-link"},[(0,n.Lk)("a",{href:"mailto:tzuhui.lee@icloud.com"},"tzuhui.lee@icloud.com")])],-1)),(0,n.Lk)("div",ie,[t[1]||(t[1]=(0,n.Lk)("div",{class:"info-text"},[(0,n.Lk)("h3",null,"User Manual"),(0,n.Lk)("p",null,"Access our software comprehensive guide.")],-1)),(0,n.Lk)("div",le,[(0,n.bF)(l,{to:"/version-history/user-manual"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("User Manual")]))),_:1})])]),t[3]||(t[3]=(0,n.Fv)('<div class="info-item" data-v-36abe95a><div class="info-text" data-v-36abe95a><h3 data-v-36abe95a>Address (Hefei)</h3><p data-v-36abe95a>Visit us for in-person assistance.</p></div><div class="info-link" data-v-36abe95a><p data-v-36abe95a>CG PARK, Qingtan Rd, Shushan District, Hefei, Anhui</p></div></div><div class="info-item last" data-v-36abe95a><div class="info-text" data-v-36abe95a><h3 data-v-36abe95a>Address (Tianjin)</h3><p data-v-36abe95a>Visit us for in-person assistance.</p></div><div class="info-link" data-v-36abe95a><p data-v-36abe95a>Haitai W Rd, Xiqing District, Tianjin</p></div></div>',2))])]),(0,n.bF)(d)],64)}var ce={name:"ContactPage",components:{Header:_,Footer:D}};const ue=(0,i.A)(ce,[["render",de],["__scopeId","data-v-36abe95a"]]);var ve=ue;const pe={class:"not-found"};function he(e,t,o,a,r,s){const i=(0,n.g2)("Header"),l=(0,n.g2)("router-link"),d=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.Lk)("div",pe,[t[1]||(t[1]=(0,n.Lk)("h1",null,"404 - Page Not Found",-1)),t[2]||(t[2]=(0,n.Lk)("p",null,"Oops! The page you're looking for doesn't exist.",-1)),(0,n.bF)(l,{to:"/version-history"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Go back to Home")]))),_:1})]),(0,n.bF)(d)],64)}var fe={name:"NotFoundPage",components:{Header:_,Footer:D}};const ke=(0,i.A)(fe,[["render",he],["__scopeId","data-v-78014686"]]);var ge=ke;const be=[{path:"/HyperSensor_Software",redirect:"/version-history"},{path:"/version-history",name:"SoftwareVersion",component:G},{path:"/version-history/user-manual",name:"UserManual",component:ne},{path:"/version-history/contact-us",name:"ContactUs",component:ve},{path:"/version-history/*",name:"404NotFound",component:ge}],Le=(0,c.aE)({history:(0,c.LA)(),routes:be});var me=Le;(0,a.Ef)(d).use(me).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],r=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/version-history/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,s=a[0],i=a[1],l=a[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var c=l(o)}for(t&&t(a);d<s.length;d++)r=s[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self["webpackChunkversion_history_app"]=self["webpackChunkversion_history_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(1947)}));a=o.O(a)})();
//# sourceMappingURL=app.7c2bdf57.js.map
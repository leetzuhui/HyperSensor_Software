(function(){"use strict";var e={282:function(e,t,n){var o=n(5130),a=n(6768);function r(e,t,n,o,r,s){const i=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(i)}var s={name:"App"},i=n(1241);const l=(0,i.A)(s,[["render",r]]);var d=l,c=n(1387);const u={class:"version-history"},v=["innerHTML"],p={key:1};function f(e,t,n,o,r,s){const i=(0,a.g2)("Header"),l=(0,a.g2)("LatestVersion"),d=(0,a.g2)("VersionItem"),c=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.Lk)("div",u,[t[0]||(t[0]=(0,a.Lk)("h1",null,"HyperSensor Software Version History",-1)),r.loading?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"loading",innerHTML:r.loadingHTMLContent},null,8,v)):((0,a.uX)(),(0,a.CE)("div",p,[(0,a.bF)(l,{latestVersion:r.latestVersion},null,8,["latestVersion"]),(0,a.bF)(d,{versions:r.versions},null,8,["versions"])]))]),(0,a.bF)(c)],64)}var h=n.p+"img/logo.320916c4.png";const k={ref:"header"},g={class:"nav-links"};function b(e,t,n,o,r,s){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",k,[(0,a.bF)(i,{to:"/HyperSensor_Software",class:"logo"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("img",{src:h},null,-1)]))),_:1}),(0,a.Lk)("nav",g,[(0,a.bF)(i,{to:"/HyperSensor_Software"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Software Version History")]))),_:1}),(0,a.bF)(i,{to:"/User_Manual"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("User Manual")]))),_:1}),(0,a.bF)(i,{to:"/Contact_Us"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Contact Us")]))),_:1})])],512)}var _=n(4968),L={name:"PageWithHeader",data(){return{lastScrollTop:0}},methods:{handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop,t=this.$refs.header;e>this.lastScrollTop&&e>10?_.Ay.to(t,{height:60,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",duration:.3,ease:"power3.out"}):e<this.lastScrollTop&&(_.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"}),0==e&&_.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 0)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"})),this.lastScrollTop=e}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const m=(0,i.A)(L,[["render",b],["__scopeId","data-v-476d04e7"]]);var w=m,y=n(4232);const F={class:"previous-version-wrapper"},C={class:"version-box"},S=["onClick"],x={class:"header"};function A(e,t,n,o,r,s){return(0,a.uX)(),(0,a.CE)("div",F,[t[1]||(t[1]=(0,a.Lk)("div",{class:"section-title"},"Previous Versions",-1)),(0,a.Lk)("div",C,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.versions,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,y.C4)(["previous-version-item",{open:r.isOpen[e.id]}]),key:e.id,onClick:t=>s.toggle(e.id,n)},[(0,a.Lk)("div",x,[(0,a.Lk)("h3",null,(0,y.v_)(e.version),1),t[0]||(t[0]=(0,a.Lk)("span",{class:"accordion-icon"},[(0,a.Lk)("svg",{t:"1728872339944",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4236",width:"20px",height:"20px"},[(0,a.Lk)("path",{d:"M948.82895 361.713158c14.389732 18.446118 15.597233 41.568744 2.694365 51.643194L530.687618 741.618655c-2.910283 2.28095-12.262278 7.896854-13.852496 9.662057-15.679098 17.331737-38.223556 22.534226-50.383504 11.56029L70.112847 405.439032c-12.159948-10.984169-9.351995-33.961486 6.328126-51.333132 15.680121-17.362436 38.223556-22.545482 50.424436-11.571546l360.707248 325.258898 411.822416-321.244468C912.338874 336.474334 934.470941 343.277274 948.82895 361.713158L948.82895 361.713158z","p-id":"4237"})])],-1))]),(0,a.Lk)("div",{class:"detail",ref_for:!0,ref:e=>r.detailsRefs[n]=e},[(0,a.Lk)("p",null,"Release DateTime: "+(0,y.v_)(e.datetime),1),(0,a.Lk)("p",null,"Descriptions: "+(0,y.v_)(e.descriptions),1),(0,a.Lk)("p",null,"Id: "+(0,y.v_)(e.id),1)],512)],10,S)))),128))])])}var H={props:{versions:{type:Array,required:!0}},data(){return{isOpen:{},detailsRefs:[]}},methods:{toggle(e,t){this.isOpen[e]?this.close(e,t):this.open(e,t)},open(e,t){this.isOpen[e]=!0,_.Ay.to(this.detailsRefs[t],{height:"auto",duration:.5,opacity:1})},close(e,t){this.isOpen[e]=!1,_.Ay.to(this.detailsRefs[t],{height:0,duration:.5,opacity:0})}}};const E=(0,i.A)(H,[["render",A],["__scopeId","data-v-11d3613b"]]);var M=E;const T={class:"latest-version-wrapper"};function V(e,t,n,o,r,s){return(0,a.uX)(),(0,a.CE)("div",T,[t[2]||(t[2]=(0,a.Lk)("div",{class:"section-title"},"Latest Version",-1)),(0,a.Lk)("div",{class:"latest-version-item",onMouseenter:t[0]||(t[0]=e=>s.hoverIn(e)),onMouseleave:t[1]||(t[1]=e=>s.hoverOut(e))},[(0,a.Lk)("h2",null,(0,y.v_)(n.latestVersion.version),1),(0,a.Lk)("p",null,"Release DateTime: "+(0,y.v_)(n.latestVersion.datetime),1),(0,a.Lk)("p",null,"Descriptions: "+(0,y.v_)(n.latestVersion.descriptions),1),(0,a.Lk)("p",null,"Id: "+(0,y.v_)(n.latestVersion.id),1)],32)])}var O={name:"LatestVersion",props:{latestVersion:{type:Object,required:!0}},methods:{hoverIn(e){const t=e.currentTarget;_.Ay.to(t,{scale:1.02,boxShadow:"0 8px 20px rgba(0, 0, 0, 0.45)",background:"linear-gradient(135deg, rgba(0, 140, 255, 1) 0%, rgba(0, 160, 255, 1) 25%, rgba(0, 180, 255, 1) 50%, rgba(0, 200, 255, 1) 75%, rgba(0, 122, 255, 1) 100%)",duration:1,ease:"power3.out"})},hoverOut(e){const t=e.currentTarget;_.Ay.to(t,{scale:1,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",background:"linear-gradient(135deg, rgba(0, 122, 255, 1) 0%, rgba(0, 140, 255, 1) 25%, rgba(0, 160, 255, 1) 50%, rgba(0, 180, 255, 1) 75%, rgba(0, 200, 255, 1) 100%)",duration:1,ease:"power3.out"})}}};const U=(0,i.A)(O,[["render",V],["__scopeId","data-v-fe2c2062"]]);var I=U;const X={class:"footer"};function P(e,t,n,o,r,s){return(0,a.uX)(),(0,a.CE)("footer",X,t[0]||(t[0]=[(0,a.Fv)('<div class="footer-content" data-v-12079ddb><div class="author-info" data-v-12079ddb><p data-v-12079ddb>Author: Lee Tzu-Hui</p><p data-v-12079ddb>All rights reserved.</p></div><div class="legal-links" data-v-12079ddb><a href="/privacy-policy" data-v-12079ddb>Privacy Policy</a><a href="/terms-of-service" data-v-12079ddb>Terms of Service</a></div></div>',1)]))}var j={name:"PageWithFooter"};const N=(0,i.A)(j,[["render",P],["__scopeId","data-v-12079ddb"]]);var R=N,D={components:{Header:w,VersionItem:M,LatestVersion:I,Footer:R},data(){return{versions:[],loading:!0,latestVersion:null,loadingHTMLContent:"Loading version history..."}},created(){this.fetchVersionHistory()},methods:{async fetchVersionHistory(){try{const e=await fetch("./version_history.json",{cache:"no-store"}),t=await e.json();this.latestVersion=t.versions[0],this.versions=t.versions.slice(1).map((e=>({...e,open:!1}))),this.loading=!1}catch(e){console.error("Error loading version history:",e),this.loadingHTMLContent="Failed to load version history. Refresh to retry."}}}};const W=(0,i.A)(D,[["render",f],["__scopeId","data-v-46a1c614"]]);var G=W;const Q={class:"user-manual-page"};function K(e,t,n,o,r,s){const i=(0,a.g2)("Header"),l=(0,a.g2)("UserManualTable"),d=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",Q,[(0,a.bF)(i),t[0]||(t[0]=(0,a.Lk)("h1",null,"User Manual",-1)),(0,a.bF)(l),(0,a.bF)(d)])}const q={class:"user-manual-page"},z={class:"manual-table"},B={class:"download-buttons"},Y=["href"],$=["href"];function J(e,t,n,o,r,s){return(0,a.uX)(),(0,a.CE)("div",q,[t[1]||(t[1]=(0,a.Lk)("header",{class:"header"},[(0,a.Lk)("h3",null,"User Manual Downloads"),(0,a.Lk)("p",null,"Access the user manuals for our software below. Click to download.")],-1)),(0,a.Lk)("table",z,[t[0]||(t[0]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Manual Title"),(0,a.Lk)("th",null,"Description"),(0,a.Lk)("th",null,"Download")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.manuals,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("td",null,(0,y.v_)(e.title),1),(0,a.Lk)("td",null,(0,y.v_)(e.description),1),(0,a.Lk)("td",B,[(0,a.Lk)("a",{href:e.links.first.herf,class:"download-button",target:"_blank"},(0,y.v_)(e.links.first.text),9,Y),(0,a.Lk)("a",{href:e.links.last.herf,class:"download-button",target:"_blank"},(0,y.v_)(e.links.last.text),9,$)])])))),128))])])])}var Z={name:"UserManualPage",data(){return{manuals:[{id:1,title:"Quick Start Guide",description:"Quickly set up and start using HyperSensor Software with step-by-step instructions.",links:{first:{herf:"/downloads/Quick_Start_Guide_CN_v2.1.0.pdf",text:"Quick_Start_Guide_CN_v2.1.0.pdf"},last:{herf:"/downloads/Quick_Start_Guide_EN_v2.1.0.pdf",text:"Quick_Start_Guide_EN_v2.1.0.pdf"}}},{id:2,title:"User Manual",description:"A comprehensive guide to using HyperSensor Software.",links:{first:{herf:"/downloads/User_Manual_CN.pdf",text:"Not Available"},last:{herf:"/downloads/User_Manual_EN.pdf",text:"Not Available"}}}]}}};const ee=(0,i.A)(Z,[["render",J],["__scopeId","data-v-0a5865d5"]]);var te=ee,ne={components:{Header:w,UserManualTable:te,Footer:R}};const oe=(0,i.A)(ne,[["render",K],["__scopeId","data-v-3d00ff71"]]);var ae=oe;const re={class:"contact-page"},se={class:"contact-info"},ie={class:"info-item"},le={class:"info-link"};function de(e,t,n,o,r,s){const i=(0,a.g2)("Header"),l=(0,a.g2)("router-link"),d=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.Lk)("div",re,[t[4]||(t[4]=(0,a.Lk)("h1",{class:"contact-title"},"Contact Us",-1)),(0,a.Lk)("div",se,[t[2]||(t[2]=(0,a.Lk)("div",{class:"info-item"},[(0,a.Lk)("div",{class:"info-text"},[(0,a.Lk)("h3",null,"Email"),(0,a.Lk)("p",null,"For software support and inquiries.")]),(0,a.Lk)("div",{class:"info-link"},[(0,a.Lk)("a",{href:"mailto:tzuhui.lee@icloud.com"},"tzuhui.lee@icloud.com")])],-1)),(0,a.Lk)("div",ie,[t[1]||(t[1]=(0,a.Lk)("div",{class:"info-text"},[(0,a.Lk)("h3",null,"User Manual"),(0,a.Lk)("p",null,"Access our software comprehensive guide.")],-1)),(0,a.Lk)("div",le,[(0,a.bF)(l,{to:"/User_Manual"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("User Manual")]))),_:1})])]),t[3]||(t[3]=(0,a.Fv)('<div class="info-item" data-v-ceac301e><div class="info-text" data-v-ceac301e><h3 data-v-ceac301e>Address (Hefei)</h3><p data-v-ceac301e>Visit us for in-person assistance.</p></div><div class="info-link" data-v-ceac301e><p data-v-ceac301e>CG PARK, Qingtan Rd, Shushan District, Hefei, Anhui</p></div></div><div class="info-item last" data-v-ceac301e><div class="info-text" data-v-ceac301e><h3 data-v-ceac301e>Address (Tianjin)</h3><p data-v-ceac301e>Visit us for in-person assistance.</p></div><div class="info-link" data-v-ceac301e><p data-v-ceac301e>Haitai W Rd, Xiqing District, Tianjin</p></div></div>',2))])]),(0,a.bF)(d)],64)}var ce={name:"ContactPage",components:{Header:w,Footer:R}};const ue=(0,i.A)(ce,[["render",de],["__scopeId","data-v-ceac301e"]]);var ve=ue;const pe={class:"not-found"};function fe(e,t,n,o,r,s){const i=(0,a.g2)("Header"),l=(0,a.g2)("router-link"),d=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.Lk)("div",pe,[t[1]||(t[1]=(0,a.Lk)("h1",null,"404 - Page Not Found",-1)),t[2]||(t[2]=(0,a.Lk)("p",null,"Oops! The page you're looking for doesn't exist.",-1)),(0,a.bF)(l,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Go back to Home")]))),_:1})]),(0,a.bF)(d)],64)}var he={name:"NotFoundPage",components:{Header:w,Footer:R}};const ke=(0,i.A)(he,[["render",fe],["__scopeId","data-v-6ecbca2e"]]);var ge=ke;const be=[{path:"/HyperSensor_Software",name:"Home",component:G},{path:"/User_Manual",name:"UserManual",component:ae},{path:"/Contact_Us",name:"ContactUs",component:ve},{path:"/:pathMatch(.*)*",name:"404NotFound",component:ge}],_e=(0,c.aE)({history:(0,c.LA)(),routes:be});var Le=_e;(0,o.Ef)(d).use(Le).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/HyperSensor_Software/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,s=o[0],i=o[1],l=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(t&&t(o);d<s.length;d++)r=s[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkversion_history_app"]=self["webpackChunkversion_history_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(282)}));o=n.O(o)})();
//# sourceMappingURL=app.e5c48937.js.map
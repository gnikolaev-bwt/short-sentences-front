(this["webpackJsonpshort-sentences"]=this["webpackJsonpshort-sentences"]||[]).push([[0],{34:function(e,t,c){e.exports={card:"ClusterDetails_card__2rJ2E",cardHeader:"ClusterDetails_cardHeader__39RZa",focused:"ClusterDetails_focused__2gfxo",hr:"ClusterDetails_hr__2tPZl"}},44:function(e,t,c){e.exports={cardGroup:"PopularProducuts_cardGroup__wd_bo",card:"PopularProducuts_card__29wVf"}},52:function(e,t,c){e.exports={container:"Home_container__2mBc-"}},63:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(22),a=c.n(s),r=(c(63),c(101)),i=c(99),o=c(23),l=c(12),d=c(11),u=c(100),j=c(53),b=c(54),m=c(102),h=c(104),x=c(50),O=c(98),p=c(103),f=c(36),g=c(24),v=[{name:"Samsung Electronics Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black",asin:"B096BKFG57",language:"En"},{name:"Apple AirPods with Charging Case Previous Model",asin:"B01MQWUXZS",language:"En"},{name:"Fitbit Charge 2 Heart Rate Fitness Wristband Black Large US Version 1 Count",asin:"B01K9S260E",language:"En"}],_={B096BKFG57:[{cluster_description:"good screen",cluster_id:1,group:"Aspect based",sentences:["god screen","nice image"],statements:2},{cluster_description:"dont buy",cluster_id:2,group:"Ipsum dolor",sentences:["dont buy","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:3,group:"Adipisicing elit",sentences:["dont buy","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:4,group:"Omnis, voluptate",sentences:["sit amet","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:5,group:"emotional based",sentences:["dont buy","omnis","adipisicing elit","for me is nice"],statements:4}],B01MQWUXZS:[{cluster_description:"dont buy",cluster_id:1,group:"emotional based",sentences:["dont buy","too cool","please dont buy"],statements:3}],B01K9S260E:[{cluster_description:"dont buy",cluster_id:1,group:"emotional based",sentences:["dont buy","too cool","please dont buy"],statements:3}]},y=function(e,t){return new Promise((function(c){setTimeout((function(){c(e)}),t)}))},N=function(e){return"http://images.amazon.com/images/P/".concat(e,".01._SCMZZZZZZZ_.jpg")},S=function e(){Object(g.a)(this,e)};S.getPopularProducts=function(){return y(v,500)},S.getProductClusters=function(e){return y(_[e],2e3)};var P,w=c(44),C=c.n(w),B=c(2),E=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){S.getPopularProducts().then((function(e){s(e)}))}),[]),Object(B.jsx)(O.a,{className:C.a.cardGroup,children:c.length?c.slice(0,3).map((function(e,t){var c,n=N(e.asin);return Object(B.jsxs)(p.a,{className:C.a.card,as:o.b,to:P.ProductDetails.replace(":asin",e.asin),children:[Object(B.jsx)("div",{style:{height:"10rem",background:"url(".concat(n,") no-repeat center")}}),Object(B.jsx)(p.a.Body,{children:Object(B.jsx)(p.a.Title,{children:(c=e.name,c.split(" ").slice(0,11).join(" "))})}),Object(B.jsx)(p.a.Footer,{children:Object(B.jsxs)("small",{className:"text-muted",children:["Most popular ",Object(B.jsx)(x.a,{})]})})]},t)})):Object(B.jsx)(f.HashLoader,{})})},D=function(e){var t=e.asin;return Object(B.jsxs)(p.a,{children:[Object(B.jsx)("div",{style:{height:"10rem",background:"url(".concat(N(t),") center no-repeat")}}),Object(B.jsx)(p.a.Body,{children:Object(B.jsxs)(p.a.Title,{children:["ASIN: ",t]})})]})},Z=c(8),k=c(5),F=c.n(k),A=c(58),H=c(40),G=c(51),T=c(34),R=c.n(T),z=function(e){var t=e.cluster,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=F()(R.a.card,Object(Z.a)({},R.a.focused,a));return Object(B.jsxs)(p.a,{className:i,children:[Object(B.jsxs)("div",{className:R.a.cardHeader,onClick:function(){return r((function(e){return!e}))},children:[Object(B.jsxs)("div",{className:"flex-grow-1",children:[Object(B.jsx)(p.a.Title,{children:t.group}),Object(B.jsx)(p.a.Text,{children:t.cluster_description})]}),Object(B.jsxs)("div",{className:"d-flex align-items-center mx-2",children:[Object(B.jsx)(H.c,{className:"me-1"}),Object(B.jsx)("span",{className:"lead",children:t.statements})]}),Object(B.jsx)("div",{className:"d-flex align-items-center mx-3",children:a?Object(B.jsx)(H.a,{}):Object(B.jsx)(H.b,{})})]}),Object(B.jsx)(A.a,{in:a,children:Object(B.jsxs)("div",{children:[Object(B.jsx)("hr",{className:R.a.hr}),t.sentences.map((function(e,t){return Object(B.jsxs)("div",{children:[Object(B.jsx)(G.a,{}),Object(B.jsx)("span",{className:"ms-1",children:e})]},t)})),Object(B.jsx)(h.a,{variant:"light",className:"w-100 mt-3",children:"View all"})]})})]})},M=function(e){var t=e.clusters;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h4",{children:"Review Summary"}),Object(B.jsx)("div",{className:"mt-3",children:t?(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(B.jsx)(z,{cluster:e},t)})):Object(B.jsxs)("div",{className:"w-100 d-flex flex-column align-items-center mt-5",children:[Object(B.jsx)(f.ClockLoader,{}),Object(B.jsx)("div",{className:"mt-2",children:"Please, wait a few seconds"})]}):Object(B.jsx)("span",{children:"No reviews found for this product"})})]})},U=c(52),I=c.n(U);!function(e){e.Home="/",e.ProductDetails="/:asin"}(P||(P={}));var K=[{path:P.Home,component:function(){var e=Object(d.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1];return Object(B.jsxs)(i.a,{className:I.a.container,children:[Object(B.jsx)(u.a,{className:"g-2",children:Object(B.jsx)(j.a,{md:12,children:Object(B.jsx)("h2",{children:"Review Summarizer"})})}),Object(B.jsx)("form",{onSubmit:function(t){t.preventDefault();var c=function(e){var t=new RegExp("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])").exec(e);return t?null===t||void 0===t?void 0:t[0]:null}(s);c&&e.push(P.ProductDetails.replace(":asin",c))},children:Object(B.jsxs)(u.a,{className:"g-2 mt-2",children:[Object(B.jsx)(j.a,{md:8,children:Object(B.jsx)(b.a,{label:"Amazon URL or ASIN",children:Object(B.jsx)(m.a.Control,{placeholder:"https://amazon.com/",value:s,onChange:function(e){return a(e.target.value)}})})}),Object(B.jsx)(j.a,{md:2,children:Object(B.jsx)(b.a,{label:"Select language",children:Object(B.jsxs)(m.a.Select,{children:[Object(B.jsx)("option",{value:"En",children:"En"}),Object(B.jsx)("option",{value:"De",children:"De"}),Object(B.jsx)("option",{value:"Fr",children:"Fr"})]})})}),Object(B.jsx)(j.a,{md:2,children:Object(B.jsx)(h.a,{type:"submit",variant:"primary",className:"w-100 h-100",children:"Summarize"})})]})}),Object(B.jsx)(E,{})]})}},{path:P.ProductDetails,component:function(e){var t=e.match.params.asin,c=Object(n.useState)([]),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){S.getProductClusters(t).then((function(e){r(e)}))}),[t]),Object(B.jsx)(i.a,{children:Object(B.jsxs)(u.a,{className:"g-4 mt-3",children:[Object(B.jsx)(j.a,{md:3,children:Object(B.jsx)(D,{asin:t})}),Object(B.jsx)(j.a,{md:9,className:"rounded-3 border p-4",children:Object(B.jsx)(M,{clusters:a})})]})})}}],L=function(){return Object(B.jsx)(r.a,{bg:"dark",variant:"dark",children:Object(B.jsxs)(i.a,{children:[Object(B.jsx)(r.a.Brand,{as:o.b,to:P.Home,children:"Short sentences"}),Object(B.jsx)(r.a.Toggle,{}),Object(B.jsx)(r.a.Collapse,{className:"justify-content-end",children:Object(B.jsxs)(r.a.Text,{children:["Using public ",Object(B.jsx)("b",{children:"Amazon API"})]})})]})})},V=function(e){var t=e.children;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(L,{}),t]})},W=c(3),J=function(){return Object(B.jsx)(o.a,{children:Object(B.jsx)(d.c,{children:K.map((function(e,t){return Object(B.jsx)(d.a,{exact:!0,path:e.path,render:function(t){return Object(B.jsx)(V,{children:Object(B.jsx)(e.component,Object(W.a)({},t))})}},t)}))})})};a.a.render(Object(B.jsx)(J,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.49971252.chunk.js.map
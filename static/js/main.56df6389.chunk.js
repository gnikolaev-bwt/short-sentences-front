(this["webpackJsonpshort-sentences"]=this["webpackJsonpshort-sentences"]||[]).push([[0],{34:function(e,t,c){e.exports={card:"ClusterDetails_card__2rJ2E",cardHeader:"ClusterDetails_cardHeader__39RZa",focused:"ClusterDetails_focused__2gfxo",hr:"ClusterDetails_hr__2tPZl"}},44:function(e,t,c){e.exports={cardGroup:"PopularProducuts_cardGroup__wd_bo",card:"PopularProducuts_card__29wVf"}},46:function(e,t,c){e.exports={container:"Home_container__2mBc-",select:"Home_select__3upMm"}},63:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(22),a=c.n(s),r=(c(63),c(101)),i=c(99),o=c(23),l=c(11),u=c(12),d=c(100),j=c(53),b=c(54),m=c(102),h=c(104),O=c(51),x=c(98),p=c(103),g=c(36),f=c(24),_=[{name:"Samsung Electronics Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black",asin:"B096BKFG57",language:"En",imageUrl:"https://m.media-amazon.com/images/I/713eQBXJpGL._AC_SX569_.jpg"},{name:"Apple AirPods with Charging Case Previous Model",asin:"B01MQWUXZS",language:"En",imageUrl:"https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"},{name:"Fitbit Charge 2 Heart Rate Fitness Wristband Black Large US Version 1 Count",asin:"B01K9S260E",language:"En",imageUrl:"https://m.media-amazon.com/images/I/81cp0NTn-EL._AC_SX425_.jpg"}],v={B096BKFG57:[{cluster_description:"good screen",cluster_id:1,group:"Aspect based",sentences:["god screen","nice image"],statements:2},{cluster_description:"dont buy",cluster_id:2,group:"Ipsum dolor",sentences:["dont buy","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:3,group:"Adipisicing elit",sentences:["dont buy","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:4,group:"Omnis, voluptate",sentences:["sit amet","too cool","please dont buy"],statements:3},{cluster_description:"dont buy",cluster_id:5,group:"emotional based",sentences:["dont buy","omnis","adipisicing elit","for me is nice"],statements:4}],B01MQWUXZS:[{cluster_description:"dont buy",cluster_id:1,group:"emotional based",sentences:["dont buy","too cool","please dont buy"],statements:3}],B01K9S260E:[{cluster_description:"dont buy",cluster_id:1,group:"emotional based",sentences:["dont buy","too cool","please dont buy"],statements:3}]},N=function(e,t){return new Promise((function(c){setTimeout((function(){c(e)}),t)}))},y=function e(){Object(f.a)(this,e)};y.getPopularProducts=function(){return N(_,500)},y.getProductClusters=function(e){return N(v[e],2e3)};var S,C=c(44),P=c.n(C),w=c(2),B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){y.getPopularProducts().then((function(e){s(e)}))}),[]),Object(w.jsx)(x.a,{className:P.a.cardGroup,children:c.length?c.slice(0,3).map((function(e,t){var c,n=X(S.ProductDetails,{asin:e.asin,language:e.language});return Object(w.jsxs)(p.a,{className:P.a.card,as:o.b,to:n,children:[Object(w.jsx)("div",{style:{height:"10rem",background:"url(".concat(e.imageUrl,") no-repeat center"),backgroundSize:"25%"}}),Object(w.jsx)(p.a.Body,{children:Object(w.jsx)(p.a.Title,{children:(c=e.name,c.split(" ").slice(0,11).join(" "))})}),Object(w.jsx)(p.a.Footer,{children:Object(w.jsxs)("small",{className:"text-muted",children:["Most popular ",Object(w.jsx)(O.a,{})]})})]},t)})):Object(w.jsx)(g.HashLoader,{})})},E=function(e){var t=e.asin;return Object(w.jsxs)(p.a,{children:[Object(w.jsx)("div",{style:{height:"10rem",background:"#2b2b2b"}}),Object(w.jsx)(p.a.Body,{children:Object(w.jsxs)(p.a.Title,{children:["ASIN: ",t]})})]})},A=c(8),k=c(5),D=c.n(k),F=c(58),H=c(40),I=c(52),T=c(34),z=c.n(T),U=function(e){var t=e.cluster,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=D()(z.a.card,Object(A.a)({},z.a.focused,a));return Object(w.jsxs)(p.a,{className:i,children:[Object(w.jsxs)("div",{className:z.a.cardHeader,onClick:function(){return r((function(e){return!e}))},children:[Object(w.jsxs)("div",{className:"flex-grow-1",children:[Object(w.jsx)(p.a.Title,{children:t.group}),Object(w.jsx)(p.a.Text,{children:t.cluster_description})]}),Object(w.jsxs)("div",{className:"d-flex align-items-center mx-2",children:[Object(w.jsx)(H.c,{className:"me-1"}),Object(w.jsx)("span",{className:"lead",children:t.statements})]}),Object(w.jsx)("div",{className:"d-flex align-items-center mx-3",children:a?Object(w.jsx)(H.a,{}):Object(w.jsx)(H.b,{})})]}),Object(w.jsx)(F.a,{in:a,children:Object(w.jsxs)("div",{children:[Object(w.jsx)("hr",{className:z.a.hr}),t.sentences.map((function(e,t){return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{}),Object(w.jsx)("span",{className:"ms-1",children:e})]},t)})),Object(w.jsx)(h.a,{variant:"light",className:"w-100 mt-3",children:"View all"})]})})]})},G=function(e){var t=e.clusters;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h4",{children:"Review Summary"}),Object(w.jsx)("div",{className:"mt-3",children:t?(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(w.jsx)(U,{cluster:e},t)})):Object(w.jsxs)("div",{className:"w-100 d-flex flex-column align-items-center mt-5",children:[Object(w.jsx)(g.ClockLoader,{}),Object(w.jsx)("div",{className:"mt-2",children:"Please, wait a few seconds"})]}):Object(w.jsx)("span",{children:"No reviews found for this product"})})]})},L=c(46),R=c.n(L);!function(e){e.Home="/",e.ProductDetails="/:asin/:language"}(S||(S={}));var M=[{path:S.Home,component:function(){var e=Object(u.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),O=o[0],x=o[1],p=Object(n.useState)("En"),g=Object(l.a)(p,2),f=g[0],_=g[1],v=function(e){var t=function(e){var t=new RegExp("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])").exec(e);return t?null===t||void 0===t?void 0:t[0]:null}(e);t?(x(""),a(t)):x("Incorrect Amazon product url or asin, please, try again")};return Object(w.jsxs)(i.a,{className:R.a.container,children:[Object(w.jsx)(d.a,{className:"g-2",children:Object(w.jsx)(j.a,{md:12,children:Object(w.jsx)("h2",{children:"Review Summarizer"})})}),Object(w.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),s){var c=X(S.ProductDetails,{asin:s,language:f});e.push(c)}else x("This is a required field")},children:Object(w.jsxs)(d.a,{className:"g-2 mt-2",children:[Object(w.jsx)(j.a,{md:8,children:Object(w.jsx)(b.a,{controlId:"asin",label:"Amazon URL or ASIN",children:Object(w.jsx)(m.a.Control,{placeholder:"https://amazon.com",onChange:function(e){return v(e.target.value)},isInvalid:!!O})})}),Object(w.jsx)(j.a,{md:2,children:Object(w.jsx)(b.a,{label:"Select language",children:Object(w.jsxs)(m.a.Control,{as:"select",className:R.a.select,onChange:function(e){return _(e.target.value)},children:[Object(w.jsx)("option",{value:"En",children:"En"}),Object(w.jsx)("option",{value:"De",children:"De"}),Object(w.jsx)("option",{value:"Fr",children:"Fr"})]})})}),Object(w.jsx)(j.a,{md:2,children:Object(w.jsx)(h.a,{type:"submit",variant:"primary",className:"w-100 h-100",children:"Summarize"})})]})}),Object(w.jsx)(B,{})]})}},{path:S.ProductDetails,component:function(e){var t=e.match.params.asin,c=Object(n.useState)([]),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){y.getProductClusters(t).then((function(e){r(e)}))}),[t]),Object(w.jsx)(i.a,{children:Object(w.jsxs)(d.a,{className:"g-4 mt-3",children:[Object(w.jsx)(j.a,{md:3,children:Object(w.jsx)(E,{asin:t})}),Object(w.jsx)(j.a,{md:9,className:"rounded-3 border p-4",children:Object(w.jsx)(G,{clusters:a})})]})})}}],X=function(e,t){return Object.entries(t).reduce((function(e,t){var c=Object(l.a)(t,2),n=c[0],s=c[1];return e.replace(":".concat(n),s)}),e)},Z=function(){return Object(w.jsx)(r.a,{bg:"dark",variant:"dark",children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(r.a.Brand,{as:o.b,to:S.Home,children:"Short sentences"}),Object(w.jsx)(r.a.Toggle,{}),Object(w.jsx)(r.a.Collapse,{className:"justify-content-end",children:Object(w.jsxs)(r.a.Text,{children:["Using public ",Object(w.jsx)("b",{children:"Amazon API"})]})})]})})},J=function(e){var t=e.children;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Z,{}),t]})},K=c(3),V=function(){return Object(w.jsx)(o.a,{basename:"/",children:Object(w.jsx)(u.c,{children:M.map((function(e,t){return Object(w.jsx)(u.a,{exact:!0,path:e.path,render:function(t){return Object(w.jsx)(J,{children:Object(w.jsx)(e.component,Object(K.a)({},t))})}},t)}))})})};a.a.render(Object(w.jsx)(V,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.56df6389.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GOhF:function(e,t,a){"use strict";a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("5hJT"),a("GkPX");var n=a("mXGw"),r=a("R82R"),o=a("ozoj"),i=a("BQn0"),c=a("/ZiB"),l=a("1LRU"),s=a("bLdV"),d=a("7bDs"),u=a.n(d),m=a("Vjni"),p=a.n(m),b=a("HeAU"),g=a.n(b),h=a("MU2d"),f=a("h/Rp");var v=Object(r.a)((function(e){return Object(o.a)({avatar:{width:e.spacing(9),height:e.spacing(9)},item:{marginRight:e.spacing(1)}})}));t.a=function(e){var t=e.author,a=t.name,r=t.url,o=t.twitter,d=t.github,m=t.avatar,b=t.description,y=e.disableLink,O=void 0!==y&&y,x=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["author","disableLink"]),j=v(),E=m&&m.childImageSharp?m.childImageSharp.fluid.src:null;return n.createElement(i.a,Object.assign({display:"flex",alignItems:"center"},x),n.createElement(s.a,{className:j.avatar,alt:a,src:E},E?null:n.createElement(f.b,null)),n.createElement(i.a,{display:"flex",flexDirection:"column",pl:4},n.createElement(c.a,{variant:"h6"},a),n.createElement(c.a,{variant:"body2",gutterBottom:!0},b),n.createElement("div",null,o?n.createElement(l.a,{className:j.item,href:"https://twitter.com/"+o,color:"inherit"},n.createElement(u.a,null)):null,r?n.createElement(l.a,{className:j.item,href:r,color:"inherit"},n.createElement(g.a,null)):null,d?n.createElement(l.a,{className:j.item,href:"https://github.com/"+d,color:"inherit"},n.createElement(p.a,null)):null),O?null:n.createElement(c.a,{variant:"body2"},n.createElement(h.b,{to:"/author/"+a},"記事一覧へ"))))}},HeAU:function(e,t,a){"use strict";a("d3/y");var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mXGw")),o=(0,n(a("c9Um")).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.default=o},K392:function(e,t,a){"use strict";a("5hJT"),a("GkPX");var n=a("mXGw"),r=a("Wbzz"),o=a("R82R"),i=a("ozoj"),c=a("BQn0"),l=a("u44p"),s=(a("yIlq"),a("Fcif")),d=a("dV/x"),u=(a("W0B4"),a("PDtE")),m=a("gbh0"),p=(a("V7cS"),a("lQyR"),a("YhIr"),a("6CzD")),b=a("aNYv"),g=a("omU1");var h=a("Rx6o"),f=a("x+AB"),v=a("VQdz");function y(e,t){var a=n.memo(n.forwardRef((function(t,a){return n.createElement(v.a,Object(s.a)({ref:a},t),e)})));return a.muiName=v.a.muiName,a}var O=y(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),x=y(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),j=y(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),E=y(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),w=a("mxPc"),k=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,i=void 0===o?"standard":o,c=e.component,l=e.disabled,m=void 0!==l&&l,p=e.page,b=e.selected,g=void 0!==b&&b,h=e.shape,v=void 0===h?"round":h,y=e.size,k=void 0===y?"medium":y,C=e.type,z=void 0===C?"page":C,N=e.variant,P=void 0===N?"text":N,L=Object(d.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]);return"start-ellipsis"===z||"end-ellipsis"===z?n.createElement("div",{ref:t,className:Object(u.a)(a.root,a.ellipsis,m&&a.disabled,"medium"!==k&&a["size".concat(Object(w.a)(k))])},"…"):n.createElement(f.a,Object(s.a)({ref:t,component:c,disabled:m,focusVisibleClassName:a.focusVisible,className:Object(u.a)(a.root,a.page,a[P],a[v],r,"standard"!==i&&a["".concat(P).concat(Object(w.a)(i))],m&&a.disabled,g&&a.selected,"medium"!==k&&a["size".concat(Object(w.a)(k))])},L),"page"===z&&p,"previous"===z&&n.createElement(j,{className:a.icon}),"next"===z&&n.createElement(E,{className:a.icon}),"first"===z&&n.createElement(O,{className:a.icon}),"last"===z&&n.createElement(x,{className:a.icon}))})),C=Object(m.a)((function(e){return{root:Object(s.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(h.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.b)(e.palette.primary.main,.5)),backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.b)(e.palette.secondary.main,.5)),backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(k);function z(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var N=n.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,r=e.className,o=e.color,i=void 0===o?"standard":o,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),l=void 0===c?z:c,m=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===m?function(e){return n.createElement(C,e)}:m,f=e.shape,v=void 0===f?"round":f,y=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),O=void 0===y?"medium":y,x=e.variant,j=void 0===x?"text":x,E=Object(d.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,r=void 0===n?"usePagination":n,o=e.count,i=void 0===o?1:o,c=e.defaultPage,l=void 0===c?1:c,u=e.disabled,m=void 0!==u&&u,h=e.hideNextButton,f=void 0!==h&&h,v=e.hidePrevButton,y=void 0!==v&&v,O=e.onChange,x=e.page,j=e.showFirstButton,E=void 0!==j&&j,w=e.showLastButton,k=void 0!==w&&w,C=e.siblingCount,z=void 0===C?1:C,N=Object(d.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),P=a-1,L=Object(g.a)({controlled:x,default:l,name:r}),R=Object(b.a)(L,2),B=R[0],S=R[1],M=function(e,t){x||S(t),O&&O(e,t)},$=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},V=$(1,Math.min(P+1,i)),F=$(Math.max(i-P,P+2),i),I=Math.max(Math.min(B-z,i-P-2*z-2),P+3),T=Math.min(Math.max(B+z,P+2*z+3),F[0]-2),A=[].concat(Object(p.a)(E?["first"]:[]),Object(p.a)(y?[]:["previous"]),Object(p.a)(V),Object(p.a)(I>P+3?["start-ellipsis"]:2+P<i-P-1?[2+P]:[]),Object(p.a)($(I,T)),Object(p.a)(T<i-P-2?["end-ellipsis"]:i-P-1>P+1?[i-P-1]:[]),Object(p.a)(F),Object(p.a)(f?[]:["next"]),Object(p.a)(k?["last"]:[])),G=function(e){switch(e){case"first":return 1;case"previous":return B-1;case"next":return B+1;case"last":return i;default:return null}},W=A.map((function(e){return"number"==typeof e?{onClick:function(t){M(t,e)},type:"page",page:e,selected:e===B,disabled:m,"aria-current":e===B?"true":void 0}:{onClick:function(t){M(t,G(e))},type:e,page:G(e),selected:!1,disabled:m||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?B>=i:B<=1)}}));return Object(s.a)({items:W},N)}(Object(s.a)({},e,{componentName:"Pagination"})).items;return n.createElement("nav",Object(s.a)({"aria-label":"pagination navigation",className:Object(u.a)(a.root,r),ref:t},E),n.createElement("ul",{className:a.ul},w.map((function(e,t){return n.createElement("li",{key:t},h(Object(s.a)({},e,{color:i,"aria-label":l(e.type,e.page,e.selected),shape:v,size:O,variant:j})))}))))})),P=Object(m.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(N),L=a("gFAl"),R=a("Mwe3"),B=Object(o.a)((function(e){return Object(i.a)({ul:{justifyContent:"center"}})}));t.a=function(e){var t=e.edges,a=e.numPages,o=e.currentPage,i=e.basePath,s=B();return n.createElement(n.Fragment,null,n.createElement(l.a,null,t.map((function(e){var t=e.node;return n.createElement(L.a,{key:t.id,to:t.fields.slug,primaryText:t.frontmatter.title,secondaryText:t.frontmatter.date+" post by "+t.frontmatter.author.name,divider:!0})}))),n.createElement(c.a,{textAlign:"center",px:2,py:4},n.createElement(P,{classes:s,count:a,defaultPage:o,color:"primary",renderItem:function(e){return n.createElement(C,Object.assign({component:r.Link,to:i+"/"+(1===e.page?"":""+e.page)},e))}})),n.createElement(R.b,null))}},Mwe3:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var n=a("mXGw"),r=a("BQn0"),o=a("JF+v");function i(){var e=Object(o.useLocation)().pathname;return n.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))}),[e]),n.createElement(r.a,{px:1,py:2,overflow:"hidden",key:e},n.createElement("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"9174058264"}))}function c(){var e=Object(o.useLocation)().pathname;return n.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))}),[e]),n.createElement(r.a,{px:1,py:2,overflow:"hidden",key:e},n.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"3332658358","data-ad-format":"auto","data-full-width-responsive":"true"}))}},bLdV:function(e,t,a){"use strict";var n=a("Fcif"),r=a("dV/x"),o=a("mXGw"),i=(a("W0B4"),a("PDtE")),c=a("gbh0"),l=a("VQdz");var s,d,u=(s=o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),(d=o.memo(o.forwardRef((function(e,t){return o.createElement(l.a,Object(n.a)({},e,{ref:t}),s)})))).muiName=l.a.muiName,d);var m=o.forwardRef((function(e,t){var a=e.alt,c=e.children,l=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,p=e.imgProps,b=e.sizes,g=e.src,h=e.srcSet,f=e.variant,v=void 0===f?"circle":f,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(e){var t=e.src,a=e.srcSet,n=o.useState(!1),r=n[0],i=n[1];return o.useEffect((function(){if(t||a){i(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&i("loaded")},n.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),r}({src:g,srcSet:h}),j=g||h,E=j&&"error"!==x;return O=E?o.createElement("img",Object(n.a)({alt:a,src:g,srcSet:h,sizes:b,className:l.img},p)):null!=c?c:j&&a?a[0]:o.createElement(u,{className:l.fallback}),o.createElement(m,Object(n.a)({className:Object(i.a)(l.root,l.system,l[v],s,!E&&l.colorDefault),ref:t},y),O)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},gFAl:function(e,t,a){"use strict";a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("5hJT");var n=a("mXGw"),r=a("Wbzz"),o=a("v6vt"),i=a("5bSt"),c=a("1Dig"),l=a("MU2d");t.a=function(e){var t=e.color,a=void 0===t?"inherit":t,s=e.to,d=e.primaryText,u=e.secondaryText,m=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["color","to","primaryText","secondaryText"]);return Object(c.a)((function(e){return e.breakpoints.down("xs")}))?n.createElement(o.a,Object.assign({component:r.Link,to:s,button:!0},m),n.createElement(i.a,{primary:d,secondary:u})):n.createElement(o.a,m,n.createElement(i.a,{primary:n.createElement(l.b,{to:s,color:a},d),secondary:u||null}))}},qPpN:function(e,t,a){"use strict";a.r(t),a.d(t,"authorQuery",(function(){return l}));var n=a("mXGw"),r=a("Hrku"),o=a("7zBi"),i=a("GOhF"),c=a("K392");t.default=function(e){var t=e.data,a=e.pageContext,l=t.authorsJson,s=t.allMdx.edges,d=a.numPages,u=a.currentPage,m=a.fieldValue,p=a.type,b=(a.previous,a.next,l.avatar&&l.avatar.childImageSharp?l.avatar.childImageSharp.fluid.src:null);return n.createElement(r.a,{title:m,jumbotron:n.createElement(o.a,{title:m,header:p,image:b})},n.createElement(i.a,{author:l,disableLink:!0,p:2}),n.createElement(c.a,{edges:s,numPages:d,currentPage:u,basePath:"/author/"+m}))};var l="2674290850"}}]);
//# sourceMappingURL=component---src-templates-author-tsx-3a88feac500e4533c4f5.js.map
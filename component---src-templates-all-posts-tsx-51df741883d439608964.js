(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{E2xX:function(e,t,a){"use strict";a.r(t),a.d(t,"blogListQuery",(function(){return c}));var o=a("mXGw"),n=a("Hrku"),r=a("7zBi"),i=a("K392");t.default=function(e){var t=e.data,a=e.pageContext,c=t.allMdx.edges,l=a.title,d=a.numPages,s=a.currentPage;return o.createElement(n.a,{title:l,jumbotron:o.createElement(r.a,{title:l})},o.createElement(i.a,{edges:c,numPages:d,currentPage:s,basePath:"/blog"}))};var c="2322889050"},K392:function(e,t,a){"use strict";a("5hJT"),a("GkPX");var o=a("mXGw"),n=a("Wbzz"),r=a("R82R"),i=a("ozoj"),c=a("BQn0"),l=a("u44p"),d=(a("yIlq"),a("Fcif")),s=a("dV/x"),u=(a("W0B4"),a("PDtE")),p=a("gbh0"),b=(a("V7cS"),a("lQyR"),a("YhIr"),a("6CzD")),m=a("aNYv"),g=a("omU1");var y=a("Rx6o"),f=a("x+AB"),h=a("VQdz");function v(e,t){var a=o.memo(o.forwardRef((function(t,a){return o.createElement(h.a,Object(d.a)({ref:a},t),e)})));return a.muiName=h.a.muiName,a}var x=v(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),O=v(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),j=v(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),w=v(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),k=a("mxPc"),E=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,i=void 0===r?"standard":r,c=e.component,l=e.disabled,p=void 0!==l&&l,b=e.page,m=e.selected,g=void 0!==m&&m,y=e.shape,h=void 0===y?"round":y,v=e.size,E=void 0===v?"medium":v,C=e.type,z=void 0===C?"page":C,P=e.variant,N=void 0===P?"text":P,B=Object(s.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]);return"start-ellipsis"===z||"end-ellipsis"===z?o.createElement("div",{ref:t,className:Object(u.a)(a.root,a.ellipsis,p&&a.disabled,"medium"!==E&&a["size".concat(Object(k.a)(E))])},"…"):o.createElement(f.a,Object(d.a)({ref:t,component:c,disabled:p,focusVisibleClassName:a.focusVisible,className:Object(u.a)(a.root,a.page,a[N],a[h],n,"standard"!==i&&a["".concat(N).concat(Object(k.a)(i))],p&&a.disabled,g&&a.selected,"medium"!==E&&a["size".concat(Object(k.a)(E))])},B),"page"===z&&b,"previous"===z&&o.createElement(j,{className:a.icon}),"next"===z&&o.createElement(w,{className:a.icon}),"first"===z&&o.createElement(x,{className:a.icon}),"last"===z&&o.createElement(O,{className:a.icon}))})),C=Object(p.a)((function(e){return{root:Object(d.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(y.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(y.b)(e.palette.primary.main,.5)),backgroundColor:Object(y.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(y.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(y.b)(e.palette.secondary.main,.5)),backgroundColor:Object(y.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(y.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(E);function z(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var P=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,r=e.color,i=void 0===r?"standard":r,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),l=void 0===c?z:c,p=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),y=void 0===p?function(e){return o.createElement(C,e)}:p,f=e.shape,h=void 0===f?"round":f,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),x=void 0===v?"medium":v,O=e.variant,j=void 0===O?"text":O,w=Object(s.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,r=e.count,i=void 0===r?1:r,c=e.defaultPage,l=void 0===c?1:c,u=e.disabled,p=void 0!==u&&u,y=e.hideNextButton,f=void 0!==y&&y,h=e.hidePrevButton,v=void 0!==h&&h,x=e.onChange,O=e.page,j=e.showFirstButton,w=void 0!==j&&j,k=e.showLastButton,E=void 0!==k&&k,C=e.siblingCount,z=void 0===C?1:C,P=Object(s.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),N=a-1,B=Object(g.a)({controlled:O,default:l,name:n}),L=Object(m.a)(B,2),$=L[0],M=L[1],R=function(e,t){O||M(t),x&&x(e,t)},T=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},V=T(1,Math.min(N+1,i)),S=T(Math.max(i-N,N+2),i),F=Math.max(Math.min($-z,i-N-2*z-2),N+3),A=Math.min(Math.max($+z,N+2*z+3),S[0]-2),I=[].concat(Object(b.a)(w?["first"]:[]),Object(b.a)(v?[]:["previous"]),Object(b.a)(V),Object(b.a)(F>N+3?["start-ellipsis"]:2+N<i-N-1?[2+N]:[]),Object(b.a)(T(F,A)),Object(b.a)(A<i-N-2?["end-ellipsis"]:i-N-1>N+1?[i-N-1]:[]),Object(b.a)(S),Object(b.a)(f?[]:["next"]),Object(b.a)(E?["last"]:[])),W=function(e){switch(e){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return i;default:return null}},G=I.map((function(e){return"number"==typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===$,disabled:p,"aria-current":e===$?"true":void 0}:{onClick:function(t){R(t,W(e))},type:e,page:W(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?$>=i:$<=1)}}));return Object(d.a)({items:G},P)}(Object(d.a)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",Object(d.a)({"aria-label":"pagination navigation",className:Object(u.a)(a.root,n),ref:t},w),o.createElement("ul",{className:a.ul},k.map((function(e,t){return o.createElement("li",{key:t},y(Object(d.a)({},e,{color:i,"aria-label":l(e.type,e.page,e.selected),shape:h,size:x,variant:j})))}))))})),N=Object(p.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(P),B=a("gFAl"),L=a("Mwe3"),$=Object(r.a)((function(e){return Object(i.a)({ul:{justifyContent:"center"}})}));t.a=function(e){var t=e.edges,a=e.numPages,r=e.currentPage,i=e.basePath,d=$();return o.createElement(o.Fragment,null,o.createElement(l.a,null,t.map((function(e){var t=e.node;return o.createElement(B.a,{key:t.id,to:t.fields.slug,primaryText:t.frontmatter.title,secondaryText:t.frontmatter.date+" post by "+t.frontmatter.author.name,divider:!0})}))),o.createElement(c.a,{textAlign:"center",px:2,py:4},o.createElement(N,{classes:d,count:a,defaultPage:r,color:"primary",renderItem:function(e){return o.createElement(C,Object.assign({component:n.Link,to:i+"/"+(1===e.page?"":""+e.page)},e))}})),o.createElement(L.b,null))}},Mwe3:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var o=a("mXGw"),n=a("BQn0"),r=a("JF+v");function i(){var e=Object(r.useLocation)().pathname;return o.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))}),[e]),o.createElement(n.a,{px:1,py:2,overflow:"hidden",key:e},o.createElement("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"9174058264"}))}function c(){var e=Object(r.useLocation)().pathname;return o.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))}),[e]),o.createElement(n.a,{px:1,py:2,overflow:"hidden",key:e},o.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"3332658358","data-ad-format":"auto","data-full-width-responsive":"true"}))}},gFAl:function(e,t,a){"use strict";a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("5hJT");var o=a("mXGw"),n=a("Wbzz"),r=a("v6vt"),i=a("5bSt"),c=a("1Dig"),l=a("MU2d");t.a=function(e){var t=e.color,a=void 0===t?"inherit":t,d=e.to,s=e.primaryText,u=e.secondaryText,p=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["color","to","primaryText","secondaryText"]);return Object(c.a)((function(e){return e.breakpoints.down("xs")}))?o.createElement(r.a,Object.assign({component:n.Link,to:d,button:!0},p),o.createElement(i.a,{primary:s,secondary:u})):o.createElement(r.a,p,o.createElement(i.a,{primary:o.createElement(l.b,{to:d,color:a},s),secondary:u||null}))}}}]);
//# sourceMappingURL=component---src-templates-all-posts-tsx-51df741883d439608964.js.map
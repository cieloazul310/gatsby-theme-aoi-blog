(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4e3g":function(e,t,a){"use strict";var n=a("mXGw"),o=a("ThN4"),r=a("/FXl"),i=a("u26D");t.a=function(e){var t,a,c=e.children,l=e.pageContext;return n.createElement(o.a,{maxWidth:"md",title:null!==(t=null===(a=l.frontmatter)||void 0===a?void 0:a.title)&&void 0!==t?t:"Title"},n.createElement(r.MDXProvider,{components:i.a},c))}},BJze:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("1c7q"),a("mXGw");var n=a("/FXl"),o=a("4e3g"),r=a("MU2d");var i={},c={_frontmatter:i},l=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.mdx)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h2",null,"Hi People"),Object(n.mdx)("p",null,"Welcome to page 2"),Object(n.mdx)(r.a,{to:"/",mdxType:"AppLinkButton"},"Go back to the homepage"))}d.isMDXComponent=!0},u26D:function(e,t,a){"use strict";a("1c7q");var n=a("mXGw"),o=a("/ZiB"),r=a("1LRU"),i=a("BQn0"),c=a("dV/x"),l=a("Fcif"),d=a("PDtE"),s=a("gbh0");var p=n.createContext(),u=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"table":r,s=e.padding,u=void 0===s?"default":s,m=e.size,g=void 0===m?"medium":m,b=e.stickyHeader,h=void 0!==b&&b,f=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:u,size:g,stickyHeader:h}}),[u,g,h]);return n.createElement(p.Provider,{value:v},n.createElement(i,Object(l.a)({role:"table"===i?null:"table",ref:t,className:Object(d.a)(a.root,o,h&&a.stickyHeader)},f)))})),m=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(u);var g=n.createContext(),b=a("Rx6o"),h=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"tr":r,s=e.hover,p=void 0!==s&&s,u=e.selected,m=void 0!==u&&u,b=Object(c.a)(e,["classes","className","component","hover","selected"]),h=n.useContext(g);return n.createElement(i,Object(l.a)({ref:t,className:Object(d.a)(a.root,o,h&&{head:a.head,footer:a.footer}[h.variant],p&&a.hover,m&&a.selected),role:"tr"===i?null:"row"},b))})),f=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(h),v=a("mxPc"),y=n.forwardRef((function(e,t){var a,o,r=e.align,i=void 0===r?"inherit":r,s=e.classes,u=e.className,m=e.component,b=e.padding,h=e.scope,f=e.size,y=e.sortDirection,x=e.variant,O=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=n.useContext(p),E=n.useContext(g),k=E&&"head"===E.variant;m?(o=m,a=k?"columnheader":"cell"):o=k?"th":"td";var w=h;!w&&k&&(w="col");var C=b||(j&&j.padding?j.padding:"default"),R=f||(j&&j.size?j.size:"medium"),z=x||E&&E.variant,H=null;return y&&(H="asc"===y?"ascending":"descending"),n.createElement(o,Object(l.a)({ref:t,className:Object(d.a)(s.root,s[z],u,"inherit"!==i&&s["align".concat(Object(v.a)(i))],"default"!==C&&s["padding".concat(Object(v.a)(C))],"medium"!==R&&s["size".concat(Object(v.a)(R))],"head"===z&&j&&j.stickyHeader&&s.stickyHeader),"aria-sort":H,role:a,scope:w},O))})),x=Object(s.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(b.d)(Object(b.b)(e.palette.divider,1),.88):Object(b.a)(Object(b.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(y),O=a("xkWc"),j=a("MU2d"),E={h2:function(e){return n.createElement(o.a,Object.assign({variant:"h2",gutterBottom:!0},e))},h3:function(e){return n.createElement(i.a,{pt:4,pb:2},n.createElement(o.a,Object.assign({variant:"h4",component:"h3",gutterBottom:!0},e)))},h4:function(e){return n.createElement(i.a,{pt:2,pb:1},n.createElement(o.a,Object.assign({variant:"h5",component:"h4",gutterBottom:!0},e)))},h5:function(e){return n.createElement(i.a,{pt:2,pb:1},n.createElement(o.a,Object.assign({variant:"h6",component:"h5",gutterBottom:!0},e)))},h6:function(e){return n.createElement(o.a,Object.assign({variant:"h6",component:"h6",gutterBottom:!0},e))},p:function(e){return n.createElement(o.a,Object.assign({variant:"body1",paragraph:!0},e))},a:function(e){return n.createElement(r.a,Object.assign({color:"secondary"},e))},ul:function(e){return n.createElement(i.a,{py:2,m:0},n.createElement(o.a,Object.assign({component:"ul"},e)))},ol:function(e){return n.createElement(i.a,{py:2,m:0},n.createElement(o.a,Object.assign({component:"ol"},e)))},li:function(e){return n.createElement(o.a,Object.assign({variant:"body1",component:"li"},e))},table:function(e){return n.createElement(i.a,{py:2},n.createElement(m,e))},tr:f,th:x,td:x,hr:O.a,AppLink:j.b};t.a=E}}]);
//# sourceMappingURL=component---src-pages-page-2-mdx-8c4edb6f512fcfc3645e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return y});var n=a(0),r=a.n(n),l=a(146),i=a(161),o=a(173),u=a(200),c=a.n(u),s=a(201),d=a.n(s),m=a(209),f=a.n(m),p=a(156),h=a.n(p),y="382641756";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,u=a.image,s=t.markdownRemark.html;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:n}),r.a.createElement(c.a,null,r.a.createElement(f.a,{style:{height:"200px"},image:Object(l.withPrefix)(u)}),r.a.createElement(d.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(h.a,{dangerouslySetInnerHTML:{__html:s}}))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(147),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(159),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},161:function(e,t,a){"use strict";var n=a(167),r=a(0),l=a.n(r),i=a(181),o=a.n(i),u=a(146),c=function(e){return l.a.createElement(u.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var s="1175772"},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(162),u=a(199),c=a.n(u),s=a(194),d=a.n(s),m=a(171);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(m.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(c.a,null),i.a.createElement(e,this.props)))},a}(i.a.Component)}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},168:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},169:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},170:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},171:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return m});a(74),a(53),a(75),a(196);var r=a(176),l=a(162),i=a(197),o=a.n(i),u=a(198),c=a.n(u),s=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:c.a[300],main:c.a[500],dark:c.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function m(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(195),a(73))},172:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(161),u=a(160),c=a(146),s=(a(164),a(165),a(169)),d=a(175),m=a.n(d),f=a(163),p=a.n(f),h=a(158),y=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(c.Link,{key:e.name,to:e.link},i.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{style:{color:"#fff"}},i.a.createElement(h.c,null))))},E=function(e){return i.a.createElement(c.StaticQuery,{query:"240237662",render:function(e){return i.a.createElement(y,{data:e})},data:s})},g=a(170),v=a(186),b=a.n(v),k=a(187),_=a.n(k),M=a(185),w=a.n(M),C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:this.handleOpen},i.a.createElement(h.a,{style:{color:"#efefef"}})),i.a.createElement(w.a,{onClickAway:this.handleClose},i.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return i.a.createElement(c.Link,{key:e.name,to:e.link},i.a.createElement(_.a,null,e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(_.a,null,"Fork me on Github")))))},t}(i.a.Component),P=function(e){return i.a.createElement(c.StaticQuery,{query:"709782962",render:function(t){return i.a.createElement(C,{active:e.active,data:t})},data:g})},x=a(191),j=a.n(x),I=a(178),N=a.n(I),T=a(189),O=a.n(T),S=a(188),q=a.n(S),R=a(156),L=a.n(R),A=a(190),B=a.n(A),G=a(180),U=a.n(G),Q=function(e){return i.a.createElement(q.a,{id:"appBar"},i.a.createElement(O.a,null,i.a.createElement(N.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},i.a.createElement(N.a,{item:!0},i.a.createElement(B.a,{id:"logo",variant:"outlined",avatar:i.a.createElement(U.a,{id:"logoIcon"},i.a.createElement(h.d,null)),label:i.a.createElement(c.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),i.a.createElement(N.a,{item:!0},i.a.createElement(j.a,{smDown:!0},i.a.createElement(L.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},i.a.createElement(E,null))),i.a.createElement(j.a,{mdUp:!0},i.a.createElement(P,null)))),i.a.createElement(N.a,{item:!0})))},F=function(e){return i.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(Q,{data:e})},data:u})},D=a(192),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("span",null,i.a.createElement(L.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",r," – ",l))))},H=function(e){return i.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(z,{data:e})},data:u})},V=a(193),Y=a(166),K=(a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),i.a.createElement(o.a,null),i.a.createElement(F,null),i.a.createElement(V.Grid,{style:{marginTop:"94px"}},i.a.createElement(V.Row,null,i.a.createElement(V.Col,{xs:12},t?i.a.createElement(L.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,i.a.createElement(H,null)))))},t}(i.a.Component));t.a=Object(Y.a)(K)},200:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(207))},201:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(208))},207:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),l=n(a(145)),i=n(a(0)),o=(n(a(4)),n(a(149))),u=n(a(179)),c=n(a(148)),s={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,c=(0,l.default)(e,["classes","className","raised"]);return i.default.createElement(u.default,(0,r.default)({className:(0,o.default)(t.root,a),elevation:n?8:1},c))}t.styles=s,d.defaultProps={raised:!1};var m=(0,c.default)(s,{name:"MuiCard"})(d);t.default=m},208:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),l=n(a(145)),i=n(a(0)),o=(n(a(4)),n(a(149))),u=(a(150),n(a(148))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,u=(0,l.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,r.default)({className:(0,o.default)(t.root,a)},u))}t.styles=c,s.defaultProps={component:"div"};var d=(0,u.default)(c,{name:"MuiCardContent"})(s);t.default=d},209:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(210))},210:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(51)),l=n(a(144)),i=n(a(145)),o=n(a(0)),u=(n(a(4)),n(a(149))),c=(n(a(157)),a(150),n(a(148))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var d=["video","audio","picture","iframe","img"];function m(e){var t=e.classes,a=e.className,n=e.component,c=e.image,s=e.src,m=e.style,f=(0,i.default)(e,["classes","className","component","image","src","style"]),p=-1!==d.indexOf(n),h=!p&&c?(0,l.default)({backgroundImage:'url("'.concat(c,'")')},m):m;return o.default.createElement(n,(0,l.default)({className:(0,u.default)(t.root,(0,r.default)({},t.media,p),a),style:h,src:p?c||s:void 0},f))}m.defaultProps={component:"div"};var f=(0,c.default)(s,{name:"MuiCardMedia"})(m);t.default=f}}]);
//# sourceMappingURL=component---src-templates-general-js-2e921b0b670d81054741.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(146),i=a(4),c=a.n(i),o=a(161),s=a(200),u=a.n(s),m=a(3810),d=a.n(m),p=a(201),f=a.n(p),h=a(3812),E=a.n(h),y=function(e){var t=e.children,a=e.title,n=e.subheader,l=e.avatar,i=e.action,c=e.style,o=void 0===c?{}:c;return r.a.createElement(u.a,{style:o},r.a.createElement(d.a,{avatar:l||null,title:a,subheader:n||null}),r.a.createElement(f.a,null,t),r.a.createElement(E.a,{style:{float:"right"}},i))},g=a(173),v=a(175),b=a.n(v),k=a(7),x=a.n(k),S=a(3826),w=a.n(S),C=a(179),M=a.n(C),I=a(156),T=a.n(I),_=a(3814),q=a.n(_),P=a(209),B=a.n(P),R=a(3822),j=Object(R.autoPlay)(q.a),N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeStep:0},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleStepChange=function(e){t.setState({activeStep:e})},t}return x()(t,e),t.prototype.render=function(){var e=this.state.activeStep,t=this.props.items,a=t.length;return r.a.createElement(M.a,{elevation:0},r.a.createElement("div",null,r.a.createElement(T.a,null,t[e].title),r.a.createElement(j,{axis:"x",index:e,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},t.map(function(t,a){var n=t.node,i=n.excerpt,c=n.frontmatter,o=c.path,s=c.title,m=c.image;return r.a.createElement("div",{key:a},Math.abs(e-a)<=2?r.a.createElement(u.a,null,r.a.createElement(B.a,{style:{height:"200px"},image:Object(l.withPrefix)(m)}),r.a.createElement(f.a,null,r.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(l.Link,{to:o},s)),r.a.createElement(T.a,{component:"p"},i))):null)})),r.a.createElement(w.a,{steps:a,position:"static",activeStep:e,nextButton:r.a.createElement(b.a,{size:"small",onClick:this.handleNext,disabled:e===a-1},"Next"),backButton:r.a.createElement(b.a,{size:"small",onClick:this.handleBack,disabled:0===e},"Back")})))},t}(r.a.Component),L=a(178),A=a.n(L),O=a(180),G=a.n(O),U=a(158),F=a(162),Q=a(166),z=a(181),D=a.n(z);a.d(t,"query",function(){return V});var J=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(g.a,{title:"Gatsby Material UI Business Starter"},r.a.createElement(o.a,{title:"Home"},r.a.createElement("meta",{name:"description",content:"Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."})),r.a.createElement(D.a,{implementation:"css"},r.a.createElement(A.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(A.a,{item:!0,xs:12,md:10,className:e.classes.root},r.a.createElement(y,{title:"Our Products",avatar:r.a.createElement(G.a,null,r.a.createElement(U.b,null)),action:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"contained",color:"secondary",className:e.classes.root},r.a.createElement(l.Link,{to:"/products"},"View All Products")))},r.a.createElement(N,{items:t}))))))},V="1090688908";J.propTypes={classes:c.a.object.isRequired};t.default=Object(Q.a)(Object(F.withStyles)(function(e){return{root:{backgroundColor:"#9c27b0",fontSize:"2em"}}})(J))},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(147),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(159),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},161:function(e,t,a){"use strict";var n=a(167),r=a(0),l=a.n(r),i=a(182),c=a.n(i),o=a(146),s=function(e){return l.a.createElement(o.StaticQuery,{query:u,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1175772"},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(162),o=a(199),s=a.n(o),u=a(194),m=a.n(u),d=a(171);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(s.a,null),i.a.createElement(e,this.props)))},a}(i.a.Component)}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},168:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},169:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},170:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},171:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(53),a(75),a(196);var r=a(176),l=a(162),i=a(197),c=a.n(i),o=a(198),s=a.n(o),u=Object(l.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:s.a[300],main:s.a[500],dark:s.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(195),a(73))},172:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(161),o=a(160),s=a(146),u=(a(164),a(165),a(169)),m=a(175),d=a.n(m),p=a(163),f=a.n(p),h=a(158),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(s.Link,{key:e.name,to:e.link},i.a.createElement(d.a,{style:{color:"#fff"}},e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.a,{style:{color:"#fff"}},i.a.createElement(h.c,null))))},y=function(e){return i.a.createElement(s.StaticQuery,{query:"240237662",render:function(e){return i.a.createElement(E,{data:e})},data:u})},g=a(170),v=a(187),b=a.n(v),k=a(188),x=a.n(k),S=a(186),w=a.n(S),C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{onClick:this.handleOpen},i.a.createElement(h.a,{style:{color:"#efefef"}})),i.a.createElement(w.a,{onClickAway:this.handleClose},i.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return i.a.createElement(s.Link,{key:e.name,to:e.link},i.a.createElement(x.a,null,e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(x.a,null,"Fork me on Github")))))},t}(i.a.Component),M=function(e){return i.a.createElement(s.StaticQuery,{query:"709782962",render:function(t){return i.a.createElement(C,{active:e.active,data:t})},data:g})},I=a(181),T=a.n(I),_=a(178),q=a.n(_),P=a(190),B=a.n(P),R=a(189),j=a.n(R),N=a(156),L=a.n(N),A=a(191),O=a.n(A),G=a(180),U=a.n(G),F=function(e){return i.a.createElement(j.a,{id:"appBar"},i.a.createElement(B.a,null,i.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},i.a.createElement(q.a,{item:!0},i.a.createElement(O.a,{id:"logo",variant:"outlined",avatar:i.a.createElement(U.a,{id:"logoIcon"},i.a.createElement(h.d,null)),label:i.a.createElement(s.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{smDown:!0},i.a.createElement(L.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},i.a.createElement(y,null))),i.a.createElement(T.a,{mdUp:!0},i.a.createElement(M,null)))),i.a.createElement(q.a,{item:!0})))},Q=function(e){return i.a.createElement(s.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(F,{data:e})},data:o})},z=a(192),D=a.n(z),J=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("span",null,i.a.createElement(L.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",r," – ",l))))},V=function(e){return i.a.createElement(s.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(J,{data:e})},data:o})},H=a(193),W=a(166),Y=(a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),i.a.createElement(c.a,null),i.a.createElement(Q,null),i.a.createElement(H.Grid,{style:{marginTop:"94px"}},i.a.createElement(H.Row,null,i.a.createElement(H.Col,{xs:12},t?i.a.createElement(L.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,i.a.createElement(V,null)))))},t}(i.a.Component));t.a=Object(W.a)(Y)}}]);
//# sourceMappingURL=component---src-pages-index-js-754ea5cc69e0385cd927.js.map
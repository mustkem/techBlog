_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{P3r0:function(e,t,n){"use strict";var r=n("nKUr"),c=n("1OyB"),a=n("vuIU"),s=n("Ji7U"),o=n("md7G"),i=n("foSv"),l=n("q1tI"),u=n.n(l),f=n("/MKj"),d=(n("GRpk"),n("62z5")),p=n("YFqc"),v=n.n(p);n("obyI");var j=function(e){var t=e.item;return Object(r.jsx)("li",{className:"post-card",children:Object(r.jsx)(v.a,{href:"/post/"+t.slug,children:Object(r.jsx)("a",{className:"link title",children:Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsxs)("div",{className:"sec-1",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t.title}),Object(r.jsx)("div",{className:"desc",children:t.desc})]}),Object(r.jsx)("div",{className:"category-sec",children:t.categories&&t.categories.map((function(e){return Object(r.jsxs)("div",{className:"category",children:[" ",e.label," "]})}))})]}),Object(r.jsx)("div",{className:"sec-2",children:Object(r.jsx)("div",{className:"figure-content",children:Object(r.jsx)("img",{height:"100%",width:"100%",alt:t.title,src:"data:image/png;base64,"+t.bolbImageUrl})})})]})})})})},b=n("oD5A"),h=n("P+y7");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var c=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var O=function(e){Object(s.a)(n,e);var t=m(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(h.a,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-8 col-sm-12",children:Object(r.jsx)("ul",{className:"posts post-list",children:this.props.posts&&this.props.posts.map((function(e,t){return Object(r.jsx)(j,{item:e},e._id)}))})}),Object(r.jsx)("div",{className:"side-banner col-md-4 col-sm-0",children:Object(r.jsx)(d.a,{})})]})})]})})}}]),n}(u.a.Component),g=Object(f.b)((function(e){return{posts:e.page.posts}}))(O);t.a=g},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,j=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var O=a.Children.only(v),g=O&&"object"===typeof O&&O.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),y=r(x,2),N=y[0],_=y[1],w=a.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,a.useEffect)((function(){var e=_&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,_,m,t,n]);var L={ref:w,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:o}))}(e,n,d,p,j,b,h,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var M="undefined"!==typeof m?m:n&&n.locale,R=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);L.href=R||(0,s.addBasePath)((0,s.addLocale)(p,M,n&&n.defaultLocale))}return a.default.cloneElement(O,L)};t.default=f},kZGZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[category]",function(){return n("uyrM")}])},uyrM:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return i}));var r=n("nKUr"),c=n("/MKj"),a=n("g4pe"),s=n.n(a),o=n("P3r0");var i=!0;t.default=Object(c.b)((function(e){return{posts:e.page.posts}}))((function(e){var t=e.posts;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:"Learn Javascript, React, Best Practice Javascript, Best Practice React"}),Object(r.jsx)("meta",{name:"Description",content:"Learn Javascript, React, Best Practice Javascript, Best Practice React"}),Object(r.jsx)("meta",{name:"Keywords",content:"Javascript, React, Learn, Tutorial, Tutorials, Learning, Training, HTML, CSS, Code, Example, Examples, Medium"})]}),Object(r.jsx)(o.a,{posts:t})]})}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["kZGZ",0,1,2,3,4,5]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"4chd":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return n("ndSh")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),u=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,i=f.length;u<i;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},"BZ/I":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ufqH"),a={primary:"#434AFF",secondary:"#42DDE7",danger:"#EF5F5F",warning:"#F4C54C",success:"#6FCF97",black:"#0D0F33",white:"#FFFFFF",get dark(){return[Object(r.c)(a.black,.85),Object(r.c)(a.black,.75),Object(r.c)(a.black,.65),Object(r.c)(a.black,.55),Object(r.c)(a.black,.45),Object(r.c)(a.black,.35),Object(r.c)(a.black,.25),Object(r.c)(a.black,.15),Object(r.c)(a.black,.08)]},get light(){return[Object(r.c)(a.black,.85),Object(r.c)(a.black,.75),Object(r.c)(a.black,.65),Object(r.c)(a.black,.55),Object(r.c)(a.black,.45),Object(r.c)(a.black,.35),Object(r.c)(a.black,.25),Object(r.c)(a.black,.15),Object(r.c)(a.black,.08)]},get boxShadow(){return"0 4px 15px ".concat(a.dark[8])}}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),u=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},ndSh:function(e,t,n){"use strict";n.r(t);var r=n("h4VS"),a=n("q1tI"),o=n.n(a),c=n("ZMKu"),u=n("8Kt/"),i=n.n(u),s=n("X6xV"),l=n("apO0"),d=n("sz6J"),f=n("qKvR"),p=n("BZ/I");o.a.createElement;function b(){var e=Object(r.a)(["\n    h1 {\n      font-size: 2rem;\n      margin: 0;\n      background: ",";\n      color: ",";\n    }\n    p {\n      font-weight: normal;\n      font-size: 1rem;\n      margin: 0;\n      color: ",";\n    }\n  "]);return b=function(){return e},e}t.default=function(){var e=Object(f.c)(b(),p.a.primary,p.a.white,p.a.dark[4]);return Object(f.d)(l.a,null,Object(f.d)(i.a,null,Object(f.d)("title",null,"Tile App - Download")),Object(f.d)(c.c.div,{layoutId:"title-text",transition:{type:"spring",stiffness:300,damping:30},style:{position:"absolute",top:30,left:20}},Object(f.d)(s.b,{className:"center-object-title",css:e,borderBox:!0},Object(f.d)("h1",null,"Tile App."),Object(f.d)("p",null,"Download the Tile App. MacOs, Win supported."))),Object(f.d)(d.a,{currentPath:"download"}))}},sz6J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("X6xV"),c=n("nOHt"),u=a.a.createElement;t.a=function(e){var t=e.currentPath,n=Object(c.useRouter)();return u(o.b,{className:"navigation",position:"absolute",bottom:0,row:!0},["home","playground","download"].map((function(e){return u(o.b,{key:e,className:"navigation__item",py:2,my:3,mx:3,textTransform:"capitalize",opacity:t===e?1:.6,borderBottom:t===e?"2px dotted currentColor":"",fontWeight:t===e?"bold":"normal",onClick:function(){return function(e){"home"===e?n.push("/"):n.push("/"+e)}(e)},pointer:!0},e)})))}}},[["4chd",0,1,4,2,3,5,6,7]]]);
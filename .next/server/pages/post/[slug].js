module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("U1TB");


/***/ }),

/***/ "62z5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "advertisement",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        style: {
          display: "inline-block"
        },
        target: "_blank",
        href: "https://www.tailwindapp.com/?utm_source=google&utm_medium=ad&utm_campaign=brand&utm_content=general&gclid=CjwKCAjwx6WDBhBQEiwA_dP8raKNO4U0Z_j14y3erje9nof6NqPGgq9ThF7c6HnYyaT11N0OhVdisBoCQ8wQAvD_BwE",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          height: "100%",
          width: "100%",
          alt: "tailwind",
          src: "/tailwind.png"
        })
      })
    })
  });
});

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "N4Zu":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "P+y7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "banner-adv",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        style: {
          display: "inline-block"
        },
        target: "_blank",
        href: "https://www.xm.com/landing/promo-shares/en?gclid=CjwKCAjwx6WDBhBQEiwA_dP8raNnveBXlvXCJoGGeBc2jrftdYenI8DviTMviYWe-c91OMaznoYNnxoCc0oQAvD_BwE",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          height: "100%",
          width: "100%",
          alt: "www.xm.com",
          className: "post-image",
          src: "https://tpc.googlesyndication.com/daca_images/simgad/1666469299077737993"
        })
      })
    })
  });
});

/***/ }),

/***/ "U1TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__("N4Zu");
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__("EGWi");
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// EXTERNAL MODULE: ./Components/Layout/SideBanner/SideBanner.js
var SideBanner = __webpack_require__("62z5");

// EXTERNAL MODULE: ./Components/sharedComponents/Advert/AdvertBannerTop.js
var AdvertBannerTop = __webpack_require__("P+y7");

// EXTERNAL MODULE: ./Components/Layout/Layout.js + 5 modules
var Layout = __webpack_require__("oD5A");

// CONCATENATED MODULE: ./Components/PostPage/PostPage.js














class PostPage_PostPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: false
    };
  }

  componentDidMount() {
    setTimeout(() => external_prismjs_default.a.highlightAll(), 50);

    if (true) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const {
      post
    } = this.props;
    let href = "";

    if (false) {}

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "post-page",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AdvertBannerTop["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-9",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "post-wrap",
                children: [this.state.loading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  style: {
                    marginTop: 20
                  },
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MyLoader, {})
                }), post && /*#__PURE__*/Object(jsx_runtime_["jsx"])("article", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "post RichEditor-editor",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                      className: "title",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                        children: post.title
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      style: {
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: 20
                      },
                      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        className: "share-icon-container",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["FacebookShareButton"], {
                          url: href,
                          quote: post.title,
                          hashtag: "#camperstribe",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["FacebookIcon"], {
                            size: 36,
                            round: true
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["TwitterShareButton"], {
                          url: href,
                          title: post.title,
                          hashtag: "#camperstribe",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["TwitterIcon"], {
                            size: 36,
                            round: true
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["WhatsappShareButton"], {
                          url: href,
                          title: post.title,
                          separator: ":: ",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_share_["WhatsappIcon"], {
                            size: 36,
                            round: true
                          })
                        })]
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "post-content",
                      dangerouslySetInnerHTML: {
                        __html: post.content
                      }
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "side-banner col-md-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SideBanner["a" /* default */], {})
            })]
          })
        })]
      })
    });
  }

}

/* harmony default export */ var Components_PostPage_PostPage = (Object(router_["withRouter"])(PostPage_PostPage));

const MyLoader = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_content_loader_default.a, {
  viewBox: "0 0 380 70",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
    x: "0",
    y: "0",
    rx: "4",
    ry: "4",
    width: "100%",
    height: "13"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
    x: "0",
    y: "30",
    rx: "5",
    ry: "5",
    width: "100%",
    height: "200"
  })]
});
// CONCATENATED MODULE: ./Components/PostPage/index.js

/* harmony default export */ var Components_PostPage = (Components_PostPage_PostPage);
// EXTERNAL MODULE: ./Store/store.js + 3 modules
var Store_store = __webpack_require__("wRsc");

// EXTERNAL MODULE: ./Store/Actions/actions.js
var actions = __webpack_require__("od16");

// CONCATENATED MODULE: ./pages/post/[slug].js











function _slug_PostPage({
  post
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: post.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "Description",
        content: post.desc
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components_PostPage, {
      post: post
    })]
  });
} // This function gets called at build time


async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await external_axios_default()({
    method: "get",
    url: config["a" /* API_URL */] + "/feed/posts"
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    return error;
  });
  const posts = await res.posts; // Get the paths we want to pre-render based on posts

  const paths = [];
  posts.forEach(post => {
    paths.push({
      params: {
        slug: post.slug
      }
    });
  }); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: false
  };
}
const getStaticProps = Store_store["a" /* wrapper */].getStaticProps(async ({
  params,
  store
}) => {
  await store.dispatch(Object(actions["a" /* getPost2 */])(params.slug));
  return {
    props: {
      post: store.getState().page.post
    }
  };
});

const mapStateToprops = state => {
  return {
    products: state.page.post
  };
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToprops)(_slug_PostPage));

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oD5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./Store/Actions/actions.js
var actions = __webpack_require__("od16");

// CONCATENATED MODULE: ./Components/Header/Header.js









const Header = props => {
  const router = Object(router_["useRouter"])();

  const hadlePageChange = payload => {
    const query = {};
    query.category = payload.category;
    const newQuery = {};
    Object.keys(query).forEach(key => {
      if (query[key]) {
        newQuery[key] = query[key];
      }
    });
    router.push("/category/" + payload.category);
    props.getPosts(query);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "header top",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "header-content",
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logo-wrp",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "logo-sec",
            onClick: () => {
              router.push("/");
              props.getPosts({});
            },
            style: {
              display: "flex",
              background: "transparent"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                background: "blue",
                color: "#fff",
                width: 25,
                height: 25,
                lineHeight: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold"
              },
              children: "T"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "sub-title",
              style: {
                position: "relative",
                top: 1,
                marginLeft: 8
              },
              children: "Tutorial Medium"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "navbar-main",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              className: "link react",
              style: {
                "backgroundColor": "#20232a",
                "color": "#61dafb"
              },
              onClick: () => {
                hadlePageChange({
                  category: "react"
                });
              },
              children: "React"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              className: "link javascript",
              style: {
                "backgroundColor": "yellow",
                "color": "black"
              },
              onClick: () => {
                hadlePageChange({
                  category: "javascript"
                });
              },
              children: "Javascript"
            })
          })]
        })]
      })
    })
  });
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: payload => dispatch(actions["b" /* getPosts2 */](payload))
  };
};

/* harmony default export */ var Header_Header = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(Header));
// CONCATENATED MODULE: ./Store/Actions/promiseBasedAction.js
// import axios from 'axios'
const testAction = data => dispatch => new Promise((resolve, reject) => {
  resolve();
});
// CONCATENATED MODULE: ./Components/PromiseBasedActionComponent/PromiseBasedActionComponent.js



class PromiseBasedActionComponent_MyComp extends external_react_default.a.Component {
  componentDidMount() {
    this.props.testAction().then(() => {});
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
  }

}

/* harmony default export */ var PromiseBasedActionComponent = (PromiseBasedActionComponent_MyComp);
// CONCATENATED MODULE: ./Containers/promiseBasedActionContianer.js



/* harmony default export */ var promiseBasedActionContianer = (Object(external_react_redux_["connect"])(null, {
  testAction: testAction
})(PromiseBasedActionComponent));
// CONCATENATED MODULE: ./Components/Footer/Footer.js




/* harmony default export */ var Footer = (props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      background: "aliceblue",
      fontSize: 12,
      padding: "15px 0"
    },
    className: "footer",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "header-content",
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logo-wrp",
          children: "Copyright @ Tutorial Medium"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logo-wrp",
          style: {
            marginLeft: 15
          },
          children: "Contact us on contact@tutorialmedium.com"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(promiseBasedActionContianer, {})]
  });
});
// CONCATENATED MODULE: ./Components/Layout/Layout.js






const Layout = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    className: "layout",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {}), props.children]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
};

/* harmony default export */ var Layout_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
// export const API_URL = "https://tutorialmedium-service.netlify.app:8080";
const API_URL = "https://codemedium-backend.herokuapp.com"; // export const API_URL = "http://localhost:8080";

/***/ }),

/***/ "od16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addPost */
/* unused harmony export getAdminPosts */
/* unused harmony export testActionCreator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosts2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPost2; });
/* unused harmony export onGetPosts */
/* unused harmony export onGetPost */
/* unused harmony export login */
/* unused harmony export loginAction */
/* harmony import */ var _ActionsTypes_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("v09L");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("obyI");



const addPost = payload => {
  return dispatch => {// axios({
    //   method: "post",
    //   url: API_URL + "/admin/feed/post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin"),
    //   },
    //   data:payload
    // })
    //   .then(function (response) {
    //       return response.data;
    //   })
    //   .catch(function (error) {
    //     return error;
    //   });
  };
};
const getAdminPosts = payload => {
  return (dispatch, getState) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: _config__WEBPACK_IMPORTED_MODULE_2__[/* API_URL */ "a"] + "/admin/feed/post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
      },
      params: {
        user: "test"
      }
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };
};
const testActionCreator = payload => {};
const getPosts2 = payload => {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: _config__WEBPACK_IMPORTED_MODULE_2__[/* API_URL */ "a"] + "/feed/posts",
      params: payload
    }).then(function (response) {
      dispatch(onGetPosts({
        loading: false,
        posts: response.data.posts
      }));
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  };
};
const getPost2 = slug => {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: _config__WEBPACK_IMPORTED_MODULE_2__[/* API_URL */ "a"] + "/feed/post/" + slug
    }).then(function (response) {
      dispatch(onGetPost(response.data.post));
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  };
};
function onGetPosts(payload) {
  return {
    type: _ActionsTypes_actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* actionTypes */ "a"].GET_POSTS,
    payload: payload
  };
}
function onGetPost(payload) {
  return {
    type: _ActionsTypes_actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* actionTypes */ "a"].GET_POST,
    payload: payload
  };
}
const login = (payload, history) => {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: _config__WEBPACK_IMPORTED_MODULE_2__[/* API_URL */ "a"] + "/admin/auth/login",
      data: payload
    }).then(function (response) {
      localStorage.setItem("codemedium-token-admin", response.data.token);
      dispatch(loginAction(response.data.user));
      history.push("/admin/posts/home");
      return response.data;
    }).catch(function (error) {
      console.log(error);
      alert("Wrong credentials");
    });
  };
};
function loginAction(payload) {
  return {
    type: _ActionsTypes_actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* actionTypes */ "a"].LOGIN_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "v09L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
const actionTypes = {
  ADD_POST: 'ADD_POST',
  GET_POSTS: 'GET_POSTS',
  GET_POST: "GET_POST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS"
};

/***/ }),

/***/ "wRsc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./Store/ActionsTypes/actionTypes.js
var actionTypes = __webpack_require__("v09L");

// CONCATENATED MODULE: ./Store/Reducers/MyReducer/myReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {};
function myReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes["a" /* actionTypes */].ADD_POST:
      return _objectSpread(_objectSpread({}, state), action);

    case actionTypes["a" /* actionTypes */].GET_POSTS:
      {
        return _objectSpread(_objectSpread({}, state), action.payload);
        break;
      }

    case actionTypes["a" /* actionTypes */].GET_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: action.payload
      });
      break;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./Store/Reducers/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userReducer_ownKeys(Object(source), true).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const userReducer_initialState = {};
function profileReducer(state = userReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["a" /* actionTypes */].LOGIN_SUCCESS:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./Store/Reducers/rootReducer.js



const rootReducer = Object(external_redux_["combineReducers"])({
  page: myReducer,
  profileReducer: profileReducer
});
/* harmony default export */ var Reducers_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./Store/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_["HYDRATE"]) {
    const nextState = store_objectSpread(store_objectSpread({}, state), action.payload);

    if (state.page.posts) {
      nextState.page = state.page; // preserve client value on client side navigation
    }

    return nextState;
  } else {
    return Reducers_rootReducer(state, action);
  }
};

const initStore = () => {
  return Object(external_redux_["createStore"])(reducer, bindMiddleware([external_redux_thunk_default.a]));
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(initStore);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
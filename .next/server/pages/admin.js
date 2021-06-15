module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iooJ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "M71N":
/***/ (function(module, exports) {

module.exports = require("@tinymce/tinymce-react");

/***/ }),

/***/ "N4Zu":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iooJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: ./Store/Actions/actions.js
var actions = __webpack_require__("od16");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// CONCATENATED MODULE: ./Components/admin/Home/components/PostItem/PostItem.js





function PostItem(props) {
  const {
    item
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: "post-card",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
      className: "link title",
      to: "/admin/" + item._id,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "post-content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "sec-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "desc",
              children: item.desc
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              marginTop: 5
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: "Written by"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: props.user.name
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "category-sec",
              children: item.categories.map(item => {
                return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "category",
                  children: [" ", item.label, " "]
                });
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "sec-2",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "figure-content",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "data:image/png;base64," + item.bolbImageUrl
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ var PostItem_PostItem = (PostItem);
// CONCATENATED MODULE: ./Components/admin/Home/components/PostItem/index.js

/* harmony default export */ var components_PostItem = (PostItem_PostItem);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./Components/admin/Header/Header.js







/* harmony default export */ var Header = (props => {
  const user = Object(external_react_redux_["useSelector"])(state => {
    return state.profileReducer.user;
  });
  const history = Object(external_react_router_dom_["useHistory"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      marginBottom: 50
    },
    className: "header top admin-header",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "header-content",
          style: {
            display: "flex"
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "logo-wrp",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_router_dom_["Link"], {
              to: "/admin/posts/home",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                style: {
                  minWidth: 35
                },
                className: "logo",
                src: "/images/logo.png"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  position: "relative",
                  top: 1,
                  marginLeft: 8
                },
                children: "Tutorial Medium"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            className: "navbar-main",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
                className: "",
                to: "/admin/add/post",
                children: "Add Post"
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            padding: "18px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: "#fff"
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: user && user.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
            variant: "light",
            size: "sm",
            style: {
              marginLeft: 30
            },
            onClick: () => {
              localStorage.removeItem("codemedium-token-admin");
              history.push("/admin");
            },
            children: "Logout"
          })]
        })]
      })
    })
  });
});
// CONCATENATED MODULE: ./Components/admin/Footer/Footer.js



/* harmony default export */ var Footer = (props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      background: "aliceblue",
      fontSize: 12,
      padding: "15px 0",
      marginTop: 50
    },
    className: "footer",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "header-content",
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logo-wrp",
          children: "Copyright www.tutorialmedium.com"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logo-wrp",
          style: {
            marginLeft: 15
          },
          children: "Contact Us on contact@tutorialmedium.com"
        })]
      })
    })
  });
});
// CONCATENATED MODULE: ./Components/admin/Layout/Layout.js





/* harmony default export */ var Layout = (props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    className: "layout",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), props.children]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
});
// CONCATENATED MODULE: ./Components/admin/Home/Home.js











class Home_Home extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    external_axios_default()({
      method: "get",
      url: config["a" /* API_URL */] + "/admin/feed/posts",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
      },
      params: {
        user: "6035c940ab2e02358fac6e6b"
      }
    }).then(response => {
      this.setState({
        posts: response.data.posts
      });
      return response.data;
    }).catch(function (error) {
      return error;
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "home",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            style: {
              marginBottom: 30
            },
            children: "Posts"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-9",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                className: "posts post-list",
                children: this.state.posts && this.state.posts.map((item, index) => {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostItem, {
                    user: this.props.user,
                    item: item
                  }, index);
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "side-banner",
              xs: 0,
              sm: 4
            })]
          })]
        })
      })
    });
  }

}

const mapStateToProps = state => {
  return {
    posts: Object(external_ramda_["path"])(["page", "posts"], state),
    user: state.profileReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminPosts: payload => dispatch(Object(actions["a" /* getAdminPosts */])(payload))
  };
};

/* harmony default export */ var admin_Home_Home = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Home_Home));
// CONCATENATED MODULE: ./Components/admin/Login/Login.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Login(props) {
  const {
    0: formDataLogin,
    1: setFormData
  } = Object(external_react_["useState"])({
    email: "",
    password: ""
  });
  const history = Object(external_react_router_dom_["useHistory"])();

  const handleChangeLogin = (key, e) => {
    const updatedFormData = _objectSpread({}, formDataLogin);

    updatedFormData[key] = e.target.value;
    setFormData(updatedFormData);
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    props.login(formDataLogin, history);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "login-page",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "login-content",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        class: "log-form medium-size",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "inner-wrp",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Admin"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"], {
            onSubmit: handleSubmitLogin,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
              controlId: "formBasicEmail",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
                children: "Email"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
                type: "text",
                placeholder: "Enter email",
                onChange: e => {
                  handleChangeLogin("email", e);
                },
                value: formDataLogin.email
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
              controlId: "formBasicPassword",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
                children: "Password"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
                type: "text",
                placeholder: "Password",
                onChange: e => {
                  handleChangeLogin("password", e);
                },
                value: formDataLogin.password
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "button-grp",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
                variant: "primary",
                type: "submit",
                children: "Submit"
              })
            })]
          })]
        })
      })
    })
  });
}

const Login_mapDispatchToProps = dispatch => {
  return {
    login: (payload, history) => dispatch(Object(actions["d" /* login */])(payload, history))
  };
};

/* harmony default export */ var Login_Login = (Object(external_react_redux_["connect"])(null, Login_mapDispatchToProps)(Login));
// CONCATENATED MODULE: ./Components/admin/Login/index.js

/* harmony default export */ var admin_Login = (Login_Login);
// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__("N4Zu");
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);

// EXTERNAL MODULE: external "@tinymce/tinymce-react"
var tinymce_react_ = __webpack_require__("M71N");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./Components/admin/CreatePost/Preview.js






function Preview({
  content,
  updateMainState
}) {
  external_react_default.a.useEffect(() => {
    setTimeout(() => external_prismjs_default.a.highlightAll(), 0);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
      onClick: () => {
        updateMainState({
          isPreview: false
        });
      },
      children: "Close"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    })]
  });
}

/* harmony default export */ var CreatePost_Preview = (Preview);
// CONCATENATED MODULE: ./Components/admin/CreatePost/CreatePost.js



function CreatePost_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreatePost_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreatePost_ownKeys(Object(source), true).forEach(function (key) { CreatePost_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreatePost_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreatePost_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CreatePost_CreatePost extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    CreatePost_defineProperty(this, "getCategories", () => {
      external_axios_default()({
        method: "get",
        url: config["a" /* API_URL */] + "/admin/common/categories",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
        }
      }).then(response => {
        this.setState({
          categories: response.data.categories.map(item => CreatePost_objectSpread(CreatePost_objectSpread({}, item), {}, {
            value: item._id
          }))
        });
        return response.data;
      }).catch(function (error) {
        return error;
      });
    });

    CreatePost_defineProperty(this, "handleChange", (e, key) => {
      this.setState({
        [key]: e.target.value
      });
    });

    CreatePost_defineProperty(this, "handleEditorChange", (content, editor) => {
      console.log("Content was updated:", content);
      this.setState({
        content
      });
    });

    CreatePost_defineProperty(this, "addPost", e => {
      console.log("content", this.state.content);
      e.preventDefault();
      let slug = this.state.title.replace(/\s/g, "-");

      if (this.props.slug) {
        slug = this.props.slug;
      }

      const formData = new FormData();
      formData.append("title", this.state.title);
      formData.append("image", this.state.image);
      formData.append("content", this.state.content);
      formData.append("desc", this.state.desc);
      formData.append("creator", this.props.user.userId);
      formData.append("slug", slug);
      formData.append("authorCode", this.state.authorCode);
      formData.append("categories", JSON.stringify(this.state.selectedCategories.map(item => item.value)));
      console.log(formData);
      external_axios_default()({
        method: "post",
        url: config["a" /* API_URL */] + "/admin/feed/post",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
        },
        data: formData
      }).then(response => {
        alert("Post added");
        this.props.history.push("/admin/posts/home");
        return response.data;
      }).catch(function (error) {
        return error;
      });
    });

    CreatePost_defineProperty(this, "handleUpdatePost", e => {
      console.log("content", this.state.content);
      e.preventDefault();
      let slug = this.state.title.replace(/\s/g, "-");

      if (this.props.slug) {
        slug = this.props.slug;
      }

      const formData = new FormData();
      formData.append("title", this.state.title);

      if (this.state.image) {
        formData.append("image", this.state.image);
      }

      formData.append("content", this.state.content);
      formData.append("desc", this.state.desc);
      formData.append("creator", this.props.user.userId);
      formData.append("slug", slug);
      formData.append("authorCode", this.state.authorCode);
      formData.append("categories", JSON.stringify(this.state.selectedCategories.map(item => item.value)));
      console.log(formData);
      external_axios_default()({
        method: "put",
        url: config["a" /* API_URL */] + "/admin/feed/post/" + this.props.postId,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
        },
        data: formData
      }).then(response => {
        alert("Post updated");
        this.props.history.push("/admin/posts/home");
        return response.data;
      }).catch(function (error) {
        return error;
      });
    });

    CreatePost_defineProperty(this, "onFileChange", (value, files) => {
      // if (files) {
      //   generateBase64FromImage(files[0])
      //     .then(b64 => {
      //       this.setState({ imagePreview: b64 });
      //     })
      //     .catch(e => {
      //       this.setState({ imagePreview: null });
      //     });
      // }
      this.setState({
        image: files ? files[0] : value
      });
    });

    CreatePost_defineProperty(this, "updateMainState", stateChunk => {
      this.setState(CreatePost_objectSpread(CreatePost_objectSpread({}, this.state), stateChunk));
    });

    this.state = {
      content: this.props.content,
      title: this.props.title,
      desc: this.props.desc,
      authorCode: null,
      categories: [],
      selectedCategories: this.props.selectedCategories || [],
      isPreview: false
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        padding: "25px"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-wrap",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
          onClick: () => {
            this.setState({
              isPreview: true
            });
          },
          children: "Preview"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          textAlign: "center"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Write Post"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          textAlign: "center",
          marginBottom: 15
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Title"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          style: {
            width: "50%"
          },
          value: this.state.title,
          onChange: e => {
            this.handleChange(e, "title");
          },
          placeholder: "title..."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          textAlign: "center",
          marginBottom: 15
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Add Main Image"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          className: "",
          type: "file",
          onChange: e => this.onFileChange(e.target.value, e.target.files)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          textAlign: "center",
          marginBottom: 15
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Description"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          style: {
            width: "50%"
          },
          value: this.state.desc,
          onChange: e => {
            this.handleChange(e, "desc");
          }
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          textAlign: "center",
          marginBottom: 15
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Select category"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 10000,
            position: "relative"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_select_default.a, {
            isMulti: true,
            value: this.state.selectedCategories,
            onChange: selected => {
              this.setState({
                selectedCategories: selected
              });
            },
            options: this.state.categories
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: 700
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(tinymce_react_["Editor"], {
          value: this.state.content,
          init: {
            height: 700,
            menubar: true,
            // plugins: [
            //   'advlist',
            //   'searchreplace visualblocks code fullscreen',
            //   'insertdatetime media table paste code help wordcount'
            // ],
            plugins: ["print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],
            toolbar: "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
            body_class: "my_class"
          },
          onEditorChange: this.handleEditorChange
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "bttn-wrap",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
          className: "author-id-form",
          onSubmit: this.addPost,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            class: "grp",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              children: "Auth code"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              value: this.state.authorCode,
              onChange: e => {
                this.setState({
                  authorCode: e.target.value
                });
              }
            })]
          }), !this.props.editPost && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
            type: "submit",
            children: "Publish"
          }), this.props.editPost && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Button"], {
            onClick: this.handleUpdatePost,
            type: "button",
            children: [" ", "Update", " "]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Modal"], {
        dialogClassName: "preview-modal",
        isOpen: this.state.isPreview,
        toggle: () => {
          this.setState({
            isPreview: !this.state.isPreview
          });
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ModalHeader"], {
          toggle: () => {
            this.setState({
              isPreview: !this.state.isPreview
            });
          },
          children: "Preview"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ModalBody"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreatePost_Preview, {
            updateMainState: this.updateMainState,
            content: this.state.content
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ModalFooter"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
            color: "secondary",
            onClick: () => {
              this.setState({
                isPreview: false
              });
            },
            children: "Cancel"
          })
        })]
      })]
    });
  }

}

const CreatePost_mapStateToProps = state => {
  return {
    user: state.profileReducer.user
  };
};

/* harmony default export */ var admin_CreatePost_CreatePost = (Object(external_react_redux_["connect"])(CreatePost_mapStateToProps)(CreatePost_CreatePost));
// CONCATENATED MODULE: ./Components/admin/CreatePost/index.js

/* harmony default export */ var admin_CreatePost = (admin_CreatePost_CreatePost);
// CONCATENATED MODULE: ./Components/admin/PostDetail/PostDetail.js



function PostDetail_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PostDetail_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PostDetail_ownKeys(Object(source), true).forEach(function (key) { PostDetail_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PostDetail_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PostDetail_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class PostDetail_PostDetail extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    PostDetail_defineProperty(this, "deletePost", () => {
      external_axios_default()({
        method: "delete",
        url: config["a" /* API_URL */] + "/admin/feed/post/" + this.props.match.params.postId,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
        },
        data: {
          authorCode: this.state.authorCode
        }
      }).then(response => {
        this.setState({
          showDeleteModel: !this.state.showDeleteModel
        });
        alert("Deleted");
        this.props.history.push("/admin/posts/home");
        return response.data;
      }).catch(function (error) {
        alert("Error");
        return error;
      });
    });

    PostDetail_defineProperty(this, "onEditClick", () => {
      this.setState({
        editPost: !this.state.editPost
      });
    });

    this.state = {
      editPost: false,
      post: null,
      authorCode: null,
      showDeleteModel: false
    };
  }

  componentDidMount() {
    external_axios_default()({
      method: "get",
      url: config["a" /* API_URL */] + "/admin/feed/post/" + this.props.match.params.postId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
      }
    }).then(response => {
      this.setState({
        post: response.data.post
      }, () => {
        setTimeout(() => external_prismjs_default.a.highlightAll(), 0);
      });
      return response.data;
    }).catch(function (error) {
      return error;
    });
  }

  render() {
    const postItem = this.state.post;

    if (!postItem) {
      return null;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "post-page",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-9",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "bttn-wrap",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Button"], {
                  onClick: this.onEditClick,
                  children: [!this.state.editPost && "Edit Post", this.state.editPost && "View Post"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
                  style: {
                    marginLeft: 10
                  },
                  variant: "danger",
                  onClick: () => {
                    this.setState({
                      showDeleteModel: !this.state.showDeleteModel
                    });
                  },
                  children: "Delete Post"
                })]
              }), !this.state.editPost && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "post-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "post RichEditor-editor",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                    className: "title",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                      children: postItem.title
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: postItem.content
                    }
                  })]
                })
              }), this.state.editPost && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "post-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_CreatePost, {
                  editPost: true,
                  content: postItem.content,
                  title: postItem.title,
                  desc: postItem.desc,
                  selectedCategories: postItem.categories && postItem.categories.map(item => PostDetail_objectSpread(PostDetail_objectSpread({}, item), {}, {
                    value: item._id
                  })),
                  postId: postItem._id
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Modal"], {
        show: this.state.showDeleteModel,
        onHide: () => {
          this.setState({
            handleClose: !this.state.handleClose
          });
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Header, {
          closeButton: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Title, {
            children: "Do you want to delete this post?"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Modal"].Body, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: postItem.title
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            class: "grp",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Auth code"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              value: this.state.authorCode,
              onChange: e => {
                this.setState({
                  authorCode: e.target.value
                });
              }
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Footer, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
            variant: "danger",
            onClick: this.deletePost,
            children: "Delete"
          })
        })]
      })]
    });
  }

}

/* harmony default export */ var admin_PostDetail_PostDetail = (PostDetail_PostDetail);
// CONCATENATED MODULE: ./Components/admin/Admin.js













function Admin(props) {
  const [isValid, setIsValid] = external_react_default.a.useState(true);
  external_react_default.a.useEffect(() => {
    return external_axios_default()({
      method: "get",
      url: config["a" /* API_URL */] + "/admin/auth/status",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin")
      }
    }).then(function (response) {
      setIsValid(true);
      props.loginAction(response.data.user);
      return response.data;
    }).catch(function (error) {
      setIsValid(false);
      history.push("/admin");
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Switch, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Route, {
        exact: true,
        path: path,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_Login, {})
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Switch, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Route, {
        exact: true,
        path: `${path}/add/post`,
        component: admin_CreatePost
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Route, {
        exact: true,
        path: `${path}/posts/home`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_Home_Home, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Route, {
        exact: true,
        path: `${path}/:postId`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_PostDetail_PostDetail, {})
      })]
    })]
  });
}

const Admin_mapDispatchToProps = dispatch => {
  return {
    loginAction: payload => dispatch(Object(actions["e" /* loginAction */])(payload))
  };
};

/* harmony default export */ var admin_Admin = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(null, Admin_mapDispatchToProps)(Admin)));
// CONCATENATED MODULE: ./Components/admin/index.js

/* harmony default export */ var admin = (admin_Admin);
// CONCATENATED MODULE: ./pages/admin/index.js




function pages_admin_Admin({
  posts
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin, {})
  });
}

/* harmony default export */ var pages_admin = __webpack_exports__["default"] = (pages_admin_Admin);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminPosts; });
/* unused harmony export testActionCreator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPosts2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPost2; });
/* unused harmony export onGetPosts */
/* unused harmony export onGetPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginAction; });
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

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
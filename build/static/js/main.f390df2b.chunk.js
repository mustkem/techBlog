(window.webpackJsonpmarioplan=window.webpackJsonpmarioplan||[]).push([[0],{353:function(e,t,a){e.exports=a(690)},358:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},558:function(e,t,a){},680:function(e,t,a){},681:function(e,t,a){},690:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(358),a(359),a(360),a(361),a(362),a(15)),i=a(69),s=a(343),m=a(109),u=a(211),d=a(28),p="ADD_POST",h="GET_POSTS",g="LOGIN_SUCCESS",E={};var f={};var v=Object(i.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),t);case h:return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},firestore:m.firestoreReducer,profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});default:return e}}}),b=a(154);a(691),a(543);b.a.initializeApp({apiKey:"AIzaSyB4g1fFy8mVY9fs5c7dW0ti7t53zP2Y2rs",authDomain:"my-project-1525784461261.firebaseapp.com",databaseURL:"https://my-project-1525784461261.firebaseio.com",projectId:"my-project-1525784461261",storageBucket:"",messagingSenderId:"234456308154",appId:"1:234456308154:web:21336fccce9f972d"}),b.a.firestore().settings({});var y=b.a,C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,j=Object(i.e)(v,C(Object(i.a)(s.a.withExtraArgument({getFirebase:u.getFirebase,getFirestore:m.getFirestore})),Object(m.reduxFirestore)(y),Object(u.reactReduxFirebase)(y))),N=a(31),w=a(8),O=a(21),k=a(22),S=a(24),P=a(23),x=a(725),T=a(110),I=a(344),B=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},className:"advertisement"}),r.a.createElement("div",{className:"advertisement"},r.a.createElement("a",{style:{display:"inline-block"},target:"_blank",href:"https://www.gravityforms.com/?promo=80256"},r.a.createElement("img",{src:"/images/right-banner4.png"}))))},A="https://codemedium-backend.herokuapp.com";a(558);var D=function(e){var t=e.item;return r.a.createElement("li",{className:"post-card"},r.a.createElement(N.b,{className:"link title",to:"/"+t.slug},r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"sec-1"},r.a.createElement("div",null,r.a.createElement("h2",null,t.title),r.a.createElement("div",{className:"desc"},t.desc)),r.a.createElement("div",{className:"category-sec"},t.categories&&t.categories.map((function(e){return r.a.createElement("div",{className:"category"}," ",e.label," ")})))),r.a.createElement("div",{className:"sec-2"},r.a.createElement("div",{className:"figure-content"},r.a.createElement("img",{style:{height:"100%",width:"100%",objectFit:"contain"},src:A+"/"+t.imageUrl}))))))},M=a(726),_=a(20),F=a.n(_),z=function(e){return function(t,a,n){n.getFirebase,n.getFirestore;return t(L({loading:!0})),F()({method:"get",url:A+"/feed/posts",params:e}).then((function(e){return t(L({loading:!1,posts:e.data.posts})),e.data})).catch((function(e){console.log(e)}))}},R=function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("posts").where("slug","==",e.slug).get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),window.post=t}))}};function L(e){return{type:h,payload:e}}var U=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)().collection("posts");r.where("slug","==",e.query.slug).get().then((function(t){t.forEach((function(t){console.log(t.id," => ",t.data()),r.doc(t.id).update(e.dataToPost)}))}))}};function H(e){return{type:g,payload:e}}var K=Object(w.h)(Object(c.b)(null,(function(e){return{getPosts:function(t){return e(z(t))}}}))((function(e){console.log("test");var t=function(t){var a=Object(T.parse)(e.location.search);a.category=t.category;var n={};Object.keys(a).forEach((function(e){a[e]&&(n[e]=a[e])})),e.history.push("/?"+Object(T.stringify)(n)),e.getPosts(a)};return r.a.createElement("div",{className:"header top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-content",style:{display:"flex"}},r.a.createElement("div",{className:"logo-wrp"},r.a.createElement("div",{className:"logo-sec",onClick:function(){t({category:""})}},r.a.createElement("img",{style:{minWidth:35},className:"logo",src:"/images/logo.png"}),r.a.createElement("span",{className:"sub-title",style:{position:"relative",top:1,marginLeft:8}},"Code Medium"))),r.a.createElement("ul",{className:"navbar-main"},r.a.createElement("li",null,r.a.createElement(M.a,{className:"link react",onClick:function(){t({category:"react"})}},"React")),r.a.createElement("li",null,r.a.createElement(M.a,{className:"link javascript",onClick:function(){t({category:"javascript"})}},"Javascript"))))))}))),q=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.testAction().then((function(){console.log("test")}))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component),W=Object(c.b)(null,{testAction:function(e){return function(e){return new Promise((function(t,a){console.log("test",e),t()}))}}})(q),G=function(e){return r.a.createElement("div",{style:{background:"aliceblue",fontSize:12,padding:"15px 0"},className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-content",style:{display:"flex"}},r.a.createElement("div",{className:"logo-wrp"},"Copyright Code Medium"),r.a.createElement("div",{className:"logo-wrp",style:{marginLeft:15}},"Contact Us on codemedium@contact.com"))),r.a.createElement(W,null))},V=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},className:"layout"},r.a.createElement("div",null,r.a.createElement(K,null),e.children),r.a.createElement(G,null))},J=function(){return r.a.createElement("div",{className:"banner-adv",style:{background:"aliceblue"}},r.a.createElement("div",{className:"container"},r.a.createElement("a",{style:{display:"inline-block"},target:"_blank",href:"https://www.xm.com/grand-lucky-draw-winners-10-anniversary-promo-131703?target=next_z01452qwo"},r.a.createElement("img",{className:"post-image",src:"https://tpc.googlesyndication.com/daca_images/simgad/1666469299077737993"}))))},X=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.parse)(this.props.location.search);this.props.getPosts(e)}},{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement("div",{className:"home"},r.a.createElement(J,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("ul",{className:"posts post-list"},this.props.loading&&[1,1].map((function(e){return r.a.createElement("li",{className:"post-card"},r.a.createElement("div",{style:{padding:15}},r.a.createElement($,null)))})),!this.props.loading&&this.props.posts&&this.props.posts.map((function(e,t){return r.a.createElement(D,{item:e,key:t})})))),r.a.createElement("div",{className:"side-banner ",xs:0,sm:4},r.a.createElement(B,null))))))}}]),a}(r.a.Component),Y=Object(w.h)(Object(c.b)((function(e){return{posts:Object(x.a)(["page","posts"],e),loading:Object(x.a)(["page","loading"],e)}}))(X)),$=function(){return r.a.createElement(I.a,{viewBox:"0 0 380 70"},r.a.createElement("rect",{x:"228",y:"0",rx:"5",ry:"5",width:"280",height:"150"}),r.a.createElement("rect",{x:"0",y:"5",rx:"4",ry:"4",width:"220",height:"13"}),r.a.createElement("rect",{x:"0",y:"25",rx:"3",ry:"3",width:"220",height:"15"}),r.a.createElement("rect",{x:"170",y:"60",rx:"3",ry:"3",width:"50",height:"8"}))},Q=Object(w.h)(Object(c.b)((function(e){return{page:e.page}}),(function(e){return{getPosts:function(t){return e(z(t))}}}))(Y)),Z=a(67),ee=a(19),te=a(347),ae=a(151),ne=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).getCategories=function(){F()({method:"get",url:A+"/admin/common/categories",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")}}).then((function(e){return n.setState({categories:e.data.categories.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{value:e._id})}))}),e.data})).catch((function(e){return e}))},n.handleChange=function(e,t){n.setState(Object(Z.a)({},t,e.target.value))},n.addPost=function(e){e.preventDefault();var t=n.state.title.replace(/\s/g,"-");n.props.slug&&(t=n.props.slug);var a=new FormData;a.append("title",n.state.title),a.append("image",n.state.image),a.append("content",n.refs.editor.editor.innerHTML),a.append("desc",n.state.desc),a.append("creator","6035c940ab2e02358fac6e6b"),a.append("slug",t),a.append("authorCode",n.state.authorCode),a.append("categories",n.state.selectedCategories.map((function(e){return e.value}))),console.log(a),F()({method:"post",url:A+"/admin/feed/post",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},data:a}).then((function(e){return alert("Post added"),n.props.history.push("/admin/posts/home"),e.data})).catch((function(e){return e}))},n.onFileChange=function(e,t){n.setState({image:t?t[0]:e})},n.state={title:n.props.title,desc:n.props.desc,editorState:ee.EditorState.createEmpty(),authorCode:null,categories:[],selectedCategories:null},n.focus=function(){return n.refs.editor.focus()},n.onChange=function(e){return n.setState({editorState:e})},n.editorRef=r.a.createRef(),n.handleKeyCommand=function(e){return n._handleKeyCommand(e)},n.onTab=function(e){return n._onTab(e)},n.toggleBlockType=function(e){return n._toggleBlockType(e)},n.toggleInlineStyle=function(e){return n._toggleInlineStyle(e)},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(te.a)(this.props.content),t=ee.EditorState.createWithContent(e);this.setState({editorState:t}),this.getCategories()}},{key:"_handleKeyCommand",value:function(e){var t=this.state.editorState,a=ee.RichUtils.handleKeyCommand(t,e);return!!a&&(this.onChange(a),!0)}},{key:"_onTab",value:function(e){this.onChange(ee.RichUtils.onTab(e,this.state.editorState,4))}},{key:"_toggleBlockType",value:function(e){this.onChange(ee.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(ee.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this,t=this.state.editorState,a="RichEditor-editor",n=t.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(a+=" RichEditor-hidePlaceholder"),r.a.createElement("div",{className:"my-editor"},r.a.createElement("div",null,r.a.createElement("p",null,"Write Post")),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Title"),r.a.createElement("input",{className:"",type:"file",onChange:function(t){return e.onFileChange(t.target.value,t.target.files)}}),r.a.createElement("input",{style:{width:"50%"},value:this.state.title,onChange:function(t){e.handleChange(t,"title")},placeholder:"title..."})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Description"),r.a.createElement("textarea",{style:{width:"50%"},value:this.state.desc,onChange:function(t){e.handleChange(t,"desc")}})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Select category"),r.a.createElement(ae.a,{isMulti:!0,value:this.state.selectedCategories,onChange:function(t){e.setState({selectedCategories:t})},options:this.state.categories})),r.a.createElement("div",{className:"edittor-wrp RichEditor-root"},r.a.createElement(ie,{editorState:t,onToggle:this.toggleBlockType}),r.a.createElement(me,{editorState:t,onToggle:this.toggleInlineStyle}),r.a.createElement("div",{className:a,onClick:this.focus},r.a.createElement(ee.Editor,{blockStyleFn:le,customStyleMap:re,editorState:t,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,onTab:this.onTab,ref:"editor",spellCheck:!0}))),r.a.createElement("div",{className:"bttn-wrap"},r.a.createElement("form",{className:"author-id-form",onSubmit:this.addPost},r.a.createElement("div",{class:"grp"},r.a.createElement("label",null,"Auth code"),r.a.createElement("input",{type:"text",value:this.state.authorCode,onChange:function(t){e.setState({authorCode:t.target.value})}})),!this.props.editPost&&r.a.createElement(M.a,{type:"submit"},"Publish"),this.props.editPost&&r.a.createElement(M.a,{type:"submit"}," Update "))))}}]),a}(r.a.Component),re={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function le(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var oe=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(){var e;return Object(O.a)(this,a),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(k.a)(a,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),r.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),a}(r.a.Component),ce=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],ie=function(e){var t=e.editorState,a=t.getSelection(),n=t.getCurrentContent().getBlockForKey(a.getStartKey()).getType();return r.a.createElement("div",{className:"RichEditor-controls"},ce.map((function(t){return r.a.createElement(oe,{key:t.label,active:t.style===n,label:t.label,onToggle:e.onToggle,style:t.style})})))},se=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],me=function(e){var t=e.editorState.getCurrentInlineStyle();return r.a.createElement("div",{className:"RichEditor-controls"},se.map((function(a){return r.a.createElement(oe,{key:a.label,active:t.has(a.style),label:a.label,onToggle:e.onToggle,style:a.style})})))},ue=Object(w.h)(ne),de=a(345),pe=a(214),he=a.n(pe);n.Component;var ge=Object(c.b)(null,(function(e){return{addPost:function(t){return e((function(e,t,a){a.getFirebase,a.getFirestore}))}}}))((function(e){return r.a.createElement("div",{className:"add-post",style:{padding:"50px 0"}},r.a.createElement("div",{className:"container"},r.a.createElement(ue,{addPost:e.addPost,content:"",title:"",desc:"",query:!1,slug:!1})))})),Ee=Object(w.h)(Object(c.b)((function(e){return{page:e.page}}),(function(e){return{addPost:function(t){return e((function(e,t,a){a.getFirebase,a.getFirestore}))}}}))(ge)),fe=a(728),ve=a(706),be=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"author-wrap clearfix"},r.a.createElement("div",{id:"authorBox"},r.a.createElement("div",null,r.a.createElement("h4",null,"Mustkeem K"),r.a.createElement("p",null,"Software Engineer"))))}}]),a}(r.a.Component),ye=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).onEditClick=function(){n.setState({editPost:!n.state.editPost})},n.state={editPost:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.getPost(this.props.match.params);var t=setInterval((function(){window.post&&(clearInterval(t),e.setState({post:window.post}))}),1e3);window.scroll(0,0)}},{key:"render",value:function(){var e=Object(x.a)([0],window.post);return e?r.a.createElement(V,null,r.a.createElement("div",{className:"post-page"},r.a.createElement(fe.a,null,r.a.createElement(J,null),r.a.createElement(ve.a,{container:!0,spacing:3},r.a.createElement(ve.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:"bttn-wrap"},r.a.createElement("button",{onClick:this.onEditClick},!this.state.editPost&&"Edit Post",this.state.editPost&&"View Post")),!this.state.editPost&&r.a.createElement("div",{className:"post-wrap"},r.a.createElement("div",{className:"post RichEditor-editor"},r.a.createElement("h1",{className:"title"},r.a.createElement("strong",null,e.title)),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:e.content}})),r.a.createElement(be,null)),this.state.editPost&&r.a.createElement("div",null,r.a.createElement(ue,{content:e.content,title:e.title,desc:e.desc,updatePost:this.props.updatePost,query:this.props.match.params,slug:e.slug,id:e.id,editPost:!0}))),r.a.createElement(ve.a,{className:"side-banner",item:!0,xs:0,sm:4},r.a.createElement(B,null))))),"\\"):null}}]),a}(r.a.Component),Ce=Object(w.h)(ye),je=(Object(w.h)(Object(c.b)((function(e){return{page:e.page}}),(function(e){return{getPost:function(t){return e(R(t))},updatePost:function(t){return e(U(t))}}}))(Ce)),a(89)),Ne=a.n(je),we=a(707),Oe=a(708),ke=a(709),Se=a(710),Pe=a(711),xe=a(712),Te=a(713),Ie=a(714),Be=a(715),Ae=a(716),De=a(717),Me=a(718),_e=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={post:null},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;F()({method:"get",url:A+"/feed/post/"+this.props.match.params.slug,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")}}).then((function(t){return e.setState({post:t.data.post},(function(){setTimeout((function(){return Ne.a.highlightAll()}),0)})),t.data})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this.state.post;return r.a.createElement(V,null,r.a.createElement("div",{className:"post-page"},r.a.createElement(J,null),r.a.createElement("div",{className:"container"},this.state.post&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"post-wrap"},r.a.createElement("div",{className:"post RichEditor-editor"},r.a.createElement("h1",{className:"title"},r.a.createElement("strong",null,e.title)),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:20}},r.a.createElement("div",{className:"share-icon-container"},r.a.createElement(we.a,null,r.a.createElement(Oe.a,{size:32,round:!0})),r.a.createElement(ke.a,null,r.a.createElement(Se.a,{size:32,round:!0})),r.a.createElement(Pe.a,{url:"test"},r.a.createElement(xe.a,{size:32,round:!0})),r.a.createElement(Te.a,null,r.a.createElement(Ie.a,{size:32,round:!0})),r.a.createElement(Be.a,null,r.a.createElement(Ae.a,{size:32,round:!0})),r.a.createElement(De.a,null,r.a.createElement(Me.a,{size:32,round:!0})))),r.a.createElement("div",{className:"detail-image"},r.a.createElement("img",{src:A+"/"+e.imageUrl})),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:e.content}})))),r.a.createElement("div",{className:"side-banner col-md-3"},r.a.createElement(B,null))))))}}]),a}(r.a.Component),Fe=Object(w.h)(_e),ze=Object(w.h)(Object(c.b)((function(e){return{page:e.page}}),(function(e){return{getPost:function(t){return e(R(t))},updatePost:function(t){return e(U(t))}}}))(Fe));a(680);var Re=function(e){var t=e.item;return r.a.createElement("li",{className:"post-card"},r.a.createElement(N.b,{className:"link title",to:"/admin/"+t._id},r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"sec-1"},r.a.createElement("div",null,r.a.createElement("h2",null,t.title),r.a.createElement("div",{className:"desc"},t.desc)),r.a.createElement("div",{className:"category-sec"},t.categories.map((function(e){return r.a.createElement("div",{className:"category"}," ",e.label," ")})))),r.a.createElement("div",{className:"sec-2"},r.a.createElement("div",{className:"figure-content"},r.a.createElement("img",{src:A+"/"+t.imageUrl}))))))},Le=function(e){var t=Object(c.c)((function(e){return e.profileReducer.user})),a=Object(w.f)();return r.a.createElement("div",{style:{marginBottom:50},className:"header top admin-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{className:"header-content",style:{display:"flex"}},r.a.createElement("div",{className:"logo-wrp"},r.a.createElement(N.b,{to:"/admin/posts/home"},r.a.createElement("img",{style:{minWidth:35},className:"logo",src:"/images/logo.png"}),r.a.createElement("span",{style:{position:"relative",top:1,marginLeft:8}},"Code Medium"))),r.a.createElement("ul",{className:"navbar-main"},r.a.createElement("li",null,r.a.createElement(N.b,{className:"",to:"/admin/add/post"},"Add Post")),r.a.createElement("li",null,r.a.createElement(N.b,{className:"",to:"/admin/add/post2"},"Add Post 2")))),r.a.createElement("div",{style:{padding:"18px",justifyContent:"center",display:"flex",alignItems:"center",color:"#fff"}},r.a.createElement("div",null,t&&t.name),r.a.createElement(M.a,{variant:"light",size:"sm",style:{marginLeft:30},onClick:function(){localStorage.removeItem("codemedium-token-admin"),a.push("/admin")}},"Logout")))))},Ue=function(e){return r.a.createElement("div",{style:{background:"aliceblue",fontSize:12,padding:"15px 0",marginTop:50},className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-content",style:{display:"flex"}},r.a.createElement("div",{className:"logo-wrp"},"Copyright Code Medium"),r.a.createElement("div",{className:"logo-wrp",style:{marginLeft:15}},"Contact Us on codemedium@contact.com"))))},He=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},className:"layout"},r.a.createElement("div",null,r.a.createElement(Le,null),e.children),r.a.createElement(Ue,null))},Ke=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;F()({method:"get",url:A+"/admin/feed/posts",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},params:{user:"6035c940ab2e02358fac6e6b"}}).then((function(t){return e.setState({posts:t.data.posts}),t.data})).catch((function(e){return e}))}},{key:"render",value:function(){return r.a.createElement(He,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{style:{marginBottom:30}},"Posts"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("ul",{className:"posts post-list"},this.state.posts&&this.state.posts.map((function(e,t){return r.a.createElement(Re,{item:e,key:t})})))),r.a.createElement("div",{className:"side-banner",xs:0,sm:4})))))}}]),a}(r.a.Component),qe=Object(c.b)((function(e){return{posts:Object(x.a)(["page","posts"],e)}}),(function(e){return{getAdminPosts:function(t){return e((function(e,t,a){a.getFirebase,a.getFirestore,F()({method:"get",url:A+"/admin/feed/post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},params:{user:"test"}}).then((function(e){return e.data})).catch((function(e){return e}))}))}}}))(Ke),We=a(152),Ge=a(724);a(681);var Ve=Object(c.b)(null,(function(e){return{login:function(t){return e(function(e){return function(t,a,n){n.getFirebase,n.getFirestore;return F()({method:"post",url:A+"/admin/auth/login",data:e}).then((function(e){return localStorage.setItem("codemedium-token-admin",e.data.token),t(H(e.data.user)),e.data})).catch((function(e){console.log(e)}))}}(t))}}}))((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(We.a)(t,2),l=a[0],o=a[1],c=Object(w.f)(),i=function(e,t){var a=Object(d.a)({},l);a[e]=t.target.value,o(a)};return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-content"},r.a.createElement("div",{class:"log-form medium-size"},r.a.createElement("div",{className:"inner-wrp"},r.a.createElement("h2",null,"Admin"),r.a.createElement(Ge.a,{onSubmit:function(t){t.preventDefault(),e.login(l).then((function(e){c.push("/admin/posts/home")})).catch((function(e){}))}},r.a.createElement(Ge.a.Group,{controlId:"formBasicEmail"},r.a.createElement(Ge.a.Label,null,"Email"),r.a.createElement(Ge.a.Control,{type:"text",placeholder:"Enter email",onChange:function(e){i("email",e)},value:l.email})),r.a.createElement(Ge.a.Group,{controlId:"formBasicPassword"},r.a.createElement(Ge.a.Label,null,"Password"),r.a.createElement(Ge.a.Control,{type:"text",placeholder:"Password",onChange:function(e){i("password",e)},value:l.password})),r.a.createElement("div",{className:"button-grp"},r.a.createElement(M.a,{variant:"primary",type:"submit"},"Submit")))))))})),Je=a(723),Xe=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).updatePost=function(e){F()({method:"put",url:A+"/admin/feed/post/"+n.props.match.params.postId,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},data:e}).then((function(e){return n.setState({post:e.data.post}),alert("Updated"),n.props.history.push("/admin/posts/home"),e.data})).catch((function(e){return alert("Error"),e}))},n.deletePost=function(){F()({method:"delete",url:A+"/admin/feed/post/"+n.props.match.params.postId,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},data:{authorCode:n.state.authorCode}}).then((function(e){return n.setState({showDeleteModel:!n.state.showDeleteModel}),alert("Deleted"),n.props.history.push("/admin/posts/home"),e.data})).catch((function(e){return alert("Error"),e}))},n.onEditClick=function(){n.setState({editPost:!n.state.editPost})},n.state={editPost:!1,post:null,authorCode:null,showDeleteModel:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;F()({method:"get",url:A+"/admin/feed/post/"+this.props.match.params.postId,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")}}).then((function(t){return e.setState({post:t.data.post},(function(){setTimeout((function(){return Ne.a.highlightAll()}),0)})),t.data})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this,t=this.state.post;return t?r.a.createElement(He,null,r.a.createElement("div",{className:"post-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"bttn-wrap"},r.a.createElement(M.a,{onClick:this.onEditClick},!this.state.editPost&&"Edit Post",this.state.editPost&&"View Post"),r.a.createElement(M.a,{style:{marginLeft:10},variant:"danger",onClick:function(){e.setState({showDeleteModel:!e.state.showDeleteModel})}},"Delete Post")),!this.state.editPost&&r.a.createElement("div",{className:"post-wrap"},r.a.createElement("div",{className:"post RichEditor-editor"},r.a.createElement("h1",{className:"title"},r.a.createElement("strong",null,t.title)),r.a.createElement("div",{className:"detail-image"},r.a.createElement("img",{src:A+"/"+t.imageUrl})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))))))),r.a.createElement(Je.a,{show:this.state.showDeleteModel,onHide:function(){e.setState({handleClose:!e.state.handleClose})}},r.a.createElement(Je.a.Header,{closeButton:!0},r.a.createElement(Je.a.Title,null,"Do you want to delete this post?")),r.a.createElement(Je.a.Body,null,r.a.createElement("p",null,t.title),r.a.createElement("div",{class:"grp"},r.a.createElement("p",null,"Auth code"),r.a.createElement("input",{type:"text",value:this.state.authorCode,onChange:function(t){e.setState({authorCode:t.target.value})}}))),r.a.createElement(Je.a.Footer,null,r.a.createElement(M.a,{variant:"danger",onClick:this.deletePost},"Delete")))):null}}]),a}(r.a.Component),Ye=Object(w.h)(Xe),$e=a(348),Qe=a(719),Ze=a(727),et=a(720),tt=a(721),at=a(722);var nt=function(e){var t=e.content,a=e.updateMainState;return r.a.useEffect((function(){setTimeout((function(){return Ne.a.highlightAll()}),0)})),r.a.createElement("div",null,r.a.createElement(Qe.a,{onClick:function(){a({isPreview:!1})}},"Close"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))},rt=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).getCategories=function(){F()({method:"get",url:A+"/admin/common/categories",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")}}).then((function(e){return n.setState({categories:e.data.categories.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{value:e._id})}))}),e.data})).catch((function(e){return e}))},n.handleChange=function(e,t){n.setState(Object(Z.a)({},t,e.target.value))},n.handleEditorChange=function(e,t){console.log("Content was updated:",e),n.setState({content:e})},n.addPost=function(e){console.log("content",n.state.content),e.preventDefault();var t=n.state.title.replace(/\s/g,"-");n.props.slug&&(t=n.props.slug);var a=new FormData;a.append("title",n.state.title),a.append("image",n.state.image),a.append("content",n.state.content),a.append("desc",n.state.desc),a.append("creator","6035c940ab2e02358fac6e6b"),a.append("slug",t),a.append("authorCode",n.state.authorCode),a.append("categories",n.state.selectedCategories.map((function(e){return e.value}))),console.log(a),F()({method:"post",url:A+"/admin/feed/post",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")},data:a}).then((function(e){return alert("Post added"),n.props.history.push("/admin/posts/home"),e.data})).catch((function(e){return e}))},n.onFileChange=function(e,t){n.setState({image:t?t[0]:e})},n.updateMainState=function(e){n.setState(Object(d.a)(Object(d.a)({},n.state),e))},n.state={content:"",isPreview:!1,title:n.props.title,desc:n.props.desc,authorCode:null,categories:[],selectedCategories:null},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:"25px"}},r.a.createElement("div",{className:"action-wrap"},r.a.createElement(Qe.a,{onClick:function(){e.setState({isPreview:!0})}},"Preview")),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"Write Post")),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Title"),r.a.createElement("input",{style:{width:"50%"},value:this.state.title,onChange:function(t){e.handleChange(t,"title")},placeholder:"title..."})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Add Main Image"),r.a.createElement("input",{className:"",type:"file",onChange:function(t){return e.onFileChange(t.target.value,t.target.files)}})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Description"),r.a.createElement("textarea",{style:{width:"50%"},value:this.state.desc,onChange:function(t){e.handleChange(t,"desc")}})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:15}},r.a.createElement("p",null,"Select category"),r.a.createElement(ae.a,{isMulti:!0,value:this.state.selectedCategories,onChange:function(t){e.setState({selectedCategories:t})},options:this.state.categories})),r.a.createElement("div",{style:{height:700}},r.a.createElement($e.a,{value:this.state.content,init:{height:700,menubar:!0,plugins:["print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],toolbar:"undo redo | formatselect | bold italic backcolor |             alignleft aligncenter alignright alignjustify |             bullist numlist outdent indent | removeformat | help",body_class:"my_class"},onEditorChange:this.handleEditorChange})),r.a.createElement("div",{className:"bttn-wrap"},r.a.createElement("form",{className:"author-id-form",onSubmit:this.addPost},r.a.createElement("div",{class:"grp"},r.a.createElement("label",null,"Auth code"),r.a.createElement("input",{type:"text",value:this.state.authorCode,onChange:function(t){e.setState({authorCode:t.target.value})}})),!this.props.editPost&&r.a.createElement(Qe.a,{type:"submit"},"Publish"),this.props.editPost&&r.a.createElement(Qe.a,{type:"submit"}," Update "))),r.a.createElement(Ze.a,{dialogClassName:"preview-modal",isOpen:this.state.isPreview,toggle:function(){e.setState({isPreview:!e.state.isPreview})}},r.a.createElement(et.a,{toggle:function(){e.setState({isPreview:!e.state.isPreview})}},"Preview"),r.a.createElement(tt.a,null,r.a.createElement(nt,{updateMainState:this.updateMainState,content:this.state.content})),r.a.createElement(at.a,null,r.a.createElement(Qe.a,{color:"secondary",onClick:function(){e.setState({isPreview:!1})}},"Cancel"))))}}]),a}(r.a.Component);var lt=Object(c.b)(null,(function(e){return{loginAction:function(t){return e(H(t))}}}))((function(e){var t=Object(w.g)(),a=t.path,n=(t.url,Object(w.f)()),l=r.a.useState(!0),o=Object(We.a)(l,2),c=(o[0],o[1]);return r.a.useEffect((function(){return F()({method:"get",url:A+"/admin/auth/status",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("codemedium-token-admin")}}).then((function(t){return c(!0),e.loginAction(t.data.user),t.data})).catch((function(e){c(!1),n.push("/admin"),console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:a},r.a.createElement(Ve,null))),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"".concat(a,"/add/post2"),component:rt}),r.a.createElement(w.a,{exact:!0,path:"".concat(a,"/posts/home")},r.a.createElement(qe,null)),r.a.createElement(w.a,{exact:!0,path:"".concat(a,"/add/post")},r.a.createElement(Ee,null)),r.a.createElement(w.a,{exact:!0,path:"".concat(a,"/:postId")},r.a.createElement(Ye,null))))}));var ot=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{store:j},r.a.createElement(N.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/admin",component:lt}),r.a.createElement(w.a,{exact:!0,path:"/:slug",component:ze}),r.a.createElement(w.a,{exact:!0,path:"/",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[353,1,2]]]);
//# sourceMappingURL=main.f390df2b.chunk.js.map
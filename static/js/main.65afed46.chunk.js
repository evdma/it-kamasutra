(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return i});var r=n(134),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3bf7f882-c24f-4ac0-a51f-310107aa0c71"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})},getProfile:function(e){c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},107:function(e,t,n){e.exports=n.p+"static/media/user.471a1ad3.png"},128:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(34),a=n(8),o={dialogs:[{id:1,name:"Masha"},{id:2,name:"Sonya"}],messages:[{id:1,message:"Hi"},{id:2,message:"Bye"},{id:3,message:"Nope"}],newMessageBody:""},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"users_userPhoto__PurAL"}},136:function(e,t,n){e.exports=n.p+"static/media/preloader.eded90f3.svg"},165:function(e,t,n){e.exports=n(293)},17:function(e,t,n){e.exports={nav:"Navbar_nav__34GHC",item:"Navbar_item__1nGPE",activeLink:"Navbar_activeLink__3XNMW"}},170:function(e,t,n){},171:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(51),a=n(0),o=n.n(a),c=n(48),u=n.n(c),i=n(88),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,a),o.a.createElement("div",null,c&&o.a.createElement("span",null,r)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a)),c)}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(62),c=n.n(o),u=(n(170),n(36)),i=n(37),s=n(39),l=n(38),f=n(40),p=(n(171),n(89)),d=n.n(p),m=n(13),g=function(e){return a.a.createElement("header",{className:d.a.header},a.a.createElement("img",{src:"https://www.redditstatic.com/new-icon.png",alt:""}),a.a.createElement("div",{className:d.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log  out")):a.a.createElement(m.b,{to:"/login"},"Login")))},h=n(14),E=n(6),v=n.n(E),b=n(12),w=n(8),O=n(10),S=n(31),_={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},P=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},j=function(e){return{type:"samurai-network/auth/GET_CAPCTHA_URL_SUCCESS",payload:{captchaUrl:e}}},C=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var n,r,a,o,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,c=r.login,t(P(a,o,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(j(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPCTHA_URL_SUCCESS":return Object(w.a)({},e,t.payload);default:return e}},U=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(g,this.props)}}]),t}(a.a.Component),T=Object(h.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logout();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(U),N=n(17),I=n.n(N),x=function(){return a.a.createElement("nav",{className:I.a.nav},a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/profile",activeClassName:I.a.activeLink},"Profile")),a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:I.a.activeLink},"Messages")),a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:I.a.activeLink},"Users")),a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:I.a.activeLink},"News")),a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:I.a.activeLink},"Music")),a.a.createElement("div",{className:I.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:I.a.activeLink},"Settings")))},L=n(30),A=n(34),F=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(w.a)({},e,r):e})},z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:"FOLLOW",userId:e}},R=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET_USERS",users:e}},D=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},H=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},B=function(){var e=Object(b.a)(v.a.mark(function e(t,n,r,a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(H(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)({},e,{users:F(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(w.a)({},e,{users:F(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(w.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):Object(A.a)(e.followingInProgress.filter(function(e){return e!==t.userId}))});default:return e}},V=n(51),q=n(67),J=n(96),X=n(70),Q=n.n(X),Z=n(92),K=n.n(Z),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),d=Object(r.useState)(1),m=Object(J.a)(d,2),g=m[0],h=m[1],E=(g-1)*i+1,v=g*i;return a.a.createElement("div",{className:K()(Q.a.paginator)},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter(function(e){return e>=E&&e<=v}).map(function(e){return a.a.createElement("span",{className:K()(Object(q.a)({},Q.a.selectedPage,o===e),Q.a.pageNumber),key:e,onClick:function(t){c(e)}},e)}),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},$=n(135),ee=n.n($),te=n(107),ne=n.n(te),re=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ne.a,className:ee.a.userPhoto,alt:""}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},ae=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.pageSize,o=e.totalUsersCount,c=Object(V.a)(e,["currentPage","onPageChanged","pageSize","totalUsersCount"]);return a.a.createElement("div",null,a.a.createElement(Y,{currentPage:t,totalItemsCount:o,onPageChanged:n,pageSize:r}),a.a.createElement("div",null,c.users.map(function(e){return a.a.createElement(re,{key:e.id,user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow})})))},oe=n(41),ce=n(7),ue=n(137),ie=Object(ue.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),se=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.setCurrentPage(e),n.props.requestUsers(e,t)},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(oe.a,null):null,a.a.createElement(ae,{currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ge=Object(ce.d)(Object(h.b)(function(e){return{users:ie(e),pageSize:se(e),totalUsersCount:le(e),currentPage:fe(e),isFetching:pe(e),followingInProgress:de(e)}},{follow:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,O.d.follow.bind(O.d),G);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,O.d.unfollow.bind(O.d),R);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setUsers:M,setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:H,requestUsers:function(e,t){return function(){var n=Object(b.a)(v.a.mark(function n(r){var a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(D(!0)),n.next=3,O.d.getUsers(e,t);case 3:a=n.sent,r(D(!1)),r(M(a.items)),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(me),he=n(129),Ee=n(24),ve=n(64),be=n(48),we=n.n(be),Oe=Object(he.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Ee.c)("Email","email",[ve.b],Ee.a),Object(Ee.c)("Password","password",[ve.b],Ee.a,{type:"password"}),Object(Ee.c)("rememberMe","checkbox",[],Ee.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(Ee.c)("Symbols from image","captcha",[ve.b],Ee.a),n&&a.a.createElement("div",{className:we.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),Se=Object(h.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,r){return function(){var a=Object(b.a)(v.a.mark(function a(o){var c,u;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(C()):(10===c.data.resultCode&&o(y()),u=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(S.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(L.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Oe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),_e={initialized:!1,globalError:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},je=n(95),Ce=n(128),ye={},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;arguments.length>1&&arguments[1];return e},Ue=n(139),Te=n(130),Ne=Object(ce.c)({profilePage:je.b,dialogsPage:Ce.a,sidebarPage:ke,usersPage:W,auth:k,form:Te.a,app:Pe}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,xe=Object(ce.e)(Ne,Ie(Object(ce.a)(Ue.a))),Le=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(oe.a,null)},a.a.createElement(e,t))}},Ae=a.a.lazy(function(){return n.e(4).then(n.bind(null,299))}),Fe=a.a.lazy(function(){return n.e(3).then(n.bind(null,298))}),ze=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e,t){alert("Some error occured"),console.log(e+t)},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(T,null),a.a.createElement(x,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(L.d,null,a.a.createElement(L.b,{exact:!0,path:"/",render:function(){return a.a.createElement(L.a,{to:"/profile"})}}),a.a.createElement(L.b,{path:"/profile/:userId?",render:Le(Fe)}),a.a.createElement(L.b,{path:"/dialogs",render:Le(Ae)}),a.a.createElement(L.b,{path:"/users",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(L.b,{path:"/login",render:function(){return a.a.createElement(Se,null)}}),a.a.createElement(L.b,{path:"/*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(oe.a,null)}}]),t}(a.a.Component),Ge=Object(ce.d)(L.g,Object(h.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(ze),Re=function(e){return a.a.createElement(m.a,null,a.a.createElement(h.a,{store:xe},a.a.createElement(Ge,null)))};c.a.render(a.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(136),c=n.n(o);t.a=function(e){return a.a.createElement("img",{src:c.a,alt:""})}},48:function(e,t,n){e.exports={formControl:"FormControls_formControl__Jw_2V",error:"FormControls_error__jB-yp",formSummaryError:"FormControls_formSummaryError__1shpG"}},64:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__1EceP",pageNumber:"Paginator_pageNumber__1zlVT",selectedPage:"Paginator_selectedPage__2oJcQ"}},89:function(e,t,n){e.exports={header:"Header_header__2oavl",loginBlock:"Header_loginBlock__1oOQR"}},95:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return m}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E});var r=n(6),a=n.n(r),o=n(12),c=n(34),u=n(8),i=n(10),s=n(31),l={posts:[{id:1,message:"How are you?",likesCount:45},{id:2,message:"It is my first post",likesCount:83}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(p(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.65afed46.chunk.js.map
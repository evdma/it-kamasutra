(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1fv22",dialog:"Dialogs_dialog__cTkB5",active:"Dialogs_active__2HUNY",messages:"Dialogs_messages__1VX5H",message:"Dialogs_message__4gUSc"}},299:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(125),c=t(294),o=t.n(c),r=t(11),l=function(e){var a="/dialogs/".concat(e.id);return s.a.createElement("div",{className:"".concat(o.a.dialog," ").concat(o.a.active)},s.a.createElement(r.b,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:o.a.dialog},e.message)},u=t(88),d=t(126),g=t(85),b=t(32),f=Object(g.a)(50),v=Object(d.a)({form:"dialogAddMessageForm"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(u.a,{component:b.b,validate:[g.b,f],name:"newMessageBody",placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send message")))}),E=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=a.messages.map(function(e){return s.a.createElement(m,{message:e.message,key:e.id,id:e.id})});return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n)),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},p=t(12),_=t(35),h=t(36),j=t(38),O=t(37),w=t(39),y=t(29),k=function(e){return{isAuth:e.auth.isAuth}},N=t(6);a.default=Object(N.d)(Object(p.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(_.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(y.a,{to:"/login"})}}]),t}(s.a.Component);return Object(p.b)(k)(a)})(E)}}]);
//# sourceMappingURL=4.fb449a43.chunk.js.map
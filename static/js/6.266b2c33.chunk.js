(this.webpackJsonpcheck=this.webpackJsonpcheck||[]).push([[6],{463:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l}));var n=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},r=function(e){return function(a){return a&&a.length<e?"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}},l=function(e,a){return e!==a.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":void 0}},464:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return s}));var n=t(462),r=t(0),l=t.n(r),c=function(e){var a=e.input,t=e.label,r=(Object(n.a)(e,["input","label"]),Math.trunc(1e3*Math.random()));return l.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},l.a.createElement("input",{type:"checkbox",id:r,className:"custom-control-input",onChange:a.onChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:r},t))},o=(t(459),t(501),t(465),function(e){var a=e.input,t=e.type,r=e.label,c=e.meta,o=c.touched,i=c.error,s=e.isSmall,m=Object(n.a)(e,["input","type","label","meta","isSmall"]),u=["form-group"],b=["form-control"],p=o&&i,d=Math.trunc(1e3*Math.random());return p&&(u.push("has-danger"),b.push("is-invalid")),s&&b.push("form-control-sm"),l.a.createElement("div",{className:u.join(" ")},l.a.createElement("label",{htmlFor:"password-".concat(d)},r),l.a.createElement("input",Object.assign({type:t,className:b.join(" "),id:"".concat(t,"-").concat(d)},a,m)),p&&l.a.createElement("div",{className:"invalid-feedback"},i))}),i=(t(466),function(e){var a=e.input,t=e.label,r=e.meta,c=r.touched,o=r.error,i=e.isSmall,s=Object(n.a)(e,["input","label","meta","isSmall"]),m=["form-control"],u=c&&o,b=Math.trunc(1e3*Math.random());return u&&m.push("is-invalid"),i&&m.push("form-control-sm"),l.a.createElement("div",{className:u?"form-group has-danger":"form-group"},l.a.createElement("label",{htmlFor:b},t),l.a.createElement("select",{className:m.join(" "),id:b,onChange:a.onChange},s.children),u&&l.a.createElement("div",{className:"invalid-feedback"},o))}),s=function(e){var a=e.input,t=e.label,r=Object(n.a)(e,["input","label"]),c=Math.trunc(1e3*Math.random());return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:c},t),l.a.createElement("textarea",Object.assign({className:"form-control",id:c,rows:"5"},a)),l.a.createElement("small",{className:"form-text text-muted"},r.mutedText))}},465:function(e,a,t){},466:function(e,a,t){},469:function(e,a,t){"use strict";var n,r=t(1),l=t(2),c=t(7),o=t.n(c),i=t(161),s=t(0),m=t.n(s),u=t(54),b=t(162),p=((n={})[u.b]="show",n[u.a]="show",n),d=m.a.forwardRef((function(e,a){var t=e.className,n=e.children,c=Object(l.a)(e,["className","children"]),d=Object(s.useCallback)((function(e){Object(b.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return m.a.createElement(u.e,Object(r.a)({ref:a,addEndListener:i.a},c,{onEnter:d}),(function(e,a){return m.a.cloneElement(n,Object(r.a)({},a,{className:o()("fade",t,n.props.className,p[e])}))}))}));d.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},d.displayName="Fade",a.a=d},470:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(7),o=t.n(c);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(n.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},479:function(e,a,t){e.exports={"login-wrapper":"Login_login-wrapper__2q4KW"}},504:function(e,a,t){"use strict";t.r(a);var n=t(72),r=t(73),l=t(74),c=t(75),o=t(0),i=t.n(o),s=t(1),m=t(2),u=t(7),b=t.n(u),p=t(76),d=t(104),f=t(164),h=t(470),E=t(9),v=t(469),g=t(18),j=t.n(g),N={label:j.a.string.isRequired,onClick:j.a.func},O=i.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,r=e.className,l=Object(m.a)(e,["label","onClick","className"]);return i.a.createElement("button",Object(s.a)({ref:a,type:"button",className:b()("close",r),onClick:n},l),i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},t))}));O.displayName="CloseButton",O.propTypes=N,O.defaultProps={label:"Close"};var y=O,w=t(103),x={show:!0,transition:v.a,closeLabel:"Close alert"},C={show:"onClose"},S=i.a.forwardRef((function(e,a){var t=Object(p.a)(e,C),n=t.bsPrefix,r=t.show,l=t.closeLabel,c=t.className,o=t.children,u=t.variant,f=t.onClose,h=t.dismissible,v=t.transition,g=Object(m.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),j=Object(E.a)(n,"alert"),N=Object(d.a)((function(e){f(!1,e)})),O=i.a.createElement("div",Object(s.a)({role:"alert"},v?g:void 0,{ref:a,className:b()(c,j,u&&j+"-"+u,h&&j+"-dismissible")}),h&&i.a.createElement(y,{onClick:N,label:l}),o);return v?i.a.createElement(v,Object(s.a)({unmountOnExit:!0},g,{in:r}),O):r?O:null})),k=Object(h.a)("h4");k.displayName="DivStyledAsH4",S.displayName="Alert",S.defaultProps=x,S.Link=Object(f.a)("alert-link",{Component:w.a}),S.Heading=Object(f.a)("alert-heading",{Component:k});var M=S,A=t(31),L=t(33),P=t(459),U=t(13),F=t(501),R=t(500),I=t(464),H=t(463),W=Object(H.a)(6),_=Object(R.a)({form:"login"})((function(e){var a=e.handleSubmit;return i.a.createElement("form",{onSubmit:a},i.a.createElement(F.a,{component:I.b,type:"email",label:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",name:"email",validate:[H.c]}),i.a.createElement(F.a,{component:I.b,type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",validate:[H.c,W]}),i.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},i.a.createElement(P.a,{type:"submit",className:"btn btn-primary mb-3"},"\u0412\u043e\u0439\u0442\u0438"),"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?",i.a.createElement(U.b,{to:"/auth/register",className:"btn btn-secondary mt-3"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))})),q=t(479),D=t.n(q),J=function(e){var a=e.onSubmit;return i.a.createElement("div",{className:D.a["login-wrapper"]},i.a.createElement(_,{onSubmit:a}))},T=Object(H.a)(6),z=Object(R.a)({form:"register"})((function(e){var a=e.handleSubmit;return i.a.createElement("form",{onSubmit:a},i.a.createElement(F.a,{component:I.b,type:"text",label:"\u041b\u043e\u0433\u0438\u043d",name:"login",validate:H.c}),i.a.createElement(F.a,{component:I.b,type:"email",label:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",name:"email",validate:H.c}),i.a.createElement(F.a,{component:I.b,type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",validate:[H.c,T]}),i.a.createElement(F.a,{component:I.b,type:"password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"repeatedPassword",validate:[H.c,T,H.b]}),i.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},i.a.createElement(P.a,{type:"submit",className:"btn btn-primary mb-3"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",i.a.createElement(U.b,{to:"/auth/login",className:"btn btn-secondary mt-3"},"\u0412\u043e\u0439\u0442\u0438")))})),B=function(e){var a=e.onSubmit;return i.a.createElement(z,{onSubmit:a})},K=t(238),G=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).componentWillUnmount=function(){e.props.clearAuthError()},e.onSignIn=function(a){e.props.signIn(a)},e.onSignUp=function(a){e.props.signUp(a)},e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.match.params.mode!==this.props.match.params.mode&&this.props.clearAuthError()}},{key:"render",value:function(){var e=this.props.match.params.mode,a=this.props,t=a.auth,n=a.error;return t.uid?i.a.createElement(A.a,{to:"/"}):i.a.createElement("div",{className:"form-wrapper",style:{maxWidth:"450px",margin:"30px auto"}},n?i.a.createElement(M,{className:"alert alert-danger"},i.a.createElement(M.Heading,null,n),i.a.createElement("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")):null,"login"===e?i.a.createElement(J,{onSubmit:this.onSignIn}):i.a.createElement(B,{onSubmit:this.onSignUp}))}}]),t}(i.a.Component),Q={signIn:K.b,signUp:K.d,clearAuthError:K.a};a.default=Object(A.g)(Object(L.b)((function(e){return{error:e.authorization.error,auth:e.firebase.auth}}),Q)(G))}}]);
//# sourceMappingURL=6.266b2c33.chunk.js.map
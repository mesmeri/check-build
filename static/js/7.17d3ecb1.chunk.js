(this.webpackJsonpcheck=this.webpackJsonpcheck||[]).push([[7],{463:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},r=function(e){return function(t){return t&&t.length<e?"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}},c=function(e,t){return e!==t.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":void 0}},464:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return u}));var n=a(462),r=a(0),c=a.n(r),o=function(e){var t=e.input,a=e.label,r=(Object(n.a)(e,["input","label"]),Math.trunc(1e3*Math.random()));return c.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},c.a.createElement("input",{type:"checkbox",id:r,className:"custom-control-input",onChange:t.onChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:r},a))},l=(a(459),a(501),a(465),function(e){var t=e.input,a=e.type,r=e.label,o=e.meta,l=o.touched,i=o.error,u=e.isSmall,s=Object(n.a)(e,["input","type","label","meta","isSmall"]),m=["form-group"],d=["form-control"],b=l&&i,f=Math.trunc(1e3*Math.random());return b&&(m.push("has-danger"),d.push("is-invalid")),u&&d.push("form-control-sm"),c.a.createElement("div",{className:m.join(" ")},c.a.createElement("label",{htmlFor:"password-".concat(f)},r),c.a.createElement("input",Object.assign({type:a,className:d.join(" "),id:"".concat(a,"-").concat(f)},t,s)),b&&c.a.createElement("div",{className:"invalid-feedback"},i))}),i=(a(466),function(e){var t=e.input,a=e.label,r=e.meta,o=r.touched,l=r.error,i=e.isSmall,u=Object(n.a)(e,["input","label","meta","isSmall"]),s=["form-control"],m=o&&l,d=Math.trunc(1e3*Math.random());return m&&s.push("is-invalid"),i&&s.push("form-control-sm"),c.a.createElement("div",{className:m?"form-group has-danger":"form-group"},c.a.createElement("label",{htmlFor:d},a),c.a.createElement("select",{className:s.join(" "),id:d,onChange:t.onChange},u.children),m&&c.a.createElement("div",{className:"invalid-feedback"},l))}),u=function(e){var t=e.input,a=e.label,r=Object(n.a)(e,["input","label"]),o=Math.trunc(1e3*Math.random());return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:o},a),c.a.createElement("textarea",Object.assign({className:"form-control",id:o,rows:"5"},t)),c.a.createElement("small",{className:"form-text text-muted"},r.mutedText))}},465:function(e,t,a){},466:function(e,t,a){},470:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(7),l=a.n(o);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))}))}},505:function(e,t,a){"use strict";a.r(t);var n=a(72),r=a(73),c=a(74),o=a(75),l=a(0),i=a.n(l),u=a(33),s=a(28),m=a(13),d=a(31),b=a(1),f=a(2),p=a(7),h=a.n(p),v=a(9),E=a(164),g=a(470),j=a(239),O=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.variant,c=e.as,o=void 0===c?"img":c,l=Object(f.a)(e,["bsPrefix","className","variant","as"]),u=Object(v.a)(a,"card-img");return i.a.createElement(o,Object(b.a)({ref:t,className:h()(r?u+"-"+r:u,n)},l))}));O.displayName="CardImg",O.defaultProps={variant:null};var y=O,N=Object(g.a)("h5"),S=Object(g.a)("h6"),x=Object(E.a)("card-body"),C=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,c=e.text,o=e.border,u=e.body,s=e.children,m=e.as,d=void 0===m?"div":m,p=Object(f.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(v.a)(a,"card"),g=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return i.a.createElement(j.a.Provider,{value:g},i.a.createElement(d,Object(b.a)({ref:t},p,{className:h()(n,E,r&&"bg-"+r,c&&"text-"+c,o&&"border-"+o)}),u?i.a.createElement(x,null,s):s))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=y,C.Title=Object(E.a)("card-title",{Component:N}),C.Subtitle=Object(E.a)("card-subtitle",{Component:S}),C.Body=x,C.Link=Object(E.a)("card-link",{Component:"a"}),C.Text=Object(E.a)("card-text",{Component:"p"}),C.Header=Object(E.a)("card-header"),C.Footer=Object(E.a)("card-footer"),C.ImgOverlay=Object(E.a)("card-img-overlay");var k=C,R=a(459),I=a(501),T=a(500),P=a(464),w=a(463),M=Object(T.a)({form:"search"})((function(e){var t=e.handleSubmit;return i.a.createElement("form",{onSubmit:t},i.a.createElement(I.a,{component:P.b,type:"text",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID \u0442\u0435\u0441\u0442\u0430",name:"quizID",validate:w.c}),i.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},i.a.createElement(R.a,{type:"submit",variant:"outline-primary",size:"block",className:"btn mb-3 mt-5"},"\u0418\u0441\u043a\u0430\u0442\u044c")))})),_=function(e){return{type:"SET_IS_SEARCHING",payload:e}},z=a(41),F=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.findPrivateQuizInfo(t.quizID)},e}return Object(r.a)(a,[{key:"componentWillUnmount",value:function(){this.props.clearSearch()}},{key:"render",value:function(){var e=this.props.search,t=e.isSearching,a=e.result,n=e.error,r=e.searchString,c={pathname:"/quiz/".concat(r),state:{fromSearch:!0}};return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(z.a,null):i.a.createElement(M,{onSubmit:this.onSubmit}),n?i.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430..."):null,a?i.a.createElement(k,{bg:"light",border:"light"},i.a.createElement(k.Header,null,a.chapter),i.a.createElement(k.Body,null,i.a.createElement(k.Title,null,a.title),i.a.createElement(k.Text,null,i.a.createElement(m.b,{to:c},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0442\u0435\u0441\u0442\u0430")))):null)}}]),a}(i.a.Component),H={findPrivateQuizInfo:function(e){return function(t,a,n){var r=(0,n.getFirestore)();t(_(!0)),t({type:"SET_SEARCH_STRING",payload:e}),r.collection("privateQuizes").doc(e).get().then((function(e){if(e.exists){var a=e.data().description;t(function(e){return{type:"SET_RESULT",payload:e}}(a))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e),t(function(e){return{type:"SET_SEARCH_ERROR",payload:e}}("Searching error"))})).finally((function(){t(_(!1))}))}},clearSearch:function(){return{type:"CLEAR_SEARCH"}}};t.default=Object(s.compose)(Object(u.b)((function(e){return{search:e.search}}),H),d.g)(F)}}]);
//# sourceMappingURL=7.17d3ecb1.chunk.js.map
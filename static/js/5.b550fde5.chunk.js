(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[5],{528:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t(11),s=t(12),l=t(14),i=t(13),m=t(0),o=t.n(m),c=t(71),u=t(8),d=t(102),g=t(19),b=t.n(g),p=t(36),h=t(20),E=t(250),w=u.object().shape({email:u.string().email("Invalid email").required("email is required"),password:u.string().min(8,"Password must be 8 character long").required("password is required")}),v=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={email:"watson@example.com",password:"12345678"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},o.a.createElement("div",{className:"auth-content"},o.a.createElement("div",{className:"card o-hidden"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"p-4"},o.a.createElement("div",{className:"auth-logo text-center mb-4"},o.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),o.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),o.a.createElement(c.b,{initialValues:this.state,validationSchema:w,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),r=e.handleBlur,s=e.handleSubmit;e.isSubmitting;return o.a.createElement("form",{onSubmit:s},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:r,value:a.email}),t.email&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:n,onBlur:r,value:a.password}),t.password&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.password)),o.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 my-1 mt-2",type:"submit"},"Sign In"))})),o.a.createElement("div",{className:"mt-3 text-center"},o.a.createElement(h.a,{to:"/session/forgot-password",className:"text-muted"},o.a.createElement("u",null,"Forgot Password?"))))),o.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/photo-long-3.jpg)"}},o.a.createElement("div",{className:"pe-3 auth-right"},o.a.createElement(h.a,{to:"/session/signup",className:"btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"},o.a.createElement("i",{className:"i-Mail-with-At-Sign"})," Sign up with Email"),o.a.createElement(E.a,{className:"btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text"},o.a.createElement("i",{className:"i-Google-Plus"})," Sign up with Google"),o.a.createElement(E.a,{className:"btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook"},o.a.createElement("i",{className:"i-Facebook-2"})," Sign up with Facebook")))))))}}]),t}(m.Component);a.default=Object(p.b)((function(e){return{loginWithEmailAndPassword:b.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(v)}}]);
//# sourceMappingURL=5.b550fde5.chunk.js.map
(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[5],{748:function(e,a,t){"use strict";t.r(a);var r=t(26),n=t(5),l=t(6),s=t(8),m=t(7),i=t(0),o=t.n(i),c=t(30),d=t(4),u=t(147),g=t(24),p=t.n(g),h=t(44),b=d.object().shape({email:d.string().email("Invalid email").required("Email is required"),password:d.string().min(8,"Password must be 8 character long").required("Password is required")}),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:""},e.handleChange=function(a){a.persist(),e.setState(Object(r.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:""}},o.a.createElement("div",{className:"auth-content"},o.a.createElement("div",{className:"card o-hidden"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"p-4"},o.a.createElement("div",{className:"auth-logo text-center mb-4"},o.a.createElement("img",{src:"/logo.png",alt:""})),o.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),o.a.createElement(c.b,{initialValues:this.state,validationSchema:b,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,r=e.touched,n=e.handleChange,l=e.handleBlur,s=e.handleSubmit;e.isSubmitting;return o.a.createElement("form",{onSubmit:s},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:l,value:a.email}),t.email&&r.email&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:n,onBlur:l,value:a.password}),t.password&&r.password&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.password)),o.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 my-1 mt-2",type:"submit"},"Sign In"))})))),o.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/logo512.png)"}})))))}}]),t}(i.Component);a.default=Object(h.b)((function(e){return{loginWithEmailAndPassword:p.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:u.e})(v)}}]);
//# sourceMappingURL=5.a376281e.chunk.js.map
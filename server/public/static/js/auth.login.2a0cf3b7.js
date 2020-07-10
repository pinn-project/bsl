(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth.login"],{8691:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ValidationObserver",{ref:"observer",staticClass:"ui--auth-login",attrs:{tag:"form"},on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[a("div",{staticClass:"ui--auth-head"},[a("h2",{staticClass:"ui--auth-head-h2"},[t._v("Login")]),a("h4",{staticClass:"ui--auth-head-h4"},[t._v("Project, Brand Short Link")])]),a("div",{class:["ui--auth-login-main",{hidden:t.isSso}]},[a("div",{staticClass:"ui--auth-login-input"},[a("InputProvider",{attrs:{vid:"ui--model-username",label:"Username",maxlength:16,rules:{required:!0}},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}}),a("InputProvider",{attrs:{vid:"ui--model-password",type:"password",label:"Password",maxlength:16,rules:{required:!0}},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"}}),a("path",{attrs:{d:"M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"}}),a("path",{attrs:{d:"M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"}})]),a("span",{staticClass:"text"},[t._v("LOGIN")])])],1),a("div",{staticClass:"ui--auth-login-or"},[a("span",{staticClass:"label"},[t._v("OR")]),a("span",{staticClass:"line"})]),a("div",{staticClass:"ui--auth-login-other"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.loginWitchSingleSignOn}},[a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"}}),a("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),a("span",{staticClass:"text"},[t._v("Single Sign-On")])])])]),t.isSso?a("SsoFrame",{on:{back:function(s){t.typeLogin="none"},next:t.onSingleSignOnComplete}}):t._e(),a("div",{staticClass:"ui--auth-copyright"},[t._v("TAP Technology Company Limited. All Rights Reserved.")])],1)},i=[],n=(a("ddb0"),a("9ab4")),o=a("60a3"),r=a("7bb1"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{staticClass:"ui--auth-login-sso"},[a("div",{staticClass:"type"},[a("p",[t._v("Microsoft Security Support Provider Interface (SSPI),")]),a("p",[t._v("Single Sign-On (SSO) Authentication.")])]),a("svg",{staticClass:"avatar",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),a("div",{class:["info",{"has-data":t.isSuccess}]},[a("h4",{staticClass:"code"},[t._v(t._s(t.user.employeeCode))]),a("h2",{staticClass:"name"},[t._v(t._s(t.user.employeeName))]),a("h3",{staticClass:"title"},[t._v(t._s(t.user.jobTitle))])]),a("div",{staticClass:"footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(s){return t.$emit("back")}}},[a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"}}),a("path",{attrs:{d:"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}})])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!t.isSuccess},on:{click:t.next}},[a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"}}),a("path",{attrs:{d:"M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"}}),a("path",{attrs:{d:"M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"}})]),a("span",{staticClass:"text"},[t._v("Sign In")])])]),a("iframe",{attrs:{src:t.source},on:{load:t.loaded}})])])},c=[],u=a("7dda");let h=class extends o["c"]{constructor(){super(...arguments),this.source="/api/v2/auth/sso",this.content={}}loaded(){const t=this.$el.querySelector("iframe");setTimeout(async()=>{const s=t.contentDocument||t.contentWindow.document;this.content=JSON.parse(s.body.innerText||null),this.content?Object(u["b"])(this.content,"error")&&(await this.$alert(this.content.error.message,{showTitle:!0}),this.$emit("back")):this.loaded()},2e3)}next(){this.isSuccess&&this.$emit("next",this.content)}get user(){const t=this.content.data;return{employeeCode:t?`${t.employeeCode} (${t.nickName})`:"-",employeeName:t?t.employeeName:"-",jobTitle:t?t.jobTitle:"-"}}get isSuccess(){return Object(u["b"])(this.content,"data")&&Object(u["b"])(this.content,"token")}};h=Object(n["a"])([o["a"]],h);var d=h,p=d,v=a("2877"),m=Object(v["a"])(p,l,c,!1,null,null,null),b=m.exports,g=a("5034");let w=class extends o["c"]{constructor(){super(...arguments),this.username="",this.password="",this.typeLogin="none"}async submit(){const t=this.$refs["observer"];await t.validate()}loginWitchSingleSignOn(){"development"===g["a"].APP_MODE?this.$alert("This function cannot be used in development mode.",{showTitle:!0}):this.typeLogin="sso"}onSingleSignOnComplete(t){Object(u["b"])(t,"firstLogin")?this.$alert("Your first sign-in.<br>You need to set a password.",{showTitle:!0}).then(()=>{this.$router.push({name:"auth.password",query:{hex:t.token,expires:t.expires}})}):(this.$store.dispatch("APP.AUTH/createCookie",t),this.$router.push({name:"index"}))}get isSso(){return"sso"===this.typeLogin}};w=Object(n["a"])([Object(o["a"])({components:{ValidationObserver:r["a"],SsoFrame:b}})],w);var C=w,f=C,S=Object(v["a"])(f,e,i,!1,null,null,null);s["default"]=S.exports}}]);
//# sourceMappingURL=auth.login.2a0cf3b7.js.map
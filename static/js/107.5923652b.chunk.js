"use strict";(self.webpackChunkreact_piska=self.webpackChunkreact_piska||[]).push([[107],{1107:function(t,r,e){e.r(r),e.d(r,{default:function(){return T}});var o=e(8683),n=e(5671),i=e(3144),s=e(136),a=e(516),u=e(2791),l=e(8687),f=e(6070),c="Profile_profile__b8GdA",d={about:"ProfileInfo_about__v03L3",avatar:"ProfileInfo_avatar__r9fqJ",avatar_image:"ProfileInfo_avatar_image__q-+du",description:"ProfileInfo_description__hmriM",facebook:"ProfileInfo_facebook__Oyaro",website:"ProfileInfo_website__d2sj7",vk:"ProfileInfo_vk__wNdA0",twitter:"ProfileInfo_twitter__r0wRo",instagram:"ProfileInfo_instagram__yppep",youtube:"ProfileInfo_youtube__ZuWlU",github:"ProfileInfo_github__RjVxK",mainLink:"ProfileInfo_mainLink__3b3ZP"},p=e(8055),h=e(7560),_=e(1087),m=e(885),x="ProfileStatus_controls__nDfV1",v=e(184),j=function(t){var r=(0,u.useState)(!1),e=(0,m.Z)(r,2),o=e[0],n=e[1],i=(0,u.useState)(t.profileStatus),s=(0,m.Z)(i,2),a=s[0],l=s[1],f=function(){n(!o)};return(0,u.useEffect)((function(){l(t.profileStatus)}),[t.profileStatus]),(0,v.jsxs)(v.Fragment,{children:[o&&(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:(0,v.jsx)("input",{autoFocus:!0,type:"text",onChange:function(t){l(t.currentTarget.value)},value:a})}),(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)("button",{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:function(){t.updateProfileStatus(a),n(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,v.jsx)("button",{value:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:f,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]}),!o&&(0,v.jsx)("div",{children:(0,v.jsx)("span",{onClick:f,children:t.profileStatus||"\u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442"})})]})};var P=function(t){var r;return t.userId?(0,v.jsxs)("div",{className:d.about,children:[(0,v.jsx)("div",{className:d.avatar,children:(0,v.jsx)("img",{className:d.avatar_image,src:(null===(r=t.photos)||void 0===r?void 0:r.large)||p,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),(0,v.jsxs)("div",{className:d.description,children:[(0,v.jsx)("h2",{children:t.fullName}),(0,v.jsx)(j,{userId:t.userId,profileStatus:t.profileStatus,getProfileStatus:t.getProfileStatus,updateProfileStatus:t.updateProfileStatus}),t.aboutMe&&(0,v.jsx)("p",{children:t.aboutMe}),t.lookingForAJob&&(0,v.jsxs)("p",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.lookingForAJobDescription]}),Object.keys(t.contacts).length&&(0,v.jsx)("div",{children:function(){var r=[];for(var e in t.contacts)t.contacts[e]&&r.push((0,v.jsx)(_.rU,{to:t.contacts[e],target:"_blank",rel:"noreferrer",style:{marginRight:"10px"},className:d[e],children:e},e));return r}()})]})]}):(0,v.jsx)(h.Z,{})},g=e(2982),S="MyPosts_posts__k+GpQ",b="Post_item__7yJPN";var Z=function(t){return(0,v.jsxs)("div",{className:b,children:[t.text,(0,v.jsx)("br",{}),"likes: ",(0,v.jsx)("span",{children:t.likes}),(0,v.jsx)("br",{}),"qweqweqwe qwe"]})},k=e(6139),I=e(704),C=e(9926),y=e(7492),N=(0,C.B)(10),w=(0,I.Z)({form:"profileAddNewPostForm"})((function(t){return(0,v.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,v.jsx)("div",{children:(0,v.jsx)(k.Z,{component:y.N,formElement:"textarea",name:"newPostText",type:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",validate:[C.C,N]})}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})})]})})),A=function(t){return(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),(0,v.jsx)(w,{onSubmit:function(r){t.addPost(r.newPostText)}})]})},q=(0,u.memo)((function(t){var r=(0,g.Z)(t.posts).reverse().map((function(t){return(0,v.jsx)(Z,{text:t.text,likes:t.likes},t.id)}));return(0,v.jsxs)("div",{children:[(0,v.jsx)("hr",{}),(0,v.jsx)(A,{addPost:t.addPost}),(0,v.jsx)("hr",{}),(0,v.jsx)("div",{className:S,children:r})]})})),F=function(t){return(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)(P,(0,o.Z)((0,o.Z)({},t.profileInfo),{},{profileStatus:t.profileStatus,getProfileStatus:t.getProfileStatus,updateProfileStatus:t.updateProfileStatus})),(0,v.jsx)(q,{addPost:t.addPost,posts:t.posts})]})},E=e(7689),U=(e(1466),e(7781)),M=function(t){(0,s.Z)(e,t);var r=(0,a.Z)(e);function e(){return(0,n.Z)(this,e),r.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getProfileStatus(t)}},{key:"render",value:function(){return(0,v.jsx)(F,(0,o.Z)({},this.props))}}]),e}(u.Component);var T=(0,U.qC)((0,l.$j)((function(t){return{profileInfo:t.profilePage.profileInfo,posts:t.profilePage.posts,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth,profileStatus:t.profilePage.profileStatus}}),{addPost:f.q2,getUserProfile:f.et,getProfileStatus:f.TL,updateProfileStatus:f.vq}),(function(t){return function(r){var e=(0,E.TH)(),n=(0,E.s0)(),i=(0,E.UO)();return(0,v.jsx)(t,(0,o.Z)((0,o.Z)({},r),{},{router:{location:e,navigate:n,params:i}}))}}))(M)},7492:function(t,r,e){e.d(r,{N:function(){return l}});var o=e(8683),n=e(5987),i=e(2791),s=e(9234),a=e(184),u=["input","meta","formElement"],l=function(t){var r=t.input,e=t.meta,l=t.formElement,f=(0,n.Z)(t,u),c=e.touched&&e.error;return(0,a.jsxs)("div",{className:s.Z.formControl+" "+(c?s.Z.error:""),children:[i.createElement(l,(0,o.Z)((0,o.Z)({},r),f)),c&&(0,a.jsx)("p",{children:e.error})]})}},1466:function(t,r,e){e.d(r,{e:function(){return p}});var o=e(8683),n=e(5671),i=e(3144),s=e(136),a=e(516),u=e(2791),l=e(8687),f=e(7689),c=e(184),d=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var r=function(r){(0,s.Z)(u,r);var e=(0,a.Z)(u);function u(){return(0,n.Z)(this,u),e.apply(this,arguments)}return(0,i.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(t,(0,o.Z)({},this.props)):(0,c.jsx)(f.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(d)(r)}},9926:function(t,r,e){e.d(r,{B:function(){return n},C:function(){return o}});var o=function(t){if(!t)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e!"},n=function(t){return function(r){if(r.length>t)return"\u0414\u043b\u0438\u043d\u0430 \u0441\u0432\u044b\u0448\u0435 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!")}}},9234:function(t,r){r.Z={formControl:"FormsControls_formControl__07Mix",error:"FormsControls_error__BSYle",formSummaryError:"FormsControls_formSummaryError__GCzur"}}}]);
//# sourceMappingURL=107.5923652b.chunk.js.map
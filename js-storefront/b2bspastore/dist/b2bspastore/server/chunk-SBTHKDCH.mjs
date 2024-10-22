import './polyfills.server.mjs';
import{c as we,d as Z,e as Ct,f as It}from"./chunk-LZ45RK54.mjs";import{$ as Tt,D as Te,Da as ke,E as _e,Fa as Fe,Ja as Ue,Ka as Pe,L as vt,M as ht,N as yt,Pb as $e,Q as Ce,_ as xt,aa as Ie,b as me,c as j,d as ue,e as fe,fa as _t,g as ge,j as G,ka as Be,l as ve,p as he,pa as be,s as ye,x as xe}from"./chunk-EKK5QDHO.mjs";import{$ as ot,A as N,Aa as B,Ac as $,Ca as at,Cb as ee,Fa as st,Gb as te,Ha as ct,Hb as gt,J as I,La as lt,Pa as pt,Ta as dt,Ua as Ne,ha as W,ka as rt,lc as U,mb as mt,mc as P,nb as ut,oa as pe,pb as de,qb as Q,tb as ft,u as nt,ub as X,y as O,zc as L}from"./chunk-H5UHAHI5.mjs";import{$a as C,$b as S,$c as et,$d as it,Aa as D,Bc as E,Ca as Ee,Cc as H,Dd as Oe,Ed as K,Fa as b,Ga as h,Ia as Y,Jc as r,Ka as x,Kb as Ze,Kc as a,La as v,Lc as Ae,Md as R,Oc as le,Pb as f,Qb as re,Ra as w,Rb as s,S as Se,Sa as y,Tb as ae,Td as tt,Xb as l,Yb as c,Zb as g,_a as _,_b as M,ab as Qe,bc as J,dc as k,ec as F,g as ne,hc as V,mc as Le,nc as De,oc as Ve,p as Me,pc as se,q as We,qc as p,rc as ce,sc as m,tc as ze,wb as n,wc as Ye,wd as Re,xa as oe,xb as q,xc as Je,yc as Xe,zd as A}from"./chunk-TXWRNZDJ.mjs";import{a as Ke}from"./chunk-GHFNAT2I.mjs";var kt=()=>({cxRoute:"forgotPassword"}),Ft=e=>({label:e});function Bt(e,u){e&1&&g(0,"cx-spinner",12)}function Ut(e,u){e&1&&(l(0,"p",13),p(1),r(2,"cxTranslate"),c()),e&2&&(n(),m(" ",a(2,1,"formLegend.required")," "))}function Pt(e,u){}function $t(e,u){if(e&1&&(g(0,"cx-form-errors",14),r(1,"cxTranslate")),e&2){let t=F();s("translationParams",H(4,Ft,a(1,2,"loginForm.emailAddress.label")))("control",t.form.get("userId"))}}function jt(e,u){if(e&1&&g(0,"cx-form-errors",15),e&2){let t=F();s("control",t.form.get("userId"))}}function Gt(e,u){}function qt(e,u){if(e&1&&(g(0,"cx-form-errors",14),r(1,"cxTranslate")),e&2){let t=F();s("translationParams",H(4,Ft,a(1,2,"loginForm.password.label")))("control",t.form.get("password"))}}function Ht(e,u){if(e&1&&g(0,"cx-form-errors",15),e&2){let t=F();s("control",t.form.get("password"))}}function Kt(e,u){e&1&&(l(0,"abbr",17),r(1,"cxTranslate"),p(2,"*"),c()),e&2&&V("title",a(1,1,"common.required"))}function Wt(e,u){e&1&&f(0,Kt,3,3,"abbr",16),e&2&&s("cxFeature","a11yRequiredAsterisks")}var Qt=()=>({cxRoute:"register"}),Zt=()=>({cxRoute:"checkoutLogin"});function zt(e,u){if(e&1){let t=J();M(0),l(1,"button",3),k("click",function(){_(t);let o=F();return C(o.navigateTo(o.loginAsGuest?"checkoutLogin":"register"))}),p(2),r(3,"cxTranslate"),c(),S()}if(e&2){let t=F();n(),s("ngClass",t.loginAsGuest?"btn-guest":"btn-register"),n(),m(" ",a(3,2,t.loginAsGuest?"loginForm.guestCheckout":"loginForm.register")," ")}}function Yt(e,u){e&1&&(M(0),l(1,"a",5),r(2,"cxUrl"),p(3),r(4,"cxTranslate"),c(),S()),e&2&&(n(),s("routerLink",a(2,2,E(6,Qt))),n(2),ce(a(4,4,"loginForm.register")))}function Jt(e,u){e&1&&(M(0),l(1,"a",6),r(2,"cxUrl"),p(3),r(4,"cxTranslate"),c(),S()),e&2&&(n(),s("routerLink",a(2,2,E(6,Zt))),n(2),ce(a(4,4,"loginForm.guestCheckout")))}function Xt(e,u){if(e&1&&(M(0),f(1,Yt,5,7,"ng-container",4)(2,Jt,5,7,"ng-container",4),S()),e&2){let t=F();n(),s("ngIf",!t.loginAsGuest),n(),s("ngIf",t.loginAsGuest)}}var ei=e=>({name:e}),wt=()=>({cxRoute:"login"});function ti(e,u){if(e&1&&(M(0),l(1,"div",2),p(2),r(3,"cxTranslate"),c(),g(4,"cx-page-slot",3),S()),e&2){let t=u.ngIf;n(2),m(" ",Ae(3,1,"miniLogin.userGreeting",H(4,ei,t.name))," ")}}function ii(e,u){e&1&&(l(0,"a",4),r(1,"cxUrl"),p(2),r(3,"cxTranslate"),c()),e&2&&(s("routerLink",a(1,2,E(6,wt))),n(2),ce(a(3,4,"miniLogin.signInRegister")))}var ni=()=>({cxRoute:"logout"});function oi(e,u){if(e&1&&(M(0),l(1,"div",2),p(2),c(),l(3,"a",3),r(4,"cxUrl"),p(5),r(6,"cxTranslate"),c(),S()),e&2){let t=u.ngIf;n(2),ze("",t.title,"",t.name,""),n(),s("routerLink",a(4,4,E(8,ni))),n(2),m("",a(6,6,"myAccountV2User.signOut")," ")}}function ri(e,u){e&1&&g(0,"cx-spinner",11)}function ai(e,u){e&1&&(l(0,"p",12),p(1),r(2,"cxTranslate"),c()),e&2&&(n(),m(" ",a(2,1,"formLegend.required")," "))}function si(e,u){}function ci(e,u){}function li(e,u){e&1&&(l(0,"abbr",14),r(1,"cxTranslate"),p(2,"*"),c()),e&2&&V("title",a(1,1,"common.required"))}function pi(e,u){e&1&&f(0,li,3,3,"abbr",13),e&2&&s("cxFeature","a11yRequiredAsterisks")}function di(e,u){e&1&&(l(0,"h3",12),p(1),r(2,"cxTranslate"),c()),e&2&&(n(),m(" ",a(2,1,"verificationTokenDialog.title")," "))}function mi(e,u){e&1&&(l(0,"span",12),p(1),r(2,"cxTranslate"),c()),e&2&&(n(),m(" ",a(2,1,"verificationTokenDialog.title")," "))}var ui=["noReceiveCodeLink"],fi=["resendLink"],gi=e=>({"disabled-link":e}),vi=e=>({waitTime:e});function hi(e,u){e&1&&g(0,"cx-spinner",19)}function yi(e,u){if(e&1&&(M(0),p(1),r(2,"cxTranslate"),S()),e&2){let t=F();n(),m(" ",Ae(2,1,"verificationTokenForm.sendRateLime",H(4,vi,t.waitTime))," ")}}var je=(()=>{class e{constructor(t,i,o){this.auth=t,this.globalMessage=i,this.winRef=o,this.busy$=new ne(!1),this.isUpdating$=this.busy$.pipe(D(d=>{let T=this.winRef.nativeWindow?.history?.state?.newUid;T&&this.form.patchValue({userId:T}),d===!0?this.form.disable():this.form.enable()})),this.form=new ge({userId:new G("",[j.required,$e.emailValidator]),password:new G("",j.required)})}login(){if(!this.form.valid){this.form.markAllAsTouched();return}this.busy$.next(!0),Me(this.auth.loginWithCredentials(this.form.value.userId.toLowerCase(),this.form.value.password)).pipe(Ee(this.auth.isUserLoggedIn()),D(([t,i])=>this.onSuccess(i))).subscribe()}onSuccess(t){t&&(this.globalMessage.remove(de.MSG_TYPE_ERROR),this.form.reset()),this.busy$.next(!1)}static{this.\u0275fac=function(i){return new(i||e)(x(B),x(Q),x(W))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),xi=(()=>{class e{constructor(t){this.service=t,this.form=this.service.form,this.isUpdating$=this.service.isUpdating$,this.style=!0}onSubmit(){this.service.login()}static{this.\u0275fac=function(i){return new(i||e)(q(je))}}static{this.\u0275cmp=w({type:e,selectors:[["cx-login-form"]],hostVars:2,hostBindings:function(i,o){i&2&&ae("user-form",o.style)},decls:32,vars:37,consts:[["requiredAsterisk",""],["class","overlay",4,"ngIf"],[3,"ngSubmit","formGroup"],["class","form-legend",4,"cxFeature"],[1,"label-content"],[3,"ngTemplateOutlet"],["required","true","type","email","formControlName","userId",1,"form-control",3,"placeholder"],[3,"translationParams","control",4,"cxFeature"],[3,"control",4,"cxFeature"],["required","true","type","password","formControlName","password","cxPasswordVisibilitySwitch","",1,"form-control",3,"placeholder"],[1,"btn-link",3,"routerLink"],["type","submit",1,"btn","btn-block","btn-primary",3,"disabled"],[1,"overlay"],[1,"form-legend"],[3,"translationParams","control"],[3,"control"],["class","text-decoration-none","aria-hidden","true",3,"title",4,"cxFeature"],["aria-hidden","true",1,"text-decoration-none",3,"title"]],template:function(i,o){if(i&1){let d=J();f(0,Bt,1,0,"cx-spinner",1),r(1,"async"),l(2,"form",2),k("ngSubmit",function(){return _(d),C(o.onSubmit())}),f(3,Ut,3,3,"p",3),l(4,"label")(5,"span",4),p(6),r(7,"cxTranslate"),f(8,Pt,0,0,"ng-template",5),c(),g(9,"input",6),r(10,"cxTranslate"),f(11,$t,2,6,"cx-form-errors",7)(12,jt,1,1,"cx-form-errors",8),c(),l(13,"label")(14,"span",4),p(15),r(16,"cxTranslate"),f(17,Gt,0,0,"ng-template",5),c(),g(18,"input",9),r(19,"cxTranslate"),r(20,"cxTranslate"),f(21,qt,2,6,"cx-form-errors",7)(22,Ht,1,1,"cx-form-errors",8),c(),l(23,"a",10),r(24,"cxUrl"),p(25),r(26,"cxTranslate"),c(),l(27,"button",11),p(28),r(29,"cxTranslate"),c()(),f(30,Wt,1,1,"ng-template",null,0,le)}if(i&2){let d=se(31);s("ngIf",a(1,18,o.isUpdating$)),n(2),s("formGroup",o.form),n(),s("cxFeature","a11yRequiredAsterisks"),n(3),m(" ",a(7,20,"loginForm.emailAddress.label")," "),n(2),s("ngTemplateOutlet",d),n(),V("placeholder",a(10,22,"loginForm.emailAddress.placeholder")),n(2),s("cxFeature","formErrorsDescriptiveMessages"),n(),s("cxFeature","!formErrorsDescriptiveMessages"),n(3),m(" ",a(16,24,"loginForm.password.label")," "),n(2),s("ngTemplateOutlet",d),n(),V("placeholder",a(19,26,"loginForm.password.placeholder")),re("aria-label",a(20,28,"loginForm.password.placeholder")),n(3),s("cxFeature","formErrorsDescriptiveMessages"),n(),s("cxFeature","!formErrorsDescriptiveMessages"),n(),s("routerLink",a(24,30,E(36,kt))),n(2),m(" ",a(26,32,"loginForm.forgotPassword")," "),n(2),s("disabled",o.form.disabled),n(),m(" ",a(29,34,"loginForm.signIn")," ")}},dependencies:[A,Oe,ve,me,ue,fe,xe,he,ye,O,ke,Ie,Ue,ee,K,U,L],encapsulation:2,changeDetection:0})}}return e})(),Ti=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{ReturningCustomerLoginComponent:{component:xi,guards:[X],providers:[{provide:je,useClass:je,deps:[B,Q,W]}]}}})],imports:[R,Te,_e,N,P,$,Fe,be,Pe,te]})}}return e})(),_i=(()=>{class e{constructor(t){this.activatedRoute=t,this.loginAsGuest=!1,this.routingService=v(pe,{optional:!0})}ngOnInit(){this.loginAsGuest=this.activatedRoute.snapshot.queryParams.forced}navigateTo(t){this.routingService?.go({cxRoute:t})}static{this.\u0275fac=function(i){return new(i||e)(q(nt))}}static{this.\u0275cmp=w({type:e,selectors:[["cx-login-register"]],decls:6,vars:5,consts:[[1,"register"],[1,"cx-section-title"],[4,"cxFeature"],[1,"btn","btn-block","btn-secondary",3,"click","ngClass"],[4,"ngIf"],["role","button",1,"btn","btn-block","btn-secondary","btn-register",3,"routerLink"],["role","button",1,"btn","btn-block","btn-secondary","btn-guest",3,"routerLink"]],template:function(i,o){i&1&&(l(0,"div",0)(1,"p",1),p(2),r(3,"cxTranslate"),c(),f(4,zt,4,4,"ng-container",2)(5,Xt,3,2,"ng-container",2),c()),i&2&&(n(2),m(" ",a(3,3,"loginForm.dontHaveAccount")," "),n(2),s("cxFeature","a11yUseButtonsForBtnLinks"),n(),s("cxFeature","!a11yUseButtonsForBtnLinks"))},dependencies:[Re,A,O,ee,U,L],encapsulation:2})}}return e})(),Ci=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{ReturningCustomerRegisterComponent:{component:_i,guards:[X]}}})],imports:[R,N,P,Be,$,te]})}}return e})(),Mt=(()=>{class e{constructor(t,i){this.auth=t,this.userAccount=i,gt("a11yMyAccountLinkOutline")}ngOnInit(){this.user$=this.auth.isUserLoggedIn().pipe(oe(t=>t?this.userAccount.get():We(void 0)))}static{this.\u0275fac=function(i){return new(i||e)(q(B),q(we))}}static{this.\u0275cmp=w({type:e,selectors:[["cx-login"]],decls:4,vars:4,consts:[["login",""],[4,"ngIf","ngIfElse"],[1,"cx-login-greet"],["id","account-nav","position","HeaderLinks"],["role","link",3,"routerLink"]],template:function(i,o){if(i&1&&(f(0,ti,5,6,"ng-container",1),r(1,"async"),f(2,ii,4,7,"ng-template",null,0,le)),i&2){let d=se(3);s("ngIf",a(1,2,o.user$))("ngIfElse",d)}},dependencies:[A,O,_t,K,U,L],encapsulation:2})}}return e})(),Ii=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{LoginComponent:{component:Mt}}})],imports:[R,N,P,Be,$]})}}return e})(),bi=(()=>{class e extends Mt{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=Qe(e)))(o||e)}})()}static{this.\u0275cmp=w({type:e,selectors:[["cx-my-account-v2-user"]],features:[Ze],decls:3,vars:3,consts:[[1,"cx-my-account-v2-user"],[4,"ngIf"],[1,"cx-name"],[1,"cx-sign-out",3,"routerLink"]],template:function(i,o){i&1&&(l(0,"div",0),f(1,oi,7,9,"ng-container",1),r(2,"async"),c()),i&2&&(n(),s("ngIf",a(2,1,o.user$)))},dependencies:[A,O,K,U,L],encapsulation:2})}}return e})(),ki=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{MyAccountViewUserComponent:{component:bi,guards:[ft]}}})],imports:[R,N,P,$]})}}return e})(),St="LOGIN",Fi=(()=>{class e{constructor(){this.routingService=v(pe),this.verificationTokenFacade=v(Z),this.winRef=v(W),this.busy$=new ne(!1),this.isUpdating$=this.busy$.pipe(D(t=>{let i=this.winRef.nativeWindow?.history?.state?.newUid;i&&this.form.patchValue({userId:i}),t===!0?this.form.disable():this.form.enable()})),this.form=new ge({userId:new G("",[j.required,$e.emailValidator]),password:new G("",j.required)}),this.style=!0}onSubmit(){if(!this.form.valid){this.form.markAllAsTouched();return}this.busy$.next(!0);let t=this.collectDataFromLoginForm();this.verificationTokenFacade.createVerificationToken(t).subscribe({next:i=>this.goToVerificationTokenForm(i,t),error:()=>this.busy$.next(!1),complete:()=>this.onCreateVerificationTokenComplete()})}goToVerificationTokenForm(t,i){this.routingService.go({cxRoute:"verifyToken"},{state:{loginId:i.loginId,password:i.password,tokenId:t.tokenId,expiresIn:t.expiresIn}})}onCreateVerificationTokenComplete(){this.form.reset(),this.busy$.next(!1)}collectDataFromLoginForm(){return{loginId:this.form.value.userId.toLowerCase(),password:this.form.value.password,purpose:St}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=w({type:e,selectors:[["cx-otp-login-form"]],hostVars:2,hostBindings:function(i,o){i&2&&ae("user-form",o.style)},decls:30,vars:35,consts:[["requiredAsterisk",""],["class","overlay",4,"ngIf"],[3,"ngSubmit","formGroup"],["class","form-legend",4,"cxFeature"],[1,"label-content"],[3,"ngTemplateOutlet"],["required","true","type","email","formControlName","userId",1,"form-control",3,"placeholder"],[3,"control"],["required","true","type","password","formControlName","password","cxPasswordVisibilitySwitch","",1,"form-control",3,"placeholder"],[1,"btn-link",3,"routerLink"],["type","submit",1,"btn","btn-block","btn-primary",3,"disabled"],[1,"overlay"],[1,"form-legend"],["aria-hidden","true","class","text-decoration-none",3,"title",4,"cxFeature"],["aria-hidden","true",1,"text-decoration-none",3,"title"]],template:function(i,o){if(i&1){let d=J();f(0,ri,1,0,"cx-spinner",1),r(1,"async"),l(2,"form",2),k("ngSubmit",function(){return _(d),C(o.onSubmit())}),f(3,ai,3,3,"p",3),l(4,"label")(5,"span",4),p(6),r(7,"cxTranslate"),f(8,si,0,0,"ng-template",5),c(),g(9,"input",6),r(10,"cxTranslate"),g(11,"cx-form-errors",7),c(),l(12,"label")(13,"span",4),p(14),r(15,"cxTranslate"),f(16,ci,0,0,"ng-template",5),c(),g(17,"input",8),r(18,"cxTranslate"),r(19,"cxTranslate"),g(20,"cx-form-errors",7),c(),l(21,"a",9),r(22,"cxUrl"),p(23),r(24,"cxTranslate"),c(),l(25,"button",10),p(26),r(27,"cxTranslate"),c()(),f(28,pi,1,1,"ng-template",null,0,le)}if(i&2){let d=se(29);s("ngIf",a(1,16,o.isUpdating$)),n(2),s("formGroup",o.form),n(),s("cxFeature","a11yRequiredAsterisks"),n(3),m(" ",a(7,18,"loginForm.emailAddress.label")," "),n(2),s("ngTemplateOutlet",d),n(),V("placeholder",a(10,20,"loginForm.emailAddress.placeholder")),n(2),s("control",o.form.get("userId")),n(3),m(" ",a(15,22,"loginForm.password.label")," "),n(2),s("ngTemplateOutlet",d),n(),V("placeholder",a(18,24,"loginForm.password.placeholder")),re("aria-label",a(19,26,"loginForm.password.placeholder")),n(3),s("control",o.form.get("password")),n(),s("routerLink",a(22,28,E(34,kt))),n(2),m(" ",a(24,30,"loginForm.forgotPassword")," "),n(2),s("disabled",o.form.disabled),n(),m(" ",a(27,32,"loginForm.signIn")," ")}},dependencies:[A,Oe,ve,me,ue,fe,xe,he,ye,O,ke,Ie,Ue,ee,K,U,L],encapsulation:2,changeDetection:0})}}return e})(),wi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{ReturningCustomerOTPLoginComponent:{component:Fi,guards:[X]}}})],imports:[R,Te,_e,N,P,$,Fe,be,Pe,te]})}}return e})(),Mi=(()=>{class e{constructor(t){this.launchDialogService=t,this.VERIFICATION_TOKEN_DIALOG_ACTION=Ct,this.focusConfig={trap:!0,block:!0,autofocus:!0,focusOnEscape:!0}}closeModal(t){this.launchDialogService.closeDialog(t)}static{this.\u0275fac=function(i){return new(i||e)(q(Ce))}}static{this.\u0275cmp=w({type:e,selectors:[["cx-verification-token-dialog"]],decls:28,vars:21,consts:[["role","dialog","aria-labelledby","verification-token-dialog-title",1,"cx-verification-token-dialog","cx-modal-container","cx-asm-dialog",3,"esc","cxFocus"],[1,"cx-modal-content"],[1,"cx-dialog-header","modal-header"],[1,"info-icon"],["type","INFO"],["id","verification-token-dialog-title","class","title modal-title",4,"cxFeature"],[1,"spliter"],[1,"cx-dialog-body","modal-body"],[1,"cx-dialog-row"],[1,"cx-dialog-item"],[1,"cx-dialog-footer","modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["id","verification-token-dialog-title",1,"title","modal-title"]],template:function(i,o){i&1&&(l(0,"div",0),k("esc",function(){return o.closeModal(o.VERIFICATION_TOKEN_DIALOG_ACTION.OK)}),l(1,"div",1)(2,"div",2)(3,"div")(4,"span",3),g(5,"cx-icon",4),c(),f(6,di,3,3,"h3",5)(7,mi,3,3,"span",5),c()(),g(8,"hr",6),l(9,"div",7)(10,"div",8)(11,"div",9),p(12),r(13,"cxTranslate"),c(),l(14,"div",9),p(15),r(16,"cxTranslate"),c(),l(17,"div",9),p(18),r(19,"cxTranslate"),c(),l(20,"div",9),p(21),r(22,"cxTranslate"),c()()(),l(23,"div",10)(24,"button",11),r(25,"cxTranslate"),k("click",function(){return o.closeModal(o.VERIFICATION_TOKEN_DIALOG_ACTION.OK)}),p(26),r(27,"cxTranslate"),c()()()()),i&2&&(s("cxFocus",o.focusConfig),n(6),s("cxFeature","a11yDialogsHeading"),n(),s("cxFeature","!a11yDialogsHeading"),n(5),m(" ",a(13,9,"verificationTokenDialog.noReceiveCode")," "),n(3),m(" ",a(16,11,"verificationTokenDialog.contentLine1")," "),n(3),m(" ",a(19,13,"verificationTokenDialog.contentLine2")," "),n(3),m(" ",a(22,15,"verificationTokenDialog.contentLine3")," "),n(3),re("aria-label",a(25,17,"verificationTokenDialog.ok")),n(2),m(" ",a(27,19,"verificationTokenDialog.close")," "))},dependencies:[vt,xt,ee,L],encapsulation:2})}}return e})(),Si={launch:{ACCOUNT_VERIFICATION_TOKEN:{inlineRoot:!0,component:Mi,dialogType:yt.DIALOG}}},Ei=1e4,Ge=(()=>{class e{constructor(){this.globalMessage=v(Q),this.verificationTokenFacade=v(Z),this.auth=v(B),this.busy$=new ne(!1),this.isUpdating$=this.busy$.pipe(D(t=>{t===!0?this.form.disable():this.form.enable()})),this.form=new ge({tokenId:new G("",[j.required]),tokenCode:new G("",[j.required])})}login(){if(!this.form.valid){this.form.markAllAsTouched();return}this.busy$.next(!0),Me(this.auth.otpLoginWithCredentials(this.form.value.tokenId,this.form.value.tokenCode)).pipe(Ee(this.auth.isUserLoggedIn()),D(([t,i])=>this.onSuccess(i))).subscribe()}displayMessage(t,i){this.globalMessage.add({key:t,params:i},de.MSG_TYPE_CONFIRMATION,Ei)}createVerificationToken(t,i,o){return this.verificationTokenFacade.createVerificationToken({loginId:t,password:i,purpose:o})}onSuccess(t){t&&(this.globalMessage.remove(de.MSG_TYPE_ERROR),this.form.reset()),this.busy$.next(!1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Li=(()=>{class e{constructor(){this.service=v(Ge),this.launchDialogService=v(Ce),this.cdr=v(et),this.routingService=v(pe),this.waitTime=60,this.form=this.service.form,this.isUpdating$=this.service.isUpdating$,this.style=!0,this.isResendDisabled=!0}ngOnInit(){history.state&&(this.tokenId=history.state.tokenId,this.password=history.state.password,this.target=history.state.loginId,history.pushState({tokenId:"",password:"",loginId:""},"verifyToken"),!this.target||!this.password||!this.tokenId?(this.service.displayMessage("verificationTokenForm.needInputCredentials",{}),this.routingService.go(["/login"])):(this.startWaitTimeInterval(),this.service.displayMessage("verificationTokenForm.createVerificationToken",{target:this.target})))}onSubmit(){this.service.login()}resendOTP(){this.isResendDisabled=!0,this.resendLink.nativeElement.tabIndex=-1,this.resendLink.nativeElement.blur(),this.waitTime=60,this.startWaitTimeInterval(),this.service.createVerificationToken(this.target,this.password,St).subscribe({next:t=>this.tokenId=t.tokenId,complete:()=>this.service.displayMessage("verificationTokenForm.createVerificationToken",{target:this.target})})}startWaitTimeInterval(){let t=setInterval(()=>{this.waitTime--,this.cdr.detectChanges(),this.waitTime<=0&&(clearInterval(t),this.isResendDisabled=!1,this.resendLink.nativeElement.tabIndex=0,this.cdr.detectChanges())},1e3)}openInfoDailog(){this.launchDialogService.openDialogAndSubscribe("ACCOUNT_VERIFICATION_TOKEN",this.element)}onOpenInfoDailogKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.openInfoDailog())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=w({type:e,selectors:[["cx-verification-token-form"]],viewQuery:function(i,o){if(i&1&&(Le(ui,5),Le(fi,5)),i&2){let d;De(d=Ve())&&(o.element=d.first),De(d=Ve())&&(o.resendLink=d.first)}},hostVars:2,hostBindings:function(i,o){i&2&&ae("user-form",o.style)},decls:35,vars:36,consts:[["resendLink",""],["noReceiveCodeLink",""],["class","overlay",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"label-content"],["required","true","formControlName","tokenCode","aria-describedby","tokenInputHint",1,"form-control",3,"placeholder"],[3,"control"],["id","tokenInputHint",1,"cx-visually-hidden"],["type","hidden","formControlName","tokenId",3,"ngModelChange","ngModel"],[1,"resend-link-text"],[1,"left-text"],["role","timer","aria-live","polite","aria-atomic","true"],["role","button","tabindex","-1",1,"btn-link",3,"keydown.enter","keydown.space","click","ngClass"],[4,"ngIf"],[1,"right-text"],["role","button","tabindex","0",1,"btn-link",3,"keydown","click"],[1,"verify-container"],["type","submit",1,"btn","btn-block","btn-primary",3,"disabled"],[1,"btn","btn-block","btn-secondary","btn-register",3,"routerLink"],[1,"overlay"]],template:function(i,o){if(i&1){let d=J();f(0,hi,1,0,"cx-spinner",2),r(1,"async"),l(2,"form",3),k("ngSubmit",function(){return _(d),C(o.onSubmit())}),l(3,"label")(4,"span",4),p(5),r(6,"cxTranslate"),c(),g(7,"input",5),r(8,"cxTranslate"),g(9,"cx-form-errors",6),c(),l(10,"span",7),p(11),r(12,"cxTranslate"),c(),l(13,"input",8),Xe("ngModelChange",function(z){return _(d),Je(o.tokenId,z)||(o.tokenId=z),C(z)}),c(),l(14,"div",9)(15,"div",10)(16,"span",11)(17,"a",12,0),k("keydown.enter",function(){return _(d),C(o.resendOTP())})("keydown.space",function(){return _(d),C(o.resendOTP())})("click",function(){return _(d),C(o.resendOTP())}),p(19),r(20,"cxTranslate"),c(),f(21,yi,3,6,"ng-container",13),c()(),l(22,"div",14)(23,"a",15,1),k("keydown",function(z){return _(d),C(o.onOpenInfoDailogKeyDown(z))})("click",function(){return _(d),C(o.openInfoDailog())}),p(25),r(26,"cxTranslate"),c()()(),l(27,"div",16)(28,"button",17),p(29),r(30,"cxTranslate"),c(),l(31,"button",18),r(32,"cxUrl"),p(33),r(34,"cxTranslate"),c()()()}i&2&&(s("ngIf",a(1,15,o.isUpdating$)),n(2),s("formGroup",o.form),n(3),m(" ",a(6,17,"verificationTokenForm.verificationCode.label")," "),n(2),s("placeholder",a(8,19,"verificationTokenForm.verificationCode.placeholder")),n(2),s("control",o.form.get("tokenCode")),n(2),m(" ",a(12,21,"verificationTokenForm.tokenInputHint")," "),n(2),Ye("ngModel",o.tokenId),n(4),s("ngClass",H(33,gi,o.isResendDisabled)),n(2),m(" ",a(20,23,"verificationTokenForm.resend")," "),n(2),s("ngIf",o.isResendDisabled),n(4),m(" ",a(26,25,"verificationTokenForm.noReceiveCode")," "),n(3),s("disabled",o.form.disabled),n(),m(" ",a(30,27,"verificationTokenForm.verify")," "),n(2),s("routerLink",a(32,29,E(35,wt))),n(2),m(" ",a(34,31,"verificationTokenForm.back")," "))},dependencies:[Re,A,ve,me,ue,fe,xe,he,ye,O,ke,Ie,K,U,L],encapsulation:2,changeDetection:0})}}return e})(),Di=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I({cmsComponents:{VerifyOTPTokenComponent:{component:Li,guards:[X],providers:[{provide:Ge,useClass:Ge,deps:[B,Q,Z,W]}]}}}),I(Si)],imports:[R,Te,ht,_e,N,P,Tt,$,Fe,be,te]})}}return e})(),Et=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({imports:[Ii,Ti,Di,Ci,ki,wi]})}}return e})();var Vt=new Y("UserAccountNormalizer"),mn=new Y("UserAccountSerializer"),At=new Y("VerificationTokenNormalizer"),Rt=new Y("LoginFormSerializer"),ie=class{},He=(()=>{class e{constructor(t){this.adapter=t}get(t){return this.adapter.load(t)}createVerificationToken(t){return this.adapter.createVerificationToken(t)}static{this.\u0275fac=function(i){return new(i||e)(x(ie))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Lt=(()=>{class e{constructor(t,i,o){this.userAccountConnector=t,this.userIdService=i,this.query=o,this.userQuery=this.query.create(()=>this.userIdService.takeUserId(!0).pipe(oe(d=>this.userAccountConnector.get(d))),{reloadOn:[It],resetOn:[ut,mt]})}getById(t){return this.userAccountConnector.get(t)}get(){return this.userQuery.get()}static{this.\u0275fac=function(i){return new(i||e)(x(He),x(ot),x(pt))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Dt=(()=>{class e{constructor(){this.connector=v(He),this.command=v(lt),this.createVerificationTokenCommand=this.command.create(({verificationTokenCreation:t})=>this.connector.createVerificationToken(t))}createVerificationToken(t){return this.createVerificationTokenCommand.execute({verificationTokenCreation:t})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Vi=[Lt,{provide:we,useExisting:Lt},Dt,{provide:Z,useExisting:Dt}],Ot=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[He,...Vi]})}}return e})();var Ai={backend:{occ:{endpoints:{user:"users/${userId}",createVerificationToken:"users/anonymous/verificationToken"}}}},Ri={"Content-Type":"application/json"},Oi=(()=>{class e{constructor(t,i,o){this.http=t,this.occEndpoints=i,this.converter=o,this.logger=v(rt)}load(t){let i=this.occEndpoints.buildUrl("user",{urlParams:{userId:t}});return this.http.get(i).pipe(Se(o=>{throw Ne(o,this.logger)}),this.converter.pipeable(Vt))}createVerificationToken(t){let i=this.occEndpoints.buildUrl("createVerificationToken"),o=st.createHeader(at,!0,new tt(Ke({},Ri)));return t=this.converter.convert(t,Rt),this.http.post(i,t,{headers:o}).pipe(Se(d=>{throw Ne(d,this.logger)}),this.converter.pipeable(At))}static{this.\u0275fac=function(i){return new(i||e)(x(it),x(ct),x(dt))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Nt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({providers:[I(Ai),{provide:ie,useClass:Oi}]})}}return e})();var wn=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=h({imports:[Ot,Nt,Et]})}}return e})();export{wn as UserAccountModule};

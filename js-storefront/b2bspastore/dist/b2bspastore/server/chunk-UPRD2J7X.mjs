import './polyfills.server.mjs';
import{g as M,h as wt,i as kt,j as Vt}from"./chunk-SZSU6635.mjs";import"./chunk-LBGFRG7P.mjs";import{s as Mt}from"./chunk-UXBWB3PG.mjs";import{c as Pt}from"./chunk-LZ45RK54.mjs";import"./chunk-W6I6IL5E.mjs";import"./chunk-ZSZ2OSPO.mjs";import"./chunk-YZJYNVE5.mjs";import"./chunk-UHE32XUF.mjs";import{C as Et,Da as Rt,E as Ct,Fa as Lt,Ta as Ft,Wa as bt,Za as Tt,aa as yt,b as gt,c as ft,d as At,e as xt,l as ht,p as Ot,pa as It,s as Dt,z as St}from"./chunk-EKK5QDHO.mjs";import{$ as pt,A as ne,Ac as ke,Cb as vt,Fb as Pe,Gb as mt,Ha as lt,J as nt,Q as Te,Ta as se,V as _,X as ae,_ as at,e as Xe,f as et,fc as ut,g as re,h as G,i as tt,ib as le,j as rt,ka as st,lc as Me,m as ie,mc as we,n as it,o as oe,oa as pe,p as ot,pb as ct,qb as dt,tb as P,wb as K,wc as _t,xb as ce,y as be,zc as de}from"./chunk-H5UHAHI5.mjs";import{$a as E,$b as T,$d as Qe,Aa as Y,Bc as We,Cc as x,Dc as Ye,Ed as ee,Fa as D,Ga as R,Ia as z,Jc as a,Ka as g,Kc as p,L as y,La as Ze,Lc as Re,Md as te,Oc as Le,Pb as A,Qb as Je,Ra as Q,Rb as d,S as W,Sa as L,Xb as l,Yb as s,Zb as k,_a as S,_b as b,bc as V,dc as C,ec as u,j as Ee,o as Ce,pc as Ie,q as J,qc as c,rc as O,sc as v,ta as He,wb as o,x as f,xa as I,xb as F,y as ye,yd as Fe,zd as X}from"./chunk-TXWRNZDJ.mjs";import{a as U}from"./chunk-GHFNAT2I.mjs";var Qt=(t,n)=>({orderCode:t,orderTotal:n}),Xt=t=>({label:t}),er=()=>({cxRoute:"orderApprovals"});function tr(t,n){t&1&&(l(0,"div")(1,"div",3),k(2,"cx-spinner"),s()())}function rr(t,n){t&1&&(k(0,"div",5),a(1,"cxTranslate")),t&2&&Je("aria-label",p(1,1,"common.loaded"))}function ir(t,n){if(t&1&&(l(0,"div",8)(1,"div",9),c(2),a(3,"cxTranslate"),s()()),t&2){let e=u(3).ngIf,r=u();o(2),v(" ",Re(3,1,"orderApprovalDetails.form.title_"+r.approvalDecision,Ye(4,Qt,e==null||e.order==null?null:e.order.code,e==null||e.order==null||e.order.totalPriceWithTax==null?null:e.order.totalPriceWithTax.formattedValue))," ")}}function or(t,n){if(t&1&&(k(0,"cx-form-errors",18),a(1,"cxTranslate")),t&2){let e=u(5);d("translationParams",x(4,Xt,p(1,2,"orderApprovalDetails.form.comment_"+e.approvalDecision+".label")))("control",e.approvalForm.get("comment"))}}function nr(t,n){if(t&1&&k(0,"cx-form-errors",19),t&2){let e=u(5);d("control",e.approvalForm.get("comment"))}}function ar(t,n){if(t&1){let e=V();l(0,"form",10),C("ngSubmit",function(){S(e);let i=u(3).ngIf,m=u();return E(m.submitDecision(i))}),l(1,"label"),c(2),a(3,"cxTranslate"),k(4,"textarea",11),A(5,or,2,6,"cx-form-errors",12)(6,nr,1,1,"cx-form-errors",13),s(),l(7,"div",14)(8,"div",15)(9,"button",16),C("click",function(){S(e);let i=u(4);return E(i.cancelDecisionForm())}),c(10),a(11,"cxTranslate"),s()(),l(12,"div",15)(13,"button",17),c(14),a(15,"cxTranslate"),s()()()()}if(t&2){let e=u(4);d("formGroup",e.approvalForm),o(2),v("",p(3,6,"orderApprovalDetails.form.comment_"+e.approvalDecision+".label")," "),o(3),d("cxFeature","formErrorsDescriptiveMessages"),o(),d("cxFeature","!formErrorsDescriptiveMessages"),o(4),v(" ",p(11,8,"orderApprovalDetails.form.cancel")," "),o(4),v(" ",p(15,10,"orderApprovalDetails.form.submit_"+e.approvalDecision)," ")}}function pr(t,n){if(t&1&&(b(0),A(1,ir,4,7,"div",6)(2,ar,16,12,"form",7),T()),t&2){let e=u(3);o(),d("ngIf",e.approvalFormVisible),o(),d("ngIf",e.approvalFormVisible)}}function sr(t,n){if(t&1){let e=V();l(0,"div",20)(1,"button",23),C("click",function(){S(e);let i=u(4);return E(i.displayDecisionForm(i.approvalDecisionValue.REJECT))}),c(2),a(3,"cxTranslate"),s()()}t&2&&(o(2),v(" ",p(3,1,"orderApprovalDetails.showForm_REJECT")," "))}function lr(t,n){if(t&1){let e=V();l(0,"div",20)(1,"button",23),C("click",function(){S(e);let i=u(4);return E(i.displayDecisionForm(i.approvalDecisionValue.APPROVE))}),c(2),a(3,"cxTranslate"),s()()}t&2&&(o(2),v(" ",p(3,1,"orderApprovalDetails.showForm_APPROVE")," "))}function cr(t,n){if(t&1&&(b(0),l(1,"div",14)(2,"div",20)(3,"a",21),a(4,"cxUrl"),c(5),a(6,"cxTranslate"),s()(),A(7,sr,4,3,"div",22)(8,lr,4,3,"div",22),s(),T()),t&2){let e=u(2).ngIf;o(3),d("routerLink",p(4,4,We(8,er))),o(2),O(p(6,6,"orderApprovalDetails.back")),o(2),d("ngIf",e==null?null:e.approvalDecisionRequired),o(),d("ngIf",e==null?null:e.approvalDecisionRequired)}}function dr(t,n){if(t&1&&A(0,rr,2,3,"div",4)(1,pr,3,2,"ng-container",1)(2,cr,9,9,"ng-container",1),t&2){let e=u().ngIf,r=u();d("cxFeature","!a11yRemoveStatusLoadedRole"),o(),d("ngIf",e==null?null:e.approvalDecisionRequired),o(),d("ngIf",!r.approvalFormVisible)}}function vr(t,n){if(t&1&&(b(0),A(1,tr,3,0,"div",2),a(2,"async"),A(3,dr,3,3,"ng-template",null,0,Le),T()),t&2){let e=Ie(4),r=u();o(),d("ngIf",p(2,2,r.loading$))("ngIfElse",e)}}function mr(t,n){if(t&1&&(l(0,"tr")(1,"td",7)(2,"div",8),c(3),a(4,"cxTranslate"),s(),c(5),a(6,"cxTranslate"),s(),l(7,"td",9)(8,"div",8),c(9),a(10,"cxTranslate"),s(),c(11),s(),l(12,"td",10)(13,"div",8),c(14),a(15,"cxTranslate"),s(),c(16),s(),l(17,"td",11)(18,"div",8),c(19),a(20,"cxTranslate"),s(),c(21),a(22,"cxTranslate"),s()()),t&2){let e=n.$implicit;o(3),v(" ",p(4,8,"orderApprovalDetails.permissionResults.permission")," "),o(2),v(" ",p(6,10,"orderApprovalDetails.permissionResults.permissionType_"+(e==null||e.permissionType==null?null:e.permissionType.code))," "),o(4),v(" ",p(10,12,"orderApprovalDetails.permissionResults.approver")," "),o(2),v(" ",e.approverName," "),o(3),v(" ",p(15,14,"orderApprovalDetails.permissionResults.status")," "),o(2),v(" ",e.statusDisplay," "),o(3),v(" ",p(20,16,"orderApprovalDetails.permissionResults.approverComments")," "),o(2),v(" ",e.approverNotes?e.approverNotes:p(22,18,"orderApprovalDetails.permissionResults.noApprovalComments")," ")}}function ur(t,n){if(t&1&&(b(0),l(1,"div",1)(2,"div",2),c(3),a(4,"cxTranslate"),s()(),l(5,"table",3)(6,"thead",4)(7,"th",5),c(8),a(9,"cxTranslate"),s(),l(10,"th",5),c(11),a(12,"cxTranslate"),s(),l(13,"th",5),c(14),a(15,"cxTranslate"),s(),l(16,"th",5),c(17),a(18,"cxTranslate"),s()(),l(19,"tbody"),A(20,mr,23,20,"tr",6),s()(),T()),t&2){let e=u().ngIf;o(3),v(" ",p(4,6,"orderApprovalDetails.permissionResults.header")," "),o(5),v(" ",p(9,8,"orderApprovalDetails.permissionResults.permission")," "),o(3),v(" ",p(12,10,"orderApprovalDetails.permissionResults.approver")," "),o(3),v(" ",p(15,12,"orderApprovalDetails.permissionResults.status")," "),o(3),v(" ",p(18,14,"orderApprovalDetails.permissionResults.approverComments")," "),o(3),d("ngForOf",e.permissionResults)}}function _r(t,n){if(t&1&&(b(0),A(1,ur,21,16,"ng-container",0),T()),t&2){let e=n.ngIf;o(),d("ngIf",e.permissionResults==null?null:e.permissionResults.length)}}var $=t=>({approvalCode:t}),B=t=>({cxRoute:"orderApprovalDetails",params:t});function gr(t,n){if(t&1){let e=V();l(0,"tr",14),C("click",function(i){let m=S(e).$implicit,h=u(3);return E(h.goToApprovalDetails(i,m))}),l(1,"td",15)(2,"div",16),c(3),a(4,"cxTranslate"),s(),l(5,"a",17),a(6,"cxUrl"),c(7),s()(),l(8,"td",18)(9,"div",16),c(10),a(11,"cxTranslate"),s(),l(12,"a",17),a(13,"cxUrl"),c(14),a(15,"cxTranslate"),s()(),l(16,"td",19)(17,"div",16),c(18),a(19,"cxTranslate"),s(),l(20,"a",17),a(21,"cxUrl"),c(22),s()(),l(23,"td",20)(24,"div",16),c(25),a(26,"cxTranslate"),s(),l(27,"a",17),a(28,"cxUrl"),c(29),a(30,"cxDate"),s()(),l(31,"td",21)(32,"div",16),c(33),a(34,"cxTranslate"),s(),l(35,"a",17),a(36,"cxUrl"),c(37),a(38,"cxTranslate"),s()(),l(39,"td",22)(40,"div",16),c(41),a(42,"cxTranslate"),s(),l(43,"a",17),a(44,"cxUrl"),c(45),s()()()}if(t&2){let e=n.$implicit;o(3),v(" ",p(4,18,"orderApprovalList.orderCode")," "),o(2),d("routerLink",p(6,20,x(51,B,x(49,$,e==null?null:e.code)))),o(2),v(" ",e.order==null?null:e.order.code,""),o(3),v(" ",p(11,22,"orderApprovalList.POCode")," "),o(2),d("routerLink",p(13,24,x(55,B,x(53,$,e==null?null:e.code)))),o(2),O((e.order==null?null:e.order.purchaseOrderNumber)||p(15,26,"orderApprovalList.none")),o(4),v(" ",p(19,28,"orderApprovalList.placedBy")," "),o(2),d("routerLink",p(21,30,x(59,B,x(57,$,e==null?null:e.code)))),o(2),O(e.order==null||e.order.orgCustomer==null?null:e.order.orgCustomer.name),o(3),v(" ",p(26,32,"orderApprovalList.date")," "),o(2),d("routerLink",p(28,34,x(63,B,x(61,$,e==null?null:e.code)))),o(2),O(Re(30,36,e.order==null?null:e.order.created,"longDate")),o(4),v(" ",p(34,39,"orderApprovalList.status")," "),o(2),d("routerLink",p(36,41,x(67,B,x(65,$,e==null?null:e.code)))),o(2),v(" ",p(38,43,"orderDetails.statusDisplay_"+(e.order==null?null:e.order.statusDisplay)),""),o(4),v(" ",p(42,45,"orderApprovalList.total")," "),o(2),d("routerLink",p(44,47,x(71,B,x(69,$,e==null?null:e.code)))),o(2),v(" ",e.order==null||e.order.totalPrice==null?null:e.order.totalPrice.formattedValue,"")}}function fr(t,n){if(t&1){let e=V();b(0),l(1,"div",3)(2,"div",4)(3,"label")(4,"span",5),c(5),a(6,"cxTranslate"),s(),l(7,"cx-sorting",6),a(8,"async"),a(9,"cxTranslate"),C("sortListEvent",function(i){S(e);let m=u(2);return E(m.changeSortCode(i))}),s()()(),l(10,"div",7)(11,"cx-pagination",8),C("viewPageEvent",function(i){S(e);let m=u(2);return E(m.pageChange(i))}),s()()(),l(12,"table",9)(13,"caption",5),c(14),a(15,"cxTranslate"),s(),l(16,"thead",10)(17,"th",11),c(18),a(19,"cxTranslate"),s(),l(20,"th",11),c(21),a(22,"cxTranslate"),s(),l(23,"th",11),c(24),a(25,"cxTranslate"),s(),l(26,"th",11),c(27),a(28,"cxTranslate"),s(),l(29,"th",11),c(30),a(31,"cxTranslate"),s(),l(32,"th",11),c(33),a(34,"cxTranslate"),s()(),l(35,"tbody"),A(36,gr,46,73,"tr",12),s()(),l(37,"div",13)(38,"div",4)(39,"label")(40,"span",5),c(41),a(42,"cxTranslate"),s(),l(43,"cx-sorting",6),a(44,"async"),a(45,"cxTranslate"),C("sortListEvent",function(i){S(e);let m=u(2);return E(m.changeSortCode(i))}),s()()(),l(46,"div",7)(47,"cx-pagination",8),C("viewPageEvent",function(i){S(e);let m=u(2);return E(m.pageChange(i))}),s()()(),T()}if(t&2){let e=u().ngIf,r=u();o(5),O(p(6,20,"orderHistory.sortOrders")),o(2),d("sortOptions",e.sorts)("sortLabels",p(8,22,r.sortLabels$))("selectedOption",e.pagination.sort)("ariaLabel",p(9,24,"orderHistory.sortOrders")),o(4),d("pagination",e.pagination),o(3),v(" ",p(15,26,"orderApprovalList.orderApprovalList")," "),o(4),v(" ",p(19,28,"orderApprovalList.orderCode")," "),o(3),O(p(22,30,"orderApprovalList.POCode")),o(3),O(p(25,32,"orderApprovalList.placedBy")),o(3),O(p(28,34,"orderApprovalList.date")),o(3),v(" ",p(31,36,"orderApprovalList.status")," "),o(3),O(p(34,38,"orderApprovalList.total")),o(3),d("ngForOf",e.values),o(5),O(p(42,40,"orderHistory.sortOrders")),o(2),d("sortOptions",e.sorts)("sortLabels",p(44,42,r.sortLabels$))("selectedOption",e.pagination.sort)("ariaLabel",p(45,44,"orderHistory.sortOrders")),o(4),d("pagination",e.pagination)}}function Ar(t,n){t&1&&(l(0,"div",23)(1,"div",24)(2,"div"),c(3),a(4,"cxTranslate"),s()()()),t&2&&(o(3),O(p(4,1,"orderApprovalList.emptyList")))}function xr(t,n){if(t&1&&(b(0),A(1,fr,48,46,"ng-container",2)(2,Ar,5,3,"ng-template",null,0,Le),T()),t&2){let e=n.ngIf,r=Ie(3);o(),d("ngIf",e.pagination&&e.pagination.totalResults&&e.pagination.totalResults>0)("ngIfElse",r)}}var Ve=function(t){return t.APPROVE="APPROVE",t.REJECT="REJECT",t}(Ve||{}),Oe="order-approval",De="order-approval-entities",Se="order-approval-list",w="orderApproval.makeDecision",$e="[OrderApproval] Load OrderApproval Data",Bt="[OrderApproval] Load OrderApproval Data Fail",Be="[OrderApproval] Load OrderApproval Data Success",Ne="[OrderApproval] Load OrderApprovals",Nt="[OrderApproval] Load OrderApprovals Fail",je="[OrderApproval] Load OrderApprovals Success",Ue="[OrderApproval] Make OrderApproval Decision",jt="[OrderApproval] Make OrderApproval Decision Fail",ze="[OrderApproval] Make OrderApproval Decision Success",Ut="[OrderApproval] Make OrderApproval Decision Reset",H=class extends _.EntityLoadAction{constructor(n){super(De,n.orderApprovalCode),this.payload=n,this.type=$e}},ve=class extends _.EntityFailAction{constructor(n){super(De,n.orderApprovalCode,n.error),this.payload=n,this.type=Bt}},Z=class extends _.EntitySuccessAction{constructor(n){super(De,Array.isArray(n)?n.map(e=>e.code??""):n.code??""),this.payload=n,this.type=Be}},me=class extends _.EntityLoadAction{constructor(n){super(Se,_.serializeSearchConfig(n.params)),this.payload=n,this.type=Ne}},ue=class extends _.EntityFailAction{constructor(n){super(Se,_.serializeSearchConfig(n.params),n.error),this.payload=n,this.type=Nt}},_e=class extends _.EntitySuccessAction{constructor(n){super(Se,_.serializeSearchConfig(n.params)),this.payload=n,this.type=je}},ge=class extends _.EntityLoadAction{constructor(n){super(K,w),this.payload=n,this.type=Ue}},fe=class extends _.EntityFailAction{constructor(n){super(K,w,n.error),this.payload=n,this.type=jt}},Ae=class extends _.EntitySuccessAction{constructor(n){super(K,w),this.payload=n,this.type=ze}},xe=class extends _.EntityLoaderResetAction{constructor(){super(K,w),this.type=Ut}},gi=Object.freeze({__proto__:null,LOAD_ORDER_APPROVAL:$e,LOAD_ORDER_APPROVALS:Ne,LOAD_ORDER_APPROVALS_FAIL:Nt,LOAD_ORDER_APPROVALS_SUCCESS:je,LOAD_ORDER_APPROVAL_FAIL:Bt,LOAD_ORDER_APPROVAL_SUCCESS:Be,LoadOrderApproval:H,LoadOrderApprovalFail:ve,LoadOrderApprovalSuccess:Z,LoadOrderApprovals:me,LoadOrderApprovalsFail:ue,LoadOrderApprovalsSuccess:_e,MAKE_DECISION:Ue,MAKE_DECISION_FAIL:jt,MAKE_DECISION_RESET:Ut,MAKE_DECISION_SUCCESS:ze,MakeDecision:ge,MakeDecisionFail:fe,MakeDecisionReset:xe,MakeDecisionSuccess:Ae}),zt=tt(Oe),Ge=G(zt,t=>t[Oe]),Gt=G(Ge,t=>t&&t.entities),Kt=t=>G(Gt,n=>_.entityLoaderStateSelector(n,t)),qt=t=>G(Ge,n=>_.denormalizeSearch(n,t)),fi=Object.freeze({__proto__:null,getOrderApproval:Kt,getOrderApprovalList:qt,getOrderApprovalManagementState:Ge,getOrderApprovalState:zt,getOrderApprovalsState:Gt}),Ke=(()=>{class t{constructor(e,r){this.store=e,this.userIdService=r}loadOrderApproval(e){this.userIdService.takeUserId().subscribe(r=>this.store.dispatch(new H({userId:r,orderApprovalCode:e})))}loadOrderApprovals(e){this.userIdService.takeUserId().subscribe(r=>this.store.dispatch(new me({userId:r,params:e})))}getOrderApproval(e){return this.store.select(Kt(e))}getOrderApprovalList(e){return this.store.select(qt(e))}get(e){return this.getOrderApproval(e).pipe(Ce(Ee),Y(r=>{r.loading||r.success||r.error||this.loadOrderApproval(e)}),y(r=>!!(r.success||r.error)),f(r=>r.value))}getOrderApprovalLoading(e){return this.getOrderApproval(e).pipe(f(r=>r.loading??!1))}getList(e){return this.getOrderApprovalList(e).pipe(Ce(Ee),Y(r=>{r.loading||r.success||r.error||this.loadOrderApprovals(e)}),y(r=>!!(r.success||r.error)),f(r=>r.value))}makeDecision(e,r){this.userIdService.takeUserId().subscribe(i=>this.store.dispatch(new ge({userId:i,orderApprovalCode:e,orderApprovalDecision:r})))}getMakeDecisionResultLoading(){return this.store.pipe(re(ce.getProcessLoadingFactory(w)))}getMakeDecisionResultError(){return this.store.pipe(re(ce.getProcessErrorFactory(w)))}getMakeDecisionResultSuccess(){return this.store.pipe(re(ce.getProcessSuccessFactory(w)))}resetMakeDecisionProcessState(){this.store.dispatch(new xe)}static{this.\u0275fac=function(r){return new(r||t)(g(et),g(pt))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),q=(()=>{class t{constructor(e,r){this.routingService=e,this.orderApprovalService=r,this.approvalCode$=this.routingService.getRouterState().pipe(f(i=>i.state.params.approvalCode)),this.orderApproval$=this.approvalCode$.pipe(y(i=>!!i),Y(i=>this.orderApprovalService.loadOrderApproval(i)),I(i=>this.orderApprovalService.get(i)),He({bufferSize:1,refCount:!0})),this.order$=this.orderApproval$.pipe(f(i=>i?.order))}getOrderApprovalCodeFromRoute(){return this.approvalCode$}getOrderDetails(){return this.order$}getOrderApproval(){return this.orderApproval$}static{this.\u0275fac=function(r){return new(r||t)(g(pe),g(Ke))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),hr=(()=>{class t{constructor(e,r,i){this.orderApprovalDetailService=e,this.orderApprovalService=r,this.fb=i,this.approvalDecisionValue=Ve,this.approvalFormVisible=!1,this.approvalForm=this.fb.group({comment:[""]}),this.orderApprovalLoading$=this.orderApprovalDetailService.getOrderApprovalCodeFromRoute().pipe(I(m=>this.orderApprovalService.getOrderApprovalLoading(m))),this.decisionResultLoading$=this.orderApprovalService.getMakeDecisionResultLoading(),this.loading$=ye([this.orderApprovalLoading$,this.decisionResultLoading$]).pipe(f(([m,h])=>m||h)),this.orderApproval$=this.orderApprovalDetailService.getOrderApproval(),this.orderApprovalService.resetMakeDecisionProcessState()}displayDecisionForm(e){this.approvalDecision=e,e===Ve.APPROVE?this.approvalForm.controls.comment.clearValidators():this.approvalForm.controls.comment.setValidators([ft.required]),this.approvalFormVisible=!0}cancelDecisionForm(){this.approvalFormVisible=!1,this.approvalForm.reset()}submitDecision(e){this.approvalForm.valid?(this.orderApprovalService.makeDecision(e.code??"",{decision:this.approvalDecision,comment:this.approvalForm.controls.comment.value}),this.approvalFormVisible=!1):this.approvalForm.markAllAsTouched()}ngOnDestroy(){this.orderApprovalService.resetMakeDecisionProcessState()}static{this.\u0275fac=function(r){return new(r||t)(F(q),F(Ke),F(Et))}}static{this.\u0275cmp=Q({type:t,selectors:[["cx-order-approval-detail-form"]],decls:2,vars:3,consts:[["approvalFormTemplate",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"cx-spinner"],["role","status",4,"cxFeature"],["role","status"],["class","cx-approval-form-header row",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"cx-approval-form-header","row"],[1,"cx-approval-form-label","col-sm-12"],[3,"ngSubmit","formGroup"],["rows","3","formControlName","comment","maxlength","255",1,"form-control"],[3,"translationParams","control",4,"cxFeature"],[3,"control",4,"cxFeature"],[1,"form-group","row"],[1,"col-lg-6","col-md-12"],["type","button",1,"btn","btn-block","btn-secondary",3,"click"],["type","submit",1,"btn","btn-block","btn-primary"],[3,"translationParams","control"],[3,"control"],[1,"col-lg-4","col-md-12"],["role","button",1,"btn","btn-block","btn-secondary",3,"routerLink"],["class","col-lg-4 col-md-12",4,"ngIf"],[1,"btn","btn-block","btn-primary",3,"click"]],template:function(r,i){r&1&&(A(0,vr,5,4,"ng-container",1),a(1,"async")),r&2&&d("ngIf",p(1,1,i.orderApproval$))},dependencies:[ht,gt,At,xt,St,Ot,Dt,X,Rt,yt,be,vt,ee,de,Me],encapsulation:2,changeDetection:0})}}return t})(),N=(()=>{class t{constructor(e,r,i){this.userAccountFacade=e,this.routingService=r,this.globalMessageService=i}canActivate(){return this.userAccountFacade.get().pipe(y(e=>!!e&&Object.keys(e).length>0),f(e=>e?.roles),f(e=>{let r=Array.isArray(e)&&(e.includes(Te.APPROVER)||e.includes(Te.ADMIN));return r||(this.routingService.go({cxRoute:"home"}),this.globalMessageService.add({key:"orderApprovalGlobal.notification.noSufficientPermissions"},ct.MSG_TYPE_WARNING)),r}))}static{this.\u0275fac=function(r){return new(r||t)(g(Pt),g(pe),g(dt))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),$t=(()=>{class t{constructor(e){this.orderDetailsService=e,this.order$=this.orderDetailsService.getOrderDetails()}static{this.\u0275fac=function(r){return new(r||t)(F(M))}}static{this.\u0275cmp=Q({type:t,selectors:[["cx-order-detail-permission-results"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-approval-header"],[1,"cx-approval-label"],[1,"table","table-striped","cx-approval-table"],[1,"cx-approval-thead-mobile"],["scope","col"],[4,"ngFor","ngForOf"],[1,"cx-approval-permissionCode"],[1,"cx-approval-table-label"],[1,"cx-approval-approverName"],[1,"cx-approval-statusDisplay"],[1,"cx-approval-approvalNotes"]],template:function(r,i){r&1&&(A(0,_r,2,1,"ng-container",0),a(1,"async")),r&2&&d("ngIf",p(1,1,i.order$))},dependencies:[Fe,X,ee,de],encapsulation:2,changeDetection:0})}}return t})(),Or=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({imports:[Ct,te,ke,we,Lt,It,ne,Pe.withConfig({cmsComponents:{OrderApprovalDetailTotalsComponent:{component:Vt,providers:[{provide:M,useExisting:q}],guards:[P,N]},OrderApprovalDetailApprovalDetailsComponent:{component:$t,providers:[{provide:M,useExisting:q}],guards:[P,N]},AccountOrderDetailsApprovalDetailsComponent:{component:$t},OrderApprovalDetailShippingComponent:{component:wt,providers:[{provide:M,useExisting:q}],guards:[P,N]},OrderApprovalDetailItemsComponent:{component:kt,providers:[{provide:M,useExisting:q}],guards:[P,N]},OrderApprovalDetailFormComponent:{component:hr,guards:[P,N]}}}),mt]})}}return t})(),Dr=(()=>{class t{constructor(e,r,i){this.routing=e,this.orderApprovalService=r,this.translation=i,this.PAGE_SIZE=5}ngOnInit(){this.fetchApprovalListPage({}),this.sortLabels$=ye([this.translation.translate("sorting.date"),this.translation.translate("sorting.orderNumber")]).pipe(f(([e,r])=>({byDate:e,byOrderNumber:r})))}changeSortCode(e){let r={sort:e,currentPage:0};this.sortType=e,this.fetchApprovalListPage(r)}pageChange(e){let r={sort:this.sortType,currentPage:e};this.fetchApprovalListPage(r)}fetchApprovalListPage(e){e.pageSize=this.PAGE_SIZE,this.orderApprovalService.loadOrderApprovals(e),this.orderApprovals$=this.orderApprovalService.getList(e)}goToApprovalDetails(e,r){e?.target?.nodeName.toLowerCase()!=="a"&&this.routing.go({cxRoute:"orderApprovalDetails",params:{approvalCode:r.code}})}static{this.\u0275fac=function(r){return new(r||t)(F(pe),F(Ke),F(ut))}}static{this.\u0275cmp=Q({type:t,selectors:[["cx-order-approval-list"]],decls:2,vars:3,consts:[["noOrder",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"cx-order-approval-sort","top","row"],[1,"cx-order-approval-form-group","form-group","col-sm-12","col-md-4","col-lg-4"],[1,"cx-visually-hidden"],["ariaControls","order-approval-table",3,"sortListEvent","sortOptions","sortLabels","selectedOption","ariaLabel"],[1,"cx-order-approval-pagination"],[3,"viewPageEvent","pagination"],["role","table","id","order-approval-table",1,"table","cx-order-approval-table"],[1,"cx-order-approval-thead-mobile"],["scope","col"],["role","row",3,"click",4,"ngFor","ngForOf"],[1,"cx-order-approval-sort","bottom","row"],["role","row",3,"click"],["role","cell",1,"cx-order-approval-code"],[1,"d-md-none","cx-order-approval-label"],[1,"cx-order-approval-value",3,"routerLink"],["role","cell",1,"cx-order-approval-po-code"],["role","cell",1,"cx-order-approval-placed"],["role","cell",1,"cx-order-approval-date"],["role","cell",1,"cx-order-approval-status"],["role","cell",1,"cx-order-approval-total"],[1,"cx-order-approval-no-order","row"],[1,"col-sm-12","col-md-6","col-lg-4"]],template:function(r,i){r&1&&(A(0,xr,4,2,"ng-container",1),a(1,"async")),r&2&&d("ngIf",p(1,1,i.orderApprovals$))},dependencies:[Fe,X,be,Ft,bt,ee,Me,de,_t],encapsulation:2,changeDetection:0})}}return t})(),Sr=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({imports:[te,Pe.withConfig({cmsComponents:{OrderApprovalListComponent:{component:Dr,guards:[P,N]}}}),we,ne,Tt,ke]})}}return t})(),Er=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({imports:[ne,Sr,Or]})}}return t})(),he=class{},Ht=(()=>{class t{constructor(e){this.adapter=e}get(e,r){return this.adapter.load(e,r)}getList(e,r){return this.adapter.loadList(e,r)}makeDecision(e,r,i){return this.adapter.makeDecision(e,r,i)}static{this.\u0275fac=function(r){return new(r||t)(g(he))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),qe=new z("OrderApprovalNormalizer"),Zt=new z("OrderApprovalsListNormalizer"),Jt=new z("OrderApprovalDecisionNormalizer"),Cr=(()=>{class t{constructor(e,r,i){this.http=e,this.occEndpoints=r,this.converter=i}load(e,r){return this.http.get(this.getOrderApprovalEndpoint(e,r)).pipe(this.converter.pipeable(qe))}loadList(e,r){return this.http.get(this.getOrderApprovalsEndpoint(e,r)).pipe(this.converter.pipeable(Zt))}makeDecision(e,r,i){return this.http.post(this.getOrderApprovalDecisionEndpoint(e,r),i).pipe(this.converter.pipeable(Jt))}getOrderApprovalEndpoint(e,r){return this.occEndpoints.buildUrl("orderApproval",{urlParams:{userId:e,orderApprovalCode:r}})}getOrderApprovalsEndpoint(e,r){return this.occEndpoints.buildUrl("orderApprovals",{urlParams:{userId:e},queryParams:r})}getOrderApprovalDecisionEndpoint(e,r){return this.occEndpoints.buildUrl("orderApprovalDecision",{urlParams:{userId:e,orderApprovalCode:r}})}static{this.\u0275fac=function(r){return new(r||t)(g(Qe),g(lt),g(se))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac})}}return t})(),yr=(()=>{class t{constructor(){}convert(e,r){return r===void 0&&(r=U({},e)),r}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ir=(()=>{class t{constructor(e){this.converter=e}convert(e,r){return r===void 0&&(r=U({},e)),r.values=e.orderApprovals?.map(i=>U({},this.converter.convert(i,qe)))??[],r}static{this.\u0275fac=function(r){return new(r||t)(g(se))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Rr=(()=>{class t{constructor(e){this.converter=e}convert(e,r){return r===void 0&&(r=U({},e)),e.order&&(r.order=this.converter.convert(e.order,Mt)),r}static{this.\u0275fac=function(r){return new(r||t)(g(se))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Lr={backend:{occ:{endpoints:{orderApprovals:"/users/${userId}/orderapprovals",orderApproval:"/users/${userId}/orderapprovals/${orderApprovalCode}?fields=FULL",orderApprovalDecision:"/users/${userId}/orderapprovals/${orderApprovalCode}/decision"}}}},Fr=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({providers:[nt(Lr),{provide:he,useClass:Cr},{provide:qe,useExisting:Rr,multi:!0},{provide:Zt,useExisting:Ir,multi:!0},{provide:Jt,useExisting:yr,multi:!0}],imports:[te]})}}return t})(),br=(()=>{class t{constructor(e,r){this.actions$=e,this.orderApprovalConnector=r,this.logger=Ze(st),this.loadOrderApproval$=ie(()=>this.actions$.pipe(oe($e),f(i=>i.payload),y(i=>i.userId!==ae),I(({userId:i,orderApprovalCode:m})=>this.orderApprovalConnector.get(i,m).pipe(f(h=>new Z([h])),W(h=>J(new ve({orderApprovalCode:m,error:le(h,this.logger)}))))))),this.loadOrderApprovals$=ie(()=>this.actions$.pipe(oe(Ne),f(i=>i.payload),y(i=>i.userId!==ae),I(({userId:i,params:m})=>this.orderApprovalConnector.getList(i,m).pipe(I(h=>{let{values:j,page:Yt}=_.normalizeListPage(h,"code");return[new Z(j),new _e({page:Yt,params:m})]}),W(h=>J(new ue({params:m,error:le(h,this.logger)}))))))),this.makeDecision$=ie(()=>this.actions$.pipe(oe(Ue),f(i=>i.payload),y(i=>i.userId!==ae),I(({userId:i,orderApprovalCode:m,orderApprovalDecision:h})=>this.orderApprovalConnector.makeDecision(i,m,h).pipe(I(j=>[new Ae({orderApprovalCode:m,orderApprovalDecision:j}),new H({userId:i,orderApprovalCode:m})]),W(j=>J(new fe({orderApprovalCode:m,error:le(j,this.logger)})))))))}static{this.\u0275fac=function(r){return new(r||t)(g(it),g(Ht))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac})}}return t})(),Tr=[br],Pr=void 0,Mr=void 0;function wr(t=Pr,n){switch(n.type){case Be:return n.payload;case ze:return t}return t}function kr(t=Mr,n){switch(n.type){case je:return n.payload.page}return t}function Vr(){return{[Oe]:Xe({entities:_.entityLoaderReducer(De,wr),list:_.entityLoaderReducer(Se,kr)})}}var Wt=new z("OrganizationReducers"),$r={provide:Wt,useFactory:Vr};function Br(t){return function(n,e){return e.type===at.LOGOUT&&(n=void 0),t(n,e)}}var Nr=[Br],jr=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({providers:[$r],imports:[rt.forFeature(Oe,Wt,{metaReducers:Nr}),ot.forFeature(Tr)]})}}return t})(),Ur=(()=>{class t{static forRoot(){return{ngModule:t,providers:[Ht]}}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({imports:[jr]})}}return t})(),Ai=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=R({imports:[Ur.forRoot(),Fr,Er]})}}return t})();export{N as ApproverGuard,Zt as ORDER_APPROVALS_NORMALIZER,Jt as ORDER_APPROVAL_DECISION_NORMALIZER,De as ORDER_APPROVAL_ENTITIES,Oe as ORDER_APPROVAL_FEATURE,Se as ORDER_APPROVAL_LIST,w as ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID,qe as ORDER_APPROVAL_NORMALIZER,Cr as OccOrderApprovalAdapter,yr as OccOrderApprovalDecisionNormalizer,Ir as OccOrderApprovalListNormalizer,Rr as OccOrderApprovalNormalizer,gi as OrderApprovalActions,he as OrderApprovalAdapter,Er as OrderApprovalComponentsModule,Ht as OrderApprovalConnector,Ve as OrderApprovalDecisionValue,hr as OrderApprovalDetailFormComponent,q as OrderApprovalDetailService,Or as OrderApprovalDetailsModule,Dr as OrderApprovalListComponent,Sr as OrderApprovalListModule,Ai as OrderApprovalModule,Fr as OrderApprovalOccModule,fi as OrderApprovalSelectors,Ke as OrderApprovalService,$t as OrderDetailPermissionResultsComponent};
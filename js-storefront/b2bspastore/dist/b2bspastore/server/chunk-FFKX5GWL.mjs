import './polyfills.server.mjs';
import{a as N,b as $,c as ne,f as oe,g as ae}from"./chunk-VS6T2B26.mjs";import"./chunk-W6I6IL5E.mjs";import{b as rt}from"./chunk-ZSZ2OSPO.mjs";import"./chunk-YZJYNVE5.mjs";import{H as ie,V as et}from"./chunk-UHE32XUF.mjs";import{D as te,E as ee,H as re,b as Wt,d as Qt,j as Jt,o as Kt}from"./chunk-EKK5QDHO.mjs";import{$ as Yt,A as Gt,Ac as Ht,Fb as qt,Ha as Xt,J as Pt,Ta as Vt,V as c,W as jt,f as St,g as w,h as Dt,i as Lt,ib as O,j as Ut,ka as kt,kb as Bt,lc as zt,m as A,mc as Zt,n as wt,o as b,p as Mt,y as $t,zc as M}from"./chunk-H5UHAHI5.mjs";import{$a as _t,$b as W,$d as Nt,Aa as z,Bc as Rt,Dc as K,Ed as Ot,Fa as h,Ga as y,Ia as D,Jc as T,Ka as p,Kc as m,L as P,La as Et,Lc as tt,Md as X,Oc as xt,Pb as R,Qb as Y,Ra as L,Rb as I,S as v,Sa as F,X as _,Xb as g,Yb as C,Zb as Z,_a as mt,_b as H,bc as yt,dc as k,ec as U,gb as vt,hc as Q,pc as Ft,q as G,qc as E,rc as J,sc as x,wb as s,x as d,xa as f,xb as j,yd as At,zd as bt}from"./chunk-TXWRNZDJ.mjs";import{a as l,b as S}from"./chunk-GHFNAT2I.mjs";var xe=()=>({cxRoute:"cart"}),se=(e,n)=>({value:e,attribute:n});function Ae(e,n){if(e&1){let t=yt();g(0,"div",6)(1,"cx-configurator-textfield-input-field",7),k("inputChange",function(i){mt(t);let o=U(3);return _t(o.updateConfiguration(i))}),C()()}if(e&2){let t=n.$implicit;s(),I("attribute",t)}}function be(e,n){if(e&1&&(H(0),g(1,"span",3),E(2),T(3,"cxTranslate"),C(),R(4,Ae,2,1,"div",4),Z(5,"cx-configurator-textfield-add-to-cart-button",5),W()),e&2){let t=U().ngIf;s(2),x(" ",m(3,3,"configurator.a11y.editAttributesAndValues")," "),s(2),I("ngForOf",t.configurationInfos),s(),I("configuration",t)}}function Oe(e,n){if(e&1&&(g(0,"div",6),Z(1,"cx-configurator-textfield-input-field-readonly",8),C()),e&2){let t=n.$implicit;s(),I("attribute",t)}}function Ne(e,n){if(e&1&&(g(0,"span",3),E(1),T(2,"cxTranslate"),C(),R(3,Oe,2,1,"div",4)),e&2){let t=U().ngIf;s(),x(" ",m(2,2,"configurator.a11y.listOfAttributesAndValues")," "),s(2),I("ngForOf",t.configurationInfos)}}function Se(e,n){if(e&1&&(H(0),R(1,be,6,5,"ng-container",2),T(2,"async"),R(3,Ne,4,4,"ng-template",null,0,xt),W()),e&2){let t=Ft(4),r=U();s(),I("ngIf",m(2,2,r.isEditable$))("ngIfElse",t)}}var nt;(function(e){let n;(function(t){t.SUCCESS="SUCCESS",t.ERROR="ERROR"})(n=e.ConfigurationStatus||(e.ConfigurationStatus={}))})(nt||(nt={}));var ue="productConfigurationTextfield",u="[ConfiguratorTextfield] Configuration Data",de="[Configurator] Create Configuration Textfield",De="[Configurator] Create Configuration Textfield Fail",fe="[Configurator] Create Configuration Textfield Success",le="[Configurator] Update Configuration Textfield",pe="[Configurator] Add to cart Textfield",Le="[Configurator] Add to cart Textfield Fail",ge="[Configurator] Read cart entry configuration Textfield",Ue="[Configurator] Read cart entry configuration Textfield Fail",Ce="[Configurator] Read cart entry configuration Textfield Success",Ie="[Configurator] Read order entry configuration textfield",we="[Configurator] Read order entry configuration textfield Fail",Te="[Configurator] Read order entry configuration textfield Success",he="[Configurator] Update cart entry configuration Textfield",Me="[Configurator] Update cart entry configuration Textfield Fail",Ee="[Configurator] Remove Configuration Textfield",ot=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=de}},at=class extends c.LoaderFailAction{constructor(n){super(u,n),this.payload=n,this.type=De}},ct=class extends c.LoaderSuccessAction{constructor(n){super(u),this.payload=n,this.type=fe}},st=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=le}},ut=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=pe}},dt=class extends c.LoaderFailAction{constructor(n){super(u,n),this.payload=n,this.type=Le}},ft=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=he}},lt=class extends c.LoaderFailAction{constructor(n){super(u,n),this.payload=n,this.type=Me}},pt=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=ge}},gt=class extends c.LoaderSuccessAction{constructor(n){super(u),this.payload=n,this.type=Ce}},Ct=class extends c.LoaderFailAction{constructor(n){super(u,n),this.payload=n,this.type=Ue}},It=class extends c.LoaderLoadAction{constructor(n){super(u),this.payload=n,this.type=Ie}},Tt=class extends c.LoaderSuccessAction{constructor(n){super(u),this.payload=n,this.type=Te}},ht=class extends c.LoaderFailAction{constructor(n){super(u,n),this.payload=n,this.type=we}},B=class extends c.LoaderResetAction{constructor(){super(u),this.type=Ee}};var $e=e=>e.loaderState.value,me=Lt(ue),it=Dt(me,$e);var _e=(()=>{class e{constructor(t,r,i,o){this.store=t,this.activeCartService=r,this.configuratorUtils=i,this.userIdService=o,this.ensureConfigurationDefined=a=>a??{configurationInfos:[],owner:$.createInitialOwner()}}createConfiguration(t){return this.store.pipe(w(me),z(r=>{let i=r.loaderState.value,o=i!==void 0&&!$.isInitialOwner(i.owner),a=r.loaderState.loading;!o&&!a&&this.store.dispatch(new ot({productCode:t.id,owner:t}))}),d(r=>r.loaderState.value),P(r=>!this.isConfigurationInitial(r)),d(this.ensureConfigurationDefined))}updateConfiguration(t){this.store.pipe(w(it),_(1)).subscribe(r=>{r&&this.store.dispatch(new st(this.createNewConfigurationWithChange(t,r)))})}addToCart(t,r){this.activeCartService.requireLoadedCart().pipe(_(1)).subscribe(i=>{this.userIdService.getUserId().pipe(_(1)).subscribe(o=>{let a={userId:o,cartId:this.configuratorUtils.getCartId(i),productCode:t,configuration:r,quantity:1};this.store.dispatch(new ut(a))})})}updateCartEntry(t,r){this.activeCartService.requireLoadedCart().pipe(_(1)).subscribe(i=>{this.userIdService.getUserId().pipe(_(1)).subscribe(o=>{let a={userId:o,cartId:this.configuratorUtils.getCartId(i),cartEntryNumber:t,configuration:r};this.store.dispatch(new ft(a))})})}readConfigurationForCartEntry(t){return this.activeCartService.requireLoadedCart().pipe(f(r=>this.userIdService.getUserId().pipe(_(1),d(i=>({cart:r,userId:i}))).pipe(d(i=>({userId:i.userId,cartId:this.configuratorUtils.getCartId(i.cart),cartEntryNumber:t.id,owner:t})),z(i=>this.store.dispatch(new pt(i))),f(()=>this.store.pipe(w(it))),P(i=>!this.isConfigurationInitial(i)),d(this.ensureConfigurationDefined))))}readConfigurationForOrderEntry(t){let r=this.configuratorUtils.decomposeOwnerId(t.id),i={userId:jt,orderId:r.documentId,orderEntryNumber:r.entryNumber,owner:t};return this.store.dispatch(new It(i)),this.store.pipe(w(it),P(o=>!this.isConfigurationInitial(o)),d(this.ensureConfigurationDefined))}createNewConfigurationWithChange(t,r){let i={configurationInfos:[],owner:r.owner};return r.configurationInfos.forEach(o=>{o.configurationLabel===t.configurationLabel?(t.status=nt.ConfigurationStatus.SUCCESS,i.configurationInfos.push(t)):i.configurationInfos.push(o)}),i}isConfigurationInitial(t){return t===void 0||$.isInitialOwner(t.owner)}static{this.\u0275fac=function(r){return new(r||e)(p(St),p(ie),p(ne),p(Yt))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ge=(()=>{class e{constructor(t){this.configuratorTextfieldService=t}onAddToCart(){let t=this.configuration.owner;switch(t.type){case N.OwnerType.PRODUCT:this.configuratorTextfieldService.addToCart(t.id,this.configuration);break;case N.OwnerType.CART_ENTRY:this.configuratorTextfieldService.updateCartEntry(t.id,this.configuration);break}}getButtonText(){return this.configuration.owner.type===N.OwnerType.CART_ENTRY?"configurator.addToCart.buttonUpdateCart":"configurator.addToCart.button"}static{this.\u0275fac=function(r){return new(r||e)(j(_e))}}static{this.\u0275cmp=L({type:e,selectors:[["cx-configurator-textfield-add-to-cart-button"]],inputs:{configuration:"configuration",productCode:"productCode"},decls:4,vars:7,consts:[[1,"cx-btn","btn","btn-block","btn-primary","cx-add-to-cart-btn",3,"click","routerLink"]],template:function(r,i){r&1&&(g(0,"button",0),T(1,"cxUrl"),k("click",function(){return i.onAddToCart()}),E(2),T(3,"cxTranslate"),C()),r&2&&(I("routerLink",m(1,2,Rt(6,xe))),s(2),x(" ",m(3,4,i.getButtonText()),`
`))},dependencies:[$t,M,zt],encapsulation:2,changeDetection:0})}}return e})(),Pe=(()=>{class e{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield",this.attributeInputForm=new Jt(""),this.inputChange=new vt}ngOnInit(){this.attributeInputForm.setValue(this.attribute.configurationValue)}onInputChange(){let t={configurationLabel:this.attribute.configurationLabel,configurationValue:this.attributeInputForm.value};this.inputChange.emit(t)}getIdLabel(t){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(t)}getId(t){return this.PREFIX_TEXTFIELD+this.getLabelForIdGeneration(t)}getLabelForIdGeneration(t){return t.configurationLabel.replace(/\s/g,"")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=L({type:e,selectors:[["cx-configurator-textfield-input-field"]],inputs:{attribute:"attribute"},outputs:{inputChange:"inputChange"},decls:6,vars:13,consts:[[1,"cx-configurator-textfield-label",3,"id"],[1,"form-group"],[1,"form-control",3,"change","formControl"]],template:function(r,i){r&1&&(g(0,"label",0),T(1,"cxTranslate"),E(2),C(),g(3,"div",1)(4,"input",2),T(5,"cxTranslate"),k("change",function(){return i.onInputChange()}),C()()),r&2&&(Q("id",i.getIdLabel(i.attribute)),Y("aria-label",m(1,5,"configurator.a11y.nameOfAttribute")),s(2),J(i.attribute.configurationLabel),s(2),I("formControl",i.attributeInputForm),Y("aria-label",tt(5,7,"configurator.a11y.valueOfAttributeFull",K(10,se,i.attribute.configurationValue,i.attribute.configurationLabel))))},dependencies:[Wt,Qt,Kt,M],encapsulation:2,changeDetection:0})}}return e})(),je=(()=>{class e{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield"}getIdLabel(t){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(t)}getLabelForIdGeneration(t){return t.configurationLabel.replace(/\s/g,"")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=L({type:e,selectors:[["cx-configurator-textfield-input-field-readonly"]],inputs:{attribute:"attribute"},decls:7,vars:11,consts:[[1,"cx-visually-hidden",3,"id"],["aria-hidden","true"]],template:function(r,i){r&1&&(g(0,"span",0),E(1),T(2,"cxTranslate"),C(),g(3,"label",1),E(4),C(),g(5,"div",1),E(6),C()),r&2&&(Q("id",i.getIdLabel(i.attribute)),s(),x(" ",tt(2,5,"configurator.a11y.valueOfAttributeFull",K(8,se,i.attribute.configurationValue,i.attribute.configurationLabel)),`
`),s(2),Y("aria-describedby",i.getIdLabel(i.attribute)),s(),J(i.attribute.configurationLabel),s(2),x(" ",i.attribute.configurationValue,`
`))},dependencies:[M],encapsulation:2,changeDetection:0})}}return e})(),Ye=(()=>{class e{constructor(t,r){this.configuratorTextfieldService=t,this.configRouterExtractorService=r,this.configuration$=this.configRouterExtractorService.extractRouterData().pipe(f(i=>{switch(i.owner.type){case N.OwnerType.CART_ENTRY:return this.configuratorTextfieldService.readConfigurationForCartEntry(i.owner);case N.OwnerType.ORDER_ENTRY:return this.configuratorTextfieldService.readConfigurationForOrderEntry(i.owner);default:return this.configuratorTextfieldService.createConfiguration(i.owner)}})),this.isEditable$=this.configRouterExtractorService.extractRouterData().pipe(d(i=>i.pageType===oe.PageType.CONFIGURATION))}updateConfiguration(t){this.configuratorTextfieldService.updateConfiguration(t)}static{this.\u0275fac=function(r){return new(r||e)(j(_e),j(ae))}}static{this.\u0275cmp=L({type:e,selectors:[["cx-configurator-textfield-form"]],decls:2,vars:3,consts:[["readonly",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"cx-visually-hidden"],["class","cx-attribute",4,"ngFor","ngForOf"],[3,"configuration"],[1,"cx-attribute"],[3,"inputChange","attribute"],[3,"attribute"]],template:function(r,i){r&1&&(R(0,Se,5,4,"ng-container",1),T(1,"async")),r&2&&I("ngIf",m(1,1,i.configuration$))},dependencies:[At,bt,Pe,je,Ge,Ot,M],encapsulation:2})}}return e})(),ke=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=y({providers:[Pt({cmsComponents:{TextfieldConfigurationForm:{component:Ye}}})],imports:[Gt,te,ee,re,X,Ht,Zt]})}}return e})(),q=class{},ve=(()=>{class e{constructor(t){this.adapter=t}createConfiguration(t,r){return this.adapter.createConfiguration(t,r)}readConfigurationForCartEntry(t){return this.adapter.readConfigurationForCartEntry(t)}readConfigurationForOrderEntry(t){return this.adapter.readConfigurationForOrderEntry(t)}updateConfigurationForCartEntry(t){return this.adapter.updateConfigurationForCartEntry(t)}addToCart(t){return this.adapter.addToCart(t)}static{this.\u0275fac=function(r){return new(r||e)(p(q))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),Xe=(()=>{class e{constructor(t,r){this.actions$=t,this.configuratorTextfieldConnector=r,this.logger=Et(kt),this.createConfiguration$=A(()=>this.actions$.pipe(b(de),d(i=>i.payload),f(i=>this.configuratorTextfieldConnector.createConfiguration(i.productCode,i.owner).pipe(f(o=>[new ct(o)]),v(o=>G(new at(O(o,this.logger)))))))),this.addToCart$=A(()=>this.actions$.pipe(b(pe),d(i=>i.payload),f(i=>this.configuratorTextfieldConnector.addToCart(i).pipe(f(()=>[new B,new rt.LoadCart({cartId:i.cartId,userId:i.userId})]),v(o=>G(new dt(O(o,this.logger)))))))),this.updateCartEntry$=A(()=>this.actions$.pipe(b(he),d(i=>i.payload),f(i=>this.configuratorTextfieldConnector.updateConfigurationForCartEntry(i).pipe(f(()=>[new B,new rt.LoadCart({cartId:i.cartId,userId:i.userId})]),v(o=>G(new lt(O(o,this.logger)))))))),this.readConfigurationForCartEntry$=A(()=>this.actions$.pipe(b(ge),f(i=>{let o=i.payload;return this.configuratorTextfieldConnector.readConfigurationForCartEntry(o).pipe(f(a=>[new gt(a)]),v(a=>[new Ct(O(a,this.logger))]))}))),this.readConfigurationForOrderEntry$=A(()=>this.actions$.pipe(b(Ie),f(i=>{let o=i.payload;return this.configuratorTextfieldConnector.readConfigurationForOrderEntry(o).pipe(f(a=>[new Tt(a)]),v(a=>[new ht(O(a,this.logger))]))})))}static{this.\u0275fac=function(r){return new(r||e)(p(wt),p(ve))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),Ve=[Xe],ce={configurationInfos:[],owner:$.createInitialOwner()};function Be(e=ce,n){switch(n.type){case fe:case Ce:case Te:case le:return l(l({},e),n.payload);case Ee:return ce}return e}function qe(){return{loaderState:c.loaderReducer(u,Be)}}var ye=new D("ConfiguratorReducers"),ze={provide:ye,useFactory:qe},Ze=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=y({providers:[ze],imports:[X,Bt,Ut.forFeature(ue,ye),Mt.forFeature(Ve)]})}}return e})(),He=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=y({providers:[ve],imports:[Ze]})}}return e})(),We="TEXTFIELD",Qe=(()=>{class e{constructor(){}convert(t,r){let i=[];return t.configuration?.configurationInfos.forEach(a=>this.convertInfo(a,i)),S(l({},r),{userId:t.userId,cartId:t.cartId,product:{code:t.productCode},quantity:t.quantity,configurationInfos:i})}convertInfo(t,r){let i={configurationLabel:t.configurationLabel,configurationValue:t.configurationValue,status:t.status,configuratorType:We};r.push(i)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Je=(()=>{class e{constructor(){}convert(t,r){return l(l({},r),t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),V=new D("ConfigurationNormalizer"),Fe=new D("ConfigurationAddToCartSerializer"),Re=new D("ConfigurationUpdateCartEntrySerializer"),Ke=(()=>{class e{constructor(t,r,i){this.http=t,this.occEndpointsService=r,this.converterService=i}createConfiguration(t,r){return this.http.get(this.occEndpointsService.buildUrl("createTextfieldConfiguration",{urlParams:{productCode:t}})).pipe(this.converterService.pipeable(V),d(i=>S(l({},i),{owner:r})))}addToCart(t){let r=this.occEndpointsService.buildUrl("addTextfieldConfigurationToCart",{urlParams:{userId:t.userId,cartId:t.cartId}}),i=this.converterService.convert(t,Fe);return this.http.post(r,i).pipe(this.converterService.pipeable(et))}readConfigurationForCartEntry(t){let r=this.occEndpointsService.buildUrl("readTextfieldConfigurationForCartEntry",{urlParams:{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber}});return this.http.get(r).pipe(this.converterService.pipeable(V),d(i=>S(l({},i),{owner:l({},t.owner)})))}readConfigurationForOrderEntry(t){let r=this.occEndpointsService.buildUrl("readTextfieldConfigurationForOrderEntry",{urlParams:{userId:t.userId,orderId:t.orderId,orderEntryNumber:t.orderEntryNumber}});return this.http.get(r).pipe(this.converterService.pipeable(V),d(i=>S(l({},i),{owner:l({},t.owner)})))}updateConfigurationForCartEntry(t){let r=this.occEndpointsService.buildUrl("updateTextfieldConfigurationForCartEntry",{urlParams:{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber}}),i=this.converterService.convert(t,Re);return this.http.post(r,i).pipe(this.converterService.pipeable(et))}static{this.\u0275fac=function(r){return new(r||e)(p(Nt),p(Xt),p(Vt))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),tr="TEXTFIELD",er=(()=>{class e{constructor(){}convert(t){let r=[];return t.configuration?.configurationInfos.forEach(o=>this.convertInfo(o,r)),{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber,configurationInfos:r}}convertInfo(t,r){let i={configurationLabel:t.configurationLabel,configurationValue:t.configurationValue,status:t.status,configuratorType:tr};r.push(i)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function rr(){return{backend:{occ:{endpoints:{createTextfieldConfiguration:"products/${productCode}/configurator/textfield",addTextfieldConfigurationToCart:"users/${userId}/carts/${cartId}/entries/configurator/textfield",readTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield",readTextfieldConfigurationForOrderEntry:"users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/configurator/textfield",readTextfieldConfigurationForQuoteEntry:"users/${userId}/quotes/${quoteId}/entries/${quoteEntryNumber}/configurator/textfield",updateTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield"}}}}}var ir=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=y({providers:[{provide:q,useClass:Ke},{provide:V,useExisting:Je,multi:!0},{provide:Fe,useExisting:Qe,multi:!0},{provide:Re,useExisting:er,multi:!0}],imports:[X,qt.withConfigFactory(rr)]})}}return e})(),Lr=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=y({imports:[He,ke,ir]})}}return e})();export{We as CONFIGURATOR_TYPE_TEXTFIELD,Ge as ConfiguratorTextfieldAddToCartButtonComponent,Ye as ConfiguratorTextfieldFormComponent,Pe as ConfiguratorTextfieldInputFieldComponent,je as ConfiguratorTextfieldInputFieldReadonlyComponent,Ke as OccConfiguratorTextfieldAdapter,Qe as OccConfiguratorTextfieldAddToCartSerializer,Je as OccConfiguratorTextfieldNormalizer,ke as TextfieldConfiguratorComponentsModule,He as TextfieldConfiguratorCoreModule,Lr as TextfieldConfiguratorModule,ir as TextfieldConfiguratorOccModule};

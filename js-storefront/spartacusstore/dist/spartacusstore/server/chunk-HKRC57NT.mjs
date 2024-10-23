import './polyfills.server.mjs';
import{a as $t}from"./chunk-UOYR7WM5.mjs";import{L as z,M as J,N as yt,O as F}from"./chunk-TVE2QVOO.mjs";import{Ib as Lt,Jb as Ut,O as V,T as q,V as Mt,X as Dt,Y as K,aa as At,ka as Ft}from"./chunk-6XFVW6FJ.mjs";import{Cb as Nt,Db as Bt,I as Tt,U as Ot,Y as Rt,_b as Pt,cc as mt,dc as j,ha as bt,la as k,pc as wt,qc as D,rc as A,x as ft,z as gt,zb as St}from"./chunk-JYBAAKHA.mjs";import{$a as at,$b as f,Ac as B,Bc as ht,Bd as w,Fa as Y,Ga as v,Gc as s,Hc as u,Ic as X,Id as M,Ka as Q,L as rt,La as U,Lc as Et,Pb as d,Qb as b,Ra as S,Rb as c,Sa as T,Tb as xt,X as R,Xb as g,Xc as vt,Yb as y,Zb as $,_a as ot,_b as p,ac as ct,bc as st,dc as ut,ec as a,hc as H,l as E,nc as lt,oc as _,pc as N,q as it,qc as C,vd as pt,wb as o,wd as P,x as O,xb as I,zc as dt}from"./chunk-4X4JD2BX.mjs";var Wt=(e,r,t)=>({ownerType:e,entityKey:r,displayOnly:t}),jt=(e,r)=>({cxRoute:e,params:r});function Gt(e,r){e&1&&ct(0)}function Yt(e,r){if(e&1&&(g(0,"label",4),d(1,Gt,1,0,"ng-container",5),y()),e&2){a(2);let t=lt(3),n=a();o(),c("ngIf",n.isDisabled())("ngIfThen",t)}}function Qt(e,r){e&1&&ct(0)}function Ht(e,r){if(e&1&&(g(0,"a",6),s(1,"cxUrl"),s(2,"async"),d(3,Qt,1,0,"ng-container",5),y()),e&2){let t=a(2).ngIf,n=lt(3),i=a();c("routerLink",u(1,5,B(13,jt,i.getRoute(),ht(9,Wt,i.retrieveOwnerTypeFromAbstractOrderType(t),i.retrieveEntityKey(t),i.getDisplayOnly()))))("queryParams",u(2,7,i.queryParams$)),b("aria-describedby",i.getResolveIssuesA11yDescription()),o(3),c("ngIf",!i.isDisabled())("ngIfThen",n)}}function Xt(e,r){if(e&1&&(p(0),d(1,Yt,2,2,"label",2)(2,Ht,4,16,"a",3),f()),e&2){let t=a(2);o(),c("ngIf",t.isDisabled()),o(),c("ngIf",!t.isDisabled())}}function zt(e,r){e&1&&(p(0),_(1),s(2,"cxTranslate"),f()),e&2&&(o(),C(" ",u(2,1,"configurator.header.displayConfiguration"),""))}function Jt(e,r){e&1&&(p(0),_(1),s(2,"cxTranslate"),f()),e&2&&(o(),C(" ",u(2,1,"configurator.header.editConfiguration")," "))}function Zt(e,r){e&1&&(p(0),_(1),s(2,"cxTranslate"),f()),e&2&&(o(),C(" ",u(2,1,"configurator.header.resolveIssues")," "))}function te(e,r){if(e&1&&d(0,zt,3,3,"ng-container",1)(1,Jt,3,3,"ng-container",1)(2,Zt,3,3,"ng-container",1),e&2){let t=a(2);c("ngIf",t.getDisplayOnly()),o(),c("ngIf",!t.getDisplayOnly()&&!t.msgBanner),o(),c("ngIf",!t.getDisplayOnly()&&t.msgBanner)}}function ee(e,r){if(e&1&&(p(0),d(1,Xt,3,2,"ng-container",1)(2,te,3,3,"ng-template",null,0,Et),f()),e&2){let t=a();o(),c("ngIf",t.cartEntry)}}var Vt=e=>({count:e});function ne(e,r){if(e&1&&($(0,"cx-configure-cart-entry",4),s(1,"async")),e&2){let t,n=a().ngIf,i=a(2).ngIf,l=a();c("cartEntry",i)("readOnly",(t=u(1,4,l.readonly$))!==null&&t!==void 0?t:!1)("msgBanner",!0)("disabled",n.disabled)}}function ie(e,r){if(e&1&&(p(0),d(1,ne,2,6,"cx-configure-cart-entry",3),s(2,"async"),f()),e&2){let t=a(2).ngIf,n=a();o(),c("ngIf",u(2,1,n.shouldShowButton$)&&(t==null||t.product==null?null:t.product.configurable))}}function re(e,r){if(e&1&&(p(0),$(1,"cx-icon",1),g(2,"div",2),_(3),s(4,"cxTranslate"),d(5,ie,3,3,"ng-container",0),s(6,"async"),y(),f()),e&2){let t=a().ngIf,n=a();o(),c("type",n.iconTypes.ERROR),o(),H("id",n.getErrorMessageId(t)),o(),C(" ",X(4,4,"configurator.notificationBanner.numberOfIssues",dt(9,Vt,n.getNumberOfIssues(t)))," "),o(2),c("ngIf",u(6,7,n.quantityControl$))}}function oe(e,r){if(e&1&&(p(0),d(1,re,7,11,"ng-container",0),s(2,"async"),f()),e&2){let t=r.ngIf,n=a();o(),c("ngIf",n.hasIssues(t)&&!u(2,1,n.readonly$))}}var ae=(e,r)=>({attribute:e,value:r});function ce(e,r){e&1&&(g(0,"span",3),_(1),s(2,"cxTranslate"),y()),e&2&&(o(),C(" ",u(2,1,"configurator.a11y.cartEntryInfoIntro")," "))}function se(e,r){if(e&1&&(g(0,"div",4)(1,"span",5),_(2),s(3,"cxTranslate"),y(),g(4,"div",6),_(5),y(),g(6,"div",7),_(7),y()()),e&2){let t=r.$implicit,n=r.index,i=a(4);b("aria-describedby",i.getHiddenConfigurationInfoId(n)),o(),H("id",i.getHiddenConfigurationInfoId(n)),o(),C(" ",X(3,5,"configurator.a11y.cartEntryInfo",B(8,ae,t.configurationLabel,t.configurationValue))," "),o(3),C(" ",t==null?null:t.configurationLabel,": "),o(2),C(" ",t==null?null:t.configurationValue," ")}}function ue(e,r){if(e&1&&(p(0),d(1,ce,3,3,"span",1)(2,se,8,11,"div",2),f()),e&2){let t,n=a(2).ngIf;o(),c("ngIf",(t=n.configurationInfos==null?null:n.configurationInfos.length)!==null&&t!==void 0?t:!1),o(),c("ngForOf",n.configurationInfos)}}function le(e,r){if(e&1&&($(0,"cx-configure-cart-entry",9),s(1,"async")),e&2){let t,n=a().ngIf,i=a(2).ngIf,l=a();c("cartEntry",i)("readOnly",(t=u(1,4,l.readonly$))!==null&&t!==void 0?t:!1)("msgBanner",!1)("disabled",n.disabled)}}function de(e,r){if(e&1&&(p(0),d(1,le,2,6,"cx-configure-cart-entry",8),s(2,"async"),f()),e&2){let t=a(2).ngIf,n=a();o(),c("ngIf",u(2,1,n.shouldShowButton$)&&(t==null||t.product==null?null:t.product.configurable))}}function pe(e,r){if(e&1&&(p(0),d(1,ue,3,2,"ng-container",0)(2,de,3,3,"ng-container",0),s(3,"async"),f()),e&2){let t=a().ngIf,n=a();o(),c("ngIf",n.hasStatus(t)),o(),c("ngIf",u(3,2,n.quantityControl$))}}function fe(e,r){if(e&1&&(p(0),d(1,pe,4,4,"ng-container",0),f()),e&2){let t=r.ngIf,n=a();o(),c("ngIf",n.isAttributeBasedConfigurator(t))}}var ge=(e,r)=>({ownerType:e,entityKey:r}),me=(e,r)=>({displayRestartDialog:e,productCode:r});function ye(e,r){if(e&1){let t=st();p(0),g(1,"button",2),s(2,"cxTranslate"),ut("click",function(){ot(t);let i=a(2).ngIf,l=a();return at(l.navigateToConfigurator(i))}),_(3),s(4,"cxTranslate"),y(),f()}if(e&2){let t=a(2).ngIf,n=a();o(),b("aria-label",u(2,2,n.getAriaLabelTranslationKey(t.configuratorType))),o(2),C(" ",u(4,4,n.getTranslationKey(t.configuratorType))," ")}}function _e(e,r){if(e&1&&(p(0),g(1,"a",3),s(2,"cxUrl"),s(3,"cxTranslate"),_(4),s(5,"cxTranslate"),y(),f()),e&2){let t=a(2).ngIf,n=a();o(),c("routerLink",u(2,4,B(13,jt,"configure"+t.configuratorType,B(10,ge,n.ownerTypeProduct,t.code))))("queryParams",B(16,me,n.isDisplayRestartDialog(t.configuratorType),t.code)),b("aria-label",u(3,6,n.getAriaLabelTranslationKey(t.configuratorType))),o(3),N(u(5,8,n.getTranslationKey(t.configuratorType)))}}function Ce(e,r){e&1&&(p(0),d(1,ye,5,6,"ng-container",1)(2,_e,6,19,"ng-container",1),f()),e&2&&(o(),c("cxFeature","a11yUseButtonsForBtnLinks"),o(),c("cxFeature","!a11yUseButtonsForBtnLinks"))}function Ie(e,r){if(e&1&&(p(0),d(1,Ce,3,2,"ng-container",0),f()),e&2){let t=r.ngIf,n=a();o(),c("ngIf",t.configurable&&!n.isReadOnlyBaseProduct(t))}}function xe(e,r){if(e&1&&(p(0),g(1,"span",11),_(2),s(3,"cxTranslate"),y(),g(4,"span",12),_(5),s(6,"cxNumeric"),y(),f()),e&2){let t=a().$implicit;o(2),N(u(3,2,"configurator.attribute.quantity")),o(3),N(u(6,4,t==null?null:t.formattedQuantity))}}function he(e,r){if(e&1&&(p(0),g(1,"span",11),_(2),s(3,"cxTranslate"),y(),g(4,"span",12),_(5),y(),f()),e&2){let t=a().$implicit;o(2),N(u(3,2,"configurator.overviewForm.itemPrice")),o(3),N(t==null?null:t.formattedPrice)}}function Ee(e,r){if(e&1&&(g(0,"div",6)(1,"span",7),_(2),y(),g(3,"div",8),_(4),y(),g(5,"div",9),d(6,xe,7,6,"ng-container",0),y(),g(7,"div",10),d(8,he,6,4,"ng-container",0),y()()),e&2){let t=r.$implicit,n=r.index,i=a(4);b("aria-describedby",i.getHiddenItemInfoId(n)),o(),H("id",i.getHiddenItemInfoId(n)),o(),C(" ",i.getHiddenItemInfo(t)," "),o(2),C(" ",t==null?null:t.name," "),o(2),c("ngIf",t==null?null:t.formattedQuantity),o(2),c("ngIf",t==null?null:t.formattedPrice)}}function ve(e,r){if(e&1){let t=st();p(0),g(1,"div",1),_(2),s(3,"cxTranslate"),y(),g(4,"button",2),ut("click",function(){ot(t);let i=a(3);return at(i.toggleItems())}),g(5,"div",3),_(6),y()(),g(7,"div",4),d(8,Ee,9,6,"div",5),s(9,"async"),y(),f()}if(e&2){let t=r.ngIf,n=a(3);o(2),C(" ",X(3,7,"configurator.header.items",dt(12,Vt,t))," "),o(2),b("aria-expanded",!n.hideItems)("aria-label",n.getItemsMsg(t)),o(2),C(" ",n.getButtonText()," "),o(),xt("open",!n.hideItems),o(),c("ngForOf",u(9,10,n.lineItems$))}}function Te(e,r){if(e&1&&($(0,"cx-configure-cart-entry",14),s(1,"async")),e&2){let t,n=a().ngIf,i=a(2).ngIf,l=a();c("cartEntry",i)("readOnly",(t=u(1,4,l.readonly$))!==null&&t!==void 0?t:!1)("msgBanner",!1)("disabled",n.disabled)}}function Oe(e,r){if(e&1&&(p(0),d(1,Te,2,6,"cx-configure-cart-entry",13),s(2,"async"),f()),e&2){let t=a(2).ngIf,n=a();o(),c("ngIf",u(2,1,n.shouldShowButton$)&&(t==null||t.product==null?null:t.product.configurable))}}function Re(e,r){if(e&1&&(p(0),d(1,ve,10,14,"ng-container",0),s(2,"async"),d(3,Oe,3,3,"ng-container",0),s(4,"async"),f()),e&2){let t=a(2);o(),c("ngIf",u(2,2,t.numberOfLineItems$)),o(2),c("ngIf",u(4,4,t.quantityControl$))}}function be(e,r){if(e&1&&(p(0),d(1,Re,5,6,"ng-container",0),f()),e&2){let t=r.ngIf,n=a();o(),c("ngIf",n.isBundleBasedConfigurator(t))}}var h;(function(e){let r;(function(t){t.PRODUCT="product",t.CART_ENTRY="cartEntry",t.ORDER_ENTRY="orderEntry",t.QUOTE_ENTRY="quoteEntry",t.SAVED_CART_ENTRY="savedCartEntry"})(r=e.OwnerType||(e.OwnerType={}))})(h||(h={}));var _t="_READ_ONLY",qt=function(e){return e.Success="SUCCESS",e.Info="INFO",e.Warning="WARNING",e.Error="ERROR",e}(qt||{}),L=function(e){return e.KEY="KEY",e.NAME="NAME",e.QTY="QTY",e.FORMATTED_PRICE="FORMATTED_PRICE",e.PRICE_VALUE="PRICE_VALUE",e}(L||{}),W=function(e){return e.VERSION="CI#@#VERSION",e.CURRENCY="CI#@#CURRENCY",e.LINE_ITEM="LI",e.LINE_ITEM_DELIMITER="#",e}(W||{}),Z="INITIAL",tt=class e{static getOwnerKey(r,t){if(!t||!r)throw new Error("We expect an owner ID and an owner type");return r+"/"+t}static createInitialOwner(){return{key:Z,configuratorType:Z,id:Z,type:h.OwnerType.PRODUCT}}static isInitialOwner(r){return r.configuratorType===Z}static createOwner(r,t,n="CPQCONFIGURATOR"){return{type:r,id:t,configuratorType:n,key:e.getOwnerKey(r,t)}}},G=(()=>{class e{constructor(t){this.userIdService=t}setOwnerKey(t){t.key=tt.getOwnerKey(t.type,t.id)}getComposedOwnerId(t,n){return t+"+"+n}decomposeOwnerId(t){let n=t.split("+");if(n.length!==2)throw new Error("We only expect 2 parts in ownerId, separated by +, but was: "+t);return{documentId:n[0],entryNumber:n[1]}}getCartId(t){let n=t?.user?.uid===Ot?t.guid:t?.code;if(!n)throw new Error("Cart ID is not defined");return n}hasIssues(t){return this.getNumberOfIssues(t)>0}getNumberOfIssues(t){let n=0;return t?.statusSummaryList?.forEach(i=>{if(i.status===qt.Error){let l=i.numberOfIssues;n=l||0}}),n}isAttributeBasedConfigurator(t){return t?t==="CPQCONFIGURATOR"||t==="TEXTFIELD":!1}isBundleBasedConfigurator(t){return t?t==="CLOUDCPQCONFIGURATOR":!1}isActiveCartContext(t){return(t?.location$??E).pipe(O(n=>n!==yt.SaveForLater&&n!==yt.SavedCart))}getSlotsFromLayoutConfiguration(t,n,i,l){let m=t.layoutSlots;return m?m[n][i][l].slots:[]}static{this.\u0275fac=function(n){return new(n||e)(Q(Rt))}}static{this.\u0275prov=Y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ct=(()=>{class e{hasIssues(){return this.commonConfigUtilsService.hasIssues(this.cartEntry)}getOwnerType(){return this.cartEntry.orderCode!==void 0?h.OwnerType.ORDER_ENTRY:h.OwnerType.CART_ENTRY}retrieveOwnerTypeFromAbstractOrderType(t){switch(t.type){case F.ORDER:return h.OwnerType.ORDER_ENTRY;case F.QUOTE:return h.OwnerType.QUOTE_ENTRY;case F.SAVED_CART:return h.OwnerType.SAVED_CART_ENTRY;default:return h.OwnerType.CART_ENTRY}}getEntityKey(){let t=this.cartEntry.entryNumber;if(t===void 0)throw new Error("No entryNumber present in entry");return this.cartEntry.orderCode?this.commonConfigUtilsService.getComposedOwnerId(this.cartEntry.orderCode,t):t.toString()}retrieveEntityKey(t){let n=this.cartEntry.entryNumber;if(n===void 0)throw new Error("No entryNumber present in entry");return t.type!==F.CART?this.commonConfigUtilsService.getComposedOwnerId(t.id,n):n.toString()}getRoute(){let t=this.cartEntry.product?.configuratorType;return!this.readOnly||t?.endsWith(_t)?"configure"+t:"configureOverview"+t}getDisplayOnly(){let t=this.cartEntry.product?.configuratorType;return this.readOnly||!t||t.endsWith(_t)}isDisabled(){return this.readOnly?!1:this.disabled}getResolveIssuesA11yDescription(){let t="cx-error-msg-"+this.cartEntry.entryNumber;return!this.getDisplayOnly()&&this.msgBanner?t:void 0}getQueryParams(){return{forceReload:!0,resolveIssues:this.msgBanner&&this.hasIssues()}}isInCheckout(){return this.routingService.getRouterState().pipe(O(t=>t.state.semanticRoute==="checkoutReviewOrder"))}constructor(t){this.commonConfigUtilsService=t,this.routingService=U(k),this.abstractOrderContext=U($t,{optional:!0}),this.abstractOrderKey$=this.abstractOrderContext?this.abstractOrderContext.key$:it({type:F.CART}),this.queryParams$=this.isInCheckout().pipe(O(n=>({forceReload:!0,resolveIssues:this.msgBanner&&this.hasIssues(),navigateToCheckout:n,productCode:this.cartEntry.product?.code})))}static{this.\u0275fac=function(n){return new(n||e)(I(G))}}static{this.\u0275cmp=S({type:e,selectors:[["cx-configure-cart-entry"]],inputs:{cartEntry:"cartEntry",readOnly:"readOnly",msgBanner:"msgBanner",disabled:"disabled"},decls:2,vars:3,consts:[["configureText",""],[4,"ngIf"],["class","disabled-link",4,"ngIf"],["class","link cx-action-link","cxAutoFocus","",3,"routerLink","queryParams",4,"ngIf"],[1,"disabled-link"],[4,"ngIf","ngIfThen"],["cxAutoFocus","",1,"link","cx-action-link",3,"routerLink","queryParams"]],template:function(n,i){n&1&&(d(0,ee,4,1,"ng-container",1),s(1,"async")),n&2&&c("ngIf",u(1,1,i.abstractOrderKey$))},dependencies:[P,ft,w,mt,D],encapsulation:2,changeDetection:0})}}return e})(),nt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({imports:[M,j,A,K,gt]})}}return e})(),Se=(()=>{class e{constructor(t,n){this.commonConfigUtilsService=t,this.cartItemContext=n,this.iconTypes=Mt,this.orderEntry$=this.cartItemContext?.item$??E,this.quantityControl$=this.cartItemContext?.quantityControl$??E,this.readonly$=this.cartItemContext?.readonly$??E,this.shouldShowButton$=this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext)}hasIssues(t){return this.commonConfigUtilsService.hasIssues(t)}getNumberOfIssues(t){return this.commonConfigUtilsService.getNumberOfIssues(t)}getErrorMessageId(t){return"cx-error-msg-"+t.entryNumber}static{this.\u0275fac=function(n){return new(n||e)(I(G),I(z,8))}}static{this.\u0275cmp=S({type:e,selectors:[["cx-configurator-issues-notification"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"type"],[3,"id"],["class","cx-error-msg-action",3,"cartEntry","readOnly","msgBanner","disabled",4,"ngIf"],[1,"cx-error-msg-action",3,"cartEntry","readOnly","msgBanner","disabled"]],template:function(n,i){n&1&&(d(0,oe,3,3,"ng-container",0),s(1,"async")),n&2&&c("ngIf",u(1,1,i.orderEntry$))},dependencies:[P,Dt,Ct,w,D],encapsulation:2})}}return e})(),Kt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({providers:[q({id:J.ITEM_CONFIGURATOR_ISSUES,position:V.REPLACE,component:Se})],imports:[M,j,A,K,nt]})}}return e})(),Ne=(()=>{class e{constructor(t,n){this.cartItemContext=t,this.commonConfigUtilsService=n,this.orderEntry$=this.cartItemContext?.item$??E,this.quantityControl$=this.cartItemContext?.quantityControl$??E,this.readonly$=this.cartItemContext?.readonly$??E,this.shouldShowButton$=this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext)}hasStatus(t){let n=t.configurationInfos;return n?n.length>0&&n[0].status!=="NONE":!1}isAttributeBasedConfigurator(t){let n=t.configurationInfos;return n?this.commonConfigUtilsService.isAttributeBasedConfigurator(n[0]?.configuratorType):!1}getHiddenConfigurationInfoId(t){return"cx-configuration-hidden-info-"+t.toString()}static{this.\u0275fac=function(n){return new(n||e)(I(z,8),I(G))}}static{this.\u0275cmp=S({type:e,selectors:[["cx-configurator-cart-entry-info"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","cx-intro cx-visually-hidden",4,"ngIf"],["class","cx-configuration-info",4,"ngFor","ngForOf"],[1,"cx-intro","cx-visually-hidden"],[1,"cx-configuration-info"],[1,"cx-visually-hidden",3,"id"],["aria-hidden","true",1,"cx-label"],["aria-hidden","true",1,"cx-value"],[3,"cartEntry","readOnly","msgBanner","disabled",4,"ngIf"],[3,"cartEntry","readOnly","msgBanner","disabled"]],template:function(n,i){n&1&&(d(0,fe,2,1,"ng-container",0),s(1,"async")),n&2&&c("ngIf",u(1,1,i.orderEntry$))},dependencies:[pt,P,Ct,w,D],encapsulation:2})}}return e})(),Be=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({providers:[q({id:J.ITEM_DETAILS,position:V.AFTER,component:Ne})],imports:[M,j,A,K,Kt,nt]})}}return e})(),It=function(e){return e.CONFIGURATOR="configurator",e.CONFIGURATOR_PRODUCT_CARD="configuratorProductCard",e}(It||{}),kt=(()=>{class e{getProduct(){return this.productListItemContext?this.productListItemContext.product$:this.currentProductService?this.currentProductService.getProduct(["details",It.CONFIGURATOR]):it(null)}getAriaLabelTranslationKey(t){return this.isConfiguratorTypeReadOnly(t)?"configurator.a11y.showDetailsProduct":"configurator.a11y.configureProduct"}getTranslationKey(t){return this.isConfiguratorTypeReadOnly(t)?"configurator.header.toConfigReadOnly":"configurator.header.toconfig"}isDisplayRestartDialog(t){return this.isConfiguratorTypeReadOnly(t)?"false":"true"}isReadOnlyBaseProduct(t){return this.isConfiguratorTypeReadOnly(t.configuratorType)&&this.isBaseProduct(t)}isBaseProduct(t){return!t.baseProduct||t.baseProduct===t.code}navigateToConfigurator(t){this.routingService?.go({cxRoute:"configure"+t.configuratorType,params:{ownerType:this.ownerTypeProduct,entityKey:t.code}},{queryParams:{displayRestartDialog:this.isDisplayRestartDialog(t.configuratorType),productCode:t.code}})}isConfiguratorTypeReadOnly(t){return!!t&&t.trim().endsWith(_t)}constructor(t,n){this.productListItemContext=t,this.currentProductService=n,this.nonConfigurable={configurable:!1},this.product$=this.getProduct().pipe(O(i=>i||this.nonConfigurable)),this.ownerTypeProduct=h.OwnerType.PRODUCT,this.routingService=U(k,{optional:!0})}static{this.\u0275fac=function(n){return new(n||e)(I(Ut,8),I(Ft,8))}}static{this.\u0275cmp=S({type:e,selectors:[["cx-configure-product"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"cxFeature"],["cxAutoFocus","",1,"btn","btn-primary","btn-block",3,"click"],["cxAutoFocus","",1,"btn","btn-primary","btn-block",3,"routerLink","queryParams"]],template:function(n,i){n&1&&(d(0,Ie,2,1,"ng-container",0),s(1,"async")),n&2&&c("ngIf",u(1,1,i.product$))},dependencies:[P,ft,St,w,mt,D],encapsulation:2,changeDetection:0})}}return e})(),Pe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({providers:[q({id:Lt.ITEM_ACTIONS,position:V.AFTER,component:kt})],imports:[M,gt,Nt.withConfig({cmsComponents:{ConfigureProductComponent:{component:kt}}}),j,A,K,Bt]})}}return e})(),we=(()=>{class e{constructor(){this.logger=U(bt)}retrieveLineItems(t){let n=[];if(t.configurationInfos){let i=t.configurationInfos.filter(x=>x&&(x.configurationLabel||x.configurationValue)),l=i[0]?.configurationLabel,m=i[0]?.configurationValue;l!==W.VERSION?i.forEach(x=>n.push(this.prepareLineItem(x))):l===W.VERSION&&Number(m)>=2?n=this.processConfigurationInfos(i):this.logWarning("Wrong ConfigurationInfo version")}return n}prepareLineItem(t){let n=t.configurationValue?t.configurationValue.split("x"):[];return{name:t.configurationLabel?this.removeDelimiter(t.configurationLabel):"",formattedQuantity:n.length>=1?n[0].trim():"",formattedPrice:n.length>=2?n[1].trim():""}}removeDelimiter(t){let n=t.trim();return n.charAt(n.length-1)===":"&&(n=n.substring(0,n.length-1)),n}processConfigurationInfos(t){let n=new Map;t.forEach(m=>this.processConfigurationInfoEntry(n,m));let i=new Map(Array.from(n).sort((m,x)=>m[0]-x[0]));return Array.from(i.values())}processConfigurationInfoEntry(t,n){if(n.configurationLabel){let i=n.configurationLabel.split(W.LINE_ITEM_DELIMITER);if(i[0]===W.LINE_ITEM){let l=n.configurationValue?n.configurationValue:"";this.addLineItemData(t,i,l)}}}addLineItemData(t,n,i){if(n.length===3){let l=Number(n[1]),m;switch(n[2]){case L.NAME:m=this.getOrCreateLineItem(t,l),m.name=i;break;case L.QTY:m=this.getOrCreateLineItem(t,l),m.formattedQuantity=i;break;case L.FORMATTED_PRICE:m=this.getOrCreateLineItem(t,l),m.formattedPrice=i;break;case L.KEY:case L.PRICE_VALUE:break;default:this.logWarning("Wrong LineItem format")}}else this.logWarning("Wrong LineItem format")}getOrCreateLineItem(t,n){let i=t.get(n)??{name:"",formattedQuantity:"",formattedPrice:""};return t.get(n)||t.set(n,i),i}logWarning(t){vt()&&this.logger.warn(t)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=Y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Me=(()=>{class e{constructor(t,n,i,l,m){this.commonConfigUtilsService=t,this.configCartEntryBundleInfoService=n,this.breakpointService=i,this.translation=l,this.cartItemContext=m,this.orderEntry$=this.cartItemContext?.item$??E,this.quantityControl$=this.cartItemContext?.quantityControl$??E,this.readonly$=this.cartItemContext?.readonly$??E,this.hideItems=!0,this.lineItems$=this.orderEntry$.pipe(O(x=>this.configCartEntryBundleInfoService.retrieveLineItems(x))),this.numberOfLineItems$=this.lineItems$.pipe(O(x=>x.length)),this.shouldShowButton$=this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext)}toggleItems(){this.hideItems=!this.hideItems}isBundleBasedConfigurator(t){let n=t.configurationInfos;return n?this.commonConfigUtilsService.isBundleBasedConfigurator(n[0]?.configuratorType):!1}getButtonText(t){return t||(t=""),this.hideItems?this.translation.translate("configurator.header.show").pipe(R(1)).subscribe(n=>t+=n):this.translation.translate("configurator.header.hide").pipe(R(1)).subscribe(n=>t+=n),t}getItemsMsg(t){let n="";return this.translation.translate("configurator.a11y.cartEntryBundleInfo",{items:t}).pipe(R(1)).subscribe(i=>n=i),this.getButtonText(n)}getHiddenItemInfo(t){let n="";return t.name&&t.formattedPrice&&t.formattedQuantity?this.translation.translate("configurator.a11y.cartEntryBundle",{name:t.name,price:t.formattedPrice,quantity:t.formattedQuantity}).pipe(R(1)).subscribe(i=>n=i):t.name&&t.formattedPrice?this.translation.translate("configurator.a11y.cartEntryBundleNameWithPrice",{name:t.name,price:t.formattedPrice}).pipe(R(1)).subscribe(i=>n=i):t.name&&t.formattedQuantity?this.translation.translate("configurator.a11y.cartEntryBundleNameWithQuantity",{name:t.name,quantity:t.formattedQuantity}).pipe(R(1)).subscribe(i=>n=i):this.translation.translate("configurator.a11y.cartEntryBundleName",{name:t.name}).pipe(R(1)).subscribe(i=>n=i),n}getHiddenItemInfoId(t){return"cx-item-hidden-info-"+t.toString()}static{this.\u0275fac=function(n){return new(n||e)(I(G),I(we),I(At),I(Pt),I(z,8))}}static{this.\u0275cmp=S({type:e,selectors:[["cx-configurator-cart-entry-bundle-info"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-number-items"],[3,"click"],[1,"cx-toggle-hide-items"],[1,"cx-item-infos"],["class","cx-item-info",4,"ngFor","ngForOf"],[1,"cx-item-info"],[1,"cx-visually-hidden",3,"id"],["aria-hidden","true",1,"cx-item-name"],["aria-hidden","true",1,"cx-item-quantity"],["aria-hidden","true",1,"cx-item-price"],[1,"cx-identifier"],[1,"cx-item"],[3,"cartEntry","readOnly","msgBanner","disabled",4,"ngIf"],[3,"cartEntry","readOnly","msgBanner","disabled"]],template:function(n,i){n&1&&(d(0,be,2,1,"ng-container",0),s(1,"async")),n&2&&c("ngIf",u(1,1,i.orderEntry$))},dependencies:[pt,P,Ct,w,D,wt],encapsulation:2})}}return e})(),De=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({providers:[q({id:J.ITEM_BUNDLE_DETAILS,position:V.AFTER,component:Me})],imports:[M,A,nt]})}}return e})(),Ae=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({imports:[Kt,Be,De,nt,Pe]})}}return e})(),Fe={backend:{occ:{endpoints:{product:{configurator:"products/${productCode}?fields=code,configurable,configuratorType",configuratorProductCard:"products/${productCode}?fields=code,description,images(DEFAULT)"}}},loadingScopes:{product:{list:{include:[It.CONFIGURATOR]}}}}},Le=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({providers:[Tt(Fe)]})}}return e})(),sn=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=v({imports:[Le,Ae]})}}return e})(),et;(function(e){let r;(function(t){t.CONFIGURATION="configuration",t.OVERVIEW="overview"})(r=e.PageType||(e.PageType={}))})(et||(et={}));var un=(()=>{class e{constructor(t,n){this.configUtilsService=t,this.routingService=n,this.ROUTE_FRAGMENT_CONFIGURE="configure",this.ROUTE_FRAGMENT_OVERVIEW="configureOverview"}extractRouterData(){return this.routingService.getRouterState().pipe(rt(t=>t.state.params.entityKey),rt(t=>t.nextState===void 0),O(t=>{let n=this.createOwnerFromRouterState(t),i=t.state.semanticRoute;return{owner:n,isOwnerCartEntry:n.type===h.OwnerType.CART_ENTRY,displayOnly:t.state.params.displayOnly,resolveIssues:t.state.queryParams?.resolveIssues==="true",skipConflicts:t.state.queryParams?.skipConflicts==="true",forceReload:t.state.queryParams?.forceReload==="true",expMode:t.state.queryParams?.expMode==="true",displayRestartDialog:t.state.queryParams?.displayRestartDialog==="true",configIdTemplate:t.state.queryParams?.configIdTemplate,navigationId:t.navigationId,pageType:i&&i.includes(this.ROUTE_FRAGMENT_OVERVIEW)?et.PageType.OVERVIEW:et.PageType.CONFIGURATION,navigateToCheckout:t.state.queryParams?.navigateToCheckout==="true",productCode:t.state.queryParams?.productCode}}))}createOwnerFromRouterState(t){let n=tt.createInitialOwner(),i=t.state.params;if(i.ownerType){let m=i.entityKey;n.type=i.ownerType,n.id=m}else n.type=h.OwnerType.PRODUCT,n.id=i.rootProduct;let l=t.state.semanticRoute;if(l){let m=this.getConfiguratorTypeFromSemanticRoute(l);n.configuratorType=m}return this.configUtilsService.setOwnerKey(n),n}getConfiguratorTypeFromSemanticRoute(t){if(t.startsWith(this.ROUTE_FRAGMENT_OVERVIEW))return t.split(this.ROUTE_FRAGMENT_OVERVIEW)[1];if(t.startsWith(this.ROUTE_FRAGMENT_CONFIGURE))return t.split(this.ROUTE_FRAGMENT_CONFIGURE)[1];throw new Error("Not able to determine configurator type")}static{this.\u0275fac=function(n){return new(n||e)(Q(G),Q(k))}}static{this.\u0275prov=Y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{h as a,tt as b,G as c,It as d,sn as e,et as f,un as g};
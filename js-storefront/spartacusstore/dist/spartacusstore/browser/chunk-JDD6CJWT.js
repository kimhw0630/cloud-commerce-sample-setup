import{b as Ar}from"./chunk-Z3XA4MJF.js";import{C as ct,F as Pr,G as Se,H as x,I as yt,J as kr,K as Gr,P as S,Q as Hr,S as z,c as Rr,d as mr,e as Tr,f as _r,g as Dr,h as Mr,i as Fr,j as br,k as Ur,l as wr,n as Or,q as Ee,r as ge,s as Ie,t as Vr,u as $r,v as Lr,w as jr,x as Nr,y as xr}from"./chunk-6CHLEOQA.js";import{$b as yr}from"./chunk-LRH6MGM6.js";import{$ as Qe,$c as _,$d as cr,$f as ve,Bc as Xe,Be as Ce,De as pe,E as Be,Ee as lr,Fa as de,I as p,K as We,Kd as d,Ke as vr,Lf as fr,M as F,Md as b,N as Z,Nd as sr,O as qe,Od as V,Pd as nr,Q as f,Qd as W,Rd as he,Te as $,U as m,V as ze,Wd as ar,Xc as ue,Xe as U,Yc as Ze,Ye as Er,Zc as et,Zd as it,Ze as gr,_ as Ke,_c as R,_e as Ir,a as C,ac as Je,ad as tr,ag as at,b as I,bd as er,be as or,bf as Sr,cf as L,da as ce,de as st,df as le,ed as y,f as St,fd as rt,gd as E,ha as v,hd as rr,ie as dr,j as He,jf as nt,ka as j,ke as N,kf as ft,le as ur,ma as g,pa as l,pd as ir,qa as Y,r as O,ra as oe,s as D,sa as c,ta as tt,u as Ye,v as o,ve as hr,w as X,x as M,xe as Cr,ya as B,ye as pr,ze as q}from"./chunk-VZM7NBJ6.js";var Jr="cart",h="[Multi Cart] Multi Cart Data",G="addVoucher",Jt="[Cart-entry] Add Entry",gt="[Cart-entry] Add Entry Success",Xt="[Cart-entry] Add Entry Fail",_e="[Cart-entry] Remove Entry",Zt="[Cart-entry] Remove Entry Success",De="[Cart-entry] Remove Entry Fail",Me="[Cart-entry] Update Entry",te="[Cart-entry] Update Entry Success",Fe="[Cart-entry] Update Entry Fail",dt=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Jt}},ut=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=gt}},ht=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Xt,this.error=n.error}},At=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=_e}},Rt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Zt}},mt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=De,this.error=n.error}},Tt=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Me}},_t=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=te}},Dt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Fe,this.error=n.error}},It="[Cart-voucher] Add Cart Vouchers",be="[Cart-voucher] Add Cart Voucher Fail",ee="[Cart-voucher] Add Cart Voucher Success",Xr="[Cart-voucher] Reset Add Cart Voucher",re="[Cart-voucher] Remove Cart Voucher",Ue="[Cart-voucher] Remove Cart Voucher Fail",ie="[Cart-voucher] Remove Cart Voucher Success",Mt=class extends d.EntityLoadAction{constructor(n){super(nt,G),this.payload=n,this.type=It}},Ft=class extends d.EntityFailAction{constructor(n){super(nt,G,n.error),this.payload=n,this.type=be}},bt=class extends d.EntitySuccessAction{constructor(n){super(nt,G),this.payload=n,this.type=ee}},Ut=class extends d.EntityLoaderResetAction{constructor(){super(nt,G),this.type=Xr}},wt=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=re}},Ot=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Ue,this.error=n.error}},Vt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=ie}},K="[Cart] Create Cart",we="[Cart] Create Cart Fail",Q="[Cart] Create Cart Success",Ct="[Cart] Load Cart",Zr="[Cart] Load Cart Fail",P="[Cart] Load Cart Success",Oe="[Cart] Load Carts Success",Ve="[Cart] Add Email to Cart",ti="[Cart] Add Email to Cart Fail",ei="[Cart] Add Email to Cart Success",$e="[Cart] Merge Cart",Le="[Cart] Merge Cart Success",ri="[Cart] Reset Cart Details",je="[Cart] Remove Cart",se="[Cart] Delete Cart",ne="[Cart] Delete Cart Success",Ne="[Cart] Delete Cart Fail",pt=class extends d.EntityLoadAction{constructor(n){super(h,n.tempCartId),this.payload=n,this.type=K}},$t=class extends d.EntityFailAction{constructor(n){super(h,n.tempCartId,n.error),this.payload=n,this.type=we}},Lt=class extends d.EntitySuccessAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Q}},jt=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Ve}},Nt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=ti,this.error=n.error}},xt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=ei}},A=class extends d.EntityLoadAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=Ct}},lt=class extends d.EntityFailAction{constructor(n){super(h,n.cartId,n.error),this.payload=n,this.type=Zr}},Pt=class extends d.EntitySuccessAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=P}},fe=class extends d.EntitySuccessAction{constructor(n){super(h,n.map(t=>t?.code??"")),this.payload=n,this.type=Oe}},kt=class{constructor(n){this.payload=n,this.type=$e}},Gt=class extends d.EntityRemoveAction{constructor(n){super(h,n.oldCartId),this.payload=n,this.type=Le}},Ht=class extends d.ProcessesLoaderResetAction{constructor(){super(h),this.type=ri}},H=class extends d.EntityRemoveAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=je}},Yt=class{constructor(n){this.payload=n,this.type=se}},Bt=class extends d.EntityRemoveAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=ne}},Wt=class{constructor(n){this.payload=n,this.type=Ne,this.error=n.error}},ii="[Cart] Cart Processes Increment",si="[Cart] Cart Processes Decrement",qt="[Cart] Set Active Cart Id",xe="[Cart] Clear Cart State",Pe="[Cart] Set cart type index",ke="[Cart] Set cart data",zt=class extends d.EntityProcessesIncrementAction{constructor(n){super(h,n),this.payload=n,this.type=ii}},vt=class extends d.EntityProcessesDecrementAction{constructor(n){super(h,n),this.payload=n,this.type=si}},Et=class{constructor(n){this.payload=n,this.type=qt}},Kt=class extends d.EntityRemoveAllAction{constructor(){super(h),this.type=xe}},w=class{constructor(n){this.payload=n,this.type=Pe}},ye=class extends d.EntitySuccessAction{constructor(n){super(h,n.cartId),this.payload=n,this.type=ke}},gs=Object.freeze({__proto__:null,ADD_EMAIL_TO_CART:Ve,ADD_EMAIL_TO_CART_FAIL:ti,ADD_EMAIL_TO_CART_SUCCESS:ei,AddEmailToCart:jt,AddEmailToCartFail:Nt,AddEmailToCartSuccess:xt,CART_ADD_ENTRY:Jt,CART_ADD_ENTRY_FAIL:Xt,CART_ADD_ENTRY_SUCCESS:gt,CART_ADD_VOUCHER:It,CART_ADD_VOUCHER_FAIL:be,CART_ADD_VOUCHER_SUCCESS:ee,CART_PROCESSES_DECREMENT:si,CART_PROCESSES_INCREMENT:ii,CART_REMOVE_ENTRY:_e,CART_REMOVE_ENTRY_FAIL:De,CART_REMOVE_ENTRY_SUCCESS:Zt,CART_REMOVE_VOUCHER:re,CART_REMOVE_VOUCHER_FAIL:Ue,CART_REMOVE_VOUCHER_SUCCESS:ie,CART_RESET_ADD_VOUCHER:Xr,CART_UPDATE_ENTRY:Me,CART_UPDATE_ENTRY_FAIL:Fe,CART_UPDATE_ENTRY_SUCCESS:te,CLEAR_CART_STATE:xe,CREATE_CART:K,CREATE_CART_FAIL:we,CREATE_CART_SUCCESS:Q,CartAddEntry:dt,CartAddEntryFail:ht,CartAddEntrySuccess:ut,CartAddVoucher:Mt,CartAddVoucherFail:Ft,CartAddVoucherSuccess:bt,CartProcessesDecrement:vt,CartProcessesIncrement:zt,CartRemoveEntry:At,CartRemoveEntryFail:mt,CartRemoveEntrySuccess:Rt,CartRemoveVoucher:wt,CartRemoveVoucherFail:Ot,CartRemoveVoucherSuccess:Vt,CartResetAddVoucher:Ut,CartUpdateEntry:Tt,CartUpdateEntryFail:Dt,CartUpdateEntrySuccess:_t,ClearCartState:Kt,CreateCart:pt,CreateCartFail:$t,CreateCartSuccess:Lt,DELETE_CART:se,DELETE_CART_FAIL:Ne,DELETE_CART_SUCCESS:ne,DeleteCart:Yt,DeleteCartFail:Wt,DeleteCartSuccess:Bt,LOAD_CART:Ct,LOAD_CARTS_SUCCESS:Oe,LOAD_CART_FAIL:Zr,LOAD_CART_SUCCESS:P,LoadCart:A,LoadCartFail:lt,LoadCartSuccess:Pt,LoadCartsSuccess:fe,MERGE_CART:$e,MERGE_CART_SUCCESS:Le,MergeCart:kt,MergeCartSuccess:Gt,REMOVE_CART:je,RESET_CART_DETAILS:ri,RemoveCart:H,ResetCartDetails:Ht,SET_ACTIVE_CART_ID:qt,SET_CART_DATA:ke,SET_CART_TYPE_INDEX:Pe,SetActiveCartId:Et,SetCartData:ye,SetCartTypeIndex:w}),Ae=class{},ni=(()=>{class e{constructor(t){this.adapter=t}add(t,r,i,s,a){return this.adapter.add(t,r,i,s,a)}update(t,r,i,s,a,u=!1){return this.adapter.update(t,r,i,s,a,u)}remove(t,r,i){return this.adapter.remove(t,r,i)}static{this.\u0275fac=function(r){return new(r||e)(c(Ae))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ai=(()=>{class e{constructor(t,r){this.actions$=t,this.cartEntryConnector=r,this.contextChange$=this.actions$.pipe(E(N.CURRENCY_CHANGE,N.LANGUAGE_CHANGE)),this.logger=tt(it),this.addEntry$=y(()=>this.actions$.pipe(E(Jt),o(i=>i.payload),Z(i=>this.cartEntryConnector.add(i.userId,i.cartId,i.productCode,i.quantity,i.pickupStore).pipe(o(s=>new ut(C(C({},i),s))),F(s=>O([new ht(I(C({},i),{error:U(s,this.logger)})),new A({cartId:i.cartId,userId:i.userId})])))),$(this.contextChange$))),this.removeEntry$=y(()=>this.actions$.pipe(E(_e),o(i=>i.payload),Z(i=>this.cartEntryConnector.remove(i.userId,i.cartId,i.entryNumber).pipe(o(()=>new Rt(C({},i))),F(s=>O([new mt(I(C({},i),{error:U(s,this.logger)})),new A({cartId:i.cartId,userId:i.userId})])))),$(this.contextChange$))),this.updateEntry$=y(()=>this.actions$.pipe(E(Me),o(i=>i.payload),Z(i=>this.cartEntryConnector.update(i.userId,i.cartId,i.entryNumber,i.quantity,i.pickupStore,i.pickupToDelivery).pipe(o(()=>new _t(C({},i))),F(s=>O([new Dt(I(C({},i),{error:U(s,this.logger)})),new A({cartId:i.cartId,userId:i.userId})])))),$(this.contextChange$)))}static{this.\u0275fac=function(r){return new(r||e)(c(rt),c(ni))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),Re=class{},ai=(()=>{class e{constructor(t){this.adapter=t}add(t,r,i){return this.adapter.add(t,r,i)}remove(t,r,i){return this.adapter.remove(t,r,i)}static{this.\u0275fac=function(r){return new(r||e)(c(Re))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ri=(()=>{class e{constructor(t,r,i){this.actions$=t,this.cartVoucherConnector=r,this.messageService=i,this.logger=tt(it),this.addCartVoucher$=y(()=>this.actions$.pipe(E(It),o(s=>s.payload),M(s=>this.cartVoucherConnector.add(s.userId,s.cartId,s.voucherId).pipe(o(()=>(this.showGlobalMessage("voucher.applyVoucherSuccess",s.voucherId,L.MSG_TYPE_CONFIRMATION),new bt(C({},s)))),F(a=>O([new Ft(I(C({},s),{error:U(a,this.logger)})),new vt(s.cartId),new A({userId:s.userId,cartId:s.cartId})])))))),this.removeCartVoucher$=y(()=>this.actions$.pipe(E(re),o(s=>s.payload),M(s=>this.cartVoucherConnector.remove(s.userId,s.cartId,s.voucherId).pipe(o(()=>(this.showGlobalMessage("voucher.removeVoucherSuccess",s.voucherId,L.MSG_TYPE_INFO),new Vt({userId:s.userId,cartId:s.cartId,voucherId:s.voucherId}))),F(a=>O([new Ot({error:U(a,this.logger),cartId:s.cartId,userId:s.userId,voucherId:s.voucherId}),new A({userId:s.userId,cartId:s.cartId})]))))))}showGlobalMessage(t,r,i){this.messageService.add({key:t,params:{voucherCode:r}},i)}static{this.\u0275fac=function(r){return new(r||e)(c(rt),c(ai),c(le))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})();function k(e,n){return n===b?e?.guid??"":e?.code??""}function ci(e=""){return e.startsWith("selectivecart")}function oi(e){return e.reason==="notFound"&&e.subjectType==="cart"&&!ci(e.subject)}function mi(e){return e.message==="coupon.already.redeemed"}function Ti(e){return e.message==="coupon.invalid.code.provided"}function _i(e){return e.type==="VoucherOperationError"}function Di(e){return e.type==="CartError"||e.type==="CartAddressError"||e.type==="CartEntryError"||e.type==="CartEntryGroupError"}function Yr(e){return e.startsWith("temp-")}function ot(e){return!e||typeof e=="object"&&Object.keys(e).length===0}function Mi(e){return e?!!e.match(vr):!1}function Fi(e,n){return e!==b&&n!==e}var ae=tr(Jr),J=_(ae,e=>e.carts),di=e=>_(J,n=>d.entityProcessesLoaderStateSelector(n,e)),Ge=e=>_(J,n=>d.entityValueSelector(n,e)),ui=e=>_(J,n=>d.entityIsStableSelector(n,e)),hi=e=>_(J,n=>d.entityHasPendingProcessesSelector(n,e)),Qt=e=>_(Ge(e),n=>n&&n.entries?n.entries:[]),Ci=(e,n)=>_(Qt(e),t=>t.find(r=>r.product?.code===n)),pi=_(J,e=>Object.keys(e.entities).map(n=>d.entityValueSelector(e,n))),li=_(ae,e=>e.index),vi=e=>_(li,n=>n&&n[e]),me=class{},Ei=(()=>{class e{constructor(t){this.adapter=t}loadAll(t){return this.adapter.loadAll(t)}load(t,r){return this.adapter.load(t,r)}create(t,r,i){return this.adapter.create(t,r,i)}delete(t,r){return this.adapter.delete(t,r)}save(t,r,i,s){return this.adapter.save(t,r,i,s)}addEmail(t,r,i){return this.adapter.addEmail(t,r,i)}static{this.\u0275fac=function(r){return new(r||e)(c(me))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),bi=(()=>{class e{handleLoadCartError(t,r){if(r?.error?.errors){if(r.error.errors.filter(a=>a.reason==="invalid").length>0)return D(new A(C({},t)));if(r.error.errors.filter(a=>oi(a)||a.reason==="UnknownResourceError").length>0)return D(new H({cartId:t.cartId}))}return D(new lt(I(C({},t),{error:U(r,this.logger)})))}constructor(t,r,i){this.actions$=t,this.cartConnector=r,this.store=i,this.contextChange$=this.actions$.pipe(E(N.CURRENCY_CHANGE,N.LANGUAGE_CHANGE)),this.logger=tt(it),this.loadCart$=y(()=>this.actions$.pipe(E(Ct),o(s=>s.payload),Ke(s=>s.cartId),M(s=>s.pipe(v(a=>D(a).pipe(g(this.store.pipe(R(hi(a.cartId)))))),p(([a,u])=>!u),o(([a])=>a),v(a=>this.cartConnector.load(a.userId,a.cartId).pipe(M(u=>{let T=[];return u?(T.push(new Pt(I(C({},a),{cart:u,cartId:k(u,a.userId)}))),a.cartId===V&&T.push(new H({cartId:V}))):T=[new lt(I(C({},a),{error:{}}))],T}),F(u=>this.handleLoadCartError(a,u)))))),$(this.contextChange$))),this.createCart$=y(()=>this.actions$.pipe(E(K),o(s=>s.payload),M(s=>this.cartConnector.create(s.userId,s.oldCartId,s.toMergeCartGuid).pipe(v(a=>{let u=[];return s.oldCartId&&u.push(new Gt({extraData:s.extraData,userId:s.userId,tempCartId:s.tempCartId,cartId:k(a,s.userId),oldCartId:s.oldCartId})),[new Lt(I(C({},s),{cart:a,cartId:k(a,s.userId)})),new H({cartId:s.tempCartId}),...u]}),F(a=>D(new $t(I(C({},s),{error:U(a,this.logger)})))))),$(this.contextChange$))),this.mergeCart$=y(()=>this.actions$.pipe(E($e),o(s=>s.payload),v(s=>this.cartConnector.load(s.userId,V).pipe(o(a=>{if(a?.code!==s.cartId)return new pt({userId:s.userId,oldCartId:s.cartId,toMergeCartGuid:a?a.guid:void 0,extraData:s.extraData,tempCartId:s.tempCartId})}),p(st))),$(this.contextChange$))),this.refresh$=y(()=>this.actions$.pipe(E(ee),o(s=>s.payload),Z(s=>O([new vt(s.cartId),new A({userId:s.userId,cartId:s.cartId})])))),this.refreshWithoutProcesses$=y(()=>this.actions$.pipe(E(gt,Zt,te,ie),o(s=>s.payload),o(s=>new A({userId:s.userId,cartId:s.cartId})))),this.resetCartDetailsOnSiteContextChange$=y(()=>this.actions$.pipe(E(N.LANGUAGE_CHANGE,N.CURRENCY_CHANGE),M(()=>[new Ht]))),this.addEmail$=y(()=>this.actions$.pipe(E(Ve),o(s=>s.payload),M(s=>this.cartConnector.addEmail(s.userId,s.cartId,s.email).pipe(M(()=>[new xt(C({},s)),new A({userId:s.userId,cartId:s.cartId})]),F(a=>O([new Nt(I(C({},s),{error:U(a,this.logger)})),new A({userId:s.userId,cartId:s.cartId})])))),$(this.contextChange$))),this.deleteCart$=y(()=>this.actions$.pipe(E(se),o(s=>s.payload),M(s=>this.cartConnector.delete(s.userId,s.cartId).pipe(o(()=>new Bt(C({},s))),F(a=>O([new Wt(I(C({},s),{error:U(a,this.logger)})),new A(C({},s))]))))))}static{this.\u0275fac=function(r){return new(r||e)(c(rt),c(Ei),c(et))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),gi=(()=>{class e{getActiveCartTypeOnLoadSuccess(t){if(t?.payload?.extraData?.active)return t.payload?.cart.saveTime?new w({cartType:S.ACTIVE,cartId:""}):new w({cartType:S.ACTIVE,cartId:t.meta.entityId})}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),Ui=(()=>{class e{getActiveCartTypeOnLoad(t){if(t?.payload?.cartId===V)return new w({cartType:S.ACTIVE,cartId:""})}getActiveCartTypeOnLoadSuccess(t){return this.multiCartEffectsService.getActiveCartTypeOnLoadSuccess(t)}getActiveCartTypeOnCreate(t){if(t?.payload?.extraData?.active)return new w({cartType:S.ACTIVE,cartId:t.meta.entityId})}constructor(t,r){this.actions$=t,this.multiCartEffectsService=r,this.processesIncrement$=y(()=>this.actions$.pipe(E(It),o(i=>i.payload),o(i=>new zt(i.cartId)))),this.setSelectiveId$=y(()=>this.actions$.pipe(E(P),o(i=>{switch(i.type){case P:{let s=i.payload;if(ci(s.cartId))return new w({cartType:S.SELECTIVE,cartId:s.cartId});break}}}),p(st))),this.setActiveCartId$=y(()=>this.actions$.pipe(E(P,Ct,Q,K,qt),o(i=>{switch(i.type){case Ct:return this.getActiveCartTypeOnLoad(i);case P:return this.getActiveCartTypeOnLoadSuccess(i);case K:return this.getActiveCartTypeOnCreate(i);case Q:return new w({cartType:i?.payload?.extraData?.active?S.ACTIVE:S.NEW_CREATED,cartId:i.meta.entityId});case qt:return new w({cartType:S.ACTIVE,cartId:i.payload})}}),p(st)))}static{this.\u0275fac=function(r){return new(r||e)(c(rt),c(gi))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),wi=[Ai,Ri,bi,Ui],Br={[S.ACTIVE]:""};function Oi(e=Br,n){switch(n.type){case Pe:return I(C({},e),{[n.payload.cartType]:n.payload.cartId});case je:case ne:return n.payload?.cartId===e[S.ACTIVE]?I(C({},e),{[S.ACTIVE]:""}):e;case xe:return Br}return e}var Vi=void 0;function $i(e=Vi,n){switch(n.type){case Oe:return n.payload;case P:case Q:case ke:return n.payload.cart}return e}function Li(e){return function(n,t){return t.type===nr.LOGOUT&&(n=void 0),e(n,t)}}var ji=[Li],Ii=new oe("MultiCartReducers");function Ni(){return{carts:d.entityProcessesLoaderReducer(h,$i),index:Oi}}var xi={provide:Ii,useFactory:Ni},Is=Object.freeze({__proto__:null,getCartEntitySelectorFactory:di,getCartEntriesSelectorFactory:Qt,getCartEntrySelectorFactory:Ci,getCartHasPendingProcessesSelectorFactory:hi,getCartIdByTypeFactory:vi,getCartIsStableSelectorFactory:ui,getCartSelectorFactory:Ge,getCartTypeIndex:li,getCartsSelectorFactory:pi,getMultiCartEntities:J,getMultiCartState:ae}),Pi=(()=>{class e{constructor(t,r,i){this.statePersistenceService=t,this.store=r,this.siteContextParamsService=i,this.subscription=new St}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:"cart",state$:this.getCartState(),context$:this.siteContextParamsService.getValues([dr]),storageType:hr.LOCAL_STORAGE,onRead:t=>this.onRead(t)}))}getCartState(){return this.store.pipe(p(t=>!!t.cart),R(ae),p(t=>!!t),o(t=>t.index),ze("Active"),o(t=>({active:t[S.ACTIVE]??""})))}onRead(t){this.store.dispatch(new Kt),t?this.store.dispatch(new Et(t.active)):this.store.dispatch(new Et(""))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(r){return new(r||e)(c(Er),c(et),c(fr))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ki(e,n){return()=>Ye(n.getStable("context").pipe(j(()=>{e.initSync()})))}function Gi(){return n=>(t,r)=>{let i=C({},t);return r.type==="@ngrx/store/init"&&(i.cart=I(C({},i.cart),{index:{[S.ACTIVE]:void 0}})),n(i,r)}}var Hi=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=B({type:e})}static{this.\u0275inj=Y({providers:[{provide:lr,useFactory:ki,deps:[Pi,Ir],multi:!0},{provide:Ze,useFactory:Gi,multi:!0}]})}}return e})(),Te=class{},Si=(()=>{class e{constructor(t){this.adapter=t}validate(t,r){return this.adapter.validate(t,r)}static{this.\u0275fac=function(r){return new(r||e)(c(Te))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Yi=(()=>{class e{constructor(t,r,i,s){this.actionsSubject=t,this.event=r,this.activeCartService=i,this.stateEventService=s,this.register()}register(){this.registerCreateCart(),this.registerAddEntry(),this.registerRemoveEntry(),this.registerUpdateEntry(),this.registerDeleteCart(),this.registerAddCartVoucher(),this.registerRemoveCartVoucher(),this.registerMergeCartSuccess()}registerAddEntry(){this.registerMapped({action:Jt,event:_r}),this.registerMapped({action:gt,event:Dr}),this.registerMapped({action:Xt,event:Mr})}registerRemoveEntry(){this.registerMapped({action:Zt,event:br}),this.registerMapped({action:De,event:Fr})}registerUpdateEntry(){this.registerMapped({action:te,event:Ur}),this.registerMapped({action:Fe,event:wr})}registerMergeCartSuccess(){this.registerMapped({action:Le,event:Or})}registerCreateCart(){this.stateEventService.register({action:K,event:Rr}),this.stateEventService.register({action:Q,event:mr}),this.stateEventService.register({action:we,event:Tr})}registerDeleteCart(){this.stateEventService.register({action:se,event:Ee,factory:t=>q(Ee,I(C({},t.payload),{cartCode:t.payload.cartId}))}),this.stateEventService.register({action:ne,event:ge,factory:t=>q(ge,I(C({},t.payload),{cartCode:t.payload.cartId}))}),this.stateEventService.register({action:Ne,event:Ie,factory:t=>q(Ie,I(C({},t.payload),{cartCode:t.payload.cartId}))})}registerAddCartVoucher(){this.stateEventService.register({action:It,event:Vr}),this.stateEventService.register({action:ee,event:$r}),this.stateEventService.register({action:be,event:Lr})}registerRemoveCartVoucher(){this.stateEventService.register({action:re,event:jr}),this.stateEventService.register({action:ie,event:Nr}),this.stateEventService.register({action:Ue,event:xr})}registerMapped(t){let r=this.getAction(t.action).pipe(v(i=>D(i).pipe(g(this.activeCartService.getActive(),this.activeCartService.getActiveCartId()))),p(([i,s,a])=>i.payload.cartId===a),o(([i,s])=>q(t.event,I(C({},i.payload),{cartCode:s.code,entry:i.payload.entry?i.payload.entry:s.entries?.[Number(i.payload.entryNumber)]}))));return this.event.register(t.event,r)}getAction(t){return this.actionsSubject.pipe(E(...[].concat(t)))}static{this.\u0275fac=function(r){return new(r||e)(c(ue),c(Ce),c(x),c(Sr))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Bi=(()=>{class e{constructor(t){}static{this.\u0275fac=function(r){return new(r||e)(c(Yi))}}static{this.\u0275mod=B({type:e})}static{this.\u0275inj=Y({})}}return e})(),Wi=(()=>{class e{constructor(t){this.eventService=t,this.register()}register(){this.eventService.register(Se,this.buildCartPageEvent())}buildCartPageEvent(){return this.eventService.get(yr).pipe(p(t=>t.semanticRoute==="cart"),o(t=>q(Se,{navigation:t})))}static{this.\u0275fac=function(r){return new(r||e)(c(Ce))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),qi=(()=>{class e{constructor(t){}static{this.\u0275fac=function(r){return new(r||e)(c(Wi))}}static{this.\u0275mod=B({type:e})}static{this.\u0275inj=Y({})}}return e})(),Wr=(()=>{class e{constructor(t,r,i){this.multiCartFacade=t,this.userIdService=r,this.winRef=i,this.subscription=new St,this.activeCartId$=this.userIdService.getUserId().pipe(f(1),v(()=>this.multiCartFacade.getCartIdByType(S.ACTIVE)),p(s=>s!==void 0),o(s=>s===""?V:s)),this.cartEntity$=this.activeCartId$.pipe(v(s=>this.multiCartFacade.getCartEntity(s))),this.shouldLoadCartOnCodeFlow=!0,this.checkInitLoad=void 0,this.initActiveCart(),this.detectUserChange()}initActiveCart(){let t=this.cartEntity$.pipe(o(i=>({cart:i.value,isStable:!i.loading&&i.processesCount===0,loaded:!!((i.error||i.success)&&!i.loading)})),p(({isStable:i,cart:s})=>i||ot(s))),r=t.pipe(g(this.activeCartId$,this.userIdService.getUserId()),j(([{cart:i,loaded:s,isStable:a},u,T])=>{a&&ot(i)&&!s&&!Yr(u)&&this.shouldLoadCartOnCodeFlow&&this.load(u,T)}));this.activeCart$=We(()=>r.subscribe(),()=>t).pipe(o(({cart:i})=>i||{}),m(),ce({bufferSize:1,refCount:!0}))}detectUserChange(){this.subscription.add(this.userIdService.getUserId().pipe(Qe(),g(this.activeCartId$)).subscribe(([[t,r],i])=>{Fi(r,t)&&this.loadOrMerge(i,r,t)})),this.isLoggedInWithCodeFlow()&&(this.shouldLoadCartOnCodeFlow=!1,this.subscription.add(this.userIdService.getUserId().pipe(g(this.activeCartId$)).subscribe(([t,r])=>{this.loadOrMerge(r,t,b),this.winRef?.localStorage?.removeItem(he)})))}getActive(){return this.activeCart$}takeActive(){return this.isStable().pipe(p(t=>t),v(()=>this.getActive()),p(t=>!!t),f(1))}getActiveCartId(){return this.activeCart$.pipe(g(this.userIdService.getUserId()),o(([t,r])=>k(t,r)),m())}takeActiveCartId(){return this.isStable().pipe(p(t=>t),v(()=>this.getActiveCartId()),p(t=>!!t),f(1))}getEntries(){return this.activeCartId$.pipe(v(t=>this.multiCartFacade.getEntries(t)),m())}getLastEntry(t){return this.activeCartId$.pipe(v(r=>this.multiCartFacade.getLastEntry(r,t)),m())}getLoading(){return this.cartEntity$.pipe(o(t=>!!t.loading),m())}isStable(){return this.activeCartId$.pipe(v(t=>this.multiCartFacade.isStable(t)))}load(t,r){r===b&&t===V||this.multiCartFacade.loadCart({userId:r,cartId:t,extraData:{active:!0}})}loadOrMerge(t,r,i){t===V||i!==b?this.multiCartFacade.loadCart({userId:r,cartId:t,extraData:{active:!0}}):pe(this.isGuestCart())?this.guestCartMerge(t):this.multiCartFacade.mergeToCurrentCart({userId:r,cartId:t,extraData:{active:!0}})}guestCartMerge(t){this.getEntries().pipe(f(1)).subscribe(r=>{this.multiCartFacade.deleteCart(t,b),this.addEntriesGuestMerge(r)})}addEntriesGuestMerge(t){let r=t.map(i=>({productCode:i.product?.code??"",quantity:i.quantity??0}));this.requireLoadedCart(!0).pipe(g(this.userIdService.getUserId())).subscribe(([i,s])=>{this.multiCartFacade.addEntries(s,k(i,s),r)})}isCartCreating(t,r){return Yr(r)&&(t.loading||t.success||t.error)}isLoggedInWithCodeFlow(){return!!this.winRef?.localStorage?.getItem(he)}requireLoadedCart(t=!1){this.checkInitLoad=this.checkInitLoad===void 0;let r=(t?this.cartEntity$.pipe(p(()=>!pe(this.isGuestCart()))):this.cartEntity$).pipe(p(i=>!i.loading||!!this.checkInitLoad));return this.activeCartId$.pipe(g(r),p(([i,s])=>!this.isCartCreating(s,i)),o(([,i])=>i),f(1)).pipe(g(this.userIdService.getUserId()),j(([i,s])=>{ot(i.value)&&s!==b&&!i.loading&&this.load(V,s),this.checkInitLoad=!1}),v(()=>r),g(this.userIdService.getUserId()),p(([i,s])=>!!(s===b||i.success||i.error)),f(1)).pipe(j(([i,s])=>{ot(i.value)&&this.multiCartFacade.createCart({userId:s,extraData:{active:!0}})}),v(()=>r),p(i=>!!(i.success||i.error)),g(this.activeCartId$),p(([i,s])=>!this.isCartCreating(i,s)),o(([i])=>i.value),p(i=>!ot(i)),f(1))}addEntry(t,r,i){this.requireLoadedCart().pipe(g(this.userIdService.getUserId())).subscribe(([s,a])=>{this.multiCartFacade.addEntry(a,k(s,a),t,r,i)})}removeEntry(t){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([r,i])=>{this.multiCartFacade.removeEntry(i,r,t.entryNumber)})}updateEntry(t,r,i,s=!1){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([a,u])=>{this.multiCartFacade.updateEntry(u,a,t,r,i,s)})}getEntry(t){return this.activeCartId$.pipe(v(r=>this.multiCartFacade.getEntry(r,t)),m())}addEmail(t){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([r,i])=>{this.multiCartFacade.assignEmail(r,i,t)})}getAssignedUser(){return this.activeCart$.pipe(o(t=>t.user))}isGuestCart(t){return t?D(this.isCartUserGuest(t)):this.activeCart$.pipe(o(r=>this.isCartUserGuest(r)),m())}isCartUserGuest(t){let r=t.user;return!!(r&&(r.name===sr||Mi(r.uid?.split("|").slice(1).join("|"))))}addEntries(t){let r=t.map(i=>({productCode:i.product?.code??"",quantity:i.quantity??0}));this.requireLoadedCart().pipe(g(this.userIdService.getUserId())).subscribe(([i,s])=>{i&&this.multiCartFacade.addEntries(s,k(i,s),r)})}reloadActiveCart(){X([this.getActiveCartId(),this.userIdService.takeUserId()]).pipe(f(1),o(([t,r])=>{this.multiCartFacade.loadCart({cartId:t,userId:r,extraData:{active:!0}})})).subscribe()}hasPickupItems(){return this.getActive().pipe(o(t=>t.pickupItemsQuantity?t.pickupItemsQuantity>0:!1))}hasDeliveryItems(){return this.getActive().pipe(o(t=>t.deliveryItemsQuantity?t.deliveryItemsQuantity>0:!1))}getPickupEntries(){return this.getEntries().pipe(o(t=>t.filter(r=>r.deliveryPointOfService!==void 0)))}getDeliveryEntries(){return this.getEntries().pipe(o(t=>t.filter(r=>r.deliveryPointOfService===void 0)))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(r){return new(r||e)(c(ct),c(W),c(ar))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),fi=(()=>{class e{constructor(t){this.routingService=t,this.NAVIGATION_SKIPS=2,this.navigationIdCount=0,this.subscription=new St,this.cartValidationResult$=new He(1),this.checkForValidationResultClear$=this.routingService.getRouterState().pipe(g(this.cartValidationResult$),j(([r,i])=>{this.navigationIdCount+this.NAVIGATION_SKIPS<=r.navigationId&&i.length&&(this.cartValidationResult$.next([]),this.navigationIdCount=r.navigationId)})),this.setInitialState()}ngOnDestroy(){this.subscription.unsubscribe()}setInitialState(){this.setNavigationIdStep(),this.subscription.add(this.checkForValidationResultClear$.subscribe())}updateValidationResultAndRoutingId(t){this.cartValidationResult$.next(t),this.setNavigationIdStep()}setNavigationIdStep(){this.routingService.getRouterState().pipe(f(1)).subscribe(t=>this.navigationIdCount=t.navigationId)}static{this.\u0275fac=function(r){return new(r||e)(c(or))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),qr=(()=>{class e{constructor(t,r,i,s,a){this.cartValidationConnector=t,this.command=r,this.userIdService=i,this.activeCartFacade=s,this.cartValidationStateService=a,this.validateCartCommand=this.command.create(()=>X([this.activeCartFacade.getActiveCartId(),this.userIdService.takeUserId(),this.activeCartFacade.isStable()]).pipe(p(([u,T,yi])=>yi),f(1),v(([u,T])=>this.cartValidationConnector.validate(u,T))),{strategy:Cr.CancelPrevious})}validateCart(){return this.validateCartCommand.execute()}getValidationResults(){return this.cartValidationStateService.cartValidationResult$}static{this.\u0275fac=function(r){return new(r||e)(c(Si),c(pr),c(W),c(x),c(fi))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),zr=(()=>{class e{constructor(t,r,i){this.store=t,this.activeCartFacade=r,this.userIdService=i}addVoucher(t,r){this.combineUserAndCartId(r).subscribe(([i,s])=>this.store.dispatch(new Mt({userId:i,cartId:s,voucherId:t})))}removeVoucher(t,r){this.combineUserAndCartId(r).subscribe(([i,s])=>this.store.dispatch(new wt({userId:i,cartId:s,voucherId:t})))}getAddVoucherResultError(){return this.store.pipe(R(ft.getProcessErrorFactory(G)))}getAddVoucherResultSuccess(){return this.store.pipe(R(ft.getProcessSuccessFactory(G)))}getAddVoucherResultLoading(){return this.store.pipe(R(ft.getProcessLoadingFactory(G)))}resetAddVoucherProcessingState(){this.store.dispatch(new Ut)}combineUserAndCartId(t){return t?this.userIdService.getUserId().pipe(f(1),o(r=>[r,t])):X([this.userIdService.getUserId(),this.activeCartFacade.getActiveCartId()]).pipe(f(1))}static{this.\u0275fac=function(r){return new(r||e)(c(et),c(x),c(W))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),Kr=(()=>{class e{constructor(t,r){this.store=t,this.userIdService=r}getCart(t){return this.store.pipe(R(Ge(t)))}getCarts(){return this.store.pipe(R(pi))}getCartEntity(t){return this.store.pipe(R(di(t)))}isStable(t){return this.store.pipe(R(ui(t)),qe(r=>r?Be(0):D(void 0)),m())}generateTempCartId(){return`temp-${Math.random().toString(36).substring(2,11)}`}createCart({userId:t,oldCartId:r,toMergeCartGuid:i,extraData:s}){let a=this.generateTempCartId();return this.store.dispatch(new pt({extraData:s,userId:t,oldCartId:r,toMergeCartGuid:i,tempCartId:a})),this.getCartIdByType(s?.active?S.ACTIVE:S.NEW_CREATED).pipe(v(u=>this.getCart(u)),p(st))}mergeToCurrentCart({userId:t,cartId:r,extraData:i}){let s=this.generateTempCartId();this.store.dispatch(new kt({userId:t,cartId:r,extraData:i,tempCartId:s}))}loadCart({cartId:t,userId:r,extraData:i}){this.store.dispatch(new A({userId:r,cartId:t,extraData:i}))}getEntries(t){return this.store.pipe(R(Qt(t)))}getLastEntry(t,r){return this.store.pipe(R(Qt(t)),o(i=>{let s=i.filter(a=>a.product?.code===r);return s?s[s.length-1]:void 0}))}addEntry(t,r,i,s,a){this.store.dispatch(new dt({userId:t,cartId:r,productCode:i,quantity:s,pickupStore:a}))}addEntries(t,r,i){i.forEach(s=>{this.store.dispatch(new dt({userId:t,cartId:r,productCode:s.productCode,quantity:s.quantity}))})}removeEntry(t,r,i){this.store.dispatch(new At({userId:t,cartId:r,entryNumber:`${i}`}))}updateEntry(t,r,i,s,a,u=!1){s!==void 0&&s<=0?this.removeEntry(t,r,i):this.store.dispatch(new Tt({userId:t,cartId:r,pickupStore:a,pickupToDelivery:u,entryNumber:`${i}`,quantity:s}))}getEntry(t,r){return this.store.pipe(R(Ci(t,r)))}assignEmail(t,r,i){this.store.dispatch(new jt({userId:r,cartId:t,email:i}))}removeCart(t){this.store.dispatch(new H({cartId:t}))}deleteCart(t,r){this.store.dispatch(new Yt({userId:r,cartId:t}))}reloadCart(t,r){this.userIdService.takeUserId().subscribe(i=>this.store.dispatch(new A({userId:i,cartId:t,extraData:r})))}getCartIdByType(t){return this.store.pipe(R(vi(t)),m())}static{this.\u0275fac=function(r){return new(r||e)(c(et),c(W))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),Qr=(()=>{class e{constructor(t,r,i,s){this.userProfileFacade=t,this.multiCartFacade=r,this.baseSiteService=i,this.userIdService=s}getCart(){return this.selectiveCart$||(this.selectiveCart$=X([this.getSelectiveCartId(),this.userProfileFacade.get(),this.userIdService.getUserId(),this.baseSiteService.getActive()]).pipe(m(),j(([t,r,i,s])=>{!t&&i!==b&&r?.customerId&&this.multiCartFacade.loadCart({userId:i,cartId:`selectivecart${s}${r.customerId}`})}),p(([t])=>!!t),v(([t])=>this.multiCartFacade.getCart(t)),ce({bufferSize:1,refCount:!0}))),this.selectiveCart$}getEntries(){return this.getSelectiveCartId().pipe(v(t=>this.multiCartFacade.getEntries(t)))}isStable(){return this.getSelectiveCartId().pipe(v(t=>this.multiCartFacade.isStable(t)))}addEntry(t,r){this.getSelectiveIdWithUserId().subscribe(([i,s])=>{this.multiCartFacade.addEntry(s,i,t,r)})}removeEntry(t){this.getSelectiveIdWithUserId().subscribe(([r,i])=>{this.multiCartFacade.removeEntry(i,r,t.entryNumber)})}updateEntry(t,r){this.getSelectiveIdWithUserId().subscribe(([i,s])=>{this.multiCartFacade.updateEntry(s,i,t,r)})}getEntry(t){return this.getSelectiveCartId().pipe(v(r=>this.multiCartFacade.getEntry(r,t)))}getSelectiveCartId(){return this.multiCartFacade.getCartIdByType(S.SELECTIVE)}getSelectiveIdWithUserId(){return this.getSelectiveCartId().pipe(m(),g(this.userIdService.getUserId()),f(1))}static{this.\u0275fac=function(r){return new(r||e)(c(Ar),c(ct),c(ur),c(W))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})(),zi=[Wr,{provide:x,useExisting:Wr},zr,{provide:kr,useExisting:zr},Kr,{provide:ct,useExisting:Kr},Qr,{provide:Gr,useExisting:Qr},qr,{provide:yt,useExisting:qr}],Ki=(()=>{class e extends at{constructor(){super(...arguments),this.responseStatus=ve.BAD_REQUEST}getPriority(){return 0}hasMatch(t){return super.hasMatch(t)&&this.getErrors(t).some(Di)}handleError(t,r){this.handleCartNotFoundError(t,r),this.handleOtherCartErrors(t,r)}handleCartNotFoundError(t,r){this.getErrors(r).filter(i=>oi(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.cartNotFound"},L.MSG_TYPE_ERROR)})}handleOtherCartErrors(t,r){this.getErrors(r).filter(i=>i.reason!=="notFound"||i.subjectType!=="cart").forEach(i=>{this.globalMessageService.add(i.message?i.message:{key:"httpHandlers.otherCartErrors"},L.MSG_TYPE_ERROR)})}getErrors(t){return(t.error?.errors||[]).filter(r=>r.type!=="JaloObjectNoLongerValidError")}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=de(e)))(i||e)}})()}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Qi=(()=>{class e extends at{constructor(){super(...arguments),this.responseStatus=ve.BAD_REQUEST}getPriority(){return 0}hasMatch(t){return super.hasMatch(t)&&this.getErrors(t).some(_i)}handleError(t,r){this.handleVoucherExceededError(t,r),this.handleVoucherInvalidError(t,r)}handleVoucherExceededError(t,r){this.getErrors(r).filter(i=>mi(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.voucherExceeded"},L.MSG_TYPE_ERROR)})}handleVoucherInvalidError(t,r){this.getErrors(r).filter(i=>Ti(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.invalidCodeProvided"},L.MSG_TYPE_ERROR)})}getErrors(t){return(t.error?.errors||[]).filter(r=>r.type!=="JaloObjectNoLongerValidError")}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=de(e)))(i||e)}})()}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ji=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=B({type:e})}static{this.\u0275inj=Y({providers:[xi,gi],imports:[Xe,gr,er.forFeature(Jr,Ii,{metaReducers:ji}),rr.forFeature(wi)]})}}return e})(),Ss=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=B({type:e})}static{this.\u0275inj=Y({providers:[Ei,ni,ai,Si,...zi,{provide:at,useExisting:Ki,multi:!0},{provide:at,useExisting:Qi,multi:!0}],imports:[Bi,Ji,Hi,qi]})}}return e})(),fs=new oe("CartValidationNormalizer"),Xi=(()=>{class e{constructor(t){this.config=t}isSelectiveCartEnabled(){return!!this.config?.cart?.selectiveCart?.enabled}isCartValidationEnabled(){return!!this.config?.cart?.validation?.enabled}static{this.\u0275fac=function(r){return new(r||e)(c(Pr))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ys=(()=>{class e{constructor(t,r,i,s,a,u,T){this.cartValidationService=t,this.semanticPathService=r,this.router=i,this.globalMessageService=s,this.activeCartService=a,this.cartValidationStateService=u,this.cartConfigService=T,this.GLOBAL_MESSAGE_TIMEOUT=1e4}canActivate(){return this.cartConfigService.isCartValidationEnabled()?this.cartValidationService.validateCart().pipe(g(this.activeCartService.getEntries()),o(([t,r])=>{if(this.cartValidationStateService.updateValidationResultAndRoutingId(t.cartModifications??[]),t.cartModifications!==void 0&&t.cartModifications.length!==0){let i,s=t.cartModifications[0];return r.length===1&&r[0].product?.code===s.entry?.product?.code&&s.statusCode===Hr.NO_STOCK?i={key:"validation.cartEntryRemoved",params:{name:s.entry?.product?.name}}:i={key:"validation.cartEntriesChangeDuringCheckout"},this.globalMessageService.add(i,L.MSG_TYPE_ERROR,this.GLOBAL_MESSAGE_TIMEOUT),this.activeCartService.reloadActiveCart(),this.router.parseUrl(this.semanticPathService.get("cart")??"")}return!0})):D(!0)}static{this.\u0275fac=function(r){return new(r||e)(c(yt),c(cr),c(ir),c(le),c(x),c(fi),c(Xi))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),As=(()=>{class e{constructor(t){this.actionsSubject=t,this.logger=tt(it)}getResults(t){return this.actionsSubject.pipe(E(gt,Xt),p(r=>r.payload.cartId===t),o(r=>this.mapMessages(r)))}mapMessages(t){let{productCode:r}=t.payload;if(t instanceof ut){let{quantity:i,quantityAdded:s,entry:a,statusCode:u}=t.payload;if(u===z.LOW_STOCK)return{productCode:r,statusCode:u,productName:a?.product?.name,quantity:i,quantityAdded:s};if(u===z.SUCCESS||u===z.NO_STOCK)return{productCode:r,statusCode:u,productName:a?.product?.name}}else if(t instanceof ht){let{error:i}=t.payload;if(i?.details[0]?.type==="UnknownIdentifierError")return{productCode:r,statusCode:z.UNKNOWN_IDENTIFIER}}return Je()&&this.logger.warn("Unrecognized cart add entry action type while mapping messages",t),{productCode:r,statusCode:z.UNKNOWN_ERROR}}static{this.\u0275fac=function(r){return new(r||e)(c(ue))}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{h as a,gs as b,Ae as c,Re as d,k as e,ci as f,ot as g,me as h,Ei as i,Is as j,Te as k,Ss as l,fs as m,Xi as n,ys as o,As as p};

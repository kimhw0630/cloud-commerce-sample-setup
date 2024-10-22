import{ga as h,ha as m,oc as I}from"./chunk-FKA4XEVN.js";import{Cd as y,Dg as c,Gd as u,Hd as A,Ie as l,Je as p,f as R,qa as s,ra as C,sa as i,ta as d,yd as f,za as v}from"./chunk-ZJZHXN4F.js";var S={cart:{validation:{enabled:!1},selectiveCart:{enabled:!1}}},_={routing:{routes:{cart:{paths:["cart"]}}}},M=Symbol("ORDER_ENTRIES_CONTEXT"),r=class extends l{},ee=(()=>{class e extends r{static{this.type="CreateCartEvent"}}return e})(),te=(()=>{class e extends r{static{this.type="CreateCartSuccessEvent"}}return e})(),ne=(()=>{class e extends r{static{this.type="CreateCartFailEvent"}}return e})(),re=(()=>{class e extends r{static{this.type="CartAddEntryEvent"}}return e})(),ae=(()=>{class e extends r{static{this.type="CartAddEntrySuccessEvent"}}return e})(),se=(()=>{class e extends r{static{this.type="CartAddEntryFailEvent"}}return e})(),ie=(()=>{class e extends r{static{this.type="CartRemoveEntryFailEvent"}}return e})(),ce=(()=>{class e extends r{static{this.type="CartRemoveEntrySuccessEvent"}}return e})(),oe=(()=>{class e extends r{static{this.type="CartUpdateEntrySuccessEvent"}}return e})(),de=(()=>{class e extends r{static{this.type="CartUpdateEntryFailEvent"}}return e})(),Ee=(()=>{class e extends l{static{this.type="CartUiEventAddToCart"}}return e})(),Ce=(()=>{class e extends r{static{this.type="MergeCartSuccessEvent"}}return e})(),F=(()=>{class e extends r{static{this.type="LoadCartEvent"}}return e})(),N=(()=>{class e extends r{static{this.type="RemoveCartEvent"}}return e})(),ve=(()=>{class e extends r{static{this.type="DeleteCartEvent"}}return e})(),ue=(()=>{class e extends r{static{this.type="DeleteCartSuccessEvent"}}return e})(),le=(()=>{class e extends r{static{this.type="DeleteCartFailEvent"}}return e})(),g=(()=>{class e extends r{static{this.type="AddCartVoucherEvent"}}return e})(),Re=(()=>{class e extends g{static{this.type="AddCartVoucherSuccessEvent"}}return e})(),fe=(()=>{class e extends g{static{this.type="AddCartVoucherFailEvent"}}return e})(),D=(()=>{class e extends r{static{this.type="RemoveCartVoucherEvent"}}return e})(),ye=(()=>{class e extends D{static{this.type="RemoveCartVoucherSuccessEvent"}}return e})(),Ae=(()=>{class e extends D{static{this.type="RemoveCartVoucherFailEvent"}}return e})(),T="cartBase",o="cartBaseCore",x="miniCart",O="addToCart",V=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:o,methods:["getCart","getCarts","getCartEntity","isStable","createCart","mergeToCurrentCart","loadCart","getEntries","getLastEntry","addEntry","addEntries","removeEntry","updateEntry","getEntry","assignEmail","removeCart","deleteCart","reloadCart","getCartIdByType"],async:!0}),providedIn:"root"})}}return e})(),U=(()=>{class e{constructor(a,t){this.eventService=a,this.multiCartFacade=t,this.subscriptions=new R,this.onCartBaseAction()}onCartBaseAction(){this.subscriptions.add(this.eventService.get(F).subscribe(({userId:a,cartId:t})=>{a&&t&&this.multiCartFacade.loadCart({userId:a,cartId:t})})),this.subscriptions.add(this.eventService.get(N).subscribe(({cartId:a})=>{this.multiCartFacade.removeCart(a)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(t){return new(t||e)(d(p),d(V))}}static{this.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),L=(()=>{class e{constructor(a){}static{this.\u0275fac=function(t){return new(t||e)(d(U))}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=C({})}}return e})(),w=new i("ActiveCartOrderEntriesContext");function b(){return{featureModules:{[T]:{cmsComponents:["CartApplyCouponComponent","CartComponent","CartProceedToCheckoutComponent","CartTotalsComponent","SaveForLaterComponent","ClearCartComponent"]},[x]:{cmsComponents:["MiniCartComponent"]},[O]:{cmsComponents:["ProductAddToCartComponent"]},[o]:T}}}var pe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=C({providers:[A(b),u(S),u(_)],imports:[L,f.forChild([{path:null,canActivate:[m],component:h,data:{cxRoute:"cart",cxContext:{[M]:w}}}])]})}}return e})(),he=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:function(t){let E=null;return t?E=new(t||e):E=d(y),E},providedIn:"root"})}}return e})(),me=(()=>{class e extends I{static{this.type="CartPageEvent"}}return e})(),Ie=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:o,methods:["getActive","takeActive","getActiveCartId","takeActiveCartId","getEntries","getLastEntry","getLoading","isStable","addEntry","removeEntry","updateEntry","getEntry","addEmail","getAssignedUser","isGuestCart","addEntries","requireLoadedCart","reloadActiveCart","hasPickupItems","hasDeliveryItems","getPickupEntries","getDeliveryEntries"],async:!0}),providedIn:"root"})}}return e})(),Te=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:o,methods:["validateCart","getValidationResults"]}),providedIn:"root"})}}return e})(),ge=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:o,methods:["addVoucher","removeVoucher","getAddVoucherResultError","getAddVoucherResultSuccess","getAddVoucherResultLoading","resetAddVoucherProcessingState"],async:!0}),providedIn:"root"})}}return e})(),De=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:o,methods:["getCart","getEntries","isStable","addEntry","removeEntry","updateEntry","getEntry"],async:!0}),providedIn:"root"})}}return e})(),Se=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:e.\u0275fac})}}return e})(),k=function(e){return e.ITEM="cx-cart-item",e.LIST_ITEM="cx-cart-item-list-row",e.ITEM_DETAILS="cx-cart-item.details",e.ITEM_CONFIGURATOR_ISSUES="cx-configurator-issues-notification",e.ITEM_BUNDLE_DETAILS="cx-cart-item.bundle-details",e.ITEM_DELIVERY_DETAILS="cx-cart-item.delivery-details",e.ORDER_SUMMARY="cx-order-summary",e.CART_ITEM_LIST="cx-cart-item-list",e.ADD_TO_CART_CONTAINER="cx-add-to-cart-container",e.PICKUP_INFO="cx-pickup-info",e.ADD_TO_CART_PICKUP_OPTION="cx-add-to-cart-pickup-option",e.DELIVERY_MODE="cx-delivery-mode",e.ORDER_OVERVIEW="cx-order-overview",e.CPQ_QUOTE_MODULE="cx-cpq-quote",e.CPQ_QUOTE_HEADING="cx-cpq-quote-heading",e.CPQ_QUOTE="cx-cpq-quote-offer",e}(k||{}),j=function(e){return e.ActiveCart="CART",e.Checkout="CHECKOUT",e.Order="ORDER",e.SaveForLater="SAVE_FOR_LATER",e.SavedCart="SAVED_CART",e}(j||{}),P=function(e){return e.CART="Cart",e.ORDER="Order",e.QUOTE="Quote",e.SAVED_CART="SavedCart",e}(P||{}),B=function(e){return e.ACTIVE="Active",e.WISH_LIST="WishList",e.SELECTIVE="Selective",e.NEW_CREATED="NewCreated",e}(B||{}),K=function(e){return e.NO_STOCK="noStock",e.LOW_STOCK="lowStock",e.REVIEW_CONFIGURATION="reviewConfiguration",e.PRICING_ERROR="pricingError",e.UNRESOLVABLE_ISSUES="unresolvableIssues",e}(K||{}),W=function(e){return e.ACTIVE_CART="ACTIVE_CART",e.NEW_SAVED_CART="NEW_SAVED_CART",e.QUICK_ORDER="QUICK_ORDER",e.SAVED_CART="SAVED_CART",e.ORDER_CONFIRMATION="ORDER_CONFIRMATION",e.ORDER_DETAILS="ORDER_DETAILS",e.UNIT_ORDER_DETAILS="UNIT_ORDER_DETAILS",e}(W||{}),Q=function(e){return e.SUCCESS="success",e.LOW_STOCK="lowStock",e.NO_STOCK="noStock",e.UNKNOWN_IDENTIFIER="unknownIdentifier",e.UNKNOWN_ERROR="unknownError",e.LIMIT_EXCEEDED="limitExceeded",e}(Q||{}),_e=new i("CartNormalizer"),Me=new i("OrderEntryPromotionsNormalizer"),Fe=new i("CartModificationNormalizer"),Ne=new i("SaveCartNormalizer"),xe=new i("CartVoucherNormalizer");export{M as a,r as b,ee as c,te as d,ne as e,re as f,ae as g,se as h,ie as i,ce as j,oe as k,de as l,Ee as m,Ce as n,F as o,N as p,ve as q,ue as r,le as s,g as t,Re as u,fe as v,D as w,ye as x,Ae as y,T as z,x as A,O as B,V as C,w as D,pe as E,he as F,me as G,Ie as H,Te as I,ge as J,De as K,Se as L,k as M,j as N,P as O,B as P,K as Q,W as R,Q as S,_e as T,Me as U,Fe as V,xe as W};

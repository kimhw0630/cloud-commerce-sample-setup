import{a as O,z as v}from"./chunk-GKBE6IVR.js";import{ga as i,ha as a,xc as N}from"./chunk-FKA4XEVN.js";import{Dg as d,Gd as h,Hd as D,Ie as p,of as c,qa as s,ra as f,sa as r,yd as E,za as g}from"./chunk-ZJZHXN4F.js";var m=class extends p{},V=(()=>{class e extends m{static{this.type="OrderPlacedEvent"}}return e})(),K=(()=>{class e extends m{static{this.type="ReplenishmentOrderScheduledEvent"}}return e})(),Q=(()=>{class e extends p{static{this.type="DownloadOrderInvoicesEvent"}}return e})(),I="order",l="orderCore";function M(){return d({facade:L,feature:l,methods:["getOrderDetails","loadOrderDetails","clearOrderDetails","getOrderHistoryList","getOrderHistoryListLoaded","loadOrderList","clearOrderList","getConsignmentTracking","loadConsignmentTracking","clearConsignmentTracking","cancelOrder","getCancelOrderLoading","getCancelOrderSuccess","resetCancelOrderProcessState","getOrderDetailsLoading","getQueryParams"],async:!0})}var L=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>M(),providedIn:"root"})}}return e})();function S(){return d({facade:T,feature:l,methods:["createOrderReturnRequest","getOrderReturnRequest","getOrderReturnRequestList","loadOrderReturnRequestDetail","loadOrderReturnRequestList","clearOrderReturnRequestList","getReturnRequestLoading","getReturnRequestSuccess","clearOrderReturnRequestDetail","cancelOrderReturnRequest","getCancelReturnRequestLoading","getCancelReturnRequestSuccess","resetCancelReturnRequestProcessState"],async:!0})}var T=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>S(),providedIn:"root"})}}return e})(),X=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>d({facade:e,feature:l,methods:["getOrderDetails","clearPlacedOrder","setPlacedOrder","placeOrder","getPickupEntries","getDeliveryEntries"]}),providedIn:"root"})}}return e})(),J=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>d({facade:e,feature:l,methods:["reorder"]}),providedIn:"root"})}}return e})();function y(){return d({facade:x,feature:l,methods:["loadReplenishmentOrderDetails","getReplenishmentOrderDetails","getReplenishmentOrderDetailsLoading","getReplenishmentOrderDetailsSuccess","getReplenishmentOrderDetailsError","clearReplenishmentOrderDetails","cancelReplenishmentOrder","getCancelReplenishmentOrderLoading","getCancelReplenishmentOrderSuccess","getCancelReplenishmentOrderError","clearCancelReplenishmentOrderProcessState","getReplenishmentOrderHistoryList","getReplenishmentOrderHistoryListLoading","getReplenishmentOrderHistoryListError","getReplenishmentOrderHistoryListSuccess","loadReplenishmentOrderList","clearReplenishmentOrderList"],async:!0})}var x=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>y(),providedIn:"root"})}}return e})(),$=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=s({token:e,factory:()=>d({facade:e,feature:l,methods:["scheduleReplenishmentOrder"]}),providedIn:"root"})}}return e})(),_=function(e){return e.ORDER_CONSIGNMENT="cx-order-consignment",e.CONSIGNMENT_DELIVERY_INFO="cx-order-consignment-delivery-info",e.SERVICE_DETAILS="cx-service-details-card",e}(_||{}),W={DAILY:"DAILY",WEEKLY:"WEEKLY",MONTHLY:"MONTHLY"},w=function(e){return e.MONDAY="MONDAY",e.TUESDAY="TUESDAY",e.WEDNESDAY="WEDNESDAY",e.THURSDAY="THURSDAY",e.FRIDAY="FRIDAY",e.SATURDAY="SATURDAY",e.SUNDAY="SUNDAY",e}(w||{}),H=function(e){return e.PLACE_ORDER="PLACE_ORDER",e.SCHEDULE_REPLENISHMENT_ORDER="SCHEDULE_REPLENISHMENT_ORDER",e}(H||{}),F={routing:{routes:{orders:{paths:["my-account/orders"]},orderDetails:{paths:["my-account/order/:orderCode"],paramsMapping:{orderCode:"code"}},orderGuest:{paths:["guest/order/:orderCode"],paramsMapping:{orderCode:"code"}},orderReturn:{paths:["my-account/order/return/:orderCode"],paramsMapping:{orderCode:"code"}},orderReturnConfirmation:{paths:["my-account/order/return/confirmation/:orderCode"],paramsMapping:{orderCode:"code"}},orderCancel:{paths:["my-account/order/cancel/:orderCode"],paramsMapping:{orderCode:"code"}},orderCancelConfirmation:{paths:["my-account/order/cancel/confirmation/:orderCode"],paramsMapping:{orderCode:"code"}},returnRequestDetails:{paths:["my-account/return-request/:returnCode"],paramsMapping:{returnCode:"rma"}},replenishmentOrders:{paths:["my-account/my-replenishments"]},replenishmentDetails:{paths:["my-account/my-replenishment/:replenishmentOrderCode"],paramsMapping:{replenishmentOrderCode:"replenishmentOrderCode"}},replenishmentConfirmation:{paths:["replenishment/confirmation"]},orderConfirmation:{paths:["order-confirmation"]}}}},q=new r("OrderDetailsOrderEntriesContext"),Y=new r("OrderConfirmationOrderEntriesContext"),ee=new r("feature flag to enable enhanced UI for Order related pages under My-Account",{providedIn:"root",factory:()=>!1});function U(){return{featureModules:{[I]:{cmsComponents:["CancelOrderComponent","CancelOrderConfirmationComponent","ReturnOrderComponent","ReturnOrderConfirmationComponent","AccountOrderDetailsActionsComponent","AccountOrderDetailsItemsComponent","AccountOrderDetailsTotalsComponent","AccountOrderDetailsOverviewComponent","AccountOrderDetailsBillingComponent","AccountOrderDetailsGroupedItemsComponent","AccountOrderDetailsSimpleOverviewComponent","AccountOrderHistoryComponent","ReplenishmentDetailItemsComponent","AccountOrderDetailsReorderComponent","ReplenishmentDetailTotalsComponent","ReplenishmentDetailShippingComponent","ReplenishmentDetailActionsComponent","ReplenishmentDetailOrderHistoryComponent","AccountReplenishmentHistoryComponent","ReturnRequestOverviewComponent","ReturnRequestItemsComponent","ReturnRequestTotalsComponent","OrderReturnRequestListComponent","OrderConfirmationThankMessageComponent","OrderConfirmationItemsComponent","OrderConfirmationTotalsComponent","OrderConfirmationOverviewComponent","OrderConfirmationShippingComponent","OrderConfirmationBillingComponent","OrderConfirmationContinueButtonComponent","ReplenishmentConfirmationMessageComponent","ReplenishmentConfirmationOverviewComponent","ReplenishmentConfirmationItemsComponent","ReplenishmentConfirmationTotalsComponent","MyAccountViewOrderComponent"],dependencies:[v]},[l]:I}}}var te=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=f({providers:[D(U),h(F)],imports:[E.forChild([{path:null,canActivate:[c,a],component:i,data:{pageLabel:"order",cxRoute:"orderGuest"}},{path:null,canActivate:[c,a],component:i,data:{cxRoute:"orderDetails",cxContext:{[O]:q}}},{path:null,canActivate:[a],component:i,data:{cxRoute:"orderCancel"}},{path:null,canActivate:[a],component:i,data:{cxRoute:"orderCancelConfirmation"}},{path:null,canActivate:[a],component:i,data:{cxRoute:"orderReturn"}},{path:null,canActivate:[a],component:i,data:{cxRoute:"orderReturnConfirmation"}},{path:null,canActivate:[c,a],component:i,data:{cxRoute:"orders"}},{path:null,canActivate:[c,a],component:i,data:{cxRoute:"replenishmentDetails"}},{path:null,canActivate:[c,a],component:i,data:{cxRoute:"replenishmentOrders"}},{path:null,canActivate:[c,a],component:i,data:{cxRoute:"returnRequestDetails"}},{path:null,canActivate:[a],component:i,data:{cxRoute:"orderConfirmation",cxContext:{[O]:Y}}}])]})}}return e})(),ne=new r("OrderNormalizer"),re=new r("ReplenishmentOrderNormalizer"),oe=new r("ReorderOrderNormalizer"),ie=new r("OrderHistoryNormalizer"),ae=new r("ConsignmentTrackingNormalizer"),se=new r("OrderReturnRequestNormalizer"),ce=new r("OrderReturnRequestInputSerializer"),de=new r("OrderReturnsNormalizer"),le=new r("ReplenishmentOrderHistoryNormalizer"),ue=new r("ReplenishmentOrderFormSerializer");function me(e,o,n,t,R){R||(R=t?.country?.name);let C="";t&&t.region&&t.region.isocode&&(C=t.region.isocode+", ");let A=N(t,o,n),u;return t.firstName&&t.lastName?u=t.firstName+" "+t.lastName:t.firstName?u=t.firstName:t.lastName&&(u=t.lastName),{title:e,textBold:u,text:[t.line1,t.line2,t.town+", "+C+R,t.postalCode,A]}}function Re(e,o){return{title:e,textBold:o.name,text:[o.description,o.deliveryCost?.formattedValue?o.deliveryCost?.formattedValue:""]}}function pe(e,o,n){return{title:e,text:[n.cardType?.name,n.accountHolderName,n.cardNumber,o]}}function Oe(e,o,n){let t=n.billingAddress?.region?.isocode?n.billingAddress?.region?.isocode+", ":"";return{title:e,text:[o,n.billingAddress?.firstName+" "+n.billingAddress?.lastName,n.billingAddress?.line1,n.billingAddress?.town+", "+t+n.billingAddress?.country?.isocode,n.billingAddress?.postalCode]}}export{V as a,K as b,Q as c,I as d,L as e,T as f,X as g,J as h,x as i,$ as j,_ as k,W as l,w as m,H as n,q as o,Y as p,ee as q,te as r,ne as s,re as t,oe as u,ie as v,ae as w,se as x,ce as y,de as z,le as A,ue as B,me as C,Re as D,pe as E,Oe as F};

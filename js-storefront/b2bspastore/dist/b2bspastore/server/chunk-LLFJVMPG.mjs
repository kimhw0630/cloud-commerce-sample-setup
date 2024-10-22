import './polyfills.server.mjs';
import{a as V,b as x,c as B,d as Y,e as z}from"./chunk-SZSU6635.mjs";import{A as q,B as U,s as y,t as O,u as T,v as N,w as _,x as I,y as k,z as Z}from"./chunk-UXBWB3PG.mjs";import{U as P}from"./chunk-UHE32XUF.mjs";import{Ca as D,Fa as C,Ha as m,J as H,Mb as g,Ta as l,Ua as f,W as $,Wa as b,X as S,db as M,hb as F,ka as R}from"./chunk-H5UHAHI5.mjs";import{$d as v,Fa as a,Ga as j,Ka as s,La as E,Md as A,S as h,Sa as w,Td as p}from"./chunk-TXWRNZDJ.mjs";import{a as c,b as u}from"./chunk-GHFNAT2I.mjs";var G=(()=>{class r{constructor(t){this.converter=t}convert(t,e){return e===void 0&&(e=c({},t)),t.entries&&(e.entries=t.entries.map(i=>this.convertOrderEntry(i,t.code,t.appliedProductPromotions))),t.consignments&&(e.consignments=t.consignments.map(i=>u(c({},i),{entries:i.entries?.map(n=>u(c({},n),{orderEntry:this.convertOrderEntry(n.orderEntry,t.code,t.appliedProductPromotions)}))}))),t.unconsignedEntries&&(e.unconsignedEntries=t.unconsignedEntries.map(i=>this.convertOrderEntry(i,t.code,t.appliedProductPromotions))),e}convertOrderEntry(t,e,i){return u(c({},t),{product:this.converter.convert(t?.product,g),orderCode:e,promotions:this.converter.convert({item:t,promotions:i},P)})}static{this.\u0275fac=function(e){return new(e||r)(s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),J=(()=>{class r{constructor(t){this.converter=t}convert(t,e){return e===void 0&&(e=c({},t)),t.entries&&(e.entries=t.entries.map(i=>u(c({},i),{product:this.converter.convert(i.product,g),promotions:this.converter.convert({item:i,promotions:t.appliedProductPromotions},P)}))),e}static{this.\u0275fac=function(e){return new(e||r)(s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),K=(()=>{class r{constructor(t){this.converter=t}convert(t,e){return e===void 0&&(e=c({},t)),t.returnEntries&&(e.returnEntries=t.returnEntries.map(i=>u(c({},i),{orderEntry:this.convertOrderEntry(i.orderEntry)}))),e}convertOrderEntry(t){return u(c({},t),{product:this.converter.convert(t?.product,g)})}static{this.\u0275fac=function(e){return new(e||r)(s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),Q=(()=>{class r{convert(t,e){return e===void 0&&(e=c({},t)),t.replenishmentStartDate&&(e.replenishmentStartDate=this.convertDate(t.replenishmentStartDate)),e}convertDate(t){let e=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"});return`${t}T${e}:00${F.getLocalTimezoneOffset()}`}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),L={"Content-Type":"application/json"},W=(()=>{class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=E(R)}load(t,e){let i=this.occEndpoints.buildUrl("orderDetail",{urlParams:{userId:t,orderId:e}}),n=new p;return t===S&&(n=C.createHeader(D,!0,n)),this.http.get(i,{headers:n}).pipe(this.converter.pipeable(y))}loadHistory(t,e,i,n){let o={};e&&(o.pageSize=e.toString()),i&&(o.currentPage=i.toString()),n&&(o.sort=n.toString());let d=this.occEndpoints.buildUrl("orderHistory",{urlParams:{userId:t},queryParams:o});return this.http.get(d).pipe(this.converter.pipeable(N))}getConsignmentTracking(t,e,i=$){let n=this.occEndpoints.buildUrl("consignmentTracking",{urlParams:{userId:i,orderCode:t,consignmentCode:e}});return this.http.get(n).pipe(this.converter.pipeable(_))}cancel(t,e,i){let n=this.occEndpoints.buildUrl("cancelOrder",{urlParams:{userId:t,orderId:e}}),o=new p(c({},L));return this.http.post(n,i,{headers:o}).pipe(h(d=>{throw f(d,this.logger)}))}createReturnRequest(t,e){let i=this.occEndpoints.buildUrl("returnOrder",{urlParams:{userId:t}}),n=new p(c({},L));return e=this.converter.convert(e,k),this.http.post(i,e,{headers:n}).pipe(h(o=>{throw f(o,this.logger)}),this.converter.pipeable(I))}loadReturnRequestList(t,e,i,n){let o={};e&&(o.pageSize=e.toString()),i&&(o.currentPage=i.toString()),n&&(o.sort=n.toString());let d=this.occEndpoints.buildUrl("orderReturns",{urlParams:{userId:t},queryParams:o});return this.http.get(d).pipe(this.converter.pipeable(Z))}loadReturnRequestDetail(t,e){let i=this.occEndpoints.buildUrl("orderReturnDetail",{urlParams:{userId:t,returnRequestCode:e}});return this.http.get(i).pipe(this.converter.pipeable(I))}cancelReturnRequest(t,e,i){let n=this.occEndpoints.buildUrl("cancelReturn",{urlParams:{userId:t,returnRequestCode:e}}),o=new p(c({},L));return this.http.patch(n,i,{headers:o}).pipe(h(d=>{throw f(d,this.logger)}))}static{this.\u0275fac=function(e){return new(e||r)(s(v),s(m),s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac})}}return r})(),X=(()=>{class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=E(R)}placeOrder(t,e,i){let n=new p({"Content-Type":"application/x-www-form-urlencoded"});return t===S&&(n=C.createHeader(D,!0,n)),this.http.post(this.getPlaceOrderEndpoint(t,e,i.toString()),{},{headers:n}).pipe(h(o=>{throw f(o,this.logger)}),M({shouldRetry:b}),this.converter.pipeable(y))}getPlaceOrderEndpoint(t,e,i){return this.occEndpoints.buildUrl("placeOrder",{urlParams:{userId:t},queryParams:{cartId:e,termsChecked:i}})}static{this.\u0275fac=function(e){return new(e||r)(s(v),s(m),s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac})}}return r})(),ee=(()=>{class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i}load(t,e){return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetails",{urlParams:{userId:t,replenishmentOrderCode:e}})).pipe(this.converter.pipeable(O))}loadReplenishmentDetailsHistory(t,e,i,n,o){let d={};return i&&(d.pageSize=i.toString()),n&&(d.currentPage=n.toString()),o&&(d.sort=o.toString()),this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetailsHistory",{urlParams:{userId:t,replenishmentOrderCode:e},queryParams:d})).pipe(this.converter.pipeable(N))}cancelReplenishmentOrder(t,e){let i=new p().set("Content-Type","application/json");return this.http.patch(this.occEndpoints.buildUrl("cancelReplenishmentOrder",{urlParams:{userId:t,replenishmentOrderCode:e}}),{},{headers:i}).pipe(this.converter.pipeable(O))}loadHistory(t,e,i,n){let o={};e&&(o.pageSize=e.toString()),i&&(o.currentPage=i.toString()),n&&(o.sort=n.toString());let d=this.occEndpoints.buildUrl("replenishmentOrderHistory",{urlParams:{userId:t},queryParams:o});return this.http.get(d).pipe(this.converter.pipeable(q))}static{this.\u0275fac=function(e){return new(e||r)(s(v),s(m),s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac})}}return r})(),te=(()=>{class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=E(R)}scheduleReplenishmentOrder(t,e,i,n){e=this.converter.convert(e,U);let o=new p().set("Content-Type","application/json");return this.http.post(this.getScheduleReplenishmentOrderEndpoint(n,t,i.toString()),e,{headers:o}).pipe(h(d=>{throw f(d,this.logger)}),M({shouldRetry:b}),this.converter.pipeable(O))}getScheduleReplenishmentOrderEndpoint(t,e,i){return this.occEndpoints.buildUrl("scheduleReplenishmentOrder",{urlParams:{userId:t},queryParams:{cartId:e,termsChecked:i}})}static{this.\u0275fac=function(e){return new(e||r)(s(v),s(m),s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac})}}return r})(),re=(()=>{class r{convert(t,e){return e===void 0&&(e=c({},t)),e}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),ie=(()=>{class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=E(R)}reorder(t,e){let i=new p().set("Content-Type","application/json");return this.http.post(this.getReorderOrderEndpoint(t,e),{},{headers:i}).pipe(h(n=>{throw f(n,this.logger)}),this.converter.pipeable(T))}getReorderOrderEndpoint(t,e){return this.occEndpoints.buildUrl("reorder",{urlParams:{userId:e},queryParams:{orderCode:t}})}static{this.\u0275fac=function(e){return new(e||r)(s(v),s(m),s(l))}}static{this.\u0275prov=a({token:r,factory:r.\u0275fac})}}return r})(),ne={backend:{occ:{endpoints:{orderHistory:"users/${userId}/orders",orderDetail:"users/${userId}/orders/${orderId}?fields=FULL",consignmentTracking:"users/${userId}/orders/${orderCode}/consignments/${consignmentCode}/tracking",cancelOrder:"users/${userId}/orders/${orderId}/cancellation",returnOrder:"users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",orderReturns:"users/${userId}/orderReturns?fields=BASIC",orderReturnDetail:"users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",cancelReturn:"users/${userId}/orderReturns/${returnRequestCode}",replenishmentOrderDetails:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",replenishmentOrderDetailsHistory:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}/orders",cancelReplenishmentOrder:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",replenishmentOrderHistory:"users/${userId}/replenishmentOrders?fields=FULL,replenishmentOrders(FULL, purchaseOrderNumber)",placeOrder:"users/${userId}/orders?fields=FULL"}}}},Re=(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=w({type:r})}static{this.\u0275inj=j({providers:[H(ne),{provide:V,useClass:W},{provide:Y,useClass:ee},{provide:x,useClass:X},{provide:z,useClass:te},{provide:B,useClass:ie},{provide:I,useExisting:K,multi:!0},{provide:y,useExisting:G,multi:!0},{provide:O,useExisting:J,multi:!0},{provide:U,useExisting:Q,multi:!0},{provide:T,useExisting:re,multi:!0}],imports:[A]})}}return r})();export{G as a,Re as b};

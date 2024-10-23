import{H as ft,M as ht,m as Ct}from"./chunk-6CHLEOQA.js";import{C as nt,Ga as ut,Ha as lt,Jb as mt,S as ot,U as rt,V as at,X as st,Y as ct,ba as pt,e as X,g as Z,j as tt,ka as dt,l as et,p as it}from"./chunk-LRH6MGM6.js";import{Ad as K,Bb as h,Bc as H,Be as $,Cb as I,Da as _,Db as S,Ea as g,Gb as N,Hb as M,I as b,Ib as L,Q as y,Qa as O,Ra as o,Sa as m,Sb as d,Tb as u,Ua as R,ab as C,bc as V,cb as r,ee as W,eg as z,fg as J,ib as p,jb as f,kb as T,lb as q,mb as Q,nc as j,ob as v,of as Y,qa as A,qb as x,qc as U,rb as c,ta as E,v as k,vc as G,xa as w,xb as B,ya as D,yb as F,zb as P}from"./chunk-VZM7NBJ6.js";var gt=["addToCartDialogTriggerEl"];function Tt(i,l){if(i&1&&T(0,"cx-item-counter",10),i&2){let t=c(3);r("max",t.maxQuantity)("control",t.addToCartForm.get("quantity"))("ariaDescribedById","add-to-card-stock-info")}}function vt(i,l){if(i&1&&(p(0,"span"),h(1),f()),i&2){let t=c(3);o(),I(t.getInventory())}}function xt(i,l){if(i&1&&(p(0,"div",6)(1,"label"),h(2),d(3,"cxTranslate"),f(),p(4,"div",7),C(5,Tt,1,3,"cx-item-counter",8),p(6,"span",9),C(7,vt,2,1,"span",4),d(8,"async"),h(9),d(10,"cxTranslate"),d(11,"cxTranslate"),f()()()),i&2){let t=c(2);o(2),I(u(3,4,"addToCart.quantity")),o(3),r("ngIf",t.hasStock),o(2),r("ngIf",u(8,6,t.showInventory$)),o(2),S(" ",t.hasStock?u(10,8,"addToCart.inStock"):u(11,10,"addToCart.outOfStock"),"")}}function It(i,l){}function St(i,l){if(i&1){let t=v();q(0),C(1,It,0,0,"ng-template",11),L("cxComponentRefChange",function(n){_(t);let a=c(2);return M(a.pickupOptionCompRef,n)||(a.pickupOptionCompRef=n),g(n)}),Q()}if(i&2){let t=c(2);o(),r("cxOutlet",t.CartOutlets.ADD_TO_CART_PICKUP_OPTION),N("cxComponentRef",t.pickupOptionCompRef)}}function kt(i,l){if(i&1&&(p(0,"span",15),T(1,"cx-icon",16),f()),i&2){let t=c(3);o(),r("type",t.iconTypes.REPEAT)}}function bt(i,l){if(i&1&&(p(0,"button",12,0),C(2,kt,2,1,"span",13),d(3,"cxTranslate"),p(4,"span",14),d(5,"cxTranslate"),h(6),d(7,"cxTranslate"),f()()),i&2){let t,e=c(2);r("ngClass",e.options!=null&&e.options.displayAddToCart?"btn btn-tertiary":"btn btn-primary btn-block")("disabled",e.quantity<=0||e.quantity>e.maxQuantity),o(2),r("ngIf",(e.options==null?null:e.options.addToCartString)===u(3,5,"addToCart.buyItAgain")),o(2),r("ngClass",(e.options==null?null:e.options.addToCartString)===u(5,7,"addToCart.buyItAgain")?"buyItAgainLink":""),o(2),S(" ",(t=e.options==null?null:e.options.addToCartString)!==null&&t!==void 0?t:u(7,9,"addToCart.addToCart")," ")}}function At(i,l){if(i&1){let t=v();p(0,"form",2),x("submit",function(){_(t);let n=c();return g(n.addToCart())}),C(1,xt,12,12,"div",3)(2,St,2,2,"ng-container",4)(3,bt,8,11,"button",5),f()}if(i&2){let t=c();r("formGroup",t.addToCartForm),o(),r("ngIf",t.showQuantity),o(),r("ngIf",t.hasStock),o(),r("ngIf",t.hasStock)}}var Et=(()=>{class i{handleKeyboardEvent(t){if(!this.featureConfigService?.isEnabled("a11yQuantityOrderTabbing"))return;let e=t.target,n=e.ariaLabel==="Quantity"&&e.tagName==="INPUT";t.key==="Enter"&&n&&t.preventDefault()}constructor(t,e,n,a,s,yt){this.currentProductService=t,this.cd=e,this.activeCartService=n,this.component=a,this.eventService=s,this.productListItemContext=yt,this.showQuantity=!0,this.hasStock=!1,this.inventoryThreshold=!1,this.showInventory$=this.component?.data$.pipe(k(_t=>_t.inventoryDisplay)),this.quantity=1,this.addToCartForm=new Z({quantity:new tt(1,{updateOn:"blur"})}),this.CartOutlets=ht,this.iconTypes=at,this.featureConfigService=E(Y)}ngOnInit(){this.product?(this.productCode=this.product.code??"",this.setStockInfo(this.product),this.cd.markForCheck()):this.productCode?(this.quantity=1,this.hasStock=!0,this.cd.markForCheck()):this.subscription=(this.productListItemContext?this.productListItemContext.product$:this.currentProductService.getProduct()).pipe(b(W)).subscribe(t=>{this.productCode=t.code??"",this.setStockInfo(t),this.cd.markForCheck()})}setStockInfo(t){this.quantity=1,this.addToCartForm.controls.quantity.setValue(1),this.hasStock=t.stock?.stockLevelStatus!=="outOfStock",this.inventoryThreshold=t.stock?.isValueRounded??!1,this.hasStock&&t.stock?.stockLevel&&(this.maxQuantity=t.stock.stockLevel),this.productListItemContext&&(this.showQuantity=!1)}getInventory(){if(this.hasStock){let t=this.maxQuantity?this.maxQuantity.toString():"";return this.inventoryThreshold?t+"+":t}else return""}updateCount(t){this.quantity=t}addToCart(){let t=this.addToCartForm.get("quantity")?.value;!this.productCode||t<=0||(this.pickupOptionCompRef instanceof R&&this.pickupOptionCompRef.instance.intendedPickupLocation$.pipe(y(1)).subscribe(e=>{this.pickupStore=e?.pickupOption==="pickup"?e.name:void 0}),this.activeCartService.getEntries().pipe(y(1)).subscribe(e=>{this.activeCartService.addEntry(this.productCode,t,this.pickupStore),this.eventService.dispatch(this.createCartUiEventAddToCart(this.productCode,t,e.length,this.pickupStore))}))}createCartUiEventAddToCart(t,e,n,a){let s=new Ct;return s.productCode=t,s.quantity=e,s.numberOfEntriesBeforeAdd=n,s.pickupStoreName=a,this.featureConfigService.isEnabled("a11yDialogTriggerRefocus")&&(s.triggerElementRef=this.addToCartDialogTriggerEl),s}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static{this.\u0275fac=function(e){return new(e||i)(m(dt),m(V),m(ft),m(pt),m($),m(mt,8))}}static{this.\u0275cmp=w({type:i,selectors:[["cx-add-to-cart"]],viewQuery:function(e,n){if(e&1&&B(gt,5),e&2){let a;F(a=P())&&(n.addToCartDialogTriggerEl=a.first)}},hostBindings:function(e,n){e&1&&x("keydown",function(s){return n.handleKeyboardEvent(s)},!1,O)},inputs:{productCode:"productCode",showQuantity:"showQuantity",options:"options",pickupStore:"pickupStore",product:"product"},decls:1,vars:1,consts:[["addToCartDialogTriggerEl",""],[3,"formGroup","submit",4,"ngIf"],[3,"submit","formGroup"],["class","quantity",4,"ngIf"],[4,"ngIf"],["type","submit",3,"ngClass","disabled",4,"ngIf"],[1,"quantity"],[1,"cx-counter-stock"],[3,"max","control","ariaDescribedById",4,"ngIf"],["id","add-to-card-stock-info",1,"info"],[3,"max","control","ariaDescribedById"],[3,"cxComponentRefChange","cxOutlet","cxComponentRef"],["type","submit",3,"ngClass","disabled"],["class","repeat-icon",4,"ngIf"],[3,"ngClass"],[1,"repeat-icon"],[3,"type"]],template:function(e,n){e&1&&C(0,At,4,4,"form",1),e&2&&r("ngIf",n.productCode)},dependencies:[j,U,et,X,it,st,ut,ot,G,z],encapsulation:2,changeDetection:0})}}return i})(),Yt=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=D({type:i})}static{this.\u0275inj=A({providers:[K({cmsComponents:{ProductAddToCartComponent:{component:Et,data:{inventoryDisplay:!1}}}})],imports:[H,nt,J,ct,lt,rt]})}}return i})();export{Et as a,Yt as b};
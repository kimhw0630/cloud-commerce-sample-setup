import{H as Z,c as K}from"./chunk-6CHLEOQA.js";import{V as z,X as H,Y as J}from"./chunk-LRH6MGM6.js";import{Ad as U,Bb as h,Bc as R,Be as O,Db as g,Kb as q,Lb as o,Lf as V,Ra as u,Sa as B,Sb as n,Tb as p,U as x,Ub as s,Uf as W,Vf as G,Ye as Q,ab as _,bb as A,cb as m,eg as X,fg as Y,ga as C,ha as v,ib as d,ie as w,ja as I,jb as f,kb as j,ne as b,pa as M,qa as T,qc as E,qd as $,rb as D,s as l,sa as a,sd as k,v as r,vc as L,ve as N,w as y,xa as F,ya as P}from"./chunk-VZM7NBJ6.js";var nt=t=>({quantity:t}),S=t=>({count:t}),rt=()=>({cxRoute:"cart"}),at=t=>({total:t});function ot(t,tt){if(t&1&&(d(0,"a",1),n(1,"cxTranslate"),n(2,"cxUrl"),n(3,"cxTranslate"),j(4,"cx-icon",2),d(5,"span",3),h(6),n(7,"async"),n(8,"cxTranslate"),f(),d(9,"span",4),h(10),n(11,"async"),n(12,"cxTranslate"),f()()),t&2){let e=tt.ngIf,i=D();m("title",s(1,6,"miniCart.item",o(24,S,e.quantity)))("routerLink",p(2,9,q(26,rt))),A("aria-label",s(3,11,"miniCart.item",o(27,S,e.quantity))),u(4),m("type",i.iconTypes.CART),u(2),g(" ",s(8,16,"miniCart.total",o(29,at,p(7,14,i.total$)))," "),u(4),g(" ",s(12,21,"miniCart.count",o(31,S,p(11,19,i.quantity$)))," ")}}var ct=(()=>{class t{constructor(e,i,c,et,it){this.activeCartFacade=e,this.authService=i,this.statePersistenceService=c,this.siteContextParamsService=et,this.eventService=it}getQuantity(){return this.activeCartRequired().pipe(v(e=>e?this.activeCartFacade.getActive().pipe(C({totalUnitCount:0}),r(i=>i.totalUnitCount||0)):l(0)))}getTotalPrice(){return this.activeCartRequired().pipe(v(e=>e?this.activeCartFacade.getActive().pipe(r(i=>i.totalPrice?.formattedValue??"")):l("")))}activeCartRequired(){return y([this.hasActiveCartInStorage(),this.authService.isUserLoggedIn(),this.isCartCreated()]).pipe(r(([e,i,c])=>e||i||c),x(),I(e=>!e,!0))}hasActiveCartInStorage(){return this.getCartStateFromBrowserStorage().pipe(r(e=>!!e?.active))}isCartCreated(){return this.eventService.get(K).pipe(r(e=>!0),C(!1))}getCartStateFromBrowserStorage(){return this.siteContextParamsService.getValues([w]).pipe(r(e=>this.statePersistenceService.readStateFromStorage({key:"cart",context:e,storageType:N.LOCAL_STORAGE})))}static{this.\u0275fac=function(i){return new(i||t)(a(Z),a(b),a(Q),a(V),a(O))}}static{this.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),pt=(()=>{class t{constructor(e){this.miniCartComponentService=e,this.iconTypes=z,this.quantity$=this.miniCartComponentService.getQuantity(),this.total$=this.miniCartComponentService.getTotalPrice()}static{this.\u0275fac=function(i){return new(i||t)(B(ct))}}static{this.\u0275cmp=F({type:t,selectors:[["cx-mini-cart"]],decls:2,vars:5,consts:[[3,"title","routerLink",4,"ngIf"],[3,"title","routerLink"],[3,"type"],[1,"total"],[1,"count"]],template:function(i,c){i&1&&(_(0,ot,13,33,"a",0),n(1,"async")),i&2&&m("ngIf",o(3,nt,p(1,1,c.quantity$)))},dependencies:[E,$,H,L,W,X],encapsulation:2,changeDetection:0})}}return t})(),It=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=P({type:t})}static{this.\u0275inj=T({providers:[U({cmsComponents:{MiniCartComponent:{component:pt}}})],imports:[R,k,G,J,Y]})}}return t})();export{pt as MiniCartComponent,ct as MiniCartComponentService,It as MiniCartModule};

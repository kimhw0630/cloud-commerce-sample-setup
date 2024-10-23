import './polyfills.server.mjs';
import{a as v,b as p,z as f}from"./chunk-UHE32XUF.mjs";import{ga as o,ha as d}from"./chunk-EKK5QDHO.mjs";import{A as S,J as l,K as E,Kc as u,tb as n}from"./chunk-H5UHAHI5.mjs";import{Fa as c,Ga as i,Ia as s,Sa as C}from"./chunk-TXWRNZDJ.mjs";var t=class extends p{},_=(()=>{class e extends t{static{this.type="SaveCartEvent"}}return e})(),w=(()=>{class e extends t{static{this.type="SaveCartSuccessEvent"}}return e})(),N=(()=>{class e extends t{static{this.type="SaveCartEvent"}}return e})(),j=(()=>{class e extends t{static{this.type="RestoreSavedCartEvent"}}return e})(),k=(()=>{class e extends t{static{this.type="RestoreSavedCartSuccessEvent"}}return e})(),b=(()=>{class e extends t{static{this.type="RestoreSavedCartFailEvent"}}return e})(),U=(()=>{class e extends t{static{this.type="EditSavedCartEvent"}}return e})(),V=(()=>{class e extends t{static{this.type="EditSavedCartSuccessEvent"}}return e})(),G=(()=>{class e extends t{static{this.type="EditSavedCartFailEvent"}}return e})(),B=(()=>{class e extends t{static{this.type="CloneSavedCartEvent"}}return e})(),H=(()=>{class e extends t{static{this.type="CloneSavedCartSuccessEvent"}}return e})(),X=(()=>{class e extends t{static{this.type="CloneSavedCartFailEvent"}}return e})(),g="cartSavedCart",R="cartSavedCartCore",q=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=c({token:e,factory:()=>u({facade:e,feature:R,methods:["editSavedCart","deleteSavedCart","getSavedCart","getSavedCartList","loadSavedCart","clearCloneSavedCart","clearRestoreSavedCart","clearSaveCart","clearSavedCarts","get","getList","getCloneSavedCartProcessError","getCloneSavedCartProcessLoading","getCloneSavedCartProcessSuccess","getRestoreSavedCartProcessError","getRestoreSavedCartProcessLoading","getRestoreSavedCartProcessSuccess","getSaveCartProcessError","getSaveCartProcessLoading","getSaveCartProcessSuccess","getSavedCartListProcess","getSavedCartListProcessLoading","isStable","cloneSavedCart","loadSavedCarts","restoreSavedCart","saveCart"],async:!0}),providedIn:"root"})}}return e})(),h=function(e){return e.EDIT="edit",e.DELETE="delete",e.SAVE="save",e.RESTORE="restore",e}(h||{}),x=new s("SavedCartOrderEntriesContext"),y=new s("NewSavedCartOrderEntriesContext");function A(){return{featureModules:{[g]:{cmsComponents:["AddToSavedCartsComponent","AccountSavedCartHistoryComponent","SavedCartDetailsOverviewComponent","SavedCartDetailsItemsComponent","SavedCartDetailsActionComponent"],dependencies:[f]},[R]:g}}}var z=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=i({providers:[E(A),l({routing:{routes:{savedCarts:{paths:["my-account/saved-carts"]},savedCartsDetails:{paths:["my-account/saved-cart/:savedCartId"],paramsMapping:{savedCartId:"savedCartId"}}}}})],imports:[S.forChild([{path:null,canActivate:[n,d],component:o,data:{cxRoute:"savedCartsDetails",cxContext:{[v]:x}}},{path:null,canActivate:[n,d],component:o,data:{cxRoute:"savedCarts",cxContext:{[v]:y}}}])]})}}return e})();export{_ as a,w as b,N as c,j as d,k as e,b as f,U as g,V as h,G as i,B as j,H as k,X as l,g as m,q as n,h as o,x as p,y as q,z as r};
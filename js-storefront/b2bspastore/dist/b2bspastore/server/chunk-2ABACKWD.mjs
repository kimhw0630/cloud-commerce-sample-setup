import './polyfills.server.mjs';
import{a as l}from"./chunk-UHE32XUF.mjs";import{ga as s,ha as f}from"./chunk-EKK5QDHO.mjs";import{A as d,J as r,K as a,Kc as u}from"./chunk-H5UHAHI5.mjs";import{Fa as o,Ga as n,Ia as i,Sa as c}from"./chunk-TXWRNZDJ.mjs";var g={quickOrder:{searchForm:{displayProductImages:!0,maxProducts:5,minCharactersBeforeRequest:3},list:{hardDeleteTimeout:24e4}}};var m="cartQuickOrder",p="cartQuickOrderCore";function E(){return u({facade:O,feature:p,methods:["addProduct","addToCart","clearList","canAdd","setListLimit","getEntries","getProductAdded","loadEntries","softDeleteEntry","searchProducts","setProductAdded","updateEntryQuantity","getSoftDeletedEntries","restoreSoftDeletedEntry","hardDeleteEntry","clearDeletedEntries","getNonPurchasableProductError","setNonPurchasableProductError","clearNonPurchasableProductError"]})}var O=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=o({token:e,factory:()=>E(),providedIn:"root"})}}return e})(),k=new i("QuickOrderOrderEntriesContext");function y(){return{featureModules:{[m]:{cmsComponents:["QuickOrderComponent","CartQuickOrderFormComponent"]},[p]:m}}}var h={routing:{routes:{quickOrder:{paths:["my-account/quick-order"]}}}},j=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=n({providers:[a(y),r(h),r(g)],imports:[d.forChild([{path:null,canActivate:[f],component:s,data:{cxRoute:"quickOrder",cxContext:{[l]:k}}}])]})}}return e})();export{g as a,m as b,O as c,k as d,j as e};
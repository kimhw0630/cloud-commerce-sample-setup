import './polyfills.server.mjs';
import{B as l,z as p}from"./chunk-UHE32XUF.mjs";import{J as c,K as f,Kc as n}from"./chunk-H5UHAHI5.mjs";import{Fa as o,Ga as s,Sa as u}from"./chunk-TXWRNZDJ.mjs";var d="pickupInStore",r="pickupInStoreCore",I=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=o({token:e,factory:()=>n({facade:e,feature:r,methods:["getIntendedLocation","setIntendedLocation","removeIntendedLocation","getPickupOption","setPickupOption"],async:!0}),providedIn:"root"})}}return e})(),y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=o({token:e,factory:()=>n({facade:e,feature:r,methods:["clearSearchResults","getHideOutOfStock","getSearchResults","getStockLevelAtStore","getStoreDetails","hasSearchStarted","isSearchRunning","loadStoreDetails","setBrowserLocation","startSearch","stockLevelAtStore","toggleHideOutOfStock"],async:!0}),providedIn:"root"})}}return e})(),P=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=o({token:e,factory:()=>n({facade:e,feature:r,methods:["setPageContext","getPageContext","setPickupOption","getPickupOption"],async:!0}),providedIn:"root"})}}return e})(),m=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=o({token:e,factory:()=>n({facade:e,feature:r,methods:["getPreferredStore$","getPreferredStoreWithProductInStock","clearPreferredStore","setPreferredStore"],async:!0}),providedIn:"root"})}}return e})(),k="preferred_store";function g(){return{featureModules:{[d]:{cmsComponents:["CheckoutReviewPickup","MyPreferredStoreComponent","OrderConfirmationPickUpComponent","PickupInStoreDeliveryModeComponent"]},[r]:d}}}var C=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=s({providers:[f(g),c({featureModules:{[l]:{dependencies:[d]}}}),c({featureModules:{[p]:{dependencies:[d]}}})]})}}return e})(),R=(e,a)=>e&&e.hasOwnProperty(a)?e[a]:null;function D(e){return!!e&&e.guid!==void 0&&e.user!==void 0&&e.user.uid!==void 0&&e.code!==void 0}export{d as a,I as b,y as c,P as d,m as e,k as f,C as g,R as h,D as i};

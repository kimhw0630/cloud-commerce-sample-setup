import './polyfills.server.mjs';
import{a as D}from"./chunk-5NVLKKHS.mjs";import{Fc as g,Gc as l,L as p,dc as b,ha as w,oa as j,ya as M}from"./chunk-H5UHAHI5.mjs";import{Eb as S,Fa as f,Ga as u,Gb as E,Ka as o,L as m,Sa as h,X as y}from"./chunk-TXWRNZDJ.mjs";import"./chunk-GHFNAT2I.mjs";var P=(()=>{class t{constructor(e,i,r,a,s,d,c){if(this.cmsService=e,this.routingService=i,this.baseSiteService=r,this.zone=a,this.winRef=s,this.rendererFactory=d,this.config=c,this.isPreviewPage=!1,s.nativeWindow){let n=s.nativeWindow;n.smartedit=n.smartedit||{},n.smartedit.renderComponent=(C,v,x)=>this.renderComponent(C,v,x),n.smartedit.reprocessPage=this.reprocessPage}}processCmsPage(){this.baseSiteService.get().pipe(m(e=>!!e),y(1)).subscribe(e=>{this.defaultPreviewCategoryCode=e.defaultPreviewCategoryCode,this.defaultPreviewProductCode=e.defaultPreviewProductCode,this.cmsService.getCurrentPage().pipe(m(Boolean)).subscribe(i=>{this._currentPageId=i.pageId,this.goToPreviewPage(i),this.addPageContract(i)})})}addPageContract(e){let i=this.rendererFactory.createRenderer("body",null),r=this.winRef.document.body,a=[];Array.from(r.classList).forEach(s=>a.push(s)),a.forEach(s=>i.removeClass(r,s)),this.addSmartEditContract(r,i,e.properties)}goToPreviewPage(e){this.isPreviewPage||(this.isPreviewPage=!0,e.type===p.PRODUCT_PAGE&&this.defaultPreviewProductCode?this.routingService.go({cxRoute:"product",params:{code:this.defaultPreviewProductCode,name:""}}):e.type===p.CATEGORY_PAGE&&this.defaultPreviewCategoryCode&&this.routingService.go({cxRoute:"category",params:{code:this.defaultPreviewCategoryCode}}))}renderComponent(e,i,r){return e&&this.zone.run(()=>{r?i&&this.cmsService.refreshComponent(e):this._currentPageId?this.cmsService.refreshPageById(this._currentPageId):this.cmsService.refreshLatestPage()}),!0}reprocessPage(){}addSmartEditContract(e,i,r){r&&Object.keys(r).forEach(a=>{let s="data-"+a+"-",d=r[a];Object.keys(d).forEach(c=>{let n=d[c];c==="classes"?n.split(" ").forEach(v=>{i.addClass(e,v)}):i.setAttribute(e,s+c.split(/(?=[A-Z])/).join("-").toLowerCase(),n)})})}static{this.\u0275fac=function(i){return new(i||t)(o(b),o(j),o(M),o(E),o(w),o(S),o(D))}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),R=(()=>{class t extends g{constructor(e){super(),this.smartEditService=e}decorate(e,i,r){r&&this.smartEditService.addSmartEditContract(e,i,r.properties)}static{this.\u0275fac=function(i){return new(i||t)(o(P))}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),k=(()=>{class t extends l{constructor(e){super(),this.smartEditService=e}decorate(e,i,r){r&&this.smartEditService.addSmartEditContract(e,i,r.properties)}static{this.\u0275fac=function(i){return new(i||t)(o(P))}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),A=[{provide:g,useExisting:R,multi:!0},{provide:l,useExisting:k,multi:!0}],I=(()=>{class t{constructor(e){this.smartEditService=e,this.smartEditService.processCmsPage()}static{this.\u0275fac=function(i){return new(i||t)(o(P))}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=u({providers:[...A]})}}return t})();var W=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=u({imports:[I]})}}return t})();export{W as SmartEditModule};

import{Ad as v,Mc as m,Q as a,Ve as I,Zb as f,be as g,gc as p,ha as d,og as y,pa as s,qa as u,sa as o,ta as c,wd as h,ya as l}from"./chunk-VZM7NBJ6.js";var M=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=s({token:t,factory:function(e){let r=null;return e?r=new(e||t):r=o(h),r},providedIn:"root"})}}return t})(),j="smartEdit",E=(()=>{class t{get cmsTicketId(){return this._cmsTicketId}constructor(i,e,r){this.config=i,this.location=e,this.scriptLoader=r,this.featureModulesService=c(y)}load(){this.isLaunchedInSmartEdit()&&(this.featureModulesService.resolveFeature(j).subscribe(),this.scriptLoader?.embedScript({src:"assets/webApplicationInjector.js",params:void 0,attributes:{id:"text/smartedit-injector","data-smartedit-allow-origin":this.config.smartEdit?.allowOrigin}}))}isLaunchedInSmartEdit(){let i=this.location.path().split("?")[0],r=this.location.path().split("?")[1]?.split("&").find(n=>n.startsWith("cmsTicketId="));return this._cmsTicketId=r?.split("=")[1],i.split("/").pop()===this.config.smartEdit?.storefrontPreviewRoute&&!!this._cmsTicketId}static{this.\u0275fac=function(e){return new(e||t)(o(M),o(p),o(I))}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),S={smartEdit:{storefrontPreviewRoute:"cx-preview",allowOrigin:"localhost:9002"}},T=(()=>{class t{constructor(i){this.service=i,this.routingService=c(g)}intercept(i,e){let r=this.service.cmsTicketId;return r?i.url.includes("/productList")?this.setRequestForProductListPage(i,e,r):((i.url.includes("/cms/")||i.url.includes("/products/"))&&(i=i.clone({setParams:{cmsTicketId:r}})),e.handle(i)):e.handle(i)}setRequestForProductListPage(i,e,r){return this.routingService.getPageContext().pipe(a(1),d(n=>(i=i.clone(n.id?{setParams:{cmsTicketId:r,categoryCode:n.id}}:{setParams:{cmsTicketId:r}}),e.handle(i))))}static{this.\u0275fac=function(e){return new(e||t)(o(E))}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),P=[{provide:m,useExisting:T,multi:!0}];function w(t){return()=>{t.load()}}var x=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=l({type:t})}static{this.\u0275inj=u({providers:[...P,v(S),{provide:f,useFactory:w,deps:[E],multi:!0}]})}}return t})();export{M as a,j as b,x as c};

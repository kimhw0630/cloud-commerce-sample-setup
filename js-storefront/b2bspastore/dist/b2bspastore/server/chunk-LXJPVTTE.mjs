import './polyfills.server.mjs';
import{F as j,J as m,gb as S,ha as Q,ka as h}from"./chunk-H5UHAHI5.mjs";import{Aa as I,F as w,Fa as d,Ga as r,Ka as s,L as b,La as u,Md as C,Od as D,Ra as l,Sa as c,_c as f,a as g,kb as q,l as a,q as v,x as M,xa as y,xb as p}from"./chunk-TXWRNZDJ.mjs";import"./chunk-GHFNAT2I.mjs";var F=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["cx-qualtrics-embedded-feedback"]],decls:0,vars:0,template:function(e,o){},encapsulation:2})}}return t})(),E={qualtrics:{}},P="qsi_js_loaded",T=(()=>{class t{get window(){return this.winRef.nativeWindow}constructor(i,e,o){this.winRef=i,this.platformId=e,this.scriptLoader=o,this.subscription=new g,this.logger=u(h),this.qsiLoaded$=D(this.platformId)&&this.window?w(this.window,P):a,this.qsi$=this.qsiLoaded$.pipe(y(()=>this.isDataLoaded()),M(n=>n?this.window?.QSI:a),b(n=>!!n),I(n=>this.qsiApi=n)),this.initialize()}addScript(i){this.hasScript(i)?this.run(!0):this.scriptLoader.embedScript({src:i})}hasScript(i){return!!this.winRef.document.querySelector(`script[src="${i}"]`)}initialize(){this.subscription.add(this.qsi$.subscribe(()=>this.run()))}run(i=!1){if(!this.qsiApi?.API){f()&&this.logger.log("The QSI api is not available");return}i&&this.qsiApi.API.unload(),this.qsiApi.API.load().done(this.qsiApi.API.run())}isDataLoaded(){return v(!0)}ngOnDestroy(){this.subscription?.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)(s(Q),s(q),s(S))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),k=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=d({token:t,factory:function(e){let o=null;return e?o=new(e||t):o=s(j),o},providedIn:"root"})}}return t})(),x=(()=>{class t{constructor(i,e){this.qualtricsLoader=i,this.config=e,this.logger=u(h),this.config.qualtrics?.scriptSource?this.qualtricsLoader.addScript(this.config.qualtrics.scriptSource):f()&&this.logger.warn("We're unable to add the Qualtrics deployment code as there is no script source defined in config.qualtrics.scriptSource.")}static{this.\u0275fac=function(e){return new(e||t)(p(T),p(k))}}static{this.\u0275cmp=l({type:t,selectors:[["cx-qualtrics"]],decls:0,vars:0,template:function(e,o){},encapsulation:2})}}return t})(),A=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=c({type:t})}static{this.\u0275inj=r({providers:[m({cmsComponents:{QualtricsEmbeddedFeedbackComponent:{component:F},QualtricsComponent:{component:x}}}),m(E)],imports:[C]})}}return t})();var J=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=c({type:t})}static{this.\u0275inj=r({imports:[A]})}}return t})();export{J as QualtricsModule};

import{e as ne,i as ce,j as ae,k as ue}from"./chunk-SJ4F4F6Y.js";import{c as ie}from"./chunk-VFKHV2P7.js";import{$c as u,Aa as V,Bc as _,Ce as te,Ee as se,I as Q,Kd as c,M,N as W,Q as Z,Xe as I,Ye as re,Zc as y,Zd as ee,Ze as oe,_c as S,a as h,ad as J,b as G,bd as K,ed as U,f as z,fd as X,gd as O,ha as T,hd as Y,pa as d,qa as A,ra as R,s as l,sa as n,ta as q,v as m,w as B,ya as E,ye as b}from"./chunk-VZM7NBJ6.js";var F=class{},C=(()=>{class e{constructor(t){this.asmAdapter=t}customerSearch(t){return this.asmAdapter.customerSearch(t)}customerLists(){return this.asmAdapter.customerLists()}bindCart(t){return this.asmAdapter.bindCart(t)}createCustomer(t){return this.asmAdapter.createCustomer(t)}static{this.\u0275fac=function(s){return new(s||e)(n(F))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),mt=new R("CustomerSearchPageNormalizer"),ht=new R("CustomerListsNormalizer"),de=(()=>{class e{constructor(t,s,o){this.commandService=t,this.asmConnector=s,this.userAccountFacade=o,this.bindCartCommand$=this.commandService.create(i=>this.userAccountFacade.get().pipe(m(g=>{if(g?.uid)return g.uid;throw new Error("No identifier for authenticated user found.")}),Z(1),W(g=>this.asmConnector.bindCart({cartId:i,customerId:g}))))}bindCart(t){return this.bindCartCommand$.execute(t)}static{this.\u0275fac=function(s){return new(s||e)(n(b),n(C),n(ie))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac})}}return e})(),Se=(()=>{class e{constructor(t,s){this.asmConnector=t,this.command=s,this.createCustomerCommand=this.command.create(({user:o})=>this.asmConnector.createCustomer(o))}createCustomer(t){return this.createCustomerCommand.execute({user:t})}static{this.\u0275fac=function(s){return new(s||e)(n(C),n(b))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac})}}return e})(),he="[Asm] UI Update",L=class{constructor(r){this.payload=r,this.type=he}},le="asm",f="[asm] Customer search data",p="[asm] Customer list customers search data",Ce="[Asm] Customer Search",ye="[Asm] Customer Search Fail",Le="[Asm] Customer Search Success",ve="[Asm] Customer Search Reset",fe="[Asm] Customer List Customers Search",Me="[Asm] Customer List Customers Search Fail",Te="[Asm] Customer List Customers Search Success",_e="[Asm] Customer List Customers Search Reset",j=class extends c.LoaderLoadAction{constructor(r){super(f),this.payload=r,this.type=Ce}},w=class extends c.LoaderFailAction{constructor(r){super(f,r),this.payload=r,this.type=ye}},v=class extends c.LoaderSuccessAction{constructor(r){super(f),this.payload=r,this.type=Le}},D=class extends c.LoaderResetAction{constructor(){super(f),this.type=ve}},k=class extends c.LoaderLoadAction{constructor(r){super(p),this.payload=r,this.type=fe}},N=class extends c.LoaderFailAction{constructor(r){super(p,r),this.payload=r,this.type=Me}},H=class extends c.LoaderSuccessAction{constructor(r){super(p),this.payload=r,this.type=Te}},$=class extends c.LoaderResetAction{constructor(){super(p),this.type=_e}},Ue="[Auth] Logout Customer Support Agent";var Oe=(()=>{class e{constructor(t,s){this.actions$=t,this.asmConnector=s,this.logger=q(ee),this.customerSearch$=U(()=>this.actions$.pipe(O(Ce),m(o=>o.payload),T(o=>this.asmConnector.customerSearch(o).pipe(m(i=>new v(i)),M(i=>i.status===400&&i.details?.[0]?.message?.indexOf("Wrong orderId")>-1?l(new v({entries:[]})):l(new w(I(i,this.logger)))))))),this.customerListCustomersSearch$=U(()=>this.actions$.pipe(O(fe),m(o=>o.payload),T(o=>this.asmConnector.customerSearch(o).pipe(m(i=>new H(i)),M(i=>l(new N(I(i,this.logger))))))))}static{this.\u0275fac=function(s){return new(s||e)(n(X),n(C))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac})}}return e})(),be=[Oe],Ie={collapsed:!1};function Fe(e=Ie,r){switch(r.type){case he:return h(h({},e),r.payload);default:return e}}function je(){return{customerSearchResult:c.loaderReducer(f),customerListCustomersSearchResult:c.loaderReducer(p),asmUi:Fe}}var pe=new R("AsmReducers"),we={provide:pe,useFactory:je};function De(e){return function(r,t){return t.type===Ue&&(r=G(h({},r),{customerSearchResult:{}})),e(r,t)}}var ke=[De],P=J(le),ge=u(P,e=>e.asmUi),Ae=u(P,e=>e.customerSearchResult),Ne=u(Ae,e=>c.loaderValueSelector(e)),He=u(Ae,e=>c.loaderLoadingSelector(e)),x=u(P,e=>e.customerListCustomersSearchResult),$e=u(x,e=>c.loaderValueSelector(e)),Pe=u(x,e=>c.loaderLoadingSelector(e)),xe=u(x,e=>c.loaderErrorSelector(e));var me=(()=>{class e{constructor(t,s,o){this.queryService=t,this.asmConnector=s,this.store=o,this.customerListQuery$=this.queryService.create(()=>this.asmConnector.customerLists(),{reloadOn:void 0,resetOn:void 0})}getCustomerLists(){return this.customerListQuery$.get()}getCustomerListsState(){return this.customerListQuery$.getState()}customerListCustomersSearch(t){this.store.dispatch(new k(t))}getCustomerListCustomersSearchResults(){return this.store.pipe(S($e))}getCustomerListCustomersSearchResultsLoading(){return this.store.pipe(S(Pe))}customerListCustomersSearchReset(){this.store.dispatch(new $)}getCustomerListCustomersSearchResultsError(){return this.store.pipe(S(xe))}static{this.\u0275fac=function(s){return new(s||e)(n(te),n(C),n(y))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac})}}return e})(),Ge=[me,{provide:ue,useExisting:me},de,{provide:ce,useExisting:de},Se,{provide:ae,useExisting:Se}],ze=(()=>{class e{constructor(t,s,o){this.statePersistenceService=t,this.store=s,this.authStorageService=o,this.subscription=new z,this.key="asm"}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:this.key,state$:this.getAsmState(),onRead:t=>this.onRead(t)}))}getAsmState(){return B([this.store.pipe(Q(t=>!!t.asm),S(ge)),l(this.authStorageService.getEmulatedUserToken()),this.authStorageService.getTokenTarget()]).pipe(m(([t,s,o])=>{let i=s;return i&&(i=h({},s),delete i.refresh_token),{ui:t,emulatedUserToken:i,tokenTarget:o}}))}onRead(t){t&&(t.ui&&this.store.dispatch(new L(t.ui)),t.emulatedUserToken&&this.authStorageService.setEmulatedUserToken(t.emulatedUserToken),t.tokenTarget&&this.authStorageService.setTokenTarget(t.tokenTarget))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(s){return new(s||e)(n(re),n(y),n(ne))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Be=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=E({type:e})}static{this.\u0275inj=A({providers:[we],imports:[_,oe,K.forFeature(le,pe,{metaReducers:ke}),Y.forFeature(be)]})}}return e})();function Qe(e){return()=>e.initSync()}var lt=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=E({type:e})}static{this.\u0275inj=A({providers:[C,{provide:se,useFactory:Qe,deps:[ze],multi:!0},...Ge],imports:[_,Be]})}}return e})(),Ct=(()=>{class e{constructor(t){this.store=t}customerSearch(t){this.store.dispatch(new j(t))}customerSearchReset(){this.store.dispatch(new D)}getCustomerSearchResults(){return this.store.pipe(S(Ne))}getCustomerSearchResultsLoading(){return this.store.pipe(S(He))}updateAsmUiState(t){this.store.dispatch(new L(t))}getAsmUiState(){return this.store.pipe(S(ge))}static{this.\u0275fac=function(s){return new(s||e)(n(y))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ft=(()=>{class e{transform(t,...s){return t(...s)}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275pipe=V({name:"cxArgs",type:e,pure:!0})}}return e})(),pt=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=E({type:e})}static{this.\u0275inj=A({})}}return e})(),a=function(e){return e[e.ASC=1]="ASC",e[e.DESC=-1]="DESC",e}(a||{});function We(e=a.ASC){return(r,t)=>r===t?0:(r===!0?-1:1)*e}var gt=We(a.ASC);function Ze(e=a.ASC){return(r,t)=>r===t?0:(r<t?-1:1)*e}var At=Ze(a.ASC);function Re(e=a.ASC){return(r,t)=>{let s=r==null,o=t==null;return s===o?0:(s?-1:1)*e}}var Rt=Re(a.ASC),Et=Re(a.DESC);function Ee(e=a.ASC){return(r,t)=>r===t?0:(r-t<0?-1:1)*e}var yt=Ee(a.ASC),Lt=Ee(a.DESC);function qe(e=a.ASC,r,t){return(s,o)=>(s??"").localeCompare(o??"",r,t)*e}var vt=qe(a.ASC);function Mt(...e){return(r,t)=>{for(let s of e){let o=s(r,t);if(o!==0)return o}return 0}}function Tt(e,r,t){if(typeof r=="function")return(s,o)=>r(s[e],o[e]);if(t)return(s,o)=>t(s[e][r],o[e][r]);throw new Error("No comparator provided")}var _t=e=>typeof e=="string",Ut=e=>typeof e=="number",Ot=e=>typeof e=="boolean";function bt(e,r){return(t,s)=>e(t)&&e(s)?r(t,s):0}export{F as a,mt as b,ht as c,lt as d,Ct as e,ft as f,pt as g,a as h,We as i,Ze as j,Re as k,qe as l,Mt as m,Tt as n,_t as o,Ut as p,Ot as q,bt as r};

import{Nb as v,ga as C,ha as M}from"./chunk-FKA4XEVN.js";import{Dg as R,Gd as p,Hd as l,N as m,Pc as i,Rc as A,a as c,b as u,ce as E,ia as d,qa as r,ra as f,ua as a,yd as g,za as s}from"./chunk-ZJZHXN4F.js";var N="organization/account-summary",y={routing:{routes:{orgAccountSummary:{paths:[`${N}`]},orgAccountSummaryDetails:{paths:[`${N}/details/:orgUnit`],paramsMapping:{orgUnit:"uid"}}}}},h="organizationAccountSummary";var S=(()=>{class t{constructor(){this.fileReaderService=a(v),this.windowRef=a(E)}intercept(n,o){return o.handle(n).pipe(m(e=>{if(this.windowRef.isBrowser()&&e instanceof i&&e.error instanceof Blob&&e.error.type==="application/json")return this.fileReaderService.loadTextFile(e.error).pipe(d(D=>{let T=JSON.parse(D);throw new i(u(c({},e),{error:T,url:e.url??void 0}))}));throw e}))}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function U(){return{featureModules:{[h]:{cmsComponents:["ManageAccountSummaryListComponent","AccountSummaryHeaderComponent","AccountSummaryDocumentComponent"]}}}}var H=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=s({type:t})}static{this.\u0275inj=f({providers:[p(y),l(U),{provide:A,useExisting:S,multi:!0}],imports:[g.forChild([{path:null,canActivate:[M],component:C,data:{cxRoute:"orgAccountSummaryDetails"}}])]})}}return t})(),Y=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=r({token:t,factory:()=>R({facade:t,feature:h,methods:["getAccountSummary","getDocumentList","getDocumentAttachment"]}),providedIn:"root"})}}return t})(),I=function(t){return t.ALL="all",t.OPEN="open",t.CLOSED="closed",t}(I||{}),w=function(t){return t.BASIC="BASIC",t.DEFAULT="DEFAULT",t.FULL="FULL",t}(w||{}),_=function(t){return t.DOCUMENT_NUMBER="orgDocumentId",t.DOCUMENT_NUMBER_RANGE="orgDocumentIdRange",t.DOCUMENT_TYPE="orgDocumentType",t.DATE_RANGE="createdAtDateRange",t.DUE_DATE_RANGE="dueAtDateRange",t.AMOUNT_RANGE="amountRange",t.OPEN_AMOUNT_RANGE="openAmountRange",t}(_||{});export{h as a,H as b,Y as c,I as d,w as e,_ as f};

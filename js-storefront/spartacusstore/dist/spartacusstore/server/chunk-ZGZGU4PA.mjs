import './polyfills.server.mjs';
import{ka as at}from"./chunk-6XFVW6FJ.mjs";import{I as z,Ic as L,Q as it,R as T,aa as nt,dc as b,ja as rt,la as $,na as D,oa as ot,qc as R,rc as j,w as et,z as O}from"./chunk-JYBAAKHA.mjs";import{$a as G,$b as M,Aa as A,Bd as tt,Fa as Y,Ga as p,Gc as C,Hc as y,Id as _,Ka as E,L as m,Pb as v,Ra as V,Rb as o,Sa as d,X as F,Xb as a,Yb as s,Zb as I,_a as Z,_b as P,bc as J,ca as B,dc as N,ec as l,hc as g,oc as f,pc as K,q as k,qc as h,sb as H,td as X,vd as w,wb as r,wd as U,x as Q,xa as q,xb as u,zc as W}from"./chunk-4X4JD2BX.mjs";import"./chunk-GHFNAT2I.mjs";var vt={backend:{occ:{endpoints:{product:{variants:"products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType"}}}}},st=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({providers:[z(vt)],imports:[_]})}}return e})();function ft(e,c){if(e&1&&(a(0,"option",4),f(1),s()),e&2){let i=c.$implicit,t=l();g("value",i.code),o("selected",i.code===(t.product==null?null:t.product.code)),r(),h(" ",t.getVariantOptionValue(i.variantOptionQualifiers)," ")}}function mt(e,c){if(e&1&&(a(0,"option",5),f(1),s()),e&2){let i=c.$implicit,t=l();g("value",i.code),o("selected",i.code===(t.product==null?null:t.product.code)),r(),h(" ",t.getVariantOptionValue(i.variantOptionQualifiers)," ")}}var gt=e=>({"selected-variant":e});function ht(e,c){if(e&1&&(a(0,"div",4),f(1),C(2,"cxTranslate"),a(3,"span",5),f(4),s()()),e&2){let i=l();r(),h(" ",y(2,2,"productVariants.style"),": "),r(3),K(i.getVariantOptionValue(i.variants==null?null:i.variants.selected.variantOptionQualifiers))}}function Ct(e,c){if(e&1){let i=J();a(0,"li",6)(1,"button",7),N("click",function(){let n=Z(i).$implicit,S=l();return G(S.changeStyle(n.code))}),I(2,"img",8),s()()}if(e&2){let i=c.$implicit,t=l();o("ngClass",W(4,gt,i.code===(t.variants==null||t.variants.selected==null?null:t.variants.selected.code))),r(2),g("src",t.getVariantThumbnailUrl(i.variantOptionQualifiers),H),g("title",t.getVariantOptionValue(i.variantOptionQualifiers)),g("alt",t.getVariantOptionValue(i.variantOptionQualifiers))}}function yt(e,c){if(e&1&&I(0,"cx-product-variant-style-selector",5),e&2){let i=l(3);o("variants",i.variants[i.variantType.STYLE])}}function _t(e,c){if(e&1&&I(0,"cx-product-variant-size-selector",6),e&2){let i=l(2).ngIf,t=l();o("product",i)("variants",t.variants[t.variantType.SIZE])}}function St(e,c){if(e&1&&I(0,"cx-product-variant-color-selector",6),e&2){let i=l(2).ngIf,t=l();o("product",i)("variants",t.variants[t.variantType.COLOR])}}function xt(e,c){if(e&1&&(a(0,"div",2),v(1,yt,1,1,"cx-product-variant-style-selector",3)(2,_t,1,2,"cx-product-variant-size-selector",4)(3,St,1,2,"cx-product-variant-color-selector",4),s()),e&2){let i=l(2);r(),o("ngIf",i.variants[i.variantType.STYLE]),r(),o("ngIf",i.variants[i.variantType.SIZE]),r(),o("ngIf",i.variants[i.variantType.COLOR])}}function Vt(e,c){if(e&1&&(P(0),v(1,xt,4,3,"div",1),M()),e&2){let i=c.ngIf;r(),o("ngIf",i.baseOptions==null?null:i.baseOptions.length)}}var It=(()=>{class e{constructor(i){this.routingService=i}changeColor(i,t){return i&&this.routingService.go({cxRoute:"product",params:{code:i,name:t}}),null}getVariantOptionValue(i){let t=i.find(n=>n.qualifier===T.COLOR);return t?t.value:""}static{this.\u0275fac=function(t){return new(t||e)(u($))}}static{this.\u0275cmp=V({type:e,selectors:[["cx-product-variant-color-selector"]],inputs:{product:"product",variants:"variants"},decls:7,vars:4,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:function(t,n){t&1&&(P(0),a(1,"div",0)(2,"div",1),f(3),C(4,"cxTranslate"),s(),a(5,"select",2),N("change",function(x){return n.changeColor(x.target.value,n.product==null?null:n.product.name)}),v(6,ft,2,3,"option",3),s()(),M()),t&2&&(r(3),h("",y(4,2,"productVariants.color"),":"),r(3),o("ngForOf",n.variants==null?null:n.variants.options))},dependencies:[w,R],encapsulation:2,changeDetection:0})}}return e})(),lt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[_,O,b,j]})}}return e})(),Pt=(()=>{class e{constructor(i,t){this.productService=i,this.routingService=t}changeSize(i){return i&&this.productService.get(i,"list").pipe(m(D),F(1)).subscribe(t=>{this.routingService.go({cxRoute:"product",params:t})}),null}getVariantOptionValue(i){let t=i.find(n=>n.qualifier===T.SIZE);return t?t.value:""}static{this.\u0275fac=function(t){return new(t||e)(u(L),u($))}}static{this.\u0275cmp=V({type:e,selectors:[["cx-product-variant-size-selector"]],inputs:{product:"product",variants:"variants"},decls:11,vars:10,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],["href","#",1,"size-guide",3,"title"],[3,"value","selected"]],template:function(t,n){t&1&&(P(0),a(1,"div",0)(2,"div",1),f(3),C(4,"cxTranslate"),s(),a(5,"select",2),N("change",function(x){return n.changeSize(x.target.value)}),v(6,mt,2,3,"option",3),s(),a(7,"a",4),C(8,"cxTranslate"),f(9),C(10,"cxTranslate"),s()(),M()),t&2&&(r(3),h("",y(4,4,"productVariants.size"),":"),r(3),o("ngForOf",n.variants==null?null:n.variants.options),r(),g("title",y(8,6,"productVariants.sizeGuideLabel")),r(2),h(" ",y(10,8,"productVariants.sizeGuideLabel")," "))},dependencies:[w,R],encapsulation:2,changeDetection:0})}}return e})(),pt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[_,O,b,j]})}}return e})(),Mt=(()=>{class e{constructor(i,t,n){this.config=i,this.productService=t,this.routingService=n,this.variantQualifier=T}getVariantOptionValue(i){let t=i.find(n=>n.qualifier===T.STYLE);return t?t.value:""}getVariantThumbnailUrl(i){let t=i.find(n=>n.image);return t?`${this.config?.backend?.occ?.baseUrl}${t.image?.url}`:""}changeStyle(i){return i&&this.productService.get(i,"list").pipe(m(D),F(1)).subscribe(t=>{this.routingService.go({cxRoute:"product",params:t})}),null}static{this.\u0275fac=function(t){return new(t||e)(u(nt),u(L),u($))}}static{this.\u0275cmp=V({type:e,selectors:[["cx-product-variant-style-selector"]],inputs:{variants:"variants"},decls:5,vars:2,consts:[[1,"variant-selector"],["class","variant-name",4,"ngIf"],[1,"variant-list"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"variant-name"],[1,"style-name"],[3,"ngClass"],[1,"variant-button",3,"click"],[3,"src","title","alt"]],template:function(t,n){t&1&&(P(0),a(1,"div",0),v(2,ht,5,4,"div",1),a(3,"ul",2),v(4,Ct,3,6,"li",3),s()(),M()),t&2&&(r(2),o("ngIf",n.variants.selected),r(2),o("ngForOf",n.variants==null?null:n.variants.options))},dependencies:[X,w,U,R],encapsulation:2,changeDetection:0})}}return e})(),dt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[_,O,b,j]})}}return e})(),Ot=(()=>{class e{constructor(i){this.currentProductService=i,this.variants={},this.variantType=it}ngOnInit(){this.product$=this.currentProductService.getProduct().pipe(m(ot),m(i=>!!i.baseOptions),B(),A(i=>{i.baseOptions.forEach(t=>{t?.variantType&&(this.variants[t.variantType]=t)})}))}static{this.\u0275fac=function(t){return new(t||e)(u(at))}}static{this.\u0275cmp=V({type:e,selectors:[["cx-product-variants-container"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","variant-section",4,"ngIf"],[1,"variant-section"],[3,"variants",4,"ngIf"],[3,"product","variants",4,"ngIf"],[3,"variants"],[3,"product","variants"]],template:function(t,n){t&1&&(v(0,Vt,2,1,"ng-container",0),C(1,"async")),t&2&&o("ngIf",y(1,1,n.product$))},dependencies:[U,Mt,Pt,It,tt],encapsulation:2,changeDetection:0})}}return e})(),Tt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[_,O,b,j,dt,pt,lt]})}}return e})(),Dt=(()=>{class e{constructor(i,t,n){this.productService=i,this.semanticPathService=t,this.router=n}canActivate(i){let t=i.params?.productCode;return t?this.productService.get(t,"variants").pipe(m(D),q(n=>{if(!n.purchasable){let S=this.findPurchasableProductCode(n);if(S)return this.productService.get(S,"list").pipe(m(D),F(1),Q(x=>this.router.createUrlTree(this.semanticPathService.transform({cxRoute:"product",params:x}))))}return k(!0)})):k(!0)}findPurchasableProductCode(i){if(i.variantOptions?.length){let t=i.variantOptions.filter(n=>n.stock&&n.stock.stockLevel?n:!1);return t&&t.length?t[0]?.code:i.variantOptions[0]?.code}}static{this.\u0275fac=function(t){return new(t||e)(E(L),E(rt),E(et))}}static{this.\u0275prov=Y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ut=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({providers:[z({cmsComponents:{ProductVariantSelectorComponent:{component:Ot,guards:[Dt]}}})],imports:[Tt,lt,pt,dt]})}}return e})();var At=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[st,ut]})}}return e})();export{At as ProductVariantsModule};

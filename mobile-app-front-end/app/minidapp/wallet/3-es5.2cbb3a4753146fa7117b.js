function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{hlMj:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),i=t("TOdT"),o=t("J9yG"),u=t("aaBP"),a=function(){function n(l,t,e,i,o,u){_classCallCheck(this,n),this.menu=l,this.minimaApiService=t,this.myTools=e,this.route=i,this.popoverController=o,this.http=u,this.tokenArr=[],this.tokenSpoof=[]}return _createClass(n,[{key:"ionViewWillEnter",value:function(){var n=this;this.$balanceSubscription=this.minimaApiService.$balance.subscribe((function(l){n.$balance=n.minimaApiService.$balance}))}},{key:"ionViewWillLeave",value:function(){this.$balanceSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){}},{key:"giveMe50",value:function(){var n=this;this.minimaApiService.giveMe50().then((function(l){n.myTools.presentAlert("Gimme50",!0===l.status?"Successful":l.message,"Status")}))}},{key:"loadData",value:function(n){var l=this;setTimeout((function(){console.log("Done"),n.target.complete(),5===l.tokenArr.length&&(n.target.disabled=!0)}),500)}},{key:"closeSliding",value:function(n){n.close()}},{key:"createIdenticon",value:function(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}},{key:"sendTokenOver",value:function(n,l){n.close(),this.route.navigate(["/send-funds/"+l])}},{key:"instanceOfToken",value:function(n){return"script"in n}}]),n}(),c=function(){return t.e(15).then(t.bind(null,"6gQK")).then((function(n){return n.ViewTokensPageModuleNgFactory}))},r=function n(){_classCallCheck(this,n)},p=t("pMnS"),s=t("MKJQ"),b=t("sZkV"),m=t("SVse"),f=t("iInd"),d=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"createIcon",value:function(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}}]),n}(),h=e.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.custom-icon[_ngcontent-%COMP%], .minima-icon[_ngcontent-%COMP%]{width:38px;height:35px}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:75px!important;max-height:75px!important}span.confirmed-amount[_ngcontent-%COMP%]{font-family:manrope-regular;color:#9898a3;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}ion-avatar[_ngcontent-%COMP%]{margin-top:2%;height:36px;width:36px}#token-name[_ngcontent-%COMP%]{margin:0;display:inline-block;white-space:nowrap;font-size:1rem!important;max-width:inherit;text-overflow:ellipsis;overflow:hidden;font-family:manrope-bold;color:var(--ion-color-tertiary)}ion-item[_ngcontent-%COMP%]:first-child{margin-top:1%}ion-item[_ngcontent-%COMP%]{opacity:1;--background:var(--ion-color-token);--background-activated:var(--ion-color-token);--background-activated-opacity:0.2;--background-hover:var(--ion-color-item-hover);--background-hover-opacity:1;background:var(--ion-color-token);border:1px solid var(--ion-color-item-border);border-radius:10px;margin-bottom:2%}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0}ion-item[_ngcontent-%COMP%]   ion-label#token-name[_ngcontent-%COMP%]{text-overflow:ellipsis;font-family:manrope-medium}ion-list[_ngcontent-%COMP%]{overflow:scroll}div.token-wrapper[_ngcontent-%COMP%]{max-width:98%;color:var(--ion-color-tertiary);display:flex;flex-direction:column}.blink_me[_ngcontent-%COMP%]{animation:1s linear infinite blinker}@keyframes blinker{50%{opacity:0}}"]],data:{}});function g(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.createIcon(l.parent.parent.context.$implicit.tokenid))}))}function k(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.createIcon(null==l.parent.parent.context.$implicit?null:l.parent.parent.context.$implicit.tokenid))}))}function v(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.parent.context.$implicit.icon)}))}function x(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["alt","minima"],["class","minima-icon"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function w(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","blink_me confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Jb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function y(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Jb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable+"/"+l.parent.parent.context.$implicit.unconfirmed)}))}function M(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Jb(1,null,[""," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function C(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,20,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,9,"ion-avatar",[["slot","start"]],null,null,null,s.F,s.b)),e.ob(2,49152,null,0,b.f,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,g)),e.ob(4,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,k)),e.ob(6,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,v)),e.ob(8,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,x)),e.ob(10,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(11,0,null,null,9,"div",[["class","token-wrapper"]],null,null,null,null,null)),(n()(),e.pb(12,0,null,null,2,"ion-label",[["id","token-name"]],null,null,null,s.T,s.p)),e.ob(13,49152,null,0,b.M,[e.h,e.k,e.x],null,null),(n()(),e.Jb(14,0,["",""])),(n()(),e.eb(16777216,null,null,1,null,w)),e.ob(16,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,y)),e.ob(18,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,M)),e.ob(20,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,4,0,"0x00"!==l.parent.context.$implicit.tokenid&&0===l.parent.context.$implicit.icon.length),n(l,6,0,"0x00"!==(null==l.parent.context.$implicit?null:l.parent.context.$implicit.tokenid)&&(null==l.parent.context.$implicit?null:l.parent.context.$implicit.icon.length)>0&&"avatar"===(null==l.parent.context.$implicit?null:l.parent.context.$implicit.icon)),n(l,8,0,"0x00"!==l.parent.context.$implicit.tokenid&&l.parent.context.$implicit.icon.length>0&&"avatar"!==l.parent.context.$implicit.icon),n(l,10,0,"0x00"===l.parent.context.$implicit.tokenid),n(l,16,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"!==l.parent.context.$implicit.mempool),n(l,18,0,"0"!=l.parent.context.$implicit.unconfirmed),n(l,20,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"==l.parent.context.$implicit.mempool)}),(function(n,l){n(l,14,0,l.parent.context.$implicit.token)}))}function $(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,6,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Bb(n,2).onClick()&&i),"click"===l&&(i=!1!==e.Bb(n,4).onClick(t)&&i),i}),s.S,s.l)),e.ob(1,49152,null,0,b.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),e.ob(2,16384,null,0,f.n,[f.m,f.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Cb(3,1),e.ob(4,737280,null,0,b.Jb,[m.h,b.Fb,e.k,f.m,[2,f.n]],null,null),(n()(),e.eb(16777216,null,0,1,null,C)),e.ob(6,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"none");var t=n(l,3,0,"view-tokens/"+l.context.$implicit.tokenid);n(l,2,0,t),n(l,4,0),n(l,6,0,"ERROR_UNKNOWN_TOKEN"!==l.context.$implicit.token)}),null)}function I(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,4,"ion-list",[],null,null,null,s.V,s.q)),e.ob(1,49152,null,0,b.N,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,2,null,$)),e.ob(3,278528,null,0,m.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(131072,m.b,[e.h])],(function(n,l){var t=l.component;n(l,3,0,e.Kb(l,3,0,e.Bb(l,4).transform(t.tokenArr)))}),null)}var _=t("6jz6"),O=t("LmEr"),P=t("IheW"),J=e.nb({encapsulation:0,styles:[[""]],data:{}});function j(n){return e.Lb(0,[e.Hb(671088640,1,{gimme50Btn:0}),(n()(),e.pb(1,0,null,null,22,"ion-app",[],null,null,null,s.E,s.a)),e.ob(2,49152,null,0,b.e,[e.h,e.k,e.x],null,null),(n()(),e.pb(3,0,null,0,13,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,s.M,s.i)),e.ob(4,49152,null,0,b.A,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.pb(5,0,null,0,11,"ion-toolbar",[],null,null,null,s.hb,s.D)),e.ob(6,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(n()(),e.pb(7,0,null,0,9,"ion-title",[],null,null,null,s.gb,s.C)),e.ob(8,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(n()(),e.pb(9,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,s.S,s.l)),e.ob(10,49152,null,0,b.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(11,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.menu.open()&&e),e}),s.N,s.j)),e.ob(12,49152,null,0,b.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.Jb(-1,0,[" Balance "])),(n()(),e.pb(14,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,s.S,s.l)),e.ob(15,49152,null,0,b.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.Jb(-1,0,[" All tokens "])),(n()(),e.pb(17,0,null,0,4,"ion-content",[["class","page-content"]],null,null,null,s.J,s.f)),e.ob(18,49152,null,0,b.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(19,0,null,0,2,"div",[["class","body"]],null,null,null,null,null)),(n()(),e.pb(20,0,null,null,1,"app-list-view",[],null,null,null,I,h)),e.ob(21,114688,null,0,d,[],{tokenArr:[0,"tokenArr"]},null),(n()(),e.pb(22,0,null,0,1,"app-footer",[],null,null,null,_.b,_.a)),e.ob(23,245760,null,0,O.a,[o.a,i.a],null,null)],(function(n,l){var t=l.component;n(l,4,0,"md"),n(l,10,0,"none"),n(l,12,0,"assets/menuIcon.svg"),n(l,15,0,"none"),n(l,21,0,t.$balance),n(l,23,0)}),null)}var L=e.lb("app-balance",a,(function(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"app-balance",[],null,null,null,j,J)),e.ob(1,114688,null,0,a,[b.Db,o.a,i.a,f.m,b.Ib,P.c],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),z=t("s7LF"),A=t("IA6j");t.d(l,"BalancePageModuleNgFactory",(function(){return S}));var S=e.mb(r,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[p.a,L]],[3,e.j],e.v]),e.zb(4608,m.l,m.k,[e.s,[2,m.u]]),e.zb(4608,b.b,b.b,[e.x,e.g]),e.zb(4608,b.Eb,b.Eb,[b.b,e.j,e.p]),e.zb(4608,b.Ib,b.Ib,[b.b,e.j,e.p]),e.zb(4608,z.p,z.p,[]),e.zb(1073742336,m.c,m.c,[]),e.zb(1073742336,b.Ab,b.Ab,[]),e.zb(1073742336,A.a,A.a,[]),e.zb(1073742336,z.o,z.o,[]),e.zb(1073742336,z.e,z.e,[]),e.zb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),e.zb(1073742336,r,r,[]),e.zb(1024,f.k,(function(){return[[{path:"",component:a,pathMatch:"full"},{path:"view-tokens/:id",loadChildren:c}]]}),[])])}))}}]);
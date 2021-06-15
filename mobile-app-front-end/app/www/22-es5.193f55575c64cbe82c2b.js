function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var o=0;o<l.length;o++){var t=l[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,o){return l&&_defineProperties(n.prototype,l),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{qedB:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),u=o("mrSG"),e=o("oWBL"),i=o("TOdT"),a=o("J9yG"),c=o("aaBP"),r=function(){function n(l,o,t,u,e){_classCallCheck(this,n),this.menu=l,this.minimaApiService=o,this.contactService=t,this.router=u,this.myTools=e,this.tokenIcon="",this.tokenName="",this.recipientName="",this.status="Confirm"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var n=this;this.$subscription=this.minimaApiService.$urlData.subscribe((function(l){n.data=l,n.$contacts=n.contactService.data.subscribe((function(l){l.forEach((function(l){l.ADDRESS===n.data.address&&(n.recipientName=l.NAME)}))})),n.$balance=n.minimaApiService.$balance.subscribe((function(l){l.forEach((function(l){l.tokenid===n.data.tokenid&&(n.tokenName=l.token,"0x00"!==l.tokenid&&l.icon.length>0&&(n.tokenIcon=l.icon))}))}))}))}},{key:"ionViewWillLeave",value:function(){this.$subscription&&this.$contacts&&this.$balance&&(this.$subscription.unsubscribe(),this.$contacts.unsubscribe(),this.$balance.unsubscribe())}},{key:"createIcon",value:function(n){return this.avatar="https://www.gravatar.com/avatar/"+c.hash(n)+"?d=identicon"}},{key:"sendFunds",value:function(n){this.status="";var l=n;try{this.post(l)}catch(o){console.log(o)}}},{key:"post",value:function(n){return u.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var o,t,u=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(this.confirmBtn.disabled=!0,this.cancelBtn.disabled=!0,null===n.message||!(n.message||n.message.length>0)){l.next=7;break}return l.next=3,this.minimaApiService.sendMessageTransaction(n);case 3:(o=l.sent).status?(this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.router.navigate(["/send-funds"]),this.status="Posted!"):(setTimeout((function(){u.confirmBtn.disabled=!1,u.cancelBtn.disabled=!1,u.status="Confirm"}),500),this.myTools.presentAlert("Transaction Status",o.message,"Failed")),l.next=11;break;case 7:return l.next=9,this.minimaApiService.sendFunds(n);case 9:(t=l.sent).status?(this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.router.navigate(["/send-funds"]),this.status="Posted!"):(setTimeout((function(){u.confirmBtn.disabled=!1,u.cancelBtn.disabled=!1,u.status="Confirm"}),500),this.myTools.presentAlert("Transaction Status",t.message,"Failed"));case 11:case"end":return l.stop()}}),l,this)})))}}]),n}(),s=function n(){_classCallCheck(this,n)},b=o("pMnS"),d=o("MKJQ"),p=o("sZkV"),g=o("SVse"),f=o("iInd"),m=o("6jz6"),h=o("LmEr"),k=t.nb({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]{margin-top:14px;border:1px solid var(--ion-color-item-border);border-radius:10px;background-color:var(--ion-color-token);padding-left:10px;padding-right:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:var(--ion-color-token);--inner-padding-end:0;color:var(--ion-color-tertiary);border-bottom:1px solid var(--ion-color-item-border)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:27px;display:none;color:var(--ion-color-primary);position:absolute}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label#tokenName[_ngcontent-%COMP%]{margin-left:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.6}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{border-bottom:none}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;display:flex;align-items:flex-end;justify-content:flex-end}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:35px;width:164px;font-family:manrope-bold;text-transform:none}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#confirm[_ngcontent-%COMP%]{color:#fafaff;background-color:var(--ion-color-primary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#confirm[_ngcontent-%COMP%]:hover{--background:#346EE5}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#cancel[_ngcontent-%COMP%]{margin-right:10px;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#cancel[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover);color:var(--ion-color-tertiary);border-color:var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-bottom:10px;padding-top:10px;color:var(--ion-color-tertiary)}ion-label.invalid[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}ion-label.invalid[_ngcontent-%COMP%]   a#link[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]],data:{}});function v(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,13,"ion-content",[["class","page-content"]],null,null,null,d.J,d.f)),t.ob(1,49152,null,0,p.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,11,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(3,49152,null,0,p.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,9,"ion-col",[["class","ion-text-center"]],null,null,null,d.I,d.e)),t.ob(5,49152,null,0,p.s,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,7,"ion-label",[["class","invalid"]],null,null,null,d.T,d.p)),t.ob(7,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,[" Invalid transaction, please try "])),(n()(),t.pb(9,0,null,0,4,"a",[["id","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Bb(n,10).onClick(o)&&u),"click"===l&&(u=!1!==t.Bb(n,11).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&u),u}),null,null)),t.ob(10,737280,null,0,p.Ib,[g.h,p.Fb,t.k,f.m,[2,f.n]],null,null),t.ob(11,671744,null,0,f.p,[f.m,f.a,g.h],{routerLink:[0,"routerLink"]},null),t.Cb(12,1),(n()(),t.Ib(-1,null,["again."]))],(function(n,l){n(l,10,0);var o=n(l,12,0,"/send-funds");n(l,11,0,o)}),(function(n,l){n(l,9,0,t.Bb(l,11).target,t.Bb(l,11).href)}))}function C(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var o=l.component;n(l,0,0,o.createIcon(null==o.data?null:o.data.tokenid))}))}function M(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.tokenIcon)}))}function x(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon-big"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function P(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(1,null,["",""]))],null,(function(n,l){var o=l.component;n(l,1,0,null==o.data?null:o.data.tokenid)}))}function _(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(1,null,[" "," "]))],null,(function(n,l){var o=l.component;n(l,1,0,(null==o.data?null:o.data.tokenid.substring(0,6))+"..."+(null==o.data?null:o.data.tokenid.substring((null==o.data?null:o.data.tokenid.length)-3,null==o.data?null:o.data.tokenid.length)))}))}function I(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[["color","primary"]],null,null,null,null,null)),(n()(),t.Ib(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.recipientName)}))}function O(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,d.db,d.z)),t.ob(1,49152,null,0,p.ob,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function y(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,63,"ion-content",[["class","page-content"]],null,null,null,d.J,d.f)),t.ob(1,49152,null,0,p.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,37,"ion-list",[["lines","none"]],null,null,null,d.V,d.q)),t.ob(3,49152,null,0,p.N,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(4,0,null,0,17,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(5,49152,null,0,p.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,7,"ion-avatar",[],null,null,null,d.F,d.b)),t.ob(7,49152,null,0,p.f,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,C)),t.ob(9,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,M)),t.ob(11,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,x)),t.ob(13,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(14,0,null,0,7,"ion-label",[["id","tokenName"]],null,null,null,d.T,d.p)),t.ob(15,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(16,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(17,null,["",""])),(n()(),t.eb(16777216,null,0,1,null,P)),t.ob(19,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,_)),t.ob(21,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(22,0,null,0,9,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(23,49152,null,0,p.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(24,0,null,0,7,"ion-label",[],null,null,null,d.T,d.p)),t.ob(25,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(26,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Receiving address"])),(n()(),t.eb(16777216,null,0,1,null,I)),t.ob(29,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(30,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(31,null,["",""])),(n()(),t.pb(32,0,null,0,7,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(33,49152,null,0,p.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(34,0,null,0,5,"ion-label",[],null,null,null,d.T,d.p)),t.ob(35,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(36,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Amount to send"])),(n()(),t.pb(38,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(39,null,["",""])),(n()(),t.pb(40,0,null,0,23,"ion-grid",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.L,d.h)),t.ob(41,49152,null,0,p.z,[t.h,t.k,t.x],null,null),(n()(),t.pb(42,0,null,0,6,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(43,49152,null,0,p.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(44,0,null,0,4,"ion-col",[],null,null,null,d.I,d.e)),t.ob(45,49152,null,0,p.s,[t.h,t.k,t.x],null,null),(n()(),t.pb(46,0,null,0,2,"ion-label",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.T,d.p)),t.ob(47,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,[" Please check and confirm the details are correct before you proceed. "])),(n()(),t.pb(49,0,null,0,14,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(50,49152,null,0,p.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(51,0,null,0,12,"ion-col",[["class","ion-no-padding ion-no-margin"],["sizeXs","12"]],null,null,null,d.I,d.e)),t.ob(52,49152,null,0,p.s,[t.h,t.k,t.x],{sizeXs:[0,"sizeXs"]},null),(n()(),t.pb(53,0,null,0,5,"ion-button",[["fill","clear"],["id","cancel"]],null,[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Bb(n,55).onClick()&&u),"click"===l&&(u=!1!==t.Bb(n,57).onClick(o)&&u),u}),d.G,d.c)),t.ob(54,49152,[[2,4],["cancelBtn",4]],0,p.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),t.ob(55,16384,null,0,f.n,[f.m,f.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(56,1),t.ob(57,737280,null,0,p.Ib,[g.h,p.Fb,t.k,f.m,[2,f.n]],null,null),(n()(),t.Ib(-1,0,["Cancel"])),(n()(),t.pb(59,0,null,0,4,"ion-button",[["fill","clear"],["id","confirm"]],null,[[null,"click"]],(function(n,l,o){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.sendFunds(u.data)&&t),t}),d.G,d.c)),t.ob(60,49152,[[1,4],["confirmBtn",4]],0,p.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Ib(61,0,[" "," "])),(n()(),t.eb(16777216,null,0,1,null,O)),t.ob(63,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var o=l.component;n(l,3,0,"none"),n(l,9,0,"0x00"!==(null==o.data?null:o.data.tokenid)&&0===o.tokenIcon.length),n(l,11,0,"0x00"!==(null==o.data?null:o.data.tokenid)&&o.tokenIcon.length>0),n(l,13,0,"0x00"===(null==o.data?null:o.data.tokenid)),n(l,19,0,"0x00"===(null==o.data?null:o.data.tokenid)),n(l,21,0,"0x00"!==(null==o.data?null:o.data.tokenid)),n(l,29,0,o.recipientName.length>0),n(l,52,0,"12"),n(l,54,0,"clear");var t=n(l,56,0,"/send-funds");n(l,55,0,t),n(l,57,0),n(l,60,0,"clear"),n(l,63,0,""===o.status)}),(function(n,l){var o=l.component;n(l,17,0,o.tokenName),n(l,31,0,null==o.data?null:o.data.address),n(l,39,0,null==o.data?null:o.data.amount),n(l,61,0,o.status)}))}function w(n){return t.Kb(0,[t.Gb(671088640,1,{confirmBtn:0}),t.Gb(671088640,2,{cancelBtn:0}),(n()(),t.pb(2,0,null,null,13,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,d.M,d.i)),t.ob(3,49152,null,0,p.A,[t.h,t.k,t.x],{mode:[0,"mode"]},null),(n()(),t.pb(4,0,null,0,11,"ion-toolbar",[],null,null,null,d.hb,d.D)),t.ob(5,49152,null,0,p.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,9,"ion-title",[],null,null,null,d.gb,d.C)),t.ob(7,49152,null,0,p.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,d.S,d.l)),t.ob(9,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(10,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.menu.open()&&t),t}),d.N,d.j)),t.ob(11,49152,null,0,p.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(n()(),t.Ib(-1,0,[" Send "])),(n()(),t.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,d.S,d.l)),t.ob(14,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.Ib(-1,0,[" Transaction confirmation "])),(n()(),t.eb(16777216,null,null,1,null,v)),t.ob(17,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,y)),t.ob(19,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(20,0,null,null,1,"app-footer",[],null,null,null,m.b,m.a)),t.ob(21,245760,null,0,h.a,[a.a,i.a],null,null)],(function(n,l){var o=l.component;n(l,3,0,"md"),n(l,9,0,"none"),n(l,11,0,"assets/menuIcon.svg"),n(l,14,0,"none"),n(l,17,0,!(null!=o.data&&o.data.tokenid)),n(l,19,0,null==o.data?null:o.data.tokenid),n(l,21,0)}),null)}var S=t.lb("app-confirmation",r,(function(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"app-confirmation",[],null,null,null,w,k)),t.ob(1,114688,null,0,r,[p.Db,a.a,e.a,f.m,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),T=o("s7LF"),j=o("IA6j");o.d(l,"ConfirmationPageModuleNgFactory",(function(){return B}));var B=t.mb(s,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[b.a,S]],[3,t.j],t.v]),t.zb(4608,g.l,g.k,[t.s,[2,g.u]]),t.zb(4608,T.o,T.o,[]),t.zb(4608,p.b,p.b,[t.x,t.g]),t.zb(4608,p.Eb,p.Eb,[p.b,t.j,t.p]),t.zb(4608,p.Hb,p.Hb,[p.b,t.j,t.p]),t.zb(1073742336,g.c,g.c,[]),t.zb(1073742336,T.n,T.n,[]),t.zb(1073742336,T.e,T.e,[]),t.zb(1073742336,p.Ab,p.Ab,[]),t.zb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),t.zb(1073742336,j.a,j.a,[]),t.zb(1073742336,s,s,[]),t.zb(1024,f.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
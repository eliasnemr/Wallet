(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{qedB:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),u=o("mrSG"),i=o("oWBL"),e=o("TOdT"),a=o("J9yG"),c=o("aaBP");class r{constructor(n,l,o,t,u){this.menu=n,this.minimaApiService=l,this.contactService=o,this.router=t,this.myTools=u,this.tokenIcon="",this.tokenName="",this.recipientName="",this.status="Confirm"}ngOnInit(){}ionViewWillEnter(){this.$subscription=this.minimaApiService.$urlData.subscribe(n=>{this.data=n,this.$contacts=this.contactService.data.subscribe(n=>{n.forEach(n=>{n.ADDRESS===this.data.address&&(this.recipientName=n.NAME)})}),this.$balance=this.minimaApiService.$balance.subscribe(n=>{n.forEach(n=>{n.tokenid===this.data.tokenid&&(this.tokenName=n.token,"0x00"!==n.tokenid&&n.icon.length>0&&(this.tokenIcon=n.icon))})})})}ionViewWillLeave(){this.$subscription&&this.$contacts&&this.$balance&&(this.$subscription.unsubscribe(),this.$contacts.unsubscribe(),this.$balance.unsubscribe())}createIcon(n){return this.avatar="https://www.gravatar.com/avatar/"+c.hash(n)+"?d=identicon"}sendFunds(n){this.status="";const l=n;try{this.post(l)}catch(o){console.log(o)}}post(n){return u.a(this,void 0,void 0,(function*(){if(this.confirmBtn.disabled=!0,this.cancelBtn.disabled=!0,null!==n.message&&(n.message||n.message.length>0)){const l=yield this.minimaApiService.sendMessageTransaction(n);l.status?(this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.router.navigate(["/send-funds"]),this.status="Posted!"):(setTimeout(()=>{this.confirmBtn.disabled=!1,this.cancelBtn.disabled=!1,this.status="Confirm"},500),this.myTools.presentAlert("Transaction Status",l.message,"Failed"))}else{const l=yield this.minimaApiService.sendFunds(n);l.status?(this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.router.navigate(["/send-funds"]),this.status="Posted!"):(setTimeout(()=>{this.confirmBtn.disabled=!1,this.cancelBtn.disabled=!1,this.status="Confirm"},500),this.myTools.presentAlert("Transaction Status",l.message,"Failed"))}}))}}class s{}var b=o("pMnS"),d=o("MKJQ"),g=o("sZkV"),p=o("SVse"),m=o("iInd"),h=o("6jz6"),f=o("LmEr"),k=t.nb({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]{margin-top:14px;border:1px solid var(--ion-color-item-border);border-radius:10px;background-color:var(--ion-color-token);padding-left:10px;padding-right:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:var(--ion-color-token);--inner-padding-end:0;color:var(--ion-color-tertiary);border-bottom:1px solid var(--ion-color-item-border)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:27px;display:none;color:var(--ion-color-primary);position:absolute}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label#tokenName[_ngcontent-%COMP%]{margin-left:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.6}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{border-bottom:none}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;display:flex;align-items:flex-end;justify-content:flex-end}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:35px;width:164px;font-family:manrope-bold;text-transform:none}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#confirm[_ngcontent-%COMP%]{color:#fafaff;background-color:var(--ion-color-primary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#confirm[_ngcontent-%COMP%]:hover{--background:#346EE5}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#cancel[_ngcontent-%COMP%]{margin-right:10px;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button#cancel[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover);color:var(--ion-color-tertiary);border-color:var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-bottom:10px;padding-top:10px;color:var(--ion-color-tertiary)}ion-label.invalid[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}ion-label.invalid[_ngcontent-%COMP%]   a#link[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]],data:{}});function M(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,13,"ion-content",[["class","page-content"]],null,null,null,d.J,d.f)),t.ob(1,49152,null,0,g.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,11,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(3,49152,null,0,g.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,9,"ion-col",[["class","ion-text-center"]],null,null,null,d.I,d.e)),t.ob(5,49152,null,0,g.s,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,7,"ion-label",[["class","invalid"]],null,null,null,d.T,d.p)),t.ob(7,49152,null,0,g.M,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,[" Invalid transaction, please try "])),(n()(),t.pb(9,0,null,0,4,"a",[["id","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Bb(n,10).onClick(o)&&u),"click"===l&&(u=!1!==t.Bb(n,11).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&u),u}),null,null)),t.ob(10,737280,null,0,g.Ib,[p.h,g.Fb,t.k,m.m,[2,m.n]],null,null),t.ob(11,671744,null,0,m.p,[m.m,m.a,p.h],{routerLink:[0,"routerLink"]},null),t.Cb(12,1),(n()(),t.Ib(-1,null,["again."]))],(function(n,l){n(l,10,0);var o=n(l,12,0,"/send-funds");n(l,11,0,o)}),(function(n,l){n(l,9,0,t.Bb(l,11).target,t.Bb(l,11).href)}))}function v(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var o=l.component;n(l,0,0,o.createIcon(null==o.data?null:o.data.tokenid))}))}function C(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.tokenIcon)}))}function x(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon-big"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function P(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(1,null,["",""]))],null,(function(n,l){var o=l.component;n(l,1,0,null==o.data?null:o.data.tokenid)}))}function I(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(1,null,[" "," "]))],null,(function(n,l){var o=l.component;n(l,1,0,(null==o.data?null:o.data.tokenid.substring(0,6))+"..."+(null==o.data?null:o.data.tokenid.substring((null==o.data?null:o.data.tokenid.length)-3,null==o.data?null:o.data.tokenid.length)))}))}function O(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"p",[["color","primary"]],null,null,null,null,null)),(n()(),t.Ib(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.recipientName)}))}function _(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,d.db,d.z)),t.ob(1,49152,null,0,g.ob,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function y(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,63,"ion-content",[["class","page-content"]],null,null,null,d.J,d.f)),t.ob(1,49152,null,0,g.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,37,"ion-list",[["lines","none"]],null,null,null,d.V,d.q)),t.ob(3,49152,null,0,g.N,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(4,0,null,0,17,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(5,49152,null,0,g.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,7,"ion-avatar",[],null,null,null,d.F,d.b)),t.ob(7,49152,null,0,g.f,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,v)),t.ob(9,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,C)),t.ob(11,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,x)),t.ob(13,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(14,0,null,0,7,"ion-label",[["id","tokenName"]],null,null,null,d.T,d.p)),t.ob(15,49152,null,0,g.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(16,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(17,null,["",""])),(n()(),t.eb(16777216,null,0,1,null,P)),t.ob(19,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,I)),t.ob(21,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(22,0,null,0,9,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(23,49152,null,0,g.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(24,0,null,0,7,"ion-label",[],null,null,null,d.T,d.p)),t.ob(25,49152,null,0,g.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(26,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Receiving address"])),(n()(),t.eb(16777216,null,0,1,null,O)),t.ob(29,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(30,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(31,null,["",""])),(n()(),t.pb(32,0,null,0,7,"ion-item",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.S,d.l)),t.ob(33,49152,null,0,g.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(34,0,null,0,5,"ion-label",[],null,null,null,d.T,d.p)),t.ob(35,49152,null,0,g.M,[t.h,t.k,t.x],null,null),(n()(),t.pb(36,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Amount to send"])),(n()(),t.pb(38,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(39,null,["",""])),(n()(),t.pb(40,0,null,0,23,"ion-grid",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.L,d.h)),t.ob(41,49152,null,0,g.z,[t.h,t.k,t.x],null,null),(n()(),t.pb(42,0,null,0,6,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(43,49152,null,0,g.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(44,0,null,0,4,"ion-col",[],null,null,null,d.I,d.e)),t.ob(45,49152,null,0,g.s,[t.h,t.k,t.x],null,null),(n()(),t.pb(46,0,null,0,2,"ion-label",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.T,d.p)),t.ob(47,49152,null,0,g.M,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,[" Please check and confirm the details are correct before you proceed. "])),(n()(),t.pb(49,0,null,0,14,"ion-row",[],null,null,null,d.Z,d.v)),t.ob(50,49152,null,0,g.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(51,0,null,0,12,"ion-col",[["class","ion-no-padding ion-no-margin"]],null,null,null,d.I,d.e)),t.ob(52,49152,null,0,g.s,[t.h,t.k,t.x],null,null),(n()(),t.pb(53,0,null,0,5,"ion-button",[["fill","clear"],["id","cancel"]],null,[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Bb(n,55).onClick()&&u),"click"===l&&(u=!1!==t.Bb(n,57).onClick(o)&&u),u}),d.G,d.c)),t.ob(54,49152,[[2,4],["cancelBtn",4]],0,g.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),t.ob(55,16384,null,0,m.n,[m.m,m.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(56,1),t.ob(57,737280,null,0,g.Ib,[p.h,g.Fb,t.k,m.m,[2,m.n]],null,null),(n()(),t.Ib(-1,0,["Cancel"])),(n()(),t.pb(59,0,null,0,4,"ion-button",[["fill","clear"],["id","confirm"]],null,[[null,"click"]],(function(n,l,o){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.sendFunds(u.data)&&t),t}),d.G,d.c)),t.ob(60,49152,[[1,4],["confirmBtn",4]],0,g.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Ib(61,0,[" "," "])),(n()(),t.eb(16777216,null,0,1,null,_)),t.ob(63,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var o=l.component;n(l,3,0,"none"),n(l,9,0,"0x00"!==(null==o.data?null:o.data.tokenid)&&0===o.tokenIcon.length),n(l,11,0,"0x00"!==(null==o.data?null:o.data.tokenid)&&o.tokenIcon.length>0),n(l,13,0,"0x00"===(null==o.data?null:o.data.tokenid)),n(l,19,0,"0x00"===(null==o.data?null:o.data.tokenid)),n(l,21,0,"0x00"!==(null==o.data?null:o.data.tokenid)),n(l,29,0,o.recipientName.length>0),n(l,54,0,"clear");var t=n(l,56,0,"/send-funds");n(l,55,0,t),n(l,57,0),n(l,60,0,"clear"),n(l,63,0,""===o.status)}),(function(n,l){var o=l.component;n(l,17,0,o.tokenName),n(l,31,0,null==o.data?null:o.data.address),n(l,39,0,null==o.data?null:o.data.amount),n(l,61,0,o.status)}))}function w(n){return t.Kb(0,[t.Gb(671088640,1,{confirmBtn:0}),t.Gb(671088640,2,{cancelBtn:0}),(n()(),t.pb(2,0,null,null,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,d.M,d.i)),t.ob(3,49152,null,0,g.A,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,11,"ion-toolbar",[],null,null,null,d.hb,d.D)),t.ob(5,49152,null,0,g.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,9,"ion-title",[],null,null,null,d.gb,d.C)),t.ob(7,49152,null,0,g.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,d.S,d.l)),t.ob(9,49152,null,0,g.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(10,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.menu.open()&&t),t}),d.N,d.j)),t.ob(11,49152,null,0,g.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(n()(),t.Ib(-1,0,[" Send "])),(n()(),t.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,d.S,d.l)),t.ob(14,49152,null,0,g.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.Ib(-1,0,[" Transaction confirmation "])),(n()(),t.eb(16777216,null,null,1,null,M)),t.ob(17,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,y)),t.ob(19,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(20,0,null,null,1,"app-footer",[],null,null,null,h.b,h.a)),t.ob(21,245760,null,0,f.a,[a.a,e.a],null,null)],(function(n,l){var o=l.component;n(l,9,0,"none"),n(l,11,0,"assets/menuIcon.svg"),n(l,14,0,"none"),n(l,17,0,!(null!=o.data&&o.data.tokenid)),n(l,19,0,null==o.data?null:o.data.tokenid),n(l,21,0)}),null)}function S(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"app-confirmation",[],null,null,null,w,k)),t.ob(1,114688,null,0,r,[g.Db,a.a,i.a,m.m,e.a],null,null)],(function(n,l){n(l,1,0)}),null)}var T=t.lb("app-confirmation",r,S,{},{},[]),B=o("s7LF"),j=o("IA6j");o.d(l,"ConfirmationPageModuleNgFactory",(function(){return z}));var z=t.mb(s,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[b.a,T]],[3,t.j],t.v]),t.zb(4608,p.l,p.k,[t.s,[2,p.u]]),t.zb(4608,B.o,B.o,[]),t.zb(4608,g.b,g.b,[t.x,t.g]),t.zb(4608,g.Eb,g.Eb,[g.b,t.j,t.p]),t.zb(4608,g.Hb,g.Hb,[g.b,t.j,t.p]),t.zb(1073742336,p.c,p.c,[]),t.zb(1073742336,B.n,B.n,[]),t.zb(1073742336,B.e,B.e,[]),t.zb(1073742336,g.Ab,g.Ab,[]),t.zb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),t.zb(1073742336,j.a,j.a,[]),t.zb(1073742336,s,s,[]),t.zb(1024,m.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
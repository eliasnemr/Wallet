(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Sfwq:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),i=u("TOdT"),t=u("J9yG");u("wd/R");class e{constructor(l,n,u){this.route=l,this.api=n,this.myTools=u,this.transactionID="",this.hide=!1,this.loading=!0,this.message=""}ionViewWillEnter(){this.transactionID=this.route.snapshot.paramMap.get("id")}ngOnInit(){}giveMe50(){this.api.giveMe50().then(l=>{this.myTools.presentAlert("Gimme50",!0===l.status?"Successful":l.message,"Status")})}copy(l){this.myTools.copy(l)}}class b{}var s=u("pMnS"),a=u("MKJQ"),c=u("sZkV"),p=u("SVse"),r=u("iInd"),d=o.nb({encapsulation:0,styles:[["ion-list#input-details[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%], ion-list#transaction-details[_ngcontent-%COMP%]{margin:0;padding:0}div#inputs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], div#outputs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-item-border)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-list#input-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(0), ion-list#output-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(0){margin-left:0!important}ion-list#input-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:16px;padding-left:0}ion-list#input-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid var(--ion-color-item-border)}ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child   ion-label[_ngcontent-%COMP%]{margin-top:3px!important}ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:0;margin-bottom:6px}ion-item#last-child[_ngcontent-%COMP%]{--border-color:#001C32!important;--border-width:0 0 1px 0}.copy[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;font-size:.8rem}ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:var(--ion-color-ruler);--border-width:0px 0px 1px 0px;--inner-padding-end:0;font-size:16px;font-family:manrope-bold}.title[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:1rem;text-overflow:ellipsis;max-width:inherit;white-space:normal;word-wrap:normal;color:var(--ion-color-color)}.value[_ngcontent-%COMP%]{font-family:manrope-regular;text-align:left;white-space:nowrap;text-overflow:ellipsis;max-width:inherit;overflow:hidden;color:var(--ion-color-color);opacity:.7}.wrap[_ngcontent-%COMP%]{white-space:normal!important;text-overflow:clip!important;overflow:auto!important}.relay[_ngcontent-%COMP%]{display:inline-block;width:100%}.chevron[_ngcontent-%COMP%]{width:15px}.completed[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-primary)}"]],data:{}});function m(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,8,"ion-grid",[],null,null,null,a.V,a.l)),o.ob(1,49152,null,0,c.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,6,"ion-row",[],null,null,null,a.kb,a.A)),o.ob(3,49152,null,0,c.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,a.S,a.i)),o.ob(5,49152,null,0,c.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(6,0,null,0,2,"ion-label",[],null,null,null,a.db,a.t)),o.ob(7,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Invalid transaction ID!"]))],(function(l,n){l(n,5,0,"12")}),null)}function h(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,12,"ion-grid",[],null,null,null,a.V,a.l)),o.ob(1,49152,null,0,c.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,10,"ion-row",[],null,null,null,a.kb,a.A)),o.ob(3,49152,null,0,c.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,a.S,a.i)),o.ob(5,49152,null,0,c.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(6,0,null,0,2,"ion-label",[],null,null,null,a.db,a.t)),o.ob(7,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Fetching transaction details..."])),(l()(),o.pb(9,0,null,0,3,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,a.S,a.i)),o.ob(10,49152,null,0,c.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(11,0,null,0,1,"ion-spinner",[["name","crescent"]],null,null,null,a.ob,a.E)),o.ob(12,49152,null,0,c.ob,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,5,0,"12"),l(n,10,0,"12"),l(n,12,0,"crescent")}),null)}function x(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(1,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(3,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Public message"])),(l()(),o.pb(6,0,null,0,1,"p",[["class","value"],["style","white-space: normal;"]],null,null,null,null,null)),(l()(),o.Hb(7,null,[" ",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,n.component.message)}))}function g(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(1,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(3,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Token name"])),(l()(),o.pb(6,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,n.component.myTxn.txpow.body.txn.tokengen.token)}))}function k(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(1,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(3,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Token total"])),(l()(),o.pb(6,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,n.component.myTxn.txpow.body.txn.tokengen.total)}))}function f(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,35,null,null,null,null,null,null,null)),(l()(),o.pb(1,0,null,null,34,"div",[["id","inputs"]],null,null,null,null,null)),(l()(),o.pb(2,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(3,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(4,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(5,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Index"])),(l()(),o.pb(8,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(9,null,["",""])),(l()(),o.pb(10,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(11,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(12,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(13,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(14,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Coin ID"])),(l()(),o.pb(16,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(17,null,["",""])),(l()(),o.pb(18,0,null,null,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(19,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(20,0,null,0,7,"ion-label",[],null,null,null,a.db,a.t)),o.ob(21,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,[" Recipient address "])),(l()(),o.pb(24,0,null,null,1,"a",[["class","copy"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.copy(l.context.$implicit.mxaddress)&&o),o}),null,null)),(l()(),o.Hb(-1,null,[" Copy "])),(l()(),o.pb(26,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(27,null,["",""])),(l()(),o.pb(28,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","full"]],null,null,null,a.cb,a.p)),o.ob(29,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(30,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(31,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(32,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Amount"])),(l()(),o.pb(34,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(35,null,["",""]))],(function(l,n){l(n,3,0,"none"),l(n,11,0,"none"),l(n,19,0,"none"),l(n,29,0,"full")}),(function(l,n){l(n,9,0,"#"+n.context.index),l(n,17,0,n.context.$implicit.coinid),l(n,27,0,n.context.$implicit.mxaddress),l(n,35,0,n.context.$implicit.amount)}))}function M(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,35,null,null,null,null,null,null,null)),(l()(),o.pb(1,0,null,null,34,"div",[["id","outputs"]],null,null,null,null,null)),(l()(),o.pb(2,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(3,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(4,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(5,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Index"])),(l()(),o.pb(8,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(9,null,["",""])),(l()(),o.pb(10,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(11,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(12,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(13,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(14,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Coin ID"])),(l()(),o.pb(16,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(17,null,["",""])),(l()(),o.pb(18,0,null,null,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(19,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(20,0,null,0,7,"ion-label",[],null,null,null,a.db,a.t)),o.ob(21,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Outgoing address "])),(l()(),o.pb(24,0,null,null,1,"a",[["class","copy"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.copy(l.context.$implicit.mxaddress)&&o),o}),null,null)),(l()(),o.Hb(-1,null,[" Copy "])),(l()(),o.pb(26,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(27,null,["",""])),(l()(),o.pb(28,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","full"]],null,null,null,a.cb,a.p)),o.ob(29,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(30,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(31,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(32,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Amount"])),(l()(),o.pb(34,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(35,null,["",""]))],(function(l,n){l(n,3,0,"none"),l(n,11,0,"none"),l(n,19,0,"none"),l(n,29,0,"full")}),(function(l,n){l(n,9,0,"#"+n.context.index),l(n,17,0,n.context.$implicit.coinid),l(n,27,0,n.context.$implicit.mxaddress),l(n,35,0,n.context.$implicit.amount)}))}function y(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,77,"ion-grid",[["class","ion-no-padding"]],null,null,null,a.V,a.l)),o.ob(1,49152,null,0,c.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,57,"ion-list",[["class","ion-no-padding"],["id","transaction-details"]],null,null,null,a.fb,a.u)),o.ob(3,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(5,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(6,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(7,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Status"])),(l()(),o.pb(10,0,null,0,1,"p",[["class","value completed"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Completed"])),(l()(),o.pb(12,0,null,0,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(13,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(14,0,null,0,7,"ion-label",[],null,null,null,a.db,a.t)),o.ob(15,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(16,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Hash "])),(l()(),o.pb(18,0,null,null,1,"a",[["class","copy"]],null,[[null,"click"]],(function(l,n,u){var o=!0,i=l.component;return"click"===n&&(o=!1!==i.copy(i.myTxn.txpow.txpowid)&&o),o}),null,null)),(l()(),o.Hb(-1,null,[" Copy "])),(l()(),o.pb(20,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(21,null,[" ",""])),(l()(),o.pb(22,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(23,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(24,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(25,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(26,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Date & time"])),(l()(),o.pb(28,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(29,null,[" ",""])),(l()(),o.eb(16777216,null,0,1,null,x)),o.ob(31,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(32,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(33,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(34,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(35,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(36,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Size"])),(l()(),o.pb(38,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(39,null,[" ",""])),(l()(),o.pb(40,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(41,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(42,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(43,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(44,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["In block"])),(l()(),o.pb(46,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(47,null,["",""])),(l()(),o.eb(16777216,null,0,1,null,g)),o.ob(49,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,k)),o.ob(51,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(52,0,null,0,7,"ion-item",[["class","ion-no-padding"],["id","last-child"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(53,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(54,0,null,0,5,"ion-label",[],null,null,null,a.db,a.t)),o.ob(55,49152,null,0,c.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(56,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Transaction type"])),(l()(),o.pb(58,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),o.Hb(59,null,["",""])),(l()(),o.pb(60,0,null,0,8,"ion-list",[["id","input-details"]],null,null,null,a.fb,a.u)),o.ob(61,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.pb(62,0,null,0,4,"ion-list-header",[],null,null,null,a.eb,a.v)),o.ob(63,49152,null,0,c.O,[o.h,o.k,o.x],null,null),(l()(),o.pb(64,0,null,0,2,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(65,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.Hb(-1,0,[" Transaction inputs "])),(l()(),o.eb(16777216,null,0,1,null,f)),o.ob(68,278528,null,0,p.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(69,0,null,0,8,"ion-list",[["id","output-details"]],null,null,null,a.fb,a.u)),o.ob(70,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.pb(71,0,null,0,4,"ion-list-header",[["class","ion-no-padding"]],null,null,null,a.eb,a.v)),o.ob(72,49152,null,0,c.O,[o.h,o.k,o.x],null,null),(l()(),o.pb(73,0,null,0,2,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(74,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.Hb(-1,0,[" Transaction outputs "])),(l()(),o.eb(16777216,null,0,1,null,M)),o.ob(77,278528,null,0,p.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"none"),l(n,13,0,"none"),l(n,23,0,"none"),l(n,31,0,u.message&&u.message.length>0),l(n,33,0,"none"),l(n,41,0,"none"),l(n,49,0,"Token Creation."===u.type),l(n,51,0,"Token Creation."===u.type),l(n,53,0,"none"),l(n,65,0,"none"),l(n,68,0,u.myTxn.txpow.body.txn.inputs),l(n,74,0,"none"),l(n,77,0,u.myTxn.txpow.body.txn.outputs)}),(function(l,n){var u=n.component;l(n,21,0,u.myTxn.txpow.txpowid),l(n,29,0,u.relaytime),l(n,39,0,u.myTxn.txpow.size),l(n,47,0,u.myTxn.txpow.header.block),l(n,59,0,u.type)}))}function v(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,15,"ion-header",[["class","page-header ion-no-border"]],null,null,null,a.W,a.m)),o.ob(1,49152,null,0,c.A,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,a.tb,a.J)),o.ob(3,49152,null,0,c.yb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,11,"ion-title",[],null,null,null,a.rb,a.H)),o.ob(5,49152,null,0,c.wb,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,6,"ion-item",[["class","no-ripple ion-no-padding"],["id","title"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(7,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(8,0,null,0,3,"ion-icon",[["class","back-btn"],["name","arrow-back"],["routerLink","/history"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Bb(l,10).onClick()&&i),"click"===n&&(i=!1!==o.Bb(l,11).onClick(u)&&i),i}),a.X,a.n)),o.ob(9,49152,null,0,c.B,[o.h,o.k,o.x],{name:[0,"name"]},null),o.ob(10,16384,null,0,r.n,[r.m,r.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.ob(11,737280,null,0,c.Ib,[p.h,c.Fb,o.k,r.m,[2,r.n]],null,null),(l()(),o.Hb(-1,0,[" History "])),(l()(),o.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,a.cb,a.p)),o.ob(14,49152,null,0,c.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.Hb(-1,0,[" Transaction details "])),(l()(),o.pb(16,0,null,null,7,"ion-content",[["class","page-content"]],null,null,null,a.T,a.j)),o.ob(17,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,m)),o.ob(19,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,h)),o.ob(21,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,y)),o.ob(23,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(24,0,null,null,4,"ion-footer",[["class","border-t"]],null,null,null,a.U,a.k)),o.ob(25,49152,null,0,c.y,[o.h,o.k,o.x],null,null),(l()(),o.pb(26,0,null,0,2,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.giveMe50()&&o),o}),a.M,a.c)),o.ob(27,49152,null,0,c.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(l()(),o.Hb(-1,0,[" Gimme 50 "]))],(function(l,n){var u=n.component;l(n,7,0,"none"),l(n,9,0,"arrow-back"),l(n,10,0,"/history"),l(n,11,0),l(n,14,0,"none"),l(n,19,0,!u.loading&&!u.myTxn),l(n,21,0,u.loading&&0!==u.transactionID.length),l(n,23,0,!u.loading&&0!==u.transactionID.length&&u.myTxn),l(n,27,0,"none")}),null)}function C(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-view-txn",[],null,null,null,v,d)),o.ob(1,114688,null,0,e,[r.a,t.a,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=o.lb("app-view-txn",e,C,{},{},[]),H=u("s7LF");u.d(n,"ViewTXNPageModuleNgFactory",(function(){return w}));var w=o.mb(b,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[s.a,O]],[3,o.j],o.v]),o.zb(4608,p.l,p.k,[o.s,[2,p.u]]),o.zb(4608,H.p,H.p,[]),o.zb(4608,c.b,c.b,[o.x,o.g]),o.zb(4608,c.Eb,c.Eb,[c.b,o.j,o.p]),o.zb(4608,c.Hb,c.Hb,[c.b,o.j,o.p]),o.zb(1073742336,p.c,p.c,[]),o.zb(1073742336,H.o,H.o,[]),o.zb(1073742336,H.e,H.e,[]),o.zb(1073742336,c.Ab,c.Ab,[]),o.zb(1073742336,r.q,r.q,[[2,r.v],[2,r.m]]),o.zb(1073742336,b,b,[]),o.zb(1024,r.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);
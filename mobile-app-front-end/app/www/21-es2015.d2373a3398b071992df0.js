(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{HPYO:function(n,l,o){"use strict";o.r(l);var e=o("8Y7J"),t=o("mrSG"),u=o("TOdT"),i=o("J9yG"),s=o("Kmpd");class r{constructor(n,l,o,e){this.menu=n,this.myTools=l,this.api=o,this.platform=e,this.qrCode="",this.copyStatus="Copy Address",this.genStatus="Generate Address",this.isEmpty=!1}ngOnInit(){}ionViewWillEnter(){s.Minima.file.load("lastAddress.txt",n=>{if(n.success){const l=JSON.parse(n.data);0===l.address.length?this.newAddress():(this.qrCode=l.address,this.qrCode.length>0&&this.checkAddress(this.qrCode),this.isEmpty=!0)}else this.newAddress()})}openMenu(){this.menu.open()}generateAddress(){this.genStatus="",this.newAddress(),this.generateAddressBtn.disabled=!0,setTimeout(()=>{this.generateAddressBtn.disabled=!1,this.genStatus="Generate Address"},2e3)}checkAddress(n){return t.a(this,void 0,void 0,(function*(){(yield this.api.checkScriptAddress(n))||this.newAddress()}))}newAddress(){setTimeout(()=>{this.api.newAddress().then(n=>{if(n.status){this.qrCode=n.response.address.miniaddress,this.isEmpty=!0;const l=JSON.stringify({address:this.qrCode});s.Minima.file.save(l,"lastAddress.txt",n=>{})}})},0)}copy(n){this.copyStatus="Copied!",this.copyAddressBtn.disabled=!0,this.myTools.copy(n),setTimeout(()=>{this.copyStatus="Copy Address",this.copyAddressBtn.disabled=!1},2e3)}}class a{}var c=o("pMnS"),d=o("MKJQ"),b=o("sZkV"),p=o("SVse"),h=o("6jz6"),g=o("LmEr"),m=e.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-content[_ngcontent-%COMP%]{--overflow:hidden}ion-button.copy-btn[_ngcontent-%COMP%]{font-size:.875rem;text-transform:none;font-family:manrope-bold;color:#fff;background-color:var(--ion-color-primary);height:35px;width:164px;margin-left:0;margin-right:7px}ion-button.copy-btn[_ngcontent-%COMP%]:hover{--background:#346EE5}ion-button.gen-btn[_ngcontent-%COMP%]{font-size:.875rem;height:35px;width:164px;text-transform:none;font-family:manrope-bold;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-tertiary);box-shadow:none;margin-left:0}ion-button.gen-btn[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover);color:var(--ion-color-tertiary);--border-radius:0;border-color:var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;align-items:left;justify-content:left}input.qrcode-box[_ngcontent-%COMP%]{background-color:var(--ion-color-inputs);color:#000;border:none;width:100%;margin-bottom:0;margin-top:12px;padding:1%;font-size:.9375rem}input.qrcode-box[_ngcontent-%COMP%]:focus{outline-color:var(--ion-color-primary)}.toast[_ngcontent-%COMP%]{--width:50%}p.notes[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.5;margin:10px 0 0;font-size:14px}div.qr-box[_ngcontent-%COMP%]{width:226px;height:226px;padding:10%;background-color:var(--ion-color-inputs);display:flex;align-items:center;justify-content:center;outline:#001c32 solid 1px}div.qr-box[_ngcontent-%COMP%]:hover{outline-color:var(--ion-color-primary)}@media only screen and (max-width:600px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:411px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:401px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:165px}}.mt-18[_ngcontent-%COMP%]{margin-top:15px}.prompt[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}"]],data:{}});function f(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,d.Q,d.l)),e.ob(1,49152,null,0,b.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.Jb(-1,0,[" Your wallet address "]))],(function(n,l){n(l,1,0,"none")}),null)}function y(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,12,"ion-grid",[],null,null,null,d.J,d.h)),e.ob(1,49152,null,0,b.z,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,10,"ion-row",[],null,null,null,d.X,d.v)),e.ob(3,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,d.G,d.e)),e.ob(5,49152,null,0,b.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(6,0,null,0,2,"ion-label",[["class","prompt"]],null,null,null,d.R,d.p)),e.ob(7,49152,null,0,b.M,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Fetching an address..."])),(n()(),e.pb(9,0,null,0,3,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,d.G,d.e)),e.ob(10,49152,null,0,b.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(11,0,null,0,1,"ion-spinner",[["color","tertiary"],["name","crescent"]],null,null,null,d.Z,d.x)),e.ob(12,49152,null,0,b.ob,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"tertiary","crescent")}),null)}function x(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,d.Z,d.x)),e.ob(1,49152,null,0,b.ob,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function k(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,29,"ion-grid",[["class","ion-no-padding"]],null,null,null,d.J,d.h)),e.ob(1,49152,null,0,b.z,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,4,"ion-row",[],null,null,null,d.X,d.v)),e.ob(3,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,2,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,d.G,d.e)),e.ob(5,49152,null,0,b.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(6,0,null,0,0,"input",[["class","qrcode-box"]],[[8,"value",0]],null,null,null,null)),(n()(),e.pb(7,0,null,0,14,"ion-row",[["class","mt-18"]],null,null,null,d.X,d.v)),e.ob(8,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(n()(),e.pb(9,0,null,0,12,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,d.G,d.e)),e.ob(10,49152,null,0,b.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(11,0,null,0,5,"ion-button",[["class","copy-btn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,o){var e=!0,t=n.component;return"click"===l&&(e=!1!==t.copy(t.qrCode)&&e),e}),d.E,d.c)),e.Gb(512,null,p.s,p.t,[e.k,e.r,e.B]),e.ob(13,278528,null,0,p.m,[p.s],{ngStyle:[0,"ngStyle"]},null),e.Eb(14,{"background-color":0}),e.ob(15,49152,[[2,4],["copyAddressBtn",4]],0,b.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Jb(16,0,[" "," "])),(n()(),e.pb(17,0,null,0,4,"ion-button",[["class","gen-btn"],["fill","none"]],null,[[null,"click"]],(function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.generateAddress()&&e),e}),d.E,d.c)),e.ob(18,49152,[[1,4],["generateAddressBtn",4]],0,b.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Jb(19,0,[" "," "])),(n()(),e.eb(16777216,null,0,1,null,x)),e.ob(21,16384,null,0,p.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(22,0,null,0,7,"ion-row",[],null,null,null,d.X,d.v)),e.ob(23,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(n()(),e.pb(24,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["You can use this address a thousand times."])),(n()(),e.pb(26,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["This address can be used for any Minima token or Minima custom token transaction."])),(n()(),e.pb(28,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Click 'Generate Address' to create a new address when needed."]))],(function(n,l){var o=l.component;n(l,5,0,"12"),n(l,10,0,"12");var e=n(l,14,0,"Copy Address"===o.copyStatus?"var(--ion-color-primary":"var(--ion-color-success)");n(l,13,0,e),n(l,15,0,"clear"),n(l,18,0,"none"),n(l,21,0,""===o.genStatus)}),(function(n,l){var o=l.component;n(l,6,0,e.tb(1,"",o.qrCode,"")),n(l,16,0,o.copyStatus),n(l,19,0,o.genStatus)}))}function v(n){return e.Lb(0,[e.Hb(671088640,1,{generateAddressBtn:0}),e.Hb(671088640,2,{copyAddressBtn:0}),(n()(),e.pb(2,0,null,null,22,"ion-app",[],null,null,null,d.C,d.a)),e.ob(3,49152,null,0,b.e,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,12,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,d.K,d.i)),e.ob(5,49152,null,0,b.A,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.pb(6,0,null,0,10,"ion-toolbar",[],null,null,null,d.db,d.B)),e.ob(7,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,8,"ion-title",[],null,null,null,d.cb,d.A)),e.ob(9,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(n()(),e.pb(10,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,d.Q,d.l)),e.ob(11,49152,null,0,b.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.openMenu()&&e),e}),d.L,d.j)),e.ob(13,49152,null,0,b.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.Jb(-1,0,[" Receive "])),(n()(),e.eb(16777216,null,0,1,null,f)),e.ob(16,16384,null,0,p.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(17,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,d.H,d.f)),e.ob(18,49152,null,0,b.t,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,y)),e.ob(20,16384,null,0,p.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,k)),e.ob(22,16384,null,0,p.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(23,0,null,0,1,"app-footer",[],null,null,null,h.b,h.a)),e.ob(24,245760,null,0,g.a,[i.a,u.a],null,null)],(function(n,l){var o=l.component;n(l,5,0,"md"),n(l,11,0,"none"),n(l,13,0,"assets/menuIcon.svg"),n(l,16,0,o.qrCode.length>0),n(l,20,0,0==o.qrCode.length),n(l,22,0,o.qrCode.length>0),n(l,24,0)}),null)}function C(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"app-my-address",[],null,null,null,v,m)),e.ob(1,114688,null,0,r,[b.Db,u.a,i.a,b.Ib],null,null)],(function(n,l){n(l,1,0)}),null)}var M=e.lb("app-my-address",r,C,{},{},[]),w=o("s7LF"),z=o("iInd"),A=o("IA6j");o.d(l,"MyAddressPageModuleNgFactory",(function(){return O}));var O=e.mb(a,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[c.a,M]],[3,e.j],e.v]),e.zb(4608,p.l,p.k,[e.s,[2,p.v]]),e.zb(4608,w.p,w.p,[]),e.zb(4608,b.b,b.b,[e.x,e.g]),e.zb(4608,b.Eb,b.Eb,[b.b,e.j,e.p]),e.zb(4608,b.Jb,b.Jb,[b.b,e.j,e.p]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,w.o,w.o,[]),e.zb(1073742336,w.e,w.e,[]),e.zb(1073742336,b.Ab,b.Ab,[]),e.zb(1073742336,z.q,z.q,[[2,z.v],[2,z.m]]),e.zb(1073742336,A.a,A.a,[]),e.zb(1073742336,a,a,[]),e.zb(1024,z.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
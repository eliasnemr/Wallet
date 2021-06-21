(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{DvwX:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=t("mrSG"),u=t("UrYL"),i=t("TOdT"),c=t("BYse"),r=t("J9yG"),a=t("NCHd"),s=t("aaBP"),p=t("oWBL");class b{constructor(n,l,t,o,e,u,i){this.menu=n,this.modalController=l,this.popoverController=t,this.alertController=o,this.contactService=e,this.api=u,this.myTools=i,this.editMode=!1,this.contacts=[],this.copyStatus="Copy"}ngOnInit(){}ionViewWillEnter(){this.$contactSubscription=this.contactService.data.subscribe(n=>{this.contacts=n})}ionViewWillLeave(){this.$contactSubscription&&this.$contactSubscription.unsubscribe()}presentContactSettings(n){return e.a(this,void 0,void 0,(function*(){const l=yield this.popoverController.create({component:c.a,translucent:!0,event:n});yield l.present()}))}openMenu(){this.menu.open()}queryContacts(n){(n=n.toUpperCase()).length>0?this.contacts=this.contacts.filter(l=>l.NAME.toUpperCase().includes(n)||l.ADDRESS.toUpperCase().includes(n)):this.contactService.data.subscribe(n=>{this.contacts=n})}presentAlert(n){return e.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Delete Contact",cssClass:"alert",subHeader:"Once this contact is deleted, you can't revert!",message:"Are you sure?",buttons:[{text:"Cancel",role:"cancel"},{text:"Ok",handler:()=>{this.contactService.removeContact(n)}}]});yield l.present()}))}presentAddContactForm(){return e.a(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:a.a,cssClass:"contactsModal"});return yield n.present()}))}presentContactDetail(n){return e.a(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:u.a,componentProps:{name:n.NAME,address:n.ADDRESS,description:n.DESCRIPTION,avatar:n.AVATAR}});return yield l.present()}))}copy(n){this.copyStatus="Copied!",this.myTools.copy(n),this.myTools.presentToast("Copied to clipboard.","primary","bottom"),setTimeout(()=>{this.copyStatus="Copy"},2e3)}createIcon(n){return"https://www.gravatar.com/avatar/"+s.hash(n)+"?d=identicon"}}class d{}var h=t("pMnS"),m=t("MKJQ"),g=t("sZkV"),f=t("SVse"),v=t("s7LF"),C=t("6jz6"),k=t("LmEr"),y=o.nb({encapsulation:0,styles:[["#deleteButton[_ngcontent-%COMP%]{font-size:1.8rem;cursor:pointer}#addButton[_ngcontent-%COMP%]{font-size:2rem;color:var(--ion-color-tertiary);cursor:pointer}ion-list.tools[_ngcontent-%COMP%]{padding:12px 0 0}ion-list.tools[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:27px;--inner-padding-end:27px}ion-item.contactItem[_ngcontent-%COMP%]{padding:0;--padding-start:27px;--inner-padding-end:27px}ion-item.contactItem[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover)}ion-searchbar[_ngcontent-%COMP%]{padding:0;--box-shadow:0;--icon-color:#001C32;--background:var(--ion-color-inputs);--border:1px solid #f0f0fa;color:#001c32;font-size:.75rem}ion-item-option[_ngcontent-%COMP%]   div.block[_ngcontent-%COMP%]{width:100%;text-transform:none;display:inline-block;vertical-align:middle;text-align:center;font-size:.875rem;min-width:56px}ion-item-option[_ngcontent-%COMP%]   div.block[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}ion-icon.trashIcon[_ngcontent-%COMP%]{cursor:pointer;color:var(--ion-color-tertiary)}ion-icon.export[_ngcontent-%COMP%]{cursor:pointer;color:var(--ion-color-tertiary);position:absolute;right:0}ion-icon.trashIcon[_ngcontent-%COMP%]:hover{color:var(--ion-color-secondary)}.center[_ngcontent-%COMP%]{right:2%;align-items:center!important;justify-content:center!important;display:inline-flex!important;text-align:center!important}ion-label[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:manrope-bold;color:var(--ion-color-tertiary)}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.7}"]],data:{}});function x(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,8,"ion-grid",[["class","ion-no-padding"]],null,null,null,m.L,m.h)),o.ob(1,49152,null,0,g.z,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,6,"ion-row",[],null,null,null,m.Z,m.v)),o.ob(3,49152,null,0,g.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,m.I,m.e)),o.ob(5,49152,null,0,g.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(6,0,null,0,2,"ion-label",[["style","padding-left: 27px"]],null,null,null,m.T,m.p)),o.ob(7,49152,null,0,g.M,[o.h,o.k,o.x],null,null),(n()(),o.Ib(-1,0,["No contact to display..."]))],(function(n,l){n(l,5,0,"12")}),null)}function M(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,2,"ion-avatar",[["slot","start"]],null,null,null,m.F,m.b)),o.ob(1,49152,null,0,g.f,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,2,0,o.tb(1,"",l.parent.context.$implicit.AVATAR,""))}))}function S(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,2,"ion-avatar",[["slot","start"]],null,null,null,m.F,m.b)),o.ob(1,49152,null,0,g.f,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,2,0,l.component.createIcon(l.parent.context.$implicit.ADDRESS))}))}function I(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","trashIcon"],["name","trash-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentAlert(n.parent.context.$implicit.ADDRESS)&&o),o}),m.N,m.j)),o.ob(1,49152,null,0,g.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"trash-outline")}),null)}function A(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["src","assets/copyIconWhite.svg"]],null,null,null,m.N,m.j)),o.ob(1,49152,null,0,g.B,[o.h,o.k,o.x],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,"assets/copyIconWhite.svg")}),null)}function O(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["name","checkmark-outline"]],null,null,null,m.N,m.j)),o.ob(1,49152,null,0,g.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"checkmark-outline")}),null)}function P(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,29,"ion-list",[["class","ion-no-padding contacts"]],null,null,null,m.V,m.q)),o.ob(1,49152,[[1,4],["contactList",4]],0,g.N,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,27,"ion-item-sliding",[],null,null,null,m.R,m.o)),o.ob(3,49152,null,0,g.L,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,13,"ion-item",[["class","contactItem ion-no-padding"],["lines","none"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentContactDetail(n.context.$implicit)&&o),o}),m.S,m.l)),o.ob(5,49152,null,0,g.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.eb(16777216,null,0,1,null,M)),o.ob(7,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,S)),o.ob(9,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(10,0,null,0,5,"ion-label",[],null,null,null,m.T,m.p)),o.ob(11,49152,null,0,g.M,[o.h,o.k,o.x],null,null),(n()(),o.pb(12,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Ib(13,null,["",""])),(n()(),o.pb(14,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Ib(15,null,["",""])),(n()(),o.eb(16777216,null,0,1,null,I)),o.ob(17,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(18,0,null,0,11,"ion-item-options",[["side","end"]],null,null,null,m.Q,m.n)),o.ob(19,49152,null,0,g.K,[o.h,o.k,o.x],{side:[0,"side"]},null),(n()(),o.pb(20,0,null,0,9,"ion-item-option",[["color","primary"],["expandable",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.copy(n.context.$implicit.ADDRESS)&&o),o}),m.P,m.m)),o.Fb(512,null,f.r,f.s,[o.k,o.r,o.B]),o.ob(22,278528,null,0,f.m,[f.r],{ngStyle:[0,"ngStyle"]},null),o.Eb(23,{"background-color":0}),o.ob(24,49152,null,0,g.J,[o.h,o.k,o.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(n()(),o.pb(25,0,null,0,4,"div",[["class","block"]],null,null,null,null,null)),(n()(),o.eb(16777216,null,null,1,null,A)),o.ob(27,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,null,1,null,O)),o.ob(29,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,5,0,"none"),n(l,7,0,l.context.$implicit.AVATAR.length>0),n(l,9,0,0===l.context.$implicit.AVATAR.length),n(l,17,0,t.editMode),n(l,19,0,"end");var o=n(l,23,0,"Copy"===t.copyStatus?"var(--ion-color-primary":"var(--ion-color-success)");n(l,22,0,o),n(l,24,0,"primary",""),n(l,27,0,"Copy"===t.copyStatus),n(l,29,0,"Copied!"===t.copyStatus)}),(function(n,l){n(l,13,0,l.context.$implicit.NAME),n(l,15,0,l.context.$implicit.ADDRESS)}))}function z(n){return o.Kb(0,[o.Gb(671088640,1,{ContactList:0}),(n()(),o.pb(1,0,null,null,15,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,m.M,m.i)),o.ob(2,49152,null,0,g.A,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.pb(3,0,null,0,13,"ion-toolbar",[],null,null,null,m.hb,m.D)),o.ob(4,49152,null,0,g.yb,[o.h,o.k,o.x],null,null),(n()(),o.pb(5,0,null,0,11,"ion-title",[],null,null,null,m.gb,m.C)),o.ob(6,49152,null,0,g.wb,[o.h,o.k,o.x],null,null),(n()(),o.pb(7,0,null,0,6,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,m.S,m.l)),o.ob(8,49152,null,0,g.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(9,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openMenu()&&o),o}),m.N,m.j)),o.ob(10,49152,null,0,g.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Ib(-1,0,[" Contacts "])),(n()(),o.pb(12,0,null,0,1,"ion-icon",[["class","export"],["name","ellipsis-horizontal-circle-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentContactSettings(t)&&o),o}),m.N,m.j)),o.ob(13,49152,null,0,g.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(14,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,m.S,m.l)),o.ob(15,49152,null,0,g.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.Ib(-1,0,[" All your contacts "])),(n()(),o.pb(17,0,null,null,20,"ion-content",[],null,null,null,m.J,m.f)),o.ob(18,49152,null,0,g.t,[o.h,o.k,o.x],null,null),(n()(),o.pb(19,0,null,0,14,"ion-list",[["class","ion-no-padding tools"]],null,null,null,m.V,m.q)),o.ob(20,49152,null,0,g.N,[o.h,o.k,o.x],null,null),(n()(),o.pb(21,0,null,0,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,m.S,m.l)),o.ob(22,49152,null,0,g.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(23,0,null,0,3,"ion-searchbar",[["class","searchbarinput"],["placeholder","Search..."]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==o.Bb(n,26)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Bb(n,26)._handleInputEvent(t.target)&&e),"ionChange"===l&&(e=!1!==u.queryContacts(t.target.value)&&e),e}),m.ab,m.w)),o.Fb(5120,null,v.h,(function(n){return[n]}),[g.Lb]),o.ob(25,49152,null,0,g.gb,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null),o.ob(26,4341760,null,0,g.Lb,[o.p,o.k],null,null),(n()(),o.pb(27,0,null,0,1,"ion-icon",[["id","addButton"],["name","add"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentAddContactForm()&&o),o}),m.N,m.j)),o.ob(28,49152,null,0,g.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(29,0,null,0,4,"ion-icon",[["id","deleteButton"],["name","trash-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0,e=n.component;return"click"===l&&(o=0!=(e.editMode=!e.editMode)&&o),o}),m.N,m.j)),o.Fb(512,null,f.r,f.s,[o.k,o.r,o.B]),o.ob(31,278528,null,0,f.m,[f.r],{ngStyle:[0,"ngStyle"]},null),o.Eb(32,{color:0}),o.ob(33,49152,null,0,g.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.eb(16777216,null,0,1,null,x)),o.ob(35,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,P)),o.ob(37,278528,null,0,f.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.pb(38,0,null,null,1,"app-footer",[],null,null,null,C.b,C.a)),o.ob(39,245760,null,0,k.a,[r.a,i.a],null,null)],(function(n,l){var t=l.component;n(l,2,0,"md"),n(l,8,0,"none"),n(l,10,0,"assets/menuIcon.svg"),n(l,13,0,"ellipsis-horizontal-circle-outline"),n(l,15,0,"none"),n(l,22,0,"none"),n(l,25,0,"Search..."),n(l,28,0,"add");var o=n(l,32,0,t.editMode?"#EE5C5C":"var(--ion-color-tertiary)");n(l,31,0,o),n(l,33,0,"trash-outline"),n(l,35,0,t.contacts&&0===t.contacts.length),n(l,37,0,t.contacts),n(l,39,0)}),null)}function _(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"app-contacts",[],null,null,null,z,y)),o.ob(1,114688,null,0,b,[g.Db,g.Eb,g.Ib,g.a,p.a,r.a,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var B=o.lb("app-contacts",b,_,{},{},[]),E=t("iInd"),j=t("IA6j");t.d(l,"ContactsPageModuleNgFactory",(function(){return D}));var D=o.mb(d,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[h.a,B]],[3,o.j],o.v]),o.zb(4608,f.l,f.k,[o.s,[2,f.u]]),o.zb(4608,v.p,v.p,[]),o.zb(4608,g.b,g.b,[o.x,o.g]),o.zb(4608,g.Eb,g.Eb,[g.b,o.j,o.p]),o.zb(4608,g.Ib,g.Ib,[g.b,o.j,o.p]),o.zb(1073742336,f.c,f.c,[]),o.zb(1073742336,v.o,v.o,[]),o.zb(1073742336,v.e,v.e,[]),o.zb(1073742336,g.Ab,g.Ab,[]),o.zb(1073742336,E.q,E.q,[[2,E.v],[2,E.m]]),o.zb(1073742336,j.a,j.a,[]),o.zb(1073742336,d,d,[]),o.zb(1024,E.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);
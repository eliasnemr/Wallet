(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{yaoq:function(n,l,o){"use strict";o.r(l);var e=o("8Y7J"),t=o("mrSG"),u=o("TOdT"),i=o("J9yG"),a=o("s7LF");class r{constructor(n,l,o,e){this.menu=n,this.api=l,this.formBuilder=o,this.myTools=e,this.status="",this.isNft=!1,this.loading=!1,this.success=!1,this.descrEntry={isChecked:!1},this.iconEntry={isChecked:!1},this.proofEntry={isChecked:!1},this.nft={isNonFungible:!1},this.creationStatus="Create Token",this.customToken={name:"",amount:0,icon:"",proof:"",script:"",description:""},this.advancedFormInputsChecked={description:!1,icon:!1,proof:!1,nft:!1}}ionViewDidEnter(){}ngOnInit(){this.formInit()}openMenu(){this.menu.open()}createTokenAdvanced(){this.creationStatus="",this.loading=!0;const n=this.tokenCreationForm.value;try{this.create(n)}catch(l){console.log(l)}}create(n){return t.a(this,void 0,void 0,(function*(){if(this.myTools.scrollToBottom(this.pageContent),n.nft){this.submitBtn.disabled=!0;const l=yield this.api.createToken(n);l.status?(this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.creationStatus="Token created!",this.resetForm()):(setTimeout(()=>{this.creationStatus="Create Token",this.submitBtn.disabled=!1},500),this.creationStatus="Creation failed!",this.myTools.presentAlert("Error",l.message,"Token Creation Status"))}else{this.submitBtn.disabled=!0;const l=yield this.api.createToken(n);l.status?(this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.creationStatus="Token created!",this.resetForm()):(setTimeout(()=>{this.creationStatus="Create Token",this.submitBtn.disabled=!1},500),this.myTools.presentAlert("Error",l.message,"Token Creation Status"))}}))}formInit(){this.tokenCreationForm=this.formBuilder.group({name:["",[a.m.required,a.m.maxLength(255)]],amount:["",[a.m.required,a.m.maxLength(255),a.m.pattern("^[0-9]*$")]],description:"",script:"",icon:["",[a.m.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:jpg|png|gif|svg)$"),a.m.maxLength(255)]],proof:["",[a.m.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:txt)$"),a.m.maxLength(255)]],nft:!1})}resetForm(){setTimeout(()=>{this.creationStatus="Create Token"},2e3),this.submitBtn.disabled=!1,this.tokenCreationForm.reset(),this.formInit()}get name(){return this.tokenCreationForm.get("name")}get descr(){return this.tokenCreationForm.get("description")}get icon(){return this.tokenCreationForm.get("icon")}get proof(){return this.tokenCreationForm.get("proof")}get amount(){return this.tokenCreationForm.get("amount")}get myNft(){return this.tokenCreationForm.get("nft")}}class s{}var c=o("pMnS"),b=o("MKJQ"),p=o("sZkV"),g=o("SVse"),d=o("6jz6"),m=o("LmEr"),h=e.nb({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{color:#000;font-size:14px;background-color:var(--ion-color-inputs);border:1px solid #f0f0fa;padding-left:10px!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-size:20px;font-family:manrope-bold;white-space:normal;margin-bottom:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span#optional[_ngcontent-%COMP%]{font-family:manrope-light;color:var(--ion-color-tertiary)}ion-list[_ngcontent-%COMP%]:first-child{padding-top:0}ion-checkbox[_ngcontent-%COMP%]{--border-color:var(--ion-color-tertiary);--size:30px}ion-item#nft[_ngcontent-%COMP%]{display:inline;vertical-align:middle}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-top:12px}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{margin-top:7px}ion-icon.nftIcon[_ngcontent-%COMP%]{margin-right:7px;font-size:30px}ion-label.nft[_ngcontent-%COMP%]{font-size:16px!important}ion-textarea[_ngcontent-%COMP%]{padding-left:10px;font-size:14px;color:var(--ion-color-text);background:var(--ion-color-inputs)}ion-title.cardHeader[_ngcontent-%COMP%]{padding-top:2%;font-size:.9rem;display:inline-block}ion-title.cardHeader[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer}ion-card-content[_ngcontent-%COMP%]{background:var(--ion-card-color)}ion-card-header[_ngcontent-%COMP%]{--color:var(--ion-text-color,#000);font-family:manrope-bold}.input[_ngcontent-%COMP%]{font-family:manrope-light}.length[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end;font-family:manrope-light;font-size:14px;color:var(--ion-color-tertiary)}.length[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-family:manrope-light!important;color:var(--ion-color-tertiary)!important}ion-item.createtoken-wrapper[_ngcontent-%COMP%]{display:flex;float:right;justify-content:right;align-items:flex-end}ion-button.create-token[_ngcontent-%COMP%]{height:35px;width:164px;float:right;background-color:var(--ion-color-primary);color:#fff;text-transform:none;font-family:manrope-bold}ion-button.create-token[_ngcontent-%COMP%]:hover{--background:#346EE5}span#nftOptional[_ngcontent-%COMP%]{font-size:14px;font-family:manrope-light;color:var(--ion-color-tertiary)}"]],data:{}});function f(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),e.ob(1,49152,null,0,p.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function C(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),e.ob(1,49152,null,0,p.U,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Token name required!"])),(n()(),e.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Maximum length of 255 characters."]))],null,null)}function k(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),e.ob(1,49152,null,0,p.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function B(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,7,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),e.ob(1,49152,null,0,p.U,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Token amount required!"])),(n()(),e.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" No decimals allowed."])),(n()(),e.pb(6,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Must be a digit and greater than 0."]))],null,null)}function x(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),e.ob(1,49152,null,0,p.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function v(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),e.ob(1,49152,null,0,p.U,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Invalid icon URL!"])),(n()(),e.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Maximum length of 255 characters. URL must end in .jpg, .png, .gif or .svg to be valid."]))],null,null)}function I(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),e.ob(1,49152,null,0,p.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function y(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),e.ob(1,49152,null,0,p.U,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Invalid proof URL!"])),(n()(),e.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" Maximum length of 255 characters.\xa0Must include a .txt file within the URL."]))],null,null)}function M(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,2,"ion-label",[["class","length ion-no-margin"]],null,null,null,b.T,b.p)),e.ob(1,49152,null,0,p.M,[e.h,e.k,e.x],null,null),(n()(),e.Ib(2,0,[" ",""]))],null,(function(n,l){n(l,2,0,l.component.customToken.description.length+"/255")}))}function T(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,b.db,b.z)),e.ob(1,49152,null,0,p.ob,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function P(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,2,"ion-note",[],null,null,null,b.Y,b.u)),e.ob(1,49152,null,0,p.U,[e.h,e.k,e.x],null,null),(n()(),e.Ib(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.status)}))}function _(n){return e.Kb(0,[e.Gb(671088640,1,{submitBtn:0}),e.Gb(671088640,2,{pageContent:0}),(n()(),e.pb(2,0,null,null,137,"ion-app",[],null,null,null,b.E,b.a)),e.ob(3,49152,null,0,p.e,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,b.M,b.i)),e.ob(5,49152,null,0,p.A,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,11,"ion-toolbar",[],null,null,null,b.hb,b.D)),e.ob(7,49152,null,0,p.yb,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,9,"ion-title",[],null,null,null,b.gb,b.C)),e.ob(9,49152,null,0,p.wb,[e.h,e.k,e.x],null,null),(n()(),e.pb(10,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(11,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.openMenu()&&e),e}),b.N,b.j)),e.ob(13,49152,null,0,p.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.Ib(-1,0,[" Token "])),(n()(),e.pb(15,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(16,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.Ib(-1,0,[" Create a custom token "])),(n()(),e.pb(18,0,null,0,119,"ion-content",[["class","page-content"]],null,null,null,b.J,b.f)),e.ob(19,49152,[[2,4],["pageContent",4]],0,p.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(20,0,null,0,117,"form",[["id","tokenCreationForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,o){var t=!0,u=n.component;return"submit"===l&&(t=!1!==e.Bb(n,22).onSubmit(o)&&t),"reset"===l&&(t=!1!==e.Bb(n,22).onReset()&&t),"ngSubmit"===l&&(t=!1!==u.createTokenAdvanced()&&t),t}),null,null)),e.ob(21,16384,null,0,a.q,[],null,null),e.ob(22,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Fb(2048,null,a.a,null,[a.d]),e.ob(24,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),e.pb(25,0,null,null,112,"ion-list",[["lines","none"]],null,null,null,b.V,b.q)),e.ob(26,49152,null,0,p.N,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(27,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(28,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(29,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),e.ob(30,49152,null,0,p.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Ib(-1,0,["Name"])),(n()(),e.pb(32,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","name"],["name","name"],["placeholder","Enter a token name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.Bb(n,33)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,33)._handleInputEvent(o.target)&&t),t}),b.O,b.k)),e.ob(33,4341760,null,0,p.Kb,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),e.ob(35,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),e.Fb(2048,null,a.i,null,[a.c]),e.ob(37,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(38,49152,[["nameTextArea",4]],0,p.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),e.eb(16777216,null,0,1,null,f)),e.ob(40,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,C)),e.ob(42,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(43,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(44,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(45,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),e.ob(46,49152,null,0,p.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Ib(-1,0,["Amount"])),(n()(),e.pb(48,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","amount"],["name","amount"],["placeholder","Enter token amount"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.Bb(n,49)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,49)._handleIonChange(o.target)&&t),t}),b.O,b.k)),e.ob(49,4341760,null,0,p.Gb,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.Gb]),e.ob(51,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),e.Fb(2048,null,a.i,null,[a.c]),e.ob(53,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(54,49152,[["amountRef",4]],0,p.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),e.eb(16777216,null,0,1,null,k)),e.ob(56,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,B)),e.ob(58,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(59,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(60,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(61,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),e.ob(62,49152,null,0,p.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Ib(-1,0,[" Icon "])),(n()(),e.pb(64,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["(optional)"])),(n()(),e.pb(66,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","icon"],["name","icon"],["placeholder","Enter a valid icon URL"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.Bb(n,67)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,67)._handleInputEvent(o.target)&&t),t}),b.O,b.k)),e.ob(67,4341760,null,0,p.Kb,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),e.ob(69,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),e.Fb(2048,null,a.i,null,[a.c]),e.ob(71,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(72,49152,[["iconURL",4]],0,p.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),e.eb(16777216,null,0,1,null,x)),e.ob(74,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,v)),e.ob(76,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(77,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(78,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(79,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),e.ob(80,49152,null,0,p.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Ib(-1,0,[" Proof "])),(n()(),e.pb(82,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["(optional)"])),(n()(),e.pb(84,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","proof"],["name","proof"],["placeholder","Enter URL of website hosting token ID text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.Bb(n,85)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,85)._handleInputEvent(o.target)&&t),t}),b.O,b.k)),e.ob(85,4341760,null,0,p.Kb,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),e.ob(87,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),e.Fb(2048,null,a.i,null,[a.c]),e.ob(89,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(90,49152,[["proofURL",4]],0,p.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),e.eb(16777216,null,0,1,null,I)),e.ob(92,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,y)),e.ob(94,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(95,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(96,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(97,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),e.ob(98,49152,null,0,p.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Ib(-1,0,["Description "])),(n()(),e.pb(100,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["(optional)"])),(n()(),e.pb(102,0,null,0,8,"ion-textarea",[["class","medium-text input"],["formControlName","description"],["maxlength","255"],["name","description"],["placeholder","Enter a description"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==e.Bb(n,105)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,105)._handleInputEvent(o.target)&&t),"ngModelChange"===l&&(t=!1!==(u.customToken.description=o)&&t),t}),b.fb,b.B)),e.ob(103,540672,null,0,a.f,[],{maxlength:[0,"maxlength"]},null),e.Fb(1024,null,a.g,(function(n){return[n]}),[a.f]),e.ob(105,4341760,null,0,p.Kb,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),e.ob(107,671744,null,0,a.c,[[3,a.a],[6,a.g],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.i,null,[a.c]),e.ob(109,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(110,49152,[["description",4]],0,p.ub,[e.h,e.k,e.x],{maxlength:[0,"maxlength"],name:[1,"name"],placeholder:[2,"placeholder"]},null),(n()(),e.eb(16777216,null,0,1,null,M)),e.ob(112,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(113,0,null,0,14,"ion-item",[["class","no-ripple ion-no-padding"],["id","nft"]],null,null,null,b.S,b.l)),e.ob(114,49152,null,0,p.G,[e.h,e.k,e.x],null,null),(n()(),e.pb(115,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),e.ob(116,49152,null,0,p.M,[e.h,e.k,e.x],null,null),(n()(),e.pb(117,0,null,0,1,"ion-icon",[["class","nftIcon"],["src","assets/nft2.svg"]],null,null,null,b.N,b.j)),e.ob(118,49152,null,0,p.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.pb(119,0,null,0,1,"span",[["id","nftOptional"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["(optional)"])),(n()(),e.pb(121,0,null,0,6,"ion-checkbox",[["color","primary"],["formControlName","nft"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.Bb(n,122)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,122)._handleIonChange(o.target)&&t),t}),b.H,b.d)),e.ob(122,4341760,null,0,p.c,[e.p,e.k],null,null),e.Fb(1024,null,a.h,(function(n){return[n]}),[p.c]),e.ob(124,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),e.Fb(2048,null,a.i,null,[a.c]),e.ob(126,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(127,49152,null,0,p.q,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.pb(128,0,null,0,9,"ion-item",[["class","createtoken-wrapper ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(129,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(130,0,null,0,7,"div",[["style","display: flex; flex-direction:column; justify-content:right; align-items:flex-end"]],null,null,null,null,null)),(n()(),e.pb(131,0,null,null,4,"ion-button",[["class","create-token"],["fill","clear"],["slot","end"],["type","submit"]],null,null,null,b.G,b.c)),e.ob(132,49152,[[1,4],["submitBtn",4]],0,p.j,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"],type:[2,"type"]},null),(n()(),e.Ib(133,0,[" "," "])),(n()(),e.eb(16777216,null,0,1,null,T)),e.ob(135,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,P)),e.ob(137,16384,null,0,g.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(138,0,null,0,1,"app-footer",[],null,null,null,d.b,d.a)),e.ob(139,245760,null,0,m.a,[i.a,u.a],null,null)],(function(n,l){var o=l.component;n(l,11,0,"none"),n(l,13,0,"assets/menuIcon.svg"),n(l,16,0,"none"),n(l,22,0,o.tokenCreationForm),n(l,26,0,"none"),n(l,28,0,"none"),n(l,30,0,"stacked"),n(l,35,0,"name"),n(l,38,0,"name","Enter a token name"),n(l,40,0,o.name.invalid&&o.name.touched),n(l,42,0,o.name.invalid&&o.name.touched),n(l,44,0,"none"),n(l,46,0,"stacked"),n(l,51,0,"amount"),n(l,54,0,"amount","Enter token amount","number"),n(l,56,0,o.amount.invalid&&o.amount.touched),n(l,58,0,o.amount.invalid&&o.amount.touched),n(l,60,0,"none"),n(l,62,0,"stacked"),n(l,69,0,"icon"),n(l,72,0,"icon","Enter a valid icon URL"),n(l,74,0,o.icon.invalid&&o.icon.touched),n(l,76,0,o.icon.invalid&&o.icon.touched),n(l,78,0,"none"),n(l,80,0,"stacked"),n(l,87,0,"proof"),n(l,90,0,"proof","Enter URL of website hosting token ID text"),n(l,92,0,o.proof.invalid&&o.proof.touched),n(l,94,0,o.proof.invalid&&o.proof.touched),n(l,96,0,"none"),n(l,98,0,"stacked"),n(l,103,0,"255"),n(l,107,0,"description",o.customToken.description),n(l,110,0,"255","description","Enter a description"),n(l,112,0,o.customToken.description&&o.customToken.description.length>0),n(l,118,0,"assets/nft2.svg"),n(l,124,0,"nft"),n(l,127,0,"primary"),n(l,129,0,"none"),n(l,132,0,o.tokenCreationForm.invalid,"clear","submit"),n(l,135,0,""===o.creationStatus),n(l,137,0,o.status.length>0),n(l,139,0)}),(function(n,l){var o=l.component;n(l,20,0,e.Bb(l,24).ngClassUntouched,e.Bb(l,24).ngClassTouched,e.Bb(l,24).ngClassPristine,e.Bb(l,24).ngClassDirty,e.Bb(l,24).ngClassValid,e.Bb(l,24).ngClassInvalid,e.Bb(l,24).ngClassPending),n(l,32,0,e.Bb(l,37).ngClassUntouched,e.Bb(l,37).ngClassTouched,e.Bb(l,37).ngClassPristine,e.Bb(l,37).ngClassDirty,e.Bb(l,37).ngClassValid,e.Bb(l,37).ngClassInvalid,e.Bb(l,37).ngClassPending),n(l,48,0,e.Bb(l,53).ngClassUntouched,e.Bb(l,53).ngClassTouched,e.Bb(l,53).ngClassPristine,e.Bb(l,53).ngClassDirty,e.Bb(l,53).ngClassValid,e.Bb(l,53).ngClassInvalid,e.Bb(l,53).ngClassPending),n(l,66,0,e.Bb(l,71).ngClassUntouched,e.Bb(l,71).ngClassTouched,e.Bb(l,71).ngClassPristine,e.Bb(l,71).ngClassDirty,e.Bb(l,71).ngClassValid,e.Bb(l,71).ngClassInvalid,e.Bb(l,71).ngClassPending),n(l,84,0,e.Bb(l,89).ngClassUntouched,e.Bb(l,89).ngClassTouched,e.Bb(l,89).ngClassPristine,e.Bb(l,89).ngClassDirty,e.Bb(l,89).ngClassValid,e.Bb(l,89).ngClassInvalid,e.Bb(l,89).ngClassPending),n(l,102,0,e.Bb(l,103).maxlength?e.Bb(l,103).maxlength:null,e.Bb(l,109).ngClassUntouched,e.Bb(l,109).ngClassTouched,e.Bb(l,109).ngClassPristine,e.Bb(l,109).ngClassDirty,e.Bb(l,109).ngClassValid,e.Bb(l,109).ngClassInvalid,e.Bb(l,109).ngClassPending),n(l,121,0,e.Bb(l,126).ngClassUntouched,e.Bb(l,126).ngClassTouched,e.Bb(l,126).ngClassPristine,e.Bb(l,126).ngClassDirty,e.Bb(l,126).ngClassValid,e.Bb(l,126).ngClassInvalid,e.Bb(l,126).ngClassPending),n(l,133,0,o.creationStatus)}))}function O(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"app-create-token",[],null,null,null,_,h)),e.ob(1,114688,null,0,r,[p.Db,i.a,a.b,u.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=e.lb("app-create-token",r,O,{},{},[]),j=o("iInd"),S=o("IA6j");o.d(l,"CreateTokenPageModuleNgFactory",(function(){return E}));var E=e.mb(s,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[c.a,F]],[3,e.j],e.v]),e.zb(4608,a.b,a.b,[]),e.zb(4608,a.o,a.o,[]),e.zb(4608,g.l,g.k,[e.s,[2,g.u]]),e.zb(4608,p.b,p.b,[e.x,e.g]),e.zb(4608,p.Eb,p.Eb,[p.b,e.j,e.p]),e.zb(4608,p.Hb,p.Hb,[p.b,e.j,e.p]),e.zb(1073742336,a.n,a.n,[]),e.zb(1073742336,a.l,a.l,[]),e.zb(1073742336,g.c,g.c,[]),e.zb(1073742336,a.e,a.e,[]),e.zb(1073742336,p.Ab,p.Ab,[]),e.zb(1073742336,j.q,j.q,[[2,j.v],[2,j.m]]),e.zb(1073742336,S.a,S.a,[]),e.zb(1073742336,s,s,[]),e.zb(1024,j.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
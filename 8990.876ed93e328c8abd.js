"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8990],{8990:(Q,_,p)=>{p.r(_),p.d(_,{PharmacyPageModule:()=>J});var u=p(6814),a=p(95),o=p(7027),m=p(9390),e=p(6689),h=p(389);function f(n,s){1&n&&(e.TgZ(0,"div"),e._UZ(1,"img",16),e.qZA())}function Z(n,s){1&n&&e._UZ(0,"img",17)}function v(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"ion-item")(1,"ion-card",7),e.NdJ("click",function(){const c=e.CHM(i).$implicit,l=e.oxw();return e.KtG(l.onSelectPatient(c.patientId))}),e.TgZ(2,"ion-card-content")(3,"ion-grid")(4,"ion-row")(5,"ion-col",8)(6,"ion-avatar"),e.YNc(7,f,2,0,"div",9),e.YNc(8,Z,1,0,"ng-template",null,10,e.W1O),e.qZA()(),e.TgZ(10,"ion-col",11)(11,"strong",12),e._uU(12),e.qZA(),e.TgZ(13,"p")(14,"strong"),e._uU(15,"Cel: "),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"p")(18,"strong"),e._uU(19,"ID: "),e.qZA(),e._uU(20),e.qZA()(),e.TgZ(21,"ion-col",13),e._UZ(22,"ion-icon",14),e.qZA()()()()(),e._UZ(23,"ion-label",15),e.qZA()}if(2&n){const i=s.$implicit,t=e.MAs(9);e.xp6(7),e.Q6J("ngIf","F"===i.gender)("ngIfElse",t),e.xp6(5),e.AsE("",i.name," ",i.lastName,""),e.xp6(4),e.Oqu(i.phoneNumber),e.xp6(4),e.Oqu(i.documentNumber)}}let I=(()=>{var n;class s{constructor(t,r){this.patientService=t,this.router=r,this.data=[],this.results=[...this.data]}handleInput(t){const r=t.target.value.toLowerCase();this.results=this.data.filter(c=>c.name.toLowerCase().indexOf(r.toLowerCase())>-1||c.lastName.toLowerCase().indexOf(r.toLowerCase())>-1)}onSelectPatient(t){this.router.navigateByUrl(`pharmacy/patient/${t}`)}ngOnInit(){this.patientService.getAllPatient().then(t=>{console.log(t),this.data=t.data,this.results=t.data})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(h.e),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pharmacy"]],decls:14,vars:4,consts:[[3,"translucent"],["size","4.2"],["href","/pharmacy"],["name","chevron-back-outline"],[3,"fullscreen"],[3,"debounce","ionInput"],[4,"ngFor","ngForOf"],["color","primary",1,"card-container",2,"width","28rem",3,"click"],["size","auto"],[4,"ngIf","ngIfElse"],["male",""],["size","8"],[2,"font-size","1rem"],[1,"arrow-col"],["name","chevron-forward-outline",2,"text-align","center"],["onclick","onSelectPatient"],["alt","Female avatar","src","../../assets/Avatar 1.png"],["alt","Male avatar","src","../../assets/Avatar 5.png"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"a",2),e._UZ(6,"ion-icon",3),e.qZA()(),e.TgZ(7,"ion-col")(8,"ion-title"),e._uU(9," Prescription "),e.qZA()()()()()(),e.TgZ(10,"ion-content",4)(11,"ion-searchbar",5),e.NdJ("ionInput",function(l){return r.handleInput(l)}),e.qZA(),e.TgZ(12,"ion-list"),e.YNc(13,v,24,6,"ion-item",6),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(10),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("debounce",1e3),e.xp6(2),e.Q6J("ngForOf",r.results))},dependencies:[u.sg,u.O5,o.BJ,o.PM,o.FN,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.Nd,o.VI,o.wd,o.sr,o.j9]}),s})();var d=p(5861),x=p(9314);function y(n,s){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"ion-card",7)(2,"ion-card-header",8)(3,"ion-card-title")(4,"ion-grid")(5,"ion-row")(6,"ion-col",9)(7,"ion-avatar"),e._UZ(8,"img",10),e.qZA()(),e.TgZ(9,"ion-col")(10,"strong",11),e._uU(11),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"small",12)(14,"strong"),e._uU(15,"Dosage: "),e.qZA(),e._uU(16),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"small",12)(19,"strong"),e._uU(20,"Route: "),e.qZA(),e._uU(21),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"small",12)(24,"strong"),e._uU(25,"Expiration date: "),e.qZA(),e._uU(26),e.qZA()()()()()(),e.TgZ(27,"ion-card-content")(28,"ion-select",13),e.NdJ("ionChange",function(r){e.CHM(i);const c=e.oxw(4);return e.KtG(c.onStatusChange(r))}),e.TgZ(29,"ion-select-option",14),e._uU(30,"In progress"),e.qZA(),e.TgZ(31,"ion-select-option",15),e._uU(32,"Ready for pickup"),e.qZA(),e.TgZ(33,"ion-select-option",16),e._uU(34,"In transit"),e.qZA(),e.TgZ(35,"ion-select-option",17),e._uU(36,"Completed"),e.qZA()(),e.TgZ(37,"ion-button",3),e.NdJ("click",function(){e.CHM(i);const r=e.oxw(4);return e.KtG(r.onSaveStatus())}),e._uU(38,"Save"),e.qZA()()(),e.BQk()}if(2&n){const i=s.$implicit;e.xp6(8),e.Q6J("src",i.image,e.LSH),e.xp6(3),e.Oqu(i.name),e.xp6(5),e.Oqu(i.dosage),e.xp6(5),e.Oqu(i.route),e.xp6(5),e.Oqu(i.expirationDate)}}function P(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Medications"),e.qZA(),e.TgZ(4,"ion-buttons",5)(5,"ion-button",6),e.NdJ("click",function(){e.CHM(i);const r=e.oxw(3);return e.KtG(r.setOpen(!1,[],0))}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content"),e.YNc(8,y,39,5,"ng-container",2),e.qZA()}if(2&n){const i=e.oxw(3);e.xp6(8),e.Q6J("ngForOf",i.selectedMedicationArray)}}function C(n,s){if(1&n){const i=e.EpF();e.ynx(0),e._UZ(1,"br"),e.TgZ(2,"ion-card")(3,"ion-card-content")(4,"ion-grid")(5,"ion-row")(6,"ion-col")(7,"strong"),e._uU(8,"prescribedDate"),e.qZA()(),e.TgZ(9,"ion-col"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col")(13,"strong"),e._uU(14,"Instructions"),e.qZA()(),e.TgZ(15,"ion-col"),e._uU(16),e.qZA()(),e.TgZ(17,"ion-row")(18,"ion-col")(19,"strong"),e._uU(20,"Notes"),e.qZA()(),e.TgZ(21,"ion-col"),e._uU(22),e.qZA()(),e.TgZ(23,"ion-row")(24,"ion-col")(25,"strong"),e._uU(26,"Prescribed date"),e.qZA()(),e.TgZ(27,"ion-col"),e._uU(28),e.qZA()(),e.TgZ(29,"ion-row")(30,"ion-col")(31,"strong"),e._uU(32,"Status"),e.qZA()(),e.TgZ(33,"ion-col"),e._uU(34),e.qZA()()()(),e.TgZ(35,"ion-button",3),e.NdJ("click",function(){const r=e.CHM(i),c=r.$implicit,l=r.index,g=e.oxw(2);return e.KtG(g.setOpen(!0,c.prescribedMedications,l))}),e._uU(36,"View detail"),e.qZA()(),e.TgZ(37,"ion-modal",4),e.YNc(38,P,9,1,"ng-template"),e.qZA(),e.BQk()}if(2&n){const i=s.$implicit,t=e.oxw(2);e.xp6(10),e.Oqu(i.condition),e.xp6(6),e.Oqu(i.instructions),e.xp6(6),e.Oqu(i.notes),e.xp6(6),e.Oqu(i.prescribedDate),e.xp6(6),e.Oqu(i.status),e.xp6(3),e.Q6J("isOpen",t.isModalOpen)}}function T(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,C,39,6,"ng-container",2),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.medications)}}function b(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"There is no prescription to show."),e.qZA())}let A=(()=>{var n;class s{constructor(t,r,c){this.prescriptionService=t,this.toastController=r,this.router=c,this.patientId="",this.isModalOpen=!1,this.selectedMedicationArray=[],this.selectedIndex=0,this.medications=[]}setOpen(t,r,c){this.isModalOpen=t,this.selectedMedicationArray=r,this.selectedIndex=c,console.log(this.selectedMedicationArray)}onStatusChange(t){const r=t.detail.value;this.medications[this.selectedIndex].status=r,console.log("Selected Status:",r)}onSaveStatus(){var t=this;this.prescriptionService.updatePrescription(this.medications[this.selectedIndex]).then(function(){var r=(0,d.Z)(function*(c){200===c.status?yield(yield t.toastController.create({message:c.message,duration:2500,color:"success",position:"top"})).present():t.toastController.create({message:c.message,duration:2500,color:"danger",position:"top"}).then(l=>{l.present()})});return function(c){return r.apply(this,arguments)}}())}ngOnInit(){console.log(this.patientId),this.prescriptionService.getAllPatientPrescription(this.patientId).then(t=>{this.medications=t.data,console.log(t)})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(x.v),e.Y36(o.yF),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-prescription"]],inputs:{patientId:"patientId"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noPrescription",""],[4,"ngFor","ngForOf"],["type","submit","expand","full","shape","round","color","primary",3,"click"],[3,"isOpen"],["slot","end"],[3,"click"],[1,"ion-card-custom"],[1,"ion-card-header-custom"],["size","auto"],["alt","Silhouette of a person's head",3,"src"],[1,"white-text",2,"font-size","14px"],[1,"white-text",2,"font-size","12px"],["label","status","placeholder","Select status",3,"ionChange"],["value","In progress"],["value","Ready for pickup"],["value","In transit"],["value","Completed"]],template:function(t,r){if(1&t&&(e.YNc(0,T,2,1,"div",0),e.YNc(1,b,2,0,"ng-template",null,1,e.W1O)),2&t){const c=e.MAs(2);e.Q6J("ngIf",0!==r.medications.length)("ngIfElse",c)}},dependencies:[u.sg,u.O5,o.BJ,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.t9,o.n0,o.wd,o.sr,o.ki,o.QI],styles:[".detail-container[_ngcontent-%COMP%]{border-radius:15px;background:#96BFDB;margin-top:-1.5rem;height:50px}.ion-card-header-custom[_ngcontent-%COMP%]{margin-top:-.5rem}.detail-tittle[_ngcontent-%COMP%]{font-size:12px}.detail-row[_ngcontent-%COMP%]{margin-top:-.4rem;margin-left:1rem}"]}),s})();function q(n,s){if(1&n&&e._UZ(0,"app-prescription",7),2&n){const i=e.oxw(2);e.Q6J("patientId",i.patientId)}}function U(n,s){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"div",5),e.YNc(3,q,1,1,"app-prescription",6),e.qZA()()),2&n){const i=e.oxw();e.xp6(3),e.Q6J("ngIf",""!==i.patientId)}}let w=(()=>{var n;class s{constructor(t){this.route=t,this.patientId="",this.selectedSegment="prescription"}segmentChanged(t){this.selectedSegment=t.detail.value}ngOnInit(){this.route.paramMap.subscribe(t=>{this.patientId=t.get("id")||""})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-patient"]],decls:13,vars:1,consts:[["size","4.2"],["href","/pharmacy"],["name","chevron-back-outline"],["color","secondary","value","secondary",3,"ionChange"],[4,"ngIf"],[1,"scrollable-content"],[3,"patientId",4,"ngIf"],[3,"patientId"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-grid")(3,"ion-row")(4,"ion-col",0)(5,"a",1),e._UZ(6,"ion-icon",2),e.qZA()(),e.TgZ(7,"ion-col")(8,"ion-title"),e._uU(9," Prescription "),e.qZA()()()()()(),e.TgZ(10,"ion-content")(11,"ion-segment",3),e.NdJ("ionChange",function(l){return r.segmentChanged(l)}),e.qZA(),e.YNc(12,U,4,1,"div",4),e.qZA()),2&t&&(e.xp6(12),e.Q6J("ngIf","prescription"===r.selectedSegment))},dependencies:[u.O5,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Nd,o.cJ,o.wd,o.sr,o.QI,A],styles:[".scrollable-content[_ngcontent-%COMP%]{max-height:40rem;overflow-y:auto;height:600px}"]}),s})();var N=p(7149),S=p(708),F=p(4826);let O=(()=>{var n;class s extends F.b{createPharmacist(t){return(0,S.n)(this.httpClient.post(`${this.backendServiceUrl}/Pharmacist/Agregar`,t))}}return(n=s).\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(n)))(r||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();const M=[{path:"",component:I},{path:"patient/:id",component:w},{path:"signup",component:(()=>{var n;class s{constructor(t,r,c,l){this.route=t,this.toastController=r,this.authenticationService=c,this.pharmacyService=l,this.signupForm=new a.cw({name:new a.NI("",a.kI.required),userId:new a.NI(""),doctorId:new a.NI(0),lastname:new a.NI("",a.kI.required),username:new a.NI("",a.kI.required),email:new a.NI("",[a.kI.email,a.kI.required]),emailAddress:new a.NI(""),birthDate:new a.NI("",a.kI.required),documentType:new a.NI("",a.kI.required),documentNumber:new a.NI("",a.kI.required),phoneNumber:new a.NI("",a.kI.required),gender:new a.NI("",a.kI.required),role:new a.NI("Pharmacist"),pharmacyId:new a.NI(2,a.kI.required),password:new a.NI("",[a.kI.required,a.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),confirmPassword:new a.NI("",a.kI.required)})}onSignUp(){var t=this;return(0,d.Z)(function*(){t.signupForm.valid?t.authenticationService.createUser(t.signupForm.value).then(function(){var c=(0,d.Z)(function*(l){if("Success"===l.status){const g=yield t.toastController.create({message:l.message,duration:2500,color:"success",position:"top"});sessionStorage.setItem("token",l.data.token),sessionStorage.setItem("userId",l.userId),t.signupForm.controls.userId.setValue(l.data.userId),t.signupForm.controls.emailAddress.setValue(t.signupForm.controls.email.value),t.pharmacyService.createPharmacist(t.signupForm.value).then(function(){var Y=(0,d.Z)(function*(E){yield g.present().then(()=>t.route.navigateByUrl("pharmacy"))});return function(E){return Y.apply(this,arguments)}}())}else yield(yield t.toastController.create({message:l.message,duration:2500,color:"danger",position:"top"})).present()});return function(l){return c.apply(this,arguments)}}()):yield(yield t.toastController.create({message:"Please fill all form inputs!",duration:1500,color:"danger",position:"top"})).present()})()}ngOnInit(){}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(m.F0),e.Y36(o.yF),e.Y36(N.$),e.Y36(O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup"]],decls:46,vars:2,consts:[[1,"ion-padding",3,"fullscreen"],["size","4.2"],["href","/login"],["name","chevron-back-outline"],[3,"formGroup","ngSubmit"],["label","Firstname","label-placement","floating","fill","outline","formControlName","name","placeholder","Enter text"],["label","Lastname","label-placement","floating","fill","outline","formControlName","lastname","placeholder","Enter text"],["label","Username","label-placement","floating","fill","outline","formControlName","username","placeholder","Enter text"],["label","Email address","label-placement","floating","fill","outline","formControlName","email","type","email","placeholder","Enter text"],["label","Date of birth","label-placement","floating","fill","outline","formControlName","birthDate","type","date","placeholder","Enter text"],["formControlName","documentType","label","Document Type","placeholder","Select document type"],["value","P"],["value","C"],["label","Numero de documento","label-placement","floating","fill","outline","formControlName","documentNumber","type","text","placeholder","Enter text"],["label","Numero de telefono","label-placement","floating","fill","outline","formControlName","phoneNumber","type","text","placeholder","Enter text"],["formControlName","gender","label","Gender","placeholder","Select gender"],["value","M"],["value","F"],["label","Password","label-placement","floating","fill","outline","placeholder","Enter text","formControlName","password","type","password"],["label","Confirm  password","label-placement","floating","fill","outline","placeholder","Enter text","formControlName","confirmPassword","type","password"],["type","submit","expand","full","shape","round","color","primary"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"a",2),e._UZ(5,"ion-icon",3),e.qZA()(),e.TgZ(6,"ion-col")(7,"h2"),e._uU(8,"Sign Up"),e.qZA()()()(),e.TgZ(9,"form",4),e.NdJ("ngSubmit",function(){return r.onSignUp()}),e._UZ(10,"ion-input",5)(11,"br")(12,"ion-input",6)(13,"br")(14,"ion-input",7)(15,"br")(16,"ion-input",8)(17,"br")(18,"ion-input",9)(19,"br")(20,"br"),e.TgZ(21,"ion-item")(22,"ion-select",10)(23,"ion-select-option",11),e._uU(24,"Passport"),e.qZA(),e.TgZ(25,"ion-select-option",12),e._uU(26,"C\xe9dula de identidad"),e.qZA()()(),e._UZ(27,"br")(28,"ion-input",13)(29,"br")(30,"br")(31,"ion-input",14)(32,"br"),e.TgZ(33,"ion-item")(34,"ion-select",15)(35,"ion-select-option",16),e._uU(36,"Masculine"),e.qZA(),e.TgZ(37,"ion-select-option",17),e._uU(38,"Feminine"),e.qZA()()(),e._UZ(39,"br")(40,"ion-input",18)(41,"br")(42,"ion-input",19)(43,"br"),e.TgZ(44,"ion-button",20),e._uU(45,"Sign Up"),e.qZA()()()),2&t&&(e.Q6J("fullscreen",!1),e.xp6(9),e.Q6J("formGroup",r.signupForm))},dependencies:[a._Y,a.JJ,a.JL,o.YG,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Nd,o.t9,o.n0,o.QI,o.j9,a.sg,a.u]}),s})()}];let k=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(M),m.Bz]}),s})(),J=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,a.u5,o.Pc,a.UX,k]}),s})()}}]);
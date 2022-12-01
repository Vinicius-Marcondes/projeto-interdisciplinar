"use strict";(self.webpackChunkutp_torneio=self.webpackChunkutp_torneio||[]).push([[475],{1475:(X,c,n)=>{n.r(c),n.d(c,{UsersModule:()=>z});var o=n(665),l=n(8583),a=n(9728),e=n(639);let _=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"router-outlet"),e.qZA(),e.qZA())},directives:[a.lC],encapsulation:2}),t})();var p=n(8049),m=n(7236);function v(t,s){1&t&&e._UZ(0,"span",10)}function A(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Delete"),e.qZA())}function T(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",6),e.TgZ(8,"a",7),e._uU(9,"Edit"),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){const f=e.CHM(i).$implicit;return e.oxw().deleteUser(f.id)}),e.YNc(11,v,1,0,"span",9),e.YNc(12,A,2,0,"span",5),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=s.$implicit;e.xp6(2),e.lnq("",i.title," ",i.firstName," ",i.lastName,""),e.xp6(2),e.Oqu(i.email),e.xp6(2),e.Oqu(i.role),e.xp6(2),e.MGl("routerLink","edit/",i.id,""),e.xp6(2),e.Q6J("disabled",i.isDeleting),e.xp6(1),e.Q6J("ngIf",i.isDeleting),e.xp6(1),e.Q6J("ngIf",!i.isDeleting)}}function q(t,s){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td",11),e._UZ(2,"span",12),e.qZA(),e.qZA())}let h=(()=>{class t{constructor(i){this.userService=i}ngOnInit(){this.userService.getAll().pipe((0,p.P)()).subscribe(i=>this.users=i)}deleteUser(i){const r=this.users.find(d=>d.id===i);!r||(r.isDeleting=!0,this.userService.delete(i).pipe((0,p.P)()).subscribe(()=>this.users=this.users.filter(d=>d.id!==i)))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.KD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(i,r){1&i&&(e.TgZ(0,"h1"),e._uU(1,"Users"),e.qZA(),e.TgZ(2,"a",0),e._uU(3,"Add User"),e.qZA(),e.TgZ(4,"table",1),e.TgZ(5,"thead"),e.TgZ(6,"tr"),e.TgZ(7,"th",2),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"th",2),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th",2),e._uU(12,"Role"),e.qZA(),e._UZ(13,"th",3),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,T,13,9,"tr",4),e.YNc(16,q,3,0,"tr",5),e.qZA(),e.qZA()),2&i&&(e.xp6(15),e.Q6J("ngForOf",r.users),e.xp6(1),e.Q6J("ngIf",!r.users))},directives:[a.yS,l.sg,l.O5],encapsulation:2}),t})();var b=n(5013);function C(t,s){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Add User"),e.qZA())}function U(t,s){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Edit User"),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Title is required"),e.qZA())}function x(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,N,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.title.errors.required)}}function I(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function J(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,I,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.firstName.errors.required)}}function w(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function Q(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,w,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.lastName.errors.required)}}function E(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function Y(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email must be a valid email address"),e.qZA())}function M(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,E,2,0,"div",0),e.YNc(2,Y,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function y(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Role is required"),e.qZA())}function k(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,y,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.role.errors.required)}}function L(t,s){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h3",26),e._uU(2,"Change Password"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Leave blank to keep the same password"),e.qZA(),e.qZA())}function S(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function P(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function F(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,S,2,0,"div",0),e.YNc(2,P,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.password.errors.minlength)}}function V(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function K(t,s){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function O(t,s){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,V,2,0,"div",0),e.YNc(2,K,2,0,"div",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function R(t,s){1&t&&e._UZ(0,"span",27)}const u=function(t){return{"is-invalid":t}};let g=(()=>{class t{constructor(i,r,d,f,Z){this.formBuilder=i,this.route=r,this.router=d,this.userService=f,this.alertService=Z,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const i=[o.kI.minLength(6)];this.isAddMode&&i.push(o.kI.required);const r={validators:(0,b.Yf)("password","confirmPassword")};this.form=this.formBuilder.group({title:["",o.kI.required],firstName:["",o.kI.required],lastName:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],role:["",o.kI.required],password:["",[o.kI.minLength(6),this.isAddMode?o.kI.required:o.kI.nullValidator]],confirmPassword:["",this.isAddMode?o.kI.required:o.kI.nullValidator]},r),this.isAddMode||this.userService.getById(this.id).pipe((0,p.P)()).subscribe(d=>this.form.patchValue(d))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.userService.create(this.form.value).pipe((0,p.P)()).subscribe(()=>{this.alertService.success("User added",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}updateUser(){this.userService.update(this.id,this.form.value).pipe((0,p.P)()).subscribe(()=>{this.alertService.success("User updated",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(o.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(m.KD),e.Y36(m.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:62,vars:34,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["formControlName","title",1,"form-control",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"form-group","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group","col-7"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["formControlName","role",1,"form-control",3,"ngClass"],["value","User"],["value","Admin"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"pt-3"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(i,r){1&i&&(e.YNc(0,C,2,0,"h1",0),e.YNc(1,U,2,0,"h1",0),e.TgZ(2,"form",1),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"label"),e._uU(6,"Title"),e.qZA(),e.TgZ(7,"select",4),e._UZ(8,"option",5),e.TgZ(9,"option",6),e._uU(10,"Mr"),e.qZA(),e.TgZ(11,"option",7),e._uU(12,"Mrs"),e.qZA(),e.TgZ(13,"option",8),e._uU(14,"Miss"),e.qZA(),e.TgZ(15,"option",9),e._uU(16,"Ms"),e.qZA(),e.qZA(),e.YNc(17,x,2,1,"div",10),e.qZA(),e.TgZ(18,"div",11),e.TgZ(19,"label"),e._uU(20,"First Name"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,J,2,1,"div",10),e.qZA(),e.TgZ(23,"div",11),e.TgZ(24,"label"),e._uU(25,"Last Name"),e.qZA(),e._UZ(26,"input",13),e.YNc(27,Q,2,1,"div",10),e.qZA(),e.qZA(),e.TgZ(28,"div",2),e.TgZ(29,"div",14),e.TgZ(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",15),e.YNc(33,M,3,2,"div",10),e.qZA(),e.TgZ(34,"div",3),e.TgZ(35,"label"),e._uU(36,"Role"),e.qZA(),e.TgZ(37,"select",16),e._UZ(38,"option",5),e.TgZ(39,"option",17),e._uU(40,"User"),e.qZA(),e.TgZ(41,"option",18),e._uU(42,"Admin"),e.qZA(),e.qZA(),e.YNc(43,k,2,1,"div",10),e.qZA(),e.qZA(),e.YNc(44,L,5,0,"div",0),e.TgZ(45,"div",2),e.TgZ(46,"div",3),e.TgZ(47,"label"),e._uU(48,"Password"),e.qZA(),e._UZ(49,"input",19),e.YNc(50,F,3,2,"div",10),e.qZA(),e.TgZ(51,"div",3),e.TgZ(52,"label"),e._uU(53,"Confirm Password"),e.qZA(),e._UZ(54,"input",20),e.YNc(55,O,3,2,"div",10),e.qZA(),e.qZA(),e.TgZ(56,"div",21),e.TgZ(57,"button",22),e.YNc(58,R,1,0,"span",23),e._uU(59," Save "),e.qZA(),e.TgZ(60,"a",24),e._uU(61,"Cancel"),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.Q6J("ngIf",r.isAddMode),e.xp6(1),e.Q6J("ngIf",!r.isAddMode),e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("ngClass",e.VKq(20,u,r.submitted&&r.f.title.errors)),e.xp6(10),e.Q6J("ngIf",r.submitted&&r.f.title.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(22,u,r.submitted&&r.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(24,u,r.submitted&&r.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.lastName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(26,u,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(28,u,r.submitted&&r.f.role.errors)),e.xp6(6),e.Q6J("ngIf",r.submitted&&r.f.role.errors),e.xp6(1),e.Q6J("ngIf",!r.isAddMode),e.xp6(5),e.Q6J("ngClass",e.VKq(30,u,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(32,u,r.submitted&&r.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.confirmPassword.errors),e.xp6(2),e.Q6J("disabled",r.loading),e.xp6(1),e.Q6J("ngIf",r.loading))},directives:[l.O5,o._Y,o.JL,o.sg,o.EJ,o.JJ,o.u,l.mk,o.YN,o.Kr,o.Fj,a.yS],encapsulation:2}),t})();const B=[{path:"",component:_,children:[{path:"",component:h},{path:"add",component:g},{path:"edit/:id",component:g}]}];let D=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(B)],a.Bz]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,o.UX,D]]}),t})()}}]);
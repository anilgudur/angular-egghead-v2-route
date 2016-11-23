"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//import { RouterModule } from '@angular/router';
var contacts_component_1 = require('./contacts.component');
var contacts_routes_1 = require("./contacts.routes");
// const routes = [
//     {path:'', component: ContactsComponent}
// ];
var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        core_1.NgModule({
            //imports: [CommonModule, RouterModule.forChild(routes) ],
            imports: [common_1.CommonModule, contacts_routes_1.default],
            exports: [],
            declarations: [contacts_component_1.ContactsComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsModule);
    return ContactsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactsModule;
//# sourceMappingURL=contacts.module.js.map
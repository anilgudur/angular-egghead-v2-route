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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
var http_1 = require('@angular/http');
var ContactComponent = (function () {
    function ContactComponent(route, http) {
        this.route = route;
        this.http = http;
        var apiUrl = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
        //this.id = route.params.map((p:any) => p.id);
        this.contact$ = route.params
            .map(function (p) { return p.id; })
            .switchMap(function (id) { return http.get(apiUrl + 'people/' + id)
            .map(function (res) { return res.json(); })
            .map(function (contact) { return Object.assign({}, contact, { image: apiUrl + contact.image }); }); })
            .startWith({ name: 'Loading...', image: '' });
    }
    ContactComponent = __decorate([
        core_1.Component({
            template: "\n        <!-- contact {{id | async}} -->\n        <!-- contact {{contact$ | async}} -->\n        <!-- contact {{(contact$ | async)?.name}} --><!-- '?' mark is for \"Don't load this name if this is NULL\" -->\n        <h2>{{(contact$ | async).name}}</h2>\n        <img [src]=\"(contact$ | async).image\">\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
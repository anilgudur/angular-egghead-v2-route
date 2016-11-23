"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var contacts_component_1 = require('./contacts/contacts.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map
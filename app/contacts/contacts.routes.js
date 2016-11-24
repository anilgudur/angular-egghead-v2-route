"use strict";
var router_1 = require('@angular/router');
var contacts_component_1 = require('./contacts.component');
var contact_component_1 = require('./contact.component');
var routes = [
    { path: '', component: contacts_component_1.ContactsComponent },
    { path: ':id', component: contact_component_1.ContactComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=contacts.routes.js.map
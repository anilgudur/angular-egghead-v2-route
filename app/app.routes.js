"use strict";
var router_1 = require('@angular/router');
//import { HomeComponent }   from './home/home.component';
//import { ContactsComponent }   from './contacts/contacts.component';
var routes = [
    //{path:'', component: HomeComponent},
    { path: '', loadChildren: 'app/home/home.module' },
    //{path:'contacts', component: ContactsComponent}
    { path: 'contacts', loadChildren: 'app/contacts/contacts.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map
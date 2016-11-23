import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { RouterModule } from '@angular/router';
import { ContactsComponent }   from './contacts.component';

import contactsRoutes from "./contacts.routes";

// const routes = [
//     {path:'', component: ContactsComponent}
// ];

@NgModule({
    //imports: [CommonModule, RouterModule.forChild(routes) ],
    imports: [CommonModule, contactsRoutes ],
    exports: [],
    declarations: [ContactsComponent],
    providers: [],
})
export default class ContactsModule { }

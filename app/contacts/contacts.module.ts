import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

//import { RouterModule } from '@angular/router';
import { ContactsComponent }   from './contacts.component';
import { ContactComponent }   from './contact.component';

import contactsRoutes from "./contacts.routes";

// const routes = [
//     {path:'', component: ContactsComponent}
// ];

@NgModule({
    //imports: [CommonModule, RouterModule.forChild(routes) ],
    imports: [CommonModule, contactsRoutes, HttpModule ],
    exports: [],
    declarations: [ContactsComponent, ContactComponent],
    providers: [],
})
export default class ContactsModule { }

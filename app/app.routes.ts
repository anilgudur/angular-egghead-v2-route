import { RouterModule } from '@angular/router';

//import { HomeComponent }   from './home/home.component';
//import { ContactsComponent }   from './contacts/contacts.component';


const routes = [
    //{path:'', component: HomeComponent},
    {path:'', loadChildren: 'app/home/home.module' },
    //{path:'contacts', component: ContactsComponent}
    {path:'contacts', loadChildren: 'app/contacts/contacts.module'}
];

export default RouterModule.forRoot(routes);
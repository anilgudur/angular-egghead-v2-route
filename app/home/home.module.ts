import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { RouterModule } from '@angular/router';
import { HomeComponent }   from './home.component';

import homeRoutes from "./home.routes";

// const routes = [
//     {path:'', component: HomeComponent}
// ];

@NgModule({
    //imports: [CommonModule, RouterModule.forChild(routes) ],
    imports: [CommonModule, homeRoutes ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export default class HomeModule { }

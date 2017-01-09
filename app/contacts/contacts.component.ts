import { Component } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
    template:`
        <div *ngFor="let contact of contacts$ | async"> 
            <!-- <a [routerLink]="['/contacts', contact.id]"> -->
            <a [routerLink]="contact.id">
                {{contact.name}}
            </a>
        </div>
    `
})
export class ContactsComponent{

    contacts$; // appended '$' because is is a Observable variable

    constructor(private http:Http){
        this.contacts$ = http.get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
        .map(res => res.json());
    }
}
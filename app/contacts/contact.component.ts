import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";

import { Http } from '@angular/http';

@Component({
    template:`
        <!-- contact {{id | async}} -->
        <!-- contact {{contact$ | async}} -->
        <!-- contact {{(contact$ | async)?.name}} --><!-- '?' mark is for "Don't load this name if this is NULL" -->
        <h2>{{(contact$ | async).name}}</h2>
        <img [src]="(contact$ | async).image">
    `
})
export class ContactComponent{
    //id;
    contact$;
    constructor(private route:ActivatedRoute, private http:Http){

        const apiUrl = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';

        //this.id = route.params.map((p:any) => p.id);
        this.contact$ = route.params
                        .map((p:any) => p.id)
                        .switchMap(
                            id => http.get(apiUrl + 'people/' + id)
                            .map(res => res.json())
                            .map(contact => Object.assign({}, contact, {image: apiUrl + contact.image}))
                        )
                        .startWith({name: 'Loading...', image: ''});
    }
}
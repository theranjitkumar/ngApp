import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../../ngrx/counter.actions';

@Component({
    selector: 'app-ngrx-page',
    templateUrl: './ngrx-page.component.html',
    styleUrls: ['./ngrx-page.component.css']
})
export class NgrxPageComponent implements OnInit {

    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.store.dispatch(new Decrement());
    }

    reset() {
        this.store.dispatch(new Reset());
    }

    sayHello() {
        console.log('Hello dude.....');
        const div = document.getElementById('div');
        div.innerHTML = 'Hello dude....';
    }

    ngOnInit() {
    this.sayHello();
    }

}

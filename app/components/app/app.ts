/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View } from 'angular2/angular2';

import { Hello } from '../hello/hello';

@Component({
    selector: 'app'
})

@View({
    directives: [Hello],
    templateUrl: 'app/components/app/app.html'
})

export class App {
}
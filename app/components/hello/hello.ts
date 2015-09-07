/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'hello',
    properties: ['who']
})

@View({
    templateUrl: 'app/components/hello/hello.html'
})

export class Hello {
}
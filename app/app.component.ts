import { Component } from '@angular/core';
import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';

@Component({
    selector: 'app',
    directives: [ UIROUTER_DIRECTIVES ],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent { };
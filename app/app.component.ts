import { Component } from '@angular/core';
import ContactItemComponent from './contact-item.component'


@Component({
    selector: 'app',
    directives: [ ContactItemComponent ],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    firstContact = {
        name: 'Donald Parker',
        address: '1234 Newport Ave.',
        phone: '760.814.0037'
    }
};
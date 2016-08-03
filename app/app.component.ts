import { Component } from '@angular/core';
import ContactItemComponent from './contact-item.component'


@Component({
    selector: 'app',
    directives: [ ContactItemComponent ],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    contacts = [{
        name: 'Donald Parker',
        address: '1234 Newport Ave.',
        phone: '760.814.0037'
    }, {
        name: 'Shayna Parker',
        address: '1234 Newport Ave.',
        phone: '858.531.6940'
    }]
    onContactItemDeleted(e){
        console.log(e);
    }
};
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
        id: 0,
        name: 'Donald Parker',
        address: '1234 Newport Ave.',
        phone: '760.814.0037',
        developer: true,
        friend: false
    }, {
        id: 1,
        name: 'Shayna Parker',
        address: '1234 Newport Ave.',
        phone: '858.531.6940',
        developer: false,
        friend: true
    }, {
        id: 1,
        name: 'Marvin Parker',
        address: '1234 Main St.',
        phone: '555.555.5555',
        developer: true,
        friend: true
    }]
    onContactItemDeleted(e){
        console.log(e);
    }
};
import { Component } from '@angular/core';
import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';
import ContactItemComponent from './contact-item.component'


@Component({
    selector: 'app',
    directives: [ UIROUTER_DIRECTIVES, ContactItemComponent ],
    templateUrl: 'app/contacts.component.html',
    styleUrls: ['app/contacts.component.css']
})

export class ContactsComponent {
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
        id: 2,
        name: 'Marvin Parker',
        address: '1234 Main St.',
        phone: '555.555.5555',
        developer: true,
        friend: true
    }]
    onContactItemDeleted(e){
        this.contacts = this.contacts.filter(item => item.id !== e.id);
    }
};
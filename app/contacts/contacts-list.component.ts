import { Component, Inject } from '@angular/core';
import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';
import ContactItemComponent from './contact-item.component'


@Component({
    selector: 'contacts-list',
    directives: [ UIROUTER_DIRECTIVES, ContactItemComponent ],
    templateUrl: 'app/contacts/contacts-list.component.html',
    styleUrls: ['app/contacts/contacts-list.component.css']
})

export class ContactsListComponent {
    constructor(@Inject('contacts') public contacts){

    }
    onContactItemDeleted(e){
        this.contacts = this.contacts.filter(item => item.id !== e.id);
    }
};
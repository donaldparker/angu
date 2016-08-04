import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeveloperDirective } from '../directives/developer.directive';

@Component({
    selector: 'contact-item',
    directives: [ DeveloperDirective ],
    templateUrl: 'app/contacts/contact-item.component.html',
    styleUrls: [ 'app/contacts/contact-item.component.css' ]
})

export default class ContactItemComponent {
    @Input() contactItem;
    @Output('removed') remove = new EventEmitter();

    onRemove() {
        this.remove.emit(this.contactItem);
    }
    onDetails() {
        console.log('on contact item details');
    }
}
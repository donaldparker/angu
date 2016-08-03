import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeveloperDirective } from './developer.directive';

@Component({
    selector: 'contact-item',
    directives: [ DeveloperDirective ],
    templateUrl: 'app/contact-item.component.html',
    styleUrls: [ 'app/contact-item.component.css' ]
})

export default class ContactItemComponent {
    @Input() contactItem;
    @Output('removed') remove = new EventEmitter();

    onRemove() {
        console.log('on contact item remove');
        this.remove.emit(this.contactItem);
    }
    onDetails() {
        console.log('on contact item details');
    }
}
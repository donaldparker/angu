import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contact-item',
    templateUrl: 'app/contact-item.component.html',
    styleUrls: ['app/contact-item.component.css']
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
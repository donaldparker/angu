import { Component, Input } from '@angular/core';

@Component({
    selector: 'contact-item',
    templateUrl: 'app/contact-item.component.html',
    styleUrls: ['app/contact-item.component.css']
})

export default class ContactItemComponent {
    @Input() contactItem;
    onRemove() {
        console.log('on contact item remove');
    }
    onDetails() {
        console.log('on contact item details');
    }
}
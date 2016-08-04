import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";
import { DeveloperDirective } from '../directives/developer.directive';

@Component({
    selector: 'contact-details',
    directives: [ UIROUTER_DIRECTIVES, DeveloperDirective ],
    templateUrl: 'app/contacts/contact-details.component.html'
})

export default class ContactDetailsComponent {
    @Input() contactDetails;
    @Output('removed') remove = new EventEmitter();
    @Output('saved') save = new EventEmitter();

    onRemove() {
        this.remove.emit(this.contactDetails);
    }
    onSave() {
        this.save.emit(this.contactDetails);
    }
}
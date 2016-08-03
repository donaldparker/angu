import { Directive, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[ciDeveloper]' })

export class DeveloperDirective {
    @HostBinding('class.is-developer') isDeveloper = true;
    @HostBinding('class.is-not-developer') isNotDeveloper = false;
    @Input()
    set ciDeveloper(value) {
        this.isDeveloper = value;
        this.isNotDeveloper = !value;
    }
}
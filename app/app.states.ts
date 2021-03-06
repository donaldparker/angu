import { AppComponent } from './app.component';
import { CONTACTS_STATE } from './contacts/contacts-list.state';
import { Ng2StateDeclaration } from 'ui-router-ng2/ng2/interface'

let MAIN_STATES: Ng2StateDeclaration[] = [
    { name: 'app', component: AppComponent }
];

export let INITIAL_STATES: Ng2StateDeclaration[] = MAIN_STATES.concat(CONTACTS_STATE);
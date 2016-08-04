import { Http } from "@angular/http";
import { ContactsListComponent } from './contacts-list.component';
import ContactDetailsComponent from './contact-details.component';
import { Ng2StateDeclaration, Transition } from "ui-router-ng2";

export let CONTACTS_STATE:Ng2StateDeclaration[] = [
    {
        name: 'app.contacts',
        url: '/contacts',
        views: {
            $default: { component: ContactsListComponent }
        },
        resolve: [{
            token: 'contacts',
            deps: [ Http ],
            resolveFn: (http:Http) => http.get('/data/contacts.json').map(res => res.json()).toPromise()
        }]
    }, {
        name: 'app.contacts.details',
        url: '/details/:contactId',
        views: {
            '$default@app': { component: ContactDetailsComponent }
        },
        resolve: [{
            token: 'contactDetails', deps: [ 'contacts', Transition ], resolveFn: (contacts, trans) => contacts.find(item => {
                console.log(trans);
                return item.id == trans.params().contactId
            })
        }]
    }
];
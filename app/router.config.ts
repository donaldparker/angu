import { Injectable, Injector } from '@angular/core';
import { UIRouter } from 'ui-router-ng2';
import { INITIAL_STATES } from './app.states';

@Injectable()
export class MyUIRouterConfig {

    constructor(private injector: Injector) { }
    configure(uiRouter: UIRouter) {
        INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));
        uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app", null, null) && null);
    }
}
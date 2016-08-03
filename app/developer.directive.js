"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DeveloperDirective = (function () {
    function DeveloperDirective() {
        this.isDeveloper = true;
        this.isNotDeveloper = false;
    }
    Object.defineProperty(DeveloperDirective.prototype, "ciDeveloper", {
        set: function (value) {
            this.isDeveloper = value;
            this.isNotDeveloper = !value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.is-developer'), 
        __metadata('design:type', Object)
    ], DeveloperDirective.prototype, "isDeveloper", void 0);
    __decorate([
        core_1.HostBinding('class.is-not-developer'), 
        __metadata('design:type', Object)
    ], DeveloperDirective.prototype, "isNotDeveloper", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DeveloperDirective.prototype, "ciDeveloper", null);
    DeveloperDirective = __decorate([
        core_1.Directive({ selector: '[ciDeveloper]' }), 
        __metadata('design:paramtypes', [])
    ], DeveloperDirective);
    return DeveloperDirective;
}());
exports.DeveloperDirective = DeveloperDirective;
//# sourceMappingURL=developer.directive.js.map
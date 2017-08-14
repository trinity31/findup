var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { InterestService } from "./interest.service";
import 'rxjs/add/operator/switchMap';
var InterestsComponent = (function () {
    function InterestsComponent(interestService) {
        this.interestService = interestService;
    }
    InterestsComponent = __decorate([
        Component({
            selector: 'app-interests',
            template: "\n        <div class=\"row\">\n            <app-interest-input></app-interest-input>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <app-interest-list></app-interest-list>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [InterestService])
    ], InterestsComponent);
    return InterestsComponent;
}());
export { InterestsComponent };

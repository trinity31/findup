var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core'; //Input 추가
import { Interest } from './interest.model';
import { InterestService } from "./interest.service";
var InterestComponent = (function () {
    function InterestComponent(interestService) {
        this.interestService = interestService;
    }
    InterestComponent.prototype.onEdit = function () {
        this.interestService.editInterest(this.interest);
    };
    InterestComponent.prototype.onDelete = function () {
        this.interestService.deleteInterest(this.interest)
            .subscribe(function (result) { return console.log(result); });
    };
    InterestComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.interest.userId;
    };
    InterestComponent.prototype.belongsToType = function (type) {
        if (this.interestService.getCurrentType() == type
            || this.interestService.getCurrentType() == undefined)
            return true;
        else
            return false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Interest)
    ], InterestComponent.prototype, "interest", void 0);
    InterestComponent = __decorate([
        Component({
            selector: 'app-interest',
            templateUrl: './interest.component.html',
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [InterestService])
    ], InterestComponent);
    return InterestComponent;
}());
export { InterestComponent };

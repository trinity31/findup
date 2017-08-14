var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { InterestService } from "./interest.service";
import { Interest } from './interest.model';
var InterestInputComponent = (function () {
    function InterestInputComponent(interestService) {
        this.interestService = interestService;
    }
    InterestInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interestService.interestIsEdit.subscribe(function (interest) { return _this.interest = interest; });
    };
    InterestInputComponent.prototype.getInterestType = function () {
        return this.interestService.getCurrentType();
    };
    InterestInputComponent.prototype.onClear = function (form) {
        this.interest = null;
        form.resetForm();
    };
    InterestInputComponent.prototype.onSubmit = function (form) {
        if (this.interest) {
            //Edit
            this.interest.content = form.value.content;
            this.interestService.updateInterest(this.interest)
                .subscribe(function (result) { return console.log(result); });
            this.interest = null;
        }
        else {
            //Create
            var interest = new Interest(form.value.content, this.interestService.getCurrentType(), "", localStorage.getItem('userId'));
            this.interestService.addInterest(interest)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        form.resetForm();
    };
    InterestInputComponent = __decorate([
        Component({
            selector: 'app-interest-input',
            templateUrl: './interest-input.component.html'
        }),
        __metadata("design:paramtypes", [InterestService])
    ], InterestInputComponent);
    return InterestInputComponent;
}());
export { InterestInputComponent };

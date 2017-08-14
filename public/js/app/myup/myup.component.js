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
import { InterestService } from "../interests/interest.service";
import { Interest } from "../interests/interest.model";
import { AlertService } from "../_services/alert.service";
var MyUpComponent = (function () {
    function MyUpComponent(interestService, alertService) {
        this.interestService = interestService;
        this.alertService = alertService;
        this.interests = [];
    }
    MyUpComponent.prototype.onSubmit = function (form) {
        this.number = form.value.number;
        this.findMyUp(this.number);
    };
    MyUpComponent.prototype.findMyUp = function (number) {
        var _this = this;
        this.interests = [];
        this.interestService.getInterests()
            .subscribe(function (interests) {
            // this.interests = interests;    
            console.log("Number of Up: " + interests.length);
            _this.chooseInterests(interests, number);
        });
    };
    MyUpComponent.prototype.chooseInterests = function (interests, number) {
        var index;
        if (interests.length < number) {
            // console.log("Please add more interests.");
            this.alertService.warn(number + "개 이상의 관심사를 등록해 주세요.");
            return;
        }
        while (number != 0) {
            index = Math.floor(Math.random() * interests.length);
            console.log("index: " + index);
            this.interests.push(new Interest(interests[index].content, interests[index].type, interests[index].interestId, interests[index].userId));
            interests.splice(index, 1);
            number--;
        }
    };
    MyUpComponent = __decorate([
        Component({
            selector: 'app-myup',
            templateUrl: './myup.component.html'
        }),
        __metadata("design:paramtypes", [InterestService,
            AlertService])
    ], MyUpComponent);
    return MyUpComponent;
}());
export { MyUpComponent };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { AlertService } from "../_services/alert.service";
var SignupComponent = (function () {
    function SignupComponent(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
        this.isSignedUp = false;
        this.signupDone = new EventEmitter();
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        //this.myForm.reset();
        //this.signupDone.emit("done");
        this.isSignedUp = true;
        this.alertService.success("회원가입이 완료되었습니다.");
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
        });
    };
    SignupComponent.prototype.isSignUpCompleted = function () {
        return this.isSignedUp;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "signupDone", void 0);
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html'
        }),
        __metadata("design:paramtypes", [AuthService,
            AlertService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };

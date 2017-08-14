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
import { AlertType } from '../_models/alert';
import { AlertService } from '../_services/alert.service';
var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Component({
            selector: 'alert',
            templateUrl: 'alert.component.html'
        }),
        __metadata("design:paramtypes", [AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };

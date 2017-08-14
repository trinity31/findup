var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AlertType } from '../_models/alert';
var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], AlertService);
    return AlertService;
}());
export { AlertService };

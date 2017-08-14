var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //private url = 'http://localhost:3000/';
        this.url = 'https://findup.herokuapp.com/';
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AuthService);
    return AuthService;
}());
export { AuthService };

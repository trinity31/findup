var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Interest } from './interest.model';
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var InterestService = (function () {
    //private url = 'http://localhost:3000/interest/';
    function InterestService(http) {
        this.http = http;
        this.interests = []; //create empty array
        this.interestIsEdit = new EventEmitter();
        this.url = 'https://findup.herokuapp.com/interest/';
    }
    InterestService.prototype.addInterest = function (interest) {
        var _this = this;
        var body = JSON.stringify(interest);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.url + token, body, { headers: headers }) //return Observable
            .map(function (response) {
            var result = response.json(); //map function automatically throw Observable
            var interest = new Interest(result.obj.content, result.obj.type, result.obj._id, result.obj.user._id);
            _this.interests.push(interest);
            return interest;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    InterestService.prototype.getInterests = function () {
        var _this = this;
        return this.http.get(this.url)
            .map(function (response) {
            var interests = response.json().obj;
            var transformedInterests = [];
            for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
                var interest = interests_1[_i];
                if (localStorage.getItem('userId') == interest.user._id)
                    transformedInterests.push(new Interest(interest.content, interest.type, interest._id, interest.user._id));
            }
            _this.interests = transformedInterests;
            return transformedInterests;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    InterestService.prototype.deleteInterest = function (interest) {
        this.interests.splice(this.interests.indexOf(interest), 1); //Remove one message in the index of messages array.
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.url + interest.interestId + token) //return Observable
            .map(function (response) { return response.json(); }) //map function automatically throw Observable
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    InterestService.prototype.editInterest = function (interest) {
        this.interestIsEdit.emit(interest);
    };
    InterestService.prototype.updateInterest = function (interest) {
        var body = JSON.stringify(interest);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.url + interest.interestId + token, body, { headers: headers }) //return Observable
            .map(function (response) { return response.json(); }) //map function automatically throw Observable
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    InterestService.prototype.findMyUp = function (number) {
        var _this = this;
        return this.http.get(this.url)
            .map(function (response) {
            var interests = response.json().obj;
            var size = interests.length;
            var transformedInterests = [];
            for (var _i = 0, interests_2 = interests; _i < interests_2.length; _i++) {
                var interest = interests_2[_i];
                if (localStorage.getItem('userId') == interest.user._id)
                    transformedInterests.push(new Interest(interest.content, interest.type, interest._id, interest.user._id));
            }
            _this.interests = transformedInterests;
            return transformedInterests;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    InterestService.prototype.setCurrentType = function (type) {
        this.currentType = type;
    };
    InterestService.prototype.getCurrentType = function () {
        //console.log("Current Type: " + this.currentType);
        return this.currentType;
    };
    InterestService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], InterestService);
    return InterestService;
}());
export { InterestService };

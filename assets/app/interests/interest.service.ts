import { Interest } from './interest.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class InterestService {
    private interests: Interest[] = []; //create empty array
    private currentType: string;
    interestIsEdit = new EventEmitter<Interest>();
    
    //private url = 'https://angular2-nodejs-test.herokuapp.com/message';
    private url = 'http://localhost:3000/interest/';
    
    constructor(private http:Http) {}
    
    addInterest(interest: Interest) {
        const body = JSON.stringify(interest);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.post(this.url + token, body, {headers:headers}) //return Observable
        .map((response: Response) => {
            const result = response.json(); //map function automatically throw Observable
            const interest = new Interest(result.obj.content, result.obj.type,
                                         result.obj._id, result.obj.user._id);
            this.interests.push(interest);
            return interest;
        })
        .catch((error:Response) => Observable.throw(error.json()));
    }
    
    getInterests() {
        return this.http.get(this.url)
        .map((response: Response) => {
            const interests = response.json().obj;
            let transformedInterests: Interest[] = [];
            for (let interest of interests) {
                if(localStorage.getItem('userId') == interest.user._id)
                    transformedInterests.push(new Interest(interest.content, 
                                                        interest.type,
                                                        interest._id, 
                                                        interest.user._id));
            }
            this.interests = transformedInterests;
            return transformedInterests;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }
    
    deleteInterest(interest: Interest) {
        this.interests.splice(this.interests.indexOf(interest), 1); //Remove one message in the index of messages array.
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.delete(this.url + interest.interestId + token) //return Observable
        .map((response: Response) => response.json()) //map function automatically throw Observable
        .catch((error:Response) => Observable.throw(error.json()));      
    }
    
    editInterest(interest: Interest) {
        this.interestIsEdit.emit(interest);
    }
    
    updateInterest(interest: Interest) {
        const body = JSON.stringify(interest);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.patch(this.url + interest.interestId + token, body, {headers:headers}) //return Observable
        .map((response: Response) => response.json()) //map function automatically throw Observable
        .catch((error:Response) => Observable.throw(error.json()));       
    }

    findMyUp(number: number) {
        return this.http.get(this.url)
        .map((response: Response) => {
            const interests = response.json().obj;
            const size = interests.length;
            let transformedInterests: Interest[] = [];
            for (let interest of interests) {
                if(localStorage.getItem('userId') == interest.user._id)
                    transformedInterests.push(new Interest(interest.content, 
                                                        interest.type,
                                                        interest._id, 
                                                        interest.user._id));
            }
            this.interests = transformedInterests;
            return transformedInterests;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    setCurrentType(type: string) {
        this.currentType = type;
    }

    getCurrentType() {
        //console.log("Current Type: " + this.currentType);
        return this.currentType;
    }
}
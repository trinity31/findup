import { Component, Input, OnInit } from '@angular/core'; //Input 추가
import { Interest } from './interest.model';
import { InterestService } from "./interest.service";

@Component({
    selector: 'app-interest',
    templateUrl: './interest.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})

export class InterestComponent {
    @Input() interest: Interest;  //Input : 외부에서 Assign 가능하도록 @Input 추가

    constructor(private interestService: InterestService) {}

    onEdit() {
        this.interestService.editInterest(this.interest);
    }

    onDelete() {
        this.interestService.deleteInterest(this.interest)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.interest.userId;
    }

    belongsToType(type: string) {
        if(this.interestService.getCurrentType() == type 
            || this.interestService.getCurrentType() == undefined)
            return true;
        else
            return false;
    }    
}
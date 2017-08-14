import { Component } from '@angular/core'; 
import { InterestService } from "../interests/interest.service";
import { Interest } from "../interests/interest.model";
import { NgForm } from "@angular/forms";
import { AlertService } from "../_services/alert.service";

@Component({
    selector: 'app-myup',
    templateUrl: './myup.component.html'
})

export class MyUpComponent {
    interests: Interest[] = [];
    number: number;

    constructor(private interestService: InterestService,
                private alertService: AlertService) {
    }

    onSubmit(form: NgForm) { 
        this.number = form.value.number;
        this.findMyUp(this.number);
    }

    findMyUp(number: number) {
        this.interests = [];
        this.interestService.getInterests()
            .subscribe(
                (interests: Interest[]) => {
                   // this.interests = interests;    
                    console.log("Number of Up: " + interests.length);   
                    this.chooseInterests(interests, number);          
                }
            );       
    }

    chooseInterests(interests: Interest[], number: number) {
        var index;
        
        if(interests.length < number) {
           // console.log("Please add more interests.");
            this.alertService.warn(number + "개 이상의 관심사를 등록해 주세요.");
            return;
        }

        while(number != 0) {
            index = Math.floor(Math.random() * interests.length);

            console.log("index: " + index);
            this.interests.push(new Interest(interests[index].content, 
                                        interests[index].type,
                                        interests[index].interestId, 
                                        interests[index].userId));

            interests.splice(index, 1);
            number--;
        }
    }
}
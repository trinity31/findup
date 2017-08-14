import { Component, OnInit } from "@angular/core";
import { InterestService } from "./interest.service";
import { Interest } from './interest.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-interest-input',
    templateUrl: './interest-input.component.html'
})

export class InterestInputComponent implements OnInit {
    interest: Interest;

    constructor(private interestService: InterestService) {

    }

    ngOnInit(): void {
        this.interestService.interestIsEdit.subscribe(
           (interest: Interest) => this.interest = interest
        );
    }

    getInterestType() {
        return this.interestService.getCurrentType();
    }

    onClear(form:NgForm) {
        this.interest = null;
        form.resetForm();
    }

    onSubmit(form:NgForm) {
     if(this.interest) {
         //Edit
         this.interest.content = form.value.content;
         this.interestService.updateInterest(this.interest)
            .subscribe(
                result => console.log(result)
            );
         this.interest = null;
     } else {
         //Create
        const interest = new Interest(form.value.content, 
                            this.interestService.getCurrentType(),
                            "", localStorage.getItem('userId'));
        this.interestService.addInterest(interest)
            .subscribe(
                data => console.log(data),
                error => console.error(error),              
            );         
     }
      form.resetForm();
    }
}
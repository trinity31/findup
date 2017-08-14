import { Component, OnInit } from "@angular/core";
import { Interest } from './interest.model';
import { InterestService } from "./interest.service";

@Component({
    selector: 'app-interest-list',
    template: `
        <div class="col-md-8 col-md-offset-2"> 
            <app-interest 
                [interest]="interest" 
                *ngFor="let interest of interests">
            </app-interest> 
        </div>
    `
})

export class InterestListComponent implements OnInit  {
    interests:Interest[] = [];

    constructor(private interestService: InterestService) {}
    
    ngOnInit() {
        //console.log("InterestListComponent init")
        this.interestService.getInterests()
            .subscribe(
                (interests: Interest[]) => {
                    this.interests = interests;                 
                }
            );
    }
}
import { Component } from '@angular/core'; 
import { InterestService } from "./interest.service";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-interests',
    template: `
        <div class="row">
            <app-interest-input></app-interest-input>
        </div>
        <hr>
        <div class="row">
            <app-interest-list></app-interest-list>
        </div>
    `
})

export class InterestsComponent {
    type: string;

    constructor(private interestService: InterestService) {
    }

}
import { Component } from '@angular/core';
import { InterestService } from "./interests/interest.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [InterestService]
})
export class AppComponent {

}
import { Component } from '@angular/core'; 
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";
import { InterestService } from "./interests/interest.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private authService: AuthService,
                private router: Router,
                private interestService: InterestService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();   
    }

    onSelect(type: string) {
        this.interestService.setCurrentType(type);
        this.router.navigate(['/interests']);
    }
}
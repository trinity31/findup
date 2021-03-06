import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AboutComponent } from "./about/about.component";
import { InterestsComponent } from "./interests/interests.component";
import { MyUpComponent } from "./myup/myup.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'about', component: AboutComponent },
    { path: 'myup', component: MyUpComponent },
    { path: 'interests', component: InterestsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES); //Registers our route to in Angular 2 RouterModule
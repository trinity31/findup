var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AlertComponent } from "./_directives/alert.component";
import { AlertService } from "./_services/alert.service";
import { InterestComponent } from "./interests/interest.component";
import { InterestListComponent } from "./interests/interest-list.component";
import { InterestInputComponent } from "./interests/interest-input.component";
import { InterestsComponent } from "./interests/interests.component";
import { MyUpComponent } from "./myup/myup.component";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MyUpComponent,
                InterestComponent,
                InterestListComponent,
                InterestInputComponent,
                InterestsComponent,
                AboutComponent,
                HeaderComponent,
                AlertComponent,
                SignupComponent,
                SigninComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                routing
            ],
            providers: [
                AuthService,
                AlertService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };

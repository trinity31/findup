import { Component, OnInit, EventEmitter, Output } from "@angular/core"; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { AlertService } from "../_services/alert.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
    myForm: FormGroup;
    private isSignedUp = false;

    @Output() signupDone = new EventEmitter<any>();
    
    constructor(private authService: AuthService,
                private alertService: AlertService) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )
        //this.myForm.reset();
        //this.signupDone.emit("done");
        this.isSignedUp = true;
        this.alertService.success("회원가입이 완료되었습니다.");
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
        });
    }

    isSignUpCompleted() {
        return this.isSignedUp;
    }
}
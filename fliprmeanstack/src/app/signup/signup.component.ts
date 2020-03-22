import { Component, OnInit } from '@angular/core';
import{Signup}from'../signup'
import {SignupService}from '../signup.service'
import { from } from 'rxjs';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signup=new Signup('','','','')
public filldetails=false
public passwordsmatch=false
public checkuser=false
  constructor(private signupservice:SignupService,private authService: AuthService) { }
  private user: SocialUser;
  private loggedIn: boolean;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
    });
  

  }
  onsubmit(){
    if(this.signup.name==='' || this.signup.mail==='' || this.signup.password===''|| this.signup.confirmpassword===''){
      this.filldetails=true
      this.passwordsmatch=false
    }
    else if(this.signup.password!=this.signup.confirmpassword){
      this.filldetails=false
      this.passwordsmatch=true
    }
    else{
      this.signupservice.signup(this.signup).subscribe(
        data=>{console.log(data);
          if(data==="user already exists"){
            this.checkuser=true
          }
        },
        err=>console.log(err)
      )

    }

  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 


}

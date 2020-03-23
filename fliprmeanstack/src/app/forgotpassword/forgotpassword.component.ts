import { Component, OnInit } from '@angular/core';
import {ForgotpasswordService}from '../forgotpassword.service'
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
public check=false
public checkotp=false
public newotp=false
public usermail
public extra=true
public showupdate=false
  constructor(private forgotpass:ForgotpasswordService,private router:Router) { }
  ngOnInit() {
  }
  onsubmit(mail){
    this.checkotp=false
    this.newotp=false
    this.usermail=mail
this.forgotpass.forgotpasswordmail({mail:mail}).subscribe(
  data=>{
    if(data=="otp sent"){
      this.check=true
    }
  },
  err=>console.log(err)
)
  }
  otpsubmit(otp)
{
  this.newotp=false
  this.forgotpass.otp({otp:otp}).subscribe(
    data=>{console.log('D',data);if(data=="ok"){
      this.checkotp=false
      this.check=false
      this.newotp=true
      this.extra=false
    }
    
  else{
this.checkotp=true
this.newotp=false
this.extra=false
  }
  }

  )
}
passwordsubmit(password){
  this.forgotpass.newpassword({mail:this.usermail,password:password}).subscribe(
    data=>{
      if(data=="updated"){
        this.showupdate=true
        setTimeout(()=>{
          this.router.navigate(['/login'])
        },1300)
      }
    },
    err=>console.log(err)
  )
}

}

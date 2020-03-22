import { Component, OnInit } from '@angular/core';
import{Login}from'../login';
import{LoginService}from'../login.service'
import { Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login=new Login('','')
public checkpassword=false
public notexists=false
  constructor(private loginser:LoginService,public router:Router) { }

  ngOnInit() {
  }
  onsubmit(){
    this.loginser.login(this.login).subscribe(
      data=>{
        if(data=="password wrong"){
          this.checkpassword=true
          this.notexists=false
        }
        else if(data=="not exists"){
          this.notexists=true
          this.checkpassword=false
        }
        else{
          this.router.navigate(['/home'])
        }
        

      },
      error=>console.log(error)
    )

  }
  forgotpassord(){
    this.router.navigate(['/forgotpassword'])
  }

}

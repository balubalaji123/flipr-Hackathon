import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CreatecardComponent } from './createcard/createcard.component';


const routes: Routes = [
  {path:'',component:FirstpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'createcard',component:CreatecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

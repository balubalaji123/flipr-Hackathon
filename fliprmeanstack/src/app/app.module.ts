import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstpageComponent } from './firstpage/firstpage.component';
import {MatButtonModule,MatToolbarModule} from  '@angular/material';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { CreatecardComponent } from './createcard/createcard.component';


let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("221826645869041")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgotpasswordComponent,
    FirstpageComponent,
    CreatecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

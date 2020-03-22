import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http:HttpClient) { }
  forgotpasswordmail(mail){
    return this.http.post<any>('/forgotpassword',mail)
  }
  otp(otp){
    return this.http.post<any>('/forgotpassword/otp',otp)
  }
  newpassword(password){
    return this.http.post<any>('/forgotpassword/setpassword',password)
  }
}

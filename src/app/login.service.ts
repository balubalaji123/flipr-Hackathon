import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url='/login'
  constructor(private http:HttpClient) { }
  login(details){
    console.log(details)
    return this.http.post<any>(this.url,details)
  }
}

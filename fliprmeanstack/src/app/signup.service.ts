import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
public url='/signup'
  constructor(private http:HttpClient) { }
  signup(details){
    console.log(details)
    return this.http.post<any>(this.url,details)
  }
}

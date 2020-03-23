import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // for board
createcardurl='/dashboard'
// for card
createcardurl1='/dashboard/createcard'
cardurl='/dashboard/cards'
  constructor(private http:HttpClient) { }
  // to handle create board
  createcard(details){
    return this.http.post<any>(this.createcardurl,details)
  }
  // to get intitial boards
  initialboards(){
    return this.http.get<any>(this.createcardurl)
  }
    // to get all the cards of the boars
    getcards(details){
      return this.http.post<any>(this.cardurl,details)

    }
    // create card
    createcard1(details){
      return this.http.post<any>(this.createcardurl1,details)
    }

}

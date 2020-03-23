import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from'@angular/forms'
import{DashboardService}from'../dashboard.service'
import{Router} from'@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public initialcards
  constructor(private fb:FormBuilder,private dashboardservice:DashboardService,private router:Router) {
    this.dashboardservice.initialboards().subscribe(
      data=>this.initialcards=data,
      err=>console.log(err)
    )
   }
createboard=this.fb.group(
  {
    boardname:['',[Validators.required]]
  }
)
  ngOnInit() {
  }
  createcard(){
    console.log(this.createboard.value)
    this.dashboardservice.createcard(this.createboard.value).subscribe(
      data=>{this.initialcards=data},
      err=>console.log(err)
    )
  }
  cards(i){
    this.router.navigate(['/createcard',this.initialcards[i]])
  }

}

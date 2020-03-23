import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import{DashboardService}from'../dashboard.service'
import{FormBuilder, Validators}from'@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-createcard',
  templateUrl: './createcard.component.html',
  styleUrls: ['./createcard.component.css']
})
export class CreatecardComponent implements OnInit {
public boardname
public existingcards
createcard1=this.fb.group({
  cardname:['',[Validators.required]]
})
  constructor(private activatedroute:ActivatedRoute,private dashboardservice:DashboardService,private fb:FormBuilder) { 
    this.boardname=this.activatedroute.snapshot.paramMap.get('board')
    // to get all the cards of the boards
    this.dashboardservice.getcards({boardname:this.boardname}).subscribe(
    data=>{console.log('d',data),this.existingcards=data},
    err=>console.log(err)
    )
  }
  ngOnInit() {
  }
  // to handle create card process
  createcard(){
this.dashboardservice.createcard1({board:this.boardname,cardname:this.createcard1.get('cardname').value}).subscribe(
  data=>{this.existingcards=data},
  err=>console.log(err)
)
  }

}

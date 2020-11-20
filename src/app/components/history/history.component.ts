import { Component, OnInit } from '@angular/core';
import { UserEvents } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private http:ApiService) { }

  userEvents:any[]=[];

  ngOnInit(): void {
    this.getAllUsersEvents();
  }


  getAllUsersEvents(){
    this.http.getAllEvents().subscribe(
      res=>{
          this.userEvents=res;
         
      }
    );
  }

}

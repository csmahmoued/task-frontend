import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserEvents } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-numverify',
  templateUrl: './numverify.component.html',
  styleUrls: ['./numverify.component.css']
})
export class NumverifyComponent implements OnInit {

  formNumverify:FormGroup;
  constructor(private http:ApiService) {

      this.formNumverify=this.createFormGroup();

   }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup(
      {
        numberInputSearch:new FormControl()
      }
    );

  }
  events:UserEvents={
   
    number:'',
    valid:''
  };

  get numberInputSearch(){
    return this.formNumverify.get('numberInputSearch')?.value;
  }

  getnumverify(){
      this.http.getNumverify(this.formNumverify.get('numberInputSearch')?.value).subscribe(
        res=>{
         this.events.valid=res.valid;
         this.events.number=res.number;
       
         this.saveUserEvents();
         alert("number save in events history click on Histoy Link to show Histor events")
       
        }
      );
  
    }

    saveUserEvents(){
      this.http.saveUserEvent(this.events).subscribe();
    }





}

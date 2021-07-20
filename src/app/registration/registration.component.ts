import { Component, OnInit } from '@angular/core';
import {Register} from './registration.model';
import {DataServiceService} from '../sevices/data-service.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private serve:DataServiceService) { }

  ngOnInit(): void {
  }
  res=new Register()
  message:any
  insertFn(){
    this.serve.dataInsert(this.res).subscribe(result=>{
      this.message=result
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../sevices/data-service.service'

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {

  constructor(private pass:DataServiceService) { }

  ngOnInit(): void {
    this.showdata()
  }
  x:any
  data:any
  showdata(){
    this.pass.getdata().subscribe(res=>{
      this.data=res
      console.log(this.data)
    })
  }
  delete(i:any){
    {
      console.log(i)
      this.pass.deletedata(i).subscribe(result=>{
        alert(result)
        this.showdata()
      })
    }
  }

}

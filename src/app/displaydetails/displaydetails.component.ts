import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../sevices/data-service.service';
import {Register} from '../registration/registration.model';

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

  public show:boolean=false;
    public buttonName:any='Show';
    upd=new Register()

  updt(){
    console.log("check")
    this.pass.update(this.upd).subscribe(result=>{
    console.log(result)
    this.showdata()
    alert(result)
    window.location.reload();
    
  })
 }



 dt:any
 updatedata(asd:any){
  this.show = true;
  this.pass.getdata().subscribe(res=>{
        this.dt=res;
        console.log(this.dt.length)
        for (var i = 0; i < this.dt.length; i++) {
          if (this.dt[i].id == asd) {
            this.upd=this.dt[i]
            console.log("upd",this.upd)
        }
      }
 
    })

}

}

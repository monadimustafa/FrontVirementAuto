import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import {Va} from "../model/Va";

@Component({
  selector: 'app-task-gest',
  templateUrl: './task-gest.component.html',
  styleUrls: ['./task-gest.component.css']
})
export class TaskGestComponent implements OnInit {
  listVaInit : any;
  flename = {name:"DemandeVa",url:"files/DemandeVa.pdf"};

  constructor(private serviceGest:CamundaService) { }

  ngOnInit(): void {
    this.getvaInit();
  }

  getvaInit(){
    this.serviceGest.listVA().subscribe({
      next:(data)=>{
        this.listVaInit = data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  confirmVA(id:number,virement : Va) {
   this.serviceGest.confirmVaService(id,virement).subscribe({
     next : (data)=>this.getvaInit(),
     error:(error)=>console.log(error)
   })

  }

  rejeteV(id : number, virement : Va) {
    this.serviceGest.rejetVaService(id,virement).subscribe({
      next : (data)=>this.getvaInit(),
      error:(error)=>console.log(error)
    })
  }

  openLink(event : Event) {
    //event.preventDefault()
    window.open("DemandeVa.pdf")
  }
}

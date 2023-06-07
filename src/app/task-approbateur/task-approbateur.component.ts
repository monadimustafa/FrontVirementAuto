import { Component, OnInit } from '@angular/core';
import {CamundaService} from "../services/camunda.service";
import {Va} from "../model/Va";

@Component({
  selector: 'app-task-approbateur',
  templateUrl: './task-approbateur.component.html',
  styleUrls: ['./task-approbateur.component.css']
})
export class TaskApprobateurComponent implements OnInit {
  listVaConf : any;

  constructor(private secSerApp : CamundaService, private serviceApp : CamundaService ) { }

  ngOnInit(): void {
    this.getvaConfirme();
  }
  getvaConfirme(){
    this.secSerApp.listVAC().subscribe({
      next:(data)=>{
        this.listVaConf = data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  valideVa(id : number, virement : Va) {
    this.serviceApp.validVaService(id,virement).subscribe({
      next : (data)=>this.getvaConfirme(),
      error:(error)=>console.log(error)
    })
  }
  rejeteVa(id : number, virement : Va) {
    this.serviceApp.rejetVaService(id,virement).subscribe({
      next : (data)=>this.getvaConfirme(),
      error:(error)=>console.log(error)
    })

  }
}

import { Component, OnInit } from '@angular/core';
import {CamundaService} from "../services/camunda.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Va} from "../model/Va";
import {Observable} from "rxjs";
import {SecurityService} from "../services/security.service";


@Component({
  selector: 'app-form-ca',
  templateUrl: './form-ca.component.html',
  styleUrls: ['./form-ca.component.css']
})
export class FormCaComponent implements OnInit {
  VirementForm!: FormGroup;
  erreurMessage = ""
  file! : File
  va = new Va(
    "",
    "",
    "",
    0,
    new Date(Date.now()),
    0,
    false,
    "",
    "",
    new FormData()
  );
  cachet? : boolean
  signature? : boolean
  submitted = false
  requestBody!:object
  startProcessReqBody!:object
  constructor(private taskService: CamundaService,public secKey : SecurityService) {
  }

  ngOnInit(): void {

  }

  handleSubmit(){
    //submit backend
    if(this.cachet && this.signature && this.secKey.profile?.firstName){
      this.erreurMessage=""
      this.submitted = true;
      this.va.conforme=true;
      this.va.initiateur=this.secKey.profile.firstName
      this.taskService.addVa(this.va).subscribe({
        next: (data) => console.log("added"),
        error: (error) => console.log(error)
      })
    }
    else
    {
      if(!this.signature){this.erreurMessage="Manque signature"}
      else{this.erreurMessage="Manque cachet"}
    }
   //submit camunda
    //request body
    this.requestBody={"variables":
        {"taskVariable": this.va
        }
    }
    localStorage.setItem('formCa',JSON.stringify(this.va))
    this.taskService.getTasks().subscribe({
        next:(data)=>{
          console.log(data)

          data.forEach((d)=>{
            if(d.assignee ==="driss"){
              console.log(d)
              this.taskService.completeTask(d.id,this.requestBody).subscribe({
                next:(data)=>console.log("sucesss"),
                error:(err)=>console.log("error completing task")
              })}

          })},
        error:(err)=>console.log("error outer layer")
      }
    );

  }
  public handelFormInit() {
    this.startProcessReqBody=
      {
        "variables": {
        }
      }
    this.taskService.getProcess().subscribe({
      next:(data)=>{
        console.log(data[0].id)
        console.log("getting process secessfuly")
        this.taskService.startProcess(data[0].id,this.startProcessReqBody).subscribe({
          next:(data)=>console.log("process started seccefuly"),
          error:(err)=>console.log("process start faild")
        })
      },
      error:(err)=>console.log("failed to get process ")
    })


  }
}

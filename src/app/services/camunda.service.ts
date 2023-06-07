import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task"
import {Va} from "../model/Va";
import {Process} from "../interfaces/process"

@Injectable({
  providedIn: 'root'
})
export class CamundaService {

  allTasks!:Task[]
  private baseUrl=environment.apiUri
  private baseUrlProcess="http://localhost:8081/engine-rest/process-definition?latestVersion=true&name=second-process"
  private baseUrlStartProcess="http://localhost:8081/engine-rest/process-definition"

  constructor(private http:HttpClient) { }

  //Camunda Tasks
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/task`)
  }

  getTasksByAssignee(assignee:string):Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/task?assignee=${assignee}`)
  }

  getProcess():Observable<Process[]>{
    return this.http.get<Process[]>(this.baseUrlProcess)
  }
  startProcess(id:string, processBody:object):Observable<any>{
    return this.http.post(`${this.baseUrlStartProcess}/${id}/start`,processBody)
  }

  completeTask(id:string,taskBody:object):Observable<any>{
    return this.http.post(`${this.baseUrl}/task/${id}/complete`,taskBody,{headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}})
  }

  //Backend
  listVA(){
    return this.http.get<Va>("http://localhost:8085/listVADtoInit");
  }
  listVAC(){
    return this.http.get<Va>("http://localhost:8085/listVaConfirm");
  }
  confirmVaService(id : number, virement:Va):Observable<Va>{
    return this.http.put<Va>("http://localhost:8085/confirmVa/"+id,virement);
  }
  addVa(virement : Va){
    return this.http.post<Va>("http://localhost:8085/addva",virement);
  }
  rejetVaService(id : number, virement:Va):Observable<Va>{
    return this.http.put<Va>("http://localhost:8085/rejetVa/"+id,virement);
  }

  validVaService(id: number, virement: Va) {
    return this.http.put<Va>("http://localhost:8085/validVa/"+id,virement);
  }
}

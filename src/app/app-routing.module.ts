import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskApprobateurComponent} from "./task-approbateur/task-approbateur.component";
import {TaskGestComponent} from "./task-gest/task-gest.component";
import {Routes} from "@angular/router";
import {AuthGuard} from "./Guards/Security.guards";
import {FormCaComponent} from "./form-ca/form-ca.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
//, canActivate: [AuthGuard], data:{roles: ['CA']}
//canActivate: [AuthGuard], data:{roles: ['GC']}
//canActivate: [AuthGuard], data:{roles: ['VA']}

const routes : Routes = [
  {
    path: "formca",
    component: FormCaComponent,
    //canActivate: [AuthGuard], data:{roles: ['CA']}
  },
  {
    path: "taskGest",
    component: TaskGestComponent,
    //canActivate: [AuthGuard], data:{roles: ['GC']}
  },
  {
    path: "taskApp",
    component: TaskApprobateurComponent,
    //canActivate: [AuthGuard], data:{roles: ['VA']}
  }
]


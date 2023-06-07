import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { FormCaComponent } from './form-ca/form-ca.component';
import { TaskGestComponent } from './task-gest/task-gest.component';
import { TaskApprobateurComponent } from './task-approbateur/task-approbateur.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TemplatePageComponent,
    FormCaComponent,
    TaskGestComponent,
    TaskApprobateurComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        KeycloakAngularModule,
        AppRoutingModule,
        RouterModule,
        NgxExtendedPdfViewerModule
    ],
  providers: [
    {
      provide : APP_INITIALIZER,
      deps:[KeycloakService],
      useFactory: kcFactory,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function kcFactory(kcService : KeycloakService){
  return ()=>{
    kcService.init(
      {
        config : {
          realm : 'sgma_its',
          clientId : 'App_VirementAutomatique',
          url : 'http://localhost:8080/auth'
        },
        initOptions : {
          onLoad : "login-required",
          checkLoginIframe: true
        }
      }
    )
  }
}

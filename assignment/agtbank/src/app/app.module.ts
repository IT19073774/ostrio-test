import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {AtcservicesService} from './services/atcservices.service';
import { OperationsComponent } from './components/operations/operations.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AtcservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

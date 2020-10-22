import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OperationsComponent } from './components/operations/operations.component'

const routes: Routes = [
  { path:'',redirectTo: 'login', pathMatch: 'prefix'},
   { path:'login', component: LoginComponent},
   { path:'dashboard', component: DashboardComponent},
   { path:'operations', component: OperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

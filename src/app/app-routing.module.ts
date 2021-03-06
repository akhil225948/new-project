import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventformComponent } from './eventform/eventform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"",component:LoginComponent
  },
  {
    path:"Dashboard",component:DashboardComponent
  },
  {
    path:"eventform",component:EventformComponent
  },
  {
    path:"login:",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

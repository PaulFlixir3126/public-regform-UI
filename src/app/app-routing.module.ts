import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { from } from 'rxjs';
import { RegisterFormStepsComponent } from './register-form-steps/register-form-steps.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user/dashboard',
    component: UserdashboardComponent
  }, {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'register/home',
    component: RegisterFormStepsComponent
  },
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

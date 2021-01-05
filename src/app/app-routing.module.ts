import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { from } from 'rxjs';
import { RegisterFormStepsComponent } from './register-form-steps/register-form-steps.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'register/home',
    component: RegisterFormStepsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

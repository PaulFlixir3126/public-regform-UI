import { Component, OnInit } from '@angular/core';
import { restApiService } from "../providers/apiService.service";

@Component({
  selector: 'app-register-form-steps',
  templateUrl: './register-form-steps.component.html',
  styleUrls: ['./register-form-steps.component.css']
})
export class RegisterFormStepsComponent implements OnInit {
  ;
  constructor(   public restApiService: restApiService,) { }
  tabIndex = this.restApiService.tabIndex || 0;
  ngOnInit() {
  }

  loadtabindex(e){
    this.tabIndex = e;
  }
}

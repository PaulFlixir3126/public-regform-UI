import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { restApiService } from "../providers/apiService.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  userCreation: FormGroup;
  constructor(  private restApiService: restApiService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userCreation = this.fb.group({
      username: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  adduserCreation() {
    console.log(this.userCreation.value);
    let payload = {
      username: this.userCreation.value["username"],
      dob: this.userCreation.value["dob"],
      email: this.userCreation.value["email"],
      mobile_no: this.userCreation.value["mobile_no"],
      password: this.userCreation.value["confirmPassword"]
    
    };
    // console.log(JSON.stringify(payload));
    if(this.userCreation.valid){
      this.restApiService.userCreation(payload).subscribe((res) => {
        if (res) {
          // console.log(res);
          if (res.status == true) {
            this.restApiService.openSnackbar(res.message);
          } else {
            this.restApiService.openSnackbar(res.message);
          }
        } else {
        }
      });
    }else{
      this.restApiService.openSnackbar('Please fill required fields');
    }
  
  }
  getOtp(selection){
    if(selection == 'email'){
      if(this.userCreation.value["email"].value != ''){
        
      }
    }else{
      if(this.userCreation.value["mobile_no"].value != ''){
        
      }
    }
  
  }
}

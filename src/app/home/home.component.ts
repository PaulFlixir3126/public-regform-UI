import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { restApiService } from "../providers/apiService.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLogin: FormGroup;
  constructor(
    public snackBar: MatSnackBar,
    private restApiService: restApiService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userLogin = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
  newreg(){
    this.redirect('');
  }
  redirect(to): void {
    this.router.navigate([to]);
  }

  login(){
    let payload = {
      email: this.userLogin.value["email"],
      password: this.userLogin.value["password"]
    };
    // console.log(JSON.stringify(payload));
    if (this.userLogin.valid) {
      this.restApiService.userLogin(payload).subscribe((res) => {
        if (res) {
          // console.log(res);
          if (res.status == true) {
            this.restApiService.openSnackbar(res.message);
            this.redirect('register/home')
          } else {
            this.restApiService.openSnackbar(res.message);
          }
        } else {
          this.restApiService.openSnackbar("Error");
        }
      });
    } else {
      this.restApiService.openSnackbar("Please fill required fields");
    }
   
  }
  // userLogin
}

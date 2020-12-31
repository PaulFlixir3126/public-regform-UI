import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';

import {
  CookiesStorageService,
  LocalStorageService,
  SessionStorageService,
  SharedStorageService
} from "ngx-store";
import {
  restApiService
} from '../providers/apiService.service';
import {
  MatSnackBar,
  MatSnackBarConfig
} from "@angular/material";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm: FormGroup;
  errorMessage;
  private formSumitAttempt: boolean;
  EmployeeId: any;
  Forgot: FormGroup;
  login = true;
  forgotpassword = false;
  loginbtn = true;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService,
    public snackBar: MatSnackBar,
    private restApiService: restApiService
  ) { }

  ngOnInit() {

    this.LoginForm = this.fb.group({
      'Login': ['', [Validators.required, Validators.minLength(2), Validators.email, Validators.pattern('^[a-zA-Z0-9\w.#&()_*-]+@[a-zA-Z0-9]+(\.)?[a-zA-Z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(5)]]
    });
    this.Forgot = this.fb.group({
      'Forgot': ['', [Validators.required, Validators.minLength(2), Validators.email, Validators.pattern('^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$')]],
    })
  }
  isFieldValid(field: string) {
    return (
      (!this.LoginForm.get(field).valid && this.LoginForm.get(field).touched) ||
      (this.LoginForm.get(field).untouched && this.formSumitAttempt)
    );
  }
  isFieldValids(field: string) {
    return (
      (!this.Forgot.get(field).valid && this.Forgot.get(field).touched) ||
      (this.Forgot.get(field).untouched && this.formSumitAttempt)
    );
  }
  onSubmit() {
    this.formSumitAttempt = true;
    if (this.LoginForm.valid) {
      console.log('form submitted');
    }
  }
  onLogin() {
    this.loginbtn = false;
    let payLoadData = this.LoginForm.value;
    let data = {
      "email": payLoadData.Login,
      "password": payLoadData.password
    }
    console.log("objectdata", data)
    if(data.email == "admin@gmail.com"){
      this.redirect('/admin/asset');
      this.sessionstorge.set('role', 'admin');
    }else {
    this.redirect('/user/dashboard');
    this.sessionstorge.set('role', 'user');
    }
    // accountLogin API start
    // this.restApiService.accountLogin(data).subscribe(res => {
    //   if (res.status == true) {
    //     this.loginbtn = true;
    //     this.ls.set('userName', res.data.userName);
    //     this.sessionstorge.set('employeeID', res.data.employeeID);
    //     this.sessionstorge.set('roleAccessAdmin', res.data.is_admin);
    //     this.sessionstorge.set('token', res.token);
    //     this.restApiService.openSnackbar(res.message);
    //     if (res.data.is_admin == true) {
    //       // this.redirect('/dashboard');
    //       this.redirect('/admin/dashboard');

    //     } else {
    //       // this.redirect('/taskSheet');
    //       this.redirect('/user/dashboard');
    //     }
    //   } else {
    //     this.loginbtn = true;
    //     this.restApiService.openSnackbar(res.message);
    //   }
    // });
  }
  Forgotpassword() {
    this.restApiService.openSnackbar('Clicked on forgot password ');
    // let payLoadData = this.Forgot.value;
    // let data = {
    //   "email": payLoadData.Forgot,
    // }
    // this.restApiService.ForgotPassword(data).subscribe(res => {
    //   if (res.status == true) {
    //     this.EmployeeId = res.employeeId;
    //     let EmployeeId = this.EmployeeId;
    //     this.ls.set('EmployeeId', EmployeeId);
    //     console.log('EmployeeId in forgot-password service response', EmployeeId)
    //     this.restApiService.openSnackbar(res.message);
    //     setInterval(() => {
    //       this.customerDetailsClose();
    //     }, 3000);

    //   } else {
    //     this.restApiService.openSnackbar(res.message);
    //   }
    // })
  }
  redirect(to): void {
    this.router.navigate([to]);
  }
  customerDetails() {
    this.forgotpassword = true;
    this.login = false;
  }
  customerDetailsClose() {
    this.forgotpassword = false;
    this.login = true;
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.onLogin();
      this.onSubmit();
    }
  }
}

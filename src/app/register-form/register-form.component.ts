import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { restApiService } from "../providers/apiService.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent implements OnInit {
  userCreation: FormGroup;
  showOtpDiv = false;
  showEmailOtp = false;
  showSMSOtp = false;
  secretkey;
  emailverified: boolean = false;
  mobileVerified: boolean = false;
  verificationssd: any;
  constructor(
    private restApiService: restApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userCreation = this.fb.group({
      username: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      mobile_no: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      verifymobile_no: new FormControl(""),
      emailverify: new FormControl(""),
    });
  }
  adduserCreation() {
    console.log(this.userCreation.value);
    let payload = {
      username: this.userCreation.value["username"],
      dob: this.userCreation.value["dob"],
      email: this.userCreation.value["email"],
      mobile_no: this.userCreation.value["mobile_no"],
      password: this.userCreation.value["confirmPassword"],
    };
    // console.log(JSON.stringify(payload));
    if (this.userCreation.valid && this.emailverified && this.mobileVerified) {
      this.restApiService.userCreation(payload).subscribe((res) => {
        if (res) {
          // console.log(res);
          if (res.status == true) {
            this.restApiService.openSnackbar(res.message);
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
  getOtp(selection) {
    if (selection == "email") {
      if (this.userCreation.value["email"].value != "") {
        let payload = {
          email: this.userCreation.value["email"],
        };
        this.restApiService.sendEmailOtp(payload).subscribe((res) => {
          this.showOtpDiv = true;
          this.showEmailOtp = true;
          // this.showSMSOtp = false;
          if (res) {
            if (res.status == true) {
              this.restApiService.openSnackbar(res.message);
              this.secretkey = res.secretkey;
            } else {
              this.restApiService.openSnackbar(res.message);
            }
          } else {
            this.restApiService.openSnackbar("Error");
          }
        });
      }
    } else {
      if (this.userCreation.value["mobile_no"].value != "") {
        let payload = {
          mobile_no: this.userCreation.value["mobile_no"],
        };
        this.restApiService.sendSMSOtp(payload).subscribe((res) => {
          this.showOtpDiv = true;
          this.showSMSOtp = true;
          if (res) {
            if (res.status == true) {
              this.restApiService.openSnackbar(res.message);
              this.verificationssd = res.data.sid;
            } else {
              this.restApiService.openSnackbar(res.message);
            }
          } else {
            this.restApiService.openSnackbar("Error");
          }
        });
      }
    }
  }
  VerifyOtp(selection) {
    if (selection == "email") {
      if (this.userCreation.value["emailverify"].value != "") {
        let payload = {
          email: this.userCreation.value["email"],
          emailverify: this.userCreation.value["emailverify"],
          secret: this.secretkey,
          // verificationssd: this.
        };
        this.restApiService.verifyEmailOtp(payload).subscribe((res) => {
          if (res) {
            if (res.status == true) {
              this.restApiService.openSnackbar(res.message);
              this.emailverified = true;
            } else {
              this.restApiService.openSnackbar(res.message);
              this.emailverified = true;
            }
          } else {
            this.restApiService.openSnackbar("Error");
            this.emailverified = true;
          }
        });
      }
    } else {
      if (this.userCreation.value["mobile_no"].value != "") {
        let payload = {
          mobile_no: this.userCreation.value["mobile_no"],
          otp: this.userCreation.value["verifymobile_no"],
        };
        this.restApiService.verifySMSOtp(payload).subscribe((res) => {
          if (res) {
            if (res.status == true) {
              this.restApiService.openSnackbar(res.message);
              if (res.data.status == "approved") {
                this.mobileVerified = true;
              }
            } else {
              this.restApiService.openSnackbar(res.message);
            }
          } else {
            this.restApiService.openSnackbar("Error");
          }
        });
      }
    }
  }
}

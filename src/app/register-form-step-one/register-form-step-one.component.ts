import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { restApiService } from "../providers/apiService.service";

@Component({
  selector: "app-register-form-step-one",
  templateUrl: "./register-form-step-one.component.html",
  styleUrls: ["./register-form-step-one.component.css"],
})
export class RegisterFormStepOneComponent implements OnInit {
  personal_details: FormGroup;
  refUserId: 0;
  constructor(
    private restApiService: restApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.personal_details = this.fb.group({
      holding_aadhar: "",
      aadhar_no: "",
      aadhar_name: "",
      salutation: "",
      full_name: "",
      mother_name: "",
      dob: "",
      gender: "",
      mobile_no: "",
      email_id: "",
      marital_status: "",
      nationality: "",
      height: "",
      weight: "",
      caste_category: "",
      certificate_no: "",
      issue_date: "",
    });
  }
  addpersonal_details() {
    console.log(this.personal_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      holding_aadhar: this.personal_details.value["holding_aadhar"],
      aadhar_no: this.personal_details.value["addraadhar_noess"],
      aadhar_name: this.personal_details.value["aadhar_name"],
      salutation: this.personal_details.value["salutation"],
      full_name: this.personal_details.value["full_name"],
      dob: this.personal_details.value["dob"],
      gender: this.personal_details.value["gender"],
      mobile_no: this.personal_details.value["mobile_no"],
      email_id: this.personal_details.value["emaiemail_idlid"],
      marital_status: this.personal_details.value["marital_status"],
      nationality: this.personal_details.value["nationality"],
      height: this.personal_details.value["height"],
      weight: this.personal_details.value["weight"],
      caste_category: this.personal_details.value["caste_category"],
      certificate_no: this.personal_details.value["certificate_no"],
      issue_date: this.personal_details.value["issue_date"],
    };
    this.restApiService.personalInfoCreation(payload).subscribe((res) => {
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
  }
}

import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LocalStorageService, SessionStorageService } from 'ngx-store';
import { restApiService } from "../providers/apiService.service";
@Component({
  selector: "app-register-form-step-five",
  templateUrl: "./register-form-step-five.component.html",
  styleUrls: ["./register-form-step-five.component.css"],
})
export class RegisterFormStepFiveComponent implements OnInit {
  experience_details: FormGroup;
  refUserId: any;

  constructor(
    private fb: FormBuilder,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService,
    private restApiService: restApiService
  ) {}

  ngOnInit() {
    this.experience_details = this.fb.group({
      emp_present_past: new FormControl('', [Validators.required]),
      selected_mpsc: new FormControl('', [Validators.required]),
      organisation: new FormControl('', [Validators.required]),
      office_inst_own_govt: new FormControl('', [Validators.required]),
      pay_scale: new FormControl(''),
      basic_pay: new FormControl(''),
      gross_salary: new FormControl(''),
    });   
     this.refUserId = this.sessionstorge.get('ref_user_id');
  }
  addexperience_details() {
    console.log(this.experience_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      emp_present_past: this.experience_details.value["emp_present_past"],
      selected_mpsc: this.experience_details.value["selected_mpsc"],
      organisation: this.experience_details.value["organisation"],
      office_inst_own_govt: this.experience_details.value[
        "office_inst_own_govt"
      ],
      pay_scale: this.experience_details.value["pay_scale"],
      basic_pay: this.experience_details.value["basic_pay"],
      gross_salary: this.experience_details.value["gross_salary"],
    };
    this.restApiService.experInfoCreation(payload).subscribe((res) => {
      if (res) {
        if (res.status == true) {
          this.restApiService.openSnackbar(res.message);
        } else {
          this.restApiService.openSnackbar(res.message);
        }
      } else {
      }
    });
  }

  reloadExprienceDetails(){
    this.restApiService.getExperienceDetails(this.refUserId ).subscribe((res) => {
      if (res) {
        if (res.status == true) {
          console.log(res);
          this.restApiService.openSnackbar(res.message);
        } else {
          this.restApiService.openSnackbar(res.message);
        }
      } else {
      }
    });
  }
}

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
  selector: "app-register-form-step-four",
  templateUrl: "./register-form-step-four.component.html",
  styleUrls: ["./register-form-step-four.component.css"],
})
export class RegisterFormStepFourComponent implements OnInit {
  qualification_details: FormGroup;
  refUserId: any;

  constructor(private fb: FormBuilder,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService,private restApiService: restApiService,) {}

  ngOnInit() {
    this.qualification_details = this.fb.group({
      q_type: new FormControl('', [Validators.required,Validators.minLength(4)]),
      name_of_degree: new FormControl('', [Validators.required,Validators.minLength(4)]),
      subject: new FormControl(''),
      board_university: new FormControl('', [Validators.required,Validators.minLength(4)]),
      precentage: new FormControl(''),
      remark: new FormControl(''),
    });
    this.refUserId = this.sessionstorge.get('ref_user_id');
  }
  addqualification_details() {
    console.log(this.qualification_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      q_type: this.qualification_details.value["q_type"],
      name_of_degree: this.qualification_details.value["name_of_degree"],
      subject: this.qualification_details.value["subject"],
      board_university: this.qualification_details.value["board_university"],
      precentage: this.qualification_details.value["precentage"],
      remark: this.qualification_details.value["remark"],
    };
    this.restApiService.qualificationInfoCreation(payload).subscribe((res) => {
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

  reloadQualificationDetails(){
    this.restApiService.getQualificationDetails(this.refUserId ).subscribe((res) => {
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

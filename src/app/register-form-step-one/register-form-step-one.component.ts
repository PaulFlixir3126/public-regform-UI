import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import { LocalStorageService, SessionStorageService } from 'ngx-store';
import { restApiService } from "../providers/apiService.service";
export class steponeError implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
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
    private fb: FormBuilder,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService
  ) {}

  ngOnInit() {
    this.personal_details = this.fb.group({
      holding_aadhar: new FormControl('', [Validators.required]),
      aadhar_no: new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
      aadhar_name: new FormControl('', [Validators.required,Validators.maxLength(25)]),
      salutation: new FormControl('', [Validators.required]),
      full_name: new FormControl('', [Validators.required,Validators.maxLength(20)]),
      mother_name: new FormControl('', [Validators.required,Validators.maxLength(15)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email_id: new FormControl('', [Validators.required,Validators.email,]),
      marital_status: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      height: new FormControl(''),
      weight: new FormControl(''),
      caste_category: new FormControl('', [Validators.required]),
      certificate_no: new FormControl(''),
      issue_date: new FormControl(''),
    });
    this.refUserId = this.sessionstorge.get('ref_user_id');
    alert(this.refUserId);
    if(this.refUserId != 0 || this.refUserId != undefined || this.refUserId != null ){
      this.reloadPersonalDetails()
    }
  }
  matcher = new steponeError();
  addpersonal_details() {
    console.log(this.personal_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      holding_aadhar: this.personal_details.value["holding_aadhar"],
      aadhar_no: this.personal_details.value["addraadhar_noess"],
      aadhar_name: this.personal_details.value["aadhar_name"],
      salutation: this.personal_details.value["salutation"],
      full_name: this.personal_details.value["full_name"],
      mother_name: this.personal_details.value["mother_name"],
      dob: this.personal_details.value["dob"],
      gender: this.personal_details.value["gender"],
      mobile_no: this.personal_details.value["mobile_no"],
      email_id: this.personal_details.value["email_id"],
      marital_status: this.personal_details.value["marital_status"],
      nationality: this.personal_details.value["nationality"],
      height: this.personal_details.value["height"],
      weight: this.personal_details.value["weight"],
      caste_category: this.personal_details.value["caste_category"],
      certificate_no: this.personal_details.value["certificate_no"],
      issue_date: this.personal_details.value["issue_date"],
    };
    // console.log(JSON.stringify(payload));
    if(this.personal_details.valid){
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
    }else{
      this.restApiService.openSnackbar('Please fill required fields');
    }
  
  }

  reloadPersonalDetails(){
    alert("dcdfdf")
    this.restApiService.getPersonalDetails(this.refUserId).subscribe((res) => {
        if (res.status == true) {
          this.personal_details = this.fb.group({
            holding_aadhar: new FormControl(res.data[0].holding_aadhar, [Validators.required]),
            aadhar_no: new FormControl(res.data[0].aadhar_no, [Validators.required]),
            aadhar_name: new FormControl(res.data[0].aadhar_name, [Validators.required]),
            salutation: new FormControl(res.data[0].salutation, [Validators.required]),
            full_name: new FormControl(res.data[0].full_name),
            mother_name: new FormControl(res.data[0].mother_name),
            dob: new FormControl(res.data[0].dob),
            gender: new FormControl(res.data[0].gender, [Validators.required]),
            mobile_no: new FormControl(res.data[0].mobile_no, [Validators.required]),
            email_id: new FormControl(res.data[0].email_id, [Validators.required]),
            marital_status: new FormControl(res.data[0].marital_status, [Validators.required]),
            nationality: new FormControl(res.data[0].nationality),
            height: new FormControl(res.data[0].height),
            weight: new FormControl(res.data[0].dob),
            caste_category: new FormControl(res.data[0].caste_category),
            certificate_no: new FormControl(res.data[0].certificate_no),
            issue_date: new FormControl(res.data[0].issue_date)
          }); 
          this.restApiService.openSnackbar(res.message);
        } else {
          this.restApiService.openSnackbar(res.message);
        }
    });
  }
}

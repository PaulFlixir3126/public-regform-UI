import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LocalStorageService, SessionStorageService } from 'ngx-store';
import { restApiService } from "../providers/apiService.service";
import { RegisterFormStepsComponent } from '../register-form-steps/register-form-steps.component';

@Component({
  selector: "app-register-form-step-two",
  templateUrl: "./register-form-step-two.component.html",
  styleUrls: ["./register-form-step-two.component.css"],
})
export class RegisterFormStepTwoComponent implements OnInit {
  address_details: FormGroup;
  refUserId: any;
  constructor(private fb: FormBuilder,
    private ls: LocalStorageService,
    public RegisterForm: RegisterFormStepsComponent,
    private sessionstorge: SessionStorageService, public restApiService: restApiService) {}

  ngOnInit() {
    this.address_details = this.fb.group({
      address_no: new FormControl('', [Validators.required]),
      premises_building: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required,]),
      landmark: new FormControl('',),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    });
    // this.refUserId = this.sessionstorge.get('ref_user_id');
    this.refUserId = this.sessionstorge.get('ref_user_id');
    if(this.refUserId != 0 || this.refUserId != undefined || this.refUserId != null ){
      this.reloadAddressDetails()
    }
  }

  addaddress_details() {
    console.log(this.address_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      address_no: this.address_details.value["address_no"],
      premises_building: this.address_details.value["premises_building"],
      locality: this.address_details.value["locality"],
      landmark: this.address_details.value["landmark"],
      state: this.address_details.value["state"],
      pincode: this.address_details.value["pincode"],
    };
    if(this.address_details.valid){
      this.restApiService.addressInfoCreation(payload).subscribe((res) => {
        if (res) {
          if (res.status == true) {
            this.functionNext();
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

  reloadAddressDetails(){
    this.restApiService.getAddressDetails(this.refUserId ).subscribe((res) => {
        if (res.status == true) {
          console.log(res);
          this.address_details = this.fb.group({
            address_no: new FormControl(res.data[0].address_no, [Validators.required]),
            premises_building: new FormControl(res.data[0].premises_building, [Validators.required]),
            locality: new FormControl(res.data[0].locality, [Validators.required,]),
            landmark: new FormControl(res.data[0].landmark,),
            state: new FormControl(res.data[0].state, [Validators.required]),
            pincode: new FormControl(res.data[0].pincode, [Validators.required]),
          });
          this.restApiService.openSnackbar(res.message);
        } else {
          this.restApiService.openSnackbar(res.message);
        }
    });
  }

  functionNext(){
    this.RegisterForm.loadtabindex(2);
  }
  functionPrevious(){
    this.RegisterForm.loadtabindex(0);
  }
}

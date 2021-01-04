import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { restApiService } from "../providers/apiService.service";

@Component({
  selector: "app-register-form-step-two",
  templateUrl: "./register-form-step-two.component.html",
  styleUrls: ["./register-form-step-two.component.css"],
})
export class RegisterFormStepTwoComponent implements OnInit {
  address_details: FormGroup;
  constructor(private fb: FormBuilder, public restApiService: restApiService) {}

  ngOnInit() {
    this.address_details = this.fb.group({
      address_no: new FormControl('', [Validators.required]),
      premises_building: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required,]),
      landmark: new FormControl('',),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    });
  }
  addaddress_details() {
    console.log(this.address_details.value);
    let payload = {
      address_no: this.address_details.value["address_no"],
      premises_building: this.address_details.value["premises_building"],
      locality: this.address_details.value["locality"],
      landmark: this.address_details.value["landmark"],
      state: this.address_details.value["state"],
      pincode: this.address_details.value["pincode"],
    };
    this.restApiService.addressInfoCreation(payload).subscribe((res) => {
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
}

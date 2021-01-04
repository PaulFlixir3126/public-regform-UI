import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { restApiService } from "../providers/apiService.service";
@Component({
  selector: 'app-register-form-step-six',
  templateUrl: './register-form-step-six.component.html',
  styleUrls: ['./register-form-step-six.component.css']
})
export class RegisterFormStepSixComponent implements OnInit {

  upload_details: FormGroup;
  constructor(
    private fb: FormBuilder,
    public restApiService : restApiService) { }

  ngOnInit() {
    this.upload_details = this.fb.group({
      'file_name': '',
      'file_extension': '',
    });

} 
addupload_details() {
  console.log(this.upload_details.value)
  let payload = {
    "file_name" : this.upload_details.value["file_name"],
    "file_extension" : this.upload_details.value["file_extension"],
  }
  this.restApiService.personalInfoCreation(payload).subscribe((res) => {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form-step-five',
  templateUrl: './register-form-step-five.component.html',
  styleUrls: ['./register-form-step-five.component.css']
})
export class RegisterFormStepFiveComponent implements OnInit {

  experience_details: FormGroup;
  
    constructor(
      private fb: FormBuilder) { }
  
    ngOnInit() {
      this.experience_details = this.fb.group({
        'emp_present_past': '',
        'selected_mpsc': '',
        'organisation': '',
        'office_inst_own_govt': '',
        'pay_scale': '',
        'basic_pay': '',
        'gross_salary': '',
        
      });
    }
    addexperience_details() {
      console.log(this.experience_details.value)
      let payload = {
        "emp_present_past" : this.experience_details.value["emp_present_past"],
        "selected_mpsc" : this.experience_details.value["selected_mpsc"],
        "organisation" : this.experience_details.value["organisation"],
        "office_inst_own_govt" : this.experience_details.value["office_inst_own_govt"],
        "pay_scale" : this.experience_details.value["pay_scale"],
        "basic_pay" : this.experience_details.value["basic_pay"],
        "gross_salary" : this.experience_details.value["gross_salary"],
       
      }
   /* this.accAPIService.addaccount(payload).subscribe(res => {
      if (res) {
        console.log(res);
       
      } else {
      }
    });*/
  }
}

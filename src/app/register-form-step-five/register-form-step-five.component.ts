import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LocalStorageService, SessionStorageService } from 'ngx-store';
import { from } from 'rxjs';
// import { setInterval } from 'timers';
import { restApiService } from "../providers/apiService.service";
import {RegisterFormStepsComponent} from "../register-form-steps/register-form-steps.component"
@Component({
  selector: "app-register-form-step-five",
  templateUrl: "./register-form-step-five.component.html",
  styleUrls: ["./register-form-step-five.component.css"],
})
export class RegisterFormStepFiveComponent implements OnInit {
  experience_details: FormGroup;
  refUserId: any;
  exprience_idRef: any;
  expriencesList: any;
  showUpdate: boolean = false;
  showAdd: boolean = true;
  constructor(
    private fb: FormBuilder,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService,
    private restApiService: restApiService,
    public RegisterForm: RegisterFormStepsComponent
  ) {}

  ngOnInit() {
    this.experience_details = this.fb.group({
      emp_present_past: new FormControl(''),
      selected_mpsc: new FormControl(''),
      organisation: new FormControl(''),
      office_inst_own_govt: new FormControl(''),
      pay_scale: new FormControl('',[Validators.pattern(/^[0-9]\d*$/)]),
      basic_pay: new FormControl('',[Validators.pattern(/^[0-9]\d*$/)]),
      gross_salary: new FormControl('',[Validators.pattern(/^[0-9]\d*$/)]),
    });   
     this.refUserId = this.sessionstorge.get('ref_user_id');
     this.reloadExprienceDetails();
  }
  addexperience_details() {
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
    if(this.experience_details.valid){
      this.restApiService.experInfoCreation(payload).subscribe((res) => {
        if (res) {
          if (res.status == true) {
            this.restApiService.openSnackbar(res.message);
            this.functionNext();
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
  addexperience_detailsMore() {
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
    if(this.experience_details.valid){
      this.restApiService.experInfoCreation(payload).subscribe((res) => {
          if (res.status == true) {
            this.restApiService.openSnackbar(res.message);
            this.experience_details.reset();
            this.reloadExprienceDetails() 
          } else {
            this.restApiService.openSnackbar(res.message);
          }
      });
    }else{
      this.restApiService.openSnackbar('Please fill required fields');
    }
  }
edit(editttt){
  this.exprience_idRef = editttt;
  this.expriencesList.forEach(element => {
    if(element.exprience_id ==  this.exprience_idRef){
      this.showUpdate = true;
      this.showAdd = false;
      this.experience_details = this.fb.group({
        emp_present_past: new FormControl(element.emp_present_past),
        selected_mpsc: new FormControl(element.selected_mpsc),
        organisation: new FormControl(element.organisation),
        office_inst_own_govt: new FormControl(element.office_inst_own_govt),
        pay_scale: new FormControl(element.pay_scale),
        basic_pay: new FormControl(element.basic_pay),
        gross_salary: new FormControl(element.gross_salary),
      }); 
    }
  });

}
  updateExpriencedetail(){
  let payload = {
    ref_user_id: this.refUserId,
    exprience_id: this.exprience_idRef,
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
  this.restApiService.expirUpdate(payload).subscribe((res) => {
      if (res.status == true) {
        
        this.restApiService.openSnackbar(res.message);
        // this.ngOnInit();
        this.showUpdate = false;
        this.showAdd = true;
        this.experience_details.reset();
        // this.ngOnInit();
      } else {
        this.restApiService.openSnackbar(res.message);
      }
  });
}
  
  reloadExprienceDetails(){
    this.restApiService.getExperienceDetails(this.refUserId ).subscribe((res) => {
      if (res) {
        if (res.status == true) {
          console.log(res);
          this.expriencesList = res.data; 
          this.restApiService.openSnackbar(res.message);
        } else {
          // this.restApiService.openSnackbar(res.message);
        }
      } else {
      }
    });
  }
  functionNext(){
    this.RegisterForm.loadtabindex(5);
  }
  functionPrevious(){
    this.RegisterForm.loadtabindex(3);
  }
}


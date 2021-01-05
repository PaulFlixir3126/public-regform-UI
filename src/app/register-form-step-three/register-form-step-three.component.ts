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
  selector: "app-register-form-step-three",
  templateUrl: "./register-form-step-three.component.html",
  styleUrls: ["./register-form-step-three.component.css"],
})
export class RegisterFormStepThreeComponent implements OnInit {
  other_details: FormGroup;
  refUserId: any;
  constructor(private fb: FormBuilder,
    private ls: LocalStorageService,
    private sessionstorge: SessionStorageService, public restApiService: restApiService) {}

  ngOnInit() {
    this.other_details = this.fb.group({
      ex_serviceman: new FormControl('', [Validators.required]),
      ex_serviceman_division: new FormControl('', [Validators.required]),
      date_of_appointment: new FormControl(''),
      date_of_retirement: new FormControl(''),
      certificate_no: new FormControl(''),
      sports_person: new FormControl('', [Validators.required]),
      name_of_game: new FormControl(''),
      position_medal: new FormControl(''),
      tournament_from: new FormControl(''),
      tournament_to: new FormControl(''),
      level_of_tournament: new FormControl(''),
      tournament_certificate_no: new FormControl(''),
    });
    this.refUserId = this.sessionstorge.get('ref_user_id');
  }
  addother_details() {
    console.log(this.other_details.value);
    let payload = {
      ref_user_id: this.refUserId,
      ex_serviceman: this.other_details.value["ex_serviceman"],
      ex_serviceman_division: this.other_details.value[
        "ex_serviceman_division"
      ],
      date_of_appointment: this.other_details.value["date_of_appointment"],
      date_of_retirement: this.other_details.value["date_of_retirement"],
      certificate_no: this.other_details.value["certificate_no"],
      sports_person: this.other_details.value["sports_person"],
      name_of_game: this.other_details.value["name_of_game"],
      position_medal: this.other_details.value["position_medal"],
      tournament_from: this.other_details.value["tournament_from"],
      tournament_to: this.other_details.value["tournament_to"],
      level_of_tournament: this.other_details.value["level_of_tournament"],
      tournament_certificate_no: this.other_details.value[
        "tournament_certificate_no"
      ],
    };
    this.restApiService.othersInfoCreation(payload).subscribe((res) => {
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

  reloadOthersDetails(){
    this.restApiService.getOtherDetails(this.refUserId ).subscribe((res) => {
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

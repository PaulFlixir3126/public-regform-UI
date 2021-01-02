import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form-step-three',
  templateUrl: './register-form-step-three.component.html',
  styleUrls: ['./register-form-step-three.component.css']
})
export class RegisterFormStepThreeComponent implements OnInit {
  other_details: FormGroup;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.other_details = this.fb.group({
      'ex_serviceman': '',
      'ex_serviceman_division': '',
      'date_of_appointment': '',
      'date_of_retirement': '',
      'certificate_no': '',
      'sports_person': '',
      'name_of_game': '',
      'position_medal': '',
      'tournament_from': '',
      'tournament_to': '',
      'level_of_tournament': '',
      'tournament_certificate_no': '',
      
    });

} 
  addother_details() {
  console.log(this.other_details.value)
  let payload = {
    "ex_serviceman" : this.other_details.value["ex_serviceman"],
    "ex_serviceman_division" : this.other_details.value["ex_serviceman_division"],
    "date_of_appointment" : this.other_details.value["date_of_appointment"],
    "date_of_retirement" : this.other_details.value["date_of_retirement"],
    "certificate_no" : this.other_details.value["certificate_no"],
    "sports_person" : this.other_details.value["sports_person"],
    "name_of_game" : this.other_details.value["name_of_game"],
    "position_medal" : this.other_details.value["position_medal"],
    "tournament_from" : this.other_details.value["tournament_from"],
    "tournament_to" : this.other_details.value["tournament_to"],
    "level_of_tournament" : this.other_details.value["level_of_tournament"],
    "tournament_certificate_no" : this.other_details.value["tournament_certificate_no"],
  }
 /* this.accAPIService.addaccount(payload).subscribe(res => {
    if (res) {
      console.log(res);
     
    } else {
    }
  });*/
}

}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { MatSnackBar } from '@angular/material';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Credentials': 'true',
  })
};

@Injectable({
  providedIn: "root"
})
export class restApiService {
  public img='';
  public tabIndex = 0;
  private APIService: string = environment.serviceUrl; // this has to be load from an external config file
  constructor(private http: HttpClient, public snackBar: MatSnackBar,) {
    this.APIService = environment.serviceUrl;
  }

  personalInfoCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/personal", Payload)
      .pipe(
        tap(heroes => this.log(`Created personal`)),
      );
  }

  getPersonalDetails(Payload): Observable<any> {
    return this.http.get(this.APIService + "/register/user/personal?ref_user_id="+Payload)
      .pipe(
        tap(heroes => this.log(`fetched personal`)),
      );
  }
// +++++++++++++++++++++++
  addressInfoCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/address", Payload)
      .pipe(
        tap(heroes => this.log(`Created address`)),
      );
  }
  getAddressDetails(Payload): Observable<any> {
    return this.http.get(this.APIService + "/register/user/address?ref_user_id="+Payload)
      .pipe(
        tap(heroes => this.log(`fetched personal`)),
      );
  }
  // +++++++++++++++++++++++
  othersInfoCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/other", Payload)
      .pipe(
        tap(heroes => this.log(`Created others`)),
      );
  }
  getOtherDetails(Payload): Observable<any> {
    return this.http.get(this.APIService + "/register/user/other?ref_user_id="+Payload )
      .pipe(
        tap(heroes => this.log(`fetched exp`)),
      );
  }
// +++++++++++++++++++++++
  qualificationInfoCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/qualification", Payload)
      .pipe(
        tap(heroes => this.log(`Created qualification`)),
      );
  }
  getQualificationDetails(Payload): Observable<any> {
    return this.http.get(this.APIService + "/register/user/qualification?ref_user_id="+Payload )
      .pipe(
        tap(heroes => this.log(`fetched exp`)),
      );
  }
  // +++++++++++++++++++++++
  experInfoCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/experience", Payload)
      .pipe(
        tap(heroes => this.log(`Created exp`)),
      );
  }
  getExperienceDetails(Payload): Observable<any> {
    return this.http.get(this.APIService + "/register/user/experience?ref_user_id="+Payload )
      .pipe(
        tap(heroes => this.log(`fetched exp`)),
      );
  }
  expirUpdate(Payload): Observable<any> {
    return this.http.put(this.APIService + "/register/user/experience", Payload)
      .pipe(
        tap(heroes => this.log(`Created exp`)),
      );
  }
  
  // 
  userCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/create/user", Payload)
      .pipe(
        tap(heroes => this.log(`Created user`)),
      );
  }
  
  userLogin(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/login", Payload)
      .pipe(
        tap(heroes => this.log(`Login user`)),
      );
  }
  
  sendEmailOtp(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/email/send", Payload)
      .pipe(
        tap(heroes => this.log(`Created user`)),
      );
  } 
  sendSMSOtp(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/mobile/send", Payload)
      .pipe(
        tap(heroes => this.log(`Created user`)),
      );
  } 
  verifyEmailOtp(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/email/verify", Payload)
      .pipe(
        tap(heroes => this.log(`Created user`)),
      );
  } 
   verifySMSOtp(Payload): Observable<any> {
    return this.http.post(this.APIService + "/register/user/mobile/verify", Payload)
      .pipe(
        tap(heroes => this.log(`Created user`)),
      );
  }

  // experInfoCreation(Payload): Observable<any> {
  //   return this.http.post(this.APIService + "/register/user/experience", Payload)
  //     .pipe(
  //       tap(heroes => this.log(`Created exp`)),
  //     );
  // }

  openSnackbar(message: string) {
    return this.snackBar.open(message, "close",
      { verticalPosition: 'bottom', horizontalPosition: 'right', duration: 4000, panelClass: ['snackbarStyle'] });
  }

  private log(message: string) {
    console.log("service log : " + message);
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || "";
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
  }
}

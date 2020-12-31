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
  private APIService: string = environment.serviceUrl; // this has to be load from an external config file
  constructor(private http: HttpClient, public snackBar: MatSnackBar,) {
    this.APIService = environment.serviceUrl;
  }

  sectorCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/sector", Payload)
      .pipe(
        tap(heroes => this.log(`Created Sector`)),
      );
  }
  fetchSector(): Observable<any> {
    return this.http.get(this.APIService + "/sector")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  zoneCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/zone", Payload)
      .pipe(
        tap(heroes => this.log(`Created Sector`)),
      );
  }
  fetchZone(): Observable<any> {
    return this.http.get(this.APIService + "/zone")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  fetchAssetDetail(id): Observable<any> {
    return this.http.get(this.APIService + "/asset/details?assetref="+id)
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  
  uploadOverlay() {
    var url = "/sector/overlay";
    return this.APIService + url;
  }
  
  assetCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/asset", Payload)
      .pipe(
        tap(heroes => this.log(`Created Asset`)),
      );
  }

  fetchAssets(id): Observable<any> {
    return this.http.get(this.APIService + "/asset?zoneref="+id)
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  
  assetTypeCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/assetType", Payload)
      .pipe(
        tap(heroes => this.log(`Created assetType`)),
      );
  }
  fetchAssetType(): Observable<any> {
    return this.http.get(this.APIService + "/assetType")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  locationCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/location", Payload)
      .pipe(
        tap(heroes => this.log(`Created location`)),
      );
  }
  fetchLocation(): Observable<any> {
    return this.http.get(this.APIService + "/location")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  beaconCreation(Payload): Observable<any> {
    return this.http.post(this.APIService + "/beacon", Payload)
      .pipe(
        tap(heroes => this.log(`Created beacon`)),
      );
  }
  fetchBeacon(): Observable<any> {
    return this.http.get(this.APIService + "/beacon")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  projectDetailsUpdation(Payload): Observable<any> {
    return this.http.put(this.APIService + "/admin/project", Payload)
      .pipe(
        tap(heroes => this.log(`project updated Success`)),
      );
  }
  deleteProject(Payload): Observable<any> {
    return this.http.delete(this.APIService + "/project?projectId=" + Payload.projectId)
      .pipe(
        tap(heroes => this.log(`delete project success`)),
      );
  }
  projectList(): Observable<any> {
    return this.http.get(this.APIService + "/project")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
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

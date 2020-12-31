import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Output,
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from "@angular/forms";
import {
  CookiesStorageService,
  LocalStorageService,
  SessionStorageService,
  SharedStorageService,
} from "ngx-store";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatSnackBar,
  MatSnackBarConfig,
  MAT_DIALOG_DATA,
  throwMatDialogContentAlreadyAttachedError,
} from "@angular/material";
import { restApiService } from "../providers/apiService.service";
import { NgxPermissionsService } from "ngx-permissions";
import { DatePipe } from "@angular/common";
import { map } from "rxjs/operators";
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable, Observer } from 'rxjs';
// import panzoom from "panzoom";
declare var google: any;

@Component({
  selector: "app-userdashboard",
  templateUrl: "./userdashboard.component.html",
  styleUrls: ["./userdashboard.component.css"],
})
export class UserdashboardComponent implements OnInit {
  // doughnutChart Start
  public doughnutChartLabels: Label[] = ['Label A', 'Label B', 'Label C','Label D','Label E'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,600,230],
  ];
  public doughnutChartType: ChartType = 'doughnut';
   // doughnutChart End
  gensetTable = [{
    img:'../../assets/gen.png',
    gensetName : 'AFX Genset',
    gensetMake : 'Deep Sea',
    version : '1.2E',
    date : '30-12-2020',
    oilPressure : 0.120,
    coolentTemp : 120.00,
    lowOil : true,
    low_HighCoolent : true
  },{
    img:'../../assets/gen1.png',
    gensetName : 'ADMK Genset',
    gensetMake : 'Up Sea',
    version : '3.1F',
    date : '29-12-2020',
    oilPressure : 0.420,
    coolentTemp : 120.00,
    lowOil : false,
    low_HighCoolent : false
  },{
    img:'../../assets/gen2.png',
    gensetName : 'PWD Genset',
    gensetMake : 'Deep Sea',
    version : '1.5KV',
    date : '28-12-2020',
    oilPressure : 0.310,
    coolentTemp : 120.00,
    lowOil : true,
    low_HighCoolent : true
  },{
    img:'../../assets/gen3.png',
    gensetName : 'NKNUM Genset',
    gensetMake : 'Red Sea',
    version : '2.0F',
    date : '26-12-2020',
    oilPressure : 0.910,
    coolentTemp : 120.00,
    lowOil : false,
    low_HighCoolent : true,
  },{
    img:'../../assets/gen1.png',
    gensetName : 'PAMAKA Genset',
    gensetMake : 'White Horse',
    version : 'xw200',
    date : '26-12-2020',
    oilPressure : 0.560,
    coolentTemp : 45.00,
    lowOil : true,
    low_HighCoolent : false,
  }]

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private rolePermisions: NgxPermissionsService,
    private ls: LocalStorageService,
    public snackBar: MatSnackBar,
    public router: Router,
    private sessionstorge: SessionStorageService,
    private restApiService: restApiService,
    public dialog: MatDialog
  ) {  }

  ngOnInit() {}
  gendetailsRedirect(){
    this.redirect('user/dashboard/genset_detail');
  }
  redirect(to): void {
    this.router.navigate([to]);
  }
  logout(){
    this.redirect('login');
  }
  
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gensetdetail',
  templateUrl: './gensetdetail.component.html',
  styleUrls: ['./gensetdetail.component.css']
})
export class GensetdetailComponent implements OnInit {
  max = 3000;
  sectors = [{
    from: 1,
    to: 2500,
    color: 'green',
  }, {
    from: 2500,
    to: 3000,
    color: 'red',
  }];
  sectorsTemp = [{
    from: 1,
    to: 150,
    color: 'green',
  }, {
    from: 150,
    to: 200,
    color: 'red',
  }];
  sectorsFuel = [{
    from: 1,
    to: 60,
    color: 'green',
  }, {
    from: 60,
    to: 100,
    color: 'red',
  }];
  sectorsOil = [{
    from: 0,
    to: 20,
    color: 'green',
  }, {
    from: 20,
    to: 25,
    color: 'red',
  }];
  warkingTrip = [{
    img:'../../assets/gen.png',
    Name : 'Emergency Stop',
    status:'true'
  },{
    img:'../../assets/gen1.png',
    Name : 'High Coolent Temp',
    status:'true'
  },{
    img:'../../assets/gen2.png',
    Name : 'Low Oil Pressure',
    status:'false'
  },{
    img:'../../assets/gen3.png',
    Name : 'Fail to Start',
    status:'true'
  },{
    img:'../../assets/gen1.png',
    Name : 'High Battery Voltage',
    status:'true'
  },{
    img:'../../assets/gen.png',
    Name : 'Low Battery Voltage',
    status:'true'
  },{
    img:'../../assets/gen1.png',
    Name : 'Under Speed Frequency',
    status:'true'
  },{
    img:'../../assets/gen2.png',
    Name : 'Over Speed Frequency',
    status:'false'
  },{
    img:'../../assets/gen3.png',
    Name : 'Low Fuel level',
    status:'true'
  },{
    img:'../../assets/gen1.png',
    Name : 'Under Voltage',
    status:'true'
  },{
    img:'../../assets/gen.png',
    Name : 'Over Voltage',
    status:'false'
  },{
    img:'../../assets/gen1.png',
    Name : 'Over Current',
    status:'false'
  },{
    img:'../../assets/gen2.png',
    Name : 'Over Load/Kw',
    status:'true'
  },{
    img:'../../assets/gen3.png',
    Name : 'Charge Alt, Failure',
    status:'true'
  },{
    img:'../../assets/gen2.png',
    Name : 'Over Speed Frequency',
    status:'false'
  },{
    img:'../../assets/gen1.png',
    Name : 'Over Current',
    status:'false'
  },{
    img:'../../assets/gen2.png',
    Name : 'Low Oil Pressure',
    status:'false'
  },{
    img:'../../assets/gen.png',
    Name : 'Over Voltage',
    status:'false'
  }]

  gensetTable = [{
    img:'../../assets/gen.png',
    KWV : '1R',
    Amps : '0.000Amps',
    KWV1 : 'R',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : '1Y',
    Amps : '0.000Amps',
    KWV1 : 'Y',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen2.png',
    KWV : '1B',
    Amps : '0.000Amps',
    KWV1 : 'B',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen3.png',
    KWV : 'PF',
    Amps : '0',
    KWV1 : 'KY',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'KW1',
    Amps : '27 kw',
    KWV1 : 'Y11',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'KW2',
    Amps : '-1 kw',
    KWV1 : 'ER',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'KVA',
    Amps : '0',
    KWV1 : 'KVAR',
    Amps1 : '0',
  }]

  engineTable = [{
    img:'../../assets/gen.png',
    name : 'Oil Pressure',
    value : '0.000bar',
  },{
    img:'../../assets/gen1.png',
    name : 'Battery_Voltage',
    value : '0.000Volt',
  },{
    img:'../../assets/gen2.png',
    name : 'Engine Speed',
    value : '0 RPM',
  },{
    img:'../../assets/gen3.png',
    name : 'Coolant Temp',
    value : '0.000 C',
  },{
    img:'../../assets/gen1.png',
    name : 'Frequency',
    value : '0.000Hz',
  },{
    img:'../../assets/gen1.png',
    name : 'Total Ran Hrs.',
    value : '2.600Hr',
  },{
    img:'../../assets/gen1.png',
    name : 'Fuel Level',
    value : '0.000 %',
  },]

  mainTable = [{
    img:'../../a',
    KWV : 'M.N',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'Y.N',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen2.png',
    KWV : 'B.N',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen3.png',
    KWV : 'KY',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'YB',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'ER',
    Amps1 : '0.000V',
  },{
    img:'../../assets/gen1.png',
    KWV : 'Freq',
    Amps1 : '0 Hz',
  }]

  constructor(    public snackBar: MatSnackBar,
    public router: Router,) { }

  ngOnInit() {
  }
  dashboardRedirect(){
    this.redirect('user/dashboard');
  }
  redirect(to): void {
    this.router.navigate([to]);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,) { }

  ngOnInit() {
  }
  newreg(){
    this.redirect('');
  }
  redirect(to): void {
    this.router.navigate([to]);
  }

  login(){
    this.redirect('register/home')
  }
}

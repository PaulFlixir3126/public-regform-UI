import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxPermissionsService } from 'ngx-permissions';
import { CookiesStorageService, WebStorageModule, LocalStorageService, SessionStorageService, SharedStorageService } from "ngx-store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track';
  hideNavBar;
  userName;
  role;
  constructor(private router: Router,
    private sessionstorge: SessionStorageService, private LocalStorage: LocalStorageService, private permissionsService: NgxPermissionsService,
    private http: HttpClient
  ) { }
  ngOnInit() {
    setInterval(() => {
      this.userName = this.LocalStorage.get('userName');

this.role = this.sessionstorge.get('role');
    }, 1000);
    // console.log("userName", this.userName)
    setInterval(() => {
      if (this.router.url == '/login' || this.router.url == '/reset') {
        this.hideNavBar = false;
      } else {
        this.hideNavBar = true;
      }
    }, 1000); // for Headder
    
  }
  logOut() {
    this.sessionstorge.clear();
    this.LocalStorage.clear();
    this.router.navigate(['login']);
  }
}

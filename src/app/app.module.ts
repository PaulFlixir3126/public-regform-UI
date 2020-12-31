import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable, CUSTOM_ELEMENTS_SCHEMA, Injector, ErrorHandler, enableProdMode, Pipe, PipeTransform } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { DatePipe } from '@angular/common';
// jwt
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './providers/httpInterceptor/http-token-interceptor';
// jwt
//user role try start
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// user role try end
import {

  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
// import { ChartsModule } from 'ng2-charts';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { Ng2GaugeModule } from 'ng2-gauge';
import { GensetdetailComponent } from './gensetdetail/gensetdetail.component';
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }
}

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    SafeHtmlPipe,
    GensetdetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    NgxPaginationModule,
    WebStorageModule,
    HttpClientModule,
    //  materials
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgxPermissionsModule.forRoot(),
    ChartsModule,
    Ng2GaugeModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,

      multi: true
    },
    DatePipe,ThemeService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
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
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormStepsComponent } from './register-form-steps/register-form-steps.component';
import { RegisterFormStepOneComponent } from './register-form-step-one/register-form-step-one.component';
import { RegisterFormStepTwoComponent } from './register-form-step-two/register-form-step-two.component';
import { RegisterFormStepThreeComponent } from './register-form-step-three/register-form-step-three.component';
import { RegisterFormStepFourComponent } from './register-form-step-four/register-form-step-four.component';
import { RegisterFormStepFiveComponent } from './register-form-step-five/register-form-step-five.component';
import { RegisterFormStepSixComponent } from './register-form-step-six/register-form-step-six.component';
import { HomeComponent } from './home/home.component';
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
    FooterComponent,
    SideNavComponent,
    HeaderComponent,
    RegisterFormComponent,
    RegisterFormStepsComponent,
    RegisterFormStepOneComponent,
    RegisterFormStepTwoComponent,
    RegisterFormStepThreeComponent,
    RegisterFormStepFourComponent,
    RegisterFormStepFiveComponent,
    RegisterFormStepSixComponent,
    HomeComponent
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
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,

      multi: true
    },
    DatePipe
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
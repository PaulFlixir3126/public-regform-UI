import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepFiveComponent } from './register-form-step-five.component';

describe('RegisterFormStepFiveComponent', () => {
  let component: RegisterFormStepFiveComponent;
  let fixture: ComponentFixture<RegisterFormStepFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

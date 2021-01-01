import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepFourComponent } from './register-form-step-four.component';

describe('RegisterFormStepFourComponent', () => {
  let component: RegisterFormStepFourComponent;
  let fixture: ComponentFixture<RegisterFormStepFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

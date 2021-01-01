import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepOneComponent } from './register-form-step-one.component';

describe('RegisterFormStepOneComponent', () => {
  let component: RegisterFormStepOneComponent;
  let fixture: ComponentFixture<RegisterFormStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

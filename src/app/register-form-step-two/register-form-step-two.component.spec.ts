import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepTwoComponent } from './register-form-step-two.component';

describe('RegisterFormStepTwoComponent', () => {
  let component: RegisterFormStepTwoComponent;
  let fixture: ComponentFixture<RegisterFormStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

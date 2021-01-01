import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepsComponent } from './register-form-steps.component';

describe('RegisterFormStepsComponent', () => {
  let component: RegisterFormStepsComponent;
  let fixture: ComponentFixture<RegisterFormStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepSixComponent } from './register-form-step-six.component';

describe('RegisterFormStepSixComponent', () => {
  let component: RegisterFormStepSixComponent;
  let fixture: ComponentFixture<RegisterFormStepSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

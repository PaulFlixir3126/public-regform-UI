import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepThreeComponent } from './register-form-step-three.component';

describe('RegisterFormStepThreeComponent', () => {
  let component: RegisterFormStepThreeComponent;
  let fixture: ComponentFixture<RegisterFormStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

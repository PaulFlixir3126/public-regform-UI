import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GensetdetailComponent } from './gensetdetail.component';

describe('GensetdetailComponent', () => {
  let component: GensetdetailComponent;
  let fixture: ComponentFixture<GensetdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GensetdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GensetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

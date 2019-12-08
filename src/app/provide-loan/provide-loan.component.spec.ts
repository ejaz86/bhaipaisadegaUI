import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideLoanComponent } from './provide-loan.component';

describe('ProvideLoanComponent', () => {
  let component: ProvideLoanComponent;
  let fixture: ComponentFixture<ProvideLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

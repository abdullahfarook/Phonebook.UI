import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTaxesComponent } from './sale-taxes.component';

describe('SaleTaxesComponent', () => {
  let component: SaleTaxesComponent;
  let fixture: ComponentFixture<SaleTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

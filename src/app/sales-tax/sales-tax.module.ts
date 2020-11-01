import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalesTaxRoutingModule } from './sales-tax-routing.module';
import { SaleTaxesComponent } from './components/sale-taxes/sale-taxes.component';
import { SalesTaxModuleComponent } from './sales-tax.module.component';
import { SaleTaxComponent } from './components/sale-tax/sale-tax.component';


@NgModule({
  declarations: [SalesTaxModuleComponent,SaleTaxComponent, SaleTaxesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SalesTaxRoutingModule
  ]
})
export class SalesTaxModule { }

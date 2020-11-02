import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesTaxModuleComponent } from './sales-tax.module.component';
import { SaleTaxesComponent } from './components/sale-taxes/sale-taxes.component';
import { SaleTaxComponent } from './components/sale-tax/sale-tax.component';

const routes: Routes = [
  { 
    path: '', 
    component: SalesTaxModuleComponent,
    children:[
      {
        path:'',
        component: SaleTaxesComponent
      },
      {
        path:':id',
        component: SaleTaxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTaxRoutingModule { }

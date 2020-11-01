import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesTaxModuleComponent } from './sales-tax.module.component';
import { SaleTaxesComponent } from './components/sale-taxes/sale-taxes.component';

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
        path:'/:id',
        component: SaleTaxesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTaxRoutingModule { }

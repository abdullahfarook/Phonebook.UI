import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent,
    children:[
      {
        path: '', 
        redirectTo:'sales-tax',
        pathMatch:'full'
      },
      {
        path: 'sales-tax', 
        loadChildren: () => import('./sales-tax/sales-tax.module').then(m => m.SalesTaxModule) 
      }
    ]
  },
  { path: 'calls', loadChildren: () => import('./calls/calls.module').then(m => m.CallsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

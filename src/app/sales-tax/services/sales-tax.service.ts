import { Injectable } from '@angular/core';
import { SalesTax } from 'src/app/core/model/sale-tax';

@Injectable({
  providedIn: 'root'
})
export class SalesTaxService {
  saleTaxes:SalesTax[] = [];
  constructor() { }
  save(salesTaxes:SalesTax[]){
    this.saleTaxes.concat(salesTaxes);
  }
  getSalesTaxes():Promise<SalesTax[]>{
    return new Promise<SalesTax[]>(res=> res(this.saleTaxes))
  }
}

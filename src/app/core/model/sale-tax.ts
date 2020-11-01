
export class SalesTax {
 constructor(){
   this.id =  ((Math.random()+1)*2).toString();
 }
 id?: string | undefined;
 businessId?: string | undefined;
 name?: string | undefined;
 abbreviation?: string | undefined;
 description?: string | undefined;
 number?: string | undefined;
 rate?: number | undefined;
 isCompoundTax?: boolean | false;
 showTaxOnInvoices?: boolean | false;
 isTaxRecoverable?: boolean | false;
}

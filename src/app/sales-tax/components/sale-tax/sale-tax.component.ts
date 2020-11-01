import { Component, OnInit } from '@angular/core';
import { SalesTaxService } from '../../services/sales-tax.service';
import { ActivatedRoute } from '@angular/router';
import { SalesTax } from 'src/app/core/model/sale-tax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-tax',
  templateUrl: './sale-tax.component.html',
  styleUrls: ['./sale-tax.component.scss']
})
export class SaleTaxComponent implements OnInit {
  businessId = '';
  salesTaxes: SalesTax[] = [];
  salesTax: SalesTax = new SalesTax();
  salesTaxId = '';
  statusFilters = [
    { key: 'Select Status', value: '' },
    { key: 'In Progress', value: true },
    { key: 'Closed', value: false },
  ];
  loading = false;
  gridLoading = false;
  name = {
    max: 50,
  };
  abbreviation = {
    max: 20,
  };
  description = {
    max: 100,
  };
  number = {
    max: 50,
  };
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salesTaxService: SalesTaxService,
    private activatedRoute: ActivatedRoute
  ) {
    this.initForm();
    const businessId = this.activatedRoute.snapshot.paramMap.get('id');
    if (businessId && businessId !== '0') this.businessId = businessId;
  }

  async ngOnInit() {
    if (this.businessId) await this.getSalesTaxes();
  }

  async getSalesTaxes() {
    this.gridLoading = true;
    this.salesTaxes = [];
    this.gridLoading = false;
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        this.salesTax?.name,
        [Validators.required, Validators.maxLength(this.name.max)],
      ],
      abbreviation: [
        this.salesTax?.abbreviation,
        [Validators.required, Validators.maxLength(this.abbreviation.max)],
      ],
      description: [
        this.salesTax?.description,
        [Validators.required, Validators.maxLength(this.description.max)],
      ],
      number: [
        this.salesTax?.number,
        [Validators.required, Validators.maxLength(this.number.max)],
      ],
      rate: [this.salesTax?.rate, [Validators.required]],
      isCompoundTax: [this.salesTax?.isCompoundTax],
      showTaxOnInvoices: [this.salesTax?.showTaxOnInvoices],
      isTaxRecoverable: [this.salesTax?.isTaxRecoverable],
    });
  }

  async onEdit(id: string) {
    this.salesTaxId = id;
    this.loading = true;
    this.salesTax = await this.salesTaxService.getSalesTax(
      this.salesTaxId
    );
    if (this.salesTax) this.initForm();
    this.loading = false;
  }

  async onSubmit() {
    try {
      this.salesTax.rate = parseFloat(this.form.get('rate').value);
      if (this.salesTaxId) {
        this.salesTax.id = this.salesTaxId;
        await this.salesTaxService.update(this.salesTax);
      } else {
        await this.salesTaxService.add(this.salesTax);
      }
      await this.getSalesTaxes();
      this.salesTax = new SalesTax();
      this.salesTaxId = '';
      this.initForm();
    } catch (res) {
      console.log(res);
    }
  }
}

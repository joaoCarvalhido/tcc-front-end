import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public formInvestimento: FormGroup;
  public isRelatorio: boolean = false;

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.formInvestimento = this.fb.group({
      valorInicial: [null],
      valorParcela: [null],
      qntParcelas: [null],
      adiantamento: [null]
      })
  }

  onRelatorio() {
    this.isRelatorio = true;
  }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

}

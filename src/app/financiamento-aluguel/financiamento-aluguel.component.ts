import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-financiamento-aluguel',
  templateUrl: './financiamento-aluguel.component.html',
  styleUrls: ['./financiamento-aluguel.component.css']
})
export class FinanciamentoAluguelComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public formFinanAlug: FormGroup;
  public isRelatorio: boolean = false;

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.formFinanAlug = this.fb.group({
      valorOriginalImovel: [null],
      valorParcelaImovel: [null],
      qntParcelasImovel: [null],
      adiantamentoImovel: [null],
      valorAluguel: [null],
      qntParcelasAluguel: [10],
      investimento: [null],
      valorParcelaInvestimento:[null],
      valorJurosInvestimento: [null],
      qntParcelasInvestimento:  [null]
      })
  }

  onRelatorio() {
    this.isRelatorio = true;
  }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: TccService) { }

  public formInvestimento: FormGroup;
  public isRelatorio: boolean = false;

  investimento: any;

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.formInvestimento = this.fb.group({
      //valorInicial: [null],
      valorParcela: [null],
      qntMeses: [null],
      rendimentoMensal: [null],//
      adiantamento: [null]
      })
  }

  onRelatorio() {
    this.calculaInvestimento();

    this.isRelatorio = true;
  }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

  // ############################## Service ############################## //

  public calculaInvestimento(): void{
    this.service.calcularInvestimento(this.formInvestimento.value).
    subscribe(
      dados => {
        console.log(dados);
      },
      err => {
        console.log(err);
      }
    )
  }
  
}

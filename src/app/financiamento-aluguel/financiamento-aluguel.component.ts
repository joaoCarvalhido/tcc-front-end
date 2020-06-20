import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-financiamento-aluguel',
  templateUrl: './financiamento-aluguel.component.html',
  styleUrls: ['./financiamento-aluguel.component.css']
})
export class FinanciamentoAluguelComponent implements OnInit {

  constructor(private fb: FormBuilder, private tccService: TccService) { }

  public formFinanAlug: FormGroup;
  public isRelatorio: boolean = false;
  public financiamento: any;
  public aluguel: any;
  public investimento: any;
  public usuario: any;
  public mes: any;
  public dynamic: number = 0;
  public isCarregar: boolean = false;

  ngOnInit(): void {
    this.setForm();

    this.tccService.getUltimoUsuario()
    .subscribe(
      dados => this.usuario = dados
    );
  }

  private setForm(): void {
    this.formFinanAlug = this.fb.group({
      valorOriginalImovel: [null],
      valorParcelaImovel: [null],
      qntParcelasImovel: [null],
      adiantamentoImovel: [null],
      freqMesesAdiantamento: [null],
      qntParcelasAdiantamento: [null],
      valorAluguel: [null],
      qntParcelasAluguel: [null],
      investimento: [null],
      valorParcelaInvestimento:[null],
      valorJurosInvestimento: [null],
      qntParcelasInvestimento:  [null],
      usuario: this.fb.group({
        idUsuario: [null],
        nome: [null],
        email: [null]
      })
    })
  }

  getMes(): void {
    this.mes =  this.formFinanAlug.get('qntParcelasImovel').value;
    this.formFinanAlug.get('qntParcelasInvestimento').setValue(this.mes);
    this.formFinanAlug.get('qntParcelasAluguel').setValue(this.mes);
    console.log(this.mes);
  }

  onRelatorio() {
    this.isCarregar = true;

    this.formFinanAlug.get('usuario.idUsuario').setValue(this.usuario.idUsuario);
    this.formFinanAlug.get('usuario.nome').setValue(this.usuario.nome);
    this.formFinanAlug.get('usuario.email').setValue(this.usuario.email);

    console.log(this.formFinanAlug.value);

    this.tccService.calcularDespesas(this.jsonFinanciamento())
    .subscribe( 
      dados => {
        this.financiamento = dados;
        console.log("financiamento:", dados);
      }
    );

    this.dynamic = 20; 
    

   this.tccService.calcularDespesas(this.jsonAluguel())
   .subscribe( 
     dados => {
       this.aluguel = dados;
       console.log("aluguel:", dados);
     }
   );

   this.dynamic = 60; 

   this.tccService.calcularInvestimento(this.jsonInvestimento())
   .subscribe( 
     dados => {
       this.investimento = dados;
       console.log("investimento:", dados);
      }
      );

      this.dynamic = 100; 

      this.isRelatorio = true;
    }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

  // ############################ json ############################

  private jsonAluguel(): any {
    let json = {
      "valorOriginal": this.formFinanAlug.get('valorAluguel').value,
      "valorParcela": this.formFinanAlug.get('valorAluguel').value,
      "qntMeses": this.mes,
      "cdTipoDespesa": 1,
      "usuario": this.usuario
    }
    return json;
  }

  private jsonFinanciamento(): any {
    let json = {
      "valorOriginal": this.formFinanAlug.get('valorOriginalImovel').value,
      "valorParcela": this.formFinanAlug.get('valorParcelaImovel').value,
      "qntMeses": this.mes,
      "adiantamento": this.formFinanAlug.get('adiantamentoImovel').value,
      "cdTipoDespesa": 2,
      "usuario": this.usuario,
      "freqMesesAdiantamento": this.formFinanAlug.get('freqMesesAdiantamento').value,
      "qntParcelasAdiantamento": this.formFinanAlug.get('qntParcelasAdiantamento').value
    }
    return json;
  }

  private jsonInvestimento(): any {
    let json = {
        "valorParcela": this.formFinanAlug.get('valorParcelaInvestimento').value,
        "qntMeses": this.mes,
        "rendimentoMensal": this.formFinanAlug.get('valorJurosInvestimento').value,
        "usuario": this.usuario,
      }
    return json;
  }

}

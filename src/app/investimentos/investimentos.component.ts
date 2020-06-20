import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  constructor(private fb: FormBuilder, private tccService: TccService) { }

  public formInvestimento: FormGroup;
  public isRelatorio: boolean = false;
  public usuario: any;
  public investimento: any;
  public total: number = 0;
  public totalFinal: number = 0;


  ngOnInit(): void {
    this.setForm();
    
    this.tccService.getUltimoUsuario()
    .subscribe( 
      dados => {
        this.usuario = dados;
        console.log("usuario", dados);
      }
    );
  }

  private setForm(): void {
    this.formInvestimento = this.fb.group({
      //valorInicial: [null],
      valorParcela: [null],
      qntMeses: [null],
      rendimentoMensal: [null],//
      adiantamento: [null],
      usuario: this.fb.group({
        idUsuario: [null],
        nome: [null],
        email: [null]
      })
    })
  }

  calculaRendimento() {
    let parcela = this.formInvestimento.get('valorParcela').value
    let mes = this.formInvestimento.get('qntMeses').value
    let investimento: number = parcela * mes;
    let totalInvestido: number = this.total;

    this.totalFinal = totalInvestido - investimento;
  }

  onRelatorio() {
    this.formInvestimento.get('usuario.idUsuario').setValue(this.usuario.idUsuario);
    this.formInvestimento.get('usuario.nome').setValue(this.usuario.nome);
    this.formInvestimento.get('usuario.email').setValue(this.usuario.email);

    console.log(this.formInvestimento.value);

    
    this.tccService.calcularInvestimento(this.formInvestimento.value)
    .subscribe( 
      dados => {
        this.investimento = dados;
        this.total = dados.totalFinal;
        console.log("investimento:", dados);
      }
    );

    this.isRelatorio = true;
    this.calculaRendimento();
    
  }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

  
}

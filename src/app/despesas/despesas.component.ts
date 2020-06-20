import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor(private fb: FormBuilder, private tccService: TccService) { }

  public formDespesa: FormGroup;
  public isRelatorio: boolean = false;
  private usuario: any;
  public despesa: any;

  ngOnInit(): void {
    this.setForm();

    this.tccService.getUltimoUsuario()
    .subscribe(
      dados => this.usuario = dados
    );
  }

  private setForm(): void {
    this.formDespesa = this.fb.group({
      valorOriginal: [null],
      valorParcela: [null],
      qntMeses: [null],
      adiantamento: [null],
      cdTipoDespesa: [3],
      freqMesesAdiantamento: [null],
      qntParcelasAdiantamento: [null],
      usuario: this.fb.group({
        idUsuario: [null],
        nome: [null],
        email: [null]
      }) 
    })
  }

  onRelatorio() {
    this.formDespesa.get('usuario.idUsuario').setValue(this.usuario.idUsuario);
    this.formDespesa.get('usuario.nome').setValue(this.usuario.nome);
    this.formDespesa.get('usuario.email').setValue(this.usuario.email);

    console.log(this.formDespesa.value);

    
    this.tccService.calcularDespesas(this.formDespesa.value)
    .subscribe( 
      dados => {
        this.despesa = dados;
        console.log("despesa:", dados);
      }
    );

    this.isRelatorio = true;
    
  }

  public optionsMaskMoney: Object = {
    prefix: '', thousands: ".", decimal: ',', precision: 2, align: "left"
  }

}

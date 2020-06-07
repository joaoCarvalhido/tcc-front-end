import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public formDespesa: FormGroup;
  public isRelatorio: boolean = false;

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.formDespesa = this.fb.group({
      valorOriginal: [null],
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

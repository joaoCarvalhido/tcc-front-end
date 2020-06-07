import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { FinanciamentoAluguelComponent } from './financiamento-aluguel/financiamento-aluguel.component';


const routes: Routes = [
  {path: 'calcular-despesas', component: DespesasComponent},
  {path: 'calcular-investimentos', component: InvestimentosComponent},
  {path: 'financiamento-aluguel', component: FinanciamentoAluguelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DespesasComponent, InvestimentosComponent]

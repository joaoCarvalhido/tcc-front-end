import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { FinanciamentoAluguelComponent } from './financiamento-aluguel/financiamento-aluguel.component';
import { AuthPage } from './auth/auth';


const routes: Routes = [
  {path: 'calcular-despesas', component: DespesasComponent},
  {path: 'calcular-investimentos', component: InvestimentosComponent},
  {path: 'financiamento-aluguel', component: FinanciamentoAluguelComponent},
  {path: 'login', component: AuthPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DespesasComponent, InvestimentosComponent, AuthPage]

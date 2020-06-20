import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { FinanciamentoAluguelComponent } from './financiamento-aluguel/financiamento-aluguel.component';
import { LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FinanciamentoAluguelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiSwitchModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    ProgressbarModule.forRoot()
  ],
  exports: [
    //ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

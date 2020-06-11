import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { FinanciamentoAluguelComponent } from './financiamento-aluguel/financiamento-aluguel.component';

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
    NgxCurrencyModule
  ],
  exports: [
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

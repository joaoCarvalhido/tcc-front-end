import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TccService {

  private readonly API_URL_CALCULA_DESPESA = "http://localhost:8080/despesas";
  private readonly API_URL_CALCULA_INVESTIMENTO = "http://localhost:8080/investimentos";

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })

  constructor(private http: HttpClient) { }

  calcularDespesas(despesa: any): Observable<any> {
    return this.http.post<any>(this.API_URL_CALCULA_DESPESA, despesa)
    .pipe(
      catchError(error => this.handleError(error)),
      take(1),
      map(dados => dados)
    );
  }

  calcularInvestimento(investimento: any): Observable<any> {
    console.log("SERVICE", investimento)
    return this.http.post<any>(this.API_URL_CALCULA_INVESTIMENTO, investimento, {headers: this.headers}) /*
    .pipe(
      catchError(error => this.handleError(error)),
      take(1),
      map(dados => dados)
    ); */
  }

   /* ############## TRATAMENTO DE ERROS ############## */ 
   private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Error do client: ', errorResponse.error.message);
      return throwError(errorResponse.error.message);
    } else {
      console.error('Erro na comunicação com o servidor: ', errorResponse);
      return throwError(errorResponse);
    }
  }

}

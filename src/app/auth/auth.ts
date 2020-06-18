import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html',
})
export class AuthPage implements OnInit {

  formAuth: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, 
              private router: Router, private tccService: TccService) {}

  ngOnInit(): void {
    this.formAuth = this.fb.group({
      nome: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  login() {
    if (this.formAuth.invalid) {
      return;
    }

    console.log(JSON.stringify(this.formAuth.value));

    this.tccService.cadastrarUsuario(this.formAuth.value)
    .subscribe(
      dados => dados
    );
    this.router.navigate(['/financiamento-aluguel']);

    
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private snack: MatSnackBar) {
    this.initForm();
   }

  ngOnInit(): void {
    
  }

  validar(){
    if(this.form.valid) {
      const msg = "O Form está válido";
      this.openSnackBar(msg, null);
    } else {
      const msg = "O Form está inválido";
      this.openSnackBar(msg, null);
      this.form.markAllAsTouched();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 3000,
    });
  }

  initForm(){
    this.form = this.fb.group({
      nome: this.fb.control('', Validators.required),
      idade: this.fb.control('', Validators.required),
      possuiCasa: this.fb.control(''),
      endereco: this.fb.group({
        rua: this.fb.control('', Validators.required),
        numero: this.fb.control('', Validators.required),
        bairro: this.fb.control('', Validators.required),
      }),
      telefones: this.fb.array([]),
    })
  }

}

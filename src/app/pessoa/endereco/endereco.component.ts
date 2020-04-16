import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() formGroupOriginal: FormGroup;
  @Input() groupName: string;

  constructor() { }

  ngOnInit(): void {
  }

  removeValidador(){
    this.formGroupOriginal.get('nome').setValidators([]);
  }

  validarCampos(){
    this.form.markAllAsTouched();
  }

  get form() {
    return this.formGroupOriginal.get(this.groupName) as FormGroup;
  }

}

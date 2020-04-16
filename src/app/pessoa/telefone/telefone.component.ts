import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {

  @Input() formGroupOriginal: FormGroup;
  @Input() arrayName: string

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addItem(){
    this.formArray.push(this.createForm())
  }

  validarCampos(){
    this.formGroupOriginal.markAsUntouched();
  }

  createForm(){
    const group: FormGroup = this.fb.group({
      contato: this.fb.control('', [Validators.required])
    });
    return group;
  }

  get formArray(){
    return this.formGroupOriginal.get(this.arrayName) as FormArray
  }

}

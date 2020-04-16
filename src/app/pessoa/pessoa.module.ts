import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { EnderecoComponent } from './endereco/endereco.component';
import { TelefoneComponent } from './telefone/telefone.component';


const routes: Routes = [
  {
    path: '',
    component: CadastrarComponent
  }
]

@NgModule({
  declarations: [CadastrarComponent, EnderecoComponent, TelefoneComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ]
})
export class PessoaModule { }

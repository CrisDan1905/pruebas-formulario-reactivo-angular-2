import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Necesario para usar los formularios Reactivos
import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormularioComponent
  ],
  exports: [
    FormularioComponent // Las exportaciones sirven para componentes o clases que queremos que se vean en otros modulos
  ]
})
export class FormularioReactiveModule { }

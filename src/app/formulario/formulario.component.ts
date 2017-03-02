import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Usuario } from '../registrarse.interface' // Se importa la interface para poder trabajar con ella en el onSubmit (Opcional)

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario: FormGroup;
  /**
   * Por si quisieramos trabajar con interface
   */
  // onSubmit({ value, valid}: {value: Usuario, valid: boolean}) {

  // }
  onSubmit(usuario) {
    console.log(this.usuario.value, this.usuario.valid);
    
  }
  constructor() { }
/**
 * Se crea un formgroup, el cual servirá para bindiar con los elementos del DOM
 * FormGroup => Conjunto de FormControl
 * FormControl => Son objetos que se encargaran de contener las respectivas validaciones de cada elemento
 */
  ngOnInit() {
    this.usuario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      
      cuenta: new FormGroup({
        email: new FormControl('', Validators.required),
        confirmar: new FormControl('', Validators.required)
      })
    })
   }

}

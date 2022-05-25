import { Component, OnInit } from '@angular/core';
import { AdminConv } from '../../model/IAdminConvenios';
import { UsuarioService } from '../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup

  constructor(
    private load: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required],
      imagen: ['', Validators.required],
      nombre: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    
    const usuario: any = {
      correo: this.form.value.correo,
      clave: this.form.value.clave,
      imagen: this.form.value.imagen,
      nombre: this.form.value.nombre
    }
    this.load.postAdminCon(usuario, "")
    this.router.navigate(['dashboard/admin-convenios'])
  }
}

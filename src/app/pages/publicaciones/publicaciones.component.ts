import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.sass']
})
export class PublicacionesComponent implements OnInit {

  usuarios: any = [];
  Subscription: Subscription;

  constructor(
    private usuariosService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuariosService.getPubli()
      .subscribe(resp => {
        this.usuarios = resp;
      });

    this.Subscription = this.usuariosService.refresh$.subscribe(() => {
      this.listarUsuarios()
    })
  }

  listarUsuarios() {
    this.usuariosService.getPubli()
      .subscribe(resp => {
        this.usuarios = resp;

      });
  }

  eliminar(id) {
    if (confirm("seguro que desea eliminar")) {
      this.usuariosService.deletePubli(id).subscribe((data) => {
        this.listarUsuarios
        this.router.navigate(['/dashboard/publicaciones'])
      })
      err => {
        console.log(err)
      }
    }
  }

}

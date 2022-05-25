import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { IResponse } from '../../model/IResponse';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  usuarios: any = [];
  Subscription: Subscription;

  constructor(
    private usuariosService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usuariosService.getAdminCon()
      .subscribe(resp => {
        this.usuarios = resp;
      });

    this.Subscription = this.usuariosService.refresh$.subscribe(() => {
      this.listarUsuarios()
    })
  }

  listarUsuarios() {
    this.usuariosService.getAdminCon()
      .subscribe(resp => {
        this.usuarios = resp;

      });
  }

  eliminar(id) {
    if (confirm("seguro que desea eliminar")) {
      this.usuariosService.deleteAdminCon(id).subscribe((data) => {
        this.listarUsuarios
        this.router.navigate(['/dashboard/admin-convenios'])
      })
      err => {
        console.log(err)
      }
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}

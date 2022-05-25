import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-isu',
  templateUrl: './admin-isu.component.html',
  styleUrls: ['./admin-isu.component.sass']
})
export class AdminIsuComponent implements OnInit {

  usuarios: any = [];
  Subscription: Subscription;

  constructor(
    private usuariosService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuariosService.getAdminIsu()
      .subscribe(resp => {
        this.usuarios = resp;
      });

    this.Subscription = this.usuariosService.refresh$.subscribe(() => {
      this.listarUsuarios()
    })
  }

  listarUsuarios() {
    this.usuariosService.getAdminIsu()
      .subscribe(resp => {
        this.usuarios = resp;

      });
  }

  eliminar(id) {
    if (confirm("seguro que desea eliminar")) {
      this.usuariosService.deleteAdminIsu(id).subscribe((data) => {
        this.listarUsuarios
        this.router.navigate(['/dashboard/admin-isu'])
      })
      err => {
        console.log(err)
      }
    }
  }

}

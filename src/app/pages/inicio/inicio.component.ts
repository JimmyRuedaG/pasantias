import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  // public isLogged: boolean;

  constructor(
    private route: ActivatedRoute,
  ) { }

  usuarios: any= ['','','','','','','','','','']

  ngOnInit(): void {

    // this.loginService.cargarUsuario()
    //   .subscribe( resp => {
        
    //     console.log(resp.compania);
    //     this.usuarios = resp.compania;
    //   });
  }

}

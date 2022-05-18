import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.HOST}/admin/convenio/list`

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  // public login(usuario: string, contraseña: string): any{
  //   const body = `user=${encodeURIComponent(usuario)}&pass=${encodeURIComponent(contraseña)}`;
  //    return this.http.post<any>(`${this.url}`, body, {
  //      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set(
  //        'Authorization', 'Basic ' + btoa(`${environment.TOKEN_AUTH_USERNAME}:${environment.TOKEN_AUTH_PASSWORD}`))
    //  });//desde aqui datos
  //  }
}

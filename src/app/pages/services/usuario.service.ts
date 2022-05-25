import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IResponse } from '../../model/IResponse';
import { map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _refresh$ = new Subject<void>();
  private url = environment.HOST

  constructor(
    private http: HttpClient
  ) { }

  get refresh$() {
    return this._refresh$
  }

  getAdminCon() {
    return this.http.get<IResponse>(`${this.url}/admin/convenio/list`);
  }

  deleteAdminCon(id) {
    return this.http.delete(`${this.url}/admin/convenio/delete/${id}`).
      pipe(
        tap(() => {
          this._refresh$.next();
        })
      )
  }

  putAdminCon(id) {
    return this.http.put(`${this.url}/convenio/update/${id}`, id);
  }

  postAdminCon(url: string, body) {
    return this.http.post(`${url}/admin/convenio/add`, body)
  }

  getAdminIsu() {
    return this.http.get<IResponse>(`${this.url}/admin/isu/list`).
    pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  deleteAdminIsu(id) {
    return this.http.delete(`${this.url}/admin/isu/delete/${id}`);
  }

  getPubli() {
    return this.http.get<IResponse>(`${this.url}/publicacion/list`).
    pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  deletePubli(id) {
    return this.http.delete(`${this.url}/publicacion/delete/${id}`);
  }

}
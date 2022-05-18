
import { Component, Host, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

  form : FormGroup ;
  // subRef$: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      contraseña: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  
  // login(event: Event): void {

    // if (this.form.valid) {
      // this.loginService.login(this.form.value.usuario, this.form.value.contraseña).subscribe(data => {
      //   console.log(data);
      //   sessionStorage.setItem(environment.TOKEN, data.access_token);
      //   this.router.navigate(['/dashboard/inicio']);
      // });
    // } else {
    //   this.form.markAllAsTouched();
    // }

  // }

  // enviar() {

  //   const usuarioLogin: Ilogin = {
  //     user: this.form.value.usuario,
  //     pass: this.form.value.contraseña,
  //   };

  //   let headers = new HttpHeaders(
  //     { 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'application/json', 'Access-Control-Allow-Origin': '*' }

  //   );

  //   let options = { headers: headers }

  //   this.http.post<IResponse>('http://sinfanas03.myqnapcloud.com:9080/presupuestoBackEnd/v1/login',
  //     usuarioLogin, options)
  //     .subscribe(res => {
  //       console.log("asdsadas")
  //       const token = res.token
  //       console.log('token', token)
  //       sessionStorage.setItem('token', token)
  //       this.router.navigate(['/dashboard']);
  //     }, err => {
        
  //       console.log('error de login', err);
  //     });
  //   console.log(this.form.value);
  // }

}


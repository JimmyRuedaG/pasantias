
import { Component, Host, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

  form : FormGroup ;
  subRef$: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      contraseña: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  
  login(event: Event): void {

    // if (this.form.valid) {
    //   this.loginService.login(this.form.value.usuario, this.form.value.contraseña).subscribe(data => {
    //     console.log(data);
    //     sessionStorage.setItem(environment.TOKEN, data.access_token);
    //     this.router.navigate(['/dashboard/inicio']);
    //   });
    // } else {
    //   this.form.markAllAsTouched();
    // }

  }

  
}


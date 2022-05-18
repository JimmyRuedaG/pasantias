import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorGlobalComponent } from './pages/error-global/error-global.component';
import { OlvidarComponent } from './pages/login/olvidar/olvidar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    ErrorGlobalComponent,
    OlvidarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorGlobalComponent } from './pages/error-global/error-global.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
    ]
  },

  { path:'login', component:LoginComponent},
  { path: 'error', component: ErrorGlobalComponent },
  { path: '**', component: ErrorGlobalComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/inicio', pathMatch:'full'
  },
  {
    path: 'inicio', component: InicioComponent,
  },
  {
    path: 'cliente', component: ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

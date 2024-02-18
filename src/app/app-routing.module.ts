import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path:'',component:ClientesComponent},
  {path: 'clientes', component: ClientesComponent },
  {path:'servicios',component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

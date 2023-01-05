import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ListarComponent } from './Persona/listar/listar.component';

const routes: Routes = [
  {path:'listadocct', component:ListarComponent},
  {path:'', component:AlumnosComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

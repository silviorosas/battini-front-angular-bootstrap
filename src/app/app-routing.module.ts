import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { FirebaseAlumnoComponent } from './firebase-alumno/firebase-alumno.component';
import { FirebaseListComponent } from './firebase-list/firebase-list.component';

const routes: Routes = [
  {path:'listarcct', component:FirebaseListComponent},
  {path:'', component:FirebaseAlumnoComponent}
 /*  
  {path:'listadocct', component:ListarComponent},
  {path:'', component:AlumnosComponent}, */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

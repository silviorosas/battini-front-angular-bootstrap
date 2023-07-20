import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { FirebaseAlumnoComponent } from './firebase-alumno/firebase-alumno.component';
import { FirebaseListComponent } from './firebase-list/firebase-list.component';
import { FirebaseList2Component } from './firebase-list2/firebase-list2.component';

const routes: Routes = [
  {path:'listarcct', component:FirebaseListComponent},
  {path:'', component:FirebaseAlumnoComponent},
  {path:'listar2cct', component:FirebaseList2Component},
   /*  
  {path:'', component:AlumnosComponent}, */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

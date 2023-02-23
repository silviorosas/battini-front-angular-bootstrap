import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FirebaseAlumnoComponent } from './firebase-alumno/firebase-alumno.component';
import { FirebaseListComponent } from './firebase-list/firebase-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AlumnosComponent,
    FirebaseAlumnoComponent,
    FirebaseListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),//para base datos firebase
    provideFirestore(() => getFirestore())
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {  }

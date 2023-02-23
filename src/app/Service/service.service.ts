import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

//el servicio se comunica con el backend
  constructor(private http:HttpClient,private firestore: Firestore) { }
//hace referencia al proyecto backend
//Url='https://battini-back-prod.up.railway.app';
//Url='http://localhost:8080'

  /* getAlumnos(){
    //obtengo todos los datos de la url de arriba que viene del back
  return this.http.get<any>(this.Url+'/api/');

  } */

 /*  save(producto: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.Url+'/api/'+ JSON.stringify(producto), {headers: headers});
  } */
/* 
  save(alumno:any):Observable<any>{
    return this.http.post<any>(`${this.Url}/api/`,alumno);
  } 
 
  
  actualizarAlumnos(datos:any){
    return this.http.post(`${this.Url}/api/`, datos);
    }

  eliminarAlumno(id:number){
      return this.http.delete(this.Url+'/api/' + "delete/"+id);
       }

  getEspecialidadFilter(params: any) {
    const parametros = new HttpParams()     
    .set('especialidad', params.especialidad)
    const urlEndPoint = `${this.Url}/api/especialidad`;
  return this.http.get<any>(urlEndPoint,{params: parametros })  
  }

  getNombreFilter(params: any) {
    const parametros = new HttpParams()     
    .set('nombre', params.nombre)
    const urlEndPoint = `${this.Url}/api/nombre`;
  return this.http.get<any>(urlEndPoint,{params: parametros })  
  }
 */
 //Metodos para conectar con  base datos firebase
 //para registrar  inscripcion de un alumno
addItem(item:any){
  const itemRef = collection(this.firestore,'items');
  return addDoc(itemRef,item);
}

getItems():Observable<any[]>{
  const itemRef = collection(this.firestore,'items');
  return collectionData(itemRef,{idField:'id'}) as Observable<any[]>;
}

deleteItem(item:any){
    const itemDocRef = doc(this.firestore,`items/${item.id}`);
    return deleteDoc(itemDocRef);
  }

    

  
}

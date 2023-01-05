import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

//el servicio se comunica con el backend
  constructor(private http:HttpClient) { }
//hace referencia al proyecto backend
  Url='https://battini-back.up.railway.app';
  //Url='http://localhost:8080'

  getAlumnos(){
    //obtengo todos los datos de la url de arriba que viene del back
  return this.http.get<any>(this.Url+'/api/');

  }

 /*  save(producto: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.Url+'/api/'+ JSON.stringify(producto), {headers: headers});
  } */

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
    const urlEndPoint = `${this.Url}/api/esp`;
  return this.http.get<any>(urlEndPoint,{params: parametros })  
  }
           

  
}

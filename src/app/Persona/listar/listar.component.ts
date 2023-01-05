import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/* import {jsPDF} from 'jspdf';
import domtoimage from 'dom-to-image'; */
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  //array para guardar los alumnos. Es el que está presente en listar html
  personas: any[] = [];

  constructor(private service:ServiceService, private fb: FormBuilder) { }

  ngOnInit() {
  this.getAlumnos()  
  }

  getAlumnos(){
    this.service.getAlumnos()
    .subscribe((data:any)=>{
      this.personas=data;
      console.log(this.personas)
    })
  }


  eliminarAlumno(id:number){
    this.service.eliminarAlumno(id)
    .subscribe((respuesta)=>{
      this.ngOnInit();
      console.log("eliminado",respuesta)
    } )
  }



   public formFilter = this.fb.group({      
    especialidad: ['', [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],         
  });

 

  filterEspecialidad(){    
       let params: any = {      
        especialidad: this.formFilter.get('especialidad')?.value,           
      };
      this.service.getEspecialidadFilter(params)
      .subscribe(
        (res:any) =>{         
          this.personas=res          
          console.log("especialidad filter",res)       
        })
        
    }
  

  //exportarPdf(){
   // var canvas = document.getElementById('pdf')!;

    //domtoimage.toPng(canvas).then((dataUrl)=>{
      //  let imagen= new Image();
      //  imagen.src=dataUrl;/*obtengo el screenshot*/
      //  let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
      //  pdf.addImage( imagen, 10, 10, 280,60); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
      //  pdf.save( 'Lista de alumnos' ); /* descargamos el pdf con ese nombre.*/
    //}
    //); 

 // }

}

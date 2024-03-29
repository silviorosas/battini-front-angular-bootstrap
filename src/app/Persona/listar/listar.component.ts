import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image'; 
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  //array para guardar los alumnos. Es el que está presente en listar html
  personas: any[] = [];
  //para prueba filtrar datos 
  esp: any[]=[];
  esp2:any;

  constructor(private service:ServiceService, private fb: FormBuilder) { }

  ngOnInit() {
 // this.getAlumnos()  
  }
  
 /*  getAlumnos(){
    this.service.getAlumnos()
    .subscribe((data:any)=>{
      this.personas=data;
      
      //pruebas filter desde front
     this.esp=this.personas.filter(persona=>persona.especialidad == "Mecánica-Turno Noche")
     this.esp2=this.personas.filter(persona=>persona.edad >= 39 && persona.especialidad=="Mecánica-Turno Noche")
     //metodo find devuelve un objeto(el primero que coincida) no un array.Every devuelve boolean si todo se cumple es true
     let res = this.personas.find(persona=>persona.edad<40)
     let res2 = this.personas.every(persona=>persona.edad>=18)//todos son >=18?
     //con map obtengo los datod que deseo
     let names=this.personas.map(persona=>persona.nombre)
      console.log("filter por edad:",this.esp2)
      console.log("filter por especiaidad:",this.esp)
      console.log("map obtengo los nombres:",names)
      console.log(this.personas)
    })
  } */


  eliminarAlumno(id:number){
   /*  this.service.eliminarAlumno(id)
    .subscribe((respuesta)=>{
      this.ngOnInit();
      console.log("eliminado",respuesta)
    } ) */
  } 


   public formFilter = this.fb.group({      
    especialidad: ['', [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],  
    nombre: ['', [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],         
  });
 

  filterEspecialidad(){    
      /*  let params: any = {      
        especialidad: this.formFilter.get('especialidad')?.value,           
      };
      this.service.getEspecialidadFilter(params)
      .subscribe(
        (res:any) =>{         
          this.personas=res          
          console.log("especialidad filter",res)       
        })    */     
    }

    filterNombre(){    
    /*   let params: any = {      
       nombre: this.formFilter.get('nombre')?.value,           
     };
     this.service.getNombreFilter(params)
     .subscribe(
       (res:any) =>{         
         this.personas=res          
         console.log("nombre filter",res)       
       })         */
   }
  
 
  exportarPdf(){
    var canvas = document.getElementById('pdf')!;
    domtoimage.toPng(canvas).then((dataUrl)=>{
        let imagen= new Image();
        imagen.src=dataUrl;/*obtengo el screenshot*/
        let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
        pdf.addImage( imagen, 10, 10, 280,120); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
        pdf.save( 'Lista de alumnos' ); /* descargamos el pdf con ese nombre.*/
    }
    ); 
  }


}

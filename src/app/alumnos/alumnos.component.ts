import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  formFilter: any;

   /*conectado con button por medio de (click)="save()"  */
   producto:any ={
    id: 0,
    nombre:"",
    dni:"",
    edad:"",
    domicilio:"",
    email:"",
    telefono:"",
    especialidad:""   
  };
  idContador: number = 0;
  datos:any[]=[];

 
      
  //Metodo 2 save
  crearAlumno() {
    this.service.save(this.formFilter.value).subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Enviado con Éxito!!',          
        })
        console.log(res);
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...Heroku ahora es de pago!!',
          text: 'Intente cuando sea gratis para las pruebas!',
         // footer: '<a href="/">Volver</a>'
        })
        console.log(error)       
      })  
    if (this.formFilter.valid) {
      const value = this.formFilter.value;
      this.datos.push(value);     
      this.formFilter.reset()
      console.log(this.datos);
    }   

  }


    
  constructor(private fb: FormBuilder, private service:ServiceService) { }

  ngOnInit(): void {
  //Defino formulario como una propiedad y valido que los campos son requeridos:
   this.formFilter = this.fb.group({      
    nombre: ['', [Validators.required, Validators.minLength(3),Validators.pattern("^[a-zA-Z ]+$")]],
    dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^[0-9]*$')]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.min(16),Validators.pattern('^[0-9]*$')]],  
    domicilio: ['', [Validators.required,Validators.minLength(5)]],
    email: ['', [Validators.required,Validators.email]], 
    telefono: ['', [Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')]], 
    especialidad: ['', Validators.required],   
  });
  }

  //metodo para validar inputs form
 isValidField(name:string):boolean{
  const fieldName = this.formFilter.get(name);
  return fieldName.invalid && fieldName.touched;
 }

}

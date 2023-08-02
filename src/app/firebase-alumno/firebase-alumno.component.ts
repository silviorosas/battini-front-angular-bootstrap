import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-firebase-alumno',
  templateUrl: './firebase-alumno.component.html',
  styleUrls: ['./firebase-alumno.component.css']
})
export class FirebaseAlumnoComponent implements OnInit {

  formFilter: any;

  constructor(private fb: FormBuilder, private service:ServiceService) { }

  ngOnInit(): void {
     //Defino formulario como una propiedad y valido que los campos son requeridos:
   this.formFilter = this.fb.group({      
    nombre: ['', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z ]*$')]],
    dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^[0-9]*$')]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.min(16),Validators.pattern('^[0-9]*$')]],  
    domicilio: ['', [Validators.required,Validators.minLength(5)]],
    email: ['', [Validators.required,Validators.email]], 
    telefono: ['', [Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')]], 
    especialidad: ['', Validators.required],   
  });
  }


  //metodo para guardar inscripcion en base datos firebase
  async onSubmit(){   
    const res = await this.service.addItem(this.formFilter.value);
   console.log("new metodo firebase",res)
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Inscripción Exitosa!!',          
  })  

  if (this.formFilter.valid) {      
    this.formFilter.reset() 
    //this.router.navigateByUrl('/lista');    
  }else 
  Swal.fire({
    icon: 'error',
    title: 'Oops...ocurrió un error!!',
    text: 'Intente más tarde!',
   
  })
  } 
  
    //metodo para validar inputs form
 isValidField(name:string):boolean{
  const fieldName = this.formFilter.get(name);
  return fieldName.invalid && fieldName.touched;
 }


}

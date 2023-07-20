import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-firebase-list',
  templateUrl: './firebase-list.component.html',
  styleUrls: ['./firebase-list.component.css']
})
export class FirebaseListComponent implements OnInit {

  items: any[] = [];

  constructor(private service:ServiceService) { }

  ngOnInit() {
  this.getItems()  
  }

  getItems(){
    this.service.getItems()
    .subscribe((data:any)=>{
      this.items=data;
      console.log(this.items)
    })
  }

async deleteItem2(item:any){
  Swal.fire({
    title: 'Seguro desea borrar?',
    text: `El registro será eliminado`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí,eliminarlo!'
  }).then((result) => {
    if (result.value) {
      const res = this.service.deleteItem(item);//para eliminar 
     
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}

public searchCurso(key: string): void {
  console.log(key);
  const results: any[] = [];
  for (const curso of this.items) {
    if (curso.especialidad.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
      results.push(curso);
    }
  }
  this.items = results;
  if (results.length === 0 || !key) {
    this.getItems();
  }
}



}

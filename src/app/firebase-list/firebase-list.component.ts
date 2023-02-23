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

 async deleteItem(item:any){
  let answer = await Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((res) => {
  if (res.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})  
const res = await this.service.deleteItem(item);//para eliminar 
}



}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-firebase-list2',
  templateUrl: './firebase-list2.component.html',
  styleUrls: ['./firebase-list2.component.css']
})
export class FirebaseList2Component implements OnInit {

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

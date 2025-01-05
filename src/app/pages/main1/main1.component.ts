import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {resource, Signal} from '@angular/core';
declare var db:any
@Component({
  selector: 'app-main1',
  imports: [JsonPipe],
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.scss'
})
export class Main1Component {
  constructor() {
    this.pg = computed(() => this.userResource.value());
  }
   userId :any =  signal(1);
    pg:any =  signal(1);
   userResource = resource({
    request: () => ({id:this.userId() }),
    loader: ({request}) => this.fetchUser(request),
  });
  fetchUser(id:any ){
   db.start()
    return fetch(`https://jsonplaceholder.typicode.com/users/${id.id}`).then(response => {
      db.end();
      return response.json()
    });

  }
  getName(){
    db.start(59);
    db.call(3000,()=>{
      db.end();
      this.userId.set(Math.floor(Math.random() * 10) + 1);
    })
    

    

  }
  
  
}

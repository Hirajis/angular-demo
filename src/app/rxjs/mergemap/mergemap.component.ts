import { Component } from '@angular/core';
import { mergeMap, of, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent {

  constructor(){
    this.mergeMap();
  }

  mergeMap(){
    of(1,2,3,4,5).pipe(
      mergeMap((id) => {
        return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .pipe(map((data) => {
          return data.response;
        }))
      })
    ).subscribe((resp) => {
      console.log(resp);
    })
  }
}

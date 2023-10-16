import { Component } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent {

  constructor(){
    of(1,2,3,4, 5).pipe(
      switchMap((id) => {
        return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`)
      })
    ).subscribe((resp) => {
      console.log(resp);
    })
  }
}

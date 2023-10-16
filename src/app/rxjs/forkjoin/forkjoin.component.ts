import { Component } from '@angular/core';
import { interval, take, forkJoin, throwError, of, catchError, filter, map, retry } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent {

  observable1$ = of(1,2);
  observable2$ = of(6,7);
  errorObservable2$ = throwError(() => new Error('Errored out'))
  .pipe(
    retry(1),
    catchError(async (err) => console.log(err))
    );

      constructor(){
        this.serviceCollection();
      }

      serviceCollection(){
        forkJoin([this.observable1$, this.observable2$, this.errorObservable2$])
        .pipe(
          map((data) => data.filter((item:any) => item)))
        .subscribe({
          next: (data) => {
            console.log('Inside next', data);
          },
          error: (err) => {
            console.log('Inside err', err);
          },
          complete: () => {
            console.log('on complete');
          }
        })
      }
}

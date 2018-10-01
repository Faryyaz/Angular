import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout( () => { observer.next('First package') } , 2000);
        setTimeout( () => { observer.next('second package') } , 4000);
        setTimeout( () => { 
          // observer.error('This does not work') 
          observer.complete();
        } , 5000);
        setTimeout( () => { 
          // this should not work 
          observer.next('third package');
        } , 6000);
      }
    );

    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error);  },
      () => { console.log( 'completed' ); }
    );

  }

}

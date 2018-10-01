import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberSubsc: Subscription;
  myCustomSubsc: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    this.numberSubsc = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

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

    this. myCustomSubsc = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error);  },
      () => { console.log( 'completed' ); }
    );

  }

  ngOnDestroy() {
    // destroy the observable when leaving this component by changing url for e.g

    this.myCustomSubsc.unsubscribe();
    this.numberSubsc.unsubscribe();
  }

}

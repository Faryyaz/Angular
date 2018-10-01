import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
// import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

}

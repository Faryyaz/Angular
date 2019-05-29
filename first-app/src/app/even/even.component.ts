import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input('evenValue') gameValue: number;
  evenValue = 0;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    if (this.gameValue % 2 === 0) {
      this.evenValue = this.gameValue;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('oddValue') gameValue: number;
  oddValue = 0;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if( this.gameValue % 2 !== 0 ){
      this.oddValue = this.gameValue;
    }
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // this could be changed to changeGameValue = new EventEmitter<number>();
  @Output() changeGameValue = new EventEmitter<{numValue: number}>();
  gameValue = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  start() {
    var self = this;
    this.interval = setInterval(function(){ 
      self.gameValue += 1;
      self.changeGameValue.emit({
        numValue: self.gameValue,
       });
     }, 1000);

     
  }

  pause() {
    clearInterval(this.interval);
  }

}

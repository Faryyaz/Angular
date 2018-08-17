import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuActive = new EventEmitter<string>();
  menuToggled = "recipes";

  constructor() { }

  ngOnInit() {
    this.menuActive.emit(this.menuToggled);
  }

  onChangeMenu(choice: string){
    this.menuToggled = choice;
    this.menuActive.emit(choice);
  }

}


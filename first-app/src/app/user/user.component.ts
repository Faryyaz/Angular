import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = "";

  constructor() { }

  ngOnInit() {
  }

  clearInput() {
    this.userName = "";
  }

  isUserNameSet() {
    return (this.userName === "");
  }

}

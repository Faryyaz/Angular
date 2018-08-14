import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Output() newCustomer = new EventEmitter<{name: string, age: number, gender: string}>();
  newName = '';
  newAge = null;
  newGender = '';

  constructor() { }

  ngOnInit() {
  }

  onAddCustomer() {
    this.newCustomer.emit({
      name: this.newName,
      age: this.newAge,
      gender: this.newGender
    });
  }

}

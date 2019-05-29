import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() customers: [{name: string, age: number, gender: string}];

  constructor() { }

  ngOnInit() {
  }

}

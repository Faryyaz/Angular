import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Fary';
  customers = [
    {name: 'Tim', age: 29, gender: 'Male'},
    {name: 'Tom', age: 29, gender: 'Male'}
  ];
  gameValue = 0;

  onCustomerAdded(customerData: {name: string, age: number, gender: string} ){
    this.customers.push({
      name: customerData.name,
      age: customerData.age,
      gender: customerData.gender
    });
  }

  onValueChanged(gameData: {numValue: number}){
    this.gameValue = gameData.numValue;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //element is of type object notice the ':'
  //The input decorator is used to expose property outside a component
  //We can use an alias with a property like for e.g. srvElement refer to element property
  @Input('srvElement') element: {type: string, name: string, content: string}; 

  constructor() { }

  ngOnInit() {
  }

}

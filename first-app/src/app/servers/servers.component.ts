import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // select by attribute
  // selector: '.app-servers', // select by class
  templateUrl: './servers.component.html',
  // template: `
  //   <app-servers></app-servers> // inline template can be used as well
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

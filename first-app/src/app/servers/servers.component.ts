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

  allowAddServer = false;
  serverStatus = "No Server has been created!";
  serverName = "";
  serverType = "";
  serverCreated = false;
  servers = ['test', 'test 1'];

  constructor() {
    setTimeout( () => {
      this.allowAddServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  createServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = "Server has been created! Name is " + this.serverName;
  }

  updateServer(event: Event) {
    // cast it to html input element because
    // ide doesn't know the type
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

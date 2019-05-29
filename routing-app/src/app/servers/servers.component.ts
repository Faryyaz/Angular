import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServerReload() {
    // this.route loads the current route
    // this.router.navigate tells the component what url to load relative to this url
    // so in this case it will be /servers/servers, which obviously doesnt exist
    // this is only for demonstration.
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}

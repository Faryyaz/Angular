import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onServerLoad(id: number) {
    //complex calculation here before redirecting to the server url
    this.router.navigate(
      ['/servers', id, 'edit'], 
      {
        queryParams: {allowEdit: '1'},
        fragment: 'loading'
      });
  }

}

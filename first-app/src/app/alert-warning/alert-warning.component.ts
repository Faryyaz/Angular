import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.css']
})
export class AlertWarningComponent implements OnInit {
  title = 'Alert warning';
  message = 'This is an alert warning box';

  constructor() { }

  ngOnInit() {
  }

}

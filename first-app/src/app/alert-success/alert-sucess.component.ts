import { Component } from '@angular/core'

@Component({
    selector: 'app-alert-success',
    templateUrl: './alert-success.component.html',
    styleUrls: ['./alert-success.component.css']
})

export class AlertSuccessComponent {
    title = 'Alert success';
    message = 'This is an alert success box';
}
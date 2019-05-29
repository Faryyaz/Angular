import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if ( id === 1) {
          this.user1Activated = true;
        } else {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy() {
    // good practice to implement unsubcribe if ever we navigate away from this component within our app
    this.usersService.userActivated.unsubscribe();
  }


}

import { Component, OnInit } from '@angular/core';
import User from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  user: User;

  ngOnInit() {
    this.user = new User();
    this.user.name = 'Masterdevil';
  }
}

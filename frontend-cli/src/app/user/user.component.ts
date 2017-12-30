import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'gdg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: any;
  users: any[];
  errors: string;

  constructor(public userService: UserService) {
    this.user = {
      displayName: 'Leonardo Patiño',
      userName: '',
      email: ''
    };
    this.users = [
      {
        displayName: 'Leonardo Patiño',
        userName: '',
        email: ''
      },
      {
        displayName: 'Agustin',
        userName: '',
        email: ''
      }, {
        displayName: 'Anahí',
        userName: '',
        email: ''
      }
    ];

  }

  ngOnInit() {
  }

}

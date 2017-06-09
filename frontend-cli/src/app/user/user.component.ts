import { Component, OnInit, AfterViewInit } from '@angular/core';
import {User} from './../shared/user/user.model';
import {UserService} from './../shared/user/user.service';

@Component({
  selector: 'gdg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, AfterViewInit {
    user: User;
    errors: string;

    constructor(private userService: UserService) {
        this.user = {
            firstName: 'Leonardo',
            lastName: 'Patiño',
            password: '1234',
            userName: 'corvellio',
            roleId: 'idprovisorioderolbase',
            createdByUserId: 'idprovisoriodeusuariocreador'
        };
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.userService.getUser({'userName': 'Corvellio'}).then(user => {
            if (user instanceof User) {
                this.user = user;
            }
        }).catch(
            reason => {
                this.errors = reason.toString();
            }
        );
    }

}

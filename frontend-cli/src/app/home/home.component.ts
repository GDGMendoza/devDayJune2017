import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor() {
    this.user = {
      displayName: 'Leonardo Patiño',
      userName: '',
      email: ''
    };
  }

  ngOnInit() {
  }

}

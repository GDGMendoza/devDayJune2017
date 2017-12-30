import { Component } from '@angular/core';

@Component({
  selector: 'gdg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: string;
  title = 'gdg works!';

  constructor(){
    this.name = '';
  }
}

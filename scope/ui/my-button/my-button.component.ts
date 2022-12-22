import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  constructor() {}

  launchAlert(): void {
    alert('You clicked me!')
  }
}

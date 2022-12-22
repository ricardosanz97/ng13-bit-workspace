import { Component } from '@angular/core';

@Component({
  selector: 'ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss']
})
export class NgButtonComponent {
  constructor() {}

  launchAlert(): void {
    alert('You clicked me!')
  }
}

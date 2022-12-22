import { Component, NgModule } from '@angular/core';
import { NgButtonModule } from './ng-button.module';

@Component({
  selector: 'ng-button-composition-cmp',
  template: `NgButton composition: <ng-button></ng-button>`
})
class NgButtonCompositionComponent {}

@NgModule({
  declarations: [NgButtonCompositionComponent],
  imports: [NgButtonModule],
  bootstrap: [NgButtonCompositionComponent]
})
export class NgButtonCompositionModule {}

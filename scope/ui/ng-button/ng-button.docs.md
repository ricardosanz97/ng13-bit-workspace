---
labels: ['angular', 'typescript', 'ng-button']
description: 'A button that shows an alert when click.'
---

# MyButton documentation

Import `NgButtonModule` into your application:

```ts
import { NgButtonModule } from './ng-button.module';

// add it to your module imports
@NgModule({
  imports: [
    NgButtonModule
  ]
})
export class AppModule {}
```

Use `NgButtonComponent` in your templates:

```html
<ng-button></ng-button>
```

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgButtonComponent } from './ng-button.component';
import { NgButtonModule } from './ng-button.module';

describe('MyButtonComponent', () => {
  let component: NgButtonComponent;
  let fixture: ComponentFixture<NgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgButtonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

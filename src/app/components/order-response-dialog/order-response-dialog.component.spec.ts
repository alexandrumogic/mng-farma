import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResponseDialogComponent } from './order-response-dialog.component';

describe('OrderResponseDialogComponent', () => {
  let component: OrderResponseDialogComponent;
  let fixture: ComponentFixture<OrderResponseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderResponseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

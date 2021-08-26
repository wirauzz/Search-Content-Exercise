import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSongsByComponent } from './order-songs-by.component';

describe('OrderSongsByComponent', () => {
  let component: OrderSongsByComponent;
  let fixture: ComponentFixture<OrderSongsByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSongsByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSongsByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

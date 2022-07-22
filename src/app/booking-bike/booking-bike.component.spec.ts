import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBikeComponent } from './booking-bike.component';

describe('BookingBikeComponent', () => {
  let component: BookingBikeComponent;
  let fixture: ComponentFixture<BookingBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

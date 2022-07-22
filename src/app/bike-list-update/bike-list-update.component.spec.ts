import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListUpdateComponent } from './bike-list-update.component';

describe('BikeListUpdateComponent', () => {
  let component: BikeListUpdateComponent;
  let fixture: ComponentFixture<BikeListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeListUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListsComponent } from './bike-lists.component';

describe('BikeListsComponent', () => {
  let component: BikeListsComponent;
  let fixture: ComponentFixture<BikeListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

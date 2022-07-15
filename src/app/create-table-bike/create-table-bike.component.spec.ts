import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTableBikeComponent } from './create-table-bike.component';

describe('CreateTableBikeComponent', () => {
  let component: CreateTableBikeComponent;
  let fixture: ComponentFixture<CreateTableBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTableBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTableBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

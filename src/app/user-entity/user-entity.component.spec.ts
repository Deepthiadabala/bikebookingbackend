import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntityComponent } from './user-entity.component';

describe('UserEntityComponent', () => {
  let component: UserEntityComponent;
  let fixture: ComponentFixture<UserEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

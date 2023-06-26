import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeRoomComponent } from './create-type-room.component';

describe('CreateTypeRoomComponent', () => {
  let component: CreateTypeRoomComponent;
  let fixture: ComponentFixture<CreateTypeRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

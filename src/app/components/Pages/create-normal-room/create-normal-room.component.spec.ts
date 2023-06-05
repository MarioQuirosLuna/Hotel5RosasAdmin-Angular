import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNormalRoomComponent } from './create-normal-room.component';

describe('CreateNormalRoomComponent', () => {
  let component: CreateNormalRoomComponent;
  let fixture: ComponentFixture<CreateNormalRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNormalRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNormalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNormalRoomsComponent } from './manage-normal-rooms.component';

describe('ManageNormalRoomsComponent', () => {
  let component: ManageNormalRoomsComponent;
  let fixture: ComponentFixture<ManageNormalRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNormalRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNormalRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

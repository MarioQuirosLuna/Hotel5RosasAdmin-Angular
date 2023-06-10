import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityModifyComponent } from './facility-modify.component';

describe('FacilityModifyComponent', () => {
  let component: FacilityModifyComponent;
  let fixture: ComponentFixture<FacilityModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

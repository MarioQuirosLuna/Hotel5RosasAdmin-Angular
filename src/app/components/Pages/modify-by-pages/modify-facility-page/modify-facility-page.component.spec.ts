import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFacilityPageComponent } from './modify-facility-page.component';

describe('ModifyFacilityPageComponent', () => {
  let component: ModifyFacilityPageComponent;
  let fixture: ComponentFixture<ModifyFacilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyFacilityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFacilitiesPageComponent } from './modify-facilities-page.component';

describe('ModifyFacilitiesPageComponent', () => {
  let component: ModifyFacilitiesPageComponent;
  let fixture: ComponentFixture<ModifyFacilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyFacilitiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFacilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

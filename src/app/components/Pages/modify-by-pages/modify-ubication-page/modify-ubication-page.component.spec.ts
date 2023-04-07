import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUbicationPageComponent } from './modify-ubication-page.component';

describe('ModifyUbicationPageComponent', () => {
  let component: ModifyUbicationPageComponent;
  let fixture: ComponentFixture<ModifyUbicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUbicationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyUbicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

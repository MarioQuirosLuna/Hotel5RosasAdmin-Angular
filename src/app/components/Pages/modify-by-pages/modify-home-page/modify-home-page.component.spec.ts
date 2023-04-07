import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHomePageComponent } from './modify-home-page.component';

describe('ModifyHomePageComponent', () => {
  let component: ModifyHomePageComponent;
  let fixture: ComponentFixture<ModifyHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

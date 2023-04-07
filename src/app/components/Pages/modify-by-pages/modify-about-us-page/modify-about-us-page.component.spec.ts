import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAboutUsPageComponent } from './modify-about-us-page.component';

describe('ModifyAboutUsPageComponent', () => {
  let component: ModifyAboutUsPageComponent;
  let fixture: ComponentFixture<ModifyAboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAboutUsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

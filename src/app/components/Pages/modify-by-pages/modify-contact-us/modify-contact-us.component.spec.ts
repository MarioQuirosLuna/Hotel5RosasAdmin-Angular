import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContactUsComponent } from './modify-contact-us.component';

describe('ModifyContactUsComponent', () => {
  let component: ModifyContactUsComponent;
  let fixture: ComponentFixture<ModifyContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

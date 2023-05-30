import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPromotionComponent } from './modify-promotion.component';

describe('ModifyPromotionComponent', () => {
  let component: ModifyPromotionComponent;
  let fixture: ComponentFixture<ModifyPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

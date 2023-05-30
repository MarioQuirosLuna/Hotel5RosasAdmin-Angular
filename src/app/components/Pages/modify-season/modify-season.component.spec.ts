import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySeasonComponent } from './modify-season.component';

describe('ModifySeasonComponent', () => {
  let component: ModifySeasonComponent;
  let fixture: ComponentFixture<ModifySeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

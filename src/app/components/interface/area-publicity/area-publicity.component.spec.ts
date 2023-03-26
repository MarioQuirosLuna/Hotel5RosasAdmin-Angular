import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPublicityComponent } from './area-publicity.component';

describe('AreaPublicityComponent', () => {
  let component: AreaPublicityComponent;
  let fixture: ComponentFixture<AreaPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPublicityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

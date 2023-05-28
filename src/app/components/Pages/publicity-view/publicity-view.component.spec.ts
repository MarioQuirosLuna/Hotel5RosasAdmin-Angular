import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityViewComponent } from './publicity-view.component';

describe('PublicityViewComponent', () => {
  let component: PublicityViewComponent;
  let fixture: ComponentFixture<PublicityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicityViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

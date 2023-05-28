import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityModifyComponent } from './publicity-modify.component';

describe('PublicityModifyComponent', () => {
  let component: PublicityModifyComponent;
  let fixture: ComponentFixture<PublicityModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicityModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicityModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

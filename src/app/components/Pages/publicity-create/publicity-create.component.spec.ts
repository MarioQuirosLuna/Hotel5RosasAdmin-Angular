import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityCreateComponent } from './publicity-create.component';

describe('PublicityCreateComponent', () => {
  let component: PublicityCreateComponent;
  let fixture: ComponentFixture<PublicityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicityCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

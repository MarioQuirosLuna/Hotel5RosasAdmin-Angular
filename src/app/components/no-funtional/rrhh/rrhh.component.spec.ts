import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRHHComponent } from './rrhh.component';

describe('RRHHComponent', () => {
  let component: RRHHComponent;
  let fixture: ComponentFixture<RRHHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RRHHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RRHHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

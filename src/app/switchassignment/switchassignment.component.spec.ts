import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchassignmentComponent } from './switchassignment.component';

describe('SwitchassignmentComponent', () => {
  let component: SwitchassignmentComponent;
  let fixture: ComponentFixture<SwitchassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

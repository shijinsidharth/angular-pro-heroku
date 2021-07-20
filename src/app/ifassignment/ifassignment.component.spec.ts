import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfassignmentComponent } from './ifassignment.component';

describe('IfassignmentComponent', () => {
  let component: IfassignmentComponent;
  let fixture: ComponentFixture<IfassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

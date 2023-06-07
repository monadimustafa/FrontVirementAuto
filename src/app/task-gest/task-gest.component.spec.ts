import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGestComponent } from './task-gest.component';

describe('TaskGestComponent', () => {
  let component: TaskGestComponent;
  let fixture: ComponentFixture<TaskGestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskGestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

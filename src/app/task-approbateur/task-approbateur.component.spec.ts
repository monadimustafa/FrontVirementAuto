import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApprobateurComponent } from './task-approbateur.component';

describe('TaskApprobateurComponent', () => {
  let component: TaskApprobateurComponent;
  let fixture: ComponentFixture<TaskApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

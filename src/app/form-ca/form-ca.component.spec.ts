import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCaComponent } from './form-ca.component';

describe('FormCaComponent', () => {
  let component: FormCaComponent;
  let fixture: ComponentFixture<FormCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

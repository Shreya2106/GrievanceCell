import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusByIdComponent } from './edit-status-by-id.component';

describe('EditStatusByIdComponent', () => {
  let component: EditStatusByIdComponent;
  let fixture: ComponentFixture<EditStatusByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatusByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatusByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

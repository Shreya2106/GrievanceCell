import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditStatusComponent } from './admin-edit-status.component';

describe('AdminEditStatusComponent', () => {
  let component: AdminEditStatusComponent;
  let fixture: ComponentFixture<AdminEditStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

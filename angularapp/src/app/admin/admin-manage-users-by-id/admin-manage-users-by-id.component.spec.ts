import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUsersByIdComponent } from './admin-manage-users-by-id.component';

describe('AdminManageUsersByIdComponent', () => {
  let component: AdminManageUsersByIdComponent;
  let fixture: ComponentFixture<AdminManageUsersByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageUsersByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageUsersByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

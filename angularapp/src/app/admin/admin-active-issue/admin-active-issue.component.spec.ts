import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveIssueComponent } from './admin-active-issue.component';

describe('AdminActiveIssueComponent', () => {
  let component: AdminActiveIssueComponent;
  let fixture: ComponentFixture<AdminActiveIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActiveIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

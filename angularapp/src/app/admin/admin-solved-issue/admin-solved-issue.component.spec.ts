import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolvedIssueComponent } from './admin-solved-issue.component';

describe('AdminSolvedIssueComponent', () => {
  let component: AdminSolvedIssueComponent;
  let fixture: ComponentFixture<AdminSolvedIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolvedIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolvedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

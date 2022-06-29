import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSolvedIssueComponent } from './employee-solved-issue.component';

describe('EmployeeSolvedIssueComponent', () => {
  let component: EmployeeSolvedIssueComponent;
  let fixture: ComponentFixture<EmployeeSolvedIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSolvedIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSolvedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

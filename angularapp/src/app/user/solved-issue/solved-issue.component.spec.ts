import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedIssueComponent } from './solved-issue.component';

describe('SolvedIssueComponent', () => {
  let component: SolvedIssueComponent;
  let fixture: ComponentFixture<SolvedIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvedIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

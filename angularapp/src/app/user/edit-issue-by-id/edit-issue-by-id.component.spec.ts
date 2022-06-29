import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIssueByIdComponent } from './edit-issue-by-id.component';

describe('EditIssueByIdComponent', () => {
  let component: EditIssueByIdComponent;
  let fixture: ComponentFixture<EditIssueByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIssueByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIssueByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

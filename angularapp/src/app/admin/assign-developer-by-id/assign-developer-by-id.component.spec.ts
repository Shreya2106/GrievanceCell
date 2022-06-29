import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDeveloperByIdComponent } from './assign-developer-by-id.component';

describe('AssignDeveloperByIdComponent', () => {
  let component: AssignDeveloperByIdComponent;
  let fixture: ComponentFixture<AssignDeveloperByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDeveloperByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDeveloperByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

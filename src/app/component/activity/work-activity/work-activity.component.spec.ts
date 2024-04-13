import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkActivityComponent } from './work-activity.component';

describe('WorkActivityComponent', () => {
  let component: WorkActivityComponent;
  let fixture: ComponentFixture<WorkActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

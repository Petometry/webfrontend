import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForagingActivityComponent } from './foraging-activity.component';

describe('ForagingActivityComponent', () => {
  let component: ForagingActivityComponent;
  let fixture: ComponentFixture<ForagingActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForagingActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForagingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

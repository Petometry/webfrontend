import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherActivityComponent } from './another-activity.component';

describe('AnotherActivityComponent', () => {
  let component: AnotherActivityComponent;
  let fixture: ComponentFixture<AnotherActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForagingScreenComponent } from './foraging-screen.component';

describe('ForagingScreenComponent', () => {
  let component: ForagingScreenComponent;
  let fixture: ComponentFixture<ForagingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForagingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForagingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

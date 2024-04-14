import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartForagingComponent } from './start-foraging.component';

describe('StartForagingComponent', () => {
  let component: StartForagingComponent;
  let fixture: ComponentFixture<StartForagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartForagingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartForagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

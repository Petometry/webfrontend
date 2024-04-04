import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetoverviewComponent } from './petoverview.component';

describe('PetoverviewComponent', () => {
  let component: PetoverviewComponent;
  let fixture: ComponentFixture<PetoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetoverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

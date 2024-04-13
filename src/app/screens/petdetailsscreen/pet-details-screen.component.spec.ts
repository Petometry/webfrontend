import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsScreenComponent } from './pet-details-screen.component';

describe('PetDetailsScreenComponent', () => {
  let component: PetDetailsScreenComponent;
  let fixture: ComponentFixture<PetDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDetailsScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

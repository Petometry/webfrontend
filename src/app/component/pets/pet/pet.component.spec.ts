import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetComponent } from './pet.component';

describe('PetoverviewComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

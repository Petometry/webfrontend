import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsshopComponent } from './petsshop.component';

describe('PetsshopComponent', () => {
  let component: PetsshopComponent;
  let fixture: ComponentFixture<PetsshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

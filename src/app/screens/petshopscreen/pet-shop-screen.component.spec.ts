import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopScreenComponent } from './pet-shop-screen.component';

describe('PetsshopComponent', () => {
  let component: PetShopScreenComponent;
  let fixture: ComponentFixture<PetShopScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetShopScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetShopScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

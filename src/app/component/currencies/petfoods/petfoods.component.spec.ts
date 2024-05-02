import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetfoodsComponent } from './petfoods.component';

describe('PetfoodsComponent', () => {
  let component: PetfoodsComponent;
  let fixture: ComponentFixture<PetfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetfoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

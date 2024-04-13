import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsScreenComponent } from './pets-screen.component';

describe('PetsComponent', () => {
  let component: PetsScreenComponent;
  let fixture: ComponentFixture<PetsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

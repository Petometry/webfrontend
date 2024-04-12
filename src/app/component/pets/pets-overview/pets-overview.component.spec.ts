import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsOverviewComponent } from './pets-overview.component';

describe('PetsOverviewComponent', () => {
  let component: PetsOverviewComponent;
  let fixture: ComponentFixture<PetsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

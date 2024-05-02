import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocoinsComponent } from './geocoins.component';

describe('CurrenciesComponent', () => {
  let component: GeocoinsComponent;
  let fixture: ComponentFixture<GeocoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeocoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeocoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

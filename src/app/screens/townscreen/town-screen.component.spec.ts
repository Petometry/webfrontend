import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownScreenComponent } from './town-screen.component';

describe('TownComponent', () => {
  let component: TownScreenComponent;
  let fixture: ComponentFixture<TownScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

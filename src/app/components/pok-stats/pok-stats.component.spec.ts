import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokStatsComponent } from './pok-stats.component';

describe('Pokemon Stats Component', () => {
  let component: PokStatsComponent;
  let fixture: ComponentFixture<PokStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PokStatsComponent ]
    })
    fixture = TestBed.createComponent(PokStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});

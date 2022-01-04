import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokLanguageComponent } from './pok-language.component';

describe('PokLanguageComponent', () => {
  let component: PokLanguageComponent;
  let fixture: ComponentFixture<PokLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PokLanguageComponent ]
    })
    fixture = TestBed.createComponent(PokLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

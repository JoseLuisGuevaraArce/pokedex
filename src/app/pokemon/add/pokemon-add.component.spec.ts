import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PokemonAddComponent } from './pokemon-add.component';

describe('Pokemon Add Component', () => {
  let component: PokemonAddComponent,
    fixture: ComponentFixture<PokemonAddComponent>,
    fb: FormBuilder

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [PokemonAddComponent],
        providers: [
          {provide: FormBuilder}
        ]
      });
      fixture = TestBed.createComponent(PokemonAddComponent);
      component = fixture.componentInstance;
      fb = TestBed.inject(FormBuilder);
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });
});
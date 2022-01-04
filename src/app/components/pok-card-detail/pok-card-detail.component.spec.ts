import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetail } from 'src/app/utils/types';
import { PokCardDetailComponent } from './pok-card-detail.component';

const bulbasaur: PokemonDetail = {
  'abilities': [],
  'base_experience': 64,
  'forms': [],
  'height': 7,
  'id': 1,
  'is_default': true,
  'location_area_encounters': 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  'name': 'bulbasaur',
  'order': 1,
  'species': {
      'name': 'bulbasaur',
      'url': 'https://pokeapi.co/api/v2/pokemon-species/1/'
  },
  'stats': [],
  'types': [
      {
          'type': {
              'name': 'grass',
              'url': 'https://pokeapi.co/api/v2/type/12/'
          }
      },
      {
          'type': {
              'name': 'poison',
              'url': 'https://pokeapi.co/api/v2/type/4/'
          }
      }
  ],
  'weight': 69
};

describe('PokCardDetailComponent', () => {
  let component: PokCardDetailComponent,
    fixture: ComponentFixture<PokCardDetailComponent>;
  const imageUri = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PokCardDetailComponent ]
    });
    fixture = TestBed.createComponent(PokCardDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get image', () => {
    component.pokemonDetail = bulbasaur;
    expect(component.getImageUri()).toBe(imageUri);
  });

  it('should get color green for type grass', () => {
    const color = component.getColorByType('grass');
    expect(color).toEqual('#7AC74C');
  });
});

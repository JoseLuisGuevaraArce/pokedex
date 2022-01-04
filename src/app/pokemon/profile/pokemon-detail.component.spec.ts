import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/utils/types';

import { PokemonDetailComponent } from './pokemon-detail.component';

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

let MockPokRouter = {
  snapshot: {
    data: {
      details: [{...bulbasaur}, {}]
    }
  }
};

describe('Pokemon card test', () => {
  let component: PokemonDetailComponent,
    fixture: ComponentFixture<PokemonDetailComponent>,
    route: ActivatedRoute,
    location: Location;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [PokemonDetailComponent],
        providers: [
          {provide: ActivatedRoute, useValue: MockPokRouter}
        ]
      });
      fixture = TestBed.createComponent(PokemonDetailComponent);
      component = fixture.componentInstance;
      route = TestBed.inject(ActivatedRoute);
      location = TestBed.inject(Location);
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });
});
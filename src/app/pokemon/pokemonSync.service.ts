import { Injectable } from '@angular/core';

import { Pokemon } from '../utils/types';
import { Subject } from 'rxjs';

@Injectable()
export class PokemonSyncService {

  private selectedGenerationsSource = new Subject<Pokemon[]>();
  private filterPokemosSource = new Subject<Pokemon[]>();

  generations$ = this.selectedGenerationsSource.asObservable();
  filterPokemosConfirmed$ = this.filterPokemosSource.asObservable();

  generationSelected(pokemons: Pokemon[]) {
    this.selectedGenerationsSource.next(pokemons);
  }

  filterPokemons(pokemons: Pokemon[]) {
    this.filterPokemosSource.next(pokemons);
  }
}
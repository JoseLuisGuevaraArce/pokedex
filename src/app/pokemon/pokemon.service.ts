import { Injectable } from '@angular/core';
import { Pokemon } from '../utils/types';
import { dataPokemons } from './mockdata';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor() { }

  getPokemonList(): Array<Pokemon> {
    return dataPokemons.results;
  }

  getPokemonImageUri(id: number): string {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}

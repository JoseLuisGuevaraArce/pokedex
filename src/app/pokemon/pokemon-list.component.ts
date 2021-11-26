import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';

import { Pokemon } from '../utils/types';
import { pokemonColorMap } from './pokemonColorHash';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})

export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  private pokemonList: Pokemon[] = [];
  search: string = '';
  offset: number = 0;
  limit: number = 20;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons():void {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe((payload: Array<Pokemon>) => {
      this.pokemonList = payload;
      this.pokemons = this.pokemonList;
    });
  }

  getImageUri(pokemon: Pokemon): string {
    return this.pokemonService.getPokemonImageUri(this.getPokemonIdFromUrl(pokemon.url));
  }
  
  getPokemonColor(pokemon: Pokemon): string {
    return pokemonColorMap[this.getPokemonIdFromUrl(pokemon.url)];
  }

  getTextColor(pokemon: Pokemon): string {
    const pokemonColor = this.getPokemonColor(pokemon);
    
    switch (pokemonColor) {
      case '#fbf6f6':
      case '#f0f060e6':
        return 'black';
      default:
        return 'white';
    }
  }
  
  getPokemonIdFromUrl(url: string): number {
    const parseUrl = url.split('/'),
    id = parseUrl[parseUrl.length - 2];
    return +id;
  }

  searchPokemons():void {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(this.search));
  }

  nextPokemons(): void {
    this.getPokemons()
  }
}

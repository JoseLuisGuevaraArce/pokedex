import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../utils/types';

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

  searchPokemons():void {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(this.search));
  }

  nextPokemons(): void {
    this.getPokemons()
  }
}

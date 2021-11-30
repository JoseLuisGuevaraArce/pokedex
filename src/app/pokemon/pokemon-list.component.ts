import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Generation, Pokemon } from '../utils/types';


@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})

export class PokemonListComponent implements OnInit {

  offset: number = 0;
  opened = true;
  limit: number = 50;
  pokemons: Pokemon[] = [];
  private pokemonList: Pokemon[] = [];

  generations: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getGenerations();
  }

  getPokemons():void {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe((payload: Array<Pokemon>) => {
      this.pokemonList = payload;
      this.pokemons = this.pokemonList;
    });
  }

  getGenerations():void {
    this.pokemonService.getGenerationList().subscribe((payload: Array<Generation>) => {
      this.generations = payload.map((gen: any) => {
        return {code: gen.name}
      });
    });
  }

  searchPokemons(search: string):void {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(search));
  }

  selectGeneration(value: string) {
    this.pokemonService.getGeneration(this.getGenerationIndex(value))
      .subscribe((payload: Array<Pokemon>) => {
        this.pokemonList = payload;
        this.pokemons = this.pokemonList;
      });
  }

  getGenerationIndex(value: string): number {
    return [
      'generation-i',
      'generation-ii',
      'generation-iii',
      'generation-iv',
      'generation-v',
      'generation-vi',
      'generation-vii',
      'generation-viii'
    ].findIndex(code => code === value) + 1;
  }

  nextPokemons(): void {
    this.getPokemons()
  }
}

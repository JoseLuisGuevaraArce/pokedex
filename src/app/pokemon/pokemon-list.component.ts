import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from '../utils/types';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less'],
})

export class PokemonListComponent implements OnInit {

  generations: any[] = [];
  opened = true;
  pokemons: Pokemon[] = [];
  private pokemonList: Pokemon[] = [];

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemons = this.router.snapshot.data.pokemons;
  }
  
  showGeneration(pokemons: Pokemon[]): void {
    this.pokemons = pokemons;
  }

  searchPokemons(search: string):void {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(search));
  }
}

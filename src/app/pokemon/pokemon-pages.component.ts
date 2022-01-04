import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Pokemon, Generic } from '../utils/types';
import { PokemonSyncService } from './pokemonSync.service';

@Component({
  selector: 'app-pokemon-pages',
  templateUrl: './pokemon-pages.component.html',
  styleUrls: ['./pokemon-pages.component.less'],
  providers: [PokemonSyncService]
})
export class PokemonPagesComponent implements OnInit {

  generations: Generic[] = [];
  opened = true;
  pokemons: Pokemon[] = [];
  private pokemonList: Pokemon[] = [];

  constructor(
    private pokemonSync: PokemonSyncService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pokemons = this.router.snapshot.data.pokemons;
    this.pokemons = pokemons[0];
    this.generations = pokemons[1];
    this.pokemonList = this.pokemons;
  }

  showGeneration(pokemons: Pokemon[]): void {
    this.pokemons = pokemons;
    this.pokemonSync.generationSelected(this.pokemons);
  }

  searchPokemons(search: string):void {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(search));
    this.pokemonSync.filterPokemons(this.pokemons);
  }
}

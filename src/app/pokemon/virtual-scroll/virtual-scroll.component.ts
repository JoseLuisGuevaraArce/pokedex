import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { getPokemonColor, getPokemonIdFromUrl, getPokemonImageUri } from '../pokemon-helper';
import { Pokemon } from 'src/app/utils/types';
import { Subscription } from 'rxjs';
import { PokemonSyncService } from '../pokemonSync.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.less']
})

export class VirtualScrollComponent implements OnInit, OnDestroy {

  @Input() pokemons: Array<Pokemon> = [];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonSync: PokemonSyncService
  ) {
    this.subscription = pokemonSync.generations$.subscribe(pokemons => this.pokemons = pokemons);
    this.subscription = pokemonSync.filterPokemosConfirmed$.subscribe(pokemons => this.pokemons = pokemons);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const pokemons = this.route.snapshot.data.pokemons;
    this.pokemons = pokemons[0];
  }

  getColor(pokemon: Pokemon): string {
    return getPokemonColor(pokemon);
  }

  getImageUri(pokemon: Pokemon): string {
    return getPokemonImageUri(getPokemonIdFromUrl(pokemon.url));
  }

  goToPokemonDetails(pokemon: Pokemon) {
    const id = getPokemonIdFromUrl(pokemon.url);
    this.router.navigate([`/pokedex/${id}`]);
  }
}

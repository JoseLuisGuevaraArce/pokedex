import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Pokemon } from 'src/app/utils/types';
import { pokemonColorMap } from 'src/app/pokemon/pokemonColorHash';
import { PokemonService } from 'src/app/pokemon/pokemon.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VirtualScrollComponent {

  @Input() pokemons: Array<Pokemon> = [];

  constructor(private pokemonService: PokemonService) { }

  getPokemonColor(pokemon: Pokemon): string {
    return pokemonColorMap[this.getPokemonIdFromUrl(pokemon.url)];
  }

  getPokemonIdFromUrl(url: string): number {
    const parseUrl = url.split('/'),
    id = parseUrl[parseUrl.length - 2];
    return +id;
  }

  getImageUri(pokemon: Pokemon): string {
    return this.pokemonService.getPokemonImageUri(this.getPokemonIdFromUrl(pokemon.url));
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
}

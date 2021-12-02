import { Component, Input } from "@angular/core";
import { PokemonService } from "src/app/pokemon/pokemon.service";
import { pokemonColorMap } from "src/app/pokemon/pokemonColorHash";
import { Pokemon } from "src/app/utils/types";

@Component({
  selector: 'pok-card',
  templateUrl: './pok-card.component.html',
  styleUrls: ['./pok-card.component.less']
})

export class PokCardComponent {

  @Input() pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  getImageUri(pokemon?: Pokemon): string {
    if (!pokemon) {
      return '';
    }

    return this.pokemonService.getPokemonImageUri(this.getPokemonIdFromUrl(pokemon.url));
  }

  getPokemonIdFromUrl(url: string): string {
    const parseUrl = url.split('/'),
    id = parseUrl[parseUrl.length - 2];
    return id;
  }

  getTextColor(pokemon?: Pokemon): string {
    if (!pokemon) {
      return '';
    }
    const pokemonColor = this.getPokemonColor(pokemon);
    
    switch (pokemonColor) {
      case '#fbf6f6':
      case '#f0f060e6':
        return 'black';
      default:
        return 'white';
    }
  }

  getPokemonColor(pokemon: Pokemon): string {
    return pokemonColorMap[this.getPokemonIdFromUrl(pokemon.url)];
  }
}
import { Component, Input } from "@angular/core";

import {
  getPokemonIdFromUrl,
  getPokemonImageUri,
  getRightTextColor} from "src/app/pokemon/pokemon-helper";
import { Pokemon } from "src/app/utils/types";

@Component({
  selector: 'pok-card',
  templateUrl: './pok-card.component.html',
  styleUrls: ['./pok-card.component.less']
})

export class PokCardComponent {

  @Input() pokemon!: Pokemon;

  constructor() {}

  getImageUri(): string {
    return getPokemonImageUri(getPokemonIdFromUrl(this.pokemon.url));
  }

  getColorText(): string {
    return getRightTextColor(this.pokemon);
  }
}
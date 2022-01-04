import { Component, Input } from '@angular/core';

import { getPokemonColor, getPokemonImageUri } from 'src/app/pokemon/pokemon-helper';
import { pokemonTypeColorMap } from 'src/app/pokemon/pokemonColorHash';
import { Pokemon, PokemonDetail } from 'src/app/utils/types';

@Component({
  selector: 'pok-card-detail',
  templateUrl: './pok-card-detail.component.html',
  styleUrls: ['./pok-card-detail.component.less']
})
export class PokCardDetailComponent {

  @Input() pokemonDetail?: PokemonDetail;

  constructor() { }

  getImageUri() {
    return getPokemonImageUri(this.pokemonDetail!.id);
  }

  getColorByType(type: string): string {
    return pokemonTypeColorMap[type];
  }

  getColor(pokemon: Pokemon): string {
    return getPokemonColor(pokemon);
  }
}

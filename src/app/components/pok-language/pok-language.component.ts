import { Component, Input } from '@angular/core';
import { pokemonImageHash } from 'src/app/pokemon/pokemonGameImgHash';
import { Game, Language, PokemonSpecies } from 'src/app/utils/types';

@Component({
  selector: 'pok-language',
  templateUrl: './pok-language.component.html',
  styleUrls: ['./pok-language.component.less']
})
export class PokLanguageComponent {

  @Input() species!: PokemonSpecies;
  gameDescription?: Array<Game>;
  language: string = 'en';

  constructor() { }

  refreshDescriptions() {
    this.gameDescription = this.filterDescriptionsByLanguage(this.species);
  }

  filterDescriptionsByLanguage(species: PokemonSpecies): Array<Game> {
    return species.flavor_text_entries.filter(item => {
      return item.language.name === this.language
    })
  }

  getGameImg(name: string) {
    return pokemonImageHash[name];
  }

  getNameBylanguage() {
    if (this.species) {
      let found: Language | undefined =  this.species.names.find(item => item.language.name === this.language);
      return found?.name || 'unknown';
    }
    return '';
  }
}

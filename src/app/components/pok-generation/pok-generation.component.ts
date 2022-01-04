import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PokemonService } from 'src/app/pokemon/pokemon.service';
import { Generation, Pokemon, Generic } from 'src/app/utils/types';

const GENERATION_CODES: Record<string, string> = {
  'generation-i': 'Generation 1',
  'generation-ii': 'Generation 2',
  'generation-iii': 'Generation 3',
  'generation-iv': 'Generation 4',
  'generation-v': 'Generation 5',
  'generation-vi': 'Generation 6',
  'generation-vii': 'Generation 7',
  'generation-viii': 'Generation 8'
}

@Component({
  selector: 'pok-generation',
  templateUrl: './pok-generation.component.html',
  styleUrls: ['./pok-generation.component.less']
})
export class PokGenerationComponent implements OnInit {

  @Input() generations: Array<Generic> = [];
  @Output() onShowGeneration = new EventEmitter<Pokemon[]>();
  customGeneration: Array<Generation> = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.customGeneration = this.generations.map(gen => {
      return {code: gen.name, text: GENERATION_CODES[gen.name]}
    });
  }

  selectGeneration(value: string): void {
    this.pokemonService.getGeneration(this.getGenerationIndex(GENERATION_CODES[value]))
      .subscribe(payload => this.onShowGeneration.emit(payload));
  }

  getGenerationIndex(code: string): string {
    return code.charAt(code.length - 1);
  }
}

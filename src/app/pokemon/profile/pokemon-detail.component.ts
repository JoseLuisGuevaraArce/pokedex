import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetail, PokemonSpecies } from 'src/app/utils/types';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})

export class PokemonDetailComponent implements OnInit {
  pokemonDetail?: PokemonDetail;
  pokemonSpecies?: PokemonSpecies;
  panelOpenState = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const details = this.route.snapshot.data.details;
    this.pokemonDetail = details[0] || {};
    this.pokemonSpecies = details[1] || {};
  }
}
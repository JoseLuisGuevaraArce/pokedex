import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { PokemonDetail } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';
import { pokemonTypeColorMap } from "src/app/pokemon/pokemonColorHash";
import { pokemonImageHash } from '../pokemonGameImgHash';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})

export class PokemonDetailComponent implements OnInit, OnDestroy {
  id: string = '1';
  pokemonDetail?: PokemonDetail;
  pokemonSpecies?: any;
  gameDescription?: any;
  language: string = 'en';

  pokemonDetailSubscription?: Subscription;
  pokemonSpeciesSubscription?: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.pokemonDetail = this.route.snapshot.data.pokemons;
    this.pokemonSpecies = this.route.snapshot.data.species;
  }

  refreshDescriptions() {
    this.gameDescription = this.filterDescriptionsByLanguage(this.pokemonSpecies);
  }

  ngOnDestroy(): void {
    this.pokemonDetailSubscription?.unsubscribe();
    this.pokemonSpeciesSubscription?.unsubscribe();
  }

  getImageUri() {
    return this.pokemonService.getPokemonImageUri(this.pokemonDetail!.id);
  }

  filterDescriptionsByLanguage(species: any): void {
    return species.flavor_text_entries.filter((item: any) => {
      return item.language.name === this.language
    })
  }

  goBack(): void {
    this.location.back();
  }

  getColorByType(type: string): string {
    return pokemonTypeColorMap[type];
  }

  getGameImg(name: string) {
    return pokemonImageHash[name];
  }

  getNameBylanguage(names: any[]) {
    const found =  names.find((item: any) => item.language.name === this.language)
    return found?.name || 'unknown';
  }
}
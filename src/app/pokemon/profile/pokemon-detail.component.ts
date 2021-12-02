import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonDetail } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})

export class PokemonDetailComponent implements OnInit, OnDestroy {
  id: string = '1';
  pokemonDetail?: PokemonDetail;
  pokemonDetailSubscription?: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonDetailSubscription = this.pokemonService.getPokemon(this.id)
      .subscribe(pokemonDetail => this.pokemonDetail = pokemonDetail)
  }

  ngOnDestroy(): void {
    this.pokemonDetailSubscription?.unsubscribe();
  }

  getImageUri() {
    return this.pokemonService.getPokemonImageUri(this.id);
  }

  goBack(): void {
    this.location.back();
  }
}
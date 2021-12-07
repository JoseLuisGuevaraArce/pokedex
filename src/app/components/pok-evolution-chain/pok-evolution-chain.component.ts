import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/pokemon/pokemon.service';

@Component({
  selector: 'pok-evolution-chain',
  templateUrl: './pok-evolution-chain.component.html',
  styleUrls: ['./pok-evolution-chain.component.less']
})
export class PokEvolutionChainComponent implements OnInit, OnDestroy {

  @Input() evolutionChain?: any;
  evolution: any[] = [];
  pokemons: any[] = [];
  pokemonEvolutionSubscription?: Subscription;
  pokemonSubscription?: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAsyncData();
  }

  async loadAsyncData() {
    await this.loadEvolutionChain();
    await this.loadPokemonsData();
  }

  loadEvolutionChain() {
    return new Promise(resolve => {
      if (this.evolutionChain) {
        const evolutionId = this.getIdentifier(this.evolutionChain.url);
        this.pokemonEvolutionSubscription = this.pokemonService.getPokemonEvolution(evolutionId)
          .subscribe(evolution => {
            this.recursiveMap(evolution);
            resolve(this.evolution);
          });
      }
    });
  }

  loadPokemonsData() {
    const observable = forkJoin(this.engineServiceCall());

    observable.subscribe({
      next: value => {
        this.pokemons = value;
      }
    })
  }

  goToPokemon(id:string) {
    this.router.navigate([`/pokedex/${id}`])
      .then(() => {
        window.location.reload();
      });
  }

  engineServiceCall() {
    const func: any = [];
    this.evolution.forEach(item => {
      func.push(this.pokemonService.getPokemon(this.getIdentifier(item.url)))
    })

    return func;
  }

  getImageUri(id: string) {
    return this.pokemonService.getPokemonImageUri(id);
  }

  recursiveMap(evolution: any) {
    if (evolution.evolves_to.length === 0) {
      this.evolution.push(evolution.species);
      return;
    }

    this.evolution.push(evolution.species);
    this.recursiveMap(evolution.evolves_to[0])
  }

  getIdentifier(url: string): string {
    const pathSplit = url.substr(url.indexOf('v2') + 3),
      path = pathSplit.substr(0, pathSplit.indexOf('/'));
    return url.substring(url.indexOf(path) + path.length + 1).replace('/', '');
  }

  ngOnDestroy(): void {
    this.pokemonEvolutionSubscription?.unsubscribe();
  }

}

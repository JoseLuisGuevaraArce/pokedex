import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { Generation, Pokemon } from "../../utils/types";
import { PokemonService } from "../../pokemon/pokemon.service";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokemonsResolverService implements Resolve<[Array<Pokemon>, Array<Generation>]> {
  constructor(private pokemonService: PokemonService) {}

  resolve() {
    return forkJoin([
      this.pokemonService.getPokemonList(),
      this.pokemonService.getGenerationList()
    ]);
  }
}
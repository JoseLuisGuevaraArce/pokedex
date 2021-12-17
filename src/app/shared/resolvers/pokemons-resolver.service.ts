import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { Pokemon } from "../../utils/types";
import { PokemonService } from "../../pokemon/pokemon.service";

@Injectable({
  providedIn: 'root'
})

export class PokemonsResolverService implements Resolve<Array<Pokemon>> {
  constructor(private pokemonService: PokemonService) {}

  resolve() {
    return this.pokemonService.getPokemonList();
  }
}
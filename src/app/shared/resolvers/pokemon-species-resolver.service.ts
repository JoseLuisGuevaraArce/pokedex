import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { PokemonSpecies } from "src/app/utils/types";
import { PokemonService } from "../../pokemon/pokemon.service";

@Injectable({
  providedIn: 'root'
})

export class PokemonSpeciesResolverService implements Resolve<PokemonSpecies> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.pokemonService.getPokemonSpecies(route.paramMap.get('id') || '1');
  }
}
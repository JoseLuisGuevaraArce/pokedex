import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonResolverService } from "../shared/resolvers/pokemon-resolver.service";
import { PokemonsResolverService } from "../shared/resolvers/pokemons-resolver.service";

import { PokemonDetailComponent } from "./profile/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonSpeciesResolverService } from "../shared/resolvers/pokemon-species-resolver.service";

const routes: Routes = [
  {
    path: 'pokedex/:id',
    component: PokemonDetailComponent,
    resolve: {
      pokemons: PokemonResolverService,
      species: PokemonSpeciesResolverService
    }
  },
  {
    path: 'pokedex',
    component: PokemonListComponent,
    resolve: {
      pokemons: PokemonsResolverService
    }
  },
  {path: '', redirectTo: 'pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule {}
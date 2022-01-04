import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonResolverService } from "../shared/resolvers/pokemon-resolver.service";
import { PokemonsResolverService } from "../shared/resolvers/pokemons-resolver.service";

import { PokemonDetailComponent } from "./profile/pokemon-detail.component";
import { PokemonPagesComponent } from "./pokemon-pages.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokemonPagesComponent,
    resolve: {
      pokemons: PokemonsResolverService
    },
    children: [
      {
        path: '',
        component: VirtualScrollComponent,
      },
      {
        path: ':id',
        component: PokemonDetailComponent,
        resolve: {
          details: PokemonResolverService
        }
      }
    ]
  },
  {path: '', redirectTo: 'pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule {}
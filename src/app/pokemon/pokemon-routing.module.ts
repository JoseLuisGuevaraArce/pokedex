import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonResolverService } from "../shared/resolvers/pokemon-resolver.service";
import { PokemonsResolverService } from "../shared/resolvers/pokemons-resolver.service";

import { PokemonAddComponent } from "./add/pokemon-add.component";
import { PokemonDetailComponent } from "./profile/pokemon-detail.component";
import { PokemonPagesComponent } from "./pokemon-pages.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { ListComponent } from "../items/list/list.component";

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
        path: 'items',
        component: ListComponent,
      },
      {
        path: 'add-pokemon',
        component: PokemonAddComponent
      },
      {
        path: ':id',
        component: PokemonDetailComponent,
        resolve: {
          details: PokemonResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule {}
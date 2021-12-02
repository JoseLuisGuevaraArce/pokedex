import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonDetailComponent } from "./profile/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list.component";

const routes: Routes = [
  {path: 'pokedex/:id', component: PokemonDetailComponent},
  {path: 'pokedex', component: PokemonListComponent},
  {path: '', redirectTo: 'pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule {}
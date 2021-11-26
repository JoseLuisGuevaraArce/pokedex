import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { NotFoundComponent } from '../commons/not-found.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})

export class PokemonModule { }

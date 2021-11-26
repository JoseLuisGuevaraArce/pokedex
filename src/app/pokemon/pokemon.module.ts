import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { NotFoundComponent } from '../commons/not-found.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    NotFoundComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})

export class PokemonModule { }

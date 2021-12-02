import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { NotFoundComponent } from '../commons/not-found.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { SharedModule } from '../shared/shared.module';
import { CommonsModule } from '../commons/commons.module';
import { PokemonRoutingModule } from './pokemon-routing.module';


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
    ScrollingModule,
    SharedModule,
    CommonsModule
  ],
  exports: [
    PokemonRoutingModule,
    PokemonListComponent,
    PokemonDetailComponent,
  ]
})

export class PokemonModule { }

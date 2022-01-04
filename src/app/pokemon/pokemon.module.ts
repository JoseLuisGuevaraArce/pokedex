import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CommonsModule } from '../commons/commons.module';
import { ComponentsModule } from '../components/components.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { NotFoundComponent } from '../commons/not-found.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { PokemonPagesComponent } from './pokemon-pages.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    NotFoundComponent,
    VirtualScrollComponent,
    PokemonPagesComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CommonsModule,
    ComponentsModule,
    PokemonDetailComponent,
    PokemonRoutingModule
  ]
})

export class PokemonModule { }

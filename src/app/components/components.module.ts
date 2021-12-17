import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { PokCardComponent } from "./pok-card/pok-card.component";
import { PokStatsComponent } from "./pok-stats/pok-stats.component";
import { PokEvolutionChainComponent } from './pok-evolution-chain/pok-evolution-chain.component';
import { PokGenerationComponent } from './pok-generation/pok-generation.component';

@NgModule({
  declarations: [
    PokCardComponent,
    PokStatsComponent,
    PokEvolutionChainComponent,
    PokGenerationComponent
  ],
  exports: [
    PokCardComponent,
    PokStatsComponent,
    PokEvolutionChainComponent,
    PokGenerationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class ComponentsModule {}
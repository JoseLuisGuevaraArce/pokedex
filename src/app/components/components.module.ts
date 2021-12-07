import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { PokCardComponent } from "./pok-card/pok-card.component";
import { PokStatsComponent } from "./pok-stats/pok-stats.component";
import { PokEvolutionChainComponent } from './pok-evolution-chain/pok-evolution-chain.component';


@NgModule({
  declarations: [
    PokCardComponent,
    PokStatsComponent,
    PokEvolutionChainComponent
  ],
  exports: [
    PokCardComponent,
    PokStatsComponent,
    PokEvolutionChainComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class ComponentsModule {}
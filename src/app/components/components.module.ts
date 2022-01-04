import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { PokCardComponent } from "./pok-card/pok-card.component";
import { PokStatsComponent } from "./pok-stats/pok-stats.component";
import { PokEvolutionChainComponent } from './pok-evolution-chain/pok-evolution-chain.component';
import { PokGenerationComponent } from './pok-generation/pok-generation.component';
import { PokLanguageComponent } from './pok-language/pok-language.component';
import { FormsModule } from "@angular/forms";
import { PokCardDetailComponent } from './pok-card-detail/pok-card-detail.component';

@NgModule({
  declarations: [
    PokCardComponent,
    PokCardDetailComponent,
    PokStatsComponent,
    PokEvolutionChainComponent,
    PokGenerationComponent,
    PokLanguageComponent
  ],
  exports: [
    PokCardComponent,
    PokCardDetailComponent,
    PokStatsComponent,
    PokEvolutionChainComponent,
    PokGenerationComponent,
    PokLanguageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})

export class ComponentsModule {}
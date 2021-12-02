import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokCardComponent } from "./pok-card/pok-card.component";

@NgModule({
  declarations: [PokCardComponent],
  exports: [PokCardComponent],
  imports: [CommonModule]
})

export class ComponentsModule {}
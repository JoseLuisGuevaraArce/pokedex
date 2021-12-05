import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PDropdownComponent } from './p-dropdown/p-dropdown.component';
import { PipesModule } from './pipes/pipes.module';
import { PInputTextComponent } from './p-input-text/p-input-text.component';
import { ComponentsModule } from './components/components.module';
import { PokStatsComponent } from './pok-stats/pok-stats.component';

@NgModule({
  declarations: [
    PDropdownComponent,
    PInputTextComponent,
    PokStatsComponent
  ],
  exports: [
    ComponentsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSidenavModule,
    PDropdownComponent,
    PInputTextComponent,
    PokStatsComponent,
    PipesModule,
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    ComponentsModule
  ]
})

export class SharedModule { }

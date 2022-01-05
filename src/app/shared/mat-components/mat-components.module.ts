import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { PDropdownComponent } from './p-dropdown/p-dropdown.component';
import { PipesModule } from '../pipes/pipes.module';
import { PInputTextComponent } from './p-input-text/p-input-text.component';

@NgModule({
  declarations: [
    PDropdownComponent,
    PInputTextComponent,
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    PDropdownComponent,
    PInputTextComponent,
    PipesModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    PipesModule
  ]
})

export class MatComponentsModule { }

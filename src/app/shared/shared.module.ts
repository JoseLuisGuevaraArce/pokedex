import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PDropdownComponent } from './p-dropdown/p-dropdown.component';
import { PipesModule } from './pipes/pipes.module';
import { PInputTextComponent } from './p-input-text/p-input-text.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    PDropdownComponent,
    PInputTextComponent
  ],
  exports: [
    PDropdownComponent,
    PInputTextComponent,
    MatDividerModule,
    MatSidenavModule,
    PipesModule,
    ComponentsModule
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    ComponentsModule
  ]
})

export class SharedModule { }

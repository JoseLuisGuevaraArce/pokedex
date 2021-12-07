import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
  exports: [
    MatComponentsModule
  ],
  imports: [
    ReactiveFormsModule,
    MatComponentsModule
  ]
})

export class SharedModule { }

import { NgModule } from '@angular/core';
import { GenerationTextPipe } from './generation-text/generation-text.pipe';
import { SortPipe } from './sort/sort.pipe';

@NgModule({
  declarations: [
    GenerationTextPipe,
    SortPipe
  ],
  exports: [
    GenerationTextPipe,
    SortPipe
  ],
  imports: [
  ]
})

export class PipesModule { }

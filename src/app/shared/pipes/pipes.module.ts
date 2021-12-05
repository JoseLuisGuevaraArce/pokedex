import { NgModule } from '@angular/core';
import { GenerationTextPipe } from './generation-text/generation-text.pipe';
import { SortPipe } from './sort/sort.pipe';
import { TransformTextPipe } from './text/transform-text.pipe';

@NgModule({
  declarations: [
    GenerationTextPipe,
    SortPipe,
    TransformTextPipe
  ],
  exports: [
    GenerationTextPipe,
    SortPipe,
    TransformTextPipe
  ],
  imports: [
  ]
})

export class PipesModule { }

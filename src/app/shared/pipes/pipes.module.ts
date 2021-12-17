import { NgModule } from '@angular/core';
import { SortPipe } from './sort/sort.pipe';
import { HyphenTextPipe } from './hyphenText/hyphen-text.pipe';

@NgModule({
  declarations: [
    SortPipe,
    HyphenTextPipe
  ],
  exports: [
    SortPipe,
    HyphenTextPipe
  ],
  imports: [
  ]
})

export class PipesModule { }

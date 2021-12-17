import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenText'
})

export class HyphenTextPipe implements PipeTransform {

  transform(item: string): any {
    if (item) {
      return item.replace('-', ' ');
    }
  }
}

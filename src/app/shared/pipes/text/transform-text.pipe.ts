import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText'
})

export class TransformTextPipe implements PipeTransform {

  transform(item: string): any {
    if (item) {
      return item.replace('-', ' ');
    }
  }
}

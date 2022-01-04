import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(array: Array<Pokemon>, args: string): Array<Pokemon> {
    return array.sort((a: any, b: any) => {
        if (a[args] < b[args]) {
            return -1;
        } else if (a[args] > b[args]) {
            return 1;
        } else {
            return 0;
        }
    });
  }
}

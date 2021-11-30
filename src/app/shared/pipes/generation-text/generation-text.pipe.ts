import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generationText'
})

export class GenerationTextPipe implements PipeTransform {

  transform(item: any): any {
    const text: any = [
      {code: 'generation-i', text: 'Generation 1'},
      {code: 'generation-ii', text: 'Generation 2'},
      {code: 'generation-iii', text: 'Generation 3'},
      {code: 'generation-iv', text: 'Generation 4'},
      {code: 'generation-v', text: 'Generation 5'},
      {code: 'generation-vi', text: 'Generation 6'},
      {code: 'generation-vii', text: 'Generation 7'},
      {code: 'generation-viii', text: 'Generation 8'}
    ];
    if (item) {
      return text.find((data: any) => data.code === item).text;
    }
  }
}

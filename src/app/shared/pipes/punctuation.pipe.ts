import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punctuation'
})
export class PunctuationPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) {
      return null;
    }

    const lastChar = value.slice(-1);
    if (lastChar === '.' || lastChar === '?' || lastChar === '!') {
      return value;
    } else {
      return value + '.';
    }
  }
}

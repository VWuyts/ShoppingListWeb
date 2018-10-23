import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, pLength?: number): string {
    if (!value) {
      return null;
    }

    const length = pLength > 0 ? pLength : 40;
    if (value.length <= length) {
      return value;
    }
    return value.substr(0, length) + '...';
  }
}

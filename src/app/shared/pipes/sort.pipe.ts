import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, direction: number, propName: string): any {
    if (value === null || !value.length || direction === 0) {
      return null;
    }

    return value.sort((a, b) => {
      if (a[propName] < b[propName]) {
        return direction > 0 ? -1 : 1;
      } else if (a[propName] > b[propName]) {
        return direction > 0 ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}

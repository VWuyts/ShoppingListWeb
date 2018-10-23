import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {
  singular: string[] = [
    'g',
    'kg',
    'stuk',
    'pak',
    'zakje',
    'bakje',
    'netje',
    'pot',
    'tros',
    'bussel',
    'kist',
    'karton'
  ];
  plural: string[] = [
    'g',
    'kg',
    'stuks',
    'pakken',
    'zakjes',
    'bakjes',
    'netjes',
    'potten',
    'trossen',
    'bussels',
    'kisten',
    'kartons'
  ];

  transform(value: string, pAmount: number): string {
    if (!value) {
      return null;
    }

    if (pAmount === 1) {
      return value;
    }

    const index = this.singular.findIndex(el => el === value);
    if (index >= 0) {
      return this.plural[index];
    }

    return value;
  }
}

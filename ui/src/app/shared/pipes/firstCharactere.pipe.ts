import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstCharactere'})
export class FirstCharacterePipe implements PipeTransform {
  transform(value: string) {
    return value.substr(0, 100);
  }
}
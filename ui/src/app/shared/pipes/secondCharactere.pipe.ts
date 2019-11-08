
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'secondCharactere'})
export class SecondCharacterePipe implements PipeTransform {
  transform(value: string) {
    return value.substr(0, 50);
  }
}

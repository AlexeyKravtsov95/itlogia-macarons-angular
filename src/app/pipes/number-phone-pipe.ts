import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPhone',
})
export class NumberPhonePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/^375(\d{2})(\d{3})(\d{2})(\d{2})$/, '+375 ($1) $2-$3-$4')
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficulte'
})
export class DifficultePipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    if(value <= 4) return '🟢 Facile';
    if(value <= 7) return '🟡 Modérée';
    return '🔴 Difficile';
  }

}

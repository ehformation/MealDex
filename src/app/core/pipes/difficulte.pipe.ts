import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficulte'
})
export class DifficultePipe implements PipeTransform {

  transform(value: number | string | null | undefined): string {
    if (value == null || value === '') return 'Inconnue';
    const n = Number(value);
    if (n <= 4) return '🟢 Facile';
    if (n <= 7) return '🟡 Moyen';
    return '🔴 Difficile';
  }

}

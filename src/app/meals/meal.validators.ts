import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minMotsValidator(minMots: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valeur: string = control.value ?? '';
    const nbMots = valeur.trim().split(/\s+/).filter(Boolean).length;
    return nbMots >= minMots
      ? null
      : { minMots: { requis: minMots, actuel: nbMots } };
  };
}


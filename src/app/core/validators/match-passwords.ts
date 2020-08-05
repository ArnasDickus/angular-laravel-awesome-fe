import {FormGroup, ValidationErrors, Validator} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPasswords implements Validator {
  validate(formGroup: FormGroup): ValidationErrors | null {
    const { password, repeatPassword } = formGroup.value;

    if (password === repeatPassword) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}

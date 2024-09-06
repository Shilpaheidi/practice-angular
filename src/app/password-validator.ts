import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value || '';

    // Regular expression for password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Test the value against the regex
    const valid = passwordPattern.test(value);

    return valid ? null : { 'passwordStrength': true };
  };
}

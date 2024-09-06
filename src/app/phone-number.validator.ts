import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumberPattern = /^(?:\+?\d{1,3})?[\s.-]?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;
    const valid = phoneNumberPattern.test(control.value);
    return valid ? null : { 'phoneNumber': true };
  };
}

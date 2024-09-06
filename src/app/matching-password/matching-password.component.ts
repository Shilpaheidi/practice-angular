import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-matching-password',
  templateUrl: './matching-password.component.html',
  styleUrls: ['./matching-password.component.scss'],
})
export class MatchingPasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(
    form: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  
  get f() {
    return this.passwordForm.controls;
  }

  onSubmit() {
    console.log('formValue', this.passwordForm.value);
  }
}

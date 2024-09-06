import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../password-validator';

@Component({
  selector: 'app-enote-matching-password',
  templateUrl: './enote-matching-password.component.html',
  styleUrls: ['./enote-matching-password.component.scss']
})
export class EnoteMatchingPasswordComponent {

  convertWordToUpperCase:string='password change word';
  passwordForm: FormGroup;
  passwordRequirements = {
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
  };

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, passwordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this.passwordForm.get('password')?.valueChanges.subscribe((value: string) => {
      this.updatePasswordRequirements(value);
    });
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  updatePasswordRequirements(password: string): void {
    this.passwordRequirements.minLength = password.length >= 6;
    this.passwordRequirements.uppercase = /[A-Z]/.test(password);
    this.passwordRequirements.lowercase = /[a-z]/.test(password);
    this.passwordRequirements.number = /\d/.test(password);
    this.passwordRequirements.symbol = /[@$!%*?&]/.test(password);
  }

  get f() { return this.passwordForm.controls; }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      // Handle form submission
    }
  }
}

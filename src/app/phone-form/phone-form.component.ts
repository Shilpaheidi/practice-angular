import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { phoneNumberValidator } from '../phone-number.validator';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss']
})
export class PhoneFormComponent {
  phoneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phoneNumber: ['', [phoneNumberValidator()]]
    });
  }

  onSubmit() {
    if (this.phoneForm.valid) {
      console.log('Form Submitted!', this.phoneForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

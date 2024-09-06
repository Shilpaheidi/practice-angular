import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      sections: this.fb.array([this.createSection()])
    });
  }
  createSection(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      preferences: this.fb.group({
        newsletter: [false],
        notifications: [false]
      })
    });
  }

  get sections(): FormArray {
    return this.profileForm.get('sections') as FormArray;
  }

  addSection(): void {
    this.sections.push(this.createSection());
  }

  removeSection(index: number): void {
    if (this.sections.length > 1) {
      this.sections.removeAt(index);
    }
  }

  submitProfileForm(): void {
    if (this.profileForm.valid) {
      console.log('Profile Data:', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.profileForm.reset();
  }

}

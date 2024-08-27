import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hobbies-dynamic-form',
  templateUrl: './hobbies-dynamic-form.component.html',
  styleUrls: ['./hobbies-dynamic-form.component.scss'],
})
export class HobbiesDynamicFormComponent {
  hobbiesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hobbiesForm = this.fb.group({
      firstName: ['', Validators.required],
      hobbies: this.fb.array([]),
    });
  }

  get hobbies(): FormArray {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

    // Handle form submission
    onSubmit() {
      if (this.hobbiesForm.valid) {
        console.log('Form Submitted', this.hobbiesForm.value);
      } else {
        console.log('Form is invalid');
      }
    }
}

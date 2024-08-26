import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  formConfig = [
    {
      type: 'text',
      label: 'Full Name',
      name: 'full name',
      validators: ['required', 'minLength:3'],
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      validators: ['required', 'email'],
    },
    {
      type: 'select',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female', 'Other'],
      validators: ['required'],
    },
  ];

  dynamicForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});
    this.buildForm();
  }

  buildForm(): void {
    this.formConfig.forEach((field) => {
      const validatorsToAdd: FormControlOptions | ValidatorFn | ValidatorFn[] | null | undefined = [];

      field.validators.forEach((validator) => {
        if (validator === 'required') validatorsToAdd.push(Validators.required);
        if (validator.startsWith('minLength')) {
          const length = parseInt(validator.split(':')[1], 10);
          validatorsToAdd.push(Validators.minLength(length));
        }

        if (validator.startsWith('maxLength')) {
          const length = parseInt(validator.split(':')[1], 10);
          validatorsToAdd.push(Validators.maxLength(length));
        }

        if (validator.startsWith('min')) {
          const minLength = parseInt(validator.split(':')[1], 10);
          validatorsToAdd.push(Validators.min(minLength));
        }

        if (validator === 'email') validatorsToAdd.push(Validators.email);
      });
      this.dynamicForm.addControl(
        field.name,
        new FormControl('',validatorsToAdd)
      )
    });

  
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log('Form Data:', this.dynamicForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

}

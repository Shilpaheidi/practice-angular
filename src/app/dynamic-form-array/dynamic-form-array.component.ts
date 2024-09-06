import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.scss'],
})
export class DynamicFormArrayComponent implements OnInit {
  detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.detailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      experience: ['', Validators.required],
      personalDetails: this.formBuilder.array([this.createPersonalDetail()]),
    });
  }

  ngOnInit() {
    const savedFormData = localStorage.getItem('savedFormData');
    if (savedFormData) {
      this.detailsForm.patchValue(JSON.parse(savedFormData));
      const personalDetailsArray = this.detailsForm.get('personalDetails') as FormArray;
      const savedPersonalDetails = JSON.parse(savedFormData).personalDetails;
      personalDetailsArray.clear();
      savedPersonalDetails.forEach((detail: any) => {
        personalDetailsArray.push(this.formBuilder.group(detail));
      });
    }
  }

  createPersonalDetail(): FormGroup {
    return this.formBuilder.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  addPersonalDetail() {
    this.personalDetailValues.push(this.createPersonalDetail());
  }

  submitDetailsForm() {
    if (this.detailsForm.invalid) {
      this.detailsForm.markAllAsTouched();
      return;
    }
    if (this.detailsForm.valid) {
      const formData = this.detailsForm.value;
      localStorage.setItem('savedFormData', JSON.stringify(formData));
      console.log('Form Data:', formData);
    }
  }

  clearForm() {
    this.detailsForm.reset();
    this.personalDetailValues.clear();
    this.personalDetailValues.push(this.createPersonalDetail());
    localStorage.removeItem('savedFormData');
  }

  get personalDetailValues() {
    return this.detailsForm.get('personalDetails') as FormArray;
  }
}

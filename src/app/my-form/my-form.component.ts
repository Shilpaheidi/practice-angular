import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements AfterViewInit {
  form: FormGroup;

  @ViewChildren('formField', { read: ElementRef })
  formFields!: QueryList<ElementRef>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      field5: ['', Validators.required],
      field6: ['', Validators.required],
      field7: ['', Validators.required],
      field8: ['', Validators.required],
      field9: ['', Validators.required],
      field10: ['', Validators.required],
      // Add more fields if necessary
    });
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    if (this.form.invalid) {
      this.scrollToLastInvalidField();
      return;
    }
    // Proceed with form submission if valid
  }

  get formKeys() {
    return Object.keys(this.form.controls);
  }

  scrollToLastInvalidField() {
    const container = document.querySelector('.scrollable-container') as HTMLElement;

    const invalidControls = this.formFields.filter((field) =>
      field.nativeElement.classList.contains('ng-invalid')
    );

    if (invalidControls.length > 0 && container) {
      const lastInvalidControl = invalidControls[invalidControls.length - 1].nativeElement;

      // Calculate the scroll position and scroll the container
      const scrollPosition = lastInvalidControl.offsetLeft - container.offsetLeft;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      lastInvalidControl.focus(); // Optionally focus the field
    }
  }
}

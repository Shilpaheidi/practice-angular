import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-dynamic-form',
  templateUrl: './new-dynamic-form.component.html',
  styleUrls: ['./new-dynamic-form.component.scss'],
})
export class NewDynamicFormComponent {
  myDynamicForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myDynamicForm = this.fb.group({
      showExtraFields: [false],
      extraFieldOne: [''],
      ectraFieldTwo: [''],
    });
  }

  onSubmit(): void {
    // console.log('formValue', this.myDynamicForm.value);

   
    console.log('formValue', this.myDynamicForm.get('extraFieldOne')?.value);
    console.log('formValue1', this.myDynamicForm.controls['extraFieldOne']?.value);
  }
}

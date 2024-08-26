import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  myform!: FormGroup;

  constructor(private fb:FormBuilder){

  }


  ngOnInit(){
    this.myform = this.fb.group({
      userName:['',[Validators.required,CustomValidators.containsAngular() ]],
      email:['',[Validators.required,Validators.email]]

    })
  }

  onSubmit():void{

    if (this.myform.valid) {
      console.log('Form Submitted', this.myform.value);
    }else{
      console.log('Form is invalid');
    }
  }
}

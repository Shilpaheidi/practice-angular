import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export class   CustomValidators{
   static containsAngular(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
        const forbidden =  control.value.includes('Angular');
        return forbidden ? {containsAngular:{value: control.value}}:null;
    }

   } 
}

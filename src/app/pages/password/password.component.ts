import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms'

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const newPassword = control.get('newpassword');
    const confirmation = control.get('confirmation');

    if (newPassword && confirmation && newPassword.value !== confirmation.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  };
}

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})


export class PasswordComponent {
  hide = true;

  constructor() { }

  newPasswordForm = new FormGroup( {
    newpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
  },
  { validators: passwordMatchValidator() } // Ajoutez la validation personnalisée au groupe de formulaires
);
  

  onSubmit() {
    if(this.newPasswordForm.valid) {
      console.log(this.newPasswordForm.value);
    }
  }
}

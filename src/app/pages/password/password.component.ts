import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Route, Router,NavigationExtras } from '@angular/router';
import { PasswordService } from 'src/app/services/password/password.service';
function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const newPassword = control.get('newPassword');
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
  hidePassword = true;
  hideConfirmation = true;


  constructor(private router: Router, private passwordService: PasswordService, private _snackBar: MatSnackBar) { }

  //the id of the client connected
  createdBy_id = localStorage.getItem('id');

  newPasswordForm = new FormGroup({
    id: new FormControl(this.createdBy_id),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
  },
    { validators: passwordMatchValidator() } // Ajoutez la validation personnalisée au groupe de formulaires
  );

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, type: string) {
    this._snackBar.open(message, type, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onSubmit() {
    if (this.newPasswordForm.valid) {
      this.passwordService.changePassword(this.newPasswordForm.value).subscribe(
        response => {
          this.newPasswordForm.reset();
          this.openSnackBar('Password changed', 'Success');
          this.router.navigate(['/home'], { replaceUrl: true });
        },
        error => {
          console.error('Error Changing Password:', error);
          this.openSnackBar('Something went wrong', 'Error');
        }
      );
    }
  }
}

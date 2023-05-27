import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hide = true;
  firstLogin = true;

  constructor(private router: Router) { }

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit() {
    if(this.signinForm.valid) {
      console.log(this.signinForm.value);
    }

    if (this.firstLogin) {
      // Redirection vers la page de changement de mot de passe
      this.router.navigateByUrl('/password');
    }
  }
}

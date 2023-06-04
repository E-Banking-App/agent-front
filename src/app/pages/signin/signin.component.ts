import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hide = true;
  firstLogin = true;

  constructor(private router: Router, private signinService: SigninService) { }

  signinForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit() {

    //if the inputs is valide the formate
    if (this.signinForm.valid) {

      
      this.signinService.authenticate(this.signinForm.value).subscribe(
        response => {
          console.log('Client Authenticate:', response);
          // Handle success if needed

          // Assuming the token is returned as 'token' in the response
          const token = response.token;
          console.log(token)
          localStorage.setItem('token', token);//stock the token

          // Redirection vers la page de changement de mot de passe
          this.router.navigateByUrl('/password');
        },

        error => {
          console.error('Error Authenticate client:', error);
          // Handle error if needed

        }
      );

      console.log(this.signinForm.value);
    }

    // if (this.firstLogin) {
    //   // Redirection vers la page de changement de mot de passe
    //   this.router.navigateByUrl('/password');
    // }
  }
}

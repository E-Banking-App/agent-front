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
    if (this.signinForm.valid) {
      this.signinService.authenticate(this.signinForm.value).subscribe(
        response => {
          const token = response.token;
          localStorage.setItem('token', token);
          localStorage.setItem('id', response.id);

          if (response.isFirstLogin) {
            this.router.navigate(['/password'], { replaceUrl: true });
          } else {
            this.router.navigate(['/home'], { replaceUrl: true });
          }
        },
        error => {
          console.error('Error Authenticate client:', error);
        }
      );
    }
  }
}

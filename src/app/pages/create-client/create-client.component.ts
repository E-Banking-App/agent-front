import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ClientService } from '../../services/client/client.service'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CreateClientService } from 'src/app/services/create-client.service';

interface Account {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {
  
  accounts: Account[] = [
    { value: 200, viewValue: 'Compte 200' },
    { value: 5000, viewValue: 'Compte 5000' },
    { value: 20000, viewValue: 'Compte 20000' },
  ];

  constructor(private createClientService: CreateClientService, private _snackBar: MatSnackBar) { }

  hide = true;


  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, type: string) {
    this._snackBar.open(message, type, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  //the id of the client connected
  createdBy_id = localStorage.getItem('id');

  clientForm = new FormGroup({
    createdBy_id: new FormControl(this.createdBy_id),
    ceiling: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(10)]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),

    /////////////////// plafond non ajouté////////////////////////////////////////
    // plafond: new FormCon trol('', [Validators.required]),

  })

  // onSubmit() {
  //   console.log(this.clientForm.value);

  //   if (this.clientForm.valid) {

  //     this.createClientService.creatClient(this.clientForm.value).subscribe({
  //       next: (result: any) => {
  //         console.log(result);
  //         this.clientForm.reset()
  //         this.openSnackBar("Client Added Successfully", "Success")
  //       },
  //       error: (err: any) => {
  //         console.error(err)
  //         this.openSnackBar("Something went wrong", "Error")
  //       }
  //     })
  //   }
  // }


  onSubmit() {
    console.log(this.clientForm.value);
    

    
    if (this.clientForm.valid)  {

      this.createClientService.creatClient(this.clientForm.value).subscribe(
        response => {
          console.log('Client saved:', response);
          // Handle success if needed

          this.clientForm.reset()
          this.openSnackBar("Client Added Successfully", "Success")
        },

        error => {

          console.error('Error saving client:', error);
          this.openSnackBar("Something went wrong", "Error")
        }
      );

      console.log(this.clientForm.value);

    }



  }



}

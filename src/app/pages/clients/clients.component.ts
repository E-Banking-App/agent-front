import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit{
  constructor(private clientService: ClientService ){}

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'account'];
  dataSource = new MatTableDataSource<Client>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getClients();
  }
  getClients() {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email?: string;
  account: string;
}

// const ELEMENT_DATA: Client[] = [
//   {id: 1, firstname: 'Harry', lastname: 'Potter', phone:'1234567890', email:'harry@example.com', account: 'Compte 200'},
//   {id: 2, firstname: 'Hermoine', lastname: 'Granger', phone:'9876543210', email:'hermoine@example.com', account: 'Compte 5000'},
//   {id: 3, firstname: 'Ron', lastname: 'Weasley', phone:'5551234567', email:'ron@example.com', account: 'Compte 20000'},
//   {id: 4, firstname: 'Albus', lastname: 'Dumbledore', phone:'1231231234', email:'', account: 'Compte 200'},
//   {id: 5, firstname: 'Severus', lastname: 'Snape', phone:'9879879876', email:'severus@example.com', account: 'Compte 5000'},
//   {id: 6, firstname: 'Hagrid', lastname: 'Rubeus', phone:'5555555555', email:'hagrid@example.com', account: 'Compte 20000'},
//   {id: 7, firstname: 'Sirius', lastname: 'Black', phone:'1234123412', email:'sirius@example.com', account: 'Compte 200'},
//   {id: 8, firstname: 'Luna', lastname: 'Lovegood', phone:'9876987698', email:'luna@example.com', account: 'Compte 5000'},
//   {id: 9, firstname: 'Ginny', lastname: 'Weasley', phone:'5559995555', email:'ginny@example.com', account: 'Compte 20000'},
//   {id: 10, firstname: 'Draco', lastname: 'Malfoy', phone:'1239876543', email:'draco@example.com', account: 'Compte 200'},
//   {id: 11, firstname: 'Neville', lastname: 'Longbottom', phone:'9876543219', email:'neville@example.com', account: 'Compte 5000'},
//   {id: 12, firstname: 'Fred', lastname: 'Weasley', phone:'5551239999', email:'fred@example.com', account: 'Compte 20000'},
//   {id: 13, firstname: 'George', lastname: 'Weasley', phone:'1231239999', email:'george@example.com', account: 'Compte 200'},
//   {id: 14, firstname: 'Rubeus', lastname: 'Hagrid', phone:'9879871111', email:'rubeus@example.com', account: 'Compte 5000'},
//   {id: 15, firstname: 'Minerva', lastname: 'McGonagall', phone:'5555551111', email:'minerva@example.com', account: 'Compte 20000'},
//   {id: 16, firstname: 'Remus', lastname: 'Lupin', phone:'1234111111', email:'remus@example.com', account: 'Compte 200'},
//   {id: 17, firstname: 'Dobby', lastname: 'Dobby', phone:'9876911111', email:'', account: 'Compte 5000'},
// ];




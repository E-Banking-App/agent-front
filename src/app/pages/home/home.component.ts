import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {ClientService} from '../../services/client/client.service'

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, AfterViewInit {
  columnsClients: string[] = ['id', 'firstName','lastName','email','phoneNumber'];
  dataClients: MatTableDataSource<any> = new MatTableDataSource([
    {
      id: 1,
      firstName: "Client 1",
      lastName: "Client 1",
      email: "client1@gmail.com",
      phoneNumber: "0612345678",
  
    },
    {
      id: 2,
      firstName: "Client 2",
      lastName: "Client 2",
      email: "Client2@gmail.com",
     
      phoneNumber: "0612345678",
      
    },
  ])



  @ViewChild(MatPaginator) paginatorClients!: MatPaginator;
  @ViewChild(MatSort) sortClients!: MatSort;

  ngAfterViewInit() {
    
    this.dataClients.paginator = this.paginatorClients;
    this.dataClients.sort = this.sortClients;
  }

  

  applyFilterClients(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataClients.filter = filterValue.trim().toLowerCase();

    if (this.dataClients.paginator) {
      this.dataClients.paginator.firstPage();
    }
  }


  constructor(private dialog: MatDialog,  private apiClient: ClientService) {}

  ngOnInit(): void {
    this.getClients;
  }

  

  getClients(){
    console.log("Get Clients");
    this.apiClient.getClients().subscribe({
      next: (result: any) => {
        this.dataClients = new MatTableDataSource(result);
        this.dataClients.paginator = this.paginatorClients
        this.dataClients.sort = this.sortClients
        console.log(result);
      },
      error: (err: any)=> {
        console.error(err)
      }
    })
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

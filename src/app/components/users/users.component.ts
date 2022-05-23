import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from 'src/app/interfaces/PaginationDto';
import { UserDto } from 'src/app/interfaces/UserDto';
import { UsersService } from 'src/app/services/UsersService';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource : UserDto[] = [];
  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

  constructor(
    private usersService: UsersService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.displayedColumns = ['firstName', 'lastName', 'age'];
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers(this.currentPage + 1, this.pageSize).subscribe((response: PaginationDto<UserDto>) => {
      this.dataSource = response.data;
      this.totalSize = response.totalRecords;
    });
  }

  onChangePage(pe : PageEvent) {
    this.currentPage = pe.pageIndex;
    this.pageSize = pe.pageSize;
    console.log(pe.pageIndex);
    console.log(pe.pageSize);
    this.getUsers();
  } 

  openDialog(row : UserDto){
    console.log(row);
    const dialogRef = this.dialog.open(AddressDialogComponent,
     { data: {userId : row.id, userName : row.firstName + " " + row.lastName}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

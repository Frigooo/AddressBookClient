import { Component, Inject, OnInit } from '@angular/core';
import { UserAddressDto } from 'src/app/interfaces/UserAddressDto';
import { UserAddressService } from 'src/app/services/UserAddressService';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResponseDto } from 'src/app/interfaces/ResponseDto';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})
export class AddressDialogComponent implements OnInit {

  address : UserAddressDto | undefined;
  userName : string = '';

  constructor(private usersAddressService : UserAddressService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userName = this.data.userName;
    this.usersAddressService.getUserAddress(this.data.userId).subscribe((response : ResponseDto<UserAddressDto>) => {
      debugger
      this.address = response.data;
    });
  }

}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Tornillos } from '../tornillos/tornillos.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>){}


  passedValues: Tornillos = {

    precio: 0,
    nombre: '',
    formato:0,
    marca: '',
    action: ''
  }
}






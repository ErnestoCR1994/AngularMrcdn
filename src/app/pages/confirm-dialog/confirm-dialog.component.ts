import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { MatFormField } from '@angular/material/form-field';
import { PeriodicElement } from '../tornillos/tornillos.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {



  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>

   ){

  }


  passedValues: PeriodicElement = {

    precio: 0,
    nombre: '',
    formato:0,
    marca: '',
    action: ''
  }



}






import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, Module, RowNode } from 'ag-grid-community';
import { HttpClient } from "@angular/common/http";

import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
/** Constants used to fill up our data base. */

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss']
})
export class TornillosComponent implements AfterViewInit {

    constructor(public dialog: MatDialog) {}
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openDialog(): void{

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {width:'500px',data:'Nuevo Tornillo'});
    dialogRef.afterClosed().subscribe(

      res => {
        console.log(res);
      }
    )

  }

  removeRow() : void{

    const dialogRef = this.dialog.open(DeleteDialogComponent, {width:'500px',data:'Nuevo Tornillo'});
    dialogRef.afterClosed().subscribe(

      res => {
        console.log(res);
      }
    )

  }

}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',action:''},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',action:''},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',action:''},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',action:''},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',action:''},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',action:''},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',action:''},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',action:''},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',action:''},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',action:''},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',action:''},
];








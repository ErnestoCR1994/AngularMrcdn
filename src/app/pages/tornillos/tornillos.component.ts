import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss']
})
export class TornillosComponent implements AfterViewInit {

  public passedValues: PeriodicElement = {

    precio: 0,
    nombre: '',
    formato:0,
    marca: '',
    action: ''
  }

    constructor(public dialog: MatDialog) {}
    displayedColumns: string[] = ['precio', 'nombre', 'formato', 'marca','action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public openDialog(): void{

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {width:'500px'});
    dialogRef.afterClosed().subscribe(

      res => {
        console.log(res);

        this.passedValues.precio = res.precio;
        this.passedValues.nombre = res.nombre;
        this.passedValues.formato = res.formato;
        this.passedValues.marca = res.marca;
        this.passedValues.action = '';

         var dataFromDialog: PeriodicElement = res;
         ELEMENT_DATA.push(dataFromDialog);
         console.log(ELEMENT_DATA);

         this.updateDataSource();

      });

  }

  removeRow(index: number) : void{

    const dialogRef = this.dialog.open(DeleteDialogComponent, {width:'500px',data:'Nuevo Tornillo'});
    dialogRef.afterClosed().subscribe(

      () => {

        const currentPage = this.paginator.pageIndex;

        const itemsPerPage = this.paginator.pageSize;

        const realIndex = index + currentPage * itemsPerPage;

        ELEMENT_DATA.splice(realIndex, 1);
        console.log(ELEMENT_DATA,index);

        this.updateDataSource();

      }
    )
  }

  updateDataSource(){

    this.dataSource.data = ELEMENT_DATA;
  }



}

export interface PeriodicElement {

  precio: number;
  nombre: string;
  formato: number;
  marca: string;
  action: string;

}

 var ELEMENT_DATA: PeriodicElement[] = [
  {precio: 1, nombre: 'Hydrogen', formato: 1.0079, marca: 'H',action:''},
  {precio: 2, nombre: 'Helium', formato: 4.0026, marca: 'He',action:''},
  {precio: 3, nombre: 'Lithium', formato: 6.941, marca: 'Li',action:''},
  {precio: 4, nombre: 'Beryllium', formato: 9.0122, marca: 'Be',action:''},
  {precio: 5, nombre: 'Boron', formato: 10.811, marca: 'B',action:''},
  {precio: 6, nombre: 'Carbon', formato: 12.0107, marca: 'C',action:''},
  {precio: 7, nombre: 'Nitrogen', formato: 14.0067, marca: 'N',action:''},
  {precio: 8, nombre: 'Oxygen', formato: 15.9994, marca: 'O',action:''},
  {precio: 9, nombre: 'Fluorine', formato: 18.9984, marca: 'F',action:''},
  {precio: 10, nombre: 'Neon', formato: 20.1797, marca: 'Ne',action:''},
  {precio: 11, nombre: 'Sodium', formato: 22.9897, marca: 'Na',action:''},
  {precio: 12, nombre: 'Magnesium', formato: 24.305, marca: 'Mg',action:''},
  {precio: 13, nombre: 'Aluminum', formato: 26.9815, marca: 'Al',action:''},
  {precio: 14, nombre: 'Silicon', formato: 28.0855, marca: 'Si',action:''},
  {precio: 15, nombre: 'Phosphorus', formato: 30.9738, marca: 'P',action:''},
  {precio: 16, nombre: 'Sulfur', formato: 32.065, marca: 'S',action:''},
  {precio: 17, nombre: 'Chlorine', formato: 35.453, marca: 'Cl',action:''},
  {precio: 18, nombre: 'Argon', formato: 39.948, marca: 'Ar',action:''},
  {precio: 19, nombre: 'Potassium', formato: 39.0983, marca: 'K',action:''},
  {precio: 20, nombre: 'Calcium', formato: 40.078, marca: 'Ca',action:''}
];


import {AfterViewInit, Component, Injectable, ViewChild} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { ColumnasComponent } from '../columnas/columnas.component';

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss']
})

@Injectable()
export class TornillosComponent implements AfterViewInit {

  public passedValues: Tornillos = {

    precio: 0,
    nombre: '',
    formato:0,
    marca: '',
    action: ''
  }




    constructor(public dialog: MatDialog) {}
    displayedColumns: string[] = ['precio', 'nombre', 'formato', 'marca','action'];
    dataSource = new MatTableDataSource<Tornillos>(ELEMENT_DATA);



    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;


  }

  public openDialog(): void{

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '70vw',
      maxHeight: '40vh',
      height: '100%',
      width: '100%',

    });
    dialogRef.afterClosed().subscribe(

      res => {
        console.log(res);

        this.passedValues.precio = res.precio;
        this.passedValues.nombre = res.nombre;
        this.passedValues.formato = res.formato;
        this.passedValues.marca = res.marca;
        this.passedValues.action = '';

         var dataFromDialog: Tornillos = res;
         ELEMENT_DATA.push(dataFromDialog);
         console.log(ELEMENT_DATA);

         this.updateDataSource();

      });

  }

  removeRow(index: number) : void{

    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      maxWidth: '30vw',
      maxHeight: '10vh',
      height: '100%',
      width: '100%',

    });
    dialogRef.afterClosed().subscribe(

      res => {

        if(res == true){
          const currentPage = this.paginator.pageIndex;

          const itemsPerPage = this.paginator.pageSize;

          const realIndex = index + currentPage * itemsPerPage;

          ELEMENT_DATA.splice(realIndex, 1);
          console.log(ELEMENT_DATA,index);

          this.updateDataSource();

        }

        else{
          dialogRef.close();
        }

      }
    )
  }

  updateDataSource(){

    this.dataSource.data = ELEMENT_DATA;
  }

  openCol(): void {

    const dialogRef = this.dialog.open(ColumnasComponent, {
      maxWidth: '40vw',
      maxHeight: '25vh',
      height: '100%',
      width: '100%',

    });
    dialogRef.afterClosed().subscribe(

      () => {


      });

  }






  private data = new BehaviorSubject(ELEMENT_DATA);

  sharedData = this.data.asObservable();

}

export interface Tornillos {

  precio: number;
  nombre: string;
  formato: number;
  marca: string;
  action: string;

}

 var ELEMENT_DATA: Tornillos[] = [
  {precio: 7.09, nombre: 'Elbert', formato: 1, marca: 'Hacendado',action:''},
  {precio: 1.17, nombre: 'Cyrius', formato: 4, marca: 'Hacendado',action:''},
  {precio: 3.83, nombre: 'Kaycee', formato: 6, marca: 'Hacendado',action:''},
  {precio: 7.39, nombre: 'Madelynn', formato: 9, marca: 'Hacendado',action:''},
  {precio: 2.60, nombre: 'Russ', formato: 10, marca: 'Hacendado',action:''},
  {precio: 4.97, nombre: 'Albina', formato: 12, marca: 'Hacendado',action:''},
  {precio: 7.09, nombre: 'Elbert', formato: 1, marca: 'Hacendado',action:''},
  {precio: 1.17, nombre: 'Cyrius', formato: 4, marca: 'Hacendado',action:''},
  {precio: 3.83, nombre: 'Kaycee', formato: 6, marca: 'Hacendado',action:''},
  {precio: 7.39, nombre: 'Madelynn', formato: 9, marca: 'Hacendado',action:''},
  {precio: 2.60, nombre: 'Russ', formato: 10, marca: 'Hacendado',action:''},
  {precio: 4.97, nombre: 'Albina', formato: 12, marca: 'Hacendado',action:''},
  {precio: 7.09, nombre: 'Elbert', formato: 1, marca: 'Hacendado',action:''},
  {precio: 1.17, nombre: 'Cyrius', formato: 4, marca: 'Hacendado',action:''},
  {precio: 3.83, nombre: 'Kaycee', formato: 6, marca: 'Hacendado',action:''},
  {precio: 7.39, nombre: 'Madelynn', formato: 9, marca: 'Hacendado',action:''},
  {precio: 2.60, nombre: 'Russ', formato: 10, marca: 'Hacendado',action:''},
  {precio: 4.97, nombre: 'Albina', formato: 12, marca: 'Hacendado',action:''},
  {precio: 7.09, nombre: 'Elbert', formato: 1, marca: 'Hacendado',action:''},
  {precio: 1.17, nombre: 'Cyrius', formato: 4, marca: 'Hacendado',action:''},
  {precio: 3.83, nombre: 'Kaycee', formato: 6, marca: 'Hacendado',action:''},
  {precio: 7.39, nombre: 'Madelynn', formato: 9, marca: 'Hacendado',action:''},
  {precio: 2.60, nombre: 'Russ', formato: 10, marca: 'Hacendado',action:''},
  {precio: 4.97, nombre: 'Albina', formato: 12, marca: 'Hacendado',action:''},
  {precio: 7.09, nombre: 'Elbert', formato: 1, marca: 'Hacendado',action:''},
  {precio: 1.17, nombre: 'Cyrius', formato: 4, marca: 'Hacendado',action:''},
  {precio: 3.83, nombre: 'Kaycee', formato: 6, marca: 'Hacendado',action:''},
  {precio: 7.39, nombre: 'Madelynn', formato: 9, marca: 'Hacendado',action:''},
  {precio: 2.60, nombre: 'Russ', formato: 10, marca: 'Hacendado',action:''},
  {precio: 4.97, nombre: 'Albina', formato: 12, marca: 'Hacendado',action:''}

];


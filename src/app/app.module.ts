import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './pages/home/home.component';
import { TornillosComponent } from './pages/tornillos/tornillos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CustomPaginator } from './pages/tornillos/CustomPaginatorConfiguration';

import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { DeleteDialogComponent } from './pages/delete-dialog/delete-dialog.component';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TornillosComponent,
    ConfirmDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatCardModule,MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,

  ],
  providers: [{provide: MatPaginatorIntl, useValue: CustomPaginator()}],
  bootstrap: [AppComponent]
})
export class AppModule { }

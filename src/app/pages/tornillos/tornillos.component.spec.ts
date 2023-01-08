import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornillosComponent, Tornillos } from './tornillos.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

describe('TornillosComponent', () => {
  let component: TornillosComponent;
  let fixture: ComponentFixture<TornillosComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornillosComponent ],
      imports:[MatFormFieldModule,MatInputModule,FormsModule,
        MatDialogModule,BrowserAnimationsModule,MatPaginatorModule,MatTableModule,MatMenuModule],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a variable called dataSource with values as default', () => {
    fixture = TestBed.createComponent(TornillosComponent);
    const lazy = fixture.componentInstance;
    expect(lazy.dataSource).toBeTruthy();
    expect(lazy.dataSource).toBeDefined();
  });


  });



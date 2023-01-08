import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnasComponent } from './columnas.component';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ColumnasComponent', () => {
  let component: ColumnasComponent;
  let fixture: ComponentFixture<ColumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnasComponent ],
      imports:[MatFormFieldModule,MatInputModule,FormsModule,MatDialogModule,BrowserAnimationsModule],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

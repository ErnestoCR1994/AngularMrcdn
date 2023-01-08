import { Component, OnInit } from '@angular/core';
import { TornillosComponent } from '../tornillos/tornillos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private tornillosComponent: TornillosComponent){}

       getData!: number;

     tornillos = this.tornillosComponent.sharedData.subscribe(

      data => (
          this.getData = data.length
      )
     );





}



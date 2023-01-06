import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TornillosComponent } from './pages/tornillos/tornillos.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path:'tornillos', component:TornillosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

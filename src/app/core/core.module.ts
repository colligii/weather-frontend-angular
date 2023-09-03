import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './routes/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

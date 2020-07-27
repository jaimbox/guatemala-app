import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageModule } from 'src/app/pages/home/home.module';

@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    HomePageModule
  ]
})
export class PagesModule { }

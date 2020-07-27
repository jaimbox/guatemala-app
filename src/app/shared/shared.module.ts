import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModalComponent } from './components/header-modal/header-modal.component';

@NgModule({
  declarations: [
    HeaderModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderModalComponent
  ]
})
export class SharedModule { }

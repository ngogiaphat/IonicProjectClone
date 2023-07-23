import {SupportPage} from './support';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SupportPageRoutingModule} from './support-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule
  ],
  declarations: [
    SupportPage,
  ]
})
export class SupportModule {};
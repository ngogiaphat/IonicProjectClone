import {MapPage} from './map';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {MapPageRoutingModule} from './map-routing.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapPageRoutingModule
  ],
  declarations: [
    MapPage,
  ]
})
export class MapModule {};
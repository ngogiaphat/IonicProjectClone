import {NgModule} from '@angular/core';
import {SchedulePage} from './schedule';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SchedulePageRoutingModule} from './schedule-routing.module';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [
    SchedulePage,
    ScheduleFilterPage
  ]
})
export class ScheduleModule {};
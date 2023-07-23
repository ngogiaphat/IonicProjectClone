import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SpeakerDetailPage} from './speaker-detail';
import {SpeakerDetailPageRoutingModule} from './speaker-detail-routing.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerDetailPageRoutingModule
  ],
  declarations: [
    SpeakerDetailPage,
  ]
})
export class SpeakerDetailModule {};
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SpeakerListPage} from './speaker-list';
import {SpeakerListPageRoutingModule} from './speaker-list-routing.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {};
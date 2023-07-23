import {TabsPage} from './tabs-page';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MapModule} from '../map/map.module';
import {CommonModule} from '@angular/common';
import {AboutModule} from '../about/about.module';
import {ScheduleModule} from '../schedule/schedule.module';
import {TabsPageRoutingModule} from './tabs-page-routing.module';
import {SpeakerListModule} from '../speaker-list/speaker-list.module';
import {SessionDetailModule} from '../session-detail/session-detail.module';
import {SpeakerDetailModule} from '../speaker-detail/speaker-detail.module';
@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule {};
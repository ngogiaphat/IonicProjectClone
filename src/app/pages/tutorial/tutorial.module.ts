import {NgModule} from '@angular/core';
import {TutorialPage} from './tutorial';
import {IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {TutorialPageRoutingModule} from './tutorial-routing.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TutorialPageRoutingModule,
  ],
  declarations: [TutorialPage]
})
export class TutorialModule {};
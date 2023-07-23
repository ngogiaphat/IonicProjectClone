import {NgModule} from '@angular/core';
import {SpeakerDetailPage} from './speaker-detail';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: SpeakerDetailPage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerDetailPageRoutingModule {};
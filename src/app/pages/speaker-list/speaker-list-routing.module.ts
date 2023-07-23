import {NgModule} from '@angular/core';
import {SpeakerListPage} from './speaker-list';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: SpeakerListPage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerListPageRoutingModule {};
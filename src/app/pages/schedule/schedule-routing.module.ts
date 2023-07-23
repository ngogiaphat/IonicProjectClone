import {NgModule} from '@angular/core';
import {SchedulePage} from './schedule';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: SchedulePage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule {};
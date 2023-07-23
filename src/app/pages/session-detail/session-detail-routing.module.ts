import {NgModule} from '@angular/core';
import {SessionDetailPage} from './session-detail';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: SessionDetailPage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionDetailPageRoutingModule {};
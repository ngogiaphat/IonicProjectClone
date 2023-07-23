import {SupportPage} from './support';
import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: SupportPage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPageRoutingModule {};
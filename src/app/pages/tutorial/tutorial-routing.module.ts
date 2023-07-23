import {NgModule} from '@angular/core';
import {TutorialPage} from './tutorial';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: TutorialPage
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialPageRoutingModule {};
import {AccountPage} from './account';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {AccountPageRoutingModule} from './account-routing.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [
    AccountPage,
  ]
})
export class AccountModule {};
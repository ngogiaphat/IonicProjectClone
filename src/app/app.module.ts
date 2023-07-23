import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {IonicStorageModule} from '@ionic/storage-angular';
import {ServiceWorkerModule} from '@angular/service-worker';
import {InAppBrowser} from '@awesome-cordova-plugins/in-app-browser/ngx';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [InAppBrowser],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}